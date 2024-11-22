(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vs="160",Xo=0,Ps=1,qo=2,io=1,ro=2,yn=3,Un=0,Ge=1,Mn=2,Ln=0,vi=1,Ls=2,Is=3,Ns=4,Yo=5,Xn=100,Zo=101,Ko=102,Us=103,Ds=104,jo=200,$o=201,Jo=202,Qo=203,ss=204,as=205,tl=206,el=207,nl=208,il=209,rl=210,sl=211,al=212,ol=213,ll=214,cl=0,ul=1,hl=2,hr=3,fl=4,dl=5,pl=6,ml=7,so=0,vl=1,gl=2,In=0,_l=1,xl=2,yl=3,Ml=4,Sl=5,El=6,ao=300,_i=301,xi=302,os=303,ls=304,xr=306,cs=1e3,on=1001,us=1002,Ve=1003,Fs=1004,br=1005,$e=1006,wl=1007,Ni=1008,Nn=1009,Tl=1010,Al=1011,gs=1012,oo=1013,Cn=1014,Pn=1015,Ui=1016,lo=1017,co=1018,Yn=1020,bl=1021,ln=1023,Rl=1024,Cl=1025,Zn=1026,yi=1027,Pl=1028,uo=1029,Ll=1030,ho=1031,fo=1033,Rr=33776,Cr=33777,Pr=33778,Lr=33779,Bs=35840,Os=35841,zs=35842,Vs=35843,po=36196,Gs=37492,Hs=37496,Ws=37808,ks=37809,Xs=37810,qs=37811,Ys=37812,Zs=37813,Ks=37814,js=37815,$s=37816,Js=37817,Qs=37818,ta=37819,ea=37820,na=37821,Ir=36492,ia=36494,ra=36495,Il=36283,sa=36284,aa=36285,oa=36286,mo=3e3,Kn=3001,Nl=3200,Ul=3201,_s=0,Dl=1,Qe="",Ue="srgb",En="srgb-linear",xs="display-p3",yr="display-p3-linear",fr="linear",_e="srgb",dr="rec709",pr="p3",Jn=7680,la=519,Fl=512,Bl=513,Ol=514,vo=515,zl=516,Vl=517,Gl=518,Hl=519,ca=35044,ua="300 es",hs=1035,Sn=2e3,mr=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nr=Math.PI/180,fs=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function Wl(i,t){return(i%t+t)%t}function Ur(i,t,e){return(1-e)*i+e*t}function ha(i){return(i&i-1)===0&&i!==0}function ds(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ve{constructor(t=0,e=0){ve.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*a+t.x,this.y=r*a+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,a,r,s,o,c,h){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,h)}set(t,e,n,a,r,s,o,c,h){const u=this.elements;return u[0]=t,u[1]=a,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[3],c=n[6],h=n[1],u=n[4],l=n[7],f=n[2],p=n[5],v=n[8],g=a[0],m=a[3],d=a[6],_=a[1],y=a[4],x=a[7],A=a[2],P=a[5],I=a[8];return r[0]=s*g+o*_+c*A,r[3]=s*m+o*y+c*P,r[6]=s*d+o*x+c*I,r[1]=h*g+u*_+l*A,r[4]=h*m+u*y+l*P,r[7]=h*d+u*x+l*I,r[2]=f*g+p*_+v*A,r[5]=f*m+p*y+v*P,r[8]=f*d+p*x+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*s*u-e*o*h-n*r*u+n*o*c+a*r*h-a*s*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],h=t[7],u=t[8],l=u*s-o*h,f=o*c-u*r,p=h*r-s*c,v=e*l+n*f+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(a*h-u*n)*g,t[2]=(o*n-a*s)*g,t[3]=f*g,t[4]=(u*e-a*c)*g,t[5]=(a*r-o*e)*g,t[6]=p*g,t[7]=(n*c-h*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,s,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*s+h*o)+s+t,-a*h,a*c,-a*(-h*s+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Dr.makeScale(t,e)),this}rotate(t){return this.premultiply(Dr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Dr=new re;function go(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Di(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kl(){const i=Di("canvas");return i.style.display="block",i}const fa={};function Li(i){i in fa||(fa[i]=!0,console.warn(i))}const da=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pa=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vi={[En]:{transfer:fr,primaries:dr,toReference:i=>i,fromReference:i=>i},[Ue]:{transfer:_e,primaries:dr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[yr]:{transfer:fr,primaries:pr,toReference:i=>i.applyMatrix3(pa),fromReference:i=>i.applyMatrix3(da)},[xs]:{transfer:_e,primaries:pr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pa),fromReference:i=>i.applyMatrix3(da).convertLinearToSRGB()}},Xl=new Set([En,yr]),ge={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Vi[t].toReference,a=Vi[e].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Vi[i].primaries},getTransfer:function(i){return i===Qe?fr:Vi[i].transfer}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qn;class _o{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Di("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Di("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=gi(r[s]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ql=0;class xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=Fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Br(a[s].image)):r.push(Br(a[s]))}else r=Br(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yl=0;class Xe extends Si{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=on,a=on,r=$e,s=Ni,o=ln,c=Nn,h=Xe.DEFAULT_ANISOTROPY,u=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Fi(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Kn?Ue:Qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ao)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case us:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case us:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?Kn:mo}set encoding(t){Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Kn?Ue:Qe}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=ao;Xe.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,a=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const c=t.elements,h=c[0],u=c[4],l=c[8],f=c[1],p=c[5],v=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(h+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,x=(p+1)/2,A=(d+1)/2,P=(u+f)/4,I=(l+g)/4,V=(v+m)/4;return y>x&&y>A?y<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(y),a=P/n,r=I/n):x>A?x<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),n=P/a,r=V/a):A<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(A),n=I/r,a=V/r),this.set(n,a,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(l-g)/_,this.z=(f-u)/_,this.w=Math.acos((h+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zl extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const a={width:t,height:e,depth:1};n.encoding!==void 0&&(Li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kn?Ue:Qe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yo extends Xe{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kl extends Xe{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,s,o){let c=n[a+0],h=n[a+1],u=n[a+2],l=n[a+3];const f=r[s+0],p=r[s+1],v=r[s+2],g=r[s+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==f||h!==p||u!==v){let m=1-o;const d=c*f+h*p+u*v+l*g,_=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const A=Math.sqrt(y),P=Math.atan2(A,d*_);m=Math.sin(m*P)/A,o=Math.sin(o*P)/A}const x=o*_;if(c=c*m+f*x,h=h*m+p*x,u=u*m+v*x,l=l*m+g*x,m===1-o){const A=1/Math.sqrt(c*c+h*h+u*u+l*l);c*=A,h*=A,u*=A,l*=A}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,a,r,s){const o=n[a],c=n[a+1],h=n[a+2],u=n[a+3],l=r[s],f=r[s+1],p=r[s+2],v=r[s+3];return t[e]=o*v+u*l+c*p-h*f,t[e+1]=c*v+u*f+h*l-o*p,t[e+2]=h*v+u*p+o*f-c*l,t[e+3]=u*v-o*l-c*f-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(a/2),l=o(r/2),f=c(n/2),p=c(a/2),v=c(r/2);switch(s){case"XYZ":this._x=f*u*l+h*p*v,this._y=h*p*l-f*u*v,this._z=h*u*v+f*p*l,this._w=h*u*l-f*p*v;break;case"YXZ":this._x=f*u*l+h*p*v,this._y=h*p*l-f*u*v,this._z=h*u*v-f*p*l,this._w=h*u*l+f*p*v;break;case"ZXY":this._x=f*u*l-h*p*v,this._y=h*p*l+f*u*v,this._z=h*u*v+f*p*l,this._w=h*u*l-f*p*v;break;case"ZYX":this._x=f*u*l-h*p*v,this._y=h*p*l+f*u*v,this._z=h*u*v-f*p*l,this._w=h*u*l+f*p*v;break;case"YZX":this._x=f*u*l+h*p*v,this._y=h*p*l+f*u*v,this._z=h*u*v-f*p*l,this._w=h*u*l-f*p*v;break;case"XZY":this._x=f*u*l-h*p*v,this._y=h*p*l-f*u*v,this._z=h*u*v+f*p*l,this._w=h*u*l+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],s=e[1],o=e[5],c=e[9],h=e[2],u=e[6],l=e[10],f=n+o+l;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-h)*p,this._z=(s-a)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(u-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+h)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-h)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(s-a)/p,this._x=(r+h)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,s=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+s*o+a*h-r*c,this._y=a*u+s*c+r*o-n*h,this._z=r*u+s*h+n*c-a*o,this._w=s*u-n*o-a*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*a+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),l=Math.sin((1-e)*u)/h,f=Math.sin(e*u)/h;return this._w=s*l+this._w*f,this._x=n*l+this._x*f,this._y=a*l+this._y*f,this._z=r*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),a=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(a),n*Math.sin(r),n*Math.cos(r),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,n=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ma.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ma.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,s=t.y,o=t.z,c=t.w,h=2*(s*a-o*n),u=2*(o*e-r*a),l=2*(r*n-s*e);return this.x=e+c*h+s*l-o*u,this.y=n+c*u+o*h-r*l,this.z=a+c*l+r*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,s=e.x,o=e.y,c=e.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new et,ma=new Bi;class Oi{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,nn):nn.fromBufferAttribute(r,s),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(t.matrixWorld),this.union(Gi)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),Hi.subVectors(this.max,bi),ti.subVectors(t.a,bi),ei.subVectors(t.b,bi),ni.subVectors(t.c,bi),wn.subVectors(ei,ti),Tn.subVectors(ni,ei),zn.subVectors(ti,ni);let e=[0,-wn.z,wn.y,0,-Tn.z,Tn.y,0,-zn.z,zn.y,wn.z,0,-wn.x,Tn.z,0,-Tn.x,zn.z,0,-zn.x,-wn.y,wn.x,0,-Tn.y,Tn.x,0,-zn.y,zn.x,0];return!zr(e,ti,ei,ni,Hi)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,ti,ei,ni,Hi))?!1:(Wi.crossVectors(wn,Tn),e=[Wi.x,Wi.y,Wi.z],zr(e,ti,ei,ni,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new et,new et,new et,new et,new et,new et,new et,new et],nn=new et,Gi=new Oi,ti=new et,ei=new et,ni=new et,wn=new et,Tn=new et,zn=new et,bi=new et,Hi=new et,Wi=new et,Vn=new et;function zr(i,t,e,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Vn.fromArray(i,r);const o=a.x*Math.abs(Vn.x)+a.y*Math.abs(Vn.y)+a.z*Math.abs(Vn.z),c=t.dot(Vn),h=e.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const jl=new Oi,Ri=new et,Vr=new et;class ys{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jl.setFromPoints(t).getCenter(n);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(Ri,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(Vr)),this.expandByPoint(Ri.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new et,Gr=new et,ki=new et,An=new et,Hr=new et,Xi=new et,Wr=new et;class $l{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){Gr.copy(t).add(e).multiplyScalar(.5),ki.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Gr);const r=t.distanceTo(e)*.5,s=-this.direction.dot(ki),o=An.dot(this.direction),c=-An.dot(ki),h=An.lengthSq(),u=Math.abs(1-s*s);let l,f,p,v;if(u>0)if(l=s*c-o,f=s*o-c,v=r*u,l>=0)if(f>=-v)if(f<=v){const g=1/u;l*=g,f*=g,p=l*(l+s*f+2*o)+f*(s*l+f+2*c)+h}else f=r,l=Math.max(0,-(s*f+o)),p=-l*l+f*(f+2*c)+h;else f=-r,l=Math.max(0,-(s*f+o)),p=-l*l+f*(f+2*c)+h;else f<=-v?(l=Math.max(0,-(-s*r+o)),f=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+f*(f+2*c)+h):f<=v?(l=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+h):(l=Math.max(0,-(s*r+o)),f=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+f*(f+2*c)+h);else f=s>0?-r:r,l=Math.max(0,-(s*f+o)),p=-l*l+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,l),a&&a.copy(Gr).addScaledVector(ki,f),p}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),a=vn.dot(vn)-n*n,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,s,o,c;const h=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,a=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,a=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,s=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,s=(t.min.y-f.y)*u),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),l>=0?(o=(t.min.z-f.z)*l,c=(t.max.z-f.z)*l):(o=(t.max.z-f.z)*l,c=(t.min.z-f.z)*l),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,a,r){Hr.subVectors(e,t),Xi.subVectors(n,t),Wr.crossVectors(Hr,Xi);let s=this.direction.dot(Wr),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;An.subVectors(this.origin,t);const c=o*this.direction.dot(Xi.crossVectors(An,Xi));if(c<0)return null;const h=o*this.direction.dot(Hr.cross(An));if(h<0||c+h>s)return null;const u=-o*An.dot(Wr);return u<0?null:this.at(u/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,a,r,s,o,c,h,u,l,f,p,v,g,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,h,u,l,f,p,v,g,m)}set(t,e,n,a,r,s,o,c,h,u,l,f,p,v,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=a,d[1]=r,d[5]=s,d[9]=o,d[13]=c,d[2]=h,d[6]=u,d[10]=l,d[14]=f,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),s=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),h=Math.sin(a),u=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const f=s*u,p=s*l,v=o*u,g=o*l;e[0]=c*u,e[4]=-c*l,e[8]=h,e[1]=p+v*h,e[5]=f-g*h,e[9]=-o*c,e[2]=g-f*h,e[6]=v+p*h,e[10]=s*c}else if(t.order==="YXZ"){const f=c*u,p=c*l,v=h*u,g=h*l;e[0]=f+g*o,e[4]=v*o-p,e[8]=s*h,e[1]=s*l,e[5]=s*u,e[9]=-o,e[2]=p*o-v,e[6]=g+f*o,e[10]=s*c}else if(t.order==="ZXY"){const f=c*u,p=c*l,v=h*u,g=h*l;e[0]=f-g*o,e[4]=-s*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=s*u,e[9]=g-f*o,e[2]=-s*h,e[6]=o,e[10]=s*c}else if(t.order==="ZYX"){const f=s*u,p=s*l,v=o*u,g=o*l;e[0]=c*u,e[4]=v*h-p,e[8]=f*h+g,e[1]=c*l,e[5]=g*h+f,e[9]=p*h-v,e[2]=-h,e[6]=o*c,e[10]=s*c}else if(t.order==="YZX"){const f=s*c,p=s*h,v=o*c,g=o*h;e[0]=c*u,e[4]=g-f*l,e[8]=v*l+p,e[1]=l,e[5]=s*u,e[9]=-o*u,e[2]=-h*u,e[6]=p*l+v,e[10]=f-g*l}else if(t.order==="XZY"){const f=s*c,p=s*h,v=o*c,g=o*h;e[0]=c*u,e[4]=-l,e[8]=h*u,e[1]=f*l+g,e[5]=s*u,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*u,e[10]=g*l+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jl,t,Ql)}lookAt(t,e,n){const a=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),bn.crossVectors(n,Ze),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),bn.crossVectors(n,Ze)),bn.normalize(),qi.crossVectors(Ze,bn),a[0]=bn.x,a[4]=qi.x,a[8]=Ze.x,a[1]=bn.y,a[5]=qi.y,a[9]=Ze.y,a[2]=bn.z,a[6]=qi.z,a[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[4],c=n[8],h=n[12],u=n[1],l=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],d=n[14],_=n[3],y=n[7],x=n[11],A=n[15],P=a[0],I=a[4],V=a[8],E=a[12],S=a[1],L=a[5],O=a[9],q=a[13],D=a[2],z=a[6],J=a[10],F=a[14],U=a[3],Z=a[7],k=a[11],N=a[15];return r[0]=s*P+o*S+c*D+h*U,r[4]=s*I+o*L+c*z+h*Z,r[8]=s*V+o*O+c*J+h*k,r[12]=s*E+o*q+c*F+h*N,r[1]=u*P+l*S+f*D+p*U,r[5]=u*I+l*L+f*z+p*Z,r[9]=u*V+l*O+f*J+p*k,r[13]=u*E+l*q+f*F+p*N,r[2]=v*P+g*S+m*D+d*U,r[6]=v*I+g*L+m*z+d*Z,r[10]=v*V+g*O+m*J+d*k,r[14]=v*E+g*q+m*F+d*N,r[3]=_*P+y*S+x*D+A*U,r[7]=_*I+y*L+x*z+A*Z,r[11]=_*V+y*O+x*J+A*k,r[15]=_*E+y*q+x*F+A*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],s=t[1],o=t[5],c=t[9],h=t[13],u=t[2],l=t[6],f=t[10],p=t[14],v=t[3],g=t[7],m=t[11],d=t[15];return v*(+r*c*l-a*h*l-r*o*f+n*h*f+a*o*p-n*c*p)+g*(+e*c*p-e*h*f+r*s*f-a*s*p+a*h*u-r*c*u)+m*(+e*h*l-e*o*p-r*s*l+n*s*p+r*o*u-n*h*u)+d*(-a*o*u-e*c*l+e*o*f+a*s*l-n*s*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],h=t[7],u=t[8],l=t[9],f=t[10],p=t[11],v=t[12],g=t[13],m=t[14],d=t[15],_=l*m*h-g*f*h+g*c*p-o*m*p-l*c*d+o*f*d,y=v*f*h-u*m*h-v*c*p+s*m*p+u*c*d-s*f*d,x=u*g*h-v*l*h+v*o*p-s*g*p-u*o*d+s*l*d,A=v*l*c-u*g*c-v*o*f+s*g*f+u*o*m-s*l*m,P=e*_+n*y+a*x+r*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=_*I,t[1]=(g*f*r-l*m*r-g*a*p+n*m*p+l*a*d-n*f*d)*I,t[2]=(o*m*r-g*c*r+g*a*h-n*m*h-o*a*d+n*c*d)*I,t[3]=(l*c*r-o*f*r-l*a*h+n*f*h+o*a*p-n*c*p)*I,t[4]=y*I,t[5]=(u*m*r-v*f*r+v*a*p-e*m*p-u*a*d+e*f*d)*I,t[6]=(v*c*r-s*m*r-v*a*h+e*m*h+s*a*d-e*c*d)*I,t[7]=(s*f*r-u*c*r+u*a*h-e*f*h-s*a*p+e*c*p)*I,t[8]=x*I,t[9]=(v*l*r-u*g*r-v*n*p+e*g*p+u*n*d-e*l*d)*I,t[10]=(s*g*r-v*o*r+v*n*h-e*g*h-s*n*d+e*o*d)*I,t[11]=(u*o*r-s*l*r-u*n*h+e*l*h+s*n*p-e*o*p)*I,t[12]=A*I,t[13]=(u*g*a-v*l*a+v*n*f-e*g*f-u*n*m+e*l*m)*I,t[14]=(v*o*a-s*g*a-v*n*c+e*g*c+s*n*m-e*o*m)*I,t[15]=(s*l*a-u*o*a+u*n*c-e*l*c-s*n*f+e*o*f)*I,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,s=t.x,o=t.y,c=t.z,h=r*s,u=r*o;return this.set(h*s+n,h*o-a*c,h*c+a*o,0,h*o+a*c,u*o+n,u*c-a*s,0,h*c-a*o,u*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,s){return this.set(1,n,r,0,t,1,s,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,s=e._y,o=e._z,c=e._w,h=r+r,u=s+s,l=o+o,f=r*h,p=r*u,v=r*l,g=s*u,m=s*l,d=o*l,_=c*h,y=c*u,x=c*l,A=n.x,P=n.y,I=n.z;return a[0]=(1-(g+d))*A,a[1]=(p+x)*A,a[2]=(v-y)*A,a[3]=0,a[4]=(p-x)*P,a[5]=(1-(f+d))*P,a[6]=(m+_)*P,a[7]=0,a[8]=(v+y)*I,a[9]=(m-_)*I,a[10]=(1-(f+g))*I,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=ii.set(a[0],a[1],a[2]).length();const s=ii.set(a[4],a[5],a[6]).length(),o=ii.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],rn.copy(this);const h=1/r,u=1/s,l=1/o;return rn.elements[0]*=h,rn.elements[1]*=h,rn.elements[2]*=h,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=l,rn.elements[9]*=l,rn.elements[10]*=l,e.setFromRotationMatrix(rn),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,a,r,s,o=Sn){const c=this.elements,h=2*r/(e-t),u=2*r/(n-a),l=(e+t)/(e-t),f=(n+a)/(n-a);let p,v;if(o===Sn)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===mr)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,a,r,s,o=Sn){const c=this.elements,h=1/(e-t),u=1/(n-a),l=1/(s-r),f=(e+t)*h,p=(n+a)*u;let v,g;if(o===Sn)v=(s+r)*l,g=-2*l;else if(o===mr)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new et,rn=new Ce,Jl=new et(0,0,0),Ql=new et(1,1,1),bn=new et,qi=new et,Ze=new et,va=new Ce,ga=new Bi;class Mr{constructor(t=0,e=0,n=0,a=Mr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],c=a[1],h=a[5],u=a[9],l=a[2],f=a[6],p=a[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return va.makeRotationFromQuaternion(t),this.setFromRotationMatrix(va,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ga.setFromEuler(this),this.setFromQuaternion(ga,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mr.DEFAULT_ORDER="XYZ";class Mo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tc=0;const _a=new et,ri=new Bi,gn=new Ce,Yi=new et,Ci=new et,ec=new et,nc=new Bi,xa=new et(1,0,0),ya=new et(0,1,0),Ma=new et(0,0,1),ic={type:"added"},rc={type:"removed"};class Oe extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new et,e=new Mr,n=new Bi,a=new et(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ce},normalMatrix:{value:new re}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(xa,t)}rotateY(t){return this.rotateOnAxis(ya,t)}rotateZ(t){return this.rotateOnAxis(Ma,t)}translateOnAxis(t,e){return _a.copy(t).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xa,t)}translateY(t){return this.translateOnAxis(ya,t)}translateZ(t){return this.translateOnAxis(Ma,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yi.copy(t):Yi.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ci,Yi,this.up):gn.lookAt(Yi,Ci,this.up),this.quaternion.setFromRotationMatrix(gn),a&&(gn.extractRotation(a.matrixWorld),ri.setFromRotationMatrix(gn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ic)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,ec),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,nc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++){const o=a[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const l=c[h];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(t.animations,c))}}if(e){const o=s(t.geometries),c=s(t.materials),h=s(t.textures),u=s(t.images),l=s(t.shapes),f=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=a,n;function s(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Oe.DEFAULT_UP=new et(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new et,_n=new et,kr=new et,xn=new et,si=new et,ai=new et,Sa=new et,Xr=new et,qr=new et,Yr=new et;let Zi=!1;class an{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),sn.subVectors(t,e),a.cross(sn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){sn.subVectors(a,e),_n.subVectors(n,e),kr.subVectors(t,e);const s=sn.dot(sn),o=sn.dot(_n),c=sn.dot(kr),h=_n.dot(_n),u=_n.dot(kr),l=s*h-o*o;if(l===0)return r.set(0,0,0),null;const f=1/l,p=(h*c-o*u)*f,v=(s*u-o*c)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,n,a,r,s,o,c){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),this.getInterpolation(t,e,n,a,r,s,o,c)}static getInterpolation(t,e,n,a,r,s,o,c){return this.getBarycoord(t,e,n,a,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(s,xn.y),c.addScaledVector(o,xn.z),c)}static isFrontFacing(t,e,n,a){return sn.subVectors(n,e),_n.subVectors(t,e),sn.cross(_n).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),sn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,a,r){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),an.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}getInterpolation(t,e,n,a,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let s,o;si.subVectors(a,n),ai.subVectors(r,n),Xr.subVectors(t,n);const c=si.dot(Xr),h=ai.dot(Xr);if(c<=0&&h<=0)return e.copy(n);qr.subVectors(t,a);const u=si.dot(qr),l=ai.dot(qr);if(u>=0&&l<=u)return e.copy(a);const f=c*l-u*h;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),e.copy(n).addScaledVector(si,s);Yr.subVectors(t,r);const p=si.dot(Yr),v=ai.dot(Yr);if(v>=0&&p<=v)return e.copy(r);const g=p*h-c*v;if(g<=0&&h>=0&&v<=0)return o=h/(h-v),e.copy(n).addScaledVector(ai,o);const m=u*v-p*l;if(m<=0&&l-u>=0&&p-v>=0)return Sa.subVectors(r,a),o=(l-u)/(l-u+(p-v)),e.copy(a).addScaledVector(Sa,o);const d=1/(m+g+f);return s=g*d,o=f*d,e.copy(n).addScaledVector(si,s).addScaledVector(ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const So={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class me{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=ge.workingColorSpace){if(t=Wl(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Zr(s,r,t+1/3),this.g=Zr(s,r,t),this.b=Zr(s,r,t-1/3)}return ge.toWorkingColorSpace(this,a),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=So[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ge.fromWorkingColorSpace(Be.copy(this),t),Math.round(ke(Be.r*255,0,255))*65536+Math.round(ke(Be.g*255,0,255))*256+Math.round(ke(Be.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,a=Be.g,r=Be.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,h;const u=(o+s)/2;if(o===s)c=0,h=0;else{const l=s-o;switch(h=u<=.5?l/(s+o):l/(2-s-o),s){case n:c=(a-r)/l+(a<r?6:0);break;case a:c=(r-n)/l+2;break;case r:c=(n-a)/l+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ue){ge.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,a=Be.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ki);const n=Ur(Rn.h,Ki.h,e),a=Ur(Rn.s,Ki.s,e),r=Ur(Rn.l,Ki.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new me;me.NAMES=So;let sc=0;class Ei extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=vi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ss,this.blendDst=as,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ss&&(n.blendSrc=this.blendSrc),this.blendDst!==as&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(e){const r=a(t.textures),s=a(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Eo extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new et,ji=new ve;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ji.fromBufferAttribute(this,e),ji.applyMatrix3(t),this.setXY(e,ji.x,ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),a=He(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),a=He(a,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ca&&(t.usage=this.usage),t}}class wo extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class To extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pn extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ac=0;const je=new Ce,Kr=new Oe,oi=new et,Ke=new Oi,Pi=new Oi,Ne=new et;class Bn extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ac++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(go(t)?To:wo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Kr.lookAt(t),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){const e=[];for(let n=0,a=t.length;n<a;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new et,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(Ke.min,Pi.min),Ke.expandByPoint(Ne),Ne.addVectors(Ke.max,Pi.max),Ke.expandByPoint(Ne)):(Ke.expandByPoint(Pi.min),Ke.expandByPoint(Pi.max))}Ke.getCenter(n);let a=0;for(let r=0,s=t.count;r<s;r++)Ne.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(Ne));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Ne.fromBufferAttribute(o,h),c&&(oi.fromBufferAttribute(t,h),Ne.add(oi)),a=Math.max(a,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,a=e.position.array,r=e.normal.array,s=e.uv.array,o=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let S=0;S<o;S++)h[S]=new et,u[S]=new et;const l=new et,f=new et,p=new et,v=new ve,g=new ve,m=new ve,d=new et,_=new et;function y(S,L,O){l.fromArray(a,S*3),f.fromArray(a,L*3),p.fromArray(a,O*3),v.fromArray(s,S*2),g.fromArray(s,L*2),m.fromArray(s,O*2),f.sub(l),p.sub(l),g.sub(v),m.sub(v);const q=1/(g.x*m.y-m.x*g.y);isFinite(q)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(q),_.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(q),h[S].add(d),h[L].add(d),h[O].add(d),u[S].add(_),u[L].add(_),u[O].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,L=x.length;S<L;++S){const O=x[S],q=O.start,D=O.count;for(let z=q,J=q+D;z<J;z+=3)y(n[z+0],n[z+1],n[z+2])}const A=new et,P=new et,I=new et,V=new et;function E(S){I.fromArray(r,S*3),V.copy(I);const L=h[S];A.copy(L),A.sub(I.multiplyScalar(I.dot(L))).normalize(),P.crossVectors(V,L);const q=P.dot(u[S])<0?-1:1;c[S*4]=A.x,c[S*4+1]=A.y,c[S*4+2]=A.z,c[S*4+3]=q}for(let S=0,L=x.length;S<L;++S){const O=x[S],q=O.start,D=O.count;for(let z=q,J=q+D;z<J;z+=3)E(n[z+0]),E(n[z+1]),E(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const a=new et,r=new et,s=new et,o=new et,c=new et,h=new et,u=new et,l=new et;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),u.subVectors(s,r),l.subVectors(a,r),u.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,p=e.count;f<p;f+=3)a.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),u.subVectors(s,r),l.subVectors(a,r),u.cross(l),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const h=o.array,u=o.itemSize,l=o.normalized,f=new h.constructor(c.length*u);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*u;for(let d=0;d<u;d++)f[v++]=h[p++]}return new dn(f,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Bn,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],h=t(c,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let u=0,l=h.length;u<l;u++){const f=h[u],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const h=s[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const a={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let l=0,f=h.length;l<f;l++){const p=h[l];u.push(p.toJSON(t.data))}u.length>0&&(a[c]=u,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const h in a){const u=a[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],l=r[h];for(let f=0,p=l.length;f<p;f++)u.push(l[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let h=0,u=s.length;h<u;h++){const l=s[h];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ea=new Ce,Gn=new $l,$i=new ys,wa=new et,li=new et,ci=new et,ui=new et,jr=new et,Ji=new et,Qi=new ve,tr=new ve,er=new ve,Ta=new et,Aa=new et,ba=new et,nr=new et,ir=new et;class cn extends Oe{constructor(t=new Bn,e=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){Ji.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=o[c],l=r[c];u!==0&&(jr.fromBufferAttribute(l,t),s?Ji.addScaledVector(jr,u):Ji.addScaledVector(jr.sub(e),u))}e.add(Ji)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!($i.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere($i,wa)===null||Gn.origin.distanceToSquared(wa)>(t.far-t.near)**2))&&(Ea.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Ea),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,l=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=s[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=y;x<A;x+=3){const P=o.getX(x),I=o.getX(x+1),V=o.getX(x+2);a=rr(this,d,t,n,h,u,l,P,I,V),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const _=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);a=rr(this,s,t,n,h,u,l,_,y,x),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=s[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=y;x<A;x+=3){const P=x,I=x+1,V=x+2;a=rr(this,d,t,n,h,u,l,P,I,V),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const _=m,y=m+1,x=m+2;a=rr(this,s,t,n,h,u,l,_,y,x),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function oc(i,t,e,n,a,r,s,o){let c;if(t.side===Ge?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,t.side===Un,o),c===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(ir);return h<e.near||h>e.far?null:{distance:h,point:ir.clone(),object:i}}function rr(i,t,e,n,a,r,s,o,c,h){i.getVertexPosition(o,li),i.getVertexPosition(c,ci),i.getVertexPosition(h,ui);const u=oc(i,t,e,n,li,ci,ui,nr);if(u){a&&(Qi.fromBufferAttribute(a,o),tr.fromBufferAttribute(a,c),er.fromBufferAttribute(a,h),u.uv=an.getInterpolation(nr,li,ci,ui,Qi,tr,er,new ve)),r&&(Qi.fromBufferAttribute(r,o),tr.fromBufferAttribute(r,c),er.fromBufferAttribute(r,h),u.uv1=an.getInterpolation(nr,li,ci,ui,Qi,tr,er,new ve),u.uv2=u.uv1),s&&(Ta.fromBufferAttribute(s,o),Aa.fromBufferAttribute(s,c),ba.fromBufferAttribute(s,h),u.normal=an.getInterpolation(nr,li,ci,ui,Ta,Aa,ba,new et),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const l={a:o,b:c,c:h,normal:new et,materialIndex:0};an.getNormal(li,ci,ui,l.normal),u.face=l}return u}class wi extends Bn{constructor(t=1,e=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],h=[],u=[],l=[];let f=0,p=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,a,s,2),v("x","z","y",1,-1,t,n,-e,a,s,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new pn(h,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(l,2));function v(g,m,d,_,y,x,A,P,I,V,E){const S=x/I,L=A/V,O=x/2,q=A/2,D=P/2,z=I+1,J=V+1;let F=0,U=0;const Z=new et;for(let k=0;k<J;k++){const N=k*L-q;for(let H=0;H<z;H++){const T=H*S-O;Z[g]=T*_,Z[m]=N*y,Z[d]=D,h.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[d]=P>0?1:-1,u.push(Z.x,Z.y,Z.z),l.push(H/I),l.push(1-k/V),F+=1}}for(let k=0;k<V;k++)for(let N=0;N<I;N++){const H=f+N+z*k,T=f+N+z*(k+1),b=f+(N+1)+z*(k+1),R=f+(N+1)+z*k;c.push(H,T,R),c.push(T,b,R),U+=6}o.addGroup(p,U,E),p+=U,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=Mi(i[e]);for(const a in n)t[a]=n[a]}return t}function lc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ao(i){return i.getRenderTarget()===null?i.outputColorSpace:ge.workingColorSpace}const cc={clone:Mi,merge:ze};var uc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uc,this.fragmentShader=hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=lc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?e.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[a]={type:"m4",value:s.toArray()}:e.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bo extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Je extends bo{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,a,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,h=s.fullHeight;r+=s.offsetX*a/c,e-=s.offsetY*n/h,a*=s.width/c,n*=s.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,fi=1;class fc extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Je(hi,fi,t,e);a.layers=this.layers,this.add(a);const r=new Je(hi,fi,t,e);r.layers=this.layers,this.add(r);const s=new Je(hi,fi,t,e);s.layers=this.layers,this.add(s);const o=new Je(hi,fi,t,e);o.layers=this.layers,this.add(o);const c=new Je(hi,fi,t,e);c.layers=this.layers,this.add(c);const h=new Je(hi,fi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,s,o,c]=e;for(const h of e)this.remove(h);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,h,u]=this.children,l=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,r),t.setRenderTarget(n,1,a),t.render(e,s),t.setRenderTarget(n,2,a),t.render(e,o),t.setRenderTarget(n,3,a),t.render(e,c),t.setRenderTarget(n,4,a),t.render(e,h),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,a),t.render(e,u),t.setRenderTarget(l,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ro extends Xe{constructor(t,e,n,a,r,s,o,c,h,u){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,a,r,s,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dc extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];e.encoding!==void 0&&(Li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Kn?Ue:Qe),this.texture=new Ro(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new wi(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Ln});r.uniforms.tEquirect.value=e;const s=new cn(a,r),o=e.minFilter;return e.minFilter===Ni&&(e.minFilter=$e),new fc(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,a);t.setRenderTarget(r)}}const $r=new et,pc=new et,mc=new re;class Wn{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=$r.subVectors(n,e).cross(pc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($r),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mc.getNormalMatrix(t),a=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ys,sr=new et;class Ms{constructor(t=new Wn,e=new Wn,n=new Wn,a=new Wn,r=new Wn,s=new Wn){this.planes=[t,e,n,a,r,s]}set(t,e,n,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],c=a[3],h=a[4],u=a[5],l=a[6],f=a[7],p=a[8],v=a[9],g=a[10],m=a[11],d=a[12],_=a[13],y=a[14],x=a[15];if(n[0].setComponents(c-r,f-h,m-p,x-d).normalize(),n[1].setComponents(c+r,f+h,m+p,x+d).normalize(),n[2].setComponents(c+s,f+u,m+v,x+_).normalize(),n[3].setComponents(c-s,f-u,m-v,x-_).normalize(),n[4].setComponents(c-o,f-l,m-g,x-y).normalize(),e===Sn)n[5].setComponents(c+o,f+l,m+g,x+y).normalize();else if(e===mr)n[5].setComponents(o,l,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(sr.x=a.normal.x>0?t.max.x:t.min.x,sr.y=a.normal.y>0?t.max.y:t.min.y,sr.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Co(){let i=null,t=!1,e=null,n=null;function a(r,s){e(r,s),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vc(i,t){const e=t.isWebGL2,n=new WeakMap;function a(h,u){const l=h.array,f=h.usage,p=l.byteLength,v=i.createBuffer();i.bindBuffer(u,v),i.bufferData(u,l,f),h.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(l instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:v,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:h.version,size:p}}function r(h,u,l){const f=u.array,p=u._updateRange,v=u.updateRanges;if(i.bindBuffer(l,h),p.count===-1&&v.length===0&&i.bufferSubData(l,0,f),v.length!==0){for(let g=0,m=v.length;g<m;g++){const d=v[g];e?i.bufferSubData(l,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(l,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(l,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(l,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const f=n.get(h);(!f||f.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const l=n.get(h);if(l===void 0)n.set(h,a(h,u));else if(l.version<h.version){if(l.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,h,u),l.version=h.version}}return{get:s,remove:o,update:c}}class Ss extends Bn{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,s=e/2,o=Math.floor(n),c=Math.floor(a),h=o+1,u=c+1,l=t/o,f=e/c,p=[],v=[],g=[],m=[];for(let d=0;d<u;d++){const _=d*f-s;for(let y=0;y<h;y++){const x=y*l-r;v.push(x,-_,0),g.push(0,0,1),m.push(y/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){const y=_+h*d,x=_+h*(d+1),A=_+1+h*(d+1),P=_+1+h*d;p.push(y,x,P),p.push(x,A,P)}this.setIndex(p),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.widthSegments,t.heightSegments)}}var gc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_c=`#ifdef USE_ALPHAHASH
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
#endif`,xc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ec=`#ifdef USE_AOMAP
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
#endif`,wc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Ac=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pc=`#ifdef USE_IRIDESCENCE
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
#endif`,Lc=`#ifdef USE_BUMPMAP
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
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vc=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Gc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hc=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Kc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$c=`#ifdef USE_ENVMAP
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
#endif`,Jc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ru=`#ifdef USE_GRADIENTMAP
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
}`,su=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cu=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,uu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,vu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bu=`#if defined( USE_POINTS_UV )
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
#endif`,Ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Iu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Du=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zu=`#ifdef USE_NORMALMAP
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
#endif`,Vu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ku=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$u=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,th=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,eh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ih=`#ifdef USE_SKINNING
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
#endif`,rh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sh=`#ifdef USE_SKINNING
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
#endif`,ah=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ch=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uh=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gh=`uniform sampler2D t2D;
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
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sh=`#include <common>
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
}`,Eh=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wh=`#define DISTANCE
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
}`,Th=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rh=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ch=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ph=`#include <common>
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
}`,Lh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ih=`#define LAMBERT
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
}`,Nh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Uh=`#define MATCAP
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
}`,Dh=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fh=`#define NORMAL
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
}`,Bh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Oh=`#define PHONG
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
}`,zh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vh=`#define STANDARD
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
}`,Gh=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Hh=`#define TOON
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
}`,Wh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,kh=`uniform float size;
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
}`,Xh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Yh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Zh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Kh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ie={alphahash_fragment:gc,alphahash_pars_fragment:_c,alphamap_fragment:xc,alphamap_pars_fragment:yc,alphatest_fragment:Mc,alphatest_pars_fragment:Sc,aomap_fragment:Ec,aomap_pars_fragment:wc,batching_pars_vertex:Tc,batching_vertex:Ac,begin_vertex:bc,beginnormal_vertex:Rc,bsdfs:Cc,iridescence_fragment:Pc,bumpmap_pars_fragment:Lc,clipping_planes_fragment:Ic,clipping_planes_pars_fragment:Nc,clipping_planes_pars_vertex:Uc,clipping_planes_vertex:Dc,color_fragment:Fc,color_pars_fragment:Bc,color_pars_vertex:Oc,color_vertex:zc,common:Vc,cube_uv_reflection_fragment:Gc,defaultnormal_vertex:Hc,displacementmap_pars_vertex:Wc,displacementmap_vertex:kc,emissivemap_fragment:Xc,emissivemap_pars_fragment:qc,colorspace_fragment:Yc,colorspace_pars_fragment:Zc,envmap_fragment:Kc,envmap_common_pars_fragment:jc,envmap_pars_fragment:$c,envmap_pars_vertex:Jc,envmap_physical_pars_fragment:uu,envmap_vertex:Qc,fog_vertex:tu,fog_pars_vertex:eu,fog_fragment:nu,fog_pars_fragment:iu,gradientmap_pars_fragment:ru,lightmap_fragment:su,lightmap_pars_fragment:au,lights_lambert_fragment:ou,lights_lambert_pars_fragment:lu,lights_pars_begin:cu,lights_toon_fragment:hu,lights_toon_pars_fragment:fu,lights_phong_fragment:du,lights_phong_pars_fragment:pu,lights_physical_fragment:mu,lights_physical_pars_fragment:vu,lights_fragment_begin:gu,lights_fragment_maps:_u,lights_fragment_end:xu,logdepthbuf_fragment:yu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:Su,logdepthbuf_vertex:Eu,map_fragment:wu,map_pars_fragment:Tu,map_particle_fragment:Au,map_particle_pars_fragment:bu,metalnessmap_fragment:Ru,metalnessmap_pars_fragment:Cu,morphcolor_vertex:Pu,morphnormal_vertex:Lu,morphtarget_pars_vertex:Iu,morphtarget_vertex:Nu,normal_fragment_begin:Uu,normal_fragment_maps:Du,normal_pars_fragment:Fu,normal_pars_vertex:Bu,normal_vertex:Ou,normalmap_pars_fragment:zu,clearcoat_normal_fragment_begin:Vu,clearcoat_normal_fragment_maps:Gu,clearcoat_pars_fragment:Hu,iridescence_pars_fragment:Wu,opaque_fragment:ku,packing:Xu,premultiplied_alpha_fragment:qu,project_vertex:Yu,dithering_fragment:Zu,dithering_pars_fragment:Ku,roughnessmap_fragment:ju,roughnessmap_pars_fragment:$u,shadowmap_pars_fragment:Ju,shadowmap_pars_vertex:Qu,shadowmap_vertex:th,shadowmask_pars_fragment:eh,skinbase_vertex:nh,skinning_pars_vertex:ih,skinning_vertex:rh,skinnormal_vertex:sh,specularmap_fragment:ah,specularmap_pars_fragment:oh,tonemapping_fragment:lh,tonemapping_pars_fragment:ch,transmission_fragment:uh,transmission_pars_fragment:hh,uv_pars_fragment:fh,uv_pars_vertex:dh,uv_vertex:ph,worldpos_vertex:mh,background_vert:vh,background_frag:gh,backgroundCube_vert:_h,backgroundCube_frag:xh,cube_vert:yh,cube_frag:Mh,depth_vert:Sh,depth_frag:Eh,distanceRGBA_vert:wh,distanceRGBA_frag:Th,equirect_vert:Ah,equirect_frag:bh,linedashed_vert:Rh,linedashed_frag:Ch,meshbasic_vert:Ph,meshbasic_frag:Lh,meshlambert_vert:Ih,meshlambert_frag:Nh,meshmatcap_vert:Uh,meshmatcap_frag:Dh,meshnormal_vert:Fh,meshnormal_frag:Bh,meshphong_vert:Oh,meshphong_frag:zh,meshphysical_vert:Vh,meshphysical_frag:Gh,meshtoon_vert:Hh,meshtoon_frag:Wh,points_vert:kh,points_frag:Xh,shadow_vert:qh,shadow_frag:Yh,sprite_vert:Zh,sprite_frag:Kh},Dt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},hn={basic:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new me(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:ze([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:ze([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new me(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:ze([Dt.points,Dt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:ze([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:ze([Dt.common,Dt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:ze([Dt.sprite,Dt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:ze([Dt.common,Dt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:ze([Dt.lights,Dt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};hn.physical={uniforms:ze([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const ar={r:0,b:0,g:0};function jh(i,t,e,n,a,r,s){const o=new me(0);let c=r===!0?0:1,h,u,l=null,f=0,p=null;function v(m,d){let _=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y)),y===null?g(o,c):y&&y.isColor&&(g(y,1),_=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===xr)?(u===void 0&&(u=new cn(new wi(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Mi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=ge.getTransfer(y.colorSpace)!==_e,(l!==y||f!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=y,f=y.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new cn(new Ss(2,2),new Dn({name:"BackgroundMaterial",uniforms:Mi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ge.getTransfer(y.colorSpace)!==_e,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||f!==y.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=y,f=y.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function g(m,d){m.getRGB(ar,Ao(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:v}}function $h(i,t,e,n){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,o={},c=m(null);let h=c,u=!1;function l(D,z,J,F,U){let Z=!1;if(s){const k=g(F,J,z);h!==k&&(h=k,p(h.object)),Z=d(D,F,J,U),Z&&_(D,F,J,U)}else{const k=z.wireframe===!0;(h.geometry!==F.id||h.program!==J.id||h.wireframe!==k)&&(h.geometry=F.id,h.program=J.id,h.wireframe=k,Z=!0)}U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,V(D,z,J,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function v(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function g(D,z,J){const F=J.wireframe===!0;let U=o[D.id];U===void 0&&(U={},o[D.id]=U);let Z=U[z.id];Z===void 0&&(Z={},U[z.id]=Z);let k=Z[F];return k===void 0&&(k=m(f()),Z[F]=k),k}function m(D){const z=[],J=[],F=[];for(let U=0;U<a;U++)z[U]=0,J[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:F,object:D,attributes:{},index:null}}function d(D,z,J,F){const U=h.attributes,Z=z.attributes;let k=0;const N=J.getAttributes();for(const H in N)if(N[H].location>=0){const b=U[H];let R=Z[H];if(R===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),b===void 0||b.attribute!==R||R&&b.data!==R.data)return!0;k++}return h.attributesNum!==k||h.index!==F}function _(D,z,J,F){const U={},Z=z.attributes;let k=0;const N=J.getAttributes();for(const H in N)if(N[H].location>=0){let b=Z[H];b===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(b=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(b=D.instanceColor));const R={};R.attribute=b,b&&b.data&&(R.data=b.data),U[H]=R,k++}h.attributes=U,h.attributesNum=k,h.index=F}function y(){const D=h.newAttributes;for(let z=0,J=D.length;z<J;z++)D[z]=0}function x(D){A(D,0)}function A(D,z){const J=h.newAttributes,F=h.enabledAttributes,U=h.attributeDivisors;J[D]=1,F[D]===0&&(i.enableVertexAttribArray(D),F[D]=1),U[D]!==z&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),U[D]=z)}function P(){const D=h.newAttributes,z=h.enabledAttributes;for(let J=0,F=z.length;J<F;J++)z[J]!==D[J]&&(i.disableVertexAttribArray(J),z[J]=0)}function I(D,z,J,F,U,Z,k){k===!0?i.vertexAttribIPointer(D,z,J,U,Z):i.vertexAttribPointer(D,z,J,F,U,Z)}function V(D,z,J,F){if(n.isWebGL2===!1&&(D.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const U=F.attributes,Z=J.getAttributes(),k=z.defaultAttributeValues;for(const N in Z){const H=Z[N];if(H.location>=0){let T=U[N];if(T===void 0&&(N==="instanceMatrix"&&D.instanceMatrix&&(T=D.instanceMatrix),N==="instanceColor"&&D.instanceColor&&(T=D.instanceColor)),T!==void 0){const b=T.normalized,R=T.itemSize,X=e.get(T);if(X===void 0)continue;const nt=X.buffer,it=X.type,K=X.bytesPerElement,tt=n.isWebGL2===!0&&(it===i.INT||it===i.UNSIGNED_INT||T.gpuType===oo);if(T.isInterleavedBufferAttribute){const ct=T.data,Y=ct.stride,Ct=T.offset;if(ct.isInstancedInterleavedBuffer){for(let ht=0;ht<H.locationSize;ht++)A(H.location+ht,ct.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<H.locationSize;ht++)x(H.location+ht);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ht=0;ht<H.locationSize;ht++)I(H.location+ht,R/H.locationSize,it,b,Y*K,(Ct+R/H.locationSize*ht)*K,tt)}else{if(T.isInstancedBufferAttribute){for(let ct=0;ct<H.locationSize;ct++)A(H.location+ct,T.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let ct=0;ct<H.locationSize;ct++)x(H.location+ct);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ct=0;ct<H.locationSize;ct++)I(H.location+ct,R/H.locationSize,it,b,R*K,R/H.locationSize*ct*K,tt)}}else if(k!==void 0){const b=k[N];if(b!==void 0)switch(b.length){case 2:i.vertexAttrib2fv(H.location,b);break;case 3:i.vertexAttrib3fv(H.location,b);break;case 4:i.vertexAttrib4fv(H.location,b);break;default:i.vertexAttrib1fv(H.location,b)}}}}P()}function E(){O();for(const D in o){const z=o[D];for(const J in z){const F=z[J];for(const U in F)v(F[U].object),delete F[U];delete z[J]}delete o[D]}}function S(D){if(o[D.id]===void 0)return;const z=o[D.id];for(const J in z){const F=z[J];for(const U in F)v(F[U].object),delete F[U];delete z[J]}delete o[D.id]}function L(D){for(const z in o){const J=o[z];if(J[D.id]===void 0)continue;const F=J[D.id];for(const U in F)v(F[U].object),delete F[U];delete J[D.id]}}function O(){q(),u=!0,h!==c&&(h=c,p(h.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:O,resetDefaultState:q,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:x,disableUnusedAttributes:P}}function Jh(i,t,e,n){const a=n.isWebGL2;let r;function s(u){r=u}function o(u,l){i.drawArrays(r,u,l),e.update(l,r,1)}function c(u,l,f){if(f===0)return;let p,v;if(a)p=i,v="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](r,u,l,f),e.update(l,r,f)}function h(u,l,f){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<f;v++)this.render(u[v],l[v]);else{p.multiDrawArraysWEBGL(r,u,0,l,0,f);let v=0;for(let g=0;g<f;g++)v+=l[g];e.update(v,r,1)}}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function Qh(i,t,e){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const h=s||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,x=s||t.has("OES_texture_float"),A=y&&x,P=s?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:l,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:P}}function tf(i){const t=this;let e=null,n=0,a=!1,r=!1;const s=new Wn,o=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){const p=l.length!==0||f||n!==0||a;return a=f,n=l.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,f){e=u(l,f,0)},this.setState=function(l,f,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,d=i.get(l);if(!a||v===null||v.length===0||r&&!m)r?u(null):h();else{const _=r?0:n,y=_*4;let x=d.clippingState||null;c.value=x,x=u(v,f,y,p);for(let A=0;A!==y;++A)x[A]=e[A];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(l,f,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const d=p+g*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==g;++y,x+=4)s.copy(l[y]).applyMatrix4(_,o),s.normal.toArray(m,x),m[x+3]=s.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function ef(i){let t=new WeakMap;function e(s,o){return o===os?s.mapping=_i:o===ls&&(s.mapping=xi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===os||o===ls)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const h=new dc(c.height/2);return h.fromEquirectangularTexture(i,s),t.set(s,h),s.addEventListener("dispose",a),e(h.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Po extends bo{constructor(t=-1,e=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,s=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const pi=4,Ra=[.125,.215,.35,.446,.526,.582],qn=20,Jr=new Po,Ca=new me;let Qr=null,ts=0,es=0;const kn=(1+Math.sqrt(5))/2,di=1/kn,Pa=[new et(1,1,1),new et(-1,1,1),new et(1,1,-1),new et(-1,1,-1),new et(0,kn,di),new et(0,kn,-di),new et(di,0,kn),new et(-di,0,kn),new et(kn,di,0),new et(-kn,di,0)];class La{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100){Qr=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,a,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qr,ts,es),t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qr=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Ui,format:ln,colorSpace:En,depthBuffer:!1},a=Ia(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ia(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nf(r)),this._blurMaterial=rf(r,t,e)}return a}_compileMaterial(t){const e=new cn(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,a){const o=new Je(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,l=u.autoClear,f=u.toneMapping;u.getClearColor(Ca),u.toneMapping=In,u.autoClear=!1;const p=new Eo({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),v=new cn(new wi,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Ca),g=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,c[d],0),o.lookAt(h[d],0,0)):_===1?(o.up.set(0,0,c[d]),o.lookAt(0,h[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,h[d]));const y=this._cubeSize;or(a,_*y,d>2?y:0,y,y),u.setRenderTarget(a),g&&u.render(v,o),u.render(t,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===_i||t.mapping===xi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new cn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;or(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(s,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Pa[(a-1)%Pa.length];this._blur(t,a-1,a,r,s)}e.autoClear=n}_blur(t,e,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,a,"latitudinal",r),this._halfBlur(s,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,s,o){const c=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,l=new cn(this._lodPlanes[a],h),f=h.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qn-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const d=[];let _=0;for(let I=0;I<qn;++I){const V=I/g,E=Math.exp(-V*V/2);d.push(E),I===0?_+=E:I<m&&(_+=2*E)}for(let I=0;I<d.length;I++)d[I]=d[I]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const x=this._sizeLods[a],A=3*x*(a>y-pi?a-y+pi:0),P=4*(this._cubeSize-x);or(e,A,P,3*x,2*x),c.setRenderTarget(e),c.render(l,Jr)}}function nf(i){const t=[],e=[],n=[];let a=i;const r=i-pi+1+Ra.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-pi?c=Ra[s-i+pi-1]:s===0&&(c=0),n.push(c);const h=1/(o-2),u=-h,l=1+h,f=[u,u,l,u,l,l,u,u,l,l,u,l],p=6,v=6,g=3,m=2,d=1,_=new Float32Array(g*v*p),y=new Float32Array(m*v*p),x=new Float32Array(d*v*p);for(let P=0;P<p;P++){const I=P%3*2/3-1,V=P>2?0:-1,E=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];_.set(E,g*v*P),y.set(f,m*v*P);const S=[P,P,P,P,P,P];x.set(S,d*v*P)}const A=new Bn;A.setAttribute("position",new dn(_,g)),A.setAttribute("uv",new dn(y,m)),A.setAttribute("faceIndex",new dn(x,d)),t.push(A),a>pi&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ia(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function rf(i,t,e){const n=new Float32Array(qn),a=new et(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Na(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Es(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ua(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Es(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Es(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===os||c===ls,u=c===_i||c===xi;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new La(i)),l=h?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{const l=o.image;if(h&&l&&l.height>0||u&&l&&a(l)){e===null&&(e=new La(i));const f=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function a(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function af(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const a=e(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function of(i,t,e,n){const a={},r=new WeakMap;function s(l){const f=l.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)t.remove(g[m])}f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(l,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,e.memory.geometries++),f}function c(l){const f=l.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const p=l.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)t.update(g[m],i.ARRAY_BUFFER)}}function h(l){const f=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let y=0,x=_.length;y<x;y+=3){const A=_[y+0],P=_[y+1],I=_[y+2];f.push(A,P,P,I,I,A)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const A=y+0,P=y+1,I=y+2;f.push(A,P,P,I,I,A)}}else return;const m=new(go(f)?To:wo)(f,1);m.version=g;const d=r.get(l);d&&t.remove(d),r.set(l,m)}function u(l){const f=r.get(l);if(f){const p=l.index;p!==null&&f.version<p.version&&h(l)}else h(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:u}}function lf(i,t,e,n){const a=n.isWebGL2;let r;function s(p){r=p}let o,c;function h(p){o=p.type,c=p.bytesPerElement}function u(p,v){i.drawElements(r,v,o,p*c),e.update(v,r,1)}function l(p,v,g){if(g===0)return;let m,d;if(a)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,v,o,p*c,g),e.update(v,r,g)}function f(p,v,g){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(p[d]/c,v[d]);else{m.multiDrawElementsWEBGL(r,v,0,o,p,0,g);let d=0;for(let _=0;_<g;_++)d+=v[_];e.update(d,r,1)}}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=l,this.renderMultiDraw=f}function cf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function uf(i,t){return i[0]-t[0]}function hf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function ff(i,t,e){const n={},a=new Float32Array(8),r=new WeakMap,s=new De,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,l){const f=h.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let z=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],V=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),x===!0&&(E=2),A===!0&&(E=3);let S=u.attributes.position.count*E,L=1;S>t.maxTextureSize&&(L=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const O=new Float32Array(S*L*4*g),q=new yo(O,S,L,g);q.type=Pn,q.needsUpdate=!0;const D=E*4;for(let J=0;J<g;J++){const F=P[J],U=I[J],Z=V[J],k=S*L*4*J;for(let N=0;N<F.count;N++){const H=N*D;y===!0&&(s.fromBufferAttribute(F,N),O[k+H+0]=s.x,O[k+H+1]=s.y,O[k+H+2]=s.z,O[k+H+3]=0),x===!0&&(s.fromBufferAttribute(U,N),O[k+H+4]=s.x,O[k+H+5]=s.y,O[k+H+6]=s.z,O[k+H+7]=0),A===!0&&(s.fromBufferAttribute(Z,N),O[k+H+8]=s.x,O[k+H+9]=s.y,O[k+H+10]=s.z,O[k+H+11]=Z.itemSize===4?s.w:1)}}m={count:g,texture:q,size:new ve(S,L)},r.set(u,m),u.addEventListener("dispose",z)}let d=0;for(let y=0;y<f.length;y++)d+=f[y];const _=u.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",f),l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<v;x++){const A=g[x];A[0]=x,A[1]=f[x]}g.sort(hf);for(let x=0;x<8;x++)x<v&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(uf);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const A=o[x],P=A[0],I=A[1];P!==Number.MAX_SAFE_INTEGER&&I?(m&&u.getAttribute("morphTarget"+x)!==m[P]&&u.setAttribute("morphTarget"+x,m[P]),d&&u.getAttribute("morphNormal"+x)!==d[P]&&u.setAttribute("morphNormal"+x,d[P]),a[x]=I,_+=I):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),d&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),a[x]=0)}const y=u.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:c}}function df(i,t,e,n){let a=new WeakMap;function r(c){const h=n.render.frame,u=c.geometry,l=t.get(c,u);if(a.get(l)!==h&&(t.update(l),a.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;a.get(f)!==h&&(f.update(),a.set(f,h))}return l}function s(){a=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:s}}class Lo extends Xe{constructor(t,e,n,a,r,s,o,c,h,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=Cn),n===void 0&&u===yi&&(n=Yn),super(null,a,r,s,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Io=new Xe,No=new Lo(1,1);No.compareFunction=vo;const Uo=new yo,Do=new Kl,Fo=new Ro,Da=[],Fa=[],Ba=new Float32Array(16),Oa=new Float32Array(9),za=new Float32Array(4);function Ti(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=Da[a];if(r===void 0&&(r=new Float32Array(a),Da[a]=r),t!==0){n.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sr(i,t){let e=Fa[t];e===void 0&&(e=new Int32Array(t),Fa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function pf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function _f(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;za.set(n),i.uniformMatrix2fv(this.addr,!1,za),Le(e,n)}}function xf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Oa.set(n),i.uniformMatrix3fv(this.addr,!1,Oa),Le(e,n)}}function yf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Ba.set(n),i.uniformMatrix4fv(this.addr,!1,Ba),Le(e,n)}}function Mf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function Tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Cf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);const r=this.type===i.SAMPLER_2D_SHADOW?No:Io;e.setTexture2D(t||r,a)}function Pf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||Do,a)}function Lf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||Fo,a)}function If(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||Uo,a)}function Nf(i){switch(i){case 5126:return pf;case 35664:return mf;case 35665:return vf;case 35666:return gf;case 35674:return _f;case 35675:return xf;case 35676:return yf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return Ef;case 35669:case 35673:return wf;case 5125:return Tf;case 36294:return Af;case 36295:return bf;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return If}}function Uf(i,t){i.uniform1fv(this.addr,t)}function Df(i,t){const e=Ti(t,this.size,2);i.uniform2fv(this.addr,e)}function Ff(i,t){const e=Ti(t,this.size,3);i.uniform3fv(this.addr,e)}function Bf(i,t){const e=Ti(t,this.size,4);i.uniform4fv(this.addr,e)}function Of(i,t){const e=Ti(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zf(i,t){const e=Ti(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vf(i,t){const e=Ti(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gf(i,t){i.uniform1iv(this.addr,t)}function Hf(i,t){i.uniform2iv(this.addr,t)}function Wf(i,t){i.uniform3iv(this.addr,t)}function kf(i,t){i.uniform4iv(this.addr,t)}function Xf(i,t){i.uniform1uiv(this.addr,t)}function qf(i,t){i.uniform2uiv(this.addr,t)}function Yf(i,t){i.uniform3uiv(this.addr,t)}function Zf(i,t){i.uniform4uiv(this.addr,t)}function Kf(i,t,e){const n=this.cache,a=t.length,r=Sr(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||Io,r[s])}function jf(i,t,e){const n=this.cache,a=t.length,r=Sr(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||Do,r[s])}function $f(i,t,e){const n=this.cache,a=t.length,r=Sr(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||Fo,r[s])}function Jf(i,t,e){const n=this.cache,a=t.length,r=Sr(e,a);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||Uo,r[s])}function Qf(i){switch(i){case 5126:return Uf;case 35664:return Df;case 35665:return Ff;case 35666:return Bf;case 35674:return Of;case 35675:return zf;case 35676:return Vf;case 5124:case 35670:return Gf;case 35667:case 35671:return Hf;case 35668:case 35672:return Wf;case 35669:case 35673:return kf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return Zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return jf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return Jf}}class td{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nf(e.type)}}class ed{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qf(e.type)}}class nd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],n)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function Va(i,t){i.seq.push(t),i.map[t.id]=t}function id(i,t,e){const n=i.name,a=n.length;for(ns.lastIndex=0;;){const r=ns.exec(n),s=ns.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&s+2===a){Va(e,h===void 0?new td(o,i,t):new ed(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new nd(o),Va(e,l)),e=l}}}class ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);id(r,s,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&n.push(s)}return n}}function Ga(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const rd=37297;let sd=0;function ad(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}function od(i){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(i);let n;switch(t===e?n="":t===pr&&e===dr?n="LinearDisplayP3ToLinearSRGB":t===dr&&e===pr&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case yr:return[n,"LinearTransferOETF"];case Ue:case xs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ha(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+ad(i.getShaderSource(t),s)}else return a}function ld(i,t){const e=od(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function cd(i,t){let e;switch(t){case _l:e="Linear";break;case xl:e="Reinhard";break;case yl:e="OptimizedCineon";break;case Ml:e="ACESFilmic";break;case El:e="AgX";break;case Sl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ud(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mi).join(`
`)}function hd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(mi).join(`
`)}function fd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function mi(i){return i!==""}function Wa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ka(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ps(i){return i.replace(pd,vd)}const md=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vd(i,t){let e=ie[t];if(e===void 0){const n=md.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ps(e)}const gd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(i){return i.replace(gd,_d)}function _d(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function qa(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xd(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===io?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ro?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function yd(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case xi:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Md(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Sd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case so:t="ENVMAP_BLENDING_MULTIPLY";break;case vl:t="ENVMAP_BLENDING_MIX";break;case gl:t="ENVMAP_BLENDING_ADD";break}return t}function Ed(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wd(i,t,e,n){const a=i.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const c=xd(e),h=yd(e),u=Md(e),l=Sd(e),f=Ed(e),p=e.isWebGL2?"":ud(e),v=hd(e),g=fd(r),m=a.createProgram();let d,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mi).join(`
`),d.length>0&&(d+=`
`),_=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mi).join(`
`),_.length>0&&(_+=`
`)):(d=[qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mi).join(`
`),_=[p,qa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?ie.tonemapping_pars_fragment:"",e.toneMapping!==In?cd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,ld("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mi).join(`
`)),s=ps(s),s=Wa(s,e),s=ka(s,e),o=ps(o),o=Wa(o,e),o=ka(o,e),s=Xa(s),o=Xa(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+d+s,A=y+_+o,P=Ga(a,a.VERTEX_SHADER,x),I=Ga(a,a.FRAGMENT_SHADER,A);a.attachShader(m,P),a.attachShader(m,I),e.index0AttributeName!==void 0?a.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function V(O){if(i.debug.checkShaderErrors){const q=a.getProgramInfoLog(m).trim(),D=a.getShaderInfoLog(P).trim(),z=a.getShaderInfoLog(I).trim();let J=!0,F=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,m,P,I);else{const U=Ha(a,P,"vertex"),Z=Ha(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+U+`
`+Z)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(D===""||z==="")&&(F=!1);F&&(O.diagnostics={runnable:J,programLog:q,vertexShader:{log:D,prefix:d},fragmentShader:{log:z,prefix:_}})}a.deleteShader(P),a.deleteShader(I),E=new ur(a,m),S=dd(a,m)}let E;this.getUniforms=function(){return E===void 0&&V(this),E};let S;this.getAttributes=function(){return S===void 0&&V(this),S};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(m,rd)),L},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sd++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=I,this}let Td=0;class Ad{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bd(t),e.set(t,n)),n}}class bd{constructor(t){this.id=Td++,this.code=t,this.usedTimes=0}}function Rd(i,t,e,n,a,r,s){const o=new Mo,c=new Ad,h=[],u=a.isWebGL2,l=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function m(E,S,L,O,q){const D=O.fog,z=q.geometry,J=E.isMeshStandardMaterial?O.environment:null,F=(E.isMeshStandardMaterial?e:t).get(E.envMap||J),U=F&&F.mapping===xr?F.image.height:null,Z=v[E.type];E.precision!==null&&(p=a.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const k=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,N=k!==void 0?k.length:0;let H=0;z.morphAttributes.position!==void 0&&(H=1),z.morphAttributes.normal!==void 0&&(H=2),z.morphAttributes.color!==void 0&&(H=3);let T,b,R,X;if(Z){const ot=hn[Z];T=ot.vertexShader,b=ot.fragmentShader}else T=E.vertexShader,b=E.fragmentShader,c.update(E),R=c.getVertexShaderID(E),X=c.getFragmentShaderID(E);const nt=i.getRenderTarget(),it=q.isInstancedMesh===!0,K=q.isBatchedMesh===!0,tt=!!E.map,ct=!!E.matcap,Y=!!F,Ct=!!E.aoMap,ht=!!E.lightMap,st=!!E.bumpMap,at=!!E.normalMap,kt=!!E.displacementMap,Tt=!!E.emissiveMap,C=!!E.metalnessMap,M=!!E.roughnessMap,Q=E.anisotropy>0,ft=E.clearcoat>0,ut=E.iridescence>0,pt=E.sheen>0,Et=E.transmission>0,_t=Q&&!!E.anisotropyMap,xt=ft&&!!E.clearcoatMap,Vt=ft&&!!E.clearcoatNormalMap,Zt=ft&&!!E.clearcoatRoughnessMap,gt=ut&&!!E.iridescenceMap,se=ut&&!!E.iridescenceThicknessMap,te=pt&&!!E.sheenColorMap,qt=pt&&!!E.sheenRoughnessMap,Gt=!!E.specularMap,Ot=!!E.specularColorMap,Qt=!!E.specularIntensityMap,ne=Et&&!!E.transmissionMap,ue=Et&&!!E.thicknessMap,$t=!!E.gradientMap,wt=!!E.alphaMap,W=E.alphaTest>0,At=!!E.alphaHash,Lt=!!E.extensions,Kt=!!z.attributes.uv1,Xt=!!z.attributes.uv2,he=!!z.attributes.uv3;let fe=In;return E.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(fe=i.toneMapping),{isWebGL2:u,shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:T,fragmentShader:b,defines:E.defines,customVertexShaderID:R,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:K,instancing:it,instancingColor:it&&q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:En,map:tt,matcap:ct,envMap:Y,envMapMode:Y&&F.mapping,envMapCubeUVHeight:U,aoMap:Ct,lightMap:ht,bumpMap:st,normalMap:at,displacementMap:f&&kt,emissiveMap:Tt,normalMapObjectSpace:at&&E.normalMapType===Dl,normalMapTangentSpace:at&&E.normalMapType===_s,metalnessMap:C,roughnessMap:M,anisotropy:Q,anisotropyMap:_t,clearcoat:ft,clearcoatMap:xt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Zt,iridescence:ut,iridescenceMap:gt,iridescenceThicknessMap:se,sheen:pt,sheenColorMap:te,sheenRoughnessMap:qt,specularMap:Gt,specularColorMap:Ot,specularIntensityMap:Qt,transmission:Et,transmissionMap:ne,thicknessMap:ue,gradientMap:$t,opaque:E.transparent===!1&&E.blending===vi,alphaMap:wt,alphaTest:W,alphaHash:At,combine:E.combine,mapUv:tt&&g(E.map.channel),aoMapUv:Ct&&g(E.aoMap.channel),lightMapUv:ht&&g(E.lightMap.channel),bumpMapUv:st&&g(E.bumpMap.channel),normalMapUv:at&&g(E.normalMap.channel),displacementMapUv:kt&&g(E.displacementMap.channel),emissiveMapUv:Tt&&g(E.emissiveMap.channel),metalnessMapUv:C&&g(E.metalnessMap.channel),roughnessMapUv:M&&g(E.roughnessMap.channel),anisotropyMapUv:_t&&g(E.anisotropyMap.channel),clearcoatMapUv:xt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:qt&&g(E.sheenRoughnessMap.channel),specularMapUv:Gt&&g(E.specularMap.channel),specularColorMapUv:Ot&&g(E.specularColorMap.channel),specularIntensityMapUv:Qt&&g(E.specularIntensityMap.channel),transmissionMapUv:ne&&g(E.transmissionMap.channel),thicknessMapUv:ue&&g(E.thicknessMap.channel),alphaMapUv:wt&&g(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(at||Q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Kt,vertexUv2s:Xt,vertexUv3s:he,pointsUvs:q.isPoints===!0&&!!z.attributes.uv&&(tt||wt),fog:!!D,useFog:E.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:tt&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===_e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mn,flipSided:E.side===Ge,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Lt&&E.extensions.derivatives===!0,extensionFragDepth:Lt&&E.extensions.fragDepth===!0,extensionDrawBuffers:Lt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Lt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Lt&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)S.push(L),S.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(_(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function x(E){const S=v[E.type];let L;if(S){const O=hn[S];L=cc.clone(O.uniforms)}else L=E.uniforms;return L}function A(E,S){let L;for(let O=0,q=h.length;O<q;O++){const D=h[O];if(D.cacheKey===S){L=D,++L.usedTimes;break}}return L===void 0&&(L=new wd(i,S,E,r),h.push(L)),L}function P(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function I(E){c.remove(E)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:P,releaseShaderCache:I,programs:h,dispose:V}}function Cd(){let i=new WeakMap;function t(r){let s=i.get(r);return s===void 0&&(s={},i.set(r,s)),s}function e(r){i.delete(r)}function n(r,s,o){i.get(r)[s]=o}function a(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:a}}function Pd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ya(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Za(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function s(l,f,p,v,g,m){let d=i[t];return d===void 0?(d={id:l.id,object:l,geometry:f,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=d):(d.id=l.id,d.object=l,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=l.renderOrder,d.z=g,d.group=m),t++,d}function o(l,f,p,v,g,m){const d=s(l,f,p,v,g,m);p.transmission>0?n.push(d):p.transparent===!0?a.push(d):e.push(d)}function c(l,f,p,v,g,m){const d=s(l,f,p,v,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?a.unshift(d):e.unshift(d)}function h(l,f){e.length>1&&e.sort(l||Pd),n.length>1&&n.sort(f||Ya),a.length>1&&a.sort(f||Ya)}function u(){for(let l=t,f=i.length;l<f;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:u,sort:h}}function Ld(){let i=new WeakMap;function t(n,a){const r=i.get(n);let s;return r===void 0?(s=new Za,i.set(n,[s])):a>=r.length?(s=new Za,r.push(s)):s=r[a],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function Id(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new me};break;case"SpotLight":e={position:new et,direction:new et,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new et,halfWidth:new et,halfHeight:new et};break}return i[t.id]=e,e}}}function Nd(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ud=0;function Dd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fd(i,t){const e=new Id,n=Nd(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new et);const r=new et,s=new Ce,o=new Ce;function c(u,l){let f=0,p=0,v=0;for(let O=0;O<9;O++)a.probe[O].set(0,0,0);let g=0,m=0,d=0,_=0,y=0,x=0,A=0,P=0,I=0,V=0,E=0;u.sort(Dd);const S=l===!0?Math.PI:1;for(let O=0,q=u.length;O<q;O++){const D=u[O],z=D.color,J=D.intensity,F=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=z.r*J*S,p+=z.g*J*S,v+=z.b*J*S;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)a.probe[Z].addScaledVector(D.sh.coefficients[Z],J);E++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const k=D.shadow,N=n.get(D);N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,a.directionalShadow[g]=N,a.directionalShadowMap[g]=U,a.directionalShadowMatrix[g]=D.shadow.matrix,x++}a.directional[g]=Z,g++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(z).multiplyScalar(J*S),Z.distance=F,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,a.spot[d]=Z;const k=D.shadow;if(D.map&&(a.spotLightMap[I]=D.map,I++,k.updateMatrices(D),D.castShadow&&V++),a.spotLightMatrix[d]=k.matrix,D.castShadow){const N=n.get(D);N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,a.spotShadow[d]=N,a.spotShadowMap[d]=U,P++}d++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(z).multiplyScalar(J),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),a.rectArea[_]=Z,_++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*S),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const k=D.shadow,N=n.get(D);N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,N.shadowCameraNear=k.camera.near,N.shadowCameraFar=k.camera.far,a.pointShadow[m]=N,a.pointShadowMap[m]=U,a.pointShadowMatrix[m]=D.shadow.matrix,A++}a.point[m]=Z,m++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(J*S),Z.groundColor.copy(D.groundColor).multiplyScalar(J*S),a.hemi[y]=Z,y++}}_>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Dt.LTC_FLOAT_1,a.rectAreaLTC2=Dt.LTC_FLOAT_2):(a.rectAreaLTC1=Dt.LTC_HALF_1,a.rectAreaLTC2=Dt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Dt.LTC_FLOAT_1,a.rectAreaLTC2=Dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Dt.LTC_HALF_1,a.rectAreaLTC2=Dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=p,a.ambient[2]=v;const L=a.hash;(L.directionalLength!==g||L.pointLength!==m||L.spotLength!==d||L.rectAreaLength!==_||L.hemiLength!==y||L.numDirectionalShadows!==x||L.numPointShadows!==A||L.numSpotShadows!==P||L.numSpotMaps!==I||L.numLightProbes!==E)&&(a.directional.length=g,a.spot.length=d,a.rectArea.length=_,a.point.length=m,a.hemi.length=y,a.directionalShadow.length=x,a.directionalShadowMap.length=x,a.pointShadow.length=A,a.pointShadowMap.length=A,a.spotShadow.length=P,a.spotShadowMap.length=P,a.directionalShadowMatrix.length=x,a.pointShadowMatrix.length=A,a.spotLightMatrix.length=P+I-V,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=V,a.numLightProbes=E,L.directionalLength=g,L.pointLength=m,L.spotLength=d,L.rectAreaLength=_,L.hemiLength=y,L.numDirectionalShadows=x,L.numPointShadows=A,L.numSpotShadows=P,L.numSpotMaps=I,L.numLightProbes=E,a.version=Ud++)}function h(u,l){let f=0,p=0,v=0,g=0,m=0;const d=l.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const x=u[_];if(x.isDirectionalLight){const A=a.directional[f];A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),f++}else if(x.isSpotLight){const A=a.spot[v];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),v++}else if(x.isRectAreaLight){const A=a.rectArea[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(d),o.identity(),s.copy(x.matrixWorld),s.premultiply(d),o.extractRotation(s),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const A=a.point[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const A=a.hemi[m];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:c,setupView:h,state:a}}function Ka(i,t){const e=new Fd(i,t),n=[],a=[];function r(){n.length=0,a.length=0}function s(l){n.push(l)}function o(l){a.push(l)}function c(l){e.setup(n,l)}function h(l){e.setupView(n,l)}return{init:r,state:{lightsArray:n,shadowsArray:a,lights:e},setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o}}function Bd(i,t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new Ka(i,t),e.set(r,[c])):s>=o.length?(c=new Ka(i,t),o.push(c)):c=o[s],c}function a(){e=new WeakMap}return{get:n,dispose:a}}class Od extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zd extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hd(i,t,e){let n=new Ms;const a=new ve,r=new ve,s=new De,o=new Od({depthPacking:Ul}),c=new zd,h={},u=e.maxTextureSize,l={[Un]:Ge,[Ge]:Un,[Mn]:Mn},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Vd,fragmentShader:Gd}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Bn;v.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new cn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let d=this.type;this.render=function(P,I,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Ln),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const q=d!==yn&&this.type===yn,D=d===yn&&this.type!==yn;for(let z=0,J=P.length;z<J;z++){const F=P[z],U=F.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;a.copy(U.mapSize);const Z=U.getFrameExtents();if(a.multiply(Z),r.copy(U.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/Z.x),a.x=r.x*Z.x,U.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/Z.y),a.y=r.y*Z.y,U.mapSize.y=r.y)),U.map===null||q===!0||D===!0){const N=this.type!==yn?{minFilter:Ve,magFilter:Ve}:{};U.map!==null&&U.map.dispose(),U.map=new jn(a.x,a.y,N),U.map.texture.name=F.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const k=U.getViewportCount();for(let N=0;N<k;N++){const H=U.getViewport(N);s.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),O.viewport(s),U.updateMatrices(F,N),n=U.getFrustum(),x(I,V,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===yn&&_(U,V),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,L)};function _(P,I){const V=t.update(g);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new jn(a.x,a.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,V,f,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,V,p,g,null)}function y(P,I,V,E){let S=null;const L=V.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)S=L;else if(S=V.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=S.uuid,q=I.uuid;let D=h[O];D===void 0&&(D={},h[O]=D);let z=D[q];z===void 0&&(z=S.clone(),D[q]=z,I.addEventListener("dispose",A)),S=z}if(S.visible=I.visible,S.wireframe=I.wireframe,E===yn?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:l[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,V.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=i.properties.get(S);O.light=V}return S}function x(P,I,V,E,S){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===yn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,P.matrixWorld);const q=t.update(P),D=P.material;if(Array.isArray(D)){const z=q.groups;for(let J=0,F=z.length;J<F;J++){const U=z[J],Z=D[U.materialIndex];if(Z&&Z.visible){const k=y(P,Z,E,S);P.onBeforeShadow(i,P,I,V,q,k,U),i.renderBufferDirect(V,null,q,k,P,U),P.onAfterShadow(i,P,I,V,q,k,U)}}}else if(D.visible){const z=y(P,D,E,S);P.onBeforeShadow(i,P,I,V,q,z,null),i.renderBufferDirect(V,null,q,z,P,null),P.onAfterShadow(i,P,I,V,q,z,null)}}const O=P.children;for(let q=0,D=O.length;q<D;q++)x(O[q],I,V,E,S)}function A(P){P.target.removeEventListener("dispose",A);for(const V in h){const E=h[V],S=P.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function Wd(i,t,e){const n=e.isWebGL2;function a(){let W=!1;const At=new De;let Lt=null;const Kt=new De(0,0,0,0);return{setMask:function(Xt){Lt!==Xt&&!W&&(i.colorMask(Xt,Xt,Xt,Xt),Lt=Xt)},setLocked:function(Xt){W=Xt},setClear:function(Xt,he,fe,ae,ot){ot===!0&&(Xt*=ae,he*=ae,fe*=ae),At.set(Xt,he,fe,ae),Kt.equals(At)===!1&&(i.clearColor(Xt,he,fe,ae),Kt.copy(At))},reset:function(){W=!1,Lt=null,Kt.set(-1,0,0,0)}}}function r(){let W=!1,At=null,Lt=null,Kt=null;return{setTest:function(Xt){Xt?K(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(Xt){At!==Xt&&!W&&(i.depthMask(Xt),At=Xt)},setFunc:function(Xt){if(Lt!==Xt){switch(Xt){case cl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case pl:i.depthFunc(i.GREATER);break;case ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=Xt}},setLocked:function(Xt){W=Xt},setClear:function(Xt){Kt!==Xt&&(i.clearDepth(Xt),Kt=Xt)},reset:function(){W=!1,At=null,Lt=null,Kt=null}}}function s(){let W=!1,At=null,Lt=null,Kt=null,Xt=null,he=null,fe=null,ae=null,ot=null;return{setTest:function(lt){W||(lt?K(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(lt){At!==lt&&!W&&(i.stencilMask(lt),At=lt)},setFunc:function(lt,dt,mt){(Lt!==lt||Kt!==dt||Xt!==mt)&&(i.stencilFunc(lt,dt,mt),Lt=lt,Kt=dt,Xt=mt)},setOp:function(lt,dt,mt){(he!==lt||fe!==dt||ae!==mt)&&(i.stencilOp(lt,dt,mt),he=lt,fe=dt,ae=mt)},setLocked:function(lt){W=lt},setClear:function(lt){ot!==lt&&(i.clearStencil(lt),ot=lt)},reset:function(){W=!1,At=null,Lt=null,Kt=null,Xt=null,he=null,fe=null,ae=null,ot=null}}}const o=new a,c=new r,h=new s,u=new WeakMap,l=new WeakMap;let f={},p={},v=new WeakMap,g=[],m=null,d=!1,_=null,y=null,x=null,A=null,P=null,I=null,V=null,E=new me(0,0,0),S=0,L=!1,O=null,q=null,D=null,z=null,J=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Z=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=Z>=2);let N=null,H={};const T=i.getParameter(i.SCISSOR_BOX),b=i.getParameter(i.VIEWPORT),R=new De().fromArray(T),X=new De().fromArray(b);function nt(W,At,Lt,Kt){const Xt=new Uint8Array(4),he=i.createTexture();i.bindTexture(W,he),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<Lt;fe++)n&&(W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY)?i.texImage3D(At,0,i.RGBA,1,1,Kt,0,i.RGBA,i.UNSIGNED_BYTE,Xt):i.texImage2D(At+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xt);return he}const it={};it[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(it[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),K(i.DEPTH_TEST),c.setFunc(hr),Tt(!1),C(Ps),K(i.CULL_FACE),at(Ln);function K(W){f[W]!==!0&&(i.enable(W),f[W]=!0)}function tt(W){f[W]!==!1&&(i.disable(W),f[W]=!1)}function ct(W,At){return p[W]!==At?(i.bindFramebuffer(W,At),p[W]=At,n&&(W===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=At),W===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=At)),!0):!1}function Y(W,At){let Lt=g,Kt=!1;if(W)if(Lt=v.get(At),Lt===void 0&&(Lt=[],v.set(At,Lt)),W.isWebGLMultipleRenderTargets){const Xt=W.texture;if(Lt.length!==Xt.length||Lt[0]!==i.COLOR_ATTACHMENT0){for(let he=0,fe=Xt.length;he<fe;he++)Lt[he]=i.COLOR_ATTACHMENT0+he;Lt.length=Xt.length,Kt=!0}}else Lt[0]!==i.COLOR_ATTACHMENT0&&(Lt[0]=i.COLOR_ATTACHMENT0,Kt=!0);else Lt[0]!==i.BACK&&(Lt[0]=i.BACK,Kt=!0);Kt&&(e.isWebGL2?i.drawBuffers(Lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Lt))}function Ct(W){return m!==W?(i.useProgram(W),m=W,!0):!1}const ht={[Xn]:i.FUNC_ADD,[Zo]:i.FUNC_SUBTRACT,[Ko]:i.FUNC_REVERSE_SUBTRACT};if(n)ht[Us]=i.MIN,ht[Ds]=i.MAX;else{const W=t.get("EXT_blend_minmax");W!==null&&(ht[Us]=W.MIN_EXT,ht[Ds]=W.MAX_EXT)}const st={[jo]:i.ZERO,[$o]:i.ONE,[Jo]:i.SRC_COLOR,[ss]:i.SRC_ALPHA,[rl]:i.SRC_ALPHA_SATURATE,[nl]:i.DST_COLOR,[tl]:i.DST_ALPHA,[Qo]:i.ONE_MINUS_SRC_COLOR,[as]:i.ONE_MINUS_SRC_ALPHA,[il]:i.ONE_MINUS_DST_COLOR,[el]:i.ONE_MINUS_DST_ALPHA,[sl]:i.CONSTANT_COLOR,[al]:i.ONE_MINUS_CONSTANT_COLOR,[ol]:i.CONSTANT_ALPHA,[ll]:i.ONE_MINUS_CONSTANT_ALPHA};function at(W,At,Lt,Kt,Xt,he,fe,ae,ot,lt){if(W===Ln){d===!0&&(tt(i.BLEND),d=!1);return}if(d===!1&&(K(i.BLEND),d=!0),W!==Yo){if(W!==_||lt!==L){if((y!==Xn||P!==Xn)&&(i.blendEquation(i.FUNC_ADD),y=Xn,P=Xn),lt)switch(W){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ls:i.blendFunc(i.ONE,i.ONE);break;case Is:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ns:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ls:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Is:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ns:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,A=null,I=null,V=null,E.set(0,0,0),S=0,_=W,L=lt}return}Xt=Xt||At,he=he||Lt,fe=fe||Kt,(At!==y||Xt!==P)&&(i.blendEquationSeparate(ht[At],ht[Xt]),y=At,P=Xt),(Lt!==x||Kt!==A||he!==I||fe!==V)&&(i.blendFuncSeparate(st[Lt],st[Kt],st[he],st[fe]),x=Lt,A=Kt,I=he,V=fe),(ae.equals(E)===!1||ot!==S)&&(i.blendColor(ae.r,ae.g,ae.b,ot),E.copy(ae),S=ot),_=W,L=!1}function kt(W,At){W.side===Mn?tt(i.CULL_FACE):K(i.CULL_FACE);let Lt=W.side===Ge;At&&(Lt=!Lt),Tt(Lt),W.blending===vi&&W.transparent===!1?at(Ln):at(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),o.setMask(W.colorWrite);const Kt=W.stencilWrite;h.setTest(Kt),Kt&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Q(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(W){O!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),O=W)}function C(W){W!==Xo?(K(i.CULL_FACE),W!==q&&(W===Ps?i.cullFace(i.BACK):W===qo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),q=W}function M(W){W!==D&&(U&&i.lineWidth(W),D=W)}function Q(W,At,Lt){W?(K(i.POLYGON_OFFSET_FILL),(z!==At||J!==Lt)&&(i.polygonOffset(At,Lt),z=At,J=Lt)):tt(i.POLYGON_OFFSET_FILL)}function ft(W){W?K(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function ut(W){W===void 0&&(W=i.TEXTURE0+F-1),N!==W&&(i.activeTexture(W),N=W)}function pt(W,At,Lt){Lt===void 0&&(N===null?Lt=i.TEXTURE0+F-1:Lt=N);let Kt=H[Lt];Kt===void 0&&(Kt={type:void 0,texture:void 0},H[Lt]=Kt),(Kt.type!==W||Kt.texture!==At)&&(N!==Lt&&(i.activeTexture(Lt),N=Lt),i.bindTexture(W,At||it[W]),Kt.type=W,Kt.texture=At)}function Et(){const W=H[N];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function _t(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Vt(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qt(W){R.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),R.copy(W))}function ne(W){X.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),X.copy(W))}function ue(W,At){let Lt=l.get(At);Lt===void 0&&(Lt=new WeakMap,l.set(At,Lt));let Kt=Lt.get(W);Kt===void 0&&(Kt=i.getUniformBlockIndex(At,W.name),Lt.set(W,Kt))}function $t(W,At){const Kt=l.get(At).get(W);u.get(At)!==Kt&&(i.uniformBlockBinding(At,Kt,W.__bindingPointIndex),u.set(At,Kt))}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},N=null,H={},p={},v=new WeakMap,g=[],m=null,d=!1,_=null,y=null,x=null,A=null,P=null,I=null,V=null,E=new me(0,0,0),S=0,L=!1,O=null,q=null,D=null,z=null,J=null,R.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:K,disable:tt,bindFramebuffer:ct,drawBuffers:Y,useProgram:Ct,setBlending:at,setMaterial:kt,setFlipSided:Tt,setCullFace:C,setLineWidth:M,setPolygonOffset:Q,setScissorTest:ft,activeTexture:ut,bindTexture:pt,unbindTexture:Et,compressedTexImage2D:_t,compressedTexImage3D:xt,texImage2D:Gt,texImage3D:Ot,updateUBOMapping:ue,uniformBlockBinding:$t,texStorage2D:te,texStorage3D:qt,texSubImage2D:Vt,texSubImage3D:Zt,compressedTexSubImage2D:gt,compressedTexSubImage3D:se,scissor:Qt,viewport:ne,reset:wt}}function kd(i,t,e,n,a,r,s){const o=a.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let l;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return p?new OffscreenCanvas(C,M):Di("canvas")}function g(C,M,Q,ft){let ut=1;if((C.width>ft||C.height>ft)&&(ut=ft/Math.max(C.width,C.height)),ut<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const pt=M?ds:Math.floor,Et=pt(ut*C.width),_t=pt(ut*C.height);l===void 0&&(l=v(Et,_t));const xt=Q?v(Et,_t):l;return xt.width=Et,xt.height=_t,xt.getContext("2d").drawImage(C,0,0,Et,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Et+"x"+_t+")."),xt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return ha(C.width)&&ha(C.height)}function d(C){return o?!1:C.wrapS!==on||C.wrapT!==on||C.minFilter!==Ve&&C.minFilter!==$e}function _(C,M){return C.generateMipmaps&&M&&C.minFilter!==Ve&&C.minFilter!==$e}function y(C){i.generateMipmap(C)}function x(C,M,Q,ft,ut=!1){if(o===!1)return M;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pt=M;if(M===i.RED&&(Q===i.FLOAT&&(pt=i.R32F),Q===i.HALF_FLOAT&&(pt=i.R16F),Q===i.UNSIGNED_BYTE&&(pt=i.R8)),M===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(pt=i.R8UI),Q===i.UNSIGNED_SHORT&&(pt=i.R16UI),Q===i.UNSIGNED_INT&&(pt=i.R32UI),Q===i.BYTE&&(pt=i.R8I),Q===i.SHORT&&(pt=i.R16I),Q===i.INT&&(pt=i.R32I)),M===i.RG&&(Q===i.FLOAT&&(pt=i.RG32F),Q===i.HALF_FLOAT&&(pt=i.RG16F),Q===i.UNSIGNED_BYTE&&(pt=i.RG8)),M===i.RGBA){const Et=ut?fr:ge.getTransfer(ft);Q===i.FLOAT&&(pt=i.RGBA32F),Q===i.HALF_FLOAT&&(pt=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(pt=Et===_e?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function A(C,M,Q){return _(C,Q)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==$e?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){return C===Ve||C===Fs||C===br?i.NEAREST:i.LINEAR}function I(C){const M=C.target;M.removeEventListener("dispose",I),E(M),M.isVideoTexture&&u.delete(M)}function V(C){const M=C.target;M.removeEventListener("dispose",V),L(M)}function E(C){const M=n.get(C);if(M.__webglInit===void 0)return;const Q=C.source,ft=f.get(Q);if(ft){const ut=ft[M.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&S(C),Object.keys(ft).length===0&&f.delete(Q)}n.remove(C)}function S(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const Q=C.source,ft=f.get(Q);delete ft[M.__cacheKey],s.memory.textures--}function L(C){const M=C.texture,Q=n.get(C),ft=n.get(M);if(ft.__webglTexture!==void 0&&(i.deleteTexture(ft.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(Q.__webglFramebuffer[ut]))for(let pt=0;pt<Q.__webglFramebuffer[ut].length;pt++)i.deleteFramebuffer(Q.__webglFramebuffer[ut][pt]);else i.deleteFramebuffer(Q.__webglFramebuffer[ut]);Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer[ut])}else{if(Array.isArray(Q.__webglFramebuffer))for(let ut=0;ut<Q.__webglFramebuffer.length;ut++)i.deleteFramebuffer(Q.__webglFramebuffer[ut]);else i.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let ut=0;ut<Q.__webglColorRenderbuffer.length;ut++)Q.__webglColorRenderbuffer[ut]&&i.deleteRenderbuffer(Q.__webglColorRenderbuffer[ut]);Q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ut=0,pt=M.length;ut<pt;ut++){const Et=n.get(M[ut]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),s.memory.textures--),n.remove(M[ut])}n.remove(M),n.remove(C)}let O=0;function q(){O=0}function D(){const C=O;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),O+=1,C}function z(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function J(C,M){const Q=n.get(C);if(C.isVideoTexture&&kt(C),C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){const ft=C.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(Q,C,M);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+M)}function F(C,M){const Q=n.get(C);if(C.version>0&&Q.__version!==C.version){R(Q,C,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+M)}function U(C,M){const Q=n.get(C);if(C.version>0&&Q.__version!==C.version){R(Q,C,M);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+M)}function Z(C,M){const Q=n.get(C);if(C.version>0&&Q.__version!==C.version){X(Q,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+M)}const k={[cs]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[us]:i.MIRRORED_REPEAT},N={[Ve]:i.NEAREST,[Fs]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[wl]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},H={[Fl]:i.NEVER,[Hl]:i.ALWAYS,[Bl]:i.LESS,[vo]:i.LEQUAL,[Ol]:i.EQUAL,[Gl]:i.GEQUAL,[zl]:i.GREATER,[Vl]:i.NOTEQUAL};function T(C,M,Q){if(Q?(i.texParameteri(C,i.TEXTURE_WRAP_S,k[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,k[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,k[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,N[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,N[M.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==on||M.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,P(M.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,P(M.minFilter)),M.minFilter!==Ve&&M.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,H[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ft=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ve||M.minFilter!==br&&M.minFilter!==Ni||M.type===Pn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ui&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(C,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function b(C,M){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));const ft=M.source;let ut=f.get(ft);ut===void 0&&(ut={},f.set(ft,ut));const pt=z(M);if(pt!==C.__cacheKey){ut[pt]===void 0&&(ut[pt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,Q=!0),ut[pt].usedTimes++;const Et=ut[C.__cacheKey];Et!==void 0&&(ut[C.__cacheKey].usedTimes--,Et.usedTimes===0&&S(M)),C.__cacheKey=pt,C.__webglTexture=ut[pt].texture}return Q}function R(C,M,Q){let ft=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ft=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ft=i.TEXTURE_3D);const ut=b(C,M),pt=M.source;e.bindTexture(ft,C.__webglTexture,i.TEXTURE0+Q);const Et=n.get(pt);if(pt.version!==Et.__version||ut===!0){e.activeTexture(i.TEXTURE0+Q);const _t=ge.getPrimaries(ge.workingColorSpace),xt=M.colorSpace===Qe?null:ge.getPrimaries(M.colorSpace),Vt=M.colorSpace===Qe||_t===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const Zt=d(M)&&m(M.image)===!1;let gt=g(M.image,Zt,!1,a.maxTextureSize);gt=Tt(M,gt);const se=m(gt)||o,te=r.convert(M.format,M.colorSpace);let qt=r.convert(M.type),Gt=x(M.internalFormat,te,qt,M.colorSpace,M.isVideoTexture);T(ft,M,se);let Ot;const Qt=M.mipmaps,ne=o&&M.isVideoTexture!==!0&&Gt!==po,ue=Et.__version===void 0||ut===!0,$t=A(M,gt,se);if(M.isDepthTexture)Gt=i.DEPTH_COMPONENT,o?M.type===Pn?Gt=i.DEPTH_COMPONENT32F:M.type===Cn?Gt=i.DEPTH_COMPONENT24:M.type===Yn?Gt=i.DEPTH24_STENCIL8:Gt=i.DEPTH_COMPONENT16:M.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Zn&&Gt===i.DEPTH_COMPONENT&&M.type!==gs&&M.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Cn,qt=r.convert(M.type)),M.format===yi&&Gt===i.DEPTH_COMPONENT&&(Gt=i.DEPTH_STENCIL,M.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Yn,qt=r.convert(M.type))),ue&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Gt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,gt.width,gt.height,0,te,qt,null));else if(M.isDataTexture)if(Qt.length>0&&se){ne&&ue&&e.texStorage2D(i.TEXTURE_2D,$t,Gt,Qt[0].width,Qt[0].height);for(let wt=0,W=Qt.length;wt<W;wt++)Ot=Qt[wt],ne?e.texSubImage2D(i.TEXTURE_2D,wt,0,0,Ot.width,Ot.height,te,qt,Ot.data):e.texImage2D(i.TEXTURE_2D,wt,Gt,Ot.width,Ot.height,0,te,qt,Ot.data);M.generateMipmaps=!1}else ne?(ue&&e.texStorage2D(i.TEXTURE_2D,$t,Gt,gt.width,gt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,te,qt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,gt.width,gt.height,0,te,qt,gt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ne&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,Gt,Qt[0].width,Qt[0].height,gt.depth);for(let wt=0,W=Qt.length;wt<W;wt++)Ot=Qt[wt],M.format!==ln?te!==null?ne?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,Ot.width,Ot.height,gt.depth,te,Ot.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,wt,Gt,Ot.width,Ot.height,gt.depth,0,Ot.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,Ot.width,Ot.height,gt.depth,te,qt,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,wt,Gt,Ot.width,Ot.height,gt.depth,0,te,qt,Ot.data)}else{ne&&ue&&e.texStorage2D(i.TEXTURE_2D,$t,Gt,Qt[0].width,Qt[0].height);for(let wt=0,W=Qt.length;wt<W;wt++)Ot=Qt[wt],M.format!==ln?te!==null?ne?e.compressedTexSubImage2D(i.TEXTURE_2D,wt,0,0,Ot.width,Ot.height,te,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,wt,Gt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?e.texSubImage2D(i.TEXTURE_2D,wt,0,0,Ot.width,Ot.height,te,qt,Ot.data):e.texImage2D(i.TEXTURE_2D,wt,Gt,Ot.width,Ot.height,0,te,qt,Ot.data)}else if(M.isDataArrayTexture)ne?(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,Gt,gt.width,gt.height,gt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,te,qt,gt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,gt.width,gt.height,gt.depth,0,te,qt,gt.data);else if(M.isData3DTexture)ne?(ue&&e.texStorage3D(i.TEXTURE_3D,$t,Gt,gt.width,gt.height,gt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,te,qt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,gt.width,gt.height,gt.depth,0,te,qt,gt.data);else if(M.isFramebufferTexture){if(ue)if(ne)e.texStorage2D(i.TEXTURE_2D,$t,Gt,gt.width,gt.height);else{let wt=gt.width,W=gt.height;for(let At=0;At<$t;At++)e.texImage2D(i.TEXTURE_2D,At,Gt,wt,W,0,te,qt,null),wt>>=1,W>>=1}}else if(Qt.length>0&&se){ne&&ue&&e.texStorage2D(i.TEXTURE_2D,$t,Gt,Qt[0].width,Qt[0].height);for(let wt=0,W=Qt.length;wt<W;wt++)Ot=Qt[wt],ne?e.texSubImage2D(i.TEXTURE_2D,wt,0,0,te,qt,Ot):e.texImage2D(i.TEXTURE_2D,wt,Gt,te,qt,Ot);M.generateMipmaps=!1}else ne?(ue&&e.texStorage2D(i.TEXTURE_2D,$t,Gt,gt.width,gt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,te,qt,gt)):e.texImage2D(i.TEXTURE_2D,0,Gt,te,qt,gt);_(M,se)&&y(ft),Et.__version=pt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function X(C,M,Q){if(M.image.length!==6)return;const ft=b(C,M),ut=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Q);const pt=n.get(ut);if(ut.version!==pt.__version||ft===!0){e.activeTexture(i.TEXTURE0+Q);const Et=ge.getPrimaries(ge.workingColorSpace),_t=M.colorSpace===Qe?null:ge.getPrimaries(M.colorSpace),xt=M.colorSpace===Qe||Et===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,Zt=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let wt=0;wt<6;wt++)!Vt&&!Zt?gt[wt]=g(M.image[wt],!1,!0,a.maxCubemapSize):gt[wt]=Zt?M.image[wt].image:M.image[wt],gt[wt]=Tt(M,gt[wt]);const se=gt[0],te=m(se)||o,qt=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type),Ot=x(M.internalFormat,qt,Gt,M.colorSpace),Qt=o&&M.isVideoTexture!==!0,ne=pt.__version===void 0||ft===!0;let ue=A(M,se,te);T(i.TEXTURE_CUBE_MAP,M,te);let $t;if(Vt){Qt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ot,se.width,se.height);for(let wt=0;wt<6;wt++){$t=gt[wt].mipmaps;for(let W=0;W<$t.length;W++){const At=$t[W];M.format!==ln?qt!==null?Qt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,W,0,0,At.width,At.height,qt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,W,Ot,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,W,0,0,At.width,At.height,qt,Gt,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,W,Ot,At.width,At.height,0,qt,Gt,At.data)}}}else{$t=M.mipmaps,Qt&&ne&&($t.length>0&&ue++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ot,gt[0].width,gt[0].height));for(let wt=0;wt<6;wt++)if(Zt){Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,gt[wt].width,gt[wt].height,qt,Gt,gt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ot,gt[wt].width,gt[wt].height,0,qt,Gt,gt[wt].data);for(let W=0;W<$t.length;W++){const Lt=$t[W].image[wt].image;Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,W+1,0,0,Lt.width,Lt.height,qt,Gt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,W+1,Ot,Lt.width,Lt.height,0,qt,Gt,Lt.data)}}else{Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,qt,Gt,gt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ot,qt,Gt,gt[wt]);for(let W=0;W<$t.length;W++){const At=$t[W];Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,W+1,0,0,qt,Gt,At.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,W+1,Ot,qt,Gt,At.image[wt])}}}_(M,te)&&y(i.TEXTURE_CUBE_MAP),pt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function nt(C,M,Q,ft,ut,pt){const Et=r.convert(Q.format,Q.colorSpace),_t=r.convert(Q.type),xt=x(Q.internalFormat,Et,_t,Q.colorSpace);if(!n.get(M).__hasExternalTextures){const Zt=Math.max(1,M.width>>pt),gt=Math.max(1,M.height>>pt);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,pt,xt,Zt,gt,M.depth,0,Et,_t,null):e.texImage2D(ut,pt,xt,Zt,gt,0,Et,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),at(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ut,n.get(Q).__webglTexture,0,st(M)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ft,ut,n.get(Q).__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,M,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let ft=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Q||at(M)){const ut=M.depthTexture;ut&&ut.isDepthTexture&&(ut.type===Pn?ft=i.DEPTH_COMPONENT32F:ut.type===Cn&&(ft=i.DEPTH_COMPONENT24));const pt=st(M);at(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,ft,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,ft,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const ft=st(M);Q&&at(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,i.DEPTH24_STENCIL8,M.width,M.height):at(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const ft=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ut=0;ut<ft.length;ut++){const pt=ft[ut],Et=r.convert(pt.format,pt.colorSpace),_t=r.convert(pt.type),xt=x(pt.internalFormat,Et,_t,pt.colorSpace),Vt=st(M);Q&&at(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,xt,M.width,M.height):at(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,xt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function K(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const ft=n.get(M.depthTexture).__webglTexture,ut=st(M);if(M.depthTexture.format===Zn)at(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ft,0);else if(M.depthTexture.format===yi)at(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function tt(C){const M=n.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");K(M.__webglFramebuffer,C)}else if(Q){M.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ft]),M.__webglDepthbuffer[ft]=i.createRenderbuffer(),it(M.__webglDepthbuffer[ft],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),it(M.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,M,Q){const ft=n.get(C);M!==void 0&&nt(ft.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&tt(C)}function Y(C){const M=C.texture,Q=n.get(C),ft=n.get(M);C.addEventListener("dispose",V),C.isWebGLMultipleRenderTargets!==!0&&(ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture()),ft.__version=M.version,s.memory.textures++);const ut=C.isWebGLCubeRenderTarget===!0,pt=C.isWebGLMultipleRenderTargets===!0,Et=m(C)||o;if(ut){Q.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(o&&M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[_t]=[];for(let xt=0;xt<M.mipmaps.length;xt++)Q.__webglFramebuffer[_t][xt]=i.createFramebuffer()}else Q.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let _t=0;_t<M.mipmaps.length;_t++)Q.__webglFramebuffer[_t]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(pt)if(a.drawBuffers){const _t=C.texture;for(let xt=0,Vt=_t.length;xt<Vt;xt++){const Zt=n.get(_t[xt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&at(C)===!1){const _t=pt?M:[M];Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let xt=0;xt<_t.length;xt++){const Vt=_t[xt];Q.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[xt]);const Zt=r.convert(Vt.format,Vt.colorSpace),gt=r.convert(Vt.type),se=x(Vt.internalFormat,Zt,gt,Vt.colorSpace,C.isXRRenderTarget===!0),te=st(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),it(Q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),T(i.TEXTURE_CUBE_MAP,M,Et);for(let _t=0;_t<6;_t++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)nt(Q.__webglFramebuffer[_t][xt],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,xt);else nt(Q.__webglFramebuffer[_t],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);_(M,Et)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){const _t=C.texture;for(let xt=0,Vt=_t.length;xt<Vt;xt++){const Zt=_t[xt],gt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),T(i.TEXTURE_2D,Zt,Et),nt(Q.__webglFramebuffer,C,Zt,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),_(Zt,Et)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?_t=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,ft.__webglTexture),T(_t,M,Et),o&&M.mipmaps&&M.mipmaps.length>0)for(let xt=0;xt<M.mipmaps.length;xt++)nt(Q.__webglFramebuffer[xt],C,M,i.COLOR_ATTACHMENT0,_t,xt);else nt(Q.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,_t,0);_(M,Et)&&y(_t),e.unbindTexture()}C.depthBuffer&&tt(C)}function Ct(C){const M=m(C)||o,Q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ft=0,ut=Q.length;ft<ut;ft++){const pt=Q[ft];if(_(pt,M)){const Et=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_t=n.get(pt).__webglTexture;e.bindTexture(Et,_t),y(Et),e.unbindTexture()}}}function ht(C){if(o&&C.samples>0&&at(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Q=C.width,ft=C.height;let ut=i.COLOR_BUFFER_BIT;const pt=[],Et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(C),xt=C.isWebGLMultipleRenderTargets===!0;if(xt)for(let Vt=0;Vt<M.length;Vt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Vt=0;Vt<M.length;Vt++){pt.push(i.COLOR_ATTACHMENT0+Vt),C.depthBuffer&&pt.push(Et);const Zt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(Zt===!1&&(C.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),xt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Vt]),Zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Et]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Et])),xt){const gt=n.get(M[Vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,Q,ft,0,0,Q,ft,ut,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Vt=0;Vt<M.length;Vt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Vt]);const Zt=n.get(M[Vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function st(C){return Math.min(a.maxSamples,C.samples)}function at(C){const M=n.get(C);return o&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function kt(C){const M=s.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Tt(C,M){const Q=C.colorSpace,ft=C.format,ut=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===hs||Q!==En&&Q!==Qe&&(ge.getTransfer(Q)===_e?o===!1?t.has("EXT_sRGB")===!0&&ft===ln?(C.format=hs,C.minFilter=$e,C.generateMipmaps=!1):M=_o.sRGBToLinear(M):(ft!==ln||ut!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),M}this.allocateTextureUnit=D,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=Z,this.rebindTextures=ct,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=at}function Xd(i,t,e){const n=e.isWebGL2;function a(r,s=Qe){let o;const c=ge.getTransfer(s);if(r===Nn)return i.UNSIGNED_BYTE;if(r===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===co)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Tl)return i.BYTE;if(r===Al)return i.SHORT;if(r===gs)return i.UNSIGNED_SHORT;if(r===oo)return i.INT;if(r===Cn)return i.UNSIGNED_INT;if(r===Pn)return i.FLOAT;if(r===Ui)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===bl)return i.ALPHA;if(r===ln)return i.RGBA;if(r===Rl)return i.LUMINANCE;if(r===Cl)return i.LUMINANCE_ALPHA;if(r===Zn)return i.DEPTH_COMPONENT;if(r===yi)return i.DEPTH_STENCIL;if(r===hs)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Pl)return i.RED;if(r===uo)return i.RED_INTEGER;if(r===Ll)return i.RG;if(r===ho)return i.RG_INTEGER;if(r===fo)return i.RGBA_INTEGER;if(r===Rr||r===Cr||r===Pr||r===Lr)if(c===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Rr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Rr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bs||r===Os||r===zs||r===Vs)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Bs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Os)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===po)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gs||r===Hs)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Gs)return c===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Hs)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ws||r===ks||r===Xs||r===qs||r===Ys||r===Zs||r===Ks||r===js||r===$s||r===Js||r===Qs||r===ta||r===ea||r===na)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ws)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ks)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xs)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qs)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ys)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zs)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ks)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===js)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$s)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Js)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qs)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ta)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ea)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===na)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ir||r===ia||r===ra)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ir)return c===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ia)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ra)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Il||r===sa||r===aa||r===oa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ir)return o.COMPRESSED_RED_RGTC1_EXT;if(r===sa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===aa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:a}}class qd extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class lr extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yd={type:"move"};class is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(h,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],f=u.position.distanceTo(l.position),p=.02,v=.005;h.inputState.pinching&&f>p+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=p-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zd extends Si{constructor(t,e){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,h=null,u=null,l=null,f=null,p=null,v=null;const g=e.getContextAttributes();let m=null,d=null;const _=[],y=[],x=new ve;let A=null;const P=new Je;P.layers.enable(1),P.viewport=new De;const I=new Je;I.layers.enable(2),I.viewport=new De;const V=[P,I],E=new qd;E.layers.enable(1),E.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let b=_[T];return b===void 0&&(b=new is,_[T]=b),b.getTargetRaySpace()},this.getControllerGrip=function(T){let b=_[T];return b===void 0&&(b=new is,_[T]=b),b.getGripSpace()},this.getHand=function(T){let b=_[T];return b===void 0&&(b=new is,_[T]=b),b.getHandSpace()};function O(T){const b=y.indexOf(T.inputSource);if(b===-1)return;const R=_[b];R!==void 0&&(R.update(T.inputSource,T.frame,h||s),R.dispatchEvent({type:T.type,data:T.inputSource}))}function q(){a.removeEventListener("select",O),a.removeEventListener("selectstart",O),a.removeEventListener("selectend",O),a.removeEventListener("squeeze",O),a.removeEventListener("squeezestart",O),a.removeEventListener("squeezeend",O),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",D);for(let T=0;T<_.length;T++){const b=y[T];b!==null&&(y[T]=null,_[T].disconnect(b))}S=null,L=null,t.setRenderTarget(m),p=null,f=null,l=null,a=null,d=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(x.width,x.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(T){h=T},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(T){if(a=T,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",O),a.addEventListener("selectstart",O),a.addEventListener("selectend",O),a.addEventListener("squeeze",O),a.addEventListener("squeezestart",O),a.addEventListener("squeezeend",O),a.addEventListener("end",q),a.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(x),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const b={antialias:a.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,e,b),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new jn(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let b=null,R=null,X=null;g.depth&&(X=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,b=g.stencil?yi:Zn,R=g.stencil?Yn:Cn);const nt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};l=new XRWebGLBinding(a,e),f=l.createProjectionLayer(nt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new jn(f.textureWidth,f.textureHeight,{format:ln,type:Nn,depthTexture:new Lo(f.textureWidth,f.textureHeight,R,void 0,void 0,void 0,void 0,void 0,void 0,b),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const it=t.properties.get(d);it.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),h=null,s=await a.requestReferenceSpace(o),H.setContext(a),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function D(T){for(let b=0;b<T.removed.length;b++){const R=T.removed[b],X=y.indexOf(R);X>=0&&(y[X]=null,_[X].disconnect(R))}for(let b=0;b<T.added.length;b++){const R=T.added[b];let X=y.indexOf(R);if(X===-1){for(let it=0;it<_.length;it++)if(it>=y.length){y.push(R),X=it;break}else if(y[it]===null){y[it]=R,X=it;break}if(X===-1)break}const nt=_[X];nt&&nt.connect(R)}}const z=new et,J=new et;function F(T,b,R){z.setFromMatrixPosition(b.matrixWorld),J.setFromMatrixPosition(R.matrixWorld);const X=z.distanceTo(J),nt=b.projectionMatrix.elements,it=R.projectionMatrix.elements,K=nt[14]/(nt[10]-1),tt=nt[14]/(nt[10]+1),ct=(nt[9]+1)/nt[5],Y=(nt[9]-1)/nt[5],Ct=(nt[8]-1)/nt[0],ht=(it[8]+1)/it[0],st=K*Ct,at=K*ht,kt=X/(-Ct+ht),Tt=kt*-Ct;b.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Tt),T.translateZ(kt),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();const C=K+kt,M=tt+kt,Q=st-Tt,ft=at+(X-Tt),ut=ct*tt/M*C,pt=Y*tt/M*C;T.projectionMatrix.makePerspective(Q,ft,ut,pt,C,M),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}function U(T,b){b===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(b.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(a===null)return;E.near=I.near=P.near=T.near,E.far=I.far=P.far=T.far,(S!==E.near||L!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),S=E.near,L=E.far);const b=T.parent,R=E.cameras;U(E,b);for(let X=0;X<R.length;X++)U(R[X],b);R.length===2?F(E,P,I):E.projectionMatrix.copy(P.projectionMatrix),Z(T,E,b)};function Z(T,b,R){R===null?T.matrix.copy(b.matrixWorld):(T.matrix.copy(R.matrixWorld),T.matrix.invert(),T.matrix.multiply(b.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(b.projectionMatrix),T.projectionMatrixInverse.copy(b.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=fs*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(T){c=T,f!==null&&(f.fixedFoveation=T),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=T)};let k=null;function N(T,b){if(u=b.getViewerPose(h||s),v=b,u!==null){const R=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let X=!1;R.length!==E.cameras.length&&(E.cameras.length=0,X=!0);for(let nt=0;nt<R.length;nt++){const it=R[nt];let K=null;if(p!==null)K=p.getViewport(it);else{const ct=l.getViewSubImage(f,it);K=ct.viewport,nt===0&&(t.setRenderTargetTextures(d,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(d))}let tt=V[nt];tt===void 0&&(tt=new Je,tt.layers.enable(nt),tt.viewport=new De,V[nt]=tt),tt.matrix.fromArray(it.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(it.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(K.x,K.y,K.width,K.height),nt===0&&(E.matrix.copy(tt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),X===!0&&E.cameras.push(tt)}}for(let R=0;R<_.length;R++){const X=y[R],nt=_[R];X!==null&&nt!==void 0&&nt.update(X,b,h||s)}k&&k(T,b),b.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:b}),v=null}const H=new Co;H.setAnimationLoop(N),this.setAnimationLoop=function(T){k=T},this.dispose=function(){}}}function Kd(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ao(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,_,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),l(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,_,y):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ge&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ge&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function l(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ge&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const _=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function jd(i,t,e,n){let a={},r={},s=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function h(_,y){let x=a[_.id];x===void 0&&(v(_),x=u(_),a[_.id]=x,_.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(_,A);const P=t.render.frame;r[_.id]!==P&&(f(_),r[_.id]=P)}function u(_){const y=l();_.__bindingPointIndex=y;const x=i.createBuffer(),A=_.__size,P=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function l(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=a[_.id],x=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,I=x.length;P<I;P++){const V=Array.isArray(x[P])?x[P]:[x[P]];for(let E=0,S=V.length;E<S;E++){const L=V[E];if(p(L,P,E,A)===!0){const O=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let z=0;z<q.length;z++){const J=q[z],F=g(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,O+D,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,D),D+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,y,x,A){const P=_.value,I=y+"_"+x;if(A[I]===void 0)return typeof P=="number"||typeof P=="boolean"?A[I]=P:A[I]=P.clone(),!0;{const V=A[I];if(typeof P=="number"||typeof P=="boolean"){if(V!==P)return A[I]=P,!0}else if(V.equals(P)===!1)return V.copy(P),!0}return!1}function v(_){const y=_.uniforms;let x=0;const A=16;for(let I=0,V=y.length;I<V;I++){const E=Array.isArray(y[I])?y[I]:[y[I]];for(let S=0,L=E.length;S<L;S++){const O=E[S],q=Array.isArray(O.value)?O.value:[O.value];for(let D=0,z=q.length;D<z;D++){const J=q[D],F=g(J),U=x%A;U!==0&&A-U<F.boundary&&(x+=A-U),O.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=F.storage}}}const P=x%A;return P>0&&(x+=A-P),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),i.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function d(){for(const _ in a)i.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:c,update:h,dispose:d}}class Bo{constructor(t={}){const{canvas:e=kl(),context:n=null,depth:a=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=s;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const d=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const y=this;let x=!1,A=0,P=0,I=null,V=-1,E=null;const S=new De,L=new De;let O=null;const q=new me(0);let D=0,z=e.width,J=e.height,F=1,U=null,Z=null;const k=new De(0,0,z,J),N=new De(0,0,z,J);let H=!1;const T=new Ms;let b=!1,R=!1,X=null;const nt=new Ce,it=new ve,K=new et,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return I===null?F:1}let Y=n;function Ct(w,G){for(let j=0;j<w.length;j++){const B=w[j],$=e.getContext(B,G);if($!==null)return $}return null}try{const w={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vs}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",W,!1),e.addEventListener("webglcontextcreationerror",At,!1),Y===null){const G=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&G.shift(),Y=Ct(G,w),Y===null)throw Ct(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,st,at,kt,Tt,C,M,Q,ft,ut,pt,Et,_t,xt,Vt,Zt,gt,se,te,qt,Gt,Ot,Qt,ne;function ue(){ht=new af(Y),st=new Qh(Y,ht,t),ht.init(st),Ot=new Xd(Y,ht,st),at=new Wd(Y,ht,st),kt=new cf(Y),Tt=new Cd,C=new kd(Y,ht,at,Tt,st,Ot,kt),M=new ef(y),Q=new sf(y),ft=new vc(Y,st),Qt=new $h(Y,ht,ft,st),ut=new of(Y,ft,kt,Qt),pt=new df(Y,ut,ft,kt),te=new ff(Y,st,C),Zt=new tf(Tt),Et=new Rd(y,M,Q,ht,st,Qt,Zt),_t=new Kd(y,Tt),xt=new Ld,Vt=new Bd(ht,st),se=new jh(y,M,Q,at,pt,f,c),gt=new Hd(y,pt,st),ne=new jd(Y,kt,st,at),qt=new Jh(Y,ht,kt,st),Gt=new lf(Y,ht,kt,st),kt.programs=Et.programs,y.capabilities=st,y.extensions=ht,y.properties=Tt,y.renderLists=xt,y.shadowMap=gt,y.state=at,y.info=kt}ue();const $t=new Zd(y,Y);this.xr=$t,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(z,J,!1))},this.getSize=function(w){return w.set(z,J)},this.setSize=function(w,G,j=!0){if($t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,J=G,e.width=Math.floor(w*F),e.height=Math.floor(G*F),j===!0&&(e.style.width=w+"px",e.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(z*F,J*F).floor()},this.setDrawingBufferSize=function(w,G,j){z=w,J=G,F=j,e.width=Math.floor(w*j),e.height=Math.floor(G*j),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(k)},this.setViewport=function(w,G,j,B){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,G,j,B),at.viewport(S.copy(k).multiplyScalar(F).floor())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,G,j,B){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,G,j,B),at.scissor(L.copy(N).multiplyScalar(F).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(w){at.setScissorTest(H=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(w=!0,G=!0,j=!0){let B=0;if(w){let $=!1;if(I!==null){const vt=I.texture.format;$=vt===fo||vt===ho||vt===uo}if($){const vt=I.texture.type,Ft=vt===Nn||vt===Cn||vt===gs||vt===Yn||vt===lo||vt===co,Rt=se.getClearColor(),Ut=se.getClearAlpha(),St=Rt.r,Yt=Rt.g,jt=Rt.b;Ft?(p[0]=St,p[1]=Yt,p[2]=jt,p[3]=Ut,Y.clearBufferuiv(Y.COLOR,0,p)):(v[0]=St,v[1]=Yt,v[2]=jt,v[3]=Ut,Y.clearBufferiv(Y.COLOR,0,v))}else B|=Y.COLOR_BUFFER_BIT}G&&(B|=Y.DEPTH_BUFFER_BIT),j&&(B|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",At,!1),xt.dispose(),Vt.dispose(),Tt.dispose(),M.dispose(),Q.dispose(),pt.dispose(),Qt.dispose(),ne.dispose(),Et.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",ot),$t.removeEventListener("sessionend",lt),X&&(X.dispose(),X=null),dt.stop()};function wt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=kt.autoReset,G=gt.enabled,j=gt.autoUpdate,B=gt.needsUpdate,$=gt.type;ue(),kt.autoReset=w,gt.enabled=G,gt.autoUpdate=j,gt.needsUpdate=B,gt.type=$}function At(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Lt(w){const G=w.target;G.removeEventListener("dispose",Lt),Kt(G)}function Kt(w){Xt(w),Tt.remove(w)}function Xt(w){const G=Tt.get(w).programs;G!==void 0&&(G.forEach(function(j){Et.releaseProgram(j)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,j,B,$,vt){G===null&&(G=tt);const Ft=$.isMesh&&$.matrixWorld.determinant()<0,Rt=zt(w,G,j,B,$);at.setMaterial(B,Ft);let Ut=j.index,St=1;if(B.wireframe===!0){if(Ut=ut.getWireframeAttribute(j),Ut===void 0)return;St=2}const Yt=j.drawRange,jt=j.attributes.position;let ce=Yt.start*St,Me=(Yt.start+Yt.count)*St;vt!==null&&(ce=Math.max(ce,vt.start*St),Me=Math.min(Me,(vt.start+vt.count)*St)),Ut!==null?(ce=Math.max(ce,0),Me=Math.min(Me,Ut.count)):jt!=null&&(ce=Math.max(ce,0),Me=Math.min(Me,jt.count));const de=Me-ce;if(de<0||de===1/0)return;Qt.setup($,B,Rt,j,Ut);let oe,pe=qt;if(Ut!==null&&(oe=ft.get(Ut),pe=Gt,pe.setIndex(oe)),$.isMesh)B.wireframe===!0?(at.setLineWidth(B.wireframeLinewidth*ct()),pe.setMode(Y.LINES)):pe.setMode(Y.TRIANGLES);else if($.isLine){let Ht=B.linewidth;Ht===void 0&&(Ht=1),at.setLineWidth(Ht*ct()),$.isLineSegments?pe.setMode(Y.LINES):$.isLineLoop?pe.setMode(Y.LINE_LOOP):pe.setMode(Y.LINE_STRIP)}else $.isPoints?pe.setMode(Y.POINTS):$.isSprite&&pe.setMode(Y.TRIANGLES);if($.isBatchedMesh)pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)pe.renderInstances(ce,de,$.count);else if(j.isInstancedBufferGeometry){const Ht=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,qe=Math.min(j.instanceCount,Ht);pe.renderInstances(ce,de,qe)}else pe.render(ce,de)};function he(w,G,j){w.transparent===!0&&w.side===Mn&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,rt(w,G,j),w.side=Un,w.needsUpdate=!0,rt(w,G,j),w.side=Mn):rt(w,G,j)}this.compile=function(w,G,j=null){j===null&&(j=w),m=Vt.get(j),m.init(),_.push(m),j.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),w!==j&&w.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(y._useLegacyLights);const B=new Set;return w.traverse(function($){const vt=$.material;if(vt)if(Array.isArray(vt))for(let Ft=0;Ft<vt.length;Ft++){const Rt=vt[Ft];he(Rt,j,$),B.add(Rt)}else he(vt,j,$),B.add(vt)}),_.pop(),m=null,B},this.compileAsync=function(w,G,j=null){const B=this.compile(w,G,j);return new Promise($=>{function vt(){if(B.forEach(function(Ft){Tt.get(Ft).currentProgram.isReady()&&B.delete(Ft)}),B.size===0){$(w);return}setTimeout(vt,10)}ht.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let fe=null;function ae(w){fe&&fe(w)}function ot(){dt.stop()}function lt(){dt.start()}const dt=new Co;dt.setAnimationLoop(ae),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(w){fe=w,$t.setAnimationLoop(w),w===null?dt.stop():dt.start()},$t.addEventListener("sessionstart",ot),$t.addEventListener("sessionend",lt),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&($t.cameraAutoUpdate===!0&&$t.updateCamera(G),G=$t.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,G,I),m=Vt.get(w,_.length),m.init(),_.push(m),nt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),T.setFromProjectionMatrix(nt),R=this.localClippingEnabled,b=Zt.init(this.clippingPlanes,R),g=xt.get(w,d.length),g.init(),d.push(g),mt(w,G,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(U,Z),this.info.render.frame++,b===!0&&Zt.beginShadows();const j=m.state.shadowsArray;if(gt.render(j,w,G),b===!0&&Zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(g,w),m.setupLights(y._useLegacyLights),G.isArrayCamera){const B=G.cameras;for(let $=0,vt=B.length;$<vt;$++){const Ft=B[$];Jt(g,w,Ft,Ft.viewport)}}else Jt(g,w,G);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(y,w,G),Qt.resetDefaultState(),V=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function mt(w,G,j,B){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||T.intersectsSprite(w)){B&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nt);const Ft=pt.update(w),Rt=w.material;Rt.visible&&g.push(w,Ft,Rt,j,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||T.intersectsObject(w))){const Ft=pt.update(w),Rt=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),K.copy(w.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),K.copy(Ft.boundingSphere.center)),K.applyMatrix4(w.matrixWorld).applyMatrix4(nt)),Array.isArray(Rt)){const Ut=Ft.groups;for(let St=0,Yt=Ut.length;St<Yt;St++){const jt=Ut[St],ce=Rt[jt.materialIndex];ce&&ce.visible&&g.push(w,Ft,ce,j,K.z,jt)}}else Rt.visible&&g.push(w,Ft,Rt,j,K.z,null)}}const vt=w.children;for(let Ft=0,Rt=vt.length;Ft<Rt;Ft++)mt(vt[Ft],G,j,B)}function Jt(w,G,j,B){const $=w.opaque,vt=w.transmissive,Ft=w.transparent;m.setupLightsView(j),b===!0&&Zt.setGlobalState(y.clippingPlanes,j),vt.length>0&&Bt($,vt,G,j),B&&at.viewport(S.copy(B)),$.length>0&&yt($,G,j),vt.length>0&&yt(vt,G,j),Ft.length>0&&yt(Ft,G,j),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Bt(w,G,j,B){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const vt=st.isWebGL2;X===null&&(X=new jn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")?Ui:Nn,minFilter:Ni,samples:vt?4:0})),y.getDrawingBufferSize(it),vt?X.setSize(it.x,it.y):X.setSize(ds(it.x),ds(it.y));const Ft=y.getRenderTarget();y.setRenderTarget(X),y.getClearColor(q),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();const Rt=y.toneMapping;y.toneMapping=In,yt(w,j,B),C.updateMultisampleRenderTarget(X),C.updateRenderTargetMipmap(X);let Ut=!1;for(let St=0,Yt=G.length;St<Yt;St++){const jt=G[St],ce=jt.object,Me=jt.geometry,de=jt.material,oe=jt.group;if(de.side===Mn&&ce.layers.test(B.layers)){const pe=de.side;de.side=Ge,de.needsUpdate=!0,It(ce,j,B,Me,de,oe),de.side=pe,de.needsUpdate=!0,Ut=!0}}Ut===!0&&(C.updateMultisampleRenderTarget(X),C.updateRenderTargetMipmap(X)),y.setRenderTarget(Ft),y.setClearColor(q,D),y.toneMapping=Rt}function yt(w,G,j){const B=G.isScene===!0?G.overrideMaterial:null;for(let $=0,vt=w.length;$<vt;$++){const Ft=w[$],Rt=Ft.object,Ut=Ft.geometry,St=B===null?Ft.material:B,Yt=Ft.group;Rt.layers.test(j.layers)&&It(Rt,G,j,Ut,St,Yt)}}function It(w,G,j,B,$,vt){w.onBeforeRender(y,G,j,B,$,vt),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(y,G,j,B,w,vt),$.transparent===!0&&$.side===Mn&&$.forceSinglePass===!1?($.side=Ge,$.needsUpdate=!0,y.renderBufferDirect(j,G,B,$,w,vt),$.side=Un,$.needsUpdate=!0,y.renderBufferDirect(j,G,B,$,w,vt),$.side=Mn):y.renderBufferDirect(j,G,B,$,w,vt),w.onAfterRender(y,G,j,B,$,vt)}function rt(w,G,j){G.isScene!==!0&&(G=tt);const B=Tt.get(w),$=m.state.lights,vt=m.state.shadowsArray,Ft=$.state.version,Rt=Et.getParameters(w,$.state,vt,G,j),Ut=Et.getProgramCacheKey(Rt);let St=B.programs;B.environment=w.isMeshStandardMaterial?G.environment:null,B.fog=G.fog,B.envMap=(w.isMeshStandardMaterial?Q:M).get(w.envMap||B.environment),St===void 0&&(w.addEventListener("dispose",Lt),St=new Map,B.programs=St);let Yt=St.get(Ut);if(Yt!==void 0){if(B.currentProgram===Yt&&B.lightsStateVersion===Ft)return Nt(w,Rt),Yt}else Rt.uniforms=Et.getUniforms(w),w.onBuild(j,Rt,y),w.onBeforeCompile(Rt,y),Yt=Et.acquireProgram(Rt,Ut),St.set(Ut,Yt),B.uniforms=Rt.uniforms;const jt=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(jt.clippingPlanes=Zt.uniform),Nt(w,Rt),B.needsLights=Mt(w),B.lightsStateVersion=Ft,B.needsLights&&(jt.ambientLightColor.value=$.state.ambient,jt.lightProbe.value=$.state.probe,jt.directionalLights.value=$.state.directional,jt.directionalLightShadows.value=$.state.directionalShadow,jt.spotLights.value=$.state.spot,jt.spotLightShadows.value=$.state.spotShadow,jt.rectAreaLights.value=$.state.rectArea,jt.ltc_1.value=$.state.rectAreaLTC1,jt.ltc_2.value=$.state.rectAreaLTC2,jt.pointLights.value=$.state.point,jt.pointLightShadows.value=$.state.pointShadow,jt.hemisphereLights.value=$.state.hemi,jt.directionalShadowMap.value=$.state.directionalShadowMap,jt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,jt.spotShadowMap.value=$.state.spotShadowMap,jt.spotLightMatrix.value=$.state.spotLightMatrix,jt.spotLightMap.value=$.state.spotLightMap,jt.pointShadowMap.value=$.state.pointShadowMap,jt.pointShadowMatrix.value=$.state.pointShadowMatrix),B.currentProgram=Yt,B.uniformsList=null,Yt}function bt(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=ur.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Nt(w,G){const j=Tt.get(w);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function zt(w,G,j,B,$){G.isScene!==!0&&(G=tt),C.resetTextureUnits();const vt=G.fog,Ft=B.isMeshStandardMaterial?G.environment:null,Rt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:En,Ut=(B.isMeshStandardMaterial?Q:M).get(B.envMap||Ft),St=B.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Yt=!!j.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),jt=!!j.morphAttributes.position,ce=!!j.morphAttributes.normal,Me=!!j.morphAttributes.color;let de=In;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(de=y.toneMapping);const oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pe=oe!==void 0?oe.length:0,Ht=Tt.get(B),qe=m.state.lights;if(b===!0&&(R===!0||w!==E)){const Ae=w===E&&B.id===V;Zt.setState(B,w,Ae)}let le=!1;B.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==qe.state.version||Ht.outputColorSpace!==Rt||$.isBatchedMesh&&Ht.batching===!1||!$.isBatchedMesh&&Ht.batching===!0||$.isInstancedMesh&&Ht.instancing===!1||!$.isInstancedMesh&&Ht.instancing===!0||$.isSkinnedMesh&&Ht.skinning===!1||!$.isSkinnedMesh&&Ht.skinning===!0||$.isInstancedMesh&&Ht.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ht.instancingColor===!1&&$.instanceColor!==null||Ht.envMap!==Ut||B.fog===!0&&Ht.fog!==vt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Zt.numPlanes||Ht.numIntersection!==Zt.numIntersection)||Ht.vertexAlphas!==St||Ht.vertexTangents!==Yt||Ht.morphTargets!==jt||Ht.morphNormals!==ce||Ht.morphColors!==Me||Ht.toneMapping!==de||st.isWebGL2===!0&&Ht.morphTargetsCount!==pe)&&(le=!0):(le=!0,Ht.__version=B.version);let xe=Ht.currentProgram;le===!0&&(xe=rt(B,G,$));let Te=!1,Ie=!1,Ye=!1;const Wt=xe.getUniforms(),Ee=Ht.uniforms;if(at.useProgram(xe.program)&&(Te=!0,Ie=!0,Ye=!0),B.id!==V&&(V=B.id,Ie=!0),Te||E!==w){Wt.setValue(Y,"projectionMatrix",w.projectionMatrix),Wt.setValue(Y,"viewMatrix",w.matrixWorldInverse);const Ae=Wt.map.cameraPosition;Ae!==void 0&&Ae.setValue(Y,K.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&Wt.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Wt.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Ie=!0,Ye=!0)}if($.isSkinnedMesh){Wt.setOptional(Y,$,"bindMatrix"),Wt.setOptional(Y,$,"bindMatrixInverse");const Ae=$.skeleton;Ae&&(st.floatVertexTextures?(Ae.boneTexture===null&&Ae.computeBoneTexture(),Wt.setValue(Y,"boneTexture",Ae.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Wt.setOptional(Y,$,"batchingTexture"),Wt.setValue(Y,"batchingTexture",$._matricesTexture,C));const Se=j.morphAttributes;if((Se.position!==void 0||Se.normal!==void 0||Se.color!==void 0&&st.isWebGL2===!0)&&te.update($,j,xe),(Ie||Ht.receiveShadow!==$.receiveShadow)&&(Ht.receiveShadow=$.receiveShadow,Wt.setValue(Y,"receiveShadow",$.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ee.envMap.value=Ut,Ee.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Ie&&(Wt.setValue(Y,"toneMappingExposure",y.toneMappingExposure),Ht.needsLights&&Pt(Ee,Ye),vt&&B.fog===!0&&_t.refreshFogUniforms(Ee,vt),_t.refreshMaterialUniforms(Ee,B,F,J,X),ur.upload(Y,bt(Ht),Ee,C)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ur.upload(Y,bt(Ht),Ee,C),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Wt.setValue(Y,"center",$.center),Wt.setValue(Y,"modelViewMatrix",$.modelViewMatrix),Wt.setValue(Y,"normalMatrix",$.normalMatrix),Wt.setValue(Y,"modelMatrix",$.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ae=B.uniformsGroups;for(let en=0,Ar=Ae.length;en<Ar;en++)if(st.isWebGL2){const zi=Ae[en];ne.update(zi,xe),ne.bind(zi,xe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xe}function Pt(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function Mt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,G,j){Tt.get(w.texture).__webglTexture=G,Tt.get(w.depthTexture).__webglTexture=j;const B=Tt.get(w);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=j===void 0,B.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,G){const j=Tt.get(w);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(w,G=0,j=0){I=w,A=G,P=j;let B=!0,$=null,vt=!1,Ft=!1;if(w){const Ut=Tt.get(w);Ut.__useDefaultFramebuffer!==void 0?(at.bindFramebuffer(Y.FRAMEBUFFER,null),B=!1):Ut.__webglFramebuffer===void 0?C.setupRenderTarget(w):Ut.__hasExternalTextures&&C.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);const St=w.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(Ft=!0);const Yt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[G])?$=Yt[G][j]:$=Yt[G],vt=!0):st.isWebGL2&&w.samples>0&&C.useMultisampledRTT(w)===!1?$=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?$=Yt[j]:$=Yt,S.copy(w.viewport),L.copy(w.scissor),O=w.scissorTest}else S.copy(k).multiplyScalar(F).floor(),L.copy(N).multiplyScalar(F).floor(),O=H;if(at.bindFramebuffer(Y.FRAMEBUFFER,$)&&st.drawBuffers&&B&&at.drawBuffers(w,$),at.viewport(S),at.scissor(L),at.setScissorTest(O),vt){const Ut=Tt.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ut.__webglTexture,j)}else if(Ft){const Ut=Tt.get(w.texture),St=G||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ut.__webglTexture,j||0,St)}V=-1},this.readRenderTargetPixels=function(w,G,j,B,$,vt,Ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ft!==void 0&&(Rt=Rt[Ft]),Rt){at.bindFramebuffer(Y.FRAMEBUFFER,Rt);try{const Ut=w.texture,St=Ut.format,Yt=Ut.type;if(St!==ln&&Ot.convert(St)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const jt=Yt===Ui&&(ht.has("EXT_color_buffer_half_float")||st.isWebGL2&&ht.has("EXT_color_buffer_float"));if(Yt!==Nn&&Ot.convert(Yt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Yt===Pn&&(st.isWebGL2||ht.has("OES_texture_float")||ht.has("WEBGL_color_buffer_float")))&&!jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-B&&j>=0&&j<=w.height-$&&Y.readPixels(G,j,B,$,Ot.convert(St),Ot.convert(Yt),vt)}finally{const Ut=I!==null?Tt.get(I).__webglFramebuffer:null;at.bindFramebuffer(Y.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(w,G,j=0){const B=Math.pow(2,-j),$=Math.floor(G.image.width*B),vt=Math.floor(G.image.height*B);C.setTexture2D(G,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,j,0,0,w.x,w.y,$,vt),at.unbindTexture()},this.copyTextureToTexture=function(w,G,j,B=0){const $=G.image.width,vt=G.image.height,Ft=Ot.convert(j.format),Rt=Ot.convert(j.type);C.setTexture2D(j,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,j.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,j.unpackAlignment),G.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,B,w.x,w.y,$,vt,Ft,Rt,G.image.data):G.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,B,w.x,w.y,G.mipmaps[0].width,G.mipmaps[0].height,Ft,G.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,B,w.x,w.y,Ft,Rt,G.image),B===0&&j.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(w,G,j,B,$=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=w.max.x-w.min.x+1,Ft=w.max.y-w.min.y+1,Rt=w.max.z-w.min.z+1,Ut=Ot.convert(B.format),St=Ot.convert(B.type);let Yt;if(B.isData3DTexture)C.setTexture3D(B,0),Yt=Y.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)C.setTexture2DArray(B,0),Yt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,B.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,B.unpackAlignment);const jt=Y.getParameter(Y.UNPACK_ROW_LENGTH),ce=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Me=Y.getParameter(Y.UNPACK_SKIP_PIXELS),de=Y.getParameter(Y.UNPACK_SKIP_ROWS),oe=Y.getParameter(Y.UNPACK_SKIP_IMAGES),pe=j.isCompressedTexture?j.mipmaps[$]:j.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,pe.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,pe.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,w.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,w.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,w.min.z),j.isDataTexture||j.isData3DTexture?Y.texSubImage3D(Yt,$,G.x,G.y,G.z,vt,Ft,Rt,Ut,St,pe.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Yt,$,G.x,G.y,G.z,vt,Ft,Rt,Ut,pe.data)):Y.texSubImage3D(Yt,$,G.x,G.y,G.z,vt,Ft,Rt,Ut,St,pe),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,jt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ce),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Me),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,de),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,oe),$===0&&B.generateMipmaps&&Y.generateMipmap(Yt),at.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),at.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,at.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xs?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===yr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?Kn:mo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Kn?Ue:En}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class $d extends Bo{}$d.prototype.isWebGL1Renderer=!0;class Jd extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Er extends Bn{constructor(t=1,e=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let h=0;const u=[],l=new et,f=new et,p=[],v=[],g=[],m=[];for(let d=0;d<=n;d++){const _=[],y=d/n;let x=0;d===0&&s===0?x=.5/e:d===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const P=A/e;l.x=-t*Math.cos(a+P*r)*Math.sin(s+y*o),l.y=t*Math.cos(s+y*o),l.z=t*Math.sin(a+P*r)*Math.sin(s+y*o),v.push(l.x,l.y,l.z),f.copy(l).normalize(),g.push(f.x,f.y,f.z),m.push(P+x,1-y),_.push(h++)}u.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){const y=u[d][_+1],x=u[d][_],A=u[d+1][_],P=u[d+1][_+1];(d!==0||s>0)&&p.push(y,x,P),(d!==n-1||c<Math.PI)&&p.push(x,A,P)}this.setIndex(p),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qd extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_s,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tp extends Ei{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_s,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ja={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ep{constructor(t,e,n){const a=this;let r=!1,s=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&a.onStart!==void 0&&a.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,a.onProgress!==void 0&&a.onProgress(u,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,l){return h.push(u,l),this},this.removeHandler=function(u){const l=h.indexOf(u);return l!==-1&&h.splice(l,2),this},this.getHandler=function(u){for(let l=0,f=h.length;l<f;l+=2){const p=h[l],v=h[l+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const np=new ep;class ws{constructor(t){this.manager=t!==void 0?t:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,r){n.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";class ip extends ws{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ja.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=Di("img");function c(){u(),ja.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(l){u(),a&&a(l),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class rp extends ws{constructor(t){super(t)}load(t,e,n,a){const r=new Xe,s=new ip(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,a),r}}class Oo extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const rs=new Ce,$a=new et,Ja=new et;class sp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$a.setFromMatrixPosition(t.matrixWorld),e.position.copy($a),Ja.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ja),e.updateMatrixWorld(),rs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ap extends sp{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class op extends Oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new ap}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lp extends Oo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class cp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qa(){return(typeof performance>"u"?Date:performance).now()}class Ts{constructor(t){this.value=t}clone(){return new Ts(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vs);function up(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function cr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var zo={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,a,r){function s(h,u){if(!a[h]){if(!n[h]){var l=typeof cr=="function"&&cr;if(!u&&l)return l(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+h+"'")}var f=a[h]={exports:{}};n[h][0].call(f.exports,function(p){var v=n[h][1][p];return s(v||p)},f,f.exports,e,n,a,r)}return a[h].exports}for(var o=typeof cr=="function"&&cr,c=0;c<r.length;c++)s(r[c]);return s}({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(h){h=h||{},this.lowerBound=new r,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new r,h.upperBound&&this.upperBound.copy(h.upperBound)}var o=new r;s.prototype.setFromPoints=function(h,u,l,f){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(h[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<h.length;m++){var d=h[m];g&&(g.vmult(d,o),d=o),d.x>v.x&&(v.x=d.x),d.x<p.x&&(p.x=d.x),d.y>v.y&&(v.y=d.y),d.y<p.y&&(p.y=d.y),d.z>v.z&&(v.z=d.z),d.z<p.z&&(p.z=d.z)}return u&&(u.vadd(p,p),u.vadd(v,v)),f&&(p.x-=f,p.y-=f,p.z-=f,v.x+=f,v.y+=f,v.z+=f),this},s.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var l=h.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var l=h.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var l=h.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},s.prototype.overlaps=function(h){var u=this.lowerBound,l=this.upperBound,f=h.lowerBound,p=h.upperBound;return(f.x<=l.x&&l.x<=p.x||u.x<=p.x&&p.x<=l.x)&&(f.y<=l.y&&l.y<=p.y||u.y<=p.y&&p.y<=l.y)&&(f.z<=l.z&&l.z<=p.z||u.z<=p.z&&p.z<=l.z)},s.prototype.contains=function(h){var u=this.lowerBound,l=this.upperBound,f=h.lowerBound,p=h.upperBound;return u.x<=f.x&&l.x>=p.x&&u.y<=f.y&&l.y>=p.y&&u.z<=f.z&&l.z>=p.z},s.prototype.getCorners=function(h,u,l,f,p,v,g,m){var d=this.lowerBound,_=this.upperBound;h.copy(d),u.set(_.x,d.y,d.z),l.set(_.x,_.y,d.z),f.set(d.x,_.y,_.z),p.set(_.x,d.y,d.z),v.set(d.x,_.y,d.z),g.set(d.x,d.y,_.z),m.copy(_)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(h,u){var l=c,f=l[0],p=l[1],v=l[2],g=l[3],m=l[4],d=l[5],_=l[6],y=l[7];this.getCorners(f,p,v,g,m,d,_,y);for(var x=0;x!==8;x++){var A=l[x];h.pointToLocal(A,A)}return u.setFromPoints(l)},s.prototype.toWorldFrame=function(h,u){var l=c,f=l[0],p=l[1],v=l[2],g=l[3],m=l[4],d=l[5],_=l[6],y=l[7];this.getCorners(f,p,v,g,m,d,_,y);for(var x=0;x!==8;x++){var A=l[x];h.pointToWorld(A,A)}return u.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var c=o;o=s,s=c}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,c){if(s=s.index,o=o.index,o>s){var h=o;o=s,s=h}this.matrix[(s*(s+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,a){var r=e("../objects/Body"),s=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,d){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===r.SLEEPING)&&(m.type&h||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,d,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,d,_):this.doBoundingSphereBroadphase(g,m,d,_)};var u=new s;new s,new o,new s,c.prototype.doBoundingSphereBroadphase=function(g,m,d,_){var y=u;m.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+m.boundingRadius,2),A=y.norm2();A<x&&(d.push(g),_.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,d,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(d.push(g),_.push(m))};var l={keys:[]},f=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var d=l,_=f,y=p,x=g.length,A=0;A!==x;A++)_[A]=g[A],y[A]=m[A];g.length=0,m.length=0;for(var A=0;A!==x;A++){var P=_[A].id,I=y[A].id,V=P<I?P+","+I:I+","+P;d[V]=A,d.keys.push(V)}for(var A=0;A!==d.keys.length;A++){var V=d.keys.pop(),E=d[V];g.push(_[E]),m.push(y[E]),delete d[V]}},c.prototype.setWorld=function(g){};var v=new s;c.boundingSphereCheck=function(g,m){var d=v;return g.position.vsub(m.position,d),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>d.norm2()},c.prototype.aabbQuery=function(g,m,d){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=c;var r=e("./Broadphase"),s=e("../math/Vec3"),o=e("../shapes/Shape");function c(u,l,f,p,v){r.apply(this),this.nx=f||10,this.ny=p||10,this.nz=v||10,this.aabbMin=u||new s(100,100,100),this.aabbMax=l||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var h=new s;new s,c.prototype.collisionPairs=function(u,l,f){var p=u.numObjects(),v=u.bodies,nt=this.aabbMax,X=this.aabbMin,g=this.nx,m=this.ny,d=this.nz,_=m*d,y=d,x=1,A=nt.x,P=nt.y,I=nt.z,V=X.x,E=X.y,S=X.z,L=g/(A-V),O=m/(P-E),q=d/(I-S),D=(A-V)/g,z=(P-E)/m,J=(I-S)/d,F=Math.sqrt(D*D+z*z+J*J)*.5,U=o.types,Z=U.SPHERE,k=U.PLANE;U.BOX,U.COMPOUND,U.CONVEXPOLYHEDRON;for(var N=this.bins,H=this.binLengths,T=this.bins.length,b=0;b!==T;b++)H[b]=0;var R=Math.ceil,X=Math.min,nt=Math.max;function it(gt,se,te,qt,Gt,Ot,Qt){var ne=(gt-V)*L|0,ue=(se-E)*O|0,$t=(te-S)*q|0,wt=R((qt-V)*L),W=R((Gt-E)*O),At=R((Ot-S)*q);ne<0?ne=0:ne>=g&&(ne=g-1),ue<0?ue=0:ue>=m&&(ue=m-1),$t<0?$t=0:$t>=d&&($t=d-1),wt<0?wt=0:wt>=g&&(wt=g-1),W<0?W=0:W>=m&&(W=m-1),At<0?At=0:At>=d&&(At=d-1),ne*=_,ue*=y,$t*=x,wt*=_,W*=y,At*=x;for(var Lt=ne;Lt<=wt;Lt+=_)for(var Kt=ue;Kt<=W;Kt+=y)for(var Xt=$t;Xt<=At;Xt+=x){var he=Lt+Kt+Xt;N[he][H[he]++]=Qt}}for(var b=0;b!==p;b++){var K=v[b],tt=K.shape;switch(tt.type){case Z:var ct=K.position.x,Y=K.position.y,Ct=K.position.z,ht=tt.radius;it(ct-ht,Y-ht,Ct-ht,ct+ht,Y+ht,Ct+ht,K);break;case k:tt.worldNormalNeedsUpdate&&tt.computeWorldNormal(K.quaternion);var st=tt.worldNormal,at=V+D*.5-K.position.x,kt=E+z*.5-K.position.y,Tt=S+J*.5-K.position.z,C=h;C.set(at,kt,Tt);for(var M=0,Q=0;M!==g;M++,Q+=_,C.y=kt,C.x+=D)for(var ft=0,ut=0;ft!==m;ft++,ut+=y,C.z=Tt,C.y+=z)for(var pt=0,Et=0;pt!==d;pt++,Et+=x,C.z+=J)if(C.dot(st)<F){var _t=Q+ut+Et;N[_t][H[_t]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),it(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var b=0;b!==T;b++){var xt=H[b];if(xt>1)for(var Vt=N[b],M=0;M!==xt;M++)for(var K=Vt[M],ft=0;ft!==M;ft++){var Zt=Vt[ft];this.needBroadphaseCollision(K,Zt)&&this.intersectionTest(K,Zt,l,f)}}this.makePairsUnique(l,f)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=o;var r=e("./Broadphase"),s=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,h,u){var l=c.bodies,f=l.length,p,v,g,m;for(p=0;p!==f;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,h,u)},new s,o.prototype.aabbQuery=function(c,h,u){u=u||[];for(var l=0;l<c.bodies.length;l++){var f=c.bodies[l];f.aabbNeedsUpdate&&f.computeAABB(),f.aabb.overlaps(h)&&u.push(f)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var c=o;o=s,s=c}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,c){if(s=s.id,o=o.id,o>s){var h=o;o=s,s=h}c?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,a){n.exports=l;var r=e("../math/Vec3"),s=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),h=e("../shapes/Shape"),u=e("../collision/AABB");function l(T,b){this.from=T?T.clone():new r,this.to=b?b.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(R){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var f=new u,p=[];l.prototype.intersectWorld=function(T,b){return this.mode=b.mode||l.ANY,this.result=b.result||new c,this.skipBackfaces=!!b.skipBackfaces,this.collisionFilterMask=typeof b.collisionFilterMask<"u"?b.collisionFilterMask:-1,this.collisionFilterGroup=typeof b.collisionFilterGroup<"u"?b.collisionFilterGroup:-1,b.from&&this.from.copy(b.from),b.to&&this.to.copy(b.to),this.callback=b.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(f),p.length=0,T.broadphase.aabbQuery(T,f,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(T,b,R,X){X.vsub(b,k),R.vsub(b,v),T.vsub(b,g);var nt=k.dot(k),it=k.dot(v),K=k.dot(g),tt=v.dot(v),ct=v.dot(g),Y,Ct;return(Y=tt*K-it*ct)>=0&&(Ct=nt*ct-it*K)>=0&&Y+Ct<nt*tt-it*it}var d=new r,_=new s;l.prototype.intersectBody=function(T,b){b&&(this.result=b,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!T.collisionResponse)&&!(!(this.collisionFilterGroup&T.collisionFilterMask)||!(T.collisionFilterGroup&this.collisionFilterMask)))for(var X=d,nt=_,it=0,K=T.shapes.length;it<K;it++){var tt=T.shapes[it];if(!(R&&!tt.collisionResponse)&&(T.quaternion.mult(T.shapeOrientations[it],nt),T.quaternion.vmult(T.shapeOffsets[it],X),X.vadd(T.position,X),this.intersectShape(tt,nt,X,T),this.result._shouldStop))break}},l.prototype.intersectBodies=function(T,b){b&&(this.result=b,this._updateDirection());for(var R=0,X=T.length;!this.result._shouldStop&&R<X;R++)this.intersectBody(T[R])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(T,b,R,X){var nt=this.from,it=H(nt,this._direction,R);if(!(it>T.boundingSphereRadius)){var K=this[T.type];K&&K.call(this,T,b,R,X)}},new r,new r;var y=new r,x=new r,A=new r,P=new r;new r,new c,l.prototype.intersectBox=function(T,b,R,X){return this.intersectConvex(T.convexPolyhedronRepresentation,b,R,X)},l.prototype[h.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(T,b,R,X){var nt=this.from,it=this.to,K=this._direction,tt=new r(0,0,1);b.vmult(tt,tt);var ct=new r;nt.vsub(R,ct);var Y=ct.dot(tt);it.vsub(R,ct);var Ct=ct.dot(tt);if(!(Y*Ct>0)&&!(nt.distanceTo(it)<Y)){var ht=tt.dot(K);if(!(Math.abs(ht)<this.precision)){var st=new r,at=new r,kt=new r;nt.vsub(R,st);var Tt=-tt.dot(st)/ht;K.scale(Tt,at),nt.vadd(at,kt),this.reportIntersection(tt,kt,T,X,-1)}}},l.prototype[h.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(T){var b=this.to,R=this.from;T.lowerBound.x=Math.min(b.x,R.x),T.lowerBound.y=Math.min(b.y,R.y),T.lowerBound.z=Math.min(b.z,R.z),T.upperBound.x=Math.max(b.x,R.x),T.upperBound.y=Math.max(b.y,R.y),T.upperBound.z=Math.max(b.z,R.z)};var I={faceList:[0]};l.prototype.intersectHeightfield=function(T,b,R,X){T.data,T.elementSize;var nt=new r,it=new l(this.from,this.to);o.pointToLocalFrame(R,b,it.from,it.from),o.pointToLocalFrame(R,b,it.to,it.to);var K=[],tt=null,ct=null,Y=null,Ct=null,ht=T.getIndexOfPosition(it.from.x,it.from.y,K,!1);if(ht&&(tt=K[0],ct=K[1],Y=K[0],Ct=K[1]),ht=T.getIndexOfPosition(it.to.x,it.to.y,K,!1),ht&&((tt===null||K[0]<tt)&&(tt=K[0]),(Y===null||K[0]>Y)&&(Y=K[0]),(ct===null||K[1]<ct)&&(ct=K[1]),(Ct===null||K[1]>Ct)&&(Ct=K[1])),tt!==null){var st=[];T.getRectMinMax(tt,ct,Y,Ct,st),st[0],st[1];for(var at=tt;at<=Y;at++)for(var kt=ct;kt<=Ct;kt++){if(this.result._shouldStop||(T.getConvexTrianglePillar(at,kt,!1),o.pointToWorldFrame(R,b,T.pillarOffset,nt),this.intersectConvex(T.pillarConvex,b,nt,X,I),this.result._shouldStop))return;T.getConvexTrianglePillar(at,kt,!0),o.pointToWorldFrame(R,b,T.pillarOffset,nt),this.intersectConvex(T.pillarConvex,b,nt,X,I)}}},l.prototype[h.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var V=new r,E=new r;l.prototype.intersectSphere=function(T,b,R,X){var nt=this.from,it=this.to,K=T.radius,tt=Math.pow(it.x-nt.x,2)+Math.pow(it.y-nt.y,2)+Math.pow(it.z-nt.z,2),ct=2*((it.x-nt.x)*(nt.x-R.x)+(it.y-nt.y)*(nt.y-R.y)+(it.z-nt.z)*(nt.z-R.z)),Y=Math.pow(nt.x-R.x,2)+Math.pow(nt.y-R.y,2)+Math.pow(nt.z-R.z,2)-Math.pow(K,2),Ct=Math.pow(ct,2)-4*tt*Y,ht=V,st=E;if(!(Ct<0))if(Ct===0)nt.lerp(it,Ct,ht),ht.vsub(R,st),st.normalize(),this.reportIntersection(st,ht,T,X,-1);else{var at=(-ct-Math.sqrt(Ct))/(2*tt),kt=(-ct+Math.sqrt(Ct))/(2*tt);if(at>=0&&at<=1&&(nt.lerp(it,at,ht),ht.vsub(R,st),st.normalize(),this.reportIntersection(st,ht,T,X,-1)),this.result._shouldStop)return;kt>=0&&kt<=1&&(nt.lerp(it,kt,ht),ht.vsub(R,st),st.normalize(),this.reportIntersection(st,ht,T,X,-1))}},l.prototype[h.types.SPHERE]=l.prototype.intersectSphere;var S=new r;new r,new r;var L=new r;l.prototype.intersectConvex=function(b,R,X,nt,it){for(var K=S,tt=L,ct=it&&it.faceList||null,Y=b.faces,Ct=b.vertices,ht=b.faceNormals,st=this._direction,at=this.from,kt=this.to,Tt=at.distanceTo(kt),C=ct?ct.length:Y.length,M=this.result,Q=0;!M._shouldStop&&Q<C;Q++){var ft=ct?ct[Q]:Q,ut=Y[ft],pt=ht[ft],Et=R,_t=X;tt.copy(Ct[ut[0]]),Et.vmult(tt,tt),tt.vadd(_t,tt),tt.vsub(at,tt),Et.vmult(pt,K);var xt=st.dot(K);if(!(Math.abs(xt)<this.precision)){var Vt=K.dot(tt)/xt;if(!(Vt<0)){st.mult(Vt,y),y.vadd(at,y),x.copy(Ct[ut[0]]),Et.vmult(x,x),_t.vadd(x,x);for(var Zt=1;!M._shouldStop&&Zt<ut.length-1;Zt++){A.copy(Ct[ut[Zt]]),P.copy(Ct[ut[Zt+1]]),Et.vmult(A,A),Et.vmult(P,P),_t.vadd(A,A),_t.vadd(P,P);var gt=y.distanceTo(at);!(m(y,x,A,P)||m(y,A,x,P))||gt>Tt||this.reportIntersection(K,y,b,nt,ft)}}}}},l.prototype[h.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var O=new r,q=new r,D=new r,z=new r,J=new r,F=new r;new u;var U=[],Z=new o;l.prototype.intersectTrimesh=function(b,R,X,nt,it){var K=O,tt=U,ct=Z,Y=L,Ct=q,ht=D,st=z,at=F,kt=J;it&&it.faceList;var Tt=b.indices;b.vertices,b.faceNormals;var C=this.from,M=this.to,Q=this._direction;ct.position.copy(X),ct.quaternion.copy(R),o.vectorToLocalFrame(X,R,Q,Ct),o.pointToLocalFrame(X,R,C,ht),o.pointToLocalFrame(X,R,M,st);var ft=ht.distanceSquared(st);b.tree.rayQuery(this,ct,tt);for(var ut=0,pt=tt.length;!this.result._shouldStop&&ut!==pt;ut++){var Et=tt[ut];b.getNormal(Et,K),b.getVertex(Tt[Et*3],x),x.vsub(ht,Y);var _t=Ct.dot(K),xt=K.dot(Y)/_t;if(!(xt<0)){Ct.scale(xt,y),y.vadd(ht,y),b.getVertex(Tt[Et*3+1],A),b.getVertex(Tt[Et*3+2],P);var Vt=y.distanceSquared(ht);!(m(y,A,x,P)||m(y,x,A,P))||Vt>ft||(o.vectorToWorldFrame(R,K,kt),o.pointToWorldFrame(X,R,y,at),this.reportIntersection(kt,at,b,nt,Et))}}tt.length=0},l.prototype[h.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(T,b,R,X,nt){var it=this.from,K=this.to,tt=it.distanceTo(b),ct=this.result;if(!(this.skipBackfaces&&T.dot(this._direction)>0))switch(ct.hitFaceIndex=typeof nt<"u"?nt:-1,this.mode){case l.ALL:this.hasHit=!0,ct.set(it,K,T,b,R,X,tt),ct.hasHit=!0,this.callback(ct);break;case l.CLOSEST:(tt<ct.distance||!ct.hasHit)&&(this.hasHit=!0,ct.hasHit=!0,ct.set(it,K,T,b,R,X,tt));break;case l.ANY:this.hasHit=!0,ct.hasHit=!0,ct.set(it,K,T,b,R,X,tt),ct._shouldStop=!0;break}};var k=new r,N=new r;function H(T,b,R){R.vsub(T,k);var X=k.dot(b);b.mult(X,N),N.vadd(T,N);var nt=R.distanceTo(N);return nt}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,c,h,u,l,f,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=l,this.body=f,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(h){c.push(h.body)},this._removeBodyHandler=function(h){var u=c.indexOf(h.body);u!==-1&&c.splice(u,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var c=1,h=o.length;c<h;c++){for(var u=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=u.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=u}return o},s.insertionSortY=function(o){for(var c=1,h=o.length;c<h;c++){for(var u=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=u.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=u}return o},s.insertionSortZ=function(o){for(var c=1,h=o.length;c<h;c++){for(var u=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=u.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=u}return o},s.prototype.collisionPairs=function(o,c,h){var u=this.axisList,l=u.length,f=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=u[p];for(v=p+1;v<l;v++){var m=u[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,f))break;this.intersectionTest(g,m,c,h)}}}},s.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,h=o.length,u=0;u!==h;u++){var l=o[u];l.aabbNeedsUpdate&&l.computeAABB()}c===0?s.insertionSortX(o):c===1?s.insertionSortY(o):c===2&&s.insertionSortZ(o)},s.checkBounds=function(o,c,h){var u,l;h===0?(u=o.position.x,l=c.position.x):h===1?(u=o.position.y,l=c.position.y):h===2&&(u=o.position.z,l=c.position.z);var f=o.boundingRadius,p=c.boundingRadius,v=u+f,g=l-p;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,c=0,h=0,u=0,l=0,f=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var d=p[m],_=d.position.x;o+=_,c+=_*_;var y=d.position.y;h+=y,u+=y*y;var x=d.position.z;l+=x,f+=x*x}var A=c-o*o*g,P=u-h*h*g,I=f-l*l*g;A>P?A>I?this.axisIndex=0:this.axisIndex=2:P>I?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,c,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,l="x";u===1&&(l="y"),u===2&&(l="z");var f=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<f.length;p++){var v=f[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function h(u,l,f){f=f||{};var p=typeof f.maxForce<"u"?f.maxForce:1e6,v=f.pivotA?f.pivotA.clone():new c,g=f.pivotB?f.pivotB.clone():new c;this.axisA=f.axisA?f.axisA.clone():new c,this.axisB=f.axisB?f.axisB.clone():new c,r.call(this,u,v,l,g,p),this.collideConnected=!!f.collideConnected,this.angle=typeof f.angle<"u"?f.angle:0;var m=this.coneEquation=new s(u,l,f),d=this.twistEquation=new o(u,l,f);this.twistAngle=typeof f.twistAngle<"u"?f.twistAngle:0,m.maxForce=0,m.minForce=-p,d.maxForce=0,d.minForce=-p,this.equations.push(m,d)}h.prototype=new r,h.constructor=h,new c,new c,h.prototype.update=function(){var u=this.bodyA,l=this.bodyB,f=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,f.axisA),l.vectorToWorldFrame(this.axisB,f.axisB),this.axisA.tangents(p.axisA,p.axisA),u.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),f.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=s;var r=e("../utils/Utils");function s(o,c,h){h=r.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=s.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=o;var r=e("./Constraint"),s=e("../equations/ContactEquation");function o(c,h,u,l){r.call(this,c,h),typeof u>"u"&&(u=c.position.distanceTo(h.position)),typeof l>"u"&&(l=1e6),this.distance=u;var f=this.distanceEquation=new s(c,h);this.equations.push(f),f.minForce=-l,f.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,h=this.bodyB,u=this.distanceEquation,l=this.distance*.5,f=u.ni;h.position.vsub(c.position,f),f.normalize(),f.mult(l,u.ri),f.mult(-l,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function h(f,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,d=v.pivotB?v.pivotB.clone():new c;r.call(this,f,m,p,d,g);var _=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);y.normalize();var x=this.rotationalEquation1=new s(f,p,v),A=this.rotationalEquation2=new s(f,p,v),P=this.motorEquation=new o(f,p,g);P.enabled=!1,this.equations.push(x,A,P)}h.prototype=new r,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(f){this.motorEquation.targetVelocity=f},h.prototype.setMotorMaxForce=function(f){this.motorEquation.maxForce=f,this.motorEquation.minForce=-f};var u=new c,l=new c;h.prototype.update=function(){var f=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,d=u,_=l,y=this.axisA,x=this.axisB;r.prototype.update.call(this),f.quaternion.vmult(y,d),p.quaternion.vmult(x,_),d.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(f.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(h,u,l){l=l||{};var f=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),h.pointToLocalFrame(g,p),r.call(this,h,p,u,v,f);var m=this.rotationalEquation1=new s(h,u,l),d=this.rotationalEquation2=new s(h,u,l),_=this.rotationalEquation3=new s(h,u,l);this.equations.push(m,d,_)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,f=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),h.vectorToWorldFrame(o.UNIT_X,l.axisA),u.vectorToWorldFrame(o.UNIT_Y,l.axisB),h.vectorToWorldFrame(o.UNIT_Y,f.axisA),u.vectorToWorldFrame(o.UNIT_Z,f.axisB),h.vectorToWorldFrame(o.UNIT_Z,p.axisA),u.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=c;var r=e("./Constraint"),s=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(h,u,l,f,p){r.call(this,h,l),p=typeof p<"u"?p:1e6,this.pivotA=u?u.clone():new o,this.pivotB=f?f.clone():new o;var v=this.equationX=new s(h,l),g=this.equationY=new s(h,l),m=this.equationZ=new s(h,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var h=this.bodyA,u=this.bodyB,l=this.equationX,f=this.equationY,p=this.equationZ;h.quaternion.vmult(this.pivotA,l.ri),u.quaternion.vmult(this.pivotB,l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(u,l,f){f=f||{};var p=typeof f.maxForce<"u"?f.maxForce:1e6;s.call(this,u,l,-p,p),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.angle=typeof f.angle<"u"?f.angle:0}o.prototype=new s,o.prototype.constructor=o;var c=new r,h=new r;o.prototype.computeB=function(u){var l=this.a,f=this.b,p=this.axisA,v=this.axisB,g=c,m=h,d=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),d.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.angle)-p.dot(v),x=this.computeGW(),A=this.computeGiMf(),P=-y*l-x*f-u*A;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(m,d,_){_=typeof _<"u"?_:1e6,r.call(this,m,d,0,_),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,h=new s,u=new s;o.prototype.computeB=function(m){var d=this.a,_=this.b,y=this.bi,x=this.bj,A=this.ri,P=this.rj,I=c,V=h,E=y.velocity,S=y.angularVelocity;y.force,y.torque;var L=x.velocity,O=x.angularVelocity;x.force,x.torque;var q=u,D=this.jacobianElementA,z=this.jacobianElementB,J=this.ni;A.cross(J,I),P.cross(J,V),J.negate(D.spatial),I.negate(D.rotational),z.spatial.copy(J),z.rotational.copy(V),q.copy(x.position),q.vadd(P,q),q.vsub(y.position,q),q.vsub(A,q);var F=J.dot(q),U=this.restitution+1,Z=U*L.dot(J)-U*E.dot(J)+O.dot(V)-S.dot(I),k=this.computeGiMf(),N=-F*d-Z*_-m*k;return N};var l=new s,f=new s,p=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,d=f,_=p,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(y,d),m.vsub(d,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=o;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function o(g,m,d,_){this.id=o.id++,this.minForce=typeof d>"u"?-1e6:d,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,d){var _=m,y=g,x=d;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},o.prototype.computeB=function(g,m,d){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*m-x*d},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.position,x=_.position;return g.spatial.dot(y)+m.spatial.dot(x)};var c=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.velocity,x=_.velocity,A=d.angularVelocity||c,P=_.angularVelocity||c;return g.multiplyVectors(y,A)+m.multiplyVectors(x,P)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.vlambda,x=_.vlambda,A=d.wlambda||c,P=_.wlambda||c;return g.multiplyVectors(y,A)+m.multiplyVectors(x,P)};var h=new s,u=new s,l=new s,f=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.force,x=d.torque,A=_.force,P=_.torque,I=d.invMassSolve,V=_.invMassSolve;return d.invInertiaWorldSolve?d.invInertiaWorldSolve.vmult(x,l):l.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(P,f):f.set(0,0,0),y.mult(I,h),A.mult(V,u),g.multiplyVectors(h,l)+m.multiplyVectors(u,f)};var p=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,d=this.bi,_=this.bj,y=d.invMassSolve,x=_.invMassSolve,A=d.invInertiaWorldSolve,P=_.invInertiaWorldSolve,I=y+x;return A&&(A.vmult(g.rotational,p),I+=p.dot(g.rotational)),P&&(P.vmult(m.rotational,p),I+=p.dot(m.rotational)),I};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,d=this.jacobianElementB,_=this.bi,y=this.bj,x=v;m.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),d.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(d.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(u,l,f){r.call(this,u,l,-f,f),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,h=new s;o.prototype.computeB=function(u){this.a;var l=this.b;this.bi,this.bj;var f=this.ri,p=this.rj,v=c,g=h,m=this.t;f.cross(m,v),p.cross(m,g);var d=this.jacobianElementA,_=this.jacobianElementB;m.negate(d.spatial),v.negate(d.rotational),_.spatial.copy(m),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),A=-y*l-u*x;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(u,l,f){f=f||{};var p=typeof f.maxForce<"u"?f.maxForce:1e6;s.call(this,u,l,-p,p),this.axisA=f.axisA?f.axisA.clone():new r(1,0,0),this.axisB=f.axisB?f.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var c=new r,h=new r;o.prototype.computeB=function(u){var l=this.a,f=this.b,p=this.axisA,v=this.axisB,g=c,m=h,d=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),d.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-p.dot(v),x=this.computeGW(),A=this.computeGiMf(),P=-y*l-x*f-u*A;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(c,h,u){u=typeof u<"u"?u:1e6,s.call(this,c,h,-u,u),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,l=this.axisB,f=this.jacobianElementA,p=this.jacobianElementB;f.rotational.copy(u),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*h-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var r=e("../utils/Utils");n.exports=s;function s(o,c,h){h=r.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,c],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},s.prototype.getTrace=function(c){var c=c||new r,h=this.elements;c.x=h[0],c.y=h[4],c.z=h[8]},s.prototype.vmult=function(o,c){c=c||new r;var h=this.elements,u=o.x,l=o.y,f=o.z;return c.x=h[0]*u+h[1]*l+h[2]*f,c.y=h[3]*u+h[4]*l+h[5]*f,c.z=h[6]*u+h[7]*l+h[8]*f,c},s.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},s.prototype.mmult=function(o,c){for(var h=c||new s,u=0;u<3;u++)for(var l=0;l<3;l++){for(var f=0,p=0;p<3;p++)f+=o.elements[u+p*3]*this.elements[p+l*3];h.elements[u+l*3]=f}return h},s.prototype.scale=function(o,c){c=c||new s;for(var h=this.elements,u=c.elements,l=0;l!==3;l++)u[3*l+0]=o.x*h[3*l+0],u[3*l+1]=o.y*h[3*l+1],u[3*l+2]=o.z*h[3*l+2];return c},s.prototype.solve=function(o,c){c=c||new r;for(var h=3,u=4,l=[],f=0;f<h*u;f++)l.push(0);var f,p;for(f=0;f<3;f++)for(p=0;p<3;p++)l[f+u*p]=this.elements[f+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,d=4,_;do{if(f=g-v,l[f+u*f]===0){for(p=f+1;p<g;p++)if(l[f+u*p]!==0){m=d;do _=d-m,l[_+u*f]+=l[_+u*p];while(--m);break}}if(l[f+u*f]!==0)for(p=f+1;p<g;p++){var y=l[f+u*p]/l[f+u*f];m=d;do _=d-m,l[_+u*p]=_<=f?0:l[_+u*p]-l[_+u*f]*y;while(--m)}}while(--v);if(c.z=l[2*u+3]/l[2*u+2],c.y=(l[1*u+3]-l[1*u+2]*c.z)/l[1*u+1],c.x=(l[0*u+3]-l[0*u+2]*c.z-l[0*u+1]*c.y)/l[0*u+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},s.prototype.e=function(o,c,h){if(h===void 0)return this.elements[c+3*o];this.elements[c+3*o]=h},s.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},s.prototype.toString=function(){for(var o="",c=",",h=0;h<9;h++)o+=this.elements[h]+c;return o},s.prototype.reverse=function(o){o=o||new s;for(var c=3,h=6,u=[],l=0;l<c*h;l++)u.push(0);var l,f;for(l=0;l<3;l++)for(f=0;f<3;f++)u[l+h*f]=this.elements[l+3*f];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var p=3,v=p,g,m=h,d;do{if(l=v-p,u[l+h*l]===0){for(f=l+1;f<v;f++)if(u[l+h*f]!==0){g=m;do d=m-g,u[d+h*l]+=u[d+h*f];while(--g);break}}if(u[l+h*l]!==0)for(f=l+1;f<v;f++){var _=u[l+h*f]/u[l+h*l];g=m;do d=m-g,u[d+h*f]=d<=l?0:u[d+h*f]-u[d+h*l]*_;while(--g)}}while(--p);l=2;do{f=l-1;do{var _=u[l+h*f]/u[l+h*l];g=h;do d=h-g,u[d+h*f]=u[d+h*f]-u[d+h*l]*_;while(--g)}while(f--)}while(--l);l=2;do{var _=1/u[l+h*l];g=h;do d=h-g,u[d+h*l]=u[d+h*l]*_;while(--g)}while(l--);l=2;do{f=2;do{if(d=u[c+f+h*l],isNaN(d)||d===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,f,d)}while(f--)}while(l--);return o},s.prototype.setRotationFromQuaternion=function(o){var c=o.x,h=o.y,u=o.z,l=o.w,f=c+c,p=h+h,v=u+u,g=c*f,m=c*p,d=c*v,_=h*p,y=h*v,x=u*v,A=l*f,P=l*p,I=l*v,V=this.elements;return V[3*0+0]=1-(_+x),V[3*0+1]=m-I,V[3*0+2]=d+P,V[3*1+0]=m+I,V[3*1+1]=1-(g+x),V[3*1+2]=y-A,V[3*2+0]=d-P,V[3*2+1]=y+A,V[3*2+2]=1-(g+_),this},s.prototype.transpose=function(o){o=o||new s;for(var c=o.elements,h=this.elements,u=0;u!==3;u++)for(var l=0;l!==3;l++)c[3*u+l]=h[3*l+u];return o}},{"./Vec3":30}],28:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(f,p,v,g){this.x=f!==void 0?f:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(f,p,v,g){this.x=f,this.y=p,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(f,p){var v=Math.sin(p*.5);this.x=f.x*v,this.y=f.y*v,this.z=f.z*v,this.w=Math.cos(p*.5)},s.prototype.toAxisAngle=function(f){f=f||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(f.x=this.x,f.y=this.y,f.z=this.z):(f.x=this.x/v,f.y=this.y/v,f.z=this.z/v),[f,p]};var o=new r,c=new r;s.prototype.setFromVectors=function(f,p){if(f.isAntiparallelTo(p)){var v=o,g=c;f.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=f.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(f.norm(),2)*Math.pow(p.norm(),2))+f.dot(p),this.normalize()}};var h=new r,u=new r,l=new r;s.prototype.mult=function(f,p){p=p||new s;var v=this.w,g=h,m=u,d=l;return g.set(this.x,this.y,this.z),m.set(f.x,f.y,f.z),p.w=v*f.w-g.dot(m),g.cross(m,d),p.x=v*m.x+f.w*g.x+d.x,p.y=v*m.y+f.w*g.y+d.y,p.z=v*m.z+f.w*g.z+d.z,p},s.prototype.inverse=function(f){var p=this.x,v=this.y,g=this.z,m=this.w;f=f||new s,this.conjugate(f);var d=1/(p*p+v*v+g*g+m*m);return f.x*=d,f.y*=d,f.z*=d,f.w*=d,f},s.prototype.conjugate=function(f){return f=f||new s,f.x=-this.x,f.y=-this.y,f.z=-this.z,f.w=this.w,f},s.prototype.normalize=function(){var f=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(f=1/f,this.x*=f,this.y*=f,this.z*=f,this.w*=f)},s.prototype.normalizeFast=function(){var f=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;f===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=f,this.y*=f,this.z*=f,this.w*=f)},s.prototype.vmult=function(f,p){p=p||new r;var v=f.x,g=f.y,m=f.z,d=this.x,_=this.y,y=this.z,x=this.w,A=x*v+_*m-y*g,P=x*g+y*v-d*m,I=x*m+d*g-_*v,V=-d*v-_*g-y*m;return p.x=A*x+V*-d+P*-y-I*-_,p.y=P*x+V*-_+I*-d-A*-y,p.z=I*x+V*-y+A*-_-P*-d,p},s.prototype.copy=function(f){return this.x=f.x,this.y=f.y,this.z=f.z,this.w=f.w,this},s.prototype.toEuler=function(f,p){p=p||"YZX";var v,g,m,d=this.x,_=this.y,y=this.z,x=this.w;switch(p){case"YZX":var A=d*_+y*x;if(A>.499&&(v=2*Math.atan2(d,x),g=Math.PI/2,m=0),A<-.499&&(v=-2*Math.atan2(d,x),g=-Math.PI/2,m=0),isNaN(v)){var P=d*d,I=_*_,V=y*y;v=Math.atan2(2*_*x-2*d*y,1-2*I-2*V),g=Math.asin(2*A),m=Math.atan2(2*d*x-2*_*y,1-2*P-2*V)}break;default:throw new Error("Euler order "+p+" not supported yet.")}f.y=v,f.z=g,f.x=m},s.prototype.setFromEuler=function(f,p,v,g){g=g||"XYZ";var m=Math.cos(f/2),d=Math.cos(p/2),_=Math.cos(v/2),y=Math.sin(f/2),x=Math.sin(p/2),A=Math.sin(v/2);return g==="XYZ"?(this.x=y*d*_+m*x*A,this.y=m*x*_-y*d*A,this.z=m*d*A+y*x*_,this.w=m*d*_-y*x*A):g==="YXZ"?(this.x=y*d*_+m*x*A,this.y=m*x*_-y*d*A,this.z=m*d*A-y*x*_,this.w=m*d*_+y*x*A):g==="ZXY"?(this.x=y*d*_-m*x*A,this.y=m*x*_+y*d*A,this.z=m*d*A+y*x*_,this.w=m*d*_-y*x*A):g==="ZYX"?(this.x=y*d*_-m*x*A,this.y=m*x*_+y*d*A,this.z=m*d*A-y*x*_,this.w=m*d*_+y*x*A):g==="YZX"?(this.x=y*d*_+m*x*A,this.y=m*x*_+y*d*A,this.z=m*d*A-y*x*_,this.w=m*d*_-y*x*A):g==="XZY"&&(this.x=y*d*_-m*x*A,this.y=m*x*_-y*d*A,this.z=m*d*A+y*x*_,this.w=m*d*_+y*x*A),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var r=e("./Vec3"),s=e("./Quaternion");n.exports=o;function o(h){h=h||{},this.position=new r,h.position&&this.position.copy(h.position),this.quaternion=new s,h.quaternion&&this.quaternion.copy(h.quaternion)}var c=new s;o.pointToLocalFrame=function(h,u,l,p){var p=p||new r;return l.vsub(h,p),u.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(h,u){return o.pointToLocalFrame(this.position,this.quaternion,h,u)},o.pointToWorldFrame=function(h,u,l,p){var p=p||new r;return u.vmult(l,p),p.vadd(h,p),p},o.prototype.pointToWorld=function(h,u){return o.pointToWorldFrame(this.position,this.quaternion,h,u)},o.prototype.vectorToWorldFrame=function(h,l){var l=l||new r;return this.quaternion.vmult(h,l),l},o.vectorToWorldFrame=function(h,u,l){return h.vmult(u,l),l},o.vectorToLocalFrame=function(h,u,l,p){var p=p||new r;return u.w*=-1,u.vmult(l,p),u.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=s;var r=e("./Mat3");function s(u,l,f){this.x=u||0,this.y=l||0,this.z=f||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(u,l){var f=u.x,p=u.y,v=u.z,g=this.x,m=this.y,d=this.z;return l=l||new s,l.x=m*v-d*p,l.y=d*f-g*v,l.z=g*p-m*f,l},s.prototype.set=function(u,l,f){return this.x=u,this.y=l,this.z=f,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(u,l){if(l)l.x=u.x+this.x,l.y=u.y+this.y,l.z=u.z+this.z;else return new s(this.x+u.x,this.y+u.y,this.z+u.z)},s.prototype.vsub=function(u,l){if(l)l.x=this.x-u.x,l.y=this.y-u.y,l.z=this.z-u.z;else return new s(this.x-u.x,this.y-u.y,this.z-u.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var u=this.x,l=this.y,f=this.z,p=Math.sqrt(u*u+l*l+f*f);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},s.prototype.unit=function(u){u=u||new s;var l=this.x,f=this.y,p=this.z,v=Math.sqrt(l*l+f*f+p*p);return v>0?(v=1/v,u.x=l*v,u.y=f*v,u.z=p*v):(u.x=1,u.y=0,u.z=0),u},s.prototype.norm=function(){var u=this.x,l=this.y,f=this.z;return Math.sqrt(u*u+l*l+f*f)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(u){var l=this.x,f=this.y,p=this.z,v=u.x,g=u.y,m=u.z;return Math.sqrt((v-l)*(v-l)+(g-f)*(g-f)+(m-p)*(m-p))},s.prototype.distanceSquared=function(u){var l=this.x,f=this.y,p=this.z,v=u.x,g=u.y,m=u.z;return(v-l)*(v-l)+(g-f)*(g-f)+(m-p)*(m-p)},s.prototype.mult=function(u,l){l=l||new s;var f=this.x,p=this.y,v=this.z;return l.x=u*f,l.y=u*p,l.z=u*v,l},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var o=new s,c=new s;s.prototype.tangents=function(u,l){var f=this.norm();if(f>0){var p=o,v=1/f;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,u)):(g.set(0,1,0),p.cross(g,u)),p.cross(u,l)}else u.set(1,0,0),l.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},s.prototype.lerp=function(u,l,f){var p=this.x,v=this.y,g=this.z;f.x=p+(u.x-p)*l,f.y=v+(u.y-v)*l,f.z=g+(u.z-g)*l},s.prototype.almostEquals=function(u,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-u.x)>l||Math.abs(this.y-u.y)>l||Math.abs(this.z-u.z)>l)},s.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new s;s.prototype.isAntiparallelTo=function(u,l){return this.negate(h),h.almostEquals(u,l)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var h=e("../collision/AABB"),u=e("../shapes/Box");function l(L){L=L||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof L.collisionFilterGroup=="number"?L.collisionFilterGroup:1,this.collisionFilterMask=typeof L.collisionFilterMask=="number"?L.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,L.position&&this.position.copy(L.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,L.velocity&&this.velocity.copy(L.velocity),this.initVelocity=new s,this.force=new s;var O=typeof L.mass=="number"?L.mass:0;this.mass=O,this.invMass=O>0?1/O:0,this.material=L.material||null,this.linearDamping=typeof L.linearDamping=="number"?L.linearDamping:.01,this.type=O<=0?l.STATIC:l.DYNAMIC,typeof L.type==typeof l.STATIC&&(this.type=L.type),this.allowSleep=typeof L.allowSleep<"u"?L.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof L.sleepSpeedLimit<"u"?L.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof L.sleepTimeLimit<"u"?L.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new c,L.quaternion&&this.quaternion.copy(L.quaternion),this.initQuaternion=new c,this.angularVelocity=new s,L.angularVelocity&&this.angularVelocity.copy(L.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof L.fixedRotation<"u"?L.fixedRotation:!1,this.angularDamping=typeof L.angularDamping<"u"?L.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new s,L.shape&&this.addShape(L.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var L=this.sleepState;this.sleepState=0,L===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(L){if(this.allowSleep){var O=this.sleepState,q=this.velocity.norm2()+this.angularVelocity.norm2(),D=Math.pow(this.sleepSpeedLimit,2);O===l.AWAKE&&q<D?(this.sleepState=l.SLEEPY,this.timeLastSleepy=L,this.dispatchEvent(l.sleepyEvent)):O===l.SLEEPY&&q>D?this.wakeUp():O===l.SLEEPY&&L-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(L,q){var q=q||new s;return L.vsub(this.position,q),this.quaternion.conjugate().vmult(q,q),q},l.prototype.vectorToLocalFrame=function(L,q){var q=q||new s;return this.quaternion.conjugate().vmult(L,q),q},l.prototype.pointToWorldFrame=function(L,q){var q=q||new s;return this.quaternion.vmult(L,q),q.vadd(this.position,q),q},l.prototype.vectorToWorldFrame=function(L,q){var q=q||new s;return this.quaternion.vmult(L,q),q};var f=new s,p=new c;l.prototype.addShape=function(L,O,q){var D=new s,z=new c;return O&&D.copy(O),q&&z.copy(q),this.shapes.push(L),this.shapeOffsets.push(D),this.shapeOrientations.push(z),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var L=this.shapes,O=this.shapeOffsets,q=L.length,D=0,z=0;z!==q;z++){var J=L[z];J.updateBoundingSphereRadius();var F=O[z].norm(),U=J.boundingSphereRadius;F+U>D&&(D=F+U)}this.boundingRadius=D};var v=new h;l.prototype.computeAABB=function(){for(var L=this.shapes,O=this.shapeOffsets,q=this.shapeOrientations,D=L.length,z=f,J=p,F=this.quaternion,U=this.aabb,Z=v,k=0;k!==D;k++){var N=L[k];q[k].mult(F,J),J.vmult(O[k],z),z.vadd(this.position,z),N.calculateWorldAABB(z,J,Z.lowerBound,Z.upperBound),k===0?U.copy(Z):U.extend(Z)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(L){var O=this.invInertia;if(!(O.x===O.y&&O.y===O.z&&!L)){var q=g,D=m;q.setRotationFromQuaternion(this.quaternion),q.transpose(D),q.scale(O,q),q.mmult(D,this.invInertiaWorld)}};var d=new s,_=new s;l.prototype.applyForce=function(L,O){if(this.type===l.DYNAMIC){var q=d;O.vsub(this.position,q);var D=_;q.cross(L,D),this.force.vadd(L,this.force),this.torque.vadd(D,this.torque)}};var y=new s,x=new s;l.prototype.applyLocalForce=function(L,O){if(this.type===l.DYNAMIC){var q=y,D=x;this.vectorToWorldFrame(L,q),this.pointToWorldFrame(O,D),this.applyForce(q,D)}};var A=new s,P=new s,I=new s;l.prototype.applyImpulse=function(L,O){if(this.type===l.DYNAMIC){var q=A;O.vsub(this.position,q);var D=P;D.copy(L),D.mult(this.invMass,D),this.velocity.vadd(D,this.velocity);var z=I;q.cross(L,z),this.invInertiaWorld.vmult(z,z),this.angularVelocity.vadd(z,this.angularVelocity)}};var V=new s,E=new s;l.prototype.applyLocalImpulse=function(L,O){if(this.type===l.DYNAMIC){var q=V,D=E;this.vectorToWorldFrame(L,q),this.pointToWorldFrame(O,D),this.applyImpulse(q,D)}};var S=new s;l.prototype.updateMassProperties=function(){var L=S;this.invMass=this.mass>0?1/this.mass:0;var O=this.inertia,q=this.fixedRotation;this.computeAABB(),L.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(L,this.mass,O),this.invInertia.set(O.x>0&&!q?1/O.x:0,O.y>0&&!q?1/O.y:0,O.z>0&&!q?1/O.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(L,O){var q=new s;return L.vsub(this.position,q),this.angularVelocity.cross(q,O),this.velocity.vadd(O,O),O}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=h;function h(F){this.chassisBody=F.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof F.indexRightAxis<"u"?F.indexRightAxis:1,this.indexForwardAxis=typeof F.indexForwardAxis<"u"?F.indexForwardAxis:0,this.indexUpAxis=typeof F.indexUpAxis<"u"?F.indexUpAxis:2}new r,new r,new r;var u=new r,l=new r,f=new r;new o,h.prototype.addWheel=function(F){F=F||{};var U=new c(F),Z=this.wheelInfos.length;return this.wheelInfos.push(U),Z},h.prototype.setSteeringValue=function(F,U){var Z=this.wheelInfos[U];Z.steering=F},new r,h.prototype.applyEngineForce=function(F,U){this.wheelInfos[U].engineForce=F},h.prototype.setBrake=function(F,U){this.wheelInfos[U].brake=F},h.prototype.addToWorld=function(F){this.constraints,F.add(this.chassisBody);var U=this;this.preStepCallback=function(){U.updateVehicle(F.dt)},F.addEventListener("preStep",this.preStepCallback),this.world=F},h.prototype.getVehicleAxisWorld=function(F,U){U.set(F===0?1:0,F===1?1:0,F===2?1:0),this.chassisBody.vectorToWorldFrame(U,U)},h.prototype.updateVehicle=function(F){for(var U=this.wheelInfos,Z=U.length,k=this.chassisBody,N=0;N<Z;N++)this.updateWheelTransform(N);this.currentVehicleSpeedKmHour=3.6*k.velocity.norm();var H=new r;this.getVehicleAxisWorld(this.indexForwardAxis,H),H.dot(k.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var N=0;N<Z;N++)this.castRay(U[N]);this.updateSuspension(F);for(var T=new r,b=new r,N=0;N<Z;N++){var R=U[N],X=R.suspensionForce;X>R.maxSuspensionForce&&(X=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(X*F,T),R.raycastResult.hitPointWorld.vsub(k.position,b),k.applyImpulse(T,R.raycastResult.hitPointWorld)}this.updateFriction(F);var nt=new r,it=new r,K=new r;for(N=0;N<Z;N++){var R=U[N];k.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,K);var tt=1;switch(this.indexUpAxis){case 1:tt=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,it);var ct=it.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(ct,nt),it.vsub(nt,it);var Y=it.dot(K);R.deltaRotation=tt*Y*F/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*F),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},h.prototype.updateSuspension=function(F){for(var U=this.chassisBody,Z=U.mass,k=this.wheelInfos,N=k.length,H=0;H<N;H++){var T=k[H];if(T.isInContact){var b,R=T.suspensionRestLength,X=T.suspensionLength,nt=R-X;b=T.suspensionStiffness*nt*T.clippedInvContactDotSuspension;var it=T.suspensionRelativeVelocity,K;it<0?K=T.dampingCompression:K=T.dampingRelaxation,b-=K*it,T.suspensionForce=b*Z,T.suspensionForce<0&&(T.suspensionForce=0)}else T.suspensionForce=0}},h.prototype.removeFromWorld=function(F){this.constraints,F.remove(this.chassisBody),F.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;h.prototype.castRay=function(F){var U=p,Z=v;this.updateWheelTransformWorld(F);var k=this.chassisBody,N=-1,H=F.suspensionRestLength+F.radius;F.directionWorld.scale(H,U);var T=F.chassisConnectionPointWorld;T.vadd(U,Z);var b=F.raycastResult;b.reset();var R=k.collisionResponse;k.collisionResponse=!1,this.world.rayTest(T,Z,b),k.collisionResponse=R;var X=b.body;if(F.raycastResult.groundObject=0,X){N=b.distance,F.raycastResult.hitNormalWorld=b.hitNormalWorld,F.isInContact=!0;var nt=b.distance;F.suspensionLength=nt-F.radius;var it=F.suspensionRestLength-F.maxSuspensionTravel,K=F.suspensionRestLength+F.maxSuspensionTravel;F.suspensionLength<it&&(F.suspensionLength=it),F.suspensionLength>K&&(F.suspensionLength=K,F.raycastResult.reset());var tt=F.raycastResult.hitNormalWorld.dot(F.directionWorld),ct=new r;k.getVelocityAtWorldPoint(F.raycastResult.hitPointWorld,ct);var Y=F.raycastResult.hitNormalWorld.dot(ct);if(tt>=-.1)F.suspensionRelativeVelocity=0,F.clippedInvContactDotSuspension=1/.1;else{var Ct=-1/tt;F.suspensionRelativeVelocity=Y*Ct,F.clippedInvContactDotSuspension=Ct}}else F.suspensionLength=F.suspensionRestLength+0*F.maxSuspensionTravel,F.suspensionRelativeVelocity=0,F.directionWorld.scale(-1,F.raycastResult.hitNormalWorld),F.clippedInvContactDotSuspension=1;return N},h.prototype.updateWheelTransformWorld=function(F){F.isInContact=!1;var U=this.chassisBody;U.pointToWorldFrame(F.chassisConnectionPointLocal,F.chassisConnectionPointWorld),U.vectorToWorldFrame(F.directionLocal,F.directionWorld),U.vectorToWorldFrame(F.axleLocal,F.axleWorld)},h.prototype.updateWheelTransform=function(F){var U=u,Z=l,k=f,N=this.wheelInfos[F];this.updateWheelTransformWorld(N),N.directionLocal.scale(-1,U),Z.copy(N.axleLocal),U.cross(Z,k),k.normalize(),Z.normalize();var H=N.steering,T=new s;T.setFromAxisAngle(U,H);var b=new s;b.setFromAxisAngle(Z,N.rotation);var R=N.worldTransform.quaternion;this.chassisBody.quaternion.mult(T,R),R.mult(b,R),R.normalize();var X=N.worldTransform.position;X.copy(N.directionWorld),X.scale(N.suspensionLength,X),X.vadd(N.chassisConnectionPointWorld,X)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];h.prototype.getWheelTransformWorld=function(F){return this.wheelInfos[F].worldTransform};var m=new r,d=[],_=[],y=1;h.prototype.updateFriction=function(F){for(var U=m,Z=this.wheelInfos,k=Z.length,N=this.chassisBody,H=_,T=d,b=0;b<k;b++){var R=Z[b],X=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,H[b]||(H[b]=new r),T[b]||(T[b]=new r)}for(var b=0;b<k;b++){var R=Z[b],X=R.raycastResult.body;if(X){var nt=T[b],it=this.getWheelTransformWorld(b);it.vectorToWorldFrame(g[this.indexRightAxis],nt);var K=R.raycastResult.hitNormalWorld,tt=nt.dot(K);K.scale(tt,U),nt.vsub(U,nt),nt.normalize(),K.cross(nt,H[b]),H[b].normalize(),R.sideImpulse=J(N,R.raycastResult.hitPointWorld,X,R.raycastResult.hitPointWorld,nt),R.sideImpulse*=y}}var ct=1,Y=.5;this.sliding=!1;for(var b=0;b<k;b++){var R=Z[b],X=R.raycastResult.body,Ct=0;if(R.slipInfo=1,X){var ht=0,st=R.brake?R.brake:ht;Ct=I(N,X,R.raycastResult.hitPointWorld,H[b],st),Ct+=R.engineForce*F;var at=st/Ct;R.slipInfo*=at}if(R.forwardImpulse=0,R.skidInfo=1,X){R.skidInfo=1;var kt=R.suspensionForce*F*R.frictionSlip,Tt=kt,C=kt*Tt;R.forwardImpulse=Ct;var M=R.forwardImpulse*Y,Q=R.sideImpulse*ct,ft=M*M+Q*Q;if(R.sliding=!1,ft>C){this.sliding=!0,R.sliding=!0;var at=kt/Math.sqrt(ft);R.skidInfo*=at}}}if(this.sliding)for(var b=0;b<k;b++){var R=Z[b];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var b=0;b<k;b++){var R=Z[b],ut=new r;if(ut.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var pt=new r;H[b].scale(R.forwardImpulse,pt),N.applyImpulse(pt,ut)}if(R.sideImpulse!==0){var X=R.raycastResult.body,Et=new r;Et.copy(R.raycastResult.hitPointWorld);var _t=new r;T[b].scale(R.sideImpulse,_t),N.pointToLocalFrame(ut,ut),ut["xyz"[this.indexUpAxis]]*=R.rollInfluence,N.pointToWorldFrame(ut,ut),N.applyImpulse(_t,ut),_t.scale(-1,_t),X.applyImpulse(_t,Et)}}};var x=new r,A=new r,P=new r;function I(F,U,Z,k,N){var H=0,T=Z,b=x,R=A,X=P;F.getVelocityAtWorldPoint(T,b),U.getVelocityAtWorldPoint(T,R),b.vsub(R,X);var nt=k.dot(X),it=O(F,Z,k),K=O(U,Z,k),tt=1,ct=tt/(it+K);return H=-nt*ct,N<H&&(H=N),H<-N&&(H=-N),H}var V=new r,E=new r,S=new r,L=new r;function O(F,U,Z){var k=V,N=E,H=S,T=L;return U.vsub(F.position,k),k.cross(Z,N),F.invInertiaWorld.vmult(N,T),T.cross(k,H),F.invMass+Z.dot(H)}var q=new r,D=new r,z=new r;function J(F,U,Z,k,N,tt){var T=N.norm2();if(T>1.1)return 0;var b=q,R=D,X=z;F.getVelocityAtWorldPoint(U,b),Z.getVelocityAtWorldPoint(k,R),b.vsub(R,X);var nt=N.dot(X),it=.2,K=1/(F.invMass+Z.invMass),tt=-it*nt*K;return tt}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var r=e("./Body"),s=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),h=e("../constraints/HingeConstraint");n.exports=u;function u(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var d=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(d);var _=new h(this.chassisBody,v,{pivotA:g,axisA:d,pivotB:c.ZERO,axisB:d,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),d=Math.sin(p),_=g.x,y=g.y;this.constraints[v].axisA.set(m*_-d*y,d*_+m*y,0)},u.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},u.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;u.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},u.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],d=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),d.vadd(l,d)},u.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},u.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var f=new c;u.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,f),m.dot(f)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,d=v.id,_=this.smoothingRadius*this.smoothingRadius,y=o,x=0;x!==m;x++){var A=this.particles[x];A.position.vsub(v.position,y),d!==A.id&&y.norm2()<_&&g.push(A)}};var c=new r,h=new r,u=new r,l=new r,f=new r,p=new r;s.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,d=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var A=x.length,P=0,I=0;I!==A;I++){y.position.vsub(x[I].position,g);var V=g.norm(),E=this.w(V);P+=x[I].mass*E}this.densities[_]=P,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var S=h,L=u,O=l,q=f,D=p,_=0;_!==v;_++){var z=this.particles[_];S.set(0,0,0),L.set(0,0,0);for(var J,F,x=this.neighbors[_],A=x.length,I=0;I!==A;I++){var U=x[I];z.position.vsub(U.position,q);var Z=q.norm();J=-U.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+d)+this.pressures[I]/(this.densities[I]*this.densities[I]+d)),this.gradw(q,O),O.mult(J,O),S.vadd(O,S),U.velocity.vsub(z.velocity,D),D.mult(1/(1e-4+this.densities[_]*this.densities[I])*this.viscosity*U.mass,D),F=this.nablaw(Z),D.mult(F,D),L.vadd(D,L)}L.mult(z.mass,L),S.mult(z.mass,S),z.force.vadd(L,z.force),z.force.vadd(S,z.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),d=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(d,9))*Math.pow(d*d-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}s.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},s.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},s.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},s.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,c=new r,h=new r,u=new r,l=new r,f=new r,p=new r,v=new r,g=new r,m=new r,d=new r;s.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,A=this.bodyA,P=this.bodyB,I=o,V=c,E=h,S=u,L=d,O=l,q=f,D=p,z=v,J=g,F=m;this.getWorldAnchorA(O),this.getWorldAnchorB(q),O.vsub(A.position,D),q.vsub(P.position,z),q.vsub(O,I);var U=I.norm();V.copy(I),V.normalize(),P.velocity.vsub(A.velocity,E),P.angularVelocity.cross(z,L),E.vadd(L,E),A.angularVelocity.cross(D,L),E.vsub(L,E),V.mult(-_*(U-x)-y*E.dot(V),S),A.force.vsub(S,A.force),P.force.vadd(S,P.force),D.cross(S,J),z.cross(S,F),A.torque.vsub(J,A.torque),P.torque.vadd(F,P.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var r=e("../math/Vec3"),s=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=h;function h(f){f=c.defaults(f,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=f.maxSuspensionTravel,this.customSlidingRotationalSpeed=f.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=f.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=f.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=f.chassisConnectionPointWorld.clone(),this.directionLocal=f.directionLocal.clone(),this.directionWorld=f.directionWorld.clone(),this.axleLocal=f.axleLocal.clone(),this.axleWorld=f.axleWorld.clone(),this.suspensionRestLength=f.suspensionRestLength,this.suspensionMaxLength=f.suspensionMaxLength,this.radius=f.radius,this.suspensionStiffness=f.suspensionStiffness,this.dampingCompression=f.dampingCompression,this.dampingRelaxation=f.dampingRelaxation,this.frictionSlip=f.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=f.rollInfluence,this.maxSuspensionForce=f.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=f.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var l=new r,u=new r,l=new r;h.prototype.updateWheel=function(f){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(f.position,u),f.getVelocityAtWorldPoint(u,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,f=this.halfExtents.y,p=this.halfExtents.z,v=s,g=[new v(-l,-f,-p),new v(l,-f,-p),new v(l,f,-p),new v(-l,f,-p),new v(-l,-f,p),new v(l,-f,p),new v(l,f,p),new v(-l,f,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var d=new o(g,m);this.convexPolyhedronRepresentation=d,d.material=this.material},c.prototype.calculateLocalInertia=function(l,f){return f=f||new s,c.calculateInertia(this.halfExtents,l,f),f},c.calculateInertia=function(l,f,p){var v=l;p.x=1/12*f*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*f*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*f*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,f){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),f!==void 0)for(var g=0;g!==p.length;g++)f.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new s;new s,c.prototype.forEachWorldCorner=function(l,f,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)h.set(g[m][0],g[m][1],g[m][2]),f.vmult(h,h),l.vadd(h,h),p(h.x,h.y,h.z)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];c.prototype.calculateWorldAABB=function(l,f,p,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var m=u[0];f.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var d=1;d<8;d++){var m=u[d];f.vmult(m,m),l.vadd(m,m);var _=m.x,y=m.y,x=m.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<p.x&&(p.x=_),y<p.y&&(p.y=y),x<p.z&&(p.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(N,H,T){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=N||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=H||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=T?T.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var h=new s;c.prototype.computeEdges=function(){var N=this.faces,H=this.vertices;H.length;var T=this.uniqueEdges;T.length=0;for(var b=h,R=0;R!==N.length;R++)for(var X=N[R],nt=X.length,it=0;it!==nt;it++){var K=(it+1)%nt;H[X[it]].vsub(H[X[K]],b),b.normalize();for(var tt=!1,ct=0;ct!==T.length;ct++)if(T[ct].almostEquals(b)||T[ct].almostEquals(b)){tt=!0;break}tt||T.push(b.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var N=0;N<this.faces.length;N++){for(var H=0;H<this.faces[N].length;H++)if(!this.vertices[this.faces[N][H]])throw new Error("Vertex "+this.faces[N][H]+" not found!");var T=this.faceNormals[N]||new s;this.getFaceNormal(N,T),T.negate(T),this.faceNormals[N]=T;var b=this.vertices[this.faces[N][0]];if(T.dot(b)<0){console.error(".faceNormals["+N+"] = Vec3("+T.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var H=0;H<this.faces[N].length;H++)console.warn(".vertices["+this.faces[N][H]+"] = Vec3("+this.vertices[this.faces[N][H]].toString()+")")}}};var u=new s,l=new s;c.computeNormal=function(N,H,T,b){H.vsub(N,l),T.vsub(H,u),u.cross(l,b),b.isZero()||b.normalize()},c.prototype.getFaceNormal=function(N,H){var T=this.faces[N],b=this.vertices[T[0]],R=this.vertices[T[1]],X=this.vertices[T[2]];return c.computeNormal(b,R,X,H)};var f=new s;c.prototype.clipAgainstHull=function(N,H,T,b,R,X,nt,it,K){for(var tt=f,ct=-1,Y=-Number.MAX_VALUE,Ct=0;Ct<T.faces.length;Ct++){tt.copy(T.faceNormals[Ct]),R.vmult(tt,tt);var ht=tt.dot(X);ht>Y&&(Y=ht,ct=Ct)}for(var st=[],at=T.faces[ct],kt=at.length,Tt=0;Tt<kt;Tt++){var C=T.vertices[at[Tt]],M=new s;M.copy(C),R.vmult(M,M),b.vadd(M,M),st.push(M)}ct>=0&&this.clipFaceAgainstHull(X,N,H,st,nt,it,K)};var p=new s,v=new s,g=new s,m=new s,d=new s,_=new s;c.prototype.findSeparatingAxis=function(N,H,T,b,R,X,nt,it){var K=p,tt=v,ct=g,Y=m,Ct=d,ht=_,st=Number.MAX_VALUE,at=this;if(at.uniqueAxes)for(var Tt=0;Tt!==at.uniqueAxes.length;Tt++){T.vmult(at.uniqueAxes[Tt],K);var M=at.testSepAxis(K,N,H,T,b,R);if(M===!1)return!1;M<st&&(st=M,X.copy(K))}else for(var kt=nt?nt.length:at.faces.length,Tt=0;Tt<kt;Tt++){var C=nt?nt[Tt]:Tt;K.copy(at.faceNormals[C]),T.vmult(K,K);var M=at.testSepAxis(K,N,H,T,b,R);if(M===!1)return!1;M<st&&(st=M,X.copy(K))}if(N.uniqueAxes)for(var Tt=0;Tt!==N.uniqueAxes.length;Tt++){R.vmult(N.uniqueAxes[Tt],tt);var M=at.testSepAxis(tt,N,H,T,b,R);if(M===!1)return!1;M<st&&(st=M,X.copy(tt))}else for(var Q=it?it.length:N.faces.length,Tt=0;Tt<Q;Tt++){var C=it?it[Tt]:Tt;tt.copy(N.faceNormals[C]),R.vmult(tt,tt);var M=at.testSepAxis(tt,N,H,T,b,R);if(M===!1)return!1;M<st&&(st=M,X.copy(tt))}for(var ft=0;ft!==at.uniqueEdges.length;ft++){T.vmult(at.uniqueEdges[ft],Y);for(var ut=0;ut!==N.uniqueEdges.length;ut++)if(R.vmult(N.uniqueEdges[ut],Ct),Y.cross(Ct,ht),!ht.almostZero()){ht.normalize();var pt=at.testSepAxis(ht,N,H,T,b,R);if(pt===!1)return!1;pt<st&&(st=pt,X.copy(ht))}}return b.vsub(H,ct),ct.dot(X)>0&&X.negate(X),!0};var y=[],x=[];c.prototype.testSepAxis=function(N,H,T,b,R,X){var nt=this;c.project(nt,N,T,b,y),c.project(H,N,R,X,x);var it=y[0],K=y[1],tt=x[0],ct=x[1],Y=it-ct,Ct=tt-K,ht=Y<Ct?Y:Ct;return ht};var A=new s,P=new s;c.prototype.calculateLocalInertia=function(N,H){this.computeLocalAABB(A,P);var T=P.x-A.x,b=P.y-A.y,R=P.z-A.z;H.x=1/12*N*(2*b*2*b+2*R*2*R),H.y=1/12*N*(2*T*2*T+2*R*2*R),H.z=1/12*N*(2*b*2*b+2*T*2*T)},c.prototype.getPlaneConstantOfFace=function(N){var H=this.faces[N],T=this.faceNormals[N],b=this.vertices[H[0]],R=-T.dot(b);return R};var I=new s,V=new s,E=new s,S=new s,L=new s,O=new s,q=new s,D=new s;c.prototype.clipFaceAgainstHull=function(N,H,T,b,R,X,nt){for(var it=I,K=V,tt=E,ct=S,Y=L,Ct=O,ht=q,st=D,at=this,kt=[],Tt=b,C=kt,M=-1,Q=Number.MAX_VALUE,ft=0;ft<at.faces.length;ft++){it.copy(at.faceNormals[ft]),T.vmult(it,it);var ut=it.dot(N);ut<Q&&(Q=ut,M=ft)}if(!(M<0)){var pt=at.faces[M];pt.connectedFaces=[];for(var Et=0;Et<at.faces.length;Et++)for(var _t=0;_t<at.faces[Et].length;_t++)pt.indexOf(at.faces[Et][_t])!==-1&&Et!==M&&pt.connectedFaces.indexOf(Et)===-1&&pt.connectedFaces.push(Et);Tt.length;for(var xt=pt.length,Vt=0;Vt<xt;Vt++){var Zt=at.vertices[pt[Vt]],gt=at.vertices[pt[(Vt+1)%xt]];Zt.vsub(gt,K),tt.copy(K),T.vmult(tt,tt),H.vadd(tt,tt),ct.copy(this.faceNormals[M]),T.vmult(ct,ct),H.vadd(ct,ct),tt.cross(ct,Y),Y.negate(Y),Ct.copy(Zt),T.vmult(Ct,Ct),H.vadd(Ct,Ct),-Ct.dot(Y);var qt;{var se=pt.connectedFaces[Vt];ht.copy(this.faceNormals[se]);var te=this.getPlaneConstantOfFace(se);st.copy(ht),T.vmult(st,st);var qt=te-st.dot(H)}for(this.clipFaceAgainstPlane(Tt,C,st,qt);Tt.length;)Tt.shift();for(;C.length;)Tt.push(C.shift())}ht.copy(this.faceNormals[M]);var te=this.getPlaneConstantOfFace(M);st.copy(ht),T.vmult(st,st);for(var qt=te-st.dot(H),Et=0;Et<Tt.length;Et++){var Gt=st.dot(Tt[Et])+qt;if(Gt<=R&&(console.log("clamped: depth="+Gt+" to minDist="+(R+"")),Gt=R),Gt<=X){var Ot=Tt[Et];if(Gt<=0){var Qt={point:Ot,normal:st,depth:Gt};nt.push(Qt)}}}}},c.prototype.clipFaceAgainstPlane=function(N,H,T,b){var R,X,nt=N.length;if(nt<2)return H;var it=N[N.length-1],K=N[0];R=T.dot(it)+b;for(var tt=0;tt<nt;tt++){if(K=N[tt],X=T.dot(K)+b,R<0)if(X<0){var ct=new s;ct.copy(K),H.push(ct)}else{var ct=new s;it.lerp(K,R/(R-X),ct),H.push(ct)}else if(X<0){var ct=new s;it.lerp(K,R/(R-X),ct),H.push(ct),H.push(K)}it=K,R=X}return H},c.prototype.computeWorldVertices=function(N,H){for(var T=this.vertices.length;this.worldVertices.length<T;)this.worldVertices.push(new s);for(var b=this.vertices,R=this.worldVertices,X=0;X!==T;X++)H.vmult(b[X],R[X]),N.vadd(R[X],R[X]);this.worldVerticesNeedsUpdate=!1},new s,c.prototype.computeLocalAABB=function(N,H){var T=this.vertices.length,b=this.vertices;N.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),H.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<T;R++){var X=b[R];X.x<N.x?N.x=X.x:X.x>H.x&&(H.x=X.x),X.y<N.y?N.y=X.y:X.y>H.y&&(H.y=X.y),X.z<N.z?N.z=X.z:X.z>H.z&&(H.z=X.z)}},c.prototype.computeWorldFaceNormals=function(N){for(var H=this.faceNormals.length;this.worldFaceNormals.length<H;)this.worldFaceNormals.push(new s);for(var T=this.faceNormals,b=this.worldFaceNormals,R=0;R!==H;R++)N.vmult(T[R],b[R]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var N=0,H=this.vertices,T=0,b=H.length;T!==b;T++){var R=H[T].norm2();R>N&&(N=R)}this.boundingSphereRadius=Math.sqrt(N)};var z=new s;c.prototype.calculateWorldAABB=function(N,H,T,b){for(var R=this.vertices.length,X=this.vertices,nt,it,K,tt,ct,Y,Ct=0;Ct<R;Ct++){z.copy(X[Ct]),H.vmult(z,z),N.vadd(z,z);var ht=z;ht.x<nt||nt===void 0?nt=ht.x:(ht.x>tt||tt===void 0)&&(tt=ht.x),ht.y<it||it===void 0?it=ht.y:(ht.y>ct||ct===void 0)&&(ct=ht.y),ht.z<K||K===void 0?K=ht.z:(ht.z>Y||Y===void 0)&&(Y=ht.z)}T.set(nt,it,K),b.set(tt,ct,Y)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(N){N=N||new s;for(var H=this.vertices.length,T=this.vertices,b=0;b<H;b++)N.vadd(T[b],N);return N.mult(1/H,N),N},c.prototype.transformAllPoints=function(N,H){var T=this.vertices.length,b=this.vertices;if(H){for(var R=0;R<T;R++){var X=b[R];H.vmult(X,X)}for(var R=0;R<this.faceNormals.length;R++){var X=this.faceNormals[R];H.vmult(X,X)}}if(N)for(var R=0;R<T;R++){var X=b[R];X.vadd(N,X)}};var J=new s,F=new s,U=new s;c.prototype.pointIsInside=function(N){var H=this.vertices.length,T=this.vertices,b=this.faces,R=this.faceNormals,X=null,nt=this.faces.length,it=J;this.getAveragePointLocal(it);for(var K=0;K<nt;K++){this.faces[K].length;var H=R[K],tt=T[b[K][0]],ct=F;N.vsub(tt,ct);var Y=H.dot(ct),Ct=U;it.vsub(tt,Ct);var ht=H.dot(Ct);if(Y<0&&ht>0||Y>0&&ht<0)return!1}return X?1:-1},new s;var Z=new s,k=new s;c.project=function(N,H,T,b,R){var X=N.vertices.length,nt=Z,it=0,K=0,tt=k,ct=N.vertices;tt.setZero(),o.vectorToLocalFrame(T,b,H,nt),o.pointToLocalFrame(T,b,tt,tt);var Y=tt.dot(nt);K=it=ct[0].dot(nt);for(var Ct=1;Ct<X;Ct++){var ht=ct[Ct].dot(nt);ht>it&&(it=ht),ht<K&&(K=ht)}if(K-=Y,it-=Y,K>it){var st=K;K=it,it=st}R[0]=it,R[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(h,u,l,f){var p=f,v=[],g=[],m=[],d=[],_=[],y=Math.cos,x=Math.sin;v.push(new s(u*y(0),u*x(0),-l*.5)),d.push(0),v.push(new s(h*y(0),h*x(0),l*.5)),_.push(1);for(var A=0;A<p;A++){var P=2*Math.PI/p*(A+1),I=2*Math.PI/p*(A+.5);A<p-1?(v.push(new s(u*y(P),u*x(P),-l*.5)),d.push(2*A+2),v.push(new s(h*y(P),h*x(P),l*.5)),_.push(2*A+3),m.push([2*A+2,2*A+3,2*A+1,2*A])):m.push([0,1,2*A+1,2*A]),(p%2===1||A<p/2)&&g.push(new s(y(I),x(I),0))}m.push(_),g.push(new s(0,0,1));for(var V=[],A=0;A<d.length;A++)V.push(d[d.length-A-1]);m.push(V),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var r=e("./Shape"),s=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=h;function h(u,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new r,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,l=u[0][0],f=0;f!==u.length;f++)for(var p=0;p!==u[f].length;p++){var v=u[f][p];v<l&&(l=v)}this.minValue=l},h.prototype.updateMaxValue=function(){for(var u=this.data,l=u[0][0],f=0;f!==u.length;f++)for(var p=0;p!==u[f].length;p++){var v=u[f][p];v>l&&(l=v)}this.maxValue=l},h.prototype.setHeightValueAtIndex=function(u,l,f){var p=this.data;p[u][l]=f,this.clearCachedConvexTrianglePillar(u,l,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,l,!0),this.clearCachedConvexTrianglePillar(u-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(u,l-1,!0),this.clearCachedConvexTrianglePillar(u,l-1,!1)),l>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,l-1,!0)},h.prototype.getRectMinMax=function(u,l,f,p,v){v=v||[];for(var g=this.data,m=this.minValue,d=u;d<=f;d++)for(var _=l;_<=p;_++){var y=g[d][_];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},h.prototype.getIndexOfPosition=function(u,l,f,p){var v=this.elementSize,g=this.data,m=Math.floor(u/v),d=Math.floor(l/v);return f[0]=m,f[1]=d,p&&(m<0&&(m=0),d<0&&(d=0),m>=g.length-1&&(m=g.length-1),d>=g[0].length-1&&(d=g[0].length-1)),!(m<0||d<0||m>=g.length-1||d>=g[0].length-1)},h.prototype.getHeightAt=function(u,l,f){var p=[];this.getIndexOfPosition(u,l,p,f);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,l,f){return u+"_"+l+"_"+(f?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,l,f){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,l,f)]},h.prototype.setCachedConvexTrianglePillar=function(u,l,f,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,l,f)]={convex:p,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(u,l,f){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,l,f)]},h.prototype.getConvexTrianglePillar=function(u,l,f){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,l,f);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new s,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,d=p.faces;p.vertices.length=6;for(var _=0;_<6;_++)p.vertices[_]||(p.vertices[_]=new o);d.length=5;for(var _=0;_<5;_++)d[_]||(d[_]=[]);var y=p.vertices,x=(Math.min(g[u][l],g[u+1][l],g[u][l+1],g[u+1][l+1])-this.minValue)/2+this.minValue;f?(v.set((u+.75)*m,(l+.75)*m,x),y[0].set(.25*m,.25*m,g[u+1][l+1]-x),y[1].set(-.75*m,.25*m,g[u][l+1]-x),y[2].set(.25*m,-.75*m,g[u+1][l]-x),y[3].set(.25*m,.25*m,-x-1),y[4].set(-.75*m,.25*m,-x-1),y[5].set(.25*m,-.75*m,-x-1),d[0][0]=0,d[0][1]=1,d[0][2]=2,d[1][0]=5,d[1][1]=4,d[1][2]=3,d[2][0]=2,d[2][1]=5,d[2][2]=3,d[2][3]=0,d[3][0]=3,d[3][1]=4,d[3][2]=1,d[3][3]=0,d[4][0]=1,d[4][1]=4,d[4][2]=5,d[4][3]=2):(v.set((u+.25)*m,(l+.25)*m,x),y[0].set(-.25*m,-.25*m,g[u][l]-x),y[1].set(.75*m,-.25*m,g[u+1][l]-x),y[2].set(-.25*m,.75*m,g[u][l+1]-x),y[3].set(-.25*m,-.25*m,-x-1),y[4].set(.75*m,-.25*m,-x-1),y[5].set(-.25*m,.75*m,-x-1),d[0][0]=0,d[0][1]=1,d[0][2]=2,d[1][0]=5,d[1][1]=4,d[1][2]=3,d[2][0]=0,d[2][1]=2,d[2][2]=5,d[2][3]=3,d[3][0]=1,d[3][1]=0,d[3][2]=3,d[3][3]=4,d[4][0]=4,d[4][1]=5,d[4][2]=2,d[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,l,f,p,v)},h.prototype.calculateLocalInertia=function(u,l){return l=l||new o,l.set(0,0,0),l},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,l,f,p){f.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,l=this.elementSize;this.boundingSphereRadius=new o(u.length*l,u[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,h){return h=h||new s,h.set(0,0,0),h},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,h,u,l){u.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(h,u){return u=u||new s,u},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new s;o.prototype.calculateWorldAABB=function(h,u,l,f){c.set(0,0,1),u.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),f.set(p,p,p),c.x===1&&(f.x=h.x),c.y===1&&(f.y=h.y),c.z===1&&(f.z=h.z),c.x===-1&&(l.x=h.x),c.y===-1&&(l.y=h.y),c.z===-1&&(l.z=h.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,h){h=h||new s;var u=2*c*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,h,u,l){for(var f=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];u[g]=c[g]-f,l[g]=c[g]+f}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=u;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),h=e("../utils/Octree");function u(V,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(V),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new c,this.edges=null,this.scale=new s(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new r,u.prototype.constructor=u;var l=new s;u.prototype.updateTree=function(){var V=this.tree;V.reset(),V.aabb.copy(this.aabb);var E=this.scale;V.aabb.lowerBound.x*=1/E.x,V.aabb.lowerBound.y*=1/E.y,V.aabb.lowerBound.z*=1/E.z,V.aabb.upperBound.x*=1/E.x,V.aabb.upperBound.y*=1/E.y,V.aabb.upperBound.z*=1/E.z;for(var S=new c,L=new s,O=new s,q=new s,D=[L,O,q],z=0;z<this.indices.length/3;z++){var J=z*3;this._getUnscaledVertex(this.indices[J],L),this._getUnscaledVertex(this.indices[J+1],O),this._getUnscaledVertex(this.indices[J+2],q),S.setFromPoints(D),V.insert(S,z)}V.removeEmptyNodes()};var f=new c;u.prototype.getTrianglesInAABB=function(V,E){f.copy(V);var S=this.scale,L=S.x,O=S.y,q=S.z,D=f.lowerBound,z=f.upperBound;return D.x/=L,D.y/=O,D.z/=q,z.x/=L,z.y/=O,z.z/=q,this.tree.aabbQuery(f,E)},u.prototype.setScale=function(V){var E=this.scale.x===this.scale.y===this.scale.z,S=V.x===V.y===V.z;E&&S||this.updateNormals(),this.scale.copy(V),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var V=l,E=this.normals,S=0;S<this.indices.length/3;S++){var L=S*3,O=this.indices[L],q=this.indices[L+1],D=this.indices[L+2];this.getVertex(O,d),this.getVertex(q,_),this.getVertex(D,y),u.computeNormal(_,d,y,V),E[L]=V.x,E[L+1]=V.y,E[L+2]=V.z}},u.prototype.updateEdges=function(){for(var V={},E=function(J,F){var U=O<q?O+"_"+q:q+"_"+O;V[U]=!0},S=0;S<this.indices.length/3;S++){var L=S*3,O=this.indices[L],q=this.indices[L+1];this.indices[L+2],E(),E(),E()}var D=Object.keys(V);this.edges=new Int16Array(D.length*2);for(var S=0;S<D.length;S++){var z=D[S].split("_");this.edges[2*S]=parseInt(z[0],10),this.edges[2*S+1]=parseInt(z[1],10)}},u.prototype.getEdgeVertex=function(V,E,S){var L=this.edges[V*2+(E?1:0)];this.getVertex(L,S)};var p=new s,v=new s;u.prototype.getEdgeVector=function(V,E){var S=p,L=v;this.getEdgeVertex(V,0,S),this.getEdgeVertex(V,1,L),L.vsub(S,E)};var g=new s,m=new s;u.computeNormal=function(V,E,S,L){E.vsub(V,m),S.vsub(E,g),g.cross(m,L),L.isZero()||L.normalize()};var d=new s,_=new s,y=new s;u.prototype.getVertex=function(V,E){var S=this.scale;return this._getUnscaledVertex(V,E),E.x*=S.x,E.y*=S.y,E.z*=S.z,E},u.prototype._getUnscaledVertex=function(V,E){var S=V*3,L=this.vertices;return E.set(L[S],L[S+1],L[S+2])},u.prototype.getWorldVertex=function(V,E,S,L){return this.getVertex(V,L),o.pointToWorldFrame(E,S,L,L),L},u.prototype.getTriangleVertices=function(V,E,S,L){var O=V*3;this.getVertex(this.indices[O],E),this.getVertex(this.indices[O+1],S),this.getVertex(this.indices[O+2],L)},u.prototype.getNormal=function(V,E){var S=V*3;return E.set(this.normals[S],this.normals[S+1],this.normals[S+2])};var x=new c;u.prototype.calculateLocalInertia=function(V,E){this.computeLocalAABB(x);var S=x.upperBound.x-x.lowerBound.x,L=x.upperBound.y-x.lowerBound.y,O=x.upperBound.z-x.lowerBound.z;return E.set(1/12*V*(2*L*2*L+2*O*2*O),1/12*V*(2*S*2*S+2*O*2*O),1/12*V*(2*L*2*L+2*S*2*S))};var A=new s;u.prototype.computeLocalAABB=function(V){var E=V.lowerBound,S=V.upperBound,L=this.vertices.length;this.vertices;var O=A;this.getVertex(0,O),E.copy(O),S.copy(O);for(var q=0;q!==L;q++)this.getVertex(q,O),O.x<E.x?E.x=O.x:O.x>S.x&&(S.x=O.x),O.y<E.y?E.y=O.y:O.y>S.y&&(S.y=O.y),O.z<E.z?E.z=O.z:O.z>S.z&&(S.z=O.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var V=0,E=this.vertices,S=new s,L=0,O=E.length/3;L!==O;L++){this.getVertex(L,S);var q=S.norm2();q>V&&(V=q)}this.boundingSphereRadius=Math.sqrt(V)},new s;var P=new o,I=new c;u.prototype.calculateWorldAABB=function(V,E,S,L){var O=P,q=I;O.position=V,O.quaternion=E,this.aabb.toWorldFrame(O,q),S.copy(q.lowerBound),L.copy(q.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(V,E,S,L,O){V=V||1,E=E||.5,S=S||8,L=L||6,O=O||Math.PI*2;for(var q=[],D=[],z=0;z<=S;z++)for(var J=0;J<=L;J++){var F=J/L*O,U=z/S*Math.PI*2,Z=(V+E*Math.cos(U))*Math.cos(F),k=(V+E*Math.cos(U))*Math.sin(F),N=E*Math.sin(U);q.push(Z,k,N)}for(var z=1;z<=S;z++)for(var J=1;J<=L;J++){var H=(L+1)*z+J-1,T=(L+1)*(z-1)+J-1,b=(L+1)*(z-1)+J,R=(L+1)*z+J;D.push(H,T,R),D.push(T,b,R)}return new u(q,D)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],c=[],h=[];s.prototype.solve=function(u,l){var f=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,d=l.bodies,_=d.length,y=u,x,A,P,I,V,E;if(m!==0)for(var S=0;S!==_;S++)d[S].updateSolveMassProperties();var L=c,O=h,q=o;L.length=m,O.length=m,q.length=m;for(var S=0;S!==m;S++){var D=g[S];q[S]=0,O[S]=D.computeB(y),L[S]=1/D.computeC()}if(m!==0){for(var S=0;S!==_;S++){var z=d[S],J=z.vlambda,F=z.wlambda;J.set(0,0,0),F&&F.set(0,0,0)}for(f=0;f!==p;f++){I=0;for(var U=0;U!==m;U++){var D=g[U];x=O[U],A=L[U],E=q[U],V=D.computeGWlambda(),P=A*(x-V-D.eps*E),E+P<D.minForce?P=D.minForce-E:E+P>D.maxForce&&(P=D.maxForce-E),q[U]+=P,I+=P>0?P:-P,D.addToWlambda(P)}if(I*I<v)break}for(var S=0;S!==_;S++){var z=d[S],Z=z.velocity,k=z.angularVelocity;Z.vadd(z.vlambda,Z),k&&k.vadd(z.wlambda,k)}}return f}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,c=o.indexOf(s);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function o(d){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=d,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],h=[],u={bodies:[]},l=s.STATIC;function f(d){for(var _=d.length,y=0;y!==_;y++){var x=d[y];if(!x.visited&&!(x.body.type&l))return x}return!1}var p=[];function v(d,_,y,x){for(p.push(d),d.visited=!0,_(d,y,x);p.length;)for(var A=p.pop(),P;P=f(A.children);)P.visited=!0,_(P,y,x),p.push(P)}function g(d,_,y){_.push(d.body);for(var x=d.eqs.length,A=0;A!==x;A++){var P=d.eqs[A];y.indexOf(P)===-1&&y.push(P)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(d,_){for(var y=c,x=this.nodePool,A=_.bodies,P=this.equations,I=P.length,V=A.length,E=this.subsolver;x.length<V;)x.push(this.createNode());y.length=V;for(var S=0;S<V;S++)y[S]=x[S];for(var S=0;S!==V;S++){var L=y[S];L.body=A[S],L.children.length=0,L.eqs.length=0,L.visited=!1}for(var O=0;O!==I;O++){var q=P[O],S=A.indexOf(q.bi),D=A.indexOf(q.bj),z=y[S],J=y[D];z.children.push(J),z.eqs.push(q),J.children.push(z),J.eqs.push(q)}var F,U=0,Z=h;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var k=u;F=f(y);){Z.length=0,k.bodies.length=0,v(F,g,k.bodies,Z);var N=Z.length;Z=Z.sort(m);for(var S=0;S!==N;S++)E.addEquation(Z[S]);E.solve(d,k),E.removeAllEquations(),U++}return U};function m(d,_){return _.id-d.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[s]===void 0&&(c[s]=[]),c[s].indexOf(o)===-1&&c[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[s]!==void 0&&c[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[s]===void 0)return this;var h=c[s].indexOf(o);return h!==-1&&c[s].splice(h,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,c=o[s.type];if(c!==void 0){s.target=this;for(var h=0,u=c.length;h<u;h++)c[h].call(this,s)}return this}}},{}],50:[function(e,n,a){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,f){f=f||{},f.root=null,f.aabb=l,o.call(this,f),this.maxDepth=typeof f.maxDepth<"u"?f.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,f){this.children.length=this.data.length=0},o.prototype.insert=function(l,f,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var d=0;d!==8;d++)if(g[d].insert(l,f,p+1))return!0;m&&(g.length=0)}return v.push(f),!0};var h=new s;o.prototype.subdivide=function(){var l=this.aabb,f=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),p.vsub(f,h),h.scale(.5,h);for(var g=this.root||this,m=0;m!==8;m++){var d=v[m];d.root=g;var _=d.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(f,_),_.vadd(h,d.aabb.upperBound)}},o.prototype.aabbQuery=function(l,f){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(f,v.data),Array.prototype.push.apply(p,v.children)}return f};var u=new r;o.prototype.rayQuery=function(l,f,p){return l.getAABB(u),u.toLocalFrame(f,u),this.aabbQuery(u,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var f=l.pop(),p=f.children.length-1;p>=0;p--)f.children[p].data.length||f.children.splice(p,1);Array.prototype.push.apply(l,f.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var c=o;o=s,s=c}return this.data[s+"-"+o]},r.prototype.set=function(s,o,c){if(s>o){var h=o;o=s,s=h}var u=s+"-"+o;this.get(s,o)||this.data.keys.push(u),this.data[u]=c},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var c=o.pop();delete s[c]}}},{}],53:[function(e,n,a){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var c in o)c in s||(s[c]=o[c]);return s}},{}],54:[function(e,n,a){n.exports=o;var r=e("../math/Vec3"),s=e("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),h=e("../math/Transform");e("../shapes/ConvexPolyhedron");var u=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),f=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(ot){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=ot,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(ot,lt,dt,mt,Jt,Bt){var yt;this.contactPointPool.length?(yt=this.contactPointPool.pop(),yt.bi=ot,yt.bj=lt):yt=new f(ot,lt),yt.enabled=ot.collisionResponse&&lt.collisionResponse&&dt.collisionResponse&&mt.collisionResponse;var It=this.currentContactMaterial;yt.restitution=It.restitution,yt.setSpookParams(It.contactEquationStiffness,It.contactEquationRelaxation,this.world.dt);var rt=dt.material||ot.material,bt=mt.material||lt.material;return rt&&bt&&rt.restitution>=0&&bt.restitution>=0&&(yt.restitution=rt.restitution*bt.restitution),yt.si=Jt||dt,yt.sj=Bt||mt,yt},v.prototype.createFrictionEquationsFromContact=function(ot,lt){var dt=ot.bi,mt=ot.bj,Jt=ot.si,Bt=ot.sj,yt=this.world,It=this.currentContactMaterial,rt=It.friction,bt=Jt.material||dt.material,Nt=Bt.material||mt.material;if(bt&&Nt&&bt.friction>=0&&Nt.friction>=0&&(rt=bt.friction*Nt.friction),rt>0){var zt=rt*yt.gravity.length(),Pt=dt.invMass+mt.invMass;Pt>0&&(Pt=1/Pt);var Mt=this.frictionEquationPool,w=Mt.length?Mt.pop():new p(dt,mt,zt*Pt),G=Mt.length?Mt.pop():new p(dt,mt,zt*Pt);return w.bi=G.bi=dt,w.bj=G.bj=mt,w.minForce=G.minForce=-zt*Pt,w.maxForce=G.maxForce=zt*Pt,w.ri.copy(ot.ri),w.rj.copy(ot.rj),G.ri.copy(ot.ri),G.rj.copy(ot.rj),ot.ni.tangents(w.t,G.t),w.setSpookParams(It.frictionEquationStiffness,It.frictionEquationRelaxation,yt.dt),G.setSpookParams(It.frictionEquationStiffness,It.frictionEquationRelaxation,yt.dt),w.enabled=G.enabled=ot.enabled,lt.push(w,G),!0}return!1};var g=new c,m=new c,d=new c;v.prototype.createFrictionFromAverage=function(ot){var lt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(lt,this.frictionResult)||ot===1)){var dt=this.frictionResult[this.frictionResult.length-2],mt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),d.setZero();var Jt=lt.bi;lt.bj;for(var Bt=0;Bt!==ot;Bt++)lt=this.result[this.result.length-1-Bt],lt.bodyA!==Jt?(g.vadd(lt.ni,g),m.vadd(lt.ri,m),d.vadd(lt.rj,d)):(g.vsub(lt.ni,g),m.vadd(lt.rj,m),d.vadd(lt.ri,d));var yt=1/ot;m.scale(yt,dt.ri),d.scale(yt,dt.rj),mt.ri.copy(dt.ri),mt.rj.copy(dt.rj),g.normalize(),g.tangents(dt.t,mt.t)}};var _=new c,y=new c,x=new u,A=new u;v.prototype.getContacts=function(ot,lt,dt,mt,Jt,Bt,yt){this.contactPointPool=Jt,this.frictionEquationPool=yt,this.result=mt,this.frictionResult=Bt;for(var It=x,rt=A,bt=_,Nt=y,zt=0,Pt=ot.length;zt!==Pt;zt++){var Mt=ot[zt],w=lt[zt],G=null;Mt.material&&w.material&&(G=dt.getContactMaterial(Mt.material,w.material)||null);for(var j=0;j<Mt.shapes.length;j++){Mt.quaternion.mult(Mt.shapeOrientations[j],It),Mt.quaternion.vmult(Mt.shapeOffsets[j],bt),bt.vadd(Mt.position,bt);for(var B=Mt.shapes[j],$=0;$<w.shapes.length;$++){w.quaternion.mult(w.shapeOrientations[$],rt),w.quaternion.vmult(w.shapeOffsets[$],Nt),Nt.vadd(w.position,Nt);var vt=w.shapes[$];if(!(bt.distanceTo(Nt)>B.boundingSphereRadius+vt.boundingSphereRadius)){var Ft=null;B.material&&vt.material&&(Ft=dt.getContactMaterial(B.material,vt.material)||null),this.currentContactMaterial=Ft||G||dt.defaultContactMaterial;var Rt=this[B.type|vt.type];Rt&&(B.type<vt.type?Rt.call(this,B,vt,bt,Nt,It,rt,Mt,w,B,vt):Rt.call(this,vt,B,Nt,bt,rt,It,w,Mt,B,vt))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(ot,lt,dt,mt,Jt,Bt,yt,It){ot.convexPolyhedronRepresentation.material=ot.material,lt.convexPolyhedronRepresentation.material=lt.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(ot.convexPolyhedronRepresentation,lt.convexPolyhedronRepresentation,dt,mt,Jt,Bt,yt,It,ot,lt)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(ot,lt,dt,mt,Jt,Bt,yt,It){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexConvex(ot.convexPolyhedronRepresentation,lt,dt,mt,Jt,Bt,yt,It,ot,lt)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(ot,lt,dt,mt,Jt,Bt,yt,It){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexParticle(ot.convexPolyhedronRepresentation,lt,dt,mt,Jt,Bt,yt,It,ot,lt)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=this.createContactEquation(yt,It,ot,lt);mt.vsub(dt,rt.ni),rt.ni.normalize(),rt.ri.copy(rt.ni),rt.rj.copy(rt.ni),rt.ri.mult(ot.radius,rt.ri),rt.rj.mult(-lt.radius,rt.rj),rt.ri.vadd(dt,rt.ri),rt.ri.vsub(yt.position,rt.ri),rt.rj.vadd(mt,rt.rj),rt.rj.vsub(It.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)};var P=new c,I=new c,V=new c;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=new c,bt=P;bt.set(0,0,1),Jt.vmult(bt,bt);for(var Nt=0;Nt<lt.vertices.length/3;Nt++){lt.getVertex(Nt,rt);var zt=new c;zt.copy(rt),h.pointToWorldFrame(mt,Bt,zt,rt);var Pt=I;rt.vsub(dt,Pt);var Mt=bt.dot(Pt);if(Mt<=0){var w=this.createContactEquation(yt,It,ot,lt);w.ni.copy(bt);var G=V;bt.scale(Pt.dot(bt),G),rt.vsub(G,G),w.ri.copy(G),w.ri.vsub(yt.position,w.ri),w.rj.copy(rt),w.rj.vsub(It.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult)}}};var E=new c,S=new c;new c;var L=new c,O=new c,q=new c,D=new c,z=new c,J=new c,F=new c,U=new c,Z=new c,k=new c,N=new c,H=new r,T=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=q,bt=D,Nt=z,zt=J,Pt=F,Mt=U,w=H,G=O,j=S,B=T;h.pointToLocalFrame(mt,Bt,dt,Pt);var $=ot.radius;w.lowerBound.set(Pt.x-$,Pt.y-$,Pt.z-$),w.upperBound.set(Pt.x+$,Pt.y+$,Pt.z+$),lt.getTrianglesInAABB(w,B);for(var vt=L,Ft=ot.radius*ot.radius,Rt=0;Rt<B.length;Rt++)for(var Ut=0;Ut<3;Ut++)if(lt.getVertex(lt.indices[B[Rt]*3+Ut],vt),vt.vsub(Pt,j),j.norm2()<=Ft){G.copy(vt),h.pointToWorldFrame(mt,Bt,G,vt),vt.vsub(dt,j);var St=this.createContactEquation(yt,It,ot,lt);St.ni.copy(j),St.ni.normalize(),St.ri.copy(St.ni),St.ri.scale(ot.radius,St.ri),St.ri.vadd(dt,St.ri),St.ri.vsub(yt.position,St.ri),St.rj.copy(vt),St.rj.vsub(It.position,St.rj),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}for(var Rt=0;Rt<B.length;Rt++)for(var Ut=0;Ut<3;Ut++){lt.getVertex(lt.indices[B[Rt]*3+Ut],rt),lt.getVertex(lt.indices[B[Rt]*3+(Ut+1)%3],bt),bt.vsub(rt,Nt),Pt.vsub(bt,Mt);var Yt=Mt.dot(Nt);Pt.vsub(rt,Mt);var jt=Mt.dot(Nt);if(jt>0&&Yt<0){Pt.vsub(rt,Mt),zt.copy(Nt),zt.normalize(),jt=Mt.dot(zt),zt.scale(jt,Mt),Mt.vadd(rt,Mt);var ce=Mt.distanceTo(Pt);if(ce<ot.radius){var St=this.createContactEquation(yt,It,ot,lt);Mt.vsub(Pt,St.ni),St.ni.normalize(),St.ni.scale(ot.radius,St.ri),h.pointToWorldFrame(mt,Bt,Mt,Mt),Mt.vsub(It.position,St.rj),h.vectorToWorldFrame(Bt,St.ni,St.ni),h.vectorToWorldFrame(Bt,St.ri,St.ri),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}}}for(var Me=Z,de=k,oe=N,pe=E,Rt=0,Ht=B.length;Rt!==Ht;Rt++){lt.getTriangleVertices(B[Rt],Me,de,oe),lt.getNormal(B[Rt],pe),Pt.vsub(Me,Mt);var ce=Mt.dot(pe);if(pe.scale(ce,Mt),Pt.vsub(Mt,Mt),ce=Mt.distanceTo(Pt),o.pointInTriangle(Mt,Me,de,oe)&&ce<ot.radius){var St=this.createContactEquation(yt,It,ot,lt);Mt.vsub(Pt,St.ni),St.ni.normalize(),St.ni.scale(ot.radius,St.ri),h.pointToWorldFrame(mt,Bt,Mt,Mt),Mt.vsub(It.position,St.rj),h.vectorToWorldFrame(Bt,St.ni,St.ni),h.vectorToWorldFrame(Bt,St.ri,St.ri),this.result.push(St),this.createFrictionEquationsFromContact(St,this.frictionResult)}}B.length=0};var b=new c,R=new c;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=this.createContactEquation(yt,It,ot,lt);if(rt.ni.set(0,0,1),Bt.vmult(rt.ni,rt.ni),rt.ni.negate(rt.ni),rt.ni.normalize(),rt.ni.mult(ot.radius,rt.ri),dt.vsub(mt,b),rt.ni.mult(rt.ni.dot(b),R),b.vsub(R,rt.rj),-b.dot(rt.ni)<=ot.radius){var bt=rt.ri,Nt=rt.rj;bt.vadd(dt,bt),bt.vsub(yt.position,bt),Nt.vadd(mt,Nt),Nt.vsub(It.position,Nt),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}};var X=new c,nt=new c,it=new c;function K(ot,lt,dt){for(var mt=null,Jt=ot.length,Bt=0;Bt!==Jt;Bt++){var yt=ot[Bt],It=X;ot[(Bt+1)%Jt].vsub(yt,It);var rt=nt;It.cross(lt,rt);var bt=it;dt.vsub(yt,bt);var Nt=rt.dot(bt);if(mt===null||Nt>0&&mt===!0||Nt<=0&&mt===!1){mt===null&&(mt=Nt>0);continue}else return!1}return!0}var tt=new c,ct=new c,Y=new c,Ct=new c,ht=[new c,new c,new c,new c,new c,new c],st=new c,at=new c,kt=new c,Tt=new c;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=this.v3pool,bt=ht;dt.vsub(mt,tt),lt.getSideNormals(bt,Bt);for(var Nt=ot.radius,zt=!1,Pt=at,Mt=kt,w=Tt,G=null,j=0,B=0,$=0,vt=null,Ft=0,Rt=bt.length;Ft!==Rt&&zt===!1;Ft++){var Ut=ct;Ut.copy(bt[Ft]);var St=Ut.norm();Ut.normalize();var Yt=tt.dot(Ut);if(Yt<St+Nt&&Yt>0){var jt=Y,ce=Ct;jt.copy(bt[(Ft+1)%3]),ce.copy(bt[(Ft+2)%3]);var Me=jt.norm(),de=ce.norm();jt.normalize(),ce.normalize();var oe=tt.dot(jt),pe=tt.dot(ce);if(oe<Me&&oe>-Me&&pe<de&&pe>-de){var Se=Math.abs(Yt-St-Nt);(vt===null||Se<vt)&&(vt=Se,B=oe,$=pe,G=St,Pt.copy(Ut),Mt.copy(jt),w.copy(ce),j++)}}}if(j){zt=!0;var Wt=this.createContactEquation(yt,It,ot,lt);Pt.mult(-Nt,Wt.ri),Wt.ni.copy(Pt),Wt.ni.negate(Wt.ni),Pt.mult(G,Pt),Mt.mult(B,Mt),Pt.vadd(Mt,Pt),w.mult($,w),Pt.vadd(w,Wt.rj),Wt.ri.vadd(dt,Wt.ri),Wt.ri.vsub(yt.position,Wt.ri),Wt.rj.vadd(mt,Wt.rj),Wt.rj.vsub(It.position,Wt.rj),this.result.push(Wt),this.createFrictionEquationsFromContact(Wt,this.frictionResult)}for(var Ht=rt.get(),qe=st,le=0;le!==2&&!zt;le++)for(var xe=0;xe!==2&&!zt;xe++)for(var Te=0;Te!==2&&!zt;Te++)if(Ht.set(0,0,0),le?Ht.vadd(bt[0],Ht):Ht.vsub(bt[0],Ht),xe?Ht.vadd(bt[1],Ht):Ht.vsub(bt[1],Ht),Te?Ht.vadd(bt[2],Ht):Ht.vsub(bt[2],Ht),mt.vadd(Ht,qe),qe.vsub(dt,qe),qe.norm2()<Nt*Nt){zt=!0;var Wt=this.createContactEquation(yt,It,ot,lt);Wt.ri.copy(qe),Wt.ri.normalize(),Wt.ni.copy(Wt.ri),Wt.ri.mult(Nt,Wt.ri),Wt.rj.copy(Ht),Wt.ri.vadd(dt,Wt.ri),Wt.ri.vsub(yt.position,Wt.ri),Wt.rj.vadd(mt,Wt.rj),Wt.rj.vsub(It.position,Wt.rj),this.result.push(Wt),this.createFrictionEquationsFromContact(Wt,this.frictionResult)}rt.release(Ht),Ht=null;for(var Ie=rt.get(),Ye=rt.get(),Wt=rt.get(),Ee=rt.get(),Se=rt.get(),Ae=bt.length,le=0;le!==Ae&&!zt;le++)for(var xe=0;xe!==Ae&&!zt;xe++)if(le%3!==xe%3){bt[xe].cross(bt[le],Ie),Ie.normalize(),bt[le].vadd(bt[xe],Ye),Wt.copy(dt),Wt.vsub(Ye,Wt),Wt.vsub(mt,Wt);var en=Wt.dot(Ie);Ie.mult(en,Ee);for(var Te=0;Te===le%3||Te===xe%3;)Te++;Se.copy(dt),Se.vsub(Ee,Se),Se.vsub(Ye,Se),Se.vsub(mt,Se);var Ar=Math.abs(en),zi=Se.norm();if(Ar<bt[Te].norm()&&zi<Nt){zt=!0;var ye=this.createContactEquation(yt,It,ot,lt);Ye.vadd(Ee,ye.rj),ye.rj.copy(ye.rj),Se.negate(ye.ni),ye.ni.normalize(),ye.ri.copy(ye.rj),ye.ri.vadd(mt,ye.ri),ye.ri.vsub(dt,ye.ri),ye.ri.normalize(),ye.ri.mult(Nt,ye.ri),ye.ri.vadd(dt,ye.ri),ye.ri.vsub(yt.position,ye.ri),ye.rj.vadd(mt,ye.rj),ye.rj.vsub(It.position,ye.rj),this.result.push(ye),this.createFrictionEquationsFromContact(ye,this.frictionResult)}}rt.release(Ie,Ye,Wt,Ee,Se)};var C=new c,M=new c,Q=new c,ft=new c,ut=new c,pt=new c,Et=new c,_t=new c,xt=new c,Vt=new c;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=this.v3pool;dt.vsub(mt,C);for(var bt=lt.faceNormals,Nt=lt.faces,zt=lt.vertices,Pt=ot.radius,Mt=0;Mt!==zt.length;Mt++){var w=zt[Mt],G=ut;Bt.vmult(w,G),mt.vadd(G,G);var j=ft;if(G.vsub(dt,j),j.norm2()<Pt*Pt){$=!0;var B=this.createContactEquation(yt,It,ot,lt);B.ri.copy(j),B.ri.normalize(),B.ni.copy(B.ri),B.ri.mult(Pt,B.ri),G.vsub(mt,B.rj),B.ri.vadd(dt,B.ri),B.ri.vsub(yt.position,B.ri),B.rj.vadd(mt,B.rj),B.rj.vsub(It.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);return}}for(var $=!1,Mt=0,vt=Nt.length;Mt!==vt&&$===!1;Mt++){var Ft=bt[Mt],Rt=Nt[Mt],Ut=pt;Bt.vmult(Ft,Ut);var St=Et;Bt.vmult(zt[Rt[0]],St),St.vadd(mt,St);var Yt=_t;Ut.mult(-Pt,Yt),dt.vadd(Yt,Yt);var jt=xt;Yt.vsub(St,jt);var ce=jt.dot(Ut),Me=Vt;if(dt.vsub(St,Me),ce<0&&Me.dot(Ut)>0){for(var de=[],oe=0,pe=Rt.length;oe!==pe;oe++){var Ht=rt.get();Bt.vmult(zt[Rt[oe]],Ht),mt.vadd(Ht,Ht),de.push(Ht)}if(K(de,Ut,dt)){$=!0;var B=this.createContactEquation(yt,It,ot,lt);Ut.mult(-Pt,B.ri),Ut.negate(B.ni);var qe=rt.get();Ut.mult(-ce,qe);var le=rt.get();Ut.mult(-Pt,le),dt.vsub(mt,B.rj),B.rj.vadd(le,B.rj),B.rj.vadd(qe,B.rj),B.rj.vadd(mt,B.rj),B.rj.vsub(It.position,B.rj),B.ri.vadd(dt,B.ri),B.ri.vsub(yt.position,B.ri),rt.release(qe),rt.release(le),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(var oe=0,xe=de.length;oe!==xe;oe++)rt.release(de[oe]);return}else for(var oe=0;oe!==Rt.length;oe++){var Te=rt.get(),Ie=rt.get();Bt.vmult(zt[Rt[(oe+1)%Rt.length]],Te),Bt.vmult(zt[Rt[(oe+2)%Rt.length]],Ie),mt.vadd(Te,Te),mt.vadd(Ie,Ie);var Ye=M;Ie.vsub(Te,Ye);var Wt=Q;Ye.unit(Wt);var Ee=rt.get(),Se=rt.get();dt.vsub(Te,Se);var Ae=Se.dot(Wt);Wt.mult(Ae,Ee),Ee.vadd(Te,Ee);var en=rt.get();if(Ee.vsub(dt,en),Ae>0&&Ae*Ae<Ye.norm2()&&en.norm2()<Pt*Pt){var B=this.createContactEquation(yt,It,ot,lt);Ee.vsub(mt,B.rj),Ee.vsub(dt,B.ni),B.ni.normalize(),B.ni.mult(Pt,B.ri),B.rj.vadd(mt,B.rj),B.rj.vsub(It.position,B.rj),B.ri.vadd(dt,B.ri),B.ri.vsub(yt.position,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(var oe=0,xe=de.length;oe!==xe;oe++)rt.release(de[oe]);rt.release(Te),rt.release(Ie),rt.release(Ee),rt.release(en),rt.release(Se);return}rt.release(Te),rt.release(Ie),rt.release(Ee),rt.release(en),rt.release(Se)}for(var oe=0,xe=de.length;oe!==xe;oe++)rt.release(de[oe])}}},new c,new c,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(ot,lt,dt,mt,Jt,Bt,yt,It){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.planeConvex(ot,lt.convexPolyhedronRepresentation,dt,mt,Jt,Bt,yt,It)};var Zt=new c,gt=new c,se=new c,te=new c;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=Zt,bt=gt;bt.set(0,0,1),Jt.vmult(bt,bt);for(var Nt=0,zt=se,Pt=0;Pt!==lt.vertices.length;Pt++){rt.copy(lt.vertices[Pt]),Bt.vmult(rt,rt),mt.vadd(rt,rt),rt.vsub(dt,zt);var Mt=bt.dot(zt);if(Mt<=0){var w=this.createContactEquation(yt,It,ot,lt),G=te;bt.mult(bt.dot(zt),G),rt.vsub(G,G),G.vsub(dt,w.ri),w.ni.copy(bt),rt.vsub(mt,w.rj),w.ri.vadd(dt,w.ri),w.ri.vsub(yt.position,w.ri),w.rj.vadd(mt,w.rj),w.rj.vsub(It.position,w.rj),this.result.push(w),Nt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}}this.enableFrictionReduction&&Nt&&this.createFrictionFromAverage(Nt)};var qt=new c,Gt=new c;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(ot,lt,dt,mt,Jt,Bt,yt,It,rt,bt,Nt,zt){var Pt=qt;if(!(dt.distanceTo(mt)>ot.boundingSphereRadius+lt.boundingSphereRadius)&&ot.findSeparatingAxis(lt,dt,Jt,mt,Bt,Pt,Nt,zt)){var Mt=[],w=Gt;ot.clipAgainstHull(dt,Jt,lt,mt,Bt,Pt,-100,100,Mt);for(var G=0,j=0;j!==Mt.length;j++){var B=this.createContactEquation(yt,It,ot,lt,rt,bt),$=B.ri,vt=B.rj;Pt.negate(B.ni),Mt[j].normal.negate(w),w.mult(Mt[j].depth,w),Mt[j].point.vadd(w,$),vt.copy(Mt[j].point),$.vsub(dt,$),vt.vsub(mt,vt),$.vadd(dt,$),$.vsub(yt.position,$),vt.vadd(mt,vt),vt.vsub(It.position,vt),this.result.push(B),G++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(B,this.frictionResult)}this.enableFrictionReduction&&G&&this.createFrictionFromAverage(G)}};var Ot=new c,Qt=new c,ne=new c;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=Ot;rt.set(0,0,1),yt.quaternion.vmult(rt,rt);var bt=Qt;mt.vsub(yt.position,bt);var Nt=rt.dot(bt);if(Nt<=0){var zt=this.createContactEquation(It,yt,lt,ot);zt.ni.copy(rt),zt.ni.negate(zt.ni),zt.ri.set(0,0,0);var Pt=ne;rt.mult(rt.dot(mt),Pt),mt.vsub(Pt,Pt),zt.rj.copy(Pt),this.result.push(zt),this.createFrictionEquationsFromContact(zt,this.frictionResult)}};var ue=new c;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=ue;rt.set(0,0,1),mt.vsub(dt,rt);var bt=rt.norm2();if(bt<=ot.radius*ot.radius){var Nt=this.createContactEquation(It,yt,lt,ot);rt.normalize(),Nt.rj.copy(rt),Nt.rj.mult(ot.radius,Nt.rj),Nt.ni.copy(rt),Nt.ni.negate(Nt.ni),Nt.ri.set(0,0,0),this.result.push(Nt),this.createFrictionEquationsFromContact(Nt,this.frictionResult)}};var $t=new u,wt=new c;new c;var W=new c,At=new c,Lt=new c;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=-1,bt=W,Nt=Lt,zt=null,Pt=wt;if(Pt.copy(mt),Pt.vsub(dt,Pt),Jt.conjugate($t),$t.vmult(Pt,Pt),ot.pointIsInside(Pt)){ot.worldVerticesNeedsUpdate&&ot.computeWorldVertices(dt,Jt),ot.worldFaceNormalsNeedsUpdate&&ot.computeWorldFaceNormals(Jt);for(var Mt=0,w=ot.faces.length;Mt!==w;Mt++){var G=[ot.worldVertices[ot.faces[Mt][0]]],j=ot.worldFaceNormals[Mt];mt.vsub(G[0],At);var B=-j.dot(At);(zt===null||Math.abs(B)<Math.abs(zt))&&(zt=B,rt=Mt,bt.copy(j))}if(rt!==-1){var $=this.createContactEquation(It,yt,lt,ot);bt.mult(zt,Nt),Nt.vadd(mt,Nt),Nt.vsub(dt,Nt),$.rj.copy(Nt),bt.negate($.ni),$.ri.set(0,0,0);var vt=$.ri,Ft=$.rj;vt.vadd(mt,vt),vt.vsub(It.position,vt),Ft.vadd(dt,Ft),Ft.vsub(yt.position,Ft),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(ot,lt,dt,mt,Jt,Bt,yt,It){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexHeightfield(ot.convexPolyhedronRepresentation,lt,dt,mt,Jt,Bt,yt,It)};var Kt=new c,Xt=new c,he=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=lt.data,bt=lt.elementSize,Nt=ot.boundingSphereRadius,zt=Xt,Pt=he,Mt=Kt;h.pointToLocalFrame(mt,Bt,dt,Mt);var w=Math.floor((Mt.x-Nt)/bt)-1,G=Math.ceil((Mt.x+Nt)/bt)+1,j=Math.floor((Mt.y-Nt)/bt)-1,B=Math.ceil((Mt.y+Nt)/bt)+1;if(!(G<0||B<0||w>rt.length||j>rt[0].length)){w<0&&(w=0),G<0&&(G=0),j<0&&(j=0),B<0&&(B=0),w>=rt.length&&(w=rt.length-1),G>=rt.length&&(G=rt.length-1),B>=rt[0].length&&(B=rt[0].length-1),j>=rt[0].length&&(j=rt[0].length-1);var $=[];lt.getRectMinMax(w,j,G,B,$);var vt=$[0],Ft=$[1];if(!(Mt.z-Nt>Ft||Mt.z+Nt<vt))for(var Rt=w;Rt<G;Rt++)for(var Ut=j;Ut<B;Ut++)lt.getConvexTrianglePillar(Rt,Ut,!1),h.pointToWorldFrame(mt,Bt,lt.pillarOffset,zt),dt.distanceTo(zt)<lt.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.convexConvex(ot,lt.pillarConvex,dt,zt,Jt,Bt,yt,It,null,null,Pt,null),lt.getConvexTrianglePillar(Rt,Ut,!0),h.pointToWorldFrame(mt,Bt,lt.pillarOffset,zt),dt.distanceTo(zt)<lt.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.convexConvex(ot,lt.pillarConvex,dt,zt,Jt,Bt,yt,It,null,null,Pt,null)}};var fe=new c,ae=new c;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(ot,lt,dt,mt,Jt,Bt,yt,It){var rt=lt.data,bt=ot.radius,Nt=lt.elementSize,zt=ae,Pt=fe;h.pointToLocalFrame(mt,Bt,dt,Pt);var Mt=Math.floor((Pt.x-bt)/Nt)-1,w=Math.ceil((Pt.x+bt)/Nt)+1,G=Math.floor((Pt.y-bt)/Nt)-1,j=Math.ceil((Pt.y+bt)/Nt)+1;if(!(w<0||j<0||Mt>rt.length||j>rt[0].length)){Mt<0&&(Mt=0),w<0&&(w=0),G<0&&(G=0),j<0&&(j=0),Mt>=rt.length&&(Mt=rt.length-1),w>=rt.length&&(w=rt.length-1),j>=rt[0].length&&(j=rt[0].length-1),G>=rt[0].length&&(G=rt[0].length-1);var B=[];lt.getRectMinMax(Mt,G,w,j,B);var $=B[0],vt=B[1];if(!(Pt.z-bt>vt||Pt.z+bt<$))for(var Ft=this.result,Rt=Mt;Rt<w;Rt++)for(var Ut=G;Ut<j;Ut++){var St=Ft.length;lt.getConvexTrianglePillar(Rt,Ut,!1),h.pointToWorldFrame(mt,Bt,lt.pillarOffset,zt),dt.distanceTo(zt)<lt.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.sphereConvex(ot,lt.pillarConvex,dt,zt,Jt,Bt,yt,It),lt.getConvexTrianglePillar(Rt,Ut,!0),h.pointToWorldFrame(mt,Bt,lt.pillarOffset,zt),dt.distanceTo(zt)<lt.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.sphereConvex(ot,lt.pillarConvex,dt,zt,Jt,Bt,yt,It);var Yt=Ft.length-St;if(Yt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=x;var r=e("../shapes/Shape"),s=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var h=e("./Narrowphase"),u=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),f=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),d=e("../collision/AABB"),_=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function x(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new y,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new f("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new u,new d;var A=new _;if(x.prototype.getContactMaterial=function(U,Z){return this.contactMaterialTable.get(U.id,Z.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var U=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=U,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(U){this.bodies.indexOf(U)===-1&&(U.index=this.bodies.length,this.bodies.push(U),U.world=this,U.initPosition.copy(U.position),U.initVelocity.copy(U.velocity),U.timeLastSleepy=this.time,U instanceof v&&(U.initAngularVelocity.copy(U.angularVelocity),U.initQuaternion.copy(U.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=U,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(U){this.constraints.push(U)},x.prototype.removeConstraint=function(U){var Z=this.constraints.indexOf(U);Z!==-1&&this.constraints.splice(Z,1)},x.prototype.rayTest=function(U,Z,k){k instanceof m?this.raycastClosest(U,Z,{skipBackfaces:!0},k):this.raycastAll(U,Z,{skipBackfaces:!0},k)},x.prototype.raycastAll=function(U,Z,k,N){return k.mode=_.ALL,k.from=U,k.to=Z,k.callback=N,A.intersectWorld(this,k)},x.prototype.raycastAny=function(U,Z,k,N){return k.mode=_.ANY,k.from=U,k.to=Z,k.result=N,A.intersectWorld(this,k)},x.prototype.raycastClosest=function(U,Z,k,N){return k.mode=_.CLOSEST,k.from=U,k.to=Z,k.result=N,A.intersectWorld(this,k)},x.prototype.remove=function(U){U.world=null;var Z=this.bodies.length-1,k=this.bodies,N=k.indexOf(U);if(N!==-1){k.splice(N,1);for(var H=0;H!==k.length;H++)k[H].index=H;this.collisionMatrix.setNumObjects(Z),this.removeBodyEvent.body=U,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(U){this.materials.push(U)},x.prototype.addContactMaterial=function(U){this.contactmaterials.push(U),this.contactMaterialTable.set(U.materials[0].id,U.materials[1].id,U)},typeof performance>"u"&&(performance={}),!performance.now){var P=Date.now();performance.timing&&performance.timing.navigationStart&&(P=performance.timing.navigationStart),performance.now=function(){return Date.now()-P}}var I=new s;x.prototype.step=function(U,Z,k){if(k=k||10,Z=Z||0,Z===0)this.internalStep(U),this.time+=U;else{var N=Math.floor((this.time+Z)/U)-Math.floor(this.time/U);N=Math.min(N,k);for(var H=performance.now(),T=0;T!==N&&(this.internalStep(U),!(performance.now()-H>U*1e3));T++);this.time+=Z;for(var b=this.time%U,R=b/U,X=I,nt=this.bodies,it=0;it!==nt.length;it++){var K=nt[it];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,X),X.scale(R,X),K.position.vadd(X,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var V={type:"postStep"},E={type:"preStep"},S={type:"collide",body:null,contact:null},L=[],O=[],q=[],D=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var z=new o,J=new o,F=new s;x.prototype.internalStep=function(U){this.dt=U;var Z=this.contacts,k=q,N=D,H=this.numObjects(),T=this.bodies,b=this.solver,R=this.gravity,X=this.doProfiling,nt=this.profile,it=v.DYNAMIC,K,tt=this.constraints,ct=O;R.norm();var Y=R.x,Ct=R.y,ht=R.z,st=0;for(X&&(K=performance.now()),st=0;st!==H;st++){var at=T[st];if(at.type&it){var kt=at.force,Tt=at.mass;kt.x+=Tt*Y,kt.y+=Tt*Ct,kt.z+=Tt*ht}}for(var st=0,C=this.subsystems.length;st!==C;st++)this.subsystems[st].update();X&&(K=performance.now()),k.length=0,N.length=0,this.broadphase.collisionPairs(this,k,N),X&&(nt.broadphase=performance.now()-K);var qt=tt.length;for(st=0;st!==qt;st++){var M=tt[st];if(!M.collideConnected)for(var Q=k.length-1;Q>=0;Q-=1)(M.bodyA===k[Q]&&M.bodyB===N[Q]||M.bodyB===k[Q]&&M.bodyA===N[Q])&&(k.splice(Q,1),N.splice(Q,1))}this.collisionMatrixTick(),X&&(K=performance.now());var ft=L,ut=Z.length;for(st=0;st!==ut;st++)ft.push(Z[st]);Z.length=0;var pt=this.frictionEquations.length;for(st=0;st!==pt;st++)ct.push(this.frictionEquations[st]);this.frictionEquations.length=0,this.narrowphase.getContacts(k,N,this,Z,ft,this.frictionEquations,ct),X&&(nt.narrowphase=performance.now()-K),X&&(K=performance.now());for(var st=0;st<this.frictionEquations.length;st++)b.addEquation(this.frictionEquations[st]);for(var Et=Z.length,_t=0;_t!==Et;_t++){var M=Z[_t],at=M.bi,xt=M.bj;M.si,M.sj;var Vt;if(at.material&&xt.material?Vt=this.getContactMaterial(at.material,xt.material)||this.defaultContactMaterial:Vt=this.defaultContactMaterial,Vt.friction,at.material&&xt.material&&(at.material.friction>=0&&xt.material.friction>=0&&at.material.friction*xt.material.friction,at.material.restitution>=0&&xt.material.restitution>=0&&(M.restitution=at.material.restitution*xt.material.restitution)),b.addEquation(M),at.allowSleep&&at.type===v.DYNAMIC&&at.sleepState===v.SLEEPING&&xt.sleepState===v.AWAKE&&xt.type!==v.STATIC){var Zt=xt.velocity.norm2()+xt.angularVelocity.norm2(),gt=Math.pow(xt.sleepSpeedLimit,2);Zt>=gt*2&&(at._wakeUpAfterNarrowphase=!0)}if(xt.allowSleep&&xt.type===v.DYNAMIC&&xt.sleepState===v.SLEEPING&&at.sleepState===v.AWAKE&&at.type!==v.STATIC){var se=at.velocity.norm2()+at.angularVelocity.norm2(),te=Math.pow(at.sleepSpeedLimit,2);se>=te*2&&(xt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(at,xt,!0),this.collisionMatrixPrevious.get(at,xt)||(S.body=xt,S.contact=M,at.dispatchEvent(S),S.body=at,xt.dispatchEvent(S))}for(X&&(nt.makeContactConstraints=performance.now()-K,K=performance.now()),st=0;st!==H;st++){var at=T[st];at._wakeUpAfterNarrowphase&&(at.wakeUp(),at._wakeUpAfterNarrowphase=!1)}var qt=tt.length;for(st=0;st!==qt;st++){var M=tt[st];M.update();for(var Q=0,Gt=M.equations.length;Q!==Gt;Q++){var Ot=M.equations[Q];b.addEquation(Ot)}}b.solve(U,this),X&&(nt.solve=performance.now()-K),b.removeAllEquations();var Qt=Math.pow;for(st=0;st!==H;st++){var at=T[st];if(at.type&it){var ne=Qt(1-at.linearDamping,U),ue=at.velocity;ue.mult(ne,ue);var $t=at.angularVelocity;if($t){var wt=Qt(1-at.angularDamping,U);$t.mult(wt,$t)}}}for(this.dispatchEvent(E),st=0;st!==H;st++){var at=T[st];at.preStep&&at.preStep.call(at)}X&&(K=performance.now());var W=z,At=J,Lt=this.stepnumber,Kt=v.DYNAMIC|v.KINEMATIC,Xt=Lt%(this.quatNormalizeSkip+1)===0,he=this.quatNormalizeFast,fe=U*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,st=0;st!==H;st++){var ae=T[st],ot=ae.force,lt=ae.torque;if(ae.type&Kt&&ae.sleepState!==v.SLEEPING){var dt=ae.velocity,mt=ae.angularVelocity,Jt=ae.position,Bt=ae.quaternion,yt=ae.invMass,It=ae.invInertiaWorld;dt.x+=ot.x*yt*U,dt.y+=ot.y*yt*U,dt.z+=ot.z*yt*U,ae.angularVelocity&&(It.vmult(lt,F),F.mult(U,F),F.vadd(mt,mt)),Jt.x+=dt.x*U,Jt.y+=dt.y*U,Jt.z+=dt.z*U,ae.angularVelocity&&(W.set(mt.x,mt.y,mt.z,0),W.mult(Bt,At),Bt.x+=fe*At.x,Bt.y+=fe*At.y,Bt.z+=fe*At.z,Bt.w+=fe*At.w,Xt&&(he?Bt.normalizeFast():Bt.normalize())),ae.aabb&&(ae.aabbNeedsUpdate=!0),ae.updateInertiaWorld&&ae.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,X&&(nt.integrate=performance.now()-K),this.time+=U,this.stepnumber+=1,this.dispatchEvent(V),st=0;st!==H;st++){var at=T[st],rt=at.postStep;rt&&rt.call(at)}if(this.allowSleep)for(st=0;st!==H;st++)T[st].sleepTick(this.time)},x.prototype.clearForces=function(){for(var U=this.bodies,Z=U.length,k=0;k!==Z;k++){var N=U[k];N.force,N.torque,N.force.set(0,0,0),N.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(zo);var hp=zo.exports;const Re=up(hp);var fp=`varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r
varying float vNoise;\r

uniform sampler2D uNoiseTexture;\r
uniform float uTime;\r
uniform float uNoiseScale;\r
uniform float uPixelation;\r
uniform float uBlendFactor;\r
uniform vec2 uMouse;\r
uniform vec3 uColor1;\r
uniform vec3 uColor2;\r
uniform float uOctaves;\r
uniform float uPersistence;\r
uniform float uLacunarity;\r
uniform float uAmplitude;

float inverseLerp(float v, float minValue, float maxValue) {\r
  return (v - minValue) / (maxValue - minValue);\r
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {\r
  float t = inverseLerp(v, inMin, inMax);\r
  return mix(outMin, outMax, t);\r
}

vec3 hash( vec3 p ) \r
{\r
	p = vec3( dot(p,vec3(127.1,311.7, 74.7)),\r
            dot(p,vec3(269.5,183.3,246.1)),\r
            dot(p,vec3(113.5,271.9,124.6)));

	return -1.0 + 2.0*fract(sin(p)*43758.5453123);\r
}

float noise( in vec3 p )\r
{\r
  vec3 i = floor( p );\r
  vec3 f = fract( p );

	vec3 u = f*f*(3.0-2.0*f);

  return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), \r
                        dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),\r
                   mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), \r
                        dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),\r
              mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), \r
                        dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),\r
                   mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), \r
                        dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );\r
}

float fbm(vec3 p, int octaves, float persistence, float lacunarity){\r
  float amplitude = 0.5;\r
  float frequency = 0.7;\r
  float total = 0.0;\r
  float normalization = 0.0;

  for(int i = 0; i < octaves; ++i){\r
    float noiseValue = noise(p * frequency);\r
    total += noiseValue * amplitude;\r
    normalization += amplitude;\r
    amplitude *= persistence;\r
    frequency *= lacunarity;\r
  }

  total /= normalization;

  return total;\r
}

float domainWarpingFBM(vec3 coords, float amplitude, float frequency, int octaves, float persistence, float lacunarity){\r
    vec3 offset = vec3(\r
        fbm(coords * frequency, octaves, persistence, lacunarity),\r
        fbm(coords * frequency + vec3(43.235, 23.112, 0.0), octaves, persistence, lacunarity), \r
        0.0\r
    );\r
    float noiseSample = fbm(coords * frequency + offset, octaves, persistence, lacunarity);

    vec3 offset2 = vec3(\r
        fbm(coords * frequency + 4.0 * offset + vec3(15.325, 1.421, 3.235), octaves, persistence, lacunarity),\r
        fbm(coords * frequency + 4.0 * offset + vec3(4.32, 0.532, 6.234), octaves, persistence, lacunarity), \r
        0.0\r
    );\r
    noiseSample = fbm(coords * frequency + 4.0 * offset2, octaves, persistence, lacunarity);

    return noiseSample * amplitude;    \r
}\r
vec4 permute(vec4 x)\r
{\r
    return mod(((x*34.0)+1.0)*x, 289.0);\r
}\r
vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
vec3 fade(vec3 t)\r
{\r
    return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}

float perlinClassic3D(vec3 P)\r
{\r
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);\r
    Pi1 = mod(Pi1, 289.0);\r
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
    vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
    vec4 iz0 = Pi0.zzzz;\r
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);\r
    vec4 ixy0 = permute(ixy + iz0);\r
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;\r
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
    gx0 = fract(gx0);\r
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
    vec4 sz0 = step(gz0, vec4(0.0));\r
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;\r
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
    gx1 = fract(gx1);\r
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
    vec4 sz1 = step(gz1, vec4(0.0));\r
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
    g000 *= norm0.x;\r
    g010 *= norm0.y;\r
    g100 *= norm0.z;\r
    g110 *= norm0.w;\r
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
    g001 *= norm1.x;\r
    g011 *= norm1.y;\r
    g101 *= norm1.z;\r
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);\r
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);\r
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
    return 2.2 * n_xyz;\r
}

void main() \r
{\r
        float time = uTime * 0.1;\r
    vec3 normal = vNormal;\r
    vec2 uv = vUv;

    vec3 color1 = vec3(1.0, 1.0, 1.0); 
    vec3 color2 = vec3(0.0, 0.0, 0.0); 
    vec3 offPurp = vec3(1.0, 0.7, 0.7);

    vec3 color3 = vec3(0.1, 0.2, 0.6);\r
    vec3 color4 = vec3(0.3, 0.3, 0.7);\r
    vec3 black = vec3(0.0);\r

    
    
    \r

    gl_FragColor = vec4(uv.x, uv.y, 1.0, 1.0);

    #include <tonemapping_fragment>\r
    #include <colorspace_fragment>\r
}`,dp=`varying vec3 vPosition;\r
varying vec3 vNormal;\r
varying vec2 vUv;\r
varying float vNoise;\r

uniform float uTime;\r
uniform float uNoiseScale;\r
uniform float uPixelation;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){\r
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);\r
  Pi1 = mod(Pi1, 289.0);\r
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;\r
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;\r
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
  return 2.2 * n_xyz;\r
}

void main()\r
{\r
    vPosition = position;\r
    vNormal = normal;\r
    vUv = uv;

  
  vec3 quantizedPosition = floor(position * uPixelation) / uPixelation;\r
  vNoise = cnoise(quantizedPosition * uNoiseScale + uTime);

  
  vec3 displacedPosition = position + normal * vNoise * 0.5;\r

  vPosition = displacedPosition;\r
  vUv = uv;

    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    gl_Position = projectionMatrix * viewPosition;

}`;const As=document.querySelector(".starting-screen"),pp=document.querySelector(".start-button"),mp=document.getElementById("exit"),bs=document.querySelector(".win-screen"),vp=document.querySelector(".final-time"),gp=document.querySelector("#play-again-button");let wr=!1,vr=0;const Rs=document.getElementById("timer");function Vo(){wr=!0}const _p=()=>{wr&&(vr+=1/120,Rs.textContent=`Time: ${Math.floor(vr)}`)};function Cs(){wr=!1,vr=0,Rs.textContent="Time: 0"}function xp(){wr=!1}gp.addEventListener("click",()=>{bs.style.display="none",As.style.display="block",ee.position.set(0,1,0),ee.velocity.set(0,0,0),ee.angularVelocity.set(0,0,0),Fn.gravity.set(0,-9.81,0),Rs.textContent="Time: 0"});pp.addEventListener("click",function(){As.style.display="none",Cs(),Vo()});mp.addEventListener("click",()=>{bs.style.display="none",As.style.display="block",ee.position.set(0,1,0),ee.velocity.set(0,0,0),ee.angularVelocity.set(0,0,0),Cs()});const yp=document.querySelector("canvas.webgl"),On=new Jd,Mp=new rp,Go=Mp.load("./matcaps/3.png");Go.colorSpace=Ue;const fn={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{fn.width=window.innerWidth,fn.height=window.innerHeight,un.aspect=fn.width/fn.height,un.updateProjectionMatrix(),$n.setSize(fn.width,fn.height),$n.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Fn=new Re.World;Fn.gravity.set(0,-9.81,0);const to=new Re.Material("default"),Tr=new Re.ContactMaterial(to,to,{friction:.1,restitution:1});Fn.addContactMaterial(Tr);Fn.defaultContactMaterial=Tr;const Sp=new Er(1,20,20),Ho=new tp;Ho.matcap=Go;const gr=new cn(Sp,Ho);On.add(gr);gr.castShadow=!0;const Ep=new Re.Sphere(1),ee=new Re.Body({mass:1,position:new Re.Vec3(0,1,0),shape:Ep,material:Tr});ee.velocity.y=0;Fn.addBody(ee);function we(i,t,e,n){const a=new cn(new wi(i,t,e),new Qd({color:"#777777",metalness:.3,roughness:.9}));a.position.copy(n),a.receiveShadow=!0,On.add(a);const r=new Re.Box(new Re.Vec3(i/2,t/2,e/2)),s=new Re.Body({type:Re.Body.STATIC,position:n,material:Tr});return s.receiveShadow=!0,s.addShape(r),Fn.addBody(s),{mesh:a,body:s}}function wp(){return[we(40,.25,40,new et(0,0,0)),we(25,.25,25,new et(0,0,35)),we(8,.25,15,new et(0,5,45)),we(8,.25,8,new et(5,5,65)),we(10,.25,10,new et(-5,5,75)),we(7,.25,7,new et(-5,5,85)),we(7,.25,7,new et(-5,5,95)),we(7,.25,7,new et(-5,5,105)),we(7,.25,7,new et(-5,5,115)),we(8,.25,8,new et(5,5,130)),we(8,.25,8,new et(8,5,155)),we(8,.25,8,new et(20,5,165)),we(8,.25,8,new et(30,5,165)),we(8,.25,8,new et(35,5,165)),we(8,.25,8,new et(40,5,180)),we(4,.25,4,new et(40,5,190)),we(4,.25,4,new et(40,5,210)),we(2,.25,10,new et(40,5,230)),we(2,.25,10,new et(40,5,260)),we(.5,.25,10,new et(40,5,275)),we(10,.25,10,new et(40,5,300))]}let Ii=wp();Ii.receiveShadow=!0;const Tp=100,Ap=5,Wo=new Dn({vertexShader:dp,fragmentShader:fp,uniforms:{uTime:new Ts(0),uOctaves:{value:window.uOctaves},uPersistence:{value:window.uPersistence},uLacunarity:{value:window.uLacunarity},uAmplitude:{value:window.uAmplitude},uNoiseScale:{value:Tp},uPixelation:{value:Ap}},side:Ge}),bp=new Er(500,32,32),Rp=new cn(bp,Wo);On.add(Rp);const We={w:!1,a:!1,s:!1,d:!1,space:!1,W:!1,A:!1,S:!1,D:!1};document.addEventListener("keydown",i=>{(i.key in We||i.key===" ")&&(i.key===" "?We.space=!0:We[i.key]=!0)});document.addEventListener("keyup",i=>{i.key in We&&(We[i.key]=!1),i.key===" "&&ee.velocity.y<=0&&(_r=!1)});let ms=!0,_r=!1;ee.addEventListener("collide",i=>{Ii.forEach(t=>{i.body===t.body&&ee.velocity.y<=.1&&(ms=!0,_r=!1,ee.velocity.y=0)})});const Cp=new lp(16777215,.5);On.add(Cp);const tn=new op(16777215,5.8);tn.castShadow=!0;tn.position.set(0,50,0);tn.target.position.set(0,0,0);On.add(tn);On.add(tn.target);tn.shadow.mapSize.set(4048,4048);tn.shadow.camera.near=.5;tn.shadow.camera.far=500;tn.shadow.camera.left=-500;tn.shadow.camera.right=500;tn.shadow.camera.top=400;tn.shadow.camera.bottom=-400;const un=new Je(75,fn.width/fn.height,.1,100);un.position.set(0,15,-30);un.rotation.y=Math.PI;On.add(un);un.near=.1;un.far=1e3;un.updateProjectionMatrix();const $n=new Bo({canvas:yp,antialias:!0});$n.shadowMap.enabled=!0;$n.shadowMap.type=ro;$n.setSize(fn.width,fn.height);$n.setPixelRatio(Math.min(window.devicePixelRatio,2));const eo=new cp;let no=0;const ko=()=>{let i=eo.getElapsedTime();const t=i-no;no=i,eo.getElapsedTime(),_p(),Fn.step(1/60,t,3),ms&&Math.abs(ee.velocity.y)<.001&&(ee.velocity.y=0),We.space&&!_r&&(ee.applyImpulse(new Re.Vec3(0,10,0),ee.position),ms=!1,_r=!0),gr.position.copy(ee.position),gr.quaternion.copy(ee.quaternion),Ii.forEach(r=>{r.mesh.position.copy(r.body.position),r.mesh.quaternion.copy(r.body.quaternion)}),Wo.uniforms.uTime.value=i;const e=5;We.w&&ee.applyForce(new Re.Vec3(0,0,+e),ee.position),We.s&&ee.applyForce(new Re.Vec3(0,0,-e),ee.position),We.a&&ee.applyForce(new Re.Vec3(+e,0,0),ee.position),We.d&&ee.applyForce(new Re.Vec3(-e,0,0),ee.position),We.W&&ee.applyForce(new Re.Vec3(0,0,+e),ee.position),We.S&&ee.applyForce(new Re.Vec3(0,0,-e),ee.position),We.A&&ee.applyForce(new Re.Vec3(+e,0,0),ee.position),We.D&&ee.applyForce(new Re.Vec3(-e,0,0),ee.position),un.position.x=ee.position.x,un.position.z=ee.position.z-30,ee.position.y<-20&&(ee.position.set(0,1,0),ee.velocity.set(0,0,0),ee.angularVelocity.set(0,0,0),Cs(),Vo());const n=Ii[Ii.length-1],a=3;Math.abs(ee.position.x-n.body.position.x)<a&&Math.abs(ee.position.y-n.body.position.y)<a&&Math.abs(ee.position.z-n.body.position.z)<a&&(xp(),Fn.gravity.set(0,0,0),bs.style.display="block",vp.innerHTML=`${Math.floor(vr)} seconds`),$n.render(On,un),window.requestAnimationFrame(ko)};ko();
//# sourceMappingURL=index-BI7hk9eb.js.map
