(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Cg={exports:{}},el={},Rg={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zs=Symbol.for("react.element"),D1=Symbol.for("react.portal"),O1=Symbol.for("react.fragment"),M1=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),L1=Symbol.for("react.provider"),F1=Symbol.for("react.context"),j1=Symbol.for("react.forward_ref"),U1=Symbol.for("react.suspense"),B1=Symbol.for("react.memo"),z1=Symbol.for("react.lazy"),Xf=Symbol.iterator;function $1(t){return t===null||typeof t!="object"?null:(t=Xf&&t[Xf]||t["@@iterator"],typeof t=="function"?t:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pg=Object.assign,xg={};function Ri(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||kg}Ri.prototype.isReactComponent={};Ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ng(){}Ng.prototype=Ri.prototype;function lh(t,e,n){this.props=t,this.context=e,this.refs=xg,this.updater=n||kg}var uh=lh.prototype=new Ng;uh.constructor=lh;Pg(uh,Ri.prototype);uh.isPureReactComponent=!0;var Yf=Array.isArray,Vg=Object.prototype.hasOwnProperty,ch={current:null},Dg={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Vg.call(e,r)&&!Dg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zs,type:t,key:s,ref:a,props:i,_owner:ch.current}}function q1(t,e){return{$$typeof:Zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zs}function H1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?H1(""+t.key):e.toString(36)}function Jo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Zs:case D1:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+ru(a,0):r,Yf(i)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),Jo(i,e,n,"",function(h){return h})):i!=null&&(hh(i)&&(i=q1(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Jf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",Yf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ru(s,l);a+=Jo(s,e,n,u,i)}else if(u=$1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ru(s,l++),a+=Jo(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Po(t,e,n){if(t==null)return t;var r=[],i=0;return Jo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function W1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var st={current:null},Zo={transition:null},K1={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:Zo,ReactCurrentOwner:ch};function Mg(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Po,forEach:function(t,e,n){Po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Po(t,function(){e++}),e},toArray:function(t){return Po(t,function(e){return e})||[]},only:function(t){if(!hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Ri;J.Fragment=O1;J.Profiler=b1;J.PureComponent=lh;J.StrictMode=M1;J.Suspense=U1;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K1;J.act=Mg;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pg({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ch.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Vg.call(e,u)&&!Dg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Zs,type:t.type,key:i,ref:s,props:r,_owner:a}};J.createContext=function(t){return t={$$typeof:F1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L1,_context:t},t.Consumer=t};J.createElement=Og;J.createFactory=function(t){var e=Og.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:j1,render:t}};J.isValidElement=hh;J.lazy=function(t){return{$$typeof:z1,_payload:{_status:-1,_result:t},_init:W1}};J.memo=function(t,e){return{$$typeof:B1,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Zo.transition;Zo.transition={};try{t()}finally{Zo.transition=e}};J.unstable_act=Mg;J.useCallback=function(t,e){return st.current.useCallback(t,e)};J.useContext=function(t){return st.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return st.current.useDeferredValue(t)};J.useEffect=function(t,e){return st.current.useEffect(t,e)};J.useId=function(){return st.current.useId()};J.useImperativeHandle=function(t,e,n){return st.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return st.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return st.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return st.current.useMemo(t,e)};J.useReducer=function(t,e,n){return st.current.useReducer(t,e,n)};J.useRef=function(t){return st.current.useRef(t)};J.useState=function(t){return st.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return st.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return st.current.useTransition()};J.version="18.3.1";Rg.exports=J;var Fe=Rg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=Fe,Q1=Symbol.for("react.element"),X1=Symbol.for("react.fragment"),Y1=Object.prototype.hasOwnProperty,J1=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z1={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Y1.call(e,r)&&!Z1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Q1,type:t,key:s,ref:a,props:i,_owner:J1.current}}el.Fragment=X1;el.jsx=bg;el.jsxs=bg;Cg.exports=el;var $=Cg.exports,Lg={exports:{}},_t={},Fg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,K){var X=U.length;U.push(K);e:for(;0<X;){var me=X-1>>>1,oe=U[me];if(0<i(oe,K))U[me]=K,U[X]=oe,X=me;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var K=U[0],X=U.pop();if(X!==K){U[0]=X;e:for(var me=0,oe=U.length,Te=oe>>>1;me<Te;){var Zt=2*(me+1)-1,en=U[Zt],tn=Zt+1,nn=U[tn];if(0>i(en,X))tn<oe&&0>i(nn,en)?(U[me]=nn,U[tn]=X,me=tn):(U[me]=en,U[Zt]=X,me=Zt);else if(tn<oe&&0>i(nn,X))U[me]=nn,U[tn]=X,me=tn;else break e}}return K}function i(U,K){var X=U.sortIndex-K.sortIndex;return X!==0?X:U.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,m=null,g=3,C=!1,P=!1,N=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=U)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function V(U){if(N=!1,S(U),!P)if(n(u)!==null)P=!0,Mi(b);else{var K=n(h);K!==null&&Jt(V,K.startTime-U)}}function b(U,K){P=!1,N&&(N=!1,I(y),y=-1),C=!0;var X=g;try{for(S(K),m=n(u);m!==null&&(!(m.expirationTime>K)||U&&!A());){var me=m.callback;if(typeof me=="function"){m.callback=null,g=m.priorityLevel;var oe=me(m.expirationTime<=K);K=t.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(u)&&r(u),S(K)}else r(u);m=n(u)}if(m!==null)var Te=!0;else{var Zt=n(h);Zt!==null&&Jt(V,Zt.startTime-K),Te=!1}return Te}finally{m=null,g=X,C=!1}}var j=!1,w=null,y=-1,v=5,T=-1;function A(){return!(t.unstable_now()-T<v)}function k(){if(w!==null){var U=t.unstable_now();T=U;var K=!0;try{K=w(!0,U)}finally{K?E():(j=!1,w=null)}}else j=!1}var E;if(typeof _=="function")E=function(){_(k)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,ar=wt.port2;wt.port1.onmessage=k,E=function(){ar.postMessage(null)}}else E=function(){M(k,0)};function Mi(U){w=U,j||(j=!0,E())}function Jt(U,K){y=M(function(){U(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){P||C||(P=!0,Mi(b))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var X=g;g=K;try{return U()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,K){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=g;g=U;try{return K()}finally{g=X}},t.unstable_scheduleCallback=function(U,K,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,U){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=X+oe,U={id:f++,callback:K,priorityLevel:U,startTime:X,expirationTime:oe,sortIndex:-1},X>me?(U.sortIndex=X,e(h,U),n(u)===null&&U===n(h)&&(N?(I(y),y=-1):N=!0,Jt(V,X-me))):(U.sortIndex=oe,e(u,U),P||C||(P=!0,Mi(b))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var K=g;return function(){var X=g;g=K;try{return U.apply(this,arguments)}finally{g=X}}}})(jg);Fg.exports=jg;var ew=Fg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tw=Fe,yt=ew;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ug=new Set,As={};function Dr(t,e){pi(t,e),pi(t+"Capture",e)}function pi(t,e){for(As[t]=e,t=0;t<e.length;t++)Ug.add(e[t])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=Object.prototype.hasOwnProperty,nw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zf={},ep={};function rw(t){return Wu.call(ep,t)?!0:Wu.call(Zf,t)?!1:nw.test(t)?ep[t]=!0:(Zf[t]=!0,!1)}function iw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sw(t,e,n,r){if(e===null||typeof e>"u"||iw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ot(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var dh=/[\-:]([a-z])/g;function fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dh,fh);ze[e]=new ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dh,fh);ze[e]=new ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dh,fh);ze[e]=new ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function ph(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sw(e,n,i,r)&&(n=null),r||i===null?rw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var En=tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),yh=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),$g=Symbol.for("react.offscreen"),tp=Symbol.iterator;function Qi(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,iu;function rs(t){if(iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);iu=e&&e[1]||""}return`
`+iu+t}var su=!1;function ou(t,e){if(!t||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?rs(t):""}function ow(t){switch(t.tag){case 5:return rs(t.type);case 16:return rs("Lazy");case 13:return rs("Suspense");case 19:return rs("SuspenseList");case 0:case 2:case 15:return t=ou(t.type,!1),t;case 11:return t=ou(t.type.render,!1),t;case 1:return t=ou(t.type,!0),t;default:return""}}function Xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Qr:return"Portal";case Ku:return"Profiler";case mh:return"StrictMode";case Gu:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zg:return(t.displayName||"Context")+".Consumer";case Bg:return(t._context.displayName||"Context")+".Provider";case gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yh:return e=t.displayName||null,e!==null?e:Xu(t.type)||"Memo";case Cn:e=t._payload,t=t._init;try{return Xu(t(e))}catch{}}return null}function aw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xu(e);case 8:return e===mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lw(t){var e=qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=lw(t))}function Hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yu(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function np(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wg(t,e){e=e.checked,e!=null&&ph(t,"checked",e,!1)}function Ju(t,e){Wg(t,e);var n=Wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zu(t,e.type,Wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zu(t,e,n){(e!=="number"||ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var is=Array.isArray;function ai(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(is(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wn(n)}}function Kg(t,e){var n=Wn(e.value),r=Wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vo,Qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Cs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uw=["Webkit","ms","Moz","O"];Object.keys(hs).forEach(function(t){uw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hs[e]=hs[t]})});function Xg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hs.hasOwnProperty(t)&&hs[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cw=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(t,e){if(e){if(cw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ic=null;function _h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sc=null,li=null,ui=null;function op(t){if(t=no(t)){if(typeof sc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=sl(e),sc(t.stateNode,t.type,e))}}function Jg(t){li?ui?ui.push(t):ui=[t]:li=t}function Zg(){if(li){var t=li,e=ui;if(ui=li=null,op(t),e)for(t=0;t<e.length;t++)op(e[t])}}function ey(t,e){return t(e)}function ty(){}var au=!1;function ny(t,e,n){if(au)return t(e,n);au=!0;try{return ey(t,e,n)}finally{au=!1,(li!==null||ui!==null)&&(ty(),Zg())}}function Rs(t,e){var n=t.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var oc=!1;if(fn)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){oc=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{oc=!1}function hw(t,e,n,r,i,s,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var ds=!1,ya=null,_a=!1,ac=null,dw={onError:function(t){ds=!0,ya=t}};function fw(t,e,n,r,i,s,a,l,u){ds=!1,ya=null,hw.apply(dw,arguments)}function pw(t,e,n,r,i,s,a,l,u){if(fw.apply(this,arguments),ds){if(ds){var h=ya;ds=!1,ya=null}else throw Error(L(198));_a||(_a=!0,ac=h)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ry(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ap(t){if(Or(t)!==t)throw Error(L(188))}function mw(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ap(i),t;if(s===r)return ap(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function iy(t){return t=mw(t),t!==null?sy(t):null}function sy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sy(t);if(e!==null)return e;t=t.sibling}return null}var oy=yt.unstable_scheduleCallback,lp=yt.unstable_cancelCallback,gw=yt.unstable_shouldYield,yw=yt.unstable_requestPaint,Se=yt.unstable_now,_w=yt.unstable_getCurrentPriorityLevel,vh=yt.unstable_ImmediatePriority,ay=yt.unstable_UserBlockingPriority,va=yt.unstable_NormalPriority,vw=yt.unstable_LowPriority,ly=yt.unstable_IdlePriority,tl=null,$t=null;function ww(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Iw,Ew=Math.log,Tw=Math.LN2;function Iw(t){return t>>>=0,t===0?32:31-(Ew(t)/Tw|0)|0}var Do=64,Oo=4194304;function ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ss(l):(s&=a,s!==0&&(r=ss(s)))}else a=n&~i,a!==0?r=ss(a):s!==0&&(r=ss(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function Sw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Aw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Mt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=Sw(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uy(){var t=Do;return Do<<=1,!(Do&4194240)&&(Do=64),t}function lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function Cw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function wh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function cy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hy,Eh,dy,fy,py,uc=!1,Mo=[],Dn=null,On=null,Mn=null,ks=new Map,Ps=new Map,kn=[],Rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function up(t,e){switch(t){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(e.pointerId)}}function Yi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=no(e),e!==null&&Eh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function kw(t,e,n,r,i){switch(e){case"focusin":return Dn=Yi(Dn,t,e,n,r,i),!0;case"dragenter":return On=Yi(On,t,e,n,r,i),!0;case"mouseover":return Mn=Yi(Mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ks.set(s,Yi(ks.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ps.set(s,Yi(Ps.get(s)||null,t,e,n,r,i)),!0}return!1}function my(t){var e=mr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=ry(n),e!==null){t.blockedOn=e,py(t.priority,function(){dy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ea(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ic=r,n.target.dispatchEvent(r),ic=null}else return e=no(n),e!==null&&Eh(e),t.blockedOn=n,!1;e.shift()}return!0}function cp(t,e,n){ea(t)&&n.delete(e)}function Pw(){uc=!1,Dn!==null&&ea(Dn)&&(Dn=null),On!==null&&ea(On)&&(On=null),Mn!==null&&ea(Mn)&&(Mn=null),ks.forEach(cp),Ps.forEach(cp)}function Ji(t,e){t.blockedOn===e&&(t.blockedOn=null,uc||(uc=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,Pw)))}function xs(t){function e(i){return Ji(i,t)}if(0<Mo.length){Ji(Mo[0],t);for(var n=1;n<Mo.length;n++){var r=Mo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dn!==null&&Ji(Dn,t),On!==null&&Ji(On,t),Mn!==null&&Ji(Mn,t),ks.forEach(e),Ps.forEach(e),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)my(n),n.blockedOn===null&&kn.shift()}var ci=En.ReactCurrentBatchConfig,Ea=!0;function xw(t,e,n,r){var i=se,s=ci.transition;ci.transition=null;try{se=1,Th(t,e,n,r)}finally{se=i,ci.transition=s}}function Nw(t,e,n,r){var i=se,s=ci.transition;ci.transition=null;try{se=4,Th(t,e,n,r)}finally{se=i,ci.transition=s}}function Th(t,e,n,r){if(Ea){var i=cc(t,e,n,r);if(i===null)_u(t,e,r,Ta,n),up(t,r);else if(kw(i,t,e,n,r))r.stopPropagation();else if(up(t,r),e&4&&-1<Rw.indexOf(t)){for(;i!==null;){var s=no(i);if(s!==null&&hy(s),s=cc(t,e,n,r),s===null&&_u(t,e,r,Ta,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _u(t,e,r,null,n)}}var Ta=null;function cc(t,e,n,r){if(Ta=null,t=_h(r),t=mr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ry(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ta=t,null}function gy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_w()){case vh:return 1;case ay:return 4;case va:case vw:return 16;case ly:return 536870912;default:return 16}default:return 16}}var xn=null,Ih=null,ta=null;function yy(){if(ta)return ta;var t,e=Ih,n=e.length,r,i="value"in xn?xn.value:xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return ta=i.slice(t,1<r?1-r:void 0)}function na(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bo(){return!0}function hp(){return!1}function vt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bo:hp,this.isPropagationStopped=hp,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sh=vt(ki),to=_e({},ki,{view:0,detail:0}),Vw=vt(to),uu,cu,Zi,nl=_e({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ah,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zi&&(Zi&&t.type==="mousemove"?(uu=t.screenX-Zi.screenX,cu=t.screenY-Zi.screenY):cu=uu=0,Zi=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),dp=vt(nl),Dw=_e({},nl,{dataTransfer:0}),Ow=vt(Dw),Mw=_e({},to,{relatedTarget:0}),hu=vt(Mw),bw=_e({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),Lw=vt(bw),Fw=_e({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jw=vt(Fw),Uw=_e({},ki,{data:0}),fp=vt(Uw),Bw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$w[t])?!!e[t]:!1}function Ah(){return qw}var Hw=_e({},to,{key:function(t){if(t.key){var e=Bw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ah,charCode:function(t){return t.type==="keypress"?na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ww=vt(Hw),Kw=_e({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=vt(Kw),Gw=_e({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ah}),Qw=vt(Gw),Xw=_e({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yw=vt(Xw),Jw=_e({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zw=vt(Jw),eE=[9,13,27,32],Ch=fn&&"CompositionEvent"in window,fs=null;fn&&"documentMode"in document&&(fs=document.documentMode);var tE=fn&&"TextEvent"in window&&!fs,_y=fn&&(!Ch||fs&&8<fs&&11>=fs),mp=" ",gp=!1;function vy(t,e){switch(t){case"keyup":return eE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function nE(t,e){switch(t){case"compositionend":return wy(e);case"keypress":return e.which!==32?null:(gp=!0,mp);case"textInput":return t=e.data,t===mp&&gp?null:t;default:return null}}function rE(t,e){if(Yr)return t==="compositionend"||!Ch&&vy(t,e)?(t=yy(),ta=Ih=xn=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _y&&e.locale!=="ko"?null:e.data;default:return null}}var iE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iE[t.type]:e==="textarea"}function Ey(t,e,n,r){Jg(r),e=Ia(e,"onChange"),0<e.length&&(n=new Sh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ps=null,Ns=null;function sE(t){Vy(t,0)}function rl(t){var e=ei(t);if(Hg(e))return t}function oE(t,e){if(t==="change")return e}var Ty=!1;if(fn){var du;if(fn){var fu="oninput"in document;if(!fu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),fu=typeof _p.oninput=="function"}du=fu}else du=!1;Ty=du&&(!document.documentMode||9<document.documentMode)}function vp(){ps&&(ps.detachEvent("onpropertychange",Iy),Ns=ps=null)}function Iy(t){if(t.propertyName==="value"&&rl(Ns)){var e=[];Ey(e,Ns,t,_h(t)),ny(sE,e)}}function aE(t,e,n){t==="focusin"?(vp(),ps=e,Ns=n,ps.attachEvent("onpropertychange",Iy)):t==="focusout"&&vp()}function lE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(Ns)}function uE(t,e){if(t==="click")return rl(e)}function cE(t,e){if(t==="input"||t==="change")return rl(e)}function hE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lt=typeof Object.is=="function"?Object.is:hE;function Vs(t,e){if(Lt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wu.call(e,i)||!Lt(t[i],e[i]))return!1}return!0}function wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ep(t,e){var n=wp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wp(n)}}function Sy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ay(){for(var t=window,e=ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ga(t.document)}return e}function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dE(t){var e=Ay(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sy(n.ownerDocument.documentElement,n)){if(r!==null&&Rh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ep(n,s);var a=Ep(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fE=fn&&"documentMode"in document&&11>=document.documentMode,Jr=null,hc=null,ms=null,dc=!1;function Tp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||Jr==null||Jr!==ga(r)||(r=Jr,"selectionStart"in r&&Rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ms&&Vs(ms,r)||(ms=r,r=Ia(hc,"onSelect"),0<r.length&&(e=new Sh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jr)))}function Lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},pu={},Cy={};fn&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function il(t){if(pu[t])return pu[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cy)return pu[t]=e[n];return t}var Ry=il("animationend"),ky=il("animationiteration"),Py=il("animationstart"),xy=il("transitionend"),Ny=new Map,Ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Ny.set(t,e),Dr(e,[t])}for(var mu=0;mu<Ip.length;mu++){var gu=Ip[mu],pE=gu.toLowerCase(),mE=gu[0].toUpperCase()+gu.slice(1);rr(pE,"on"+mE)}rr(Ry,"onAnimationEnd");rr(ky,"onAnimationIteration");rr(Py,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(xy,"onTransitionEnd");pi("onMouseEnter",["mouseout","mouseover"]);pi("onMouseLeave",["mouseout","mouseover"]);pi("onPointerEnter",["pointerout","pointerover"]);pi("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gE=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function Sp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pw(r,e,void 0,t),t.currentTarget=null}function Vy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Sp(i,l,h),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Sp(i,l,h),s=u}}}if(_a)throw t=ac,_a=!1,ac=null,t}function he(t,e){var n=e[yc];n===void 0&&(n=e[yc]=new Set);var r=t+"__bubble";n.has(r)||(Dy(e,t,2,!1),n.add(r))}function yu(t,e,n){var r=0;e&&(r|=4),Dy(n,t,r,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Ds(t){if(!t[Fo]){t[Fo]=!0,Ug.forEach(function(n){n!=="selectionchange"&&(gE.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,yu("selectionchange",!1,e))}}function Dy(t,e,n,r){switch(gy(e)){case 1:var i=xw;break;case 4:i=Nw;break;default:i=Th}n=i.bind(null,e,n,t),i=void 0,!oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _u(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=mr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}ny(function(){var h=s,f=_h(n),m=[];e:{var g=Ny.get(t);if(g!==void 0){var C=Sh,P=t;switch(t){case"keypress":if(na(n)===0)break e;case"keydown":case"keyup":C=Ww;break;case"focusin":P="focus",C=hu;break;case"focusout":P="blur",C=hu;break;case"beforeblur":case"afterblur":C=hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Ow;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Qw;break;case Ry:case ky:case Py:C=Lw;break;case xy:C=Yw;break;case"scroll":C=Vw;break;case"wheel":C=Zw;break;case"copy":case"cut":case"paste":C=jw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=pp}var N=(e&4)!==0,M=!N&&t==="scroll",I=N?g!==null?g+"Capture":null:g;N=[];for(var _=h,S;_!==null;){S=_;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=Rs(_,I),V!=null&&N.push(Os(_,V,S)))),M)break;_=_.return}0<N.length&&(g=new C(g,P,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",g&&n!==ic&&(P=n.relatedTarget||n.fromElement)&&(mr(P)||P[pn]))break e;if((C||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,C?(P=n.relatedTarget||n.toElement,C=h,P=P?mr(P):null,P!==null&&(M=Or(P),P!==M||P.tag!==5&&P.tag!==6)&&(P=null)):(C=null,P=h),C!==P)){if(N=dp,V="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=pp,V="onPointerLeave",I="onPointerEnter",_="pointer"),M=C==null?g:ei(C),S=P==null?g:ei(P),g=new N(V,_+"leave",C,n,f),g.target=M,g.relatedTarget=S,V=null,mr(f)===h&&(N=new N(I,_+"enter",P,n,f),N.target=S,N.relatedTarget=M,V=N),M=V,C&&P)t:{for(N=C,I=P,_=0,S=N;S;S=qr(S))_++;for(S=0,V=I;V;V=qr(V))S++;for(;0<_-S;)N=qr(N),_--;for(;0<S-_;)I=qr(I),S--;for(;_--;){if(N===I||I!==null&&N===I.alternate)break t;N=qr(N),I=qr(I)}N=null}else N=null;C!==null&&Ap(m,g,C,N,!1),P!==null&&M!==null&&Ap(m,M,P,N,!0)}}e:{if(g=h?ei(h):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var b=oE;else if(yp(g))if(Ty)b=cE;else{b=lE;var j=aE}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=uE);if(b&&(b=b(t,h))){Ey(m,b,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Zu(g,"number",g.value)}switch(j=h?ei(h):window,t){case"focusin":(yp(j)||j.contentEditable==="true")&&(Jr=j,hc=h,ms=null);break;case"focusout":ms=hc=Jr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,Tp(m,n,f);break;case"selectionchange":if(fE)break;case"keydown":case"keyup":Tp(m,n,f)}var w;if(Ch)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Yr?vy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(_y&&n.locale!=="ko"&&(Yr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Yr&&(w=yy()):(xn=f,Ih="value"in xn?xn.value:xn.textContent,Yr=!0)),j=Ia(h,y),0<j.length&&(y=new fp(y,t,null,n,f),m.push({event:y,listeners:j}),w?y.data=w:(w=wy(n),w!==null&&(y.data=w)))),(w=tE?nE(t,n):rE(t,n))&&(h=Ia(h,"onBeforeInput"),0<h.length&&(f=new fp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=w))}Vy(m,e)})}function Os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ia(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Rs(t,n),s!=null&&r.unshift(Os(t,s,i)),s=Rs(t,e),s!=null&&r.push(Os(t,s,i))),t=t.return}return r}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ap(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Rs(n,s),u!=null&&a.unshift(Os(n,u,l))):i||(u=Rs(n,s),u!=null&&a.push(Os(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var yE=/\r\n?/g,_E=/\u0000|\uFFFD/g;function Cp(t){return(typeof t=="string"?t:""+t).replace(yE,`
`).replace(_E,"")}function jo(t,e,n){if(e=Cp(e),Cp(t)!==e&&n)throw Error(L(425))}function Sa(){}var fc=null,pc=null;function mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,vE=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,wE=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(t){return Rp.resolve(null).then(t).catch(EE)}:gc;function EE(t){setTimeout(function(){throw t})}function vu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xs(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Pi=Math.random().toString(36).slice(2),zt="__reactFiber$"+Pi,Ms="__reactProps$"+Pi,pn="__reactContainer$"+Pi,yc="__reactEvents$"+Pi,TE="__reactListeners$"+Pi,IE="__reactHandles$"+Pi;function mr(t){var e=t[zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kp(t);t!==null;){if(n=t[zt])return n;t=kp(t)}return e}t=n,n=t.parentNode}return null}function no(t){return t=t[zt]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function sl(t){return t[Ms]||null}var _c=[],ti=-1;function ir(t){return{current:t}}function fe(t){0>ti||(t.current=_c[ti],_c[ti]=null,ti--)}function ue(t,e){ti++,_c[ti]=t.current,t.current=e}var Kn={},Ze=ir(Kn),ct=ir(!1),Sr=Kn;function mi(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function Aa(){fe(ct),fe(Ze)}function Pp(t,e,n){if(Ze.current!==Kn)throw Error(L(168));ue(Ze,e),ue(ct,n)}function Oy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,aw(t)||"Unknown",i));return _e({},n,r)}function Ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,Sr=Ze.current,ue(Ze,t),ue(ct,ct.current),!0}function xp(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Oy(t,e,Sr),r.__reactInternalMemoizedMergedChildContext=t,fe(ct),fe(Ze),ue(Ze,t)):fe(ct),ue(ct,n)}var ln=null,ol=!1,wu=!1;function My(t){ln===null?ln=[t]:ln.push(t)}function SE(t){ol=!0,My(t)}function sr(){if(!wu&&ln!==null){wu=!0;var t=0,e=se;try{var n=ln;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ln=null,ol=!1}catch(i){throw ln!==null&&(ln=ln.slice(t+1)),oy(vh,sr),i}finally{se=e,wu=!1}}return null}var ni=[],ri=0,Ra=null,ka=0,Et=[],Tt=0,Ar=null,un=1,cn="";function dr(t,e){ni[ri++]=ka,ni[ri++]=Ra,Ra=t,ka=e}function by(t,e,n){Et[Tt++]=un,Et[Tt++]=cn,Et[Tt++]=Ar,Ar=t;var r=un;t=cn;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,un=1<<32-Mt(e)+i|n<<i|r,cn=s+t}else un=1<<s|n<<i|r,cn=t}function kh(t){t.return!==null&&(dr(t,1),by(t,1,0))}function Ph(t){for(;t===Ra;)Ra=ni[--ri],ni[ri]=null,ka=ni[--ri],ni[ri]=null;for(;t===Ar;)Ar=Et[--Tt],Et[Tt]=null,cn=Et[--Tt],Et[Tt]=null,un=Et[--Tt],Et[Tt]=null}var gt=null,mt=null,pe=!1,Dt=null;function Ly(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,mt=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,mt=null,!0):!1;default:return!1}}function vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wc(t){if(pe){var e=mt;if(e){var n=e;if(!Np(t,e)){if(vc(t))throw Error(L(418));e=bn(n.nextSibling);var r=gt;e&&Np(t,e)?Ly(r,n):(t.flags=t.flags&-4097|2,pe=!1,gt=t)}}else{if(vc(t))throw Error(L(418));t.flags=t.flags&-4097|2,pe=!1,gt=t}}}function Vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function Uo(t){if(t!==gt)return!1;if(!pe)return Vp(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mc(t.type,t.memoizedProps)),e&&(e=mt)){if(vc(t))throw Fy(),Error(L(418));for(;e;)Ly(t,e),e=bn(e.nextSibling)}if(Vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=gt?bn(t.stateNode.nextSibling):null;return!0}function Fy(){for(var t=mt;t;)t=bn(t.nextSibling)}function gi(){mt=gt=null,pe=!1}function xh(t){Dt===null?Dt=[t]:Dt.push(t)}var AE=En.ReactCurrentBatchConfig;function es(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Bo(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dp(t){var e=t._init;return e(t._payload)}function jy(t){function e(I,_){if(t){var S=I.deletions;S===null?(I.deletions=[_],I.flags|=16):S.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=Un(I,_),I.index=0,I.sibling=null,I}function s(I,_,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<_?(I.flags|=2,_):S):(I.flags|=2,_)):(I.flags|=1048576,_)}function a(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,S,V){return _===null||_.tag!==6?(_=Ru(S,I.mode,V),_.return=I,_):(_=i(_,S),_.return=I,_)}function u(I,_,S,V){var b=S.type;return b===Xr?f(I,_,S.props.children,V,S.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cn&&Dp(b)===_.type)?(V=i(_,S.props),V.ref=es(I,_,S),V.return=I,V):(V=ua(S.type,S.key,S.props,null,I.mode,V),V.ref=es(I,_,S),V.return=I,V)}function h(I,_,S,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=ku(S,I.mode,V),_.return=I,_):(_=i(_,S.children||[]),_.return=I,_)}function f(I,_,S,V,b){return _===null||_.tag!==7?(_=Er(S,I.mode,V,b),_.return=I,_):(_=i(_,S),_.return=I,_)}function m(I,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ru(""+_,I.mode,S),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case xo:return S=ua(_.type,_.key,_.props,null,I.mode,S),S.ref=es(I,null,_),S.return=I,S;case Qr:return _=ku(_,I.mode,S),_.return=I,_;case Cn:var V=_._init;return m(I,V(_._payload),S)}if(is(_)||Qi(_))return _=Er(_,I.mode,S,null),_.return=I,_;Bo(I,_)}return null}function g(I,_,S,V){var b=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return b!==null?null:l(I,_,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xo:return S.key===b?u(I,_,S,V):null;case Qr:return S.key===b?h(I,_,S,V):null;case Cn:return b=S._init,g(I,_,b(S._payload),V)}if(is(S)||Qi(S))return b!==null?null:f(I,_,S,V,null);Bo(I,S)}return null}function C(I,_,S,V,b){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(_,I,""+V,b);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case xo:return I=I.get(V.key===null?S:V.key)||null,u(_,I,V,b);case Qr:return I=I.get(V.key===null?S:V.key)||null,h(_,I,V,b);case Cn:var j=V._init;return C(I,_,S,j(V._payload),b)}if(is(V)||Qi(V))return I=I.get(S)||null,f(_,I,V,b,null);Bo(_,V)}return null}function P(I,_,S,V){for(var b=null,j=null,w=_,y=_=0,v=null;w!==null&&y<S.length;y++){w.index>y?(v=w,w=null):v=w.sibling;var T=g(I,w,S[y],V);if(T===null){w===null&&(w=v);break}t&&w&&T.alternate===null&&e(I,w),_=s(T,_,y),j===null?b=T:j.sibling=T,j=T,w=v}if(y===S.length)return n(I,w),pe&&dr(I,y),b;if(w===null){for(;y<S.length;y++)w=m(I,S[y],V),w!==null&&(_=s(w,_,y),j===null?b=w:j.sibling=w,j=w);return pe&&dr(I,y),b}for(w=r(I,w);y<S.length;y++)v=C(w,I,y,S[y],V),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?y:v.key),_=s(v,_,y),j===null?b=v:j.sibling=v,j=v);return t&&w.forEach(function(A){return e(I,A)}),pe&&dr(I,y),b}function N(I,_,S,V){var b=Qi(S);if(typeof b!="function")throw Error(L(150));if(S=b.call(S),S==null)throw Error(L(151));for(var j=b=null,w=_,y=_=0,v=null,T=S.next();w!==null&&!T.done;y++,T=S.next()){w.index>y?(v=w,w=null):v=w.sibling;var A=g(I,w,T.value,V);if(A===null){w===null&&(w=v);break}t&&w&&A.alternate===null&&e(I,w),_=s(A,_,y),j===null?b=A:j.sibling=A,j=A,w=v}if(T.done)return n(I,w),pe&&dr(I,y),b;if(w===null){for(;!T.done;y++,T=S.next())T=m(I,T.value,V),T!==null&&(_=s(T,_,y),j===null?b=T:j.sibling=T,j=T);return pe&&dr(I,y),b}for(w=r(I,w);!T.done;y++,T=S.next())T=C(w,I,y,T.value,V),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?y:T.key),_=s(T,_,y),j===null?b=T:j.sibling=T,j=T);return t&&w.forEach(function(k){return e(I,k)}),pe&&dr(I,y),b}function M(I,_,S,V){if(typeof S=="object"&&S!==null&&S.type===Xr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case xo:e:{for(var b=S.key,j=_;j!==null;){if(j.key===b){if(b=S.type,b===Xr){if(j.tag===7){n(I,j.sibling),_=i(j,S.props.children),_.return=I,I=_;break e}}else if(j.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Cn&&Dp(b)===j.type){n(I,j.sibling),_=i(j,S.props),_.ref=es(I,j,S),_.return=I,I=_;break e}n(I,j);break}else e(I,j);j=j.sibling}S.type===Xr?(_=Er(S.props.children,I.mode,V,S.key),_.return=I,I=_):(V=ua(S.type,S.key,S.props,null,I.mode,V),V.ref=es(I,_,S),V.return=I,I=V)}return a(I);case Qr:e:{for(j=S.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(I,_.sibling),_=i(_,S.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=ku(S,I.mode,V),_.return=I,I=_}return a(I);case Cn:return j=S._init,M(I,_,j(S._payload),V)}if(is(S))return P(I,_,S,V);if(Qi(S))return N(I,_,S,V);Bo(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,S),_.return=I,I=_):(n(I,_),_=Ru(S,I.mode,V),_.return=I,I=_),a(I)):n(I,_)}return M}var yi=jy(!0),Uy=jy(!1),Pa=ir(null),xa=null,ii=null,Nh=null;function Vh(){Nh=ii=xa=null}function Dh(t){var e=Pa.current;fe(Pa),t._currentValue=e}function Ec(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hi(t,e){xa=t,Nh=ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(Nh!==t)if(t={context:t,memoizedValue:e,next:null},ii===null){if(xa===null)throw Error(L(308));ii=t,xa.dependencies={lanes:0,firstContext:t}}else ii=ii.next=t;return e}var gr=null;function Oh(t){gr===null?gr=[t]:gr.push(t)}function By(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Oh(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rn=!1;function Mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ln(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,Oh(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function ra(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wh(t,n)}}function Op(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Na(t,e,n,r){var i=t.updateQueue;Rn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;a=0,f=h=u=null,l=s;do{var g=l.lane,C=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(g=e,C=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){m=P.call(C,m,g);break e}m=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,g=typeof P=="function"?P.call(C,m,g):P,g==null)break e;m=_e({},m,g);break e;case 2:Rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else C={eventTime:C,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=C,u=m):f=f.next=C,a|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Rr|=a,t.lanes=a,t.memoizedState=m}}function Mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var ro={},qt=ir(ro),bs=ir(ro),Ls=ir(ro);function yr(t){if(t===ro)throw Error(L(174));return t}function bh(t,e){switch(ue(Ls,e),ue(bs,t),ue(qt,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tc(e,t)}fe(qt),ue(qt,e)}function _i(){fe(qt),fe(bs),fe(Ls)}function $y(t){yr(Ls.current);var e=yr(qt.current),n=tc(e,t.type);e!==n&&(ue(bs,t),ue(qt,n))}function Lh(t){bs.current===t&&(fe(qt),fe(bs))}var ge=ir(0);function Va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eu=[];function Fh(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var ia=En.ReactCurrentDispatcher,Tu=En.ReactCurrentBatchConfig,Cr=0,ye=null,Pe=null,Oe=null,Da=!1,gs=!1,Fs=0,CE=0;function Ke(){throw Error(L(321))}function jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Lt(t[n],e[n]))return!1;return!0}function Uh(t,e,n,r,i,s){if(Cr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ia.current=t===null||t.memoizedState===null?xE:NE,t=n(r,i),gs){s=0;do{if(gs=!1,Fs=0,25<=s)throw Error(L(301));s+=1,Oe=Pe=null,e.updateQueue=null,ia.current=VE,t=n(r,i)}while(gs)}if(ia.current=Oa,e=Pe!==null&&Pe.next!==null,Cr=0,Oe=Pe=ye=null,Da=!1,e)throw Error(L(300));return t}function Bh(){var t=Fs!==0;return Fs=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function kt(){if(Pe===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=Oe===null?ye.memoizedState:Oe.next;if(e!==null)Oe=e,Pe=t;else{if(t===null)throw Error(L(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Oe===null?ye.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function js(t,e){return typeof e=="function"?e(t):e}function Iu(t){var e=kt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,h=s;do{var f=h.lane;if((Cr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,a=r):u=u.next=m,ye.lanes|=f,Rr|=f}h=h.next}while(h!==null&&h!==s);u===null?a=r:u.next=l,Lt(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,Rr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=kt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Lt(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qy(){}function Hy(t,e){var n=ye,r=kt(),i=e(),s=!Lt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,zh(Gy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Us(9,Ky.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(L(349));Cr&30||Wy(n,e,i)}return i}function Wy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ky(t,e,n,r){e.value=n,e.getSnapshot=r,Qy(e)&&Xy(t)}function Gy(t,e,n){return n(function(){Qy(e)&&Xy(t)})}function Qy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lt(t,n)}catch{return!0}}function Xy(t){var e=mn(t,1);e!==null&&bt(e,t,1,-1)}function bp(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:t},e.queue=t,t=t.dispatch=PE.bind(null,ye,t),[e.memoizedState,t]}function Us(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Yy(){return kt().memoizedState}function sa(t,e,n,r){var i=Ut();ye.flags|=t,i.memoizedState=Us(1|e,n,void 0,r===void 0?null:r)}function al(t,e,n,r){var i=kt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var a=Pe.memoizedState;if(s=a.destroy,r!==null&&jh(r,a.deps)){i.memoizedState=Us(e,n,s,r);return}}ye.flags|=t,i.memoizedState=Us(1|e,n,s,r)}function Lp(t,e){return sa(8390656,8,t,e)}function zh(t,e){return al(2048,8,t,e)}function Jy(t,e){return al(4,2,t,e)}function Zy(t,e){return al(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,al(4,4,e_.bind(null,e,t),n)}function $h(){}function n_(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return Cr&21?(Lt(n,e)||(n=uy(),ye.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function RE(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=Tu.transition;Tu.transition={};try{t(!1),e()}finally{se=n,Tu.transition=r}}function s_(){return kt().memoizedState}function kE(t,e,n){var r=jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))a_(e,n);else if(n=By(t,e,n,r),n!==null){var i=rt();bt(n,t,r,i),l_(n,e,r)}}function PE(t,e,n){var r=jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))a_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Lt(l,a)){var u=e.interleaved;u===null?(i.next=i,Oh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=By(t,e,i,r),n!==null&&(i=rt(),bt(n,t,r,i),l_(n,e,r))}}function o_(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function a_(t,e){gs=Da=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wh(t,n)}}var Oa={readContext:Rt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},xE={readContext:Rt,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:Lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sa(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sa(4194308,4,t,e)},useInsertionEffect:function(t,e){return sa(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kE.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:bp,useDebugValue:$h,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=bp(!1),e=t[0];return t=RE.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=Ut();if(pe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Me===null)throw Error(L(349));Cr&30||Wy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lp(Gy.bind(null,r,s,t),[t]),r.flags|=2048,Us(9,Ky.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ut(),e=Me.identifierPrefix;if(pe){var n=cn,r=un;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NE={readContext:Rt,useCallback:n_,useContext:Rt,useEffect:zh,useImperativeHandle:t_,useInsertionEffect:Jy,useLayoutEffect:Zy,useMemo:r_,useReducer:Iu,useRef:Yy,useState:function(){return Iu(js)},useDebugValue:$h,useDeferredValue:function(t){var e=kt();return i_(e,Pe.memoizedState,t)},useTransition:function(){var t=Iu(js)[0],e=kt().memoizedState;return[t,e]},useMutableSource:qy,useSyncExternalStore:Hy,useId:s_,unstable_isNewReconciler:!1},VE={readContext:Rt,useCallback:n_,useContext:Rt,useEffect:zh,useImperativeHandle:t_,useInsertionEffect:Jy,useLayoutEffect:Zy,useMemo:r_,useReducer:Su,useRef:Yy,useState:function(){return Su(js)},useDebugValue:$h,useDeferredValue:function(t){var e=kt();return Pe===null?e.memoizedState=t:i_(e,Pe.memoizedState,t)},useTransition:function(){var t=Su(js)[0],e=kt().memoizedState;return[t,e]},useMutableSource:qy,useSyncExternalStore:Hy,useId:s_,unstable_isNewReconciler:!1};function Nt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ll={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=jn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ln(t,s,i),e!==null&&(bt(e,t,i,r),ra(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=jn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ln(t,s,i),e!==null&&(bt(e,t,i,r),ra(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=jn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ln(t,i,r),e!==null&&(bt(e,t,r,n),ra(e,t,r))}};function Fp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Vs(n,r)||!Vs(i,s):!0}function u_(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=ht(e)?Sr:Ze.current,r=e.contextTypes,s=(r=r!=null)?mi(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ll.enqueueReplaceState(e,e.state,null)}function Ic(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Mh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=ht(e)?Sr:Ze.current,i.context=mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ll.enqueueReplaceState(i,i.state,null),Na(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function vi(t,e){try{var n="",r=e;do n+=ow(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DE=typeof WeakMap=="function"?WeakMap:Map;function c_(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ba||(ba=!0,Oc=r),Sc(t,e)},n}function h_(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sc(t,e),typeof r!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Up(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KE.bind(null,t,e,n),e.then(t,t))}function Bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Ln(n,e,1))),n.lanes|=1),t)}var OE=En.ReactCurrentOwner,ut=!1;function nt(t,e,n,r){e.child=t===null?Uy(e,null,n,r):yi(e,t.child,n,r)}function $p(t,e,n,r,i){n=n.render;var s=e.ref;return hi(e,i),r=Uh(t,e,n,r,s,i),n=Bh(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(pe&&n&&kh(e),e.flags|=1,nt(t,e,r,i),e.child)}function qp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d_(t,e,s,r,i)):(t=ua(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vs,n(a,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=Un(s,r),t.ref=e.ref,t.return=e,e.child=t}function d_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vs(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,gn(t,e,i)}return Ac(t,e,n,r,i)}function f_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(oi,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(oi,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(oi,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(oi,pt),pt|=r;return nt(t,e,i,n),e.child}function p_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ac(t,e,n,r,i){var s=ht(n)?Sr:Ze.current;return s=mi(e,s),hi(e,i),n=Uh(t,e,n,r,s,i),r=Bh(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(pe&&r&&kh(e),e.flags|=1,nt(t,e,n,i),e.child)}function Hp(t,e,n,r,i){if(ht(n)){var s=!0;Ca(e)}else s=!1;if(hi(e,i),e.stateNode===null)oa(t,e),u_(e,n,r),Ic(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=Rt(h):(h=ht(n)?Sr:Ze.current,h=mi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&jp(e,a,r,h),Rn=!1;var g=e.memoizedState;a.state=g,Na(e,r,a,i),u=e.memoizedState,l!==r||g!==u||ct.current||Rn?(typeof f=="function"&&(Tc(e,n,f,r),u=e.memoizedState),(l=Rn||Fp(e,n,l,r,g,u,h))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,zy(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Nt(e.type,l),a.props=h,m=e.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rt(u):(u=ht(n)?Sr:Ze.current,u=mi(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||g!==u)&&jp(e,a,r,u),Rn=!1,g=e.memoizedState,a.state=g,Na(e,r,a,i);var P=e.memoizedState;l!==m||g!==P||ct.current||Rn?(typeof C=="function"&&(Tc(e,n,C,r),P=e.memoizedState),(h=Rn||Fp(e,n,h,r,g,P,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,P,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,P,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),a.props=r,a.state=P,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Cc(t,e,n,r,s,i)}function Cc(t,e,n,r,i,s){p_(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&xp(e,n,!1),gn(t,e,s);r=e.stateNode,OE.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=yi(e,t.child,null,s),e.child=yi(e,null,l,s)):nt(t,e,l,s),e.memoizedState=r.state,i&&xp(e,n,!0),e.child}function m_(t){var e=t.stateNode;e.pendingContext?Pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pp(t,e.context,!1),bh(t,e.containerInfo)}function Wp(t,e,n,r,i){return gi(),xh(i),e.flags|=256,nt(t,e,n,r),e.child}var Rc={dehydrated:null,treeContext:null,retryLane:0};function kc(t){return{baseLanes:t,cachePool:null,transitions:null}}function g_(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ge,i&1),t===null)return wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=hl(a,r,0,null),t=Er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kc(n),e.memoizedState=Rc,t):qh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ME(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Un(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Un(l,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?kc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Rc,r}return s=t.child,t=s.sibling,r=Un(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qh(t,e){return e=hl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zo(t,e,n,r){return r!==null&&xh(r),yi(e,t.child,null,n),t=qh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ME(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Au(Error(L(422))),zo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hl({mode:"visible",children:r.children},i,0,null),s=Er(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&yi(e,t.child,null,a),e.child.memoizedState=kc(a),e.memoizedState=Rc,s);if(!(e.mode&1))return zo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=Au(s,r,void 0),zo(t,e,a,r)}if(l=(a&t.childLanes)!==0,ut||l){if(r=Me,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),bt(r,t,i,-1))}return Xh(),r=Au(Error(L(421))),zo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=GE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mt=bn(i.nextSibling),gt=e,pe=!0,Dt=null,t!==null&&(Et[Tt++]=un,Et[Tt++]=cn,Et[Tt++]=Ar,un=t.id,cn=t.overflow,Ar=e),e=qh(e,r.children),e.flags|=4096,e)}function Kp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ec(t.return,e,n)}function Cu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function y_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kp(t,n,e);else if(t.tag===19)Kp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cu(e,!0,n,null,s);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Un(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Un(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bE(t,e,n){switch(e.tag){case 3:m_(e),gi();break;case 5:$y(e);break;case 1:ht(e.type)&&Ca(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(Pa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?g_(t,e,n):(ue(ge,ge.current&1),t=gn(t,e,n),t!==null?t.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return y_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,f_(t,e,n)}return gn(t,e,n)}var __,Pc,v_,w_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pc=function(){};v_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yr(qt.current);var s=null;switch(n){case"input":i=Yu(t,i),r=Yu(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=ec(t,i),r=ec(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sa)}nc(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(As.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(As.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};w_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ts(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LE(t,e,n){var r=e.pendingProps;switch(Ph(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ht(e.type)&&Aa(),Ge(e),null;case 3:return r=e.stateNode,_i(),fe(ct),fe(Ze),Fh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(Lc(Dt),Dt=null))),Pc(t,e),Ge(e),null;case 5:Lh(e);var i=yr(Ls.current);if(n=e.type,t!==null&&e.stateNode!=null)v_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Ge(e),null}if(t=yr(qt.current),Uo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zt]=e,r[Ms]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<os.length;i++)he(os[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":np(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":ip(r,s),he("invalid",r)}nc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,l,t),i=["children",""+l]):As.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&he("scroll",r)}switch(n){case"input":No(r),rp(r,s,!0);break;case"textarea":No(r),sp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[zt]=e,t[Ms]=r,__(t,e,!1,!1),e.stateNode=t;e:{switch(a=rc(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<os.length;i++)he(os[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":np(t,r),i=Yu(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),he("invalid",t);break;case"textarea":ip(t,r),i=ec(t,r),he("invalid",t);break;default:i=r}nc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Yg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Qg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Cs(t,u):typeof u=="number"&&Cs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(As.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&ph(t,s,u,a))}switch(n){case"input":No(t),rp(t,r,!1);break;case"textarea":No(t),sp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ai(t,!!r.multiple,s,!1):r.defaultValue!=null&&ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)w_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=yr(Ls.current),yr(qt.current),Uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[zt]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=e,e.stateNode=r}return Ge(e),null;case 13:if(fe(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&mt!==null&&e.mode&1&&!(e.flags&128))Fy(),gi(),e.flags|=98560,s=!1;else if(s=Uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[zt]=e}else gi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Dt!==null&&(Lc(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?xe===0&&(xe=3):Xh())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return _i(),Pc(t,e),t===null&&Ds(e.stateNode.containerInfo),Ge(e),null;case 10:return Dh(e.type._context),Ge(e),null;case 17:return ht(e.type)&&Aa(),Ge(e),null;case 19:if(fe(ge),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)ts(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Va(t),a!==null){for(e.flags|=128,ts(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>wi&&(e.flags|=128,r=!0,ts(s,!1),e.lanes=4194304)}else{if(!r)if(t=Va(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pe)return Ge(e),null}else 2*Se()-s.renderingStartTime>wi&&n!==1073741824&&(e.flags|=128,r=!0,ts(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return Qh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function FE(t,e){switch(Ph(e),e.tag){case 1:return ht(e.type)&&Aa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _i(),fe(ct),fe(Ze),Fh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(fe(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ge),null;case 4:return _i(),null;case 10:return Dh(e.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var $o=!1,Ye=!1,jE=typeof WeakSet=="function"?WeakSet:Set,q=null;function si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function xc(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var Gp=!1;function UE(t,e){if(fc=Ea,t=Ay(),Rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var C;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==s||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(C=m.firstChild)!==null;)g=m,m=C;for(;;){if(m===t)break t;if(g===n&&++h===i&&(l=a),g===s&&++f===r&&(u=a),(C=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:t,selectionRange:n},Ea=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,M=P.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:Nt(e.type,N),M);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(V){Ee(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return P=Gp,Gp=!1,P}function ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xc(e,n,s)}i=i.next}while(i!==r)}}function ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Nc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E_(t){var e=t.alternate;e!==null&&(t.alternate=null,E_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zt],delete e[Ms],delete e[yc],delete e[TE],delete e[IE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T_(t){return t.tag===5||t.tag===3||t.tag===4}function Qp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sa));else if(r!==4&&(t=t.child,t!==null))for(Vc(t,e,n),t=t.sibling;t!==null;)Vc(t,e,n),t=t.sibling}function Dc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}var Le=null,Vt=!1;function An(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:Ye||si(n,e);case 6:var r=Le,i=Vt;Le=null,An(t,e,n),Le=r,Vt=i,Le!==null&&(Vt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Vt?(t=Le,n=n.stateNode,t.nodeType===8?vu(t.parentNode,n):t.nodeType===1&&vu(t,n),xs(t)):vu(Le,n.stateNode));break;case 4:r=Le,i=Vt,Le=n.stateNode.containerInfo,Vt=!0,An(t,e,n),Le=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&xc(n,e,a),i=i.next}while(i!==r)}An(t,e,n);break;case 1:if(!Ye&&(si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ee(n,e,l)}An(t,e,n);break;case 21:An(t,e,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,An(t,e,n),Ye=r):An(t,e,n);break;default:An(t,e,n)}}function Xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jE),e.forEach(function(r){var i=QE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Vt=!1;break e;case 3:Le=l.stateNode.containerInfo,Vt=!0;break e;case 4:Le=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(Le===null)throw Error(L(160));I_(s,a,i),Le=null,Vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ee(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S_(e,t),e=e.sibling}function S_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),jt(t),r&4){try{ys(3,t,t.return),ul(3,t)}catch(N){Ee(t,t.return,N)}try{ys(5,t,t.return)}catch(N){Ee(t,t.return,N)}}break;case 1:xt(e,t),jt(t),r&512&&n!==null&&si(n,n.return);break;case 5:if(xt(e,t),jt(t),r&512&&n!==null&&si(n,n.return),t.flags&32){var i=t.stateNode;try{Cs(i,"")}catch(N){Ee(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Wg(i,s),rc(l,a);var h=rc(l,s);for(a=0;a<u.length;a+=2){var f=u[a],m=u[a+1];f==="style"?Yg(i,m):f==="dangerouslySetInnerHTML"?Qg(i,m):f==="children"?Cs(i,m):ph(i,f,m,h)}switch(l){case"input":Ju(i,s);break;case"textarea":Kg(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?ai(i,!!s.multiple,C,!1):g!==!!s.multiple&&(s.defaultValue!=null?ai(i,!!s.multiple,s.defaultValue,!0):ai(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ms]=s}catch(N){Ee(t,t.return,N)}}break;case 6:if(xt(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ee(t,t.return,N)}}break;case 3:if(xt(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xs(e.containerInfo)}catch(N){Ee(t,t.return,N)}break;case 4:xt(e,t),jt(t);break;case 13:xt(e,t),jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kh=Se())),r&4&&Xp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ye=(h=Ye)||f,xt(e,t),Ye=h):xt(e,t),jt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(g=q,C=g.child,g.tag){case 0:case 11:case 14:case 15:ys(4,g,g.return);break;case 1:si(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Ee(r,n,N)}}break;case 5:si(g,g.return);break;case 22:if(g.memoizedState!==null){Jp(m);continue}}C!==null?(C.return=g,q=C):Jp(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Xg("display",a))}catch(N){Ee(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){Ee(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:xt(e,t),jt(t),r&4&&Xp(t);break;case 21:break;default:xt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T_(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cs(i,""),r.flags&=-33);var s=Qp(t);Dc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Qp(t);Vc(t,l,a);break;default:throw Error(L(161))}}catch(u){Ee(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BE(t,e,n){q=t,A_(t)}function A_(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||$o;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ye;l=$o;var h=Ye;if($o=a,(Ye=u)&&!h)for(q=i;q!==null;)a=q,u=a.child,a.tag===22&&a.memoizedState!==null?Zp(i):u!==null?(u.return=a,q=u):Zp(i);for(;s!==null;)q=s,A_(s),s=s.sibling;q=i,$o=l,Ye=h}Yp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Yp(t)}}function Yp(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ye||ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mp(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&xs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ye||e.flags&512&&Nc(e)}catch(g){Ee(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Jp(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Zp(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ul(4,e)}catch(u){Ee(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ee(e,i,u)}}var s=e.return;try{Nc(e)}catch(u){Ee(e,s,u)}break;case 5:var a=e.return;try{Nc(e)}catch(u){Ee(e,a,u)}}}catch(u){Ee(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var zE=Math.ceil,Ma=En.ReactCurrentDispatcher,Hh=En.ReactCurrentOwner,Ct=En.ReactCurrentBatchConfig,ne=0,Me=null,Ce=null,Be=0,pt=0,oi=ir(0),xe=0,Bs=null,Rr=0,cl=0,Wh=0,_s=null,lt=null,Kh=0,wi=1/0,on=null,ba=!1,Oc=null,Fn=null,qo=!1,Nn=null,La=0,vs=0,Mc=null,aa=-1,la=0;function rt(){return ne&6?Se():aa!==-1?aa:aa=Se()}function jn(t){return t.mode&1?ne&2&&Be!==0?Be&-Be:AE.transition!==null?(la===0&&(la=uy()),la):(t=se,t!==0||(t=window.event,t=t===void 0?16:gy(t.type)),t):1}function bt(t,e,n,r){if(50<vs)throw vs=0,Mc=null,Error(L(185));eo(t,n,r),(!(ne&2)||t!==Me)&&(t===Me&&(!(ne&2)&&(cl|=n),xe===4&&Pn(t,Be)),dt(t,r),n===1&&ne===0&&!(e.mode&1)&&(wi=Se()+500,ol&&sr()))}function dt(t,e){var n=t.callbackNode;Aw(t,e);var r=wa(t,t===Me?Be:0);if(r===0)n!==null&&lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lp(n),e===1)t.tag===0?SE(em.bind(null,t)):My(em.bind(null,t)),wE(function(){!(ne&6)&&sr()}),n=null;else{switch(cy(r)){case 1:n=vh;break;case 4:n=ay;break;case 16:n=va;break;case 536870912:n=ly;break;default:n=va}n=D_(n,C_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C_(t,e){if(aa=-1,la=0,ne&6)throw Error(L(327));var n=t.callbackNode;if(di()&&t.callbackNode!==n)return null;var r=wa(t,t===Me?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fa(t,r);else{e=r;var i=ne;ne|=2;var s=k_();(Me!==t||Be!==e)&&(on=null,wi=Se()+500,wr(t,e));do try{HE();break}catch(l){R_(t,l)}while(!0);Vh(),Ma.current=s,ne=i,Ce!==null?e=0:(Me=null,Be=0,e=xe)}if(e!==0){if(e===2&&(i=lc(t),i!==0&&(r=i,e=bc(t,i))),e===1)throw n=Bs,wr(t,0),Pn(t,r),dt(t,Se()),n;if(e===6)Pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!$E(i)&&(e=Fa(t,r),e===2&&(s=lc(t),s!==0&&(r=s,e=bc(t,s))),e===1))throw n=Bs,wr(t,0),Pn(t,r),dt(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:fr(t,lt,on);break;case 3:if(Pn(t,r),(r&130023424)===r&&(e=Kh+500-Se(),10<e)){if(wa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gc(fr.bind(null,t,lt,on),e);break}fr(t,lt,on);break;case 4:if(Pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Mt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zE(r/1960))-r,10<r){t.timeoutHandle=gc(fr.bind(null,t,lt,on),r);break}fr(t,lt,on);break;case 5:fr(t,lt,on);break;default:throw Error(L(329))}}}return dt(t,Se()),t.callbackNode===n?C_.bind(null,t):null}function bc(t,e){var n=_s;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Fa(t,e),t!==2&&(e=lt,lt=n,e!==null&&Lc(e)),t}function Lc(t){lt===null?lt=t:lt.push.apply(lt,t)}function $E(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Lt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pn(t,e){for(e&=~Wh,e&=~cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function em(t){if(ne&6)throw Error(L(327));di();var e=wa(t,0);if(!(e&1))return dt(t,Se()),null;var n=Fa(t,e);if(t.tag!==0&&n===2){var r=lc(t);r!==0&&(e=r,n=bc(t,r))}if(n===1)throw n=Bs,wr(t,0),Pn(t,e),dt(t,Se()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,lt,on),dt(t,Se()),null}function Gh(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(wi=Se()+500,ol&&sr())}}function kr(t){Nn!==null&&Nn.tag===0&&!(ne&6)&&di();var e=ne;ne|=1;var n=Ct.transition,r=se;try{if(Ct.transition=null,se=1,t)return t()}finally{se=r,Ct.transition=n,ne=e,!(ne&6)&&sr()}}function Qh(){pt=oi.current,fe(oi)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vE(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Ph(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Aa();break;case 3:_i(),fe(ct),fe(Ze),Fh();break;case 5:Lh(r);break;case 4:_i();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:Dh(r.type._context);break;case 22:case 23:Qh()}n=n.return}if(Me=t,Ce=t=Un(t.current,null),Be=pt=e,xe=0,Bs=null,Wh=cl=Rr=0,lt=_s=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}gr=null}return t}function R_(t,e){do{var n=Ce;try{if(Vh(),ia.current=Oa,Da){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Da=!1}if(Cr=0,Oe=Pe=ye=null,gs=!1,Fs=0,Hh.current=null,n===null||n.return===null){xe=1,Bs=e,Ce=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=Bp(a);if(C!==null){C.flags&=-257,zp(C,a,l,s,e),C.mode&1&&Up(s,h,e),e=C,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Up(s,h,e),Xh();break e}u=Error(L(426))}}else if(pe&&l.mode&1){var M=Bp(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),zp(M,a,l,s,e),xh(vi(u,l));break e}}s=u=vi(u,l),xe!==4&&(xe=2),_s===null?_s=[s]:_s.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=c_(s,u,e);Op(s,I);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Fn===null||!Fn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=h_(s,l,e);Op(s,V);break e}}s=s.return}while(s!==null)}x_(n)}catch(b){e=b,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function k_(){var t=Ma.current;return Ma.current=Oa,t===null?Oa:t}function Xh(){(xe===0||xe===3||xe===2)&&(xe=4),Me===null||!(Rr&268435455)&&!(cl&268435455)||Pn(Me,Be)}function Fa(t,e){var n=ne;ne|=2;var r=k_();(Me!==t||Be!==e)&&(on=null,wr(t,e));do try{qE();break}catch(i){R_(t,i)}while(!0);if(Vh(),ne=n,Ma.current=r,Ce!==null)throw Error(L(261));return Me=null,Be=0,xe}function qE(){for(;Ce!==null;)P_(Ce)}function HE(){for(;Ce!==null&&!gw();)P_(Ce)}function P_(t){var e=V_(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?x_(t):Ce=e,Hh.current=null}function x_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FE(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ce=null;return}}else if(n=LE(n,e,pt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);xe===0&&(xe=5)}function fr(t,e,n){var r=se,i=Ct.transition;try{Ct.transition=null,se=1,WE(t,e,n,r)}finally{Ct.transition=i,se=r}return null}function WE(t,e,n,r){do di();while(Nn!==null);if(ne&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cw(t,s),t===Me&&(Ce=Me=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,D_(va,function(){return di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ct.transition,Ct.transition=null;var a=se;se=1;var l=ne;ne|=4,Hh.current=null,UE(t,n),S_(n,t),dE(pc),Ea=!!fc,pc=fc=null,t.current=n,BE(n),yw(),ne=l,se=a,Ct.transition=s}else t.current=n;if(qo&&(qo=!1,Nn=t,La=i),s=t.pendingLanes,s===0&&(Fn=null),ww(n.stateNode),dt(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ba)throw ba=!1,t=Oc,Oc=null,t;return La&1&&t.tag!==0&&di(),s=t.pendingLanes,s&1?t===Mc?vs++:(vs=0,Mc=t):vs=0,sr(),null}function di(){if(Nn!==null){var t=cy(La),e=Ct.transition,n=se;try{if(Ct.transition=null,se=16>t?16:t,Nn===null)var r=!1;else{if(t=Nn,Nn=null,La=0,ne&6)throw Error(L(331));var i=ne;for(ne|=4,q=t.current;q!==null;){var s=q,a=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:ys(8,f,s)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var g=f.sibling,C=f.return;if(E_(f),f===h){q=null;break}if(g!==null){g.return=C,q=g;break}q=C}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var M=N.sibling;N.sibling=null,N=M}while(N!==null)}}q=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,q=a;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ys(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,q=I;break e}q=s.return}}var _=t.current;for(q=_;q!==null;){a=q;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,q=S;else e:for(a=_;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ul(9,l)}}catch(b){Ee(l,l.return,b)}if(l===a){q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,q=V;break e}q=l.return}}if(ne=i,sr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(tl,t)}catch{}r=!0}return r}finally{se=n,Ct.transition=e}}return!1}function tm(t,e,n){e=vi(n,e),e=c_(t,e,1),t=Ln(t,e,1),e=rt(),t!==null&&(eo(t,1,e),dt(t,e))}function Ee(t,e,n){if(t.tag===3)tm(t,t,n);else for(;e!==null;){if(e.tag===3){tm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fn===null||!Fn.has(r))){t=vi(n,t),t=h_(e,t,1),e=Ln(e,t,1),t=rt(),e!==null&&(eo(e,1,t),dt(e,t));break}}e=e.return}}function KE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(Be&n)===n&&(xe===4||xe===3&&(Be&130023424)===Be&&500>Se()-Kh?wr(t,0):Wh|=n),dt(t,e)}function N_(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=rt();t=mn(t,e),t!==null&&(eo(t,e,n),dt(t,n))}function GE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N_(t,n)}function QE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),N_(t,n)}var V_;V_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,bE(t,e,n);ut=!!(t.flags&131072)}else ut=!1,pe&&e.flags&1048576&&by(e,ka,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oa(t,e),t=e.pendingProps;var i=mi(e,Ze.current);hi(e,n),i=Uh(null,e,r,t,i,n);var s=Bh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,Ca(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mh(e),i.updater=ll,e.stateNode=i,i._reactInternals=e,Ic(e,r,t,n),e=Cc(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&kh(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=YE(r),t=Nt(r,t),i){case 0:e=Ac(null,e,r,t,n);break e;case 1:e=Hp(null,e,r,t,n);break e;case 11:e=$p(null,e,r,t,n);break e;case 14:e=qp(null,e,r,Nt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Ac(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Hp(t,e,r,i,n);case 3:e:{if(m_(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,zy(t,e),Na(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=vi(Error(L(423)),e),e=Wp(t,e,r,n,i);break e}else if(r!==i){i=vi(Error(L(424)),e),e=Wp(t,e,r,n,i);break e}else for(mt=bn(e.stateNode.containerInfo.firstChild),gt=e,pe=!0,Dt=null,n=Uy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gi(),r===i){e=gn(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return $y(e),t===null&&wc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,mc(r,i)?a=null:s!==null&&mc(r,s)&&(e.flags|=32),p_(t,e),nt(t,e,a,n),e.child;case 6:return t===null&&wc(e),null;case 13:return g_(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=yi(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),$p(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,ue(Pa,r._currentValue),r._currentValue=a,s!==null)if(Lt(s.value,a)){if(s.children===i.children&&!ct.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=hn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ec(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ec(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,hi(e,n),i=Rt(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=Nt(r,e.pendingProps),i=Nt(r.type,i),qp(t,e,r,i,n);case 15:return d_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),oa(t,e),e.tag=1,ht(r)?(t=!0,Ca(e)):t=!1,hi(e,n),u_(e,r,i),Ic(e,r,i,n),Cc(null,e,r,!0,t,n);case 19:return y_(t,e,n);case 22:return f_(t,e,n)}throw Error(L(156,e.tag))};function D_(t,e){return oy(t,e)}function XE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new XE(t,e,n,r)}function Yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YE(t){if(typeof t=="function")return Yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gh)return 11;if(t===yh)return 14}return 2}function Un(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ua(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Yh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Xr:return Er(n.children,i,s,e);case mh:a=8,i|=8;break;case Ku:return t=At(12,n,e,i|2),t.elementType=Ku,t.lanes=s,t;case Gu:return t=At(13,n,e,i),t.elementType=Gu,t.lanes=s,t;case Qu:return t=At(19,n,e,i),t.elementType=Qu,t.lanes=s,t;case $g:return hl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:a=10;break e;case zg:a=9;break e;case gh:a=11;break e;case yh:a=14;break e;case Cn:a=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=At(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Er(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function hl(t,e,n,r){return t=At(22,t,r,e),t.elementType=$g,t.lanes=n,t.stateNode={isHidden:!1},t}function Ru(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function ku(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lu(0),this.expirationTimes=lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jh(t,e,n,r,i,s,a,l,u){return t=new JE(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mh(s),t}function ZE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function O_(t){if(!t)return Kn;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(ht(n))return Oy(t,n,e)}return e}function M_(t,e,n,r,i,s,a,l,u){return t=Jh(n,r,!0,t,i,s,a,l,u),t.context=O_(null),n=t.current,r=rt(),i=jn(n),s=hn(r,i),s.callback=e??null,Ln(n,s,i),t.current.lanes=i,eo(t,i,r),dt(t,r),t}function dl(t,e,n,r){var i=e.current,s=rt(),a=jn(i);return n=O_(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ln(i,e,a),t!==null&&(bt(t,i,a,s),ra(t,i,a)),a}function ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zh(t,e){nm(t,e),(t=t.alternate)&&nm(t,e)}function eT(){return null}var b_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ed(t){this._internalRoot=t}fl.prototype.render=ed.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));dl(t,e,null,null)};fl.prototype.unmount=ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){dl(null,t,null,null)}),e[pn]=null}};function fl(t){this._internalRoot=t}fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=fy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kn.length&&e!==0&&e<kn[n].priority;n++);kn.splice(n,0,t),n===0&&my(t)}};function td(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rm(){}function tT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=ja(a);s.call(h)}}var a=M_(e,r,t,0,null,!1,!1,"",rm);return t._reactRootContainer=a,t[pn]=a.current,Ds(t.nodeType===8?t.parentNode:t),kr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=ja(u);l.call(h)}}var u=Jh(t,0,!1,null,null,!1,!1,"",rm);return t._reactRootContainer=u,t[pn]=u.current,Ds(t.nodeType===8?t.parentNode:t),kr(function(){dl(e,u,n,r)}),u}function ml(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=ja(a);l.call(u)}}dl(e,a,t,i)}else a=tT(n,e,t,i,r);return ja(a)}hy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ss(e.pendingLanes);n!==0&&(wh(e,n|1),dt(e,Se()),!(ne&6)&&(wi=Se()+500,sr()))}break;case 13:kr(function(){var r=mn(t,1);if(r!==null){var i=rt();bt(r,t,1,i)}}),Zh(t,1)}};Eh=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=rt();bt(e,t,134217728,n)}Zh(t,134217728)}};dy=function(t){if(t.tag===13){var e=jn(t),n=mn(t,e);if(n!==null){var r=rt();bt(n,t,e,r)}Zh(t,e)}};fy=function(){return se};py=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};sc=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sl(r);if(!i)throw Error(L(90));Hg(r),Ju(r,i)}}}break;case"textarea":Kg(t,n);break;case"select":e=n.value,e!=null&&ai(t,!!n.multiple,e,!1)}};ey=Gh;ty=kr;var nT={usingClientEntryPoint:!1,Events:[no,ei,sl,Jg,Zg,Gh]},ns={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rT={bundleType:ns.bundleType,version:ns.version,rendererPackageName:ns.rendererPackageName,rendererConfig:ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iy(t),t===null?null:t.stateNode},findFiberByHostInstance:ns.findFiberByHostInstance||eT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{tl=Ho.inject(rT),$t=Ho}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nT;_t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(e))throw Error(L(200));return ZE(t,e,null,n)};_t.createRoot=function(t,e){if(!td(t))throw Error(L(299));var n=!1,r="",i=b_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jh(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,Ds(t.nodeType===8?t.parentNode:t),new ed(e)};_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=iy(e),t=t===null?null:t.stateNode,t};_t.flushSync=function(t){return kr(t)};_t.hydrate=function(t,e,n){if(!pl(e))throw Error(L(200));return ml(null,t,e,!0,n)};_t.hydrateRoot=function(t,e,n){if(!td(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=b_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=M_(e,null,t,1,n??null,i,!1,s,a),t[pn]=e.current,Ds(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fl(e)};_t.render=function(t,e,n){if(!pl(e))throw Error(L(200));return ml(null,t,e,!1,n)};_t.unmountComponentAtNode=function(t){if(!pl(t))throw Error(L(40));return t._reactRootContainer?(kr(function(){ml(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};_t.unstable_batchedUpdates=Gh;_t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pl(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return ml(t,e,n,!1,r)};_t.version="18.3.1-next-f1338f8080-20240426";function L_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L_)}catch(t){console.error(t)}}L_(),Lg.exports=_t;var iT=Lg.exports,F_,im=iT;F_=im.createRoot,im.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),io=(t,e)=>{const n=Fe.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:u,...h},f)=>Fe.createElement("svg",{ref:f,...sT,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${oT(t)}`,l].join(" "),...h},[...e.map(([m,g])=>Fe.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=io("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=io("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=io("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=io("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=io("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),hT=()=>{};var sm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},U_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,C=h&63;u||(C=64,a||(g=64)),r.push(n[f],n[m],n[g],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(j_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new fT;const g=s<<2|l>>4;if(r.push(g),h!==64){const C=l<<4&240|h>>2;if(r.push(C),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pT=function(t){const e=j_(t);return U_.encodeByteArray(e,!0)},Ua=function(t){return pT(t).replace(/\./g,"")},mT=function(t){try{return U_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=()=>gT().__FIREBASE_DEFAULTS__,_T=()=>{if(typeof process>"u"||typeof sm>"u")return;const t=sm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mT(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return hT()||yT()||_T()||vT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wT=t=>{var e,n;return(n=(e=nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ET=t=>{const e=wT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},B_=()=>{var t;return(t=nd())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function IT(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ua(JSON.stringify(n)),Ua(JSON.stringify(a)),""].join(".")}const ws={};function AT(){const t={prod:[],emulator:[]};for(const e of Object.keys(ws))ws[e]?t.emulator.push(e):t.prod.push(e);return t}function CT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let om=!1;function RT(t,e){if(typeof window>"u"||typeof document>"u"||!rd(window.location.host)||ws[t]===e||ws[t]||om)return;ws[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=AT().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,C){g.setAttribute("width","24"),g.setAttribute("id",C),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{om=!0,a()},g}function f(g,C){g.setAttribute("id",C),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=CT(r),C=n("text"),P=document.getElementById(C)||document.createElement("span"),N=n("learnmore"),M=document.getElementById(N)||document.createElement("a"),I=n("preprendIcon"),_=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),f(M,N);const V=h();u(_,I),S.append(_,P,M,V),document.body.appendChild(S)}s?(P.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PT(){var t;const e=(t=nd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xT(){return!PT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z_(){try{return typeof indexedDB=="object"}catch{return!1}}function $_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function NT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="FirebaseError";class Mr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VT,Object.setPrototypeOf(this,Mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gl.prototype.create)}}class gl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?DT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Mr(i,l,r)}}function DT(t,e){return t.replace(OT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OT=/\{\$([^}]+)}/g;function Ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(am(s)&&am(a)){if(!Ba(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function am(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new TT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LT(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bT(t){return t===pr?void 0:t}function LT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const jT={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},UT=te.INFO,BT={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},zT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=BT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class q_{constructor(e){this.name=e,this._logLevel=UT,this._logHandler=zT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const $T=(t,e)=>e.some(n=>t instanceof n);let lm,um;function qT(){return lm||(lm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HT(){return um||(um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H_=new WeakMap,Fc=new WeakMap,W_=new WeakMap,Pu=new WeakMap,id=new WeakMap;function WT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(dn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&H_.set(n,t)}).catch(()=>{}),id.set(e,t),e}function KT(t){if(Fc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Fc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GT(t){jc=t(jc)}function QT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xu(this),e,...n);return W_.set(r,e.sort?e.sort():[e]),dn(r)}:HT().includes(t)?function(...e){return t.apply(xu(this),e),dn(H_.get(this))}:function(...e){return dn(t.apply(xu(this),e))}}function XT(t){return typeof t=="function"?QT(t):(t instanceof IDBTransaction&&KT(t),$T(t,qT())?new Proxy(t,jc):t)}function dn(t){if(t instanceof IDBRequest)return WT(t);if(Pu.has(t))return Pu.get(t);const e=XT(t);return e!==t&&(Pu.set(t,e),id.set(e,t)),e}const xu=t=>id.get(t);function yl(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=dn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(dn(a.result),u.oldVersion,u.newVersion,dn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}function Nu(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),dn(n).then(()=>{})}const YT=["get","getKey","getAll","getAllKeys","count"],JT=["put","add","delete","clear"],Vu=new Map;function cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vu.get(e))return Vu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=JT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||YT.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Vu.set(e,s),s}GT(t=>({...t,get:(e,n,r)=>cm(e,n)||t.get(e,n,r),has:(e,n)=>!!cm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",hm="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new q_("@firebase/app"),tI="@firebase/app-compat",nI="@firebase/analytics-compat",rI="@firebase/analytics",iI="@firebase/app-check-compat",sI="@firebase/app-check",oI="@firebase/auth",aI="@firebase/auth-compat",lI="@firebase/database",uI="@firebase/data-connect",cI="@firebase/database-compat",hI="@firebase/functions",dI="@firebase/functions-compat",fI="@firebase/installations",pI="@firebase/installations-compat",mI="@firebase/messaging",gI="@firebase/messaging-compat",yI="@firebase/performance",_I="@firebase/performance-compat",vI="@firebase/remote-config",wI="@firebase/remote-config-compat",EI="@firebase/storage",TI="@firebase/storage-compat",II="@firebase/firestore",SI="@firebase/ai",AI="@firebase/firestore-compat",CI="firebase",RI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="[DEFAULT]",kI={[Uc]:"fire-core",[tI]:"fire-core-compat",[rI]:"fire-analytics",[nI]:"fire-analytics-compat",[sI]:"fire-app-check",[iI]:"fire-app-check-compat",[oI]:"fire-auth",[aI]:"fire-auth-compat",[lI]:"fire-rtdb",[uI]:"fire-data-connect",[cI]:"fire-rtdb-compat",[hI]:"fire-fn",[dI]:"fire-fn-compat",[fI]:"fire-iid",[pI]:"fire-iid-compat",[mI]:"fire-fcm",[gI]:"fire-fcm-compat",[yI]:"fire-perf",[_I]:"fire-perf-compat",[vI]:"fire-rc",[wI]:"fire-rc-compat",[EI]:"fire-gcs",[TI]:"fire-gcs-compat",[II]:"fire-fst",[AI]:"fire-fst-compat",[SI]:"fire-vertex","fire-js":"fire-js",[CI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map,PI=new Map,zc=new Map;function dm(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(zc.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,t);for(const n of za.values())dm(n,t);for(const n of PI.values())dm(n,t);return!0}function _l(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xI(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new gl("app","Firebase",NI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=RI;function K_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=B_()),!n)throw Bn.create("no-options");const s=za.get(i);if(s){if(Ba(n,s.options)&&Ba(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const a=new FT(i);for(const u of zc.values())a.addComponent(u);const l=new VI(n,r,a);return za.set(i,l),l}function G_(t=Bc){const e=za.get(t);if(!e&&t===Bc&&B_())return K_();if(!e)throw Bn.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let i=(r=kI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(l.join(" "));return}Qn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="firebase-heartbeat-database",MI=1,zs="firebase-heartbeat-store";let Du=null;function Q_(){return Du||(Du=yl(OI,MI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Du}async function bI(t){try{const n=(await Q_()).transaction(zs),r=await n.objectStore(zs).get(X_(t));return await n.done,r}catch(e){if(e instanceof Mr)_n.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function fm(t,e){try{const r=(await Q_()).transaction(zs,"readwrite");await r.objectStore(zs).put(e,X_(t)),await r.done}catch(n){if(n instanceof Mr)_n.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function X_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=1024,FI=30;class jI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>FI){const a=zI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pm(),{heartbeatsToSend:r,unsentEntries:i}=UI(this._heartbeatsCache.heartbeats),s=Ua(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return _n.warn(n),""}}}function pm(){return new Date().toISOString().substring(0,10)}function UI(t,e=LI){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),mm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z_()?$_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mm(t){return Ua(JSON.stringify({version:2,heartbeats:t})).length}function zI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t){Qn(new yn("platform-logger",e=>new ZT(e),"PRIVATE")),Qn(new yn("heartbeat",e=>new jI(e),"PRIVATE")),Ht(Uc,hm,t),Ht(Uc,hm,"esm2017"),Ht("fire-js","")}$I("");var gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zn,Y_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.D=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,A,k){for(var E=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)E[wt-2]=arguments[wt];return y.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)T[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;16>A;++A)T[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],A=w.g[2];var k=w.g[3],E=y+(k^v&(A^k))+T[0]+3614090360&4294967295;y=v+(E<<7&4294967295|E>>>25),E=k+(A^y&(v^A))+T[1]+3905402710&4294967295,k=y+(E<<12&4294967295|E>>>20),E=A+(v^k&(y^v))+T[2]+606105819&4294967295,A=k+(E<<17&4294967295|E>>>15),E=v+(y^A&(k^y))+T[3]+3250441966&4294967295,v=A+(E<<22&4294967295|E>>>10),E=y+(k^v&(A^k))+T[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=k+(A^y&(v^A))+T[5]+1200080426&4294967295,k=y+(E<<12&4294967295|E>>>20),E=A+(v^k&(y^v))+T[6]+2821735955&4294967295,A=k+(E<<17&4294967295|E>>>15),E=v+(y^A&(k^y))+T[7]+4249261313&4294967295,v=A+(E<<22&4294967295|E>>>10),E=y+(k^v&(A^k))+T[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=k+(A^y&(v^A))+T[9]+2336552879&4294967295,k=y+(E<<12&4294967295|E>>>20),E=A+(v^k&(y^v))+T[10]+4294925233&4294967295,A=k+(E<<17&4294967295|E>>>15),E=v+(y^A&(k^y))+T[11]+2304563134&4294967295,v=A+(E<<22&4294967295|E>>>10),E=y+(k^v&(A^k))+T[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=k+(A^y&(v^A))+T[13]+4254626195&4294967295,k=y+(E<<12&4294967295|E>>>20),E=A+(v^k&(y^v))+T[14]+2792965006&4294967295,A=k+(E<<17&4294967295|E>>>15),E=v+(y^A&(k^y))+T[15]+1236535329&4294967295,v=A+(E<<22&4294967295|E>>>10),E=y+(A^k&(v^A))+T[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=k+(v^A&(y^v))+T[6]+3225465664&4294967295,k=y+(E<<9&4294967295|E>>>23),E=A+(y^v&(k^y))+T[11]+643717713&4294967295,A=k+(E<<14&4294967295|E>>>18),E=v+(k^y&(A^k))+T[0]+3921069994&4294967295,v=A+(E<<20&4294967295|E>>>12),E=y+(A^k&(v^A))+T[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=k+(v^A&(y^v))+T[10]+38016083&4294967295,k=y+(E<<9&4294967295|E>>>23),E=A+(y^v&(k^y))+T[15]+3634488961&4294967295,A=k+(E<<14&4294967295|E>>>18),E=v+(k^y&(A^k))+T[4]+3889429448&4294967295,v=A+(E<<20&4294967295|E>>>12),E=y+(A^k&(v^A))+T[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=k+(v^A&(y^v))+T[14]+3275163606&4294967295,k=y+(E<<9&4294967295|E>>>23),E=A+(y^v&(k^y))+T[3]+4107603335&4294967295,A=k+(E<<14&4294967295|E>>>18),E=v+(k^y&(A^k))+T[8]+1163531501&4294967295,v=A+(E<<20&4294967295|E>>>12),E=y+(A^k&(v^A))+T[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=k+(v^A&(y^v))+T[2]+4243563512&4294967295,k=y+(E<<9&4294967295|E>>>23),E=A+(y^v&(k^y))+T[7]+1735328473&4294967295,A=k+(E<<14&4294967295|E>>>18),E=v+(k^y&(A^k))+T[12]+2368359562&4294967295,v=A+(E<<20&4294967295|E>>>12),E=y+(v^A^k)+T[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=k+(y^v^A)+T[8]+2272392833&4294967295,k=y+(E<<11&4294967295|E>>>21),E=A+(k^y^v)+T[11]+1839030562&4294967295,A=k+(E<<16&4294967295|E>>>16),E=v+(A^k^y)+T[14]+4259657740&4294967295,v=A+(E<<23&4294967295|E>>>9),E=y+(v^A^k)+T[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=k+(y^v^A)+T[4]+1272893353&4294967295,k=y+(E<<11&4294967295|E>>>21),E=A+(k^y^v)+T[7]+4139469664&4294967295,A=k+(E<<16&4294967295|E>>>16),E=v+(A^k^y)+T[10]+3200236656&4294967295,v=A+(E<<23&4294967295|E>>>9),E=y+(v^A^k)+T[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=k+(y^v^A)+T[0]+3936430074&4294967295,k=y+(E<<11&4294967295|E>>>21),E=A+(k^y^v)+T[3]+3572445317&4294967295,A=k+(E<<16&4294967295|E>>>16),E=v+(A^k^y)+T[6]+76029189&4294967295,v=A+(E<<23&4294967295|E>>>9),E=y+(v^A^k)+T[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=k+(y^v^A)+T[12]+3873151461&4294967295,k=y+(E<<11&4294967295|E>>>21),E=A+(k^y^v)+T[15]+530742520&4294967295,A=k+(E<<16&4294967295|E>>>16),E=v+(A^k^y)+T[2]+3299628645&4294967295,v=A+(E<<23&4294967295|E>>>9),E=y+(A^(v|~k))+T[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=k+(v^(y|~A))+T[7]+1126891415&4294967295,k=y+(E<<10&4294967295|E>>>22),E=A+(y^(k|~v))+T[14]+2878612391&4294967295,A=k+(E<<15&4294967295|E>>>17),E=v+(k^(A|~y))+T[5]+4237533241&4294967295,v=A+(E<<21&4294967295|E>>>11),E=y+(A^(v|~k))+T[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=k+(v^(y|~A))+T[3]+2399980690&4294967295,k=y+(E<<10&4294967295|E>>>22),E=A+(y^(k|~v))+T[10]+4293915773&4294967295,A=k+(E<<15&4294967295|E>>>17),E=v+(k^(A|~y))+T[1]+2240044497&4294967295,v=A+(E<<21&4294967295|E>>>11),E=y+(A^(v|~k))+T[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=k+(v^(y|~A))+T[15]+4264355552&4294967295,k=y+(E<<10&4294967295|E>>>22),E=A+(y^(k|~v))+T[6]+2734768916&4294967295,A=k+(E<<15&4294967295|E>>>17),E=v+(k^(A|~y))+T[13]+1309151649&4294967295,v=A+(E<<21&4294967295|E>>>11),E=y+(A^(v|~k))+T[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=k+(v^(y|~A))+T[11]+3174756917&4294967295,k=y+(E<<10&4294967295|E>>>22),E=A+(y^(k|~v))+T[2]+718787259&4294967295,A=k+(E<<15&4294967295|E>>>17),E=v+(k^(A|~y))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var v=y-this.blockSize,T=this.B,A=this.h,k=0;k<y;){if(A==0)for(;k<=v;)i(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<y;)if(T[A++]=w.charCodeAt(k++),A==this.blockSize){i(this,T),A=0;break}}else for(;k<y;)if(T[A++]=w[k++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var v=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=v&255,v/=256;for(this.u(w),w=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)w[v++]=this.g[y]>>>T&255;return w};function s(w,y){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function a(w,y){this.h=y;for(var v=[],T=!0,A=w.length-1;0<=A;A--){var k=w[A]|0;T&&k==y||(v[A]=k,T=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(y){return new a([y|0],0>y?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return M(h(-w));for(var y=[],v=1,T=0;w>=v;T++)y[T]=w/v|0,v*=4294967296;return new a(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return M(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=m,A=0;A<w.length;A+=8){var k=Math.min(8,w.length-A),E=parseInt(w.substring(A,A+k),y);8>k?(k=h(Math.pow(y,k)),T=T.j(k).add(h(E))):(T=T.j(v),T=T.add(h(E)))}return T}var m=u(0),g=u(1),C=u(16777216);t=a.prototype,t.m=function(){if(N(this))return-M(this).m();for(var w=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(N(this))return"-"+M(this).toString(w);for(var y=h(Math.pow(w,6)),v=this,T="";;){var A=V(v,y).g;v=I(v,A.j(y));var k=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,P(v))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=I(this,w),N(w)?-1:P(w)?0:1};function M(w){for(var y=w.g.length,v=[],T=0;T<y;T++)v[T]=~w.g[T];return new a(v,~w.h).add(g)}t.abs=function(){return N(this)?M(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0,A=0;A<=y;A++){var k=T+(this.i(A)&65535)+(w.i(A)&65535),E=(k>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=E>>>16,k&=65535,E&=65535,v[A]=E<<16|k}return new a(v,v[v.length-1]&-2147483648?-1:0)};function I(w,y){return w.add(M(y))}t.j=function(w){if(P(this)||P(w))return m;if(N(this))return N(w)?M(this).j(M(w)):M(M(this).j(w));if(N(w))return M(this.j(M(w)));if(0>this.l(C)&&0>w.l(C))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var k=this.i(T)>>>16,E=this.i(T)&65535,wt=w.i(A)>>>16,ar=w.i(A)&65535;v[2*T+2*A]+=E*ar,_(v,2*T+2*A),v[2*T+2*A+1]+=k*ar,_(v,2*T+2*A+1),v[2*T+2*A+1]+=E*wt,_(v,2*T+2*A+1),v[2*T+2*A+2]+=k*wt,_(v,2*T+2*A+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new a(v,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function S(w,y){this.g=w,this.h=y}function V(w,y){if(P(y))throw Error("division by zero");if(P(w))return new S(m,m);if(N(w))return y=V(M(w),y),new S(M(y.g),M(y.h));if(N(y))return y=V(w,M(y)),new S(M(y.g),y.h);if(30<w.g.length){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;0>=T.l(w);)v=b(v),T=b(T);var A=j(v,1),k=j(T,1);for(T=j(T,2),v=j(v,2);!P(T);){var E=k.add(T);0>=E.l(w)&&(A=A.add(v),k=E),T=j(T,1),v=j(v,1)}return y=I(w,A.j(y)),new S(A,y)}for(A=m;0<=w.l(y);){for(v=Math.max(1,Math.floor(w.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=h(v),E=k.j(y);N(E)||0<E.l(w);)v-=T,k=h(v),E=k.j(y);P(k)&&(k=g),A=A.add(k),w=I(w,E)}return new S(A,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&w.i(T);return new a(v,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|w.i(T);return new a(v,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^w.i(T);return new a(v,this.h^w.h)};function b(w){for(var y=w.g.length+1,v=[],T=0;T<y;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(v,w.h)}function j(w,y){var v=y>>5;y%=32;for(var T=w.g.length-v,A=[],k=0;k<T;k++)A[k]=0<y?w.i(k+v)>>>y|w.i(k+v+1)<<32-y:w.i(k+v);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Y_=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,zn=a}).apply(typeof gm<"u"?gm:typeof self<"u"?self:typeof window<"u"?window:{});var Ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var J_,as,Z_,ca,$c,ev,tv,nv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ko=="object"&&Ko];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var x=d++;return{value:c(x,o[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function m(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function g(o,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function C(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,x){for(var F=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)F[ae-2]=arguments[ae];return c.prototype[R].apply(p,F)}}function N(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function M(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=o.length||0,x=p.length||0;o.length=R+x;for(let F=0;F<x;F++)o[R+F]=p[F]}else o.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function V(o){return V[" "](o),o}V[" "]=function(){};var b=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function w(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function y(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let x=0;x<v.length;x++)d=v[x],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function k(o){l.setTimeout(()=>{throw o},0)}function E(){var o=K;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class wt{constructor(){this.h=this.g=null}add(c,d){const p=ar.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ar=new I(()=>new Mi,o=>o.reset());class Mi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Jt,U=!1,K=new wt,X=()=>{const o=l.Promise.resolve(void 0);Jt=()=>{o.then(me)}};var me=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){k(d)}var c=ar;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}U=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Zt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function en(o,c){if(Te.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(b){e:{try{V(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:tn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&en.aa.h.call(this)}}P(en,Te);var tn={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),n1=0;function r1(o,c,d,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++n1,this.da=this.fa=!1}function co(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ho(o){this.src=o,this.g={},this.h=0}ho.prototype.add=function(o,c,d,p,R){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var F=Ml(o,c,p,R);return-1<F?(c=o[F],d||(c.fa=!1)):(c=new r1(c,this.src,x,!!p,R),c.fa=d,o.push(c)),c};function Ol(o,c){var d=c.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=R)&&Array.prototype.splice.call(p,R,1),x&&(co(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ml(o,c,d,p){for(var R=0;R<o.length;++R){var x=o[R];if(!x.da&&x.listener==c&&x.capture==!!d&&x.ha==p)return R}return-1}var bl="closure_lm_"+(1e6*Math.random()|0),Ll={};function Xd(o,c,d,p,R){if(Array.isArray(c)){for(var x=0;x<c.length;x++)Xd(o,c[x],d,p,R);return null}return d=Zd(d),o&&o[nn]?o.K(c,d,h(p)?!!p.capture:!!p,R):i1(o,c,d,!1,p,R)}function i1(o,c,d,p,R,x){if(!c)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,ae=jl(o);if(ae||(o[bl]=ae=new ho(o)),d=ae.add(c,d,p,F,x),d.proxy)return d;if(p=s1(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Zt||(R=F),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(Jd(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function s1(){function o(d){return c.call(o.src,o.listener,d)}const c=o1;return o}function Yd(o,c,d,p,R){if(Array.isArray(c))for(var x=0;x<c.length;x++)Yd(o,c[x],d,p,R);else p=h(p)?!!p.capture:!!p,d=Zd(d),o&&o[nn]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],d=Ml(x,d,p,R),-1<d&&(co(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=jl(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ml(c,d,p,R)),(d=-1<o?c[o]:null)&&Fl(d))}function Fl(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[nn])Ol(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Jd(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=jl(c))?(Ol(d,o),d.h==0&&(d.src=null,c[bl]=null)):co(o)}}}function Jd(o){return o in Ll?Ll[o]:Ll[o]="on"+o}function o1(o,c){if(o.da)o=!0;else{c=new en(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Fl(o),o=d.call(p,c)}return o}function jl(o){return o=o[bl],o instanceof ho?o:null}var Ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zd(o){return typeof o=="function"?o:(o[Ul]||(o[Ul]=function(c){return o.handleEvent(c)}),o[Ul])}function qe(){oe.call(this),this.i=new ho(this),this.M=this,this.F=null}P(qe,oe),qe.prototype[nn]=!0,qe.prototype.removeEventListener=function(o,c,d,p){Yd(this,o,c,d,p)};function et(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Te(c,o);else if(c instanceof Te)c.target=c.target||o;else{var R=c;c=new Te(p,o),T(c,R)}if(R=!0,d)for(var x=d.length-1;0<=x;x--){var F=c.g=d[x];R=fo(F,p,!0,c)&&R}if(F=c.g=o,R=fo(F,p,!0,c)&&R,R=fo(F,p,!1,c)&&R,d)for(x=0;x<d.length;x++)F=c.g=d[x],R=fo(F,p,!1,c)&&R}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)co(d[p]);delete o.g[c],o.h--}}this.F=null},qe.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},qe.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function fo(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,x=0;x<c.length;++x){var F=c[x];if(F&&!F.da&&F.capture==d){var ae=F.listener,be=F.ha||F.src;F.fa&&Ol(o.i,F),R=ae.call(be,p)!==!1&&R}}return R&&!p.defaultPrevented}function ef(o,c,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function tf(o){o.g=ef(()=>{o.g=null,o.i&&(o.i=!1,tf(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class a1 extends oe{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:tf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(o){oe.call(this),this.h=o,this.g={}}P(bi,oe);var nf=[];function rf(o){j(o.g,function(c,d){this.g.hasOwnProperty(d)&&Fl(c)},o),o.g={}}bi.prototype.N=function(){bi.aa.N.call(this),rf(this)},bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bl=l.JSON.stringify,l1=l.JSON.parse,u1=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function zl(){}zl.prototype.h=null;function sf(o){return o.h||(o.h=o.i())}function of(){}var Li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $l(){Te.call(this,"d")}P($l,Te);function ql(){Te.call(this,"c")}P(ql,Te);var lr={},af=null;function po(){return af=af||new qe}lr.La="serverreachability";function lf(o){Te.call(this,lr.La,o)}P(lf,Te);function Fi(o){const c=po();et(c,new lf(c))}lr.STAT_EVENT="statevent";function uf(o,c){Te.call(this,lr.STAT_EVENT,o),this.stat=c}P(uf,Te);function tt(o){const c=po();et(c,new uf(c,o))}lr.Ma="timingevent";function cf(o,c){Te.call(this,lr.Ma,o),this.size=c}P(cf,Te);function ji(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Ui(){this.g=!0}Ui.prototype.xa=function(){this.g=!1};function c1(o,c,d,p,R,x){o.info(function(){if(o.g)if(x)for(var F="",ae=x.split("&"),be=0;be<ae.length;be++){var re=ae[be].split("=");if(1<re.length){var He=re[0];re=re[1];var We=He.split("_");F=2<=We.length&&We[1]=="type"?F+(He+"="+re+"&"):F+(He+"=redacted&")}}else F=null;else F=x;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+F})}function h1(o,c,d,p,R,x,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+x+" "+F})}function Ur(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+f1(o,d)+(p?" "+p:"")})}function d1(o,c){o.info(function(){return"TIMEOUT: "+c})}Ui.prototype.info=function(){};function f1(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var x=R[0];if(x!="noop"&&x!="stop"&&x!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return Bl(d)}catch{return c}}var mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hl;function go(){}P(go,zl),go.prototype.g=function(){return new XMLHttpRequest},go.prototype.i=function(){return{}},Hl=new go;function Tn(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new df}function df(){this.i=null,this.g="",this.h=!1}var ff={},Wl={};function Kl(o,c,d){o.L=1,o.v=wo(rn(c)),o.m=d,o.P=!0,pf(o,null)}function pf(o,c){o.F=Date.now(),yo(o),o.A=rn(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),kf(d.i,"t",p),o.C=0,d=o.j.J,o.h=new df,o.g=Wf(o.j,d?c:null,!o.m),0<o.O&&(o.M=new a1(g(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(nf[0]=R.toString()),R=nf);for(var x=0;x<R.length;x++){var F=Xd(d,R[x],p||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Fi(),c1(o.i,o.u,o.A,o.l,o.R,o.m)}Tn.prototype.ca=function(o){o=o.target;const c=this.M;c&&sn(o)==3?c.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)e:{const We=sn(this.g);var c=this.g.Ba();const $r=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||Mf(this.g)))){this.J||We!=4||c==7||(c==8||0>=$r?Fi(3):Fi(2)),Gl(this);var d=this.g.Z();this.X=d;t:if(mf(this)){var p=Mf(this.g);o="";var R=p.length,x=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Bi(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(x&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,h1(this.i,this.u,this.A,this.l,this.R,We,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,be=this.g;if((ae=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ae)){var re=ae;break t}}re=null}if(d=re)Ur(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ql(this,d);else{this.o=!1,this.s=3,tt(12),ur(this),Bi(this);break e}}if(this.P){d=!0;let Pt;for(;!this.J&&this.C<F.length;)if(Pt=p1(this,F),Pt==Wl){We==4&&(this.s=4,tt(14),d=!1),Ur(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==ff){this.s=4,tt(15),Ur(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else Ur(this.i,this.l,Pt,null),Ql(this,Pt);if(mf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||F.length!=0||this.h.h||(this.s=1,tt(16),d=!1),this.o=this.o&&d,!d)Ur(this.i,this.l,F,"[Invalid Chunked Response]"),ur(this),Bi(this);else if(0<F.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),tu(He),He.M=!0,tt(11))}}else Ur(this.i,this.l,F,null),Ql(this,F);We==4&&ur(this),this.o&&!this.J&&(We==4?zf(this.j,this):(this.o=!1,yo(this)))}else N1(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),ur(this),Bi(this)}}}catch{}finally{}};function mf(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function p1(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?Wl:(d=Number(c.substring(d,p)),isNaN(d)?ff:(p+=1,p+d>c.length?Wl:(c=c.slice(p,p+d),o.C=p+d,c)))}Tn.prototype.cancel=function(){this.J=!0,ur(this)};function yo(o){o.S=Date.now()+o.I,gf(o,o.I)}function gf(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ji(g(o.ba,o),c)}function Gl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Tn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(d1(this.i,this.A),this.L!=2&&(Fi(),tt(17)),ur(this),this.s=2,Bi(this)):gf(this,this.S-o)};function Bi(o){o.j.G==0||o.J||zf(o.j,o)}function ur(o){Gl(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,rf(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ql(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Xl(d.h,o))){if(!o.K&&Xl(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Co(d),So(d);else break e;eu(d),tt(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=ji(g(d.Za,d),6e3));if(1>=vf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else hr(d,11)}else if((o.K||d.g==o)&&Co(d),!_(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let re=R[c];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const He=re[3];He!=null&&(d.la=He,d.j.info("VER="+d.la));const We=re[4];We!=null&&(d.Aa=We,d.j.info("SVER="+d.Aa));const $r=re[5];$r!=null&&typeof $r=="number"&&0<$r&&(p=1.5*$r,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Pt=o.g;if(Pt){const ko=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ko){var x=p.h;x.g||ko.indexOf("spdy")==-1&&ko.indexOf("quic")==-1&&ko.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Yl(x,x.h),x.h=null))}if(p.D){const nu=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;nu&&(p.ya=nu,ce(p.I,p.D,nu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=o;if(p.qa=Hf(p,p.J?p.ia:null,p.W),F.K){wf(p.h,F);var ae=F,be=p.L;be&&(ae.I=be),ae.B&&(Gl(ae),yo(ae)),p.g=F}else Uf(p);0<d.i.length&&Ao(d)}else re[0]!="stop"&&re[0]!="close"||hr(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?hr(d,7):Zl(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Fi(4)}catch{}}var m1=class{constructor(o,c){this.g=o,this.map=c}};function yf(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _f(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function vf(o){return o.h?1:o.g?o.g.size:0}function Xl(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Yl(o,c){o.g?o.g.add(c):o.h=c}function wf(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}yf.prototype.cancel=function(){if(this.i=Ef(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ef(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return N(o.i)}function g1(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function y1(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function Tf(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=y1(o),p=g1(o),R=p.length,x=0;x<R;x++)c.call(void 0,p[x],d&&d[x],o)}var If=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _1(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var x=o[d].substring(0,p);R=o[d].substring(p+1)}else x=o[d];c(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function cr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof cr){this.h=o.h,_o(this,o.j),this.o=o.o,this.g=o.g,vo(this,o.s),this.l=o.l;var c=o.i,d=new qi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Sf(this,d),this.m=o.m}else o&&(c=String(o).match(If))?(this.h=!1,_o(this,c[1]||"",!0),this.o=zi(c[2]||""),this.g=zi(c[3]||"",!0),vo(this,c[4]),this.l=zi(c[5]||"",!0),Sf(this,c[6]||"",!0),this.m=zi(c[7]||"")):(this.h=!1,this.i=new qi(null,this.h))}cr.prototype.toString=function(){var o=[],c=this.j;c&&o.push($i(c,Af,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push($i(c,Af,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push($i(d,d.charAt(0)=="/"?E1:w1,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",$i(d,I1)),o.join("")};function rn(o){return new cr(o)}function _o(o,c,d){o.j=d?zi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function vo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Sf(o,c,d){c instanceof qi?(o.i=c,S1(o.i,o.h)):(d||(c=$i(c,T1)),o.i=new qi(c,o.h))}function ce(o,c,d){o.i.set(c,d)}function wo(o){return ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function zi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function $i(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,v1),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function v1(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Af=/[#\/\?@]/g,w1=/[#\?:]/g,E1=/[#\?]/g,T1=/[#\?@]/g,I1=/#/g;function qi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function In(o){o.g||(o.g=new Map,o.h=0,o.i&&_1(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=qi.prototype,t.add=function(o,c){In(this),this.i=null,o=Br(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Cf(o,c){In(o),c=Br(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Rf(o,c){return In(o),c=Br(o,c),o.g.has(c)}t.forEach=function(o,c){In(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(c,R,p,this)},this)},this)},t.na=function(){In(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=o[p];for(let x=0;x<R.length;x++)d.push(c[p])}return d},t.V=function(o){In(this);let c=[];if(typeof o=="string")Rf(this,o)&&(c=c.concat(this.g.get(Br(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},t.set=function(o,c){return In(this),this.i=null,o=Br(this,o),Rf(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function kf(o,c,d){Cf(o,c),0<d.length&&(o.i=null,o.g.set(Br(o,c),N(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const x=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var R=x;F[p]!==""&&(R+="="+encodeURIComponent(String(F[p]))),o.push(R)}}return this.i=o.join("&")};function Br(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function S1(o,c){c&&!o.j&&(In(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(Cf(this,p),kf(this,R,d))},o)),o.j=c}function A1(o,c){const d=new Ui;if(l.Image){const p=new Image;p.onload=C(Sn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=C(Sn,d,"TestLoadImage: error",!1,c,p),p.onabort=C(Sn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=C(Sn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function C1(o,c){const d=new Ui,p=new AbortController,R=setTimeout(()=>{p.abort(),Sn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(R),x.ok?Sn(d,"TestPingServer: ok",!0,c):Sn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Sn(d,"TestPingServer: error",!1,c)})}function Sn(o,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function R1(){this.g=new u1}function k1(o,c,d){const p=d||"";try{Tf(o,function(R,x){let F=R;h(R)&&(F=Bl(R)),c.push(p+x+"="+encodeURIComponent(F))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function Eo(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Eo,zl),Eo.prototype.g=function(){return new To(this.l,this.j)},Eo.prototype.i=function(o){return function(){return o}}({});function To(o,c){qe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(To,qe),t=To.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Wi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Wi(this)),this.g&&(this.readyState=3,Wi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pf(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pf(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Hi(this):Wi(this),this.readyState==3&&Pf(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Hi(this))},t.Qa=function(o){this.g&&(this.response=o,Hi(this))},t.ga=function(){this.g&&Hi(this)};function Hi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Wi(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Wi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(To.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function xf(o){let c="";return j(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Jl(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=xf(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ce(o,c,d))}function we(o){qe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(we,qe);var P1=/^https?$/i,x1=["POST","PUT"];t=we.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hl.g(),this.v=this.o?sf(this.o):sf(Hl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){Nf(this,x);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(x1,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,F]of d)this.g.setRequestHeader(x,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Of(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Nf(this,x)}};function Nf(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Vf(o),Io(o)}function Vf(o){o.A||(o.A=!0,et(o,"complete"),et(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,et(this,"complete"),et(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Df(this):this.bb())},t.bb=function(){Df(this)};function Df(o){if(o.h&&typeof a<"u"&&(!o.v[1]||sn(o)!=4||o.Z()!=2)){if(o.u&&sn(o)==4)ef(o.Ea,0,o);else if(et(o,"readystatechange"),sn(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=F===0){var R=String(o.D).match(If)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!P1.test(R?R.toLowerCase():"")}d=p}if(d)et(o,"complete"),et(o,"success");else{o.m=6;try{var x=2<sn(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Vf(o)}}finally{Io(o)}}}}function Io(o,c){if(o.g){Of(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||et(o,"ready");try{d.onreadystatechange=p}catch{}}}function Of(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function sn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),l1(c)}};function Mf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function N1(o){const c={};o=(o.g&&2<=sn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var d=A(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=c[R]||[];c[R]=x,x.push(d)}w(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ki(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function bf(o){this.Aa=0,this.i=[],this.j=new Ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ki("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ki("baseRetryDelayMs",5e3,o),this.cb=Ki("retryDelaySeedMs",1e4,o),this.Wa=Ki("forwardChannelMaxRetries",2,o),this.wa=Ki("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new yf(o&&o.concurrentRequestLimit),this.Da=new R1,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bf.prototype,t.la=8,t.G=1,t.connect=function(o,c,d,p){tt(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Hf(this,null,this.W),Ao(this)};function Zl(o){if(Lf(o),o.G==3){var c=o.U++,d=rn(o.I);if(ce(d,"SID",o.K),ce(d,"RID",c),ce(d,"TYPE","terminate"),Gi(o,d),c=new Tn(o,o.j,c),c.L=2,c.v=wo(rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Wf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),yo(c)}qf(o)}function So(o){o.g&&(tu(o),o.g.cancel(),o.g=null)}function Lf(o){So(o),o.u&&(l.clearTimeout(o.u),o.u=null),Co(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ao(o){if(!_f(o.h)&&!o.s){o.s=!0;var c=o.Ga;Jt||X(),U||(Jt(),U=!0),K.add(c,o),o.B=0}}function V1(o,c){return vf(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ji(g(o.Ga,o,c),$f(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Tn(this,this.j,o);let x=this.o;if(this.S&&(x?(x=y(x),T(x,this.S)):x=this.S),this.m!==null||this.O||(R.H=x,x=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=jf(this,R,c),d=rn(this.I),ce(d,"RID",o),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),Gi(this,d),x&&(this.O?c="headers="+encodeURIComponent(String(xf(x)))+"&"+c:this.m&&Jl(d,this.m,x)),Yl(this.h,R),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",c),ce(d,"SID","null"),R.T=!0,Kl(R,d,null)):Kl(R,d,c),this.G=2}}else this.G==3&&(o?Ff(this,o):this.i.length==0||_f(this.h)||Ff(this))};function Ff(o,c){var d;c?d=c.l:d=o.U++;const p=rn(o.I);ce(p,"SID",o.K),ce(p,"RID",d),ce(p,"AID",o.T),Gi(o,p),o.m&&o.o&&Jl(p,o.m,o.o),d=new Tn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=jf(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Yl(o.h,d),Kl(d,p,c)}function Gi(o,c){o.H&&j(o.H,function(d,p){ce(c,p,d)}),o.l&&Tf({},function(d,p){ce(c,p,d)})}function jf(o,c,d){d=Math.min(o.i.length,d);var p=o.l?g(o.l.Na,o.l,o):null;e:{var R=o.i;let x=-1;for(;;){const F=["count="+d];x==-1?0<d?(x=R[0].g,F.push("ofs="+x)):x=0:F.push("ofs="+x);let ae=!0;for(let be=0;be<d;be++){let re=R[be].g;const He=R[be].map;if(re-=x,0>re)x=Math.max(0,R[be].g-100),ae=!1;else try{k1(He,F,"req"+re+"_")}catch{p&&p(He)}}if(ae){p=F.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function Uf(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Jt||X(),U||(Jt(),U=!0),K.add(c,o),o.v=0}}function eu(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ji(g(o.Fa,o),$f(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Bf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ji(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),So(this),Bf(this))};function tu(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Bf(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=rn(o.qa);ce(c,"RID","rpc"),ce(c,"SID",o.K),ce(c,"AID",o.T),ce(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ce(c,"TO",o.ja),ce(c,"TYPE","xmlhttp"),Gi(o,c),o.m&&o.o&&Jl(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=wo(rn(c)),d.m=null,d.P=!0,pf(d,o)}t.Za=function(){this.C!=null&&(this.C=null,So(this),eu(this),tt(19))};function Co(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function zf(o,c){var d=null;if(o.g==c){Co(o),tu(o),o.g=null;var p=2}else if(Xl(o.h,c))d=c.D,wf(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=po(),et(p,new cf(p,d)),Ao(o)}else Uf(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&V1(o,c)||p==2&&eu(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:hr(o,5);break;case 4:hr(o,10);break;case 3:hr(o,6);break;default:hr(o,2)}}}function $f(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function hr(o,c){if(o.j.info("Error code "+c),c==2){var d=g(o.fb,o),p=o.Xa;const R=!p;p=new cr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||_o(p,"https"),wo(p),R?A1(p.toString(),d):C1(p.toString(),d)}else tt(2);o.G=0,o.l&&o.l.sa(c),qf(o),Lf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function qf(o){if(o.G=0,o.ka=[],o.l){const c=Ef(o.h);(c.length!=0||o.i.length!=0)&&(M(o.ka,c),M(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Hf(o,c,d){var p=d instanceof cr?rn(d):new cr(d);if(p.g!="")c&&(p.g=c+"."+p.g),vo(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var x=new cr(null);p&&_o(x,p),c&&(x.g=c),R&&vo(x,R),d&&(x.l=d),p=x}return d=o.D,c=o.ya,d&&c&&ce(p,d,c),ce(p,"VER",o.la),Gi(o,p),p}function Wf(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new we(new Eo({eb:d})):new we(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kf(){}t=Kf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ro(){}Ro.prototype.g=function(o,c){return new ft(o,c)};function ft(o,c){qe.call(this),this.g=new bf(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!_(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new zr(this)}P(ft,qe),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Zl(this.g)},ft.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Bl(o),o=d);c.i.push(new m1(c.Ya++,o)),c.G==3&&Ao(c)},ft.prototype.N=function(){this.g.l=null,delete this.j,Zl(this.g),delete this.g,ft.aa.N.call(this)};function Gf(o){$l.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Gf,$l);function Qf(){ql.call(this),this.status=1}P(Qf,ql);function zr(o){this.g=o}P(zr,Kf),zr.prototype.ua=function(){et(this.g,"a")},zr.prototype.ta=function(o){et(this.g,new Gf(o))},zr.prototype.sa=function(o){et(this.g,new Qf)},zr.prototype.ra=function(){et(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,nv=function(){return new Ro},tv=function(){return po()},ev=lr,$c={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,ca=mo,hf.COMPLETE="complete",Z_=hf,of.EventType=Li,Li.OPEN="a",Li.CLOSE="b",Li.ERROR="c",Li.MESSAGE="d",qe.prototype.listen=qe.prototype.K,as=of,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,J_=we}).apply(typeof Ko<"u"?Ko:typeof self<"u"?self:typeof window<"u"?window:{});const ym="@firebase/firestore",_m="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new q_("@firebase/firestore");function Hr(){return Pr.logLevel}function z(t,...e){if(Pr.logLevel<=te.DEBUG){const n=e.map(sd);Pr.debug(`Firestore (${xi}): ${t}`,...n)}}function vn(t,...e){if(Pr.logLevel<=te.ERROR){const n=e.map(sd);Pr.error(`Firestore (${xi}): ${t}`,...n)}}function Xn(t,...e){if(Pr.logLevel<=te.WARN){const n=e.map(sd);Pr.warn(`Firestore (${xi}): ${t}`,...n)}}function sd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,rv(t,r,n)}function rv(t,e,n){let r=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw vn(r),new Error(r)}function ie(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||rv(e,i,r)}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Mr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class HI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WI{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ie(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $n,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $n)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string",31837,{l:r}),new iv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class KI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class GI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new KI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xI(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ie(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=XI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function qc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Y(r,i);{const s=sv(),a=YI(s.encode(wm(t,n)),s.encode(wm(e,n)));return a!==0?a:Y(r,i)}}n+=r>65535?2:1}return Y(t.length,e.length)}function wm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function YI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Y(t[n],e[n]);return Y(t.length,e.length)}function Ei(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="__name__";class Bt{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&W(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Bt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Y(e.length,n.length)}static compareSegments(e,n){const r=Bt.isNumericId(e),i=Bt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Bt.extractNumericId(e).compare(Bt.extractNumericId(n)):qc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zn.fromString(e.substring(4,e.length-2))}}class le extends Bt{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const JI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Bt{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return JI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Em}static keyField(){return new Ue([Em])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(le.fromString(e))}static fromName(e){return new H(le.fromString(e).popFirst(5))}static empty(){return new H(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t,e,n){if(!n)throw new B(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZI(t,e,n,r){if(e===!0&&r===!0)throw new B(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tm(t){if(!H.isDocumentKey(t))throw new B(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Im(t){if(H.isDocumentKey(t))throw new B(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function av(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function vl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W(12329,{type:typeof t})}function qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vl(t);throw new B(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function so(t,e){if(!av(t))throw new B(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(D.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=-62135596800,Am=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Am);return new de(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Sm)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Am}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(so(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:ke("string",de._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new de(0,0))}static max(){return new G(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=-1;function eS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new Yn(i,H.empty(),e)}function tS(t){return new Yn(t.readTime,t.key,$s)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(G.min(),H.empty(),$s)}static max(){return new Yn(G.max(),H.empty(),$s)}}function nS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==rS)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function sS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}wl.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=-1;function El(t){return t==null}function $a(t){return t===0&&1/t==-1/0}function oS(t){return typeof t=="number"&&Number.isInteger(t)&&!$a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="";function aS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cm(e)),e=lS(t.get(n),e);return Cm(e)}function lS(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case lv:n+="";break;default:n+=s}}return n}function Cm(t){return t+lv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Go(this.root,e,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Go(this.root,e,this.comparator,!0)}}class Go{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new km(this.data.getIterator())}getIteratorFrom(e){return new km(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class km{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Ve(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cv("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const uS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(ie(!!t,39018),typeof t=="string"){let e=0;const n=uS.exec(t);if(ie(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zn(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="server_timestamp",dv="__type__",fv="__previous_value__",pv="__local_write_time__";function ld(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[dv])===null||n===void 0?void 0:n.stringValue)===hv}function Tl(t){const e=t.mapValue.fields[fv];return ld(e)?Tl(e):e}function qs(t){const e=Jn(t.mapValue.fields[pv].timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n,r,i,s,a,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const qa="(default)";class Hs{constructor(e,n){this.projectId=e,this.database=n||qa}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database===qa}isEqual(e){return e instanceof Hs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="__type__",gv="__max__",Qo={mapValue:{fields:{__type__:{stringValue:gv}}}},yv="__vector__",Ha="value";function er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ld(t)?4:dS(t)?9007199254740991:hS(t)?10:11:W(28295,{value:t})}function Yt(t,e){if(t===e)return!0;const n=er(t);if(n!==er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qs(t).isEqual(qs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Jn(i.timestampValue),l=Jn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Zn(i.bytesValue).isEqual(Zn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ie(i.doubleValue),l=Ie(s.doubleValue);return a===l?$a(a)===$a(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Rm(a)!==Rm(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Yt(a[u],l[u])))return!1;return!0}(t,e);default:return W(52216,{left:t})}}function Ws(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=er(t),r=er(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Ie(s.integerValue||s.doubleValue),u=Ie(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Pm(t.timestampValue,e.timestampValue);case 4:return Pm(qs(t),qs(e));case 5:return qc(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Zn(s),u=Zn(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Y(l[h],u[h]);if(f!==0)return f}return Y(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=Y(Ie(s.latitude),Ie(a.latitude));return l!==0?l:Y(Ie(s.longitude),Ie(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return xm(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const m=s.fields||{},g=a.fields||{},C=(l=m[Ha])===null||l===void 0?void 0:l.arrayValue,P=(u=g[Ha])===null||u===void 0?void 0:u.arrayValue,N=Y(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:xm(C,P)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Qo.mapValue&&a===Qo.mapValue)return 0;if(s===Qo.mapValue)return 1;if(a===Qo.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=qc(u[m],f[m]);if(g!==0)return g;const C=Ti(l[u[m]],h[f[m]]);if(C!==0)return C}return Y(u.length,f.length)}(t.mapValue,e.mapValue);default:throw W(23264,{le:n})}}function Pm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Jn(t),r=Jn(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function xm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ti(n[i],r[i]);if(s)return s}return Y(n.length,r.length)}function Ii(t){return Hc(t)}function Hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Hc(n.fields[a])}`;return i+"}"}(t.mapValue):W(61005,{value:t})}function ha(t){switch(er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tl(t);return e?16+ha(e):16;case 5:return 2*t.stringValue.length;case 6:return Zn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ha(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return br(r.fields,(s,a)=>{i+=s.length+ha(a)}),i}(t.mapValue);default:throw W(13486,{value:t})}}function Nm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wc(t){return!!t&&"integerValue"in t}function ud(t){return!!t&&"arrayValue"in t}function Vm(t){return!!t&&"nullValue"in t}function Dm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function da(t){return!!t&&"mapValue"in t}function hS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[mv])===null||n===void 0?void 0:n.stringValue)===yv}function Es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Es(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function dS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=Es(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];da(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){br(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Es(this.value))}}function _v(t){const e=[];return br(t.fields,(n,r)=>{const i=new Ue([n]);if(da(r)){const s=_v(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Je(e,0,G.min(),G.min(),G.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new Je(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Je(e,2,n,G.min(),G.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,G.min(),G.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n){this.position=e,this.inclusive=n}}function Om(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),n.key):r=Ti(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n="asc"){this.field=e,this.dir=n}}function fS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{}class Re extends vv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mS(e,n,r):n==="array-contains"?new _S(e,r):n==="in"?new vS(e,r):n==="not-in"?new wS(e,r):n==="array-contains-any"?new ES(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gS(e,r):new yS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ti(n,this.value)):n!==null&&er(this.value)===er(n)&&this.matchesComparison(Ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends vv{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Ft(e,n)}matches(e){return wv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function wv(t){return t.op==="and"}function Ev(t){return pS(t)&&wv(t)}function pS(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function Kc(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+Ii(t.value);if(Ev(t))return t.filters.map(e=>Kc(e)).join(",");{const e=t.filters.map(n=>Kc(n)).join(",");return`${t.op}(${e})`}}function Tv(t,e){return t instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.field.isEqual(i.field)&&Yt(r.value,i.value)}(t,e):t instanceof Ft?function(r,i){return i instanceof Ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Tv(a,i.filters[l]),!0):!1}(t,e):void W(19439)}function Iv(t){return t instanceof Re?function(n){return`${n.field.canonicalString()} ${n.op} ${Ii(n.value)}`}(t):t instanceof Ft?function(n){return n.op.toString()+" {"+n.getFilters().map(Iv).join(" ,")+"}"}(t):"Filter"}class mS extends Re{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class gS extends Re{constructor(e,n){super(e,"in",n),this.keys=Sv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yS extends Re{constructor(e,n){super(e,"not-in",n),this.keys=Sv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class _S extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ud(n)&&Ws(n.arrayValue,this.value)}}class vS extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ws(this.value.arrayValue,n)}}class wS extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ws(this.value.arrayValue,n)}}class ES extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ud(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ws(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function bm(t,e=null,n=[],r=[],i=null,s=null,a=null){return new TS(t,e,n,r,i,s,a)}function cd(t){const e=Q(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),El(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ii(r)).join(",")),e.Pe=n}return e.Pe}function hd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mm(t.startAt,e.startAt)&&Mm(t.endAt,e.endAt)}function Gc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function IS(t,e,n,r,i,s,a,l){return new Di(t,e,n,r,i,s,a,l)}function dd(t){return new Di(t)}function Lm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Av(t){return t.collectionGroup!==null}function Ts(t){const e=Q(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ve(Ue.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Ks(s,r))}),n.has(Ue.keyField().canonicalString())||e.Te.push(new Ks(Ue.keyField(),r))}return e.Te}function Wt(t){const e=Q(t);return e.Ie||(e.Ie=SS(e,Ts(t))),e.Ie}function SS(t,e){if(t.limitType==="F")return bm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ks(i.field,s)});const n=t.endAt?new Wa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wa(t.startAt.position,t.startAt.inclusive):null;return bm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qc(t,e){const n=t.filters.concat([e]);return new Di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xc(t,e,n){return new Di(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Il(t,e){return hd(Wt(t),Wt(e))&&t.limitType===e.limitType}function Cv(t){return`${cd(Wt(t))}|lt:${t.limitType}`}function Wr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Iv(i)).join(", ")}]`),El(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ii(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ii(i)).join(",")),`Target(${r})`}(Wt(t))}; limitType=${t.limitType})`}function Sl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ts(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=Om(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,Ts(r),i)||r.endAt&&!function(a,l,u){const h=Om(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,Ts(r),i))}(t,e)}function AS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rv(t){return(e,n)=>{let r=!1;for(const i of Ts(t)){const s=CS(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function CS(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ti(u,h):W(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new ve(H.comparator);function wn(){return RS}const kv=new ve(H.comparator);function ls(...t){let e=kv;for(const n of t)e=e.insert(n.key,n);return e}function Pv(t){let e=kv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return Is()}function xv(){return Is()}function Is(){return new Lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const kS=new ve(H.comparator),PS=new Ve(H.comparator);function Z(...t){let e=PS;for(const n of t)e=e.add(n);return e}const xS=new Ve(Y);function NS(){return xS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$a(e)?"-0":e}}function Nv(t){return{integerValue:""+t}}function VS(t,e){return oS(e)?Nv(e):fd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this._=void 0}}function DS(t,e,n){return t instanceof Gs?function(i,s){const a={fields:{[dv]:{stringValue:hv},[pv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ld(s)&&(s=Tl(s)),s&&(a.fields[fv]=s),{mapValue:a}}(n,e):t instanceof Qs?Dv(t,e):t instanceof Xs?Ov(t,e):function(i,s){const a=Vv(i,s),l=Fm(a)+Fm(i.Ee);return Wc(a)&&Wc(i.Ee)?Nv(l):fd(i.serializer,l)}(t,e)}function OS(t,e,n){return t instanceof Qs?Dv(t,e):t instanceof Xs?Ov(t,e):n}function Vv(t,e){return t instanceof Ka?function(r){return Wc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Gs extends Al{}class Qs extends Al{constructor(e){super(),this.elements=e}}function Dv(t,e){const n=Mv(e);for(const r of t.elements)n.some(i=>Yt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xs extends Al{constructor(e){super(),this.elements=e}}function Ov(t,e){let n=Mv(e);for(const r of t.elements)n=n.filter(i=>!Yt(i,r));return{arrayValue:{values:n}}}class Ka extends Al{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Fm(t){return Ie(t.integerValue||t.doubleValue)}function Mv(t){return ud(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n){this.field=e,this.transform=n}}function bS(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Qs&&i instanceof Qs||r instanceof Xs&&i instanceof Xs?Ei(r.elements,i.elements,Yt):r instanceof Ka&&i instanceof Ka?Yt(r.Ee,i.Ee):r instanceof Gs&&i instanceof Gs}(t.transform,e.transform)}class LS{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cl{}function bv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pd(t.key,Kt.none()):new oo(t.key,t.data,Kt.none());{const n=t.data,r=It.empty();let i=new Ve(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Fr(t.key,r,new Ot(i.toArray()),Kt.none())}}function FS(t,e,n){t instanceof oo?function(i,s,a){const l=i.value.clone(),u=Um(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(i,s,a){if(!fa(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Um(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Lv(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Ss(t,e,n,r){return t instanceof oo?function(s,a,l,u){if(!fa(s.precondition,a))return l;const h=s.value.clone(),f=Bm(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(s,a,l,u){if(!fa(s.precondition,a))return l;const h=Bm(s.fieldTransforms,u,a),f=a.data;return f.setAll(Lv(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,a,l){return fa(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function jS(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Vv(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function jm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ei(r,i,(s,a)=>bS(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oo extends Cl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fr extends Cl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Um(t,e,n){const r=new Map;ie(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,OS(a,l,n[i]))}return r}function Bm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,DS(s,a,e))}return r}class pd extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class US extends Cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&FS(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ss(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ss(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xv();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=bv(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(n,r)=>jm(n,r))&&Ei(this.baseMutations,e.baseMutations,(n,r)=>jm(n,r))}}class md{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return kS}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new md(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ee;function qS(t){switch(t){case D.OK:return W(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return W(15467,{code:t})}}function Fv(t){if(t===void 0)return vn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Ae.OK:return D.OK;case Ae.CANCELLED:return D.CANCELLED;case Ae.UNKNOWN:return D.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return D.INTERNAL;case Ae.UNAVAILABLE:return D.UNAVAILABLE;case Ae.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ae.NOT_FOUND:return D.NOT_FOUND;case Ae.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ae.ABORTED:return D.ABORTED;case Ae.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ae.DATA_LOSS:return D.DATA_LOSS;default:return W(39323,{code:t})}}(ee=Ae||(Ae={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new zn([4294967295,4294967295],0);function zm(t){const e=sv().encode(t),n=new Y_;return n.update(e),new Uint8Array(n.digest())}function $m(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zn([n,r],0),new zn([i,s],0)]}class gd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new us(`Invalid padding: ${n}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new us(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=zn.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(zn.fromNumber(r)));return i.compare(HS)===1&&(i=new zn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=zm(e),[r,i]=$m(n);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new gd(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.fe===0)return;const n=zm(e),[r,i]=$m(n);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);this.we(a)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rl(G.min(),i,new ve(Y),wn(),Z())}}class ao{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ao(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class jv{constructor(e,n){this.targetId=e,this.De=n}}class Uv{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qm{constructor(){this.ve=0,this.Ce=Hm(),this.Fe=$e.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Z(),n=Z(),r=Z();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W(38017,{changeType:s})}}),new ao(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Hm()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class WS{constructor(e){this.We=e,this.Ge=new Map,this.ze=wn(),this.je=Xo(),this.Je=Xo(),this.He=new ve(Y)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(Gc(s))if(r===0){const a=new H(s.path);this.Xe(n,a,Je.newNoDocument(a,G.min()))}else ie(r===1,20013,{expectedCount:r});else{const a=this.ot(n);if(a!==r){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=Zn(r).toUint8Array()}catch(u){if(u instanceof cv)return Xn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new gd(a,i,s)}catch(u){return Xn(u instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,a)=>{const l=this.st(a);if(l){if(s.current&&Gc(l.target)){const u=new H(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Je.newNoDocument(u,e))}s.Ne&&(n.set(a,s.Le()),s.ke())}});let r=Z();this.Je.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,a)=>a.setReadTime(e));const i=new Rl(e,n,this.He,this.ze,r);return this.ze=wn(),this.je=Xo(),this.Je=Xo(),this.He=new ve(Y),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new qm,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ve(Y),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ve(Y),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new qm),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Xo(){return new ve(H.comparator)}function Hm(){return new ve(H.comparator)}const KS={asc:"ASCENDING",desc:"DESCENDING"},GS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QS={and:"AND",or:"OR"};class XS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yc(t,e){return t.useProto3Json||El(e)?e:{value:e}}function Ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YS(t,e){return Ga(t,e.toTimestamp())}function Gt(t){return ie(!!t,49232),G.fromTimestamp(function(n){const r=Jn(n);return new de(r.seconds,r.nanos)}(t))}function yd(t,e){return Jc(t,e).canonicalString()}function Jc(t,e){const n=function(i){return new le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zv(t){const e=le.fromString(t);return ie(Kv(e),10190,{key:e.toString()}),e}function Zc(t,e){return yd(t.databaseId,e.path)}function Ou(t,e){const n=zv(e);if(n.get(1)!==t.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(qv(n))}function $v(t,e){return yd(t.databaseId,e)}function JS(t){const e=zv(t);return e.length===4?le.emptyPath():qv(e)}function eh(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qv(t){return ie(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Wm(t,e,n){return{name:Zc(t,e),fields:n.value.mapValue.fields}}function ZS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:W(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ie(f===void 0||typeof f=="string",58123),$e.fromBase64String(f||"")):(ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),$e.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?D.UNKNOWN:Fv(h.code);return new B(f,h.message||"")}(a);n=new Uv(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ou(t,r.document.name),s=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):G.min(),l=new It({mapValue:{fields:r.document.fields}}),u=Je.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new pa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ou(t,r.document),s=r.readTime?Gt(r.readTime):G.min(),a=Je.newNoDocument(i,s),l=r.removedTargetIds||[];n=new pa([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ou(t,r.document),s=r.removedTargetIds||[];n=new pa([],s,i,null)}else{if(!("filter"in e))return W(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new $S(i,s),l=r.targetId;n=new jv(l,a)}}return n}function eA(t,e){let n;if(e instanceof oo)n={update:Wm(t,e.key,e.value)};else if(e instanceof pd)n={delete:Zc(t,e.key)};else if(e instanceof Fr)n={update:Wm(t,e.key,e.data),updateMask:uA(e.fieldMask)};else{if(!(e instanceof US))return W(16599,{Rt:e.type});n={verify:Zc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Gs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ka)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw W(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:YS(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)}(t,e.precondition)),n}function tA(t,e){return t&&t.length>0?(ie(e!==void 0,14353),t.map(n=>function(i,s){let a=i.updateTime?Gt(i.updateTime):Gt(s);return a.isEqual(G.min())&&(a=Gt(s)),new LS(a,i.transformResults||[])}(n,e))):[]}function nA(t,e){return{documents:[$v(t,e.path)]}}function rA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$v(t,i);const s=function(h){if(h.length!==0)return Wv(Ft.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Kr(g.field),direction:oA(g.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Yc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:i}}function iA(t){let e=JS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=Hv(m);return g instanceof Ft&&Ev(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(P){return new Ks(Gr(P.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,El(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,C=m.values||[];return new Wa(C,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,C=m.values||[];return new Wa(C,g)}(n.endAt)),IS(e,i,a,s,l,"F",u,h)}function sA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gr(n.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Gr(n.unaryFilter.field);return Re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gr(n.unaryFilter.field);return Re.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Gr(n.unaryFilter.field);return Re.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(t):t.fieldFilter!==void 0?function(n){return Re.create(Gr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ft.create(n.compositeFilter.filters.map(r=>Hv(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(n.compositeFilter.op))}(t):W(30097,{filter:t})}function oA(t){return KS[t]}function aA(t){return GS[t]}function lA(t){return QS[t]}function Kr(t){return{fieldPath:t.canonicalString()}}function Gr(t){return Ue.fromServerFormat(t.fieldPath)}function Wv(t){return t instanceof Re?function(n){if(n.op==="=="){if(Dm(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NAN"}};if(Vm(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dm(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NOT_NAN"}};if(Vm(n.value))return{unaryFilter:{field:Kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kr(n.field),op:aA(n.op),value:n.value}}}(t):t instanceof Ft?function(n){const r=n.getFilters().map(i=>Wv(i));return r.length===1?r[0]:{compositeFilter:{op:lA(n.op),filters:r}}}(t):W(54877,{filter:t})}function uA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Kv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,r,i,s=G.min(),a=G.min(),l=$e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.gt=e}}function hA(t){const e=iA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.Dn=new fA}addToCollectionParentIndex(e,n){return this.Dn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Yn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class fA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ve(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gv=41943040;class at{static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(Gv,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Si(0)}static ur(){return new Si(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="LruGarbageCollector",pA=1048576;function Qm([t,e],[n,r]){const i=Y(t,n);return i===0?Y(e,r):i}class mA{constructor(e){this.Tr=e,this.buffer=new Ve(Qm),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class gA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){z(Gm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vi(n)?z(Gm,"Ignoring IndexedDB error during garbage collection: ",n):await Ni(n)}await this.Rr(3e5)})}}class yA{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(wl.ue);const r=new mA(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Km)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Km):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Hr()<=te.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function _A(t,e){return new yA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.changes=new Lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ss(r.mutation,i,Ot.empty(),de.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=_r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=ls();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=wn();const a=Is(),l=function(){return Is()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Fr)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Ss(f.mutation,h,f.mutation.getFieldMask(),de.now())):a.set(h.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new wA(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Is();let i=new ve((a,l)=>a-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ot.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=xv();f.forEach(g=>{if(!s.has(g)){const C=bv(n.get(g),r.get(g));C!==null&&m.set(g,C),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Av(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(_r());let l=$s,u=s;return a.next(h=>O.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:Pv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=ls();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(m,g){return new Di(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Je.newInvalidDocument(f)))});let l=ls();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ss(f.mutation,h,Ot.empty(),de.now()),Sl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return O.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:hA(i.bundledQuery),readTime:Gt(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.overlays=new ve(H.comparator),this.kr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=_r(),s=n.length+1,a=new H(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=_r(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=_r(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zS(n,r));let s=this.kr.get(n);s===void 0&&(s=Z(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.qr=new Ve(De.Qr),this.$r=new Ve(De.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new De(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new De(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new H(new le([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.$r.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new H(new le([])),r=new De(n,e),i=new De(n,e+1);let s=Z();return this.$r.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new De(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return H.comparator(e.key,n.key)||Y(e.Hr,n.Hr)}static Ur(e,n){return Y(e.Hr,n.Hr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ve(De.Qr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new BS(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new De(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?ad:this.er-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],a=>{const l=this.Zr(a.Hr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ve(Y);return n.forEach(i=>{const s=new De(i,0),a=new De(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],l=>{r=r.add(l.Hr)})}),O.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const a=new De(new H(s),0);let l=new Ve(Y);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},a),O.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return O.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new De(n,0),i=this.Yr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.ni=e,this.docs=function(){return new ve(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wn();const a=n.path,l=new H(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||nS(tS(f),r)<=0||(i.has(f.key)||Sl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W(9500)}ri(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RA(this)}getSize(e){return O.resolve(this.size)}}class RA extends vA{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.persistence=e,this.ii=new Lr(n=>cd(n),hd),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.si=0,this.oi=new _d,this.targetCount=0,this._i=Si.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),O.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Si(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.hr(n),O.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n){this.ai={},this.overlays={},this.ui=new wl(0),this.ci=!1,this.ci=!0,this.li=new SA,this.referenceDelegate=e(this),this.hi=new kA(this),this.indexManager=new dA,this.remoteDocumentCache=function(i){return new CA(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new cA(n),this.Ti=new TA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new AA(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new PA(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return O.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class PA extends iS{constructor(e){super(),this.currentSequenceNumber=e}}class vd{constructor(e){this.persistence=e,this.Ai=new _d,this.Ri=null}static Vi(e){return new vd(e)}get mi(){if(this.Ri)return this.Ri;throw W(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.mi,r=>{const i=H.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return O.or([()=>O.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Qa{constructor(e,n){this.persistence=e,this.gi=new Lr(r=>aS(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=_A(this,n)}static Vi(e,n){return new Qa(e,n)}Ii(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return O.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,n).next(l=>{l||(r++,s.removeEntry(a,G.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),O.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ha(e.data.value)),n}Sr(e,n,r){return O.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return xT()?8:sS(kT())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new xA;return this.ws(e,n,a).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,a,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(Hr()<=te.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Wr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(Hr()<=te.DEBUG&&z("QueryEngine","Query:",Wr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Hr()<=te.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Wr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wt(n))):O.resolve())}ps(e,n){if(Lm(n))return O.resolve(null);let r=Wt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xc(n,null,"F"),r=Wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Z(...s);return this.gs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,a,u.readTime)?this.ps(e,Xc(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return Lm(n)||i.isEqual(G.min())?O.resolve(null):this.gs.getDocuments(e,r).next(s=>{const a=this.bs(n,s);return this.Ds(n,a,r,i)?O.resolve(null):(Hr()<=te.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wr(n)),this.vs(e,a,n,eS(i,$s)).next(l=>l))})}bs(e,n){let r=new Ve(Rv(e));return n.forEach((i,s)=>{Sl(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return Hr()<=te.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Wr(n)),this.gs.getDocumentsMatchingQuery(e,n,Yn.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="LocalStore",VA=3e8;class DA{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new ve(Y),this.Ms=new Lr(s=>cd(s),hd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function OA(t,e,n,r){return new DA(t,e,n,r)}async function Xv(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Z();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:l}))})})}function MA(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let C=O.resolve();return g.forEach(P=>{C=C.next(()=>f.getEntry(u,P)).next(N=>{const M=h.docVersions.get(P);ie(M!==null,48541),N.version.compareTo(M)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Yv(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function bA(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,m)));let C=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?C=C.withResumeToken($e.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,r)),i=i.insert(m,C),function(N,M,I){return N.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=VA?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,C,f)&&l.push(n.hi.updateTargetData(s,C))});let u=wn(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(LA(s,a,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(G.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(m=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Fs=i,s))}function LA(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=wn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):z(Ed,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:a,ks:i}})}function FA(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ad),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jA(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.hi.allocateTargetId(r).next(a=>(i=new Vn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function th(t,e,n){const r=Q(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Vi(a))throw a;z(Ed,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Xm(t,e,n){const r=Q(t);let i=G.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=Q(u),g=m.Ms.get(f);return g!==void 0?O.resolve(m.Fs.get(g)):m.hi.getTargetData(h,f)}(r,a,Wt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,n?i:G.min(),n?s:Z())).next(l=>(UA(r,AS(e),l),{documents:l,qs:s})))}function UA(t,e,n){let r=t.xs.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class Ym{constructor(){this.activeTargetIds=NS()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BA{constructor(){this.Fo=new Ym,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ym,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="ConnectivityMonitor";class Zm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){z(Jm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){z(Jm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo=null;function nh(){return Yo===null?Yo=function(){return 268435456+Math.round(2147483648*Math.random())}():Yo++,"0x"+Yo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="RestConnection",$A={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===qa?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const a=nh(),l=this.Go(e,n.toUriEncodedString());z(Mu,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=rd(h);return this.jo(e,l,u,r,f).then(m=>(z(Mu,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Xn(Mu,`RPC '${e}' ${a} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,n,r,i,s,a){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=$A[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class WA extends qA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const a=nh();return new Promise((l,u)=>{const h=new J_;h.setWithCredentials(!0),h.listenOnce(Z_.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ca.NO_ERROR:const m=h.getResponseJson();z(Qe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),l(m);break;case ca.TIMEOUT:z(Qe,`RPC '${e}' ${a} timed out`),u(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case ca.HTTP_ERROR:const g=h.getStatus();if(z(Qe,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const N=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(_)>=0?_:D.UNKNOWN}(P.status);u(new B(N,P.message))}else u(new B(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new B(D.UNAVAILABLE,"Connection failed."));break;default:W(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{z(Qe,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(i);z(Qe,`RPC '${e}' ${a} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=nh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=nv(),l=tv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");z(Qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);this.T_(m);let g=!1,C=!1;const P=new HA({Ho:M=>{C?z(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(g||(z(Qe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),z(Qe,`RPC '${e}' stream ${i} sending:`,M),m.send(M))},Yo:()=>m.close()}),N=(M,I,_)=>{M.listen(I,S=>{try{_(S)}catch(V){setTimeout(()=>{throw V},0)}})};return N(m,as.EventType.OPEN,()=>{C||(z(Qe,`RPC '${e}' stream ${i} transport opened.`),P.s_())}),N(m,as.EventType.CLOSE,()=>{C||(C=!0,z(Qe,`RPC '${e}' stream ${i} transport closed`),P.__(),this.I_(m))}),N(m,as.EventType.ERROR,M=>{C||(C=!0,Xn(Qe,`RPC '${e}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),P.__(new B(D.UNAVAILABLE,"The operation could not be completed")))}),N(m,as.EventType.MESSAGE,M=>{var I;if(!C){const _=M.data[0];ie(!!_,16349);const S=_,V=(S==null?void 0:S.error)||((I=S[0])===null||I===void 0?void 0:I.error);if(V){z(Qe,`RPC '${e}' stream ${i} received error:`,V);const b=V.status;let j=function(v){const T=Ae[v];if(T!==void 0)return Fv(T)}(b),w=V.message;j===void 0&&(j=D.INTERNAL,w="Unknown error status: "+b+" with message "+V.message),C=!0,P.__(new B(j,w)),m.close()}else z(Qe,`RPC '${e}' stream ${i} received:`,_),P.a_(_)}}),N(l,ev.STAT_EVENT,M=>{M.stat===$c.PROXY?z(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===$c.NOPROXY&&z(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.o_()},0),P}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function bu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t){return new XS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="PersistentStream";class Zv{constructor(e,n,r,i,s,a,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Jv(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new B(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return z(eg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(z(eg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KA extends Zv{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=ZS(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?G.min():a.readTime?Gt(a.readTime):G.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=eh(this.serializer),n.addTarget=function(s,a){let l;const u=a.target;if(l=Gc(u)?{documents:nA(s,u)}:{query:rA(s,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Bv(s,a.resumeToken);const h=Yc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(G.min())>0){l.readTime=Ga(s,a.snapshotVersion.toTimestamp());const h=Yc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=sA(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=eh(this.serializer),n.removeTarget=e,this.k_(n)}}class GA extends Zv{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=tA(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=eh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eA(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{}class XA extends QA{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,Jc(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(D.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(e,Jc(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(D.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class YA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(vn(n),this._a=!1):z("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="RemoteStore";class JA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{jr(this)&&(z(xr,"Restarting streams for network reachability change."),await async function(u){const h=Q(u);h.Ia.add(4),await lo(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Pl(h)}(this))})}),this.Aa=new YA(r,i)}}async function Pl(t){if(jr(t))for(const e of t.da)await e(!0)}async function lo(t){for(const e of t.da)await e(!1)}function e0(t,e){const n=Q(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Ad(n)?Sd(n):Oi(n).x_()&&Id(n,e))}function Td(t,e){const n=Q(t),r=Oi(n);n.Ta.delete(e),r.x_()&&t0(n,e),n.Ta.size===0&&(r.x_()?r.B_():jr(n)&&n.Aa.set("Unknown"))}function Id(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).H_(e)}function t0(t,e){t.Ra.$e(e),Oi(t).Y_(e)}function Sd(t){t.Ra=new WS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.Aa.aa()}function Ad(t){return jr(t)&&!Oi(t).M_()&&t.Ta.size>0}function jr(t){return Q(t).Ia.size===0}function n0(t){t.Ra=void 0}async function ZA(t){t.Aa.set("Online")}async function eC(t){t.Ta.forEach((e,n)=>{Id(t,e)})}async function tC(t,e){n0(t),Ad(t)?(t.Aa.la(e),Sd(t)):t.Aa.set("Unknown")}async function nC(t,e,n){if(t.Aa.set("Online"),e instanceof Uv&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){z(xr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xa(t,r)}else if(e instanceof pa?t.Ra.Ye(e):e instanceof jv?t.Ra.it(e):t.Ra.et(e),!n.isEqual(G.min()))try{const r=await Yv(t.localStore);n.compareTo(r)>=0&&await function(s,a){const l=s.Ra.Pt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),t0(s,u);const m=new Vn(f.target,u,h,f.sequenceNumber);Id(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){z(xr,"Failed to raise snapshot:",r),await Xa(t,r)}}async function Xa(t,e,n){if(!Vi(e))throw e;t.Ia.add(1),await lo(t),t.Aa.set("Offline"),n||(n=()=>Yv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(xr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Pl(t)})}function r0(t,e){return e().catch(n=>Xa(t,n,e))}async function xl(t){const e=Q(t),n=tr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ad;for(;rC(e);)try{const i=await FA(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,iC(e,i)}catch(i){await Xa(e,i)}i0(e)&&s0(e)}function rC(t){return jr(t)&&t.Pa.length<10}function iC(t,e){t.Pa.push(e);const n=tr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function i0(t){return jr(t)&&!tr(t).M_()&&t.Pa.length>0}function s0(t){tr(t).start()}async function sC(t){tr(t).na()}async function oC(t){const e=tr(t);for(const n of t.Pa)e.X_(n.mutations)}async function aC(t,e,n){const r=t.Pa.shift(),i=md.from(r,e,n);await r0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xl(t)}async function lC(t,e){e&&tr(t).Z_&&await async function(r,i){if(function(a){return qS(a)&&a!==D.ABORTED}(i.code)){const s=r.Pa.shift();tr(r).N_(),await r0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xl(r)}}(t,e),i0(t)&&s0(t)}async function tg(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),z(xr,"RemoteStore received new credentials");const r=jr(n);n.Ia.add(3),await lo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Pl(n)}async function uC(t,e){const n=Q(t);e?(n.Ia.delete(2),await Pl(n)):e||(n.Ia.add(2),await lo(n),n.Aa.set("Unknown"))}function Oi(t){return t.Va||(t.Va=function(n,r,i){const s=Q(n);return s.ia(),new KA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:ZA.bind(null,t),e_:eC.bind(null,t),n_:tC.bind(null,t),J_:nC.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Ad(t)?Sd(t):t.Aa.set("Unknown")):(await t.Va.stop(),n0(t))})),t.Va}function tr(t){return t.ma||(t.ma=function(n,r,i){const s=Q(n);return s.ia(),new GA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:sC.bind(null,t),n_:lC.bind(null,t),ea:oC.bind(null,t),ta:aC.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await xl(t)):(await t.ma.stop(),t.Pa.length>0&&(z(xr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Cd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rd(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Vi(t))return new B(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{static emptySet(e){return new fi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=ls(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.fa=new ve(H.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):W(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ai{constructor(e,n,r,i,s,a,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Ai(e,n,fi.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Il(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class hC{constructor(){this.queries=rg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=Q(n),s=i.queries;i.queries=rg(),s.forEach((a,l)=>{for(const u of l.wa)u.onError(r)})})(this,new B(D.ABORTED,"Firestore shutting down"))}}function rg(){return new Lr(t=>Cv(t),Il)}async function o0(t,e){const n=Q(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new cC,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=Rd(a,`Initialization of query '${Wr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&kd(n)}async function a0(t,e){const n=Q(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dC(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.wa)l.Ca(i)&&(r=!0);a.ya=i}}r&&kd(n)}function fC(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function kd(t){t.Da.forEach(e=>{e.next()})}var rh,ig;(ig=rh||(rh={})).Fa="default",ig.Cache="cache";class l0{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==rh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.key=e}}class c0{constructor(e){this.key=e}}class pC{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Z(),this.mutatedKeys=Z(),this.Xa=Rv(e),this.eu=new fi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new ng,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),C=Sl(this.query,m)?m:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let M=!1;g&&C?g.data.isEqual(C.data)?P!==N&&(r.track({type:3,doc:C}),M=!0):this.iu(g,C)||(r.track({type:2,doc:C}),M=!0,(u&&this.Xa(C,u)>0||h&&this.Xa(C,h)<0)&&(l=!0)):!g&&C?(r.track({type:0,doc:C}),M=!0):g&&!C&&(r.track({type:1,doc:g}),M=!0,(u||h)&&(l=!0)),M&&(C?(a=a.add(C),s=N?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,m)=>function(C,P){const N=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{At:M})}};return N(C)-N(P)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new Ai(this.query,e.eu,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ng,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Z(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new c0(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new u0(r))}),n}uu(e){this.Ha=e.qs,this.Za=Z();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Ai.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Pd="SyncEngine";class mC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gC{constructor(e){this.key=e,this.lu=!1}}class yC{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Lr(l=>Cv(l),Il),this.Tu=new Map,this.Iu=new Set,this.du=new ve(H.comparator),this.Eu=new Map,this.Au=new _d,this.Ru={},this.Vu=new Map,this.mu=Si.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function _C(t,e,n=!0){const r=g0(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await h0(r,e,n,!0),i}async function vC(t,e){const n=g0(t);await h0(n,e,!0,!1)}async function h0(t,e,n,r){const i=await jA(t.localStore,Wt(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await wC(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&e0(t.remoteStore,i),l}async function wC(t,e,n,r,i){t.gu=(m,g,C)=>async function(N,M,I,_){let S=M.view.nu(I);S.Ds&&(S=await Xm(N.localStore,M.query,!1).then(({documents:w})=>M.view.nu(w,S)));const V=_&&_.targetChanges.get(M.targetId),b=_&&_.targetMismatches.get(M.targetId)!=null,j=M.view.applyChanges(S,N.isPrimaryClient,V,b);return og(N,M.targetId,j._u),j.snapshot}(t,m,g,C);const s=await Xm(t.localStore,e,!0),a=new pC(e,s.qs),l=a.nu(s.documents),u=ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=a.applyChanges(l,t.isPrimaryClient,u);og(t,n,h._u);const f=new mC(e,n,a);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function EC(t,e,n){const r=Q(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(a=>!Il(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await th(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Td(r.remoteStore,i.targetId),ih(r,i.targetId)}).catch(Ni)):(ih(r,i.targetId),await th(r.localStore,i.targetId,!0))}async function TC(t,e){const n=Q(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Td(n.remoteStore,r.targetId))}async function IC(t,e,n){const r=xC(t);try{const i=await function(a,l){const u=Q(a),h=de.now(),f=l.reduce((C,P)=>C.add(P.key),Z());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=wn(),N=Z();return u.Os.getEntries(C,f).next(M=>{P=M,P.forEach((I,_)=>{_.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,P)).next(M=>{m=M;const I=[];for(const _ of l){const S=jS(_,m.get(_.key).overlayedDocument);S!=null&&I.push(new Fr(_.key,S,_v(S.value.mapValue),Kt.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,I,l)}).next(M=>{g=M;const I=M.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(C,M.batchId,I)})}).then(()=>({batchId:g.batchId,changes:Pv(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new ve(Y)),h=h.insert(l,u),a.Ru[a.currentUser.toKey()]=h}(r,i.batchId,n),await uo(r,i.changes),await xl(r.remoteStore)}catch(i){const s=Rd(i,"Failed to persist write");n.reject(s)}}async function d0(t,e){const n=Q(t);try{const r=await bA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Eu.get(s);a&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?ie(a.lu,14607):i.removedDocuments.size>0&&(ie(a.lu,42227),a.lu=!1))}),await uo(n,r,e)}catch(r){await Ni(r)}}function sg(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=Q(a);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.wa)g.va(l)&&(h=!0)}),h&&kd(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SC(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let a=new ve(H.comparator);a=a.insert(s,Je.newNoDocument(s,G.min()));const l=Z().add(s),u=new Rl(G.min(),new Map,new ve(Y),a,l);await d0(r,u),r.du=r.du.remove(s),r.Eu.delete(e),xd(r)}else await th(r.localStore,e,!1).then(()=>ih(r,e,n)).catch(Ni)}async function AC(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await MA(n.localStore,e);p0(n,r,null),f0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uo(n,i)}catch(i){await Ni(i)}}async function CC(t,e,n){const r=Q(t);try{const i=await function(a,l){const u=Q(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ie(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);p0(r,e,n),f0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uo(r,i)}catch(i){await Ni(i)}}function f0(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function p0(t,e,n){const r=Q(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||m0(t,r)})}function m0(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Td(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),xd(t))}function og(t,e,n){for(const r of n)r instanceof u0?(t.Au.addReference(r.key,e),RC(t,r)):r instanceof c0?(z(Pd,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||m0(t,r.key)):W(19791,{yu:r})}function RC(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(z(Pd,"New document in limbo: "+n),t.Iu.add(r),xd(t))}function xd(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new H(le.fromString(e)),r=t.mu.next();t.Eu.set(r,new gC(n)),t.du=t.du.insert(n,r),e0(t.remoteStore,new Vn(Wt(dd(n.path)),r,"TargetPurposeLimboResolution",wl.ue))}}async function uo(t,e,n){const r=Q(t),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{a.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=wd.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.hu.J_(i),await async function(u,h){const f=Q(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,g=>O.forEach(g.Is,C=>f.persistence.referenceDelegate.addReference(m,g.targetId,C)).next(()=>O.forEach(g.ds,C=>f.persistence.referenceDelegate.removeReference(m,g.targetId,C)))))}catch(m){if(!Vi(m))throw m;z(Ed,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const C=f.Fs.get(g),P=C.snapshotVersion,N=C.withLastLimboFreeSnapshotVersion(P);f.Fs=f.Fs.insert(g,N)}}}(r.localStore,s))}async function kC(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){z(Pd,"User change. New user:",e.toKey());const r=await Xv(n.localStore,e);n.currentUser=e,function(s,a){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new B(D.CANCELLED,a))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uo(n,r.Bs)}}function PC(t,e){const n=Q(t),r=n.Eu.get(e);if(r&&r.lu)return Z().add(r.key);{let i=Z();const s=n.Tu.get(e);if(!s)return i;for(const a of s){const l=n.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function g0(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=d0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SC.bind(null,e),e.hu.J_=dC.bind(null,e.eventManager),e.hu.pu=fC.bind(null,e.eventManager),e}function xC(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CC.bind(null,e),e}class Ya{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return OA(this.persistence,new NA,e.initialUser,this.serializer)}Du(e){return new Qv(vd.Vi,this.serializer)}bu(e){return new BA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ya.provider={build:()=>new Ya};class NC extends Ya{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){ie(this.persistence.referenceDelegate instanceof Qa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new gA(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new Qv(r=>Qa.Vi(r,n),this.serializer)}}class sh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kC.bind(null,this.syncEngine),await uC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hC}()}createDatastore(e){const n=kl(e.databaseInfo.databaseId),r=function(s){return new WA(s)}(e.databaseInfo);return function(s,a,l,u){return new XA(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new JA(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>sg(this.syncEngine,n,0),function(){return Zm.C()?new Zm:new zA}())}createSyncEngine(e,n){return function(i,s,a,l,u,h,f){const m=new yC(i,s,a,l,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Q(i);z(xr,"RemoteStore shutting down."),s.Ia.add(5),await lo(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sh.provider={build:()=>new sh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="FirestoreClient";class VC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=od.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{z(nr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z(nr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lu(t,e){t.asyncQueue.verifyOperationInProgress(),z(nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{Xn("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{z("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Xn("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function ag(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DC(t);z(nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>tg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>tg(e.remoteStore,i)),t._onlineComponents=e}async function DC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(nr,"Using user provided OfflineComponentProvider");try{await Lu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Xn("Error using user provided cache. Falling back to memory cache: "+n),await Lu(t,new Ya)}}else z(nr,"Using default OfflineComponentProvider"),await Lu(t,new NC(void 0));return t._offlineComponents}async function _0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(nr,"Using user provided OnlineComponentProvider"),await ag(t,t._uninitializedComponentsProvider._online)):(z(nr,"Using default OnlineComponentProvider"),await ag(t,new sh))),t._onlineComponents}function OC(t){return _0(t).then(e=>e.syncEngine)}async function oh(t){const e=await _0(t),n=e.eventManager;return n.onListen=_C.bind(null,e.syncEngine),n.onUnlisten=EC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TC.bind(null,e.syncEngine),n}function MC(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new y0({next:g=>{f.Ou(),a.enqueueAndForget(()=>a0(s,m)),g.fromCache&&u.source==="server"?h.reject(new B(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new l0(l,f,{includeMetadataChanges:!0,ka:!0});return o0(s,m)}(await oh(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="firestore.googleapis.com",ug=!0;class cg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=w0,this.ssl=ug}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ug;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Gv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pA)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qI;switch(r.type){case"firstParty":return new GI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=lg.get(n);r&&(z("ComponentProvider","Removing Datastore"),lg.delete(n),r.terminate())}(this),Promise.resolve()}}function bC(t,e,n,r={}){var i;t=qn(t,Nl);const s=rd(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(IT(`https://${u}`),RT("Firestore",!0)),a.host!==w0&&a.host!==u&&Xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:s,emulatorOptions:r});if(!Ba(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Xe.MOCK_USER;else{f=ST(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new B(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Xe(g)}t._authCredentials=new HI(new iv(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new or(this.firestore,e,this._query)}}class Ne{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(so(n,Ne._jsonSchema))return new Ne(e,r||null,new H(le.fromString(n.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:ke("string",Ne._jsonSchemaVersion),referencePath:ke("string")};class Hn extends or{constructor(e,n,r){super(e,n,dd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new H(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function Fu(t,e,...n){if(t=Gn(t),ov("collection","path",e),t instanceof Nl){const r=le.fromString(e,...n);return Im(r),new Hn(t,null,r)}{if(!(t instanceof Ne||t instanceof Hn))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Im(r),new Hn(t.firestore,null,r)}}function LC(t,e,...n){if(t=Gn(t),arguments.length===1&&(e=od.newId()),ov("doc","path",e),t instanceof Nl){const r=le.fromString(e,...n);return Tm(r),new Ne(t,null,new H(r))}{if(!(t instanceof Ne||t instanceof Hn))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Tm(r),new Ne(t.firestore,t instanceof Hn?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="AsyncQueue";class dg{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Jv(this,"async_queue_retry"),this.oc=()=>{const r=bu();r&&z(hg,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=bu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=bu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new $n;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Vi(e))throw e;z(hg,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,vn("INTERNAL UNHANDLED ERROR: ",fg(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Cd.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&W(47125,{hc:fg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function fg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ci extends Nl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new dg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dg(e),this._firestoreClient=void 0,await e}}}function FC(t,e){const n=typeof t=="object"?t:G_(),r=typeof t=="string"?t:qa,i=_l(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ET("firestore");s&&bC(i,...s)}return i}function Nd(t){if(t._terminated)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jC(t),t._firestoreClient}function jC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new cS(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,v0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new VC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this._byteString=e}static fromBase64String(e){try{return new St($e.fromBase64String(e))}catch(n){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new St($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(so(e,St._jsonSchema))return St.fromBase64String(e.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:ke("string",St._jsonSchemaVersion),bytes:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(e){if(so(e,Qt._jsonSchema))return new Qt(e.latitude,e.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:ke("string",Qt._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(so(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Xt(e.vectorValues);throw new B(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:ke("string",Xt._jsonSchemaVersion),vectorValues:ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=/^__.*__$/;class BC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oo(e,this.data,n,this.fieldTransforms)}}function E0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ec:t})}}class Od{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ja(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(E0(this.Ec)&&UC.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class zC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kl(e)}Dc(e,n,r,i=!1){return new Od({Ec:e,methodName:n,bc:r,path:Ue.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function T0(t){const e=t._freezeSettings(),n=kl(t._databaseId);return new zC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $C(t,e,n,r,i,s={}){const a=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);A0("Data must be an object, but it was:",a,r);const l=I0(r,a);let u,h;if(s.merge)u=new Ot(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=HC(e,m,n);if(!a.contains(g))throw new B(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);KC(f,g)||f.push(g)}u=new Ot(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new BC(new It(l),u,h)}class Md extends Dd{_toFieldTransform(e){return new MS(e.path,new Gs)}isEqual(e){return e instanceof Md}}function qC(t,e,n,r=!1){return bd(n,t.Dc(r?4:3,e))}function bd(t,e){if(S0(t=Gn(t)))return A0("Unsupported field value:",e,t),I0(t,e);if(t instanceof Dd)return function(r,i){if(!E0(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=bd(l,i.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Gn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return VS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=de.fromDate(r);return{timestampValue:Ga(i.serializer,s)}}if(r instanceof de){const s=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ga(i.serializer,s)}}if(r instanceof Qt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:Bv(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xt)return function(a,l){return{mapValue:{fields:{[mv]:{stringValue:yv},[Ha]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return fd(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${vl(r)}`)}(t,e)}function I0(t,e){const n={};return uv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,i)=>{const s=bd(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function S0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof Qt||t instanceof St||t instanceof Ne||t instanceof Dd||t instanceof Xt)}function A0(t,e,n){if(!S0(n)||!av(n)){const r=vl(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function HC(t,e,n){if((e=Gn(e))instanceof Vd)return e._internalPath;if(typeof e=="string")return C0(t,e);throw Ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const WC=new RegExp("[~\\*/\\[\\]]");function C0(t,e,n){if(e.search(WC)>=0)throw Ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vd(...e.split("."))._internalPath}catch{throw Ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ja(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new B(D.INVALID_ARGUMENT,l+t+u)}function KC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ld("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GC extends R0{data(){return super.data()}}function Ld(t,e){return typeof e=="string"?C0(t,e):e instanceof Vd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fd{}class P0 extends Fd{}function QC(t,e,...n){let r=[];e instanceof Fd&&r.push(e),r=r.concat(n),function(s){const a=s.filter(u=>u instanceof Ud).length,l=s.filter(u=>u instanceof jd).length;if(a>1||a>0&&l>0)throw new B(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jd extends P0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jd(e,n,r)}_apply(e){const n=this._parse(e);return x0(e._query,n),new or(e.firestore,e.converter,Qc(e._query,n))}_parse(e){const n=T0(e.firestore);return function(s,a,l,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){gg(m,f);const P=[];for(const N of m)P.push(mg(u,s,N));g={arrayValue:{values:P}}}else g=mg(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||gg(m,f),g=qC(l,a,m,f==="in"||f==="not-in");return Re.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ud extends Fd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ud(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ft.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const u of l)x0(a,u),a=Qc(a,u)}(e._query,n),new or(e.firestore,e.converter,Qc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bd extends P0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bd(e,n)}_apply(e){const n=function(i,s,a){if(i.startAt!==null)throw new B(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ks(s,a)}(e._query,this._field,this._direction);return new or(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Di(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function XC(t,e="asc"){const n=e,r=Ld("orderBy",t);return Bd._create(r,n)}function mg(t,e,n){if(typeof(n=Gn(n))=="string"){if(n==="")throw new B(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Av(e)&&n.indexOf("/")!==-1)throw new B(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!H.isDocumentKey(r))throw new B(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nm(t,new H(r))}if(n instanceof Ne)return Nm(t,n._key);throw new B(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vl(n)}.`)}function gg(t,e){if(!Array.isArray(t)||t.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function x0(t,e){const n=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class YC{convertValue(e,n="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Ha].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Ie(a.doubleValue));return new Xt(s)}convertGeoPoint(e){return new Qt(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qs(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);ie(Kv(r),9688,{name:e});const i=new Hs(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tr extends R0{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ld("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Tr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Tr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tr._jsonSchema={type:ke("string",Tr._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class ma extends Tr{data(e={}){return super.data(e)}}class Ir{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ma(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new ma(i._firestore,i._userDataWriter,l.doc.key,l.doc,new cs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ma(i._firestore,i._userDataWriter,l.doc.key,l.doc,new cs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:ZC(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ir._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=od.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:t})}}Ir._jsonSchemaVersion="firestore/querySnapshot/1.0",Ir._jsonSchema={type:ke("string",Ir._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};class zd extends YC{constructor(e){super(),this.firestore=e}convertBytes(e){return new St(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function e2(t){t=qn(t,or);const e=qn(t.firestore,Ci),n=Nd(e),r=new zd(e);return k0(t._query),MC(n,t._query).then(i=>new Ir(e,r,t,i))}function t2(t){return N0(qn(t.firestore,Ci),[new pd(t._key,Kt.none())])}function n2(t,e){const n=qn(t.firestore,Ci),r=LC(t),i=JC(t.converter,e);return N0(n,[$C(T0(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function r2(t,...e){var n,r,i;t=Gn(t);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||pg(e[a])||(s=e[a++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(pg(e[a])){const m=e[a];e[a]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof Ne)h=qn(t.firestore,Ci),f=dd(t._key.path),u={next:m=>{e[a]&&e[a](i2(h,t,m))},error:e[a+1],complete:e[a+2]};else{const m=qn(t,or);h=qn(m.firestore,Ci),f=m._query;const g=new zd(h);u={next:C=>{e[a]&&e[a](new Ir(h,g,m,C))},error:e[a+1],complete:e[a+2]},k0(t._query)}return function(g,C,P,N){const M=new y0(N),I=new l0(C,M,P);return g.asyncQueue.enqueueAndForget(async()=>o0(await oh(g),I)),()=>{M.Ou(),g.asyncQueue.enqueueAndForget(async()=>a0(await oh(g),I))}}(Nd(h),f,l,u)}function N0(t,e){return function(r,i){const s=new $n;return r.asyncQueue.enqueueAndForget(async()=>IC(await OC(r),i,s)),s.promise}(Nd(t),e)}function i2(t,e,n){const r=n.docs.get(e._key),i=new zd(t);return new Tr(t,i,e._key,r,new cs(n.hasPendingWrites,n.fromCache),e.converter)}function s2(){return new Md("serverTimestamp")}(function(e,n=!0){(function(i){xi=i})(DI),Qn(new yn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ci(new WI(r.getProvider("auth-internal")),new QI(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ht(ym,_m,e),Ht(ym,_m,"esm2017")})();var o2="firebase",a2="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(o2,a2,"app");const V0="@firebase/installations",$d="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=1e4,O0=`w:${$d}`,M0="FIS_v2",l2="https://firebaseinstallations.googleapis.com/v1",u2=60*60*1e3,c2="installations",h2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Nr=new gl(c2,h2,d2);function b0(t){return t instanceof Mr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0({projectId:t}){return`${l2}/projects/${t}/installations`}function F0(t){return{token:t.token,requestStatus:2,expiresIn:p2(t.expiresIn),creationTime:Date.now()}}async function j0(t,e){const r=(await e.json()).error;return Nr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function U0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function f2(t,{refreshToken:e}){const n=U0(t);return n.append("Authorization",m2(e)),n}async function B0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function p2(t){return Number(t.replace("s","000"))}function m2(t){return`${M0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=L0(t),i=U0(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:M0,appId:t.appId,sdkVersion:O0},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await B0(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:F0(h.authToken)}}else throw await j0("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=/^[cdef][\w-]{21}$/,ah="";function v2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=w2(t);return _2.test(n)?n:ah}catch{return ah}}function w2(t){return y2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new Map;function q0(t,e){const n=Vl(t);H0(n,e),E2(n,e)}function H0(t,e){const n=$0.get(t);if(n)for(const r of n)r(e)}function E2(t,e){const n=T2();n&&n.postMessage({key:t,fid:e}),I2()}let vr=null;function T2(){return!vr&&"BroadcastChannel"in self&&(vr=new BroadcastChannel("[Firebase] FID Change"),vr.onmessage=t=>{H0(t.data.key,t.data.fid)}),vr}function I2(){$0.size===0&&vr&&(vr.close(),vr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2="firebase-installations-database",A2=1,Vr="firebase-installations-store";let ju=null;function qd(){return ju||(ju=yl(S2,A2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vr)}}})),ju}async function Za(t,e){const n=Vl(t),i=(await qd()).transaction(Vr,"readwrite"),s=i.objectStore(Vr),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&q0(t,e.fid),e}async function W0(t){const e=Vl(t),r=(await qd()).transaction(Vr,"readwrite");await r.objectStore(Vr).delete(e),await r.done}async function Dl(t,e){const n=Vl(t),i=(await qd()).transaction(Vr,"readwrite"),s=i.objectStore(Vr),a=await s.get(n),l=e(a);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!a||a.fid!==l.fid)&&q0(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd(t){let e;const n=await Dl(t.appConfig,r=>{const i=C2(r),s=R2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ah?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function C2(t){const e=t||{fid:v2(),registrationStatus:0};return K0(e)}function R2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Nr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=k2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:P2(t)}:{installationEntry:e}}async function k2(t,e){try{const n=await g2(t,e);return Za(t.appConfig,n)}catch(n){throw b0(n)&&n.customData.serverCode===409?await W0(t.appConfig):await Za(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function P2(t){let e=await yg(t.appConfig);for(;e.registrationStatus===1;)await z0(100),e=await yg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hd(t);return r||n}return e}function yg(t){return Dl(t,e=>{if(!e)throw Nr.create("installation-not-found");return K0(e)})}function K0(t){return x2(t)?{fid:t.fid,registrationStatus:0}:t}function x2(t){return t.registrationStatus===1&&t.registrationTime+D0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2({appConfig:t,heartbeatServiceProvider:e},n){const r=V2(t,n),i=f2(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:O0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await B0(()=>fetch(r,l));if(u.ok){const h=await u.json();return F0(h)}else throw await j0("Generate Auth Token",u)}function V2(t,{fid:e}){return`${L0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(t,e=!1){let n;const r=await Dl(t.appConfig,s=>{if(!G0(s))throw Nr.create("not-registered");const a=s.authToken;if(!e&&M2(a))return s;if(a.requestStatus===1)return n=D2(t,e),s;{if(!navigator.onLine)throw Nr.create("app-offline");const l=L2(s);return n=O2(t,l),l}});return n?await n:r.authToken}async function D2(t,e){let n=await _g(t.appConfig);for(;n.authToken.requestStatus===1;)await z0(100),n=await _g(t.appConfig);const r=n.authToken;return r.requestStatus===0?Wd(t,e):r}function _g(t){return Dl(t,e=>{if(!G0(e))throw Nr.create("not-registered");const n=e.authToken;return F2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function O2(t,e){try{const n=await N2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Za(t.appConfig,r),n}catch(n){if(b0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await W0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Za(t.appConfig,r)}throw n}}function G0(t){return t!==void 0&&t.registrationStatus===2}function M2(t){return t.requestStatus===2&&!b2(t)}function b2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+u2}function L2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function F2(t){return t.requestStatus===1&&t.requestTime+D0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hd(e);return r?r.catch(console.error):Wd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(t,e=!1){const n=t;return await B2(n),(await Wd(n,e)).token}async function B2(t){const{registrationPromise:e}=await Hd(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(t){if(!t||!t.options)throw Uu("App Configuration");if(!t.name)throw Uu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Uu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Uu(t){return Nr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="installations",$2="installations-internal",q2=t=>{const e=t.getProvider("app").getImmediate(),n=z2(e),r=_l(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},H2=t=>{const e=t.getProvider("app").getImmediate(),n=_l(e,Q0).getImmediate();return{getId:()=>j2(n),getToken:i=>U2(n,i)}};function W2(){Qn(new yn(Q0,q2,"PUBLIC")),Qn(new yn($2,H2,"PRIVATE"))}W2();Ht(V0,$d);Ht(V0,$d,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="/firebase-messaging-sw.js",G2="/firebase-cloud-messaging-push-scope",X0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Q2="https://fcmregistrations.googleapis.com/v1",Y0="google.c.a.c_id",X2="google.c.a.c_l",Y2="google.c.a.ts",J2="google.c.a.e",vg=1e4;var wg;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(wg||(wg={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ys;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ys||(Ys={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Z2(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="fcm_token_details_db",eR=5,Eg="fcm_token_object_Store";async function tR(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Bu))return null;let e=null;return(await yl(Bu,eR,{upgrade:async(r,i,s,a)=>{var l;if(i<2||!r.objectStoreNames.contains(Eg))return;const u=a.objectStore(Eg),h=await u.index("fcmSenderId").get(t);if(await u.clear(),!!h){if(i===2){const f=h;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(l=f.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:an(f.vapidKey)}}}else if(i===3){const f=h;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:an(f.auth),p256dh:an(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:an(f.vapidKey)}}}else if(i===4){const f=h;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:an(f.auth),p256dh:an(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:an(f.vapidKey)}}}}}})).close(),await Nu(Bu),await Nu("fcm_vapid_details_db"),await Nu("undefined"),nR(e)?e:null}function nR(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="firebase-messaging-database",iR=1,Js="firebase-messaging-store";let zu=null;function J0(){return zu||(zu=yl(rR,iR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Js)}}})),zu}async function sR(t){const e=Z0(t),r=await(await J0()).transaction(Js).objectStore(Js).get(e);if(r)return r;{const i=await tR(t.appConfig.senderId);if(i)return await Kd(t,i),i}}async function Kd(t,e){const n=Z0(t),i=(await J0()).transaction(Js,"readwrite");return await i.objectStore(Js).put(e,n),await i.done,e}function Z0({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},it=new gl("messaging","Messaging",oR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(t,e){const n=await Qd(t),r=e1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Gd(t.appConfig),i)).json()}catch(a){throw it.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw it.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw it.create("token-subscribe-no-token");return s.token}async function lR(t,e){const n=await Qd(t),r=e1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Gd(t.appConfig)}/${e.token}`,i)).json()}catch(a){throw it.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw it.create("token-update-failed",{errorInfo:a})}if(!s.token)throw it.create("token-update-no-token");return s.token}async function uR(t,e){const r={method:"DELETE",headers:await Qd(t)};try{const s=await(await fetch(`${Gd(t.appConfig)}/${e}`,r)).json();if(s.error){const a=s.error.message;throw it.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw it.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Gd({projectId:t}){return`${Q2}/projects/${t}/registrations`}async function Qd({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function e1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==X0&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=7*24*60*60*1e3;async function hR(t){const e=await fR(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:an(e.getKey("auth")),p256dh:an(e.getKey("p256dh"))},r=await sR(t.firebaseDependencies);if(r){if(pR(r.subscriptionOptions,n))return Date.now()>=r.createTime+cR?dR(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await uR(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Tg(t.firebaseDependencies,n)}else return Tg(t.firebaseDependencies,n)}async function dR(t,e){try{const n=await lR(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Kd(t.firebaseDependencies,r),n}catch(n){throw n}}async function Tg(t,e){const r={token:await aR(t,e),createTime:Date.now(),subscriptionOptions:e};return await Kd(t,r),r.token}async function fR(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Z2(e)})}function pR(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return mR(e,t),gR(e,t),yR(e,t),e}function mR(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function gR(t,e){e.data&&(t.data=e.data)}function yR(t,e){var n,r,i,s,a;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t){return typeof t=="object"&&!!t&&Y0 in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){if(!t||!t.options)throw $u("App Configuration Object");if(!t.name)throw $u("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw $u(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function $u(t){return it.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=vR(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t){try{t.swRegistration=await navigator.serviceWorker.register(K2,{scope:G2}),t.swRegistration.update().catch(()=>{}),await TR(t.swRegistration)}catch(e){throw it.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function TR(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${vg} ms`)),vg),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var a;((a=s.target)===null||a===void 0?void 0:a.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(t,e){if(!e&&!t.swRegistration&&await ER(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw it.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=X0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e){if(!navigator)throw it.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw it.create("permission-blocked");return await SR(t,e==null?void 0:e.vapidKey),await IR(t,e==null?void 0:e.serviceWorkerRegistration),hR(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(t,e,n){const r=RR(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Y0],message_name:n[X2],message_time:n[Y2],message_device_time:Math.floor(Date.now()/1e3)})}function RR(t){switch(t){case Ys.NOTIFICATION_CLICKED:return"notification_open";case Ys.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ys.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Ig(n)):t.onMessageHandler.next(Ig(n)));const r=n.data;_R(r)&&r[J2]==="1"&&await CR(t,n.messageType,r)}const Sg="@firebase/messaging",Ag="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=t=>{const e=new wR(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>kR(e,n)),e},xR=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>AR(e,r)}};function NR(){Qn(new yn("messaging",PR,"PUBLIC")),Qn(new yn("messaging-internal",xR,"PRIVATE")),Ht(Sg,Ag),Ht(Sg,Ag,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(){try{await $_()}catch{return!1}return typeof window<"u"&&z_()&&NT()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t=G_()){return VR().then(e=>{if(!e)throw it.create("unsupported-browser")},e=>{throw it.create("indexed-db-unsupported")}),_l(Gn(t),"messaging").getImmediate()}NR();const OR={apiKey:"AIzaSyCJB10ot9q_6KpI_borDB987gZWuidX40I",authDomain:"vishwanavya-72a92.firebaseapp.com",projectId:"vishwanavya-72a92",storageBucket:"vishwanavya-72a92.appspot.com",messagingSenderId:"34331683691",appId:"1:34331683691:web:09cd70702c7f70dd83fa2e"},t1=K_(OR),qu=FC(t1);DR(t1);const Hu="messages";function MR(t){const[e,n]=Fe.useState([]);return Fe.useEffect(()=>{const s=QC(Fu(qu,Hu),XC("ts","asc"));return r2(s,a=>n(a.docs.map(l=>({id:l.id,...l.data()}))))},[]),{msgs:e,send:async(s,a=!1)=>await n2(Fu(qu,Hu),{by:t,text:s,isReply:a,ts:s2()}),clear:async()=>{(await e2(Fu(qu,Hu))).forEach(a=>t2(a.ref))}}}function bR({text:t,isRobot:e=!1,isOwn:n=!1}){const r="🤖",i=n?"👨🏻":"👩🏻";return $.jsx("div",{className:`relative flex flex-col mb-6 animate-fade-in ${n?"items-end":"items-start"}`,children:$.jsxs("div",{className:"relative",children:[$.jsx("div",{className:`absolute -top-16 max-w-[280px] bg-gradient-to-br from-blue-100 to-indigo-100 
                        rounded-3xl px-5 py-3 text-sm shadow-lg border border-blue-200
                        before:content-[''] before:absolute before:top-full 
                        before:border-l-[15px] before:border-l-transparent 
                        before:border-r-[15px] before:border-r-transparent 
                        before:border-t-[15px] before:border-t-blue-100 ${n?"right-8 before:right-8":"left-8 before:left-8"}`,children:$.jsxs("p",{className:"text-gray-700 font-medium italic",children:[e&&"🤖 ",t]})}),$.jsx("div",{className:`w-28 h-32 bg-gradient-to-b from-blue-200 to-indigo-300 rounded-full 
                        flex items-center justify-center shadow-xl border-4 border-white`,children:$.jsx("div",{className:"text-4xl",children:e?r:i})})]})})}function LR({text:t,isOwn:e}){return e?$.jsx("div",{className:"flex justify-end mb-4 animate-slide-in-right",children:$.jsx("div",{className:`max-w-[280px] bg-gradient-to-br from-blue-500 to-indigo-500 
                        text-white rounded-2xl rounded-tr-lg px-4 py-3 shadow-sm`,children:$.jsx("p",{className:"text-sm",children:t})})}):null}function FR(){const[t,e]=Fe.useState(null),[n,r]=Fe.useState(""),[i,s]=Fe.useState(""),[a,l]=Fe.useState(!0),[u,h]=Fe.useState(!1),[f,m]=Fe.useState(!1),[g,C]=Fe.useState(!1),{msgs:P,send:N,clear:M}=MR(t),I=Fe.useRef(null);Fe.useEffect(()=>{var b;(b=I.current)==null||b.scrollIntoView({behavior:"smooth"})},[P]);const _=b=>{b.preventDefault();const j=n.trim().toLowerCase();j==="vishwa"||j==="navya"?(e(j==="vishwa"?"Vishwa":"Navya"),m(!1)):m(!0)},S=async b=>{b.preventDefault(),i.trim()&&t&&(await N(i.trim(),g),s(""),C(!1))},V=async()=>{u?(await M(),h(!1)):(h(!0),setTimeout(()=>h(!1),3e3))};return t?$.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:[$.jsx("div",{className:`bg-white/90 backdrop-blur-sm border-b border-pink-200 px-4 py-3 \r
                      sticky top-0 z-20 shadow-sm`,children:$.jsxs("div",{className:"flex items-center justify-between max-w-2xl mx-auto",children:[$.jsxs("div",{className:"flex items-center gap-3",children:[$.jsx(Wo,{className:"w-6 h-6 text-blue-400"}),$.jsx("h1",{className:`text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 \r
                           bg-clip-text text-transparent`,children:"GK Study Discussion"})]}),$.jsxs("div",{className:"flex items-center gap-4",children:[$.jsxs("button",{onClick:()=>l(!a),className:`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium
                         transition-all ${a?"bg-blue-100 text-blue-700 hover:bg-blue-200":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[a?$.jsx(lT,{className:"w-4 h-4"}):$.jsx(aT,{className:"w-4 h-4"}),a?"On":"Off"]}),$.jsxs("button",{onClick:V,className:`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium
                         transition-all ${u?"bg-red-100 text-red-700 hover:bg-red-200":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[$.jsx(cT,{className:"w-4 h-4"}),u?"Confirm?":"Clear"]})]})]})}),$.jsx("div",{className:"max-w-2xl mx-auto p-4 pb-24",children:$.jsxs("div",{className:"space-y-4",children:[P.length===0?$.jsxs("div",{className:"text-center py-12",children:[$.jsx(Wo,{className:"w-12 h-12 text-blue-300 mx-auto mb-4"}),$.jsx("p",{className:"text-gray-500 italic",children:"Start your study discussion..."})]}):P.map(b=>$.jsx("div",{children:b.isReply?$.jsx(bR,{text:b.text,isRobot:!0,isOwn:b.by===t}):b.by===t?$.jsx(LR,{text:b.text,isOwn:!0}):$.jsxs("div",{className:"flex items-start gap-3 mb-4 animate-slide-in-left",children:[$.jsx("div",{className:`w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 \r
                                    rounded-full flex items-center justify-center text-white text-sm`,children:b.by==="Vishwa"?"👨🏻":"👩🏻"}),$.jsx("div",{className:`max-w-[280px] bg-white border border-gray-200 \r
                                    rounded-2xl rounded-tl-lg px-4 py-3 shadow-sm`,children:$.jsx("p",{className:"text-sm text-gray-800",children:b.text})})]})},b.id)),$.jsx("div",{ref:I})]})}),$.jsx("div",{className:`fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm \r
                      border-t border-blue-200 p-4`,children:$.jsxs("form",{onSubmit:S,className:"max-w-2xl mx-auto",children:[$.jsx("div",{className:"flex items-center gap-2 mb-2",children:$.jsxs("button",{type:"button",onClick:()=>C(!g),className:`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium
                         transition-all ${g?"bg-blue-100 text-blue-700 border border-blue-300":"bg-gray-100 text-gray-600 border border-gray-300"}`,children:["🤖 ",g?"Robot Reply Mode ON":"Normal Mode"]})}),$.jsxs("div",{className:"flex gap-3 items-end",children:[$.jsx("div",{className:"flex-1",children:$.jsx("textarea",{value:i,onChange:b=>s(b.target.value),placeholder:g?"Type your robot reply...":"Type your message...",className:`w-full px-4 py-3 rounded-xl border border-blue-200 \r
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-100 \r
                           outline-none resize-none transition-all`,rows:1,onKeyDown:b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),S(b))}})}),$.jsx("button",{type:"submit",disabled:!i.trim(),className:`bg-gradient-to-r from-blue-500 to-indigo-500 text-white \r
                         p-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 \r
                         disabled:opacity-50 disabled:cursor-not-allowed\r
                         transform hover:scale-105 transition-all duration-200 \r
                         shadow-lg hover:shadow-xl`,children:$.jsx(uT,{className:"w-5 h-5"})})]})]})}),$.jsxs("div",{className:"fixed inset-0 pointer-events-none overflow-hidden",children:[$.jsx("div",{className:`absolute top-20 left-5 text-blue-200 text-2xl animate-bounce \r
                        animation-delay-1000`,children:"📚"}),$.jsx("div",{className:`absolute top-40 right-8 text-indigo-200 text-xl animate-pulse \r
                        animation-delay-2000`,children:"🧠"}),$.jsx("div",{className:`absolute bottom-32 left-12 text-purple-300 text-3xl animate-bounce \r
                        animation-delay-3000`,children:"💡"})]})]}):$.jsxs("div",{className:`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 \r
                      flex items-center justify-center p-4`,children:[$.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[$.jsx("div",{className:"absolute top-10 left-10 text-blue-200 text-6xl animate-pulse",children:"📚"}),$.jsx("div",{className:"absolute top-32 right-20 text-indigo-200 text-4xl animate-bounce",children:"🧠"}),$.jsx("div",{className:"absolute bottom-40 left-32 text-purple-300 text-5xl animate-pulse",children:"❓"}),$.jsx("div",{className:"absolute bottom-20 right-16 text-blue-300 text-3xl animate-bounce",children:"💡"})]}),$.jsxs("div",{className:`bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md \r
                        border border-blue-200 relative z-10`,children:[$.jsxs("div",{className:"text-center mb-8",children:[$.jsx("h1",{className:`text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 \r
                           bg-clip-text text-transparent mb-2`,children:"GK Quiz Portal"}),$.jsxs("p",{className:"text-gray-600 flex items-center justify-center gap-2",children:[$.jsx(Wo,{className:"w-4 h-4 text-blue-400"}),"Study Discussion",$.jsx(Wo,{className:"w-4 h-4 text-blue-400"})]})]}),f&&$.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl",children:$.jsx("p",{className:"text-red-600 text-center font-medium",children:"Access denied. Only Vishwa and Navya can enter."})}),$.jsxs("form",{onSubmit:_,className:"space-y-4",children:[$.jsxs("div",{children:[$.jsx("label",{className:"block text-gray-700 font-medium mb-2",children:"Enter your study name"}),$.jsx("input",{type:"text",value:n,onChange:b=>r(b.target.value),className:`w-full px-4 py-3 rounded-xl border border-blue-200 \r
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-100 \r
                           outline-none transition-all`,placeholder:"Enter your name ",required:!0})]}),$.jsx("button",{type:"submit",className:`w-full bg-gradient-to-r from-blue-500 to-indigo-500 \r
                         text-white py-3 rounded-2xl font-medium \r
                         hover:from-blue-600 hover:to-indigo-600 \r
                         transform hover:scale-105 transition-all duration-200 \r
                         shadow-lg hover:shadow-xl`,children:"Start Study Session"})]})]})]})}F_(document.getElementById("root")).render($.jsx(Fe.StrictMode,{children:$.jsx(FR,{})}));
