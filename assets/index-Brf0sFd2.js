(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function bg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uu={exports:{}},Ga={},Fu={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function n_(){if(lm)return Et;lm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function S(k,ee,ze){this.props=k,this.context=ee,this.refs=R,this.updater=ze||y}S.prototype.isReactComponent={},S.prototype.setState=function(k,ee){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ee,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=S.prototype;function U(k,ee,ze){this.props=k,this.context=ee,this.refs=R,this.updater=ze||y}var D=U.prototype=new x;D.constructor=U,M(D,S.prototype),D.isPureReactComponent=!0;var N=Array.isArray,V=Object.prototype.hasOwnProperty,z={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function Y(k,ee,ze){var Ye,Xe={},ie=null,ve=null;if(ee!=null)for(Ye in ee.ref!==void 0&&(ve=ee.ref),ee.key!==void 0&&(ie=""+ee.key),ee)V.call(ee,Ye)&&!O.hasOwnProperty(Ye)&&(Xe[Ye]=ee[Ye]);var we=arguments.length-2;if(we===1)Xe.children=ze;else if(1<we){for(var ke=Array(we),Ve=0;Ve<we;Ve++)ke[Ve]=arguments[Ve+2];Xe.children=ke}if(k&&k.defaultProps)for(Ye in we=k.defaultProps,we)Xe[Ye]===void 0&&(Xe[Ye]=we[Ye]);return{$$typeof:s,type:k,key:ie,ref:ve,props:Xe,_owner:z.current}}function w(k,ee){return{$$typeof:s,type:k.type,key:ee,ref:k.ref,props:k.props,_owner:k._owner}}function A(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function I(k){var ee={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ze){return ee[ze]})}var Z=/\/+/g;function oe(k,ee){return typeof k=="object"&&k!==null&&k.key!=null?I(""+k.key):ee.toString(36)}function _e(k,ee,ze,Ye,Xe){var ie=typeof k;(ie==="undefined"||ie==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(ie){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case s:case e:ve=!0}}if(ve)return ve=k,Xe=Xe(ve),k=Ye===""?"."+oe(ve,0):Ye,N(Xe)?(ze="",k!=null&&(ze=k.replace(Z,"$&/")+"/"),_e(Xe,ee,ze,"",function(Ve){return Ve})):Xe!=null&&(A(Xe)&&(Xe=w(Xe,ze+(!Xe.key||ve&&ve.key===Xe.key?"":(""+Xe.key).replace(Z,"$&/")+"/")+k)),ee.push(Xe)),1;if(ve=0,Ye=Ye===""?".":Ye+":",N(k))for(var we=0;we<k.length;we++){ie=k[we];var ke=Ye+oe(ie,we);ve+=_e(ie,ee,ze,ke,Xe)}else if(ke=_(k),typeof ke=="function")for(k=ke.call(k),we=0;!(ie=k.next()).done;)ie=ie.value,ke=Ye+oe(ie,we++),ve+=_e(ie,ee,ze,ke,Xe);else if(ie==="object")throw ee=String(k),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ve}function se(k,ee,ze){if(k==null)return k;var Ye=[],Xe=0;return _e(k,Ye,"","",function(ie){return ee.call(ze,ie,Xe++)}),Ye}function fe(k){if(k._status===-1){var ee=k._result;ee=ee(),ee.then(function(ze){(k._status===0||k._status===-1)&&(k._status=1,k._result=ze)},function(ze){(k._status===0||k._status===-1)&&(k._status=2,k._result=ze)}),k._status===-1&&(k._status=0,k._result=ee)}if(k._status===1)return k._result.default;throw k._result}var me={current:null},B={transition:null},he={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:B,ReactCurrentOwner:z};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:se,forEach:function(k,ee,ze){se(k,function(){ee.apply(this,arguments)},ze)},count:function(k){var ee=0;return se(k,function(){ee++}),ee},toArray:function(k){return se(k,function(ee){return ee})||[]},only:function(k){if(!A(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Et.Component=S,Et.Fragment=t,Et.Profiler=a,Et.PureComponent=U,Et.StrictMode=r,Et.Suspense=p,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Et.act=Q,Et.cloneElement=function(k,ee,ze){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ye=M({},k.props),Xe=k.key,ie=k.ref,ve=k._owner;if(ee!=null){if(ee.ref!==void 0&&(ie=ee.ref,ve=z.current),ee.key!==void 0&&(Xe=""+ee.key),k.type&&k.type.defaultProps)var we=k.type.defaultProps;for(ke in ee)V.call(ee,ke)&&!O.hasOwnProperty(ke)&&(Ye[ke]=ee[ke]===void 0&&we!==void 0?we[ke]:ee[ke])}var ke=arguments.length-2;if(ke===1)Ye.children=ze;else if(1<ke){we=Array(ke);for(var Ve=0;Ve<ke;Ve++)we[Ve]=arguments[Ve+2];Ye.children=we}return{$$typeof:s,type:k.type,key:Xe,ref:ie,props:Ye,_owner:ve}},Et.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Et.createElement=Y,Et.createFactory=function(k){var ee=Y.bind(null,k);return ee.type=k,ee},Et.createRef=function(){return{current:null}},Et.forwardRef=function(k){return{$$typeof:d,render:k}},Et.isValidElement=A,Et.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:fe}},Et.memo=function(k,ee){return{$$typeof:f,type:k,compare:ee===void 0?null:ee}},Et.startTransition=function(k){var ee=B.transition;B.transition={};try{k()}finally{B.transition=ee}},Et.unstable_act=Q,Et.useCallback=function(k,ee){return me.current.useCallback(k,ee)},Et.useContext=function(k){return me.current.useContext(k)},Et.useDebugValue=function(){},Et.useDeferredValue=function(k){return me.current.useDeferredValue(k)},Et.useEffect=function(k,ee){return me.current.useEffect(k,ee)},Et.useId=function(){return me.current.useId()},Et.useImperativeHandle=function(k,ee,ze){return me.current.useImperativeHandle(k,ee,ze)},Et.useInsertionEffect=function(k,ee){return me.current.useInsertionEffect(k,ee)},Et.useLayoutEffect=function(k,ee){return me.current.useLayoutEffect(k,ee)},Et.useMemo=function(k,ee){return me.current.useMemo(k,ee)},Et.useReducer=function(k,ee,ze){return me.current.useReducer(k,ee,ze)},Et.useRef=function(k){return me.current.useRef(k)},Et.useState=function(k){return me.current.useState(k)},Et.useSyncExternalStore=function(k,ee,ze){return me.current.useSyncExternalStore(k,ee,ze)},Et.useTransition=function(){return me.current.useTransition()},Et.version="18.3.1",Et}var cm;function Tf(){return cm||(cm=1,Fu.exports=n_()),Fu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function i_(){if(um)return Ga;um=1;var s=Tf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,f){var g,v={},_=null,y=null;f!==void 0&&(_=""+f),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(y=p.ref);for(g in p)r.call(p,g)&&!l.hasOwnProperty(g)&&(v[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)v[g]===void 0&&(v[g]=p[g]);return{$$typeof:e,type:d,key:_,ref:y,props:v,_owner:a.current}}return Ga.Fragment=t,Ga.jsx=u,Ga.jsxs=u,Ga}var dm;function r_(){return dm||(dm=1,Uu.exports=i_()),Uu.exports}var C=r_(),kt=Tf();const s_=bg(kt);var ml={},ku={exports:{}},Vn={},Ou={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function a_(){return fm||(fm=1,(function(s){function e(B,he){var Q=B.length;B.push(he);e:for(;0<Q;){var k=Q-1>>>1,ee=B[k];if(0<a(ee,he))B[k]=he,B[Q]=ee,Q=k;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var he=B[0],Q=B.pop();if(Q!==he){B[0]=Q;e:for(var k=0,ee=B.length,ze=ee>>>1;k<ze;){var Ye=2*(k+1)-1,Xe=B[Ye],ie=Ye+1,ve=B[ie];if(0>a(Xe,Q))ie<ee&&0>a(ve,Xe)?(B[k]=ve,B[ie]=Q,k=ie):(B[k]=Xe,B[Ye]=Q,k=Ye);else if(ie<ee&&0>a(ve,Q))B[k]=ve,B[ie]=Q,k=ie;else break e}}return he}function a(B,he){var Q=B.sortIndex-he.sortIndex;return Q!==0?Q:B.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],f=[],g=1,v=null,_=3,y=!1,M=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var he=t(f);he!==null;){if(he.callback===null)r(f);else if(he.startTime<=B)r(f),he.sortIndex=he.expirationTime,e(p,he);else break;he=t(f)}}function N(B){if(R=!1,D(B),!M)if(t(p)!==null)M=!0,fe(V);else{var he=t(f);he!==null&&me(N,he.startTime-B)}}function V(B,he){M=!1,R&&(R=!1,x(Y),Y=-1),y=!0;var Q=_;try{for(D(he),v=t(p);v!==null&&(!(v.expirationTime>he)||B&&!I());){var k=v.callback;if(typeof k=="function"){v.callback=null,_=v.priorityLevel;var ee=k(v.expirationTime<=he);he=s.unstable_now(),typeof ee=="function"?v.callback=ee:v===t(p)&&r(p),D(he)}else r(p);v=t(p)}if(v!==null)var ze=!0;else{var Ye=t(f);Ye!==null&&me(N,Ye.startTime-he),ze=!1}return ze}finally{v=null,_=Q,y=!1}}var z=!1,O=null,Y=-1,w=5,A=-1;function I(){return!(s.unstable_now()-A<w)}function Z(){if(O!==null){var B=s.unstable_now();A=B;var he=!0;try{he=O(!0,B)}finally{he?oe():(z=!1,O=null)}}else z=!1}var oe;if(typeof U=="function")oe=function(){U(Z)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,se=_e.port2;_e.port1.onmessage=Z,oe=function(){se.postMessage(null)}}else oe=function(){S(Z,0)};function fe(B){O=B,z||(z=!0,oe())}function me(B,he){Y=S(function(){B(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,fe(V))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(B){switch(_){case 1:case 2:case 3:var he=3;break;default:he=_}var Q=_;_=he;try{return B()}finally{_=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,he){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=_;_=B;try{return he()}finally{_=Q}},s.unstable_scheduleCallback=function(B,he,Q){var k=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?k+Q:k):Q=k,B){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Q+ee,B={id:g++,callback:he,priorityLevel:B,startTime:Q,expirationTime:ee,sortIndex:-1},Q>k?(B.sortIndex=Q,e(f,B),t(p)===null&&B===t(f)&&(R?(x(Y),Y=-1):R=!0,me(N,Q-k))):(B.sortIndex=ee,e(p,B),M||y||(M=!0,fe(V))),B},s.unstable_shouldYield=I,s.unstable_wrapCallback=function(B){var he=_;return function(){var Q=_;_=he;try{return B.apply(this,arguments)}finally{_=Q}}}})(zu)),zu}var hm;function o_(){return hm||(hm=1,Ou.exports=a_()),Ou.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function l_(){if(pm)return Vn;pm=1;var s=Tf(),e=o_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function _(n){return p.call(v,n)?!0:p.call(g,n)?!1:f.test(n)?v[n]=!0:(g[n]=!0,!1)}function y(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||y(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,c,h,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,U);S[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,U);S[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,U);S[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,o,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,h,c)&&(o=null),c||h===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,c=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),z=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),I=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),B=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,k;function ee(n){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var ze=!1;function Ye(n,i){if(!n||ze)return"";ze=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){c=le}n.call(i.prototype)}else{try{throw Error()}catch(le){c=le}n()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var h=le.stack.split(`
`),m=c.stack.split(`
`),E=h.length-1,F=m.length-1;1<=E&&0<=F&&h[E]!==m[F];)F--;for(;1<=E&&0<=F;E--,F--)if(h[E]!==m[F]){if(E!==1||F!==1)do if(E--,F--,0>F||h[E]!==m[F]){var H=`
`+h[E].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=E&&0<=F);break}}}finally{ze=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ee(n):""}function Xe(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Ye(n.type,!1),n;case 11:return n=Ye(n.type.render,!1),n;case 1:return n=Ye(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case z:return"Portal";case w:return"Profiler";case Y:return"StrictMode";case oe:return"Suspense";case _e:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case se:return i=n.displayName||null,i!==null?i:ie(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return ie(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=ke(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function mt(n){n._valueTracker||(n._valueTracker=Ve(n))}function St(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=ke(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function P(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pe(n,i){var o=i.checked;return Q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ne(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function re(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function ae(n,i){re(n,i);var o=we(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Se(n,i.type,o):i.hasOwnProperty("defaultValue")&&Se(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function xe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Se(n,i,o){(i!=="number"||P(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ae=Array.isArray;function at(n,i,o,c){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&c&&(n[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function rt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ae(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:we(o)}}function T(n,i){var o=we(i.value),c=we(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ge,Ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ge=ge||document.createElement("div"),ge.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ge.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Pe(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(n){$e.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Be[i]=Be[n]})});function Re(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Be.hasOwnProperty(n)&&Be[n]?(""+i).trim():i+"px"}function je(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,h=Re(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,h):n[o]=h}}var ut=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(n,i){if(i){if(ut[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function He(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,Ue=null,Ge=null;function Ne(n){if(n=Ra(n)){if(typeof De!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Po(i),De(n.stateNode,n.type,i))}}function ye(n){Ue?Ge?Ge.push(n):Ge=[n]:Ue=n}function Qe(){if(Ue){var n=Ue,i=Ge;if(Ge=Ue=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function gt(n,i){return n(i)}function It(){}var wt=!1;function hn(n,i,o){if(wt)return n(i,o);wt=!0;try{return gt(n,i,o)}finally{wt=!1,(Ue!==null||Ge!==null)&&(It(),Qe())}}function rn(n,i){var o=n.stateNode;if(o===null)return null;var c=Po(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var nr=!1;if(d)try{var tn={};Object.defineProperty(tn,"passive",{get:function(){nr=!0}}),window.addEventListener("test",tn,tn),window.removeEventListener("test",tn,tn)}catch{nr=!1}function zr(n,i,o,c,h,m,E,F,H){var le=Array.prototype.slice.call(arguments,3);try{i.apply(o,le)}catch(be){this.onError(be)}}var ci=!1,Fi=null,ei=!1,Pn=null,Ai={onError:function(n){ci=!0,Fi=n}};function Br(n,i,o,c,h,m,E,F,H){ci=!1,Fi=null,zr.apply(Ai,arguments)}function ir(n,i,o,c,h,m,E,F,H){if(Br.apply(this,arguments),ci){if(ci){var le=Fi;ci=!1,Fi=null}else throw Error(t(198));ei||(ei=!0,Pn=le)}}function jn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function rr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function hs(n){if(jn(n)!==n)throw Error(t(188))}function ps(n){var i=n.alternate;if(!i){if(i=jn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var h=o.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){o=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===o)return hs(h),n;if(m===c)return hs(h),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=h,c=m;else{for(var E=!1,F=h.child;F;){if(F===o){E=!0,o=h,c=m;break}if(F===c){E=!0,c=h,o=m;break}F=F.sibling}if(!E){for(F=m.child;F;){if(F===o){E=!0,o=m,c=h;break}if(F===c){E=!0,c=m,o=h;break}F=F.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Vr(n){return n=ps(n),n!==null?ui(n):null}function ui(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ui(n);if(i!==null)return i;n=n.sibling}return null}var b=e.unstable_scheduleCallback,$=e.unstable_cancelCallback,ce=e.unstable_shouldYield,ue=e.unstable_requestPaint,X=e.unstable_now,Ie=e.unstable_getCurrentPriorityLevel,K=e.unstable_ImmediatePriority,Ee=e.unstable_UserBlockingPriority,Te=e.unstable_NormalPriority,Oe=e.unstable_LowPriority,nt=e.unstable_IdlePriority,Ke=null,lt=null;function At(n){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:ct,Nt=Math.log,bt=Math.LN2;function ct(n){return n>>>=0,n===0?32:31-(Nt(n)/bt|0)|0}var Ft=64,_t=4194304;function Zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,E=o&268435455;if(E!==0){var F=E&~h;F!==0?c=Zt(F):(m&=E,m!==0&&(c=Zt(m)))}else E=o&~h,E!==0?c=Zt(E):m!==0&&(c=Zt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-ht(i),h=1<<o,c|=n[o],i&=~h;return c}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-ht(m),F=1<<E,H=h[E];H===-1?((F&o)===0||(F&c)!==0)&&(h[E]=Wt(F,i)):H<=i&&(n.expiredLanes|=F),m&=~F}}function Rt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function pn(){var n=Ft;return Ft<<=1,(Ft&4194240)===0&&(Ft=64),n}function sn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function qt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ht(i),n[i]=o}function Yt(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-ht(o),m=1<<h;i[h]=0,c[h]=-1,n[h]=-1,o&=~m}}function di(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ht(o),h=1<<c;h&i|n[c]&i&&(n[c]|=i),o&=~h}}var xt=0;function ms(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var gs,sc,Hf,Gf,Wf,ac=!1,mo=[],sr=null,ar=null,or=null,fa=new Map,ha=new Map,lr=[],Tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(n,i){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":fa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(i.pointerId)}}function pa(n,i,o,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ra(i),i!==null&&sc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function wv(n,i,o,c,h){switch(i){case"focusin":return sr=pa(sr,n,i,o,c,h),!0;case"dragenter":return ar=pa(ar,n,i,o,c,h),!0;case"mouseover":return or=pa(or,n,i,o,c,h),!0;case"pointerover":var m=h.pointerId;return fa.set(m,pa(fa.get(m)||null,n,i,o,c,h)),!0;case"gotpointercapture":return m=h.pointerId,ha.set(m,pa(ha.get(m)||null,n,i,o,c,h)),!0}return!1}function Xf(n){var i=Hr(n.target);if(i!==null){var o=jn(i);if(o!==null){if(i=o.tag,i===13){if(i=rr(o),i!==null){n.blockedOn=i,Wf(n.priority,function(){Hf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function go(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=lc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);pt=c,o.target.dispatchEvent(c),pt=null}else return i=Ra(o),i!==null&&sc(i),n.blockedOn=o,!1;i.shift()}return!0}function qf(n,i,o){go(n)&&o.delete(i)}function Av(){ac=!1,sr!==null&&go(sr)&&(sr=null),ar!==null&&go(ar)&&(ar=null),or!==null&&go(or)&&(or=null),fa.forEach(qf),ha.forEach(qf)}function ma(n,i){n.blockedOn===i&&(n.blockedOn=null,ac||(ac=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Av)))}function ga(n){function i(h){return ma(h,n)}if(0<mo.length){ma(mo[0],n);for(var o=1;o<mo.length;o++){var c=mo[o];c.blockedOn===n&&(c.blockedOn=null)}}for(sr!==null&&ma(sr,n),ar!==null&&ma(ar,n),or!==null&&ma(or,n),fa.forEach(i),ha.forEach(i),o=0;o<lr.length;o++)c=lr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<lr.length&&(o=lr[0],o.blockedOn===null);)Xf(o),o.blockedOn===null&&lr.shift()}var vs=N.ReactCurrentBatchConfig,vo=!0;function Cv(n,i,o,c){var h=xt,m=vs.transition;vs.transition=null;try{xt=1,oc(n,i,o,c)}finally{xt=h,vs.transition=m}}function Rv(n,i,o,c){var h=xt,m=vs.transition;vs.transition=null;try{xt=4,oc(n,i,o,c)}finally{xt=h,vs.transition=m}}function oc(n,i,o,c){if(vo){var h=lc(n,i,o,c);if(h===null)wc(n,i,c,_o,o),jf(n,c);else if(wv(h,n,i,o,c))c.stopPropagation();else if(jf(n,c),i&4&&-1<Tv.indexOf(n)){for(;h!==null;){var m=Ra(h);if(m!==null&&gs(m),m=lc(n,i,o,c),m===null&&wc(n,i,c,_o,o),m===h)break;h=m}h!==null&&c.stopPropagation()}else wc(n,i,c,null,o)}}var _o=null;function lc(n,i,o,c){if(_o=null,n=W(c),n=Hr(n),n!==null)if(i=jn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=rr(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return _o=n,null}function Yf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ie()){case K:return 1;case Ee:return 4;case Te:case Oe:return 16;case nt:return 536870912;default:return 16}default:return 16}}var cr=null,cc=null,xo=null;function $f(){if(xo)return xo;var n,i=cc,o=i.length,c,h="value"in cr?cr.value:cr.textContent,m=h.length;for(n=0;n<o&&i[n]===h[n];n++);var E=o-n;for(c=1;c<=E&&i[o-c]===h[m-c];c++);return xo=h.slice(n,1<c?1-c:void 0)}function yo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function So(){return!0}function Kf(){return!1}function Xn(n){function i(o,c,h,m,E){this._reactName=o,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?So:Kf,this.isPropagationStopped=Kf,this}return Q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),i}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Xn(_s),va=Q({},_s,{view:0,detail:0}),bv=Xn(va),dc,fc,_a,Mo=Q({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_a&&(_a&&n.type==="mousemove"?(dc=n.screenX-_a.screenX,fc=n.screenY-_a.screenY):fc=dc=0,_a=n),dc)},movementY:function(n){return"movementY"in n?n.movementY:fc}}),Jf=Xn(Mo),Pv=Q({},Mo,{dataTransfer:0}),Nv=Xn(Pv),Lv=Q({},va,{relatedTarget:0}),hc=Xn(Lv),Dv=Q({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Xn(Dv),Uv=Q({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fv=Xn(Uv),kv=Q({},_s,{data:0}),Zf=Xn(kv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Bv[n])?!!i[n]:!1}function pc(){return Vv}var Hv=Q({},va,{key:function(n){if(n.key){var i=Ov[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=yo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(n){return n.type==="keypress"?yo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Gv=Xn(Hv),Wv=Q({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=Xn(Wv),jv=Q({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),Xv=Xn(jv),qv=Q({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=Xn(qv),$v=Q({},Mo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Kv=Xn($v),Jv=[9,13,27,32],mc=d&&"CompositionEvent"in window,xa=null;d&&"documentMode"in document&&(xa=document.documentMode);var Zv=d&&"TextEvent"in window&&!xa,eh=d&&(!mc||xa&&8<xa&&11>=xa),th=" ",nh=!1;function ih(n,i){switch(n){case"keyup":return Jv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function Qv(n,i){switch(n){case"compositionend":return rh(i);case"keypress":return i.which!==32?null:(nh=!0,th);case"textInput":return n=i.data,n===th&&nh?null:n;default:return null}}function e0(n,i){if(xs)return n==="compositionend"||!mc&&ih(n,i)?(n=$f(),xo=cc=cr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return eh&&i.locale!=="ko"?null:i.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!t0[n.type]:i==="textarea"}function ah(n,i,o,c){ye(c),i=Co(i,"onChange"),0<i.length&&(o=new uc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var ya=null,Sa=null;function n0(n){Th(n,0)}function Eo(n){var i=Ts(n);if(St(i))return n}function i0(n,i){if(n==="change")return i}var oh=!1;if(d){var gc;if(d){var vc="oninput"in document;if(!vc){var lh=document.createElement("div");lh.setAttribute("oninput","return;"),vc=typeof lh.oninput=="function"}gc=vc}else gc=!1;oh=gc&&(!document.documentMode||9<document.documentMode)}function ch(){ya&&(ya.detachEvent("onpropertychange",uh),Sa=ya=null)}function uh(n){if(n.propertyName==="value"&&Eo(Sa)){var i=[];ah(i,Sa,n,W(n)),hn(n0,i)}}function r0(n,i,o){n==="focusin"?(ch(),ya=i,Sa=o,ya.attachEvent("onpropertychange",uh)):n==="focusout"&&ch()}function s0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eo(Sa)}function a0(n,i){if(n==="click")return Eo(i)}function o0(n,i){if(n==="input"||n==="change")return Eo(i)}function l0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var fi=typeof Object.is=="function"?Object.is:l0;function Ma(n,i){if(fi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var h=o[c];if(!p.call(i,h)||!fi(n[h],i[h]))return!1}return!0}function dh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fh(n,i){var o=dh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=dh(o)}}function hh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?hh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ph(){for(var n=window,i=P();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=P(n.document)}return i}function _c(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function c0(n){var i=ph(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&hh(o.ownerDocument.documentElement,o)){if(c!==null&&_c(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=fh(o,m);var E=fh(o,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var u0=d&&"documentMode"in document&&11>=document.documentMode,ys=null,xc=null,Ea=null,yc=!1;function mh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;yc||ys==null||ys!==P(c)||(c=ys,"selectionStart"in c&&_c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ea&&Ma(Ea,c)||(Ea=c,c=Co(xc,"onSelect"),0<c.length&&(i=new uc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=ys)))}function To(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ss={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Sc={},gh={};d&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function wo(n){if(Sc[n])return Sc[n];if(!Ss[n])return n;var i=Ss[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in gh)return Sc[n]=i[o];return n}var vh=wo("animationend"),_h=wo("animationiteration"),xh=wo("animationstart"),yh=wo("transitionend"),Sh=new Map,Mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){Sh.set(n,i),l(i,[n])}for(var Mc=0;Mc<Mh.length;Mc++){var Ec=Mh[Mc],d0=Ec.toLowerCase(),f0=Ec[0].toUpperCase()+Ec.slice(1);ur(d0,"on"+f0)}ur(vh,"onAnimationEnd"),ur(_h,"onAnimationIteration"),ur(xh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(yh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Eh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ir(c,i,void 0,n),n.currentTarget=null}function Th(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var F=c[E],H=F.instance,le=F.currentTarget;if(F=F.listener,H!==m&&h.isPropagationStopped())break e;Eh(h,F,le),m=H}else for(E=0;E<c.length;E++){if(F=c[E],H=F.instance,le=F.currentTarget,F=F.listener,H!==m&&h.isPropagationStopped())break e;Eh(h,F,le),m=H}}}if(ei)throw n=Pn,ei=!1,Pn=null,n}function Vt(n,i){var o=i[Nc];o===void 0&&(o=i[Nc]=new Set);var c=n+"__bubble";o.has(c)||(wh(i,n,2,!1),o.add(c))}function Tc(n,i,o){var c=0;i&&(c|=4),wh(o,n,c,i)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[Ao]){n[Ao]=!0,r.forEach(function(o){o!=="selectionchange"&&(h0.has(o)||Tc(o,!1,n),Tc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ao]||(i[Ao]=!0,Tc("selectionchange",!1,i))}}function wh(n,i,o,c){switch(Yf(i)){case 1:var h=Cv;break;case 4:h=Rv;break;default:h=oc}o=h.bind(null,i,o,n),h=void 0,!nr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function wc(n,i,o,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var F=c.stateNode.containerInfo;if(F===h||F.nodeType===8&&F.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;E=E.return}for(;F!==null;){if(E=Hr(F),E===null)return;if(H=E.tag,H===5||H===6){c=m=E;continue e}F=F.parentNode}}c=c.return}hn(function(){var le=m,be=W(o),Le=[];e:{var Ce=Sh.get(n);if(Ce!==void 0){var Je=uc,it=n;switch(n){case"keypress":if(yo(o)===0)break e;case"keydown":case"keyup":Je=Gv;break;case"focusin":it="focus",Je=hc;break;case"focusout":it="blur",Je=hc;break;case"beforeblur":case"afterblur":Je=hc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=Xv;break;case vh:case _h:case xh:Je=Iv;break;case yh:Je=Yv;break;case"scroll":Je=bv;break;case"wheel":Je=Kv;break;case"copy":case"cut":case"paste":Je=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Qf}var st=(i&4)!==0,nn=!st&&n==="scroll",J=st?Ce!==null?Ce+"Capture":null:Ce;st=[];for(var q=le,te;q!==null;){te=q;var Fe=te.stateNode;if(te.tag===5&&Fe!==null&&(te=Fe,J!==null&&(Fe=rn(q,J),Fe!=null&&st.push(Aa(q,Fe,te)))),nn)break;q=q.return}0<st.length&&(Ce=new Je(Ce,it,null,o,be),Le.push({event:Ce,listeners:st}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",Ce&&o!==pt&&(it=o.relatedTarget||o.fromElement)&&(Hr(it)||it[ki]))break e;if((Je||Ce)&&(Ce=be.window===be?be:(Ce=be.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Je?(it=o.relatedTarget||o.toElement,Je=le,it=it?Hr(it):null,it!==null&&(nn=jn(it),it!==nn||it.tag!==5&&it.tag!==6)&&(it=null)):(Je=null,it=le),Je!==it)){if(st=Jf,Fe="onMouseLeave",J="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(st=Qf,Fe="onPointerLeave",J="onPointerEnter",q="pointer"),nn=Je==null?Ce:Ts(Je),te=it==null?Ce:Ts(it),Ce=new st(Fe,q+"leave",Je,o,be),Ce.target=nn,Ce.relatedTarget=te,Fe=null,Hr(be)===le&&(st=new st(J,q+"enter",it,o,be),st.target=te,st.relatedTarget=nn,Fe=st),nn=Fe,Je&&it)t:{for(st=Je,J=it,q=0,te=st;te;te=Ms(te))q++;for(te=0,Fe=J;Fe;Fe=Ms(Fe))te++;for(;0<q-te;)st=Ms(st),q--;for(;0<te-q;)J=Ms(J),te--;for(;q--;){if(st===J||J!==null&&st===J.alternate)break t;st=Ms(st),J=Ms(J)}st=null}else st=null;Je!==null&&Ah(Le,Ce,Je,st,!1),it!==null&&nn!==null&&Ah(Le,nn,it,st,!0)}}e:{if(Ce=le?Ts(le):window,Je=Ce.nodeName&&Ce.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Ce.type==="file")var ot=i0;else if(sh(Ce))if(oh)ot=o0;else{ot=s0;var dt=r0}else(Je=Ce.nodeName)&&Je.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(ot=a0);if(ot&&(ot=ot(n,le))){ah(Le,ot,o,be);break e}dt&&dt(n,Ce,le),n==="focusout"&&(dt=Ce._wrapperState)&&dt.controlled&&Ce.type==="number"&&Se(Ce,"number",Ce.value)}switch(dt=le?Ts(le):window,n){case"focusin":(sh(dt)||dt.contentEditable==="true")&&(ys=dt,xc=le,Ea=null);break;case"focusout":Ea=xc=ys=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,mh(Le,o,be);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":mh(Le,o,be)}var ft;if(mc)e:{switch(n){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else xs?ih(n,o)&&(vt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(vt="onCompositionStart");vt&&(eh&&o.locale!=="ko"&&(xs||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&xs&&(ft=$f()):(cr=be,cc="value"in cr?cr.value:cr.textContent,xs=!0)),dt=Co(le,vt),0<dt.length&&(vt=new Zf(vt,n,null,o,be),Le.push({event:vt,listeners:dt}),ft?vt.data=ft:(ft=rh(o),ft!==null&&(vt.data=ft)))),(ft=Zv?Qv(n,o):e0(n,o))&&(le=Co(le,"onBeforeInput"),0<le.length&&(be=new Zf("onBeforeInput","beforeinput",null,o,be),Le.push({event:be,listeners:le}),be.data=ft))}Th(Le,i)})}function Aa(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Co(n,i){for(var o=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=rn(n,o),m!=null&&c.unshift(Aa(n,m,h)),m=rn(n,i),m!=null&&c.push(Aa(n,m,h))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ah(n,i,o,c,h){for(var m=i._reactName,E=[];o!==null&&o!==c;){var F=o,H=F.alternate,le=F.stateNode;if(H!==null&&H===c)break;F.tag===5&&le!==null&&(F=le,h?(H=rn(o,m),H!=null&&E.unshift(Aa(o,H,F))):h||(H=rn(o,m),H!=null&&E.push(Aa(o,H,F)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var p0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(p0,`
`).replace(m0,"")}function Ro(n,i,o){if(i=Ch(i),Ch(n)!==i&&o)throw Error(t(425))}function bo(){}var Ac=null,Cc=null;function Rc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(_0)}:bc;function _0(n){setTimeout(function(){throw n})}function Pc(n,i){var o=i,c=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(c===0){n.removeChild(h),ga(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=h}while(o);ga(i)}function dr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function bh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Es,Ca="__reactProps$"+Es,ki="__reactContainer$"+Es,Nc="__reactEvents$"+Es,x0="__reactListeners$"+Es,y0="__reactHandles$"+Es;function Hr(n){var i=n[Ci];if(i)return i;for(var o=n.parentNode;o;){if(i=o[ki]||o[Ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=bh(n);n!==null;){if(o=n[Ci])return o;n=bh(n)}return i}n=o,o=n.parentNode}return null}function Ra(n){return n=n[Ci]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Po(n){return n[Ca]||null}var Lc=[],ws=-1;function fr(n){return{current:n}}function Ht(n){0>ws||(n.current=Lc[ws],Lc[ws]=null,ws--)}function Bt(n,i){ws++,Lc[ws]=n.current,n.current=i}var hr={},Mn=fr(hr),Fn=fr(!1),Gr=hr;function As(n,i){var o=n.type.contextTypes;if(!o)return hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in o)h[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function kn(n){return n=n.childContextTypes,n!=null}function No(){Ht(Fn),Ht(Mn)}function Ph(n,i,o){if(Mn.current!==hr)throw Error(t(168));Bt(Mn,i),Bt(Fn,o)}function Nh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ve(n)||"Unknown",h));return Q({},o,c)}function Lo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,Gr=Mn.current,Bt(Mn,n),Bt(Fn,Fn.current),!0}function Lh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Nh(n,i,Gr),c.__reactInternalMemoizedMergedChildContext=n,Ht(Fn),Ht(Mn),Bt(Mn,n)):Ht(Fn),Bt(Fn,o)}var Oi=null,Do=!1,Dc=!1;function Dh(n){Oi===null?Oi=[n]:Oi.push(n)}function S0(n){Do=!0,Dh(n)}function pr(){if(!Dc&&Oi!==null){Dc=!0;var n=0,i=xt;try{var o=Oi;for(xt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Oi=null,Do=!1}catch(h){throw Oi!==null&&(Oi=Oi.slice(n+1)),b(K,pr),h}finally{xt=i,Dc=!1}}return null}var Cs=[],Rs=0,Io=null,Uo=0,ti=[],ni=0,Wr=null,zi=1,Bi="";function jr(n,i){Cs[Rs++]=Uo,Cs[Rs++]=Io,Io=n,Uo=i}function Ih(n,i,o){ti[ni++]=zi,ti[ni++]=Bi,ti[ni++]=Wr,Wr=n;var c=zi;n=Bi;var h=32-ht(c)-1;c&=~(1<<h),o+=1;var m=32-ht(i)+h;if(30<m){var E=h-h%5;m=(c&(1<<E)-1).toString(32),c>>=E,h-=E,zi=1<<32-ht(i)+h|o<<h|c,Bi=m+n}else zi=1<<m|o<<h|c,Bi=n}function Ic(n){n.return!==null&&(jr(n,1),Ih(n,1,0))}function Uc(n){for(;n===Io;)Io=Cs[--Rs],Cs[Rs]=null,Uo=Cs[--Rs],Cs[Rs]=null;for(;n===Wr;)Wr=ti[--ni],ti[ni]=null,Bi=ti[--ni],ti[ni]=null,zi=ti[--ni],ti[ni]=null}var qn=null,Yn=null,jt=!1,hi=null;function Uh(n,i){var o=ai(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Fh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,qn=n,Yn=dr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,qn=n,Yn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Wr!==null?{id:zi,overflow:Bi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ai(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,qn=n,Yn=null,!0):!1;default:return!1}}function Fc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kc(n){if(jt){var i=Yn;if(i){var o=i;if(!Fh(n,i)){if(Fc(n))throw Error(t(418));i=dr(o.nextSibling);var c=qn;i&&Fh(n,i)?Uh(c,o):(n.flags=n.flags&-4097|2,jt=!1,qn=n)}}else{if(Fc(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,qn=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;qn=n}function Fo(n){if(n!==qn)return!1;if(!jt)return kh(n),jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Rc(n.type,n.memoizedProps)),i&&(i=Yn)){if(Fc(n))throw Oh(),Error(t(418));for(;i;)Uh(n,i),i=dr(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Yn=dr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Yn=null}}else Yn=qn?dr(n.stateNode.nextSibling):null;return!0}function Oh(){for(var n=Yn;n;)n=dr(n.nextSibling)}function bs(){Yn=qn=null,jt=!1}function Oc(n){hi===null?hi=[n]:hi.push(n)}var M0=N.ReactCurrentBatchConfig;function ba(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var F=h.refs;E===null?delete F[m]:F[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function ko(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function Bh(n){function i(J,q){if(n){var te=J.deletions;te===null?(J.deletions=[q],J.flags|=16):te.push(q)}}function o(J,q){if(!n)return null;for(;q!==null;)i(J,q),q=q.sibling;return null}function c(J,q){for(J=new Map;q!==null;)q.key!==null?J.set(q.key,q):J.set(q.index,q),q=q.sibling;return J}function h(J,q){return J=Mr(J,q),J.index=0,J.sibling=null,J}function m(J,q,te){return J.index=te,n?(te=J.alternate,te!==null?(te=te.index,te<q?(J.flags|=2,q):te):(J.flags|=2,q)):(J.flags|=1048576,q)}function E(J){return n&&J.alternate===null&&(J.flags|=2),J}function F(J,q,te,Fe){return q===null||q.tag!==6?(q=bu(te,J.mode,Fe),q.return=J,q):(q=h(q,te),q.return=J,q)}function H(J,q,te,Fe){var ot=te.type;return ot===O?be(J,q,te.props.children,Fe,te.key):q!==null&&(q.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===fe&&zh(ot)===q.type)?(Fe=h(q,te.props),Fe.ref=ba(J,q,te),Fe.return=J,Fe):(Fe=ol(te.type,te.key,te.props,null,J.mode,Fe),Fe.ref=ba(J,q,te),Fe.return=J,Fe)}function le(J,q,te,Fe){return q===null||q.tag!==4||q.stateNode.containerInfo!==te.containerInfo||q.stateNode.implementation!==te.implementation?(q=Pu(te,J.mode,Fe),q.return=J,q):(q=h(q,te.children||[]),q.return=J,q)}function be(J,q,te,Fe,ot){return q===null||q.tag!==7?(q=Qr(te,J.mode,Fe,ot),q.return=J,q):(q=h(q,te),q.return=J,q)}function Le(J,q,te){if(typeof q=="string"&&q!==""||typeof q=="number")return q=bu(""+q,J.mode,te),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case V:return te=ol(q.type,q.key,q.props,null,J.mode,te),te.ref=ba(J,null,q),te.return=J,te;case z:return q=Pu(q,J.mode,te),q.return=J,q;case fe:var Fe=q._init;return Le(J,Fe(q._payload),te)}if(Ae(q)||he(q))return q=Qr(q,J.mode,te,null),q.return=J,q;ko(J,q)}return null}function Ce(J,q,te,Fe){var ot=q!==null?q.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return ot!==null?null:F(J,q,""+te,Fe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case V:return te.key===ot?H(J,q,te,Fe):null;case z:return te.key===ot?le(J,q,te,Fe):null;case fe:return ot=te._init,Ce(J,q,ot(te._payload),Fe)}if(Ae(te)||he(te))return ot!==null?null:be(J,q,te,Fe,null);ko(J,te)}return null}function Je(J,q,te,Fe,ot){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return J=J.get(te)||null,F(q,J,""+Fe,ot);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case V:return J=J.get(Fe.key===null?te:Fe.key)||null,H(q,J,Fe,ot);case z:return J=J.get(Fe.key===null?te:Fe.key)||null,le(q,J,Fe,ot);case fe:var dt=Fe._init;return Je(J,q,te,dt(Fe._payload),ot)}if(Ae(Fe)||he(Fe))return J=J.get(te)||null,be(q,J,Fe,ot,null);ko(q,Fe)}return null}function it(J,q,te,Fe){for(var ot=null,dt=null,ft=q,vt=q=0,vn=null;ft!==null&&vt<te.length;vt++){ft.index>vt?(vn=ft,ft=null):vn=ft.sibling;var Lt=Ce(J,ft,te[vt],Fe);if(Lt===null){ft===null&&(ft=vn);break}n&&ft&&Lt.alternate===null&&i(J,ft),q=m(Lt,q,vt),dt===null?ot=Lt:dt.sibling=Lt,dt=Lt,ft=vn}if(vt===te.length)return o(J,ft),jt&&jr(J,vt),ot;if(ft===null){for(;vt<te.length;vt++)ft=Le(J,te[vt],Fe),ft!==null&&(q=m(ft,q,vt),dt===null?ot=ft:dt.sibling=ft,dt=ft);return jt&&jr(J,vt),ot}for(ft=c(J,ft);vt<te.length;vt++)vn=Je(ft,J,vt,te[vt],Fe),vn!==null&&(n&&vn.alternate!==null&&ft.delete(vn.key===null?vt:vn.key),q=m(vn,q,vt),dt===null?ot=vn:dt.sibling=vn,dt=vn);return n&&ft.forEach(function(Er){return i(J,Er)}),jt&&jr(J,vt),ot}function st(J,q,te,Fe){var ot=he(te);if(typeof ot!="function")throw Error(t(150));if(te=ot.call(te),te==null)throw Error(t(151));for(var dt=ot=null,ft=q,vt=q=0,vn=null,Lt=te.next();ft!==null&&!Lt.done;vt++,Lt=te.next()){ft.index>vt?(vn=ft,ft=null):vn=ft.sibling;var Er=Ce(J,ft,Lt.value,Fe);if(Er===null){ft===null&&(ft=vn);break}n&&ft&&Er.alternate===null&&i(J,ft),q=m(Er,q,vt),dt===null?ot=Er:dt.sibling=Er,dt=Er,ft=vn}if(Lt.done)return o(J,ft),jt&&jr(J,vt),ot;if(ft===null){for(;!Lt.done;vt++,Lt=te.next())Lt=Le(J,Lt.value,Fe),Lt!==null&&(q=m(Lt,q,vt),dt===null?ot=Lt:dt.sibling=Lt,dt=Lt);return jt&&jr(J,vt),ot}for(ft=c(J,ft);!Lt.done;vt++,Lt=te.next())Lt=Je(ft,J,vt,Lt.value,Fe),Lt!==null&&(n&&Lt.alternate!==null&&ft.delete(Lt.key===null?vt:Lt.key),q=m(Lt,q,vt),dt===null?ot=Lt:dt.sibling=Lt,dt=Lt);return n&&ft.forEach(function(t_){return i(J,t_)}),jt&&jr(J,vt),ot}function nn(J,q,te,Fe){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case V:e:{for(var ot=te.key,dt=q;dt!==null;){if(dt.key===ot){if(ot=te.type,ot===O){if(dt.tag===7){o(J,dt.sibling),q=h(dt,te.props.children),q.return=J,J=q;break e}}else if(dt.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===fe&&zh(ot)===dt.type){o(J,dt.sibling),q=h(dt,te.props),q.ref=ba(J,dt,te),q.return=J,J=q;break e}o(J,dt);break}else i(J,dt);dt=dt.sibling}te.type===O?(q=Qr(te.props.children,J.mode,Fe,te.key),q.return=J,J=q):(Fe=ol(te.type,te.key,te.props,null,J.mode,Fe),Fe.ref=ba(J,q,te),Fe.return=J,J=Fe)}return E(J);case z:e:{for(dt=te.key;q!==null;){if(q.key===dt)if(q.tag===4&&q.stateNode.containerInfo===te.containerInfo&&q.stateNode.implementation===te.implementation){o(J,q.sibling),q=h(q,te.children||[]),q.return=J,J=q;break e}else{o(J,q);break}else i(J,q);q=q.sibling}q=Pu(te,J.mode,Fe),q.return=J,J=q}return E(J);case fe:return dt=te._init,nn(J,q,dt(te._payload),Fe)}if(Ae(te))return it(J,q,te,Fe);if(he(te))return st(J,q,te,Fe);ko(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,q!==null&&q.tag===6?(o(J,q.sibling),q=h(q,te),q.return=J,J=q):(o(J,q),q=bu(te,J.mode,Fe),q.return=J,J=q),E(J)):o(J,q)}return nn}var Ps=Bh(!0),Vh=Bh(!1),Oo=fr(null),zo=null,Ns=null,zc=null;function Bc(){zc=Ns=zo=null}function Vc(n){var i=Oo.current;Ht(Oo),n._currentValue=i}function Hc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ls(n,i){zo=n,zc=Ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(On=!0),n.firstContext=null)}function ii(n){var i=n._currentValue;if(zc!==n)if(n={context:n,memoizedValue:i,next:null},Ns===null){if(zo===null)throw Error(t(308));Ns=n,zo.dependencies={lanes:0,firstContext:n}}else Ns=Ns.next=n;return i}var Xr=null;function Gc(n){Xr===null?Xr=[n]:Xr.push(n)}function Hh(n,i,o,c){var h=i.interleaved;return h===null?(o.next=o,Gc(i)):(o.next=h.next,h.next=o),i.interleaved=o,Vi(n,c)}function Vi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var mr=!1;function Wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function gr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Vi(n,o)}return h=c.interleaved,h===null?(i.next=i,Gc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Vi(n,o)}function Bo(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,di(n,o)}}function Wh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var h=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?h=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?h=m=i:m=m.next=i}else h=m=i;o={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Vo(n,i,o,c){var h=n.updateQueue;mr=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,F=h.shared.pending;if(F!==null){h.shared.pending=null;var H=F,le=H.next;H.next=null,E===null?m=le:E.next=le,E=H;var be=n.alternate;be!==null&&(be=be.updateQueue,F=be.lastBaseUpdate,F!==E&&(F===null?be.firstBaseUpdate=le:F.next=le,be.lastBaseUpdate=H))}if(m!==null){var Le=h.baseState;E=0,be=le=H=null,F=m;do{var Ce=F.lane,Je=F.eventTime;if((c&Ce)===Ce){be!==null&&(be=be.next={eventTime:Je,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var it=n,st=F;switch(Ce=i,Je=o,st.tag){case 1:if(it=st.payload,typeof it=="function"){Le=it.call(Je,Le,Ce);break e}Le=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Ce=typeof it=="function"?it.call(Je,Le,Ce):it,Ce==null)break e;Le=Q({},Le,Ce);break e;case 2:mr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,Ce=h.effects,Ce===null?h.effects=[F]:Ce.push(F))}else Je={eventTime:Je,lane:Ce,tag:F.tag,payload:F.payload,callback:F.callback,next:null},be===null?(le=be=Je,H=Le):be=be.next=Je,E|=Ce;if(F=F.next,F===null){if(F=h.shared.pending,F===null)break;Ce=F,F=Ce.next,Ce.next=null,h.lastBaseUpdate=Ce,h.shared.pending=null}}while(!0);if(be===null&&(H=Le),h.baseState=H,h.firstBaseUpdate=le,h.lastBaseUpdate=be,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);$r|=E,n.lanes=E,n.memoizedState=Le}}function jh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=o,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Pa={},Ri=fr(Pa),Na=fr(Pa),La=fr(Pa);function qr(n){if(n===Pa)throw Error(t(174));return n}function jc(n,i){switch(Bt(La,i),Bt(Na,n),Bt(Ri,Pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Me(i,n)}Ht(Ri),Bt(Ri,i)}function Ds(){Ht(Ri),Ht(Na),Ht(La)}function Xh(n){qr(La.current);var i=qr(Ri.current),o=Me(i,n.type);i!==o&&(Bt(Na,n),Bt(Ri,o))}function Xc(n){Na.current===n&&(Ht(Ri),Ht(Na))}var $t=fr(0);function Ho(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qc=[];function Yc(){for(var n=0;n<qc.length;n++)qc[n]._workInProgressVersionPrimary=null;qc.length=0}var Go=N.ReactCurrentDispatcher,$c=N.ReactCurrentBatchConfig,Yr=0,Kt=null,cn=null,mn=null,Wo=!1,Da=!1,Ia=0,E0=0;function En(){throw Error(t(321))}function Kc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!fi(n[o],i[o]))return!1;return!0}function Jc(n,i,o,c,h,m){if(Yr=m,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Go.current=n===null||n.memoizedState===null?C0:R0,n=o(c,h),Da){m=0;do{if(Da=!1,Ia=0,25<=m)throw Error(t(301));m+=1,mn=cn=null,i.updateQueue=null,Go.current=b0,n=o(c,h)}while(Da)}if(Go.current=qo,i=cn!==null&&cn.next!==null,Yr=0,mn=cn=Kt=null,Wo=!1,i)throw Error(t(300));return n}function Zc(){var n=Ia!==0;return Ia=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Kt.memoizedState=mn=n:mn=mn.next=n,mn}function ri(){if(cn===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var i=mn===null?Kt.memoizedState:mn.next;if(i!==null)mn=i,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},mn===null?Kt.memoizedState=mn=n:mn=mn.next=n}return mn}function Ua(n,i){return typeof i=="function"?i(n):i}function Qc(n){var i=ri(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=cn,h=c.baseQueue,m=o.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}c.baseQueue=h=m,o.pending=null}if(h!==null){m=h.next,c=c.baseState;var F=E=null,H=null,le=m;do{var be=le.lane;if((Yr&be)===be)H!==null&&(H=H.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:n(c,le.action);else{var Le={lane:be,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};H===null?(F=H=Le,E=c):H=H.next=Le,Kt.lanes|=be,$r|=be}le=le.next}while(le!==null&&le!==m);H===null?E=c:H.next=F,fi(c,i.memoizedState)||(On=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=H,o.lastRenderedState=c}if(n=o.interleaved,n!==null){h=n;do m=h.lane,Kt.lanes|=m,$r|=m,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function eu(n){var i=ri(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,h=o.pending,m=i.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do m=n(m,E.action),E=E.next;while(E!==h);fi(m,i.memoizedState)||(On=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function qh(){}function Yh(n,i){var o=Kt,c=ri(),h=i(),m=!fi(c.memoizedState,h);if(m&&(c.memoizedState=h,On=!0),c=c.queue,tu(Jh.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,Fa(9,Kh.bind(null,o,c,h,i),void 0,null),gn===null)throw Error(t(349));(Yr&30)!==0||$h(o,i,h)}return h}function $h(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Kh(n,i,o,c){i.value=o,i.getSnapshot=c,Zh(i)&&Qh(n)}function Jh(n,i,o){return o(function(){Zh(i)&&Qh(n)})}function Zh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!fi(n,o)}catch{return!0}}function Qh(n){var i=Vi(n,1);i!==null&&vi(i,n,1,-1)}function ep(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},i.queue=n,n=n.dispatch=A0.bind(null,Kt,n),[i.memoizedState,n]}function Fa(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function tp(){return ri().memoizedState}function jo(n,i,o,c){var h=bi();Kt.flags|=n,h.memoizedState=Fa(1|i,o,void 0,c===void 0?null:c)}function Xo(n,i,o,c){var h=ri();c=c===void 0?null:c;var m=void 0;if(cn!==null){var E=cn.memoizedState;if(m=E.destroy,c!==null&&Kc(c,E.deps)){h.memoizedState=Fa(i,o,m,c);return}}Kt.flags|=n,h.memoizedState=Fa(1|i,o,m,c)}function np(n,i){return jo(8390656,8,n,i)}function tu(n,i){return Xo(2048,8,n,i)}function ip(n,i){return Xo(4,2,n,i)}function rp(n,i){return Xo(4,4,n,i)}function sp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ap(n,i,o){return o=o!=null?o.concat([n]):null,Xo(4,4,sp.bind(null,i,n),o)}function nu(){}function op(n,i){var o=ri();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Kc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function lp(n,i){var o=ri();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Kc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function cp(n,i,o){return(Yr&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=o):(fi(o,i)||(o=pn(),Kt.lanes|=o,$r|=o,n.baseState=!0),i)}function T0(n,i){var o=xt;xt=o!==0&&4>o?o:4,n(!0);var c=$c.transition;$c.transition={};try{n(!1),i()}finally{xt=o,$c.transition=c}}function up(){return ri().memoizedState}function w0(n,i,o){var c=yr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},dp(n))fp(i,o);else if(o=Hh(n,i,o,c),o!==null){var h=Ln();vi(o,n,c,h),hp(o,i,c)}}function A0(n,i,o){var c=yr(n),h={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(dp(n))fp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,F=m(E,o);if(h.hasEagerState=!0,h.eagerState=F,fi(F,E)){var H=i.interleaved;H===null?(h.next=h,Gc(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}finally{}o=Hh(n,i,h,c),o!==null&&(h=Ln(),vi(o,n,c,h),hp(o,i,c))}}function dp(n){var i=n.alternate;return n===Kt||i!==null&&i===Kt}function fp(n,i){Da=Wo=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function hp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,di(n,o)}}var qo={readContext:ii,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},C0={readContext:ii,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:ii,useEffect:np,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,jo(4194308,4,sp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return jo(4194308,4,n,i)},useInsertionEffect:function(n,i){return jo(4,2,n,i)},useMemo:function(n,i){var o=bi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=bi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=w0.bind(null,Kt,n),[c.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:ep,useDebugValue:nu,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=ep(!1),i=n[0];return n=T0.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Kt,h=bi();if(jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),gn===null)throw Error(t(349));(Yr&30)!==0||$h(c,i,o)}h.memoizedState=o;var m={value:o,getSnapshot:i};return h.queue=m,np(Jh.bind(null,c,m,n),[n]),c.flags|=2048,Fa(9,Kh.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=bi(),i=gn.identifierPrefix;if(jt){var o=Bi,c=zi;o=(c&~(1<<32-ht(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ia++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=E0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},R0={readContext:ii,useCallback:op,useContext:ii,useEffect:tu,useImperativeHandle:ap,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:lp,useReducer:Qc,useRef:tp,useState:function(){return Qc(Ua)},useDebugValue:nu,useDeferredValue:function(n){var i=ri();return cp(i,cn.memoizedState,n)},useTransition:function(){var n=Qc(Ua)[0],i=ri().memoizedState;return[n,i]},useMutableSource:qh,useSyncExternalStore:Yh,useId:up,unstable_isNewReconciler:!1},b0={readContext:ii,useCallback:op,useContext:ii,useEffect:tu,useImperativeHandle:ap,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:lp,useReducer:eu,useRef:tp,useState:function(){return eu(Ua)},useDebugValue:nu,useDeferredValue:function(n){var i=ri();return cn===null?i.memoizedState=n:cp(i,cn.memoizedState,n)},useTransition:function(){var n=eu(Ua)[0],i=ri().memoizedState;return[n,i]},useMutableSource:qh,useSyncExternalStore:Yh,useId:up,unstable_isNewReconciler:!1};function pi(n,i){if(n&&n.defaultProps){i=Q({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function iu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:Q({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Yo={isMounted:function(n){return(n=n._reactInternals)?jn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Ln(),h=yr(n),m=Hi(c,h);m.payload=i,o!=null&&(m.callback=o),i=gr(n,m,h),i!==null&&(vi(i,n,h,c),Bo(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Ln(),h=yr(n),m=Hi(c,h);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=gr(n,m,h),i!==null&&(vi(i,n,h,c),Bo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ln(),c=yr(n),h=Hi(o,c);h.tag=2,i!=null&&(h.callback=i),i=gr(n,h,c),i!==null&&(vi(i,n,c,o),Bo(i,n,c))}};function pp(n,i,o,c,h,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!Ma(o,c)||!Ma(h,m):!0}function mp(n,i,o){var c=!1,h=hr,m=i.contextType;return typeof m=="object"&&m!==null?m=ii(m):(h=kn(i)?Gr:Mn.current,c=i.contextTypes,m=(c=c!=null)?As(n,h):hr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Yo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function gp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Yo.enqueueReplaceState(i,i.state,null)}function ru(n,i,o,c){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Wc(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=ii(m):(m=kn(i)?Gr:Mn.current,h.context=As(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(iu(n,i,m,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Yo.enqueueReplaceState(h,h.state,null),Vo(n,o,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,i){try{var o="",c=i;do o+=Xe(c),c=c.return;while(c);var h=o}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function su(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function au(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function vp(n,i,o){o=Hi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){tl||(tl=!0,Su=c),au(n,i)},o}function _p(n,i,o){o=Hi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;o.payload=function(){return c(h)},o.callback=function(){au(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){au(n,i),typeof c!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function xp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new P0;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(o)||(h.add(o),n=W0.bind(null,n,i,o),i.then(n,n))}function yp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Sp(n,i,o,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Hi(-1,1),i.tag=2,gr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var N0=N.ReactCurrentOwner,On=!1;function Nn(n,i,o,c){i.child=n===null?Vh(i,null,o,c):Ps(i,n.child,o,c)}function Mp(n,i,o,c,h){o=o.render;var m=i.ref;return Ls(i,h),c=Jc(n,i,o,c,m,h),o=Zc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Gi(n,i,h)):(jt&&o&&Ic(i),i.flags|=1,Nn(n,i,c,h),i.child)}function Ep(n,i,o,c,h){if(n===null){var m=o.type;return typeof m=="function"&&!Ru(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Tp(n,i,m,c,h)):(n=ol(o.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ma,o(E,c)&&n.ref===i.ref)return Gi(n,i,h)}return i.flags|=1,n=Mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Tp(n,i,o,c,h){if(n!==null){var m=n.memoizedProps;if(Ma(m,c)&&n.ref===i.ref)if(On=!1,i.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(On=!0);else return i.lanes=n.lanes,Gi(n,i,h)}return ou(n,i,o,c,h)}function wp(n,i,o){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Fs,$n),$n|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(Fs,$n),$n|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Bt(Fs,$n),$n|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Bt(Fs,$n),$n|=c;return Nn(n,i,h,o),i.child}function Ap(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ou(n,i,o,c,h){var m=kn(o)?Gr:Mn.current;return m=As(i,m),Ls(i,h),o=Jc(n,i,o,c,m,h),c=Zc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Gi(n,i,h)):(jt&&c&&Ic(i),i.flags|=1,Nn(n,i,o,h),i.child)}function Cp(n,i,o,c,h){if(kn(o)){var m=!0;Lo(i)}else m=!1;if(Ls(i,h),i.stateNode===null)Ko(n,i),mp(i,o,c),ru(i,o,c,h),c=!0;else if(n===null){var E=i.stateNode,F=i.memoizedProps;E.props=F;var H=E.context,le=o.contextType;typeof le=="object"&&le!==null?le=ii(le):(le=kn(o)?Gr:Mn.current,le=As(i,le));var be=o.getDerivedStateFromProps,Le=typeof be=="function"||typeof E.getSnapshotBeforeUpdate=="function";Le||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==c||H!==le)&&gp(i,E,c,le),mr=!1;var Ce=i.memoizedState;E.state=Ce,Vo(i,c,E,h),H=i.memoizedState,F!==c||Ce!==H||Fn.current||mr?(typeof be=="function"&&(iu(i,o,be,c),H=i.memoizedState),(F=mr||pp(i,o,F,c,Ce,H,le))?(Le||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),E.props=c,E.state=H,E.context=le,c=F):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Gh(n,i),F=i.memoizedProps,le=i.type===i.elementType?F:pi(i.type,F),E.props=le,Le=i.pendingProps,Ce=E.context,H=o.contextType,typeof H=="object"&&H!==null?H=ii(H):(H=kn(o)?Gr:Mn.current,H=As(i,H));var Je=o.getDerivedStateFromProps;(be=typeof Je=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==Le||Ce!==H)&&gp(i,E,c,H),mr=!1,Ce=i.memoizedState,E.state=Ce,Vo(i,c,E,h);var it=i.memoizedState;F!==Le||Ce!==it||Fn.current||mr?(typeof Je=="function"&&(iu(i,o,Je,c),it=i.memoizedState),(le=mr||pp(i,o,le,c,Ce,it,H)||!1)?(be||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,it,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,it,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=it),E.props=c,E.state=it,E.context=H,c=le):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),c=!1)}return lu(n,i,o,c,m,h)}function lu(n,i,o,c,h,m){Ap(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&Lh(i,o,!1),Gi(n,i,m);c=i.stateNode,N0.current=i;var F=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=Ps(i,n.child,null,m),i.child=Ps(i,null,F,m)):Nn(n,i,F,m),i.memoizedState=c.state,h&&Lh(i,o,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),jc(n,i.containerInfo)}function bp(n,i,o,c,h){return bs(),Oc(h),i.flags|=256,Nn(n,i,o,c),i.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function uu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,o){var c=i.pendingProps,h=$t.current,m=!1,E=(i.flags&128)!==0,F;if((F=E)||(F=n!==null&&n.memoizedState===null?!1:(h&2)!==0),F?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Bt($t,h&1),n===null)return kc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=ll(E,c,0,null),n=Qr(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=uu(o),i.memoizedState=cu,n):du(i,E));if(h=n.memoizedState,h!==null&&(F=h.dehydrated,F!==null))return L0(n,i,E,c,F,h,o);if(m){m=c.fallback,E=i.mode,h=n.child,F=h.sibling;var H={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=Mr(h,H),c.subtreeFlags=h.subtreeFlags&14680064),F!==null?m=Mr(F,m):(m=Qr(m,E,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=n.child.memoizedState,E=E===null?uu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~o,i.memoizedState=cu,c}return m=n.child,n=m.sibling,c=Mr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function du(n,i){return i=ll({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $o(n,i,o,c){return c!==null&&Oc(c),Ps(i,n.child,null,o),n=du(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function L0(n,i,o,c,h,m,E){if(o)return i.flags&256?(i.flags&=-257,c=su(Error(t(422))),$o(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=ll({mode:"visible",children:c.children},h,0,null),m=Qr(m,h,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ps(i,n.child,null,E),i.child.memoizedState=uu(E),i.memoizedState=cu,m);if((i.mode&1)===0)return $o(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var F=c.dgst;return c=F,m=Error(t(419)),c=su(m,c,void 0),$o(n,i,E,c)}if(F=(E&n.childLanes)!==0,On||F){if(c=gn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Vi(n,h),vi(c,n,h,-1))}return Cu(),c=su(Error(t(421))),$o(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=j0.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,Yn=dr(h.nextSibling),qn=i,jt=!0,hi=null,n!==null&&(ti[ni++]=zi,ti[ni++]=Bi,ti[ni++]=Wr,zi=n.id,Bi=n.overflow,Wr=i),i=du(i,c.children),i.flags|=4096,i)}function Np(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Hc(n.return,i,o)}function fu(n,i,o,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=h)}function Lp(n,i,o){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(Nn(n,i,c.children,o),c=$t.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Np(n,o,i);else if(n.tag===19)Np(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Bt($t,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&Ho(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),fu(i,!1,h,o,m);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Ho(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}fu(i,!0,o,null,m);break;case"together":fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ko(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Gi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),$r|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Mr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Mr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function D0(n,i,o){switch(i.tag){case 3:Rp(i),bs();break;case 5:Xh(i);break;case 1:kn(i.type)&&Lo(i);break;case 4:jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Bt(Oo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Bt($t,$t.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Pp(n,i,o):(Bt($t,$t.current&1),n=Gi(n,i,o),n!==null?n.sibling:null);Bt($t,$t.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Lp(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Bt($t,$t.current),c)break;return null;case 22:case 23:return i.lanes=0,wp(n,i,o)}return Gi(n,i,o)}var Dp,hu,Ip,Up;Dp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},hu=function(){},Ip=function(n,i,o,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,qr(Ri.current);var m=null;switch(o){case"input":h=pe(n,h),c=pe(n,c),m=[];break;case"select":h=Q({},h,{value:void 0}),c=Q({},c,{value:void 0}),m=[];break;case"textarea":h=rt(n,h),c=rt(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=bo)}tt(o,c);var E;o=null;for(le in h)if(!c.hasOwnProperty(le)&&h.hasOwnProperty(le)&&h[le]!=null)if(le==="style"){var F=h[le];for(E in F)F.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(a.hasOwnProperty(le)?m||(m=[]):(m=m||[]).push(le,null));for(le in c){var H=c[le];if(F=h!=null?h[le]:void 0,c.hasOwnProperty(le)&&H!==F&&(H!=null||F!=null))if(le==="style")if(F){for(E in F)!F.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in H)H.hasOwnProperty(E)&&F[E]!==H[E]&&(o||(o={}),o[E]=H[E])}else o||(m||(m=[]),m.push(le,o)),o=H;else le==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(m=m||[]).push(le,H)):le==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(le,""+H):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(a.hasOwnProperty(le)?(H!=null&&le==="onScroll"&&Vt("scroll",n),m||F===H||(m=[])):(m=m||[]).push(le,H))}o&&(m=m||[]).push("style",o);var le=m;(i.updateQueue=le)&&(i.flags|=4)}},Up=function(n,i,o,c){o!==c&&(i.flags|=4)};function ka(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function I0(n,i,o){var c=i.pendingProps;switch(Uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return kn(i.type)&&No(),Tn(i),null;case 3:return c=i.stateNode,Ds(),Ht(Fn),Ht(Mn),Yc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Fo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,hi!==null&&(Tu(hi),hi=null))),hu(n,i),Tn(i),null;case 5:Xc(i);var h=qr(La.current);if(o=i.type,n!==null&&i.stateNode!=null)Ip(n,i,o,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=qr(Ri.current),Fo(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Ci]=i,c[Ca]=m,n=(i.mode&1)!==0,o){case"dialog":Vt("cancel",c),Vt("close",c);break;case"iframe":case"object":case"embed":Vt("load",c);break;case"video":case"audio":for(h=0;h<Ta.length;h++)Vt(Ta[h],c);break;case"source":Vt("error",c);break;case"img":case"image":case"link":Vt("error",c),Vt("load",c);break;case"details":Vt("toggle",c);break;case"input":ne(c,m),Vt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Vt("invalid",c);break;case"textarea":L(c,m),Vt("invalid",c)}tt(o,m),h=null;for(var E in m)if(m.hasOwnProperty(E)){var F=m[E];E==="children"?typeof F=="string"?c.textContent!==F&&(m.suppressHydrationWarning!==!0&&Ro(c.textContent,F,n),h=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(m.suppressHydrationWarning!==!0&&Ro(c.textContent,F,n),h=["children",""+F]):a.hasOwnProperty(E)&&F!=null&&E==="onScroll"&&Vt("scroll",c)}switch(o){case"input":mt(c),xe(c,m,!0);break;case"textarea":mt(c),G(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=bo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(o,{is:c.is}):(n=E.createElement(o),o==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,o),n[Ci]=i,n[Ca]=c,Dp(n,i,!1,!1),i.stateNode=n;e:{switch(E=He(o,c),o){case"dialog":Vt("cancel",n),Vt("close",n),h=c;break;case"iframe":case"object":case"embed":Vt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Ta.length;h++)Vt(Ta[h],n);h=c;break;case"source":Vt("error",n),h=c;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),h=c;break;case"details":Vt("toggle",n),h=c;break;case"input":ne(n,c),h=pe(n,c),Vt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=Q({},c,{value:void 0}),Vt("invalid",n);break;case"textarea":L(n,c),h=rt(n,c),Vt("invalid",n);break;default:h=c}tt(o,h),F=h;for(m in F)if(F.hasOwnProperty(m)){var H=F[m];m==="style"?je(n,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ze(n,H)):m==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&Pe(n,H):typeof H=="number"&&Pe(n,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?H!=null&&m==="onScroll"&&Vt("scroll",n):H!=null&&D(n,m,H,E))}switch(o){case"input":mt(n),xe(n,c,!1);break;case"textarea":mt(n),G(n);break;case"option":c.value!=null&&n.setAttribute("value",""+we(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?at(n,!!c.multiple,m,!1):c.defaultValue!=null&&at(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=bo)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)Up(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=qr(La.current),qr(Ri.current),Fo(i)){if(c=i.stateNode,o=i.memoizedProps,c[Ci]=i,(m=c.nodeValue!==o)&&(n=qn,n!==null))switch(n.tag){case 3:Ro(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ro(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Ci]=i,i.stateNode=c}return Tn(i),null;case 13:if(Ht($t),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Yn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Oh(),bs(),i.flags|=98560,m=!1;else if(m=Fo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ci]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),m=!1}else hi!==null&&(Tu(hi),hi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||($t.current&1)!==0?un===0&&(un=3):Cu())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Ds(),hu(n,i),n===null&&wa(i.stateNode.containerInfo),Tn(i),null;case 10:return Vc(i.type._context),Tn(i),null;case 17:return kn(i.type)&&No(),Tn(i),null;case 19:if(Ht($t),m=i.memoizedState,m===null)return Tn(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)ka(m,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Ho(n),E!==null){for(i.flags|=128,ka(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Bt($t,$t.current&1|2),i.child}n=n.sibling}m.tail!==null&&X()>ks&&(i.flags|=128,c=!0,ka(m,!1),i.lanes=4194304)}else{if(!c)if(n=Ho(E),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ka(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!jt)return Tn(i),null}else 2*X()-m.renderingStartTime>ks&&o!==1073741824&&(i.flags|=128,c=!0,ka(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=X(),i.sibling=null,o=$t.current,Bt($t,c?o&1|2:o&1),i):(Tn(i),null);case 22:case 23:return Au(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?($n&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function U0(n,i){switch(Uc(i),i.tag){case 1:return kn(i.type)&&No(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ds(),Ht(Fn),Ht(Mn),Yc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Xc(i),null;case 13:if(Ht($t),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht($t),null;case 4:return Ds(),null;case 10:return Vc(i.type._context),null;case 22:case 23:return Au(),null;case 24:return null;default:return null}}var Jo=!1,wn=!1,F0=typeof WeakSet=="function"?WeakSet:Set,et=null;function Us(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Qt(n,i,c)}else o.current=null}function pu(n,i,o){try{o()}catch(c){Qt(n,i,c)}}var Fp=!1;function k0(n,i){if(Ac=vo,n=ph(),_c(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,F=-1,H=-1,le=0,be=0,Le=n,Ce=null;t:for(;;){for(var Je;Le!==o||h!==0&&Le.nodeType!==3||(F=E+h),Le!==m||c!==0&&Le.nodeType!==3||(H=E+c),Le.nodeType===3&&(E+=Le.nodeValue.length),(Je=Le.firstChild)!==null;)Ce=Le,Le=Je;for(;;){if(Le===n)break t;if(Ce===o&&++le===h&&(F=E),Ce===m&&++be===c&&(H=E),(Je=Le.nextSibling)!==null)break;Le=Ce,Ce=Le.parentNode}Le=Je}o=F===-1||H===-1?null:{start:F,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cc={focusedElem:n,selectionRange:o},vo=!1,et=i;et!==null;)if(i=et,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,et=n;else for(;et!==null;){i=et;try{var it=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,nn=it.memoizedState,J=i.stateNode,q=J.getSnapshotBeforeUpdate(i.elementType===i.type?st:pi(i.type,st),nn);J.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){Qt(i,i.return,Fe)}if(n=i.sibling,n!==null){n.return=i.return,et=n;break}et=i.return}return it=Fp,Fp=!1,it}function Oa(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&pu(i,o,m)}h=h.next}while(h!==c)}}function Zo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function mu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ci],delete i[Ca],delete i[Nc],delete i[x0],delete i[y0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Op(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Op(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=bo));else if(c!==4&&(n=n.child,n!==null))for(gu(n,i,o),n=n.sibling;n!==null;)gu(n,i,o),n=n.sibling}function vu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,o),n=n.sibling;n!==null;)vu(n,i,o),n=n.sibling}var xn=null,mi=!1;function vr(n,i,o){for(o=o.child;o!==null;)Bp(n,i,o),o=o.sibling}function Bp(n,i,o){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ke,o)}catch{}switch(o.tag){case 5:wn||Us(o,i);case 6:var c=xn,h=mi;xn=null,vr(n,i,o),xn=c,mi=h,xn!==null&&(mi?(n=xn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):xn.removeChild(o.stateNode));break;case 18:xn!==null&&(mi?(n=xn,o=o.stateNode,n.nodeType===8?Pc(n.parentNode,o):n.nodeType===1&&Pc(n,o),ga(n)):Pc(xn,o.stateNode));break;case 4:c=xn,h=mi,xn=o.stateNode.containerInfo,mi=!0,vr(n,i,o),xn=c,mi=h;break;case 0:case 11:case 14:case 15:if(!wn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&pu(o,i,E),h=h.next}while(h!==c)}vr(n,i,o);break;case 1:if(!wn&&(Us(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(F){Qt(o,i,F)}vr(n,i,o);break;case 21:vr(n,i,o);break;case 22:o.mode&1?(wn=(c=wn)||o.memoizedState!==null,vr(n,i,o),wn=c):vr(n,i,o);break;default:vr(n,i,o)}}function Vp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new F0),i.forEach(function(c){var h=X0.bind(null,n,c);o.has(c)||(o.add(c),c.then(h,h))})}}function gi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c];try{var m=n,E=i,F=E;e:for(;F!==null;){switch(F.tag){case 5:xn=F.stateNode,mi=!1;break e;case 3:xn=F.stateNode.containerInfo,mi=!0;break e;case 4:xn=F.stateNode.containerInfo,mi=!0;break e}F=F.return}if(xn===null)throw Error(t(160));Bp(m,E,h),xn=null,mi=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(le){Qt(h,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hp(i,n),i=i.sibling}function Hp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(gi(i,n),Pi(n),c&4){try{Oa(3,n,n.return),Zo(3,n)}catch(st){Qt(n,n.return,st)}try{Oa(5,n,n.return)}catch(st){Qt(n,n.return,st)}}break;case 1:gi(i,n),Pi(n),c&512&&o!==null&&Us(o,o.return);break;case 5:if(gi(i,n),Pi(n),c&512&&o!==null&&Us(o,o.return),n.flags&32){var h=n.stateNode;try{Pe(h,"")}catch(st){Qt(n,n.return,st)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,E=o!==null?o.memoizedProps:m,F=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{F==="input"&&m.type==="radio"&&m.name!=null&&re(h,m),He(F,E);var le=He(F,m);for(E=0;E<H.length;E+=2){var be=H[E],Le=H[E+1];be==="style"?je(h,Le):be==="dangerouslySetInnerHTML"?Ze(h,Le):be==="children"?Pe(h,Le):D(h,be,Le,le)}switch(F){case"input":ae(h,m);break;case"textarea":T(h,m);break;case"select":var Ce=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Je=m.value;Je!=null?at(h,!!m.multiple,Je,!1):Ce!==!!m.multiple&&(m.defaultValue!=null?at(h,!!m.multiple,m.defaultValue,!0):at(h,!!m.multiple,m.multiple?[]:"",!1))}h[Ca]=m}catch(st){Qt(n,n.return,st)}}break;case 6:if(gi(i,n),Pi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(st){Qt(n,n.return,st)}}break;case 3:if(gi(i,n),Pi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ga(i.containerInfo)}catch(st){Qt(n,n.return,st)}break;case 4:gi(i,n),Pi(n);break;case 13:gi(i,n),Pi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(yu=X())),c&4&&Vp(n);break;case 22:if(be=o!==null&&o.memoizedState!==null,n.mode&1?(wn=(le=wn)||be,gi(i,n),wn=le):gi(i,n),Pi(n),c&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!be&&(n.mode&1)!==0)for(et=n,be=n.child;be!==null;){for(Le=et=be;et!==null;){switch(Ce=et,Je=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Oa(4,Ce,Ce.return);break;case 1:Us(Ce,Ce.return);var it=Ce.stateNode;if(typeof it.componentWillUnmount=="function"){c=Ce,o=Ce.return;try{i=c,it.props=i.memoizedProps,it.state=i.memoizedState,it.componentWillUnmount()}catch(st){Qt(c,o,st)}}break;case 5:Us(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){jp(Le);continue}}Je!==null?(Je.return=Ce,et=Je):jp(Le)}be=be.sibling}e:for(be=null,Le=n;;){if(Le.tag===5){if(be===null){be=Le;try{h=Le.stateNode,le?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(F=Le.stateNode,H=Le.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Re("display",E))}catch(st){Qt(n,n.return,st)}}}else if(Le.tag===6){if(be===null)try{Le.stateNode.nodeValue=le?"":Le.memoizedProps}catch(st){Qt(n,n.return,st)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;be===Le&&(be=null),Le=Le.return}be===Le&&(be=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:gi(i,n),Pi(n),c&4&&Vp(n);break;case 21:break;default:gi(i,n),Pi(n)}}function Pi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Op(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Pe(h,""),c.flags&=-33);var m=zp(n);vu(n,m,h);break;case 3:case 4:var E=c.stateNode.containerInfo,F=zp(n);gu(n,F,E);break;default:throw Error(t(161))}}catch(H){Qt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function O0(n,i,o){et=n,Gp(n)}function Gp(n,i,o){for(var c=(n.mode&1)!==0;et!==null;){var h=et,m=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Jo;if(!E){var F=h.alternate,H=F!==null&&F.memoizedState!==null||wn;F=Jo;var le=wn;if(Jo=E,(wn=H)&&!le)for(et=h;et!==null;)E=et,H=E.child,E.tag===22&&E.memoizedState!==null?Xp(h):H!==null?(H.return=E,et=H):Xp(h);for(;m!==null;)et=m,Gp(m),m=m.sibling;et=h,Jo=F,wn=le}Wp(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,et=m):Wp(n)}}function Wp(n){for(;et!==null;){var i=et;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:wn||Zo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!wn)if(o===null)c.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:pi(i.type,o.memoizedProps);c.componentDidUpdate(h,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&jh(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}jh(i,E,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var be=le.memoizedState;if(be!==null){var Le=be.dehydrated;Le!==null&&ga(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||i.flags&512&&mu(i)}catch(Ce){Qt(i,i.return,Ce)}}if(i===n){et=null;break}if(o=i.sibling,o!==null){o.return=i.return,et=o;break}et=i.return}}function jp(n){for(;et!==null;){var i=et;if(i===n){et=null;break}var o=i.sibling;if(o!==null){o.return=i.return,et=o;break}et=i.return}}function Xp(n){for(;et!==null;){var i=et;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Zo(4,i)}catch(H){Qt(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(H){Qt(i,h,H)}}var m=i.return;try{mu(i)}catch(H){Qt(i,m,H)}break;case 5:var E=i.return;try{mu(i)}catch(H){Qt(i,E,H)}}}catch(H){Qt(i,i.return,H)}if(i===n){et=null;break}var F=i.sibling;if(F!==null){F.return=i.return,et=F;break}et=i.return}}var z0=Math.ceil,Qo=N.ReactCurrentDispatcher,_u=N.ReactCurrentOwner,si=N.ReactCurrentBatchConfig,Pt=0,gn=null,an=null,yn=0,$n=0,Fs=fr(0),un=0,za=null,$r=0,el=0,xu=0,Ba=null,zn=null,yu=0,ks=1/0,Wi=null,tl=!1,Su=null,_r=null,nl=!1,xr=null,il=0,Va=0,Mu=null,rl=-1,sl=0;function Ln(){return(Pt&6)!==0?X():rl!==-1?rl:rl=X()}function yr(n){return(n.mode&1)===0?1:(Pt&2)!==0&&yn!==0?yn&-yn:M0.transition!==null?(sl===0&&(sl=pn()),sl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Yf(n.type)),n)}function vi(n,i,o,c){if(50<Va)throw Va=0,Mu=null,Error(t(185));qt(n,o,c),((Pt&2)===0||n!==gn)&&(n===gn&&((Pt&2)===0&&(el|=o),un===4&&Sr(n,yn)),Bn(n,c),o===1&&Pt===0&&(i.mode&1)===0&&(ks=X()+500,Do&&pr()))}function Bn(n,i){var o=n.callbackNode;Ut(n,i);var c=Gt(n,n===gn?yn:0);if(c===0)o!==null&&$(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&$(o),i===1)n.tag===0?S0(Yp.bind(null,n)):Dh(Yp.bind(null,n)),v0(function(){(Pt&6)===0&&pr()}),o=null;else{switch(ms(c)){case 1:o=K;break;case 4:o=Ee;break;case 16:o=Te;break;case 536870912:o=nt;break;default:o=Te}o=nm(o,qp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function qp(n,i){if(rl=-1,sl=0,(Pt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Os()&&n.callbackNode!==o)return null;var c=Gt(n,n===gn?yn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=al(n,c);else{i=c;var h=Pt;Pt|=2;var m=Kp();(gn!==n||yn!==i)&&(Wi=null,ks=X()+500,Jr(n,i));do try{H0();break}catch(F){$p(n,F)}while(!0);Bc(),Qo.current=m,Pt=h,an!==null?i=0:(gn=null,yn=0,i=un)}if(i!==0){if(i===2&&(h=Rt(n),h!==0&&(c=h,i=Eu(n,h))),i===1)throw o=za,Jr(n,0),Sr(n,c),Bn(n,X()),o;if(i===6)Sr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!B0(h)&&(i=al(n,c),i===2&&(m=Rt(n),m!==0&&(c=m,i=Eu(n,m))),i===1))throw o=za,Jr(n,0),Sr(n,c),Bn(n,X()),o;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Zr(n,zn,Wi);break;case 3:if(Sr(n,c),(c&130023424)===c&&(i=yu+500-X(),10<i)){if(Gt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=bc(Zr.bind(null,n,zn,Wi),i);break}Zr(n,zn,Wi);break;case 4:if(Sr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-ht(c);m=1<<E,E=i[E],E>h&&(h=E),c&=~m}if(c=h,c=X()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*z0(c/1960))-c,10<c){n.timeoutHandle=bc(Zr.bind(null,n,zn,Wi),c);break}Zr(n,zn,Wi);break;case 5:Zr(n,zn,Wi);break;default:throw Error(t(329))}}}return Bn(n,X()),n.callbackNode===o?qp.bind(null,n):null}function Eu(n,i){var o=Ba;return n.current.memoizedState.isDehydrated&&(Jr(n,i).flags|=256),n=al(n,i),n!==2&&(i=zn,zn=o,i!==null&&Tu(i)),n}function Tu(n){zn===null?zn=n:zn.push.apply(zn,n)}function B0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var h=o[c],m=h.getSnapshot;h=h.value;try{if(!fi(m(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(n,i){for(i&=~xu,i&=~el,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ht(i),c=1<<o;n[o]=-1,i&=~c}}function Yp(n){if((Pt&6)!==0)throw Error(t(327));Os();var i=Gt(n,0);if((i&1)===0)return Bn(n,X()),null;var o=al(n,i);if(n.tag!==0&&o===2){var c=Rt(n);c!==0&&(i=c,o=Eu(n,c))}if(o===1)throw o=za,Jr(n,0),Sr(n,i),Bn(n,X()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zr(n,zn,Wi),Bn(n,X()),null}function wu(n,i){var o=Pt;Pt|=1;try{return n(i)}finally{Pt=o,Pt===0&&(ks=X()+500,Do&&pr())}}function Kr(n){xr!==null&&xr.tag===0&&(Pt&6)===0&&Os();var i=Pt;Pt|=1;var o=si.transition,c=xt;try{if(si.transition=null,xt=1,n)return n()}finally{xt=c,si.transition=o,Pt=i,(Pt&6)===0&&pr()}}function Au(){$n=Fs.current,Ht(Fs)}function Jr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,g0(o)),an!==null)for(o=an.return;o!==null;){var c=o;switch(Uc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&No();break;case 3:Ds(),Ht(Fn),Ht(Mn),Yc();break;case 5:Xc(c);break;case 4:Ds();break;case 13:Ht($t);break;case 19:Ht($t);break;case 10:Vc(c.type._context);break;case 22:case 23:Au()}o=o.return}if(gn=n,an=n=Mr(n.current,null),yn=$n=i,un=0,za=null,xu=el=$r=0,zn=Ba=null,Xr!==null){for(i=0;i<Xr.length;i++)if(o=Xr[i],c=o.interleaved,c!==null){o.interleaved=null;var h=c.next,m=o.pending;if(m!==null){var E=m.next;m.next=h,c.next=E}o.pending=c}Xr=null}return n}function $p(n,i){do{var o=an;try{if(Bc(),Go.current=qo,Wo){for(var c=Kt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Wo=!1}if(Yr=0,mn=cn=Kt=null,Da=!1,Ia=0,_u.current=null,o===null||o.return===null){un=1,za=i,an=null;break}e:{var m=n,E=o.return,F=o,H=i;if(i=yn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var le=H,be=F,Le=be.tag;if((be.mode&1)===0&&(Le===0||Le===11||Le===15)){var Ce=be.alternate;Ce?(be.updateQueue=Ce.updateQueue,be.memoizedState=Ce.memoizedState,be.lanes=Ce.lanes):(be.updateQueue=null,be.memoizedState=null)}var Je=yp(E);if(Je!==null){Je.flags&=-257,Sp(Je,E,F,m,i),Je.mode&1&&xp(m,le,i),i=Je,H=le;var it=i.updateQueue;if(it===null){var st=new Set;st.add(H),i.updateQueue=st}else it.add(H);break e}else{if((i&1)===0){xp(m,le,i),Cu();break e}H=Error(t(426))}}else if(jt&&F.mode&1){var nn=yp(E);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),Sp(nn,E,F,m,i),Oc(Is(H,F));break e}}m=H=Is(H,F),un!==4&&(un=2),Ba===null?Ba=[m]:Ba.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=vp(m,H,i);Wh(m,J);break e;case 1:F=H;var q=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(_r===null||!_r.has(te)))){m.flags|=65536,i&=-i,m.lanes|=i;var Fe=_p(m,F,i);Wh(m,Fe);break e}}m=m.return}while(m!==null)}Zp(o)}catch(ot){i=ot,an===o&&o!==null&&(an=o=o.return);continue}break}while(!0)}function Kp(){var n=Qo.current;return Qo.current=qo,n===null?qo:n}function Cu(){(un===0||un===3||un===2)&&(un=4),gn===null||($r&268435455)===0&&(el&268435455)===0||Sr(gn,yn)}function al(n,i){var o=Pt;Pt|=2;var c=Kp();(gn!==n||yn!==i)&&(Wi=null,Jr(n,i));do try{V0();break}catch(h){$p(n,h)}while(!0);if(Bc(),Pt=o,Qo.current=c,an!==null)throw Error(t(261));return gn=null,yn=0,un}function V0(){for(;an!==null;)Jp(an)}function H0(){for(;an!==null&&!ce();)Jp(an)}function Jp(n){var i=tm(n.alternate,n,$n);n.memoizedProps=n.pendingProps,i===null?Zp(n):an=i,_u.current=null}function Zp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=I0(o,i,$n),o!==null){an=o;return}}else{if(o=U0(o,i),o!==null){o.flags&=32767,an=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,an=null;return}}if(i=i.sibling,i!==null){an=i;return}an=i=n}while(i!==null);un===0&&(un=5)}function Zr(n,i,o){var c=xt,h=si.transition;try{si.transition=null,xt=1,G0(n,i,o,c)}finally{si.transition=h,xt=c}return null}function G0(n,i,o,c){do Os();while(xr!==null);if((Pt&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Yt(n,m),n===gn&&(an=gn=null,yn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||nl||(nl=!0,nm(Te,function(){return Os(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=si.transition,si.transition=null;var E=xt;xt=1;var F=Pt;Pt|=4,_u.current=null,k0(n,o),Hp(o,n),c0(Cc),vo=!!Ac,Cc=Ac=null,n.current=o,O0(o),ue(),Pt=F,xt=E,si.transition=m}else n.current=o;if(nl&&(nl=!1,xr=n,il=h),m=n.pendingLanes,m===0&&(_r=null),At(o.stateNode),Bn(n,X()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],c(h.value,{componentStack:h.stack,digest:h.digest});if(tl)throw tl=!1,n=Su,Su=null,n;return(il&1)!==0&&n.tag!==0&&Os(),m=n.pendingLanes,(m&1)!==0?n===Mu?Va++:(Va=0,Mu=n):Va=0,pr(),null}function Os(){if(xr!==null){var n=ms(il),i=si.transition,o=xt;try{if(si.transition=null,xt=16>n?16:n,xr===null)var c=!1;else{if(n=xr,xr=null,il=0,(Pt&6)!==0)throw Error(t(331));var h=Pt;for(Pt|=4,et=n.current;et!==null;){var m=et,E=m.child;if((et.flags&16)!==0){var F=m.deletions;if(F!==null){for(var H=0;H<F.length;H++){var le=F[H];for(et=le;et!==null;){var be=et;switch(be.tag){case 0:case 11:case 15:Oa(8,be,m)}var Le=be.child;if(Le!==null)Le.return=be,et=Le;else for(;et!==null;){be=et;var Ce=be.sibling,Je=be.return;if(kp(be),be===le){et=null;break}if(Ce!==null){Ce.return=Je,et=Ce;break}et=Je}}}var it=m.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var nn=st.sibling;st.sibling=null,st=nn}while(st!==null)}}et=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,et=E;else e:for(;et!==null;){if(m=et,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oa(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,et=J;break e}et=m.return}}var q=n.current;for(et=q;et!==null;){E=et;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,et=te;else e:for(E=q;et!==null;){if(F=et,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Zo(9,F)}}catch(ot){Qt(F,F.return,ot)}if(F===E){et=null;break e}var Fe=F.sibling;if(Fe!==null){Fe.return=F.return,et=Fe;break e}et=F.return}}if(Pt=h,pr(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ke,n)}catch{}c=!0}return c}finally{xt=o,si.transition=i}}return!1}function Qp(n,i,o){i=Is(o,i),i=vp(n,i,1),n=gr(n,i,1),i=Ln(),n!==null&&(qt(n,1,i),Bn(n,i))}function Qt(n,i,o){if(n.tag===3)Qp(n,n,o);else for(;i!==null;){if(i.tag===3){Qp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){n=Is(o,n),n=_p(i,n,1),i=gr(i,n,1),n=Ln(),i!==null&&(qt(i,1,n),Bn(i,n));break}}i=i.return}}function W0(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&o,gn===n&&(yn&o)===o&&(un===4||un===3&&(yn&130023424)===yn&&500>X()-yu?Jr(n,0):xu|=o),Bn(n,i)}function em(n,i){i===0&&((n.mode&1)===0?i=1:(i=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var o=Ln();n=Vi(n,i),n!==null&&(qt(n,i,o),Bn(n,o))}function j0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),em(n,o)}function X0(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),em(n,o)}var tm;tm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Fn.current)On=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return On=!1,D0(n,i,o);On=(n.flags&131072)!==0}else On=!1,jt&&(i.flags&1048576)!==0&&Ih(i,Uo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ko(n,i),n=i.pendingProps;var h=As(i,Mn.current);Ls(i,o),h=Jc(null,i,c,n,h,o);var m=Zc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(m=!0,Lo(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Wc(i),h.updater=Yo,i.stateNode=h,h._reactInternals=i,ru(i,c,n,o),i=lu(null,i,c,!0,m,o)):(i.tag=0,jt&&m&&Ic(i),Nn(null,i,h,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ko(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Y0(c),n=pi(c,n),h){case 0:i=ou(null,i,c,n,o);break e;case 1:i=Cp(null,i,c,n,o);break e;case 11:i=Mp(null,i,c,n,o);break e;case 14:i=Ep(null,i,c,pi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:pi(c,h),ou(n,i,c,h,o);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:pi(c,h),Cp(n,i,c,h,o);case 3:e:{if(Rp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,Gh(n,i),Vo(i,c,null,o);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Is(Error(t(423)),i),i=bp(n,i,c,o,h);break e}else if(c!==h){h=Is(Error(t(424)),i),i=bp(n,i,c,o,h);break e}else for(Yn=dr(i.stateNode.containerInfo.firstChild),qn=i,jt=!0,hi=null,o=Vh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(bs(),c===h){i=Gi(n,i,o);break e}Nn(n,i,c,o)}i=i.child}return i;case 5:return Xh(i),n===null&&kc(i),c=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,E=h.children,Rc(c,h)?E=null:m!==null&&Rc(c,m)&&(i.flags|=32),Ap(n,i),Nn(n,i,E,o),i.child;case 6:return n===null&&kc(i),null;case 13:return Pp(n,i,o);case 4:return jc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ps(i,null,c,o):Nn(n,i,c,o),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:pi(c,h),Mp(n,i,c,h,o);case 7:return Nn(n,i,i.pendingProps,o),i.child;case 8:return Nn(n,i,i.pendingProps.children,o),i.child;case 12:return Nn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,E=h.value,Bt(Oo,c._currentValue),c._currentValue=E,m!==null)if(fi(m.value,E)){if(m.children===h.children&&!Fn.current){i=Gi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var F=m.dependencies;if(F!==null){E=m.child;for(var H=F.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=Hi(-1,o&-o),H.tag=2;var le=m.updateQueue;if(le!==null){le=le.shared;var be=le.pending;be===null?H.next=H:(H.next=be.next,be.next=H),le.pending=H}}m.lanes|=o,H=m.alternate,H!==null&&(H.lanes|=o),Hc(m.return,o,i),F.lanes|=o;break}H=H.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=o,F=E.alternate,F!==null&&(F.lanes|=o),Hc(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Nn(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Ls(i,o),h=ii(h),c=c(h),i.flags|=1,Nn(n,i,c,o),i.child;case 14:return c=i.type,h=pi(c,i.pendingProps),h=pi(c.type,h),Ep(n,i,c,h,o);case 15:return Tp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:pi(c,h),Ko(n,i),i.tag=1,kn(c)?(n=!0,Lo(i)):n=!1,Ls(i,o),mp(i,c,h),ru(i,c,h,o),lu(null,i,c,!0,n,o);case 19:return Lp(n,i,o);case 22:return wp(n,i,o)}throw Error(t(156,i.tag))};function nm(n,i){return b(n,i)}function q0(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,i,o,c){return new q0(n,i,o,c)}function Ru(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Y0(n){if(typeof n=="function")return Ru(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===se)return 14}return 2}function Mr(n,i){var o=n.alternate;return o===null?(o=ai(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ol(n,i,o,c,h,m){var E=2;if(c=n,typeof n=="function")Ru(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Qr(o.children,h,m,i);case Y:E=8,h|=8;break;case w:return n=ai(12,o,i,h|2),n.elementType=w,n.lanes=m,n;case oe:return n=ai(13,o,i,h),n.elementType=oe,n.lanes=m,n;case _e:return n=ai(19,o,i,h),n.elementType=_e,n.lanes=m,n;case me:return ll(o,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:E=10;break e;case I:E=9;break e;case Z:E=11;break e;case se:E=14;break e;case fe:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ai(E,o,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function Qr(n,i,o,c){return n=ai(7,n,c,i),n.lanes=o,n}function ll(n,i,o,c){return n=ai(22,n,c,i),n.elementType=me,n.lanes=o,n.stateNode={isHidden:!1},n}function bu(n,i,o){return n=ai(6,n,null,i),n.lanes=o,n}function Pu(n,i,o){return i=ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $0(n,i,o,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sn(0),this.expirationTimes=sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Nu(n,i,o,c,h,m,E,F,H){return n=new $0(n,i,o,F,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ai(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(m),n}function K0(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function im(n){if(!n)return hr;n=n._reactInternals;e:{if(jn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(kn(o))return Nh(n,o,i)}return i}function rm(n,i,o,c,h,m,E,F,H){return n=Nu(o,c,!0,n,h,m,E,F,H),n.context=im(null),o=n.current,c=Ln(),h=yr(o),m=Hi(c,h),m.callback=i??null,gr(o,m,h),n.current.lanes=h,qt(n,h,c),Bn(n,c),n}function cl(n,i,o,c){var h=i.current,m=Ln(),E=yr(h);return o=im(o),i.context===null?i.context=o:i.pendingContext=o,i=Hi(m,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=gr(h,i,E),n!==null&&(vi(n,h,E,m),Bo(n,h,E)),E}function ul(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Lu(n,i){sm(n,i),(n=n.alternate)&&sm(n,i)}function J0(){return null}var am=typeof reportError=="function"?reportError:function(n){console.error(n)};function Du(n){this._internalRoot=n}dl.prototype.render=Du.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));cl(n,i,null,null)},dl.prototype.unmount=Du.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Kr(function(){cl(null,n,null,null)}),i[ki]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Gf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<lr.length&&i!==0&&i<lr[o].priority;o++);lr.splice(o,0,n),o===0&&Xf(n)}};function Iu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function fl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function om(){}function Z0(n,i,o,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var le=ul(E);m.call(le)}}var E=rm(i,c,n,0,null,!1,!1,"",om);return n._reactRootContainer=E,n[ki]=E.current,wa(n.nodeType===8?n.parentNode:n),Kr(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var F=c;c=function(){var le=ul(H);F.call(le)}}var H=Nu(n,0,!1,null,null,!1,!1,"",om);return n._reactRootContainer=H,n[ki]=H.current,wa(n.nodeType===8?n.parentNode:n),Kr(function(){cl(i,H,o,c)}),H}function hl(n,i,o,c,h){var m=o._reactRootContainer;if(m){var E=m;if(typeof h=="function"){var F=h;h=function(){var H=ul(E);F.call(H)}}cl(i,E,n,h)}else E=Z0(o,i,n,h,c);return ul(E)}gs=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Zt(i.pendingLanes);o!==0&&(di(i,o|1),Bn(i,X()),(Pt&6)===0&&(ks=X()+500,pr()))}break;case 13:Kr(function(){var c=Vi(n,1);if(c!==null){var h=Ln();vi(c,n,1,h)}}),Lu(n,1)}},sc=function(n){if(n.tag===13){var i=Vi(n,134217728);if(i!==null){var o=Ln();vi(i,n,134217728,o)}Lu(n,134217728)}},Hf=function(n){if(n.tag===13){var i=yr(n),o=Vi(n,i);if(o!==null){var c=Ln();vi(o,n,i,c)}Lu(n,i)}},Gf=function(){return xt},Wf=function(n,i){var o=xt;try{return xt=n,i()}finally{xt=o}},De=function(n,i,o){switch(i){case"input":if(ae(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var h=Po(c);if(!h)throw Error(t(90));St(c),ae(c,h)}}}break;case"textarea":T(n,o);break;case"select":i=o.value,i!=null&&at(n,!!o.multiple,i,!1)}},gt=wu,It=Kr;var Q0={usingClientEntryPoint:!1,Events:[Ra,Ts,Po,ye,Qe,wu]},Ha={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e_={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Vr(n),n===null?null:n.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Ke=pl.inject(e_),lt=pl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0,Vn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(i))throw Error(t(200));return K0(n,i,null,o)},Vn.createRoot=function(n,i){if(!Iu(n))throw Error(t(299));var o=!1,c="",h=am;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Nu(n,1,!1,null,null,o,!1,c,h),n[ki]=i.current,wa(n.nodeType===8?n.parentNode:n),new Du(i)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Vr(i),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return Kr(n)},Vn.hydrate=function(n,i,o){if(!fl(i))throw Error(t(200));return hl(null,n,i,!0,o)},Vn.hydrateRoot=function(n,i,o){if(!Iu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,h=!1,m="",E=am;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=rm(i,null,n,1,o??null,h,!1,m,E),n[ki]=i.current,wa(n),c)for(n=0;n<c.length;n++)o=c[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new dl(i)},Vn.render=function(n,i,o){if(!fl(i))throw Error(t(200));return hl(null,n,i,!1,o)},Vn.unmountComponentAtNode=function(n){if(!fl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){hl(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1},Vn.unstable_batchedUpdates=wu,Vn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!fl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return hl(n,i,o,!1,c)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var mm;function c_(){if(mm)return ku.exports;mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ku.exports=l_(),ku.exports}var gm;function u_(){if(gm)return ml;gm=1;var s=c_();return ml.createRoot=s.createRoot,ml.hydrateRoot=s.hydrateRoot,ml}var d_=u_();const f_=bg(d_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=kt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...d},p)=>kt.createElement("svg",{ref:p,...p_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Pg("lucide",a),...d},[...u.map(([f,g])=>kt.createElement(f,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=(s,e)=>{const t=kt.forwardRef(({className:r,...a},l)=>kt.createElement(m_,{ref:l,iconNode:e,className:Pg(`lucide-${h_(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],v_=ec("ChevronDown",g_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],x_=ec("Menu",__);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],S_=ec("RefreshCw",y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bu=ec("X",M_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="180",E_=0,vm=1,T_=2,Ng=1,w_=2,Ji=3,Fr=0,Wn=1,Si=2,Ir=0,ta=1,_m=2,xm=3,ym=4,A_=5,ls=100,C_=101,R_=102,b_=103,P_=104,N_=200,L_=201,D_=202,I_=203,Cd=204,Rd=205,U_=206,F_=207,k_=208,O_=209,z_=210,B_=211,V_=212,H_=213,G_=214,bd=0,Pd=1,Nd=2,ia=3,Ld=4,Dd=5,Id=6,Ud=7,Lg=0,W_=1,j_=2,Ur=0,X_=1,q_=2,Y_=3,$_=4,K_=5,J_=6,Dg=7,Ig=300,ra=301,sa=302,Fd=303,kd=304,tc=306,kr=1e3,Lr=1001,Od=1002,Zn=1003,Z_=1004,gl=1005,Ei=1006,Vu=1007,Dr=1008,Di=1009,Ug=1010,Fg=1011,to=1012,Af=1013,us=1014,Zi=1015,co=1016,Cf=1017,Rf=1018,no=1020,kg=35902,Og=35899,zg=1021,Bg=1022,Ti=1023,io=1026,ro=1027,Vg=1028,bf=1029,Hg=1030,Pf=1031,Nf=1033,Hl=33776,Gl=33777,Wl=33778,jl=33779,zd=35840,Bd=35841,Vd=35842,Hd=35843,Gd=36196,Wd=37492,jd=37496,Xd=37808,qd=37809,Yd=37810,$d=37811,Kd=37812,Jd=37813,Zd=37814,Qd=37815,ef=37816,tf=37817,nf=37818,rf=37819,sf=37820,af=37821,of=36492,lf=36494,cf=36495,uf=36283,df=36284,ff=36285,hf=36286,Q_=3200,ex=3201,Gg=0,tx=1,Nr="",In="srgb",aa="srgb-linear",$l="linear",zt="srgb",zs=7680,Sm=519,nx=512,ix=513,rx=514,Wg=515,sx=516,ax=517,ox=518,lx=519,Mm=35044,Em="300 es",Li=2e3,Kl=2001;class ca{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=Math.PI/180,pf=180/Math.PI;function ua(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function cx(s,e){return(s%e+e)%e}function Gu(s,e,t){return(1-t)*s+t*e}function Wa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,d){let p=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];const _=l[u+0],y=l[u+1],M=l[u+2],R=l[u+3];if(d===0){e[t+0]=p,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=R;return}if(v!==R||p!==_||f!==y||g!==M){let S=1-d;const x=p*_+f*y+g*M+v*R,U=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const V=Math.sqrt(D),z=Math.atan2(V,x*U);S=Math.sin(S*z)/V,d=Math.sin(d*z)/V}const N=d*U;if(p=p*S+_*N,f=f*S+y*N,g=g*S+M*N,v=v*S+R*N,S===1-d){const V=1/Math.sqrt(p*p+f*f+g*g+v*v);p*=V,f*=V,g*=V,v*=V}}e[t]=p,e[t+1]=f,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,u){const d=r[a],p=r[a+1],f=r[a+2],g=r[a+3],v=l[u],_=l[u+1],y=l[u+2],M=l[u+3];return e[t]=d*M+g*v+p*y-f*_,e[t+1]=p*M+g*_+f*v-d*y,e[t+2]=f*M+g*y+d*_-p*v,e[t+3]=g*M-d*v-p*_-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,f=d(r/2),g=d(a/2),v=d(l/2),_=p(r/2),y=p(a/2),M=p(l/2);switch(u){case"XYZ":this._x=_*g*v+f*y*M,this._y=f*y*v-_*g*M,this._z=f*g*M+_*y*v,this._w=f*g*v-_*y*M;break;case"YXZ":this._x=_*g*v+f*y*M,this._y=f*y*v-_*g*M,this._z=f*g*M-_*y*v,this._w=f*g*v+_*y*M;break;case"ZXY":this._x=_*g*v-f*y*M,this._y=f*y*v+_*g*M,this._z=f*g*M+_*y*v,this._w=f*g*v-_*y*M;break;case"ZYX":this._x=_*g*v-f*y*M,this._y=f*y*v+_*g*M,this._z=f*g*M-_*y*v,this._w=f*g*v+_*y*M;break;case"YZX":this._x=_*g*v+f*y*M,this._y=f*y*v+_*g*M,this._z=f*g*M-_*y*v,this._w=f*g*v-_*y*M;break;case"XZY":this._x=_*g*v-f*y*M,this._y=f*y*v-_*g*M,this._z=f*g*M+_*y*v,this._w=f*g*v+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],d=t[5],p=t[9],f=t[2],g=t[6],v=t[10],_=r+d+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-p)*y,this._y=(l-f)*y,this._z=(u-a)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(l+f)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(l-f)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(u-a)/y,this._x=(l+f)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,d=t._x,p=t._y,f=t._z,g=t._w;return this._x=r*g+u*d+a*f-l*p,this._y=a*g+u*p+l*d-r*f,this._z=l*g+u*f+r*p-a*d,this._w=u*g-r*d-a*p-l*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*r+t*this._x,this._y=y*a+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const f=Math.sqrt(p),g=Math.atan2(f,d),v=Math.sin((1-t)*g)/f,_=Math.sin(t*g)/f;return this._w=u*v+this._w*_,this._x=r*v+this._x*_,this._y=a*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,p=e.w,f=2*(u*a-d*r),g=2*(d*t-l*a),v=2*(l*r-u*t);return this.x=t+p*f+u*v-d*g,this.y=r+p*g+d*f-l*v,this.z=a+p*v+l*g-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=a*p-l*d,this.y=l*u-r*p,this.z=r*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wu.copy(this).projectOnVector(e),this.sub(Wu)}reflect(e){return this.sub(Wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wu=new j,Tm=new tr;class yt{constructor(e,t,r,a,l,u,d,p,f){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,p,f)}set(e,t,r,a,l,u,d,p,f){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=t,g[4]=l,g[5]=p,g[6]=r,g[7]=u,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],f=r[1],g=r[4],v=r[7],_=r[2],y=r[5],M=r[8],R=a[0],S=a[3],x=a[6],U=a[1],D=a[4],N=a[7],V=a[2],z=a[5],O=a[8];return l[0]=u*R+d*U+p*V,l[3]=u*S+d*D+p*z,l[6]=u*x+d*N+p*O,l[1]=f*R+g*U+v*V,l[4]=f*S+g*D+v*z,l[7]=f*x+g*N+v*O,l[2]=_*R+y*U+M*V,l[5]=_*S+y*D+M*z,l[8]=_*x+y*N+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],p=e[6],f=e[7],g=e[8];return t*u*g-t*d*f-r*l*g+r*d*p+a*l*f-a*u*p}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],p=e[6],f=e[7],g=e[8],v=g*u-d*f,_=d*p-g*l,y=f*l-u*p,M=t*v+r*_+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=v*R,e[1]=(a*f-g*r)*R,e[2]=(d*r-a*u)*R,e[3]=_*R,e[4]=(g*t-a*p)*R,e[5]=(a*l-d*t)*R,e[6]=y*R,e[7]=(r*p-f*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,d){const p=Math.cos(l),f=Math.sin(l);return this.set(r*p,r*f,-r*(p*u+f*d)+u+e,-a*f,a*p,-a*(-f*u+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(ju.makeScale(e,t)),this}rotate(e){return this.premultiply(ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ju=new yt;function jg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ux(){const s=Jl("canvas");return s.style.display="block",s}const wm={};function so(s){s in wm||(wm[s]=!0,console.warn(s))}function dx(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Am=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fx(){const s={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===zt&&(a.r=er(a.r),a.g=er(a.g),a.b=er(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(a.r=na(a.r),a.g=na(a.g),a.b=na(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Nr?$l:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return so("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return so("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[aa]:{primaries:e,whitePoint:r,transfer:$l,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),s}const Dt=fx();function er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function na(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class hx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Bs===void 0&&(Bs=Jl("canvas")),Bs.width=e.width,Bs.height=e.height;const a=Bs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Bs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=er(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(er(t[r]/255)*255):t[r]=er(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let px=0;class Lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(Xu(a[u].image)):l.push(Xu(a[u]))}else l=Xu(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Xu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mx=0;const qu=new j;class Rn extends ca{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,r=Lr,a=Lr,l=Ei,u=Dr,d=Ti,p=Di,f=Rn.DEFAULT_ANISOTROPY,g=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=ua(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=p,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Ig;Rn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,r=0,a=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const p=e.elements,f=p[0],g=p[4],v=p[8],_=p[1],y=p[5],M=p[9],R=p[2],S=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-R)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+R)<.1&&Math.abs(M+S)<.1&&Math.abs(f+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(f+1)/2,N=(y+1)/2,V=(x+1)/2,z=(g+_)/4,O=(v+R)/4,Y=(M+S)/4;return D>N&&D>V?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=z/r,l=O/r):N>V?N<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(N),r=z/a,l=Y/a):V<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(V),r=O/l,a=Y/l),this.set(r,a,l,t),this}let U=Math.sqrt((S-M)*(S-M)+(v-R)*(v-R)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(S-M)/U,this.y=(v-R)/U,this.z=(_-g)/U,this.w=Math.acos((f+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gx extends ca{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t);const a={width:e,height:t,depth:r.depth},l=new Rn(a);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Lf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends gx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Xg extends Rn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vx extends Rn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uo{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vl.copy(r.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),_l.subVectors(this.max,ja),Vs.subVectors(e.a,ja),Hs.subVectors(e.b,ja),Gs.subVectors(e.c,ja),Tr.subVectors(Hs,Vs),wr.subVectors(Gs,Hs),es.subVectors(Vs,Gs);let t=[0,-Tr.z,Tr.y,0,-wr.z,wr.y,0,-es.z,es.y,Tr.z,0,-Tr.x,wr.z,0,-wr.x,es.z,0,-es.x,-Tr.y,Tr.x,0,-wr.y,wr.x,0,-es.y,es.x,0];return!Yu(t,Vs,Hs,Gs,_l)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,Vs,Hs,Gs,_l))?!1:(xl.crossVectors(Tr,wr),t=[xl.x,xl.y,xl.z],Yu(t,Vs,Hs,Gs,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new j,new j,new j,new j,new j,new j,new j,new j],_i=new j,vl=new uo,Vs=new j,Hs=new j,Gs=new j,Tr=new j,wr=new j,es=new j,ja=new j,_l=new j,xl=new j,ts=new j;function Yu(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){ts.fromArray(s,l);const d=a.x*Math.abs(ts.x)+a.y*Math.abs(ts.y)+a.z*Math.abs(ts.z),p=e.dot(ts),f=t.dot(ts),g=r.dot(ts);if(Math.max(-Math.max(p,f,g),Math.min(p,f,g))>d)return!1}return!0}const _x=new uo,Xa=new j,$u=new j;class Df{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):_x.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const t=Xa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Xa,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add($u)),this.expandByPoint(Xa.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new j,Ku=new j,yl=new j,Ar=new j,Ju=new j,Sl=new j,Zu=new j;class qg{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Ku.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(Ku);const l=e.distanceTo(t)*.5,u=-this.direction.dot(yl),d=Ar.dot(this.direction),p=-Ar.dot(yl),f=Ar.lengthSq(),g=Math.abs(1-u*u);let v,_,y,M;if(g>0)if(v=u*p-d,_=u*d-p,M=l*g,v>=0)if(_>=-M)if(_<=M){const R=1/g;v*=R,_*=R,y=v*(v+u*_+2*d)+_*(u*v+_+2*p)+f}else _=l,v=Math.max(0,-(u*_+d)),y=-v*v+_*(_+2*p)+f;else _=-l,v=Math.max(0,-(u*_+d)),y=-v*v+_*(_+2*p)+f;else _<=-M?(v=Math.max(0,-(-u*l+d)),_=v>0?-l:Math.min(Math.max(-l,-p),l),y=-v*v+_*(_+2*p)+f):_<=M?(v=0,_=Math.min(Math.max(-l,-p),l),y=_*(_+2*p)+f):(v=Math.max(0,-(u*l+d)),_=v>0?l:Math.min(Math.max(-l,-p),l),y=-v*v+_*(_+2*p)+f);else _=u>0?-l:l,v=Math.max(0,-(u*_+d)),y=-v*v+_*(_+2*p)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Ku).addScaledVector(yl,_),y}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const r=Xi.dot(this.direction),a=Xi.dot(Xi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,d,p;const f=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return f>=0?(r=(e.min.x-_.x)*f,a=(e.max.x-_.x)*f):(r=(e.max.x-_.x)*f,a=(e.min.x-_.x)*f),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),v>=0?(d=(e.min.z-_.z)*v,p=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,p=(e.min.z-_.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,r,a,l){Ju.subVectors(t,e),Sl.subVectors(r,e),Zu.crossVectors(Ju,Sl);let u=this.direction.dot(Zu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ar.subVectors(this.origin,e);const p=d*this.direction.dot(Sl.crossVectors(Ar,Sl));if(p<0)return null;const f=d*this.direction.dot(Ju.cross(Ar));if(f<0||p+f>u)return null;const g=-d*Ar.dot(Zu);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,r,a,l,u,d,p,f,g,v,_,y,M,R,S){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,p,f,g,v,_,y,M,R,S)}set(e,t,r,a,l,u,d,p,f,g,v,_,y,M,R,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=a,x[1]=l,x[5]=u,x[9]=d,x[13]=p,x[2]=f,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=M,x[11]=R,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ws.setFromMatrixColumn(e,0).length(),l=1/Ws.setFromMatrixColumn(e,1).length(),u=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(a),f=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*g,y=u*v,M=d*g,R=d*v;t[0]=p*g,t[4]=-p*v,t[8]=f,t[1]=y+M*f,t[5]=_-R*f,t[9]=-d*p,t[2]=R-_*f,t[6]=M+y*f,t[10]=u*p}else if(e.order==="YXZ"){const _=p*g,y=p*v,M=f*g,R=f*v;t[0]=_+R*d,t[4]=M*d-y,t[8]=u*f,t[1]=u*v,t[5]=u*g,t[9]=-d,t[2]=y*d-M,t[6]=R+_*d,t[10]=u*p}else if(e.order==="ZXY"){const _=p*g,y=p*v,M=f*g,R=f*v;t[0]=_-R*d,t[4]=-u*v,t[8]=M+y*d,t[1]=y+M*d,t[5]=u*g,t[9]=R-_*d,t[2]=-u*f,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const _=u*g,y=u*v,M=d*g,R=d*v;t[0]=p*g,t[4]=M*f-y,t[8]=_*f+R,t[1]=p*v,t[5]=R*f+_,t[9]=y*f-M,t[2]=-f,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const _=u*p,y=u*f,M=d*p,R=d*f;t[0]=p*g,t[4]=R-_*v,t[8]=M*v+y,t[1]=v,t[5]=u*g,t[9]=-d*g,t[2]=-f*g,t[6]=y*v+M,t[10]=_-R*v}else if(e.order==="XZY"){const _=u*p,y=u*f,M=d*p,R=d*f;t[0]=p*g,t[4]=-v,t[8]=f*g,t[1]=_*v+R,t[5]=u*g,t[9]=y*v-M,t[2]=M*v-y,t[6]=d*g,t[10]=R*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xx,e,yx)}lookAt(e,t,r){const a=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Cr.crossVectors(r,Kn),Cr.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Cr.crossVectors(r,Kn)),Cr.normalize(),Ml.crossVectors(Kn,Cr),a[0]=Cr.x,a[4]=Ml.x,a[8]=Kn.x,a[1]=Cr.y,a[5]=Ml.y,a[9]=Kn.y,a[2]=Cr.z,a[6]=Ml.z,a[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],f=r[12],g=r[1],v=r[5],_=r[9],y=r[13],M=r[2],R=r[6],S=r[10],x=r[14],U=r[3],D=r[7],N=r[11],V=r[15],z=a[0],O=a[4],Y=a[8],w=a[12],A=a[1],I=a[5],Z=a[9],oe=a[13],_e=a[2],se=a[6],fe=a[10],me=a[14],B=a[3],he=a[7],Q=a[11],k=a[15];return l[0]=u*z+d*A+p*_e+f*B,l[4]=u*O+d*I+p*se+f*he,l[8]=u*Y+d*Z+p*fe+f*Q,l[12]=u*w+d*oe+p*me+f*k,l[1]=g*z+v*A+_*_e+y*B,l[5]=g*O+v*I+_*se+y*he,l[9]=g*Y+v*Z+_*fe+y*Q,l[13]=g*w+v*oe+_*me+y*k,l[2]=M*z+R*A+S*_e+x*B,l[6]=M*O+R*I+S*se+x*he,l[10]=M*Y+R*Z+S*fe+x*Q,l[14]=M*w+R*oe+S*me+x*k,l[3]=U*z+D*A+N*_e+V*B,l[7]=U*O+D*I+N*se+V*he,l[11]=U*Y+D*Z+N*fe+V*Q,l[15]=U*w+D*oe+N*me+V*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],p=e[9],f=e[13],g=e[2],v=e[6],_=e[10],y=e[14],M=e[3],R=e[7],S=e[11],x=e[15];return M*(+l*p*v-a*f*v-l*d*_+r*f*_+a*d*y-r*p*y)+R*(+t*p*y-t*f*_+l*u*_-a*u*y+a*f*g-l*p*g)+S*(+t*f*v-t*d*y-l*u*v+r*u*y+l*d*g-r*f*g)+x*(-a*d*g-t*p*v+t*d*_+a*u*v-r*u*_+r*p*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],p=e[6],f=e[7],g=e[8],v=e[9],_=e[10],y=e[11],M=e[12],R=e[13],S=e[14],x=e[15],U=v*S*f-R*_*f+R*p*y-d*S*y-v*p*x+d*_*x,D=M*_*f-g*S*f-M*p*y+u*S*y+g*p*x-u*_*x,N=g*R*f-M*v*f+M*d*y-u*R*y-g*d*x+u*v*x,V=M*v*p-g*R*p-M*d*_+u*R*_+g*d*S-u*v*S,z=t*U+r*D+a*N+l*V;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=U*O,e[1]=(R*_*l-v*S*l-R*a*y+r*S*y+v*a*x-r*_*x)*O,e[2]=(d*S*l-R*p*l+R*a*f-r*S*f-d*a*x+r*p*x)*O,e[3]=(v*p*l-d*_*l-v*a*f+r*_*f+d*a*y-r*p*y)*O,e[4]=D*O,e[5]=(g*S*l-M*_*l+M*a*y-t*S*y-g*a*x+t*_*x)*O,e[6]=(M*p*l-u*S*l-M*a*f+t*S*f+u*a*x-t*p*x)*O,e[7]=(u*_*l-g*p*l+g*a*f-t*_*f-u*a*y+t*p*y)*O,e[8]=N*O,e[9]=(M*v*l-g*R*l-M*r*y+t*R*y+g*r*x-t*v*x)*O,e[10]=(u*R*l-M*d*l+M*r*f-t*R*f-u*r*x+t*d*x)*O,e[11]=(g*d*l-u*v*l-g*r*f+t*v*f+u*r*y-t*d*y)*O,e[12]=V*O,e[13]=(g*R*a-M*v*a+M*r*_-t*R*_-g*r*S+t*v*S)*O,e[14]=(M*d*a-u*R*a-M*r*p+t*R*p+u*r*S-t*d*S)*O,e[15]=(u*v*a-g*d*a+g*r*p-t*v*p-u*r*_+t*d*_)*O,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,f=l*u,g=l*d;return this.set(f*u+r,f*d-a*p,f*p+a*d,0,f*d+a*p,g*d+r,g*p-a*u,0,f*p-a*d,g*p+a*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,f=l+l,g=u+u,v=d+d,_=l*f,y=l*g,M=l*v,R=u*g,S=u*v,x=d*v,U=p*f,D=p*g,N=p*v,V=r.x,z=r.y,O=r.z;return a[0]=(1-(R+x))*V,a[1]=(y+N)*V,a[2]=(M-D)*V,a[3]=0,a[4]=(y-N)*z,a[5]=(1-(_+x))*z,a[6]=(S+U)*z,a[7]=0,a[8]=(M+D)*O,a[9]=(S-U)*O,a[10]=(1-(_+R))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ws.set(a[0],a[1],a[2]).length();const u=Ws.set(a[4],a[5],a[6]).length(),d=Ws.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],xi.copy(this);const f=1/l,g=1/u,v=1/d;return xi.elements[0]*=f,xi.elements[1]*=f,xi.elements[2]*=f,xi.elements[4]*=g,xi.elements[5]*=g,xi.elements[6]*=g,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,t.setFromRotationMatrix(xi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,a,l,u,d=Li,p=!1){const f=this.elements,g=2*l/(t-e),v=2*l/(r-a),_=(t+e)/(t-e),y=(r+a)/(r-a);let M,R;if(p)M=l/(u-l),R=u*l/(u-l);else if(d===Li)M=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===Kl)M=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=g,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=v,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=R,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,a,l,u,d=Li,p=!1){const f=this.elements,g=2/(t-e),v=2/(r-a),_=-(t+e)/(t-e),y=-(r+a)/(r-a);let M,R;if(p)M=1/(u-l),R=u/(u-l);else if(d===Li)M=-2/(u-l),R=-(u+l)/(u-l);else if(d===Kl)M=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=g,f[4]=0,f[8]=0,f[12]=_,f[1]=0,f[5]=v,f[9]=0,f[13]=y,f[2]=0,f[6]=0,f[10]=M,f[14]=R,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ws=new j,xi=new Xt,xx=new j(0,0,0),yx=new j(1,1,1),Cr=new j,Ml=new j,Kn=new j,Rm=new Xt,bm=new tr;class Ii{constructor(e=0,t=0,r=0,a=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],p=a[1],f=a[5],g=a[9],v=a[2],_=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,f)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class If{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sx=0;const Pm=new j,js=new tr,qi=new Xt,El=new j,qa=new j,Mx=new j,Ex=new tr,Nm=new j(1,0,0),Lm=new j(0,1,0),Dm=new j(0,0,1),Im={type:"added"},Tx={type:"removed"},Xs={type:"childadded",child:null},Qu={type:"childremoved",child:null};class bn extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new j,t=new Ii,r=new tr,a=new j(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new yt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new If,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,t){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?El.copy(e):El.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(qa,El,this.up):qi.lookAt(El,qa,this.up),this.quaternion.setFromRotationMatrix(qi),a&&(qi.extractRotation(a.matrixWorld),js.setFromRotationMatrix(qi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tx),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,e,Mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let f=0,g=p.length;f<g;f++){const v=p[f];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,f=this.material.length;p<f;p++)d.push(l(e.materials,this.material[p]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),f=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),f.length>0&&(r.textures=f),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=a,r;function u(d){const p=[];for(const f in d){const g=d[f];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}bn.DEFAULT_UP=new j(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new j,Yi=new j,ed=new j,$i=new j,qs=new j,Ys=new j,Um=new j,td=new j,nd=new j,id=new j,rd=new en,sd=new en,ad=new en;class Mi{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),yi.subVectors(e,t),a.cross(yi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){yi.subVectors(a,t),Yi.subVectors(r,t),ed.subVectors(e,t);const u=yi.dot(yi),d=yi.dot(Yi),p=yi.dot(ed),f=Yi.dot(Yi),g=Yi.dot(ed),v=u*f-d*d;if(v===0)return l.set(0,0,0),null;const _=1/v,y=(f*p-d*g)*_,M=(u*g-d*p)*_;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,r,a,l,u,d,p){return this.getBarycoord(e,t,r,a,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,$i.x),p.addScaledVector(u,$i.y),p.addScaledVector(d,$i.z),p)}static getInterpolatedAttribute(e,t,r,a,l,u){return rd.setScalar(0),sd.setScalar(0),ad.setScalar(0),rd.fromBufferAttribute(e,t),sd.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(rd,l.x),u.addScaledVector(sd,l.y),u.addScaledVector(ad,l.z),u}static isFrontFacing(e,t,r,a){return yi.subVectors(r,t),Yi.subVectors(e,t),yi.cross(Yi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),yi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Mi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,d;qs.subVectors(a,r),Ys.subVectors(l,r),td.subVectors(e,r);const p=qs.dot(td),f=Ys.dot(td);if(p<=0&&f<=0)return t.copy(r);nd.subVectors(e,a);const g=qs.dot(nd),v=Ys.dot(nd);if(g>=0&&v<=g)return t.copy(a);const _=p*v-g*f;if(_<=0&&p>=0&&g<=0)return u=p/(p-g),t.copy(r).addScaledVector(qs,u);id.subVectors(e,l);const y=qs.dot(id),M=Ys.dot(id);if(M>=0&&y<=M)return t.copy(l);const R=y*f-p*M;if(R<=0&&f>=0&&M<=0)return d=f/(f-M),t.copy(r).addScaledVector(Ys,d);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return Um.subVectors(l,a),d=(v-g)/(v-g+(y-M)),t.copy(a).addScaledVector(Um,d);const x=1/(S+R+_);return u=R*x,d=_*x,t.copy(r).addScaledVector(qs,u).addScaledVector(Ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function od(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Dt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Dt.workingColorSpace){if(e=cx(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=od(u,l,e+1/3),this.g=od(u,l,e),this.b=od(u,l,e-1/3)}return Dt.colorSpaceToWorking(this,a),this}setStyle(e,t=In){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const r=Yg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Dt.workingToColorSpace(Cn.copy(this),e),Math.round(Tt(Cn.r*255,0,255))*65536+Math.round(Tt(Cn.g*255,0,255))*256+Math.round(Tt(Cn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(Cn.copy(this),t);const r=Cn.r,a=Cn.g,l=Cn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let p,f;const g=(d+u)/2;if(d===u)p=0,f=0;else{const v=u-d;switch(f=g<=.5?v/(u+d):v/(2-u-d),u){case r:p=(a-l)/v+(a<l?6:0);break;case a:p=(l-r)/v+2;break;case l:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=f,e.l=g,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=In){Dt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,a=Cn.b;return e!==In?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Tl);const r=Gu(Rr.h,Tl.h,t),a=Gu(Rr.s,Tl.s,t),l=Gu(Rr.l,Tl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ct;Ct.NAMES=Yg;let wx=0;class fo extends ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=ta,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(r.blending=this.blending),this.side!==Fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==Rd&&(r.blendDst=this.blendDst),this.blendEquation!==ls&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uf extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new j,wl=new We;let Ax=0;class Qn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ax++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Mm,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Wa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),a=Hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),r=Hn(r,this.array),a=Hn(a,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mm&&(e.usage=this.usage),e}}class $g extends Qn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Kg extends Qn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Un extends Qn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Cx=0;const oi=new Xt,ld=new bn,$s=new j,Jn=new uo,Ya=new uo,_n=new j;class wi extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?Kg:$g)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,r){return oi.makeTranslation(e,t,r),this.applyMatrix4(oi),this}scale(e,t,r){return oi.makeScale(e,t,r),this.applyMatrix4(oi),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Un(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Jn.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Df);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ya.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Jn.min,Ya.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,Ya.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(Ya.min),Jn.expandByPoint(Ya.max))}Jn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)_n.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(_n));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let f=0,g=d.count;f<g;f++)_n.fromBufferAttribute(d,f),p&&($s.fromBufferAttribute(e,f),_n.add($s)),a=Math.max(a,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<r.count;Y++)d[Y]=new j,p[Y]=new j;const f=new j,g=new j,v=new j,_=new We,y=new We,M=new We,R=new j,S=new j;function x(Y,w,A){f.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,A),_.fromBufferAttribute(l,Y),y.fromBufferAttribute(l,w),M.fromBufferAttribute(l,A),g.sub(f),v.sub(f),y.sub(_),M.sub(_);const I=1/(y.x*M.y-M.x*y.y);isFinite(I)&&(R.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(I),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(I),d[Y].add(R),d[w].add(R),d[A].add(R),p[Y].add(S),p[w].add(S),p[A].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Y=0,w=U.length;Y<w;++Y){const A=U[Y],I=A.start,Z=A.count;for(let oe=I,_e=I+Z;oe<_e;oe+=3)x(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const D=new j,N=new j,V=new j,z=new j;function O(Y){V.fromBufferAttribute(a,Y),z.copy(V);const w=d[Y];D.copy(w),D.sub(V.multiplyScalar(V.dot(w))).normalize(),N.crossVectors(z,w);const I=N.dot(p[Y])<0?-1:1;u.setXYZW(Y,D.x,D.y,D.z,I)}for(let Y=0,w=U.length;Y<w;++Y){const A=U[Y],I=A.start,Z=A.count;for(let oe=I,_e=I+Z;oe<_e;oe+=3)O(e.getX(oe+0)),O(e.getX(oe+1)),O(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const a=new j,l=new j,u=new j,d=new j,p=new j,f=new j,g=new j,v=new j;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),R=e.getX(_+1),S=e.getX(_+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,S),g.subVectors(u,l),v.subVectors(a,l),g.cross(v),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),d.add(g),p.add(g),f.add(g),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(S,f.x,f.y,f.z)}else for(let _=0,y=t.count;_<y;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),v.subVectors(a,l),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,p){const f=d.array,g=d.itemSize,v=d.normalized,_=new f.constructor(p.length*g);let y=0,M=0;for(let R=0,S=p.length;R<S;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*g;for(let x=0;x<g;x++)_[M++]=f[y++]}return new Qn(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],f=e(p,r);t.setAttribute(d,f)}const l=this.morphAttributes;for(const d in l){const p=[],f=l[d];for(let g=0,v=f.length;g<v;g++){const _=f[g],y=e(_,r);p.push(y)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const f=u[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const f in p)p[f]!==void 0&&(e[f]=p[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const f=r[p];e.data.attributes[p]=f.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const f=this.morphAttributes[p],g=[];for(let v=0,_=f.length;v<_;v++){const y=f[v];g.push(y.toJSON(e.data))}g.length>0&&(a[p]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const f in a){const g=a[f];this.setAttribute(f,g.clone(t))}const l=e.morphAttributes;for(const f in l){const g=[],v=l[f];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,g=u.length;f<g;f++){const v=u[f];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fm=new Xt,ns=new qg,Al=new Df,km=new j,Cl=new j,Rl=new j,bl=new j,cd=new j,Pl=new j,Om=new j,Nl=new j;class Sn extends bn{constructor(e=new wi,t=new Uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Pl.set(0,0,0);for(let p=0,f=l.length;p<f;p++){const g=d[p],v=l[p];g!==0&&(cd.fromBufferAttribute(v,e),u?Pl.addScaledVector(cd,g):Pl.addScaledVector(cd.sub(t),g))}t.add(Pl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(Al.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Al,km)===null||ns.origin.distanceToSquared(km)>(e.far-e.near)**2))&&(Fm.copy(l).invert(),ns.copy(e.ray).applyMatrix4(Fm),!(r.boundingBox!==null&&ns.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,f=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,R=_.length;M<R;M++){const S=_[M],x=u[S.materialIndex],U=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let N=U,V=D;N<V;N+=3){const z=d.getX(N),O=d.getX(N+1),Y=d.getX(N+2);a=Ll(this,x,e,r,f,g,v,z,O,Y),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let S=M,x=R;S<x;S+=3){const U=d.getX(S),D=d.getX(S+1),N=d.getX(S+2);a=Ll(this,u,e,r,f,g,v,U,D,N),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,R=_.length;M<R;M++){const S=_[M],x=u[S.materialIndex],U=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let N=U,V=D;N<V;N+=3){const z=N,O=N+1,Y=N+2;a=Ll(this,x,e,r,f,g,v,z,O,Y),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let S=M,x=R;S<x;S+=3){const U=S,D=S+1,N=S+2;a=Ll(this,u,e,r,f,g,v,U,D,N),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function Rx(s,e,t,r,a,l,u,d){let p;if(e.side===Wn?p=r.intersectTriangle(u,l,a,!0,d):p=r.intersectTriangle(a,l,u,e.side===Fr,d),p===null)return null;Nl.copy(d),Nl.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Nl);return f<t.near||f>t.far?null:{distance:f,point:Nl.clone(),object:s}}function Ll(s,e,t,r,a,l,u,d,p,f){s.getVertexPosition(d,Cl),s.getVertexPosition(p,Rl),s.getVertexPosition(f,bl);const g=Rx(s,e,t,r,Cl,Rl,bl,Om);if(g){const v=new j;Mi.getBarycoord(Om,Cl,Rl,bl,v),a&&(g.uv=Mi.getInterpolatedAttribute(a,d,p,f,v,new We)),l&&(g.uv1=Mi.getInterpolatedAttribute(l,d,p,f,v,new We)),u&&(g.normal=Mi.getInterpolatedAttribute(u,d,p,f,v,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:p,c:f,normal:new j,materialIndex:0};Mi.getNormal(Cl,Rl,bl,_.normal),g.face=_,g.barycoord=v}return g}class ho extends wi{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const p=[],f=[],g=[],v=[];let _=0,y=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,a,u,2),M("x","z","y",1,-1,e,r,-t,a,u,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new Un(f,3)),this.setAttribute("normal",new Un(g,3)),this.setAttribute("uv",new Un(v,2));function M(R,S,x,U,D,N,V,z,O,Y,w){const A=N/O,I=V/Y,Z=N/2,oe=V/2,_e=z/2,se=O+1,fe=Y+1;let me=0,B=0;const he=new j;for(let Q=0;Q<fe;Q++){const k=Q*I-oe;for(let ee=0;ee<se;ee++){const ze=ee*A-Z;he[R]=ze*U,he[S]=k*D,he[x]=_e,f.push(he.x,he.y,he.z),he[R]=0,he[S]=0,he[x]=z>0?1:-1,g.push(he.x,he.y,he.z),v.push(ee/O),v.push(1-Q/Y),me+=1}}for(let Q=0;Q<Y;Q++)for(let k=0;k<O;k++){const ee=_+k+se*Q,ze=_+k+se*(Q+1),Ye=_+(k+1)+se*(Q+1),Xe=_+(k+1)+se*Q;p.push(ee,ze,Xe),p.push(ze,Ye,Xe),B+=6}d.addGroup(y,B,w),y+=B,_+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const r=oa(s[t]);for(const a in r)e[a]=r[a]}return e}function bx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Px={clone:oa,merge:Dn};var Nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nx,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Zg extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new j,zm=new We,Bm=new We;class li extends Zg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(Hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,zm,Bm),t.subVectors(Bm,zm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hu*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,f=u.fullHeight;l+=u.offsetX*a/p,t-=u.offsetY*r/f,a*=u.width/p,r*=u.height/f}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Js=1;class Dx extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new li(Ks,Js,e,t);a.layers=this.layers,this.add(a);const l=new li(Ks,Js,e,t);l.layers=this.layers,this.add(l);const u=new li(Ks,Js,e,t);u.layers=this.layers,this.add(u);const d=new li(Ks,Js,e,t);d.layers=this.layers,this.add(d);const p=new li(Ks,Js,e,t);p.layers=this.layers,this.add(p);const f=new li(Ks,Js,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,d,p]=t;for(const f of t)this.remove(f);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,f,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,p),e.setRenderTarget(r,4,a),e.render(t,f),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(v,_,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Qg extends Rn{constructor(e=[],t=ra,r,a,l,u,d,p,f,g){super(e,t,r,a,l,u,d,p,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ix extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Qg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ho(5,5,5),l=new Or({name:"CubemapFromEquirect",uniforms:oa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Ir});l.uniforms.tEquirect.value=t;const u=new Sn(a,l),d=t.minFilter;return t.minFilter===Dr&&(t.minFilter=Ei),new Dx(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}class Qs extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ux={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const d=this._targetRay,p=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const R of e.hand.values()){const S=t.getJointPose(R,r),x=this._getHandJoint(f,R);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,M=.005;f.inputState.pinching&&_>y+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=y-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=l!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Qs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class ev extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fx extends Rn{constructor(e=null,t=1,r=1,a,l,u,d,p,f=Zn,g=Zn,v,_){super(null,u,d,p,f,g,a,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new j,kx=new j,Ox=new yt;class as{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=dd.subVectors(r,t).cross(kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(dd),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ox.getNormalMatrix(e),a=this.coplanarPoint(dd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Df,zx=new We(.5,.5),Dl=new j;class Ff{constructor(e=new as,t=new as,r=new as,a=new as,l=new as,u=new as){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Li,r=!1){const a=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],f=l[3],g=l[4],v=l[5],_=l[6],y=l[7],M=l[8],R=l[9],S=l[10],x=l[11],U=l[12],D=l[13],N=l[14],V=l[15];if(a[0].setComponents(f-u,y-g,x-M,V-U).normalize(),a[1].setComponents(f+u,y+g,x+M,V+U).normalize(),a[2].setComponents(f+d,y+v,x+R,V+D).normalize(),a[3].setComponents(f-d,y-v,x-R,V-D).normalize(),r)a[4].setComponents(p,_,S,N).normalize(),a[5].setComponents(f-p,y-_,x-S,V-N).normalize();else if(a[4].setComponents(f-p,y-_,x-S,V-N).normalize(),t===Li)a[5].setComponents(f+p,y+_,x+S,V+N).normalize();else if(t===Kl)a[5].setComponents(p,_,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=zx.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Dl.x=a.normal.x>0?e.max.x:e.min.x,Dl.y=a.normal.y>0?e.max.y:e.min.y,Dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mf extends Rn{constructor(e,t,r,a,l,u,d,p,f){super(e,t,r,a,l,u,d,p,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tv extends Rn{constructor(e,t,r=us,a,l,u,d=Zn,p=Zn,f,g=io,v=1){if(g!==io&&g!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,a,l,u,d,p,g,r,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nv extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,p=l-1,f;for(;d<=p;)if(a=Math.floor(d+(p-d)/2),f=r[a]-u,f<0)d=a+1;else if(f>0)p=a-1;else{p=a;break}if(a=p,r[a]===u)return a/(l-1);const g=r[a],_=r[a+1]-g,y=(u-g)/_;return(a+y)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const u=this.getPoint(a),d=this.getPoint(l),p=t||(u.isVector2?new We:new j);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new j,a=[],l=[],u=[],d=new j,p=new Xt;for(let y=0;y<=e;y++){const M=y/e;a[y]=this.getTangentAt(M,new j)}l[0]=new j,u[0]=new j;let f=Number.MAX_VALUE;const g=Math.abs(a[0].x),v=Math.abs(a[0].y),_=Math.abs(a[0].z);g<=f&&(f=g,r.set(1,0,0)),v<=f&&(f=v,r.set(0,1,0)),_<=f&&r.set(0,0,1),d.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],d),u[0].crossVectors(a[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(a[y-1],a[y]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(Tt(a[y-1].dot(a[y]),-1,1));l[y].applyMatrix4(p.makeRotationAxis(d,M))}u[y].crossVectors(a[y],l[y])}if(t===!0){let y=Math.acos(Tt(l[0].dot(l[e]),-1,1));y/=e,a[0].dot(d.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(p.makeRotationAxis(a[M],y*M)),u[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kf extends Ui{constructor(e=0,t=0,r=1,a=1,l=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new We){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(u?l=0:l=a),this.aClockwise===!0&&!u&&(l===a?l=-a:l=l-a);const d=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(d),f=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=p-this.aX,y=f-this.aY;p=_*g-y*v+this.aX,f=_*v+y*g+this.aY}return r.set(p,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bx extends kf{constructor(e,t,r,a,l,u){super(e,t,r,r,a,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Of(){let s=0,e=0,t=0,r=0;function a(l,u,d,p){s=l,e=d,t=-3*l+3*u-2*d-p,r=2*l-2*u+d+p}return{initCatmullRom:function(l,u,d,p,f){a(u,d,f*(d-l),f*(p-u))},initNonuniformCatmullRom:function(l,u,d,p,f,g,v){let _=(u-l)/f-(d-l)/(f+g)+(d-u)/g,y=(d-u)/g-(p-u)/(g+v)+(p-d)/v;_*=g,y*=g,a(u,d,_,y)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const Il=new j,fd=new Of,hd=new Of,pd=new Of;class iv extends Ui{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new j){const r=t,a=this.points,l=a.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let f,g;this.closed||d>0?f=a[(d-1)%l]:(Il.subVectors(a[0],a[1]).add(a[0]),f=Il);const v=a[d%l],_=a[(d+1)%l];if(this.closed||d+2<l?g=a[(d+2)%l]:(Il.subVectors(a[l-1],a[l-2]).add(a[l-1]),g=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(f.distanceToSquared(v),y),R=Math.pow(v.distanceToSquared(_),y),S=Math.pow(_.distanceToSquared(g),y);R<1e-4&&(R=1),M<1e-4&&(M=R),S<1e-4&&(S=R),fd.initNonuniformCatmullRom(f.x,v.x,_.x,g.x,M,R,S),hd.initNonuniformCatmullRom(f.y,v.y,_.y,g.y,M,R,S),pd.initNonuniformCatmullRom(f.z,v.z,_.z,g.z,M,R,S)}else this.curveType==="catmullrom"&&(fd.initCatmullRom(f.x,v.x,_.x,g.x,this.tension),hd.initCatmullRom(f.y,v.y,_.y,g.y,this.tension),pd.initCatmullRom(f.z,v.z,_.z,g.z,this.tension));return r.set(fd.calc(p),hd.calc(p),pd.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new j().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vm(s,e,t,r,a){const l=(r-e)*.5,u=(a-t)*.5,d=s*s,p=s*d;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*d+l*s+t}function Vx(s,e){const t=1-s;return t*t*e}function Hx(s,e){return 2*(1-s)*s*e}function Gx(s,e){return s*s*e}function Za(s,e,t,r){return Vx(s,e)+Hx(s,t)+Gx(s,r)}function Wx(s,e){const t=1-s;return t*t*t*e}function jx(s,e){const t=1-s;return 3*t*t*s*e}function Xx(s,e){return 3*(1-s)*s*s*e}function qx(s,e){return s*s*s*e}function Qa(s,e,t,r,a){return Wx(s,e)+jx(s,t)+Xx(s,r)+qx(s,a)}class rv extends Ui{constructor(e=new We,t=new We,r=new We,a=new We){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new We){const r=t,a=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Qa(e,a.x,l.x,u.x,d.x),Qa(e,a.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yx extends Ui{constructor(e=new j,t=new j,r=new j,a=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new j){const r=t,a=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Qa(e,a.x,l.x,u.x,d.x),Qa(e,a.y,l.y,u.y,d.y),Qa(e,a.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sv extends Ui{constructor(e=new We,t=new We){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new We){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new We){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $x extends Ui{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class av extends Ui{constructor(e=new We,t=new We,r=new We){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new We){const r=t,a=this.v0,l=this.v1,u=this.v2;return r.set(Za(e,a.x,l.x,u.x),Za(e,a.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kx extends Ui{constructor(e=new j,t=new j,r=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new j){const r=t,a=this.v0,l=this.v1,u=this.v2;return r.set(Za(e,a.x,l.x,u.x),Za(e,a.y,l.y,u.y),Za(e,a.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ov extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new We){const r=t,a=this.points,l=(a.length-1)*e,u=Math.floor(l),d=l-u,p=a[u===0?u:u-1],f=a[u],g=a[u>a.length-2?a.length-1:u+1],v=a[u>a.length-3?a.length-1:u+2];return r.set(Vm(d,p.x,f.x,g.x,v.x),Vm(d,p.y,f.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new We().fromArray(a))}return this}}var gf=Object.freeze({__proto__:null,ArcCurve:Bx,CatmullRomCurve3:iv,CubicBezierCurve:rv,CubicBezierCurve3:Yx,EllipseCurve:kf,LineCurve:sv,LineCurve3:$x,QuadraticBezierCurve:av,QuadraticBezierCurve3:Kx,SplineCurve:ov});class Jx extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gf[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=r){const u=a[l]-r,d=this.curves[l],p=d.getLength(),f=p===0?0:1-u/p;return d.getPointAt(f,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,a=this.curves.length;r<a;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let a=0,l=this.curves;a<l.length;a++){const u=l[a],d=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,p=u.getPoints(d);for(let f=0;f<p.length;f++){const g=p[f];r&&r.equals(g)||(t.push(g),r=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(new gf[a.type]().fromJSON(a))}return this}}class vf extends Jx{constructor(e){super(),this.type="Path",this.currentPoint=new We,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new sv(this.currentPoint.clone(),new We(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,a){const l=new av(this.currentPoint.clone(),new We(e,t),new We(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}bezierCurveTo(e,t,r,a,l,u){const d=new rv(this.currentPoint.clone(),new We(e,t),new We(r,a),new We(l,u));return this.curves.push(d),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new ov(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,a,l,u){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+d,t+p,r,a,l,u),this}absarc(e,t,r,a,l,u){return this.absellipse(e,t,r,r,a,l,u),this}ellipse(e,t,r,a,l,u,d,p){const f=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+f,t+g,r,a,l,u,d,p),this}absellipse(e,t,r,a,l,u,d,p){const f=new kf(e,t,r,a,l,u,d,p);if(this.curves.length>0){const v=f.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(f);const g=f.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class nc extends vf{constructor(e){super(e),this.uuid=ua(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,a=this.holes.length;r<a;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const a=e.holes[t];this.holes.push(new vf().fromJSON(a))}return this}}function Zx(s,e,t=2){const r=e&&e.length,a=r?e[0]*t:s.length;let l=lv(s,0,a,t,!0);const u=[];if(!l||l.next===l.prev)return u;let d,p,f;if(r&&(l=iy(s,e,l,t)),s.length>80*t){d=1/0,p=1/0;let g=-1/0,v=-1/0;for(let _=t;_<a;_+=t){const y=s[_],M=s[_+1];y<d&&(d=y),M<p&&(p=M),y>g&&(g=y),M>v&&(v=M)}f=Math.max(g-d,v-p),f=f!==0?32767/f:0}return ao(l,u,t,d,p,f,0),u}function lv(s,e,t,r,a){let l;if(a===py(s,e,t,r)>0)for(let u=e;u<t;u+=r)l=Hm(u/r|0,s[u],s[u+1],l);else for(let u=t-r;u>=e;u-=r)l=Hm(u/r|0,s[u],s[u+1],l);return l&&la(l,l.next)&&(lo(l),l=l.next),l}function fs(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(la(t,t.next)||Jt(t.prev,t,t.next)===0)){if(lo(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ao(s,e,t,r,a,l,u){if(!s)return;!u&&l&&ly(s,r,a,l);let d=s;for(;s.prev!==s.next;){const p=s.prev,f=s.next;if(l?ey(s,r,a,l):Qx(s)){e.push(p.i,s.i,f.i),lo(s),s=f.next,d=f.next;continue}if(s=f,s===d){u?u===1?(s=ty(fs(s),e),ao(s,e,t,r,a,l,2)):u===2&&ny(s,e,t,r,a,l):ao(fs(s),e,t,r,a,l,1);break}}}function Qx(s){const e=s.prev,t=s,r=s.next;if(Jt(e,t,r)>=0)return!1;const a=e.x,l=t.x,u=r.x,d=e.y,p=t.y,f=r.y,g=Math.min(a,l,u),v=Math.min(d,p,f),_=Math.max(a,l,u),y=Math.max(d,p,f);let M=r.next;for(;M!==e;){if(M.x>=g&&M.x<=_&&M.y>=v&&M.y<=y&&$a(a,d,l,p,u,f,M.x,M.y)&&Jt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function ey(s,e,t,r){const a=s.prev,l=s,u=s.next;if(Jt(a,l,u)>=0)return!1;const d=a.x,p=l.x,f=u.x,g=a.y,v=l.y,_=u.y,y=Math.min(d,p,f),M=Math.min(g,v,_),R=Math.max(d,p,f),S=Math.max(g,v,_),x=_f(y,M,e,t,r),U=_f(R,S,e,t,r);let D=s.prevZ,N=s.nextZ;for(;D&&D.z>=x&&N&&N.z<=U;){if(D.x>=y&&D.x<=R&&D.y>=M&&D.y<=S&&D!==a&&D!==u&&$a(d,g,p,v,f,_,D.x,D.y)&&Jt(D.prev,D,D.next)>=0||(D=D.prevZ,N.x>=y&&N.x<=R&&N.y>=M&&N.y<=S&&N!==a&&N!==u&&$a(d,g,p,v,f,_,N.x,N.y)&&Jt(N.prev,N,N.next)>=0))return!1;N=N.nextZ}for(;D&&D.z>=x;){if(D.x>=y&&D.x<=R&&D.y>=M&&D.y<=S&&D!==a&&D!==u&&$a(d,g,p,v,f,_,D.x,D.y)&&Jt(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;N&&N.z<=U;){if(N.x>=y&&N.x<=R&&N.y>=M&&N.y<=S&&N!==a&&N!==u&&$a(d,g,p,v,f,_,N.x,N.y)&&Jt(N.prev,N,N.next)>=0)return!1;N=N.nextZ}return!0}function ty(s,e){let t=s;do{const r=t.prev,a=t.next.next;!la(r,a)&&uv(r,t,t.next,a)&&oo(r,a)&&oo(a,r)&&(e.push(r.i,t.i,a.i),lo(t),lo(t.next),t=s=a),t=t.next}while(t!==s);return fs(t)}function ny(s,e,t,r,a,l){let u=s;do{let d=u.next.next;for(;d!==u.prev;){if(u.i!==d.i&&dy(u,d)){let p=dv(u,d);u=fs(u,u.next),p=fs(p,p.next),ao(u,e,t,r,a,l,0),ao(p,e,t,r,a,l,0);return}d=d.next}u=u.next}while(u!==s)}function iy(s,e,t,r){const a=[];for(let l=0,u=e.length;l<u;l++){const d=e[l]*r,p=l<u-1?e[l+1]*r:s.length,f=lv(s,d,p,r,!1);f===f.next&&(f.steiner=!0),a.push(uy(f))}a.sort(ry);for(let l=0;l<a.length;l++)t=sy(a[l],t);return t}function ry(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=r-a}return t}function sy(s,e){const t=ay(s,e);if(!t)return e;const r=dv(t,s);return fs(r,r.next),fs(t,t.next)}function ay(s,e){let t=e;const r=s.x,a=s.y;let l=-1/0,u;if(la(s,t))return t;do{if(la(s,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const v=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=r&&v>l&&(l=v,u=t.x<t.next.x?t:t.next,v===r))return u}t=t.next}while(t!==e);if(!u)return null;const d=u,p=u.x,f=u.y;let g=1/0;t=u;do{if(r>=t.x&&t.x>=p&&r!==t.x&&cv(a<f?r:l,a,p,f,a<f?l:r,a,t.x,t.y)){const v=Math.abs(a-t.y)/(r-t.x);oo(t,s)&&(v<g||v===g&&(t.x>u.x||t.x===u.x&&oy(u,t)))&&(u=t,g=v)}t=t.next}while(t!==d);return u}function oy(s,e){return Jt(s.prev,s,e.prev)<0&&Jt(e.next,s,s.next)<0}function ly(s,e,t,r){let a=s;do a.z===0&&(a.z=_f(a.x,a.y,e,t,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==s);a.prevZ.nextZ=null,a.prevZ=null,cy(a)}function cy(s){let e,t=1;do{let r=s,a;s=null;let l=null;for(e=0;r;){e++;let u=r,d=0;for(let f=0;f<t&&(d++,u=u.nextZ,!!u);f++);let p=t;for(;d>0||p>0&&u;)d!==0&&(p===0||!u||r.z<=u.z)?(a=r,r=r.nextZ,d--):(a=u,u=u.nextZ,p--),l?l.nextZ=a:s=a,a.prevZ=l,l=a;r=u}l.nextZ=null,t*=2}while(e>1);return s}function _f(s,e,t,r,a){return s=(s-t)*a|0,e=(e-r)*a|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function uy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function cv(s,e,t,r,a,l,u,d){return(a-u)*(e-d)>=(s-u)*(l-d)&&(s-u)*(r-d)>=(t-u)*(e-d)&&(t-u)*(l-d)>=(a-u)*(r-d)}function $a(s,e,t,r,a,l,u,d){return!(s===u&&e===d)&&cv(s,e,t,r,a,l,u,d)}function dy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!fy(s,e)&&(oo(s,e)&&oo(e,s)&&hy(s,e)&&(Jt(s.prev,s,e.prev)||Jt(s,e.prev,e))||la(s,e)&&Jt(s.prev,s,s.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function la(s,e){return s.x===e.x&&s.y===e.y}function uv(s,e,t,r){const a=Fl(Jt(s,e,t)),l=Fl(Jt(s,e,r)),u=Fl(Jt(t,r,s)),d=Fl(Jt(t,r,e));return!!(a!==l&&u!==d||a===0&&Ul(s,t,e)||l===0&&Ul(s,r,e)||u===0&&Ul(t,s,r)||d===0&&Ul(t,e,r))}function Ul(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Fl(s){return s>0?1:s<0?-1:0}function fy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&uv(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function oo(s,e){return Jt(s.prev,s,s.next)<0?Jt(s,e,s.next)>=0&&Jt(s,s.prev,e)>=0:Jt(s,e,s.prev)<0||Jt(s,s.next,e)<0}function hy(s,e){let t=s,r=!1;const a=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function dv(s,e){const t=xf(s.i,s.x,s.y),r=xf(e.i,e.x,e.y),a=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=a,a.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Hm(s,e,t,r){const a=xf(s,e,t);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function lo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xf(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function py(s,e,t,r){let a=0;for(let l=e,u=t-r;l<t;l+=r)a+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return a}class my{static triangulate(e,t,r=2){return Zx(e,t,r)}}class Qi{static area(e){const t=e.length;let r=0;for(let a=t-1,l=0;l<t;a=l++)r+=e[a].x*e[l].y-e[l].x*e[a].y;return r*.5}static isClockWise(e){return Qi.area(e)<0}static triangulateShape(e,t){const r=[],a=[],l=[];Gm(e),Wm(r,e);let u=e.length;t.forEach(Gm);for(let p=0;p<t.length;p++)a.push(u),u+=t[p].length,Wm(r,t[p]);const d=my.triangulate(r,a);for(let p=0;p<d.length;p+=3)l.push(d.slice(p,p+3));return l}}function Gm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Wm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ic extends wi{constructor(e=new nc([new We(.5,.5),new We(-.5,.5),new We(-.5,-.5),new We(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,a=[],l=[];for(let d=0,p=e.length;d<p;d++){const f=e[d];u(f)}this.setAttribute("position",new Un(a,3)),this.setAttribute("uv",new Un(l,2)),this.computeVertexNormals();function u(d){const p=[],f=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,v=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:y-.1,R=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,U=t.UVGenerator!==void 0?t.UVGenerator:gy;let D,N=!1,V,z,O,Y;x&&(D=x.getSpacedPoints(g),N=!0,_=!1,V=x.computeFrenetFrames(g,!1),z=new j,O=new j,Y=new j),_||(S=0,y=0,M=0,R=0);const w=d.extractPoints(f);let A=w.shape;const I=w.holes;if(!Qi.isClockWise(A)){A=A.reverse();for(let pe=0,ne=I.length;pe<ne;pe++){const re=I[pe];Qi.isClockWise(re)&&(I[pe]=re.reverse())}}function oe(pe){const re=10000000000000001e-36;let ae=pe[0];for(let xe=1;xe<=pe.length;xe++){const Se=xe%pe.length,Ae=pe[Se],at=Ae.x-ae.x,rt=Ae.y-ae.y,L=at*at+rt*rt,T=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(ae.x),Math.abs(ae.y)),G=re*T*T;if(L<=G){pe.splice(Se,1),xe--;continue}ae=Ae}}oe(A),I.forEach(oe);const _e=I.length,se=A;for(let pe=0;pe<_e;pe++){const ne=I[pe];A=A.concat(ne)}function fe(pe,ne,re){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(ne,re)}const me=A.length;function B(pe,ne,re){let ae,xe,Se;const Ae=pe.x-ne.x,at=pe.y-ne.y,rt=re.x-pe.x,L=re.y-pe.y,T=Ae*Ae+at*at,G=Ae*L-at*rt;if(Math.abs(G)>Number.EPSILON){const de=Math.sqrt(T),Me=Math.sqrt(rt*rt+L*L),ge=ne.x-at/de,Ze=ne.y+Ae/de,Pe=re.x-L/Me,Be=re.y+rt/Me,$e=((Pe-ge)*L-(Be-Ze)*rt)/(Ae*L-at*rt);ae=ge+Ae*$e-pe.x,xe=Ze+at*$e-pe.y;const Re=ae*ae+xe*xe;if(Re<=2)return new We(ae,xe);Se=Math.sqrt(Re/2)}else{let de=!1;Ae>Number.EPSILON?rt>Number.EPSILON&&(de=!0):Ae<-Number.EPSILON?rt<-Number.EPSILON&&(de=!0):Math.sign(at)===Math.sign(L)&&(de=!0),de?(ae=-at,xe=Ae,Se=Math.sqrt(T)):(ae=Ae,xe=at,Se=Math.sqrt(T/2))}return new We(ae/Se,xe/Se)}const he=[];for(let pe=0,ne=se.length,re=ne-1,ae=pe+1;pe<ne;pe++,re++,ae++)re===ne&&(re=0),ae===ne&&(ae=0),he[pe]=B(se[pe],se[re],se[ae]);const Q=[];let k,ee=he.concat();for(let pe=0,ne=_e;pe<ne;pe++){const re=I[pe];k=[];for(let ae=0,xe=re.length,Se=xe-1,Ae=ae+1;ae<xe;ae++,Se++,Ae++)Se===xe&&(Se=0),Ae===xe&&(Ae=0),k[ae]=B(re[ae],re[Se],re[Ae]);Q.push(k),ee=ee.concat(k)}let ze;if(S===0)ze=Qi.triangulateShape(se,I);else{const pe=[],ne=[];for(let re=0;re<S;re++){const ae=re/S,xe=y*Math.cos(ae*Math.PI/2),Se=M*Math.sin(ae*Math.PI/2)+R;for(let Ae=0,at=se.length;Ae<at;Ae++){const rt=fe(se[Ae],he[Ae],Se);ke(rt.x,rt.y,-xe),ae===0&&pe.push(rt)}for(let Ae=0,at=_e;Ae<at;Ae++){const rt=I[Ae];k=Q[Ae];const L=[];for(let T=0,G=rt.length;T<G;T++){const de=fe(rt[T],k[T],Se);ke(de.x,de.y,-xe),ae===0&&L.push(de)}ae===0&&ne.push(L)}}ze=Qi.triangulateShape(pe,ne)}const Ye=ze.length,Xe=M+R;for(let pe=0;pe<me;pe++){const ne=_?fe(A[pe],ee[pe],Xe):A[pe];N?(O.copy(V.normals[0]).multiplyScalar(ne.x),z.copy(V.binormals[0]).multiplyScalar(ne.y),Y.copy(D[0]).add(O).add(z),ke(Y.x,Y.y,Y.z)):ke(ne.x,ne.y,0)}for(let pe=1;pe<=g;pe++)for(let ne=0;ne<me;ne++){const re=_?fe(A[ne],ee[ne],Xe):A[ne];N?(O.copy(V.normals[pe]).multiplyScalar(re.x),z.copy(V.binormals[pe]).multiplyScalar(re.y),Y.copy(D[pe]).add(O).add(z),ke(Y.x,Y.y,Y.z)):ke(re.x,re.y,v/g*pe)}for(let pe=S-1;pe>=0;pe--){const ne=pe/S,re=y*Math.cos(ne*Math.PI/2),ae=M*Math.sin(ne*Math.PI/2)+R;for(let xe=0,Se=se.length;xe<Se;xe++){const Ae=fe(se[xe],he[xe],ae);ke(Ae.x,Ae.y,v+re)}for(let xe=0,Se=I.length;xe<Se;xe++){const Ae=I[xe];k=Q[xe];for(let at=0,rt=Ae.length;at<rt;at++){const L=fe(Ae[at],k[at],ae);N?ke(L.x,L.y+D[g-1].y,D[g-1].x+re):ke(L.x,L.y,v+re)}}}ie(),ve();function ie(){const pe=a.length/3;if(_){let ne=0,re=me*ne;for(let ae=0;ae<Ye;ae++){const xe=ze[ae];Ve(xe[2]+re,xe[1]+re,xe[0]+re)}ne=g+S*2,re=me*ne;for(let ae=0;ae<Ye;ae++){const xe=ze[ae];Ve(xe[0]+re,xe[1]+re,xe[2]+re)}}else{for(let ne=0;ne<Ye;ne++){const re=ze[ne];Ve(re[2],re[1],re[0])}for(let ne=0;ne<Ye;ne++){const re=ze[ne];Ve(re[0]+me*g,re[1]+me*g,re[2]+me*g)}}r.addGroup(pe,a.length/3-pe,0)}function ve(){const pe=a.length/3;let ne=0;we(se,ne),ne+=se.length;for(let re=0,ae=I.length;re<ae;re++){const xe=I[re];we(xe,ne),ne+=xe.length}r.addGroup(pe,a.length/3-pe,1)}function we(pe,ne){let re=pe.length;for(;--re>=0;){const ae=re;let xe=re-1;xe<0&&(xe=pe.length-1);for(let Se=0,Ae=g+S*2;Se<Ae;Se++){const at=me*Se,rt=me*(Se+1),L=ne+ae+at,T=ne+xe+at,G=ne+xe+rt,de=ne+ae+rt;mt(L,T,G,de)}}}function ke(pe,ne,re){p.push(pe),p.push(ne),p.push(re)}function Ve(pe,ne,re){St(pe),St(ne),St(re);const ae=a.length/3,xe=U.generateTopUV(r,a,ae-3,ae-2,ae-1);P(xe[0]),P(xe[1]),P(xe[2])}function mt(pe,ne,re,ae){St(pe),St(ne),St(ae),St(ne),St(re),St(ae);const xe=a.length/3,Se=U.generateSideWallUV(r,a,xe-6,xe-3,xe-2,xe-1);P(Se[0]),P(Se[1]),P(Se[3]),P(Se[1]),P(Se[2]),P(Se[3])}function St(pe){a.push(p[pe*3+0]),a.push(p[pe*3+1]),a.push(p[pe*3+2])}function P(pe){l.push(pe.x),l.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return vy(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,u=e.shapes.length;l<u;l++){const d=t[e.shapes[l]];r.push(d)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new gf[a.type]().fromJSON(a)),new ic(r,e.options)}}const gy={generateTopUV:function(s,e,t,r,a){const l=e[t*3],u=e[t*3+1],d=e[r*3],p=e[r*3+1],f=e[a*3],g=e[a*3+1];return[new We(l,u),new We(d,p),new We(f,g)]},generateSideWallUV:function(s,e,t,r,a,l){const u=e[t*3],d=e[t*3+1],p=e[t*3+2],f=e[r*3],g=e[r*3+1],v=e[r*3+2],_=e[a*3],y=e[a*3+1],M=e[a*3+2],R=e[l*3],S=e[l*3+1],x=e[l*3+2];return Math.abs(d-g)<Math.abs(u-f)?[new We(u,1-p),new We(f,1-v),new We(_,1-M),new We(R,1-x)]:[new We(d,1-p),new We(g,1-v),new We(y,1-M),new We(S,1-x)]}};function vy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,a=s.length;r<a;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class po extends wi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(a),f=d+1,g=p+1,v=e/d,_=t/p,y=[],M=[],R=[],S=[];for(let x=0;x<g;x++){const U=x*_-u;for(let D=0;D<f;D++){const N=D*v-l;M.push(N,-U,0),R.push(0,0,1),S.push(D/d),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<d;U++){const D=U+f*x,N=U+f*(x+1),V=U+1+f*(x+1),z=U+1+f*x;y.push(D,N,z),y.push(N,V,z)}this.setIndex(y),this.setAttribute("position",new Un(M,3)),this.setAttribute("normal",new Un(R,3)),this.setAttribute("uv",new Un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}class zf extends wi{constructor(e=new nc([new We(0,.5),new We(-.5,-.5),new We(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],a=[],l=[],u=[];let d=0,p=0;if(Array.isArray(e)===!1)f(e);else for(let g=0;g<e.length;g++)f(e[g]),this.addGroup(d,p,g),d+=p,p=0;this.setIndex(r),this.setAttribute("position",new Un(a,3)),this.setAttribute("normal",new Un(l,3)),this.setAttribute("uv",new Un(u,2));function f(g){const v=a.length/3,_=g.extractPoints(t);let y=_.shape;const M=_.holes;Qi.isClockWise(y)===!1&&(y=y.reverse());for(let S=0,x=M.length;S<x;S++){const U=M[S];Qi.isClockWise(U)===!0&&(M[S]=U.reverse())}const R=Qi.triangulateShape(y,M);for(let S=0,x=M.length;S<x;S++){const U=M[S];y=y.concat(U)}for(let S=0,x=y.length;S<x;S++){const U=y[S];a.push(U.x,U.y,0),l.push(0,0,1),u.push(U.x,U.y)}for(let S=0,x=R.length;S<x;S++){const U=R[S],D=U[0]+v,N=U[1]+v,V=U[2]+v;r.push(D,N,V),p+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _y(t,e)}static fromJSON(e,t){const r=[];for(let a=0,l=e.shapes.length;a<l;a++){const u=t[e.shapes[a]];r.push(u)}return new zf(r,e.curveSegments)}}function _y(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const a=s[t];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e}class Zl extends wi{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],d=[],p=[],f=[],g=new j,v=new j,_=new j;for(let y=0;y<=r;y++)for(let M=0;M<=a;M++){const R=M/a*l,S=y/r*Math.PI*2;v.x=(e+t*Math.cos(S))*Math.cos(R),v.y=(e+t*Math.cos(S))*Math.sin(R),v.z=t*Math.sin(S),d.push(v.x,v.y,v.z),g.x=e*Math.cos(R),g.y=e*Math.sin(R),_.subVectors(v,g).normalize(),p.push(_.x,_.y,_.z),f.push(M/a),f.push(y/r)}for(let y=1;y<=r;y++)for(let M=1;M<=a;M++){const R=(a+1)*y+M-1,S=(a+1)*(y-1)+M-1,x=(a+1)*(y-1)+M,U=(a+1)*y+M;u.push(R,S,U),u.push(S,x,U)}this.setIndex(u),this.setAttribute("position",new Un(d,3)),this.setAttribute("normal",new Un(p,3)),this.setAttribute("uv",new Un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fv extends fo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gg,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kl extends fv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xy extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yy extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sy extends bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const md=new Xt,jm=new j,Xm=new j;class My{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ff,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;jm.setFromMatrixPosition(e.matrixWorld),t.position.copy(jm),Xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xm),t.updateMatrixWorld(),md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hv extends Zg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=f*this.view.offsetX,u=l+f*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ey extends My{constructor(){super(new hv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qm extends Sy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new Ey}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ty extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ym=new Xt;class wy{constructor(e,t,r=0,a=1/0){this.ray=new qg(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new If,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ym.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ym),this}intersectObject(e,t=!0,r=[]){return yf(e,this,r,t),r.sort($m),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)yf(e[a],this,r,t);return r.sort($m),r}}function $m(s,e){return s.distance-e.distance}function yf(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)yf(l[u],e,t,!0)}}function Km(s,e,t,r){const a=Ay(r);switch(t){case zg:return s*e;case Vg:return s*e/a.components*a.byteLength;case bf:return s*e/a.components*a.byteLength;case Hg:return s*e*2/a.components*a.byteLength;case Pf:return s*e*2/a.components*a.byteLength;case Bg:return s*e*3/a.components*a.byteLength;case Ti:return s*e*4/a.components*a.byteLength;case Nf:return s*e*4/a.components*a.byteLength;case Hl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Hd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Vd:return Math.max(s,8)*Math.max(e,8)/2;case Gd:case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case af:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case of:case lf:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case uf:case df:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ay(s){switch(s){case Di:case Ug:return{byteLength:1,components:1};case to:case Fg:case co:return{byteLength:2,components:1};case Cf:case Rf:return{byteLength:2,components:4};case us:case Af:case Zi:return{byteLength:4,components:1};case kg:case Og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pv(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Cy(s){const e=new WeakMap;function t(d,p){const f=d.array,g=d.usage,v=f.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,f,g),d.onUploadCallback();let y;if(f instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)y=s.HALF_FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=s.SHORT;else if(f instanceof Uint32Array)y=s.UNSIGNED_INT;else if(f instanceof Int32Array)y=s.INT;else if(f instanceof Int8Array)y=s.BYTE;else if(f instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,f){const g=p.array,v=p.updateRanges;if(s.bindBuffer(f,d),v.length===0)s.bufferSubData(f,0,g);else{v.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<v.length;y++){const M=v[_],R=v[y];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++_,v[_]=R)}v.length=_+1;for(let y=0,M=v.length;y<M;y++){const R=v[y];s.bufferSubData(f,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,p));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,d,p),f.version=d.version}}return{get:a,remove:l,update:u}}var Ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,by=`#ifdef USE_ALPHAHASH
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
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iy=`#ifdef USE_AOMAP
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
#endif`,Uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
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
#endif`,Hy=`#ifdef USE_BUMPMAP
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
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jy=`#define PI 3.141592653589793
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
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qy=`vec3 transformedNormal = objectNormal;
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
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rS="gl_FragColor = linearToOutputTexel( gl_FragColor );",sS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lS=`#ifdef USE_ENVMAP
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
#endif`,cS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uS=`#ifdef USE_ENVMAP
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
#endif`,dS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mS=`#ifdef USE_GRADIENTMAP
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
}`,gS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,yS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,SS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ES=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wS=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,AS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,CS=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RS=`#if defined( RE_IndirectDiffuse )
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
#endif`,bS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,US=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kS=`#if defined( USE_POINTS_UV )
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
#endif`,OS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
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
#endif`,WS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KS=`#ifdef USE_NORMALMAP
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
#endif`,JS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,dM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,hM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pM=`#ifdef USE_SKINNING
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
#endif`,mM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gM=`#ifdef USE_SKINNING
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
#endif`,vM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MM=`#ifdef USE_TRANSMISSION
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
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RM=`uniform sampler2D t2D;
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DM=`#include <common>
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
}`,IM=`#if DEPTH_PACKING == 3200
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
}`,UM=`#define DISTANCE
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
}`,FM=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`uniform float scale;
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
}`,BM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,HM=`uniform vec3 diffuse;
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
}`,GM=`#define LAMBERT
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
}`,WM=`#define LAMBERT
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
}`,jM=`#define MATCAP
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
}`,XM=`#define MATCAP
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
}`,qM=`#define NORMAL
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
}`,YM=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$M=`#define PHONG
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
}`,KM=`#define PHONG
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
}`,JM=`#define STANDARD
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
}`,ZM=`#define STANDARD
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
}`,QM=`#define TOON
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
}`,eE=`#define TOON
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
}`,tE=`uniform float size;
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#include <common>
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
}`,rE=`uniform vec3 color;
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
}`,sE=`uniform float rotation;
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
}`,aE=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:Ry,alphahash_pars_fragment:by,alphamap_fragment:Py,alphamap_pars_fragment:Ny,alphatest_fragment:Ly,alphatest_pars_fragment:Dy,aomap_fragment:Iy,aomap_pars_fragment:Uy,batching_pars_vertex:Fy,batching_vertex:ky,begin_vertex:Oy,beginnormal_vertex:zy,bsdfs:By,iridescence_fragment:Vy,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Gy,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:Xy,color_fragment:qy,color_pars_fragment:Yy,color_pars_vertex:$y,color_vertex:Ky,common:Jy,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Qy,displacementmap_pars_vertex:eS,displacementmap_vertex:tS,emissivemap_fragment:nS,emissivemap_pars_fragment:iS,colorspace_fragment:rS,colorspace_pars_fragment:sS,envmap_fragment:aS,envmap_common_pars_fragment:oS,envmap_pars_fragment:lS,envmap_pars_vertex:cS,envmap_physical_pars_fragment:yS,envmap_vertex:uS,fog_vertex:dS,fog_pars_vertex:fS,fog_fragment:hS,fog_pars_fragment:pS,gradientmap_pars_fragment:mS,lightmap_pars_fragment:gS,lights_lambert_fragment:vS,lights_lambert_pars_fragment:_S,lights_pars_begin:xS,lights_toon_fragment:SS,lights_toon_pars_fragment:MS,lights_phong_fragment:ES,lights_phong_pars_fragment:TS,lights_physical_fragment:wS,lights_physical_pars_fragment:AS,lights_fragment_begin:CS,lights_fragment_maps:RS,lights_fragment_end:bS,logdepthbuf_fragment:PS,logdepthbuf_pars_fragment:NS,logdepthbuf_pars_vertex:LS,logdepthbuf_vertex:DS,map_fragment:IS,map_pars_fragment:US,map_particle_fragment:FS,map_particle_pars_fragment:kS,metalnessmap_fragment:OS,metalnessmap_pars_fragment:zS,morphinstance_vertex:BS,morphcolor_vertex:VS,morphnormal_vertex:HS,morphtarget_pars_vertex:GS,morphtarget_vertex:WS,normal_fragment_begin:jS,normal_fragment_maps:XS,normal_pars_fragment:qS,normal_pars_vertex:YS,normal_vertex:$S,normalmap_pars_fragment:KS,clearcoat_normal_fragment_begin:JS,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:QS,iridescence_pars_fragment:eM,opaque_fragment:tM,packing:nM,premultiplied_alpha_fragment:iM,project_vertex:rM,dithering_fragment:sM,dithering_pars_fragment:aM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:lM,shadowmap_pars_fragment:cM,shadowmap_pars_vertex:uM,shadowmap_vertex:dM,shadowmask_pars_fragment:fM,skinbase_vertex:hM,skinning_pars_vertex:pM,skinning_vertex:mM,skinnormal_vertex:gM,specularmap_fragment:vM,specularmap_pars_fragment:_M,tonemapping_fragment:xM,tonemapping_pars_fragment:yM,transmission_fragment:SM,transmission_pars_fragment:MM,uv_pars_fragment:EM,uv_pars_vertex:TM,uv_vertex:wM,worldpos_vertex:AM,background_vert:CM,background_frag:RM,backgroundCube_vert:bM,backgroundCube_frag:PM,cube_vert:NM,cube_frag:LM,depth_vert:DM,depth_frag:IM,distanceRGBA_vert:UM,distanceRGBA_frag:FM,equirect_vert:kM,equirect_frag:OM,linedashed_vert:zM,linedashed_frag:BM,meshbasic_vert:VM,meshbasic_frag:HM,meshlambert_vert:GM,meshlambert_frag:WM,meshmatcap_vert:jM,meshmatcap_frag:XM,meshnormal_vert:qM,meshnormal_frag:YM,meshphong_vert:$M,meshphong_frag:KM,meshphysical_vert:JM,meshphysical_frag:ZM,meshtoon_vert:QM,meshtoon_frag:eE,points_vert:tE,points_frag:nE,shadow_vert:iE,shadow_frag:rE,sprite_vert:sE,sprite_frag:aE},qe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Ni={basic:{uniforms:Dn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Dn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Dn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Dn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Dn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Dn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Dn([qe.points,qe.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Dn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Dn([qe.common,qe.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Dn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Dn([qe.sprite,qe.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Dn([qe.common,qe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Dn([qe.lights,qe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Ni.physical={uniforms:Dn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Ol={r:0,b:0,g:0},rs=new Ii,oE=new Xt;function lE(s,e,t,r,a,l,u){const d=new Ct(0);let p=l===!0?0:1,f,g,v=null,_=0,y=null;function M(D){let N=D.isScene===!0?D.background:null;return N&&N.isTexture&&(N=(D.backgroundBlurriness>0?t:e).get(N)),N}function R(D){let N=!1;const V=M(D);V===null?x(d,p):V&&V.isColor&&(x(V,1),N=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,u):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,N){const V=M(N);V&&(V.isCubeTexture||V.mapping===tc)?(g===void 0&&(g=new Sn(new ho(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:oa(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,O,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),rs.copy(N.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(rs)),g.material.toneMapped=Dt.getTransfer(V.colorSpace)!==zt,(v!==V||_!==V.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=V,_=V.version,y=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(f===void 0&&(f=new Sn(new po(2,2),new Or({name:"BackgroundMaterial",uniforms:oa(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=V,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.toneMapped=Dt.getTransfer(V.colorSpace)!==zt,V.matrixAutoUpdate===!0&&V.updateMatrix(),f.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||_!==V.version||y!==s.toneMapping)&&(f.material.needsUpdate=!0,v=V,_=V.version,y=s.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null))}function x(D,N){D.getRGB(Ol,Jg(s)),r.buffers.color.setClear(Ol.r,Ol.g,Ol.b,N,u)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,N=1){d.set(D),p=N,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,x(d,p)},render:R,addToRenderList:S,dispose:U}}function cE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=_(null);let l=a,u=!1;function d(A,I,Z,oe,_e){let se=!1;const fe=v(oe,Z,I);l!==fe&&(l=fe,f(l.object)),se=y(A,oe,Z,_e),se&&M(A,oe,Z,_e),_e!==null&&e.update(_e,s.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,N(A,I,Z,oe),_e!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return s.createVertexArray()}function f(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function v(A,I,Z){const oe=Z.wireframe===!0;let _e=r[A.id];_e===void 0&&(_e={},r[A.id]=_e);let se=_e[I.id];se===void 0&&(se={},_e[I.id]=se);let fe=se[oe];return fe===void 0&&(fe=_(p()),se[oe]=fe),fe}function _(A){const I=[],Z=[],oe=[];for(let _e=0;_e<t;_e++)I[_e]=0,Z[_e]=0,oe[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Z,attributeDivisors:oe,object:A,attributes:{},index:null}}function y(A,I,Z,oe){const _e=l.attributes,se=I.attributes;let fe=0;const me=Z.getAttributes();for(const B in me)if(me[B].location>=0){const Q=_e[B];let k=se[B];if(k===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),Q===void 0||Q.attribute!==k||k&&Q.data!==k.data)return!0;fe++}return l.attributesNum!==fe||l.index!==oe}function M(A,I,Z,oe){const _e={},se=I.attributes;let fe=0;const me=Z.getAttributes();for(const B in me)if(me[B].location>=0){let Q=se[B];Q===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor));const k={};k.attribute=Q,Q&&Q.data&&(k.data=Q.data),_e[B]=k,fe++}l.attributes=_e,l.attributesNum=fe,l.index=oe}function R(){const A=l.newAttributes;for(let I=0,Z=A.length;I<Z;I++)A[I]=0}function S(A){x(A,0)}function x(A,I){const Z=l.newAttributes,oe=l.enabledAttributes,_e=l.attributeDivisors;Z[A]=1,oe[A]===0&&(s.enableVertexAttribArray(A),oe[A]=1),_e[A]!==I&&(s.vertexAttribDivisor(A,I),_e[A]=I)}function U(){const A=l.newAttributes,I=l.enabledAttributes;for(let Z=0,oe=I.length;Z<oe;Z++)I[Z]!==A[Z]&&(s.disableVertexAttribArray(Z),I[Z]=0)}function D(A,I,Z,oe,_e,se,fe){fe===!0?s.vertexAttribIPointer(A,I,Z,_e,se):s.vertexAttribPointer(A,I,Z,oe,_e,se)}function N(A,I,Z,oe){R();const _e=oe.attributes,se=Z.getAttributes(),fe=I.defaultAttributeValues;for(const me in se){const B=se[me];if(B.location>=0){let he=_e[me];if(he===void 0&&(me==="instanceMatrix"&&A.instanceMatrix&&(he=A.instanceMatrix),me==="instanceColor"&&A.instanceColor&&(he=A.instanceColor)),he!==void 0){const Q=he.normalized,k=he.itemSize,ee=e.get(he);if(ee===void 0)continue;const ze=ee.buffer,Ye=ee.type,Xe=ee.bytesPerElement,ie=Ye===s.INT||Ye===s.UNSIGNED_INT||he.gpuType===Af;if(he.isInterleavedBufferAttribute){const ve=he.data,we=ve.stride,ke=he.offset;if(ve.isInstancedInterleavedBuffer){for(let Ve=0;Ve<B.locationSize;Ve++)x(B.location+Ve,ve.meshPerAttribute);A.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<B.locationSize;Ve++)S(B.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let Ve=0;Ve<B.locationSize;Ve++)D(B.location+Ve,k/B.locationSize,Ye,Q,we*Xe,(ke+k/B.locationSize*Ve)*Xe,ie)}else{if(he.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)x(B.location+ve,he.meshPerAttribute);A.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let ve=0;ve<B.locationSize;ve++)D(B.location+ve,k/B.locationSize,Ye,Q,k*Xe,k/B.locationSize*ve*Xe,ie)}}else if(fe!==void 0){const Q=fe[me];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(B.location,Q);break;case 3:s.vertexAttrib3fv(B.location,Q);break;case 4:s.vertexAttrib4fv(B.location,Q);break;default:s.vertexAttrib1fv(B.location,Q)}}}}U()}function V(){Y();for(const A in r){const I=r[A];for(const Z in I){const oe=I[Z];for(const _e in oe)g(oe[_e].object),delete oe[_e];delete I[Z]}delete r[A]}}function z(A){if(r[A.id]===void 0)return;const I=r[A.id];for(const Z in I){const oe=I[Z];for(const _e in oe)g(oe[_e].object),delete oe[_e];delete I[Z]}delete r[A.id]}function O(A){for(const I in r){const Z=r[I];if(Z[A.id]===void 0)continue;const oe=Z[A.id];for(const _e in oe)g(oe[_e].object),delete oe[_e];delete Z[A.id]}}function Y(){w(),u=!0,l!==a&&(l=a,f(l.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:S,disableUnusedAttributes:U}}function uE(s,e,t){let r;function a(f){r=f}function l(f,g){s.drawArrays(r,f,g),t.update(g,r,1)}function u(f,g,v){v!==0&&(s.drawArraysInstanced(r,f,g,v),t.update(g,r,v))}function d(f,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,g,0,v);let y=0;for(let M=0;M<v;M++)y+=g[M];t.update(y,r,1)}function p(f,g,v,_){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<f.length;M++)u(f[M],g[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,f,0,g,0,_,0,v);let M=0;for(let R=0;R<v;R++)M+=g[R]*_[R];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function dE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==Ti&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const Y=O===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Di&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Zi&&!Y)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const g=p(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const v=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:N,vertexTextures:V,maxSamples:z}}function fE(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new as,d=new yt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||r!==0||a;return a=_,r=v.length,y},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,y){const M=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,x=s.get(v);if(!a||M===null||M.length===0||l&&!S)l?g(null):f();else{const U=l?0:r,D=U*4;let N=x.clippingState||null;p.value=N,N=g(M,_,D,y);for(let V=0;V!==D;++V)N[V]=t[V];x.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=U}};function f(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,y,M){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=p.value,M!==!0||S===null){const x=y+R*4,U=_.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,N=y;D!==R;++D,N+=4)u.copy(v[D]).applyMatrix4(U,d),u.normal.toArray(S,N),S[N+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function hE(s){let e=new WeakMap;function t(u,d){return d===Fd?u.mapping=ra:d===kd&&(u.mapping=sa),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Fd||d===kd)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const f=new Ix(p.height);return f.fromEquirectangularTexture(s,u),e.set(u,f),u.addEventListener("dispose",a),t(f.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const ea=4,Jm=[.125,.215,.35,.446,.526,.582],cs=20,gd=new hv,Zm=new Ct;let vd=null,_d=0,xd=0,yd=!1;const os=(1+Math.sqrt(5))/2,Zs=1/os,Qm=[new j(-os,Zs,0),new j(os,Zs,0),new j(-Zs,0,os),new j(Zs,0,os),new j(0,os,-Zs),new j(0,os,Zs),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],pE=new j;class Sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:d=pE}=l;vd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,_d,xd),this._renderer.xr.enabled=yd,e.scissorTest=!1,zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ra||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:co,format:Ti,colorSpace:aa,depthBuffer:!1},a=eg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mE(l)),this._blurMaterial=gE(l,e,t)}return a}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,gd)}_sceneToCubeUV(e,t,r,a,l){const p=new li(90,1,t,r),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(Zm),v.toneMapping=Ur,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null));const R=new Uf({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),S=new Sn(new ho,R);let x=!1;const U=e.background;U?U.isColor&&(R.color.copy(U),e.background=null,x=!0):(R.color.copy(Zm),x=!0);for(let D=0;D<6;D++){const N=D%3;N===0?(p.up.set(0,f[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+g[D],l.y,l.z)):N===1?(p.up.set(0,0,f[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+g[D],l.z)):(p.up.set(0,f[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+g[D]));const V=this._cubeSize;zl(a,N*V,D>2?V:0,V,V),v.setRenderTarget(a),x&&v.render(S,p),v.render(e,p)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=y,v.autoClear=_,e.background=U}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===ra||e.mapping===sa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new Sn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;zl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,gd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Qm[(a-l-1)%Qm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,d){const p=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Sn(this._lodPlanes[a],f),_=f.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*cs-1),R=l/M,S=isFinite(l)?1+Math.floor(g*R):cs;S>cs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${cs}`);const x=[];let U=0;for(let O=0;O<cs;++O){const Y=O/R,w=Math.exp(-Y*Y/2);x.push(w),O===0?U+=w:O<S&&(U+=2*w)}for(let O=0;O<x.length;O++)x[O]=x[O]/U;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:D}=this;_.dTheta.value=M,_.mipInt.value=D-r;const N=this._sizeLods[a],V=3*N*(a>D-ea?a-D+ea:0),z=4*(this._cubeSize-N);zl(t,V,z,3*N,2*N),p.setRenderTarget(t),p.render(v,gd)}}function mE(s){const e=[],t=[],r=[];let a=s;const l=s-ea+1+Jm.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);t.push(d);let p=1/d;u>s-ea?p=Jm[u-s+ea-1]:u===0&&(p=0),r.push(p);const f=1/(d-2),g=-f,v=1+f,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,R=3,S=2,x=1,U=new Float32Array(R*M*y),D=new Float32Array(S*M*y),N=new Float32Array(x*M*y);for(let z=0;z<y;z++){const O=z%3*2/3-1,Y=z>2?0:-1,w=[O,Y,0,O+2/3,Y,0,O+2/3,Y+1,0,O,Y,0,O+2/3,Y+1,0,O,Y+1,0];U.set(w,R*M*z),D.set(_,S*M*z);const A=[z,z,z,z,z,z];N.set(A,x*M*z)}const V=new wi;V.setAttribute("position",new Qn(U,R)),V.setAttribute("uv",new Qn(D,S)),V.setAttribute("faceIndex",new Qn(N,x)),e.push(V),a>ea&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function eg(s,e,t){const r=new ds(s,e,t);return r.texture.mapping=tc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function gE(s,e,t){const r=new Float32Array(cs),a=new j(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function tg(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function ng(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}function vE(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,f=p===Fd||p===kd,g=p===ra||p===sa;if(f||g){let v=e.get(d);const _=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return t===null&&(t=new Sf(s)),v=f?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return f&&y&&y.height>0||g&&y&&a(y)?(t===null&&(t=new Sf(s)),v=f?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function a(d){let p=0;const f=6;for(let g=0;g<f;g++)d[g]!==void 0&&p++;return p===f}function l(d){const p=d.target;p.removeEventListener("dispose",l);const f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function _E(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&so("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function xE(s,e,t,r){const a={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete a[_.id];const y=l.get(_);y&&(e.remove(y),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(v,_){return a[_.id]===!0||(_.addEventListener("dispose",u),a[_.id]=!0,t.memory.geometries++),_}function p(v){const _=v.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function f(v){const _=[],y=v.index,M=v.attributes.position;let R=0;if(y!==null){const U=y.array;R=y.version;for(let D=0,N=U.length;D<N;D+=3){const V=U[D+0],z=U[D+1],O=U[D+2];_.push(V,z,z,O,O,V)}}else if(M!==void 0){const U=M.array;R=M.version;for(let D=0,N=U.length/3-1;D<N;D+=3){const V=D+0,z=D+1,O=D+2;_.push(V,z,z,O,O,V)}}else return;const S=new(jg(_)?Kg:$g)(_,1);S.version=R;const x=l.get(v);x&&e.remove(x),l.set(v,S)}function g(v){const _=l.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&f(v)}else f(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function yE(s,e,t){let r;function a(_){r=_}let l,u;function d(_){l=_.type,u=_.bytesPerElement}function p(_,y){s.drawElements(r,y,l,_*u),t.update(y,r,1)}function f(_,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,_*u,M),t.update(y,r,M))}function g(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,r,1)}function v(_,y,M,R){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)f(_[x]/u,y[x],R[x]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,_,0,R,0,M);let x=0;for(let U=0;U<M;U++)x+=y[U]*R[U];t.update(x,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function SE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function ME(s,e,t){const r=new WeakMap,a=new en;function l(u,d,p){const f=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let A=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var y=A;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let N=0;M===!0&&(N=1),R===!0&&(N=2),S===!0&&(N=3);let V=d.attributes.position.count*N,z=1;V>e.maxTextureSize&&(z=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const O=new Float32Array(V*z*4*v),Y=new Xg(O,V,z,v);Y.type=Zi,Y.needsUpdate=!0;const w=N*4;for(let I=0;I<v;I++){const Z=x[I],oe=U[I],_e=D[I],se=V*z*4*I;for(let fe=0;fe<Z.count;fe++){const me=fe*w;M===!0&&(a.fromBufferAttribute(Z,fe),O[se+me+0]=a.x,O[se+me+1]=a.y,O[se+me+2]=a.z,O[se+me+3]=0),R===!0&&(a.fromBufferAttribute(oe,fe),O[se+me+4]=a.x,O[se+me+5]=a.y,O[se+me+6]=a.z,O[se+me+7]=0),S===!0&&(a.fromBufferAttribute(_e,fe),O[se+me+8]=a.x,O[se+me+9]=a.y,O[se+me+10]=a.z,O[se+me+11]=_e.itemSize===4?a.w:1)}}_={count:v,texture:Y,size:new We(V,z)},r.set(d,_),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<f.length;S++)M+=f[S];const R=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",f)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function EE(s,e,t,r){let a=new WeakMap;function l(p){const f=r.render.frame,g=p.geometry,v=e.get(p,g);if(a.get(v)!==f&&(e.update(v),a.set(v,f)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==f&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,f))),p.isSkinnedMesh){const _=p.skeleton;a.get(_)!==f&&(_.update(),a.set(_,f))}return v}function u(){a=new WeakMap}function d(p){const f=p.target;f.removeEventListener("dispose",d),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:l,dispose:u}}const mv=new Rn,ig=new tv(1,1),gv=new Xg,vv=new vx,_v=new Qg,rg=[],sg=[],ag=new Float32Array(16),og=new Float32Array(9),lg=new Float32Array(4);function da(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=rg[a];if(l===void 0&&(l=new Float32Array(a),rg[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function dn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function rc(s,e){let t=sg[e];t===void 0&&(t=new Int32Array(e),sg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function TE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function AE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function CE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function RE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,r))return;lg.set(r),s.uniformMatrix2fv(this.addr,!1,lg),fn(t,r)}}function bE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,r))return;og.set(r),s.uniformMatrix3fv(this.addr,!1,og),fn(t,r)}}function PE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,r))return;ag.set(r),s.uniformMatrix4fv(this.addr,!1,ag),fn(t,r)}}function NE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function LE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function DE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function IE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function UE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function FE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function kE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function OE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function zE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(ig.compareFunction=Wg,l=ig):l=mv,t.setTexture2D(e||l,a)}function BE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||vv,a)}function VE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||_v,a)}function HE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||gv,a)}function GE(s){switch(s){case 5126:return TE;case 35664:return wE;case 35665:return AE;case 35666:return CE;case 35674:return RE;case 35675:return bE;case 35676:return PE;case 5124:case 35670:return NE;case 35667:case 35671:return LE;case 35668:case 35672:return DE;case 35669:case 35673:return IE;case 5125:return UE;case 36294:return FE;case 36295:return kE;case 36296:return OE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return BE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return HE}}function WE(s,e){s.uniform1fv(this.addr,e)}function jE(s,e){const t=da(e,this.size,2);s.uniform2fv(this.addr,t)}function XE(s,e){const t=da(e,this.size,3);s.uniform3fv(this.addr,t)}function qE(s,e){const t=da(e,this.size,4);s.uniform4fv(this.addr,t)}function YE(s,e){const t=da(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $E(s,e){const t=da(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function KE(s,e){const t=da(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function JE(s,e){s.uniform1iv(this.addr,e)}function ZE(s,e){s.uniform2iv(this.addr,e)}function QE(s,e){s.uniform3iv(this.addr,e)}function e1(s,e){s.uniform4iv(this.addr,e)}function t1(s,e){s.uniform1uiv(this.addr,e)}function n1(s,e){s.uniform2uiv(this.addr,e)}function i1(s,e){s.uniform3uiv(this.addr,e)}function r1(s,e){s.uniform4uiv(this.addr,e)}function s1(s,e,t){const r=this.cache,a=e.length,l=rc(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||mv,l[u])}function a1(s,e,t){const r=this.cache,a=e.length,l=rc(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||vv,l[u])}function o1(s,e,t){const r=this.cache,a=e.length,l=rc(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||_v,l[u])}function l1(s,e,t){const r=this.cache,a=e.length,l=rc(t,a);dn(r,l)||(s.uniform1iv(this.addr,l),fn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||gv,l[u])}function c1(s){switch(s){case 5126:return WE;case 35664:return jE;case 35665:return XE;case 35666:return qE;case 35674:return YE;case 35675:return $E;case 35676:return KE;case 5124:case 35670:return JE;case 35667:case 35671:return ZE;case 35668:case 35672:return QE;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}class u1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=GE(t.type)}}class d1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c1(t.type)}}class f1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function cg(s,e){s.seq.push(e),s.map[e.id]=e}function h1(s,e,t){const r=s.name,a=r.length;for(Sd.lastIndex=0;;){const l=Sd.exec(r),u=Sd.lastIndex;let d=l[1];const p=l[2]==="]",f=l[3];if(p&&(d=d|0),f===void 0||f==="["&&u+2===a){cg(t,f===void 0?new u1(d,s,e):new d1(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new f1(d),cg(t,v)),t=v}}}class Xl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);h1(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function ug(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const p1=37297;let m1=0;function g1(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const dg=new yt;function v1(s){Dt._getMatrix(dg,Dt.workingColorSpace,s);const e=`mat3( ${dg.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(s)){case $l:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function fg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+g1(s.getShaderSource(e),d)}else return l}function _1(s,e){const t=v1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x1(s,e){let t;switch(e){case X_:t="Linear";break;case q_:t="Reinhard";break;case Y_:t="Cineon";break;case $_:t="ACESFilmic";break;case J_:t="AgX";break;case Dg:t="Neutral";break;case K_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bl=new j;function y1(){Dt.getLuminanceCoefficients(Bl);const s=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function M1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function E1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Ka(s){return s!==""}function hg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mf(s){return s.replace(T1,A1)}const w1=new Map;function A1(s,e){let t=Mt[e];if(t===void 0){const r=w1.get(e);if(r!==void 0)t=Mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Mf(t)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(s){return s.replace(C1,R1)}function R1(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function gg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===w_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function P1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ra:case sa:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case sa:e="ENVMAP_MODE_REFRACTION";break}return e}function L1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lg:e="ENVMAP_BLENDING_MULTIPLY";break;case W_:e="ENVMAP_BLENDING_MIX";break;case j_:e="ENVMAP_BLENDING_ADD";break}return e}function D1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function I1(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=b1(t),f=P1(t),g=N1(t),v=L1(t),_=D1(t),y=S1(t),M=M1(l),R=a.createProgram();let S,x,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ka).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ka).join(`
`),x.length>0&&(x+=`
`)):(S=[gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),x=[gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Ur?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,_1("linearToOutputTexel",t.outputColorSpace),y1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),u=Mf(u),u=hg(u,t),u=pg(u,t),d=Mf(d),d=hg(d,t),d=pg(d,t),u=mg(u),d=mg(d),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=U+S+u,N=U+x+d,V=ug(a,a.VERTEX_SHADER,D),z=ug(a,a.FRAGMENT_SHADER,N);a.attachShader(R,V),a.attachShader(R,z),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function O(I){if(s.debug.checkShaderErrors){const Z=a.getProgramInfoLog(R)||"",oe=a.getShaderInfoLog(V)||"",_e=a.getShaderInfoLog(z)||"",se=Z.trim(),fe=oe.trim(),me=_e.trim();let B=!0,he=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,V,z);else{const Q=fg(a,V,"vertex"),k=fg(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+se+`
`+Q+`
`+k)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(fe===""||me==="")&&(he=!1);he&&(I.diagnostics={runnable:B,programLog:se,vertexShader:{log:fe,prefix:S},fragmentShader:{log:me,prefix:x}})}a.deleteShader(V),a.deleteShader(z),Y=new Xl(a,R),w=E1(a,R)}let Y;this.getUniforms=function(){return Y===void 0&&O(this),Y};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,p1)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=z,this}let U1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new k1(e),t.set(e,r)),r}}class k1{constructor(e){this.id=U1++,this.code=e,this.usedTimes=0}}function O1(s,e,t,r,a,l,u){const d=new If,p=new F1,f=new Set,g=[],v=a.logarithmicDepthBuffer,_=a.vertexTextures;let y=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return f.add(w),w===0?"uv":`uv${w}`}function S(w,A,I,Z,oe){const _e=Z.fog,se=oe.geometry,fe=w.isMeshStandardMaterial?Z.environment:null,me=(w.isMeshStandardMaterial?t:e).get(w.envMap||fe),B=me&&me.mapping===tc?me.image.height:null,he=M[w.type];w.precision!==null&&(y=a.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const Q=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,k=Q!==void 0?Q.length:0;let ee=0;se.morphAttributes.position!==void 0&&(ee=1),se.morphAttributes.normal!==void 0&&(ee=2),se.morphAttributes.color!==void 0&&(ee=3);let ze,Ye,Xe,ie;if(he){const wt=Ni[he];ze=wt.vertexShader,Ye=wt.fragmentShader}else ze=w.vertexShader,Ye=w.fragmentShader,p.update(w),Xe=p.getVertexShaderID(w),ie=p.getFragmentShaderID(w);const ve=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),ke=oe.isInstancedMesh===!0,Ve=oe.isBatchedMesh===!0,mt=!!w.map,St=!!w.matcap,P=!!me,pe=!!w.aoMap,ne=!!w.lightMap,re=!!w.bumpMap,ae=!!w.normalMap,xe=!!w.displacementMap,Se=!!w.emissiveMap,Ae=!!w.metalnessMap,at=!!w.roughnessMap,rt=w.anisotropy>0,L=w.clearcoat>0,T=w.dispersion>0,G=w.iridescence>0,de=w.sheen>0,Me=w.transmission>0,ge=rt&&!!w.anisotropyMap,Ze=L&&!!w.clearcoatMap,Pe=L&&!!w.clearcoatNormalMap,Be=L&&!!w.clearcoatRoughnessMap,$e=G&&!!w.iridescenceMap,Re=G&&!!w.iridescenceThicknessMap,je=de&&!!w.sheenColorMap,ut=de&&!!w.sheenRoughnessMap,tt=!!w.specularMap,He=!!w.specularColorMap,pt=!!w.specularIntensityMap,W=Me&&!!w.transmissionMap,De=Me&&!!w.thicknessMap,Ue=!!w.gradientMap,Ge=!!w.alphaMap,Ne=w.alphaTest>0,ye=!!w.alphaHash,Qe=!!w.extensions;let gt=Ur;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(gt=s.toneMapping);const It={shaderID:he,shaderType:w.type,shaderName:w.name,vertexShader:ze,fragmentShader:Ye,defines:w.defines,customVertexShaderID:Xe,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Ve,batchingColor:Ve&&oe._colorsTexture!==null,instancing:ke,instancingColor:ke&&oe.instanceColor!==null,instancingMorph:ke&&oe.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:aa,alphaToCoverage:!!w.alphaToCoverage,map:mt,matcap:St,envMap:P,envMapMode:P&&me.mapping,envMapCubeUVHeight:B,aoMap:pe,lightMap:ne,bumpMap:re,normalMap:ae,displacementMap:_&&xe,emissiveMap:Se,normalMapObjectSpace:ae&&w.normalMapType===tx,normalMapTangentSpace:ae&&w.normalMapType===Gg,metalnessMap:Ae,roughnessMap:at,anisotropy:rt,anisotropyMap:ge,clearcoat:L,clearcoatMap:Ze,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Be,dispersion:T,iridescence:G,iridescenceMap:$e,iridescenceThicknessMap:Re,sheen:de,sheenColorMap:je,sheenRoughnessMap:ut,specularMap:tt,specularColorMap:He,specularIntensityMap:pt,transmission:Me,transmissionMap:W,thicknessMap:De,gradientMap:Ue,opaque:w.transparent===!1&&w.blending===ta&&w.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ne,alphaHash:ye,combine:w.combine,mapUv:mt&&R(w.map.channel),aoMapUv:pe&&R(w.aoMap.channel),lightMapUv:ne&&R(w.lightMap.channel),bumpMapUv:re&&R(w.bumpMap.channel),normalMapUv:ae&&R(w.normalMap.channel),displacementMapUv:xe&&R(w.displacementMap.channel),emissiveMapUv:Se&&R(w.emissiveMap.channel),metalnessMapUv:Ae&&R(w.metalnessMap.channel),roughnessMapUv:at&&R(w.roughnessMap.channel),anisotropyMapUv:ge&&R(w.anisotropyMap.channel),clearcoatMapUv:Ze&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:je&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:ut&&R(w.sheenRoughnessMap.channel),specularMapUv:tt&&R(w.specularMap.channel),specularColorMapUv:He&&R(w.specularColorMap.channel),specularIntensityMapUv:pt&&R(w.specularIntensityMap.channel),transmissionMapUv:W&&R(w.transmissionMap.channel),thicknessMapUv:De&&R(w.thicknessMap.channel),alphaMapUv:Ge&&R(w.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(ae||rt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!se.attributes.uv&&(mt||Ge),fog:!!_e,useFog:w.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:oe.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:gt,decodeVideoTexture:mt&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===zt,decodeVideoTextureEmissive:Se&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Si,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Qe&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&w.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=f.has(1),It.vertexUv2s=f.has(2),It.vertexUv3s=f.has(3),f.clear(),It}function x(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)A.push(I),A.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(U(A,w),D(A,w),A.push(s.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function U(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function D(w,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reversedDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),w.push(d.mask)}function N(w){const A=M[w.type];let I;if(A){const Z=Ni[A];I=Px.clone(Z.uniforms)}else I=w.uniforms;return I}function V(w,A){let I;for(let Z=0,oe=g.length;Z<oe;Z++){const _e=g[Z];if(_e.cacheKey===A){I=_e,++I.usedTimes;break}}return I===void 0&&(I=new I1(s,A,w,l),g.push(I)),I}function z(w){if(--w.usedTimes===0){const A=g.indexOf(w);g[A]=g[g.length-1],g.pop(),w.destroy()}}function O(w){p.remove(w)}function Y(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:N,acquireProgram:V,releaseProgram:z,releaseShaderCache:O,programs:g,dispose:Y}}function z1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function B1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _g(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(v,_,y,M,R,S){let x=s[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:M,renderOrder:v.renderOrder,z:R,group:S},s[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=v.renderOrder,x.z=R,x.group=S),e++,x}function d(v,_,y,M,R,S){const x=u(v,_,y,M,R,S);y.transmission>0?r.push(x):y.transparent===!0?a.push(x):t.push(x)}function p(v,_,y,M,R,S){const x=u(v,_,y,M,R,S);y.transmission>0?r.unshift(x):y.transparent===!0?a.unshift(x):t.unshift(x)}function f(v,_){t.length>1&&t.sort(v||B1),r.length>1&&r.sort(_||vg),a.length>1&&a.sort(_||vg)}function g(){for(let v=e,_=s.length;v<_;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:d,unshift:p,finish:g,sort:f}}function V1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new _g,s.set(r,[u])):a>=l.length?(u=new _g,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function H1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Ct};break;case"SpotLight":t={position:new j,direction:new j,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=t,t}}}function G1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let W1=0;function j1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function X1(s){const e=new H1,t=G1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new j);const a=new j,l=new Xt,u=new Xt;function d(f){let g=0,v=0,_=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,M=0,R=0,S=0,x=0,U=0,D=0,N=0,V=0,z=0,O=0;f.sort(j1);for(let w=0,A=f.length;w<A;w++){const I=f[w],Z=I.color,oe=I.intensity,_e=I.distance,se=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=Z.r*oe,v+=Z.g*oe,_+=Z.b*oe;else if(I.isLightProbe){for(let fe=0;fe<9;fe++)r.probe[fe].addScaledVector(I.sh.coefficients[fe],oe);O++}else if(I.isDirectionalLight){const fe=e.get(I);if(fe.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const me=I.shadow,B=t.get(I);B.shadowIntensity=me.intensity,B.shadowBias=me.bias,B.shadowNormalBias=me.normalBias,B.shadowRadius=me.radius,B.shadowMapSize=me.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=se,r.directionalShadowMatrix[y]=I.shadow.matrix,U++}r.directional[y]=fe,y++}else if(I.isSpotLight){const fe=e.get(I);fe.position.setFromMatrixPosition(I.matrixWorld),fe.color.copy(Z).multiplyScalar(oe),fe.distance=_e,fe.coneCos=Math.cos(I.angle),fe.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),fe.decay=I.decay,r.spot[R]=fe;const me=I.shadow;if(I.map&&(r.spotLightMap[V]=I.map,V++,me.updateMatrices(I),I.castShadow&&z++),r.spotLightMatrix[R]=me.matrix,I.castShadow){const B=t.get(I);B.shadowIntensity=me.intensity,B.shadowBias=me.bias,B.shadowNormalBias=me.normalBias,B.shadowRadius=me.radius,B.shadowMapSize=me.mapSize,r.spotShadow[R]=B,r.spotShadowMap[R]=se,N++}R++}else if(I.isRectAreaLight){const fe=e.get(I);fe.color.copy(Z).multiplyScalar(oe),fe.halfWidth.set(I.width*.5,0,0),fe.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=fe,S++}else if(I.isPointLight){const fe=e.get(I);if(fe.color.copy(I.color).multiplyScalar(I.intensity),fe.distance=I.distance,fe.decay=I.decay,I.castShadow){const me=I.shadow,B=t.get(I);B.shadowIntensity=me.intensity,B.shadowBias=me.bias,B.shadowNormalBias=me.normalBias,B.shadowRadius=me.radius,B.shadowMapSize=me.mapSize,B.shadowCameraNear=me.camera.near,B.shadowCameraFar=me.camera.far,r.pointShadow[M]=B,r.pointShadowMap[M]=se,r.pointShadowMatrix[M]=I.shadow.matrix,D++}r.point[M]=fe,M++}else if(I.isHemisphereLight){const fe=e.get(I);fe.skyColor.copy(I.color).multiplyScalar(oe),fe.groundColor.copy(I.groundColor).multiplyScalar(oe),r.hemi[x]=fe,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const Y=r.hash;(Y.directionalLength!==y||Y.pointLength!==M||Y.spotLength!==R||Y.rectAreaLength!==S||Y.hemiLength!==x||Y.numDirectionalShadows!==U||Y.numPointShadows!==D||Y.numSpotShadows!==N||Y.numSpotMaps!==V||Y.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=N+V-z,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=O,Y.directionalLength=y,Y.pointLength=M,Y.spotLength=R,Y.rectAreaLength=S,Y.hemiLength=x,Y.numDirectionalShadows=U,Y.numPointShadows=D,Y.numSpotShadows=N,Y.numSpotMaps=V,Y.numLightProbes=O,r.version=W1++)}function p(f,g){let v=0,_=0,y=0,M=0,R=0;const S=g.matrixWorldInverse;for(let x=0,U=f.length;x<U;x++){const D=f[x];if(D.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(S),v++}else if(D.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const N=r.rectArea[M];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(S),u.identity(),l.copy(D.matrixWorld),l.premultiply(S),u.extractRotation(l),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(S),_++}else if(D.isHemisphereLight){const N=r.hemi[R];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(S),R++}}}return{setup:d,setupView:p,state:r}}function xg(s){const e=new X1(s),t=[],r=[];function a(g){f.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function u(g){r.push(g)}function d(){e.setup(t)}function p(g){e.setupView(t,g)}const f={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function q1(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new xg(s),e.set(a,[d])):l>=u.length?(d=new xg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`;function K1(s,e,t){let r=new Ff;const a=new We,l=new We,u=new en,d=new xy({depthPacking:ex}),p=new yy,f={},g=t.maxTextureSize,v={[Fr]:Wn,[Wn]:Fr,[Si]:Si},_=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Y1,fragmentShader:$1}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new wi;M.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Sn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ng;let x=this.type;this.render=function(z,O,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const w=s.getRenderTarget(),A=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Ir),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const oe=x!==Ji&&this.type===Ji,_e=x===Ji&&this.type!==Ji;for(let se=0,fe=z.length;se<fe;se++){const me=z[se],B=me.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const he=B.getFrameExtents();if(a.multiply(he),l.copy(B.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/he.x),a.x=l.x*he.x,B.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/he.y),a.y=l.y*he.y,B.mapSize.y=l.y)),B.map===null||oe===!0||_e===!0){const k=this.type!==Ji?{minFilter:Zn,magFilter:Zn}:{};B.map!==null&&B.map.dispose(),B.map=new ds(a.x,a.y,k),B.map.texture.name=me.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const Q=B.getViewportCount();for(let k=0;k<Q;k++){const ee=B.getViewport(k);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),Z.viewport(u),B.updateMatrices(me,k),r=B.getFrustum(),N(O,Y,B.camera,me,this.type)}B.isPointLightShadow!==!0&&this.type===Ji&&U(B,Y),B.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(w,A,I)};function U(z,O){const Y=e.update(R);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ds(a.x,a.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(O,null,Y,_,R,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(O,null,Y,y,R,null)}function D(z,O,Y,w){let A=null;const I=Y.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(I!==void 0)A=I;else if(A=Y.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=A.uuid,oe=O.uuid;let _e=f[Z];_e===void 0&&(_e={},f[Z]=_e);let se=_e[oe];se===void 0&&(se=A.clone(),_e[oe]=se,O.addEventListener("dispose",V)),A=se}if(A.visible=O.visible,A.wireframe=O.wireframe,w===Ji?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:v[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,Y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Z=s.properties.get(A);Z.light=Y}return A}function N(z,O,Y,w,A){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Ji)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,z.matrixWorld);const oe=e.update(z),_e=z.material;if(Array.isArray(_e)){const se=oe.groups;for(let fe=0,me=se.length;fe<me;fe++){const B=se[fe],he=_e[B.materialIndex];if(he&&he.visible){const Q=D(z,he,w,A);z.onBeforeShadow(s,z,O,Y,oe,Q,B),s.renderBufferDirect(Y,null,oe,Q,z,B),z.onAfterShadow(s,z,O,Y,oe,Q,B)}}}else if(_e.visible){const se=D(z,_e,w,A);z.onBeforeShadow(s,z,O,Y,oe,se,null),s.renderBufferDirect(Y,null,oe,se,z,null),z.onAfterShadow(s,z,O,Y,oe,se,null)}}const Z=z.children;for(let oe=0,_e=Z.length;oe<_e;oe++)N(Z[oe],O,Y,w,A)}function V(z){z.target.removeEventListener("dispose",V);for(const Y in f){const w=f[Y],A=z.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const J1={[bd]:Pd,[Nd]:Id,[Ld]:Ud,[ia]:Dd,[Pd]:bd,[Id]:Nd,[Ud]:Ld,[Dd]:ia};function Z1(s,e){function t(){let W=!1;const De=new en;let Ue=null;const Ge=new en(0,0,0,0);return{setMask:function(Ne){Ue!==Ne&&!W&&(s.colorMask(Ne,Ne,Ne,Ne),Ue=Ne)},setLocked:function(Ne){W=Ne},setClear:function(Ne,ye,Qe,gt,It){It===!0&&(Ne*=gt,ye*=gt,Qe*=gt),De.set(Ne,ye,Qe,gt),Ge.equals(De)===!1&&(s.clearColor(Ne,ye,Qe,gt),Ge.copy(De))},reset:function(){W=!1,Ue=null,Ge.set(-1,0,0,0)}}}function r(){let W=!1,De=!1,Ue=null,Ge=null,Ne=null;return{setReversed:function(ye){if(De!==ye){const Qe=e.get("EXT_clip_control");ye?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),De=ye;const gt=Ne;Ne=null,this.setClear(gt)}},getReversed:function(){return De},setTest:function(ye){ye?ve(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(ye){Ue!==ye&&!W&&(s.depthMask(ye),Ue=ye)},setFunc:function(ye){if(De&&(ye=J1[ye]),Ge!==ye){switch(ye){case bd:s.depthFunc(s.NEVER);break;case Pd:s.depthFunc(s.ALWAYS);break;case Nd:s.depthFunc(s.LESS);break;case ia:s.depthFunc(s.LEQUAL);break;case Ld:s.depthFunc(s.EQUAL);break;case Dd:s.depthFunc(s.GEQUAL);break;case Id:s.depthFunc(s.GREATER);break;case Ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ge=ye}},setLocked:function(ye){W=ye},setClear:function(ye){Ne!==ye&&(De&&(ye=1-ye),s.clearDepth(ye),Ne=ye)},reset:function(){W=!1,Ue=null,Ge=null,Ne=null,De=!1}}}function a(){let W=!1,De=null,Ue=null,Ge=null,Ne=null,ye=null,Qe=null,gt=null,It=null;return{setTest:function(wt){W||(wt?ve(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(wt){De!==wt&&!W&&(s.stencilMask(wt),De=wt)},setFunc:function(wt,hn,rn){(Ue!==wt||Ge!==hn||Ne!==rn)&&(s.stencilFunc(wt,hn,rn),Ue=wt,Ge=hn,Ne=rn)},setOp:function(wt,hn,rn){(ye!==wt||Qe!==hn||gt!==rn)&&(s.stencilOp(wt,hn,rn),ye=wt,Qe=hn,gt=rn)},setLocked:function(wt){W=wt},setClear:function(wt){It!==wt&&(s.clearStencil(wt),It=wt)},reset:function(){W=!1,De=null,Ue=null,Ge=null,Ne=null,ye=null,Qe=null,gt=null,It=null}}}const l=new t,u=new r,d=new a,p=new WeakMap,f=new WeakMap;let g={},v={},_=new WeakMap,y=[],M=null,R=!1,S=null,x=null,U=null,D=null,N=null,V=null,z=null,O=new Ct(0,0,0),Y=0,w=!1,A=null,I=null,Z=null,oe=null,_e=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,me=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(B)[1]),fe=me>=1):B.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),fe=me>=2);let he=null,Q={};const k=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),ze=new en().fromArray(k),Ye=new en().fromArray(ee);function Xe(W,De,Ue,Ge){const Ne=new Uint8Array(4),ye=s.createTexture();s.bindTexture(W,ye),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<Ue;Qe++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ge,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(De+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return ye}const ie={};ie[s.TEXTURE_2D]=Xe(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),u.setFunc(ia),re(!1),ae(vm),ve(s.CULL_FACE),pe(Ir);function ve(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function we(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function ke(W,De){return v[W]!==De?(s.bindFramebuffer(W,De),v[W]=De,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=De),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Ve(W,De){let Ue=y,Ge=!1;if(W){Ue=_.get(De),Ue===void 0&&(Ue=[],_.set(De,Ue));const Ne=W.textures;if(Ue.length!==Ne.length||Ue[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Qe=Ne.length;ye<Qe;ye++)Ue[ye]=s.COLOR_ATTACHMENT0+ye;Ue.length=Ne.length,Ge=!0}}else Ue[0]!==s.BACK&&(Ue[0]=s.BACK,Ge=!0);Ge&&s.drawBuffers(Ue)}function mt(W){return M!==W?(s.useProgram(W),M=W,!0):!1}const St={[ls]:s.FUNC_ADD,[C_]:s.FUNC_SUBTRACT,[R_]:s.FUNC_REVERSE_SUBTRACT};St[b_]=s.MIN,St[P_]=s.MAX;const P={[N_]:s.ZERO,[L_]:s.ONE,[D_]:s.SRC_COLOR,[Cd]:s.SRC_ALPHA,[z_]:s.SRC_ALPHA_SATURATE,[k_]:s.DST_COLOR,[U_]:s.DST_ALPHA,[I_]:s.ONE_MINUS_SRC_COLOR,[Rd]:s.ONE_MINUS_SRC_ALPHA,[O_]:s.ONE_MINUS_DST_COLOR,[F_]:s.ONE_MINUS_DST_ALPHA,[B_]:s.CONSTANT_COLOR,[V_]:s.ONE_MINUS_CONSTANT_COLOR,[H_]:s.CONSTANT_ALPHA,[G_]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(W,De,Ue,Ge,Ne,ye,Qe,gt,It,wt){if(W===Ir){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(ve(s.BLEND),R=!0),W!==A_){if(W!==S||wt!==w){if((x!==ls||N!==ls)&&(s.blendEquation(s.FUNC_ADD),x=ls,N=ls),wt)switch(W){case ta:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFunc(s.ONE,s.ONE);break;case xm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ym:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ta:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _m:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case xm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ym:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,D=null,V=null,z=null,O.set(0,0,0),Y=0,S=W,w=wt}return}Ne=Ne||De,ye=ye||Ue,Qe=Qe||Ge,(De!==x||Ne!==N)&&(s.blendEquationSeparate(St[De],St[Ne]),x=De,N=Ne),(Ue!==U||Ge!==D||ye!==V||Qe!==z)&&(s.blendFuncSeparate(P[Ue],P[Ge],P[ye],P[Qe]),U=Ue,D=Ge,V=ye,z=Qe),(gt.equals(O)===!1||It!==Y)&&(s.blendColor(gt.r,gt.g,gt.b,It),O.copy(gt),Y=It),S=W,w=!1}function ne(W,De){W.side===Si?we(s.CULL_FACE):ve(s.CULL_FACE);let Ue=W.side===Wn;De&&(Ue=!Ue),re(Ue),W.blending===ta&&W.transparent===!1?pe(Ir):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ge=W.stencilWrite;d.setTest(Ge),Ge&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Se(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){A!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),A=W)}function ae(W){W!==E_?(ve(s.CULL_FACE),W!==I&&(W===vm?s.cullFace(s.BACK):W===T_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),I=W}function xe(W){W!==Z&&(fe&&s.lineWidth(W),Z=W)}function Se(W,De,Ue){W?(ve(s.POLYGON_OFFSET_FILL),(oe!==De||_e!==Ue)&&(s.polygonOffset(De,Ue),oe=De,_e=Ue)):we(s.POLYGON_OFFSET_FILL)}function Ae(W){W?ve(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function at(W){W===void 0&&(W=s.TEXTURE0+se-1),he!==W&&(s.activeTexture(W),he=W)}function rt(W,De,Ue){Ue===void 0&&(he===null?Ue=s.TEXTURE0+se-1:Ue=he);let Ge=Q[Ue];Ge===void 0&&(Ge={type:void 0,texture:void 0},Q[Ue]=Ge),(Ge.type!==W||Ge.texture!==De)&&(he!==Ue&&(s.activeTexture(Ue),he=Ue),s.bindTexture(W,De||ie[W]),Ge.type=W,Ge.texture=De)}function L(){const W=Q[he];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Be(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(W){ze.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ze.copy(W))}function ut(W){Ye.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ye.copy(W))}function tt(W,De){let Ue=f.get(De);Ue===void 0&&(Ue=new WeakMap,f.set(De,Ue));let Ge=Ue.get(W);Ge===void 0&&(Ge=s.getUniformBlockIndex(De,W.name),Ue.set(W,Ge))}function He(W,De){const Ge=f.get(De).get(W);p.get(De)!==Ge&&(s.uniformBlockBinding(De,Ge,W.__bindingPointIndex),p.set(De,Ge))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},he=null,Q={},v={},_=new WeakMap,y=[],M=null,R=!1,S=null,x=null,U=null,D=null,N=null,V=null,z=null,O=new Ct(0,0,0),Y=0,w=!1,A=null,I=null,Z=null,oe=null,_e=null,ze.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ve,disable:we,bindFramebuffer:ke,drawBuffers:Ve,useProgram:mt,setBlending:pe,setMaterial:ne,setFlipSided:re,setCullFace:ae,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ae,activeTexture:at,bindTexture:rt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:G,texImage2D:$e,texImage3D:Re,updateUBOMapping:tt,uniformBlockBinding:He,texStorage2D:Pe,texStorage3D:Be,texSubImage2D:de,texSubImage3D:Me,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ze,scissor:je,viewport:ut,reset:pt}}function Q1(s,e,t,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new We,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,T){return y?new OffscreenCanvas(L,T):Jl("canvas")}function R(L,T,G){let de=1;const Me=rt(L);if((Me.width>G||Me.height>G)&&(de=G/Math.max(Me.width,Me.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ge=Math.floor(de*Me.width),Ze=Math.floor(de*Me.height);v===void 0&&(v=M(ge,Ze));const Pe=T?M(ge,Ze):v;return Pe.width=ge,Pe.height=Ze,Pe.getContext("2d").drawImage(L,0,0,ge,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ge+"x"+Ze+")."),Pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function U(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,T,G,de,Me=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ge=T;if(T===s.RED&&(G===s.FLOAT&&(ge=s.R32F),G===s.HALF_FLOAT&&(ge=s.R16F),G===s.UNSIGNED_BYTE&&(ge=s.R8)),T===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ge=s.R8UI),G===s.UNSIGNED_SHORT&&(ge=s.R16UI),G===s.UNSIGNED_INT&&(ge=s.R32UI),G===s.BYTE&&(ge=s.R8I),G===s.SHORT&&(ge=s.R16I),G===s.INT&&(ge=s.R32I)),T===s.RG&&(G===s.FLOAT&&(ge=s.RG32F),G===s.HALF_FLOAT&&(ge=s.RG16F),G===s.UNSIGNED_BYTE&&(ge=s.RG8)),T===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ge=s.RG8UI),G===s.UNSIGNED_SHORT&&(ge=s.RG16UI),G===s.UNSIGNED_INT&&(ge=s.RG32UI),G===s.BYTE&&(ge=s.RG8I),G===s.SHORT&&(ge=s.RG16I),G===s.INT&&(ge=s.RG32I)),T===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),G===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),G===s.UNSIGNED_INT&&(ge=s.RGB32UI),G===s.BYTE&&(ge=s.RGB8I),G===s.SHORT&&(ge=s.RGB16I),G===s.INT&&(ge=s.RGB32I)),T===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),G===s.UNSIGNED_INT&&(ge=s.RGBA32UI),G===s.BYTE&&(ge=s.RGBA8I),G===s.SHORT&&(ge=s.RGBA16I),G===s.INT&&(ge=s.RGBA32I)),T===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),T===s.RGBA){const Ze=Me?$l:Dt.getTransfer(de);G===s.FLOAT&&(ge=s.RGBA32F),G===s.HALF_FLOAT&&(ge=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ge=Ze===zt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function N(L,T){let G;return L?T===null||T===us||T===no?G=s.DEPTH24_STENCIL8:T===Zi?G=s.DEPTH32F_STENCIL8:T===to&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===us||T===no?G=s.DEPTH_COMPONENT24:T===Zi?G=s.DEPTH_COMPONENT32F:T===to&&(G=s.DEPTH_COMPONENT16),G}function V(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zn&&L.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function z(L){const T=L.target;T.removeEventListener("dispose",z),Y(T),T.isVideoTexture&&g.delete(T)}function O(L){const T=L.target;T.removeEventListener("dispose",O),A(T)}function Y(L){const T=r.get(L);if(T.__webglInit===void 0)return;const G=L.source,de=_.get(G);if(de){const Me=de[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&w(L),Object.keys(de).length===0&&_.delete(G)}r.remove(L)}function w(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const G=L.source,de=_.get(G);delete de[T.__cacheKey],u.memory.textures--}function A(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let Me=0;Me<T.__webglFramebuffer[de].length;Me++)s.deleteFramebuffer(T.__webglFramebuffer[de][Me]);else s.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)s.deleteFramebuffer(T.__webglFramebuffer[de]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=L.textures;for(let de=0,Me=G.length;de<Me;de++){const ge=r.get(G[de]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),u.memory.textures--),r.remove(G[de])}r.remove(L)}let I=0;function Z(){I=0}function oe(){const L=I;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),I+=1,L}function _e(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function se(L,T){const G=r.get(L);if(L.isVideoTexture&&Ae(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,L,T);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+T)}function fe(L,T){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){ie(G,L,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+T)}function me(L,T){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){ie(G,L,T);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+T)}function B(L,T){const G=r.get(L);if(L.version>0&&G.__version!==L.version){ve(G,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+T)}const he={[kr]:s.REPEAT,[Lr]:s.CLAMP_TO_EDGE,[Od]:s.MIRRORED_REPEAT},Q={[Zn]:s.NEAREST,[Z_]:s.NEAREST_MIPMAP_NEAREST,[gl]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Vu]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},k={[nx]:s.NEVER,[lx]:s.ALWAYS,[ix]:s.LESS,[Wg]:s.LEQUAL,[rx]:s.EQUAL,[ox]:s.GEQUAL,[sx]:s.GREATER,[ax]:s.NOTEQUAL};function ee(L,T){if(T.type===Zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===Vu||T.magFilter===gl||T.magFilter===Dr||T.minFilter===Ei||T.minFilter===Vu||T.minFilter===gl||T.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,he[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,he[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,he[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Q[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Zn||T.minFilter!==gl&&T.minFilter!==Dr||T.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ze(L,T){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",z));const de=T.source;let Me=_.get(de);Me===void 0&&(Me={},_.set(de,Me));const ge=_e(T);if(ge!==L.__cacheKey){Me[ge]===void 0&&(Me[ge]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,G=!0),Me[ge].usedTimes++;const Ze=Me[L.__cacheKey];Ze!==void 0&&(Me[L.__cacheKey].usedTimes--,Ze.usedTimes===0&&w(T)),L.__cacheKey=ge,L.__webglTexture=Me[ge].texture}return G}function Ye(L,T,G){return Math.floor(Math.floor(L/G)/T)}function Xe(L,T,G,de){const ge=L.updateRanges;if(ge.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,G,de,T.data);else{ge.sort((Re,je)=>Re.start-je.start);let Ze=0;for(let Re=1;Re<ge.length;Re++){const je=ge[Ze],ut=ge[Re],tt=je.start+je.count,He=Ye(ut.start,T.width,4),pt=Ye(je.start,T.width,4);ut.start<=tt+1&&He===pt&&Ye(ut.start+ut.count-1,T.width,4)===He?je.count=Math.max(je.count,ut.start+ut.count-je.start):(++Ze,ge[Ze]=ut)}ge.length=Ze+1;const Pe=s.getParameter(s.UNPACK_ROW_LENGTH),Be=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Re=0,je=ge.length;Re<je;Re++){const ut=ge[Re],tt=Math.floor(ut.start/4),He=Math.ceil(ut.count/4),pt=tt%T.width,W=Math.floor(tt/T.width),De=He,Ue=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,pt,W,De,Ue,G,de,T.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function ie(L,T,G){let de=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=s.TEXTURE_3D);const Me=ze(L,T),ge=T.source;t.bindTexture(de,L.__webglTexture,s.TEXTURE0+G);const Ze=r.get(ge);if(ge.version!==Ze.__version||Me===!0){t.activeTexture(s.TEXTURE0+G);const Pe=Dt.getPrimaries(Dt.workingColorSpace),Be=T.colorSpace===Nr?null:Dt.getPrimaries(T.colorSpace),$e=T.colorSpace===Nr||Pe===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Re=R(T.image,!1,a.maxTextureSize);Re=at(T,Re);const je=l.convert(T.format,T.colorSpace),ut=l.convert(T.type);let tt=D(T.internalFormat,je,ut,T.colorSpace,T.isVideoTexture);ee(de,T);let He;const pt=T.mipmaps,W=T.isVideoTexture!==!0,De=Ze.__version===void 0||Me===!0,Ue=ge.dataReady,Ge=V(T,Re);if(T.isDepthTexture)tt=N(T.format===ro,T.type),De&&(W?t.texStorage2D(s.TEXTURE_2D,1,tt,Re.width,Re.height):t.texImage2D(s.TEXTURE_2D,0,tt,Re.width,Re.height,0,je,ut,null));else if(T.isDataTexture)if(pt.length>0){W&&De&&t.texStorage2D(s.TEXTURE_2D,Ge,tt,pt[0].width,pt[0].height);for(let Ne=0,ye=pt.length;Ne<ye;Ne++)He=pt[Ne],W?Ue&&t.texSubImage2D(s.TEXTURE_2D,Ne,0,0,He.width,He.height,je,ut,He.data):t.texImage2D(s.TEXTURE_2D,Ne,tt,He.width,He.height,0,je,ut,He.data);T.generateMipmaps=!1}else W?(De&&t.texStorage2D(s.TEXTURE_2D,Ge,tt,Re.width,Re.height),Ue&&Xe(T,Re,je,ut)):t.texImage2D(s.TEXTURE_2D,0,tt,Re.width,Re.height,0,je,ut,Re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,tt,pt[0].width,pt[0].height,Re.depth);for(let Ne=0,ye=pt.length;Ne<ye;Ne++)if(He=pt[Ne],T.format!==Ti)if(je!==null)if(W){if(Ue)if(T.layerUpdates.size>0){const Qe=Km(He.width,He.height,T.format,T.type);for(const gt of T.layerUpdates){const It=He.data.subarray(gt*Qe/He.data.BYTES_PER_ELEMENT,(gt+1)*Qe/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,gt,He.width,He.height,1,je,It)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,0,He.width,He.height,Re.depth,je,He.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ne,tt,He.width,He.height,Re.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,0,He.width,He.height,Re.depth,je,ut,He.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ne,tt,He.width,He.height,Re.depth,0,je,ut,He.data)}else{W&&De&&t.texStorage2D(s.TEXTURE_2D,Ge,tt,pt[0].width,pt[0].height);for(let Ne=0,ye=pt.length;Ne<ye;Ne++)He=pt[Ne],T.format!==Ti?je!==null?W?Ue&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ne,0,0,He.width,He.height,je,He.data):t.compressedTexImage2D(s.TEXTURE_2D,Ne,tt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ue&&t.texSubImage2D(s.TEXTURE_2D,Ne,0,0,He.width,He.height,je,ut,He.data):t.texImage2D(s.TEXTURE_2D,Ne,tt,He.width,He.height,0,je,ut,He.data)}else if(T.isDataArrayTexture)if(W){if(De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,tt,Re.width,Re.height,Re.depth),Ue)if(T.layerUpdates.size>0){const Ne=Km(Re.width,Re.height,T.format,T.type);for(const ye of T.layerUpdates){const Qe=Re.data.subarray(ye*Ne/Re.data.BYTES_PER_ELEMENT,(ye+1)*Ne/Re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,Re.width,Re.height,1,je,ut,Qe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,je,ut,Re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Re.width,Re.height,Re.depth,0,je,ut,Re.data);else if(T.isData3DTexture)W?(De&&t.texStorage3D(s.TEXTURE_3D,Ge,tt,Re.width,Re.height,Re.depth),Ue&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,je,ut,Re.data)):t.texImage3D(s.TEXTURE_3D,0,tt,Re.width,Re.height,Re.depth,0,je,ut,Re.data);else if(T.isFramebufferTexture){if(De)if(W)t.texStorage2D(s.TEXTURE_2D,Ge,tt,Re.width,Re.height);else{let Ne=Re.width,ye=Re.height;for(let Qe=0;Qe<Ge;Qe++)t.texImage2D(s.TEXTURE_2D,Qe,tt,Ne,ye,0,je,ut,null),Ne>>=1,ye>>=1}}else if(pt.length>0){if(W&&De){const Ne=rt(pt[0]);t.texStorage2D(s.TEXTURE_2D,Ge,tt,Ne.width,Ne.height)}for(let Ne=0,ye=pt.length;Ne<ye;Ne++)He=pt[Ne],W?Ue&&t.texSubImage2D(s.TEXTURE_2D,Ne,0,0,je,ut,He):t.texImage2D(s.TEXTURE_2D,Ne,tt,je,ut,He);T.generateMipmaps=!1}else if(W){if(De){const Ne=rt(Re);t.texStorage2D(s.TEXTURE_2D,Ge,tt,Ne.width,Ne.height)}Ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,ut,Re)}else t.texImage2D(s.TEXTURE_2D,0,tt,je,ut,Re);S(T)&&x(de),Ze.__version=ge.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ve(L,T,G){if(T.image.length!==6)return;const de=ze(L,T),Me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+G);const ge=r.get(Me);if(Me.version!==ge.__version||de===!0){t.activeTexture(s.TEXTURE0+G);const Ze=Dt.getPrimaries(Dt.workingColorSpace),Pe=T.colorSpace===Nr?null:Dt.getPrimaries(T.colorSpace),Be=T.colorSpace===Nr||Ze===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,Re=T.image[0]&&T.image[0].isDataTexture,je=[];for(let ye=0;ye<6;ye++)!$e&&!Re?je[ye]=R(T.image[ye],!0,a.maxCubemapSize):je[ye]=Re?T.image[ye].image:T.image[ye],je[ye]=at(T,je[ye]);const ut=je[0],tt=l.convert(T.format,T.colorSpace),He=l.convert(T.type),pt=D(T.internalFormat,tt,He,T.colorSpace),W=T.isVideoTexture!==!0,De=ge.__version===void 0||de===!0,Ue=Me.dataReady;let Ge=V(T,ut);ee(s.TEXTURE_CUBE_MAP,T);let Ne;if($e){W&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,pt,ut.width,ut.height);for(let ye=0;ye<6;ye++){Ne=je[ye].mipmaps;for(let Qe=0;Qe<Ne.length;Qe++){const gt=Ne[Qe];T.format!==Ti?tt!==null?W?Ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Qe,0,0,gt.width,gt.height,tt,gt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Qe,pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Qe,0,0,gt.width,gt.height,tt,He,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Qe,pt,gt.width,gt.height,0,tt,He,gt.data)}}}else{if(Ne=T.mipmaps,W&&De){Ne.length>0&&Ge++;const ye=rt(je[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,pt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Re){W?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,je[ye].width,je[ye].height,tt,He,je[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,je[ye].width,je[ye].height,0,tt,He,je[ye].data);for(let Qe=0;Qe<Ne.length;Qe++){const It=Ne[Qe].image[ye].image;W?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Qe+1,0,0,It.width,It.height,tt,He,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Qe+1,pt,It.width,It.height,0,tt,He,It.data)}}else{W?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,tt,He,je[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,tt,He,je[ye]);for(let Qe=0;Qe<Ne.length;Qe++){const gt=Ne[Qe];W?Ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Qe+1,0,0,tt,He,gt.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Qe+1,pt,tt,He,gt.image[ye])}}}S(T)&&x(s.TEXTURE_CUBE_MAP),ge.__version=Me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function we(L,T,G,de,Me,ge){const Ze=l.convert(G.format,G.colorSpace),Pe=l.convert(G.type),Be=D(G.internalFormat,Ze,Pe,G.colorSpace),$e=r.get(T),Re=r.get(G);if(Re.__renderTarget=T,!$e.__hasExternalTextures){const je=Math.max(1,T.width>>ge),ut=Math.max(1,T.height>>ge);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,ge,Be,je,ut,T.depth,0,Ze,Pe,null):t.texImage2D(Me,ge,Be,je,ut,0,Ze,Pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Se(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,Me,Re.__webglTexture,0,xe(T)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,Me,Re.__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(L,T,G){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const de=T.depthTexture,Me=de&&de.isDepthTexture?de.type:null,ge=N(T.stencilBuffer,Me),Ze=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=xe(T);Se(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,ge,T.width,T.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ge,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ge,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,L)}else{const de=T.textures;for(let Me=0;Me<de.length;Me++){const ge=de[Me],Ze=l.convert(ge.format,ge.colorSpace),Pe=l.convert(ge.type),Be=D(ge.internalFormat,Ze,Pe,ge.colorSpace),$e=xe(T);G&&Se(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Be,T.width,T.height):Se(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,Be,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Be,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ve(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),se(T.depthTexture,0);const Me=de.__webglTexture,ge=xe(T);if(T.depthTexture.format===io)Se(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(T.depthTexture.format===ro)Se(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function mt(L){const T=r.get(L),G=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",Me)};de.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=de}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const de=L.texture.mipmaps;de&&de.length>0?Ve(T.__webglFramebuffer[0],L):Ve(T.__webglFramebuffer,L)}else if(G){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=s.createRenderbuffer(),ke(T.__webglDepthbuffer[de],L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,ge)}}else{const de=L.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ke(T.__webglDepthbuffer,L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,ge)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(L,T,G){const de=r.get(L);T!==void 0&&we(de.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&mt(L)}function P(L){const T=L.texture,G=r.get(L),de=r.get(T);L.addEventListener("dispose",O);const Me=L.textures,ge=L.isWebGLCubeRenderTarget===!0,Ze=Me.length>1;if(Ze||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=T.version,u.memory.textures++),ge){G.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[Pe]=[];for(let Be=0;Be<T.mipmaps.length;Be++)G.__webglFramebuffer[Pe][Be]=s.createFramebuffer()}else G.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)G.__webglFramebuffer[Pe]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Pe=0,Be=Me.length;Pe<Be;Pe++){const $e=r.get(Me[Pe]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Se(L)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Me.length;Pe++){const Be=Me[Pe];G.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Pe]);const $e=l.convert(Be.format,Be.colorSpace),Re=l.convert(Be.type),je=D(Be.internalFormat,$e,Re,Be.colorSpace,L.isXRRenderTarget===!0),ut=xe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,je,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,G.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ee(s.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)we(G.__webglFramebuffer[Pe][Be],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Be);else we(G.__webglFramebuffer[Pe],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);S(T)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ze){for(let Pe=0,Be=Me.length;Pe<Be;Pe++){const $e=Me[Pe],Re=r.get($e);let je=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(je=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(je,Re.__webglTexture),ee(je,$e),we(G.__webglFramebuffer,L,$e,s.COLOR_ATTACHMENT0+Pe,je,0),S($e)&&x(je)}t.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,de.__webglTexture),ee(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let Be=0;Be<T.mipmaps.length;Be++)we(G.__webglFramebuffer[Be],L,T,s.COLOR_ATTACHMENT0,Pe,Be);else we(G.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Pe,0);S(T)&&x(Pe),t.unbindTexture()}L.depthBuffer&&mt(L)}function pe(L){const T=L.textures;for(let G=0,de=T.length;G<de;G++){const Me=T[G];if(S(Me)){const ge=U(L),Ze=r.get(Me).__webglTexture;t.bindTexture(ge,Ze),x(ge),t.unbindTexture()}}}const ne=[],re=[];function ae(L){if(L.samples>0){if(Se(L)===!1){const T=L.textures,G=L.width,de=L.height;let Me=s.COLOR_BUFFER_BIT;const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(L),Pe=T.length>1;if(Pe)for(let $e=0;$e<T.length;$e++)t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Be=L.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[$e]);const Re=r.get(T[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,G,de,0,0,G,de,Me,s.NEAREST),p===!0&&(ne.length=0,re.length=0,ne.push(s.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ne.push(ge),re.push(ge),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let $e=0;$e<T.length;$e++){t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[$e]);const Re=r.get(T[$e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function xe(L){return Math.min(a.maxSamples,L.samples)}function Se(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ae(L){const T=u.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function at(L,T){const G=L.colorSpace,de=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==aa&&G!==Nr&&(Dt.getTransfer(G)===zt?(de!==Ti||Me!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function rt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(f.width=L.naturalWidth||L.width,f.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(f.width=L.displayWidth,f.height=L.displayHeight):(f.width=L.width,f.height=L.height),f}this.allocateTextureUnit=oe,this.resetTextureUnits=Z,this.setTexture2D=se,this.setTexture2DArray=fe,this.setTexture3D=me,this.setTextureCube=B,this.rebindTextures=St,this.setupRenderTarget=P,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Se}function eT(s,e){function t(r,a=Nr){let l;const u=Dt.getTransfer(a);if(r===Di)return s.UNSIGNED_BYTE;if(r===Cf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===kg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Og)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ug)return s.BYTE;if(r===Fg)return s.SHORT;if(r===to)return s.UNSIGNED_SHORT;if(r===Af)return s.INT;if(r===us)return s.UNSIGNED_INT;if(r===Zi)return s.FLOAT;if(r===co)return s.HALF_FLOAT;if(r===zg)return s.ALPHA;if(r===Bg)return s.RGB;if(r===Ti)return s.RGBA;if(r===io)return s.DEPTH_COMPONENT;if(r===ro)return s.DEPTH_STENCIL;if(r===Vg)return s.RED;if(r===bf)return s.RED_INTEGER;if(r===Hg)return s.RG;if(r===Pf)return s.RG_INTEGER;if(r===Nf)return s.RGBA_INTEGER;if(r===Hl||r===Gl||r===Wl||r===jl)if(u===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Hl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Hl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Bd||r===Vd||r===Hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===Wd||r===jd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gd||r===Wd)return u===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===jd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xd||r===qd||r===Yd||r===$d||r===Kd||r===Jd||r===Zd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Xd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$d)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ef)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===af)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===of||r===lf||r===cf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===of)return u===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uf||r===df||r===ff||r===hf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===uf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===df)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ff)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===no?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const tT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nT=`
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

}`;class iT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new nv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Or({vertexShader:tT,fragmentShader:nT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new po(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rT extends ca{constructor(e,t){super();const r=this;let a=null,l=1,u=null,d="local-floor",p=1,f=null,g=null,v=null,_=null,y=null,M=null;const R=typeof XRWebGLBinding<"u",S=new iT,x={},U=t.getContextAttributes();let D=null,N=null;const V=[],z=[],O=new We;let Y=null;const w=new li;w.viewport=new en;const A=new li;A.viewport=new en;const I=[w,A],Z=new Ty;let oe=null,_e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ve=V[ie];return ve===void 0&&(ve=new ud,V[ie]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ie){let ve=V[ie];return ve===void 0&&(ve=new ud,V[ie]=ve),ve.getGripSpace()},this.getHand=function(ie){let ve=V[ie];return ve===void 0&&(ve=new ud,V[ie]=ve),ve.getHandSpace()};function se(ie){const ve=z.indexOf(ie.inputSource);if(ve===-1)return;const we=V[ve];we!==void 0&&(we.update(ie.inputSource,ie.frame,f||u),we.dispatchEvent({type:ie.type,data:ie.inputSource}))}function fe(){a.removeEventListener("select",se),a.removeEventListener("selectstart",se),a.removeEventListener("selectend",se),a.removeEventListener("squeeze",se),a.removeEventListener("squeezestart",se),a.removeEventListener("squeezeend",se),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",me);for(let ie=0;ie<V.length;ie++){const ve=z[ie];ve!==null&&(z[ie]=null,V[ie].disconnect(ve))}oe=null,_e=null,S.reset();for(const ie in x)delete x[ie];e.setRenderTarget(D),y=null,_=null,v=null,a=null,N=null,Xe.stop(),r.isPresenting=!1,e.setPixelRatio(Y),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(ie){f=ie},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(D=e.getRenderTarget(),a.addEventListener("select",se),a.addEventListener("selectstart",se),a.addEventListener("selectend",se),a.addEventListener("squeeze",se),a.addEventListener("squeezestart",se),a.addEventListener("squeezeend",se),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",me),U.xrCompatible!==!0&&await t.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,ke=null,Ve=null;U.depth&&(Ve=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=U.stencil?ro:io,ke=U.stencil?no:us);const mt={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(mt),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new ds(_.textureWidth,_.textureHeight,{format:Ti,type:Di,depthTexture:new tv(_.textureWidth,_.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const we={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,we),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new ds(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),f=null,u=await a.requestReferenceSpace(d),Xe.setContext(a),Xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function me(ie){for(let ve=0;ve<ie.removed.length;ve++){const we=ie.removed[ve],ke=z.indexOf(we);ke>=0&&(z[ke]=null,V[ke].disconnect(we))}for(let ve=0;ve<ie.added.length;ve++){const we=ie.added[ve];let ke=z.indexOf(we);if(ke===-1){for(let mt=0;mt<V.length;mt++)if(mt>=z.length){z.push(we),ke=mt;break}else if(z[mt]===null){z[mt]=we,ke=mt;break}if(ke===-1)break}const Ve=V[ke];Ve&&Ve.connect(we)}}const B=new j,he=new j;function Q(ie,ve,we){B.setFromMatrixPosition(ve.matrixWorld),he.setFromMatrixPosition(we.matrixWorld);const ke=B.distanceTo(he),Ve=ve.projectionMatrix.elements,mt=we.projectionMatrix.elements,St=Ve[14]/(Ve[10]-1),P=Ve[14]/(Ve[10]+1),pe=(Ve[9]+1)/Ve[5],ne=(Ve[9]-1)/Ve[5],re=(Ve[8]-1)/Ve[0],ae=(mt[8]+1)/mt[0],xe=St*re,Se=St*ae,Ae=ke/(-re+ae),at=Ae*-re;if(ve.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(at),ie.translateZ(Ae),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ve[10]===-1)ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const rt=St+Ae,L=P+Ae,T=xe-at,G=Se+(ke-at),de=pe*P/L*rt,Me=ne*P/L*rt;ie.projectionMatrix.makePerspective(T,G,de,Me,rt,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function k(ie,ve){ve===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ve.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let ve=ie.near,we=ie.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(we=S.depthFar)),Z.near=A.near=w.near=ve,Z.far=A.far=w.far=we,(oe!==Z.near||_e!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),oe=Z.near,_e=Z.far),Z.layers.mask=ie.layers.mask|6,w.layers.mask=Z.layers.mask&3,A.layers.mask=Z.layers.mask&5;const ke=ie.parent,Ve=Z.cameras;k(Z,ke);for(let mt=0;mt<Ve.length;mt++)k(Ve[mt],ke);Ve.length===2?Q(Z,w,A):Z.projectionMatrix.copy(w.projectionMatrix),ee(ie,Z,ke)};function ee(ie,ve,we){we===null?ie.matrix.copy(ve.matrixWorld):(ie.matrix.copy(we.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ve.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ve.projectionMatrix),ie.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=pf*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(ie){p=ie,_!==null&&(_.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(ie){return x[ie]};let ze=null;function Ye(ie,ve){if(g=ve.getViewerPose(f||u),M=ve,g!==null){const we=g.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let ke=!1;we.length!==Z.cameras.length&&(Z.cameras.length=0,ke=!0);for(let P=0;P<we.length;P++){const pe=we[P];let ne=null;if(y!==null)ne=y.getViewport(pe);else{const ae=v.getViewSubImage(_,pe);ne=ae.viewport,P===0&&(e.setRenderTargetTextures(N,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(N))}let re=I[P];re===void 0&&(re=new li,re.layers.enable(P),re.viewport=new en,I[P]=re),re.matrix.fromArray(pe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(pe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ne.x,ne.y,ne.width,ne.height),P===0&&(Z.matrix.copy(re.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ke===!0&&Z.cameras.push(re)}const Ve=a.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const P=v.getDepthInformation(we[0]);P&&P.isValid&&P.texture&&S.init(P,a.renderState)}if(Ve&&Ve.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let P=0;P<we.length;P++){const pe=we[P].camera;if(pe){let ne=x[pe];ne||(ne=new nv,x[pe]=ne);const re=v.getCameraImage(pe);ne.sourceTexture=re}}}}for(let we=0;we<V.length;we++){const ke=z[we],Ve=V[we];ke!==null&&Ve!==void 0&&Ve.update(ke,ve,f||u)}ze&&ze(ie,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Xe=new pv;Xe.setAnimationLoop(Ye),this.setAnimationLoop=function(ie){ze=ie},this.dispose=function(){}}}const ss=new Ii,sT=new Xt;function aT(s,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Jg(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function a(S,x,U,D,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),v(S,x)):x.isMeshPhongMaterial?(l(S,x),g(S,x)):x.isMeshStandardMaterial?(l(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,N)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),R(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?p(S,x,U,D):x.isSpriteMaterial?f(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const U=e.get(x),D=U.envMap,N=U.envMapRotation;D&&(S.envMap.value=D,ss.copy(N),ss.x*=-1,ss.y*=-1,ss.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),S.envMapRotation.value.setFromMatrix4(sT.makeRotationFromEuler(ss)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,U,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*U,S.scale.value=D*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,U){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function R(S,x){const U=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function oT(s,e,t,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,D){const N=D.program;r.uniformBlockBinding(U,N)}function f(U,D){let N=a[U.id];N===void 0&&(M(U),N=g(U),a[U.id]=N,U.addEventListener("dispose",S));const V=D.program;r.updateUBOMapping(U,V);const z=e.render.frame;l[U.id]!==z&&(_(U),l[U.id]=z)}function g(U){const D=v();U.__bindingPointIndex=D;const N=s.createBuffer(),V=U.__size,z=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,V,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,N),N}function v(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const D=a[U.id],N=U.uniforms,V=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,O=N.length;z<O;z++){const Y=Array.isArray(N[z])?N[z]:[N[z]];for(let w=0,A=Y.length;w<A;w++){const I=Y[w];if(y(I,z,w,V)===!0){const Z=I.__offset,oe=Array.isArray(I.value)?I.value:[I.value];let _e=0;for(let se=0;se<oe.length;se++){const fe=oe[se],me=R(fe);typeof fe=="number"||typeof fe=="boolean"?(I.__data[0]=fe,s.bufferSubData(s.UNIFORM_BUFFER,Z+_e,I.__data)):fe.isMatrix3?(I.__data[0]=fe.elements[0],I.__data[1]=fe.elements[1],I.__data[2]=fe.elements[2],I.__data[3]=0,I.__data[4]=fe.elements[3],I.__data[5]=fe.elements[4],I.__data[6]=fe.elements[5],I.__data[7]=0,I.__data[8]=fe.elements[6],I.__data[9]=fe.elements[7],I.__data[10]=fe.elements[8],I.__data[11]=0):(fe.toArray(I.__data,_e),_e+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(U,D,N,V){const z=U.value,O=D+"_"+N;if(V[O]===void 0)return typeof z=="number"||typeof z=="boolean"?V[O]=z:V[O]=z.clone(),!0;{const Y=V[O];if(typeof z=="number"||typeof z=="boolean"){if(Y!==z)return V[O]=z,!0}else if(Y.equals(z)===!1)return Y.copy(z),!0}return!1}function M(U){const D=U.uniforms;let N=0;const V=16;for(let O=0,Y=D.length;O<Y;O++){const w=Array.isArray(D[O])?D[O]:[D[O]];for(let A=0,I=w.length;A<I;A++){const Z=w[A],oe=Array.isArray(Z.value)?Z.value:[Z.value];for(let _e=0,se=oe.length;_e<se;_e++){const fe=oe[_e],me=R(fe),B=N%V,he=B%me.boundary,Q=B+he;N+=he,Q!==0&&V-Q<me.storage&&(N+=V-Q),Z.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=N,N+=me.storage}}}const z=N%V;return z>0&&(N+=V-z),U.__size=N,U.__cache={},this}function R(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function S(U){const D=U.target;D.removeEventListener("dispose",S);const N=u.indexOf(D.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function x(){for(const U in a)s.deleteBuffer(a[U]);u=[],a={},l={}}return{bind:p,update:f,dispose:x}}class lT{constructor(e={}){const{canvas:t=ux(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),R=new Int32Array(4);let S=null,x=null;const U=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let V=!1;this._outputColorSpace=In;let z=0,O=0,Y=null,w=-1,A=null;const I=new en,Z=new en;let oe=null;const _e=new Ct(0);let se=0,fe=t.width,me=t.height,B=1,he=null,Q=null;const k=new en(0,0,fe,me),ee=new en(0,0,fe,me);let ze=!1;const Ye=new Ff;let Xe=!1,ie=!1;const ve=new Xt,we=new j,ke=new en,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function St(){return Y===null?B:1}let P=r;function pe(b,$){return t.getContext(b,$)}try{const b={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wf}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),P===null){const $="webgl2";if(P=pe($,b),P===null)throw pe($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ne,re,ae,xe,Se,Ae,at,rt,L,T,G,de,Me,ge,Ze,Pe,Be,$e,Re,je,ut,tt,He,pt;function W(){ne=new _E(P),ne.init(),tt=new eT(P,ne),re=new dE(P,ne,e,tt),ae=new Z1(P,ne),re.reversedDepthBuffer&&_&&ae.buffers.depth.setReversed(!0),xe=new SE(P),Se=new z1,Ae=new Q1(P,ne,ae,Se,re,tt,xe),at=new hE(N),rt=new vE(N),L=new Cy(P),He=new cE(P,L),T=new xE(P,L,xe,He),G=new EE(P,T,L,xe),Re=new ME(P,re,Ae),Pe=new fE(Se),de=new O1(N,at,rt,ne,re,He,Pe),Me=new aT(N,Se),ge=new V1,Ze=new q1(ne),$e=new lE(N,at,rt,ae,G,y,p),Be=new K1(N,G,re),pt=new oT(P,xe,re,ae),je=new uE(P,ne,xe),ut=new yE(P,ne,xe),xe.programs=de.programs,N.capabilities=re,N.extensions=ne,N.properties=Se,N.renderLists=ge,N.shadowMap=Be,N.state=ae,N.info=xe}W();const De=new rT(N,P);this.xr=De,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(fe,me,!1))},this.getSize=function(b){return b.set(fe,me)},this.setSize=function(b,$,ce=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=b,me=$,t.width=Math.floor(b*B),t.height=Math.floor($*B),ce===!0&&(t.style.width=b+"px",t.style.height=$+"px"),this.setViewport(0,0,b,$)},this.getDrawingBufferSize=function(b){return b.set(fe*B,me*B).floor()},this.setDrawingBufferSize=function(b,$,ce){fe=b,me=$,B=ce,t.width=Math.floor(b*ce),t.height=Math.floor($*ce),this.setViewport(0,0,b,$)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(k)},this.setViewport=function(b,$,ce,ue){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,$,ce,ue),ae.viewport(I.copy(k).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,$,ce,ue){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,$,ce,ue),ae.scissor(Z.copy(ee).multiplyScalar(B).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(b){ae.setScissorTest(ze=b)},this.setOpaqueSort=function(b){he=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(b=!0,$=!0,ce=!0){let ue=0;if(b){let X=!1;if(Y!==null){const Ie=Y.texture.format;X=Ie===Nf||Ie===Pf||Ie===bf}if(X){const Ie=Y.texture.type,K=Ie===Di||Ie===us||Ie===to||Ie===no||Ie===Cf||Ie===Rf,Ee=$e.getClearColor(),Te=$e.getClearAlpha(),Oe=Ee.r,nt=Ee.g,Ke=Ee.b;K?(M[0]=Oe,M[1]=nt,M[2]=Ke,M[3]=Te,P.clearBufferuiv(P.COLOR,0,M)):(R[0]=Oe,R[1]=nt,R[2]=Ke,R[3]=Te,P.clearBufferiv(P.COLOR,0,R))}else ue|=P.COLOR_BUFFER_BIT}$&&(ue|=P.DEPTH_BUFFER_BIT),ce&&(ue|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),$e.dispose(),ge.dispose(),Ze.dispose(),Se.dispose(),at.dispose(),rt.dispose(),G.dispose(),He.dispose(),pt.dispose(),de.dispose(),De.dispose(),De.removeEventListener("sessionstart",rn),De.removeEventListener("sessionend",nr),tn.stop()};function Ue(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const b=xe.autoReset,$=Be.enabled,ce=Be.autoUpdate,ue=Be.needsUpdate,X=Be.type;W(),xe.autoReset=b,Be.enabled=$,Be.autoUpdate=ce,Be.needsUpdate=ue,Be.type=X}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ye(b){const $=b.target;$.removeEventListener("dispose",ye),Qe($)}function Qe(b){gt(b),Se.remove(b)}function gt(b){const $=Se.get(b).programs;$!==void 0&&($.forEach(function(ce){de.releaseProgram(ce)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,$,ce,ue,X,Ie){$===null&&($=Ve);const K=X.isMesh&&X.matrixWorld.determinant()<0,Ee=jn(b,$,ce,ue,X);ae.setMaterial(ue,K);let Te=ce.index,Oe=1;if(ue.wireframe===!0){if(Te=T.getWireframeAttribute(ce),Te===void 0)return;Oe=2}const nt=ce.drawRange,Ke=ce.attributes.position;let lt=nt.start*Oe,At=(nt.start+nt.count)*Oe;Ie!==null&&(lt=Math.max(lt,Ie.start*Oe),At=Math.min(At,(Ie.start+Ie.count)*Oe)),Te!==null?(lt=Math.max(lt,0),At=Math.min(At,Te.count)):Ke!=null&&(lt=Math.max(lt,0),At=Math.min(At,Ke.count));const ht=At-lt;if(ht<0||ht===1/0)return;He.setup(X,ue,Ee,ce,Te);let Nt,bt=je;if(Te!==null&&(Nt=L.get(Te),bt=ut,bt.setIndex(Nt)),X.isMesh)ue.wireframe===!0?(ae.setLineWidth(ue.wireframeLinewidth*St()),bt.setMode(P.LINES)):bt.setMode(P.TRIANGLES);else if(X.isLine){let ct=ue.linewidth;ct===void 0&&(ct=1),ae.setLineWidth(ct*St()),X.isLineSegments?bt.setMode(P.LINES):X.isLineLoop?bt.setMode(P.LINE_LOOP):bt.setMode(P.LINE_STRIP)}else X.isPoints?bt.setMode(P.POINTS):X.isSprite&&bt.setMode(P.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)so("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ct=X._multiDrawStarts,Ft=X._multiDrawCounts,_t=X._multiDrawCount,Zt=Te?L.get(Te).bytesPerElement:1,Gt=Se.get(ue).currentProgram.getUniforms();for(let Wt=0;Wt<_t;Wt++)Gt.setValue(P,"_gl_DrawID",Wt),bt.render(ct[Wt]/Zt,Ft[Wt])}else if(X.isInstancedMesh)bt.renderInstances(lt,ht,X.count);else if(ce.isInstancedBufferGeometry){const ct=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ft=Math.min(ce.instanceCount,ct);bt.renderInstances(lt,ht,Ft)}else bt.render(lt,ht)};function It(b,$,ce){b.transparent===!0&&b.side===Si&&b.forceSinglePass===!1?(b.side=Wn,b.needsUpdate=!0,Ai(b,$,ce),b.side=Fr,b.needsUpdate=!0,Ai(b,$,ce),b.side=Si):Ai(b,$,ce)}this.compile=function(b,$,ce=null){ce===null&&(ce=b),x=Ze.get(ce),x.init($),D.push(x),ce.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),b!==ce&&b.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const ue=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ie=X.material;if(Ie)if(Array.isArray(Ie))for(let K=0;K<Ie.length;K++){const Ee=Ie[K];It(Ee,ce,X),ue.add(Ee)}else It(Ie,ce,X),ue.add(Ie)}),x=D.pop(),ue},this.compileAsync=function(b,$,ce=null){const ue=this.compile(b,$,ce);return new Promise(X=>{function Ie(){if(ue.forEach(function(K){Se.get(K).currentProgram.isReady()&&ue.delete(K)}),ue.size===0){X(b);return}setTimeout(Ie,10)}ne.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let wt=null;function hn(b){wt&&wt(b)}function rn(){tn.stop()}function nr(){tn.start()}const tn=new pv;tn.setAnimationLoop(hn),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(b){wt=b,De.setAnimationLoop(b),b===null?tn.stop():tn.start()},De.addEventListener("sessionstart",rn),De.addEventListener("sessionend",nr),this.render=function(b,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera($),$=De.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,$,Y),x=Ze.get(b,D.length),x.init($),D.push(x),ve.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ye.setFromProjectionMatrix(ve,Li,$.reversedDepth),ie=this.localClippingEnabled,Xe=Pe.init(this.clippingPlanes,ie),S=ge.get(b,U.length),S.init(),U.push(S),De.enabled===!0&&De.isPresenting===!0){const Ie=N.xr.getDepthSensingMesh();Ie!==null&&zr(Ie,$,-1/0,N.sortObjects)}zr(b,$,0,N.sortObjects),S.finish(),N.sortObjects===!0&&S.sort(he,Q),mt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,mt&&$e.addToRenderList(S,b),this.info.render.frame++,Xe===!0&&Pe.beginShadows();const ce=x.state.shadowsArray;Be.render(ce,b,$),Xe===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,X=S.transmissive;if(x.setupLights(),$.isArrayCamera){const Ie=$.cameras;if(X.length>0)for(let K=0,Ee=Ie.length;K<Ee;K++){const Te=Ie[K];Fi(ue,X,b,Te)}mt&&$e.render(b);for(let K=0,Ee=Ie.length;K<Ee;K++){const Te=Ie[K];ci(S,b,Te,Te.viewport)}}else X.length>0&&Fi(ue,X,b,$),mt&&$e.render(b),ci(S,b,$);Y!==null&&O===0&&(Ae.updateMultisampleRenderTarget(Y),Ae.updateRenderTargetMipmap(Y)),b.isScene===!0&&b.onAfterRender(N,b,$),He.resetDefaultState(),w=-1,A=null,D.pop(),D.length>0?(x=D[D.length-1],Xe===!0&&Pe.setGlobalState(N.clippingPlanes,x.state.camera)):x=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function zr(b,$,ce,ue){if(b.visible===!1)return;if(b.layers.test($.layers)){if(b.isGroup)ce=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update($);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ye.intersectsSprite(b)){ue&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ve);const K=G.update(b),Ee=b.material;Ee.visible&&S.push(b,K,Ee,ce,ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ye.intersectsObject(b))){const K=G.update(b),Ee=b.material;if(ue&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(K.boundingSphere===null&&K.computeBoundingSphere(),ke.copy(K.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(ve)),Array.isArray(Ee)){const Te=K.groups;for(let Oe=0,nt=Te.length;Oe<nt;Oe++){const Ke=Te[Oe],lt=Ee[Ke.materialIndex];lt&&lt.visible&&S.push(b,K,lt,ce,ke.z,Ke)}}else Ee.visible&&S.push(b,K,Ee,ce,ke.z,null)}}const Ie=b.children;for(let K=0,Ee=Ie.length;K<Ee;K++)zr(Ie[K],$,ce,ue)}function ci(b,$,ce,ue){const X=b.opaque,Ie=b.transmissive,K=b.transparent;x.setupLightsView(ce),Xe===!0&&Pe.setGlobalState(N.clippingPlanes,ce),ue&&ae.viewport(I.copy(ue)),X.length>0&&ei(X,$,ce),Ie.length>0&&ei(Ie,$,ce),K.length>0&&ei(K,$,ce),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Fi(b,$,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ue.id]===void 0&&(x.state.transmissionRenderTarget[ue.id]=new ds(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?co:Di,minFilter:Dr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Ie=x.state.transmissionRenderTarget[ue.id],K=ue.viewport||I;Ie.setSize(K.z*N.transmissionResolutionScale,K.w*N.transmissionResolutionScale);const Ee=N.getRenderTarget(),Te=N.getActiveCubeFace(),Oe=N.getActiveMipmapLevel();N.setRenderTarget(Ie),N.getClearColor(_e),se=N.getClearAlpha(),se<1&&N.setClearColor(16777215,.5),N.clear(),mt&&$e.render(ce);const nt=N.toneMapping;N.toneMapping=Ur;const Ke=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),x.setupLightsView(ue),Xe===!0&&Pe.setGlobalState(N.clippingPlanes,ue),ei(b,ce,ue),Ae.updateMultisampleRenderTarget(Ie),Ae.updateRenderTargetMipmap(Ie),ne.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let At=0,ht=$.length;At<ht;At++){const Nt=$[At],bt=Nt.object,ct=Nt.geometry,Ft=Nt.material,_t=Nt.group;if(Ft.side===Si&&bt.layers.test(ue.layers)){const Zt=Ft.side;Ft.side=Wn,Ft.needsUpdate=!0,Pn(bt,ce,ue,ct,Ft,_t),Ft.side=Zt,Ft.needsUpdate=!0,lt=!0}}lt===!0&&(Ae.updateMultisampleRenderTarget(Ie),Ae.updateRenderTargetMipmap(Ie))}N.setRenderTarget(Ee,Te,Oe),N.setClearColor(_e,se),Ke!==void 0&&(ue.viewport=Ke),N.toneMapping=nt}function ei(b,$,ce){const ue=$.isScene===!0?$.overrideMaterial:null;for(let X=0,Ie=b.length;X<Ie;X++){const K=b[X],Ee=K.object,Te=K.geometry,Oe=K.group;let nt=K.material;nt.allowOverride===!0&&ue!==null&&(nt=ue),Ee.layers.test(ce.layers)&&Pn(Ee,$,ce,Te,nt,Oe)}}function Pn(b,$,ce,ue,X,Ie){b.onBeforeRender(N,$,ce,ue,X,Ie),b.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(N,$,ce,ue,b,Ie),X.transparent===!0&&X.side===Si&&X.forceSinglePass===!1?(X.side=Wn,X.needsUpdate=!0,N.renderBufferDirect(ce,$,ue,X,b,Ie),X.side=Fr,X.needsUpdate=!0,N.renderBufferDirect(ce,$,ue,X,b,Ie),X.side=Si):N.renderBufferDirect(ce,$,ue,X,b,Ie),b.onAfterRender(N,$,ce,ue,X,Ie)}function Ai(b,$,ce){$.isScene!==!0&&($=Ve);const ue=Se.get(b),X=x.state.lights,Ie=x.state.shadowsArray,K=X.state.version,Ee=de.getParameters(b,X.state,Ie,$,ce),Te=de.getProgramCacheKey(Ee);let Oe=ue.programs;ue.environment=b.isMeshStandardMaterial?$.environment:null,ue.fog=$.fog,ue.envMap=(b.isMeshStandardMaterial?rt:at).get(b.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&b.envMap===null?$.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",ye),Oe=new Map,ue.programs=Oe);let nt=Oe.get(Te);if(nt!==void 0){if(ue.currentProgram===nt&&ue.lightsStateVersion===K)return ir(b,Ee),nt}else Ee.uniforms=de.getUniforms(b),b.onBeforeCompile(Ee,N),nt=de.acquireProgram(Ee,Te),Oe.set(Te,nt),ue.uniforms=Ee.uniforms;const Ke=ue.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=Pe.uniform),ir(b,Ee),ue.needsLights=hs(b),ue.lightsStateVersion=K,ue.needsLights&&(Ke.ambientLightColor.value=X.state.ambient,Ke.lightProbe.value=X.state.probe,Ke.directionalLights.value=X.state.directional,Ke.directionalLightShadows.value=X.state.directionalShadow,Ke.spotLights.value=X.state.spot,Ke.spotLightShadows.value=X.state.spotShadow,Ke.rectAreaLights.value=X.state.rectArea,Ke.ltc_1.value=X.state.rectAreaLTC1,Ke.ltc_2.value=X.state.rectAreaLTC2,Ke.pointLights.value=X.state.point,Ke.pointLightShadows.value=X.state.pointShadow,Ke.hemisphereLights.value=X.state.hemi,Ke.directionalShadowMap.value=X.state.directionalShadowMap,Ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ke.spotShadowMap.value=X.state.spotShadowMap,Ke.spotLightMatrix.value=X.state.spotLightMatrix,Ke.spotLightMap.value=X.state.spotLightMap,Ke.pointShadowMap.value=X.state.pointShadowMap,Ke.pointShadowMatrix.value=X.state.pointShadowMatrix),ue.currentProgram=nt,ue.uniformsList=null,nt}function Br(b){if(b.uniformsList===null){const $=b.currentProgram.getUniforms();b.uniformsList=Xl.seqWithValue($.seq,b.uniforms)}return b.uniformsList}function ir(b,$){const ce=Se.get(b);ce.outputColorSpace=$.outputColorSpace,ce.batching=$.batching,ce.batchingColor=$.batchingColor,ce.instancing=$.instancing,ce.instancingColor=$.instancingColor,ce.instancingMorph=$.instancingMorph,ce.skinning=$.skinning,ce.morphTargets=$.morphTargets,ce.morphNormals=$.morphNormals,ce.morphColors=$.morphColors,ce.morphTargetsCount=$.morphTargetsCount,ce.numClippingPlanes=$.numClippingPlanes,ce.numIntersection=$.numClipIntersection,ce.vertexAlphas=$.vertexAlphas,ce.vertexTangents=$.vertexTangents,ce.toneMapping=$.toneMapping}function jn(b,$,ce,ue,X){$.isScene!==!0&&($=Ve),Ae.resetTextureUnits();const Ie=$.fog,K=ue.isMeshStandardMaterial?$.environment:null,Ee=Y===null?N.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:aa,Te=(ue.isMeshStandardMaterial?rt:at).get(ue.envMap||K),Oe=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,nt=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ke=!!ce.morphAttributes.position,lt=!!ce.morphAttributes.normal,At=!!ce.morphAttributes.color;let ht=Ur;ue.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ht=N.toneMapping);const Nt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,bt=Nt!==void 0?Nt.length:0,ct=Se.get(ue),Ft=x.state.lights;if(Xe===!0&&(ie===!0||b!==A)){const qt=b===A&&ue.id===w;Pe.setState(ue,b,qt)}let _t=!1;ue.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Ft.state.version||ct.outputColorSpace!==Ee||X.isBatchedMesh&&ct.batching===!1||!X.isBatchedMesh&&ct.batching===!0||X.isBatchedMesh&&ct.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&ct.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&ct.instancing===!1||!X.isInstancedMesh&&ct.instancing===!0||X.isSkinnedMesh&&ct.skinning===!1||!X.isSkinnedMesh&&ct.skinning===!0||X.isInstancedMesh&&ct.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ct.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ct.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ct.instancingMorph===!1&&X.morphTexture!==null||ct.envMap!==Te||ue.fog===!0&&ct.fog!==Ie||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Pe.numPlanes||ct.numIntersection!==Pe.numIntersection)||ct.vertexAlphas!==Oe||ct.vertexTangents!==nt||ct.morphTargets!==Ke||ct.morphNormals!==lt||ct.morphColors!==At||ct.toneMapping!==ht||ct.morphTargetsCount!==bt)&&(_t=!0):(_t=!0,ct.__version=ue.version);let Zt=ct.currentProgram;_t===!0&&(Zt=Ai(ue,$,X));let Gt=!1,Wt=!1,Ut=!1;const Rt=Zt.getUniforms(),pn=ct.uniforms;if(ae.useProgram(Zt.program)&&(Gt=!0,Wt=!0,Ut=!0),ue.id!==w&&(w=ue.id,Wt=!0),Gt||A!==b){ae.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Rt.setValue(P,"projectionMatrix",b.projectionMatrix),Rt.setValue(P,"viewMatrix",b.matrixWorldInverse);const Yt=Rt.map.cameraPosition;Yt!==void 0&&Yt.setValue(P,we.setFromMatrixPosition(b.matrixWorld)),re.logarithmicDepthBuffer&&Rt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Rt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Wt=!0,Ut=!0)}if(X.isSkinnedMesh){Rt.setOptional(P,X,"bindMatrix"),Rt.setOptional(P,X,"bindMatrixInverse");const qt=X.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Rt.setValue(P,"boneTexture",qt.boneTexture,Ae))}X.isBatchedMesh&&(Rt.setOptional(P,X,"batchingTexture"),Rt.setValue(P,"batchingTexture",X._matricesTexture,Ae),Rt.setOptional(P,X,"batchingIdTexture"),Rt.setValue(P,"batchingIdTexture",X._indirectTexture,Ae),Rt.setOptional(P,X,"batchingColorTexture"),X._colorsTexture!==null&&Rt.setValue(P,"batchingColorTexture",X._colorsTexture,Ae));const sn=ce.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Re.update(X,ce,Zt),(Wt||ct.receiveShadow!==X.receiveShadow)&&(ct.receiveShadow=X.receiveShadow,Rt.setValue(P,"receiveShadow",X.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(pn.envMap.value=Te,pn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&$.environment!==null&&(pn.envMapIntensity.value=$.environmentIntensity),Wt&&(Rt.setValue(P,"toneMappingExposure",N.toneMappingExposure),ct.needsLights&&rr(pn,Ut),Ie&&ue.fog===!0&&Me.refreshFogUniforms(pn,Ie),Me.refreshMaterialUniforms(pn,ue,B,me,x.state.transmissionRenderTarget[b.id]),Xl.upload(P,Br(ct),pn,Ae)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Xl.upload(P,Br(ct),pn,Ae),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Rt.setValue(P,"center",X.center),Rt.setValue(P,"modelViewMatrix",X.modelViewMatrix),Rt.setValue(P,"normalMatrix",X.normalMatrix),Rt.setValue(P,"modelMatrix",X.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const qt=ue.uniformsGroups;for(let Yt=0,di=qt.length;Yt<di;Yt++){const xt=qt[Yt];pt.update(xt,Zt),pt.bind(xt,Zt)}}return Zt}function rr(b,$){b.ambientLightColor.needsUpdate=$,b.lightProbe.needsUpdate=$,b.directionalLights.needsUpdate=$,b.directionalLightShadows.needsUpdate=$,b.pointLights.needsUpdate=$,b.pointLightShadows.needsUpdate=$,b.spotLights.needsUpdate=$,b.spotLightShadows.needsUpdate=$,b.rectAreaLights.needsUpdate=$,b.hemisphereLights.needsUpdate=$}function hs(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,$,ce){const ue=Se.get(b);ue.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Se.get(b.texture).__webglTexture=$,Se.get(b.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:ce,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,$){const ce=Se.get(b);ce.__webglFramebuffer=$,ce.__useDefaultFramebuffer=$===void 0};const ps=P.createFramebuffer();this.setRenderTarget=function(b,$=0,ce=0){Y=b,z=$,O=ce;let ue=!0,X=null,Ie=!1,K=!1;if(b){const Te=Se.get(b);if(Te.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(P.FRAMEBUFFER,null),ue=!1;else if(Te.__webglFramebuffer===void 0)Ae.setupRenderTarget(b);else if(Te.__hasExternalTextures)Ae.rebindTextures(b,Se.get(b.texture).__webglTexture,Se.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ke=b.depthTexture;if(Te.__boundDepthTexture!==Ke){if(Ke!==null&&Se.has(Ke)&&(b.width!==Ke.image.width||b.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(K=!0);const nt=Se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(nt[$])?X=nt[$][ce]:X=nt[$],Ie=!0):b.samples>0&&Ae.useMultisampledRTT(b)===!1?X=Se.get(b).__webglMultisampledFramebuffer:Array.isArray(nt)?X=nt[ce]:X=nt,I.copy(b.viewport),Z.copy(b.scissor),oe=b.scissorTest}else I.copy(k).multiplyScalar(B).floor(),Z.copy(ee).multiplyScalar(B).floor(),oe=ze;if(ce!==0&&(X=ps),ae.bindFramebuffer(P.FRAMEBUFFER,X)&&ue&&ae.drawBuffers(b,X),ae.viewport(I),ae.scissor(Z),ae.setScissorTest(oe),Ie){const Te=Se.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te.__webglTexture,ce)}else if(K){const Te=$;for(let Oe=0;Oe<b.textures.length;Oe++){const nt=Se.get(b.textures[Oe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Oe,nt.__webglTexture,ce,Te)}}else if(b!==null&&ce!==0){const Te=Se.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Te.__webglTexture,ce)}w=-1},this.readRenderTargetPixels=function(b,$,ce,ue,X,Ie,K,Ee=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&K!==void 0&&(Te=Te[K]),Te){ae.bindFramebuffer(P.FRAMEBUFFER,Te);try{const Oe=b.textures[Ee],nt=Oe.format,Ke=Oe.type;if(!re.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=b.width-ue&&ce>=0&&ce<=b.height-X&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels($,ce,ue,X,tt.convert(nt),tt.convert(Ke),Ie))}finally{const Oe=Y!==null?Se.get(Y).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,$,ce,ue,X,Ie,K,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&K!==void 0&&(Te=Te[K]),Te)if($>=0&&$<=b.width-ue&&ce>=0&&ce<=b.height-X){ae.bindFramebuffer(P.FRAMEBUFFER,Te);const Oe=b.textures[Ee],nt=Oe.format,Ke=Oe.type;if(!re.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,lt),P.bufferData(P.PIXEL_PACK_BUFFER,Ie.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels($,ce,ue,X,tt.convert(nt),tt.convert(Ke),0);const At=Y!==null?Se.get(Y).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,At);const ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await dx(P,ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,lt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ie),P.deleteBuffer(lt),P.deleteSync(ht),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,$=null,ce=0){const ue=Math.pow(2,-ce),X=Math.floor(b.image.width*ue),Ie=Math.floor(b.image.height*ue),K=$!==null?$.x:0,Ee=$!==null?$.y:0;Ae.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,ce,0,0,K,Ee,X,Ie),ae.unbindTexture()};const Vr=P.createFramebuffer(),ui=P.createFramebuffer();this.copyTextureToTexture=function(b,$,ce=null,ue=null,X=0,Ie=null){Ie===null&&(X!==0?(so("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=X,X=0):Ie=0);let K,Ee,Te,Oe,nt,Ke,lt,At,ht;const Nt=b.isCompressedTexture?b.mipmaps[Ie]:b.image;if(ce!==null)K=ce.max.x-ce.min.x,Ee=ce.max.y-ce.min.y,Te=ce.isBox3?ce.max.z-ce.min.z:1,Oe=ce.min.x,nt=ce.min.y,Ke=ce.isBox3?ce.min.z:0;else{const sn=Math.pow(2,-X);K=Math.floor(Nt.width*sn),Ee=Math.floor(Nt.height*sn),b.isDataArrayTexture?Te=Nt.depth:b.isData3DTexture?Te=Math.floor(Nt.depth*sn):Te=1,Oe=0,nt=0,Ke=0}ue!==null?(lt=ue.x,At=ue.y,ht=ue.z):(lt=0,At=0,ht=0);const bt=tt.convert($.format),ct=tt.convert($.type);let Ft;$.isData3DTexture?(Ae.setTexture3D($,0),Ft=P.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Ae.setTexture2DArray($,0),Ft=P.TEXTURE_2D_ARRAY):(Ae.setTexture2D($,0),Ft=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,$.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,$.unpackAlignment);const _t=P.getParameter(P.UNPACK_ROW_LENGTH),Zt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Gt=P.getParameter(P.UNPACK_SKIP_PIXELS),Wt=P.getParameter(P.UNPACK_SKIP_ROWS),Ut=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Oe),P.pixelStorei(P.UNPACK_SKIP_ROWS,nt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ke);const Rt=b.isDataArrayTexture||b.isData3DTexture,pn=$.isDataArrayTexture||$.isData3DTexture;if(b.isDepthTexture){const sn=Se.get(b),qt=Se.get($),Yt=Se.get(sn.__renderTarget),di=Se.get(qt.__renderTarget);ae.bindFramebuffer(P.READ_FRAMEBUFFER,Yt.__webglFramebuffer),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let xt=0;xt<Te;xt++)Rt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(b).__webglTexture,X,Ke+xt),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get($).__webglTexture,Ie,ht+xt)),P.blitFramebuffer(Oe,nt,K,Ee,lt,At,K,Ee,P.DEPTH_BUFFER_BIT,P.NEAREST);ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Se.has(b)){const sn=Se.get(b),qt=Se.get($);ae.bindFramebuffer(P.READ_FRAMEBUFFER,Vr),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,ui);for(let Yt=0;Yt<Te;Yt++)Rt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,sn.__webglTexture,X,Ke+Yt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,sn.__webglTexture,X),pn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,Ie,ht+Yt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,Ie),X!==0?P.blitFramebuffer(Oe,nt,K,Ee,lt,At,K,Ee,P.COLOR_BUFFER_BIT,P.NEAREST):pn?P.copyTexSubImage3D(Ft,Ie,lt,At,ht+Yt,Oe,nt,K,Ee):P.copyTexSubImage2D(Ft,Ie,lt,At,Oe,nt,K,Ee);ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Ft,Ie,lt,At,ht,K,Ee,Te,bt,ct,Nt.data):$.isCompressedArrayTexture?P.compressedTexSubImage3D(Ft,Ie,lt,At,ht,K,Ee,Te,bt,Nt.data):P.texSubImage3D(Ft,Ie,lt,At,ht,K,Ee,Te,bt,ct,Nt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ie,lt,At,K,Ee,bt,ct,Nt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ie,lt,At,Nt.width,Nt.height,bt,Nt.data):P.texSubImage2D(P.TEXTURE_2D,Ie,lt,At,K,Ee,bt,ct,Nt);P.pixelStorei(P.UNPACK_ROW_LENGTH,_t),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Zt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ut),Ie===0&&$.generateMipmaps&&P.generateMipmap(Ft),ae.unbindTexture()},this.initRenderTarget=function(b){Se.get(b).__webglFramebuffer===void 0&&Ae.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ae.setTextureCube(b,0):b.isData3DTexture?Ae.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ae.setTexture2DArray(b,0):Ae.setTexture2D(b,0),ae.unbindTexture()},this.resetState=function(){z=0,O=0,Y=null,ae.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const yg={portrait:[1.6,2.25],landscape:[2.25,1.6]},cT={left:.27,center:.5,right:.73},Ql=.018,Gn=.007,ln=4,Sg=1/.05,uT=1/960,dT=2,Ki=72,Mg=24,Md=.36,xv=.095,fT=.0135,Vl=.036,eo=.15,Eg=1024,Tg={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},ql=[0,.07,.93,1],hT=[-.95,-.28,.28,.95],pT=9,mT=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,gT=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,vT=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,_T=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,wg={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},Pr=(s,e,t)=>Math.min(t,Math.max(e,s)),Ja=(s,e,t)=>s+(e-s)*t,Ed=(s,e)=>{try{const t=document.createElement("canvas").getContext("2d");if(!t)return e;t.fillStyle="#000000",t.fillStyle=s;const r=t.fillStyle;if(r.startsWith("#")){const l=parseInt(r.slice(1),16);return[(l>>16&255)/255,(l>>8&255)/255,(l&255)/255]}const a=r.match(/[\d.]+/g);return!a||a.length<3?e:[Number(a[0])/255,Number(a[1])/255,Number(a[2])/255]}catch{return e}},xT=s=>.2126*s[0]+.7152*s[1]+.0722*s[2],Yl=(s,e=1)=>`rgba(${Math.round(s[0]*255)}, ${Math.round(s[1]*255)}, ${Math.round(s[2]*255)}, ${e})`,yv=s=>{let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}},Ef=(s,e,t,r,a,l)=>{const u=Math.max(0,Math.min(l,r/2,a/2)),d=u*.4477;s.moveTo(e+u,t),s.lineTo(e+r-u,t),s.bezierCurveTo(e+r-d,t,e+r,t+d,e+r,t+u),s.lineTo(e+r,t+a-u),s.bezierCurveTo(e+r,t+a-d,e+r-d,t+a,e+r-u,t+a),s.lineTo(e+u,t+a),s.bezierCurveTo(e+d,t+a,e,t+a-d,e,t+a-u),s.lineTo(e,t+u),s.bezierCurveTo(e,t+d,e+d,t,e+u,t)},Td=(s,e)=>{if(!e)return Promise.resolve(null);const t=s.get(e);if(t)return t;const r=new Promise(a=>{const l=new Image;l.crossOrigin="anonymous",l.decoding="async",l.onload=()=>a(l),l.onerror=()=>a(null),l.src=e});return s.set(e,r),r},Ag=(s,e)=>{const[t,r]=yg[s]||yg.portrait,a=Ja(.03,Math.min(t,r)*.2,Pr(e,0,1)),l={width:.34,height:.07,y:r/2-.13},u=r/2-.055;return{width:t,height:r,radius:a,slot:l,ringY:u,hangY:u+xv}},yT=s=>{const{width:e,height:t,radius:r,slot:a}=s,l=new nc;Ef(l,-e/2+Gn,-t/2+Gn,e-Gn*2,t-Gn*2,Math.max(r-Gn,.005));const u=new vf;Ef(u,-a.width/2-Gn,a.y-a.height/2-Gn,a.width+Gn*2,a.height+Gn*2,a.height/2+Gn),l.holes.push(u);const d=new ic(l,{depth:Ql,bevelEnabled:!0,bevelThickness:Gn,bevelSize:Gn,bevelSegments:5,curveSegments:24});d.translate(0,0,-Ql/2);const p=new zf(l,24),f=p.getAttribute("position"),g=p.getAttribute("uv");for(let v=0;v<f.count;v++)g.setXY(v,(f.getX(v)+e/2)/e,(f.getY(v)+t/2)/t);return g.needsUpdate=!0,{body:d,face:p}},Cg=s=>{const e=new nc,t=s*1.16;Ef(e,-t/2+.014,-eo/2+.014,t-.028,eo-.028,.024);const r=new ic(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return r.translate(0,0,-.01),r},ST=s=>{const e=ql.length,t=new wi;t.setAttribute("position",new Qn(new Float32Array(s*e*3),3)),t.setAttribute("normal",new Qn(new Float32Array(s*e*3),3)),t.setAttribute("uv",new Qn(new Float32Array(s*e*2),2));const r=[];for(let a=0;a<s-1;a++)for(let l=0;l<e-1;l++){const u=a*e+l;r.push(u,u+e,u+1,u+1,u+e,u+e+1)}return t.setIndex(r),t},MT=s=>{const e=new ev;e.background=new Ct(.035,.035,.04);const t=new po(1,1),r=[],a=(d,p,f,g=0)=>{const v=new Uf({color:new Ct(d,d,d),side:Si});r.push(v);const _=new Sn(t,v);_.position.set(...p),_.scale.set(f[0],f[1],1),_.lookAt(0,0,0),_.rotateZ(g),e.add(_)};a(2.6,[0,4.5,8],[9,4]),a(6,[-5.5,.5,7],[.9,14]),a(4,[5,-.5,8],[.6,14]),a(3.5,[0,-1,9],[24,.35],Math.PI/3),a(2.5,[1,2.5,9],[24,.2],Math.PI/3),a(1.4,[0,6,-6],[12,4]),a(.5,[0,-7,1],[16,6]),a(.9,[8,0,-2],[4,10]);const l=new Sf(s),u=l.fromScene(e,.035);return l.dispose(),t.dispose(),r.forEach(d=>d.dispose()),u},wd=(s,e)=>{const t=new mf(s);return t.colorSpace=In,t.anisotropy=e,t},ET=()=>{const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");if(!t)return new mf(e);const r=yv(7),a=Float32Array.from({length:16384},()=>r()),l=(p,f)=>{let g=0;for(let v=-1;v<=1;v++)for(let _=-1;_<=1;_++)g+=a[(f+v+128)%128*128+(p+_+128)%128];return g/9*1.6},u=t.createImageData(128,128);for(let p=0;p<128;p++)for(let f=0;f<128;f++){const g=l((f-1+128)%128,p)-l((f+1)%128,p),v=l(f,(p-1+128)%128)-l(f,(p+1)%128),_=Math.hypot(g,v,1),y=(p*128+f)*4;u.data[y]=(g/_*.5+.5)*255,u.data[y+1]=(v/_*.5+.5)*255,u.data[y+2]=(1/_*.5+.5)*255,u.data[y+3]=255}t.putImageData(u,0,0);const d=new mf(e);return d.wrapS=kr,d.wrapT=kr,d.repeat.set(5,7),d},TT=()=>{const t=yv(19),r=Float32Array.from({length:16384},()=>t()),a=p=>Math.sqrt(Math.max(0,1-4*p*p)),l=(p,f)=>{const g=(p%128+128)%128,v=(f%128+128)%128,_=g/128*8,y=v/128*8,M=Math.floor(_),R=Math.floor(y),S=_-M-.5,x=y-R-.5,U=(M+R)%2===0,D=a(S)*(.55+.45*Math.cos(x*Math.PI*(U?1:.6))),N=a(x)*(.55+.45*Math.cos(S*Math.PI*(U?.6:1)));return(U?Math.max(D,N*.7):Math.max(N,D*.7))+r[v*128+g]*.08},u=new Uint8Array(16384*4);for(let p=0;p<128;p++)for(let f=0;f<128;f++){const g=(l(f-1,p)-l(f+1,p))*1.6,v=(l(f,p-1)-l(f,p+1))*1.6,_=Math.hypot(g,v,1),y=(p*128+f)*4;u[y]=(g/_*.5+.5)*255,u[y+1]=(v/_*.5+.5)*255,u[y+2]=(1/_*.5+.5)*255,u[y+3]=255}const d=new Fx(u,128,128);return d.wrapS=kr,d.wrapT=kr,d.magFilter=Ei,d.minFilter=Dr,d.generateMipmaps=!0,d.needsUpdate=!0,d},wT=(s,e,t,r,a)=>{const l=(a==="contain"?Math.min:Math.max)(t/e.width,r/e.height),u=e.width*l,d=e.height*l;s.drawImage(e,(t-u)/2,(r-d)/2,u,d)},Rg=(s,e,t,r)=>{const a=s.getContext("2d");a&&(a.fillStyle=Yl(t),a.fillRect(0,0,s.width,s.height),e&&wT(a,e,s.width,s.height,r))},AT=(s,e,t)=>{const a=e?Math.max(64,Math.round(e.width/e.height*192)):384;s.width=192,s.height=a;const l=s.getContext("2d");if(!l)return a/192;if(l.fillStyle=Yl(t),l.fillRect(0,0,192,a),e)return l.save(),l.translate(192,0),l.rotate(Math.PI/2),l.drawImage(e,0,0,a,192),l.restore(),a/192;const u=xT(t)>.5?[0,0,0]:[1,1,1];l.fillStyle=Yl(u,.05);for(let d=0;d<a;d+=4)l.fillRect(0,d,192,1);l.fillStyle=Yl(u,.2);for(let d=0;d<a;d+=14)l.fillRect(192*.075,d,2,8),l.fillRect(192*.925-2,d,2,8);return a/192},CT=()=>{const s=()=>Array.from({length:ln+1},()=>new j);return{nodes:s(),previous:s(),velocities:s(),lengths:new Float64Array(ln),impulses:new Float64Array(ln),rest:1,anchor:new j,body:{position:new j,previous:new j,velocity:new j,quaternion:new tr,previousQuaternion:new tr,angular:new j,mass:1,inverseInertia:new j(1,1,1),hang:new j},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},Ot={a:new j,b:new j,c:new j,d:new j,e:new j,f:new j,g:new j,pin:new j,q:new tr,r:new tr},Vf=(s,e,t)=>(Ot.r.copy(s.quaternion).invert(),t.copy(e).applyQuaternion(Ot.r),t.set(t.x*s.inverseInertia.x,t.y*s.inverseInertia.y,t.z*s.inverseInertia.z),t.applyQuaternion(s.quaternion)),Sv=(s,e)=>{const{x:t,y:r,z:a,w:l}=s;s.x+=.5*(e.x*l+e.y*a-e.z*r),s.y+=.5*(e.y*l+e.z*t-e.x*a),s.z+=.5*(e.z*l+e.x*r-e.y*t),s.w+=.5*(-e.x*t-e.y*r-e.z*a),s.normalize()},Mv=(s,e,t)=>{const r=Ot.c.crossVectors(e,t);return 1/s.mass+r.dot(Vf(s,r,Ot.d))},Ev=(s,e,t)=>{s.position.addScaledVector(t,1/s.mass),Sv(s.quaternion,Vf(s,Ot.e.crossVectors(e,t),Ot.f))},RT=(s,e,t,r)=>{const{nodes:a,body:l}=s,u=a[e],d=e===0?0:Sg,p=e===ln-1,f=Ot.g;let g=a[e+1];p&&(f.copy(l.hang).applyQuaternion(l.quaternion),g=Ot.b.copy(l.position).add(f));const v=Ot.a.subVectors(g,u),_=v.length(),y=_-s.rest;if(y<=0||_<1e-9)return;const M=v.divideScalar(_),R=p?Mv(l,f,M):Sg,S=(_-s.lengths[e])/t,U=(r.hold*Math.tanh(r.stiffness*y/r.hold)+r.spring*y+r.bandDamping*Math.max(0,S))*t*t-s.impulses[e];if(U<=0)return;const D=Math.min(y/(d+R),U);s.impulses[e]+=D,d&&u.addScaledVector(M,D*d),p?Ev(l,f,M.multiplyScalar(-D)):g.addScaledVector(M,-D*R)},bT=(s,e,t)=>{const r=Ot.g.copy(e.local).applyQuaternion(s.quaternion),a=Ot.a.copy(t).sub(s.position).sub(r),l=a.length();if(l<1e-9)return;const u=a.divideScalar(l),d=l/Mv(s,r,u);Ev(s,r,u.multiplyScalar(d))},Ad=(s,e,t)=>{const{nodes:r,previous:a,velocities:l,body:u,anchor:d}=s;r[0].copy(d);for(let f=1;f<=ln;f++)r[f].copy(r[f-1]),t?r[f].x+=s.rest:r[f].y-=s.rest;u.quaternion.identity(),t&&u.quaternion.setFromAxisAngle(new j(0,0,1),Math.PI/2),u.hang.set(0,e.hangY,0);const p=Ot.a.copy(u.hang).applyQuaternion(u.quaternion);u.position.copy(r[ln]).sub(p),u.previous.copy(u.position),u.previousQuaternion.copy(u.quaternion),u.velocity.set(0,0,0),u.angular.set(0,0,0);for(let f=0;f<=ln;f++)a[f].copy(r[f]),l[f].set(0,0,0);s.lengths.fill(s.rest),s.turn=0,s.twist=0,s.twistRaw=0,s.calm=0},PT=(s,e,t)=>{s.rest=t/ln;const{width:r,height:a}=e,l=s.body,u=Ql+Gn*2;l.mass=1,l.inverseInertia.set(12/(a*a+u*u),12/(r*r+u*u),12/(r*r+a*a)),l.hang.set(0,e.hangY,0)},NT=(s,e,t,r)=>{const a=Math.max(1,Math.ceil(e/uT-1e-6)),l=e/a,{nodes:u,previous:d,velocities:p,body:f}=s,g=t.breeze*(Math.sin(r*.53)*.7+Math.sin(r*1.31+1.7)*.3)*3,v=t.breeze*Math.sin(r*.37+.6)*2,_=s.grab,y=Ot.pin,M=Math.exp(-2*l),R=Math.exp(-t.linearDrag*l),S=Math.exp(-t.angularDrag*l);for(let U=0;U<a;U++){for(let A=1;A<ln;A++){const I=p[A];I.y-=t.gravity*l,I.x+=g*l,I.z+=v*l,d[A].copy(u[A]),u[A].addScaledVector(I,l)}f.previous.copy(f.position),f.previousQuaternion.copy(f.quaternion);const D=f.quaternion;if(_){const A=Ot.q.copy(_.rotation).multiply(Ot.r.copy(D).invert());A.w<0&&A.set(-A.x,-A.y,-A.z,-A.w);const I=Ot.a.set(A.x,A.y,A.z).multiplyScalar(2*t.grip);I.addScaledVector(f.angular,-6),f.angular.addScaledVector(Vf(f,I,Ot.b),l)}const N=Ot.a.set(0,1,0).applyQuaternion(D),V=Ot.b.set(-N.x*N.z,-N.y*N.z,1-N.z*N.z);if(V.lengthSq()>.001){const A=Ot.d.set(0,0,1).applyQuaternion(D),I=Math.atan2(Ot.e.crossVectors(V,A).dot(N),V.dot(A));let Z=I-s.twistRaw;Z>Math.PI?Z-=Math.PI*2:Z<-Math.PI&&(Z+=Math.PI*2),s.twist+=Z,s.twistRaw=I}if(!_){const A=f.angular.dot(N);f.angular.addScaledVector(N,(t.twist*(s.turn-s.twist)-t.twistDamping*A)*l)}f.velocity.y-=t.gravity*l,f.velocity.x+=g*.35*l,f.velocity.z+=v*.35*l,f.position.addScaledVector(f.velocity,l),Sv(f.quaternion,Ot.f.copy(f.angular).multiplyScalar(l)),s.impulses.fill(0),_&&y.lerpVectors(_.from,_.target,(U+1)/a);for(let A=0;A<dT;A++){for(let I=0;I<ln;I++)RT(s,I,l,t);_&&bT(f,_,y)}for(let A=1;A<ln;A++){const I=p[A].subVectors(u[A],d[A]).divideScalar(l).multiplyScalar(M);I.multiplyScalar(1/(1+t.nodeAir*I.length()*l))}f.velocity.subVectors(f.position,f.previous).divideScalar(l);const z=Ot.q.copy(f.previousQuaternion).invert().premultiply(f.quaternion);f.angular.set(z.x,z.y,z.z).multiplyScalar(2/l*(z.w<0?-1:1));const O=Ot.a.set(0,0,1).applyQuaternion(f.quaternion),Y=f.velocity.dot(O),w=Ot.b.copy(f.velocity).addScaledVector(O,-Y);w.multiplyScalar(1/(1+t.air*w.length()*l)),f.velocity.copy(w).addScaledVector(O,Y/(1+t.broadside*Math.abs(Y)*l)).multiplyScalar(R),f.angular.multiplyScalar(S/(1+t.spinAir*f.angular.length()*l)),f.velocity.lengthSq()>3600&&f.velocity.setLength(60),f.angular.lengthSq()>1600&&f.angular.setLength(40),u[ln].copy(f.hang).applyQuaternion(f.quaternion).add(f.position);for(let A=0;A<ln;A++)s.lengths[A]=u[A].distanceTo(u[A+1])}_&&_.from.copy(_.target);let x=f.velocity.lengthSq()+f.angular.lengthSq()*.3;for(let U=1;U<ln;U++)x+=p[U].lengthSq()*.05;s.calm=x<2e-4?s.calm+e:0},LT=({frontImage:s,backImage:e,imageFit:t="cover",cardColor:r="#ffffff",orientation:a="portrait",finish:l="glossy",cornerRadius:u=.3,size:d=.6,anchor:p="center",strapLength:f=.5,strapImage:g,strapColor:v="#111111",strapWidth:_=.65,metal:y="silver",gravity:M=1,damping:R=.5,elasticity:S=.5,breeze:x=.5,interactive:U=!0,intro:D=!0,className:N="",style:V})=>{const z=kt.useRef(null),O=kt.useRef(null),Y=kt.useRef(null);return O.current={frontImage:s,backImage:e,imageFit:t==="contain"?"contain":"cover",cardColor:r,orientation:a==="landscape"?"landscape":"portrait",finish:l,cornerRadius:u,size:d,anchor:p,strapLength:f,strapImage:g,strapColor:v,strapWidth:_,metal:y,gravity:M,damping:R,elasticity:S,breeze:x,interactive:U,intro:D},kt.useEffect(()=>{var w;(w=Y.current)==null||w.call(Y)}),kt.useEffect(()=>{var Ie;const w=z.current;if(!w)return;let A;try{A=new lT({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}A.setClearColor(0,0),A.outputColorSpace=In,A.toneMapping=Dg,A.toneMappingExposure=1;const I=A.domElement;I.className="lanyard-canvas",I.setAttribute("aria-hidden","true"),w.appendChild(I);const Z=Math.min(8,A.capabilities.getMaxAnisotropy()),oe=new ev,_e=MT(A);oe.environment=_e.texture;const se=new li(Mg,1,.1,200),fe=new qm(16777215,1.6);fe.position.set(-2.5,4,6);const me=new qm(16777215,.35);me.position.set(3,-1,4),oe.add(fe,me);const B=new Map,he={front:null,back:null,strap:null},Q=document.createElement("canvas"),k=document.createElement("canvas"),ee=document.createElement("canvas"),ze=wd(Q,Z),Ye=wd(k,Z),Xe=wd(ee,Z);Xe.wrapS=Lr,Xe.wrapT=kr;const ie=ET(),ve=TT(),we={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new j},foilFill:{value:new j},foilTop:{value:new j}},ke=K=>{Object.assign(K.uniforms,we),K.vertexShader=K.vertexShader.replace("#include <common>",`#include <common>
${mT}`).replace("#include <project_vertex>",`#include <project_vertex>
${gT}`),K.fragmentShader=K.fragmentShader.replace("#include <common>",`#include <common>
${vT}`).replace("#include <opaque_fragment>",`${_T}
#include <opaque_fragment>`)},Ve=new kl({map:ze,normalMap:ie,normalScale:new We(.06,.06)}),mt=new kl({map:Ye,normalMap:ie,normalScale:new We(.06,.06)});Ve.onBeforeCompile=ke,mt.onBeforeCompile=ke;const St=new kl,P=new fv({metalness:1}),pe=new kl({map:Xe,normalMap:ve,normalScale:new We(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new Ct(.32,.32,.34),side:Si}),ne=new Qs,re=new Sn(void 0,St),ae=new Sn(void 0,Ve),xe=new Sn(void 0,mt),Se=new Sn(new Zl(xv,fT,18,72),P);Se.rotation.y=Math.PI/2-.7,ne.add(re,ae,xe,Se),oe.add(ne);const Ae=ST(Ki),at=new Sn(Ae,pe);at.frustumCulled=!1,oe.add(at);const rt=new Qs,L=new Sn(Cg(Md),P);L.position.y=Vl+eo/2-.004;const T=new Sn(new Zl(Vl,.0105,14,40),P);rt.add(L,T),oe.add(rt);const G=CT(),de=[],Me=new j,ge=new j,Ze=new iv(de,!1,"centripetal"),Pe={width:1,height:1};let Be=Ag("portrait",.3),$e={},Re=Md,je=2,ut=0,tt=performance.now(),He=0,pt=!0,W=!0,De=!1,Ue=!1,Ge=null,Ne=0;const ye=((Ie=window.matchMedia)==null?void 0:Ie.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,Qe=()=>{const K=O.current,Ee=Ed(K.cardColor,[1,1,1]),Te=Eg,Oe=Math.round(Eg*Be.height/Be.width);(Q.width!==Te||Q.height!==Oe)&&(Q.width=Te,Q.height=Oe,k.width=Te,k.height=Oe,ze.dispose(),Ye.dispose()),Rg(Q,he.front,Ee,K.imageFit),Rg(k,he.back||he.front,Ee,K.imageFit),ze.needsUpdate=!0,Ye.needsUpdate=!0,Pn()},gt=()=>{const K=O.current;je=AT(ee,he.strap,Ed(K.strapColor,[.07,.07,.07])),ve.repeat.set(2,2*je),Xe.dispose(),Xe.needsUpdate=!0,Pn()},It=()=>{const K=O.current,Ee=Pe.width/Pe.height;let Te=Be.height/Pr(K.size,.15,.9);const Oe=Be.width/.72;Te*Ee<Oe&&(Te=Oe/Ee);const nt=Te*Ee;se.aspect=Ee,se.position.set(0,0,Te/2/Math.tan(Mg*Math.PI/360)),se.lookAt(0,0,0),se.updateProjectionMatrix(),se.updateMatrixWorld(),we.foilKey.value.set(-2.5,4,6).normalize().transformDirection(se.matrixWorldInverse),we.foilFill.value.set(3,-1,4).normalize().transformDirection(se.matrixWorldInverse),we.foilTop.value.set(.5,4.5,8).normalize().transformDirection(se.matrixWorldInverse);const Ke=((cT[K.anchor]??.5)-.5)*nt,lt=Te/2+.2,ht=Te/2-Te*Ja(.12,.42,Pr(K.strapLength,0,1))+(Be.hangY-Be.height/2);G.anchor.set(Ke,lt,0),PT(G,Be,lt-ht),G.nodes[0].copy(G.anchor),G.previous[0].copy(G.anchor)},wt=()=>{const K=O.current,Ee=`${K.orientation}|${K.cornerRadius}`;if(Ee!==$e.layoutKey){Be=Ag(K.orientation,K.cornerRadius);const ht=yT(Be);re.geometry.dispose(),ae.geometry.dispose(),xe.geometry.dispose(),re.geometry=ht.body,ae.geometry=ht.face,xe.geometry=ht.face.clone(),ae.position.z=Ql/2+Gn+6e-4,xe.rotation.y=Math.PI,xe.position.z=-.0166,Se.position.set(0,Be.ringY,0),$e.framingKey=""}const Te=`${Ee}|${K.size}|${K.anchor}|${K.strapLength}|${Pe.width}|${Pe.height}`;Te!==$e.framingKey&&(It(),De?Ee!==$e.layoutKey&&Ad(G,Be,!1):(Ad(G,Be,K.intro&&!ye),De=!0));const Oe=`${K.frontImage}|${K.backImage}|${K.strapImage}`;if(Oe!==$e.imageKey){const ht=++Ne;Promise.all([Td(B,K.frontImage),Td(B,K.backImage),Td(B,K.strapImage)]).then(([Nt,bt,ct])=>{!W||ht!==Ne||(he.front=Nt,he.back=bt,he.strap=ct,Qe(),gt())})}const nt=`${Ee}|${K.cardColor}|${K.imageFit}`;nt!==$e.faceKey&&Qe(),K.strapColor!==$e.strapColor&&gt();const Ke=Tg[K.finish]||Tg.glossy,lt=Ed(K.cardColor,[1,1,1]);[Ve,mt].forEach(ht=>{ht.roughness=Ke.roughness,ht.metalness=Ke.metalness,ht.clearcoat=Ke.clearcoat,ht.clearcoatRoughness=Ke.clearcoatRoughness,ht.anisotropy=Ke.anisotropy}),we.foilStrength.value=Ke.foil,we.foilAspect.value=Be.height/Be.width,St.color.setRGB(lt[0]*.92,lt[1]*.92,lt[2]*.92,In),St.roughness=Math.min(Ke.roughness,.35),St.metalness=Ke.metalness,St.clearcoat=1,St.clearcoatRoughness=.08;const At=wg[K.metal]||wg.silver;P.color.set(At.color),P.roughness=At.roughness,Re=Md*Pr(K.strapWidth,.4,2),Re!==$e.strapScale&&(L.geometry.dispose(),L.geometry=Cg(Re)),I.style.touchAction=K.interactive?"pan-y":"auto",$e={layoutKey:Ee,framingKey:Te,imageKey:Oe,faceKey:nt,strapColor:K.strapColor,strapScale:Re},Pn()},hn=Array.from({length:Ki},()=>new j),rn=Array.from({length:Ki},()=>new j),nr=hT.map(K=>[Math.cos(K),Math.sin(K)]),tn={tangent:new j,toCamera:new j,basis:new Xt,up:new j,across:new j,facing:new j,end:new j},zr=()=>{const K=G.nodes[ln],Ee=Vl+eo+.05;let Te=ln-1;for(;Te>0&&G.nodes[Te].distanceTo(K)<Ee*1.1;)Te--;const Oe=tn.up.subVectors(G.nodes[Te],K);Oe.lengthSq()<1e-8&&Oe.set(0,1,0).applyQuaternion(G.body.quaternion),Oe.normalize(),Me.copy(K).addScaledVector(Oe,Ee),ge.copy(K).addScaledVector(Oe,Vl+eo*.35),de.length=0;for(let Ut=0;Ut<=Te;Ut++)de.push(G.nodes[Ut]);de.push(Me,ge),Ze.updateArcLengths();for(let Ut=0;Ut<Ki;Ut++)Ze.getPointAt(Ut/(Ki-1),hn[Ut]);const nt=Ze.getLength(),Ke=1-Me.distanceTo(ge)/Math.max(nt,.001),lt=Ae.getAttribute("position"),At=Ae.getAttribute("normal"),ht=Ae.getAttribute("uv"),Nt=ql.length,bt=G.rest*ln,ct=bt/(Re*je),Ft=Re/Math.pow(Math.max(1,nt/Math.max(bt,.001)),.35),{tangent:_t,toCamera:Zt,across:Gt,facing:Wt}=tn;for(let Ut=0;Ut<Ki;Ut++){_t.subVectors(hn[Math.min(Ki-1,Ut+1)],hn[Math.max(0,Ut-1)]),_t.lengthSq()<1e-12&&_t.set(0,-1,0),_t.normalize(),Zt.subVectors(se.position,hn[Ut]).normalize();const Rt=rn[Ut].crossVectors(Zt,_t);Rt.lengthSq()<1e-10&&Rt.copy(Ut>0?rn[Ut-1]:Ot.a.set(1,0,0)),Rt.normalize(),Ut>0&&Rt.dot(rn[Ut-1])<0&&Rt.negate();const pn=-G.twist*Math.pow(Math.min(1,Ut/(Ki-1)/Ke),1.3);Wt.crossVectors(_t,Rt),Gt.copy(Rt).multiplyScalar(Math.cos(pn)).addScaledVector(Wt,Math.sin(pn)),Wt.crossVectors(_t,Gt);const sn=hn[Ut],qt=(1-Ut/(Ki-1))*ct;for(let Yt=0;Yt<Nt;Yt++){const di=Ut*Nt+Yt,xt=(ql[Yt]-.5)*Ft,[ms,gs]=nr[Yt];lt.setXYZ(di,sn.x+Gt.x*xt,sn.y+Gt.y*xt,sn.z+Gt.z*xt),At.setXYZ(di,Wt.x*ms+Gt.x*gs,Wt.y*ms+Gt.y*gs,Wt.z*ms+Gt.z*gs),ht.setXY(di,ql[Yt],qt)}}tn.end.copy(Gt),lt.needsUpdate=!0,At.needsUpdate=!0,ht.needsUpdate=!0,Gt.copy(tn.end).addScaledVector(Oe,-tn.end.dot(Oe)).normalize(),Wt.crossVectors(Gt,Oe).normalize(),tn.basis.makeBasis(Gt,Oe,Wt),rt.quaternion.setFromRotationMatrix(tn.basis),rt.position.copy(K)},ci=()=>{ne.position.copy(G.body.position),ne.quaternion.copy(G.body.quaternion),zr(),A.render(oe,se)},Fi=()=>{const K=O.current,Ee=40*Pr(K.gravity,0,3),Te=Math.max(Ee,20),Oe=Pr(K.elasticity,0,1),nt=Pr(K.damping,0,1);return{gravity:Ee,hold:Te*Ja(2.2,5.5,Oe),stiffness:Te*10*ln,spring:Te*Ja(.1,.4,Oe)*ln,bandDamping:Te*Ja(.3,.08,Oe)*ln,linearDrag:.25*Math.pow(16,nt),angularDrag:.5*Math.pow(12,nt),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:ye?0:Pr(K.breeze,0,1)}},ei=K=>{if(ut=0,!W)return;const Ee=Math.min(1/30,Math.max(1/240,(K-tt)/1e3));tt=K,He+=Ee;const Te=Fi();NT(G,Ee,Te,He);const Oe=G.body;Number.isFinite(Oe.position.x+Oe.position.y+Oe.position.z+Oe.quaternion.w)||(G.grab=null,Ad(G,Be,!1)),ci();const nt=G.calm>1.2&&!G.grab&&Te.breeze===0;pt&&!nt&&(ut=requestAnimationFrame(ei))},Pn=()=>{ut||!pt||!W||(G.calm=0,tt=performance.now(),ut=requestAnimationFrame(ei))},Ai=new wy,Br=new We,ir=K=>{const Ee=I.getBoundingClientRect();Br.set((K.clientX-Ee.left)/Ee.width*2-1,-((K.clientY-Ee.top)/Ee.height)*2+1),Ai.setFromCamera(Br,se)},jn=()=>(ne.updateMatrixWorld(),Ai.intersectObjects([re,ae,xe],!1)[0]||null),rr=K=>{I.style.cursor!==K&&(I.style.cursor=K)},hs=K=>{const Ee=G.body,Te=Ot.a.set(0,1,0).applyQuaternion(Ee.quaternion);let Oe=G.turn>0?-1:1;if(G.turn===0){const nt=Ot.c.subVectors(K,se.position).normalize();Oe=Ot.b.subVectors(K,Ee.position).cross(nt).dot(Te)<0?-1:1}G.turn=G.turn===0?Math.PI*Oe:0,Ee.angular.addScaledVector(Te,pT*Oe)},ps=K=>{var Te;if(!O.current.interactive||K.button>0)return;ir(K);const Ee=jn();Ee&&(G.grab={local:Ee.point.clone().sub(G.body.position).applyQuaternion(G.body.quaternion.clone().invert()),rotation:G.body.quaternion.clone(),reach:Ee.distance,from:Ee.point.clone(),target:Ee.point.clone()},Ge={x:K.clientX,y:K.clientY,time:performance.now(),point:Ee.point.clone()},(Te=I.setPointerCapture)==null||Te.call(I,K.pointerId),rr("grabbing"),K.preventDefault(),Pn())},Vr=K=>{if(O.current.interactive){if(ir(K),G.grab){Ge&&Math.hypot(K.clientX-Ge.x,K.clientY-Ge.y)>6&&(Ge=null),Ai.ray.at(G.grab.reach,G.grab.target),Pn();return}K.pointerType!=="touch"&&(Ue=!!jn(),rr(Ue?"grab":""))}},ui=K=>{var Ee;G.grab&&(G.grab=null,Ge&&K.type==="pointerup"&&performance.now()-Ge.time<450&&hs(Ge.point),Ge=null,(Ee=I.releasePointerCapture)==null||Ee.call(I,K.pointerId),rr(Ue&&K.pointerType!=="touch"?"grab":""),Pn())},b=K=>{!O.current.interactive||K.touches.length!==1||(ir(K.touches[0]),jn()&&K.preventDefault())};I.addEventListener("pointerdown",ps),I.addEventListener("pointermove",Vr),I.addEventListener("pointerup",ui),I.addEventListener("pointercancel",ui),I.addEventListener("lostpointercapture",ui),I.addEventListener("touchstart",b,{passive:!1});const $=()=>{Pe.width=Math.max(1,w.clientWidth),Pe.height=Math.max(1,w.clientHeight),A.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),A.setSize(Pe.width,Pe.height,!1),wt(),ci()},ce=new ResizeObserver($);ce.observe(w);const ue=new IntersectionObserver(([K])=>{pt=K.isIntersecting,pt&&Pn()});ue.observe(w);const X=()=>{document.hidden||Pn()};return document.addEventListener("visibilitychange",X),Y.current=wt,$(),()=>{W=!1,cancelAnimationFrame(ut),Y.current=null,ce.disconnect(),ue.disconnect(),document.removeEventListener("visibilitychange",X),I.removeEventListener("pointerdown",ps),I.removeEventListener("pointermove",Vr),I.removeEventListener("pointerup",ui),I.removeEventListener("pointercancel",ui),I.removeEventListener("lostpointercapture",ui),I.removeEventListener("touchstart",b),[re,ae,xe,Se,L,T,at].forEach(K=>{var Ee;return(Ee=K.geometry)==null?void 0:Ee.dispose()}),[Ve,mt,St,P,pe].forEach(K=>K.dispose()),[ze,Ye,Xe,ie,ve].forEach(K=>K.dispose()),_e.dispose(),A.dispose(),I.parentNode&&I.parentNode.removeChild(I)}},[]),C.jsx("div",{ref:z,className:`lanyard ${N}`.trim(),style:V})};function DT(){var mt,St;const[s,e]=kt.useState(null),[t,r]=kt.useState(""),[a,l]=kt.useState(!1),u=[{label:"Profile",path:"/api/profile",method:"GET"},{label:"Experience",path:"/api/experience",method:"GET"},{label:"Skills",path:"/api/skills",method:"GET"},{label:"Certificates",path:"/api/certificates",method:"GET"}],[d,p]=kt.useState("/api/profile"),[f,g]=kt.useState(null),[v,_]=kt.useState(!1),[y,M]=kt.useState(null),[R,S]=kt.useState(null),[x,U]=kt.useState(1e4),[D,N]=kt.useState("pembayar@example.com"),[V,z]=kt.useState("Simulasi Pembayaran Portofolio Fahmi"),[O,Y]=kt.useState(!1),[w,A]=kt.useState(null),[I,Z]=kt.useState(!1),[oe,_e]=kt.useState(!1),[se,fe]=kt.useState(!1),[me,B]=kt.useState(!1),he=["HTML","CSS","JavaScript","PHP","MySQL","MongoDB","REST API"],Q=P=>{r(P),setTimeout(()=>r(""),3e3)},k=()=>{navigator.clipboard.writeText("fahmijha12@gmail.com"),Q("Email fahmijha12@gmail.com disalin ke clipboard")},ee=()=>window.location.pathname.includes("/Portofolio/")?"/Portofolio":"",ze=async(P=d)=>{_(!0);const pe=performance.now();try{const ne=u.find(rt=>rt.path===P)||{path:P,method:"GET"},re=`${ee()}${ne.path}`,ae={method:ne.method||"GET",headers:{Accept:"application/json"}};ne.method==="POST"&&(ae.headers["Content-Type"]="application/json",ae.body=JSON.stringify(ne.sampleBody||{}));let xe=await fetch(re,ae);if(xe.status===404&&re.includes("/api/")){const rt=ne.path.replace(/^\/api\//,""),L=`${ee()}/api/index.php?route=${encodeURIComponent(rt)}`;try{const T=await fetch(L,ae);(T.ok||T.status<500)&&(xe=T)}catch{}}const Se=Math.round(performance.now()-pe),Ae=await xe.text();let at;try{at=JSON.parse(Ae)}catch{throw new Error(`Server merespons non-JSON (HTTP ${xe.status}). Pastikan folder 'api' dan '.htaccess' telah di-upload ke server.`)}M(xe.status),S(Se),g(at)}catch(ne){M(500),S(0),g({error:"Gagal terhubung ke API endpoint",detail:ne.message})}finally{_(!1)}};kt.useEffect(()=>{ze("/api/profile");const P=new URLSearchParams(window.location.search),pe=P.get("payment_status"),ne=P.get("external_id"),re=P.get("invoice_id");if(pe==="PAID"||ne||re){setTimeout(()=>{const xe=document.getElementById("payment-section");xe&&xe.scrollIntoView({behavior:"smooth"})},350);const ae=ne?`external_id=${encodeURIComponent(ne)}`:`invoice_id=${encodeURIComponent(re)}`;fetch(`${ee()}/api/payment/status?${ae}`).then(xe=>xe.json()).then(xe=>{xe.status==="success"&&xe.data&&(A(xe.data),(xe.data.status==="PAID"||pe==="PAID")&&(B(!0),Q("Pembayaran berhasil diverifikasi otomatis!")))}).catch(xe=>{console.error("Verifikasi status otomatis gagal:",xe)}).finally(()=>{window.history.replaceState({},document.title,window.location.pathname+"#payment-section")})}},[]),kt.useEffect(()=>{if(!w||w.status!=="PENDING"){fe(!1);return}fe(!0);const P=setInterval(async()=>{try{const pe=w.invoice_id?`invoice_id=${encodeURIComponent(w.invoice_id)}`:`external_id=${encodeURIComponent(w.external_id)}`,ne=await fetch(`${ee()}/api/payment/status?${pe}`),re=await ne.json();ne.ok&&re.data&&re.data.status==="PAID"&&(A(ae=>({...ae,status:"PAID",paid_at:re.data.paid_at,payment_method:re.data.payment_method})),fe(!1),B(!0),Q("Pembayaran berhasil dikonfirmasi secara otomatis!"),clearInterval(P))}catch{}},3e3);return()=>{clearInterval(P),fe(!1)}},[w==null?void 0:w.invoice_id,w==null?void 0:w.status]);const Ye=async P=>{var pe;P.preventDefault(),Y(!0);try{const ne=window.location.origin+window.location.pathname,re=ee();let ae=`${re}/api/payment/create-invoice`,xe=await fetch(ae,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({amount:parseInt(x,10),payer_email:D,description:V,redirect_url:ne})});if(xe.status===404){const at=`${re}/api/index.php?route=payment/create-invoice`,rt=await fetch(at,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({amount:parseInt(x,10),payer_email:D,description:V,redirect_url:ne})});(rt.ok||rt.status<500)&&(xe=rt)}const Se=await xe.text();let Ae;try{Ae=JSON.parse(Se)}catch{throw new Error(`Server merespons non-JSON (HTTP ${xe.status}). Pastikan folder 'api' telah di-upload.`)}xe.ok&&Ae.status==="success"?(A(Ae.data),Q("Tagihan Xendit berhasil dibuat!")):Q(((pe=Ae.data)==null?void 0:pe.error)||Ae.error||"Gagal membuat tagihan Xendit")}catch(ne){Q("Koneksi ke backend gagal: "+ne.message)}finally{Y(!1)}},Xe=async()=>{if(!(!(w!=null&&w.invoice_id)&&!(w!=null&&w.external_id))){Z(!0);try{const P=w.invoice_id?`invoice_id=${encodeURIComponent(w.invoice_id)}`:`external_id=${encodeURIComponent(w.external_id)}`,pe=ee();let ne=`${pe}/api/payment/status?${P}`,re=await fetch(ne);if(re.status===404){const xe=`${pe}/api/index.php?route=payment/status&${P}`,Se=await fetch(xe);(Se.ok||Se.status<500)&&(re=Se)}const ae=await re.json();re.ok&&ae.data?(A(xe=>({...xe,status:ae.data.status,paid_at:ae.data.paid_at,payment_method:ae.data.payment_method})),ae.data.status==="PAID"?(B(!0),Q("Status invoice: LUNAS (PAID)")):Q(`Status invoice: ${ae.data.status}`)):Q("Status belum berubah atau invoice tidak ditemukan")}catch(P){Q("Gagal memeriksa status: "+P.message)}finally{Z(!1)}}},ie=async()=>{var pe;const P=(w==null?void 0:w.invoice_id)||(w==null?void 0:w.id);if(P&&window.confirm("Batalkan tagihan pembayaran ini di sistem Xendit?")){_e(!0);try{const ne=ee();let re=`${ne}/api/payment/cancel`,ae=await fetch(re,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({invoice_id:P})});if(ae.status===404){const Se=`${ne}/api/index.php?route=payment/cancel`,Ae=await fetch(Se,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({invoice_id:P})});(Ae.ok||Ae.status<500)&&(ae=Ae)}const xe=await ae.json();ae.ok&&xe.status==="success"?(A(Se=>({...Se,status:"EXPIRED"})),fe(!1),Q("Tagihan berhasil dibatalkan di Xendit (EXPIRED).")):Q(((pe=xe.data)==null?void 0:pe.error)||xe.error||"Gagal membatalkan tagihan")}catch(ne){Q("Koneksi gagal: "+ne.message)}finally{_e(!1)}}},ve=[{title:"Aplikasi Event Organizer & E-Ticketing Konser",category:"Web App & E-Ticketing",image:"./projects/tiket.png",desc:"Platform pemesanan tiket konser terintegrasi yang memfasilitasi transaksi tiket instan tanpa login panjang, dilengkapi portal checkout cepat dan panel admin monitoring gate check-in.",features:["Pemesanan tiket cepat tanpa proses pendaftaran rumit untuk meminimalisir abandonment rate pembeli.","Otomatisasi pengiriman e-ticket dengan QR Code unik langsung ke WhatsApp & Email pelanggan.","Dashboard admin terpusat untuk kontrol alokasi kuota tiket (VIP, Presale, Regular) dan validasi check-in pengunjung di pintu masuk."],tags:["React.js","Vite","RESTful API","WhatsApp Gateway","QR Code Engine","Node/PHP"],links:[{label:"Portal Pemesanan Tiket (User)",url:"https://tiket.desadroid.shop/"},{label:"Dashboard Pengelola (Admin)",url:"https://konser.desadroid.shop/"}]},{title:"Web Company Profile & Kargo - PT. Warna Logistic",category:"Corporate & Logistik",image:"./projects/warnalogistic.png",desc:"Website representasi korporat dan operasional resmi penyedia jasa ekspedisi kargo pengiriman darat, laut, udara, serta trucking Jabodetabek ke seluruh pelosok Indonesia.",features:["Kalkulator estimasi ongkos kirim kargo berdasarkan berat barang dan rute tujuan pengiriman.","Katalog spesifikasi armada logistik (Blindvan, CDD, Fuso, Tronton, Wingbox) dan fasilitas operasional.","Implementasi Schema.org JSON-LD dan Local SEO untuk dominasi pencarian ekspedisi di wilayah Jabodetabek."],tags:["PHP","Responsive CSS","SEO Local","Schema JSON-LD","Google Maps Geo"],links:[{label:"Kunjungi Website Live",url:"https://project.desadroid.shop/warnalogistic/"}]},{title:"Katalog Digital & Profil Bisnis - Intime Furniture",category:"Katalog Interior",image:"./projects/intime.jpg",desc:"Platform katalog digital dan profil bisnis untuk pengrajin custom furniture & interior guna memodernisasi pemasaran produk ke pasar digital.",features:["Katalog showcase portofolio hasil produksi (kitchen set, meja kantor, lemari custom, backdrop TV minimalis).","Informasi detail spesifikasi material pengerjaan (Multiplek, HPL Taco, Solid Wood, Duco) dan estimasi pengerjaan.","Integrasi tombol direct CTA WhatsApp untuk estimasi RAB dan konsultasi desain custom secara personal."],tags:["Web Frontend","Catalog UI/UX","WhatsApp Direct CRM","Responsive Layout"],links:[{label:"Lihat Desain & Kontak",url:"#kontak"}]},{title:"Sistem Informasi Manajemen Bengkel Mobil (Bengkel DPM Ciangsana)",category:"Sistem Informasi Manajemen",image:"./projects/bengkel.jpg",desc:"Aplikasi manajemen bengkel mobil untuk mendigitalkan rekam servis kendaraan, kontrol stok keluar-masuk sparepart, dan otomatisasi administrasi nota pengerjaan.",features:["Digitalisasi dokumen dan riwayat servis berkala kendaraan pelanggan.","Kartu kontrol inventaris untuk monitoring stok sparepart keluar-masuk secara akurat.","Otomatisasi pembuatan nota dan invoice estimasi pengerjaan servis mobil."],tags:["PHP","MySQL","Database Architecture","Invoice Generator","Stock Control"],links:[{label:"Lihat Pengalaman Terkait",url:"#pengalaman"}]}],we=[{title:"Owner & Web Developer",organization:"Desadroid IT Consultant",date:"2023 - Sekarang",desc:"Desadroid IT Consultant adalah layanan konsultasi IT dan penyedia solusi pembuatan software/website kustom untuk kebutuhan bisnis dan UMKM.",tasks:["Menganalisis kebutuhan sistem klien dan merancang solusi aplikasi web yang sesuai.","Mengembangkan aplikasi web dari frontend, backend, integrasi database, hingga deployment.","Memberikan dukungan teknis dan pemeliharaan sistem bagi klien."]},{title:"Web Developer",organization:"Bengkel DPM Ciangsana Bogor (Mobil)",date:"2024",desc:"Mengembangkan aplikasi manajemen bengkel mobil berbasis web untuk digitalisasi dan efisiensi operasional bengkel.",tasks:["Membangun sistem pencatatan dokumen dan riwayat servis kendaraan pelanggan.","Membuat modul manajemen stok sparepart untuk mencatat keluar-masuk barang secara akurat.","Mengotomatisasi pembuatan nota dan invoice servis kendaraan."]},{title:"Mitra Driver",organization:"ShopeeFood Indonesia",date:"2022 - 2025",desc:"Menjalankan operasional pengantaran pesanan makanan untuk pelanggan ShopeeFood di area operasional.",tasks:["Mengelola pengantaran pesanan secara efisien dan tepat waktu.","Berkomunikasi dengan merchant dan pelanggan terkait status pesanan.","Menjaga rating dan performa pelayanan pengantaran."]}],ke=[{degree:"S1 Teknik Informatika",institution:"Universitas Indraprasta PGRI (Unindra)",year:"Lulus 2026",desc:"Fokus pada Rekayasa Perangkat Lunak, Struktur Data, Algoritma Pemrograman, Pemrograman Berorientasi Objek (OOP), dan Basis Data Relasional."},{degree:"SMK Rekayasa Perangkat Lunak (RPL)",institution:"SMK Bina Mandiri Multimedia Cileungsi",year:"2020 - 2023",desc:"Mempelajari dasar-dasar pemrograman, algoritma, pemrograman web (HTML, CSS, JavaScript, PHP, MySQL), dan basis data."}],Ve=[{title:"Introduction to Artificial Intelligence",issuer:"IBM SkillsBuild",date:"Juni 2026",image:"./certificates/Introduction to Artificial Intelligence.PNG",desc:"Konsep dasar kecerdasan buatan, machine learning, dan implementasi teknologi AI."},{title:"AI Ethics",issuer:"IBM SkillsBuild",date:"Juni 2026",image:"./certificates/AI Ethics.PNG",desc:"Prinsip etika pengembangan AI meliputi keadilan data, transparansi model, dan privasi."},{title:"Introduction to Generative AI",issuer:"IBM SkillsBuild",date:"Juni 2026",image:"./certificates/Introduction to Generative AI.PNG",desc:"Arsitektur Generative AI, Large Language Models (LLM), dan prompt engineering."},{title:"Juara 3 Web Developer Framework",issuer:"SMK Bina Mandiri Multimedia",date:"Classmeeting Kejuruan",image:null,desc:"Kompetisi pengembangan web berbasis framework antar-siswa kejuruan RPL."},{title:"Intro to Software Engineering",issuer:"RevoU",date:"25 September 2026",image:"./certificates/Coding Camp RevoU.png",desc:"Sertifikat kehadiran kursus online satu minggu Intro to Software Engineering dari RevoU."}];return C.jsxs("div",{className:a?"mobile-nav-open":"",children:[C.jsx("header",{className:"navbar",children:C.jsxs("div",{className:"container nav-container",children:[C.jsx("a",{href:"#hero",className:"nav-brand",children:C.jsx("span",{className:"nav-brand-title",children:"Fahmi Febriansyah"})}),C.jsxs("nav",{className:`nav-menu-wrapper ${a?"mobile-open":""}`,children:[C.jsxs("ul",{className:"nav-menu",children:[C.jsx("li",{children:C.jsx("a",{href:"#pengalaman",className:"nav-link",onClick:()=>l(!1),children:"Pengalaman"})}),C.jsx("li",{children:C.jsx("a",{href:"#proyek",className:"nav-link",onClick:()=>l(!1),children:"Proyek"})}),C.jsx("li",{children:C.jsx("a",{href:"#pendidikan",className:"nav-link",onClick:()=>l(!1),children:"Pendidikan"})}),C.jsx("li",{children:C.jsx("a",{href:"#keahlian",className:"nav-link",onClick:()=>l(!1),children:"Keahlian"})}),C.jsx("li",{className:"nav-dropdown-item",children:C.jsxs("details",{className:"nav-dropdown",children:[C.jsxs("summary",{className:"nav-link nav-dropdown-toggle",children:["Lainnya",C.jsx(v_,{size:14,"aria-hidden":"true"})]}),C.jsxs("ul",{className:"nav-dropdown-menu",children:[C.jsx("li",{children:C.jsx("a",{href:"#api-section",className:"nav-dropdown-link",onClick:()=>l(!1),children:"REST API"})}),C.jsx("li",{children:C.jsx("a",{href:"#payment-section",className:"nav-dropdown-link",onClick:()=>l(!1),children:"Xendit Demo"})}),C.jsx("li",{children:C.jsx("a",{href:"#sertifikat",className:"nav-dropdown-link",onClick:()=>l(!1),children:"Sertifikat"})}),C.jsx("li",{children:C.jsx("a",{href:"#kontak",className:"nav-dropdown-link",onClick:()=>l(!1),children:"Kontak"})})]})]})})]}),C.jsx("div",{className:"mobile-menu-cta",children:C.jsx("a",{href:"cv.html",target:"_blank",rel:"noreferrer",className:"btn-primary",onClick:()=>l(!1),style:{width:"100%",justifyContent:"center"},children:C.jsx("span",{children:"Lihat Curriculum Vitae (CV)"})})})]}),C.jsxs("div",{className:"nav-right-actions",children:[C.jsx("a",{href:"cv.html",target:"_blank",rel:"noreferrer",className:"nav-cta desktop-cv-btn",children:C.jsx("span",{children:"CV"})}),C.jsx("button",{className:"mobile-menu-btn",onClick:()=>l(!a),"aria-label":"Toggle navigasi menu","aria-expanded":a,children:a?C.jsx(Bu,{size:22}):C.jsx(x_,{size:22})})]})]})}),C.jsxs("main",{className:"container",children:[C.jsx("section",{className:"hero",id:"hero",children:C.jsxs("div",{className:"hero-grid",children:[C.jsxs("div",{children:[C.jsx("h1",{className:"hero-title",children:"Fahmi Febriansyah"}),C.jsx("div",{className:"hero-subtitle",children:"Web Developer & Lulusan S1 Teknik Informatika"}),C.jsx("p",{className:"hero-bio",children:"Lulusan S1 Teknik Informatika Universitas Indraprasta PGRI dengan latar belakang SMK Rekayasa Perangkat Lunak. Berfokus pada pengembangan aplikasi web, pengelolaan database, integrasi REST API, dan implementasi sistem operasional bisnis."}),C.jsxs("div",{className:"hero-actions",children:[C.jsx("a",{href:"#kontak",className:"btn-primary",children:C.jsx("span",{children:"Kontak"})}),C.jsx("a",{href:"https://github.com/Fahmi-febriansyah",target:"_blank",rel:"noreferrer",className:"btn-secondary",children:C.jsx("span",{children:"GitHub"})}),C.jsx("a",{href:"https://github.com/desadroid?tab=repositories",target:"_blank",rel:"noreferrer",className:"btn-secondary",children:C.jsx("span",{children:"Desadroid GitHub"})})]})]}),C.jsx("div",{className:"hero-lanyard-stage",role:"img","aria-label":"Kartu identitas Fahmi Febriansyah yang dapat digerakkan dan dibalik",children:C.jsx(LT,{className:"hero-lanyard",frontImage:"./fahmi-lanyard-card.svg",backImage:"./fahmi-lanyard-card-back.svg",finish:"matte",strapColor:"#72583f",size:.82,intro:!1})})]})}),C.jsxs("section",{className:"technology-marquee","aria-label":"Bahasa pemrograman dan teknologi yang digunakan",children:[C.jsxs("div",{className:"technology-marquee-heading",children:[C.jsx("span",{className:"section-tag",children:"Yang saya gunakan"}),C.jsx("span",{className:"technology-marquee-note",children:"Bahasa & teknologi"})]}),C.jsx("div",{className:"technology-marquee-window",children:C.jsx("div",{className:"technology-marquee-track",children:[0,1].map(P=>C.jsx("div",{className:"technology-marquee-group","aria-hidden":P===1,children:he.map(pe=>C.jsx("span",{className:"technology-marquee-item",children:pe},pe))},P))})})]}),C.jsxs("section",{id:"pengalaman",children:[C.jsx("span",{className:"section-tag",children:"Pengalaman"}),C.jsx("h2",{className:"section-title",children:"Pengalaman Kerja"}),C.jsx("div",{className:"experience-list",children:we.map((P,pe)=>C.jsxs("div",{className:"experience-card",children:[C.jsxs("div",{className:"exp-header",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"exp-title",children:P.title}),C.jsx("div",{className:"exp-subtitle",children:P.organization})]}),C.jsx("div",{className:"exp-date",children:P.date})]}),C.jsx("p",{className:"exp-desc",children:P.desc}),C.jsx("ul",{className:"exp-tasks",children:P.tasks.map((ne,re)=>C.jsx("li",{children:ne},re))})]},pe))})]}),C.jsxs("section",{id:"proyek",children:[C.jsx("span",{className:"section-tag",children:"Portofolio"}),C.jsx("h2",{className:"section-title",children:"Proyek & Karya"}),C.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"1.8rem",fontSize:"0.96rem"},children:"Dokumentasi aplikasi web dan sistem informasi yang dibangun dan dikembangkan oleh Fahmi Febriansyah."}),C.jsx("div",{className:"projects-grid",children:ve.map((P,pe)=>C.jsxs("div",{className:"project-card",children:[P.image&&C.jsx("div",{className:"project-thumb-box",children:C.jsx("img",{src:P.image,alt:P.title,className:"project-thumb-img",loading:"lazy"})}),C.jsxs("div",{className:"project-card-body",children:[C.jsx("div",{className:"project-badge-row",children:C.jsx("span",{className:"project-category",children:P.category})}),C.jsx("h3",{className:"project-title",children:P.title}),C.jsx("p",{className:"project-desc",children:P.desc}),C.jsx("ul",{className:"project-features",children:P.features.map((ne,re)=>C.jsxs("li",{className:"project-feature-item",children:[C.jsx("span",{className:"project-feature-bullet",children:"•"}),C.jsx("span",{children:ne})]},re))}),C.jsx("div",{className:"project-tech-tags",children:P.tags.map((ne,re)=>C.jsx("span",{className:"project-tech-tag",children:ne},re))}),C.jsx("div",{className:"project-actions",children:P.links.map((ne,re)=>C.jsx("a",{href:ne.url,target:ne.url.startsWith("http")?"_blank":"_self",rel:"noreferrer",className:re===0&&ne.url.startsWith("http")?"btn-primary":"btn-secondary",style:{fontSize:"0.84rem",padding:"0.5rem 0.9rem"},children:C.jsx("span",{children:ne.label})},re))})]})]},pe))})]}),C.jsxs("section",{id:"pendidikan",children:[C.jsx("span",{className:"section-tag",children:"Pendidikan"}),C.jsx("h2",{className:"section-title",children:"Riwayat Pendidikan"}),C.jsx("div",{className:"education-grid",children:ke.map((P,pe)=>C.jsxs("div",{className:"education-card",children:[C.jsx("span",{className:"edu-year",children:P.year}),C.jsx("h3",{className:"edu-title",children:P.degree}),C.jsx("div",{className:"edu-inst",children:P.institution}),C.jsx("p",{className:"edu-desc",children:P.desc})]},pe))})]}),C.jsxs("section",{id:"keahlian",children:[C.jsx("span",{className:"section-tag",children:"Keahlian"}),C.jsx("h2",{className:"section-title",children:"Keahlian & Teknologi"}),C.jsxs("div",{className:"skills-grid",children:[C.jsxs("div",{className:"skill-category",children:[C.jsx("h3",{className:"skill-cat-title",children:C.jsx("span",{children:"Web Dasar & Backend"})}),C.jsxs("div",{className:"skill-chips",children:[C.jsx("span",{className:"skill-chip",children:"HTML"}),C.jsx("span",{className:"skill-chip",children:"CSS"}),C.jsx("span",{className:"skill-chip",children:"JavaScript"}),C.jsx("span",{className:"skill-chip",children:"PHP"}),C.jsx("span",{className:"skill-chip",children:"MySQL"}),C.jsx("span",{className:"skill-chip",children:"MongoDB"}),C.jsx("span",{className:"skill-chip",children:"REST API"})]})]}),C.jsxs("div",{className:"skill-category",children:[C.jsx("h3",{className:"skill-cat-title",children:C.jsx("span",{children:"Payment Gateway & Sistem"})}),C.jsxs("div",{className:"skill-chips",children:[C.jsx("span",{className:"skill-chip",children:"Payment Gateway (Xendit Staging)"}),C.jsx("span",{className:"skill-chip",children:"Webhook"}),C.jsx("span",{className:"skill-chip",children:"Manajemen Dokumen Servis"}),C.jsx("span",{className:"skill-chip",children:"Manajemen Stok Sparepart"})]})]}),C.jsxs("div",{className:"skill-category",children:[C.jsx("h3",{className:"skill-cat-title",children:C.jsx("span",{children:"Karakter & Soft Skills"})}),C.jsxs("div",{className:"skill-chips",children:[C.jsx("span",{className:"skill-chip",children:"Critical Thinking"}),C.jsx("span",{className:"skill-chip",children:"Public Speaking"}),C.jsx("span",{className:"skill-chip",children:"Komunikasi yang Baik"}),C.jsx("span",{className:"skill-chip",children:"Bekerja Keras"})]})]})]})]}),C.jsxs("section",{id:"api-section",children:[C.jsx("span",{className:"section-tag",children:"Backend Portfolio API"}),C.jsx("h2",{className:"section-title",children:"RESTful API Data Diri"}),C.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"1.5rem",fontSize:"0.96rem"},children:"Spesifikasi dan tester interaktif endpoint JSON backend untuk data portofolio diri, pengalaman, keahlian teknis, dan sertifikasi."}),C.jsxs("div",{className:"api-explorer-card",children:[C.jsx("div",{className:"api-tabs-row",children:u.map((P,pe)=>C.jsxs("button",{className:`api-tab-btn ${d===P.path?"active":""}`,onClick:()=>{p(P.path),ze(P.path)},children:[C.jsx("span",{className:`http-method ${P.method.toLowerCase()}`,style:{marginRight:"6px",fontSize:"0.68rem",padding:"1px 5px"},children:P.method}),P.label]},pe))}),C.jsxs("div",{className:"api-request-bar",children:[C.jsx("span",{className:`api-method-badge ${((mt=u.find(P=>P.path===d))==null?void 0:mt.method)==="POST"?"post":""}`,children:((St=u.find(P=>P.path===d))==null?void 0:St.method)||"GET"}),C.jsxs("span",{className:"api-url-text",children:[window.location.origin,ee(),d]}),C.jsxs("button",{className:"api-send-btn",onClick:()=>ze(d),disabled:v,children:[v&&C.jsx(S_,{size:14,className:"spin-icon"}),C.jsx("span",{children:v?"Memuat...":"Kirim Request"})]})]}),C.jsxs("div",{className:"api-response-panel",children:[C.jsxs("div",{className:"api-response-header",children:[C.jsxs("div",{className:"api-status-tag ok",children:[C.jsx("span",{children:"Status:"}),C.jsx("span",{children:y?`${y} OK`:"Siap"})]}),C.jsxs("div",{children:["Waktu Respons: ",R!==null?`${R} ms`:"-"]})]}),C.jsx("pre",{className:"api-json-pre",children:f?JSON.stringify(f,null,2):'Klik tombol "Kirim Request" untuk melihat respons JSON.'})]})]}),C.jsxs("div",{className:"api-doc-card",children:[C.jsx("h3",{style:{fontSize:"1.15rem",marginBottom:"0.35rem"},children:"Dokumentasi Spesifikasi REST API"}),C.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.88rem",marginBottom:"1.2rem"},children:"Format request, parameter, dan deskripsi teknis endpoint portofolio backend."}),C.jsx("div",{className:"api-doc-table-wrapper",children:C.jsxs("table",{className:"api-doc-table",children:[C.jsx("thead",{children:C.jsxs("tr",{children:[C.jsx("th",{children:"Metode"}),C.jsx("th",{children:"Endpoint"}),C.jsx("th",{children:"Parameter / Payload"}),C.jsx("th",{children:"Deskripsi & Dokumentasi"})]})}),C.jsxs("tbody",{children:[C.jsxs("tr",{children:[C.jsx("td",{children:C.jsx("span",{className:"http-method get",children:"GET"})}),C.jsx("td",{children:C.jsx("code",{children:"/api/profile"})}),C.jsx("td",{children:"-"}),C.jsx("td",{children:"Mengambil biodata, riwayat pendidikan, dan kontak profil pengembang."})]}),C.jsxs("tr",{children:[C.jsx("td",{children:C.jsx("span",{className:"http-method get",children:"GET"})}),C.jsx("td",{children:C.jsx("code",{children:"/api/experience"})}),C.jsx("td",{children:"-"}),C.jsx("td",{children:"Mengambil daftar pengalaman kerja, peran, dan rincian tanggung jawab."})]}),C.jsxs("tr",{children:[C.jsx("td",{children:C.jsx("span",{className:"http-method get",children:"GET"})}),C.jsx("td",{children:C.jsx("code",{children:"/api/skills"})}),C.jsx("td",{children:"-"}),C.jsx("td",{children:"Mengambil daftar keahlian teknis (Web, Database, Payment Gateway, Soft Skills)."})]}),C.jsxs("tr",{children:[C.jsx("td",{children:C.jsx("span",{className:"http-method get",children:"GET"})}),C.jsx("td",{children:C.jsx("code",{children:"/api/certificates"})}),C.jsx("td",{children:"-"}),C.jsx("td",{children:"Mengambil data sertifikasi resmi IBM SkillsBuild dan piagam kejuaraan."})]})]})]})})]})]}),C.jsxs("section",{id:"payment-section",children:[C.jsx("span",{className:"section-tag",children:"Integrasi Finansial"}),C.jsx("h2",{className:"section-title",children:"Simulasi Payment Gateway (Xendit)"}),C.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"1.5rem",fontSize:"0.96rem"},children:"Demonstrasi alur pembuatan tagihan pembayaran menggunakan API resmi Xendit Sandbox (Akun Desadroid). Tagihan yang dibuat dapat diuji coba pembayarannya menggunakan simulator Xendit."}),C.jsxs("div",{className:"payment-grid",children:[C.jsxs("div",{className:"payment-form-col",children:[C.jsx("h3",{children:"Buat Tagihan Pembayaran"}),C.jsx("p",{children:"Pilih nominal tagihan untuk menguji alur pembuatan invoice Xendit."}),C.jsxs("form",{onSubmit:Ye,children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Pilih Nominal Tagihan (IDR)"}),C.jsx("div",{className:"preset-amount-row",children:[1e4,25e3,5e4,1e5].map(P=>C.jsxs("button",{type:"button",className:`preset-btn ${x===P?"active":""}`,onClick:()=>U(P),children:["Rp ",P.toLocaleString("id-ID")]},P))}),C.jsx("input",{type:"number",min:"1000",step:"1000",className:"form-input",value:x,onChange:P=>U(P.target.value),placeholder:"Nominal kustom (min. Rp 1.000)",required:!0})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Email Pembayar (Sandbox)"}),C.jsx("input",{type:"email",className:"form-input",value:D,onChange:P=>N(P.target.value),required:!0})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Deskripsi Tagihan"}),C.jsx("input",{type:"text",className:"form-input",value:V,onChange:P=>z(P.target.value),required:!0})]}),C.jsx("button",{type:"submit",className:"btn-primary",style:{width:"100%",justifyContent:"center"},disabled:O,children:C.jsx("span",{children:O?"Memproses ke Xendit...":"Buat Invoice Xendit"})})]})]}),C.jsx("div",{className:`payment-result-box ${(w==null?void 0:w.status)==="PAID"?"paid-active":(w==null?void 0:w.status)==="EXPIRED"?"expired-active":""}`,children:w?C.jsxs("div",{children:[C.jsxs("div",{className:"invoice-header",children:[C.jsx("span",{style:{fontSize:"0.88rem",fontWeight:700},children:"Invoice Tagihan Xendit"}),w.status==="PAID"?C.jsx("span",{className:"status-pill paid",children:"PAID"}):w.status==="EXPIRED"?C.jsx("span",{className:"status-pill expired",children:"EXPIRED"}):C.jsxs("span",{className:"status-pill pending",children:[C.jsx("span",{className:"status-dot-pulse"})," PENDING"]})]}),w.status==="PAID"?C.jsx("div",{className:"invoice-notice paid",children:C.jsxs("div",{children:[C.jsx("div",{className:"invoice-notice-title",children:"Pembayaran Berhasil Dikonfirmasi!"}),C.jsx("div",{className:"invoice-notice-message",children:"Status transaksi terverifikasi LUNAS via Xendit API."})]})}):w.status==="EXPIRED"?C.jsx("div",{className:"invoice-notice expired",children:C.jsxs("div",{children:[C.jsx("div",{className:"invoice-notice-title",children:"Tagihan Telah Dibatalkan / Kedaluwarsa"}),C.jsx("div",{className:"invoice-notice-message",children:"Status invoice telah diubah menjadi EXPIRED di Xendit. Tautan pembayaran ditutup."})]})}):C.jsx("div",{className:"polling-badge",style:{marginBottom:"1rem",width:"100%",justifyContent:"center"},children:C.jsx("span",{children:se?"Memeriksa status otomatis setiap 3 detik...":"Menunggu penyelesaian pembayaran..."})}),C.jsxs("div",{className:"invoice-meta-row",children:[C.jsx("span",{className:"invoice-meta-label",children:"ID Tagihan:"}),C.jsx("span",{className:"invoice-meta-value",style:{fontFamily:"monospace",fontSize:"0.8rem"},children:w.invoice_id||w.id})]}),w.external_id&&C.jsxs("div",{className:"invoice-meta-row",children:[C.jsx("span",{className:"invoice-meta-label",children:"External ID:"}),C.jsx("span",{className:"invoice-meta-value",style:{fontFamily:"monospace",fontSize:"0.8rem"},children:w.external_id})]}),C.jsxs("div",{className:"invoice-meta-row",children:[C.jsx("span",{className:"invoice-meta-label",children:"Nominal:"}),C.jsxs("span",{className:`invoice-meta-value invoice-amount ${w.status==="PAID"?"paid":w.status==="EXPIRED"?"expired":""}`,children:["Rp ",parseInt(w.amount,10).toLocaleString("id-ID")]})]}),C.jsxs("div",{className:"invoice-meta-row",children:[C.jsx("span",{className:"invoice-meta-label",children:"Metode Pembayaran:"}),C.jsx("span",{className:"invoice-meta-value",children:w.payment_method||"QRIS / Virtual Account / E-Wallet"})]}),w.paid_at&&C.jsxs("div",{className:"invoice-meta-row",children:[C.jsx("span",{className:"invoice-meta-label",children:"Waktu Pembayaran:"}),C.jsx("span",{className:"invoice-meta-value",style:{fontSize:"0.82rem"},children:new Date(w.paid_at).toLocaleString("id-ID")})]}),w.status==="PAID"?C.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",marginTop:"1.4rem"},children:[C.jsx("button",{type:"button",onClick:()=>B(!0),className:"btn-primary",style:{justifyContent:"center",fontSize:"0.88rem"},children:C.jsx("span",{children:"Lihat Ringkasan Pembayaran"})}),C.jsx("button",{type:"button",onClick:()=>A(null),className:"btn-secondary",style:{justifyContent:"center",fontSize:"0.88rem"},children:C.jsx("span",{children:"Uji Coba Pembayaran Baru"})})]}):w.status==="EXPIRED"?C.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",marginTop:"1.4rem"},children:C.jsx("button",{type:"button",onClick:()=>A(null),className:"btn-primary",style:{justifyContent:"center",fontSize:"0.88rem"},children:C.jsx("span",{children:"Buat Tagihan Baru"})})}):C.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",marginTop:"1.4rem"},children:[C.jsx("a",{href:w.invoice_url,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{justifyContent:"center",fontSize:"0.88rem"},children:C.jsx("span",{children:"Buka Pembayaran Xendit"})}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"},children:[C.jsx("button",{type:"button",onClick:Xe,className:"btn-secondary",style:{justifyContent:"center",fontSize:"0.86rem"},disabled:I,children:C.jsx("span",{children:I?"Cek...":"Cek Status"})}),C.jsx("button",{type:"button",onClick:ie,className:"btn-danger-outline",style:{justifyContent:"center",fontSize:"0.86rem"},disabled:oe,children:C.jsx("span",{children:oe?"Batal...":"Batalkan Tagihan"})})]})]})]}):C.jsxs("div",{style:{textAlign:"center",color:"var(--text-light)",padding:"2rem 1rem"},children:[C.jsx("div",{style:{fontWeight:600,marginBottom:"0.3rem"},children:"Belum Ada Tagihan Aktif"}),C.jsx("div",{style:{fontSize:"0.85rem"},children:"Isi form di sebelah kiri untuk menghasilkan URL tagihan simulasi dari API Xendit Sandbox."})]})})]})]}),C.jsxs("section",{id:"sertifikat",children:[C.jsx("span",{className:"section-tag",children:"Sertifikasi"}),C.jsx("h2",{className:"section-title",children:"Pencapaian & Sertifikat"}),C.jsx("div",{className:"cert-grid",children:Ve.map((P,pe)=>C.jsxs("div",{className:"cert-card",onClick:()=>P.image&&e(P),children:[P.image?C.jsxs("div",{className:"cert-thumbnail-wrapper",children:[C.jsx("img",{src:P.image,alt:P.title,className:"cert-thumbnail"}),C.jsx("div",{className:"cert-preview-overlay",children:C.jsx("span",{children:"Lihat Sertifikat"})})]}):C.jsxs("div",{className:"cert-thumbnail-wrapper",style:{padding:"2rem 1.5rem",textAlign:"center",background:"#f8fafc"},children:[C.jsx("div",{style:{fontSize:"0.76rem",color:"#64748b",marginBottom:"0.5rem",textTransform:"uppercase",letterSpacing:"0.06em"},children:"Sertifikat Penghargaan"}),C.jsx("div",{style:{fontWeight:600,color:"#0f172a",fontSize:"0.88rem"},children:P.title})]}),C.jsxs("div",{className:"cert-content",children:[C.jsxs("div",{children:[C.jsx("div",{className:"cert-issuer",children:P.issuer}),C.jsx("h3",{className:"cert-name",children:P.title}),C.jsx("p",{style:{fontSize:"0.86rem",color:"#64748b",marginBottom:"0.8rem",lineHeight:1.5},children:P.desc})]}),C.jsx("div",{className:"cert-date",children:P.date})]})]},pe))})]}),C.jsx("section",{id:"kontak",children:C.jsxs("div",{className:"contact-box",children:[C.jsxs("div",{className:"contact-intro",children:[C.jsx("span",{className:"section-tag",children:"Kontak"}),C.jsx("h2",{children:"Obrolkan ide berikutnya."}),C.jsx("p",{children:"Tersedia untuk peluang kerja, freelance, dan kolaborasi proyek web development."}),C.jsx("span",{className:"contact-location",children:"Berbasis di Bogor, Jawa Barat"})]}),C.jsxs("div",{className:"contact-channels",children:[C.jsxs("button",{onClick:k,className:"contact-card contact-card-button","aria-label":"Salin email Fahmi Febriansyah",children:[C.jsxs("span",{className:"contact-card-label",children:["Email ",C.jsx("span",{children:"Klik untuk menyalin"})]}),C.jsx("span",{className:"contact-card-value",children:"fahmijha12@gmail.com"})]}),C.jsxs("a",{href:"https://wa.me/6289669709021",target:"_blank",rel:"noreferrer",className:"contact-card",children:[C.jsxs("span",{className:"contact-card-label",children:["WhatsApp ",C.jsx("span",{children:"Pesan langsung"})]}),C.jsx("span",{className:"contact-card-value",children:"089669709021"})]}),C.jsxs("a",{href:"https://www.linkedin.com/in/fahmifebriansyah/",target:"_blank",rel:"noreferrer",className:"contact-card",children:[C.jsxs("span",{className:"contact-card-label",children:["LinkedIn ",C.jsx("span",{children:"Profil profesional"})]}),C.jsx("span",{className:"contact-card-value",children:"Fahmi Febriansyah"})]}),C.jsxs("a",{href:"https://github.com/Fahmi-febriansyah",target:"_blank",rel:"noreferrer",className:"contact-card",children:[C.jsxs("span",{className:"contact-card-label",children:["GitHub ",C.jsx("span",{children:"Karya dan kode"})]}),C.jsx("span",{className:"contact-card-value",children:"Fahmi-febriansyah"})]})]})]})})]}),C.jsx("footer",{children:C.jsx("div",{className:"container",children:C.jsxs("p",{children:["© ",new Date().getFullYear()," Fahmi Febriansyah. All rights reserved."]})})}),s&&C.jsx("div",{className:"modal-backdrop",onClick:()=>e(null),children:C.jsxs("div",{className:"modal-content",onClick:P=>P.stopPropagation(),children:[C.jsx("button",{className:"modal-close-btn",onClick:()=>e(null),"aria-label":"Tutup",children:C.jsx(Bu,{size:20})}),C.jsx("img",{src:s.image,alt:s.title,className:"modal-image"}),C.jsxs("div",{className:"modal-info",children:[C.jsx("h3",{children:s.title}),C.jsxs("p",{children:[s.issuer," • ",s.date]})]})]})}),me&&C.jsx("div",{className:"celebration-backdrop",onClick:()=>B(!1),children:C.jsxs("div",{className:"celebration-card",onClick:P=>P.stopPropagation(),children:[C.jsx("button",{className:"modal-close-btn",onClick:()=>B(!1),"aria-label":"Tutup modal",children:C.jsx(Bu,{size:18})}),C.jsx("span",{className:"section-tag",children:"Status pembayaran"}),C.jsx("h3",{className:"celebration-title",children:"Pembayaran terverifikasi"}),C.jsx("p",{className:"celebration-subtitle",children:"Simulasi transaksi via Xendit Sandbox berhasil dikonfirmasi secara real-time."}),C.jsxs("div",{className:"celebration-amount",children:["Rp ",parseInt((w==null?void 0:w.amount)||x,10).toLocaleString("id-ID")]}),C.jsxs("div",{className:"celebration-details",children:[C.jsxs("div",{className:"celebration-row",children:[C.jsx("span",{className:"celebration-label",children:"Status"}),C.jsx("span",{className:"celebration-value paid",children:"LUNAS (PAID)"})]}),(w==null?void 0:w.external_id)&&C.jsxs("div",{className:"celebration-row",children:[C.jsx("span",{className:"celebration-label",children:"External ID"}),C.jsx("span",{className:"celebration-value",children:w.external_id})]}),((w==null?void 0:w.invoice_id)||(w==null?void 0:w.id))&&C.jsxs("div",{className:"celebration-row",children:[C.jsx("span",{className:"celebration-label",children:"Invoice ID"}),C.jsx("span",{className:"celebration-value",children:w.invoice_id||w.id})]}),C.jsxs("div",{className:"celebration-row",children:[C.jsx("span",{className:"celebration-label",children:"Metode"}),C.jsx("span",{className:"celebration-value",children:(w==null?void 0:w.payment_method)||"QRIS / Virtual Account"})]}),C.jsxs("div",{className:"celebration-row",children:[C.jsx("span",{className:"celebration-label",children:"Merchant"}),C.jsx("span",{className:"celebration-value",children:"desadroid"})]})]}),C.jsx("button",{type:"button",className:"celebration-btn",onClick:()=>B(!1),children:C.jsx("span",{children:"Tutup & Lanjutkan Eksplorasi"})})]})}),t&&C.jsx("div",{className:"toast-clean",children:C.jsx("span",{children:t})})]})}f_.createRoot(document.getElementById("root")).render(C.jsx(s_.StrictMode,{children:C.jsx(DT,{})}));
