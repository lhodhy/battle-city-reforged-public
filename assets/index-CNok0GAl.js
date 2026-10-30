(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const bl="186",_m={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_f=0,th=1,Mf=2,Sm=3,bm=0,Vr=1,yh=2,js=3,On=0,Jt=1,Xt=2,Gi=0,Bn=1,$t=2,ih=3,nh=4,Sf=5,wm=6,os=100,bf=101,wf=102,Tf=103,Af=104,Ef=200,Cf=201,Rf=202,Pf=203,_h=204,Mh=205,If=206,Lf=207,Df=208,Nf=209,Uf=210,Bf=211,Ff=212,Of=213,zf=214,Lo=0,Do=1,No=2,ir=3,Uo=4,Bo=5,Fo=6,Oo=7,va=0,kf=1,Vf=2,Wi=0,Sh=1,bh=2,wh=3,wl=4,Th=5,Ah=6,Eh=7,sh="attached",Hf="detached",Tl=300,rn=301,zn=302,Hr=303,Gr=304,ur=306,Xi=1e3,Mi=1001,ea=1002,Pt=1003,Ch=1004,Tm=1004,Qs=1005,Am=1005,bt=1006,Wr=1007,Em=1007,nn=1008,Cm=1008,yi=1009,Rh=1010,Ph=1011,nr=1012,Al=1013,Di=1014,fi=1015,jt=1016,El=1017,Cl=1018,sr=1020,Ih=35902,Lh=35899,Dh=1021,Nh=1022,Kt=1023,an=1026,Un=1027,Rl=1028,ya=1029,kn=1030,Pl=1031,Rm=1032,Il=1033,Xr=33776,qr=33777,Yr=33778,Zr=33779,zo=35840,ko=35841,Vo=35842,Ho=35843,Go=36196,Wo=37492,Xo=37496,qo=37488,Yo=37489,ta=37490,Zo=37491,Ko=37808,Jo=37809,jo=37810,Qo=37811,$o=37812,el=37813,tl=37814,il=37815,nl=37816,sl=37817,rl=37818,al=37819,ol=37820,ll=37821,cl=36492,hl=36494,ul=36495,dl=36283,fl=36284,ia=36285,pl=36286,Gf=2200,Wf=2201,Xf=2202,na=2300,ml=2301,Ao=2302,rh=2303,cs=2400,hs=2401,sa=2402,Ll=2500,Uh=2501,Pm=0,Im=1,Lm=2,qf=3200,Dm=3201,Nm=3202,Um=3203,_n=0,Yf=1,pn="",Yt="srgb",ra="srgb-linear",aa="linear",gt="srgb",Bm="",Fm="rg",Om="ga",zm=0,Eo=7680,km=7681,Vm=7682,Hm=7683,Gm=34055,Wm=34056,Xm=5386,qm=512,Ym=513,Zm=514,Km=515,Jm=516,jm=517,Qm=518,Zf=519,Kf=512,Jf=513,jf=514,Dl=515,Qf=516,$f=517,Nl=518,ep=519,Ul=35044,gl=35048,$m=35040,e0=35045,t0=35049,i0=35041,n0=35046,s0=35050,r0=35042,a0="100",ah="300 es",Ei=2e3,ps=2001,o0={COMPUTE:"compute",RENDER:"render"},l0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},c0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},h0={TEXTURE_COMPARE:"depthTextureCompare"},u0={NONE:0,SHARED:1,FULL:2};function d0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const f0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function $s(r,e){return new f0[r](e)}function tp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function oa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ip(){const r=oa("canvas");return r.style.display="block",r}const Eu={};let Vn=null;function p0(r){Vn=r}function m0(){return Vn}function la(...r){const e="THREE."+r.shift();Vn?Vn("log",e,...r):console.log(e,...r)}function np(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function fe(...r){r=np(r);const e="THREE."+r.shift();if(Vn)Vn("warn",e,...r);else{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ne(...r){r=np(r);const e="THREE."+r.shift();if(Vn)Vn("error",e,...r);else{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function xn(...r){const e=r.join(" ");e in Eu||(Eu[e]=!0,fe(...r))}function g0(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const x0={[Lo]:Do,[No]:Fo,[Uo]:Oo,[ir]:Bo,[Do]:Lo,[Fo]:No,[Oo]:Uo,[Bo]:ir};class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cu=1234567;const ds=Math.PI/180,rr=180/Math.PI;function Ci(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ni[r&255]+ni[r>>8&255]+ni[r>>16&255]+ni[r>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[t&63|128]+ni[t>>8&255]+"-"+ni[t>>16&255]+ni[t>>24&255]+ni[i&255]+ni[i>>8&255]+ni[i>>16&255]+ni[i>>24&255]).toLowerCase()}function Ge(r,e,t){return Math.max(e,Math.min(t,r))}function Bh(r,e){return(r%e+e)%e}function v0(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function y0(r,e,t){return r!==e?(t-r)/(e-r):0}function Kr(r,e,t){return(1-t)*r+t*e}function _0(r,e,t,i){return Kr(r,e,1-Math.exp(-t*i))}function M0(r,e=1){return e-Math.abs(Bh(r,e*2)-e)}function S0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function b0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function w0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function T0(r,e){return r+Math.random()*(e-r)}function A0(r){return r*(.5-Math.random())}function E0(r){r!==void 0&&(Cu=r);let e=Cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C0(r){return r*ds}function R0(r){return r*rr}function P0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function I0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function L0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function D0(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),f=s((i-e)/2),p=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*h,o*c);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function di(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fh={DEG2RAD:ds,RAD2DEG:rr,generateUUID:Ci,clamp:Ge,euclideanModulo:Bh,mapLinear:v0,inverseLerp:y0,lerp:Kr,damp:_0,pingpong:M0,smoothstep:S0,smootherstep:b0,randInt:w0,randFloat:T0,randFloatSpread:A0,seededRandom:E0,degToRad:C0,radToDeg:R0,isPowerOfTwo:P0,ceilPowerOfTwo:I0,floorPowerOfTwo:L0,setQuaternionFromProperEuler:D0,normalize:Qe,denormalize:di};class j{static{j.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],f=s[a+1],p=s[a+2],x=s[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),S=Math.sin(v);m=Math.sin(m*v)/S,o=Math.sin(o*v)/S,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-o*f,e[t+2]=c*p+h*f+o*u-l*d,e[t+3]=h*p-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),p=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{R.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cc.copy(this).projectOnVector(e),this.sub(cc)}reflect(e){return this.sub(cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cc=new R,Ru=new mi;class Ke{static{Ke.prototype.isMatrix3=!0}constructor(e,t,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],v=n[1],S=n[4],_=n[7],T=n[2],A=n[5],C=n[8];return s[0]=a*x+o*v+l*T,s[3]=a*g+o*S+l*A,s[6]=a*m+o*_+l*C,s[1]=c*x+h*v+d*T,s[4]=c*g+h*S+d*A,s[7]=c*m+h*_+d*C,s[2]=u*x+f*v+p*T,s[5]=u*g+f*S+p*A,s[8]=u*m+f*_+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,p=t*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(n*c-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=u*x,e[4]=(h*t-n*l)*x,e[5]=(n*s-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return xn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hc.makeScale(e,t)),this}rotate(e){return xn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return xn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new Ke,Pu=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N0(){const r={enabled:!0,workingColorSpace:ra,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(n.r=vn(n.r),n.g=vn(n.g),n.b=vn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pn?aa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return xn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return xn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ra]:{primaries:e,whitePoint:i,transfer:aa,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Pu,fromXYZ:Iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),r}const at=N0();function vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let As;class sp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=oa("canvas")),As.width=e.width,As.height=e.height;const n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=vn(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vn(t[i]/255)*255):t[i]=vn(t[i]);return{data:t,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U0=0;class gn{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(uc(n[a].image)):s.push(uc(n[a]))}else s=uc(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function uc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}class B0 extends gn{constructor(e=null){xn('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}}let F0=0;const dc=new R;class Et extends Yi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,i=Mi,n=Mi,s=bt,a=nn,o=Kt,l=yi,c=Et.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Ci(),this.name="",this.source=new gn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){fe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Tl;Et.DEFAULT_ANISOTROPY=1;class vt{static{vt.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,_=(f+1)/2,T=(m+1)/2,A=(h+u)/4,C=(d+x)/4,y=(p+g)/4;return S>_&&S>T?S<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(S),n=A/i,s=C/i):_>T?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=A/n,s=y/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=C/s,n=y/s),this.set(i,n,s,t),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oh extends Yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:i.depth},s=new Et(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new gn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ot extends Oh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bl extends Et{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O0 extends Ot{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Bl(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class Fl extends Et{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class z0 extends Ot{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Fl(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}}class qe{static{qe.prototype.isMatrix4=!0}constructor(e,t,i,n,s,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,d,u,f,p,x,g)}set(e,t,i,n,s,a,o,l,c,h,d,u,f,p,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,n=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u+x*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,p=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,p=o*h,x=o*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*l,f=a*c,p=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,V0)}lookAt(e,t,i){const n=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),An.crossVectors(i,wi),An.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),An.crossVectors(i,wi)),An.normalize(),Ea.crossVectors(wi,An),n[0]=An.x,n[4]=Ea.x,n[8]=wi.x,n[1]=An.y,n[5]=Ea.y,n[9]=wi.y,n[2]=An.z,n[6]=Ea.z,n[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],S=i[7],_=i[11],T=i[15],A=n[0],C=n[4],y=n[8],b=n[12],E=n[1],I=n[5],B=n[9],z=n[13],U=n[2],L=n[6],V=n[10],k=n[14],K=n[3],X=n[7],Q=n[11],$=n[15];return s[0]=a*A+o*E+l*U+c*K,s[4]=a*C+o*I+l*L+c*X,s[8]=a*y+o*B+l*V+c*Q,s[12]=a*b+o*z+l*k+c*$,s[1]=h*A+d*E+u*U+f*K,s[5]=h*C+d*I+u*L+f*X,s[9]=h*y+d*B+u*V+f*Q,s[13]=h*b+d*z+u*k+f*$,s[2]=p*A+x*E+g*U+m*K,s[6]=p*C+x*I+g*L+m*X,s[10]=p*y+x*B+g*V+m*Q,s[14]=p*b+x*z+g*k+m*$,s[3]=v*A+S*E+_*U+T*K,s[7]=v*C+S*I+_*L+T*X,s[11]=v*y+S*B+_*V+T*Q,s[15]=v*b+S*z+_*k+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15],v=l*f-c*u,S=o*f-c*d,_=o*u-l*d,T=a*f-c*h,A=a*u-l*h,C=a*d-o*h;return t*(x*v-g*S+m*_)-i*(p*v-g*T+m*A)+n*(p*S-x*T+m*C)-s*(p*_-x*A+g*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=t*o-i*a,S=t*l-n*a,_=t*c-s*a,T=i*l-n*o,A=i*c-s*o,C=n*c-s*l,y=h*x-d*p,b=h*g-u*p,E=h*m-f*p,I=d*g-u*x,B=d*m-f*x,z=u*m-f*g,U=v*z-S*B+_*I+T*E-A*b+C*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return e[0]=(o*z-l*B+c*I)*L,e[1]=(n*B-i*z-s*I)*L,e[2]=(x*C-g*A+m*T)*L,e[3]=(u*A-d*C-f*T)*L,e[4]=(l*E-a*z-c*b)*L,e[5]=(t*z-n*E+s*b)*L,e[6]=(g*_-p*C-m*S)*L,e[7]=(h*C-u*_+f*S)*L,e[8]=(a*B-o*E+c*y)*L,e[9]=(i*E-t*B-s*y)*L,e[10]=(p*A-x*_+m*v)*L,e[11]=(d*_-h*A-f*v)*L,e[12]=(o*b-a*I-l*y)*L,e[13]=(t*I-i*b+n*y)*L,e[14]=(x*S-p*T-g*v)*L,e[15]=(h*T-d*S+u*v)*L,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,p=s*d,x=a*h,g=a*d,m=o*d,v=l*c,S=l*h,_=l*d,T=i.x,A=i.y,C=i.z;return n[0]=(1-(x+m))*T,n[1]=(f+_)*T,n[2]=(p-S)*T,n[3]=0,n[4]=(f-_)*A,n[5]=(1-(u+m))*A,n[6]=(g+v)*A,n[7]=0,n[8]=(p+S)*C,n[9]=(g-v)*C,n[10]=(1-(u+x))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Es.set(n[0],n[1],n[2]).length();const o=Es.set(n[4],n[5],n[6]).length(),l=Es.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Bi.copy(this);const c=1/a,h=1/o,d=1/l;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=d,Bi.elements[9]*=d,Bi.elements[10]*=d,t.setFromRotationMatrix(Bi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,a,o=Ei,l=!1){const c=this.elements,h=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n);let p,x;if(l)p=s/(a-s),x=a*s/(a-s);else if(o===Ei)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ps)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Ei,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n);let p,x;if(l)p=1/(a-s),x=a/(a-s);else if(o===Ei)p=-2/(a-s),x=-(a+s)/(a-s);else if(o===ps)p=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Es=new R,Bi=new qe,k0=new R(0,0,0),V0=new R(1,1,1),An=new R,Ea=new R,wi=new R,Lu=new qe,Du=new mi;class qi{constructor(e=0,t=0,i=0,n=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H0=0;const Nu=new R,Cs=new mi,on=new qe,Ca=new R,yr=new R,G0=new R,W0=new mi,Uu=new R(1,0,0),Bu=new R(0,1,0),Fu=new R(0,0,1),Ou={type:"added"},X0={type:"removed"},Rs={type:"childadded",child:null},fc={type:"childremoved",child:null};class tt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tt.DEFAULT_UP.clone();const e=new R,t=new qi,i=new mi,n=new R(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ca.copy(e):Ca.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(yr,Ca,this.up):on.lookAt(Ca,yr,this.up),this.quaternion.setFromRotationMatrix(on),n&&(on.extractRotation(n.matrixWorld),Cs.setFromRotationMatrix(on),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ou),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0),fc.child=e,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ou),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tt.DEFAULT_UP=new R(0,1,0);tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Lt extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q0={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function pc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=at.workingColorSpace){if(e=Bh(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=pc(a,s,e+1/3),this.g=pc(a,s,e),this.b=pc(a,s,e-1/3)}return at.colorSpaceToWorking(this,n),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:fe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=rp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return at.workingToColorSpace(si.copy(this),e),Math.round(Ge(si.r*255,0,255))*65536+Math.round(Ge(si.g*255,0,255))*256+Math.round(Ge(si.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(si.copy(this),t);const i=si.r,n=si.g,s=si.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(si.copy(this),t),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=Yt){at.workingToColorSpace(si.copy(this),e);const t=si.r,i=si.g,n=si.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(Ra);const i=Kr(En.h,Ra.h,t),n=Kr(En.s,Ra.s,t),s=Kr(En.l,Ra.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const si=new se;se.NAMES=rp;class _a{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(e),this.density=t}clone(){return new _a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new se(e),this.near=t,this.far=i}clone(){return new zl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kl extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fi=new R,ln=new R,mc=new R,cn=new R,Ps=new R,Is=new R,zu=new R,gc=new R,xc=new R,vc=new R,yc=new vt,_c=new vt,Mc=new vt;class _i{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Fi.subVectors(e,t),n.cross(Fi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Fi.subVectors(n,t),ln.subVectors(i,t),mc.subVectors(e,t);const a=Fi.dot(Fi),o=Fi.dot(ln),l=Fi.dot(mc),c=ln.dot(ln),h=ln.dot(mc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return yc.setScalar(0),_c.setScalar(0),Mc.setScalar(0),yc.fromBufferAttribute(e,t),_c.fromBufferAttribute(e,i),Mc.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(yc,s.x),a.addScaledVector(_c,s.y),a.addScaledVector(Mc,s.z),a}static isFrontFacing(e,t,i,n){return Fi.subVectors(i,t),ln.subVectors(e,t),Fi.cross(ln).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Fi.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;Ps.subVectors(n,i),Is.subVectors(s,i),gc.subVectors(e,i);const l=Ps.dot(gc),c=Is.dot(gc);if(l<=0&&c<=0)return t.copy(i);xc.subVectors(e,n);const h=Ps.dot(xc),d=Is.dot(xc);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ps,a);vc.subVectors(e,s);const f=Ps.dot(vc),p=Is.dot(vc);if(p>=0&&f<=p)return t.copy(s);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Is,o);const g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return zu.subVectors(s,n),o=(d-h)/(d-h+(f-p)),t.copy(n).addScaledVector(zu,o);const m=1/(g+x+u);return a=x*m,o=u*m,t.copy(i).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Oi):Oi.fromBufferAttribute(s,a),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),Ia.subVectors(this.max,_r),Ls.subVectors(e.a,_r),Ds.subVectors(e.b,_r),Ns.subVectors(e.c,_r),Cn.subVectors(Ds,Ls),Rn.subVectors(Ns,Ds),Yn.subVectors(Ls,Ns);let t=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Yn.z,Yn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Yn.z,0,-Yn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Yn.y,Yn.x,0];return!Sc(t,Ls,Ds,Ns,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,Ls,Ds,Ns,Ia))?!1:(La.crossVectors(Cn,Rn),t=[La.x,La.y,La.z],Sc(t,Ls,Ds,Ns,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hn=[new R,new R,new R,new R,new R,new R,new R,new R],Oi=new R,Pa=new oi,Ls=new R,Ds=new R,Ns=new R,Cn=new R,Rn=new R,Yn=new R,_r=new R,Ia=new R,La=new R,Zn=new R;function Sc(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Zn.fromArray(r,s);const o=n.x*Math.abs(Zn.x)+n.y*Math.abs(Zn.y)+n.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),h=i.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const mn=Y0();function Y0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function vi(r){Math.abs(r)>65504&&fe("DataUtils.toHalfFloat(): Value out of range."),r=Ge(r,-65504,65504),mn.floatView[0]=r;const e=mn.uint32View[0],t=e>>23&511;return mn.baseTable[t]+((e&8388607)>>mn.shiftTable[t])}function Fr(r){const e=r>>10;return mn.uint32View[0]=mn.mantissaTable[mn.offsetTable[e]+(r&1023)]+mn.exponentTable[e],mn.floatView[0]}class Z0{static toHalfFloat(e){return vi(e)}static fromHalfFloat(e){return Fr(e)}}const Ft=new R,Da=new j;let K0=0;class Ze extends Yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ul,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class J0 extends Ze{constructor(e,t,i){super(new Int8Array(e),t,i)}}class j0 extends Ze{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class Q0 extends Ze{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class $0 extends Ze{constructor(e,t,i){super(new Int16Array(e),t,i)}}class zh extends Ze{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class eg extends Ze{constructor(e,t,i){super(new Int32Array(e),t,i)}}class kh extends Ze{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tg extends Ze{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Fr(this.array[e*this.itemSize]);return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=vi(t),this}getY(e){let t=Fr(this.array[e*this.itemSize+1]);return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=vi(t),this}getZ(e){let t=Fr(this.array[e*this.itemSize+2]);return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=vi(t),this}getW(e){let t=Fr(this.array[e*this.itemSize+3]);return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=vi(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=vi(t),this.array[e+1]=vi(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.array[e+0]=vi(t),this.array[e+1]=vi(i),this.array[e+2]=vi(n),this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=vi(t),this.array[e+1]=vi(i),this.array[e+2]=vi(n),this.array[e+3]=vi(s),this}}class Ae extends Ze{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ig=new oi,Mr=new R,bc=new R;class Qt{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ig.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Mr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(bc)),this.expandByPoint(Mr.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ng=0;const Ii=new qe,wc=new tt,Us=new R,Ti=new oi,Sr=new oi,Ht=new R;class Ve extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d0(e)?kh:zh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,i){return Ii.makeTranslation(e,t,i),this.applyMatrix4(Ii),this}scale(e,t,i){return Ii.makeScale(e,t,i),this.applyMatrix4(Ii),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Ti.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Ti.min,Sr.min),Ti.expandByPoint(Ht),Ht.addVectors(Ti.max,Sr.max),Ti.expandByPoint(Ht)):(Ti.expandByPoint(Sr.min),Ti.expandByPoint(Sr.max))}Ti.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(Us.fromBufferAttribute(e,c),Ht.add(Us)),n=Math.max(n,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ze(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new R,l[y]=new R;const c=new R,h=new R,d=new R,u=new j,f=new j,p=new j,x=new R,g=new R;function m(y,b,E){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,E),u.fromBufferAttribute(s,y),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[y].add(x),o[b].add(x),o[E].add(x),l[y].add(g),l[b].add(g),l[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,b=v.length;y<b;++y){const E=v[y],I=E.start,B=E.count;for(let z=I,U=I+B;z<U;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new R,_=new R,T=new R,A=new R;function C(y){T.fromBufferAttribute(n,y),A.copy(T);const b=o[y];S.copy(b),S.sub(T.multiplyScalar(T.dot(b))).normalize(),_.crossVectors(A,b);const I=_.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,I)}for(let y=0,b=v.length;y<b;++y){const E=v[y],I=E.start,B=E.count;for(let z=I,U=I+B;z<U;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ze(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const p=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);n.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Ze(u,h,d)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ve,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ul,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const hi=new R;class ms{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Ze(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ms(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Tc=new R,sg=new R,rg=new Ke;class fn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Tc.subVectors(i,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(Tc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rg.getNormalMatrix(e),n=this.coplanarPoint(Tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ag=0;class ei extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Bn,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=Mh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){fe(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new fn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new j().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new j().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hl extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const br=new R,Fs=new R,Os=new R,zs=new j,wr=new j,ap=new qe,Na=new R,Tr=new R,Ua=new R,ku=new j,Ac=new j,Vu=new j;class Vh extends tt{constructor(e=new Hl){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Ve;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Vl(t,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new ms(i,3,0,!1)),Bs.setAttribute("uv",new ms(i,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new j(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),ap.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Os.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;Ba(Na.set(-.5,-.5,0),Os,a,Fs,n,s),Ba(Tr.set(.5,-.5,0),Os,a,Fs,n,s),Ba(Ua.set(.5,.5,0),Os,a,Fs,n,s),ku.set(0,0),Ac.set(1,0),Vu.set(1,1);let o=e.ray.intersectTriangle(Na,Tr,Ua,!1,br);if(o===null&&(Ba(Tr.set(-.5,.5,0),Os,a,Fs,n,s),Ac.set(0,1),o=e.ray.intersectTriangle(Na,Ua,Tr,!1,br),o===null))return;const l=e.ray.origin.distanceTo(br);l<e.near||l>e.far||t.push({distance:l,point:br.clone(),uv:_i.getInterpolation(br,Na,Tr,Ua,ku,Ac,Vu,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ba(r,e,t,i,n,s){zs.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(wr.x=s*zs.x-n*zs.y,wr.y=n*zs.x+s*zs.y):wr.copy(zs),r.copy(e),r.x+=wr.x,r.y+=wr.y,r.applyMatrix4(ap)}const Fa=new R,Hu=new R;class op extends tt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let s;for(s=0;s<n.length&&!(t<n[s].distance);s++);return n.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Fa.setFromMatrixPosition(this.matrixWorld);const n=e.ray.origin.distanceTo(Fa);this.getObjectForDistance(n).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Fa.setFromMatrixPosition(e.matrixWorld),Hu.setFromMatrixPosition(this.matrixWorld);const i=Fa.distanceTo(Hu)/e.zoom;t[0].object.visible=!0;let n,s;for(n=1,s=t.length;n<s;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),i>=a)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<s;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];const i=this.levels;for(let n=0,s=i.length;n<s;n++){const a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const un=new R,Ec=new R,Oa=new R,za=new R;class dr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ec.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),za.copy(this.origin).sub(Ec);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=za.dot(this.direction),l=-za.dot(Oa),c=za.lengthSq(),h=Math.abs(1-a*a);let d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=s*h,d>=0)if(u>=-p)if(u<=p){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ec).addScaledVector(Oa,u),f}intersectSphere(e,t){if(e.radius<0)return null;un.subVectors(e.center,this.origin);const i=un.dot(this.direction),n=un.dot(un)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,n,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=i.x-a.x,v=i.y-a.y,S=i.z-a.z,_=Math.abs(l),T=Math.abs(c),A=Math.abs(h);let C,y,b,E,I,B,z,U,L,V,k,K;if(_>=T&&_>=A?(b=l,B=d,L=p,K=m,l>=0?(C=c,y=h,E=u,I=f,z=x,U=g,V=v,k=S):(C=h,y=c,E=f,I=u,z=g,U=x,V=S,k=v)):T>=A?(b=c,B=u,L=x,K=v,c>=0?(C=h,y=l,E=f,I=d,z=g,U=p,V=S,k=m):(C=l,y=h,E=d,I=f,z=p,U=g,V=m,k=S)):(b=h,B=f,L=g,K=S,h>=0?(C=l,y=c,E=d,I=u,z=p,U=x,V=m,k=v):(C=c,y=l,E=u,I=d,z=x,U=p,V=v,k=m)),b===0)return null;const X=C/b,Q=y/b,$=1/b,Re=E-X*B,we=I-Q*B,dt=z-X*L,nt=U-Q*L,lt=V-X*K,J=k-Q*K,ie=lt*nt-J*dt,_e=Re*J-we*lt,He=dt*we-nt*Re;if(n){if(ie<0||_e<0||He<0)return null}else if((ie<0||_e<0||He<0)&&(ie>0||_e>0||He>0))return null;const Te=ie+_e+He;if(Te===0)return null;const We=$*(ie*B+_e*L+He*K);return(Te>0?We<0:We>0)?null:this.at(We/Te,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gu=new qe,Kn=new dr,ka=new Qt,Wu=new R,Va=new R,Ha=new R,Ga=new R,Cc=new R,Wa=new R,Xu=new R,Xa=new R;class ae extends tt{constructor(e=new Ve,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Cc.fromBufferAttribute(d,e),a?Wa.addScaledVector(Cc,h):Wa.addScaledVector(Cc.sub(t),h))}t.add(Wa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),Kn.copy(e.ray).recast(e.near),!(ka.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(ka,Wu)===null||Kn.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Gu.copy(s).invert(),Kn.copy(e.ray).applyMatrix4(Gu),!(i.boundingBox!==null&&Kn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,T=S;_<T;_+=3){const A=o.getX(_),C=o.getX(_+1),y=o.getX(_+2);n=qa(this,m,e,i,c,h,d,A,C,y),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const v=o.getX(g),S=o.getX(g+1),_=o.getX(g+2);n=qa(this,a,e,i,c,h,d,v,S,_),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=v,T=S;_<T;_+=3){const A=_,C=_+1,y=_+2;n=qa(this,m,e,i,c,h,d,A,C,y),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){const v=g,S=g+1,_=g+2;n=qa(this,a,e,i,c,h,d,v,S,_),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function og(r,e,t,i,n,s,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===On,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:r}}function qa(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Va),r.getVertexPosition(l,Ha),r.getVertexPosition(c,Ga);const h=og(r,e,t,i,Va,Ha,Ga,Xu);if(h){const d=new R;_i.getBarycoord(Xu,Va,Ha,Ga,d),n&&(h.uv=_i.getInterpolatedAttribute(n,o,l,c,d,new j)),s&&(h.uv1=_i.getInterpolatedAttribute(s,o,l,c,d,new j)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};_i.getNormal(Va,Ha,Ga,u.normal),h.face=u,h.barycoord=d}return h}const Ar=new vt,qu=new vt,Yu=new vt,lg=new vt,Zu=new qe,Ya=new R,Rc=new Qt,Ku=new qe,Pc=new dr;class lp extends ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ya),this.boundingBox.expandByPoint(Ya)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ya),this.boundingSphere.expandByPoint(Ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rc.copy(this.boundingSphere),Rc.applyMatrix4(n),e.ray.intersectsSphere(Rc)!==!1&&(Ku.copy(n).invert(),Pc.copy(e.ray).applyMatrix4(Ku),!(this.boundingBox!==null&&Pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;qu.fromBufferAttribute(n.attributes.skinIndex,e),Yu.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Ar.copy(t),t.set(0,0,0,0)):(Ar.set(...t,1),t.set(0,0,0)),Ar.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Yu.getComponent(s);if(a!==0){const o=qu.getComponent(s);Zu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(lg.copy(Ar).applyMatrix4(Zu),a)}}return t.isVector4&&(t.w=Ar.w),t.applyMatrix4(this.bindMatrixInverse)}}class Hh extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Si extends Et{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Pt,h=Pt,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ju=new qe,cg=new qe;class Gl{constructor(e=[],t=[]){this.uuid=Ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:cg;Ju.multiplyMatrices(o,t[s]),Ju.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Gl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Si(t,e,e,Kt,fi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let a=t[s];a===void 0&&(fe("Skeleton: No bone found with UUID:",s),a=new Hh),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class ar extends Ze{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ks=new qe,ju=new qe,Za=[],Qu=new oi,hg=new qe,Er=new ae,Cr=new Qt;class Ai extends ae{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,hg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Qu.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(Qu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Cr.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),e.ray.intersectsSphere(Cr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ks),ju.multiplyMatrices(i,ks),Er.matrixWorld=ju,Er.raycast(e,Za);for(let a=0,o=Za.length;a<o;a++){const l=Za[a];l.instanceId=s,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Si(new Float32Array(n*this.count),n,this.count,Rl,fi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jn=new Qt,ug=new j(.5,.5),Ka=new R;class gs{constructor(e=new fn,t=new fn,i=new fn,n=new fn,s=new fn,a=new fn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei,i=!1){const n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],x=s[9],g=s[10],m=s[11],v=s[12],S=s[13],_=s[14],T=s[15];if(n[0].setComponents(c-a,f-h,m-p,T-v).normalize(),n[1].setComponents(c+a,f+h,m+p,T+v).normalize(),n[2].setComponents(c+o,f+d,m+x,T+S).normalize(),n[3].setComponents(c-o,f-d,m-x,T-S).normalize(),i)n[4].setComponents(l,u,g,_).normalize(),n[5].setComponents(c-l,f-u,m-g,T-_).normalize();else if(n[4].setComponents(c-l,f-u,m-g,T-_).normalize(),t===Ei)n[5].setComponents(c+l,f+u,m+g,T+_).normalize();else if(t===ps)n[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){Jn.center.set(0,0,0);const t=ug.distanceTo(e.center);return Jn.radius=.7071067811865476+t,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ka.x=n.normal.x>0?e.max.x:e.min.x,Ka.y=n.normal.y>0?e.max.y:e.min.y,Ka.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const $u=new qe;class Wl{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){const s=t[n];$u.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new gs),i[n].setFromProjectionMatrix($u,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new gs),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new Wl().copy(this)}}function Ic(r,e){return r-e}function dg(r,e){return r.z-e.z}function fg(r,e){return e.z-r.z}class pg{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){const s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}}const xi=new qe,mg=new se(1,1,1),gg=new gs,xg=new Wl,Ja=new oi,jn=new Qt,Rr=new R,ed=new R,vg=new R,Lc=new pg,ri=new ae,ja=[];function yg(r,e,t=0){const i=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const n=r.count;for(let s=0;s<n;s++)for(let a=0;a<i;a++)e.setComponent(s+t,a,r.getComponent(s,a))}else e.array.set(r.array,t*i);e.needsUpdate=!0}function Qn(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++)e[i]=r[i]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class cp extends ae{constructor(e,t,i=t*2,n){super(new Ve,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new Si(t,e,e,Kt,fi);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new Si(t,e,e,ya,Di);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new Si(t,e,e,Kt,fi);i.colorSpace=at.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const a=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(i*l),d=new Ze(h,l,c);t.setAttribute(s,d)}if(e.getIndex()!==null){const s=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new Ze(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=e.getAttribute(i),s=t.getAttribute(i);if(n.itemSize!==s.itemSize||n.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const s=t[i].geometryIndex;this.getMatrixAt(i,xi),this.getBoundingBoxAt(s,Ja).applyMatrix4(xi),e.union(Ja)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const s=t[i].geometryIndex;this.getMatrixAt(i,xi),this.getBoundingSphereAt(s,jn).applyMatrix4(xi),e.union(jn)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const i={visible:!0,active:!0,geometryIndex:e};let n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ic),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=i):(n=this._instanceInfo.length,this._instanceInfo.push(i));const s=this._matricesTexture;xi.identity().toArray(s.image.data,n*16),s.needsUpdate=!0;const a=this._colorsTexture;return a&&(mg.toArray(a.image.data,n*4),a.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?a.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ic),l=this._availableGeometryIds.shift(),s[l]=n):(l=this._geometryCount,this._geometryCount++,s.push(n)),this.setGeometryAt(l,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,n=i.getIndex()!==null,s=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(n&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in i.attributes){const d=t.getAttribute(h),u=i.getAttribute(h);yg(d,u,l);const f=d.itemSize;for(let p=d.count,x=c;p<x;p++){const g=l+p;for(let m=0;m<f;m++)u.setComponent(g,m,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(n){const h=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let u=0;u<a.count;u++)s.setX(h+u,l+a.getX(u));for(let u=a.count,f=d;u<f;u++)s.setX(h+u,l);s.needsUpdate=!0,s.addUpdateRange(h,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let n=0,s=i.length;n<s;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,n=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),s=this.geometry;for(let a=0,o=i.length;a<o;a++){const l=n[a],c=i[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=s.index,p=f.array,x=e-d;for(let g=h;g<h+u;g++)p[g]=p[g]+x;f.array.copyWithin(t,h,h+u),f.addUpdateRange(t,u),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:d}=c,u=s.attributes;for(const f in u){const p=u[f],{array:x,itemSize:g}=p;x.copyWithin(e*g,h*g,(h+d)*g),p.addUpdateRange(e*g,d*g),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){const s=new oi,a=i.index,o=i.attributes.position;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;a&&(h=a.getX(h)),s.expandByPoint(Rr.fromBufferAttribute(o,h))}n.boundingBox=s}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){const s=new Qt;this.getBoundingBoxAt(e,Ja),Ja.getCenter(s.center);const a=i.index,o=i.attributes.position;let l=0;for(let c=n.start,h=n.start+n.count;c<h;c++){let d=c;a&&(d=a.getX(d)),Rr.fromBufferAttribute(o,d),l=Math.max(l,s.center.distanceToSquared(Rr))}s.radius=Math.sqrt(l),n.boundingSphere=s}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Ic);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const n=new Int32Array(e),s=new Int32Array(e);Qn(this._multiDrawCounts,n),Qn(this._multiDrawStarts,s),this._multiDrawCounts=n,this._multiDrawStarts=s,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Qn(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Qn(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Qn(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ve,this._initializeGeometry(s));const a=this.geometry;s.index&&Qn(s.index.array,a.index.array);for(const o in s.attributes)Qn(s.attributes[o].array,a.attributes[o].array)}raycast(e,t){const i=this._instanceInfo,n=this._geometryInfo,s=this.matrixWorld,a=this.geometry;ri.material=this.material,ri.geometry.index=a.index,ri.geometry.attributes=a.attributes,ri.geometry.boundingBox===null&&(ri.geometry.boundingBox=new oi),ri.geometry.boundingSphere===null&&(ri.geometry.boundingSphere=new Qt);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,h=n[c];ri.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,ri.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,ri.geometry.boundingBox),this.getBoundingSphereAt(c,ri.geometry.boundingSphere),ri.raycast(e,ja);for(let d=0,u=ja.length;d<u;d++){const f=ja[d];f.object=this,f.batchId=o,t.push(f)}ja.length=0}ri.material=null,ri.geometry.index=null,ri.geometry.attributes={},ri.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,n,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=n.getIndex();let o=a===null?1:a.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,o=n.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,x=p.image.data,g=i.isArrayCamera?xg:gg;f&&(i.isArrayCamera?g.setFromArrayCamera(i):(xi.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),g.setFromProjectionMatrix(xi,i.coordinateSystem,i.reversedDepth)));let m=0;if(this.sortObjects){xi.copy(this.matrixWorld).invert(),Rr.setFromMatrixPosition(i.matrixWorld).applyMatrix4(xi),ed.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(xi);for(let _=0,T=c.length;_<T;_++)if(c[_].visible&&c[_].active){const A=c[_].geometryIndex;this.getMatrixAt(_,xi),this.getBoundingSphereAt(A,jn).applyMatrix4(xi);let C=!1;if(f&&(C=!g.intersectsSphere(jn)),!C){const y=u[A],b=vg.subVectors(jn.center,Rr).dot(ed);Lc.push(y.start,y.count,b,_)}}const v=Lc.list,S=this.customSort;S===null?v.sort(s.transparent?fg:dg):S.call(this,v,i);for(let _=0,T=v.length;_<T;_++){const A=v[_];h[m]=A.start*o*l,d[m]=A.count*l,x[m]=A.index,m++}Lc.reset()}else for(let v=0,S=c.length;v<S;v++)if(c[v].visible&&c[v].active){const _=c[v].geometryIndex;let T=!1;if(f&&(this.getMatrixAt(v,xi),this.getBoundingSphereAt(_,jn).applyMatrix4(xi),T=!g.intersectsSphere(jn)),!T){const A=u[_];h[m]=A.start*o*l,d[m]=A.count*l,x[m]=v,m++}}p.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,s,a){this.onBeforeRender(e,null,n,s,a)}}class gi extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xl=new R,vl=new R,td=new qe,Pr=new dr,Qa=new Qt,Dc=new R,id=new R;class Hn extends tt{constructor(e=new Ve,t=new gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)xl.fromBufferAttribute(t,n-1),vl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=xl.distanceTo(vl);e.setAttribute("lineDistance",new Ae(i,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(n),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;td.copy(n).invert(),Pr.copy(e.ray).applyMatrix4(td);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){const m=h.getX(x),v=h.getX(x+1),S=$a(this,e,Pr,l,m,v,x);S&&t.push(S)}if(this.isLineLoop){const x=h.getX(p-1),g=h.getX(f),m=$a(this,e,Pr,l,x,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,g=p-1;x<g;x+=c){const m=$a(this,e,Pr,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=$a(this,e,Pr,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $a(r,e,t,i,n,s,a){const o=r.geometry.attributes.position;if(xl.fromBufferAttribute(o,n),vl.fromBufferAttribute(o,s),t.distanceSqToSegment(xl,vl,Dc,id)>i)return;Dc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Dc);if(!(c<e.near||c>e.far))return{distance:c,point:id.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const nd=new R,sd=new R;class Zi extends Hn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)nd.fromBufferAttribute(t,n),sd.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+nd.distanceTo(sd);e.setAttribute("lineDistance",new Ae(i,1))}else fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hp extends Hn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ca extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rd=new qe,oh=new dr,eo=new Qt,to=new R;class xs extends tt{constructor(e=new Ve,t=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(n),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;rd.copy(n).invert(),oh.copy(e.ray).applyMatrix4(rd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){const g=c.getX(p);to.fromBufferAttribute(d,g),ad(to,g,l,n,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)to.fromBufferAttribute(d,p),ad(to,p,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ad(r,e,t,i,n,s,a){const o=oh.distanceSqToPoint(r);if(o<t){const l=new R;oh.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class up extends Et{constructor(e,t,i,n,s=bt,a=bt,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class _g extends up{constructor(e,t,i,n,s,a,o,l){super({},e,t,i,n,s,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class Mg extends Et{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Xl extends Et{constructor(e,t,i,n,s,a,o,l,c,h,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Sg extends Xl{constructor(e,t,i,n,s,a){super(e,t,i,s,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=Mi,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bg extends Xl{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,rn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Ma extends Et{constructor(e=[],t=rn,i,n,s,a,o,l,c,h){super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gh extends Et{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wg extends Et{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=e?e.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}}class or extends Et{constructor(e,t,i=Di,n,s,a,o=Pt,l=Pt,c,h=an,d=1){if(h!==an&&h!==Un)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class dp extends or{constructor(e,t=Di,i=rn,n,s,a=Pt,o=Pt,l,c=an){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wh extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ut extends Ve{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,i,t,e,a,s,0),p("z","y","x",1,-1,i,t,-e,a,s,1),p("x","z","y",1,1,e,i,t,n,a,2),p("x","z","y",1,-1,e,i,-t,n,a,3),p("x","y","z",1,-1,e,t,i,n,s,4),p("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(d,2));function p(x,g,m,v,S,_,T,A,C,y,b){const E=_/C,I=T/y,B=_/2,z=T/2,U=A/2,L=C+1,V=y+1;let k=0,K=0;const X=new R;for(let Q=0;Q<V;Q++){const $=Q*I-z;for(let Re=0;Re<L;Re++){const we=Re*E-B;X[x]=we*v,X[g]=$*S,X[m]=U,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[m]=A>0?1:-1,h.push(X.x,X.y,X.z),d.push(Re/C),d.push(1-Q/y),k+=1}}for(let Q=0;Q<y;Q++)for(let $=0;$<C;$++){const Re=u+$+L*Q,we=u+$+L*(Q+1),dt=u+($+1)+L*(Q+1),nt=u+($+1)+L*Q;l.push(Re,we,nt),l.push(we,dt,nt),K+=6}o.addGroup(f,K,b),f+=K,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sa extends Ve{constructor(e=1,t=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=i*2+s,x=n+1,g=new R,m=new R;for(let v=0;v<=p;v++){let S=0,_=0,T=0,A=0;if(v<=i){const b=v/i,E=b*Math.PI/2;_=-h-e*Math.cos(E),T=e*Math.sin(E),A=-e*Math.cos(E),S=b*d}else if(v<=i+s){const b=(v-i)/s;_=-h+b*t,T=e,A=0,S=d+b*u}else{const b=(v-i-s)/i,E=b*Math.PI/2;_=h+e*Math.sin(E),T=e*Math.cos(E),A=e*Math.sin(E),S=d+u+b*d}const C=Math.max(0,Math.min(1,S/f));let y=0;v===0?y=.5/n:v===p&&(y=-.5/n);for(let b=0;b<=n;b++){const E=b/n,I=E*Math.PI*2,B=Math.sin(I),z=Math.cos(I);m.x=-T*z,m.y=_,m.z=T*B,o.push(m.x,m.y,m.z),g.set(-T*z,A,T*B),g.normalize(),l.push(g.x,g.y,g.z),c.push(E+y,C)}if(v>0){const b=(v-1)*x;for(let E=0;E<n;E++){const I=b+E,B=b+E+1,z=v*x+E,U=v*x+E+1;a.push(I,B,z),a.push(B,U,z)}}}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ba extends Ve{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new R,h=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("normal",new Ae(o,3)),this.setAttribute("uv",new Ae(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class At extends Ve{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],f=[];let p=0;const x=[],g=i/2;let m=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(f,2));function v(){const _=new R,T=new R;let A=0;const C=(t-e)/i;for(let y=0;y<=s;y++){const b=[],E=y/s,I=E*(t-e)+e;for(let B=0;B<=n;B++){const z=B/n,U=z*l+o,L=Math.sin(U),V=Math.cos(U);T.x=I*L,T.y=-E*i+g,T.z=I*V,d.push(T.x,T.y,T.z),_.set(L,C,V).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-E),b.push(p++)}x.push(b)}for(let y=0;y<n;y++)for(let b=0;b<s;b++){const E=x[b][y],I=x[b+1][y],B=x[b+1][y+1],z=x[b][y+1];(e>0||b!==0)&&(h.push(E,I,z),A+=3),(t>0||b!==s-1)&&(h.push(I,B,z),A+=3)}c.addGroup(m,A,0),m+=A}function S(_){const T=p,A=new j,C=new R;let y=0;const b=_===!0?e:t,E=_===!0?1:-1;for(let B=1;B<=n;B++)d.push(0,g*E,0),u.push(0,E,0),f.push(.5,.5),p++;const I=p;for(let B=0;B<=n;B++){const U=B/n*l+o,L=Math.cos(U),V=Math.sin(U);C.x=b*V,C.y=g*E,C.z=b*L,d.push(C.x,C.y,C.z),u.push(0,E,0),A.x=L*.5+.5,A.y=V*.5*E+.5,f.push(A.x,A.y),p++}for(let B=0;B<n;B++){const z=T+B,U=I+B;_===!0?h.push(U,U+1,z):h.push(U+1,U,z),y+=3}c.addGroup(m,y,_===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _s extends At{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new _s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wn extends Ve{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const S=new R,_=new R,T=new R;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],_),f(t[A+2],T),l(S,_,T,v)}function l(v,S,_,T){const A=T+1,C=[];for(let y=0;y<=A;y++){C[y]=[];const b=v.clone().lerp(_,y/A),E=S.clone().lerp(_,y/A),I=A-y;for(let B=0;B<=I;B++)B===0&&y===A?C[y][B]=b:C[y][B]=b.clone().lerp(E,B/I)}for(let y=0;y<A;y++)for(let b=0;b<2*(A-y)-1;b++){const E=Math.floor(b/2);b%2===0?(u(C[y][E+1]),u(C[y+1][E]),u(C[y][E])):(u(C[y][E+1]),u(C[y+1][E+1]),u(C[y+1][E]))}}function c(v){const S=new R;for(let _=0;_<s.length;_+=3)S.x=s[_+0],S.y=s[_+1],S.z=s[_+2],S.normalize().multiplyScalar(v),s[_+0]=S.x,s[_+1]=S.y,s[_+2]=S.z}function h(){const v=new R;for(let S=0;S<s.length;S+=3){v.x=s[S+0],v.y=s[S+1],v.z=s[S+2];const _=g(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;a.push(_,1-T)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){const S=a[v+0],_=a[v+2],T=a[v+4],A=Math.max(S,_,T),C=Math.min(S,_,T);A>.9&&C<.1&&(S<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function u(v){s.push(v.x,v.y,v.z)}function f(v,S){const _=v*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function p(){const v=new R,S=new R,_=new R,T=new R,A=new j,C=new j,y=new j;for(let b=0,E=0;b<s.length;b+=9,E+=6){v.set(s[b+0],s[b+1],s[b+2]),S.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),A.set(a[E+0],a[E+1]),C.set(a[E+2],a[E+3]),y.set(a[E+4],a[E+5]),T.copy(v).add(S).add(_).divideScalar(3);const I=g(T);x(A,E+0,v,I),x(C,E+2,S,I),x(y,E+4,_,I)}}function x(v,S,_,T){T<0&&v.x===1&&(a[S]=v.x-1),_.x===0&&_.z===0&&(a[S]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.vertices,e.indices,e.radius,e.detail)}}class ql extends Wn{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ql(e.radius,e.detail)}}const io=new R,no=new R,Nc=new R,so=new _i;class fp extends Ve{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),s=Math.cos(ds*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:g,c:m}=so;if(x.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),so.getNormal(Nc),d[0]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,d[1]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,d[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const S=(v+1)%3,_=d[v],T=d[S],A=so[h[v]],C=so[h[S]],y=`${_}_${T}`,b=`${T}_${_}`;b in u&&u[b]?(Nc.dot(u[b].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(C.x,C.y,C.z)),u[b]=null):y in u||(u[y]={index0:c[v],index1:c[S],normal:Nc.clone()})}}for(const p in u)if(u[p]){const{index0:x,index1:g}=u[p];io.fromBufferAttribute(o,x),no.fromBufferAttribute(o,g),f.push(io.x,io.y,io.z),f.push(no.x,no.y,no.z)}this.setAttribute("position",new Ae(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],u=i[n+1]-h,f=(a-h)/u;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new j:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new R,n=[],s=[],a=[],o=new R,l=new qe;for(let f=0;f<=e;f++){const p=f/e;n[f]=this.getTangentAt(p,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Ge(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(Ge(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yl extends Ki{constructor(e=0,t=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new j){const i=t,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pp extends Yl{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Xh(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,n(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+i*o}}}const od=new R,ld=new R,Uc=new Xh,Bc=new Xh,Fc=new Xh;class mp extends Ki{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new R){const i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(ld.subVectors(n[0],n[1]).add(n[0]),c=ld);const d=n[o%s],u=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(od.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=od),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Uc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),Bc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),Fc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Uc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Bc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Fc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Uc.calc(l),Bc.calc(l),Fc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function cd(r,e,t,i,n){const s=(i-e)*.5,a=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*r+t}function Tg(r,e){const t=1-r;return t*t*e}function Ag(r,e){return 2*(1-r)*r*e}function Eg(r,e){return r*r*e}function Jr(r,e,t,i){return Tg(r,e)+Ag(r,t)+Eg(r,i)}function Cg(r,e){const t=1-r;return t*t*t*e}function Rg(r,e){const t=1-r;return 3*t*t*r*e}function Pg(r,e){return 3*(1-r)*r*r*e}function Ig(r,e){return r*r*r*e}function jr(r,e,t,i,n){return Cg(r,e)+Rg(r,t)+Pg(r,i)+Ig(r,n)}class qh extends Ki{constructor(e=new j,t=new j,i=new j,n=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new j){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(jr(e,n.x,s.x,a.x,o.x),jr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gp extends Ki{constructor(e=new R,t=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new R){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(jr(e,n.x,s.x,a.x,o.x),jr(e,n.y,s.y,a.y,o.y),jr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yh extends Ki{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xp extends Ki{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zh extends Ki{constructor(e=new j,t=new j,i=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new j){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Jr(e,n.x,s.x,a.x),Jr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kh extends Ki{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Jr(e,n.x,s.x,a.x),Jr(e,n.y,s.y,a.y),Jr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends Ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){const i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(cd(o,l.x,c.x,h.x,d.x),cd(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new j().fromArray(n))}return this}}var yl=Object.freeze({__proto__:null,ArcCurve:pp,CatmullRomCurve3:mp,CubicBezierCurve:qh,CubicBezierCurve3:gp,EllipseCurve:Yl,LineCurve:Yh,LineCurve3:xp,QuadraticBezierCurve:Zh,QuadraticBezierCurve3:Kh,SplineCurve:Jh});class vp extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new yl[n.type]().fromJSON(n))}return this}}class ha extends vp{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Yh(this.currentPoint.clone(),new j(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new Zh(this.currentPoint.clone(),new j(e,t),new j(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){const o=new qh(this.currentPoint.clone(),new j(e,t),new j(i,n),new j(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Jh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){const c=new Yl(e,t,i,n,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ms extends ha{constructor(e){super(e),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new ha().fromJSON(n))}return this}}function Lg(r,e,t=2){const i=e&&e.length,n=i?e[0]*t:r.length;let s=yp(r,0,n,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=Fg(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,d=l;for(let u=t;u<n;u+=t){const f=r[u],p=r[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ua(s,a,t,o,l,c,0),a}function yp(r,e,t,i,n){let s;if(n===Zg(r,e,t,i)>0)for(let a=e;a<t;a+=i)s=hd(a/i|0,r[a],r[a+1],s);else for(let a=t-i;a>=e;a-=i)s=hd(a/i|0,r[a],r[a+1],s);return s&&lr(s,s.next)&&(fa(s),s=s.next),s}function vs(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(lr(t,t.next)||Rt(t.prev,t,t.next)===0)){if(fa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ua(r,e,t,i,n,s,a){if(!r)return;!a&&s&&Hg(r,i,n,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Ng(r,i,n,s):Dg(r)){e.push(l.i,r.i,c.i),fa(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Ug(vs(r),e),ua(r,e,t,i,n,s,2)):a===2&&Bg(r,e,t,i,n,s):ua(vs(r),e,t,i,n,s,1);break}}}function Dg(r){const e=r.prev,t=r,i=r.next;if(Rt(e,t,i)>=0)return!1;const n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(n,s,a),d=Math.min(o,l,c),u=Math.max(n,s,a),f=Math.max(o,l,c);let p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Or(n,o,s,l,a,c,p.x,p.y)&&Rt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ng(r,e,t,i){const n=r.prev,s=r,a=r.next;if(Rt(n,s,a)>=0)return!1;const o=n.x,l=s.x,c=a.x,h=n.y,d=s.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),g=Math.max(h,d,u),m=lh(f,p,e,t,i),v=lh(x,g,e,t,i);let S=r.prevZ,_=r.nextZ;for(;S&&S.z>=m&&_&&_.z<=v;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==n&&S!==a&&Or(o,h,l,d,c,u,S.x,S.y)&&Rt(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==n&&_!==a&&Or(o,h,l,d,c,u,_.x,_.y)&&Rt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==n&&S!==a&&Or(o,h,l,d,c,u,S.x,S.y)&&Rt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==n&&_!==a&&Or(o,h,l,d,c,u,_.x,_.y)&&Rt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ug(r,e){let t=r;do{const i=t.prev,n=t.next.next;!lr(i,n)&&Mp(i,t,t.next,n)&&da(i,n)&&da(n,i)&&(e.push(i.i,t.i,n.i),fa(t),fa(t.next),t=r=n),t=t.next}while(t!==r);return vs(t)}function Bg(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xg(a,o)){let l=Sp(a,o);a=vs(a,a.next),l=vs(l,l.next),ua(a,e,t,i,n,s,0),ua(l,e,t,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Fg(r,e,t,i){const n=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:r.length,c=yp(r,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Wg(c))}n.sort(Og);for(let s=0;s<n.length;s++)t=zg(n[s],t);return t}function Og(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function zg(r,e){const t=kg(r,e);if(!t)return e;const i=Sp(t,r);return vs(i,i.next),vs(t,t.next)}function kg(r,e){let t=e;const i=r.x,n=r.y;let s=-1/0,a;if(lr(r,t))return t;do{if(lr(r,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const d=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&_p(n<c?i:s,n,l,c,n<c?s:i,n,t.x,t.y)){const d=Math.abs(n-t.y)/(i-t.x);da(t,r)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Vg(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Vg(r,e){return Rt(r.prev,r,e.prev)<0&&Rt(e.next,r,r.next)<0}function Hg(r,e,t,i){let n=r;do n.z===0&&(n.z=lh(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Gg(n)}function Gg(r){let e,t=1;do{let i=r,n;r=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=a}s.nextZ=null,t*=2}while(e>1);return r}function lh(r,e,t,i,n){return r=(r-t)*n|0,e=(e-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Wg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function _p(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Or(r,e,t,i,n,s,a,o){return!(r===a&&e===o)&&_p(r,e,t,i,n,s,a,o)}function Xg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!qg(r,e)&&(da(r,e)&&da(e,r)&&Yg(r,e)&&(Rt(r.prev,r,e.prev)||Rt(r,e.prev,e))||lr(r,e)&&Rt(r.prev,r,r.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function lr(r,e){return r.x===e.x&&r.y===e.y}function Mp(r,e,t,i){const n=ao(Rt(r,e,t)),s=ao(Rt(r,e,i)),a=ao(Rt(t,i,r)),o=ao(Rt(t,i,e));return!!(n!==s&&a!==o||n===0&&ro(r,t,e)||s===0&&ro(r,i,e)||a===0&&ro(t,r,i)||o===0&&ro(t,e,i))}function ro(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ao(r){return r>0?1:r<0?-1:0}function qg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Mp(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function da(r,e){return Rt(r.prev,r,r.next)<0?Rt(r,e,r.next)>=0&&Rt(r,r.prev,e)>=0:Rt(r,e,r.prev)<0||Rt(r,r.next,e)<0}function Yg(r,e){let t=r,i=!1;const n=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&n<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function Sp(r,e){const t=ch(r.i,r.x,r.y),i=ch(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function hd(r,e,t,i){const n=ch(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function fa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ch(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zg(r,e,t,i){let n=0;for(let s=e,a=t-i;s<t;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}class Kg{static triangulate(e,t,i=2){return Lg(e,t,i)}}class Hi{static area(e){const t=e.length;let i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return i*.5}static isClockWise(e){return Hi.area(e)<0}static triangulateShape(e,t){const i=[],n=[],s=[];ud(e),dd(i,e);let a=e.length;t.forEach(ud);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,dd(i,t[l]);const o=Kg.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ud(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function dd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class fr extends Ve{constructor(e=new Ms([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ae(n,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Jg;let S,_=!1,T,A,C,y;if(m){S=m.getSpacedPoints(h),_=!0,u=!1;const ne=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,ne),A=new R,C=new R,y=new R}u||(g=0,f=0,p=0,x=0);const b=o.extractPoints(c);let E=b.shape;const I=b.holes;if(!Hi.isClockWise(E)){E=E.reverse();for(let ne=0,oe=I.length;ne<oe;ne++){const le=I[ne];Hi.isClockWise(le)&&(I[ne]=le.reverse())}}function z(ne){const le=10000000000000001e-36;let ce=ne[0];for(let de=1;de<=ne.length;de++){const ze=de%ne.length,Oe=ne[ze],Xe=Oe.x-ce.x,Je=Oe.y-ce.y,D=Xe*Xe+Je*Je,ft=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(ce.x),Math.abs(ce.y)),st=le*ft*ft;if(D<=st){ne.splice(ze,1),de--;continue}ce=Oe}}z(E),I.forEach(z);const U=I.length,L=E;for(let ne=0;ne<U;ne++){const oe=I[ne];E=E.concat(oe)}function V(ne,oe,le){return oe||Ne("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(oe,le)}const k=E.length;function K(ne,oe,le){let ce,de,ze;const Oe=ne.x-oe.x,Xe=ne.y-oe.y,Je=le.x-ne.x,D=le.y-ne.y,ft=Oe*Oe+Xe*Xe,st=Oe*D-Xe*Je;if(Math.abs(st)>Number.EPSILON){const P=Math.sqrt(ft),M=Math.sqrt(Je*Je+D*D),O=oe.x-Xe/P,W=oe.y+Oe/P,Y=le.x-D/M,he=le.y+Je/M,ue=((Y-O)*D-(he-W)*Je)/(Oe*D-Xe*Je);ce=O+Oe*ue-ne.x,de=W+Xe*ue-ne.y;const Z=ce*ce+de*de;if(Z<=2)return new j(ce,de);ze=Math.sqrt(Z/2)}else{let P=!1;Oe>Number.EPSILON?Je>Number.EPSILON&&(P=!0):Oe<-Number.EPSILON?Je<-Number.EPSILON&&(P=!0):Math.sign(Xe)===Math.sign(D)&&(P=!0),P?(ce=-Xe,de=Oe,ze=Math.sqrt(ft)):(ce=Oe,de=Xe,ze=Math.sqrt(ft/2))}return new j(ce/ze,de/ze)}const X=[];for(let ne=0,oe=L.length,le=oe-1,ce=ne+1;ne<oe;ne++,le++,ce++)le===oe&&(le=0),ce===oe&&(ce=0),X[ne]=K(L[ne],L[le],L[ce]);const Q=[];let $,Re=X.concat();for(let ne=0,oe=U;ne<oe;ne++){const le=I[ne];$=[];for(let ce=0,de=le.length,ze=de-1,Oe=ce+1;ce<de;ce++,ze++,Oe++)ze===de&&(ze=0),Oe===de&&(Oe=0),$[ce]=K(le[ce],le[ze],le[Oe]);Q.push($),Re=Re.concat($)}let we;if(g===0)we=Hi.triangulateShape(L,I);else{const ne=[],oe=[];for(let le=0;le<g;le++){const ce=le/g,de=f*Math.cos(ce*Math.PI/2),ze=p*Math.sin(ce*Math.PI/2)+x;for(let Oe=0,Xe=L.length;Oe<Xe;Oe++){const Je=V(L[Oe],X[Oe],ze);_e(Je.x,Je.y,-de),ce===0&&ne.push(Je)}for(let Oe=0,Xe=U;Oe<Xe;Oe++){const Je=I[Oe];$=Q[Oe];const D=[];for(let ft=0,st=Je.length;ft<st;ft++){const P=V(Je[ft],$[ft],ze);_e(P.x,P.y,-de),ce===0&&D.push(P)}ce===0&&oe.push(D)}}we=Hi.triangulateShape(ne,oe)}const dt=we.length,nt=p+x;for(let ne=0;ne<k;ne++){const oe=u?V(E[ne],Re[ne],nt):E[ne];_?(C.copy(T.normals[0]).multiplyScalar(oe.x),A.copy(T.binormals[0]).multiplyScalar(oe.y),y.copy(S[0]).add(C).add(A),_e(y.x,y.y,y.z)):_e(oe.x,oe.y,0)}for(let ne=1;ne<=h;ne++)for(let oe=0;oe<k;oe++){const le=u?V(E[oe],Re[oe],nt):E[oe];_?(C.copy(T.normals[ne]).multiplyScalar(le.x),A.copy(T.binormals[ne]).multiplyScalar(le.y),y.copy(S[ne]).add(C).add(A),_e(y.x,y.y,y.z)):_e(le.x,le.y,d/h*ne)}for(let ne=g-1;ne>=0;ne--){const oe=ne/g,le=f*Math.cos(oe*Math.PI/2),ce=p*Math.sin(oe*Math.PI/2)+x;for(let de=0,ze=L.length;de<ze;de++){const Oe=V(L[de],X[de],ce);_e(Oe.x,Oe.y,d+le)}for(let de=0,ze=I.length;de<ze;de++){const Oe=I[de];$=Q[de];for(let Xe=0,Je=Oe.length;Xe<Je;Xe++){const D=V(Oe[Xe],$[Xe],ce);_?_e(D.x,D.y+S[h-1].y,S[h-1].x+le):_e(D.x,D.y,d+le)}}}lt(),J();function lt(){const ne=n.length/3;if(u){let oe=0,le=k*oe;for(let ce=0;ce<dt;ce++){const de=we[ce];He(de[2]+le,de[1]+le,de[0]+le)}oe=h+g*2,le=k*oe;for(let ce=0;ce<dt;ce++){const de=we[ce];He(de[0]+le,de[1]+le,de[2]+le)}}else{for(let oe=0;oe<dt;oe++){const le=we[oe];He(le[2],le[1],le[0])}for(let oe=0;oe<dt;oe++){const le=we[oe];He(le[0]+k*h,le[1]+k*h,le[2]+k*h)}}i.addGroup(ne,n.length/3-ne,0)}function J(){const ne=n.length/3;let oe=0;ie(L,oe),oe+=L.length;for(let le=0,ce=I.length;le<ce;le++){const de=I[le];ie(de,oe),oe+=de.length}i.addGroup(ne,n.length/3-ne,1)}function ie(ne,oe){let le=ne.length;for(;--le>=0;){const ce=le;let de=le-1;de<0&&(de=ne.length-1);for(let ze=0,Oe=h+g*2;ze<Oe;ze++){const Xe=k*ze,Je=k*(ze+1),D=oe+ce+Xe,ft=oe+de+Xe,st=oe+de+Je,P=oe+ce+Je;Te(D,ft,st,P)}}}function _e(ne,oe,le){l.push(ne),l.push(oe),l.push(le)}function He(ne,oe,le){We(ne),We(oe),We(le);const ce=n.length/3,de=v.generateTopUV(i,n,ce-3,ce-2,ce-1);xt(de[0]),xt(de[1]),xt(de[2])}function Te(ne,oe,le,ce){We(ne),We(oe),We(ce),We(oe),We(le),We(ce);const de=n.length/3,ze=v.generateSideWallUV(i,n,de-6,de-3,de-2,de-1);xt(ze[0]),xt(ze[1]),xt(ze[3]),xt(ze[1]),xt(ze[2]),xt(ze[3])}function We(ne){n.push(l[ne*3+0]),n.push(l[ne*3+1]),n.push(l[ne*3+2])}function xt(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return jg(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new yl[n.type]().fromJSON(n)),new fr(i,e.options)}}const Jg={generateTopUV:function(r,e,t,i,n){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new j(s,a),new j(o,l),new j(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[n*3],f=e[n*3+1],p=e[n*3+2],x=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new j(a,1-l),new j(c,1-d),new j(u,1-p),new j(x,1-m)]:[new j(o,1-l),new j(h,1-d),new j(f,1-p),new j(g,1-m)]}};function jg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const s=r[i];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zl extends Wn{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zl(e.radius,e.detail)}}class Kl extends Ve{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Ge(n,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,d=new R,u=new j,f=new R,p=new R,x=new R;let g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=t;v++){const S=i+v*h*n,_=Math.sin(S),T=Math.cos(S);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*_,d.y=e[A].y,d.z=e[A].x*T,a.push(d.x,d.y,d.z),u.x=v/t,u.y=A/(e.length-1),o.push(u.x,u.y);const C=l[3*A+0]*_,y=l[3*A+1],b=l[3*A+0]*T;c.push(C,y,b)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){const _=S+v*e.length,T=_,A=_+e.length,C=_+e.length+1,y=_+1;s.push(T,A,y),s.push(C,y,A)}this.setIndex(s),this.setAttribute("position",new Ae(a,3)),this.setAttribute("uv",new Ae(o,2)),this.setAttribute("normal",new Ae(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.points,e.segments,e.phiStart,e.phiLength)}}class wa extends Wn{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wa(e.radius,e.detail)}}class Zt extends Ve{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const v=m*u-a;for(let S=0;S<c;S++){const _=S*d-s;p.push(_,-v,0),x.push(0,0,1),g.push(S/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const S=v+c*m,_=v+c*(m+1),T=v+1+c*(m+1),A=v+1+c*m;f.push(S,_,A),f.push(_,T,A)}this.setIndex(f),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.widthSegments,e.heightSegments)}}class pr extends Ve{constructor(e=.5,t=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/n,f=new R,p=new j;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){const m=s+g/i*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<n;x++){const g=x*(i+1);for(let m=0;m<i;m++){const v=m+g,S=v,_=v+i+1,T=v+i+2,A=v+1;o.push(S,_,A),o.push(_,T,A)}}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jl extends Ve{constructor(e=new Ms([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ae(n,3)),this.setAttribute("normal",new Ae(s,3)),this.setAttribute("uv",new Ae(a,2));function c(h){const d=n.length/3,u=h.extractPoints(t);let f=u.shape;const p=u.holes;Hi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];Hi.isClockWise(v)===!0&&(p[g]=v.reverse())}const x=Hi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];f=f.concat(v)}for(let g=0,m=f.length;g<m;g++){const v=f[g];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){const v=x[g],S=v[0]+d,_=v[1]+d,T=v[2]+d;i.push(S,_,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Qg(t,e)}static fromJSON(e,t){const i=[];for(let n=0,s=e.shapes.length;n<s;n++){const a=t[e.shapes[n]];i.push(a)}return new Jl(i,e.curveSegments)}}function Qg(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){const n=r[t];e.shapes.push(n.uuid)}else e.shapes.push(r.uuid);return e}class pi extends Ve{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){const v=[],S=m/i,_=a+S*o,T=e*Math.cos(_),A=Math.sqrt(e*e-T*T);let C=0;m===0&&a===0?C=.5/t:m===i&&l===Math.PI&&(C=-.5/t);for(let y=0;y<=t;y++){const b=y/t,E=n+b*s;d.x=-A*Math.cos(E),d.y=T,d.z=A*Math.sin(E),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(b+C,1-S),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){const S=h[m][v+1],_=h[m][v],T=h[m+1][v],A=h[m+1][v+1];(m!==0||a>0)&&f.push(S,_,A),(m!==i-1||l<Math.PI)&&f.push(_,T,A)}this.setIndex(f),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jl extends Wn{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jl(e.radius,e.detail)}}class yn extends Ve{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let x=0;x<=i;x++){const g=a+x/i*o;for(let m=0;m<=n;m++){const v=m/n*s;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=n;g++){const m=(n+1)*x+g-1,v=(n+1)*(x-1)+g-1,S=(n+1)*(x-1)+g,_=(n+1)*x+g;l.push(m,v,_),l.push(v,S,_)}this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Ql extends Ve{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],c=[],h=[],d=new R,u=new R,f=new R,p=new R,x=new R,g=new R,m=new R;for(let S=0;S<=i;++S){const _=S/i*s*Math.PI*2;v(_,s,a,e,f),v(_+.01,s,a,e,p),g.subVectors(p,f),m.addVectors(p,f),x.crossVectors(g,m),m.crossVectors(x,g),x.normalize(),m.normalize();for(let T=0;T<=n;++T){const A=T/n*Math.PI*2,C=-t*Math.cos(A),y=t*Math.sin(A);d.x=f.x+(C*m.x+y*x.x),d.y=f.y+(C*m.y+y*x.y),d.z=f.z+(C*m.z+y*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(S/i),h.push(T/n)}}for(let S=1;S<=i;S++)for(let _=1;_<=n;_++){const T=(n+1)*(S-1)+(_-1),A=(n+1)*S+(_-1),C=(n+1)*S+_,y=(n+1)*(S-1)+_;o.push(T,A,y),o.push(A,C,y)}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(h,2));function v(S,_,T,A,C){const y=Math.cos(S),b=Math.sin(S),E=T/_*S,I=Math.cos(E);C.x=A*(2+I)*.5*y,C.y=A*(2+I)*b*.5,C.z=A*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class $l extends Ve{constructor(e=new Kh(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new j;let h=new R;const d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(f,2));function x(){for(let S=0;S<t;S++)g(S);g(s===!1?t:0),v(),m()}function g(S){h=e.getPointAt(S/t,h);const _=a.normals[S],T=a.binormals[S];for(let A=0;A<=n;A++){const C=A/n*Math.PI*2,y=Math.sin(C),b=-Math.cos(C);l.x=b*_.x+y*T.x,l.y=b*_.y+y*T.y,l.z=b*_.z+y*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let _=1;_<=n;_++){const T=(n+1)*(S-1)+(_-1),A=(n+1)*S+(_-1),C=(n+1)*S+_,y=(n+1)*(S-1)+_;p.push(T,A,y),p.push(A,C,y)}}function v(){for(let S=0;S<=t;S++)for(let _=0;_<=n;_++)c.x=S/t,c.y=_/n,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $l(new yl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class bp extends Ve{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new R,s=new R;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),v=o.getX(p+(g+1)%3);n.fromBufferAttribute(a,m),s.fromBufferAttribute(a,v),fd(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),fd(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ae(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function fd(r,e,t){const i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)===!0||t.has(n)===!0?!1:(t.add(i),t.add(n),!0)}var pd=Object.freeze({__proto__:null,BoxGeometry:Ut,CapsuleGeometry:Sa,CircleGeometry:ba,ConeGeometry:_s,CylinderGeometry:At,DodecahedronGeometry:ql,EdgesGeometry:fp,ExtrudeGeometry:fr,IcosahedronGeometry:Zl,LatheGeometry:Kl,OctahedronGeometry:wa,PlaneGeometry:Zt,PolyhedronGeometry:Wn,RingGeometry:pr,ShapeGeometry:Jl,SphereGeometry:pi,TetrahedronGeometry:jl,TorusGeometry:yn,TorusKnotGeometry:Ql,TubeGeometry:$l,WireframeGeometry:bp});class wp extends ei{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new se(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function cr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];if(md(n))n.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(md(n[0])){const s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function ui(r){const e={};for(let t=0;t<r.length;t++){const i=cr(r[t]);for(const n in i)e[n]=i[n]}return e}function md(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function $g(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Fn={clone:cr,merge:ui};var ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=$g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(n.value);break;case"v2":this.uniforms[i].value=new j().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(n.value);break;case"m4":this.uniforms[i].value=new qe().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jh extends wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class it extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _l extends it{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ap extends ei{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ep extends ei{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Cp extends ei{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Qh extends ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $h extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eu extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rp extends ei{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_n,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pp extends gi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ki(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Qr(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Ip(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function hh(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function Lp(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}function ix(r,e,t,i,n=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*n;if(!(p<t||p>=i)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=ki(d,c.times.constructor),c.values=ki(u,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function nx(r,e=0,t=r,i=30){i<=0&&(i=30);const n=t.tracks.length,s=e/i;for(let a=0;a<n;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=o.times.length-1;let x;if(s<=o.times[0]){const m=h,v=d-h;x=o.values.slice(m,v)}else if(s>=o.times[p]){const m=p*d+h,v=m+d-h;x=o.values.slice(m,v)}else{const m=o.createInterpolant(),v=h,S=d-h;m.evaluate(s),x=m.resultBuffer.slice(v,S)}l==="quaternion"&&new mi().fromArray(x).normalize().conjugate().toArray(x);const g=c.times.length;for(let m=0;m<g;++m){const v=m*f+u;if(l==="quaternion")mi.multiplyQuaternionsFlat(c.values,v,x,0,c.values,v);else{const S=f-u*2;for(let _=0;_<S;++_)c.values[v+_]-=x[_]}}}return r.blendMode=Uh,r}class sx{static convertArray(e,t){return ki(e,t)}static isTypedArray(e){return tp(e)}static hasTangents(e){return Qr(e)}static getKeyframeOrder(e){return Ip(e)}static sortedArray(e,t,i){return hh(e,t,i)}static flattenJSON(e,t,i,n){Lp(e,t,i,n)}static subclip(e,t,i,n,s=30){return ix(e,t,i,n,s)}static makeClipAdditive(e,t=0,i=e,n=30){return nx(e,t,i,n)}}class mr{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0;break i}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Dp extends mr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cs,endingEnd:cs}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case hs:s=e,o=2*t-i;break;case sa:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hs:a=e,l=2*i-t;break;case sa:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(n-t),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,S=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let T=0;T!==o;++T)s[T]=m*a[h+T]+v*a[c+T]+S*a[l+T]+_*a[d+T];return s}}class tu extends mr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}}class Np extends mr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Up extends mr{interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(i-t)/(n-t),x=1-p;for(let g=0;g!==o;++g)s[g]=a[c+g]*x+a[l+g]*p;return s}const u=o*2,f=e-1;for(let p=0;p!==o;++p){const x=a[c+p],g=a[l+p],m=f*u+p*2,v=d[m],S=d[m+1],_=e*u+p*2,T=h[_],A=h[_+1],C=ax(i,t,v,T,n);s[p]=Bp(C,x,S,A,g)}return s}}function Bp(r,e,t,i,n){const s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*i+r*r*r*n}function rx(r,e,t,i,n){const s=1-r;return 3*s*s*(t-e)+6*s*r*(i-t)+3*r*r*(n-i)}function ax(r,e,t,i,n){let s=(r-e)/(n-e);for(let a=0;a<8;a++){const o=Bp(s,e,t,i,n)-r;if(Math.abs(o)<1e-10)break;const l=rx(s,e,t,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}class Ni{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ki(t,this.TimeBufferType),this.values=ki(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ki(e.times,Array),values:ki(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Qr(e.settings)&&(i.settings={inTangents:ki(e.settings.inTangents,Array),outTangents:ki(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Up(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case ml:t=this.InterpolantFactoryMethodLinear;break;case Ao:t=this.InterpolantFactoryMethodSmooth;break;case rh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return Ao;case this.InterpolantFactoryMethodBezier:return rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Qr(this.settings)&&(gd(this.settings.inTangents,e),gd(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ne("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&tp(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ao,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const d=o*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){const x=t[d+p];if(x!==t[u+p]||x!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Qr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}}function gd(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]*=e}Ni.prototype.ValueTypeName="";Ni.prototype.TimeBufferType=Float32Array;Ni.prototype.ValueBufferType=Float32Array;Ni.prototype.DefaultInterpolation=ml;class Ss extends Ni{constructor(e,t,i){super(e,t,i)}}Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=na;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class iu extends Ni{constructor(e,t,i,n){super(e,t,i,n)}}iu.prototype.ValueTypeName="color";class ec extends Ni{constructor(e,t,i,n){super(e,t,i,n)}}ec.prototype.ValueTypeName="number";class Fp extends mr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)mi.slerpFlat(s,0,a,c-o,a,c,l);return s}}class tc extends Ni{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Fp(this.times,this.values,this.getValueSize(),e)}}tc.prototype.ValueTypeName="quaternion";tc.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends Ni{constructor(e,t,i){super(e,t,i)}}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=na;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class nu extends Ni{constructor(e,t,i,n){super(e,t,i,n)}}nu.prototype.ValueTypeName="vector";class pa{constructor(e="",t=-1,i=[],n=Ll){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Ci(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(lx(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(Ni.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Ip(l);l=hh(l,1,h),c=hh(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ec(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=n[d];u||(n[d]=u=[]),u.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ox(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ec;case"vector":case"vector2":case"vector3":case"vector4":return nu;case"color":return iu;case"quaternion":return tc;case"bool":case"boolean":return Ss;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function lx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ox(r.type);if(r.times===void 0){const i=[],n=[];Lp(r.keys,i,n,"value"),r.times=i,r.values=n}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Qr(r.settings)&&(t.settings={inTangents:ki(r.settings.inTangents,Float32Array),outTangents:ki(r.settings.outTangents,Float32Array)}),t}const sn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(xd(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!xd(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function xd(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class su{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Op=new su;class bi{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bi.DEFAULT_MATERIAL_NAME="__DEFAULT";const dn={};class cx extends Error{constructor(e,t){super(e),this.response=t}}class Mn extends bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=sn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(dn[e]!==void 0){dn[e].push({onLoad:t,onProgress:i,onError:n});return}dn[e]=[],dn[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=dn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let x=0;const g=new ReadableStream({start(m){v();function v(){d.read().then(({done:S,value:_})=>{if(S)m.close();else{x+=_.byteLength;const T=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let A=0,C=h.length;A<C;A++){const y=h[A];y.onProgress&&y.onProgress(T)}m.enqueue(_),v()}},S=>{m.error(S)})}}});return new Response(g)}else throw new cx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{sn.add(`file:${e}`,c);const h=dn[e];delete dn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=dn[e];if(h===void 0)throw this.manager.itemError(e),c;delete dn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class hx extends bi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new Mn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):Ne(l),s.manager.itemError(e)}},i,n)}parse(e){const t=[];for(let i=0;i<e.length;i++){const n=pa.parse(e[i]);t.push(n)}return t}}class ux extends bi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=[],o=new Xl,l=new Mn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(d){l.load(e[d],function(u){const f=s.parse(u,!0);a[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=bt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},i,n)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){const u=s.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)a[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),a[p].format=u.format,a[p].width=u.width,a[p].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=bt),o.format=u.format,o.needsUpdate=!0,t&&t(o)},i,n);return o}}const Vs=new WeakMap;class ma extends bi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=sn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Vs.get(a);d===void 0&&(d=[],Vs.set(a,d)),d.push({onLoad:t,onError:n})}return a}const o=oa("img");function l(){h(),t&&t(this);const d=Vs.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Vs.delete(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),sn.remove(`image:${e}`);const u=Vs.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}Vs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),sn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class dx extends bi{constructor(e){super(e)}load(e,t,i,n){const s=new Ma;s.colorSpace=Yt;const a=new ma(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return s}}class fx extends bi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new Si,o=new Mn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){n!==void 0?n(h):Ne(h);return}s._applyTexData(a,c),t&&t(a,c)},i,n),a}createDataTexture(e){const t=new Si;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Mi,e.wrapT=t.wrapT!==void 0?t.wrapT:Mi,e.magFilter=t.magFilter!==void 0?t.magFilter:bt,e.minFilter=t.minFilter!==void 0?t.minFilter:bt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=nn),t.mipmapCount===1&&(e.minFilter=bt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class px extends bi{constructor(e){super(e)}load(e,t,i,n){const s=new Et,a=new ma(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class Xn extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ru extends Xn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Oc=new qe,vd=new R,yd=new R;class ic{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Oc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=n?n.z/s.x:1,o=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;e.coordinateSystem===ps||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oo=new R,lo=new mi,Qi=new R;class nc extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,lo,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(oo,lo,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,lo,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new R,_d=new j,Md=new j;class Wt extends nc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,_d,Md),t.subVectors(Md,_d)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class mx extends ic{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=rr*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class zp extends Xn{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new mx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class gx extends ic{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}}class Gn extends Xn{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new gx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class gr extends nc{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xx extends ic{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $r extends Xn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new xx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class au extends Xn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kp extends Xn{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ou{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*n)),t.addScaledVector(a[5],1.092548*(n*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(i*s)),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*n),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*n),t.addScaledVector(a[5],2*.429043*n*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*i*s),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,s=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-n*n)}}class Vp extends Xn{constructor(e=new ou,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}const Sd={};class sc extends bi{constructor(e){super(e),this.textures={}}load(e,t,i,n){const s=this,a=new Mn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):Ne(l),s.manager.itemError(e)}},i,n)}parse(e){const t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return sc.createMaterialFromType(e)}static createMaterialFromType(e){const i={ShadowMaterial:wp,SpriteMaterial:Hl,RawShaderMaterial:jh,ShaderMaterial:wt,PointsMaterial:ca,MeshPhysicalMaterial:_l,MeshStandardMaterial:it,MeshPhongMaterial:Ap,MeshToonMaterial:Ep,MeshNormalMaterial:Cp,MeshLambertMaterial:Qh,MeshDepthMaterial:$h,MeshDistanceMaterial:eu,MeshBasicMaterial:qt,MeshMatcapMaterial:Rp,LineDashedMaterial:Pp,LineBasicMaterial:gi,Material:ei,...Sd}[e];let n;return i===void 0?(xn(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),n=new ei):n=new i,n}static registerMaterial(e,t){Sd[e]=t}}class uh{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hp extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Gp extends bi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new Mn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):Ne(l),s.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=s(f,g.buffer),v=$s(g.type,m),S=new Vl(v,g.stride);return S.uuid=g.uuid,g.usage!==void 0&&S.setUsage(g.usage),t[p]=S,S}function s(f,p){if(i[p]!==void 0)return i[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return i[p]=m,m}const a=e.isInstancedBufferGeometry?new Hp:new Ve,o=e.data.index;if(o!==void 0){const f=$s(o.type,o.array);a.setIndex(new Ze(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const g=n(e.data,p.data);x=new ms(g,p.itemSize,p.offset,p.normalized)}else{const g=$s(p.type,p.array),m=p.isInstancedBufferAttribute?ar:Ze;x=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),a.setAttribute(f,x)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let g=0,m=p.length;g<m;g++){const v=p[g];let S;if(v.isInterleavedBufferAttribute){const _=n(e.data,v.data);S=new ms(_,v.itemSize,v.offset,v.normalized)}else{const _=$s(v.type,v.array);S=new Ze(_,v.itemSize,v.normalized)}v.name!==void 0&&(S.name=v.name),v.usage!==void 0&&S.setUsage(v.usage),v.gpuType!==void 0&&(S.gpuType=v.gpuType),x.push(S)}a.morphAttributes[f]=x}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const x=d[f];a.addGroup(x.start,x.count,x.materialIndex)}const u=e.data.boundingSphere;return u!==void 0&&(a.boundingSphere=new Qt().fromJSON(u)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}const zc={};class vx extends bi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=this.path===""?uh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Mn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){n!==void 0&&n(d),Ne("ObjectLoader: Can't parse "+e+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),Ne("ObjectLoader: Can't load "+e);return}s.parse(c,t)},i,n)}async loadAsync(e,t){const i=this,n=this.path===""?uh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const s=new Mn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t);let o;try{o=JSON.parse(a)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let d=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,n,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){zc[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){const s=new Ms().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){const i={},n={};if(t.traverse(function(s){s.isBone&&(n[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new Gl().fromJSON(e[s],n);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const n=new Gp;for(let s=0,a=e.length;s<a;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in pd?o=pd[l.type].fromJSON(l,t):l.type in zc?o=zc[l.type].fromJSON(l,t):fe(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},n={};if(e!==void 0){const s=new sc;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=s.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const n=e[i],s=pa.parse(n);t[s.uuid]=s}return t}parseImages(e,t){const i=this,n={};let s;function a(l){return l=i.manager.resolveURL(l),i.manager.itemStart(l),s.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(h)}else return l.data?{data:$s(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new su(t);s=new ma(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const d=e[c],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const g=u[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Si(m.data,m.width,m.height)))}n[d.uuid]=new gn(f)}else{const f=o(d.url);n[d.uuid]=new gn(f)}}}return n}async parseImagesAsync(e){const t=this,i={};let n;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await n.loadAsync(l)}else return a.data?{data:$s(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){n=new ma(this.manager),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=await s(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Si(p.data,p.width,p.height)))}i[l.uuid]=new gn(h)}else{const h=await s(l.url);i[l.uuid]=new gn(h)}}}return i}parseTextures(e,t){function i(s,a){return typeof s=="number"?s:(fe("ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const n={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&fe('ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&fe("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Ma,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Si:h=new Et,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,yx)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],bd),h.wrapT=i(o.wrap[1],bd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,wd)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,wd)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.normalized!==void 0&&(h.normalized=o.normalized),o.userData!==void 0&&(h.userData=o.userData),n[o.uuid]=h}return n}parseObject(e,t,i,n,s){let a;function o(u){return t[u]===void 0&&fe("ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const g=u[p];i[g]===void 0&&fe("ObjectLoader: Undefined material",g),f.push(i[g])}return f}return i[u]===void 0&&fe("ObjectLoader: Undefined material",u),i[u]}}function c(u){return n[u]===void 0&&fe("ObjectLoader: Undefined texture",u),n[u]}let h,d;switch(e.type){case"Scene":a=new kl,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new se(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new zl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new _a(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Wt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new gr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new au(e.color,e.intensity);break;case"DirectionalLight":a=new $r(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new Gn(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new kp(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new zp(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new ru(e.color,e.groundColor,e.intensity);break;case"LightProbe":const u=new ou().fromArray(e.sh);a=new Vp(u,e.intensity);break;case"SkinnedMesh":h=o(e.geometry),d=l(e.material),a=new lp(h,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),d=l(e.material),a=new ae(h,d);break;case"InstancedMesh":h=o(e.geometry),d=l(e.material);const f=e.count,p=e.instanceMatrix,x=e.instanceColor;a=new Ai(h,d,f),a.instanceMatrix=new ar(new Float32Array(p.array),16),x!==void 0&&(a.instanceColor=new ar(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=o(e.geometry),d=l(e.material),a=new cp(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(g=>{let m=null,v=null;return g.boundingBox!==void 0&&(m=new oi().fromJSON(g.boundingBox)),g.boundingSphere!==void 0&&(v=new Qt().fromJSON(g.boundingSphere)),{...g,boundingBox:m,boundingSphere:v}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Qt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new oi().fromJSON(e.boundingBox));break;case"LOD":a=new op;break;case"Line":a=new Hn(o(e.geometry),l(e.material));break;case"LineLoop":a=new hp(o(e.geometry),l(e.material));break;case"LineSegments":a=new Zi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new xs(o(e.geometry),l(e.material));break;case"Sprite":a=new Vh(l(e.material));break;case"Group":a=new Lt;break;case"Bone":a=new Hh;break;default:a=new tt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.pivot!==void 0&&(a.pivot=new R().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(a.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(a.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(a.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.static!==void 0&&(a.static=e.static),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let f=0;f<u.length;f++)a.add(this.parseObject(u[f],t,i,n,s))}if(e.animations!==void 0){const u=e.animations;for(let f=0;f<u.length;f++){const p=u[f];a.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const u=e.levels;for(let f=0;f<u.length;f++){const p=u[f],x=a.getObjectByProperty("uuid",p.object);x!==void 0&&a.addLevel(x,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=t[i.skeleton];n===void 0?fe("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new tt}})}}const yx={UVMapping:Tl,CubeReflectionMapping:rn,CubeRefractionMapping:zn,EquirectangularReflectionMapping:Hr,EquirectangularRefractionMapping:Gr,CubeUVReflectionMapping:ur},bd={RepeatWrapping:Xi,ClampToEdgeWrapping:Mi,MirroredRepeatWrapping:ea},wd={NearestFilter:Pt,NearestMipmapNearestFilter:Ch,NearestMipmapLinearFilter:Qs,LinearFilter:bt,LinearMipmapNearestFilter:Wr,LinearMipmapLinearFilter:nn},kc=new WeakMap;class _x extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=sn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{kc.has(a)===!0?(n&&n(kc.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return sn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),kc.set(l,c),sn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});sn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let co;class lu{static getContext(){return co===void 0&&(co=new(window.AudioContext||window.webkitAudioContext)),co}static setContext(e){co=e}}class Mx extends bi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new Mn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0),h=lu.getContext(),d=e+"#decode";s.manager.itemStart(d),h.decodeAudioData(c,function(u){t(u),s.manager.itemEnd(d)}).catch(function(u){o(u),s.manager.itemEnd(d)})}catch(c){o(c)}},i,n);function o(l){n?n(l):Ne(l),s.manager.itemError(e)}}}const Td=new qe,Ad=new qe,$n=new qe;class Sx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Wt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Wt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,$n.copy(e.projectionMatrix);const n=t.eyeSep/2,s=n*t.near/t.focus,a=t.near*Math.tan(ds*t.fov*.5)/t.zoom;let o,l;Ad.elements[12]=-n,Td.elements[12]=n,o=-a*t.aspect+s,l=a*t.aspect+s,$n.elements[0]=2*t.near/(l-o),$n.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy($n),o=-a*t.aspect-s,l=a*t.aspect-s,$n.elements[0]=2*t.near/(l-o),$n.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy($n)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Ad),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(Td),this.cameraR.matrixWorldNeedsUpdate=!0}}const Hs=-90,Gs=1;class Wp extends tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Wt(Hs,Gs,e,t);n.layers=this.layers,this.add(n);const s=new Wt(Hs,Gs,e,t);s.layers=this.layers,this.add(s);const a=new Wt(Hs,Gs,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Hs,Gs,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Hs,Gs,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Hs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Xp extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cu{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=bx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function bx(){this._document.hidden===!1&&this.reset()}const es=new R,Vc=new mi,wx=new R,ts=new R,is=new R;class Tx extends tt{constructor(){super(),this.type="AudioListener",this.context=lu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new cu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(es,Vc,wx),ts.set(0,0,-1).applyQuaternion(Vc),is.set(0,1,0).applyQuaternion(Vc),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(es.x,i),t.positionY.linearRampToValueAtTime(es.y,i),t.positionZ.linearRampToValueAtTime(es.z,i),t.forwardX.linearRampToValueAtTime(ts.x,i),t.forwardY.linearRampToValueAtTime(ts.y,i),t.forwardZ.linearRampToValueAtTime(ts.z,i),t.upX.linearRampToValueAtTime(is.x,i),t.upY.linearRampToValueAtTime(is.y,i),t.upZ.linearRampToValueAtTime(is.z,i)}else t.setPosition(es.x,es.y,es.z),t.setOrientation(ts.x,ts.y,ts.z,is.x,is.y,is.z)}}class qp extends tt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){fe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(fe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(fe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const ns=new R,Ed=new mi,Ax=new R,ss=new R;class Ex extends qp{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ns,Ed,Ax),ss.set(0,0,1).applyQuaternion(Ed);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ns.x,i),t.positionY.linearRampToValueAtTime(ns.y,i),t.positionZ.linearRampToValueAtTime(ns.z,i),t.orientationX.linearRampToValueAtTime(ss.x,i),t.orientationY.linearRampToValueAtTime(ss.y,i),t.orientationZ.linearRampToValueAtTime(ss.z,i)}else t.setPosition(ns.x,ns.y,ns.z),t.setOrientation(ss.x,ss.y,ss.z)}}class Cx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class Yp{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,a;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){mi.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const a=this._workIndex*s;mi.multiplyQuaternionsFlat(e,a,e,t,e,i),mi.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){const a=1-n;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[i+a]*n}}}const hu="\\[\\]\\.:\\/",Rx=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",Px="[^"+hu.replace("\\.","")+"]",Ix=/((?:WC+[\/:])*)/.source.replace("WC",uu),Lx=/(WCOD+)?/.source.replace("WCOD",Px),Dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),Nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),Ux=new RegExp("^"+Ix+Lx+Dx+Nx+"$"),Bx=["material","materials","bones","map"];class Fx{constructor(e,t,i){const n=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ht{constructor(e,t,i){this.path=t,this.parsedPath=i||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,i):new ht(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rx,"")}static parseTrackName(e){const t=Ux.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Bx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=Fx;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ox{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Ci(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,s=this._bindings,a=s.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(u);for(let x=0,g=a;x!==g;++x)s[x].push(new ht(u,i[x],n[x]))}else if(p<c){o=e[p];const x=--c,g=e[x];t[g.uuid]=p,e[p]=g,t[f]=x,e[x]=u;for(let m=0,v=a;m!==v;++m){const S=s[m],_=S[x];let T=S[p];S[p]=_,T===void 0&&(T=new ht(u,i[m],n[m])),S[x]=T}}else e[p]!==o&&Ne("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){const d=s++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let f=0,p=n;f!==p;++f){const x=i[f],g=x[d],m=x[h];x[h]=g,x[d]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<s){const u=--s,f=e[u],p=--a,x=e[p];d!==u&&(t[f.uuid]=d),e[d]=f,u!==p&&(t[x.uuid]=u),e[u]=x,e.pop();for(let g=0,m=n;g!==m;++g){const v=i[g],S=v[u],_=v[p];v[d]=S,v[u]=_,v.pop()}}else{const u=--a,f=e[u];d!==u&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,x=n;p!==x;++p){const g=i[p];g[d]=g[u],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const i=this._bindingsIndicesByPath;let n=i[e];const s=this._bindings;if(n!==void 0)return s[n];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);n=s.length,i[e]=n,a.push(e),o.push(t),s.push(d);for(let u=h,f=l.length;u!==f;++u){const p=l[u];d[u]=new ht(p,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const n=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=n[o];t[c]=i,a[i]=l,a.pop(),s[i]=s[o],s.pop(),n[i]=n[o],n.pop()}}}class Zp{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:cs,endingEnd:cs};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Wf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Uh:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Ll:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const a=i===Xf;if(e===0)return s===-1?n:a&&(s&1)===1?t-n:n;if(i===Gf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=n;if(a&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=hs,n.endingEnd=hs):(e?n.endingStart=this.zeroSlopeAtStart?hs:cs:n.endingStart=sa,t?n.endingEnd=this.zeroSlopeAtEnd?hs:cs:n.endingEnd=sa)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}const zx=new Float32Array(1);class kx extends Yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=n[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[d]=p;else{if(p=a[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=t&&t._propertyBindings[d].binding.parsedPath;p=new Yp(ht.create(i,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[d]=p}o[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new tu(new Float32Array(2),new Float32Array(2),1,zx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let a=typeof e=="string"?pa.findByName(n,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Ll),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Zp(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?pa.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Vx extends Oh{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isRenderTarget3D=!0,this.depth=i;for(let s=0;s<this.textures.length;s++){const a=new Fl(null,e,t,i);a.isRenderTargetTexture=!0,a.renderTarget=this,this.textures[s]=a}this._setTextureOptions(n)}}class du{constructor(e){this.value=e}clone(){return new du(this.value.clone===void 0?this.value:this.value.clone())}}let Hx=0;class Gx extends Yi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Hx++}),this.name="",this.usage=Ul,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){const s=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Wx extends Vl{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Xx{constructor(e,t,i,n,s,a=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=s,this.normalized=a,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const Cd=new qe;class qx{constructor(e,t,i=0,n=1/0){this.ray=new dr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cd),this}intersectObject(e,t=!0,i=[]){return dh(e,this,i,t),i.sort(Rd),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)dh(e[n],this,i,t);return i.sort(Rd),i}}function Rd(r,e){return r.distance-e.distance}function dh(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)dh(s[a],e,t,!0)}}class Yx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Zx{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kx{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}class fu{static{fu.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}}const Pd=new j;class Kp{constructor(e=new j(1/0,1/0),t=new j(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Id=new R,ho=new R,Ws=new R,Xs=new R,Hc=new R,Jx=new R,jx=new R;class Qx{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Id.subVectors(e,this.start),ho.subVectors(this.end,this.start);const i=ho.dot(ho);if(i===0)return 0;let s=ho.dot(Id)/i;return t&&(s=Ge(s,0,1)),s}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=Jx,i=jx){const n=10000000000000001e-32;let s,a;const o=this.start,l=e.start,c=this.end,h=e.end;Ws.subVectors(c,o),Xs.subVectors(h,l),Hc.subVectors(o,l);const d=Ws.dot(Ws),u=Xs.dot(Xs),f=Xs.dot(Hc);if(d<=n&&u<=n)return t.copy(o),i.copy(l),t.sub(i),t.dot(t);if(d<=n)s=0,a=f/u,a=Ge(a,0,1);else{const p=Ws.dot(Hc);if(u<=n)a=0,s=Ge(-p/d,0,1);else{const x=Ws.dot(Xs),g=d*u-x*x;g!==0?s=Ge((x*f-p*u)/g,0,1):s=0,a=(x*s+f)/u,a<0?(a=0,s=Ge(-p/d,0,1)):a>1&&(a=1,s=Ge((x-p)/d,0,1))}}return t.copy(o).addScaledVector(Ws,s),i.copy(l).addScaledVector(Xs,a),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Ld=new R;class $x extends tt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Ve,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Ae(n,3));const s=new gi({fog:!1,toneMapped:!1});this.cone=new Zi(i,s),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Ld.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ld),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const In=new R,uo=new qe,Gc=new qe;class ev extends Zi{constructor(e){const t=Jp(e),i=new Ve,n=[],s=[];for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}i.setAttribute("position",new Ae(n,3)),i.setAttribute("color",new Ae(s,3));const a=new gi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,a),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const o=new se(255),l=new se(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");Gc.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(uo.multiplyMatrices(Gc,o.matrixWorld),In.setFromMatrixPosition(uo),n.setXYZ(a,In.x,In.y,In.z),uo.multiplyMatrices(Gc,o.parent.matrixWorld),In.setFromMatrixPosition(uo),n.setXYZ(a+1,In.x,In.y,In.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const n=this.geometry.getAttribute("color");for(let s=0;s<n.count;s+=2)n.setXYZ(s,e.r,e.g,e.b),n.setXYZ(s+1,t.r,t.g,t.b);return n.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Jp(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push(...Jp(r.children[t]));return e}class tv extends ae{constructor(e,t,i){const n=new pi(t,4,2),s=new qt({wireframe:!0,fog:!1,toneMapped:!1});super(n,s),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const iv=new R,Dd=new se,Nd=new se;class nv extends tt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new wa(t);n.rotateY(Math.PI*.5),this.material=new qt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=n.getAttribute("position"),a=new Float32Array(s.count*3);n.setAttribute("color",new Ze(a,3)),this.add(new ae(n,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Dd.copy(this.light.color),Nd.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){const s=i<n/2?Dd:Nd;t.setXYZ(i,s.r,s.g,s.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(iv.setFromMatrixPosition(this.light.matrixWorld).negate())}}class sv extends Zi{constructor(e=10,t=10,i=4473924,n=8947848){i=new se(i),n=new se(n);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const x=u===s?i:n;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new Ve;h.setAttribute("position",new Ae(l,3)),h.setAttribute("color",new Ae(c,3));const d=new gi({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class rv extends Zi{constructor(e=10,t=16,i=8,n=64,s=4473924,a=8947848){s=new se(s),a=new se(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const u=d/t*(Math.PI*2),f=Math.sin(u)*e,p=Math.cos(u)*e;o.push(0,0,0),o.push(f,0,p);const x=d&1?s:a;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<i;d++){const u=d&1?s:a,f=e-e/i*d;for(let p=0;p<n;p++){let x=p/n*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f;o.push(g,0,m),l.push(u.r,u.g,u.b),x=(p+1)/n*(Math.PI*2),g=Math.sin(x)*f,m=Math.cos(x)*f,o.push(g,0,m),l.push(u.r,u.g,u.b)}}const c=new Ve;c.setAttribute("position",new Ae(o,3)),c.setAttribute("color",new Ae(l,3));const h=new gi({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const Ud=new R,fo=new R,Bd=new R;class av extends tt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new Ve;n.setAttribute("position",new Ae([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new gi({fog:!1,toneMapped:!1});this.lightPlane=new Hn(n,s),this.add(this.lightPlane),n=new Ve,n.setAttribute("position",new Ae([0,0,0,0,0,1],3)),this.targetLine=new Hn(n,s),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Ud.setFromMatrixPosition(this.light.matrixWorld),fo.setFromMatrixPosition(this.light.target.matrixWorld),Bd.subVectors(fo,Ud),this.lightPlane.lookAt(fo),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(fo),this.targetLine.scale.z=Bd.length()}}const po=new R,It=new nc;class ov extends Zi{constructor(e){const t=new Ve,i=new gi({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,x){l(p),l(x)}function l(p){n.push(0,0,0),s.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(n.length/3-1)}t.setAttribute("position",new Ae(n,3)),t.setAttribute("color",new Ae(s,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new se(16755200),h=new se(16711680),d=new se(43775),u=new se(16777215),f=new se(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,i,n,s){const o=this.geometry.getAttribute("color");return o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,n.r,n.g,n.b),o.setXYZ(39,n.r,n.g,n.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,n=1;let s,a;if(It.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,a=0;else if(this.camera.coordinateSystem===Ei)s=-1,a=1;else if(this.camera.coordinateSystem===ps)s=0,a=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Nt("c",t,e,It,0,0,s),Nt("t",t,e,It,0,0,a),Nt("n1",t,e,It,-i,-n,s),Nt("n2",t,e,It,i,-n,s),Nt("n3",t,e,It,-i,n,s),Nt("n4",t,e,It,i,n,s),Nt("f1",t,e,It,-i,-n,a),Nt("f2",t,e,It,i,-n,a),Nt("f3",t,e,It,-i,n,a),Nt("f4",t,e,It,i,n,a),Nt("u1",t,e,It,i*.7,n*1.1,s),Nt("u2",t,e,It,-i*.7,n*1.1,s),Nt("u3",t,e,It,0,n*2,s),Nt("cf1",t,e,It,-i,0,a),Nt("cf2",t,e,It,i,0,a),Nt("cf3",t,e,It,0,-n,a),Nt("cf4",t,e,It,0,n,a),Nt("cn1",t,e,It,-i,0,s),Nt("cn2",t,e,It,i,0,s),Nt("cn3",t,e,It,0,-n,s),Nt("cn4",t,e,It,0,n,s),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Nt(r,e,t,i,n,s,a){po.set(n,s,a).unproject(i);const o=e[r];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],po.x,po.y,po.z)}}const mo=new oi;class lv extends Zi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),s=new Ve;s.setIndex(new Ze(i,1)),s.setAttribute("position",new Ze(n,3)),super(s,new gi({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&mo.setFromObject(this.object),mo.isEmpty())return;const e=mo.min,t=mo.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class cv extends Zi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ve;s.setIndex(new Ze(i,1)),s.setAttribute("position",new Ae(n,3)),super(s,new gi({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class hv extends Hn{constructor(e,t=1,i=16776960){const n=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ve;a.setAttribute("position",new Ae(s,3)),a.computeBoundingSphere(),super(a,new gi({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ve;l.setAttribute("position",new Ae(o,3)),l.computeBoundingSphere(),this.add(new ae(l,new qt({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Fd=new R;let go,Wc;class uv extends tt{constructor(e=new R(0,0,1),t=new R(0,0,0),i=1,n=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",go===void 0&&(go=new Ve,go.setAttribute("position",new Ae([0,0,0,0,1,0],3)),Wc=new _s(.5,1,5,1),Wc.translate(0,-.5,0)),this.position.copy(t),this.line=new Hn(go,new gi({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ae(Wc,new qt({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Fd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Fd,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class dv extends Zi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Ve;n.setAttribute("position",new Ae(t,3)),n.setAttribute("color",new Ae(i,3));const s=new gi({vertexColors:!0,toneMapped:!1});super(n,s),this.type="AxesHelper"}setColors(e,t,i){const n=new se,s=this.geometry.attributes.color.array;return n.set(e),n.toArray(s,0),n.toArray(s,3),n.set(t),n.toArray(s,6),n.toArray(s,9),n.set(i),n.toArray(s,12),n.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class fv{constructor(){this.type="ShapePath",this.color=new se,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new ha,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,s,a){return this.currentPath.bezierCurveTo(e,t,i,n,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1;const d=c.length;for(let u=0,f=d-1;u<d;f=u++){const p=c[u],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function t(l,c){const h=c.getCenter(new j);if(e(h,l))return h;const d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){const x=l[p],g=l[(p+1)%f];if(x.y>d!=g.y>d){const m=x.x+(d-x.y)*(g.x-x.x)/(g.y-x.y);u.push(m)}}return u.length>1&&(u.sort((p,x)=>p-x),h.x=(u[0]+u[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(fe('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");const n=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const h=Hi.area(c);if(h===0)continue;const d=new Kp;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);s.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){const c=s[l];let h=0;for(let d=l-1;d>=0;d--){const u=s[d];if(u.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}n(c.winding)===n(h)&&(c.exclude=!0)}for(const l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of s){if(l.exclude||l.role!=="outer")continue;const c=new Ms;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of s){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const h=new ha;h.curves=l.subPath.curves,c.holes.push(h)}return a}}class pv extends Yi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function mv(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function gv(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function xv(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function fh(r,e,t,i){const n=vv(i);switch(t){case Dh:return r*e;case Rl:return r*e/n.components*n.byteLength;case ya:return r*e/n.components*n.byteLength;case kn:return r*e*2/n.components*n.byteLength;case Pl:return r*e*2/n.components*n.byteLength;case Nh:return r*e*3/n.components*n.byteLength;case Kt:return r*e*4/n.components*n.byteLength;case Il:return r*e*4/n.components*n.byteLength;case Xr:case qr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yr:case Zr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ko:case Ho:return Math.max(r,16)*Math.max(e,8)/4;case zo:case Vo:return Math.max(r,8)*Math.max(e,8)/2;case Go:case Wo:case qo:case Yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xo:case ta:case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case cl:case hl:case ul:return Math.ceil(r/4)*Math.ceil(e/4)*16;case dl:case fl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ia:case pl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vv(r){switch(r){case yi:case Rh:return{byteLength:1,components:1};case nr:case Ph:case jt:return{byteLength:2,components:1};case El:case Cl:return{byteLength:2,components:4};case Di:case Al:case fi:return{byteLength:4,components:1};case Ih:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}class yv{static contain(e,t){return mv(e,t)}static cover(e,t){return gv(e,t)}static fill(e){return xv(e)}static getByteLength(e,t,i,n){return fh(e,t,i,n)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);function jp(){let r=null,e=!1,t=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function _v(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ev=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,my=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_y=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,My=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,by=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,By=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,o_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Mv,alphahash_pars_fragment:Sv,alphamap_fragment:bv,alphamap_pars_fragment:wv,alphatest_fragment:Tv,alphatest_pars_fragment:Av,aomap_fragment:Ev,aomap_pars_fragment:Cv,batching_pars_vertex:Rv,batching_vertex:Pv,begin_vertex:Iv,beginnormal_vertex:Lv,bsdfs:Dv,iridescence_fragment:Nv,bumpmap_pars_fragment:Uv,clipping_planes_fragment:Bv,clipping_planes_pars_fragment:Fv,clipping_planes_pars_vertex:Ov,clipping_planes_vertex:zv,color_fragment:kv,color_pars_fragment:Vv,color_pars_vertex:Hv,color_vertex:Gv,common:Wv,cube_uv_reflection_fragment:Xv,defaultnormal_vertex:qv,displacementmap_pars_vertex:Yv,displacementmap_vertex:Zv,emissivemap_fragment:Kv,emissivemap_pars_fragment:Jv,colorspace_fragment:jv,colorspace_pars_fragment:Qv,envmap_fragment:$v,envmap_common_pars_fragment:ey,envmap_pars_fragment:ty,envmap_pars_vertex:iy,envmap_physical_pars_fragment:fy,envmap_vertex:ny,fog_vertex:sy,fog_pars_vertex:ry,fog_fragment:ay,fog_pars_fragment:oy,gradientmap_pars_fragment:ly,lightmap_pars_fragment:cy,lights_lambert_fragment:hy,lights_lambert_pars_fragment:uy,lights_pars_begin:dy,lights_toon_fragment:py,lights_toon_pars_fragment:my,lights_phong_fragment:gy,lights_phong_pars_fragment:xy,lights_physical_fragment:vy,lights_physical_pars_fragment:yy,lights_fragment_begin:_y,lights_fragment_maps:My,lights_fragment_end:Sy,lightprobes_pars_fragment:by,logdepthbuf_fragment:wy,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:Ay,logdepthbuf_vertex:Ey,map_fragment:Cy,map_pars_fragment:Ry,map_particle_fragment:Py,map_particle_pars_fragment:Iy,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Dy,morphinstance_vertex:Ny,morphcolor_vertex:Uy,morphnormal_vertex:By,morphtarget_pars_vertex:Fy,morphtarget_vertex:Oy,normal_fragment_begin:zy,normal_fragment_maps:ky,normal_pars_fragment:Vy,normal_pars_vertex:Hy,normal_vertex:Gy,normalmap_pars_fragment:Wy,clearcoat_normal_fragment_begin:Xy,clearcoat_normal_fragment_maps:qy,clearcoat_pars_fragment:Yy,iridescence_pars_fragment:Zy,opaque_fragment:Ky,packing:Jy,premultiplied_alpha_fragment:jy,project_vertex:Qy,dithering_fragment:$y,dithering_pars_fragment:e_,roughnessmap_fragment:t_,roughnessmap_pars_fragment:i_,shadowmap_pars_fragment:n_,shadowmap_pars_vertex:s_,shadowmap_vertex:r_,shadowmask_pars_fragment:a_,skinbase_vertex:o_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:h_,specularmap_fragment:u_,specularmap_pars_fragment:d_,tonemapping_fragment:f_,tonemapping_pars_fragment:p_,transmission_fragment:m_,transmission_pars_fragment:g_,uv_pars_fragment:x_,uv_pars_vertex:v_,uv_vertex:y_,worldpos_vertex:__,background_vert:M_,background_frag:S_,backgroundCube_vert:b_,backgroundCube_frag:w_,cube_vert:T_,cube_frag:A_,depth_vert:E_,depth_frag:C_,distance_vert:R_,distance_frag:P_,equirect_vert:I_,equirect_frag:L_,linedashed_vert:D_,linedashed_frag:N_,meshbasic_vert:U_,meshbasic_frag:B_,meshlambert_vert:F_,meshlambert_frag:O_,meshmatcap_vert:z_,meshmatcap_frag:k_,meshnormal_vert:V_,meshnormal_frag:H_,meshphong_vert:G_,meshphong_frag:W_,meshphysical_vert:X_,meshphysical_frag:q_,meshtoon_vert:Y_,meshtoon_frag:Z_,points_vert:K_,points_frag:J_,shadow_vert:j_,shadow_frag:Q_,sprite_vert:$_,sprite_frag:eM},ve={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Vi={basic:{uniforms:ui([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:ui([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:ui([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:ui([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:ui([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new se(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:ui([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:ui([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:ui([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:ui([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:ui([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:ui([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:ui([ve.common,ve.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:ui([ve.lights,ve.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Vi.physical={uniforms:ui([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const xo={r:0,b:0,g:0},tM=new qe,Qp=new Ke;Qp.set(-1,0,0,0,1,0,0,0,1);function iM(r,e,t,i,n,s){const a=new se(0);let o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const _=v.backgroundBlurriness>0;S=e.get(S,_)}return S}function p(v){let S=!1;const _=f(v);_===null?g(a,o):_&&_.isColor&&(g(_,1),S=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,S){const _=f(S);_&&(_.isCubeTexture||_.mapping===ur)?(c===void 0&&(c=new ae(new Ut(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:cr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tM.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qp),c.material.toneMapped=at.getTransfer(_.colorSpace)!==gt,(h!==_||d!==_.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ae(new Zt(2,2),new wt({name:"BackgroundMaterial",uniforms:cr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=at.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(xo,Tp(r)),t.buffers.color.setClear(xo.r,xo.g,xo.b,S,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:x,dispose:m}}function nM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,a=!1;function o(I,B,z,U,L){let V=!1;const k=d(I,U,z,B);s!==k&&(s=k,c(s.object)),V=f(I,U,z,L),V&&p(I,U,z,L),L!==null&&e.update(L,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(I,B,z,U),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return r.createVertexArray()}function c(I){return r.bindVertexArray(I)}function h(I){return r.deleteVertexArray(I)}function d(I,B,z,U){const L=U.wireframe===!0;let V=i[B.id];V===void 0&&(V={},i[B.id]=V);const k=I.isInstancedMesh===!0?I.id:0;let K=V[k];K===void 0&&(K={},V[k]=K);let X=K[z.id];X===void 0&&(X={},K[z.id]=X);let Q=X[L];return Q===void 0&&(Q=u(l()),X[L]=Q),Q}function u(I){const B=[],z=[],U=[];for(let L=0;L<t;L++)B[L]=0,z[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:U,object:I,attributes:{},index:null}}function f(I,B,z,U){const L=s.attributes,V=B.attributes;let k=0;const K=z.getAttributes();for(const X in K)if(K[X].location>=0){const $=L[X];let Re=V[X];if(Re===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Re=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Re=I.instanceColor)),$===void 0||$.attribute!==Re||Re&&$.data!==Re.data)return!0;k++}return s.attributesNum!==k||s.index!==U}function p(I,B,z,U){const L={},V=B.attributes;let k=0;const K=z.getAttributes();for(const X in K)if(K[X].location>=0){let $=V[X];$===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&($=I.instanceColor));const Re={};Re.attribute=$,$&&$.data&&(Re.data=$.data),L[X]=Re,k++}s.attributes=L,s.attributesNum=k,s.index=U}function x(){const I=s.newAttributes;for(let B=0,z=I.length;B<z;B++)I[B]=0}function g(I){m(I,0)}function m(I,B){const z=s.newAttributes,U=s.enabledAttributes,L=s.attributeDivisors;z[I]=1,U[I]===0&&(r.enableVertexAttribArray(I),U[I]=1),L[I]!==B&&(r.vertexAttribDivisor(I,B),L[I]=B)}function v(){const I=s.newAttributes,B=s.enabledAttributes;for(let z=0,U=B.length;z<U;z++)B[z]!==I[z]&&(r.disableVertexAttribArray(z),B[z]=0)}function S(I,B,z,U,L,V,k){k===!0?r.vertexAttribIPointer(I,B,z,L,V):r.vertexAttribPointer(I,B,z,U,L,V)}function _(I,B,z,U){x();const L=U.attributes,V=z.getAttributes(),k=B.defaultAttributeValues;for(const K in V){const X=V[K];if(X.location>=0){let Q=L[K];if(Q===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const $=Q.normalized,Re=Q.itemSize,we=e.get(Q);if(we===void 0)continue;const dt=we.buffer,nt=we.type,lt=we.bytesPerElement,J=nt===r.INT||nt===r.UNSIGNED_INT||Q.gpuType===Al;if(Q.isInterleavedBufferAttribute){const ie=Q.data,_e=ie.stride,He=Q.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<X.locationSize;Te++)m(X.location+Te,ie.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<X.locationSize;Te++)g(X.location+Te);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let Te=0;Te<X.locationSize;Te++)S(X.location+Te,Re/X.locationSize,nt,$,_e*lt,(He+Re/X.locationSize*Te)*lt,J)}else{if(Q.isInstancedBufferAttribute){for(let ie=0;ie<X.locationSize;ie++)m(X.location+ie,Q.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ie=0;ie<X.locationSize;ie++)g(X.location+ie);r.bindBuffer(r.ARRAY_BUFFER,dt);for(let ie=0;ie<X.locationSize;ie++)S(X.location+ie,Re/X.locationSize,nt,$,Re*lt,Re/X.locationSize*ie*lt,J)}}else if(k!==void 0){const $=k[K];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(X.location,$);break;case 3:r.vertexAttrib3fv(X.location,$);break;case 4:r.vertexAttrib4fv(X.location,$);break;default:r.vertexAttrib1fv(X.location,$)}}}}v()}function T(){b();for(const I in i){const B=i[I];for(const z in B){const U=B[z];for(const L in U){const V=U[L];for(const k in V)h(V[k].object),delete V[k];delete U[L]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;const B=i[I.id];for(const z in B){const U=B[z];for(const L in U){const V=U[L];for(const k in V)h(V[k].object),delete V[k];delete U[L]}}delete i[I.id]}function C(I){for(const B in i){const z=i[B];for(const U in z){const L=z[U];if(L[I.id]===void 0)continue;const V=L[I.id];for(const k in V)h(V[k].object),delete V[k];delete L[I.id]}}}function y(I){for(const B in i){const z=i[B],U=I.isInstancedMesh===!0?I.id:0,L=z[U];if(L!==void 0){for(const V in L){const k=L[V];for(const K in k)h(k[K].object),delete k[K];delete L[V]}delete z[U],Object.keys(z).length===0&&delete i[B]}}}function b(){E(),a=!0,s!==n&&(s=n,c(s.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:b,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function sM(r,e,t){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function rM(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==Kt&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const y=C===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==yi&&C!==fi&&!y&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:_,maxSamples:T,samples:A}}function aM(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new fn,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=r.get(d);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{const v=s?0:i,S=v*4;let _=m.clippingState||null;l.value=_,_=h(p,u,S,f);for(let T=0;T!==S;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,_=f;S!==x;++S,_+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const er=4,oM=6,lM=20,cM=256,Ir=new gr,Od=new se;let Xc=null,qc=0,Yc=0,Zc=!1;const hM=new R,rs=new R;class Ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){const{size:a=256,position:o=hM}=s;Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,qc,Yc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rn||e.mapping===zn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:jt,format:Kt,colorSpace:ra,depthBuffer:!1},n=zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=uM(s)),this._blurMaterial=fM(s,e,t),this._ggxMaterial=dM(s,e,t)}return n}_compileMaterial(e){const t=new ae(new Ve,e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,i,n,s){const l=new Wt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Od),d.toneMapping=Wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new Ut,new qt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,m=!0):(g.color.copy(Od),m=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const T=this._cubeSize;qs(n,_*T,S>2?T:0,T,T),d.setRenderTarget(n),m&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===rn||e.mapping===zn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());const s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ir)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-er?i-p+er:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,qs(s,g,m,3*x,2*x),n.setRenderTarget(s),n.render(o,Ir),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,qs(e,g,m,3*x,2*x),n.setRenderTarget(e),n.render(o,Ir)}_blur(e,t,i,n){const s=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,n,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[n],d=3*h*(n>this._lodMax-er?n-this._lodMax+er:0),u=4*(this._cubeSize-h);qs(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ir)}}function uM(r){const e=[],t=[];let i=r;const n=r-er+1+oM;for(let s=0;s<n;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){const v=m%3*2/3-1,S=m>2?0:-1,_=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];p.set(_,f*u*m);for(let T=0;T<u;T++){const A=h[T*2]*2-1,C=h[T*2+1]*2-1;m===0?rs.set(1,C,A):m===1?rs.set(-A,1,-C):m===2?rs.set(-A,C,1):m===3?rs.set(-1,C,-A):m===4?rs.set(-A,-1,C):rs.set(A,C,-1),rs.toArray(x,(m*u+T)*f)}}const g=new Ve;g.setAttribute("position",new Ze(p,f)),g.setAttribute("outputDirection",new Ze(x,f)),t.push(new ae(g,null)),i>er&&i--}return{lodMeshes:t,sizeLods:e}}function zd(r,e,t){const i=new Ot(r,e,t);return i.texture.mapping=ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function dM(r,e,t){return new wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function fM(r,e,t){return new wt({name:"SphericalGaussianBlur",defines:{SAMPLES:lM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function kd(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Vd(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class pu extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ma(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ut(5,5,5),s=new wt({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Gi});s.uniforms.tEquirect.value=t;const a=new ae(n,s),o=t.minFilter;return t.minFilter===nn&&(t.minFilter=bt),new Wp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}function pM(r){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===Hr||f===Gr)if(e.has(u)){const p=e.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new pu(p.height);return x.fromEquirectangularTexture(r,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,p=f===Hr||f===Gr,x=f===rn||f===zn;if(p||x){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Ml(r)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new Ml(r)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===Hr?u.mapping=rn:f===Gr&&(u.mapping=zn),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function mM(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&xn("WebGLRenderer: "+i+" extension not supported."),n}}}function gM(r,e,t,i){const n={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete n[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let x=0;if(p===void 0)return;if(f!==null){const v=f.array;x=f.version;for(let S=0,_=v.length;S<_;S+=3){const T=v[S+0],A=v[S+1],C=v[S+2];u.push(T,A,A,C,C,T)}}else{const v=p.array;x=p.version;for(let S=0,_=v.length/3-1;S<_;S+=3){const T=S+0,A=S+1,C=S+2;u.push(T,A,A,C,C,T)}}const g=new(p.count>=65535?kh:zh)(u,1);g.version=x;const m=s.get(d);m&&e.remove(m),s.set(d,g)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function xM(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];t.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ne("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function yM(r,e,t){const i=new WeakMap,n=new vt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let E=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var f=E;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let T=o.attributes.position.count*_,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*d),y=new Bl(C,T,A,d);y.type=fi,y.needsUpdate=!0;const b=_*4;for(let I=0;I<d;I++){const B=m[I],z=v[I],U=S[I],L=T*A*4*I;for(let V=0;V<B.count;V++){const k=V*b;p===!0&&(n.fromBufferAttribute(B,V),C[L+k+0]=n.x,C[L+k+1]=n.y,C[L+k+2]=n.z,C[L+k+3]=0),x===!0&&(n.fromBufferAttribute(z,V),C[L+k+4]=n.x,C[L+k+5]=n.y,C[L+k+6]=n.z,C[L+k+7]=0),g===!0&&(n.fromBufferAttribute(U,V),C[L+k+8]=n.x,C[L+k+9]=n.y,C[L+k+10]=n.z,C[L+k+11]=U.itemSize===4?n.w:1)}}u={count:d,texture:y,size:new j(T,A)},i.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function _M(r,e,t,i,n){let s=new WeakMap;function a(c){const h=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const MM={[Sh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[wh]:"CINEON_TONE_MAPPING",[wl]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[Eh]:"NEUTRAL_TONE_MAPPING",[Th]:"CUSTOM_TONE_MAPPING"};function SM(r,e,t,i,n,s){const a=new Ot(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ve;c.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ae([0,2,0,0,2,0],2));const h=new jh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ae(c,h),u=new gr(-1,1,1,-1,0,1);let f=null,p=null,x=!1,g,m=null,v=[],S=!1;this.setSize=function(_,T){a.setSize(_,T),o!==null&&o.setSize(_,T),l!==null&&l.setSize(_,T);for(let A=0;A<v.length;A++){const C=v[A];C.setSize&&C.setSize(_,T)}},this.setEffects=function(_){v=_,S=v.length>0&&v[0].isRenderPass===!0;const T=a.width,A=a.height;v.length>0&&o===null&&(o=new Ot(T,A,{type:jt,depthBuffer:!1,stencilBuffer:!1}),l=new Ot(T,A,{type:jt,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const y=v[C];y.setSize&&y.setSize(T,A)}},this.begin=function(_,T){if(x||_.toneMapping===Wi&&v.length===0)return!1;if(m=T,T!==null){const A=T.width,C=T.height;(a.width!==A||a.height!==C)&&this.setSize(A,C)}return S===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Wi,!0},this.hasRenderPass=function(){return S},this.end=function(_,T){_.toneMapping=g,x=!0;let A=a,C=o;for(let y=0;y<v.length;y++){const b=v[y];b.enabled!==!1&&(b.render(_,C,A,T),b.needsSwap!==!1&&(A=C,C=C===o?l:o))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},at.getTransfer(f)===gt&&(h.defines.SRGB_TRANSFER="");const y=MM[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,_.setRenderTarget(m),_.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const $p=new Et,ph=new or(1,1),em=new Bl,tm=new Fl,im=new Ma,Hd=[],Gd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),qd=new Float32Array(4);function xr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Hd[n];if(s===void 0&&(s=new Float32Array(n),Hd[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Vt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ac(r,e){let t=Gd[e];t===void 0&&(t=new Int32Array(e),Gd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function bM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),Vt(t,e)}}function TM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),Vt(t,e)}}function AM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),Vt(t,e)}}function EM(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;qd.set(i),r.uniformMatrix2fv(this.addr,!1,qd),Vt(t,i)}}function CM(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;Xd.set(i),r.uniformMatrix3fv(this.addr,!1,Xd),Vt(t,i)}}function RM(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;Wd.set(i),r.uniformMatrix4fv(this.addr,!1,Wd),Vt(t,i)}}function PM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function IM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),Vt(t,e)}}function LM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),Vt(t,e)}}function DM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),Vt(t,e)}}function NM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function UM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),Vt(t,e)}}function BM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),Vt(t,e)}}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),Vt(t,e)}}function OM(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(ph.compareFunction=t.isReversedDepthBuffer()?Nl:Dl,s=ph):s=$p,t.setTexture2D(e||s,n)}function zM(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||tm,n)}function kM(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||im,n)}function VM(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||em,n)}function HM(r){switch(r){case 5126:return bM;case 35664:return wM;case 35665:return TM;case 35666:return AM;case 35674:return EM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return IM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return UM;case 36295:return BM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return VM}}function GM(r,e){r.uniform1fv(this.addr,e)}function WM(r,e){const t=xr(e,this.size,2);r.uniform2fv(this.addr,t)}function XM(r,e){const t=xr(e,this.size,3);r.uniform3fv(this.addr,t)}function qM(r,e){const t=xr(e,this.size,4);r.uniform4fv(this.addr,t)}function YM(r,e){const t=xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ZM(r,e){const t=xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function KM(r,e){const t=xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function JM(r,e){r.uniform1iv(this.addr,e)}function jM(r,e){r.uniform2iv(this.addr,e)}function QM(r,e){r.uniform3iv(this.addr,e)}function $M(r,e){r.uniform4iv(this.addr,e)}function eS(r,e){r.uniform1uiv(this.addr,e)}function tS(r,e){r.uniform2uiv(this.addr,e)}function iS(r,e){r.uniform3uiv(this.addr,e)}function nS(r,e){r.uniform4uiv(this.addr,e)}function sS(r,e,t){const i=this.cache,n=e.length,s=ac(t,n);kt(i,s)||(r.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=ph:a=$p;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function rS(r,e,t){const i=this.cache,n=e.length,s=ac(t,n);kt(i,s)||(r.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||tm,s[a])}function aS(r,e,t){const i=this.cache,n=e.length,s=ac(t,n);kt(i,s)||(r.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||im,s[a])}function oS(r,e,t){const i=this.cache,n=e.length,s=ac(t,n);kt(i,s)||(r.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||em,s[a])}function lS(r){switch(r){case 5126:return GM;case 35664:return WM;case 35665:return XM;case 35666:return qM;case 35674:return YM;case 35675:return ZM;case 35676:return KM;case 5124:case 35670:return JM;case 35667:case 35671:return jM;case 35668:case 35672:return QM;case 35669:case 35673:return $M;case 5125:return eS;case 36294:return tS;case 36295:return iS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return sS;case 35679:case 36299:case 36307:return rS;case 35680:case 36300:case 36308:case 36293:return aS;case 36289:case 36303:case 36311:case 36292:return oS}}class cS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HM(t.type)}}class hS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lS(t.type)}}class uS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function Yd(r,e){r.seq.push(e),r.map[e.id]=e}function dS(r,e,t){const i=r.name,n=i.length;for(Kc.lastIndex=0;;){const s=Kc.exec(i),a=Kc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Yd(t,c===void 0?new cS(o,r,e):new hS(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new uS(o),Yd(t,d)),t=d}}}class Ro{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);dS(o,l,this)}const n=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Zd(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const fS=37297;let pS=0;function mS(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Kd=new Ke;function gS(r){at._getMatrix(Kd,at.workingColorSpace,r);const e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(r)){case aa:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Jd(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+mS(r.getShaderSource(e),o)}else return s}function xS(r,e){const t=gS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const vS={[Sh]:"Linear",[bh]:"Reinhard",[wh]:"Cineon",[wl]:"ACESFilmic",[Ah]:"AgX",[Eh]:"Neutral",[Th]:"Custom"};function yS(r,e){const t=vS[e];return t===void 0?(fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vo=new R;function _S(){at.getLuminanceCoefficients(vo);const r=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function SS(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bS(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function zr(r){return r!==""}function jd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(r){return r.replace(wS,AS)}const TS=new Map;function AS(r,e){let t=$e[e];if(t===void 0){const i=TS.get(e);if(i!==void 0)t=$e[i],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mh(t)}const ES=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $d(r){return r.replace(ES,CS)}function CS(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function ef(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const RS={[Vr]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function PS(r){return RS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IS={[rn]:"ENVMAP_TYPE_CUBE",[zn]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE_UV"};function LS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":IS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const DS={[zn]:"ENVMAP_MODE_REFRACTION"};function NS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":DS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const US={[va]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function BS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":US[r.combine]||"ENVMAP_BLENDING_NONE"}function FS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function OS(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=PS(t),c=LS(t),h=NS(t),d=BS(t),u=FS(t),f=MS(t),p=SS(s),x=n.createProgram();let g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zr).join(`
`),m.length>0&&(m+=`
`)):(g=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),m=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Wi?yS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,xS("linearToOutputTexel",t.outputColorSpace),_S(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),a=mh(a),a=jd(a,t),a=Qd(a,t),o=mh(o),o=jd(o,t),o=Qd(o,t),a=$d(a),o=$d(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=v+g+a,_=v+m+o,T=Zd(n,n.VERTEX_SHADER,S),A=Zd(n,n.FRAGMENT_SHADER,_);n.attachShader(x,T),n.attachShader(x,A),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function C(I){if(r.debug.checkShaderErrors){const B=n.getProgramInfoLog(x)||"",z=n.getShaderInfoLog(T)||"",U=n.getShaderInfoLog(A)||"",L=B.trim(),V=z.trim(),k=U.trim();let K=!0,X=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,T,A);else{const Q=Jd(n,T,"vertex"),$=Jd(n,A,"fragment");Ne("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+Q+`
`+$)}else L!==""?fe("WebGLProgram: Program Info Log:",L):(V===""||k==="")&&(X=!1);X&&(I.diagnostics={runnable:K,programLog:L,vertexShader:{log:V,prefix:g},fragmentShader:{log:k,prefix:m}})}n.deleteShader(T),n.deleteShader(A),y=new Ro(n,x),b=bS(n,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=n.getProgramParameter(x,fS)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}let zS=0;class kS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new VS(e),t.set(e,i)),i}}class VS{constructor(e){this.id=zS++,this.code=e,this.usedTimes=0}}function HS(r){return r===kn||r===ta||r===ia}function GS(r,e,t,i,n,s){const a=new Ol,o=new kS,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,b,E,I,B,z){const U=I.fog,L=B.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=e.get(y.envMap||V,k),X=K&&K.mapping===ur?K.image.height:null,Q=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&fe("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const $=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Re=$!==void 0?$.length:0;let we=0;L.morphAttributes.position!==void 0&&(we=1),L.morphAttributes.normal!==void 0&&(we=2),L.morphAttributes.color!==void 0&&(we=3);let dt,nt,lt,J;if(Q){const Mt=Vi[Q];dt=Mt.vertexShader,nt=Mt.fragmentShader}else{dt=y.vertexShader,nt=y.fragmentShader;const Mt=o.getVertexShaderStage(y),pt=o.getFragmentShaderStage(y);o.update(y,Mt,pt),lt=Mt.id,J=pt.id}const ie=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),He=B.isInstancedMesh===!0,Te=B.isBatchedMesh===!0,We=!!y.map,xt=!!y.matcap,ne=!!K,oe=!!y.aoMap,le=!!y.lightMap,ce=!!y.bumpMap&&y.wireframe===!1,de=!!y.normalMap,ze=!!y.displacementMap,Oe=!!y.emissiveMap,Xe=!!y.metalnessMap,Je=!!y.roughnessMap,D=y.anisotropy>0,ft=y.clearcoat>0,st=y.dispersion>0,P=y.retroreflectivity>0,M=y.iridescence>0,O=y.sheen>0,W=y.transmission>0,Y=D&&!!y.anisotropyMap,he=ft&&!!y.clearcoatMap,ue=ft&&!!y.clearcoatNormalMap,Z=ft&&!!y.clearcoatRoughnessMap,te=M&&!!y.iridescenceMap,pe=M&&!!y.iridescenceThicknessMap,Ue=O&&!!y.sheenColorMap,ye=O&&!!y.sheenRoughnessMap,me=!!y.specularMap,Be=!!y.specularColorMap,ke=!!y.specularIntensityMap,je=W&&!!y.transmissionMap,F=W&&!!y.thicknessMap,ge=!!y.gradientMap,ee=!!y.alphaMap,xe=y.alphaTest>0,be=!!y.alphaHash,re=!!y.extensions;let Fe=Wi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const Le={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:dt,fragmentShader:nt,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Te,batchingColor:Te&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:xt,envMap:ne,envMapMode:ne&&K.mapping,envMapCubeUVHeight:X,aoMap:oe,lightMap:le,bumpMap:ce,normalMap:de,displacementMap:ze,emissiveMap:Oe,normalMapObjectSpace:de&&y.normalMapType===Yf,normalMapTangentSpace:de&&y.normalMapType===_n,packedNormalMap:de&&y.normalMapType===_n&&HS(y.normalMap.format),metalnessMap:Xe,roughnessMap:Je,anisotropy:D,anisotropyMap:Y,clearcoat:ft,clearcoatMap:he,clearcoatNormalMap:ue,clearcoatRoughnessMap:Z,dispersion:st,retroreflection:P,iridescence:M,iridescenceMap:te,iridescenceThicknessMap:pe,sheen:O,sheenColorMap:Ue,sheenRoughnessMap:ye,specularMap:me,specularColorMap:Be,specularIntensityMap:ke,transmission:W,transmissionMap:je,thicknessMap:F,gradientMap:ge,opaque:y.transparent===!1&&y.blending===Bn&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:xe,alphaHash:be,combine:y.combine,mapUv:We&&p(y.map.channel),aoMapUv:oe&&p(y.aoMap.channel),lightMapUv:le&&p(y.lightMap.channel),bumpMapUv:ce&&p(y.bumpMap.channel),normalMapUv:de&&p(y.normalMap.channel),displacementMapUv:ze&&p(y.displacementMap.channel),emissiveMapUv:Oe&&p(y.emissiveMap.channel),metalnessMapUv:Xe&&p(y.metalnessMap.channel),roughnessMapUv:Je&&p(y.roughnessMap.channel),anisotropyMapUv:Y&&p(y.anisotropyMap.channel),clearcoatMapUv:he&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&p(y.sheenRoughnessMap.channel),specularMapUv:me&&p(y.specularMap.channel),specularColorMapUv:Be&&p(y.specularColorMap.channel),specularIntensityMapUv:ke&&p(y.specularIntensityMap.channel),transmissionMapUv:je&&p(y.transmissionMap.channel),thicknessMapUv:F&&p(y.thicknessMap.channel),alphaMapUv:ee&&p(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(de||D),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(We||ee),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&de===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:we,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&E.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:Oe&&y.emissiveMap.isVideoTexture===!0&&at.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xt,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function g(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const E in y.defines)b.push(E),b.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(m(b,y),v(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){const b=f[y.type];let E;if(b){const I=Vi[b];E=Fn.clone(I.uniforms)}else E=y.uniforms;return E}function _(y,b){let E=h.get(b);return E!==void 0?++E.usedTimes:(E=new OS(r,b,y,n),c.push(E),h.set(b,E)),E}function T(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function WS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function XS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function tf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nf(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let v=r[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},r[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),e++,v}function l(u,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);const S=o(u,f,p,x,g,m);p.transmission>0?i.push(S):p.transparent===!0?n.push(S):t.push(S)}function c(u,f,p,x,g,m){const v=o(u,f,p,x,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||XS),i.length>1&&i.sort(f||tf),n.length>1&&n.sort(f||tf)}function d(){for(let u=e,f=r.length;u<f;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function qS(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new nf,r.set(i,[a])):n>=s.length?(a=new nf,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function YS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new se};break;case"SpotLight":t={position:new R,direction:new R,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function ZS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let KS=0;function JS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function jS(r){const e=new YS,t=ZS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const n=new R,s=new qe,a=new qe;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,S=0,_=0,T=0,A=0,C=0,y=0,b=0,E=0;c.sort(JS);for(let B=0,z=c.length;B<z;B++){const U=c[B],L=U.color,V=U.intensity,k=U.distance;let K=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===kn?K=U.shadow.map.texture:K=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=L.r*V,d+=L.g*V,u+=L.b*V;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],V);E++}else if(U.isSunLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,$=t.get(U);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[p]=$,i.sunShadowMap[p]=K;const Re=Q.getViewportCount();for(let we=0;we<Re;we++)i.sunShadowMatrix[x+we]=Q.getMatrix(we),i.sunShadowCascade[x+we]=Q._cascadeData[we];x+=Re,p++}i.sun[f]=X,f++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Q=U.shadow,$=t.get(U);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.directionalShadow[g]=$,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=U.shadow.matrix,T++}i.directional[g]=X,g++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(L).multiplyScalar(V),X.distance=k,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[v]=X;const Q=U.shadow;if(U.map&&(i.spotLightMap[y]=U.map,y++,Q.updateMatrices(U),U.castShadow&&b++),i.spotLightMatrix[v]=Q.matrix,U.castShadow){const $=t.get(U);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=K,C++}v++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(L).multiplyScalar(V),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[S]=X,S++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Q=U.shadow,$=t.get(U);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=U.shadow.matrix,A++}i.point[m]=X,m++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(V),X.groundColor.copy(U.groundColor).multiplyScalar(V),i.hemi[_]=X,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==S||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==T||I.numPointShadows!==A||I.numSpotShadows!==C||I.numSpotMaps!==y||I.numLightProbes!==E)&&(i.sun.length=f,i.directional.length=g,i.spot.length=v,i.rectArea.length=S,i.point.length=m,i.hemi.length=_,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=E,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=v,I.rectAreaLength=S,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=T,I.numPointShadows=A,I.numSpotShadows=C,I.numSpotMaps=y,I.numLightProbes=E,i.version=KS++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const _=c[v];if(_.isSunLight){const T=i.sun[d];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),d++}else if(_.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(m),u++}else if(_.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function sf(r){const e=new jS(r),t=[],i=[],n=[];function s(u){d.camera=u,t.length=0,i.length=0,n.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){n.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function QS(r){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let o;return a===void 0?(o=new sf(r),e.set(n,[o])):s>=a.length?(o=new sf(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tb=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],ib=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],rf=new qe,Lr=new R,Jc=new R;function nb(r,e,t){let i=new gs;const n=new j,s=new j,a=new vt,o=new $h,l=new eu,c={},h=t.maxTextureSize,d={[On]:Jt,[Jt]:On,[Xt]:Xt},u=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:$S,fragmentShader:eb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ve;p.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ae(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let m=this.type;this.render=function(A,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===yh&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr);const b=r.getRenderTarget(),E=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Gi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=m!==this.type;z&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(L=>L.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,L=A.length;U<L;U++){const V=A[U],k=V.shadow;if(k===void 0){fe("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const K=k.getFrameExtents();n.multiply(K),s.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/K.x),n.x=s.x*K.x,k.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/K.y),n.y=s.y*K.y,k.mapSize.y=s.y));const X=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===js){if(V.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ot(n.x,n.y,{format:kn,type:jt,minFilter:bt,magFilter:bt,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new or(n.x,n.y,fi),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=an,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pt,k.map.depthTexture.magFilter=Pt}else V.isPointLight?(k.map=new pu(n.x),k.map.depthTexture=new dp(n.x,Di)):(k.map=new Ot(n.x,n.y),k.map.depthTexture=new or(n.x,n.y,Di)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=an,this.type===Vr?(k.map.depthTexture.compareFunction=X?Nl:Dl,k.map.depthTexture.minFilter=bt,k.map.depthTexture.magFilter=bt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pt,k.map.depthTexture.magFilter=Pt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==n.x||k.map.height!==n.y)&&k.map.setSize(n.x,n.y);const Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();V.isPointLight!==!0&&k.updateMatrices(V,y);for(let $=0;$<Q;$++){const Re=k.getCamera($);if(V.isPointLight){const we=k.camera,dt=k.matrix,nt=V.distance||we.far;nt!==we.far&&(we.far=nt,we.updateProjectionMatrix()),Lr.setFromMatrixPosition(V.matrixWorld),we.position.copy(Lr),Jc.copy(we.position),Jc.add(tb[$]),we.up.copy(ib[$]),we.lookAt(Jc),we.updateMatrixWorld(),dt.makeTranslation(-Lr.x,-Lr.y,-Lr.z),rf.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),k._frustum.setFromProjectionMatrix(rf,we.coordinateSystem,we.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,$),r.clear();else{$===0&&(r.setRenderTarget(k.map),r.clear());const we=k.getViewport($);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),B.viewport(a)}i=k.getFrustum($),_(C,y,Re,V,this.type)}k.isPointLightShadow!==!0&&this.type===js&&v(k,y),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(b,E,I)};function v(A,C){const y=e.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ot(n.x,n.y,{format:kn,type:jt}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,y,u,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,y,f,x,null)}function S(A,C,y,b){let E=null;const I=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)E=I;else if(E=y.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=E.uuid,z=C.uuid;let U=c[B];U===void 0&&(U={},c[B]=U);let L=U[z];L===void 0&&(L=E.clone(),U[z]=L,C.addEventListener("dispose",T)),E=L}if(E.visible=C.visible,E.wireframe=C.wireframe,b===js?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=r.properties.get(E);B.light=y}return E}function _(A,C,y,b,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===js)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const z=e.update(A),U=A.material;if(Array.isArray(U)){const L=z.groups;for(let V=0,k=L.length;V<k;V++){const K=L[V],X=U[K.materialIndex];if(X&&X.visible){const Q=S(A,X,b,E);A.onBeforeShadow(r,A,C,y,z,Q,K),r.renderBufferDirect(y,null,z,Q,A,K),A.onAfterShadow(r,A,C,y,z,Q,K)}}}else if(U.visible){const L=S(A,U,b,E);A.onBeforeShadow(r,A,C,y,z,L,null),r.renderBufferDirect(y,null,z,L,A,null),A.onAfterShadow(r,A,C,y,z,L,null)}}const B=A.children;for(let z=0,U=B.length;z<U;z++)_(B[z],C,y,b,E)}function T(A){A.target.removeEventListener("dispose",T);for(const y in c){const b=c[y],E=A.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function sb(r,e){function t(){let F=!1;const ge=new vt;let ee=null;const xe=new vt(0,0,0,0);return{setMask:function(be){ee!==be&&!F&&(r.colorMask(be,be,be,be),ee=be)},setLocked:function(be){F=be},setClear:function(be,re,Fe,Le,Mt){Mt===!0&&(be*=Le,re*=Le,Fe*=Le),ge.set(be,re,Fe,Le),xe.equals(ge)===!1&&(r.clearColor(be,re,Fe,Le),xe.copy(ge))},reset:function(){F=!1,ee=null,xe.set(-1,0,0,0)}}}function i(){let F=!1,ge=!1,ee=null,xe=null,be=null;return{setReversed:function(re){if(ge!==re){const Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ge=re;const Le=be;be=null,this.setClear(Le)}},getReversed:function(){return ge},setTest:function(re){re?ie(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(re){ee!==re&&!F&&(r.depthMask(re),ee=re)},setFunc:function(re){if(ge&&(re=x0[re]),xe!==re){switch(re){case Lo:r.depthFunc(r.NEVER);break;case Do:r.depthFunc(r.ALWAYS);break;case No:r.depthFunc(r.LESS);break;case ir:r.depthFunc(r.LEQUAL);break;case Uo:r.depthFunc(r.EQUAL);break;case Bo:r.depthFunc(r.GEQUAL);break;case Fo:r.depthFunc(r.GREATER);break;case Oo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=re}},setLocked:function(re){F=re},setClear:function(re){be!==re&&(be=re,ge&&(re=1-re),r.clearDepth(re))},reset:function(){F=!1,ee=null,xe=null,be=null,ge=!1}}}function n(){let F=!1,ge=null,ee=null,xe=null,be=null,re=null,Fe=null,Le=null,Mt=null;return{setTest:function(pt){F||(pt?ie(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(pt){ge!==pt&&!F&&(r.stencilMask(pt),ge=pt)},setFunc:function(pt,Ui,Ji){(ee!==pt||xe!==Ui||be!==Ji)&&(r.stencilFunc(pt,Ui,Ji),ee=pt,xe=Ui,be=Ji)},setOp:function(pt,Ui,Ji){(re!==pt||Fe!==Ui||Le!==Ji)&&(r.stencilOp(pt,Ui,Ji),re=pt,Fe=Ui,Le=Ji)},setLocked:function(pt){F=pt},setClear:function(pt){Mt!==pt&&(r.clearStencil(pt),Mt=pt)},reset:function(){F=!1,ge=null,ee=null,xe=null,be=null,re=null,Fe=null,Le=null,Mt=null}}}const s=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,S=null,_=null,T=null,A=null,C=null,y=new se(0,0,0),b=0,E=!1,I=null,B=null,z=null,U=null,L=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=K>=2);let Q=null,$={};const Re=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),dt=new vt().fromArray(Re),nt=new vt().fromArray(we);function lt(F,ge,ee,xe){const be=new Uint8Array(4),re=r.createTexture();r.bindTexture(F,re),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<ee;Fe++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(ge+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return re}const J={};J[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(r.DEPTH_TEST),a.setFunc(ir),ce(!1),de(th),ie(r.CULL_FACE),oe(Gi);function ie(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function _e(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function He(F,ge){return u[F]!==ge?(r.bindFramebuffer(F,ge),u[F]=ge,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ge),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function Te(F,ge){let ee=p,xe=!1;if(F){ee=f.get(ge),ee===void 0&&(ee=[],f.set(ge,ee));const be=F.textures;if(ee.length!==be.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let re=0,Fe=be.length;re<Fe;re++)ee[re]=r.COLOR_ATTACHMENT0+re;ee.length=be.length,xe=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,xe=!0);xe&&r.drawBuffers(ee)}function We(F){return x!==F?(r.useProgram(F),x=F,!0):!1}const xt={[os]:r.FUNC_ADD,[bf]:r.FUNC_SUBTRACT,[wf]:r.FUNC_REVERSE_SUBTRACT};xt[Tf]=r.MIN,xt[Af]=r.MAX;const ne={[Ef]:r.ZERO,[Cf]:r.ONE,[Rf]:r.SRC_COLOR,[_h]:r.SRC_ALPHA,[Uf]:r.SRC_ALPHA_SATURATE,[Df]:r.DST_COLOR,[If]:r.DST_ALPHA,[Pf]:r.ONE_MINUS_SRC_COLOR,[Mh]:r.ONE_MINUS_SRC_ALPHA,[Nf]:r.ONE_MINUS_DST_COLOR,[Lf]:r.ONE_MINUS_DST_ALPHA,[Bf]:r.CONSTANT_COLOR,[Ff]:r.ONE_MINUS_CONSTANT_COLOR,[Of]:r.CONSTANT_ALPHA,[zf]:r.ONE_MINUS_CONSTANT_ALPHA};function oe(F,ge,ee,xe,be,re,Fe,Le,Mt,pt){if(F===Gi){g===!0&&(_e(r.BLEND),g=!1);return}if(g===!1&&(ie(r.BLEND),g=!0),F!==Sf){if(F!==m||pt!==E){if((v!==os||T!==os)&&(r.blendEquation(r.FUNC_ADD),v=os,T=os),pt)switch(F){case Bn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $t:r.blendFunc(r.ONE,r.ONE);break;case ih:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ne("WebGLState: Invalid blending: ",F);break}else switch(F){case Bn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $t:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ih:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",F);break}S=null,_=null,A=null,C=null,y.set(0,0,0),b=0,m=F,E=pt}return}be=be||ge,re=re||ee,Fe=Fe||xe,(ge!==v||be!==T)&&(r.blendEquationSeparate(xt[ge],xt[be]),v=ge,T=be),(ee!==S||xe!==_||re!==A||Fe!==C)&&(r.blendFuncSeparate(ne[ee],ne[xe],ne[re],ne[Fe]),S=ee,_=xe,A=re,C=Fe),(Le.equals(y)===!1||Mt!==b)&&(r.blendColor(Le.r,Le.g,Le.b,Mt),y.copy(Le),b=Mt),m=F,E=!1}function le(F,ge){F.side===Xt?_e(r.CULL_FACE):ie(r.CULL_FACE);let ee=F.side===Jt;ge&&(ee=!ee),ce(ee),F.blending===Bn&&F.transparent===!1?oe(Gi):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const xe=F.stencilWrite;o.setTest(xe),xe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){I!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),I=F)}function de(F){F!==_f?(ie(r.CULL_FACE),F!==B&&(F===th?r.cullFace(r.BACK):F===Mf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),B=F}function ze(F){F!==z&&(k&&r.lineWidth(F),z=F)}function Oe(F,ge,ee){F?(ie(r.POLYGON_OFFSET_FILL),(U!==ge||L!==ee)&&(U=ge,L=ee,a.getReversed()&&(ge=-ge),r.polygonOffset(ge,ee))):_e(r.POLYGON_OFFSET_FILL)}function Xe(F){F?ie(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function Je(F){F===void 0&&(F=r.TEXTURE0+V-1),Q!==F&&(r.activeTexture(F),Q=F)}function D(F,ge,ee){ee===void 0&&(Q===null?ee=r.TEXTURE0+V-1:ee=Q);let xe=$[ee];xe===void 0&&(xe={type:void 0,texture:void 0},$[ee]=xe),(xe.type!==F||xe.texture!==ge)&&(Q!==ee&&(r.activeTexture(ee),Q=ee),r.bindTexture(F,ge||J[F]),xe.type=F,xe.texture=ge)}function ft(){const F=$[Q];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function st(){try{r.compressedTexImage2D(...arguments)}catch(F){Ne("WebGLState:",F)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(F){Ne("WebGLState:",F)}}function M(){try{r.texSubImage2D(...arguments)}catch(F){Ne("WebGLState:",F)}}function O(){try{r.texSubImage3D(...arguments)}catch(F){Ne("WebGLState:",F)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(F){Ne("WebGLState:",F)}}function Y(){try{r.compressedTexSubImage3D(...arguments)}catch(F){Ne("WebGLState:",F)}}function he(){try{r.texStorage2D(...arguments)}catch(F){Ne("WebGLState:",F)}}function ue(){try{r.texStorage3D(...arguments)}catch(F){Ne("WebGLState:",F)}}function Z(){try{r.texImage2D(...arguments)}catch(F){Ne("WebGLState:",F)}}function te(){try{r.texImage3D(...arguments)}catch(F){Ne("WebGLState:",F)}}function pe(F){return d[F]!==void 0?d[F]:r.getParameter(F)}function Ue(F,ge){d[F]!==ge&&(r.pixelStorei(F,ge),d[F]=ge)}function ye(F){dt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),dt.copy(F))}function me(F){nt.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function Be(F,ge){let ee=c.get(ge);ee===void 0&&(ee=new WeakMap,c.set(ge,ee));let xe=ee.get(F);xe===void 0&&(xe=r.getUniformBlockIndex(ge,F.name),ee.set(F,xe))}function ke(F,ge){const xe=c.get(ge).get(F);l.get(ge)!==xe&&(r.uniformBlockBinding(ge,xe,F.__bindingPointIndex),l.set(ge,xe))}function je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,$={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,S=null,_=null,T=null,A=null,C=null,y=new se(0,0,0),b=0,E=!1,I=null,B=null,z=null,U=null,L=null,dt.set(0,0,r.canvas.width,r.canvas.height),nt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:_e,bindFramebuffer:He,drawBuffers:Te,useProgram:We,setBlending:oe,setMaterial:le,setFlipSided:ce,setCullFace:de,setLineWidth:ze,setPolygonOffset:Oe,setScissorTest:Xe,activeTexture:Je,bindTexture:D,unbindTexture:ft,compressedTexImage2D:st,compressedTexImage3D:P,texImage2D:Z,texImage3D:te,pixelStorei:Ue,getParameter:pe,updateUBOMapping:Be,uniformBlockBinding:ke,texStorage2D:he,texStorage3D:ue,texSubImage2D:M,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:ye,viewport:me,reset:je}}function rb(r,e,t,i,n,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return p?new OffscreenCanvas(P,M):oa("canvas")}function g(P,M,O){let W=1;const Y=st(P);if((Y.width>O||Y.height>O)&&(W=O/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(W*Y.width),ue=Math.floor(W*Y.height);u===void 0&&(u=x(he,ue));const Z=M?x(he,ue):u;return Z.width=he,Z.height=ue,Z.getContext("2d").drawImage(P,0,0,he,ue),fe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+he+"x"+ue+")."),Z}else return"data"in P&&fe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),P;return P}function m(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(P,M,O,W,Y,he=!1){if(P!==null){if(r[P]!==void 0)return r[P];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;W&&(ue=e.get("EXT_texture_norm16"),ue||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===r.RED&&(O===r.FLOAT&&(Z=r.R32F),O===r.HALF_FLOAT&&(Z=r.R16F),O===r.UNSIGNED_BYTE&&(Z=r.R8),O===r.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),O===r.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),M===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.R8UI),O===r.UNSIGNED_SHORT&&(Z=r.R16UI),O===r.UNSIGNED_INT&&(Z=r.R32UI),O===r.BYTE&&(Z=r.R8I),O===r.SHORT&&(Z=r.R16I),O===r.INT&&(Z=r.R32I)),M===r.RG&&(O===r.FLOAT&&(Z=r.RG32F),O===r.HALF_FLOAT&&(Z=r.RG16F),O===r.UNSIGNED_BYTE&&(Z=r.RG8),O===r.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),O===r.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.RG8UI),O===r.UNSIGNED_SHORT&&(Z=r.RG16UI),O===r.UNSIGNED_INT&&(Z=r.RG32UI),O===r.BYTE&&(Z=r.RG8I),O===r.SHORT&&(Z=r.RG16I),O===r.INT&&(Z=r.RG32I)),M===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),O===r.UNSIGNED_INT&&(Z=r.RGB32UI),O===r.BYTE&&(Z=r.RGB8I),O===r.SHORT&&(Z=r.RGB16I),O===r.INT&&(Z=r.RGB32I)),M===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),O===r.UNSIGNED_INT&&(Z=r.RGBA32UI),O===r.BYTE&&(Z=r.RGBA8I),O===r.SHORT&&(Z=r.RGBA16I),O===r.INT&&(Z=r.RGBA32I)),M===r.RGB&&(O===r.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),O===r.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),O===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),M===r.RGBA){const te=he?aa:at.getTransfer(Y);O===r.FLOAT&&(Z=r.RGBA32F),O===r.HALF_FLOAT&&(Z=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Z=te===gt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),O===r.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),O===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(P,M){let O;return P?M===null||M===Di||M===sr?O=r.DEPTH24_STENCIL8:M===fi?O=r.DEPTH32F_STENCIL8:M===nr&&(O=r.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===sr?O=r.DEPTH_COMPONENT24:M===fi?O=r.DEPTH_COMPONENT32F:M===nr&&(O=r.DEPTH_COMPONENT16),O}function A(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pt&&P.minFilter!==bt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){const M=P.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function y(P){const M=P.target;M.removeEventListener("dispose",y),I(M)}function b(P){const M=i.get(P);if(M.__webglInit===void 0)return;const O=P.source,W=f.get(O);if(W){const Y=W[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(P),Object.keys(W).length===0&&f.delete(O)}i.remove(P)}function E(P){const M=i.get(P);r.deleteTexture(M.__webglTexture);const O=P.source,W=f.get(O);delete W[M.__cacheKey],a.memory.textures--}function I(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let Y=0;Y<M.__webglFramebuffer[W].length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[W][Y]);else r.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)r.deleteFramebuffer(M.__webglFramebuffer[W]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=P.textures;for(let W=0,Y=O.length;W<Y;W++){const he=i.get(O[W]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(O[W])}i.remove(P)}let B=0;function z(){B=0}function U(){return B}function L(P){B=P}function V(){const P=B;return P>=n.maxTextures&&fe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+n.maxTextures),B+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function K(P,M){const O=i.get(P);if(P.isVideoTexture&&D(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&O.__version!==P.version){const W=P.image;if(W===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(O,P,M);return}}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+M)}function X(P,M){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){_e(O,P,M);return}else P.isExternalTexture&&(O.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+M)}function Q(P,M){const O=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&O.__version!==P.version){_e(O,P,M);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+M)}function $(P,M){const O=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&O.__version!==P.version){He(O,P,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+M)}const Re={[Xi]:r.REPEAT,[Mi]:r.CLAMP_TO_EDGE,[ea]:r.MIRRORED_REPEAT},we={[Pt]:r.NEAREST,[Ch]:r.NEAREST_MIPMAP_NEAREST,[Qs]:r.NEAREST_MIPMAP_LINEAR,[bt]:r.LINEAR,[Wr]:r.LINEAR_MIPMAP_NEAREST,[nn]:r.LINEAR_MIPMAP_LINEAR},dt={[Kf]:r.NEVER,[ep]:r.ALWAYS,[Jf]:r.LESS,[Dl]:r.LEQUAL,[jf]:r.EQUAL,[Nl]:r.GEQUAL,[Qf]:r.GREATER,[$f]:r.NOTEQUAL};function nt(P,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===bt||M.magFilter===Wr||M.magFilter===Qs||M.magFilter===nn||M.minFilter===bt||M.minFilter===Wr||M.minFilter===Qs||M.minFilter===nn)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Re[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Re[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Re[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,we[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,we[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,dt[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pt||M.minFilter!==Qs&&M.minFilter!==nn||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function lt(P,M){let O=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));const W=M.source;let Y=f.get(W);Y===void 0&&(Y={},f.set(W,Y));const he=k(M);if(he!==P.__cacheKey){Y[he]===void 0&&(Y[he]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Y[he].usedTimes++;const ue=Y[P.__cacheKey];ue!==void 0&&(Y[P.__cacheKey].usedTimes--,ue.usedTimes===0&&E(M)),P.__cacheKey=he,P.__webglTexture=Y[he].texture}return O}function J(P,M,O){return Math.floor(Math.floor(P/O)/M)}function ie(P,M,O,W){const he=P.updateRanges;if(he.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,O,W,M.data);else{he.sort((Ue,ye)=>Ue.start-ye.start);let ue=0;for(let Ue=1;Ue<he.length;Ue++){const ye=he[ue],me=he[Ue],Be=ye.start+ye.count,ke=J(me.start,M.width,4),je=J(ye.start,M.width,4);me.start<=Be+1&&ke===je&&J(me.start+me.count-1,M.width,4)===ke?ye.count=Math.max(ye.count,me.start+me.count-ye.start):(++ue,he[ue]=me)}he.length=ue+1;const Z=t.getParameter(r.UNPACK_ROW_LENGTH),te=t.getParameter(r.UNPACK_SKIP_PIXELS),pe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ue=0,ye=he.length;Ue<ye;Ue++){const me=he[Ue],Be=Math.floor(me.start/4),ke=Math.ceil(me.count/4),je=Be%M.width,F=Math.floor(Be/M.width),ge=ke,ee=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,je),t.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,je,F,ge,ee,O,W,M.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Z),t.pixelStorei(r.UNPACK_SKIP_PIXELS,te),t.pixelStorei(r.UNPACK_SKIP_ROWS,pe)}}function _e(P,M,O){let W=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=r.TEXTURE_3D);const Y=lt(P,M),he=M.source;t.bindTexture(W,P.__webglTexture,r.TEXTURE0+O);const ue=i.get(he);if(he.version!==ue.__version||Y===!0){if(t.activeTexture(r.TEXTURE0+O),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ee=at.getPrimaries(at.workingColorSpace),xe=M.colorSpace===pn?null:at.getPrimaries(M.colorSpace),be=M.colorSpace===pn||ee===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let te=g(M.image,!1,n.maxTextureSize);te=ft(M,te);const pe=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type);let ye=_(M.internalFormat,pe,Ue,M.normalized,M.colorSpace,M.isVideoTexture);nt(W,M);let me;const Be=M.mipmaps,ke=M.isVideoTexture!==!0,je=ue.__version===void 0||Y===!0,F=he.dataReady,ge=A(M,te);if(M.isDepthTexture)ye=T(M.format===Un,M.type),je&&(ke?t.texStorage2D(r.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,ye,te.width,te.height,0,pe,Ue,null));else if(M.isDataTexture)if(Be.length>0){ke&&je&&t.texStorage2D(r.TEXTURE_2D,ge,ye,Be[0].width,Be[0].height);for(let ee=0,xe=Be.length;ee<xe;ee++)me=Be[ee],ke?F&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,me.width,me.height,pe,Ue,me.data):t.texImage2D(r.TEXTURE_2D,ee,ye,me.width,me.height,0,pe,Ue,me.data);M.generateMipmaps=!1}else ke?(je&&t.texStorage2D(r.TEXTURE_2D,ge,ye,te.width,te.height),F&&ie(M,te,pe,Ue)):t.texImage2D(r.TEXTURE_2D,0,ye,te.width,te.height,0,pe,Ue,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,ye,Be[0].width,Be[0].height,te.depth);for(let ee=0,xe=Be.length;ee<xe;ee++)if(me=Be[ee],M.format!==Kt)if(pe!==null)if(ke){if(F)if(M.layerUpdates.size>0){const be=fh(me.width,me.height,M.format,M.type);for(const re of M.layerUpdates){const Fe=me.data.subarray(re*be/me.data.BYTES_PER_ELEMENT,(re+1)*be/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,re,me.width,me.height,1,pe,Fe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,te.depth,pe,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,ye,me.width,me.height,te.depth,0,me.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,te.depth,pe,Ue,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,ye,me.width,me.height,te.depth,0,pe,Ue,me.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ke&&je&&t.texStorage2D(r.TEXTURE_2D,ge,ye,Be[0].width,Be[0].height);for(let ee=0,xe=Be.length;ee<xe;ee++)me=Be[ee],M.format!==Kt?pe!==null?ke?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,ye,me.width,me.height,0,me.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?F&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,me.width,me.height,pe,Ue,me.data):t.texImage2D(r.TEXTURE_2D,ee,ye,me.width,me.height,0,pe,Ue,me.data)}else if(M.isDataArrayTexture)if(ke){if(je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,ye,te.width,te.height,te.depth),F)if(M.layerUpdates.size>0){const ee=fh(te.width,te.height,M.format,M.type);for(const xe of M.layerUpdates){const be=te.data.subarray(xe*ee/te.data.BYTES_PER_ELEMENT,(xe+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,te.width,te.height,1,pe,Ue,be)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Ue,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,pe,Ue,te.data);else if(M.isData3DTexture)ke?(je&&t.texStorage3D(r.TEXTURE_3D,ge,ye,te.width,te.height,te.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Ue,te.data)):t.texImage3D(r.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,pe,Ue,te.data);else if(M.isFramebufferTexture){if(je)if(ke)t.texStorage2D(r.TEXTURE_2D,ge,ye,te.width,te.height);else{let ee=te.width,xe=te.height;for(let be=0;be<ge;be++)t.texImage2D(r.TEXTURE_2D,be,ye,ee,xe,0,pe,Ue,null),ee>>=1,xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const ee=r.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(M),ee.onpaint=xe=>{const be=xe.changedElements;for(const re of d)be.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,te);else{const be=r.RGBA,re=r.RGBA,Fe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,be,re,Fe,te)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Be.length>0){if(ke&&je){const ee=st(Be[0]);t.texStorage2D(r.TEXTURE_2D,ge,ye,ee.width,ee.height)}for(let ee=0,xe=Be.length;ee<xe;ee++)me=Be[ee],ke?F&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,pe,Ue,me):t.texImage2D(r.TEXTURE_2D,ee,ye,pe,Ue,me);M.generateMipmaps=!1}else if(ke){if(je){const ee=st(te);t.texStorage2D(r.TEXTURE_2D,ge,ye,ee.width,ee.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Ue,te)}else t.texImage2D(r.TEXTURE_2D,0,ye,pe,Ue,te);m(M)&&v(W),ue.__version=he.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function He(P,M,O){if(M.image.length!==6)return;const W=lt(P,M),Y=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+O);const he=i.get(Y);if(Y.version!==he.__version||W===!0){t.activeTexture(r.TEXTURE0+O);const ue=at.getPrimaries(at.workingColorSpace),Z=M.colorSpace===pn?null:at.getPrimaries(M.colorSpace),te=M.colorSpace===pn||ue===Z?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const pe=M.isCompressedTexture||M.image[0].isCompressedTexture,Ue=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let re=0;re<6;re++)!pe&&!Ue?ye[re]=g(M.image[re],!0,n.maxCubemapSize):ye[re]=Ue?M.image[re].image:M.image[re],ye[re]=ft(M,ye[re]);const me=ye[0],Be=s.convert(M.format,M.colorSpace),ke=s.convert(M.type),je=_(M.internalFormat,Be,ke,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,ge=he.__version===void 0||W===!0,ee=Y.dataReady;let xe=A(M,me);nt(r.TEXTURE_CUBE_MAP,M);let be;if(pe){F&&ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,je,me.width,me.height);for(let re=0;re<6;re++){be=ye[re].mipmaps;for(let Fe=0;Fe<be.length;Fe++){const Le=be[Fe];M.format!==Kt?Be!==null?F?ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Le.width,Le.height,Be,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,je,Le.width,Le.height,0,Le.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Le.width,Le.height,Be,ke,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,je,Le.width,Le.height,0,Be,ke,Le.data)}}}else{if(be=M.mipmaps,F&&ge){be.length>0&&xe++;const re=st(ye[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,je,re.width,re.height)}for(let re=0;re<6;re++)if(Ue){F?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ye[re].width,ye[re].height,Be,ke,ye[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,ye[re].width,ye[re].height,0,Be,ke,ye[re].data);for(let Fe=0;Fe<be.length;Fe++){const Mt=be[Fe].image[re].image;F?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,Mt.width,Mt.height,Be,ke,Mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,je,Mt.width,Mt.height,0,Be,ke,Mt.data)}}else{F?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Be,ke,ye[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,Be,ke,ye[re]);for(let Fe=0;Fe<be.length;Fe++){const Le=be[Fe];F?ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,Be,ke,Le.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,je,Be,ke,Le.image[re])}}}m(M)&&v(r.TEXTURE_CUBE_MAP),he.__version=Y.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Te(P,M,O,W,Y,he){const ue=s.convert(O.format,O.colorSpace),Z=s.convert(O.type),te=_(O.internalFormat,ue,Z,O.normalized,O.colorSpace),pe=i.get(M),Ue=i.get(O);if(Ue.__renderTarget=M,!pe.__hasExternalTextures){const ye=Math.max(1,M.width>>he),me=Math.max(1,M.height>>he);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?t.texImage3D(Y,he,te,ye,me,M.depth,0,ue,Z,null):t.texImage2D(Y,he,te,ye,me,0,ue,Z,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Je(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,Y,Ue.__webglTexture,0,Xe(M)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,Y,Ue.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(P,M,O){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const W=M.depthTexture,Y=W&&W.isDepthTexture?W.type:null,he=T(M.stencilBuffer,Y),ue=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Je(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe(M),he,M.width,M.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe(M),he,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,he,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,P)}else{const W=M.textures;for(let Y=0;Y<W.length;Y++){const he=W[Y],ue=s.convert(he.format,he.colorSpace),Z=s.convert(he.type),te=_(he.internalFormat,ue,Z,he.normalized,he.colorSpace);Je(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe(M),te,M.width,M.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe(M),te,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,te,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(P,M,O){const W=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(M.depthTexture);if(Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),nt(r.TEXTURE_CUBE_MAP,M.depthTexture);const pe=s.convert(M.depthTexture.format),Ue=s.convert(M.depthTexture.type);let ye;M.depthTexture.format===an?ye=r.DEPTH_COMPONENT24:M.depthTexture.format===Un&&(ye=r.DEPTH24_STENCIL8);for(let me=0;me<6;me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ye,M.width,M.height,0,pe,Ue,null)}}else K(M.depthTexture,0);const he=Y.__webglTexture,ue=Xe(M),Z=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,te=M.depthTexture.format===Un?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===an)Je(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Z,he,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,te,Z,he,0);else if(M.depthTexture.format===Un)Je(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Z,he,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,te,Z,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(P){const M=i.get(P),O=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const W=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){const Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=W}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)xt(M.__webglFramebuffer[W],P,W);else{const W=P.texture.mipmaps;W&&W.length>0?xt(M.__webglFramebuffer[0],P,0):xt(M.__webglFramebuffer,P,0)}else if(O){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=r.createRenderbuffer(),We(M.__webglDepthbuffer[W],P,!1);else{const Y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,he)}}else{const W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),We(M.__webglDepthbuffer,P,!1);else{const Y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(P,M,O){const W=i.get(P);M!==void 0&&Te(W.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&ne(P)}function le(P){const M=P.texture,O=i.get(P),W=i.get(M);P.addEventListener("dispose",y);const Y=P.textures,he=P.isWebGLCubeRenderTarget===!0,ue=Y.length>1;if(ue||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=M.version,a.memory.textures++),he){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let te=0;te<M.mipmaps.length;te++)O.__webglFramebuffer[Z][te]=r.createFramebuffer()}else O.__webglFramebuffer[Z]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)O.__webglFramebuffer[Z]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ue)for(let Z=0,te=Y.length;Z<te;Z++){const pe=i.get(Y[Z]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&Je(P)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){const te=Y[Z];O.__webglColorRenderbuffer[Z]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const pe=s.convert(te.format,te.colorSpace),Ue=s.convert(te.type),ye=_(te.internalFormat,pe,Ue,te.normalized,te.colorSpace,P.isXRRenderTarget===!0),me=Xe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,me,ye,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),We(O.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),nt(r.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)Te(O.__webglFramebuffer[Z][te],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Te(O.__webglFramebuffer[Z],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(M)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let Z=0,te=Y.length;Z<te;Z++){const pe=Y[Z],Ue=i.get(pe);let ye=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ue.__webglTexture),nt(ye,pe),Te(O.__webglFramebuffer,P,pe,r.COLOR_ATTACHMENT0+Z,ye,0),m(pe)&&v(ye)}t.unbindTexture()}else{let Z=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Z,W.__webglTexture),nt(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)Te(O.__webglFramebuffer[te],P,M,r.COLOR_ATTACHMENT0,Z,te);else Te(O.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,Z,0);m(M)&&v(Z),t.unbindTexture()}P.depthBuffer&&ne(P)}function ce(P){const M=P.textures;for(let O=0,W=M.length;O<W;O++){const Y=M[O];if(m(Y)){const he=S(P),ue=i.get(Y).__webglTexture;t.bindTexture(he,ue),v(he),t.unbindTexture()}}}const de=[],ze=[];function Oe(P){if(P.samples>0){if(Je(P)===!1){const M=P.textures,O=P.width,W=P.height;let Y=r.COLOR_BUFFER_BIT;const he=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=i.get(P),Z=M.length>1;if(Z)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const te=P.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),Z){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);const Ue=i.get(M[pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ue,0)}r.blitFramebuffer(0,0,O,W,0,0,O,W,Y,r.NEAREST),l===!0&&(de.length=0,ze.length=0,de.push(r.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(de.push(he),ze.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ze)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Z)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);const Ue=i.get(M[pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.TEXTURE_2D,Ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Xe(P){return Math.min(n.maxSamples,P.samples)}function Je(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(P){const M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function ft(P,M){const O=P.colorSpace,W=P.format,Y=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||O!==ra&&O!==pn&&(at.getTransfer(O)===gt?(W!==Kt||Y!==yi)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",O)),M}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.getTextureUnits=U,this.setTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=$,this.rebindTextures=oe,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nm(r,e){function t(i,n=pn){let s;const a=at.getTransfer(n);if(i===yi)return r.UNSIGNED_BYTE;if(i===El)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Ih)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Lh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rh)return r.BYTE;if(i===Ph)return r.SHORT;if(i===nr)return r.UNSIGNED_SHORT;if(i===Al)return r.INT;if(i===Di)return r.UNSIGNED_INT;if(i===fi)return r.FLOAT;if(i===jt)return r.HALF_FLOAT;if(i===Dh)return r.ALPHA;if(i===Nh)return r.RGB;if(i===Kt)return r.RGBA;if(i===an)return r.DEPTH_COMPONENT;if(i===Un)return r.DEPTH_STENCIL;if(i===Rl)return r.RED;if(i===ya)return r.RED_INTEGER;if(i===kn)return r.RG;if(i===Pl)return r.RG_INTEGER;if(i===Il)return r.RGBA_INTEGER;if(i===Xr||i===qr||i===Yr||i===Zr)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===ko||i===Vo||i===Ho)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ko)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ho)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Go||i===Wo||i===Xo||i===qo||i===Yo||i===ta||i===Zo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Go||i===Wo)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===qo)return s.COMPRESSED_R11_EAC;if(i===Yo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ta)return s.COMPRESSED_RG11_EAC;if(i===Zo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ko||i===Jo||i===jo||i===Qo||i===$o||i===el||i===tl||i===il||i===nl||i===sl||i===rl||i===al||i===ol||i===ll)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ko)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$o)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===el)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tl)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nl)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sl)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rl)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ol)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===hl||i===ul)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cl)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dl||i===fl||i===ia||i===pl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ob=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wt({vertexShader:ab,fragmentShader:ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new Zt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cb extends Yi{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",g=new lb,m={},v=t.getContextAttributes();let S=null,_=null;const T=[],A=[],C=new j;let y=null,b=null;const E=new Wt;E.viewport=new vt;const I=new Wt;I.viewport=new vt;const B=[E,I],z=new Xp;let U=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=T[J];return ie===void 0&&(ie=new Co,T[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=T[J];return ie===void 0&&(ie=new Co,T[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=T[J];return ie===void 0&&(ie=new Co,T[J]=ie),ie.getHandSpace()};function V(J){const ie=A.indexOf(J.inputSource);if(ie===-1)return;const _e=T[ie];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||a),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",K);for(let J=0;J<T.length;J++){const ie=A[J];ie!==null&&(A[J]=null,T[J].disconnect(ie))}U=null,L=null,g.reset();for(const J in m)delete m[J];if(e.setRenderTarget(S),f=null,u=null,d=null,n=null,_=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),b!==null){const J=b.camera;J.fov=b.fov,J.zoom=b.zoom,J.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(S=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",k),n.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,He=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?Un:an,He=v.stencil?sr:Di);const We={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(We),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Ot(u.textureWidth,u.textureHeight,{format:Kt,type:yi,depthTexture:new or(u.textureWidth,u.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,_e),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ot(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),lt.setContext(n),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(J){for(let ie=0;ie<J.removed.length;ie++){const _e=J.removed[ie],He=A.indexOf(_e);He>=0&&(A[He]=null,T[He].disconnect(_e))}for(let ie=0;ie<J.added.length;ie++){const _e=J.added[ie];let He=A.indexOf(_e);if(He===-1){for(let We=0;We<T.length;We++)if(We>=A.length){A.push(_e),He=We;break}else if(A[We]===null){A[We]=_e,He=We;break}if(He===-1)break}const Te=T[He];Te&&Te.connect(_e)}}const X=new R,Q=new R;function $(J,ie,_e){X.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const He=X.distanceTo(Q),Te=ie.projectionMatrix.elements,We=_e.projectionMatrix.elements,xt=Te[14]/(Te[10]-1),ne=Te[14]/(Te[10]+1),oe=(Te[9]+1)/Te[5],le=(Te[9]-1)/Te[5],ce=(Te[8]-1)/Te[0],de=(We[8]+1)/We[0],ze=xt*ce,Oe=xt*de,Xe=He/(-ce+de),Je=Xe*-ce;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Je),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const D=xt+Xe,ft=ne+Xe,st=ze-Je,P=Oe+(He-Je),M=oe*ne/ft*D,O=le*ne/ft*D;J.projectionMatrix.makePerspective(st,P,M,O,D,ft),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Re(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let ie=J.near,_e=J.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),z.near=I.near=E.near=ie,z.far=I.far=E.far=_e,(U!==z.near||L!==z.far)&&(n.updateRenderState({depthNear:z.near,depthFar:z.far}),U=z.near,L=z.far),z.layers.mask=J.layers.mask|6,E.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;const He=J.parent,Te=z.cameras;Re(z,He);for(let We=0;We<Te.length;We++)Re(Te[We],He);Te.length===2?$(z,E,I):z.projectionMatrix.copy(E.projectionMatrix),b===null&&J.isPerspectiveCamera&&(b={camera:J,fov:J.fov,zoom:J.zoom}),we(J,z,He)};function we(J,ie,_e){_e===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=rr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let dt=null;function nt(J,ie){if(h=ie.getViewerPose(c||a),p=ie,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let He=!1;_e.length!==z.cameras.length&&(z.cameras.length=0,He=!0);for(let ne=0;ne<_e.length;ne++){const oe=_e[ne];let le=null;if(f!==null)le=f.getViewport(oe);else{const de=d.getViewSubImage(u,oe);le=de.viewport,ne===0&&(e.setRenderTargetTextures(_,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(_))}let ce=B[ne];ce===void 0&&(ce=new Wt,ce.layers.enable(ne),ce.viewport=new vt,B[ne]=ce),ce.matrix.fromArray(oe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(oe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),ne===0&&(z.matrix.copy(ce.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),He===!0&&z.cameras.push(ce)}const Te=n.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const ne=d.getDepthInformation(_e[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,n.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let ne=0;ne<_e.length;ne++){const oe=_e[ne].camera;if(oe){let le=m[oe];le||(le=new Wh,m[oe]=le);const ce=d.getCameraImage(oe);le.sourceTexture=ce}}}}for(let _e=0;_e<T.length;_e++){const He=A[_e],Te=T[_e];He!==null&&Te!==void 0&&Te.update(He,ie,c||a)}dt&&dt(J,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}const lt=new jp;lt.setAnimationLoop(nt),this.setAnimationLoop=function(J){dt=J},this.dispose=function(){}}}const hb=new qe,sm=new Ke;sm.set(-1,0,0,0,1,0,0,0,1);function ub(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Tp(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,v,S,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),S=v.envMap,_=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(hb.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(sm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function db(r,e,t,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){const A=T.program;i.uniformBlockBinding(_,A)}function c(_,T){let A=n[_.id];A===void 0&&(g(_),A=h(_),n[_.id]=A,_.addEventListener("dispose",v));const C=T.program;i.updateUBOMapping(_,C);const y=e.render.frame;s[_.id]!==y&&(u(_),s[_.id]=y)}function h(_){const T=d();_.__bindingPointIndex=T;const A=r.createBuffer(),C=_.__size,y=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,C,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,A),A}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const T=n[_.id],A=_.uniforms,C=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let y=0,b=A.length;y<b;y++){const E=A[y];if(Array.isArray(E))for(let I=0,B=E.length;I<B;I++)f(E[I],y,I,C);else f(E,y,0,C)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,T,A,C){if(x(_,T,A,C)===!0){const y=_.__offset,b=_.value;if(Array.isArray(b)){let E=0;for(let I=0;I<b.length;I++){const B=b[I],z=m(B);p(B,_.__data,E),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(E+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,y,_.__data)}}function p(_,T,A){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,A)}function x(_,T,A,C){const y=_.value,b=T+"_"+A;if(C[b]===void 0)return typeof y=="number"||typeof y=="boolean"?C[b]=y:ArrayBuffer.isView(y)?C[b]=y.slice():C[b]=y.clone(),!0;{const E=C[b];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return C[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function g(_){const T=_.uniforms;let A=0;const C=16;for(let b=0,E=T.length;b<E;b++){const I=Array.isArray(T[b])?T[b]:[T[b]];for(let B=0,z=I.length;B<z;B++){const U=I[B],L=Array.isArray(U.value)?U.value:[U.value];for(let V=0,k=L.length;V<k;V++){const K=L[V],X=m(K),Q=A%C,$=Q%X.boundary,Re=Q+$;A+=$,Re!==0&&C-Re<X.storage&&(A+=C-Re),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=X.storage}}}const y=A%C;return y>0&&(A+=C-y),_.__size=A,_.__cache={},this}function m(_){const T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",_),T}function v(_){const T=_.target;T.removeEventListener("dispose",v);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),r.deleteBuffer(n[T.id]),delete n[T.id],delete s[T.id]}function S(){for(const _ in n)r.deleteBuffer(n[_]);a=[],n={},s={}}return{bind:l,update:c,dispose:S}}const fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function pb(){return $i===null&&($i=new Si(fb,16,16,kn,jt),$i.name="DFG_LUT",$i.minFilter=bt,$i.magFilter=bt,$i.wrapS=Mi,$i.wrapT=Mi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class rm{constructor(e={}){const{canvas:t=ip(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=yi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=f,g=new Set([Il,Pl,ya]),m=new Set([yi,Di,nr,sr,El,Cl]),v=new Uint32Array(4),S=new Int32Array(4),_=new R;let T=null,A=null;const C=[],y=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let I=!1,B=null,z=null,U=null,L=null;this._outputColorSpace=Yt;let V=0,k=0,K=null,X=-1,Q=null;const $=new vt,Re=new vt;let we=null;const dt=new se(0);let nt=0,lt=t.width,J=t.height,ie=1,_e=null,He=null;const Te=new vt(0,0,lt,J),We=new vt(0,0,lt,J);let xt=!1;const ne=new gs;let oe=!1,le=!1;const ce=new qe,de=new R,ze=new vt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Je(){return K===null?ie:1}let D=i;function ft(w,N){return t.getContext(w,N)}let st,P,M,O,W,Y,he,ue,Z,te,pe,Ue,ye,me,Be,ke,je,F,ge,ee,xe,be,re;try{const w={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Ui,!1),D===null){const N="webgl2";if(D=ft(N,w),D===null)throw ft(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(w){throw t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Ui,!1),Ne("WebGLRenderer: "+w.message),w}function Fe(){st=new mM(D),st.init(),xe=new nm(D,st),P=new rM(D,st,e,xe),M=new sb(D,st),P.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),z=D.createFramebuffer(),U=D.createFramebuffer(),L=D.createFramebuffer(),O=new vM(D),W=new WS,Y=new rb(D,st,M,W,P,xe,O),he=new pM(E),ue=new _v(D),be=new nM(D,ue),Z=new gM(D,ue,O,be),te=new _M(D,Z,ue,be,O),F=new yM(D,P,Y),Be=new aM(W),pe=new GS(E,he,st,P,be,Be),Ue=new ub(E,W),ye=new qS,me=new QS(st),je=new iM(E,he,M,te,p,l),ke=new nb(E,te,P),re=new db(D,O,P,M),ge=new sM(D,st,O),ee=new xM(D,st,O),O.programs=pe.programs,E.capabilities=P,E.extensions=st,E.properties=W,E.renderLists=ye,E.shadowMap=ke,E.state=M,E.info=O}x!==yi&&(b=new SM(x,t.width,t.height,o,n,s));const Le=new cb(E,D);this.xr=Le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(lt,J,!1))},this.getSize=function(w){return w.set(lt,J)},this.setSize=function(w,N,q=!0){if(Le.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=w,J=N,t.width=Math.floor(w*ie),t.height=Math.floor(N*ie),q===!0&&(t.style.width=w+"px",t.style.height=N+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(lt*ie,J*ie).floor()},this.setDrawingBufferSize=function(w,N,q){lt=w,J=N,ie=q,t.width=Math.floor(w*q),t.height=Math.floor(N*q),this.setViewport(0,0,w,N)},this.setEffects=function(w){if(x===yi){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let N=0;N<w.length;N++)if(w[N].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy($)},this.getViewport=function(w){return w.copy(Te)},this.setViewport=function(w,N,q,H){w.isVector4?Te.set(w.x,w.y,w.z,w.w):Te.set(w,N,q,H),M.viewport($.copy(Te).multiplyScalar(ie).round())},this.getScissor=function(w){return w.copy(We)},this.setScissor=function(w,N,q,H){w.isVector4?We.set(w.x,w.y,w.z,w.w):We.set(w,N,q,H),M.scissor(Re.copy(We).multiplyScalar(ie).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){M.setScissorTest(xt=w)},this.setOpaqueSort=function(w){_e=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,q=!0){let H=0;if(w){let G=!1;if(K!==null){const Se=K.texture.format;G=g.has(Se)}if(G){const Se=K.texture.type,Ce=m.has(Se),Me=je.getClearColor(),Pe=je.getClearAlpha(),De=Me.r,et=Me.g,rt=Me.b;Ce?(v[0]=De,v[1]=et,v[2]=rt,v[3]=Pe,D.clearBufferuiv(D.COLOR,0,v)):(S[0]=De,S[1]=et,S[2]=rt,S[3]=Pe,D.clearBufferiv(D.COLOR,0,S))}else H|=D.COLOR_BUFFER_BIT}N&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Ui,!1),je.dispose(),ye.dispose(),me.dispose(),W.dispose(),he.dispose(),te.dispose(),be.dispose(),re.dispose(),pe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",vu),Le.removeEventListener("sessionend",yu),qn.stop()};function Mt(w){w.preventDefault(),la("WebGLRenderer: Context Lost."),I=!0}function pt(){la("WebGLRenderer: Context Restored."),I=!1;const w=O.autoReset,N=ke.enabled,q=ke.autoUpdate,H=ke.needsUpdate,G=ke.type;Fe(),O.autoReset=w,ke.enabled=N,ke.autoUpdate=q,ke.needsUpdate=H,ke.type=G}function Ui(w){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ji(w){const N=w.target;N.removeEventListener("dispose",Ji),fm(N)}function fm(w){pm(w),W.remove(w)}function pm(w){const N=W.get(w).programs;N!==void 0&&(N.forEach(function(q){pe.releaseProgram(q)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,q,H,G,Se){N===null&&(N=Oe);const Ce=G.isMesh&&G.matrixWorld.determinantAffine()<0,Me=xm(w,N,q,H,G);M.setMaterial(H,Ce);let Pe=q.index,De=1;if(H.wireframe===!0){if(Pe=Z.getWireframeAttribute(q),Pe===void 0)return;De=2}const et=q.drawRange,rt=q.attributes.position;let Ie=et.start*De,mt=(et.start+et.count)*De;Se!==null&&(Ie=Math.max(Ie,Se.start*De),mt=Math.min(mt,(Se.start+Se.count)*De)),Pe!==null?(Ie=Math.max(Ie,0),mt=Math.min(mt,Pe.count)):rt!=null&&(Ie=Math.max(Ie,0),mt=Math.min(mt,rt.count));const Bt=mt-Ie;if(Bt<0||Bt===1/0)return;be.setup(G,H,Me,q,Pe);let Tt,_t=ge;if(Pe!==null&&(Tt=ue.get(Pe),_t=ee,_t.setIndex(Tt)),G.isMesh)H.wireframe===!0?(M.setLineWidth(H.wireframeLinewidth*Je()),_t.setMode(D.LINES)):_t.setMode(D.TRIANGLES);else if(G.isLine){let ii=H.linewidth;ii===void 0&&(ii=1),M.setLineWidth(ii*Je()),G.isLineSegments?_t.setMode(D.LINES):G.isLineLoop?_t.setMode(D.LINE_LOOP):_t.setMode(D.LINE_STRIP)}else G.isPoints?_t.setMode(D.POINTS):G.isSprite&&_t.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(st.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ii=G._multiDrawStarts,Ee=G._multiDrawCounts,ci=G._multiDrawCount,ct=Pe?ue.get(Pe).bytesPerElement:1,Pi=W.get(H).currentProgram.getUniforms();for(let ji=0;ji<ci;ji++)Pi.setValue(D,"_gl_DrawID",ji),_t.render(ii[ji]/ct,Ee[ji])}else if(G.isInstancedMesh)_t.renderInstances(Ie,Bt,G.count);else if(q.isInstancedBufferGeometry){const ii=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,ii);_t.renderInstances(Ie,Bt,Ee)}else _t.render(Ie,Bt)};function xu(w,N,q,H){B!==null&&w.isNodeMaterial&&B.setObject(H,w),oe===!0&&Be.setState(w,q,!1),w.transparent===!0&&w.side===Xt&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,Aa(w,N,H),w.side=On,w.needsUpdate=!0,Aa(w,N,H),w.side=Xt):Aa(w,N,H)}this.compile=function(w,N,q=null){q===null&&(q=w),B!==null&&B.renderStart(w,N,q),A=me.get(q),A.init(N),y.push(A),q.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),w!==q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),le=this.localClippingEnabled,oe=Be.init(this.clippingPlanes,le),oe===!0&&Be.setGlobalState(this.clippingPlanes,N),B!==null&&ke.render(A.state.shadowsArray,q,N);const H=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Se=G.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Me=Se[Ce];xu(Me,q,N,G),H.add(Me)}else xu(Se,q,N,G),H.add(Se)}),A=y.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(w,N,q=null){const H=this.compile(w,N,q);return new Promise(G=>{function Se(){if(H.forEach(function(Ce){const Pe=W.get(Ce).currentProgram;(Pe===void 0||Pe.isReady())&&H.delete(Ce)}),H.size===0){G(w);return}setTimeout(Se,10)}st.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let oc=null;function mm(w){oc&&oc(w)}function vu(){qn.stop()}function yu(){qn.start()}const qn=new jp;qn.setAnimationLoop(mm),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(w){oc=w,Le.setAnimationLoop(w),w===null?qn.stop():qn.start()},Le.addEventListener("sessionstart",vu),Le.addEventListener("sessionend",yu),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(w,N);const q=Le.enabled===!0&&Le.isPresenting===!0,H=b!==null&&(K===null||q)&&b.begin(E,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(N),N=Le.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,N,K),A=me.get(w,y.length),A.init(N),A.state.textureUnits=Y.getTextureUnits(),y.push(A),ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ne.setFromProjectionMatrix(ce,Ei,N.reversedDepth),le=this.localClippingEnabled,oe=Be.init(this.clippingPlanes,le),T=ye.get(w,C.length),T.init(),C.push(T),Le.enabled===!0&&Le.isPresenting===!0){const Ce=E.xr.getDepthSensingMesh();Ce!==null&&lc(Ce,N,-1/0,E.sortObjects)}lc(w,N,0,E.sortObjects),T.finish(),B!==null&&B.updateLights(A.state.lightsArray),E.sortObjects===!0&&T.sort(_e,He),Xe=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Xe&&je.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Be.beginShadows();const G=A.state.shadowsArray;if(ke.render(G,w,N),oe===!0&&Be.endShadows(),(H&&b.hasRenderPass())===!1){const Ce=T.opaque,Me=T.transmissive;if(A.setupLights(),N.isArrayCamera){const Pe=N.cameras;if(Me.length>0)for(let De=0,et=Pe.length;De<et;De++){const rt=Pe[De];Mu(Ce,Me,w,rt)}Xe&&je.render(w);for(let De=0,et=Pe.length;De<et;De++){const rt=Pe[De];_u(T,w,rt,rt.viewport)}}else Me.length>0&&Mu(Ce,Me,w,N),Xe&&je.render(w),_u(T,w,N)}K!==null&&k===0&&(Y.updateMultisampleRenderTarget(K),Y.updateRenderTargetMipmap(K)),H&&b.end(E),w.isScene===!0&&w.onAfterRender(E,w,N),be.resetDefaultState(),X=-1,Q=null,y.pop(),y.length>0?(A=y[y.length-1],Y.setTextureUnits(A.state.textureUnits),oe===!0&&Be.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,B!==null&&B.renderEnd()};function lc(w,N,q,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLightProbeGrid)A.pushLightProbeGrid(w);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ne)){H&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const Ce=te.update(w),Me=w.material;Me.visible&&T.push(w,Ce,Me,q,ze.z,null,N)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ne))){const Ce=te.update(w),Me=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ze.copy(Ce.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(Me)){const Pe=Ce.groups;for(let De=0,et=Pe.length;De<et;De++){const rt=Pe[De],Ie=Me[rt.materialIndex];Ie&&Ie.visible&&T.push(w,Ce,Ie,q,ze.z,rt,N)}}else Me.visible&&T.push(w,Ce,Me,q,ze.z,null,N)}}const Se=w.children;for(let Ce=0,Me=Se.length;Ce<Me;Ce++)lc(Se[Ce],N,q,H)}function _u(w,N,q,H){const{opaque:G,transmissive:Se,transparent:Ce}=w;A.setupLightsView(q),oe===!0&&Be.setGlobalState(E.clippingPlanes,q),H&&M.viewport($.copy(H)),G.length>0&&Ta(G,N,q),Se.length>0&&Ta(Se,N,q),Ce.length>0&&Ta(Ce,N,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Mu(w,N,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Ie=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Ot(1,1,{generateMipmaps:!0,type:Ie?jt:yi,minFilter:nn,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Se=A.state.transmissionRenderTarget[H.id],Ce=H.viewport||$;Se.setSize(Ce.z*E.transmissionResolutionScale,Ce.w*E.transmissionResolutionScale);const Me=E.getRenderTarget(),Pe=E.getActiveCubeFace(),De=E.getActiveMipmapLevel();E.setRenderTarget(Se),E.getClearColor(dt),nt=E.getClearAlpha(),nt<1&&E.setClearColor(16777215,.5),E.clear(),Xe&&je.render(q);const et=E.toneMapping;E.toneMapping=Wi;const rt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),oe===!0&&Be.setGlobalState(E.clippingPlanes,H),Ta(w,q,H),Y.updateMultisampleRenderTarget(Se),Y.updateRenderTargetMipmap(Se),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let mt=0,Bt=N.length;mt<Bt;mt++){const Tt=N[mt],{object:_t,geometry:ii,material:Ee,group:ci}=Tt;if(Ee.side===Xt&&_t.layers.test(H.layers)){const ct=Ee.side;Ee.side=Jt,Ee.needsUpdate=!0,Su(_t,q,H,ii,Ee,ci),Ee.side=ct,Ee.needsUpdate=!0,Ie=!0}}Ie===!0&&(Y.updateMultisampleRenderTarget(Se),Y.updateRenderTargetMipmap(Se))}E.setRenderTarget(Me,Pe,De),E.setClearColor(dt,nt),rt!==void 0&&(H.viewport=rt),E.toneMapping=et}function Ta(w,N,q){const H=N.isScene===!0?N.overrideMaterial:null;for(let G=0,Se=w.length;G<Se;G++){const Ce=w[G],{object:Me,geometry:Pe,group:De}=Ce;let et=Ce.material;et.allowOverride===!0&&H!==null&&(et=H),Me.layers.test(q.layers)&&Su(Me,N,q,Pe,et,De)}}function Su(w,N,q,H,G,Se){B!==null&&G.isNodeMaterial&&B.setObject(w,G),w.onBeforeRender(E,N,q,H,G,Se),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(E,N,q,H,w,Se),G.transparent===!0&&G.side===Xt&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,E.renderBufferDirect(q,N,H,G,w,Se),G.side=On,G.needsUpdate=!0,E.renderBufferDirect(q,N,H,G,w,Se),G.side=Xt):E.renderBufferDirect(q,N,H,G,w,Se),w.onAfterRender(E,N,q,H,G,Se)}function Aa(w,N,q){N.isScene!==!0&&(N=Oe);const H=W.get(w),G=A.state.lights,Se=A.state.shadowsArray,Ce=G.state.version,Me=pe.getParameters(w,G.state,Se,N,q,A.state.lightProbeGridArray),Pe=pe.getProgramCacheKey(Me);let De=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;const et=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=he.get(w.envMap||H.environment,et),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",Ji),De=new Map,H.programs=De);let rt=De.get(Pe);if(rt!==void 0){if(H.currentProgram===rt&&H.lightsStateVersion===Ce)return wu(w,Me),rt}else Me.uniforms=pe.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,q,Me),w.onBeforeCompile(Me,E),rt=pe.acquireProgram(Me,Pe),De.set(Pe,rt),H.uniforms=Me.uniforms;const Ie=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=Be.uniform),wu(w,Me),H.needsLights=ym(w),H.lightsStateVersion=Ce,H.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.sunLights.value=G.state.sun,Ie.sunLightShadows.value=G.state.sunShadow,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.sunShadowMatrix.value=G.state.sunShadowMatrix,Ie.sunShadowCascade.value=G.state.sunShadowCascade,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=rt,H.uniformsList=null,rt}function bu(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Ro.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function wu(w,N){const q=W.get(w);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function gm(w,N){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let q=0,H=w.length;q<H;q++){const G=w[q];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function xm(w,N,q,H,G){N.isScene!==!0&&(N=Oe),Y.resetTextureUnits();const Se=N.fog,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,Me=K===null?E.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:at.workingColorSpace,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,De=he.get(H.envMap||Ce,Pe),et=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,rt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!q.morphAttributes.position,mt=!!q.morphAttributes.normal,Bt=!!q.morphAttributes.color;let Tt=Wi;H.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Tt=E.toneMapping);const _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ii=_t!==void 0?_t.length:0,Ee=W.get(H),ci=A.state.lights;if(oe===!0&&(le===!0||w!==Q)){const St=w===Q&&H.id===X;Be.setState(H,w,St)}let ct=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ci.state.version||Ee.outputColorSpace!==Me||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==De||H.fog===!0&&Ee.fog!==Se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Be.numPlanes||Ee.numIntersection!==Be.numIntersection)||Ee.vertexAlphas!==et||Ee.vertexTangents!==rt||Ee.morphTargets!==Ie||Ee.morphNormals!==mt||Ee.morphColors!==Bt||Ee.toneMapping!==Tt||Ee.morphTargetsCount!==ii||!!Ee.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Ee.__version=H.version);let Pi=Ee.currentProgram;ct===!0&&(Pi=Aa(H,N,G),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Pi,Ee));let ji=!1,bn=!1,ws=!1;const yt=Pi.getUniforms(),Dt=Ee.uniforms;if(M.useProgram(Pi.program)&&(ji=!0,bn=!0,ws=!0),H.id!==X&&(X=H.id,bn=!0),Ee.needsLights){const St=gm(A.state.lightProbeGridArray,G);Ee.lightProbeGrid!==St&&(Ee.lightProbeGrid=St,bn=!0)}if(ji||Q!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),yt.setValue(D,"projectionMatrix",w.projectionMatrix),yt.setValue(D,"viewMatrix",w.matrixWorldInverse);const Tn=yt.map.cameraPosition;Tn!==void 0&&Tn.setValue(D,de.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,bn=!0,ws=!0)}if(Ee.needsLights&&(ci.state.sunShadowMap.length>0&&yt.setValue(D,"sunShadowMap",ci.state.sunShadowMap,Y),ci.state.directionalShadowMap.length>0&&yt.setValue(D,"directionalShadowMap",ci.state.directionalShadowMap,Y),ci.state.spotShadowMap.length>0&&yt.setValue(D,"spotShadowMap",ci.state.spotShadowMap,Y),ci.state.pointShadowMap.length>0&&yt.setValue(D,"pointShadowMap",ci.state.pointShadowMap,Y)),G.isSkinnedMesh){yt.setOptional(D,G,"bindMatrix"),yt.setOptional(D,G,"bindMatrixInverse");const St=G.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),yt.setValue(D,"boneTexture",St.boneTexture,Y))}G.isBatchedMesh&&(yt.setOptional(D,G,"batchingTexture"),yt.setValue(D,"batchingTexture",G._matricesTexture,Y),yt.setOptional(D,G,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",G._indirectTexture,Y),yt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",G._colorsTexture,Y));const wn=q.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&F.update(G,q,Pi),(bn||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,yt.setValue(D,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Dt.envMapIntensity.value=N.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=pb()),bn){if(yt.setValue(D,"toneMappingExposure",E.toneMappingExposure),Ee.needsLights&&vm(Dt,ws),Se&&H.fog===!0&&Ue.refreshFogUniforms(Dt,Se),Ue.refreshMaterialUniforms(Dt,H,ie,J,A.state.transmissionRenderTarget[w.id]),Ee.needsLights&&Ee.lightProbeGrid){const St=Ee.lightProbeGrid;Dt.probesSH.value=St.texture,Dt.probesMin.value.copy(St.boundingBox.min),Dt.probesMax.value.copy(St.boundingBox.max),Dt.probesResolution.value.copy(St.resolution)}Ro.upload(D,bu(Ee),Dt,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ro.upload(D,bu(Ee),Dt,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(D,"center",G.center),yt.setValue(D,"modelViewMatrix",G.modelViewMatrix),yt.setValue(D,"normalMatrix",G.normalMatrix),yt.setValue(D,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const St=H.uniformsGroups;for(let Tn=0,Ts=St.length;Tn<Ts;Tn++){const Au=St[Tn];re.update(Au,Pi),re.bind(Au,Pi)}}return Pi}function vm(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.sunLights.needsUpdate=N,w.sunLightShadows.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function ym(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,N,q){const H=W.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=N,W.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const q=W.get(w);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,q=0){K=w,V=N,k=q;let H=null,G=!1,Se=!1;if(w){const Me=W.get(w);if(Me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,Me.__webglFramebuffer),$.copy(w.viewport),Re.copy(w.scissor),we=w.scissorTest,M.viewport($),M.scissor(Re),M.setScissorTest(we),X=-1;return}else if(Me.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(Me.__hasExternalTextures)Y.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const et=w.depthTexture;if(Me.__boundDepthTexture!==et){if(et!==null&&W.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Se=!0);const De=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[N])?H=De[N][q]:H=De[N],G=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?H=W.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?H=De[q]:H=De,$.copy(w.viewport),Re.copy(w.scissor),we=w.scissorTest}else $.copy(Te).multiplyScalar(ie).floor(),Re.copy(We).multiplyScalar(ie).floor(),we=xt;if(q!==0&&(H=z),M.bindFramebuffer(D.FRAMEBUFFER,H)&&M.drawBuffers(w,H),M.viewport($),M.scissor(Re),M.setScissorTest(we),G){const Me=W.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,q)}else if(Se){const Me=N;for(let Pe=0;Pe<w.textures.length;Pe++){const De=W.get(w.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,De.__webglTexture,q,Me)}}else if(w!==null&&q!==0){const Me=W.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,q)}X=-1};function Tu(w){const N=W.get(w);return(N.__readFormat!==w.format||N.__readType!==w.type)&&(N.__readFormat=w.format,N.__readType=w.type,N.__formatReadable=P.textureFormatReadable(w.format),N.__typeReadable=P.textureTypeReadable(w.type)),N}this.readRenderTargetPixels=function(w,N,q,H,G,Se,Ce,Me=0){if(!(w&&w.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){M.bindFramebuffer(D.FRAMEBUFFER,Pe);try{const De=w.textures[Me],et=De.format,rt=De.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);const Ie=Tu(De);if(Ie.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&q>=0&&q<=w.height-G&&D.readPixels(N,q,H,G,xe.convert(et),xe.convert(rt),Se)}finally{const De=K!==null?W.get(K).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,N,q,H,G,Se,Ce,Me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe)if(N>=0&&N<=w.width-H&&q>=0&&q<=w.height-G){M.bindFramebuffer(D.FRAMEBUFFER,Pe);const De=w.textures[Me],et=De.format,rt=De.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);const Ie=Tu(De);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,mt),D.bufferData(D.PIXEL_PACK_BUFFER,Se.byteLength,D.STREAM_READ),D.readPixels(N,q,H,G,xe.convert(et),xe.convert(rt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Bt=K!==null?W.get(K).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Bt);const Tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await g0(D,Tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,mt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Se),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(mt),D.deleteSync(Tt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,q=0){const H=Math.pow(2,-q),G=Math.floor(w.image.width*H),Se=Math.floor(w.image.height*H),Ce=N!==null?N.x:0,Me=N!==null?N.y:0;Y.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Ce,Me,G,Se),M.unbindTexture()},this.copyTextureToTexture=function(w,N,q=null,H=null,G=0,Se=0){let Ce,Me,Pe,De,et,rt,Ie,mt,Bt;const Tt=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(q!==null)Ce=q.max.x-q.min.x,Me=q.max.y-q.min.y,Pe=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,et=q.min.y,rt=q.isBox3?q.min.z:0;else{const Dt=Math.pow(2,-G);Ce=Math.floor(Tt.width*Dt),Me=Math.floor(Tt.height*Dt),w.isDataArrayTexture?Pe=Tt.depth:w.isData3DTexture?Pe=Math.floor(Tt.depth*Dt):Pe=1,De=0,et=0,rt=0}H!==null?(Ie=H.x,mt=H.y,Bt=H.z):(Ie=0,mt=0,Bt=0);const _t=xe.convert(N.format),ii=xe.convert(N.type);let Ee;N.isData3DTexture?(Y.setTexture3D(N,0),Ee=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),Ee=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),Ee=D.TEXTURE_2D),M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ci=M.getParameter(D.UNPACK_ROW_LENGTH),ct=M.getParameter(D.UNPACK_IMAGE_HEIGHT),Pi=M.getParameter(D.UNPACK_SKIP_PIXELS),ji=M.getParameter(D.UNPACK_SKIP_ROWS),bn=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,De),M.pixelStorei(D.UNPACK_SKIP_ROWS,et),M.pixelStorei(D.UNPACK_SKIP_IMAGES,rt);const ws=w.isDataArrayTexture||w.isData3DTexture,yt=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const Dt=W.get(w),wn=W.get(N),St=W.get(Dt.__renderTarget),Tn=W.get(wn.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,St.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let Ts=0;Ts<Pe;Ts++)ws&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(w).__webglTexture,G,rt+Ts),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(N).__webglTexture,Se,Bt+Ts)),D.blitFramebuffer(De,et,Ce,Me,Ie,mt,Ce,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||W.has(w)){const Dt=W.get(w),wn=W.get(N);M.bindFramebuffer(D.READ_FRAMEBUFFER,U),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,L);for(let St=0;St<Pe;St++)ws?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,G,rt+St):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,G),yt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wn.__webglTexture,Se,Bt+St):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wn.__webglTexture,Se),G!==0?D.blitFramebuffer(De,et,Ce,Me,Ie,mt,Ce,Me,D.COLOR_BUFFER_BIT,D.NEAREST):yt?D.copyTexSubImage3D(Ee,Se,Ie,mt,Bt+St,De,et,Ce,Me):D.copyTexSubImage2D(Ee,Se,Ie,mt,De,et,Ce,Me);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else yt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ee,Se,Ie,mt,Bt,Ce,Me,Pe,_t,ii,Tt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,Se,Ie,mt,Bt,Ce,Me,Pe,_t,Tt.data):D.texSubImage3D(Ee,Se,Ie,mt,Bt,Ce,Me,Pe,_t,ii,Tt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Se,Ie,mt,Ce,Me,_t,ii,Tt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Se,Ie,mt,Tt.width,Tt.height,_t,Tt.data):D.texSubImage2D(D.TEXTURE_2D,Se,Ie,mt,Ce,Me,_t,ii,Tt);M.pixelStorei(D.UNPACK_ROW_LENGTH,ci),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Pi),M.pixelStorei(D.UNPACK_SKIP_ROWS,ji),M.pixelStorei(D.UNPACK_SKIP_IMAGES,bn),Se===0&&N.generateMipmaps&&D.generateMipmap(Ee),M.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){V=0,k=0,K=null,M.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const mb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:wl,AddEquation:os,AddOperation:Vf,AdditiveAnimationBlendMode:Uh,AdditiveBlending:$t,AgXToneMapping:Ah,AlphaFormat:Dh,AlwaysCompare:ep,AlwaysDepth:Do,AlwaysStencilFunc:Zf,AmbientLight:au,AnimationAction:Zp,AnimationClip:pa,AnimationLoader:hx,AnimationMixer:kx,AnimationObjectGroup:Ox,AnimationUtils:sx,ArcCurve:pp,ArrayCamera:Xp,ArrowHelper:uv,AttachedBindMode:sh,Audio:qp,AudioAnalyser:Cx,AudioContext:lu,AudioListener:Tx,AudioLoader:Mx,AxesHelper:dv,BackSide:Jt,BasicDepthPacking:qf,BasicShadowMap:bm,BatchedMesh:cp,BezierInterpolant:Up,Bone:Hh,BooleanKeyframeTrack:Ss,Box2:Kp,Box3:oi,Box3Helper:cv,BoxGeometry:Ut,BoxHelper:lv,BufferAttribute:Ze,BufferGeometry:Ve,BufferGeometryLoader:Gp,ByteType:Rh,Cache:sn,Camera:nc,CameraHelper:ov,CanvasTexture:Gh,CapsuleGeometry:Sa,CatmullRomCurve3:mp,CineonToneMapping:wh,CircleGeometry:ba,ClampToEdgeWrapping:Mi,Clock:Yx,Color:se,ColorKeyframeTrack:iu,ColorManagement:at,Compatibility:h0,CompressedArrayTexture:Sg,CompressedCubeTexture:bg,CompressedTexture:Xl,CompressedTextureLoader:ux,ConeGeometry:_s,ConstantAlphaFactor:Of,ConstantColorFactor:Bf,Controls:pv,CubeCamera:Wp,CubeDepthTexture:dp,CubeReflectionMapping:rn,CubeRefractionMapping:zn,CubeTexture:Ma,CubeTextureLoader:dx,CubeUVReflectionMapping:ur,CubicBezierCurve:qh,CubicBezierCurve3:gp,CubicInterpolant:Dp,CullFaceBack:th,CullFaceFront:Mf,CullFaceFrontBack:Sm,CullFaceNone:_f,Curve:Ki,CurvePath:vp,CustomBlending:Sf,CustomToneMapping:Th,CylinderGeometry:At,Cylindrical:Kx,Data3DTexture:Fl,DataArrayTexture:Bl,DataTexture:Si,DataTextureLoader:fx,DataUtils:Z0,DecrementStencilOp:Hm,DecrementWrapStencilOp:Wm,DefaultLoadingManager:Op,DepthFormat:an,DepthStencilFormat:Un,DepthTexture:or,DetachedBindMode:Hf,DirectionalLight:$r,DirectionalLightHelper:av,DiscreteInterpolant:Np,DodecahedronGeometry:ql,DoubleSide:Xt,DstAlphaFactor:If,DstColorFactor:Df,DynamicCopyUsage:s0,DynamicDrawUsage:gl,DynamicReadUsage:t0,EdgesGeometry:fp,EllipseCurve:Yl,EqualCompare:jf,EqualDepth:Uo,EqualStencilFunc:Zm,EquirectangularReflectionMapping:Hr,EquirectangularRefractionMapping:Gr,Euler:qi,EventDispatcher:Yi,ExternalTexture:Wh,ExtrudeGeometry:fr,FileLoader:Mn,Float16BufferAttribute:tg,Float32BufferAttribute:Ae,FloatType:fi,Fog:zl,FogExp2:_a,FramebufferTexture:Mg,FrontSide:On,Frustum:gs,FrustumArray:Wl,GLBufferAttribute:Xx,GLSL1:a0,GLSL3:ah,GreaterCompare:Qf,GreaterDepth:Fo,GreaterEqualCompare:Nl,GreaterEqualDepth:Bo,GreaterEqualStencilFunc:Qm,GreaterStencilFunc:Jm,GridHelper:sv,Group:Lt,HTMLTexture:wg,HalfFloatType:jt,HemisphereLight:ru,HemisphereLightHelper:nv,IcosahedronGeometry:Zl,ImageBitmapLoader:_x,ImageLoader:ma,ImageUtils:sp,IncrementStencilOp:Vm,IncrementWrapStencilOp:Gm,InstancedBufferAttribute:ar,InstancedBufferGeometry:Hp,InstancedInterleavedBuffer:Wx,InstancedMesh:Ai,Int16BufferAttribute:$0,Int32BufferAttribute:eg,Int8BufferAttribute:J0,IntType:Al,InterleavedBuffer:Vl,InterleavedBufferAttribute:ms,Interpolant:mr,InterpolateBezier:rh,InterpolateDiscrete:na,InterpolateLinear:ml,InterpolateSmooth:Ao,InterpolationSamplingMode:c0,InterpolationSamplingType:l0,InvertStencilOp:Xm,KeepStencilOp:Eo,KeyframeTrack:Ni,LOD:op,LatheGeometry:Kl,Layers:Ol,LessCompare:Jf,LessDepth:No,LessEqualCompare:Dl,LessEqualDepth:ir,LessEqualStencilFunc:Km,LessStencilFunc:Ym,Light:Xn,LightProbe:Vp,LightShadow:ic,Line:Hn,Line3:Qx,LineBasicMaterial:gi,LineCurve:Yh,LineCurve3:xp,LineDashedMaterial:Pp,LineLoop:hp,LineSegments:Zi,LinearFilter:bt,LinearInterpolant:tu,LinearMipMapLinearFilter:Cm,LinearMipMapNearestFilter:Em,LinearMipmapLinearFilter:nn,LinearMipmapNearestFilter:Wr,LinearSRGBColorSpace:ra,LinearToneMapping:Sh,LinearTransfer:aa,Loader:bi,LoaderUtils:uh,LoadingManager:su,LoopOnce:Gf,LoopPingPong:Xf,LoopRepeat:Wf,MOUSE:_m,Material:ei,MaterialBlending:wm,MaterialLoader:sc,MathUtils:Fh,Matrix2:fu,Matrix3:Ke,Matrix4:qe,MaxEquation:Af,Mesh:ae,MeshBasicMaterial:qt,MeshDepthMaterial:$h,MeshDistanceMaterial:eu,MeshLambertMaterial:Qh,MeshMatcapMaterial:Rp,MeshNormalMaterial:Cp,MeshPhongMaterial:Ap,MeshPhysicalMaterial:_l,MeshStandardMaterial:it,MeshToonMaterial:Ep,MinEquation:Tf,MirroredRepeatWrapping:ea,MixOperation:kf,MultiplyBlending:nh,MultiplyOperation:va,NearestFilter:Pt,NearestMipMapLinearFilter:Am,NearestMipMapNearestFilter:Tm,NearestMipmapLinearFilter:Qs,NearestMipmapNearestFilter:Ch,NeutralToneMapping:Eh,NeverCompare:Kf,NeverDepth:Lo,NeverStencilFunc:qm,NoBlending:Gi,NoColorSpace:pn,NoNormalPacking:Bm,NoToneMapping:Wi,NormalAnimationBlendMode:Ll,NormalBlending:Bn,NormalGAPacking:Om,NormalRGPacking:Fm,NotEqualCompare:$f,NotEqualDepth:Oo,NotEqualStencilFunc:jm,NumberKeyframeTrack:ec,Object3D:tt,ObjectLoader:vx,ObjectSpaceNormalMap:Yf,OctahedronGeometry:wa,OneFactor:Cf,OneMinusConstantAlphaFactor:zf,OneMinusConstantColorFactor:Ff,OneMinusDstAlphaFactor:Lf,OneMinusDstColorFactor:Nf,OneMinusSrcAlphaFactor:Mh,OneMinusSrcColorFactor:Pf,OrthographicCamera:gr,PCFShadowMap:Vr,PCFSoftShadowMap:yh,PMREMGenerator:Ml,Path:ha,PerspectiveCamera:Wt,Plane:fn,PlaneGeometry:Zt,PlaneHelper:hv,PointLight:Gn,PointLightHelper:tv,Points:xs,PointsMaterial:ca,PolarGridHelper:rv,PolyhedronGeometry:Wn,PositionalAudio:Ex,PropertyBinding:ht,PropertyMixer:Yp,QuadraticBezierCurve:Zh,QuadraticBezierCurve3:Kh,Quaternion:mi,QuaternionKeyframeTrack:tc,QuaternionLinearInterpolant:Fp,R11_EAC_Format:qo,RED_GREEN_RGTC2_Format:ia,RED_RGTC1_Format:dl,REVISION:bl,RG11_EAC_Format:ta,RGBADepthPacking:Dm,RGBAFormat:Kt,RGBAIntegerFormat:Il,RGBA_ASTC_10x10_Format:al,RGBA_ASTC_10x5_Format:nl,RGBA_ASTC_10x6_Format:sl,RGBA_ASTC_10x8_Format:rl,RGBA_ASTC_12x10_Format:ol,RGBA_ASTC_12x12_Format:ll,RGBA_ASTC_4x4_Format:Ko,RGBA_ASTC_5x4_Format:Jo,RGBA_ASTC_5x5_Format:jo,RGBA_ASTC_6x5_Format:Qo,RGBA_ASTC_6x6_Format:$o,RGBA_ASTC_8x5_Format:el,RGBA_ASTC_8x6_Format:tl,RGBA_ASTC_8x8_Format:il,RGBA_BPTC_Format:cl,RGBA_ETC2_EAC_Format:Xo,RGBA_PVRTC_2BPPV1_Format:Ho,RGBA_PVRTC_4BPPV1_Format:Vo,RGBA_S3TC_DXT1_Format:qr,RGBA_S3TC_DXT3_Format:Yr,RGBA_S3TC_DXT5_Format:Zr,RGBDepthPacking:Nm,RGBFormat:Nh,RGBIntegerFormat:Rm,RGB_BPTC_SIGNED_Format:hl,RGB_BPTC_UNSIGNED_Format:ul,RGB_ETC1_Format:Go,RGB_ETC2_Format:Wo,RGB_PVRTC_2BPPV1_Format:ko,RGB_PVRTC_4BPPV1_Format:zo,RGB_S3TC_DXT1_Format:Xr,RGDepthPacking:Um,RGFormat:kn,RGIntegerFormat:Pl,RawShaderMaterial:jh,Ray:dr,Raycaster:qx,RectAreaLight:kp,RedFormat:Rl,RedIntegerFormat:ya,ReinhardToneMapping:bh,RenderObjectRefreshType:u0,RenderTarget:Oh,RenderTarget3D:Vx,RepeatWrapping:Xi,ReplaceStencilOp:km,ReverseSubtractEquation:wf,RingGeometry:pr,SIGNED_R11_EAC_Format:Yo,SIGNED_RED_GREEN_RGTC2_Format:pl,SIGNED_RED_RGTC1_Format:fl,SIGNED_RG11_EAC_Format:Zo,SRGBColorSpace:Yt,SRGBTransfer:gt,Scene:kl,ShaderChunk:$e,ShaderLib:Vi,ShaderMaterial:wt,ShadowMaterial:wp,Shape:Ms,ShapeGeometry:Jl,ShapePath:fv,ShapeUtils:Hi,ShortType:Ph,Skeleton:Gl,SkeletonHelper:ev,SkinnedMesh:lp,Source:B0,Sphere:Qt,SphereGeometry:pi,Spherical:Zx,SphericalHarmonics3:ou,SplineCurve:Jh,SpotLight:zp,SpotLightHelper:$x,Sprite:Vh,SpriteMaterial:Hl,SrcAlphaFactor:_h,SrcAlphaSaturateFactor:Uf,SrcColorFactor:Rf,StaticCopyUsage:n0,StaticDrawUsage:Ul,StaticReadUsage:e0,StereoCamera:Sx,StreamCopyUsage:r0,StreamDrawUsage:$m,StreamReadUsage:i0,StringKeyframeTrack:bs,SubtractEquation:bf,SubtractiveBlending:ih,TOUCH:Mm,TangentSpaceNormalMap:_n,TetrahedronGeometry:jl,Texture:Et,TextureLoader:px,TextureSource:gn,TextureUtils:yv,Timer:cu,TimestampQuery:o0,TorusGeometry:yn,TorusKnotGeometry:Ql,Triangle:_i,TriangleFanDrawMode:Lm,TriangleStripDrawMode:Im,TrianglesDrawMode:Pm,TubeGeometry:$l,UVMapping:Tl,Uint16BufferAttribute:zh,Uint32BufferAttribute:kh,Uint8BufferAttribute:j0,Uint8ClampedBufferAttribute:Q0,Uniform:du,UniformsGroup:Gx,UniformsLib:ve,UniformsUtils:Fn,UnsignedByteType:yi,UnsignedInt101111Type:Lh,UnsignedInt248Type:sr,UnsignedInt5999Type:Ih,UnsignedIntType:Di,UnsignedShort4444Type:El,UnsignedShort5551Type:Cl,UnsignedShortType:nr,VSMShadowMap:js,Vector2:j,Vector3:R,Vector4:vt,VectorKeyframeTrack:nu,VideoFrameTexture:_g,VideoTexture:up,WebGL3DRenderTarget:z0,WebGLArrayRenderTarget:O0,WebGLCoordinateSystem:Ei,WebGLCubeRenderTarget:pu,WebGLRenderTarget:Ot,WebGLRenderer:rm,WebGLUtils:nm,WebGPUCoordinateSystem:ps,WebXRController:Co,WireframeGeometry:bp,WrapAroundEnding:sa,ZeroCurvatureEnding:cs,ZeroFactor:Ef,ZeroSlopeEnding:hs,ZeroStencilOp:zm,createCanvasElement:ip,error:Ne,getConsoleFunction:m0,log:la,setConsoleFunction:p0,warn:fe,warnOnce:xn},Symbol.toStringTag,{value:"Module"})),Ct=13,Ye=Ct,gb=.78,en=gb/2,af=.055,gh=[{x:0,z:-1},{x:1,z:0},{x:0,z:1},{x:-1,z:0}],yo={x:7,z:12},us=[{x:3.5,z:12.5},{x:9.5,z:12.5}],xb=[{x:.5,z:.5},{x:6.5,z:.5},{x:12.5,z:.5}],vb=2.35,yb=11.5,_b=15.5,Mb=.32,Sb=3,bb=9,wb=8,Tb=18,Ab=14,Eb=1.25,Cb=1.6,Rb=4,Pb=6,of=20,Ib=[3,10],_o=2,Mo={basic:{speed:1.55,hp:1,bullet:9.5,reload:1.35,score:100},fast:{speed:3.05,hp:1,bullet:9.5,reload:1.1,score:200},power:{speed:1.8,hp:1,bullet:15,reload:.62,score:300},armor:{speed:1.7,hp:4,bullet:11,reload:.82,score:400}},lf={player1:11570246,player2:5220760};class am{state;constructor(e=2654435769){this.state=e>>>0}next(){this.state=this.state+1831565813>>>0;let e=this.state;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e){return Math.floor(this.next()*e)}pick(e){return e[this.int(e.length)]}chance(e){return this.next()<e}shuffle(e){for(let t=e.length-1;t>0;t--){const i=this.int(t+1);[e[t],e[i]]=[e[i],e[t]]}return e}}const zi=[".....BBBB....",".....BEEB....",".....BEEB...."],Dr=[[".............","..B.B.B.B.B..","..B.B.B.B.B..","..B.B.B.B.B..",".............","BB.BBBBBBB.BB",".............","..B..SSS..B..","..B..SSS..B..","..BBB.B.BBB..",...zi],[".............",".BBB.....BBB.",".B.B.....B.B.",".B.B.BBB.B.B.",".B...B.B...B.",".BBB.B.B.BBB.",".....B.B.....","..SS.B.B.SS..","..SS.B.B.SS..",".....B.B.....",...zi],[".............","..BBBB.BBBB..","..B......B...","..B.WWWW.B...","....W..W.....",".BB.WWWW.BB..",".BB......BB..","....TTTT.....","..B.TTTT.B...","..B......B...",...zi],[".............",".BBBB...BBBB.",".B........B..",".B.IIIIIII.B.","...I.....I...",".SS.I...I.SS.","....IIIII....","..BBB...BBB..","..B.......B..","..B.BB.BB.B..",...zi],[".............",".BB..SS..BB..",".BB..SS..BB..",".............",".SS.BBBB.SS..",".SS.B..B.SS..","....B..B.....",".BBBBB..BBBBB",".............","..BB.....BB..",...zi],[".............",".TTTT...TTTT.",".T..T...T..T.",".T..TTTTT..T.",".T.........T.",".TTT.BBB.TTT.",".....B.B.....",".BB..B.B..BB.",".BB..B.B..BB.",".....B.B.....",...zi],[".............","..B.WWWWW.B..","..B.W...W.B..","..B.W.S.W.B..","....W.S.W....",".BB.W.S.W.BB.",".BB.WWWWW.BB.",".............","..SS.....SS..","..SS.BBB.SS..",...zi],[".............",".BBBBB.BBBBB.",".B...B.B...B.",".B.S.B.B.S.B.",".B.S.......B.",".B.S.BBB.S.B.",".B...B.B...B.",".BBBBB.BBBBB.",".............",".BB.......BB.",...zi],[".............",".B..B...B..B.",".B..B.S.B..B.",".B..B.S.B..B.",".B....S....B.",".BBBBBB.BBBBB",".............","..W.W.W.W.W..","..W.W.W.W.W..",".............",...zi],[".............",".SS.......SS.",".S.BBBBBBB.S.","...B.....B...",".BBB.SSS.BBB.",".B...S.S...B.",".B.B.S.S.B.B.",".B.B.....B.B.",".B.BBB.BBB.B.","...B.....B...",...zi]],xh=35;function cf(r){const e=((r-1)%Dr.length+Dr.length)%Dr.length;return r<=Dr.length?[...Dr[e]]:Lb(r)}function Nr(r,e){if(e<=1&&(r===0||r===1||r===5||r===6||r===7||r===11||r===12))return!0;for(const t of us){const i=Math.floor(t.x);if(r===i&&e>=9||Math.abs(r-i)<=1&&e===12)return!0}return!1}function Lb(r){const e=new am(r*2654435761+17),t=Array.from({length:Ct},()=>Array.from({length:Ct},()=>"."));zi.forEach((s,a)=>{for(let o=0;o<Ct;o++)s[o]!=="."&&(t[10+a][o]=s[o])});const i=["B","B","B","B","S","W","T","I"],n=Math.min(.5,.3+r%9*.02);for(let s=0;s<=9;s++)for(let a=0;a<=6;a++)if(!Nr(a,s)&&!(a===6&&s<=2)&&e.chance(n)){const o=e.chance(.55)?"B":e.pick(i);t[s][a]=o;const l=12-a;Nr(l,s)||(t[s][l]=o)}if(r%3===0)for(const[s,a]of[[2,4],[10,4],[6,6]])Nr(s,a)||(t[a][s]="S");if(r%4===0){for(let s=4;s<=8;s++)Nr(s,6)||(t[6][s]="W");t[5][5]="W",t[5][7]="W"}if(r%5===0)for(let s=0;s<=2;s++)for(let a=8;a<=9;a++)Nr(s,a)||(t[a][s]="T");return t[10][5]="B",t[10][8]="B",t.map(s=>s.join(""))}const Ln={NW:1,NE:2,SW:4,SE:8};function Db(r){switch(r){case 0:return Ln.SW|Ln.SE;case 1:return Ln.NW|Ln.SW;case 2:return Ln.NW|Ln.NE;case 3:return Ln.NE|Ln.SE}}class Sl{cells=[];constructor(e){for(let t=0;t<Ct;t++)for(let i=0;i<Ct;i++)this.cells.push({kind:Nb(e[t]?.[i]??"."),mask:0});for(const t of this.cells)(t.kind==="brick"||t.kind==="steel")&&(t.mask=15)}static fromMap(e){return new Sl(e)}index(e,t){return t*Ct+e}get(e,t){return e<0||t<0||e>=Ct||t>=Ct?null:this.cells[this.index(e,t)]}set(e,t,i,n=15){const s=this.get(e,t);s&&(s.kind=i,s.mask=i==="brick"||i==="steel"?n:0)}solidForTank(e,t){const i=this.get(e,t);return i?i.kind==="brick"||i.kind==="steel"||i.kind==="water"||i.kind==="base":!0}blocksBullet(e,t){const i=this.get(e,t);return i?i.kind==="brick"||i.kind==="steel"||i.kind==="base":!0}isOnIce(e,t){return this.get(e,t)?.kind==="ice"}isWater(e,t){return this.get(e,t)?.kind==="water"}damage(e,t,i,n){const s=this.get(e,t);if(!s)return null;if(s.kind==="base")return{kind:"base",mask:0,removed:[],destroyed:!0};if(s.kind!=="brick"&&s.kind!=="steel"||s.kind==="steel"&&n<3)return null;const a=Db(i);let o=s.mask&a;if(o===0&&(o=s.mask),o===0)return null;const l=[];for(let d=0;d<4;d++)o&1<<d&&l.push(d);s.mask&=~o;const c=s.mask===0,h=s.kind;return c&&(s.kind="empty"),{kind:h,mask:s.mask,removed:l,destroyed:c}}findBaseWalls(){const e=[];for(let t=0;t<Ct;t++)for(let i=0;i<Ct;i++){if(this.get(i,t)?.kind!=="brick")continue;let n=!1;for(let s=-1;s<=1&&!n;s++)for(let a=-1;a<=1;a++)if(this.get(i+a,t+s)?.kind==="base"){n=!0;break}n&&e.push({x:i,z:t})}return e}}function Nb(r){switch(r){case"B":return"brick";case"S":return"steel";case"W":return"water";case"T":return"forest";case"I":return"ice";case"E":return"base";default:return"empty"}}function Ys(r,e,t,i,n,s){if(e-i<-.001||t-i<-.001||e+i>Ye+.001||t+i>Ye+.001)return!0;const a=Math.floor(e-i+1e-4),o=Math.floor(e+i-1e-4),l=Math.floor(t-i+1e-4),c=Math.floor(t+i-1e-4);for(let h=l;h<=c;h++)for(let d=a;d<=o;d++)if(r.solidForTank(d,h))return!0;for(const h of n)if(!(!h.alive||h.id===s)&&Math.abs(h.x-e)<i+en-.001&&Math.abs(h.z-t)<i+en-.001)return!0;return!1}function So(r){return Math.round(r*2)/2}function as(r){return gh[r]}const Ub={up:!1,down:!1,left:!1,right:!1,fire:!1},jc=[2,3,0,1],Bb=["star","helmet","clock","shovel","grenade","tank"];let Fb=1;class Ob{state="title";mode=1;stage=1;loop=0;seed;rng;terrain;tanks=[];bullets=[];powerup=null;score=[0,0];lives=[_o,_o];playerStar=[0,0];out=[!1,!1];respawnTimers=[0,0];spawnQueue=[];spawnedCount=0;spawnTimer=0;freeze=0;shovel=0;baseWalls=[];baseAlive=!0;stageStartScore=0;tally={basic:0,fast:0,power:0,armor:0};events=[];time=0;introTimer=0;clearTimer=0;overTimer=0;playerMoving=0;constructor(e=Date.now()){this.seed=e,this.rng=new am(e),this.terrain=new Sl(cf(1))}start(e){this.mode=e,this.stage=1,this.loop=0,this.score=[0,0],this.lives=[_o,_o],this.playerStar=[0,0],this.out=[!1,!1],this.respawnTimers=[0,0],this.beginStage()}retry(){this.start(this.mode)}beginStage(){this.terrain=new Sl(cf(this.stage)),this.baseWalls=this.terrain.findBaseWalls(),this.baseAlive=!0,this.tanks=[],this.bullets=[],this.powerup=null,this.freeze=0,this.shovel=0,this.spawnQueue=this.buildEnemyQueue(),this.spawnedCount=0,this.spawnTimer=.8,this.stageStartScore=this.score[0]+this.score[1],this.tally={basic:0,fast:0,power:0,armor:0},this.playerMoving=0;for(let e=0;e<this.mode;e++)this.lives[e]=Math.max(this.lives[e],0),this.respawnTimers[e]=0,this.out[e]||this.spawnPlayer(e);this.introTimer=2.1,this.setState("intro"),this.emit({type:"stageStart",stage:this.stage,mode:this.mode})}buildEnemyQueue(){const e=(this.stage-1)%xh,t=Math.min(8,1+Math.floor(e/4)),i=Math.min(7,1+Math.floor(e/3)),n=Math.min(7,2+Math.floor(e/2)),s=Math.max(2,of-t-i-n),a=[];for(let o=0;o<s;o++)a.push("basic");for(let o=0;o<n;o++)a.push("fast");for(let o=0;o<i;o++)a.push("power");for(let o=0;o<t;o++)a.push("armor");for(;a.length>of;)a.pop();return this.rng.shuffle(a),a}update(e,t=[]){this.time+=e,this.playerMoving=0;for(const i of this.tanks)i.cooldown=Math.max(0,i.cooldown-e),i.shield=Math.max(0,i.shield-e),i.hitFlash=Math.max(0,i.hitFlash-e),i.recoil=Math.max(0,i.recoil-e*7),i.spawn>0&&(i.spawn=Math.max(0,i.spawn-e));if(this.state==="intro"){this.introTimer-=e,this.introTimer<=0&&this.setState("playing");return}if(this.state==="clear"){this.clearTimer-=e,this.clearTimer<=0&&this.advanceStage();return}if(this.state==="over"){this.overTimer+=e;return}this.state==="playing"&&(this.freeze=Math.max(0,this.freeze-e),this.shovel>0&&(this.shovel=Math.max(0,this.shovel-e),this.shovel===0&&this.restoreBaseWalls()),this.updateRespawns(e),this.updatePlayers(e,t),this.updateEnemies(e),this.updateSpawns(e),this.updateBullets(e),this.updatePowerup(e),this.baseAlive&&this.spawnQueue.length===0&&!this.enemyTanks().length&&this.stageClear())}updateRespawns(e){for(let t=0;t<this.mode;t++)this.out[t]||this.tanks.some(i=>i.team==="player"&&i.playerIndex===t)||(this.respawnTimers[t]-=e,this.respawnTimers[t]<=0&&(this.spawnPlayer(t)?this.respawnTimers[t]=0:this.respawnTimers[t]=.35))}spawnPlayer(e){const t=us[e]??us[0];if(this.tanks.some(n=>Math.abs(n.x-t.x)<.9&&Math.abs(n.z-t.z)<.9))return!1;const i={id:`p${e}`,team:"player",kind:"player",x:t.x,z:t.z,dir:0,velX:0,velZ:0,speed:vb,hp:1,maxHp:1,cooldown:0,star:this.playerStar[e]??0,shield:Sb,spawn:Eb,hitFlash:0,bonus:!1,aiTimer:0,aiStrafe:0,stuckTime:0,playerIndex:e,alive:!0,moving:0,recoil:0,iceX:0,iceZ:0};return this.tanks.push(i),this.emit({type:"respawn",x:i.x,z:i.z,team:"player"}),!0}updatePlayers(e,t){for(const i of[...this.tanks]){if(i.team!=="player"||!i.alive)continue;const n=t[i.playerIndex]??Ub;if(i.spawn<=0){const s=this.readInputDir(i,n);this.driveTank(i,s,e)&&(i.iceX=i.iceZ=0),n.fire&&this.tryFire(i)}this.playerMoving=Math.max(this.playerMoving,i.moving)}}readInputDir(e,t){const i=[];if(t.up&&i.push(0),t.right&&i.push(1),t.down&&i.push(2),t.left&&i.push(3),!i.length)return null;const n=t.lastPressed;return n!=null&&i.includes(n)?n:i.includes(e.dir)?e.dir:i[0]}updateEnemies(e){if(!(this.freeze>0))for(const t of[...this.tanks]){if(t.team!=="enemy"||!t.alive||t.spawn>0)continue;t.aiTimer-=e,t.aiTimer<=0&&this.chooseEnemyDir(t),this.driveTank(t,t.dir,e)?(t.stuckTime+=e,this.brickAhead(t)&&this.tryFire(t),t.stuckTime>=.3&&(this.chooseEnemyDir(t,!0),t.stuckTime=0)):t.stuckTime=Math.max(0,t.stuckTime-e*2),this.enemyConsiderFire(t)}}brickAhead(e){const t=as(e.dir);return this.terrain.get(Math.floor(e.x+t.x*.62),Math.floor(e.z+t.z*.62))?.kind==="brick"}enemyCanEnter(e,t){const i=as(t);let n=e.x,s=e.z;if(t!==e.dir&&(i.x===0?n=So(n):s=So(s),Ys(this.terrain,n,s,en,this.tanks,e.id)))return!1;const a=Math.max(.2,e.speed*.12);return!Ys(this.terrain,n+i.x*a,s+i.z*a,en,this.tanks,e.id)}chooseEnemyDir(e,t=!1){let n={x:yo.x,z:yo.z};const s=this.playerTanks();s.length&&this.rng.chance(.42)&&(s.sort((f,p)=>Math.hypot(f.x-e.x,f.z-e.z)-Math.hypot(p.x-e.x,p.z-e.z)),n=s[0]);const a=n.x-e.x,o=n.z-e.z,l=[];o<-.35?l.push(0):o>.35&&l.push(2),a<-.35?l.push(3):a>.35&&l.push(1);const h=[0,1,2,3].filter(f=>f!==jc[e.dir]&&this.enemyCanEnter(e,f)),d=h.filter(f=>l.includes(f));let u;if(d.length&&(t||this.rng.chance(.68)))u=this.rng.pick(d);else if(h.length)u=this.rng.pick(h);else if(this.enemyCanEnter(e,jc[e.dir]))u=jc[e.dir];else{u=e.dir,e.aiTimer=.25;return}e.dir=u,e.aiTimer=t?this.rng.range(.25,.5):this.rng.range(.6,1.6)}enemyConsiderFire(e){if(e.cooldown>0)return;if(this.rng.chance(.006)){this.tryFire(e);return}const t=[{x:yo.x,z:yo.z},...this.playerTanks()];for(const i of t){const n=i.x-e.x,s=i.z-e.z,a=as(e.dir);if(a.x!==0&&Math.abs(n)>Math.abs(s)&&Math.abs(s)<.42&&Math.sign(n)===Math.sign(a.x)||a.z!==0&&Math.abs(s)>Math.abs(n)&&Math.abs(n)<.42&&Math.sign(s)===Math.sign(a.z)){this.tryFire(e);return}}}driveTank(e,t,i){const n=this.terrain.isOnIce(Math.floor(e.x),Math.floor(e.z));if(t!==null){if(t!==e.dir){if(e.dir=t,as(t).x===0){const f=So(e.x);Ys(this.terrain,f,e.z,en,this.tanks,e.id)||(e.x=f)}else{const f=So(e.z);Ys(this.terrain,e.x,f,en,this.tanks,e.id)||(e.z=f)}n||(e.iceX=0,e.iceZ=0)}const c=as(t),h=c.x*e.speed,d=c.z*e.speed;if(n){const u=Math.min(1,i*6);e.iceX+=(h-e.iceX)*u,e.iceZ+=(d-e.iceZ)*u}else e.iceX=h,e.iceZ=d}else{const c=n?Math.exp(-1.55*i):0;e.iceX*=c,e.iceZ*=c,n||(e.iceX=0,e.iceZ=0)}let s=!1;const a=e.x+e.iceX*i;Ys(this.terrain,a,e.z,en,this.tanks,e.id)?(e.iceX=0,s=!0):e.x=a;const o=e.z+e.iceZ*i;Ys(this.terrain,e.x,o,en,this.tanks,e.id)?(e.iceZ=0,s=!0):e.z=o;const l=Math.hypot(e.iceX,e.iceZ);return e.moving=Math.min(1,l/Math.max(.2,e.speed)),s}tryFire(e){if(e.cooldown>0||e.spawn>0)return;const t=this.bullets.filter(c=>!c.dead&&c.owner===e.id).length,i=e.team==="player"&&e.star>=2?2:1;if(t>=i)return;const n=as(e.dir);let s=9.5,a=1;e.team==="player"?(s=e.star>=1?_b:yb,a=e.star>=3?3:1):s=Mo[e.kind].bullet*Math.min(1.35,1+this.loop*.05);const o=e.x+n.x*.56,l=e.z+n.z*.56;this.bullets.push({id:Fb++,x:o,z:l,dir:e.dir,speed:s,team:e.team,owner:e.id,power:a,dead:!1}),e.cooldown=e.team==="player"?Mb:Mo[e.kind].reload,e.recoil=1,this.emit({type:"shoot",x:o,z:l,dir:e.dir,team:e.team,owner:e.id,power:a})}updateSpawns(e){if(this.spawnQueue.length===0)return;const t=this.mode===2?Pb:Rb;if(this.enemyTanks().length>=t||(this.spawnTimer-=e,this.spawnTimer>0))return;const i=this.rng.shuffle([0,1,2]);for(const n of i){const s=xb[n];if(this.tanks.some(d=>Math.abs(d.x-s.x)<1&&Math.abs(d.z-s.z)<1))continue;const a=this.spawnQueue.shift();if(!a)return;const o=Ib.includes(this.spawnedCount);this.spawnedCount++;const l=Mo[a],c=this.loop,h={id:`e${this.spawnedCount}_${a}`,team:"enemy",kind:a,x:s.x,z:s.z,dir:2,velX:0,velZ:0,speed:l.speed*Math.min(1.6,1+c*.07),hp:l.hp,maxHp:l.hp,cooldown:this.rng.range(.5,1.6),star:0,shield:0,spawn:1.15,hitFlash:0,bonus:o,aiTimer:this.rng.range(.3,1),aiStrafe:0,stuckTime:0,playerIndex:-1,alive:!0,moving:0,recoil:0,iceX:0,iceZ:0};this.tanks.push(h),this.emit({type:"spawn",x:h.x,z:h.z,team:"enemy",kind:a}),this.spawnTimer=this.mode===2?1.4:1.9;return}this.spawnTimer=.4}updateBullets(e){for(const t of this.bullets){if(t.dead)continue;const i=as(t.dir),n=t.speed*e,s=Math.max(1,Math.ceil(n/.18)),a=n/s;for(let o=0;o<s&&!t.dead;o++){if(t.x+=i.x*a,t.z+=i.z*a,t.x<0||t.z<0||t.x>13||t.z>13){t.dead=!0,this.emit({type:"bulletSpark",x:t.x,z:t.z,dir:t.dir});break}const l=this.findTankHit(t);if(l){t.dead=!0,this.hitTank(l,t);break}const c=Math.floor(t.x),h=Math.floor(t.z),d=this.terrain.get(c,h);if(d&&(d.kind==="brick"||d.kind==="steel"||d.kind==="base")){if(t.dead=!0,d.kind==="base")this.destroyBase();else{const u=this.terrain.damage(c,h,t.dir,t.power);u&&u.kind==="brick"?this.emit({type:"brickBreak",x:c,z:h,mask:u.mask,removed:u.removed,dir:t.dir}):u&&u.kind==="steel"?this.emit({type:"steelBreak",x:c,z:h,mask:u.mask,removed:u.removed,dir:t.dir}):this.emit({type:"steelHit",x:c,z:h,dir:t.dir})}break}}}for(let t=0;t<this.bullets.length;t++){const i=this.bullets[t];if(!i.dead)for(let n=t+1;n<this.bullets.length;n++){const s=this.bullets[n];if(!s.dead&&Math.abs(i.x-s.x)<.2&&Math.abs(i.z-s.z)<.2){i.dead=!0,s.dead=!0,this.emit({type:"bulletSpark",x:(i.x+s.x)/2,z:(i.z+s.z)/2,dir:i.dir});break}}}this.bullets=this.bullets.filter(t=>!t.dead)}findTankHit(e){const t=e.team==="player"?"enemy":"player";for(const i of this.tanks)if(!(!i.alive||i.team!==t)&&i.id!==e.owner&&Math.abs(i.x-e.x)<en+af&&Math.abs(i.z-e.z)<en+af)return i;return null}hitTank(e,t){if(e.spawn>0){this.emit({type:"bulletSpark",x:t.x,z:t.z,dir:t.dir});return}if(e.team==="player"){if(e.shield>0){this.emit({type:"bulletSpark",x:t.x,z:t.z,dir:t.dir});return}this.destroyPlayer(e);return}if(e.hp-=1,e.hp>0){e.hitFlash=.16,this.emit({type:"tankHit",x:e.x,z:e.z,team:e.team,kind:e.kind,hp:e.hp});return}const i=t.owner.startsWith("p")?Number(t.owner.slice(1)):null;this.destroyEnemy(e,i,!1)}destroyEnemy(e,t,i){if(!e.alive)return;e.alive=!1,this.tanks=this.tanks.filter(a=>a!==e);const n=e.kind;this.tally[n]=(this.tally[n]??0)+1;const s=Mo[n];t!==null&&t>=0&&this.addScore(t,s.score,e.x,e.z),this.emit({type:"tankDestroyed",x:e.x,z:e.z,team:"enemy",kind:n,bonus:e.bonus}),e.bonus&&this.dropPowerup(e.x,e.z)}destroyPlayer(e){if(!e.alive)return;e.alive=!1,this.tanks=this.tanks.filter(n=>n!==e);const t=e.playerIndex;this.playerStar[t]=0,this.emit({type:"tankDestroyed",x:e.x,z:e.z,team:"player",kind:"player",bonus:!1}),this.lives[t]>0?(this.lives[t]-=1,this.respawnTimers[t]=Cb):(this.lives[t]=0,this.out[t]=!0,this.emit({type:"playerOut",player:t})),this.out.some((n,s)=>s<this.mode&&!n)||this.gameOver()}dropPowerup(e,t){if(this.powerup)return;const i=this.rng.pick(Bb),n=Math.min(12.5,Math.max(.5,e)),s=Math.min(12.5,Math.max(.5,t));this.powerup={kind:i,x:n,z:s,life:Ab,age:0},this.emit({type:"powerupSpawn",x:n,z:s,kind:i})}updatePowerup(e){if(!this.powerup)return;const t=this.powerup;if(t.life-=e,t.age+=e,t.life<=0){this.emit({type:"powerupExpire",x:t.x,z:t.z,kind:t.kind}),this.powerup=null;return}for(const i of this.playerTanks())if(Math.abs(i.x-t.x)<.62&&Math.abs(i.z-t.z)<.62){this.applyPowerup(t,i.playerIndex),this.emit({type:"powerupPickup",x:t.x,z:t.z,kind:t.kind,player:i.playerIndex}),this.powerup=null;return}}applyPowerup(e,t){this.addScore(t,500,e.x,e.z);const i=this.tanks.find(n=>n.team==="player"&&n.playerIndex===t);switch(e.kind){case"star":{const n=Math.min(3,(this.playerStar[t]??0)+1);this.playerStar[t]=n,i&&(i.star=n);break}case"helmet":i&&(i.shield=bb,this.emit({type:"shield",x:i.x,z:i.z,player:t}));break;case"clock":this.freeze=wb,this.emit({type:"freeze"});break;case"shovel":this.applyBaseSteel();break;case"grenade":{this.emit({type:"grenade"});for(const n of[...this.enemyTanks()])this.destroyEnemy(n,t,!0);break}case"tank":this.lives[t]+=1,this.emit({type:"extraLife",player:t});break}}applyBaseSteel(){this.shovel=Tb;for(const e of this.baseWalls)this.terrain.get(e.x,e.z)?.kind==="brick"&&this.terrain.set(e.x,e.z,"steel",15);this.emit({type:"shovel",active:!0})}restoreBaseWalls(){for(const e of this.baseWalls)this.terrain.get(e.x,e.z)?.kind==="steel"&&this.terrain.set(e.x,e.z,"brick",15);this.emit({type:"shovel",active:!1})}destroyBase(){if(this.baseAlive){this.baseAlive=!1;for(let e=0;e<13;e++)for(let t=0;t<13;t++)this.terrain.get(t,e)?.kind==="base"&&this.terrain.set(t,e,"empty");this.emit({type:"baseHit",x:7,z:12}),this.emit({type:"baseDestroyed"}),this.gameOver()}}stageClear(){this.setState("clear"),this.clearTimer=4.2,this.emit({type:"stageClear",stage:this.stage})}advanceStage(){this.stage+=1,this.stage>xh&&(this.stage=1,this.loop+=1),this.beginStage()}gameOver(){this.state!=="over"&&(this.setState("over"),this.overTimer=0,this.emit({type:"gameOver"}))}togglePause(){return this.state==="playing"?(this.setState("paused"),!0):this.state==="paused"?(this.setState("playing"),!0):!1}setState(e){this.state=e,this.emit({type:"state",state:e})}addScore(e,t,i=0,n=0){this.score[e]=(this.score[e]??0)+t,this.emit({type:"score",player:e,amount:t,x:i,z:n})}emit(e){this.events.push(e)}drainEvents(){const e=this.events;return this.events=[],e}playerTanks(){return this.tanks.filter(e=>e.team==="player"&&e.alive)}enemyTanks(){return this.tanks.filter(e=>e.team==="enemy"&&e.alive)}get enemiesRemaining(){return this.spawnQueue.length+this.enemyTanks().length}get totalScore(){return this.score[0]+this.score[1]}get stageScore(){return this.totalScore-this.stageStartScore}get playerSpeed(){return this.playerMoving}get isPlaying(){return this.state==="playing"}get activePowerups(){return{shield:Math.max(0,...this.playerTanks().map(t=>t.shield)),freeze:this.freeze,shovel:this.shovel}}}const hf={tempo:138,lead:[69,0,72,0,76,0,81,0,79,0,76,0,74,0,72,0,71,0,74,0,79,0,83,0,81,0,79,0,76,0,74,0],bass:[45,45,52,45,40,40,47,40,41,41,48,41,43,43,50,43,45,45,52,45,40,40,47,40,41,43,45,47,45,45,45,45],chords:[[69,72,76,81],[65,69,72,77],[67,72,76,79],[67,71,74,79]],kick:[0,3,8,11,16,19,24,27],snare:[4,12,20,28],hat:[2,6,10,14,18,22,26,30],arpGain:1},zb={tempo:96,lead:[69,0,0,0,72,0,76,0,81,0,0,0,79,0,76,0,77,0,0,0,72,0,69,0,67,0,71,0,74,0,79,0],bass:[45,0,0,0,45,0,0,0,41,0,0,0,41,0,0,0,48,0,0,0,48,0,0,0,43,0,0,0,43,0,0,0],chords:[[69,72,76,81],[65,69,72,77],[67,72,76,79],[67,71,74,79]],kick:[0,8,16,24],snare:[12,28],hat:[4,12,20,28],arpGain:.55};function Dn(r){return 440*Math.pow(2,(r-69)/12)}class kb{ctx=null;master=null;musicBus=null;sfxBus=null;engineGain=null;engineFilter=null;engineOsc=null;noiseBuffer=null;muted=!1;musicMode="none";activeTrack=hf;step=0;nextNoteTime=0;schedulerId=null;engineTarget=0;get isMuted(){return this.muted}async resume(){const e=this.ensure();if(e.state==="suspended")try{await e.resume()}catch{}}ensure(){if(this.ctx)return this.ctx;const e=window.AudioContext??window.webkitAudioContext,t=new e;this.ctx=t;const i=t.createGain();i.gain.value=this.muted?0:.62;const n=t.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=22,n.ratio.value=6,n.attack.value=.004,n.release.value=.22,i.connect(n).connect(t.destination),this.master=i;const s=t.createGain();s.gain.value=.5,s.connect(i),this.musicBus=s;const a=t.createGain();return a.gain.value=.85,a.connect(i),this.sfxBus=a,this.noiseBuffer=this.makeNoise(t,2.2),this.startEngine(),t}makeNoise(e,t){const i=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate),n=i.getChannelData(0);let s=0;for(let a=0;a<n.length;a++){const o=Math.random()*2-1;s=s*.7+o*.3,n[a]=s}return i}startEngine(){const e=this.ctx;if(!e||!this.master||!this.noiseBuffer)return;const t=e.createGain();t.gain.value=0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=180,i.Q.value=3;const n=e.createBufferSource();n.buffer=this.noiseBuffer,n.loop=!0,n.connect(i).connect(t).connect(this.master),n.start();const s=e.createOscillator();s.type="sawtooth",s.frequency.value=44;const a=e.createGain();a.gain.value=.5,s.connect(a).connect(t),s.start(),this.engineGain=t,this.engineFilter=i,this.engineOsc=s}setEngine(e){if(!this.ctx||!this.engineGain)return;const t=e>.04?.035+e*.05:.016;this.engineTarget=t;const i=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(t,i,.18),this.engineFilter&&this.engineFilter.frequency.setTargetAtTime(150+e*220,i,.2),this.engineOsc&&this.engineOsc.frequency.setTargetAtTime(42+e*14,i,.2)}setMusic(e){if(e!==this.musicMode&&(this.musicMode=e,!!this.ctx)){if(this.step=0,this.nextNoteTime=this.ctx.currentTime+.08,e==="none"){this.schedulerId!==null&&(window.clearInterval(this.schedulerId),this.schedulerId=null);return}this.activeTrack=e==="stage"?hf:zb,this.schedulerId===null&&(this.schedulerId=window.setInterval(()=>this.scheduler(),24))}}scheduler(){const e=this.ctx;if(!e||this.musicMode==="none")return;const t=this.activeTrack,i=60/t.tempo/2;for(;this.nextNoteTime<e.currentTime+.16;)this.scheduleStep(this.step,this.nextNoteTime,t,i),this.nextNoteTime+=i,this.step=(this.step+1)%32}scheduleStep(e,t,i,n){const s=i.lead[e];s&&this.tone("square",Dn(s),Dn(s),n*1.55,.055,t,2600);const a=i.bass[e];a&&this.tone("triangle",Dn(a),Dn(a),n*1.7,.13,t,700);const o=i.chords[Math.floor(e/8)%i.chords.length],l=e%4,c=o[l]+12;this.tone("square",Dn(c),Dn(c),n*.45,.018*i.arpGain,t,3800),this.tone("square",Dn(o[(l+1)%4]+12),Dn(o[(l+1)%4]+12),n*.4,.014*i.arpGain,t+n*.5,4200),i.kick.includes(e)&&this.kick(t),i.snare.includes(e)&&this.noiseHit(t,.11,"highpass",900,.2),i.hat.includes(e)&&this.noiseHit(t,.03,"highpass",6200,.09)}tone(e,t,i,n,s,a=0,o){const l=this.ctx;if(!l||!this.musicBus)return;const c=a||l.currentTime,h=l.createOscillator();h.type=e,h.frequency.setValueAtTime(Math.max(20,t),c),i!==t&&h.frequency.exponentialRampToValueAtTime(Math.max(20,i),c+n*.9);const d=l.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),c+.012),d.gain.exponentialRampToValueAtTime(1e-4,c+n);let u=d;if(o){const f=l.createBiquadFilter();f.type="lowpass",f.frequency.value=o,d.connect(f),u=f}h.connect(d),u.connect(this.musicBus),h.start(c),h.stop(c+n+.05)}kick(e){const t=this.ctx;if(!t||!this.musicBus)return;const i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(128,e),i.frequency.exponentialRampToValueAtTime(42,e+.13);const n=t.createGain();n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.2),i.connect(n).connect(this.musicBus),i.start(e),i.stop(e+.22)}noiseHit(e,t,i,n,s){const a=this.ctx;if(!a||!this.musicBus||!this.noiseBuffer)return;const o=a.createBufferSource();o.buffer=this.noiseBuffer;const l=a.createBiquadFilter();l.type=i,l.frequency.value=n;const c=a.createGain();c.gain.setValueAtTime(t,e),c.gain.exponentialRampToValueAtTime(1e-4,e+s),o.connect(l).connect(c).connect(this.musicBus),o.start(e,Math.random()*1.2,s+.02)}sfx(e){if(!this.ctx)return;const t=this.ctx;if(!this.sfxBus)return;const i=t.currentTime+.001,n=o=>1+(Math.random()-.5)*o,s=(o,l,c,h,d,u=0,f)=>{const p=i+u,x=t.createOscillator();x.type=o,x.frequency.setValueAtTime(Math.max(20,l*n(.02)),p),x.frequency.exponentialRampToValueAtTime(Math.max(20,c),p+h*.92);const g=t.createGain();g.gain.setValueAtTime(1e-4,p),g.gain.exponentialRampToValueAtTime(Math.max(2e-4,d),p+.006),g.gain.exponentialRampToValueAtTime(1e-4,p+h);let m=g;if(f){const v=t.createBiquadFilter();v.type="lowpass",v.frequency.value=f,g.connect(v),m=v}x.connect(g),m.connect(this.sfxBus),x.start(p),x.stop(p+h+.04)},a=(o,l,c,h,d,u=0,f=1)=>{if(!this.noiseBuffer)return;const p=i+u,x=t.createBufferSource();x.buffer=this.noiseBuffer;const g=t.createBiquadFilter();g.type=c,g.frequency.setValueAtTime(h,p),d&&g.frequency.exponentialRampToValueAtTime(Math.max(30,d),p+o),g.Q.value=f;const m=t.createGain();m.gain.setValueAtTime(l,p),m.gain.exponentialRampToValueAtTime(1e-4,p+o),x.connect(g).connect(m).connect(this.sfxBus),x.start(p,Math.random()*1.5,o+.02)};switch(e){case"shoot":s("square",820,160,.09,.11,0,3200),a(.06,.08,"highpass",2400);break;case"enemyShoot":s("square",540,120,.1,.06,0,2400),a(.05,.05,"highpass",1800);break;case"brick":a(.16,.18,"bandpass",900,400,0,1.2),s("triangle",180,90,.12,.07);break;case"steel":s("triangle",2100,1500,.12,.055),a(.08,.09,"highpass",3200);break;case"hit":s("square",320,110,.09,.08),a(.1,.12,"bandpass",1400,500,0,1.4);break;case"ricochet":s("triangle",2600,900,.1,.03);break;case"explode":a(.55,.32,"lowpass",1800,90,0,.7),s("sine",110,38,.42,.24),s("sawtooth",220,60,.2,.06,0,900);break;case"bigExplode":a(.9,.4,"lowpass",2200,60,0,.6),s("sine",130,30,.7,.3),s("sawtooth",340,50,.35,.09,0,700);break;case"base":a(1.4,.5,"lowpass",2600,50,0,.5),s("sine",90,24,1.1,.4),s("sawtooth",180,40,.6,.13,0,600),s("square",440,110,.5,.09,.35,1200);break;case"powerup":s("square",660,660,.1,.07,0),s("square",880,880,.1,.07,.09),s("square",1320,1320,.16,.07,.18);break;case"pickup":[660,880,1100,1320].forEach((o,l)=>s("square",o,o,.1,.07,l*.06));break;case"shield":s("sine",880,1760,.35,.07),s("sine",1320,2200,.45,.05,.05);break;case"freeze":[1760,1320,990,660].forEach((o,l)=>s("triangle",o,o*.98,.22,.07,l*.08)),a(.5,.04,"highpass",5e3,void 0,0,.8);break;case"shovel":s("triangle",260,520,.18,.09),s("triangle",390,780,.2,.07,.08),a(.2,.08,"bandpass",1600,900,.04);break;case"grenade":a(1.1,.42,"lowpass",2e3,50,0,.6),s("sine",90,28,.9,.3);break;case"life":[784,988,1175,1568].forEach((o,l)=>s("square",o,o,.16,.06,l*.09));break;case"start":[440,554,659,880].forEach((o,l)=>s("square",o,o,.14,.06,l*.1));break;case"clear":[659,784,988,1319].forEach((o,l)=>s("square",o,o,.22,.07,l*.11)),s("triangle",330,660,.6,.08);break;case"gameover":[659,622,587,554,523,440].forEach((o,l)=>s("square",o,o*.99,.32,.08,l*.16));break;case"out":s("square",330,110,.4,.08);break;case"pause":s("square",880,660,.08,.05);break;case"click":s("square",520,780,.05,.04);break;case"splash":a(.3,.08,"bandpass",1400,500,0,1.5);break}}toggleMute(){return this.muted=!this.muted,this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:.62,this.ctx.currentTime,.05),this.muted}dispose(){this.schedulerId!==null&&window.clearInterval(this.schedulerId),this.schedulerId=null,this.ctx?.close(),this.ctx=null}}const uf={ArrowUp:0,ArrowRight:1,ArrowDown:2,ArrowLeft:3},df={KeyW:0,KeyD:1,KeyS:2,KeyA:3};class Vb{onAction=null;keys=new Set;lastPressed=[null,null];lastButtons=[];boundKeyDown;boundKeyUp;constructor(){this.boundKeyDown=e=>this.keyDown(e),this.boundKeyUp=e=>this.keyUp(e),window.addEventListener("keydown",this.boundKeyDown),window.addEventListener("keyup",this.boundKeyUp),window.addEventListener("blur",()=>this.keys.clear())}keyDown(e){const t=e.code;if((t.startsWith("Arrow")||t==="Space"||t==="Enter"||t==="KeyW"||t==="KeyA"||t==="KeyS"||t==="KeyD"||t==="KeyF")&&e.preventDefault(),e.repeat){this.keys.add(t);return}switch(this.keys.add(t),t in uf&&(this.lastPressed[0]=uf[t]),t in df&&(this.lastPressed[1]=df[t]),t){case"Enter":this.onAction?.("start");break;case"KeyP":case"Escape":this.onAction?.("pause");break;case"KeyM":this.onAction?.("mute");break;case"KeyR":this.onAction?.("retry");break;case"Digit1":this.onAction?.("one");break;case"Digit2":this.onAction?.("two");break}}keyUp(e){this.keys.delete(e.code)}getPlayers(e){const t=[{up:this.keys.has("ArrowUp"),down:this.keys.has("ArrowDown"),left:this.keys.has("ArrowLeft"),right:this.keys.has("ArrowRight"),fire:this.keys.has("Space"),lastPressed:this.lastPressed[0]},{up:this.keys.has("KeyW"),down:this.keys.has("KeyS"),left:this.keys.has("KeyA"),right:this.keys.has("KeyD"),fire:this.keys.has("KeyF"),lastPressed:this.lastPressed[1]}],i=typeof navigator.getGamepads=="function"?navigator.getGamepads():[];for(let n=0;n<Math.min(2,i.length);n++){const s=i[n];if(!s)continue;const a=this.lastButtons[n]??[],o=s.buttons.map(d=>d.pressed),l=t[n],c=s.axes[0]??0,h=s.axes[1]??0;(Math.abs(c)>.35||Math.abs(h)>.35)&&(Math.abs(c)>Math.abs(h)?(l.left=l.left||c<-.35,l.right=l.right||c>.35,c<-.35&&(this.lastPressed[n]=3),c>.35&&(this.lastPressed[n]=1)):(l.up=l.up||h<-.35,l.down=l.down||h>.35,h<-.35&&(this.lastPressed[n]=0),h>.35&&(this.lastPressed[n]=2))),l.fire=l.fire||o[0]||o[2]||o[7],l.up=l.up||o[12],l.down=l.down||o[13],l.left=l.left||o[14],l.right=l.right||o[15],l.lastPressed=this.lastPressed[n]??l.lastPressed??null,o[9]&&!a[9]&&this.onAction?.("start"),o[8]&&!a[8]&&this.onAction?.("pause"),this.lastButtons[n]=o}return t}clearAxes(){this.keys.clear()}destroy(){window.removeEventListener("keydown",this.boundKeyDown),window.removeEventListener("keyup",this.boundKeyUp)}}const Po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hb=new gr(-1,1,1,-1,0,1);class Gb extends Ve{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}}const Wb=new Gb;class mu{constructor(e){this._mesh=new ae(Wb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class om extends vr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fn.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new mu(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ff extends vr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Xb extends vr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new j);this._width=i.width,this._height=i.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new om(Po),this.copyPass.material.blending=Gi,this.timer=new cu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ff!==void 0&&(a instanceof ff?i=!0:a instanceof Xb&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yb extends vr{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new se}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}}const Zb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class hr extends vr{constructor(e,t=1,i,n){super(),this.strength=t,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new j(e.x,e.y):new j(256,256),this.clearColor=new se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(s,a,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Ot(s,a,{type:jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new Ot(s,a,{type:jt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}const o=Zb;this.highPassUniforms=Fn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new j(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fn.clone(Po.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,premultipliedAlpha:!0,blending:$t,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new se,this._oldClearAlpha=1,this._basic=new qt,this._fsQuad=new mu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new j(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=hr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=hr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const n=[],s=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),s.push(c)}return new wt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}hr.BlurDirectionX=new j(1,0);hr.BlurDirectionY=new j(0,1);const bo={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new j(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},wo={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new j(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Qc={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new j(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class Kb extends vr{constructor(){super(),this._edgesRT=new Ot(1,1,{depthBuffer:!1,type:jt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Ot(1,1,{depthBuffer:!1,type:jt}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Et,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=bt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Et,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=Pt,this._searchTexture.minFilter=Pt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Fn.clone(bo.uniforms),this._materialEdges=new wt({defines:Object.assign({},bo.defines),uniforms:this._uniformsEdges,vertexShader:bo.vertexShader,fragmentShader:bo.fragmentShader}),this._uniformsWeights=Fn.clone(wo.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new wt({defines:Object.assign({},wo.defines),uniforms:this._uniformsWeights,vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader}),this._uniformsBlend=Fn.clone(Qc.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new wt({uniforms:this._uniformsBlend,vertexShader:Qc.vertexShader,fragmentShader:Qc.fragmentShader}),this._fsQuad=new mu(null)}render(e,t,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}class Jb extends kl{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Ut;e.deleteAttribute("uv");const t=new it({side:Jt}),i=new it,n=new Gn(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);const s=new ae(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Ai(e,i,6),o=new tt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new ae(e,Zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ae(e,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new ae(e,Zs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const d=new ae(e,Zs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const u=new ae(e,Zs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const f=new ae(e,Zs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Zs(r){return new Qh({color:0,emissive:16777215,emissiveIntensity:r})}let lm=4;function li(r){const e=document.createElement("canvas");e.width=r,e.height=r;const t=e.getContext("2d");return{canvas:e,ctx:t}}function Ri(r,e=!0,t){const i=new Gh(r);return i.wrapS=Xi,i.wrapT=Xi,i.anisotropy=lm,e&&(i.colorSpace=Yt),t&&i.repeat.set(t[0],t[1]),i.needsUpdate=!0,i}function Sn(r,e,t,i,n=!0){for(let s=0;s<t;s++){const a=n?255:0;r.fillStyle=`rgba(${a},${a},${a},${Math.random()*i})`,r.fillRect(Math.random()*e,Math.random()*e,Math.random()*2+.5,Math.random()*2+.5)}}function ai(r,e){const t=Math.sin(r*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function gu(r,e){const t=r.width,n=r.getContext("2d").getImageData(0,0,t,t).data,s=new Uint8Array(t*t*4),a=(l,c)=>{const h=(l+t)%t,d=(c+t)%t;return n[(d*t+h)*4]/255};for(let l=0;l<t;l++)for(let c=0;c<t;c++){const h=(a(c+1,l)-a(c-1,l))*e,d=(a(c,l+1)-a(c,l-1))*e,u=-h,f=-d,p=Math.hypot(u,f,1),x=(l*t+c)*4;s[x]=Math.round((u/p*.5+.5)*255),s[x+1]=Math.round((f/p*.5+.5)*255),s[x+2]=Math.round((1/p*.5+.5)*255),s[x+3]=255}const o=new Si(s,t,t,Kt);return o.wrapS=Xi,o.wrapT=Xi,o.anisotropy=lm,o.needsUpdate=!0,o}const pf=new Map;function ti(r,e){const t=pf.get(r);if(t)return t;const i=e();return pf.set(r,i),i}function jb(){return ti("brick",()=>{const{canvas:e,ctx:t}=li(256);t.fillStyle="#2a1c16",t.fillRect(0,0,256,256);const i=6,n=256/i,s=256/3;for(let a=0;a<i;a++){const o=a%2===0?0:-s/2;for(let l=-1;l<4;l++){const c=l*s+o+3,h=a*n+3,d=s-6,u=n-6,f=.8+Math.random()*.35,p=Math.floor(114*f),x=Math.floor(82*f),g=Math.floor(69*f),m=t.createLinearGradient(c,h,c,h+u);m.addColorStop(0,`rgb(${p+14},${x+9},${g+7})`),m.addColorStop(.55,`rgb(${p},${x},${g})`),m.addColorStop(1,`rgb(${p-20},${x-14},${g-11})`),t.fillStyle=m,t.beginPath(),t.roundRect(c,h,d,u,3),t.fill(),t.fillStyle="rgba(255,220,190,0.16)",t.fillRect(c+1,h+1,d-2,2),t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(c+1,h+u-3,d-2,2);for(let v=0;v<8;v++)t.fillStyle=`rgba(0,0,0,${Math.random()*.14})`,t.fillRect(c+Math.random()*d,h+Math.random()*u,Math.random()*8+2,Math.random()*3+1)}}return Sn(t,256,1600,.14,!1),Sn(t,256,900,.12,!0),Ri(e,!0)})}function mf(){return ti("metal",()=>{const{canvas:e,ctx:t}=li(256),i=t.createLinearGradient(0,0,256,256);i.addColorStop(0,"#8b949e"),i.addColorStop(.45,"#6c757d"),i.addColorStop(.55,"#7c858d"),i.addColorStop(1,"#515960"),t.fillStyle=i,t.fillRect(0,0,256,256);for(let n=0;n<260;n++){t.strokeStyle=`rgba(255,255,255,${Math.random()*.09})`,t.lineWidth=Math.random()*1.6,t.beginPath();const s=Math.random()*256;t.moveTo(0,s),t.lineTo(256,s+Math.random()*3-1.5),t.stroke()}for(let n=0;n<50;n++){t.strokeStyle=`rgba(20,24,28,${Math.random()*.35})`,t.lineWidth=Math.random()*2;const s=Math.random()*256,a=Math.random()*256;t.beginPath(),t.moveTo(s,a),t.lineTo(s+Math.random()*40-20,a+Math.random()*40-20),t.stroke()}for(let n=0;n<6;n++)for(const[s,a]of[[14+n*45,14],[14+n*45,242],[14,14+n*45],[242,14+n*45]]){const l=t.createRadialGradient(s-1,a-1,.5,s,a,4.2);l.addColorStop(0,"#cdd6de"),l.addColorStop(.6,"#7e8891"),l.addColorStop(1,"#3a4148"),t.fillStyle=l,t.beginPath(),t.arc(s,a,4.2,0,Math.PI*2),t.fill()}return Sn(t,256,900,.12,!1),Ri(e,!0)})}function Qb(){return ti("ground",()=>{const{canvas:e,ctx:t}=li(2048);t.fillStyle="#48453c",t.fillRect(0,0,2048,2048);for(let n=0;n<110;n++){const s=ai(n,1)*2048,a=ai(n,2)*2048,o=60+ai(n,3)*300,l=t.createRadialGradient(s,a,0,s,a,o),c=ai(n,4);c>.62?l.addColorStop(0,"rgba(104,92,68,0.30)"):c>.3?l.addColorStop(0,"rgba(24,24,22,0.34)"):l.addColorStop(0,"rgba(96,98,94,0.16)"),l.addColorStop(.7,"rgba(0,0,0,0.05)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(s-o,a-o,o*2,o*2)}for(let n=0;n<24e3;n++){const a=40+Math.random()*120;t.fillStyle=`rgba(${a},${a-2},${a-8},${Math.random()*.3})`;const o=Math.random()*3.4+.6;t.fillRect(Math.random()*2048,Math.random()*2048,o,o)}t.save();for(const[n,s,a,o,l]of[[2048*.18,2048*.92,2048*.34,2048*.78,30],[2048*.72,2048*.28,2048*.16,2048*.9,22]])for(const c of[-l*.5,l*.5]){const h=t.createLinearGradient(0,a+c,0,a+c+l*.5);h.addColorStop(0,"rgba(18,17,15,0)"),h.addColorStop(.5,"rgba(18,17,15,0.22)"),h.addColorStop(1,"rgba(18,17,15,0)"),t.strokeStyle=h,t.lineWidth=l*.5,t.beginPath(),t.moveTo(n,a+c),t.lineTo(s,o+c),t.stroke()}t.restore();const i=2048/13;for(let n=0;n<=13;n++)t.strokeStyle="rgba(20,18,15,0.30)",t.lineWidth=2,t.beginPath(),t.moveTo(n*i,0),t.lineTo(n*i,2048),t.stroke(),t.beginPath(),t.moveTo(0,n*i),t.lineTo(2048,n*i),t.stroke(),t.strokeStyle="rgba(190,182,160,0.05)",t.lineWidth=1,t.beginPath(),t.moveTo(n*i+2,0),t.lineTo(n*i+2,2048),t.stroke();for(let n=0;n<34;n++){let s=ai(n,9)*2048,a=ai(n,10)*2048;t.strokeStyle=`rgba(16,14,12,${.25+ai(n,11)*.3})`,t.lineWidth=.8+ai(n,12)*1.4,t.beginPath(),t.moveTo(s,a);for(let o=0;o<8;o++)s+=(ai(n,20+o)-.5)*90,a+=(ai(n,30+o)-.5)*90,t.lineTo(s,a);t.stroke()}for(let n=0;n<16;n++){const s=ai(n,40)*2048,a=ai(n,41)*2048,o=26+ai(n,42)*70,l=t.createRadialGradient(s,a,0,s,a,o);l.addColorStop(0,"rgba(8,7,6,0.5)"),l.addColorStop(.55,"rgba(12,10,9,0.24)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(s-o,a-o,o*2,o*2)}return Sn(t,2048,5e3,.1,!1),Sn(t,2048,2600,.08,!0),Ri(e,!0)})}function $b(){return ti("groundNormal",()=>{const{canvas:e,ctx:t}=li(1024);t.fillStyle="#808080",t.fillRect(0,0,1024,1024);for(let n=0;n<16e3;n++){const s=Math.floor(90+Math.random()*90);t.fillStyle=`rgb(${s},${s},${s})`,t.fillRect(Math.random()*1024,Math.random()*1024,Math.random()*3+1,Math.random()*3+1)}const i=1024/13;t.lineWidth=3;for(let n=0;n<=13;n++)t.strokeStyle="rgba(70,70,70,0.9)",t.beginPath(),t.moveTo(n*i,0),t.lineTo(n*i,1024),t.stroke(),t.beginPath(),t.moveTo(0,n*i),t.lineTo(1024,n*i),t.stroke();return gu(e,2.4)})}function e1(){return ti("groundRough",()=>{const{canvas:e,ctx:t}=li(1024);t.fillStyle="#e8e8e8",t.fillRect(0,0,1024,1024);for(let i=0;i<26;i++){const n=ai(i,60)*1024,s=ai(i,61)*1024,a=18+ai(i,62)*60,o=t.createRadialGradient(n,s,0,n,s,a);o.addColorStop(0,"rgba(40,40,40,0.85)"),o.addColorStop(.6,"rgba(120,120,120,0.35)"),o.addColorStop(1,"rgba(200,200,200,0)"),t.fillStyle=o,t.fillRect(n-a,s-a,a*2,a*2)}return Sn(t,1024,3e3,.25,!0),Ri(e,!1)})}function t1(){return ti("brickNormal",()=>{const{canvas:e,ctx:t}=li(512);t.fillStyle="#4a4a4a",t.fillRect(0,0,512,512);const i=6,n=512/i,s=512/3;for(let a=0;a<i;a++){const o=a%2===0?0:-s/2;for(let l=-1;l<4;l++){const c=l*s+o+3,h=a*n+3,d=s-6,u=n-6,f=t.createLinearGradient(c,h,c,h+u);f.addColorStop(0,"#c8c8c8"),f.addColorStop(.5,"#dcdcdc"),f.addColorStop(1,"#b0b0b0"),t.fillStyle=f,t.beginPath(),t.roundRect(c,h,d,u,4),t.fill();for(let p=0;p<40;p++){const x=Math.floor(150+Math.random()*70);t.fillStyle=`rgb(${x},${x},${x})`,t.fillRect(c+Math.random()*d,h+Math.random()*u,2,2)}}}return gu(e,2.2)})}function i1(){return ti("steelNormal",()=>{const{canvas:e,ctx:t}=li(512);t.fillStyle="#8a8a8a",t.fillRect(0,0,512,512),t.strokeStyle="#d8d8d8",t.lineWidth=10,t.strokeRect(26,26,460,460),t.strokeStyle="#5a5a5a",t.lineWidth=6,t.strokeRect(40,40,432,432),t.fillStyle="#9c9c9c",t.fillRect(40,40,432,432);for(let i=0;i<6;i++)for(const[n,s]of[[58+i*79,58],[58+i*79,454],[58,58+i*79],[454,58+i*79]]){const a=t.createRadialGradient(n-1,s-1,1,n,s,9);a.addColorStop(0,"#ffffff"),a.addColorStop(.55,"#c0c0c0"),a.addColorStop(1,"#6a6a6a"),t.fillStyle=a,t.beginPath(),t.arc(n,s,9,0,Math.PI*2),t.fill()}return Sn(t,512,1200,.15,!0),gu(e,2)})}function n1(){return ti("asphalt",()=>{const{canvas:e,ctx:t}=li(512);t.fillStyle="#17191c",t.fillRect(0,0,512,512);for(let i=0;i<7e3;i++){const n=Math.random()*90;t.fillStyle=`rgba(${n},${n},${n+4},${Math.random()*.22})`,t.fillRect(Math.random()*512,Math.random()*512,Math.random()*2+.5,Math.random()*2+.5)}for(let i=0;i<18;i++){t.strokeStyle=`rgba(0,0,0,${.2+Math.random()*.3})`,t.lineWidth=1+Math.random()*2,t.beginPath();let n=Math.random()*512,s=Math.random()*512;t.moveTo(n,s);for(let a=0;a<6;a++)n+=Math.random()*40-20,s+=Math.random()*40-20,t.lineTo(n,s);t.stroke()}return Ri(e,!0,[4,4])})}function s1(){return ti("ice",()=>{const{canvas:e,ctx:t}=li(256),i=t.createLinearGradient(0,0,256,256);i.addColorStop(0,"#b9d8e4"),i.addColorStop(.45,"#8fb8c9"),i.addColorStop(1,"#a9cfdd"),t.fillStyle=i,t.fillRect(0,0,256,256);for(let n=0;n<26;n++){t.strokeStyle=`rgba(245,253,255,${.2+Math.random()*.5})`,t.lineWidth=Math.random()*1.6+.3,t.beginPath();let s=Math.random()*256,a=Math.random()*256;t.moveTo(s,a);const o=2+Math.floor(Math.random()*4);for(let l=0;l<o;l++)s+=Math.random()*60-30,a+=Math.random()*60-30,t.lineTo(s,a);t.stroke()}for(let n=0;n<28;n++){const s=Math.random()*256,a=Math.random()*256,o=Math.random()*24+4,l=t.createRadialGradient(s,a,0,s,a,o);l.addColorStop(0,"rgba(255,255,255,0.28)"),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.fillRect(s-o,a-o,o*2,o*2)}return Sn(t,256,900,.14,!0),Ri(e,!0)})}function r1(){return ti("forest",()=>{const{canvas:e,ctx:t}=li(256);t.fillStyle="#33472a",t.fillRect(0,0,256,256);for(let i=0;i<900;i++){const n=60+Math.random()*70;t.fillStyle=`rgba(${n*.55},${n},${n*.4},${Math.random()*.42})`,t.fillRect(Math.random()*256,Math.random()*256,Math.random()*4+1,Math.random()*6+1)}for(let i=0;i<20;i++)t.fillStyle=`rgba(20,30,16,${Math.random()*.3})`,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*26+6,0,Math.PI*2),t.fill();return Ri(e,!0)})}function a1(){return ti("waterNormal",()=>{const e=new Uint8Array(65536),t=(n,s)=>Math.sin(n*.16+s*.07)*.5+Math.sin(n*.05-s*.13)*.5+Math.sin(n*.31+s*.23)*.22;for(let n=0;n<128;n++)for(let s=0;s<128;s++){const a=t(s+1,n)-t(s-1,n),o=t(s,n+1)-t(s,n-1),l=-a*.9,c=-o*.9,h=Math.hypot(l,c,1),d=(n*128+s)*4;e[d]=(l/h*.5+.5)*255,e[d+1]=(c/h*.5+.5)*255,e[d+2]=(1/h*.5+.5)*255,e[d+3]=255}const i=new Si(e,128,128,Kt);return i.wrapS=Xi,i.wrapT=Xi,i.repeat.set(2,2),i.needsUpdate=!0,i})}function o1(){return ti("tread",()=>{const{canvas:e,ctx:t}=li(128);t.fillStyle="#23262a",t.fillRect(0,0,128,128);for(let i=0;i<128;i+=16)t.fillStyle="#40454b",t.fillRect(0,i,128,7),t.fillStyle="rgba(255,255,255,0.1)",t.fillRect(0,i,128,1.5),t.fillStyle="rgba(0,0,0,0.4)",t.fillRect(0,i+8,128,2);return Ri(e,!0,[1,2])})}function ga(){return ti("spark",()=>{const{canvas:e,ctx:t}=li(64),i=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,235,180,0.95)"),i.addColorStop(.6,"rgba(255,150,50,0.45)"),i.addColorStop(1,"rgba(255,90,10,0)"),t.fillStyle=i,t.fillRect(0,0,64,64),Ri(e)})}function l1(){return ti("smoke",()=>{const{canvas:e,ctx:t}=li(128);t.clearRect(0,0,128,128);for(let i=0;i<18;i++){const n=64+(Math.random()-.5)*128*.45,s=128/2+(Math.random()-.5)*128*.45,a=128*(.16+Math.random()*.22),o=t.createRadialGradient(n,s,0,n,s,a);o.addColorStop(0,"rgba(210,205,198,0.22)"),o.addColorStop(.6,"rgba(160,155,148,0.1)"),o.addColorStop(1,"rgba(120,115,110,0)"),t.fillStyle=o,t.fillRect(n-a,s-a,a*2,a*2)}return Ri(e)})}function c1(){return ti("scorch",()=>{const{canvas:e,ctx:t}=li(128);t.clearRect(0,0,128,128);for(let i=0;i<26;i++){const n=64+(Math.random()-.5)*128*.4,s=128/2+(Math.random()-.5)*128*.4,a=128*(.1+Math.random()*.3),o=t.createRadialGradient(n,s,0,n,s,a);o.addColorStop(0,"rgba(10,8,7,0.4)"),o.addColorStop(.7,"rgba(16,12,10,0.18)"),o.addColorStop(1,"rgba(20,15,12,0)"),t.fillStyle=o,t.fillRect(n-a,s-a,a*2,a*2)}return Ri(e)})}function h1(){return ti("beam",()=>{const{canvas:e,ctx:t}=li(64),i=t.createLinearGradient(0,0,0,64);return i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.4,"rgba(255,230,170,0.55)"),i.addColorStop(.7,"rgba(255,190,90,0.8)"),i.addColorStop(1,"rgba(255,150,40,0)"),t.fillStyle=i,t.fillRect(64*.25,0,64*.5,64),Ri(e)})}function $c(){return ti("concrete",()=>{const{canvas:e,ctx:t}=li(512);t.fillStyle="#2a2c30",t.fillRect(0,0,512,512);for(let i=0;i<5e3;i++){const n=30+Math.random()*60;t.fillStyle=`rgba(${n},${n+2},${n+5},${Math.random()*.25})`,t.fillRect(Math.random()*512,Math.random()*512,Math.random()*3+1,Math.random()*3+1)}return Sn(t,512,1600,.16,!1),Ri(e,!0,[6,6])})}class eh{points;capacity;positions;colors;sizes;alphas;life;maxLife;vx;vy;vz;size0;size1;gravity;drag;alpha0;cursor=0;material;constructor(e,t,i){this.capacity=e,this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.sizes=new Float32Array(e),this.alphas=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.size0=new Float32Array(e),this.size1=new Float32Array(e),this.gravity=new Float32Array(e),this.drag=new Float32Array(e),this.alpha0=new Float32Array(e);for(let s=0;s<e;s++)this.positions[s*3+1]=-100;const n=new Ve;n.setAttribute("position",new Ze(this.positions,3)),n.setAttribute("aColor",new Ze(this.colors,3)),n.setAttribute("aSize",new Ze(this.sizes,1)),n.setAttribute("aAlpha",new Ze(this.alphas,1)),this.material=new wt({uniforms:{uMap:{value:t},uPixelScale:{value:1200}},vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uPixelScale;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (uPixelScale / max(0.001, -mv.z));
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor, tex.a * vAlpha);
          if (gl_FragColor.a < 0.003) discard;
        }
      `,transparent:!0,depthWrite:!1,blending:i?$t:Bn}),this.points=new xs(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=i?4:3}spawn(e){const t=this.cursor;this.cursor=(this.cursor+1)%this.capacity,this.positions[t*3]=e.x,this.positions[t*3+1]=e.y,this.positions[t*3+2]=e.z,this.colors[t*3]=e.color.r,this.colors[t*3+1]=e.color.g,this.colors[t*3+2]=e.color.b,this.life[t]=e.life,this.maxLife[t]=e.life,this.vx[t]=e.vx,this.vy[t]=e.vy,this.vz[t]=e.vz,this.size0[t]=e.size0,this.size1[t]=e.size1,this.gravity[t]=e.gravity,this.drag[t]=e.drag,this.alpha0[t]=e.alpha,this.sizes[t]=e.size0,this.alphas[t]=e.alpha}update(e){for(let i=0;i<this.capacity;i++){if(this.life[i]<=0){this.alphas[i]!==0&&(this.alphas[i]=0);continue}if(this.life[i]-=e,this.life[i]<=0){this.alphas[i]=0,this.sizes[i]=0,this.positions[i*3+1]=-100;continue}const n=Math.exp(-this.drag[i]*e);this.vx[i]*=n,this.vz[i]*=n,this.vy[i]=this.vy[i]*n+this.gravity[i]*e,this.positions[i*3]+=this.vx[i]*e,this.positions[i*3+1]+=this.vy[i]*e,this.positions[i*3+2]+=this.vz[i]*e,this.positions[i*3+1]<.03&&(this.positions[i*3+1]=.03,this.vy[i]*=-.25);const s=1-this.life[i]/this.maxLife[i];this.sizes[i]=this.size0[i]+(this.size1[i]-this.size0[i])*s,this.alphas[i]=this.alpha0[i]*(1-s*s)}const t=this.points.geometry;t.getAttribute("position").needsUpdate=!0,t.getAttribute("aColor").needsUpdate=!0,t.getAttribute("aSize").needsUpdate=!0,t.getAttribute("aAlpha").needsUpdate=!0}setPixelScale(e){this.material.uniforms.uPixelScale.value=e}dispose(){this.points.removeFromParent(),this.points.geometry.dispose(),this.material.dispose()}}class u1{mesh;slots=[];cursor=0;dummy=new tt;color=new se;constructor(e=260){const t=new Ut(1,1,1),i=new it({color:16777215,roughness:.62,metalness:.25,vertexColors:!1});this.mesh=new Ai(t,i,e),this.mesh.instanceMatrix.setUsage(gl),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1;for(let n=0;n<e;n++){this.slots.push({active:!1,x:0,y:-10,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,avx:0,avy:0,avz:0,scale:0,life:0,maxLife:1});const s=new tt;s.position.set(0,-10,0),s.scale.setScalar(0),s.updateMatrix(),this.mesh.setMatrixAt(n,s.matrix),this.mesh.setColorAt(n,this.color.setHex(16777215))}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}spawn(e,t,i,n,s){const a=this.cursor;this.cursor=(this.cursor+1)%this.slots.length;const o=this.slots[a],l=Math.random()*Math.PI*2,c=(.6+Math.random()*1.8)*s;o.active=!0,o.x=e+(Math.random()-.5)*.2,o.y=t+Math.random()*.15,o.z=i+(Math.random()-.5)*.2,o.vx=Math.cos(l)*c,o.vz=Math.sin(l)*c,o.vy=1.6+Math.random()*2.4*s,o.rx=Math.random()*Math.PI,o.ry=Math.random()*Math.PI,o.rz=Math.random()*Math.PI,o.avx=(Math.random()-.5)*10,o.avy=(Math.random()-.5)*10,o.avz=(Math.random()-.5)*10,o.scale=.05+Math.random()*.11,o.life=1.6+Math.random()*1.6,o.maxLife=o.life,this.mesh.setColorAt(a,n),this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(e){for(let t=0;t<this.slots.length;t++){const i=this.slots[t];if(!i.active)continue;if(i.life-=e,i.life<=0){i.active=!1,i.scale=0,this.dummy.position.set(0,-10,0),this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix);continue}i.vy-=9.4*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.y<.06&&(i.y=.06,i.vy*=-.34,i.vx*=.72,i.vz*=.72,i.avx*=.6,i.avz*=.6),i.rx+=i.avx*e,i.ry+=i.avy*e,i.rz+=i.avz*e;const n=Math.min(1,i.life/.5);this.dummy.position.set(i.x,i.y,i.z),this.dummy.rotation.set(i.rx,i.ry,i.rz),this.dummy.scale.setScalar(i.scale*n),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}class d1{group=new Lt;sparks;smoke;fire;debris;rings=[];decals=[];decalIndex=0;lights=[];shakeAmount=0;shakeTime=0;lowQuality;constructor(e=!1){this.lowQuality=e,this.sparks=new eh(e?260:520,ga(),!0),this.smoke=new eh(e?160:300,l1(),!1),this.fire=new eh(e?140:280,ga(),!0),this.group.add(this.sparks.points,this.smoke.points,this.fire.points),this.debris=new u1(e?140:260),this.group.add(this.debris.mesh);const t=new pr(.82,1,56);for(let n=0;n<10;n++){const s=new qt({color:16760938,transparent:!0,opacity:0,blending:$t,depthWrite:!1,side:Xt}),a=new ae(t,s);a.rotation.x=-Math.PI/2,a.visible=!1,this.rings.push({mesh:a,material:s,life:0,maxLife:1,scale:1}),this.group.add(a)}for(let n=0;n<3;n++){const s=new Gn(16752714,0,9,2);s.position.set(0,-10,0),this.group.add(s),this.lights.push({light:s,life:0,max:1,power:0})}const i=new Zt(1,1);for(let n=0;n<26;n++){const s=new qt({map:c1(),transparent:!0,opacity:0,depthWrite:!1}),a=new ae(i,s);a.rotation.x=-Math.PI/2,a.visible=!1,a.renderOrder=1,this.decals.push(a),this.group.add(a)}}setPixelScale(e){this.sparks.setPixelScale(e),this.smoke.setPixelScale(e),this.fire.setPixelScale(e)}sparkSeed(e,t,i,n,s,a,o){const l=Math.random()*Math.PI*2,c=Math.random();return{x:e,y:t,z:i,vx:Math.cos(l)*s*Math.random(),vy:(.5+c)*s,vz:Math.sin(l)*s*Math.random(),life:a,size0:o,size1:o*.2,color:n,alpha:1,gravity:-6.5,drag:1.6,additive:!0}}muzzle(e,t,i,n,s){const a=gh[i],o=new se(n==="player"?16764794:16742988);for(let l=0;l<(s>1?9:6);l++){const c=this.sparkSeed(e,.42,t,o,3.2,.18+Math.random()*.14,.05+Math.random()*.05);c.vx+=a.x*2.5,c.vz+=a.z*2.5,this.sparks.spawn(c)}for(let l=0;l<2;l++)this.smoke.spawn({x:e,y:.42,z:t,vx:a.x*.7+(Math.random()-.5)*.3,vy:.45,vz:a.z*.7+(Math.random()-.5)*.3,life:.7,size0:.12,size1:.34,color:new se(9077112),alpha:.25,gravity:.25,drag:1.1,additive:!1});this.flashLight(e,.5,t,16756832,2.4,.1,5)}impact(e,t,i,n=16761978){const s=gh[i];for(let a=0;a<10;a++){const o=this.sparkSeed(e,.35,t,new se(n),2.6,.2+Math.random()*.2,.035+Math.random()*.03);o.vx+=-s.x*1.8,o.vz+=-s.z*1.8,this.sparks.spawn(o)}}brickBreak(e,t,i,n){const s=new se(9062963),a=new se(10190952);for(const o of i){const l=o===1||o===3?.25:-.25,c=o===2||o===3?.25:-.25,h=e+.5+l,d=t+.5+c;for(let u=0;u<(this.lowQuality?3:6);u++)this.debris.spawn(h,.28,d,s,.9);for(let u=0;u<3;u++)this.smoke.spawn({x:h+(Math.random()-.5)*.3,y:.25,z:d+(Math.random()-.5)*.3,vx:(Math.random()-.5)*.7,vy:.35+Math.random()*.4,vz:(Math.random()-.5)*.7,life:.9+Math.random()*.5,size0:.14,size1:.5,color:a,alpha:.32,gravity:.15,drag:1.4,additive:!1});for(let u=0;u<4;u++){const f=this.sparkSeed(h,.32,d,new se(16756842),2.2,.3,.04);f.vy+=.4,this.sparks.spawn(f)}}this.shake(.12)}steelHit(e,t,i){this.impact(e+.5,t+.5,i,11196671),this.shake(.03)}steelBreak(e,t,i,n){const s=new se(9410462);for(const a of i){const o=a===1||a===3?.25:-.25,l=a===2||a===3?.25:-.25,c=e+.5+o,h=t+.5+l;for(let d=0;d<7;d++)this.debris.spawn(c,.3,h,s,1.1);for(let d=0;d<7;d++){const u=this.sparkSeed(c,.35,h,new se(13626111),4,.35,.045);this.sparks.spawn(u)}}this.impact(e+.5,t+.5,n,13626111),this.shake(.08)}explosion(e,t,i=1,n=16747066,s=!1){const a=new se(n),o=new se(16773296),l=Math.round((this.lowQuality?14:26)*i);for(let u=0;u<l;u++){const f=Math.random()*Math.PI*2,p=Math.random()*.25;this.fire.spawn({x:e+Math.cos(f)*p,y:.25+Math.random()*.3,z:t+Math.sin(f)*p,vx:Math.cos(f)*(.6+Math.random()*2.8)*i,vy:.6+Math.random()*2.6*i,vz:Math.sin(f)*(.6+Math.random()*2.8)*i,life:.28+Math.random()*.34,size0:.28*i,size1:.72*i,color:Math.random()>.45?a:o,alpha:1,gravity:.5,drag:2.6,additive:!0})}const c=Math.round((this.lowQuality?7:14)*i);for(let u=0;u<c;u++){const f=Math.random()*Math.PI*2;this.smoke.spawn({x:e+(Math.random()-.5)*.4,y:.25+Math.random()*.4,z:t+(Math.random()-.5)*.4,vx:Math.cos(f)*(.3+Math.random()*1.1),vy:.4+Math.random()*.8,vz:Math.sin(f)*(.3+Math.random()*1.1),life:1.1+Math.random()*1.4,size0:.35*i,size1:1.15*i,color:new se(6117201),alpha:.42,gravity:.35,drag:1.1,additive:!1})}const h=Math.round((this.lowQuality?14:30)*i);for(let u=0;u<h;u++){const f=this.sparkSeed(e,.35,t,new se(16761978),6*i,.35+Math.random()*.45,.04+Math.random()*.04);this.sparks.spawn(f)}const d=Math.round((this.lowQuality?5:9)*i);for(let u=0;u<d;u++)this.debris.spawn(e,.28,t,new se(3815219),1.2*i);this.ring(e,t,1.4*i,n,.42),this.flashLight(e,.7,t,n,8*i,.28,8),s||this.shake(.26*i),this.scorch(e,t,.65*i)}ring(e,t,i,n,s){const a=this.rings.find(o=>o.life<=0)??this.rings[0];a.mesh.position.set(e,.22,t),a.mesh.visible=!0,a.material.color.setHex(n),a.life=s,a.maxLife=s,a.scale=i,a.mesh.scale.setScalar(.15)}splash(e,t){const i=new se(10475752);for(let n=0;n<14;n++){const s=Math.random()*Math.PI*2;this.fire.spawn({x:e+Math.cos(s)*.3,y:.08,z:t+Math.sin(s)*.3,vx:Math.cos(s)*(.2+Math.random()*.7),vy:1.5+Math.random()*2.2,vz:Math.sin(s)*(.2+Math.random()*.7),life:.45+Math.random()*.3,size0:.07,size1:.02,color:i,alpha:.9,gravity:-8,drag:.6,additive:!0})}this.ring(e,t,.7,8373980,.5)}spawnBeam(e,t,i=16761962){for(let n=0;n<18;n++){const s=Math.random()*Math.PI*2,a=.15+Math.random()*.25;this.fire.spawn({x:e+Math.cos(s)*a,y:.05+Math.random()*.3,z:t+Math.sin(s)*a,vx:Math.cos(s)*.2,vy:1.2+Math.random()*2.2,vz:Math.sin(s)*.2,life:.55+Math.random()*.5,size0:.06,size1:.01,color:new se(i),alpha:1,gravity:.2,drag:.4,additive:!0})}this.ring(e,t,.8,i,.6)}pickup(e,t,i){for(let n=0;n<26;n++){const s=n/26*Math.PI*2;this.fire.spawn({x:e,y:.6,z:t,vx:Math.cos(s)*(.6+Math.random()*1.2),vy:.8+Math.random()*1.8,vz:Math.sin(s)*(.6+Math.random()*1.2),life:.5+Math.random()*.5,size0:.1,size1:.01,color:new se(i),alpha:1,gravity:-1,drag:1.2,additive:!0})}this.ring(e,t,1.1,i,.55),this.flashLight(e,.7,t,i,4,.3,5)}trail(e,t,i){this.sparks.spawn({x:e,y:.36,z:t,vx:0,vy:.05,vz:0,life:.2,size0:.09,size1:.005,color:new se(i),alpha:.7,gravity:0,drag:0,additive:!0})}dust(e,t,i=1){for(let n=0;n<i;n++)this.smoke.spawn({x:e+(Math.random()-.5)*.2,y:.08,z:t+(Math.random()-.5)*.2,vx:(Math.random()-.5)*.3,vy:.15+Math.random()*.25,vz:(Math.random()-.5)*.3,life:.7+Math.random()*.6,size0:.1,size1:.42,color:new se(10194811),alpha:.16,gravity:.1,drag:1.2,additive:!1})}scorch(e,t,i){const n=this.decals[this.decalIndex];this.decalIndex=(this.decalIndex+1)%this.decals.length,n.position.set(e,.015+Math.random()*.002,t),n.rotation.z=Math.random()*Math.PI*2,n.scale.setScalar(i),n.visible=!0,n.material.opacity=.7}shake(e){this.shakeAmount=Math.min(1.2,this.shakeAmount+e)}flashLight(e,t,i,n,s,a,o){const l=this.lights.reduce((c,h)=>c.life<h.life?c:h);l.light.position.set(e,t,i),l.light.color.setHex(n),l.light.distance=o,l.light.intensity=s,l.power=s,l.life=a,l.max=a}getShakeOffset(e){if(this.shakeAmount<=.001)return{x:0,y:0,z:0,roll:0};const t=this.shakeAmount;return{x:Math.sin(e*87)*.09*t,y:Math.cos(e*73)*.06*t,z:Math.sin(e*61)*.07*t,roll:Math.sin(e*91)*.004*t}}update(e){this.sparks.update(e),this.smoke.update(e),this.fire.update(e),this.debris.update(e),this.shakeAmount=Math.max(0,this.shakeAmount-e*2.2),this.shakeTime+=e;for(const t of this.rings){if(t.life<=0){t.mesh.visible=!1;continue}t.life-=e;const i=1-Math.max(0,t.life)/t.maxLife;t.mesh.visible=!0,t.mesh.scale.setScalar(.15+(t.scale-.15)*f1(i)),t.material.opacity=(1-i)*.7}for(const t of this.lights){if(t.life<=0){t.light.intensity=0;continue}t.life-=e,t.light.intensity=Math.max(0,t.power*(t.life/t.max))}for(const t of this.decals){if(!t.visible)continue;const i=t.material;i.opacity=Math.max(0,i.opacity-e*.012),i.opacity<=0&&(t.visible=!1)}}dispose(){this.sparks.dispose(),this.smoke.dispose(),this.fire.dispose(),this.debris.dispose();for(const e of this.rings)e.mesh.removeFromParent(),e.material.dispose(),e.mesh.geometry.dispose();for(const e of this.decals)e.removeFromParent(),e.material.dispose(),e.geometry.dispose();for(const e of this.lights)e.light.removeFromParent()}}function f1(r){return 1-(1-r)*(1-r)}const Ur=new R;function Li(r,e,t,i,n,s){const a=2*Math.PI*n/4,o=Math.max(s-2*n,0),l=Math.PI/4;Ur.copy(e),Ur[i]=0,Ur.normalize();const c=.5*a/(a+o),h=1-Ur.angleTo(r)/l;return Math.sign(Ur[t])===1?h*c:o/(a+o)+c+c*(1-h)}class zt extends Ut{constructor(e=1,t=1,i=1,n=2,s=.1){const a=n*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:n,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new R,c=new R,h=new R(e,t,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new R,g=.5/a;for(let m=0,v=0;m<d.length;m+=3,v+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*s,d[m+1]=h.y*Math.sign(l.y)+c.y*s,d[m+2]=h.z*Math.sign(l.z)+c.z*s,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[v+0]=Li(x,c,"z","y",s,i),f[v+1]=1-Li(x,c,"y","z",s,t);break;case 1:x.set(-1,0,0),f[v+0]=1-Li(x,c,"z","y",s,i),f[v+1]=1-Li(x,c,"y","z",s,t);break;case 2:x.set(0,1,0),f[v+0]=1-Li(x,c,"x","z",s,e),f[v+1]=Li(x,c,"z","x",s,i);break;case 3:x.set(0,-1,0),f[v+0]=1-Li(x,c,"x","z",s,e),f[v+1]=1-Li(x,c,"z","x",s,i);break;case 4:x.set(0,0,1),f[v+0]=1-Li(x,c,"x","y",s,e),f[v+1]=1-Li(x,c,"y","x",s,t);break;case 5:x.set(0,0,-1),f[v+0]=Li(x,c,"x","y",s,e),f[v+1]=1-Li(x,c,"y","x",s,t);break}}static fromJSON(e){return new zt(e.width,e.height,e.depth,e.segments,e.radius)}}const cm=[0,-Math.PI/2,Math.PI,Math.PI/2];let To=null;function p1(){return To||(To={hull:new zt(.62,.2,.76,3,.045),hullFast:new zt(.56,.17,.84,3,.05),hullHeavy:new zt(.72,.25,.8,3,.04),glacis:new zt(.52,.14,.4,2,.04),glacisLong:new zt(.5,.1,.46,2,.03),track:new zt(.15,.24,.82,2,.045),wheel:new At(.08,.08,.03,12),turret:new At(.2,.23,.13,16),turretBig:new At(.23,.26,.16,16),turretTop:new zt(.32,.1,.34,2,.035),turretSlab:new zt(.38,.11,.4,2,.03),barrel:new At(.038,.046,.52,10),muzzle:new At(.058,.058,.1,10),hatch:new At(.075,.075,.045,14),antenna:new At(.006,.002,.42,4),light:new Ut(.1,.055,.02),stow:new zt(.28,.12,.15,2,.02),skirt:new zt(.06,.16,.66,2,.02),dozer:new zt(.68,.16,.12,2,.03),exhaust:new At(.028,.036,.22,8),beacon:new pi(.048,10,8),markerPlate:new At(.1,.1,.018,20),markerQuad:new Zt(.16,.16)},To)}const m1={basic:10134444,fast:14073221,power:13191215,armor:8231509};function g1(r,e,t){return e==="player"?t===0?lf.player1:lf.player2:m1[r]??7830656}function x1(r,e){const t=document.createElement("canvas");t.width=t.height=128;const i=t.getContext("2d");i.clearRect(0,0,128,128),i.font='bold 92px "Arial Black", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillStyle="rgba(0,0,0,0.5)",i.fillText(r,67,69),i.fillStyle=e,i.fillText(r,64,64);const n=new Gh(t);return n.colorSpace=Yt,n.anisotropy=8,n}class gf{group=new Lt;barrel=new Lt;shield;shieldMat;hullMat;turretMat;accentMat;trackMats=[];materials=[];beaconMat=null;trackOffset=0;kind;team;baseEmissive;wheelSpin=0;marker=null;bandGeo;baseScale=1.22;constructor(e,t,i,n){this.kind=e,this.team=t;const s=g1(e,t,i),a=p1();this.hullMat=new it({color:s,metalness:.3,roughness:.6,envMapIntensity:1.1,emissive:new se(16738890),emissiveIntensity:n?.5:0}),this.turretMat=this.hullMat.clone(),this.turretMat.color.multiplyScalar(.82),this.turretMat.roughness=.55,this.accentMat=new it({color:t==="player"?3353890:2435114,metalness:.8,roughness:.32,emissive:new se(t==="player"?16757575:4526088),emissiveIntensity:.25});const o=new it({color:3817801,roughness:.55,metalness:.6}),l=new it({color:6779518,roughness:.38,metalness:.8});this.materials.push(l);const c=new it({color:4541266,map:o1().clone(),roughness:.86,metalness:.3});c.map.needsUpdate=!0,this.trackMats.push(c,c.clone()),this.trackMats[1].map=c.map.clone(),this.trackMats[1].map.needsUpdate=!0;const h=e==="armor",d=e==="fast",u=e==="power";this.baseScale=h?1.3:d?1.12:u?1.24:1.22;const f=new ae(h?a.hullHeavy:d?a.hullFast:a.hull,this.hullMat);f.position.y=d?.19:h?.22:.21,this.group.add(f);const p=new ae(d?a.glacisLong:a.glacis,this.hullMat);p.position.set(0,d?.3:.33,-.14),p.rotation.x=d?-.3:-.18,this.group.add(p);const x=h?.355:d?.295:.325,g=h?5:d?3:4;for(const b of[-1,1]){const E=new ae(a.track,this.trackMats[b<0?0:1]);E.position.set(b*x,d?.125:.14,.01),E.scale.set(h?1.15:d?.88:1,h?1.06:d?.92:1,d?1.08:1),this.group.add(E);for(let I=0;I<g;I++){const B=new ae(a.wheel,o);B.rotation.z=Math.PI/2;const z=g>4?.58:g>3?.51:.4,U=-z/2+I/(g-1)*z;B.position.set(b*(x+.078),d?.085:.09,U),this.group.add(B)}}if(h){for(const E of[-1,1]){const I=new ae(a.skirt,this.hullMat);I.position.set(E*.365,.3,.02),this.group.add(I)}const b=new ae(a.dozer,o);b.position.set(0,.19,-.44),b.rotation.x=.32,this.group.add(b)}const m=new ae(a.wheel,o);m.rotation.z=0,m.scale.set(h?3.4:u?3.1:2.9,.7,h?3.4:u?3.1:2.9),m.position.y=.38,this.group.add(m);const v=new ae(u?a.turretBig:a.turret,this.turretMat);v.position.y=u?.44:.43,v.scale.set(h?1.12:1,h?.92:1,h?1.12:1),this.group.add(v);const S=new ae(h?a.turretSlab:a.turretTop,this.turretMat);S.position.y=h?.51:d?.48:.5,S.scale.set(d?.84:1,d?.8:1,d?.9:1),this.group.add(S),this.bandGeo=new yn(u?.252:.232,.011,6,28);const _=new ae(this.bandGeo,o);_.rotation.x=Math.PI/2,_.position.y=.375,this.group.add(_);const T=new ae(a.hatch,this.turretMat);T.scale.setScalar(h?.85:d?.8:1),T.position.set(h?-.08:.06,h?.575:d?.525:.545,h?.06:.04),this.group.add(T);const A=new ae(a.muzzle,this.accentMat);if(A.rotation.x=Math.PI/2,A.position.set(0,u?.45:.44,-.22),A.scale.set(u?1.8:1.5,.45,1),this.group.add(A),this.barrel.position.set(0,u?.45:.44,-.2),u)for(const b of[-1,1]){const E=new ae(a.barrel,l);E.rotation.x=Math.PI/2,E.scale.set(.86,.86,.95),E.position.set(b*.085,0,-.28),this.barrel.add(E);const I=new ae(a.muzzle,l);I.rotation.x=Math.PI/2,I.scale.set(.9,.75,1),I.position.set(b*.085,0,-.49),this.barrel.add(I)}else{const b=new ae(a.barrel,l);b.rotation.x=Math.PI/2,d?(b.scale.set(.8,.8,1.32),b.position.z=-.34):h?(b.scale.set(1.22,1.22,.92),b.position.z=-.24):b.position.z=-.26,this.barrel.add(b);const E=new ae(a.muzzle,l);E.rotation.x=Math.PI/2,E.scale.setScalar(h?1.35:d?.85:1),E.position.z=d?-.61:h?-.45:-.52,this.barrel.add(E)}if(this.group.add(this.barrel),d)for(const b of[-1,1]){const E=new ae(a.exhaust,o);E.position.set(b*.15,.34,.4),E.rotation.x=-.28,this.group.add(E)}if(h)for(const b of[-1,1]){const E=new ae(a.antenna,o);E.position.set(b*.26,.63,.26),E.rotation.z=b*.3,E.rotation.x=.18,this.group.add(E)}else{const b=new ae(a.antenna,o);b.position.set(u?.24:-.27,u?.66:.62,.24),b.rotation.z=u?-.3:.34,b.rotation.x=.22,this.group.add(b)}if(this.beaconMat=null,u){const b=new it({color:9379860,emissive:16726554,emissiveIntensity:.35,roughness:.4}),E=new ae(a.beacon,b);E.position.set(.14,.585,.1),this.group.add(E),this.beaconMat=b,this.materials.push(b)}const C=new it({color:16773824,emissive:16765562,emissiveIntensity:d?.55:.4,roughness:.3});this.materials.push(C);for(const b of[-1,1]){const E=new ae(a.light,C);E.scale.setScalar(d?.64:h?.9:.78),E.position.set(b*(h?.26:.22),h?.35:.33,d?-.42:-.38),this.group.add(E)}const y=new ae(a.stow,o);if(y.scale.setScalar(h?1.1:d?.8:1),y.position.set(0,h?.42:.39,h?.34:.31),this.group.add(y),this.materials.push(o),t==="player"){const b=i===0?"1":"2",E=new qt({map:x1(b,i===0?"#ffe4a8":"#c4fff4"),transparent:!0,depthWrite:!1});this.materials.push(E),this.marker=new ae(a.markerQuad,E),this.marker.rotation.x=-Math.PI/2,this.marker.position.set(0,.581,.05);const I=new ae(a.markerPlate,o);I.position.set(0,.57,.05),this.group.add(I),this.group.add(this.marker)}this.shieldMat=new wt({uniforms:{uColor:{value:new se(t==="player"?8378879:16751206)},uPulse:{value:0}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uPulse;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float fres = pow(1.0 - abs(dot(vNormal, vView)), 2.2);
          float a = fres * (0.42 + uPulse * 0.22);
          gl_FragColor = vec4(uColor * (0.5 + fres * 1.3), a);
        }
      `,transparent:!0,depthWrite:!1,blending:$t,side:Xt}),this.shield=new ae(new pi(.55,24,16),this.shieldMat),this.shield.position.y=.32,this.shield.visible=!1,this.group.add(this.shield),this.group.traverse(b=>{b instanceof ae&&(b.castShadow=!0,b.receiveShadow=!0)}),this.baseEmissive=n?.7:0}update(e,t,i){this.group.position.set(e.x,0,e.z),this.group.rotation.y=cm[e.dir]??0,this.barrel.position.z=-.2+e.recoil*.08,this.barrel.rotation.x=-e.recoil*.06,this.trackOffset+=e.moving*i*1.9;for(const s of this.trackMats)s.map&&(s.map.offset.y=this.trackOffset%1);if(e.spawn>0){const s=Math.floor(e.spawn*16)%2===0;this.group.visible=s,this.group.scale.setScalar((.92+Math.sin(t*30)*.03)*this.baseScale)}else this.group.visible=!0,this.group.scale.setScalar(this.baseScale);const n=e.hitFlash>0?3.5:0;this.hullMat.emissiveIntensity=Math.max(this.baseEmissive,n),e.bonus?this.hullMat.emissiveIntensity=.22+Math.abs(Math.sin(t*6+e.x))*.55:this.team==="enemy"&&this.hullMat.emissive.setHex(16723226),this.turretMat.emissiveIntensity=this.hullMat.emissiveIntensity,this.turretMat.emissive.copy(this.hullMat.emissive),this.beaconMat&&(this.beaconMat.emissiveIntensity=.3+Math.abs(Math.sin(t*4.4))*.45),e.shield>0?(this.shield.visible=!0,this.shieldMat.uniforms.uPulse.value=Math.sin(t*9)*.5+.5,this.shield.scale.setScalar(1+Math.sin(t*9)*.035),this.shield.rotation.y+=i*.8):this.shield.visible=!1,this.marker&&(this.marker.visible=e.shield<=0||Math.sin(t*9)>.2)}dispose(){this.group.removeFromParent(),this.hullMat.dispose(),this.turretMat.dispose(),this.accentMat.dispose();for(const e of this.trackMats)e.map?.dispose(),e.dispose();for(const e of this.materials)e.map?.dispose(),e.dispose();this.shieldMat.dispose(),this.shield.geometry.dispose(),this.bandGeo.dispose()}}class v1{group=new Lt;glow;coreMat;trailMat;trail;speedHint=0;constructor(e,t){const i=e==="player"?t>1?16773280:16761694:16738882;this.coreMat=new qt({color:i});const n=new ae(new Sa(.038,.11,4,8),this.coreMat);n.rotation.x=Math.PI/2,this.group.add(n);const s=new Hl({map:ga(),color:i,transparent:!0,blending:$t,depthWrite:!1});this.glow=new Vh(s),this.glow.scale.set(.42,.42,1),this.group.add(this.glow),this.trailMat=new qt({color:i,transparent:!0,opacity:.28,blending:$t,depthWrite:!1}),this.trail=new ae(new Zt(.09,.5),this.trailMat),this.trail.rotation.x=-Math.PI/2,this.trail.position.set(0,-.03,.28),this.group.add(this.trail),this.speedHint=t}update(e,t){this.group.position.set(e.x,.36,e.z),this.group.rotation.y=cm[e.dir]??0;const i=.9+Math.sin(t*40+e.id)*.15;this.glow.scale.setScalar(.4*i),this.trail.scale.z=1+(this.speedHint>1?.8:0)}dispose(){this.group.removeFromParent(),this.coreMat.dispose(),this.trailMat.dispose(),this.trail.geometry.dispose(),this.glow.material.dispose(),this.glow.geometry.dispose()}}const kr={star:16763213,helmet:7333119,clock:13081599,shovel:16752973,grenade:16734797,tank:8257434};class y1{group=new Lt;kind;icon;ring;beam;materials=[];baseY=0;constructor(e,t,i){this.kind=e,this.group.position.set(t,0,i);const n=kr[e],s=new it({color:n,emissive:new se(n),emissiveIntensity:2.2,metalness:.55,roughness:.25});this.materials.push(s),this.icon=new Lt,this.icon.position.y=.62,this.icon.add(this.buildIcon(e,s)),this.group.add(this.icon);const a=new qt({color:n,transparent:!0,opacity:.65,blending:$t,side:Xt,depthWrite:!1});this.materials.push(a),this.ring=new ae(new yn(.36,.018,8,40),a),this.ring.rotation.x=Math.PI/2,this.ring.position.y=.12,this.group.add(this.ring);const o=new qt({map:h1(),color:n,transparent:!0,opacity:.55,blending:$t,depthWrite:!1,side:Xt});this.materials.push(o),this.beam=new ae(new Zt(.7,1.5),o),this.beam.position.y=.75,this.group.add(this.beam);const l=new Gn(n,1.2,3,2);l.position.y=.7,this.group.add(l),this.baseY=0}buildIcon(e,t){switch(e){case"star":{const i=new Ms,n=5;for(let a=0;a<n*2;a++){const o=a%2===0?.21:.09,l=a/(n*2)*Math.PI*2-Math.PI/2,c=Math.cos(l)*o,h=Math.sin(l)*o;a===0?i.moveTo(c,h):i.lineTo(c,h)}i.closePath();const s=new fr(i,{depth:.06,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:2});return s.center(),new ae(s,t)}case"helmet":{const i=new Lt,n=new ae(new pi(.17,20,12,0,Math.PI*2,0,Math.PI/2),t);i.add(n);const s=new ae(new yn(.18,.035,8,24),t);return s.rotation.x=Math.PI/2,i.add(s),i}case"clock":{const i=new Lt,n=new ae(new At(.19,.19,.07,24),t);n.rotation.x=Math.PI/2,i.add(n);const s=new ae(new Ut(.03,.13,.02),t);s.position.y=.03,i.add(s);const a=new ae(new Ut(.1,.025,.02),t);return a.position.x=.03,i.add(a),i}case"shovel":{const i=new Lt,n=new ae(new At(.022,.022,.34,8),t);n.position.y=.08,i.add(n);const s=new ae(new Ut(.18,.16,.04),t);return s.position.y=-.16,i.add(s),i}case"grenade":{const i=new Lt,n=new ae(new pi(.16,16,12),t);i.add(n);const s=new ae(new At(.05,.06,.1,8),t);s.position.y=.19,i.add(s);const a=new ae(new yn(.06,.012,6,12),t);return a.position.set(.09,.2,0),a.rotation.y=Math.PI/2,i.add(a),i}case"tank":{const i=new Lt,n=new ae(new zt(.3,.12,.34,2,.02),t);i.add(n);const s=new ae(new At(.1,.11,.08,10),t);s.position.y=.1,i.add(s);const a=new ae(new At(.025,.025,.24,6),t);return a.rotation.x=Math.PI/2,a.position.set(0,.1,-.17),i.add(a),i}}}update(e,t){this.icon.rotation.y=e*1.6,this.icon.position.y=.62+Math.sin(e*2.6)*.06,this.ring.rotation.z=e*1.2,this.ring.scale.setScalar(1+Math.sin(e*3)*.07),this.beam.rotation.y=e*.7,this.beam.material.opacity=.35+Math.sin(e*4)*.12,this.group.visible=t>3.2||Math.floor(e*8)%2===0}dispose(){this.group.removeFromParent();for(const e of this.materials)e.dispose();this.icon.traverse(e=>{e instanceof ae&&e.geometry.dispose()})}}class _1{group=new Lt;eagle;wreck;light;ring;glow;destroyed=!1;constructor(){this.group.position.set(7,0,12);const e=new it({color:3815475,roughness:.85,metalness:.12}),t=new it({color:12819013,metalness:.6,roughness:.42,emissive:new se(3023107),emissiveIntensity:.1}),i=t.clone();i.color.multiplyScalar(.74),i.roughness=.5;const n=t.clone();n.color.multiplyScalar(.88),n.roughness=.46,new it({color:2762529,metalness:.5,roughness:.55});const s=new ae(new zt(1.62,.18,1.62,2,.05),e);s.position.y=.09,s.receiveShadow=!0,this.group.add(s);const a=new ae(new At(.52,.68,.38,8),e);a.position.y=.37,a.castShadow=!0,this.group.add(a);const o=new it({color:2365968,metalness:.45,roughness:.7,emissive:new se(722435),emissiveIntensity:.25}),l=new ae(new At(.58,.6,.07,40),o);l.position.y=.585,l.receiveShadow=!0,this.group.add(l),this.eagle=new Lt,this.eagle.position.y=.635,this.eagle.scale.setScalar(.86);const c=[[.05,.24],[.3,.23],[.55,.21],[.78,.17],[.94,.1],[.97,.03],[.9,-.01],[.8,-.03],[.76,.05],[.66,.01],[.62,.09],[.52,.04],[.48,.12],[.36,.07],[.3,.15],[.18,.11],[.1,.17],[.05,.15]],h=new Ms;h.moveTo(c[0][0],c[0][1]);for(let C=1;C<c.length;C++)h.lineTo(c[C][0],c[C][1]);h.closePath();const d=new fr(h,{depth:.045,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2,curveSegments:1});d.rotateX(-Math.PI/2);const u=d.clone();u.scale(.62,1,.6),u.translate(.02,.026,.06);for(const C of[-1,1]){const y=new ae(d,n);y.scale.x=C,this.eagle.add(y);const b=new ae(u,i);b.scale.x=C,this.eagle.add(b)}const f=new ae(new pi(.16,18,14),t);f.scale.set(.52,.32,1.5),f.position.set(0,.035,0),this.eagle.add(f);const p=new ae(new pi(.13,14,10),n);p.scale.set(.9,.4,.8),p.position.set(0,.05,-.06),this.eagle.add(p);const x=new ae(new pi(.082,14,10),t);x.scale.set(.9,.8,1.05),x.position.set(0,.06,-.3),this.eagle.add(x);const g=new ae(new _s(.038,.14,8),i);g.rotation.x=-Math.PI/2,g.position.set(0,.05,-.4),this.eagle.add(g);const m=new it({color:1445637,metalness:.4,roughness:.3});for(const C of[-1,1]){const y=new ae(new pi(.014,8,6),m);y.position.set(C*.042,.085,-.33),this.eagle.add(y)}for(let C=-2;C<=2;C++){const y=new ae(new Ut(.075,.022,.3-Math.abs(C)*.04),C%2===0?i:t);y.position.set(C*.062,.012,.29+Math.abs(C)*.015),y.rotation.y=C*.17,this.eagle.add(y)}const v=new ae(new yn(.575,.018,8,48),i);v.rotation.x=Math.PI/2,v.position.y=.02,this.eagle.add(v),this.eagle.traverse(C=>{C instanceof ae&&(C.castShadow=!0,C.receiveShadow=!0)}),this.group.add(this.eagle);const S=new qt({color:10254908,transparent:!0,opacity:.4,blending:$t,depthWrite:!1,side:Xt});this.ring=new ae(new pr(.66,.69,48),S),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.19,this.group.add(this.ring),S.opacity=.1;const _=new qt({color:16757854,transparent:!0,opacity:.03,blending:$t,depthWrite:!1,side:Xt});this.glow=new ae(new ba(.78,40),_),this.glow.rotation.x=-Math.PI/2,this.glow.position.y=.2,this.group.add(this.glow),this.light=new Gn(16760946,.3,3.2,2),this.light.position.set(0,1.4,.15),this.group.add(this.light),this.wreck=new Lt;const T=new it({color:1973015,metalness:.5,roughness:.7});for(let C=0;C<7;C++){const y=new ae(new Ut(.2+Math.random()*.35,.16+Math.random()*.2,.2+Math.random()*.3),T);y.position.set((Math.random()-.5)*.8,.12+Math.random()*.12,(Math.random()-.5)*.8),y.rotation.set(Math.random(),Math.random(),Math.random()),this.wreck.add(y)}const A=new Gn(16731418,.8,2.5,2);A.position.y=.3,this.wreck.add(A),this.wreck.visible=!1,this.group.add(this.wreck)}setDestroyed(){this.destroyed=!0,this.eagle.visible=!1,this.ring.visible=!1,this.glow.visible=!1,this.light.intensity=0,this.wreck.visible=!0}reset(){this.destroyed=!1,this.eagle.visible=!0,this.ring.visible=!0,this.glow.visible=!0,this.wreck.visible=!1,this.light.intensity=.3}update(e){if(this.destroyed)return;this.ring.rotation.z=e*.25;const t=.06+Math.sin(e*1.8)*.025;this.ring.material.opacity=t,this.light.intensity=.27+Math.sin(e*2.4)*.05,this.eagle.rotation.y=Math.PI+Math.sin(e*.35)*.1,this.eagle.position.y=.635+Math.sin(e*1.1)*.012}}const M1=[{x:-.25,z:-.25},{x:.25,z:-.25},{x:-.25,z:.25},{x:.25,z:.25}];class S1{group=new Lt;base;waterMat=null;waterNormal=null;brickMesh=null;steelMesh=null;brickSlots=new Map;steelSlots=new Map;dummy=new tt;disposables=[];groundMat=null;time=0;constructor(){this.group.name="stage",this.base=new _1,this.group.add(this.base.group)}build(e,t,i){this.clear(),this.time=0,this.group.add(this.base.group),this.brickSlots.clear(),this.steelSlots.clear();const n=new it({map:Qb(),normalMap:$b(),normalScale:new j(.55,.55),roughnessMap:e1(),color:16777215,roughness:1,metalness:.04,envMapIntensity:.5}),s=new ae(new Zt(Ye,Ye),n);s.rotation.x=-Math.PI/2,s.position.set(Ye/2,0,Ye/2),s.receiveShadow=!0,s.name="ground",this.group.add(s),this.groundMat=n,this.track(n,s.geometry);const a=new it({map:n1(),color:8225674,roughness:.9,metalness:.1}),o=new ae(new Zt(46,46),a);o.rotation.x=-Math.PI/2,o.position.set(Ye/2,-.035,Ye/2),o.receiveShadow=!0,this.group.add(o),this.track(a,o.geometry),this.buildBorder(),this.buildTerrainCells(e,t),this.buildBrickAndSteel(e),this.buildSetDressing(),this.base.group.visible=!0,i?this.base.reset():this.base.setDestroyed(),this.group.add(this.base.group)}buildBorder(){const e=new it({map:$c(),color:7765382,roughness:.7,metalness:.3}),t=new it({color:1454655,emissive:new se(8176870),emissiveIntensity:.55,roughness:.34,metalness:.2});this.track(e,t);const i=.34,n=.42,s=Ye+i*2,a=[[Ye/2,n/2,-i/2,s,n,i],[Ye/2,n/2,Ye+i/2,s,n,i],[-i/2,n/2,Ye/2,i,n,s],[Ye+i/2,n/2,Ye/2,i,n,s]];for(const[x,g,m,v,S,_]of a){const T=new ae(new Ut(v,S,_),e);T.position.set(x,g,m),T.castShadow=!0,T.receiveShadow=!0,this.group.add(T),this.track(T.geometry)}const o=.86,l=Math.floor((Ye-.9)/o)+1,c=new Ut(.46,.022,.075),h=new Ai(c,t,l*4),d=new tt,u=Ye/2-(l-1)*o/2;let f=0;for(let x=0;x<l;x++){const g=u+x*o;for(const m of[0,1])d.position.set(g,n+.012,m===0?-i/2:Ye+i/2),d.rotation.set(0,0,0),d.updateMatrix(),h.setMatrixAt(f++,d.matrix),d.position.set(m===0?-i/2:Ye+i/2,n+.012,g),d.rotation.set(0,Math.PI/2,0),d.updateMatrix(),h.setMatrixAt(f++,d.matrix)}h.instanceMatrix.needsUpdate=!0,this.group.add(h),this.track(c);const p=new it({color:3290684,metalness:.7,roughness:.4});this.track(p);for(const[x,g]of[[-.4,-.4],[Ye+.4,-.4],[-.4,Ye+.4],[Ye+.4,Ye+.4]]){const m=new ae(new At(.14,.18,.9,8),p);m.position.set(x,.45,g),m.castShadow=!0,this.group.add(m),this.track(m.geometry);const v=new ae(new pi(.065,10,8),t);v.position.set(x,.94,g),this.group.add(v),this.track(v.geometry)}}buildSetDressing(){const e=L=>Nn(L,7,13),t=new zt(.42,.15,.26,2,.05),i=new it({color:9075286,roughness:.96,metalness:.02,map:$c()});this.track(t,i);const n=150,s=new Ai(t,i,n);s.castShadow=!0,s.receiveShadow=!0;const a=new tt,o=new se;let l=0;const c=[],h=1.15;for(let L=0;L<8;L++){const k=-.6+(L+.5)/8*(Ye+1.2);c.push({x:-h,z:k,nx:-1,nz:0,rot:Math.PI/2}),c.push({x:Ye+h,z:k,nx:1,nz:0,rot:Math.PI/2}),c.push({x:k,z:-h,nx:0,nz:-1,rot:0}),c.push({x:k,z:Ye+h,nx:0,nz:1,rot:0})}for(const[L,V]of c.entries())for(let K=0;K<3&&!(l>=n);K++){const X=(e(L*9+K)-.5)*.3,Q=K*.26+(e(L*11+K)-.5)*.07;a.position.set(V.x+V.nx*Q+(V.nx!==0?0:X),.08+K*.135,V.z+V.nz*Q+(V.nz!==0?0:X)),a.rotation.set(0,V.rot+(e(L*13+K)-.5)*.18,0),a.scale.set(1+(e(L*17+K)-.5)*.12,1,1),a.updateMatrix(),s.setMatrixAt(l,a.matrix);const $=.72+e(L*19+K)*.4;o.setRGB($,$*.95,$*.8),s.setColorAt(l,o),l++}for(let L=l;L<n;L++)this.hideInstance(s,L);s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),this.group.add(s);const d=new zt(.52,.52,.52,2,.03),u=new it({color:6968116,roughness:.88,metalness:.03,map:$c()});this.track(d,u);const f=18,p=new Ai(d,u,f);p.castShadow=!0,p.receiveShadow=!0;for(let L=0;L<f;L++){const V=L%4,k=e(L*3+2),K=1.9+e(L*3+3)*2.6,X=-.4+k*(Ye+.8),Q=V===0?-K:V===1?Ye+K:X,$=V===2?-K:V===3?Ye+K:X,Re=L%5===0?1:0;a.position.set(Q,.26+Re*.53,$),a.rotation.set(0,e(L*7)*Math.PI*.5,0),a.scale.setScalar(.85+e(L*11)*.4),a.updateMatrix(),p.setMatrixAt(L,a.matrix);const we=.7+e(L*13)*.45;o.setRGB(we,we*.92,we*.78),p.setColorAt(L,o)}p.instanceMatrix.needsUpdate=!0,p.instanceColor&&(p.instanceColor.needsUpdate=!0),this.group.add(p);const x=new At(.17,.17,.46,12),g=new it({color:5067096,metalness:.65,roughness:.45,map:mf()});this.track(x,g);const m=12,v=new Ai(x,g,m);v.castShadow=!0,v.receiveShadow=!0;for(let L=0;L<m;L++){const V=L%4,k=e(L*5+31),K=1.5+e(L*5+32)*2.2,X=-.2+k*(Ye+.4),Q=V===0?-K:V===1?Ye+K:X,$=V===2?-K:V===3?Ye+K:X;a.position.set(Q,.23,$),a.rotation.set(0,e(L*9)*6.28,0),a.scale.setScalar(.9+e(L*17)*.3),a.updateMatrix(),v.setMatrixAt(L,a.matrix);const Re=e(L*21);o.setRGB(Re>.6?.55:.3,Re>.6?.28:.32,Re>.6?.16:.3),v.setColorAt(L,o)}v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),this.group.add(v);const S=new it({color:2830132,metalness:.7,roughness:.5}),_=new it({color:16773327,emissive:new se(16767392),emissiveIntensity:2.6,roughness:.3});this.track(S,_);const T=new At(.055,.085,2.6,8),A=new Ut(.44,.07,.07),C=new Ut(.26,.1,.16);this.track(A,C);for(const[L,V,k]of[[-2.6,-2.6,1],[Ye+2.6,-2.6,-1],[-2.6,Ye+2.6,1],[Ye+2.6,Ye+2.6,-1]]){const K=new ae(T,S);K.position.set(L,1.3,V),K.castShadow=!0,this.group.add(K);const X=new ae(A,S);X.position.set(L+k*.2,2.5,V),this.group.add(X);const Q=new ae(C,_);if(Q.position.set(L+k*.38,2.46,V),this.group.add(Q),L===-2.6){const $=new Gn(16766624,7.5,11,2);$.position.set(L+k*.4,2.4,V),this.group.add($)}}const y=new Zt(150,150),b=new it({color:724498,roughness:.98,metalness:0});this.track(y,b);const E=new ae(y,b);E.rotation.x=-Math.PI/2,E.position.set(Ye/2,-.09,Ye/2),E.receiveShadow=!0,this.group.add(E);const I=new Ut(1,1,1),B=new it({color:1054496,roughness:.95,metalness:.05});this.track(I,B);const z=44,U=new Ai(I,B,z);for(let L=0;L<z;L++){const V=L/z*Math.PI*2+e(L*3)*.12,k=26+e(L*3+1)*18,K=2.2+e(L*3+2)*7;a.position.set(Ye/2+Math.cos(V)*k,K/2-.7,Ye/2+Math.sin(V)*k),a.rotation.set(0,e(L*5)*3.14,0),a.scale.set(1.6+e(L*7)*2.8,K,1.6+e(L*11)*2.8),a.updateMatrix(),U.setMatrixAt(L,a.matrix)}U.instanceMatrix.needsUpdate=!0,this.group.add(U)}buildTerrainCells(e,t){const i=new _l({map:s1(),color:16777215,roughness:.06,metalness:.06,clearcoat:1,clearcoatRoughness:.04,transparent:!0,opacity:.96,envMapIntensity:1.4,side:Xt});this.track(i);const n=new Zt(.985,.985),s=a1().clone();s.needsUpdate=!0,this.waterNormal=s;const a=new _l({color:799810,roughness:.04,metalness:.12,clearcoat:1,clearcoatRoughness:.02,normalMap:s,normalScale:new j(.55,.55),transparent:!0,opacity:.9,envMapIntensity:1.7,side:Xt});this.waterMat=a,this.track(a);const o=new Zt(.985,.985),l=new it({color:267291,roughness:.8,metalness:.1});this.track(l);const c=new Zt(.98,.98),h=new it({map:r1(),color:10464911,roughness:.95,metalness:0});this.track(h);const d=new Zt(.995,.995),u=[];for(let f=0;f<Ct;f++)for(let p=0;p<Ct;p++){const x=e.get(p,f);if(!x)continue;const g=p+.5,m=f+.5;if(x.kind==="ice"){const v=new ae(n,i);v.rotation.x=-Math.PI/2,v.position.set(g,.012,m),v.receiveShadow=!0,this.group.add(v)}else if(x.kind==="water"){const v=new ae(c,l);v.rotation.x=-Math.PI/2,v.position.set(g,.004,m),this.group.add(v);const S=new ae(o,a);S.rotation.x=-Math.PI/2,S.position.set(g,.055,m),S.receiveShadow=!0,this.group.add(S)}else if(x.kind==="forest"){const v=new ae(d,h);v.rotation.x=-Math.PI/2,v.position.set(g,.008,m),v.receiveShadow=!0,this.group.add(v);const S=2+Math.floor(Nn(p,f,t)*3);for(let _=0;_<S;_++)u.push({x:g+(Nn(p*3+_,f,t+1)-.5)*.72,z:m+(Nn(p,f*3+_,t+2)-.5)*.72,seed:Nn(p+_,f,t+3),kind:Nn(p,f+_,t+4)})}}this.track(n,o,c,d),u.length&&this.buildTrees(u)}buildTrees(e){const t=new At(.035,.055,.3,6),i=new _s(.26,.5,7),n=new it({color:3811868,roughness:.9}),s=new it({color:4880954,roughness:.72,metalness:.05,flatShading:!0});this.track(n,s);const a=new Ai(t,n,e.length),o=new Ai(i,s,e.length*2);a.castShadow=!0,a.receiveShadow=!0,o.castShadow=!0,o.receiveShadow=!0;const l=new tt,c=new se;e.forEach((h,d)=>{const u=.75+h.seed*.7;l.position.set(h.x,.15*u,h.z),l.rotation.set(0,h.seed*6.28,0),l.scale.setScalar(u),l.updateMatrix(),a.setMatrixAt(d,l.matrix),l.position.set(h.x,(.4+.2)*u,h.z),l.rotation.y=h.seed*3,l.scale.set(u,u*(.9+h.kind*.5),u),l.updateMatrix(),o.setMatrixAt(d*2,l.matrix),l.position.set(h.x,(.66+.15)*u,h.z),l.rotation.y=h.kind*4,l.scale.set(u*.72,u*.8,u*.72),l.updateMatrix(),o.setMatrixAt(d*2+1,l.matrix);const f=.75+h.kind*.5;c.setRGB(.24*f,.46*f,.2*f),o.setColorAt(d*2,c),o.setColorAt(d*2+1,c)}),a.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),this.group.add(a,o),this.track(t,i)}buildBrickAndSteel(e){const t=new zt(.47,.52,.47,2,.035),i=new it({map:jb(),normalMap:t1(),normalScale:new j(.7,.7),roughness:.9,metalness:.04,envMapIntensity:.5});this.track(i,t);const n=Ct*Ct*4,s=new Ai(t,i,n);s.castShadow=!0,s.receiveShadow=!0,s.instanceMatrix.setUsage(gl);const a=new zt(.475,.48,.475,3,.045),o=new it({map:mf(),normalMap:i1(),normalScale:new j(.85,.85),color:12174026,metalness:.72,roughness:.34,envMapIntensity:1.9});this.track(o,a);const l=new Ai(a,o,n);l.castShadow=!0,l.receiveShadow=!0,l.instanceMatrix.setUsage(gl);const c=new se;let h=0,d=0;for(let u=0;u<Ct;u++)for(let f=0;f<Ct;f++){const p=e.get(f,u);if(p){if(p.kind==="brick"){const x=[];for(let g=0;g<4;g++){const m=h++;if(x.push(m),p.mask&1<<g){const v=(f*31+u*17+g*7)%2*Math.PI;this.setQuadMatrix(s,m,f,u,g,.31,v);const S=.74+Nn(f*7+g,u*3,5)*.34;c.setRGB(S,S*(.93+Nn(f,u+g,2)*.06),S*.88),s.setColorAt(m,c)}else this.hideInstance(s,m)}this.brickSlots.set(u*Ct+f,x)}else if(p.kind==="steel"){const x=[];for(let g=0;g<4;g++){const m=d++;x.push(m),p.mask&1<<g?this.setQuadMatrix(l,m,f,u,g,.28):this.hideInstance(l,m)}this.steelSlots.set(u*Ct+f,x)}}}for(let u=h;u<n;u++)this.hideInstance(s,u);for(let u=d;u<n;u++)this.hideInstance(l,u);s.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),this.brickMesh=s,this.steelMesh=l,this.group.add(s,l)}setQuadMatrix(e,t,i,n,s,a,o=0){const l=M1[s];this.dummy.position.set(i+.5+l.x,a,n+.5+l.z),this.dummy.rotation.set(0,o,0),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),e.setMatrixAt(t,this.dummy.matrix)}hideInstance(e,t){this.dummy.position.set(0,-50,0),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(1e-4),this.dummy.updateMatrix(),e.setMatrixAt(t,this.dummy.matrix)}damageBrick(e,t,i,n){const s=this.brickSlots.get(t*Ct+e);if(!(!s||!this.brickMesh)){for(const a of n){const o=s[a];o!==void 0&&this.hideInstance(this.brickMesh,o)}i===0&&this.brickSlots.delete(t*Ct+e),this.brickMesh.instanceMatrix.needsUpdate=!0}}damageSteel(e,t,i,n){const s=this.steelSlots.get(t*Ct+e);if(!(!s||!this.steelMesh)){for(const a of n){const o=s[a];o!==void 0&&this.hideInstance(this.steelMesh,o)}i===0&&this.steelSlots.delete(t*Ct+e),this.steelMesh.instanceMatrix.needsUpdate=!0}}setWetness(e){if(!this.groundMat)return;const t=Fh.clamp(e,0,1);this.groundMat.roughness=1-t*.58,this.groundMat.envMapIntensity=.5+t*2.2,this.groundMat.color.setHSL(.09,.06,.42-t*.12)}refresh(e,t,i){this.build(e,t,i)}update(e,t){this.time+=e,this.waterNormal&&(this.waterNormal.offset.x=t*.04,this.waterNormal.offset.y=t*.027),this.base.update(t)}track(...e){this.disposables.push(...e)}clear(){this.group.clear();for(const e of this.disposables)e.dispose();this.disposables=[],this.brickMesh=null,this.steelMesh=null,this.waterMat=null,this.waterNormal=null,this.brickSlots.clear(),this.steelSlots.clear()}dispose(){this.clear(),this.base.group.removeFromParent()}}function Nn(r,e,t){let i=r*374761393+e*668265263+t*2147483647;return i=(i^i>>>13)*1274126177,i=i^i>>>16,(i>>>0)/4294967296}function xf(r){const e=["embers","rain","snow","clear"];return e[(Math.max(1,r)-1)%e.length]}const Gt=Ye+10,Ks=11,Js=Ye/2;class b1{group=new Lt;kind="clear";time=0;rain;snow;embers;rainUniforms;snowUniforms;emberUniforms;nextStrike=3;pendingFlash=0;materials=[];geometries=[];textures=[];constructor(e=!1){this.group.name="weather";const t=e?.55:1,i=Math.round(1400*t),n=new Float32Array(i*2*3),s=new Float32Array(i*2*3),a=new Float32Array(i*2),o=new Float32Array(i*2);for(let E=0;E<i;E++){const I=(Math.random()-.5)*Gt,B=Math.random()*Ks,z=(Math.random()-.5)*Gt,U=14+Math.random()*8;for(let L=0;L<2;L++){const V=E*2+L;s[V*3]=I,s[V*3+1]=B,s[V*3+2]=z,a[V]=U,o[V]=L,n[V*3]=I,n[V*3+1]=B,n[V*3+2]=z}}const l=new Ve;l.setAttribute("position",new Ze(n,3)),l.setAttribute("aBase",new Ze(s,3)),l.setAttribute("aSpeed",new Ze(a,1)),l.setAttribute("aTip",new Ze(o,1)),this.rainUniforms={uTime:{value:0},uHeight:{value:Ks},uWind:{value:2.6},uLength:{value:.55},uOpacity:{value:.5}};const c=new wt({uniforms:this.rainUniforms,transparent:!0,depthWrite:!1,blending:$t,vertexShader:`
        uniform float uTime;
        uniform float uHeight;
        uniform float uWind;
        uniform float uLength;
        attribute vec3 aBase;
        attribute float aSpeed;
        attribute float aTip;
        varying float vFade;
        void main() {
          float y = mod(aBase.y - uTime * aSpeed, uHeight) - aTip * uLength;
          if (y < 0.0) y += uHeight;
          vec3 p = vec3(aBase.x + uTime * uWind * 0.35, y, aBase.z);
          p.x = mod(p.x + ${(Gt/2).toFixed(1)}, ${Gt.toFixed(1)}) - ${(Gt/2).toFixed(1)};
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vFade = smoothstep(0.0, 2.0, y) * (1.0 - smoothstep(uHeight - 3.0, uHeight, y));
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform float uOpacity;
        varying float vFade;
        void main() {
          gl_FragColor = vec4(0.62, 0.76, 0.92, uOpacity * vFade);
        }
      `});this.rain=new Zi(l,c),this.rain.position.set(Js,0,Js),this.rain.frustumCulled=!1,this.rain.visible=!1,this.group.add(this.rain),this.materials.push(c),this.geometries.push(l);const h=Math.round(900*t),d=new Float32Array(h*3),u=new Float32Array(h),f=new Float32Array(h),p=new Float32Array(h),x=new Float32Array(h*3);for(let E=0;E<h;E++)d[E*3]=(Math.random()-.5)*Gt,d[E*3+1]=Math.random()*Ks,d[E*3+2]=(Math.random()-.5)*Gt,u[E]=.7+Math.random()*1.2,f[E]=Math.random()*Math.PI*2,p[E]=.05+Math.random()*.075,x[E*3]=d[E*3],x[E*3+1]=d[E*3+1],x[E*3+2]=d[E*3+2];const g=new Ve;g.setAttribute("position",new Ze(x,3)),g.setAttribute("aBase",new Ze(d,3)),g.setAttribute("aSpeed",new Ze(u,1)),g.setAttribute("aPhase",new Ze(f,1)),g.setAttribute("aSize",new Ze(p,1)),this.snowUniforms={uTime:{value:0},uHeight:{value:Ks},uPixel:{value:1}};const m=this.pointMaterial(this.snowUniforms,{color:"vec3(0.86, 0.93, 1.0)",alpha:.85,additive:!1,body:`
        float y = mod(aBase.y - uTime * aSpeed, uHeight);
        float phase = aPhase + uTime * 0.55;
        vec3 p = vec3(aBase.x + sin(phase) * 0.7, y, aBase.z + cos(phase * 0.8) * 0.55);
        p.x = mod(p.x + ${(Gt/2).toFixed(1)}, ${Gt.toFixed(1)}) - ${(Gt/2).toFixed(1)};
        p.z = mod(p.z + ${(Gt/2).toFixed(1)}, ${Gt.toFixed(1)}) - ${(Gt/2).toFixed(1)};
        vFade = smoothstep(0.0, 1.5, y) * (1.0 - smoothstep(uHeight - 2.5, uHeight, y));
      `});this.snow=new xs(g,m),this.snow.position.set(Js,0,Js),this.snow.frustumCulled=!1,this.snow.visible=!1,this.group.add(this.snow),this.materials.push(m),this.geometries.push(g);const v=Math.round(340*t),S=new Float32Array(v*3),_=new Float32Array(v),T=new Float32Array(v),A=new Float32Array(v),C=new Float32Array(v*3);for(let E=0;E<v;E++)S[E*3]=(Math.random()-.5)*Gt,S[E*3+1]=Math.random()*Ks,S[E*3+2]=(Math.random()-.5)*Gt,_[E]=.5+Math.random()*1.1,T[E]=Math.random()*Math.PI*2,A[E]=.03+Math.random()*.06,C[E*3]=S[E*3],C[E*3+1]=S[E*3+1],C[E*3+2]=S[E*3+2];const y=new Ve;y.setAttribute("position",new Ze(C,3)),y.setAttribute("aBase",new Ze(S,3)),y.setAttribute("aSpeed",new Ze(_,1)),y.setAttribute("aPhase",new Ze(T,1)),y.setAttribute("aSize",new Ze(A,1)),this.emberUniforms={uTime:{value:0},uHeight:{value:Ks},uPixel:{value:1}};const b=this.pointMaterial(this.emberUniforms,{color:"vec3(1.0, 0.52, 0.16)",alpha:.9,additive:!0,body:`
        float y = mod(aBase.y + uTime * aSpeed, uHeight);
        float phase = aPhase + uTime * 1.4;
        vec3 p = vec3(aBase.x + sin(phase) * 0.5, y, aBase.z + cos(phase * 0.7) * 0.4);
        p.x = mod(p.x + ${(Gt/2).toFixed(1)}, ${Gt.toFixed(1)}) - ${(Gt/2).toFixed(1)};
        float twinkle = 0.55 + 0.45 * sin(phase * 3.0);
        vFade = smoothstep(0.0, 1.2, y) * (1.0 - smoothstep(uHeight - 4.0, uHeight, y)) * twinkle;
      `});this.embers=new xs(y,b),this.embers.position.set(Js,0,Js),this.embers.frustumCulled=!1,this.embers.visible=!1,this.group.add(this.embers),this.materials.push(b),this.geometries.push(y)}pointMaterial(e,t){return new wt({uniforms:e,transparent:!0,depthWrite:!1,blending:t.additive?$t:Bn,vertexShader:`
        uniform float uTime;
        uniform float uHeight;
        uniform float uPixel;
        attribute vec3 aBase;
        attribute float aSpeed;
        attribute float aPhase;
        attribute float aSize;
        varying float vFade;
        void main() {
          ${t.body}
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = clamp(aSize * uPixel / max(0.001, -mv.z), 0.0, 64.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying float vFade;
        void main() {
          vec2 d = gl_PointCoord - vec2(0.5);
          float r = length(d);
          if (r > 0.5) discard;
          float soft = smoothstep(0.5, 0.05, r);
          gl_FragColor = vec4(${t.color}, soft * vFade * ${t.alpha.toFixed(2)});
        }
      `})}setPixelScale(e){this.snowUniforms.uPixel.value=e,this.emberUniforms.uPixel.value=e}set(e){this.kind=e,this.rain.visible=e==="rain",this.snow.visible=e==="snow",this.embers.visible=e==="embers",this.nextStrike=2+Math.random()*4}get current(){return this.kind}update(e){this.time+=e,this.rainUniforms.uTime.value=this.time,this.snowUniforms.uTime.value=this.time,this.emberUniforms.uTime.value=this.time,this.kind==="rain"?(this.nextStrike-=e,this.nextStrike<=0&&(this.nextStrike=4+Math.random()*6,this.pendingFlash=1)):this.pendingFlash=0;const t=this.pendingFlash;return this.pendingFlash=Math.max(0,this.pendingFlash-e*6),t}dispose(){for(const e of this.materials)e.dispose();for(const e of this.geometries)e.dispose();for(const e of this.textures)e.dispose();this.group.removeFromParent()}}const w1={embers:{fog:1182728,density:.019,exposure:1.15,hemi:.8,key:4.2,keyColor:16769720,rim:1.55,ambient:.5},rain:{fog:528150,density:.034,exposure:1.08,hemi:.7,key:2.7,keyColor:13820660,rim:1.75,ambient:.45},snow:{fog:1055010,density:.03,exposure:1.18,hemi:1.05,key:3.1,keyColor:15003386,rim:1.15,ambient:.72},clear:{fog:593686,density:.016,exposure:1.14,hemi:.9,key:4.1,keyColor:16772045,rim:1.35,ambient:.5}},T1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uFlash:{value:0},uFlashColor:{value:new se(16752720)},uResolution:{value:new j(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uFlash;
    uniform vec3 uFlashColor;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float d = length(centered);
      vec2 offset = centered * d * 0.0014;
      vec3 color;
      color.r = texture2D(tDiffuse, uv + offset).r;
      color.g = texture2D(tDiffuse, uv).g;
      color.b = texture2D(tDiffuse, uv - offset).b;

      float vig = smoothstep(0.98, 0.2, d);
      color *= mix(0.74, 1.0, vig);

      float grain = hash21(uv * uResolution + uTime * 47.0);
      color += (grain - 0.5) * 0.022;

      // Gentle S-curve for punch, then split-tone: cool shadows, warm highlights.
      color = mix(color, color * color * (3.0 - 2.0 * color), 0.22);
      float lum = dot(color, vec3(0.2126, 0.7152, 0.0722));
      vec3 shadowTint = vec3(0.86, 0.95, 1.08);
      vec3 highTint = vec3(1.07, 1.0, 0.93);
      color *= mix(shadowTint, highTint, smoothstep(0.04, 0.62, lum));

      color = pow(max(color, 0.0), vec3(0.985, 1.0, 1.02));
      color += uFlashColor * uFlash;

      gl_FragColor = vec4(color, 1.0);
      #include <colorspace_fragment>
    }
  `},A1={uniforms:{uTime:{value:0}},vertexShader:`
    varying vec3 vDir;
    void main() {
      vDir = normalize(position);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec3 vDir;
    uniform float uTime;
    void main() {
      float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);
      vec3 low = vec3(0.085, 0.105, 0.125);
      vec3 mid = vec3(0.028, 0.05, 0.075);
      vec3 top = vec3(0.007, 0.011, 0.022);
      vec3 col = mix(low, mid, smoothstep(0.0, 0.32, h));
      col = mix(col, top, smoothstep(0.35, 0.95, h));
      float glow = pow(max(0.0, 1.0 - abs(h - 0.48) * 3.6), 5.0);
      col += vec3(0.09, 0.055, 0.038) * glow;
      float band = sin(h * 90.0 + uTime * 0.02) * 0.0025;
      gl_FragColor = vec4(col + band, 1.0);
      #include <colorspace_fragment>
    }
  `};class E1{renderer;scene=new kl;camera;stage;effects;weather;composer;canvas;time=0;titleMode=!0;tankVisuals=new Map;bulletVisuals=new Map;bulletTrails=new Map;powerupVisual=null;powerupKey="";demoVisuals=[];gradePass;bloomPass;sky;stars;dust;lowQuality;keyLight=null;lights=null;lightning=0;baseKeyIntensity=4.1;cameraDir=new R(0,.62,.785).normalize();cameraTarget=new R(Ye/2,0,6.8);cameraDistance=16.4;inspectTarget=null;constructor(e){this.canvas=e,this.lowQuality=window.innerWidth<820||(navigator.hardwareConcurrency??8)<=4,this.renderer=new rm({canvas:e,antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.lowQuality?1.35:1.75)),this.renderer.outputColorSpace=Yt,this.renderer.toneMapping=wl,this.renderer.toneMappingExposure=1.14,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=yh,this.scene.background=new se(329482),this.scene.fog=new _a(659736,.021),this.camera=new Wt(36,1,.1,220),this.stage=new S1,this.scene.add(this.stage.group),this.effects=new d1(this.lowQuality),this.scene.add(this.effects.group),this.weather=new b1(this.lowQuality),this.scene.add(this.weather.group),this.sky=this.createSky(),this.scene.add(this.sky),this.stars=this.createStars(),this.scene.add(this.stars),this.dust=this.createDust(),this.scene.add(this.dust),this.setupEnvironment(),this.setupLights(),this.composer=new qb(this.renderer),this.composer.addPass(new Yb(this.scene,this.camera)),this.bloomPass=new hr(new j(1,1),this.lowQuality?.26:.34,.62,.78),this.composer.addPass(this.bloomPass),this.gradePass=new om(T1),this.composer.addPass(this.gradePass);const t=new Kb;this.composer.addPass(t),this.resize()}setupEnvironment(){const e=new Ml(this.renderer),t=new Jb;this.scene.environment=e.fromScene(t,.04).texture,this.scene.environmentIntensity=.6,e.dispose()}setupLights(){const e=new ru(10338536,1710358,.85);this.scene.add(e);const t=new $r(16770756,4.2);t.position.set(13.5,13,4.2),t.target.position.set(6.5,0,6.8),t.castShadow=!0,t.shadow.mapSize.set(this.lowQuality?1024:2048,this.lowQuality?1024:2048),t.shadow.camera.left=-9,t.shadow.camera.right=9,t.shadow.camera.top=9,t.shadow.camera.bottom=-9,t.shadow.camera.near=1,t.shadow.camera.far=45,t.shadow.camera.updateProjectionMatrix(),t.shadow.bias=-6e-4,t.shadow.normalBias=.028,this.keyLight=t,this.scene.add(t,t.target);const i=new $r(8833279,1.45);i.position.set(-10,7.5,-8),i.target.position.set(6.5,0,6.5),this.scene.add(i,i.target);const n=new $r(9680084,.42);n.position.set(-5,5,15),this.scene.add(n);const s=new au(2832970,.55);this.scene.add(s),this.lights={hemi:e,key:t,rim:i,ambient:s}}createSky(){const e=new pi(120,32,20),t=new wt({...A1,side:Jt,depthWrite:!1,fog:!1}),i=new ae(e,t);return i.position.set(Ye/2,0,Ye/2),i.renderOrder=-10,i}createStars(){const t=new Float32Array(1260);for(let s=0;s<420;s++){const a=Math.random()*Math.PI*2,o=Math.acos(Math.random()*.9+.05),l=95;t[s*3]=Ye/2+Math.sin(o)*Math.cos(a)*l,t[s*3+1]=Math.cos(o)*l+4,t[s*3+2]=Ye/2+Math.sin(o)*Math.sin(a)*l}const i=new Ve;i.setAttribute("position",new Ze(t,3));const n=new ca({color:12047615,size:.28,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1,fog:!1,map:ga(),blending:$t});return new xs(i,n)}createDust(){const e=this.lowQuality?90:180,t=new Float32Array(e*3),i=new Float32Array(e);for(let o=0;o<e;o++)t[o*3]=Math.random()*24-5,t[o*3+1]=.2+Math.random()*5,t[o*3+2]=Math.random()*24-5,i[o]=.02+Math.random()*.05;const n=new Ve;n.setAttribute("position",new Ze(t,3));const s=new ca({color:13623538,size:.05,sizeAttenuation:!0,transparent:!0,opacity:.26,depthWrite:!1,blending:$t,map:ga()}),a=new xs(n,s);return a.frustumCulled=!1,a.userData.speeds=i,a}frameCamera(){const e=this.canvas.clientWidth/Math.max(1,this.canvas.clientHeight);this.cameraDistance=17.6*Fh.clamp(1.5/e,1,1.66);const t=this.cameraTarget.clone().addScaledVector(this.cameraDir,this.cameraDistance);this.camera.position.copy(t),this.camera.lookAt(this.cameraTarget)}inspect(e,t,i=4.2){this.inspectTarget={x:e,z:t,distance:i}}clearInspect(){this.inspectTarget=null}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.gradePass.uniforms.uResolution.value.set(e,t);const i=t/(2*Math.tan(this.camera.fov*Math.PI/360));this.effects.setPixelScale(i*this.renderer.getPixelRatio()*.55),this.weather.setPixelScale(i*this.renderer.getPixelRatio()),this.frameCamera()}showTitle(e){this.titleMode=!0,this.stage.build(e.terrain,1,!0),this.applyAtmosphere(xf(1)),this.clearVisuals(),this.createDemoTanks()}startGame(){this.titleMode=!1,this.clearDemo()}createDemoTanks(){this.clearDemo();const e=[{x:us[0].x,z:us[0].z,idx:0,dir:0},{x:us[1].x,z:us[1].z,idx:1,dir:0},{x:6.5,z:3.5,idx:-1,dir:2}];for(const t of e){const i=t.idx>=0,n=new gf(i?"player":"armor",i?"player":"enemy",t.idx,!i),s={id:`demo-${t.idx}`,team:i?"player":"enemy",kind:i?"player":"armor",x:t.x,z:t.z,dir:t.dir,velX:0,velZ:0,speed:0,hp:1,maxHp:1,cooldown:0,star:0,shield:0,spawn:0,hitFlash:0,bonus:!i,aiTimer:0,aiStrafe:0,stuckTime:0,playerIndex:t.idx,alive:!0,moving:0,recoil:0,iceX:0,iceZ:0};n.update(s,this.time,0),n.group.userData.tank=s,n.group.position.y=0,this.scene.add(n.group),this.demoVisuals.push(n)}}clearDemo(){for(const e of this.demoVisuals)e.dispose();this.demoVisuals=[]}buildStage(e){this.stage.build(e.terrain,e.stage,e.baseAlive),this.clearVisuals(),this.applyAtmosphere(xf(e.stage)),this.flash(.08,16761466)}applyAtmosphere(e){const t=w1[e],i=this.scene.fog;i.color.setHex(t.fog),i.density=t.density,this.renderer.toneMappingExposure=t.exposure,this.lights&&(this.lights.hemi.intensity=t.hemi,this.lights.key.intensity=t.key,this.lights.key.color.setHex(t.keyColor),this.lights.rim.intensity=t.rim,this.lights.ambient.intensity=t.ambient),this.baseKeyIntensity=t.key,this.weather.set(e),this.stage.setWetness(e==="rain"?1:e==="snow"?.35:e==="embers"?.12:0),this.scene.background=new se(t.fog)}flash(e,t=16752720){this.gradePass.uniforms.uFlashColor.value.setHex(t),this.gradePass.uniforms.uFlash.value=Math.max(this.gradePass.uniforms.uFlash.value,e)}handleEvent(e,t){switch(e.type){case"stageStart":this.buildStage(t);break;case"spawn":this.effects.spawnBeam(e.x,e.z,e.team==="player"?8381632:16742994),this.effects.dust(e.x,e.z,3);break;case"respawn":this.effects.spawnBeam(e.x,e.z,8381632);break;case"shoot":this.effects.muzzle(e.x,e.z,e.dir,e.team,e.power);break;case"bulletSpark":this.effects.impact(e.x,e.z,e.dir,16765578);break;case"brickBreak":this.stage.damageBrick(e.x,e.z,e.mask,e.removed),this.effects.brickBreak(e.x,e.z,e.removed,e.dir);break;case"steelBreak":this.stage.damageSteel(e.x,e.z,e.mask,e.removed),this.effects.steelBreak(e.x,e.z,e.removed,e.dir);break;case"steelHit":this.effects.steelHit(e.x,e.z,e.dir);break;case"tankHit":this.effects.impact(e.x+0,e.z,0,16769184),this.effects.dust(e.x,e.z,1),this.effects.shake(.04);break;case"tankDestroyed":{const i=e.team==="player"?1.5:1;this.effects.explosion(e.x,e.z,i,e.team==="player"?16756816:16742966),this.effects.ring(e.x,e.z,1.8*i,16761466,.5),e.team==="player"&&this.flash(.16,16742966);break}case"powerupSpawn":this.effects.spawnBeam(e.x,e.z,kr[e.kind]),this.effects.pickup(e.x,e.z,kr[e.kind]);break;case"powerupPickup":this.effects.pickup(e.x,e.z,kr[e.kind]),this.flash(.05,kr[e.kind]);break;case"powerupExpire":this.effects.dust(e.x,e.z,4);break;case"grenade":this.flash(.45,16765066),this.effects.shake(.5);break;case"shovel":this.stage.refresh(t.terrain,t.stage,t.baseAlive),this.flash(.06,12577023);break;case"baseHit":this.effects.explosion(e.x,e.z,2.6,16738858),this.flash(.5,16742965);break;case"baseDestroyed":this.stage.base.setDestroyed(),this.effects.shake(1),this.effects.ring(7,12,3.4,16747072,.9);break;case"state":(e.state==="playing"||e.state==="intro")&&this.startGame();break}}sync(e,t){this.time+=t,this.stage.update(t,this.time),this.effects.update(t);const i=this.weather.update(t);i>0&&(this.lightning=Math.max(this.lightning,i*.55),this.flash(.16*i,12376319)),this.lightning>0&&(this.lightning=Math.max(0,this.lightning-t*3.4)),this.lights&&(this.lights.key.intensity=this.baseKeyIntensity+this.lightning*6);const n=this.gradePass.uniforms.uFlash.value;if(this.gradePass.uniforms.uFlash.value=Math.max(0,n-t*1.6),this.gradePass.uniforms.uTime.value=this.time,this.sky.material.uniforms.uTime.value=this.time,this.titleMode){for(const s of this.demoVisuals){const a=s.group.userData.tank;a&&(s.update(a,this.time,t),s.group.position.y=Math.sin(this.time*.8+a.x)*.008)}this.animateAtmosphere(t),this.updateCamera(t);return}this.syncTanks(e,t),this.syncBullets(e,t),this.syncPowerup(e),this.animateAtmosphere(t),this.updateCamera(t)}syncTanks(e,t){const i=new Set;for(const n of e.tanks){if(!n.alive)continue;i.add(n.id);let s=this.tankVisuals.get(n.id);s||(s=new gf(n.kind,n.team,n.playerIndex,n.bonus),this.tankVisuals.set(n.id,s),this.scene.add(s.group),n.team==="enemy"&&this.effects.spawnBeam(n.x,n.z,16742994)),s.update(n,this.time,t)}for(const[n,s]of this.tankVisuals)i.has(n)||(s.dispose(),this.tankVisuals.delete(n))}syncBullets(e,t){const i=new Set;for(const n of e.bullets){i.add(n.id);let s=this.bulletVisuals.get(n.id);s||(s=new v1(n.team,n.power),this.bulletVisuals.set(n.id,s),this.scene.add(s.group),this.bulletTrails.set(n.id,0)),s.update(n,this.time);const a=(this.bulletTrails.get(n.id)??0)+t;if(a>.028){const o=n.team==="player"?16761694:16738882;this.effects.trail(n.x,n.z,o),this.bulletTrails.set(n.id,0)}else this.bulletTrails.set(n.id,a)}for(const[n,s]of this.bulletVisuals)i.has(n)||(s.dispose(),this.bulletVisuals.delete(n),this.bulletTrails.delete(n))}syncPowerup(e){if(!e.powerup){this.powerupVisual?.dispose(),this.powerupVisual=null,this.powerupKey="";return}const t=e.powerup,i=`${t.kind}:${t.x.toFixed(2)}:${t.z.toFixed(2)}`;i!==this.powerupKey&&(this.powerupVisual?.dispose(),this.powerupVisual=new y1(t.kind,t.x,t.z),this.powerupKey=i,this.scene.add(this.powerupVisual.group)),this.powerupVisual?.update(this.time,t.life)}animateAtmosphere(e){this.stars.rotation.y+=e*.0035,this.dust.rotation.y+=e*.006;const i=this.dust.geometry.getAttribute("position"),n=this.dust.userData.speeds,s=i.array;for(let a=0;a<n.length;a++)s[a*3+1]+=n[a]*e,s[a*3+1]>5.4&&(s[a*3+1]=.15);i.needsUpdate=!0}updateCamera(e){if(this.inspectTarget){const o=new R(this.inspectTarget.x,.34,this.inspectTarget.z),l=o.clone().addScaledVector(this.cameraDir,this.inspectTarget.distance).add(new R(0,.25,0));this.camera.position.copy(l),this.camera.lookAt(o);return}const t=this.titleMode?Math.sin(this.time*.12)*.16:Math.sin(this.time*.05)*.012,i=this.cameraDir.clone().applyAxisAngle(new R(0,1,0),t),n=this.cameraTarget.clone();this.titleMode&&(n.y=.3);const s=n.clone().addScaledVector(i,this.cameraDistance+(this.titleMode?.8:0)),a=this.effects.getShakeOffset(this.time);this.camera.position.set(s.x+a.x,s.y+a.y,s.z+a.z),this.camera.lookAt(n),this.camera.rotateZ(a.roll+(this.titleMode?Math.sin(this.time*.09)*.002:0))}clearVisuals(){for(const e of this.tankVisuals.values())e.dispose();this.tankVisuals.clear();for(const e of this.bulletVisuals.values())e.dispose();this.bulletVisuals.clear(),this.bulletTrails.clear(),this.powerupVisual?.dispose(),this.powerupVisual=null,this.powerupKey=""}render(){this.composer.render()}dispose(){this.clearDemo(),this.clearVisuals(),this.stage.dispose(),this.effects.dispose(),this.weather.dispose(),this.composer.dispose(),this.renderer.dispose()}}const C1={star:"FIREPOWER UP",helmet:"SHIELD ONLINE",clock:"ENEMIES FROZEN",shovel:"FORTIFICATION ONLINE",grenade:"BOMB DEPLOYED",tank:"EXTRA TANK"},R1=[{key:"basic",label:"BASIC",points:100},{key:"fast",label:"FAST",points:200},{key:"power",label:"POWER",points:300},{key:"armor",label:"ARMOR",points:400}];class P1{constructor(e,t){this.game=e,this.callbacks=t;const i=n=>document.getElementById(n);this.root=i("hud"),this.titleScreen=i("titleScreen"),this.pauseScreen=i("pauseScreen"),this.clearScreen=i("clearScreen"),this.overScreen=i("overScreen"),this.stageBanner=i("stageBanner"),this.toastEl=i("toast"),this.boot=i("boot"),this.rotateHint=i("rotateHint"),this.stageNum=i("stageNum"),this.enemyTrack=i("enemyTrack"),this.scoreNum=i("scoreNum"),this.hiNum=i("hiNum"),this.p1Card=i("p1Card"),this.p2Card=i("p2Card"),this.p1Lives=i("p1Lives"),this.p2Lives=i("p2Lives"),this.p1Stars=i("p1Stars"),this.p2Stars=i("p2Stars"),this.statusStrip=i("statusStrip"),this.clearTally=i("clearTally"),this.clearScore=i("clearScore"),this.finalScore=i("finalScore"),this.finalBest=i("finalBest"),this.bannerNum=i("bannerNum"),this.bannerSub=i("bannerSub"),this.flashEl=document.createElement("div"),this.flashEl.id="hudFlash",document.getElementById("app").appendChild(this.flashEl),this.buildEnemyTrack(),this.bindMenu(),window.addEventListener("resize",()=>this.updateRotateHint()),this.updateRotateHint()}game;callbacks;root;titleScreen;pauseScreen;clearScreen;overScreen;stageBanner;toastEl;boot;rotateHint;stageNum;enemyTrack;scoreNum;hiNum;p1Card;p2Card;p1Lives;p2Lives;p1Stars;p2Stars;statusStrip;clearTally;clearScore;finalScore;finalBest;bannerNum;bannerSub;flashEl;lastState=null;lastEnemies=-1;lastScore=-1;lastHi=-1;lastLives=[-1,-1];lastStars=[-1,-1];lastStatus="";bannerTimer=0;toastTimer=0;overTimer=0;muted=!1;bindMenu(){const e=document.getElementById("titleMenu");for(const t of Array.from(e.querySelectorAll(".menu-item")))t.addEventListener("click",i=>{i.stopPropagation();const n=Number(t.dataset.mode)===2?2:1;this.callbacks.onStart(n)});this.titleScreen.addEventListener("click",t=>{t.target.closest(".menu-item")||this.callbacks.onStart(1)})}buildEnemyTrack(){this.enemyTrack.innerHTML="";for(let e=0;e<20;e++){const t=document.createElement("i");this.enemyTrack.appendChild(t)}}updateRotateHint(){const e=window.innerHeight>window.innerWidth&&window.innerWidth<900;this.rotateHint.classList.toggle("hidden",!e)}ready(){this.boot.classList.add("done"),window.setTimeout(()=>this.boot.classList.add("hidden"),700)}setMuted(e){this.muted=e,this.showToast(e?"SOUND MUTED":"SOUND ONLINE",e?"#ffb26b":"#7fe0c0")}get isMuted(){return this.muted}onStageStart(e){this.hideOverlays(),this.titleScreen.classList.add("hidden"),this.root.classList.remove("hidden"),this.bannerNum.textContent=String(e.stage).padStart(2,"0"),this.bannerSub.textContent=e.stage>xh?"WAR WITHOUT END":D1(e.stage),this.stageBanner.classList.remove("hidden"),this.stageBanner.classList.remove("animate"),this.stageBanner.offsetWidth,this.stageBanner.classList.add("animate"),window.clearTimeout(this.bannerTimer),this.bannerTimer=window.setTimeout(()=>this.stageBanner.classList.add("hidden"),2100),this.showToast(e.mode===2?"TWO-PLAYER DEPLOYMENT":"SINGLE-PLAYER DEPLOYMENT","#ffc46a")}hideOverlays(){this.pauseScreen.classList.add("hidden"),this.clearScreen.classList.add("hidden"),this.overScreen.classList.add("hidden"),window.clearTimeout(this.overTimer)}syncState(e){if(e.state!==this.lastState)switch(this.lastState=e.state,e.state){case"title":this.titleScreen.classList.remove("hidden"),this.root.classList.add("hidden"),this.hideOverlays(),this.clearTally.innerHTML="";break;case"intro":this.hideOverlays(),this.titleScreen.classList.add("hidden"),this.root.classList.remove("hidden");break;case"playing":this.hideOverlays(),this.root.classList.remove("hidden");break;case"paused":this.pauseScreen.classList.remove("hidden");break;case"clear":this.showClear(e);break;case"over":window.clearTimeout(this.overTimer),this.overTimer=window.setTimeout(()=>this.showOver(e),1e3);break}}showClear(e){this.clearScreen.classList.remove("hidden");const t=R1.map(({key:i,label:n,points:s})=>{const a=e.tally[i]??0;return`<div class="tally-row"><span>${n}</span><i>×${a}</i><b>${String(a*s).padStart(4,"0")}</b></div>`}).join("");this.clearTally.innerHTML=t,this.clearScore.textContent=String(e.stageScore).padStart(6,"0")}showOver(e){this.overScreen.classList.remove("hidden");const t=e.totalScore,i=Math.max(this.callbacks.getHi(),t),n=t>0&&t>=i;this.finalScore.textContent=String(t).padStart(6,"0"),this.finalBest.textContent=n?"NEW HIGH SCORE":`BEST ${String(i).padStart(6,"0")}`,this.finalBest.classList.toggle("highlight",n)}flash(e,t=.4){this.flashEl.style.background=`radial-gradient(circle at 50% 55%, ${e}, transparent 72%)`,this.flashEl.animate([{opacity:t},{opacity:0}],{duration:420,easing:"ease-out"})}showToast(e,t="#ffc46a"){this.toastEl.textContent=e,this.toastEl.style.setProperty("--toast-accent",t),this.toastEl.classList.remove("hidden"),this.toastEl.classList.remove("show"),this.toastEl.offsetWidth,this.toastEl.classList.add("show"),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.add("hidden"),2e3)}powerupToast(e){this.showToast(C1[e]??"POWER UP","#ffc46a")}update(e){if(this.syncState(e),e.state==="title")return;const t=String(e.stage).padStart(2,"0");this.stageNum.textContent!==t&&(this.stageNum.textContent=t);const i=e.enemiesRemaining;if(i!==this.lastEnemies){this.lastEnemies=i;const c=this.enemyTrack.children;for(let h=0;h<c.length;h++)c[h].classList.toggle("dead",h>=i)}const n=e.totalScore;n!==this.lastScore&&(this.lastScore=n,this.scoreNum.textContent=String(n).padStart(6,"0"));const s=Math.max(this.callbacks.getHi(),n);s!==this.lastHi&&(this.lastHi=s,this.hiNum.textContent=String(s).padStart(6,"0"));for(let c=0;c<2;c++){if(e.lives[c]!==this.lastLives[c]){this.lastLives[c]=e.lives[c];const h=c===0?this.p1Lives:this.p2Lives;h.innerHTML=I1(e.lives[c])}if(e.playerStar[c]!==this.lastStars[c]){this.lastStars[c]=e.playerStar[c];const h=c===0?this.p1Stars:this.p2Stars;h.innerHTML=L1(e.playerStar[c])}}this.p2Card.classList.toggle("hidden",e.mode!==2),this.p1Card.classList.toggle("offline",e.mode===2&&e.out[0]),this.p2Card.classList.toggle("offline",e.mode===2&&e.out[1]);const a=e.activePowerups,o=[];a.shield>0&&o.push(`<span class="chip shield">SHIELD <b>${Math.ceil(a.shield)}</b></span>`),a.freeze>0&&o.push(`<span class="chip freeze">FREEZE <b>${Math.ceil(a.freeze)}</b></span>`),a.shovel>0&&o.push(`<span class="chip shovel">FORT <b>${Math.ceil(a.shovel)}</b></span>`);const l=o.join("");l!==this.lastStatus&&(this.lastStatus=l,this.statusStrip.innerHTML=l)}}function I1(r){const e=Math.max(0,Math.min(5,r));return`<span class="count">${r}</span>${'<i class="life-tank"></i>'.repeat(e)}`}function L1(r){let e="";for(let t=0;t<3;t++)e+=`<i class="pip${t<r?" on":""}"></i>`;return e}function D1(r){const e=["DEFEND THE EAGLE","TWIN KEEPS","RESERVOIR","BLACK ICE","THE GAUNTLET","OVERGROWTH","RIVER CROSSING","CITADEL","COLD FRONT","IRONWORKS"];return e[(r-1)%e.length]}const N1=document.getElementById("scene"),ot=new Ob(Date.now()>>>0),ys=new E1(N1),ut=new kb,xa=new Vb,hm="battle-city-reforged-hi";let fs=0;try{fs=Number(window.localStorage.getItem(hm)??"0")||0}catch{fs=0}const tn=new P1(ot,{getHi:()=>fs,onStart:r=>{ls(r)}});function Io(){if(ot.totalScore>fs){fs=ot.totalScore;try{window.localStorage.setItem(hm,String(fs))}catch{}}}async function ls(r){await ut.resume(),ys.startGame(),ut.setMusic("stage"),ut.sfx("start"),ot.start(r),xa.clearAxes()}xa.onAction=r=>{switch(r){case"start":ot.state==="title"?ls(1):ot.state==="over"&&ls(ot.mode);break;case"one":ot.state==="title"&&ls(1);break;case"two":ot.state==="title"&&ls(2);break;case"pause":if(ot.state==="playing"||ot.state==="paused"){const e=ot.togglePause();ut.sfx("pause"),e?(ut.setMusic("none"),ut.setEngine(0)):ut.setMusic("stage")}break;case"mute":{ut.isMuted||ut.resume();const e=ut.toggleMute();tn.setMuted(e);break}case"retry":ot.state==="over"&&(Io(),ls(ot.mode));break}};let vf=performance.now(),Br=0,yf=!1;async function um(){yf||(yf=!0,await ut.resume(),ot.state==="title"&&ut.setMusic("title"))}window.addEventListener("pointerdown",()=>{um()});window.addEventListener("keydown",()=>{um()});function vh(r){switch(ys.handleEvent(r,ot),r.type){case"stageStart":tn.onStageStart(ot),ut.sfx("start");break;case"shoot":ut.sfx(r.team==="player"?"shoot":"enemyShoot");break;case"brickBreak":ut.sfx("brick");break;case"steelHit":case"steelBreak":ut.sfx("steel");break;case"tankHit":ut.sfx("hit");break;case"tankDestroyed":ut.sfx(r.team==="player"?"bigExplode":"explode");break;case"playerOut":ut.sfx("out"),tn.showToast("PLAYER DOWN","#ff7a52");break;case"powerupSpawn":ut.sfx("powerup");break;case"powerupPickup":ut.sfx("pickup"),tn.powerupToast(r.kind);break;case"shield":ut.sfx("shield");break;case"freeze":ut.sfx("freeze");break;case"shovel":r.active&&ut.sfx("shovel");break;case"grenade":ut.sfx("grenade"),tn.flash("#ffb15a",.5);break;case"extraLife":ut.sfx("life"),tn.showToast("EXTRA TANK","#7dff9a");break;case"baseHit":ut.sfx("base"),tn.flash("#ff7a35",.6);break;case"baseDestroyed":break;case"stageClear":ut.sfx("clear"),Io();break;case"gameOver":ut.sfx("gameover"),ut.setMusic("none"),Io();break;case"score":ot.totalScore>fs&&Io();break}}function dm(r){const e=Math.min(.1,Math.max(0,(r-vf)/1e3));vf=r;const t=xa.getPlayers(ot.mode);if(ot.state==="playing"){Br+=e;let n=0;for(;Br>=1/60&&n<5;)ot.update(1/60,t),Br-=1/60,n++;n===5&&(Br=0)}else Br=0,(ot.state==="intro"||ot.state==="clear"||ot.state==="over")&&ot.update(e,t);for(const n of ot.drainEvents())vh(n);tn.update(ot),ys.sync(ot,e),ys.render();const i=ot.state==="playing"?Math.max(.12,ot.playerSpeed):0;ut.setEngine(i),requestAnimationFrame(dm)}function U1(){ys.resize()}window.addEventListener("resize",U1);ys.showTitle(ot);tn.ready();requestAnimationFrame(dm);window.__battleCity={THREE:mb,game:ot,view:ys,audio:ut,hud:tn,input:xa,dispatch:vh,start:(r=1)=>ls(r),advance:r=>{for(let e=0;e<r*60;e++)ot.update(1/60,xa.getPlayers(ot.mode));for(const e of ot.drainEvents())vh(e)}};
