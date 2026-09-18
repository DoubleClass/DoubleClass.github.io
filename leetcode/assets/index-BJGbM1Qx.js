var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function T(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,T(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),T(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=T(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=T(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return T(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return T(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.6`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var T=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===T?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function A(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var j=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-j(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-j(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-j(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return ke.call(Nt,e)?!0:ke.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(le(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&en(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&en(e,a,t[a])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[mt]||null;if(!i)throw Error(s(90));Kt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,`passive`,{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ht(wt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(gn){var yr;if(gn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=gn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Ut(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};gn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),kt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-j(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)gi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=hi(31,n,t,i),e.elementType=ie,e.lanes=a,e;case y:return bi(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=hi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=hi(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=hi(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case w:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=hi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-j(r)-1;r&=~(1<<i),n+=1;var a=32-j(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-j(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(s(519));function Wi(e){throw Xi(Ti(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=pe(null),Qi=null,$i=null;function ea(e,t,n){k(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,O(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),na(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),na(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ia(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;kr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===_e.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(s(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=E.S;E.S=function(e,t){eu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=pe(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?k(Ca,Ca.current):k(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(s(460)),Oa=Error(s(474)),ka=Error(s(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(s(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(s(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===w&&Na(a)===t.type)?(t=i(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=bi(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case w:return t=Na(t),f(e,t,n)}if(le(t)||se(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Na(n),p(e,t,n,r)}if(le(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Na(r),m(e,t,n,r,i)}if(le(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),N&&Fi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),N&&Fi(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Na(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ba(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=bi(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=yi(a.type,a.key,a.props,null,e.mode,c),Ba(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ci(a,e.mode,c),c.return=e,e=c}return o(e);case w:return a=Na(a),b(e,r,a,c)}if(le(a))return h(e,r,a,c);if(se(a)){if(l=se(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,za(a),c);if(a.$$typeof===S)return b(e,r,ca(e,a),c);Va(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=xi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=pe(null),io=pe(0);function ao(e,t){e=Wl,k(io,e),k(ro,t),Wl=e|t.baseLanes}function oo(){k(io,Wl),k(ro,ro.current)}function so(){Wl=io.current,O(ro),O(io)}var co=pe(null),lo=null;function uo(e){var t=e.alternate;k(F,F.current&1),k(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){k(F,F.current),k(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(k(F,F.current),k(co,e),lo===null&&(lo=e)):mo(e)}function mo(){k(F,F.current),k(co,co.current)}function ho(e){O(co),lo===e&&(lo=null),O(F)}var F=pe(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(s(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){E.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(s(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var i=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=i)throw Error(s(301));if(i+=1,R=L=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}E.H=Ws,a=t(n,r)}while(yo);return a}function ko(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(s(467)):Error(s(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(s(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!kr(a,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);kr(a,t.memoizedState)||(V=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ho(e,t,n){var r=I,i=B(),a=N;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!kr((L||i).memoizedState,n);if(o&&(i.memoizedState=n,V=!0),i=i.queue,ps(Go.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,i,n,t),null),K===null)throw Error(s(349));a||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){A(!0);try{n()}finally{A(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,i){if(Rs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};E.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Zo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){A(!0);try{e()}finally{A(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Ls(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=Os(e).queue;Ts(e,i,t,ue,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(s(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){A(!0);try{e()}finally{A(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){A(!0);try{n(t)}finally{A(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,i=No();if(N){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),K===null)throw Error(s(349));J&127||Uo(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,fs(Go.bind(null,r,a,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-j(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,i,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(s(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Ti(r,n),i=tc(e.stateNode,r,i),Za(e,i),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Ui&&(e=Error(s(422),{cause:r}),Xi(Ti(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Ti(a,n),Xl===null?Xl=[a]:Xl.push(a),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(ru===null||!ru.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=nc(i),rc(i,e,n,r),Za(n,i),!1}n=n.return}while(n!==null);return!1}var ac=Error(s(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(fo(t),i)if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(V||ia(e,t,n,!1),i=(n&e.childLanes)!==0,V||i){if(r=K,r!==null&&(o=st(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,ui(e,o),hu(r,e,o),ac;Du(),t=mc(e,t,n)}else e=a.treeContext,M=cf(o.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(F.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(N){if(i?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(mo(t),i=t.mode,c=Ec({mode:`hidden`,children:c},i),r=bi(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,o,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,i=t.mode,r=Ec({mode:`visible`,children:r.children},i),c=bi(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,o,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),o=(n&e.childLanes)!==0,V||o){if(o=K,o!==null&&(r=st(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(o,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return i?(mo(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,i,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(i=c.cachePool,i===null?i=Ea():(l=P._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Cc(e,o,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Nc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=sc(null,t,e,r,n);break a}else if(i===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(s(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Ys(r,t.pendingProps),yc(e,t,r,i,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,qa(e,t),eo(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0),$a(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=bc(e,t,r,n);break a}else if(r!==i){i=Ti(Error(s(424)),t),Xi(i),t=bc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===i){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Bi=t,Hi=!0,i=M,Zd(t.type)?(lf=i,M=cf(r.firstChild)):M=i),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((i=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?i=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,i=!0)),i||Wi(t)),be(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Eo(e,t,ko,null,null,n),Qf._currentValue=i),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,oa(t),i=sa(i),r=r(i),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(i=wa(),i===null&&(i=K,a=pa(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ka(t),ea(t,P,i)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ea(t,P,r),r!==i.cache&&ra(t,[P],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Pa=Aa,Oa}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Fc(t),a===null?(H(t),Ic(t,i,null,r,n)):(H(t),Lc(t,a))):a?a===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,a)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,i,e,r,n)),null;case 27:if(xe(t),n=ge.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return H(t),null}e=me.current,qi(t)?Gi(t,e):(e=ff(i,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(xe(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return H(t),null}if(a=me.current,qi(t))Gi(t,a);else{var o=Bd(ge.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[pt]=t,a[mt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ge.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Bi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[pt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(s(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[pt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),i=!1}else i=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(O(F),r=t.memoizedState,r===null)return H(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=go(e),a!==null){for(t.flags|=128,zc(r,!1),e=a.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return k(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>tu&&(t.flags|=128,i=!0,zc(r,!1),t.lanes=4194304)}else{if(!i)if(e=go(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!N)return H(t),null}else 2*Pe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,i=!0,zc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=F.current,k(F,i?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(s(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(F),null;case 4:return ye(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&O(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:O(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&O(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Ys(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(s(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(s(160));dl(a,o,i),W=null,ll=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[bt]||a[pt]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[pt]=e,Et(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[pt]=e,Et(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){i=e.stateNode;try{Qt(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Xc(e,i,n===null?i:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=_l,_l=gf(t.containerInfo),gl(t,e),_l=i,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||i,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;el(e,Qc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(Qt(a,``),n.flags&=-33),el(e,Qc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;$c(e,Qc(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?ut():dd()}function mu(){if(Jl===0)if(!(J&536870912)||N){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912;return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),rt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=a,Kl|=a,i=4;break a}a=Zl,Zl=i,a!==null&&(Zl===null?Zl=a:Zl.push.apply(Zl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=$l+300-Pe(),10<i)){if(yu(r,t,Jl,!Vl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,`Throttled`,-0,0),i);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Pe():(a&4194048)===a?eu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-j(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=$e(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-j(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,E.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=E.H;return E.H=Vs,e===null?Vs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),i=Eu();K!==e||J!==t?(nu=null,tu=Pe()+500,Su(e,t)):Hl=$e(e,t);a:do try{if(Y!==0&&q!==null){t=q;var a=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,a,1);break;case 2:case 9:if(ja(a)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},a.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(a)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(q.tag){case 26:o=q.memoizedState;case 5:case 27:var c=q;if(o?Wf(o):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,a,5);break;case 6:Y=0,Bl=null,Pu(e,t,a,6);break;case 8:xu(),X=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,E.H=r,E.A=i,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=oi,it(e,n,a,o,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,i=D.p,D.p=2,o=G,G|=4;try{ol(e,t,n)}finally{G=o,D.p=i,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=E.T,i=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var a=au,o=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(s(331));var c=G;if(G|=4,Fl(a.current),Dl(a,a.current,o,n),G=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,a)}catch{}return!0}finally{D.p=i,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Pe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=ui(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-j(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-j(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),lt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=St(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),o=[];a:{var s=ei.get(e);if(s!==void 0){var c=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:c=Kn;break;case`focusin`:u=`focus`,c=Ln;break;case`focusout`:u=`blur`,c=Ln;break;case`beforeblur`:case`afterblur`:c=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Jn;break;case qr:case Jr:case Yr:c=Rn;break;case $r:c=Yn;break;case`scroll`:case`scrollend`:c=An;break;case`wheel`:c=Xn;break;case`copy`:case`cut`:case`paste`:c=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=qn;break;case`toggle`:case`beforetoggle`:c=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?St(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:wt(c),h=u==null?s:wt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?wt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=_r;else if(dr(s))if(vr)v=Dr;else{v=Tr;var y=wr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&nn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Jt(s,`number`,s.value)}switch(y=r?wt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(o,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(o,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,a);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:tn(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[mt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}Zt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ge.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=Tt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,Et(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),Et(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,Et(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),Et(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-j(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.6`)throw Error(s(527,Lp,`19.2.6`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Xs,a=Zs,o=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=`https://interview-desk-daily.tjcxs136720.chatgpt.site`,f=`interview-cloud-change`,p=null,m=``,h=!1,g=`进度保存在当前浏览器`,_,v=new Map;function y(e){g=e,window.dispatchEvent(new Event(f))}function b(e){h=!1;for(let e of v.values())e.clean(),e.reject(Error(`Cloud connection closed`));v.clear(),y(e),window.dispatchEvent(new Event(`focus`))}function x(){return{ready:h,message:g}}function ee(e){return window.addEventListener(f,e),()=>window.removeEventListener(f,e)}function S(){if(b(`请在新窗口登录并允许同步`),m=crypto.randomUUID(),p=window.open(`${d}/github-sync#${m}`,`interview-desk-cloud`,`popup,width=540,height=680`),!p){y(`窗口被拦截，请允许弹出窗口后重试`);return}_&&clearInterval(_),_=setInterval(()=>{p?.closed&&(clearInterval(_),p=null,b(`同步窗口已关闭，进度仍保存在本机`))},1e3)}window.addEventListener(`message`,e=>{if(e.origin!==`https://interview-desk-daily.tjcxs136720.chatgpt.site`||e.source!==p)return;let t=e.data;if(!(!t||t.channel!==m)){if(t.type===`interview-sync:ready`)h=!0,y(`云端已连接，请保留同步窗口`),window.dispatchEvent(new Event(`focus`));else if(t.type===`interview-sync:response`){let e=v.get(t.id);if(!e)return;v.delete(t.id),e.clean(),t.error?e.reject(Error(`Cloud request failed`)):e.resolve(new Response(JSON.stringify(t.body),{status:t.status,headers:{"content-type":`application/json`}}))}}});async function C(e,t={}){if(!h||!p||p.closed)return new Response(`{}`,{status:401});let n=p,r=crypto.randomUUID();if(t.signal?.aborted)throw new DOMException(`Aborted`,`AbortError`);return new Promise((e,i)=>{let a=()=>{v.get(r)?.clean(),v.delete(r),i(new DOMException(`Aborted`,`AbortError`))},o=setTimeout(()=>{v.get(r)?.clean(),v.delete(r),y(`云端暂未响应，本机进度已保留`),i(Error(`Cloud request timed out`))},15e3);v.set(r,{resolve:e,reject:i,clean:()=>{clearTimeout(o),t.signal?.removeEventListener(`abort`,a)}}),t.signal?.addEventListener(`abort`,a,{once:!0}),n.postMessage({type:`interview-sync:request`,channel:m,id:r,method:t.method||`GET`,body:typeof t.body==`string`?t.body:void 0},d)})}var te=[{id:1,title:`两数之和`,category:`哈希`,difficulty:`简单`,question:`给定整数数组 nums 和目标值 target，返回和为 target 的两个整数下标。`,idea:`我会边遍历边维护「数值 → 下标」的哈希表。对当前值 x，只需检查 target-x 是否已经出现；若出现立即返回，否则记录 x。这样每个元素只处理一次。`,code:`class Solution:
    def twoSum(self, nums, target):
        seen = {}
        for i, x in enumerate(nums):
            if target - x in seen:
                return [seen[target - x], i]
            seen[x] = i`,complexity:`时间 O(n)，空间 O(n)。`,pitfall:`先查再存，避免 target=2x 时错误地重复使用同一元素。`},{id:49,title:`字母异位词分组`,category:`哈希`,difficulty:`中等`,question:`将字符串数组中的字母异位词组合在一起。`,idea:`异位词拥有相同的字符计数。我用 26 维计数元组作为哈希键，把字符串加入对应分组；相比排序键，长度为 k 的字符串只需 O(k)。`,code:`from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs):
        groups = defaultdict(list)
        for word in strs:
            count = [0] * 26
            for ch in word:
                count[ord(ch) - ord("a")] += 1
            groups[tuple(count)].append(word)
        return list(groups.values())`,complexity:`时间 O(Σk)，空间 O(Σk)。`,pitfall:`列表不可哈希，必须转成 tuple；若字符集不限于小写字母可改用排序键。`},{id:128,title:`最长连续序列`,category:`哈希`,difficulty:`中等`,question:`在未排序整数数组中，找出最长连续数字序列的长度，要求 O(n)。`,idea:`先把所有数放入集合。只从没有前驱 x-1 的数开始向后枚举，这保证每段连续序列只被完整扫描一次，因此整体仍是线性时间。`,code:`class Solution:
    def longestConsecutive(self, nums):
        values = set(nums)
        best = 0
        for x in values:
            if x - 1 not in values:
                y = x
                while y in values:
                    y += 1
                best = max(best, y - x)
        return best`,complexity:`平均时间 O(n)，空间 O(n)。`,pitfall:`必须只从序列起点扩展；从每个数都扩展会退化到 O(n²)。`},{id:283,title:`移动零`,category:`双指针`,difficulty:`简单`,question:`原地将数组中的所有 0 移到末尾，同时保持非零元素相对顺序。`,idea:`用 slow 指向下一个非零元素应放的位置，fast 扫描数组；遇到非零就与 slow 交换并推进 slow。交换写法天然原地且保持顺序。`,code:`class Solution:
    def moveZeroes(self, nums):
        slow = 0
        for fast, x in enumerate(nums):
            if x != 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`题目要求原地修改，不要创建新数组；slow 只在遇到非零时移动。`},{id:11,title:`盛最多水的容器`,category:`双指针`,difficulty:`中等`,question:`从高度数组中选两条线，使它们与 x 轴组成的容器盛水最多。`,idea:`左右指针从两端开始。面积由较短边决定，移动长边不可能改善当前短板，所以每次只移动较短边，并持续更新最大面积。`,code:`class Solution:
    def maxArea(self, height):
        left, right, best = 0, len(height) - 1, 0
        while left < right:
            best = max(best, min(height[left], height[right]) * (right - left))
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return best`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`面积是短边乘宽度；移动较高边无法弥补宽度减小。`},{id:15,title:`三数之和`,category:`双指针`,difficulty:`中等`,question:`找出数组中所有和为 0 且不重复的三元组。`,idea:`先排序，枚举第一个数，再在右侧用相向双指针寻找另外两个数。排序既提供单调性，也让去重变得直接。`,code:`class Solution:
    def threeSum(self, nums):
        nums.sort()
        ans = []
        for i in range(len(nums) - 2):
            if i and nums[i] == nums[i - 1]:
                continue
            if nums[i] > 0:
                break
            l, r = i + 1, len(nums) - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if s < 0:
                    l += 1
                elif s > 0:
                    r -= 1
                else:
                    ans.append([nums[i], nums[l], nums[r]])
                    l += 1
                    r -= 1
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
                    while l < r and nums[r] == nums[r + 1]:
                        r -= 1
        return ans`,complexity:`时间 O(n²)，除结果外空间 O(1)。`,pitfall:`固定项与左右指针都要去重；排序后固定项大于 0 可直接结束。`},{id:42,title:`接雨水`,category:`双指针`,difficulty:`困难`,question:`给定柱状图高度，计算下雨后能接多少水。`,idea:`维护左右指针及两侧历史最高值。较低一侧的水位已经由该侧最高值确定，所以计算这一侧的积水并向内移动。`,code:`class Solution:
    def trap(self, height):
        l, r = 0, len(height) - 1
        left_max = right_max = water = 0
        while l < r:
            if height[l] <= height[r]:
                left_max = max(left_max, height[l])
                water += left_max - height[l]
                l += 1
            else:
                right_max = max(right_max, height[r])
                water += right_max - height[r]
                r -= 1
        return water`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`先更新最大值再累加，保证加数非负；移动的是当前较低的一侧。`},{id:3,title:`无重复字符的最长子串`,category:`滑动窗口`,difficulty:`中等`,question:`求字符串中不含重复字符的最长连续子串长度。`,idea:`窗口右端逐字符扩张，用字典记录字符最近下标。遇到窗口内重复字符时，左端直接跳到上次位置后一位，并且只能向右移动。`,code:`class Solution:
    def lengthOfLongestSubstring(self, s):
        last = {}
        left = best = 0
        for right, ch in enumerate(s):
            if ch in last:
                left = max(left, last[ch] + 1)
            last[ch] = right
            best = max(best, right - left + 1)
        return best`,complexity:`时间 O(n)，空间 O(字符集)。`,pitfall:`左边界要取 max，不能被窗口外的旧重复位置拉回。`},{id:438,title:`找到字符串中所有字母异位词`,category:`滑动窗口`,difficulty:`中等`,question:`返回 s 中所有与 p 互为字母异位词的子串起始下标。`,idea:`先用 Counter 统计 p 和 s 的第一个定长窗口。之后窗口每次右移一格：加入右侧字符、移除左侧字符；两个 Counter 相等时，当前窗口就是一个字母异位词。`,code:`from collections import Counter


class Solution:
    def findAnagrams(self, s, p):
        window_size = len(p)
        if window_size > len(s):
            return []

        need = Counter(p)
        window = Counter(s[:window_size])
        answer = []

        if window == need:
            answer.append(0)

        for right in range(window_size, len(s)):
            left = right - window_size
            left_char = s[left]
            right_char = s[right]

            window[right_char] += 1
            window[left_char] -= 1
            if window[left_char] == 0:
                del window[left_char]

            if window == need:
                answer.append(left + 1)

        return answer`,complexity:`时间 O(n)，空间 O(字符集)。题目限定小写字母，因此字符集大小最多为 26。`,pitfall:`窗口长度始终保持为 len(p)；字符计数降为 0 时删除该键，让 Counter 保持简洁。`},{id:560,title:`和为 K 的子数组`,category:`子串`,difficulty:`中等`,question:`统计连续子数组中元素和等于 k 的个数。`,idea:`若当前前缀和为 prefix，需要之前出现过 prefix-k。用哈希表记录每个前缀和的出现次数，边遍历边累计答案。`,code:`from collections import defaultdict


class Solution:
    def subarraySum(self, nums, k):
        count = defaultdict(int)
        count[0] = 1
        prefix = ans = 0
        for x in nums:
            prefix += x
            ans += count[prefix - k]
            count[prefix] += 1
        return ans`,complexity:`时间 O(n)，空间 O(n)。`,pitfall:`初始化 count[0]=1 才能统计从下标 0 开始的子数组；必须存出现次数。`},{id:53,title:`最大子数组和`,category:`普通数组`,difficulty:`中等`,question:`找出数组中和最大的连续子数组，返回其和。`,idea:`Kadane 算法：以当前位置结尾的最优和，要么从当前元素重新开始，要么接在前一段之后。同步维护全局最大值。`,code:`class Solution:
    def maxSubArray(self, nums):
        current = best = nums[0]
        for x in nums[1:]:
            current = max(x, current + x)
            best = max(best, current)
        return best`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`不能把初值设为 0，否则全负数组会返回错误答案。`},{id:56,title:`合并区间`,category:`普通数组`,difficulty:`中等`,question:`合并所有重叠区间并返回互不重叠的区间。`,idea:`先按左端点排序。当前区间若与答案末尾重叠，就扩展其右端点；否则开始一个新区间。`,code:`class Solution:
    def merge(self, intervals):
        intervals.sort(key=lambda x: x[0])
        ans = []
        for start, end in intervals:
            if not ans or start > ans[-1][1]:
                ans.append([start, end])
            else:
                ans[-1][1] = max(ans[-1][1], end)
        return ans`,complexity:`时间 O(n log n)，空间 O(n)（结果）。`,pitfall:`端点相等也算重叠，所以新开区间的条件是 start > last_end。`},{id:189,title:`轮转数组`,category:`普通数组`,difficulty:`中等`,question:`将数组向右轮转 k 个位置，要求原地完成。`,idea:`把 k 对 n 取模。先整体反转，再反转前 k 个和后 n-k 个，三次反转恰好得到右移结果。`,code:`class Solution:
    def rotate(self, nums, k):
        n = len(nums)
        k %= n

        def reverse(l, r):
            while l < r:
                nums[l], nums[r] = nums[r], nums[l]
                l += 1
                r -= 1

        reverse(0, n - 1)
        reverse(0, k - 1)
        reverse(k, n - 1)`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`先做 k %= n；三次反转的区间端点不要写错。`},{id:238,title:`除自身以外数组的乘积`,category:`普通数组`,difficulty:`中等`,question:`不使用除法，在 O(n) 时间内返回每个位置除自身外的乘积。`,idea:`答案先存每个位置左侧乘积，再从右向左维护右侧乘积并乘入答案；这样无需额外的前后缀数组。`,code:`class Solution:
    def productExceptSelf(self, nums):
        ans = [1] * len(nums)
        prefix = 1
        for i, x in enumerate(nums):
            ans[i] = prefix
            prefix *= x
        suffix = 1
        for i in range(len(nums) - 1, -1, -1):
            ans[i] *= suffix
            suffix *= nums[i]
        return ans`,complexity:`时间 O(n)，除答案外空间 O(1)。`,pitfall:`先写入前缀再乘当前值，后缀同理；该写法自然处理数组中的 0。`},{id:41,title:`缺失的第一个正数`,category:`普通数组`,difficulty:`困难`,question:`在 O(n) 时间、O(1) 额外空间内找到未出现的最小正整数。`,idea:`答案一定在 [1,n+1]。把值 x 原地交换到下标 x-1，直到每个可放置的数归位；最后第一个 nums[i] != i+1 的位置就是答案。`,code:`class Solution:
    def firstMissingPositive(self, nums):
        n = len(nums)
        for i in range(n):
            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
                j = nums[i] - 1
                nums[i], nums[j] = nums[j], nums[i]
        for i, x in enumerate(nums):
            if x != i + 1:
                return i + 1
        return n + 1`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`while 中必须检查目标位置不是同值，避免重复元素导致死循环。`},{id:73,title:`矩阵置零`,category:`矩阵`,difficulty:`中等`,question:`若矩阵某元素为 0，则将其所在行和列全部置零，要求原地。`,idea:`用第一行和第一列充当标记数组，并单独记录第一列是否需要清零。先标记，再从后向前写零，避免标记过早被破坏。`,code:`class Solution:
    def setZeroes(self, matrix):
        m, n = len(matrix), len(matrix[0])
        first_col = any(matrix[i][0] == 0 for i in range(m))
        for i in range(m):
            for j in range(1, n):
                if matrix[i][j] == 0:
                    matrix[i][0] = matrix[0][j] = 0
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, 0, -1):
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0
            if first_col:
                matrix[i][0] = 0`,complexity:`时间 O(mn)，空间 O(1)。`,pitfall:`第一列与 matrix[0][0] 共用位置，需额外布尔量；回填要从后向前。`},{id:54,title:`螺旋矩阵`,category:`矩阵`,difficulty:`中等`,question:`按顺时针螺旋顺序返回矩阵中的所有元素。`,idea:`维护 top、bottom、left、right 四条边界，每轮依次遍历上、右、下、左，遍历后收缩对应边界。`,code:`class Solution:
    def spiralOrder(self, matrix):
        ans = []
        top, bottom = 0, len(matrix) - 1
        left, right = 0, len(matrix[0]) - 1
        while top <= bottom and left <= right:
            ans += matrix[top][left : right + 1]
            top += 1
            for i in range(top, bottom + 1):
                ans.append(matrix[i][right])
            right -= 1
            if top <= bottom:
                ans += matrix[bottom][left : right + 1][::-1]
                bottom -= 1
            if left <= right:
                for i in range(bottom, top - 1, -1):
                    ans.append(matrix[i][left])
                left += 1
        return ans`,complexity:`时间 O(mn)，除结果外空间 O(1)。`,pitfall:`遍历下边和左边前要再次检查边界，避免单行或单列重复加入。`},{id:160,title:`相交链表`,category:`链表`,difficulty:`简单`,question:`找到两个单链表相交的起始节点；不存在则返回空。`,idea:`两个指针分别走 A→B 与 B→A。交换链表后两者都走过 m+n 距离，会在交点或共同的 None 相遇。`,code:`class Solution:
    def getIntersectionNode(self, headA, headB):
        a, b = headA, headB
        while a is not b:
            a = headB if a is None else a.next
            b = headA if b is None else b.next
        return a`,complexity:`时间 O(m+n)，空间 O(1)。`,pitfall:`判断的是节点身份 is，而不是节点值；没有交点时最终也会在 None 相遇。`},{id:206,title:`反转链表`,category:`链表`,difficulty:`简单`,question:`反转单链表并返回新的头节点。`,idea:`迭代维护 prev、cur、next_node。先保存下一节点，再反转当前指针，最后整体向前推进。`,code:`class Solution:
    def reverseList(self, head):
        prev, cur = None, head
        while cur:
            next_node = cur.next
            cur.next = prev
            prev, cur = cur, next_node
        return prev`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`改写 cur.next 之前必须保存原 next，否则会丢失剩余链表。`},{id:234,title:`回文链表`,category:`链表`,difficulty:`简单`,question:`判断单链表是否为回文链表，要求 O(1) 额外空间。`,idea:`快慢指针找到中点，反转后半段，再从两端逐节点比较。面试中可补充：若接口要求无副作用，比较后再恢复链表。`,code:`class Solution:
    def isPalindrome(self, head):
        slow = fast = head
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
        prev = None
        while slow:
            slow.next, prev, slow = prev, slow, slow.next
        left, right = head, prev
        while right:
            if left.val != right.val:
                return False
            left, right = left.next, right.next
        return True`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`只需比较后半段长度；Python 多重赋值右侧会先求值，因此可安全原地反转。`},{id:141,title:`环形链表`,category:`链表`,difficulty:`简单`,question:`判断链表中是否存在环。`,idea:`Floyd 快慢指针：slow 每次一步，fast 每次两步。若有环，快指针一定会在环内追上慢指针；无环则 fast 先到 None。`,code:`class Solution:
    def hasCycle(self, head):
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                return True
        return False`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`循环条件必须同时检查 fast 和 fast.next。`},{id:142,title:`环形链表 II`,category:`链表`,difficulty:`中等`,question:`若链表有环，返回入环的第一个节点。`,idea:`快慢指针相遇后，把一个指针移回头部，之后两者都每次走一步，再次相遇处就是环入口。依据是头到入口距离等于相遇点继续绕到入口的距离模环长。`,code:`class Solution:
    def detectCycle(self, head):
        slow = fast = head
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
            if slow is fast:
                slow = head
                while slow is not fast:
                    slow, fast = slow.next, fast.next
                return slow
        return None`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`第二阶段两个指针都走一步；比较节点身份而非值。`},{id:21,title:`合并两个有序链表`,category:`链表`,difficulty:`简单`,question:`合并两个升序链表并返回新链表头节点。`,idea:`使用哨兵节点和 tail 指针，每次接上较小节点，最后把未遍历完的链表整体接到尾部。`,code:`class Solution:
    def mergeTwoLists(self, list1, list2):
        dummy = tail = ListNode()
        while list1 and list2:
            if list1.val <= list2.val:
                tail.next, list1 = list1, list1.next
            else:
                tail.next, list2 = list2, list2.next
            tail = tail.next
        tail.next = list1 or list2
        return dummy.next`,complexity:`时间 O(m+n)，空间 O(1)。`,pitfall:`返回 dummy.next；循环后别忘了接上剩余链表。`},{id:2,title:`两数相加`,category:`链表`,difficulty:`中等`,question:`两个链表逆序表示非负整数，返回它们的和对应的链表。`,idea:`同步遍历两条链表并维护进位 carry。每轮把两节点值和进位相加，用 divmod 得到新进位和当前位；只要节点或进位仍存在就继续。`,code:`class Solution:
    def addTwoNumbers(self, l1, l2):
        dummy = tail = ListNode()
        carry = 0
        while l1 or l2 or carry:
            total = carry
            if l1:
                total += l1.val
                l1 = l1.next
            if l2:
                total += l2.val
                l2 = l2.next
            carry, digit = divmod(total, 10)
            tail.next = ListNode(digit)
            tail = tail.next
        return dummy.next`,complexity:`时间 O(max(m,n))，空间 O(max(m,n))（结果）。`,pitfall:`循环条件必须包含 carry，处理最高位进位。`},{id:19,title:`删除链表的倒数第 N 个结点`,category:`链表`,difficulty:`中等`,question:`删除链表倒数第 n 个节点，并返回头节点。`,idea:`增加哨兵节点，让 fast 先走 n+1 步，再让 fast、slow 同步移动；fast 到空时 slow 正好停在待删节点前驱。`,code:`class Solution:
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(0, head)
        fast = slow = dummy
        for _ in range(n + 1):
            fast = fast.next
        while fast:
            fast, slow = fast.next, slow.next
        slow.next = slow.next.next
        return dummy.next`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`哨兵统一删除头节点的情况；这里 fast 先走 n+1 步。`},{id:24,title:`两两交换链表中的节点`,category:`链表`,difficulty:`中等`,question:`两两交换链表相邻节点，不能只交换节点值。`,idea:`用 dummy 指向头部，prev 始终指向待交换二元组的前驱。保存 first、second 后调整三条连接，再把 prev 移到 first。`,code:`class Solution:
    def swapPairs(self, head):
        dummy = ListNode(0, head)
        prev = dummy
        while prev.next and prev.next.next:
            first, second = prev.next, prev.next.next
            first.next = second.next
            second.next = first
            prev.next = second
            prev = first
        return dummy.next`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`交换后 prev 应移动到原 first；画出三条边再写代码。`},{id:25,title:`K 个一组翻转链表`,category:`链表`,difficulty:`困难`,question:`每 k 个节点一组翻转链表，不足 k 个保持原顺序。`,idea:`用 dummy 和 group_prev。先找到本组第 k 个节点，若不足直接返回；再以 group_next 为初始 prev 原地反转这一组，最后连接并推进到下一组。`,code:`class Solution:
    def reverseKGroup(self, head, k):
        dummy = ListNode(0, head)
        group_prev = dummy
        while True:
            kth = group_prev
            for _ in range(k):
                kth = kth.next
                if not kth:
                    return dummy.next
            group_next = kth.next
            prev, cur = group_next, group_prev.next
            while cur is not group_next:
                cur.next, prev, cur = prev, cur, cur.next
            old_start = group_prev.next
            group_prev.next = kth
            group_prev = old_start`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`不足 k 个不能翻；反转前保存 group_next 和本组旧起点。`},{id:138,title:`随机链表的复制`,category:`链表`,difficulty:`中等`,question:`深拷贝带 next 与 random 指针的链表。`,idea:`最稳妥的面试写法是两遍哈希：第一遍为每个原节点创建副本，第二遍连接副本的 next 和 random。清晰度优先，若追问 O(1) 空间再讲穿插节点法。`,code:`class Solution:
    def copyRandomList(self, head):
        if not head:
            return None
        copies = {None: None}
        cur = head
        while cur:
            copies[cur] = Node(cur.val)
            cur = cur.next
        cur = head
        while cur:
            copies[cur].next = copies[cur.next]
            copies[cur].random = copies[cur.random]
            cur = cur.next
        return copies[head]`,complexity:`时间 O(n)，空间 O(n)。`,pitfall:`给 None 预设映射可消除边界判断；不能让副本指针仍指向原节点。`},{id:148,title:`排序链表`,category:`链表`,difficulty:`中等`,question:`在 O(n log n) 时间内对链表排序。`,idea:`链表适合归并排序：快慢指针拆成两半，递归排序后线性合并。它不需要随机访问，合并可原地重连节点。`,code:`class Solution:
    def sortList(self, head):
        if not head or not head.next:
            return head
        slow, fast = head, head.next
        while fast and fast.next:
            slow, fast = slow.next, fast.next.next
        right = slow.next
        slow.next = None
        left = self.sortList(head)
        right = self.sortList(right)
        dummy = tail = ListNode()
        while left and right:
            if left.val <= right.val:
                tail.next, left = left, left.next
            else:
                tail.next, right = right, right.next
            tail = tail.next
        tail.next = left or right
        return dummy.next`,complexity:`时间 O(n log n)，递归栈 O(log n)。`,pitfall:`用 fast=head.next 可让 slow 停在左半段末尾；拆分时要断开 slow.next。`},{id:23,title:`合并 K 个升序链表`,category:`链表`,difficulty:`困难`,question:`合并 k 条升序链表并返回一条升序链表。`,idea:`维护大小至多为 k 的最小堆，每条链表只放当前头节点。弹出最小节点接到结果，并把它的 next 入堆；计数器用于值相同时避免比较节点对象。`,code:`import heapq, itertools


class Solution:
    def mergeKLists(self, lists):
        heap = []
        counter = itertools.count()
        for node in lists:
            if node:
                heapq.heappush(heap, (node.val, next(counter), node))
        dummy = tail = ListNode()
        while heap:
            _, _, node = heapq.heappop(heap)
            tail.next = node
            tail = node
            if node.next:
                heapq.heappush(heap, (node.next.val, next(counter), node.next))
        return dummy.next`,complexity:`N 个节点时 O(N log k)，空间 O(k)。`,pitfall:`Python 元组前两项相同时会继续比较 Node，因此需要唯一计数器。`},{id:146,title:`LRU 缓存`,category:`链表`,difficulty:`中等`,question:`设计 get/put 均为 O(1) 的最近最少使用缓存。`,idea:`哈希表提供 O(1) 定位，双向链表维护最近使用顺序；头部最近、尾部最久。使用两个哨兵节点统一插入删除，访问后把节点移到头部。`,code:`class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None


class LRUCache:
    def __init__(self, capacity):
        self.cap, self.cache = capacity, {}
        self.head, self.tail = Node(), Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key):
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self._remove(node)
        self._add(node)
        return node.val

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self.cache[key] = node
        self._add(node)
        if len(self.cache) > self.cap:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]`,complexity:`get/put 均摊 O(1)，空间 O(capacity)。`,pitfall:`更新已有 key 时先移除旧节点；淘汰时字典和链表都要删除。`},{id:94,title:`二叉树的中序遍历`,category:`二叉树`,difficulty:`简单`,question:`返回二叉树节点值的中序遍历序列。`,idea:`迭代写法使用栈：一路压入左链；到空后弹栈访问节点，再转向右子树。它直接对应递归的调用栈。`,code:`class Solution:
    def inorderTraversal(self, root):
        ans, stack, cur = [], [], root
        while cur or stack:
            while cur:
                stack.append(cur)
                cur = cur.left
            cur = stack.pop()
            ans.append(cur.val)
            cur = cur.right
        return ans`,complexity:`时间 O(n)，空间 O(h)。`,pitfall:`外层条件是 cur or stack；访问节点发生在左链走到底之后。`},{id:104,title:`二叉树的最大深度`,category:`二叉树`,difficulty:`简单`,question:`返回二叉树的最大深度。`,idea:`递归定义最清晰：空树深度为 0，非空树深度等于左右子树最大深度加 1。`,code:`class Solution:
    def maxDepth(self, root):
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))`,complexity:`时间 O(n)，递归栈 O(h)。`,pitfall:`深度按节点数计算，因此叶子节点深度为 1。`},{id:226,title:`翻转二叉树`,category:`二叉树`,difficulty:`简单`,question:`翻转一棵二叉树的左右子树。`,idea:`对每个节点交换左右孩子，再递归处理两棵子树。前序或后序都可以，关键是每个节点只交换一次。`,code:`class Solution:
    def invertTree(self, root):
        if not root:
            return None
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root`,complexity:`时间 O(n)，递归栈 O(h)。`,pitfall:`右侧表达式先求值，Python 多重赋值可安全同时交换。`},{id:101,title:`对称二叉树`,category:`二叉树`,difficulty:`简单`,question:`判断二叉树是否关于中心轴镜像对称。`,idea:`定义 mirror(a,b)：两节点值相同，且 a.left 对应 b.right、a.right 对应 b.left。空节点必须成对出现。`,code:`class Solution:
    def isSymmetric(self, root):
        def mirror(a, b):
            if not a or not b:
                return a is b
            return (
                a.val == b.val and mirror(a.left, b.right) and mirror(a.right, b.left)
            )

        return mirror(root.left, root.right) if root else True`,complexity:`时间 O(n)，递归栈 O(h)。`,pitfall:`比较的是交叉子树，而不是同方向子树。`},{id:543,title:`二叉树的直径`,category:`二叉树`,difficulty:`简单`,question:`返回二叉树中任意两节点之间最长路径的边数。`,idea:`后序遍历计算每个节点向下的最大深度。经过该节点的最长路径是左深度+右深度，用全局变量更新直径。`,code:`class Solution:
    def diameterOfBinaryTree(self, root):
        self.best = 0

        def depth(node):
            if not node:
                return 0
            left, right = depth(node.left), depth(node.right)
            self.best = max(self.best, left + right)
            return 1 + max(left, right)

        depth(root)
        return self.best`,complexity:`时间 O(n)，递归栈 O(h)。`,pitfall:`depth 按节点数，left+right 恰好是边数，无需再减 1。`},{id:102,title:`二叉树的层序遍历`,category:`二叉树`,difficulty:`中等`,question:`按层返回二叉树节点值。`,idea:`使用队列做 BFS。每轮先记录当前队列长度，它就是本层节点数；只处理这批节点并把孩子加入队尾。`,code:`from collections import deque


class Solution:
    def levelOrder(self, root):
        if not root:
            return []
        q, ans = deque([root]), []
        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            ans.append(level)
        return ans`,complexity:`时间 O(n)，空间 O(w)，w 为最大层宽。`,pitfall:`进入 for 前固定 len(q)，否则会把下一层也处理进当前层。`},{id:108,title:`将有序数组转换为二叉搜索树`,category:`二叉树`,difficulty:`简单`,question:`把升序数组转换为高度平衡的二叉搜索树。`,idea:`每次选择区间中点作为根，左半区递归建左子树，右半区递归建右子树。中点划分保证高度差至多 1。`,code:`class Solution:
    def sortedArrayToBST(self, nums):
        def build(left, right):
            if left > right:
                return None
            mid = (left + right) // 2
            root = TreeNode(nums[mid])
            root.left = build(left, mid - 1)
            root.right = build(mid + 1, right)
            return root

        return build(0, len(nums) - 1)`,complexity:`时间 O(n)，递归栈 O(log n)。`,pitfall:`递归区间定义要统一；这里使用左右闭区间。`},{id:98,title:`验证二叉搜索树`,category:`二叉树`,difficulty:`中等`,question:`判断一棵二叉树是否为合法二叉搜索树。`,idea:`递归为每个节点传递合法开区间 (low,high)。当前值必须严格位于区间内，左子树收紧上界，右子树抬高下界。`,code:`class Solution:
    def isValidBST(self, root):
        def valid(node, low, high):
            if not node:
                return True
            if not low < node.val < high:
                return False
            return valid(node.left, low, node.val) and valid(node.right, node.val, high)

        return valid(root, float("-inf"), float("inf"))`,complexity:`时间 O(n)，递归栈 O(h)。`,pitfall:`BST 是严格不等；只比较父子节点不够，必须传递祖先边界。`},{id:230,title:`二叉搜索树中第 K 小的元素`,category:`二叉树`,difficulty:`中等`,question:`返回 BST 中第 k 小的节点值。`,idea:`BST 的中序遍历是升序序列。迭代中序每弹出一个节点就把 k 减 1，减到 0 时立即返回。`,code:`class Solution:
    def kthSmallest(self, root, k):
        stack, cur = [], root
        while True:
            while cur:
                stack.append(cur)
                cur = cur.left
            cur = stack.pop()
            k -= 1
            if k == 0:
                return cur.val
            cur = cur.right`,complexity:`时间 O(h+k)，空间 O(h)。`,pitfall:`计数发生在弹栈访问节点时，不是在压栈时。`},{id:199,title:`二叉树的右视图`,category:`二叉树`,difficulty:`中等`,question:`返回从右侧能看到的每一层节点值。`,idea:`优先 DFS 右子树，再 DFS 左子树。首次到达某个深度时看到的就是这一层最右节点，因此 depth 等于答案长度时记录。`,code:`class Solution:
    def rightSideView(self, root):
        ans = []

        def dfs(node, depth):
            if not node:
                return
            if depth == len(ans):
                ans.append(node.val)
            dfs(node.right, depth + 1)
            dfs(node.left, depth + 1)

        dfs(root, 0)
        return ans`,complexity:`时间 O(n)，递归栈 O(h)。`,pitfall:`必须先访问右子树；每层只在首次到达时记录。`},{id:114,title:`二叉树展开为链表`,category:`二叉树`,difficulty:`中等`,question:`原地把二叉树按前序遍历顺序展开成只含 right 指针的链表。`,idea:`倒序前序遍历（右→左→根），维护 prev。处理当前节点时令 right=prev、left=None，再更新 prev，天然得到前序链表。`,code:`class Solution:
    def flatten(self, root):
        prev = None

        def dfs(node):
            nonlocal prev
            if not node:
                return
            dfs(node.right)
            dfs(node.left)
            node.right = prev
            node.left = None
            prev = node

        dfs(root)`,complexity:`时间 O(n)，递归栈 O(h)。`,pitfall:`必须先处理右再处理左；若先改 right 会丢失原子树。`},{id:105,title:`从前序与中序遍历序列构造二叉树`,category:`二叉树`,difficulty:`中等`,question:`根据无重复值的前序和中序遍历构造二叉树。`,idea:`前序首元素是根，在中序中的位置把区间分成左右子树。用哈希表 O(1) 查中序下标，并用前序游标按根→左→右消费节点。`,code:`class Solution:
    def buildTree(self, preorder, inorder):
        pos = {x: i for i, x in enumerate(inorder)}
        pre = 0

        def build(left, right):
            nonlocal pre
            if left > right:
                return None
            value = preorder[pre]
            pre += 1
            root = TreeNode(value)
            mid = pos[value]
            root.left = build(left, mid - 1)
            root.right = build(mid + 1, right)
            return root

        return build(0, len(inorder) - 1)`,complexity:`时间 O(n)，空间 O(n)。`,pitfall:`必须先递归左子树再递归右子树，才能匹配前序游标顺序。`},{id:437,title:`路径总和 III`,category:`二叉树`,difficulty:`中等`,question:`统计二叉树中向下路径和等于 targetSum 的路径数量，路径可从任意节点开始。`,idea:`DFS 维护从根到当前节点的前缀和。当前前缀为 s 时，之前出现的 s-target 都能形成一条合法路径；回溯离开节点时减去当前前缀计数。`,code:`from collections import defaultdict


class Solution:
    def pathSum(self, root, targetSum):
        count = defaultdict(int)
        count[0] = 1

        def dfs(node, prefix):
            if not node:
                return 0
            prefix += node.val
            ans = count[prefix - targetSum]
            count[prefix] += 1
            ans += dfs(node.left, prefix) + dfs(node.right, prefix)
            count[prefix] -= 1
            return ans

        return dfs(root, 0)`,complexity:`时间 O(n)，空间 O(h)。`,pitfall:`离开节点必须回溯 count[prefix]，否则不同分支会相互污染。`},{id:236,title:`二叉树的最近公共祖先`,category:`二叉树`,difficulty:`中等`,question:`返回二叉树中两个指定节点的最近公共祖先。`,idea:`后序递归：遇到空、p 或 q 就向上返回。若左右子树都返回非空，当前节点就是最近公共祖先；否则把非空结果继续向上传递。`,code:`class Solution:
    def lowestCommonAncestor(self, root, p, q):
        if not root or root is p or root is q:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        if left and right:
            return root
        return left or right`,complexity:`时间 O(n)，递归栈 O(h)。`,pitfall:`返回的是节点对象；当前节点等于 p/q 时要直接返回。`},{id:124,title:`二叉树中的最大路径和`,category:`二叉树`,difficulty:`困难`,question:`求二叉树中任意非空路径的最大节点值之和，路径不能重复节点。`,idea:`后序遍历。每个节点向父节点只能贡献一条单边路径，因此返回 val+max(left,right,0)；但经过当前节点的完整路径可同时取左右两边，用它更新全局答案。`,code:`class Solution:
    def maxPathSum(self, root):
        self.best = float("-inf")

        def gain(node):
            if not node:
                return 0
            left = max(gain(node.left), 0)
            right = max(gain(node.right), 0)
            self.best = max(self.best, node.val + left + right)
            return node.val + max(left, right)

        gain(root)
        return self.best`,complexity:`时间 O(n)，递归栈 O(h)。`,pitfall:`全局答案初值必须是负无穷以处理全负树；向上只能选一侧。`},{id:200,title:`岛屿数量`,category:`图论`,difficulty:`中等`,question:`统计由 1 组成且四方向连通的岛屿数量。`,idea:`扫描网格，每发现一个未访问陆地就把答案加 1，并用 DFS/BFS 把整座岛标记为水。原地标记可省 visited 集合。`,code:`class Solution:
    def numIslands(self, grid):
        m, n = len(grid), len(grid[0])

        def dfs(i, j):
            if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] != "1":
                return
            grid[i][j] = "0"
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)

        ans = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == "1":
                    ans += 1
                    dfs(i, j)
        return ans`,complexity:`时间 O(mn)，最坏递归栈 O(mn)。`,pitfall:`输入元素通常是字符串 "1"/"0"；发现陆地后立即标记，避免重复访问。`},{id:994,title:`腐烂的橘子`,category:`图论`,difficulty:`中等`,question:`每分钟腐烂橘子感染相邻新鲜橘子，求全部腐烂的最少分钟数。`,idea:`这是多源 BFS：把所有初始腐烂橘子同时入队，统计新鲜数。逐层扩散，每处理一层代表一分钟；最终若仍有新鲜橘子则返回 -1。`,code:`from collections import deque


class Solution:
    def orangesRotting(self, grid):
        m, n = len(grid), len(grid[0])
        q = deque()
        fresh = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    q.append((i, j))
                elif grid[i][j] == 1:
                    fresh += 1
        minutes = 0
        while q and fresh:
            for _ in range(len(q)):
                i, j = q.popleft()
                for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    x, y = i + di, j + dj
                    if 0 <= x < m and 0 <= y < n and grid[x][y] == 1:
                        grid[x][y] = 2
                        fresh -= 1
                        q.append((x, y))
            minutes += 1
        return minutes if fresh == 0 else -1`,complexity:`时间 O(mn)，空间 O(mn)。`,pitfall:`没有新鲜橘子时答案为 0；用 while q and fresh 避免多算一分钟。`},{id:207,title:`课程表`,category:`图论`,difficulty:`中等`,question:`判断是否能完成所有课程，即先修关系图是否有环。`,idea:`拓扑排序：统计每门课入度，把入度 0 的课程入队。每取出一门课就删除其出边；若最终处理数量等于课程总数，图无环。`,code:`from collections import deque


class Solution:
    def canFinish(self, numCourses, prerequisites):
        graph = [[] for _ in range(numCourses)]
        indegree = [0] * numCourses
        for course, pre in prerequisites:
            graph[pre].append(course)
            indegree[course] += 1
        q = deque(i for i, d in enumerate(indegree) if d == 0)
        taken = 0
        while q:
            pre = q.popleft()
            taken += 1
            for course in graph[pre]:
                indegree[course] -= 1
                if indegree[course] == 0:
                    q.append(course)
        return taken == numCourses`,complexity:`时间 O(V+E)，空间 O(V+E)。`,pitfall:`边方向是 pre→course；最后比较处理课程数而非队列是否为空。`},{id:208,title:`实现 Trie（前缀树）`,category:`图论`,difficulty:`中等`,question:`实现 Trie 的插入、完整单词搜索和前缀搜索。`,idea:`每个节点存 children 字典与 end 标记。三个操作共享“沿字符向下走”的逻辑；完整搜索额外要求终点 end=True。`,code:`class Trie:
    def __init__(self):
        self.children = {}
        self.end = False

    def insert(self, word):
        node = self
        for ch in word:
            node = node.children.setdefault(ch, Trie())
        node.end = True

    def _find(self, text):
        node = self
        for ch in text:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node

    def search(self, word):
        node = self._find(word)
        return bool(node and node.end)

    def startsWith(self, prefix):
        return self._find(prefix) is not None`,complexity:`每个操作时间 O(L)，插入总空间 O(字符总数)。`,pitfall:`search 必须检查 end；startsWith 只需路径存在。`},{id:46,title:`全排列`,category:`回溯`,difficulty:`中等`,question:`返回不含重复数字数组的所有排列。`,idea:`回溯维护当前 path 与 used。每层选择一个未使用元素，递归后撤销选择；path 长度达到 n 时复制加入答案。`,code:`class Solution:
    def permute(self, nums):
        ans = []
        used = [False] * len(nums)

        def backtrack(path):
            if len(path) == len(nums):
                ans.append(path[:])
                return
            for i, x in enumerate(nums):
                if used[i]:
                    continue
                used[i] = True
                path.append(x)
                backtrack(path)
                path.pop()
                used[i] = False

        backtrack([])
        return ans`,complexity:`时间 O(n·n!)，空间 O(n)（不含结果）。`,pitfall:`加入答案时要复制 path；递归回来必须同时撤销 path 和 used。`},{id:78,title:`子集`,category:`回溯`,difficulty:`中等`,question:`返回无重复元素数组的所有子集。`,idea:`每个递归节点本身就是一个合法子集，先加入答案，再从 start 之后依次选择下一个元素，避免产生不同顺序的重复集合。`,code:`class Solution:
    def subsets(self, nums):
        ans = []

        def backtrack(start, path):
            ans.append(path[:])
            for i in range(start, len(nums)):
                path.append(nums[i])
                backtrack(i + 1, path)
                path.pop()

        backtrack(0, [])
        return ans`,complexity:`时间 O(n·2ⁿ)，递归空间 O(n)。`,pitfall:`使用 start 而非 used；每个递归节点都要收集，不只叶子。`},{id:17,title:`电话号码的字母组合`,category:`回溯`,difficulty:`中等`,question:`给定数字字符串 2-9，返回其所有可能字母组合。`,idea:`每一层处理一个数字，枚举其映射字母并递归到下一位。到达 digits 末尾时收集当前字符串。`,code:`class Solution:
    def letterCombinations(self, digits):
        if not digits:
            return []
        mp = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
        }
        ans = []

        def dfs(i, path):
            if i == len(digits):
                ans.append("".join(path))
                return
            for ch in mp[digits[i]]:
                path.append(ch)
                dfs(i + 1, path)
                path.pop()

        dfs(0, [])
        return ans`,complexity:`最多 O(4ⁿ·n)，递归空间 O(n)。`,pitfall:`空输入返回空列表而不是包含空字符串的列表。`},{id:39,title:`组合总和`,category:`回溯`,difficulty:`中等`,question:`候选数字可重复选择，返回和为 target 的所有不同组合。`,idea:`排序后从 start 开始枚举，选中 candidates[i] 后仍从 i 递归，因此允许重复选；若当前数大于剩余值即可剪枝。`,code:`class Solution:
    def combinationSum(self, candidates, target):
        candidates.sort()
        ans = []

        def dfs(start, remain, path):
            if remain == 0:
                ans.append(path[:])
                return
            for i in range(start, len(candidates)):
                x = candidates[i]
                if x > remain:
                    break
                path.append(x)
                dfs(i, remain - x, path)
                path.pop()

        dfs(0, target, [])
        return ans`,complexity:`指数级，递归深度最多 target/min(candidates)。`,pitfall:`递归传 i 而不是 i+1 才允许重复选择；排序后才能 break 剪枝。`},{id:22,title:`括号生成`,category:`回溯`,difficulty:`中等`,question:`生成 n 对括号的所有合法组合。`,idea:`状态只需已用左括号数 open 与右括号数 close。open<n 时可放左括号；close<open 时才能放右括号，保证任意前缀合法。`,code:`class Solution:
    def generateParenthesis(self, n):
        ans = []

        def dfs(path, open_count, close_count):
            if len(path) == 2 * n:
                ans.append("".join(path))
                return
            if open_count < n:
                path.append("(")
                dfs(path, open_count + 1, close_count)
                path.pop()
            if close_count < open_count:
                path.append(")")
                dfs(path, open_count, close_count + 1)
                path.pop()

        dfs([], 0, 0)
        return ans`,complexity:`答案数量为第 n 个卡特兰数，空间 O(n)。`,pitfall:`右括号条件是 close<open；无需生成后再验证。`},{id:79,title:`单词搜索`,category:`回溯`,difficulty:`中等`,question:`判断字符网格中是否存在由相邻单元格组成的给定单词。`,idea:`从每个可能起点 DFS 匹配下一个字符。进入格子后临时标记为已访问，四向递归，返回前恢复；匹配完最后一个字符即成功。`,code:`class Solution:
    def exist(self, board, word):
        m, n = len(board), len(board[0])

        def dfs(i, j, k):
            if k == len(word):
                return True
            if i < 0 or i >= m or j < 0 or j >= n or board[i][j] != word[k]:
                return False
            ch = board[i][j]
            board[i][j] = "#"
            found = (
                dfs(i + 1, j, k + 1)
                or dfs(i - 1, j, k + 1)
                or dfs(i, j + 1, k + 1)
                or dfs(i, j - 1, k + 1)
            )
            board[i][j] = ch
            return found

        return any(dfs(i, j, 0) for i in range(m) for j in range(n))`,complexity:`最坏 O(mn·3ᴸ)，递归空间 O(L)。`,pitfall:`无论成功失败都应恢复格子；进入后下一步最多三个新方向。`},{id:131,title:`分割回文串`,category:`回溯`,difficulty:`中等`,question:`把字符串分割成若干回文子串，返回所有方案。`,idea:`从 start 枚举当前片段终点；片段是回文时加入 path 并递归处理剩余后缀。到字符串末尾收集方案。`,code:`class Solution:
    def partition(self, s):
        ans = []

        def dfs(start, path):
            if start == len(s):
                ans.append(path[:])
                return
            for end in range(start + 1, len(s) + 1):
                part = s[start:end]
                if part == part[::-1]:
                    path.append(part)
                    dfs(end, path)
                    path.pop()

        dfs(0, [])
        return ans`,complexity:`最坏 O(n·2ⁿ)，递归空间 O(n)。`,pitfall:`切片右端点是开区间；收集 path 时复制。`},{id:51,title:`N 皇后`,category:`回溯`,difficulty:`困难`,question:`返回 n 皇后问题的所有不同棋盘方案。`,idea:`逐行放置皇后，用三组集合记录已占列、主对角线 r-c、次对角线 r+c。合法则选择，递归下一行，再撤销。`,code:`class Solution:
    def solveNQueens(self, n):
        ans = []
        cols = set()
        diag1 = set()
        diag2 = set()
        board = [["."] * n for _ in range(n)]

        def dfs(r):
            if r == n:
                ans.append(["".join(row) for row in board])
                return
            for c in range(n):
                if c in cols or r - c in diag1 or r + c in diag2:
                    continue
                cols.add(c)
                diag1.add(r - c)
                diag2.add(r + c)
                board[r][c] = "Q"
                dfs(r + 1)
                board[r][c] = "."
                cols.remove(c)
                diag1.remove(r - c)
                diag2.remove(r + c)

        dfs(0)
        return ans`,complexity:`约 O(n!)，额外空间 O(n²) 棋盘与 O(n) 标记。`,pitfall:`两条对角线分别用 r-c 和 r+c 唯一标识；回溯要完整撤销。`},{id:35,title:`搜索插入位置`,category:`二分查找`,difficulty:`简单`,question:`在升序数组中返回目标下标；不存在则返回应插入位置。`,idea:`寻找第一个大于等于 target 的位置，也就是 lower_bound。使用左闭右开区间 [left,right)，循环结束时 left 即答案。`,code:`class Solution:
    def searchInsert(self, nums, target):
        left, right = 0, len(nums)
        while left < right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
        return left`,complexity:`时间 O(log n)，空间 O(1)。`,pitfall:`明确区间是左闭右开，right 初值为 len(nums)。`},{id:74,title:`搜索二维矩阵`,category:`二分查找`,difficulty:`中等`,question:`每行升序且下一行首元素大于上一行尾元素，判断 target 是否存在。`,idea:`把 m×n 矩阵视为长度 m·n 的一维升序数组，二分中用 divmod(mid,n) 映射回行列。`,code:`class Solution:
    def searchMatrix(self, matrix, target):
        m, n = len(matrix), len(matrix[0])
        left, right = 0, m * n - 1
        while left <= right:
            mid = (left + right) // 2
            i, j = divmod(mid, n)
            if matrix[i][j] == target:
                return True
            if matrix[i][j] < target:
                left = mid + 1
            else:
                right = mid - 1
        return False`,complexity:`时间 O(log(mn))，空间 O(1)。`,pitfall:`一维下标映射是 row=mid//n、col=mid%n。`},{id:34,title:`在排序数组中查找元素的第一个和最后一个位置`,category:`二分查找`,difficulty:`中等`,question:`返回 target 在有序数组中的起止下标，不存在则返回 [-1,-1]。`,idea:`写一个 lower_bound(x) 找第一个 >=x 的位置。左边界是 lower_bound(target)，右边界是 lower_bound(target+1)-1；最后验证左边界确实是 target。`,code:`class Solution:
    def searchRange(self, nums, target):
        def lower_bound(x):
            left, right = 0, len(nums)
            while left < right:
                mid = (left + right) // 2
                if nums[mid] < x:
                    left = mid + 1
                else:
                    right = mid
            return left

        left = lower_bound(target)
        if left == len(nums) or nums[left] != target:
            return [-1, -1]
        return [left, lower_bound(target + 1) - 1]`,complexity:`时间 O(log n)，空间 O(1)。`,pitfall:`先验证 left 未越界且命中 target；该 target+1 写法依赖整数输入。`},{id:33,title:`搜索旋转排序数组`,category:`二分查找`,difficulty:`中等`,question:`在无重复元素的旋转升序数组中查找 target 下标。`,idea:`每次二分至少有一半有序。先判断左半还是右半有序，再判断 target 是否落在该有序区间，决定保留哪一半。`,code:`class Solution:
    def search(self, nums, target):
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            if nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1
        return -1`,complexity:`时间 O(log n)，空间 O(1)。`,pitfall:`左侧有序判断用 <=；区间端点的一边包含等号、另一边不包含。`},{id:153,title:`寻找旋转排序数组中的最小值`,category:`二分查找`,difficulty:`中等`,question:`在无重复元素的旋转升序数组中找最小值。`,idea:`把 nums[mid] 与 nums[right] 比较。mid 更大说明最小值在右侧且不含 mid；否则最小值在左侧且可能就是 mid。`,code:`class Solution:
    def findMin(self, nums):
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid
        return nums[left]`,complexity:`时间 O(log n)，空间 O(1)。`,pitfall:`与 right 比较更容易判断；else 中 right=mid 不能减 1。`},{id:4,title:`寻找两个正序数组的中位数`,category:`二分查找`,difficulty:`困难`,question:`在 O(log(m+n)) 时间内求两个有序数组的中位数。`,idea:`在较短数组上二分切分位置 i，另一个数组切分 j 由总左半长度决定。找到 maxLeftA≤minRightB 且 maxLeftB≤minRightA 的合法切分，再由奇偶性计算中位数。`,code:`class Solution:
    def findMedianSortedArrays(self, a, b):
        if len(a) > len(b):
            return self.findMedianSortedArrays(b, a)
        m, n = len(a), len(b)
        half = (m + n + 1) // 2
        l, r = 0, m
        while l <= r:
            i = (l + r) // 2
            j = half - i
            al = a[i - 1] if i else float("-inf")
            ar = a[i] if i < m else float("inf")
            bl = b[j - 1] if j else float("-inf")
            br = b[j] if j < n else float("inf")
            if al > br:
                r = i - 1
            elif bl > ar:
                l = i + 1
            else:
                if (m + n) % 2:
                    return max(al, bl)
                return (max(al, bl) + min(ar, br)) / 2`,complexity:`时间 O(log min(m,n))，空间 O(1)。`,pitfall:`必须在短数组上二分；边界用 ±inf 统一处理空半区。`},{id:20,title:`有效的括号`,category:`栈`,difficulty:`简单`,question:`判断只含括号的字符串是否有效配对。`,idea:`遇到右括号时，它必须与栈顶左括号匹配。可以把“期望的右括号”压栈，遇到右括号直接与栈顶比较，最后栈必须为空。`,code:`class Solution:
    def isValid(self, s):
        pairs = {"(": ")", "[": "]", "{": "}"}
        stack = []
        for ch in s:
            if ch in pairs:
                stack.append(pairs[ch])
            elif not stack or stack.pop() != ch:
                return False
        return not stack`,complexity:`时间 O(n)，空间 O(n)。`,pitfall:`右括号到来时先检查栈非空；遍历结束还要确认栈为空。`},{id:155,title:`最小栈`,category:`栈`,difficulty:`中等`,question:`设计支持 push、pop、top 和常数时间 getMin 的栈。`,idea:`每次入栈同时保存“当前值、入栈后的最小值”。这样弹栈时历史最小值会自动恢复，无需额外扫描。`,code:`class MinStack:
    def __init__(self):
        self.stack = []

    def push(self, val):
        current_min = val if not self.stack else min(val, self.stack[-1][1])
        self.stack.append((val, current_min))

    def pop(self):
        self.stack.pop()

    def top(self):
        return self.stack[-1][0]

    def getMin(self):
        return self.stack[-1][1]`,complexity:`所有操作 O(1)，空间 O(n)。`,pitfall:`相等的最小值也要随每个元素保存，避免弹出一个后丢失最小值。`},{id:394,title:`字符串解码`,category:`栈`,difficulty:`中等`,question:`解码形如 k[encoded_string] 的嵌套字符串。`,idea:`扫描字符，数字累积倍数；遇到 [ 时把外层字符串和倍数压栈并重置；遇到 ] 时弹栈，把当前段重复后拼回外层。`,code:`class Solution:
    def decodeString(self, s):
        stack = []
        current = ""
        number = 0
        for ch in s:
            if ch.isdigit():
                number = number * 10 + int(ch)
            elif ch == "[":
                stack.append((current, number))
                current = ""
                number = 0
            elif ch == "]":
                previous, times = stack.pop()
                current = previous + current * times
            else:
                current += ch
        return current`,complexity:`时间与输出长度成正比，栈空间 O(嵌套深度)。`,pitfall:`倍数可能是多位数，必须 number=number*10+digit。`},{id:739,title:`每日温度`,category:`栈`,difficulty:`中等`,question:`返回每一天要等几天才会出现更高温度。`,idea:`维护温度单调不增的下标栈。当前温度更高时，不断弹出更低温度下标，并用当前下标差填写答案。`,code:`class Solution:
    def dailyTemperatures(self, temperatures):
        ans = [0] * len(temperatures)
        stack = []
        for i, t in enumerate(temperatures):
            while stack and temperatures[stack[-1]] < t:
                j = stack.pop()
                ans[j] = i - j
            stack.append(i)
        return ans`,complexity:`时间 O(n)，空间 O(n)。`,pitfall:`栈里存下标而不是温度；相等温度不能弹出。`},{id:84,title:`柱状图中最大的矩形`,category:`栈`,difficulty:`困难`,question:`求柱状图中可勾勒出的最大矩形面积。`,idea:`维护高度单调递增的下标栈。遇到更低柱时，弹出的柱高确定，右边界是当前下标，左边界是新栈顶；末尾加高度 0 的哨兵完成清算。`,code:`class Solution:
    def largestRectangleArea(self, heights):
        stack = []
        best = 0
        for i, h in enumerate(heights + [0]):
            while stack and heights[stack[-1]] > h:
                height = heights[stack.pop()]
                left = stack[-1] if stack else -1
                best = max(best, height * (i - left - 1))
            stack.append(i)
        return best`,complexity:`时间 O(n)，空间 O(n)。`,pitfall:`宽度是 i-left-1；遍历 heights+[0] 时不会访问哨兵下标的高度。`},{id:215,title:`数组中的第 K 个最大元素`,category:`堆`,difficulty:`中等`,question:`不完整排序，返回数组中第 k 大元素。`,idea:`面试优先写 Quickselect：目标下标是 n-k。每次原地分区，把枢轴放到最终位置，再只进入包含目标的一侧。`,code:`class Solution:
    def findKthLargest(self, nums, k):
        target = len(nums) - k
        left, right = 0, len(nums) - 1
        while True:
            pivot = nums[right]
            store = left
            for i in range(left, right):
                if nums[i] <= pivot:
                    nums[store], nums[i] = nums[i], nums[store]
                    store += 1
            nums[store], nums[right] = nums[right], nums[store]
            if store == target:
                return nums[store]
            if store < target:
                left = store + 1
            else:
                right = store - 1`,complexity:`平均时间 O(n)，最坏 O(n²)，空间 O(1)。`,pitfall:`第 k 大对应升序下标 n-k；随机枢轴可降低最坏情况概率。`},{id:347,title:`前 K 个高频元素`,category:`堆`,difficulty:`中等`,question:`返回数组中出现频率最高的 k 个元素。`,idea:`频率最多为 n，可用桶排序：先计数，再把数字放入“频率→数字列表”的桶，从高频向低频收集到 k 个。`,code:`from collections import Counter


class Solution:
    def topKFrequent(self, nums, k):
        count = Counter(nums)
        buckets = [[] for _ in range(len(nums) + 1)]
        for x, freq in count.items():
            buckets[freq].append(x)
        ans = []
        for freq in range(len(buckets) - 1, 0, -1):
            for x in buckets[freq]:
                ans.append(x)
                if len(ans) == k:
                    return ans`,complexity:`时间 O(n)，空间 O(n)。`,pitfall:`桶下标是频率，范围到 n；达到 k 后立即返回。`},{id:295,title:`数据流的中位数`,category:`堆`,difficulty:`困难`,question:`设计结构支持不断添加数字并返回当前中位数。`,idea:`用两个堆维护两半数据：small 是负数实现的大顶堆，large 是小顶堆。保证 small 长度等于 large 或多 1，且 small 的最大值不大于 large 的最小值。`,code:`import heapq


class MedianFinder:
    def __init__(self):
        self.small = []
        self.large = []

    def addNum(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2`,complexity:`add O(log n)，findMedian O(1)，空间 O(n)。`,pitfall:`Python 只有小顶堆，small 存负数；每次插入后恢复大小平衡。`},{id:121,title:`买卖股票的最佳时机`,category:`贪心`,difficulty:`简单`,question:`只允许买卖一次，求最大利润。`,idea:`从左到右维护见过的最低价格。当天卖出的最好利润是 price-min_price，用它更新全局答案。`,code:`class Solution:
    def maxProfit(self, prices):
        min_price = float("inf")
        best = 0
        for price in prices:
            min_price = min(min_price, price)
            best = max(best, price - min_price)
        return best`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`必须先买后卖，所以最低价只来自当前天及之前。`},{id:55,title:`跳跃游戏`,category:`贪心`,difficulty:`中等`,question:`判断能否从数组首位跳到最后一个下标。`,idea:`维护当前能到达的最远下标 farthest。遍历到 i 时若 i 已超过 farthest，说明断档；否则用 i+nums[i] 扩展最远范围。`,code:`class Solution:
    def canJump(self, nums):
        farthest = 0
        for i, jump in enumerate(nums):
            if i > farthest:
                return False
            farthest = max(farthest, i + jump)
            if farthest >= len(nums) - 1:
                return True
        return True`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`先判断当前位置是否可达，再用它更新最远位置。`},{id:45,title:`跳跃游戏 II`,category:`贪心`,difficulty:`中等`,question:`保证可达，求到最后一个下标的最少跳跃次数。`,idea:`把每次跳跃看作 BFS 一层。扫描当前层范围，维护下一层最远位置；到达当前层边界时跳数加一，并把边界更新为 farthest。`,code:`class Solution:
    def jump(self, nums):
        jumps = end = farthest = 0
        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i])
            if i == end:
                jumps += 1
                end = farthest
        return jumps`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`只遍历到 n-2，避免到终点后多算一次跳跃。`},{id:763,title:`划分字母区间`,category:`贪心`,difficulty:`中等`,question:`把字符串划分为尽可能多的片段，使每个字母最多出现在一个片段。`,idea:`先记录每个字符最后出现位置。扫描时维护当前片段必须覆盖的最远位置 end；当 i==end，当前片段已包含其中所有字符的最后一次出现，可以切分。`,code:`class Solution:
    def partitionLabels(self, s):
        last = {ch: i for i, ch in enumerate(s)}
        ans = []
        start = end = 0
        for i, ch in enumerate(s):
            end = max(end, last[ch])
            if i == end:
                ans.append(end - start + 1)
                start = i + 1
        return ans`,complexity:`时间 O(n)，空间 O(字符集)。`,pitfall:`end 是片段内所有字符最后位置的最大值，不只是当前字符的位置。`},{id:70,title:`爬楼梯`,category:`动态规划`,difficulty:`简单`,question:`每次爬 1 或 2 阶，求到第 n 阶的不同方法数。`,idea:`最后一步来自 n-1 或 n-2，因此 f(n)=f(n-1)+f(n-2)。只需两个变量滚动保存前两项。`,code:`class Solution:
    def climbStairs(self, n):
        prev2, prev1 = 1, 1
        for _ in range(2, n + 1):
            prev2, prev1 = prev1, prev1 + prev2
        return prev1`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`把 f(0)=1、f(1)=1 作为统一初值。`},{id:118,title:`杨辉三角`,category:`动态规划`,difficulty:`简单`,question:`返回杨辉三角的前 numRows 行。`,idea:`每行首尾为 1，中间元素等于上一行相邻两项之和。按行构造即可。`,code:`class Solution:
    def generate(self, numRows):
        triangle = []
        for i in range(numRows):
            row = [1] * (i + 1)
            for j in range(1, i):
                row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]
            triangle.append(row)
        return triangle`,complexity:`时间 O(n²)，结果空间 O(n²)。`,pitfall:`中间位置范围是 1 到 i-1；首尾保持 1。`},{id:198,title:`打家劫舍`,category:`动态规划`,difficulty:`中等`,question:`不能偷相邻房屋，求可偷到的最大金额。`,idea:`遍历每间房，状态只有偷当前（前前状态+x）或不偷当前（前一状态）。用两个变量滚动更新。`,code:`class Solution:
    def rob(self, nums):
        prev2 = prev1 = 0
        for x in nums:
            prev2, prev1 = prev1, max(prev1, prev2 + x)
        return prev1`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`多重赋值右侧用的是更新前的两个状态。`},{id:279,title:`完全平方数`,category:`动态规划`,difficulty:`中等`,question:`求和为 n 的完全平方数的最少数量。`,idea:`完全背包：dp[x] 表示组成 x 的最少个数。对每个 x 枚举不超过它的平方数 square，转移 dp[x]=min(dp[x],dp[x-square]+1)。`,code:`class Solution:
    def numSquares(self, n):
        dp = [0] + [float("inf")] * n
        for x in range(1, n + 1):
            j = 1
            while j * j <= x:
                dp[x] = min(dp[x], dp[x - j * j] + 1)
                j += 1
        return dp[n]`,complexity:`时间 O(n√n)，空间 O(n)。`,pitfall:`dp[0]=0 是所有转移的起点。`},{id:322,title:`零钱兑换`,category:`动态规划`,difficulty:`中等`,question:`给定硬币面额和金额，求凑成金额所需的最少硬币数。`,idea:`dp[x] 表示金额 x 的最少硬币数。对每个金额枚举硬币，从已求出的 dp[x-coin] 转移；不可达状态保持无穷。`,code:`class Solution:
    def coinChange(self, coins, amount):
        dp = [0] + [float("inf")] * amount
        for x in range(1, amount + 1):
            for coin in coins:
                if coin <= x:
                    dp[x] = min(dp[x], dp[x - coin] + 1)
        return -1 if dp[amount] == float("inf") else dp[amount]`,complexity:`时间 O(amount·len(coins))，空间 O(amount)。`,pitfall:`这是求最少数量而非组合数；不可达时返回 -1。`},{id:139,title:`单词拆分`,category:`动态规划`,difficulty:`中等`,question:`判断字符串能否由字典中的一个或多个单词拼接而成。`,idea:`dp[i] 表示前 i 个字符能否拆分。若存在 j<i，使 dp[j] 为真且 s[j:i] 在字典中，则 dp[i] 为真。`,code:`class Solution:
    def wordBreak(self, s, wordDict):
        words = set(wordDict)
        dp = [False] * (len(s) + 1)
        dp[0] = True
        max_len = max(map(len, words), default=0)
        for i in range(1, len(s) + 1):
            for j in range(max(0, i - max_len), i):
                if dp[j] and s[j:i] in words:
                    dp[i] = True
                    break
        return dp[-1]`,complexity:`最坏时间 O(n²)，空间 O(n+字典)。`,pitfall:`dp 长度为 n+1 且 dp[0]=True；使用集合加速查询。`},{id:300,title:`最长递增子序列`,category:`动态规划`,difficulty:`中等`,question:`求严格递增子序列的最长长度。`,idea:`维护 tails：tails[i] 是长度 i+1 的递增子序列能取得的最小结尾。对每个数用 bisect_left 替换第一个 ≥x 的结尾，或追加。`,code:`from bisect import bisect_left


class Solution:
    def lengthOfLIS(self, nums):
        tails = []
        for x in nums:
            i = bisect_left(tails, x)
            if i == len(tails):
                tails.append(x)
            else:
                tails[i] = x
        return len(tails)`,complexity:`时间 O(n log n)，空间 O(n)。`,pitfall:`严格递增用 bisect_left；tails 不是实际 LIS，但长度正确。`},{id:152,title:`乘积最大子数组`,category:`动态规划`,difficulty:`中等`,question:`返回连续子数组的最大乘积。`,idea:`负数会交换最大和最小的角色，所以同时维护以当前位置结尾的最大乘积和最小乘积。当前值、前最大×当前、前最小×当前三者取极值。`,code:`class Solution:
    def maxProduct(self, nums):
        current_max = current_min = best = nums[0]
        for x in nums[1:]:
            a = current_max * x
            b = current_min * x
            current_max = max(x, a, b)
            current_min = min(x, a, b)
            best = max(best, current_max)
        return best`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`a、b 必须用更新前的两个状态计算；0 会自然让状态重新开始。`},{id:416,title:`分割等和子集`,category:`动态规划`,difficulty:`中等`,question:`判断数组能否分成元素和相等的两个子集。`,idea:`总和为奇数直接失败；目标为 total/2，问题转为 0/1 背包可达性。用一维 dp 并对容量从大到小更新，保证每个数只用一次。`,code:`class Solution:
    def canPartition(self, nums):
        total = sum(nums)
        if total % 2:
            return False
        target = total // 2
        dp = [False] * (target + 1)
        dp[0] = True
        for x in nums:
            for s in range(target, x - 1, -1):
                dp[s] = dp[s] or dp[s - x]
        return dp[target]`,complexity:`时间 O(n·target)，空间 O(target)。`,pitfall:`0/1 背包容量必须倒序；正序会把同一元素重复使用。`},{id:32,title:`最长有效括号`,category:`动态规划`,difficulty:`困难`,question:`求最长格式正确的连续括号子串长度。`,idea:`栈里保存尚未匹配的左括号下标，初始放 -1 作为有效段左边界。遇到右括号弹栈；栈空就把当前下标作为新边界，否则用 i-stack[-1] 更新答案。`,code:`class Solution:
    def longestValidParentheses(self, s):
        stack = [-1]
        best = 0
        for i, ch in enumerate(s):
            if ch == "(":
                stack.append(i)
            else:
                stack.pop()
                if not stack:
                    stack.append(i)
                else:
                    best = max(best, i - stack[-1])
        return best`,complexity:`时间 O(n)，空间 O(n)。`,pitfall:`哨兵 -1 同时处理从 0 开始的有效段；栈空时要压入当前右括号下标。`},{id:62,title:`不同路径`,category:`多维动态规划`,difficulty:`中等`,question:`机器人只能向右或向下，求从左上到右下的路径数。`,idea:`dp[j] 表示当前行到达第 j 列的路径数。它等于上方旧 dp[j] 加左侧新 dp[j-1]，一维滚动即可。`,code:`class Solution:
    def uniquePaths(self, m, n):
        dp = [1] * n
        for _ in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]
        return dp[-1]`,complexity:`时间 O(mn)，空间 O(n)。`,pitfall:`第一行和第一列都只有一种走法，因此初值全为 1。`},{id:64,title:`最小路径和`,category:`多维动态规划`,difficulty:`中等`,question:`在非负矩阵中只能向右或向下，求左上到右下的最小路径和。`,idea:`一维 dp 记录当前行各列最小路径和。首格、首行、首列单独处理，其他位置取上方和左方较小值再加当前格。`,code:`class Solution:
    def minPathSum(self, grid):
        m, n = len(grid), len(grid[0])
        dp = [float("inf")] * n
        dp[0] = 0
        for i in range(m):
            for j in range(n):
                if j == 0:
                    dp[j] = dp[j] + grid[i][j]
                else:
                    dp[j] = min(dp[j], dp[j - 1]) + grid[i][j]
        return dp[-1]`,complexity:`时间 O(mn)，空间 O(n)。`,pitfall:`dp[0]=0 配合其余无穷可统一首行，但首列只能来自上方。`},{id:5,title:`最长回文子串`,category:`多维动态规划`,difficulty:`中等`,question:`返回字符串中最长的回文连续子串。`,idea:`中心扩展最适合面试手写：每个位置分别作为奇数中心和偶数中心向两边扩展，记录最长合法区间。`,code:`class Solution:
    def longestPalindrome(self, s):
        start = end = 0

        def expand(l, r):
            while l >= 0 and r < len(s) and s[l] == s[r]:
                l -= 1
                r += 1
            return l + 1, r - 1

        for i in range(len(s)):
            for l, r in (expand(i, i), expand(i, i + 1)):
                if r - l > end - start:
                    start, end = l, r
        return s[start : end + 1]`,complexity:`时间 O(n²)，空间 O(1)。`,pitfall:`偶数回文中心是 (i,i+1)；expand 返回越界后的内侧区间。`},{id:1143,title:`最长公共子序列`,category:`多维动态规划`,difficulty:`中等`,question:`求两个字符串的最长公共子序列长度。`,idea:`dp[i][j] 表示两前缀的 LCS。字符相同取左上+1，否则取上方与左方最大值；用两行滚动降低空间。`,code:`class Solution:
    def longestCommonSubsequence(self, text1, text2):
        prev = [0] * (len(text2) + 1)
        for a in text1:
            cur = [0]
            for j, b in enumerate(text2, 1):
                cur.append(prev[j - 1] + 1 if a == b else max(prev[j], cur[j - 1]))
            prev = cur
        return prev[-1]`,complexity:`时间 O(mn)，空间 O(n)。`,pitfall:`子序列不要求连续；字符不同取 max 而不是加一。`},{id:72,title:`编辑距离`,category:`多维动态规划`,difficulty:`中等`,question:`求把 word1 转为 word2 的最少插入、删除、替换次数。`,idea:`dp[i][j] 表示两前缀编辑距离。字符相同继承左上；不同则在删除（上）、插入（左）、替换（左上）中取最小再加一。`,code:`class Solution:
    def minDistance(self, word1, word2):
        prev = list(range(len(word2) + 1))
        for i, a in enumerate(word1, 1):
            cur = [i]
            for j, b in enumerate(word2, 1):
                if a == b:
                    cur.append(prev[j - 1])
                else:
                    cur.append(1 + min(prev[j], cur[j - 1], prev[j - 1]))
            prev = cur
        return prev[-1]`,complexity:`时间 O(mn)，空间 O(n)。`,pitfall:`当前行首值为 i；三个方向分别对应删除、插入、替换。`},{id:136,title:`只出现一次的数字`,category:`技巧`,difficulty:`简单`,question:`除一个元素只出现一次外，其余元素均出现两次，找出单独元素。`,idea:`异或满足 x^x=0、x^0=x 且交换结合，所以把所有数异或后，成对元素抵消，剩下唯一元素。`,code:`class Solution:
    def singleNumber(self, nums):
        ans = 0
        for x in nums:
            ans ^= x
        return ans`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`这里利用的是恰好出现两次的约束；不要用额外集合。`},{id:169,title:`多数元素`,category:`技巧`,difficulty:`简单`,question:`找出数组中出现次数超过一半的元素。`,idea:`Boyer-Moore 投票：相同候选票数加一，不同减一；票数归零时更换候选。超过一半的元素最终一定留下。`,code:`class Solution:
    def majorityElement(self, nums):
        candidate = None
        count = 0
        for x in nums:
            if count == 0:
                candidate = x
            count += 1 if x == candidate else -1
        return candidate`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`算法依赖题目保证多数元素存在；若不保证需再遍历验证。`},{id:75,title:`颜色分类`,category:`技巧`,difficulty:`中等`,question:`原地把只含 0、1、2 的数组按颜色排序。`,idea:`荷兰国旗三指针：left 左侧全是 0，right 右侧全是 2，i 扫描未知区。遇 0 与 left 换并前进，遇 2 与 right 换但 i 不动，遇 1 直接前进。`,code:`class Solution:
    def sortColors(self, nums):
        left = i = 0
        right = len(nums) - 1
        while i <= right:
            if nums[i] == 0:
                nums[left], nums[i] = nums[i], nums[left]
                left += 1
                i += 1
            elif nums[i] == 2:
                nums[i], nums[right] = nums[right], nums[i]
                right -= 1
            else:
                i += 1`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`交换进来的右侧元素还未检查，所以遇到 2 时 i 不能前进。`},{id:31,title:`下一个排列`,category:`技巧`,difficulty:`中等`,question:`原地把整数数组变成字典序下一个更大排列；不存在则变最小排列。`,idea:`从右找第一个上升拐点 i；再从右找第一个大于 nums[i] 的数交换。此时后缀原本降序，把它反转成升序即可得到最小增量。`,code:`class Solution:
    def nextPermutation(self, nums):
        i = len(nums) - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        if i >= 0:
            j = len(nums) - 1
            while nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        left, right = i + 1, len(nums) - 1
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`拐点条件是 nums[i]<nums[i+1]；交换后整个后缀反转。`},{id:287,title:`寻找重复数`,category:`技巧`,difficulty:`中等`,question:`数组含 n+1 个 [1,n] 整数，仅一个数重复；不能修改数组且只用常数空间。`,idea:`把下标看作节点、nums[i] 看作 next，重复值让图形成环。用 Floyd 快慢指针先在环内相遇，再从 0 与相遇点同步走，入口就是重复数。`,code:`class Solution:
    def findDuplicate(self, nums):
        slow = fast = 0
        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        finder = 0
        while finder != slow:
            finder = nums[finder]
            slow = nums[slow]
        return finder`,complexity:`时间 O(n)，空间 O(1)。`,pitfall:`起点用下标 0；第二阶段两个指针都走一步。`},{id:239,title:`滑动窗口最大值`,category:`子串`,difficulty:`困难`,question:`返回大小为 k 的每个滑动窗口中的最大值。`,idea:`维护下标单调递减队列。新元素入队前弹出所有不大于它的尾部元素；队首若离开窗口则弹出。窗口形成后队首就是最大值。`,code:`from collections import deque


class Solution:
    def maxSlidingWindow(self, nums, k):
        q = deque()
        ans = []
        for i, x in enumerate(nums):
            while q and nums[q[-1]] <= x:
                q.pop()
            q.append(i)
            if q[0] <= i - k:
                q.popleft()
            if i >= k - 1:
                ans.append(nums[q[0]])
        return ans`,complexity:`时间 O(n)，空间 O(k)。`,pitfall:`队列存下标才能判断过期；先维护单调性，再移除窗口外队首。`},{id:76,title:`最小覆盖子串`,category:`子串`,difficulty:`困难`,question:`返回 s 中覆盖 t 全部字符（含重复次数）的最短子串。`,idea:`用 need 统计需求，missing 表示还缺多少个字符。右端扩张并减少需求；missing 为 0 时不断收缩左端并更新最短窗口，直到再次缺字符。`,code:`from collections import Counter


class Solution:
    def minWindow(self, s, t):
        need = Counter(t)
        missing = len(t)
        left = 0
        best = (float("inf"), 0, 0)
        for right, ch in enumerate(s):
            if need[ch] > 0:
                missing -= 1
            need[ch] -= 1
            while missing == 0:
                if right - left + 1 < best[0]:
                    best = (right - left + 1, left, right + 1)
                out = s[left]
                need[out] += 1
                if need[out] > 0:
                    missing += 1
                left += 1
        return "" if best[0] == float("inf") else s[best[1] : best[2]]`,complexity:`时间 O(n+m)，空间 O(字符集)。`,pitfall:`need 可为负表示窗口内多余字符；best 的右端使用开区间。`},{id:48,title:`旋转图像`,category:`矩阵`,difficulty:`中等`,question:`原地将 n×n 矩阵顺时针旋转 90 度。`,idea:`先沿主对角线转置，再反转每一行，组合起来就是顺时针旋转 90 度。`,code:`class Solution:
    def rotate(self, matrix):
        n = len(matrix)
        for i in range(n):
            for j in range(i + 1, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        for row in matrix:
            row.reverse()`,complexity:`时间 O(n²)，空间 O(1)。`,pitfall:`转置只遍历对角线上方 j>i，避免交换两次。`},{id:240,title:`搜索二维矩阵 II`,category:`矩阵`,difficulty:`中等`,question:`每行和每列均升序，判断 target 是否存在。`,idea:`从右上角开始：当前值太大就左移，太小就下移；每一步排除一行或一列。`,code:`class Solution:
    def searchMatrix(self, matrix, target):
        row, col = 0, len(matrix[0]) - 1
        while row < len(matrix) and col >= 0:
            value = matrix[row][col]
            if value == target:
                return True
            if value > target:
                col -= 1
            else:
                row += 1
        return False`,complexity:`时间 O(m+n)，空间 O(1)。`,pitfall:`右上角同时具备向左变小、向下变大的单调性。`}],ne=[{id:-1,title:`Multi-Head Attention`,category:`Transformer`,difficulty:`困难`,question:`不用框架内置 Attention，用 NumPy 手写多头自注意力，支持 causal 与 padding mask。`,idea:`先把输入分别线性投影为 Q/K/V，再 reshape、transpose 成 [B,H,T,D]。计算 QKᵀ/√D，加 mask 后沿最后一维做稳定 softmax，乘 V，最后合并 heads 并输出投影。面试时我会边写边报每一步 shape。`,code:`import numpy as np


def softmax(x, axis=-1):
    x = x - np.max(x, axis=axis, keepdims=True)
    e = np.exp(x)
    return e / e.sum(axis=axis, keepdims=True)


def mha(x, wq, wk, wv, wo, heads, mask=None, causal=False):
    B, T, C = x.shape
    D = C // heads

    def split(y):
        return y.reshape(B, T, heads, D).transpose(0, 2, 1, 3)

    q, k, v = split(x @ wq), split(x @ wk), split(x @ wv)
    scores = q @ k.swapaxes(-1, -2) / np.sqrt(D)
    if causal:
        future = np.triu(np.ones((T, T), bool), 1)
        scores = np.where(future[None, None], -np.inf, scores)
    if mask is not None:
        scores = np.where(mask[:, None, None, :], scores, -np.inf)
    out = softmax(scores, -1) @ v
    out = out.transpose(0, 2, 1, 3).reshape(B, T, C)
    return out @ wo`,complexity:`时间 O(B·H·T²·D)，attention score 空间 O(B·H·T²)。`,pitfall:`softmax 维度是 key 维；mask 广播到 [B,1,1,T]；hidden 必须能被 heads 整除。`},{id:-2,title:`Multi-Token Prediction`,category:`Transformer`,difficulty:`困难`,question:`用 PyTorch 实现简化 MTP：共享 hidden state，一次预测未来 N 个 token 并计算对齐损失。`,idea:`为每个未来步建立独立预测头。第 k 个头使用 h[:, :T-k-1] 预测 labels[:, k+1:]，只在两者共同有效长度上计算交叉熵，最后平均各头 loss。重点不是 ModuleList，而是标签对齐。`,code:`import torch
from torch import nn
import torch.nn.functional as F


class MTPHead(nn.Module):
    def __init__(self, hidden, vocab, n_future):
        super().__init__()
        self.heads = nn.ModuleList(
            [nn.Linear(hidden, vocab, bias=False) for _ in range(n_future)]
        )

    def forward(self, h, labels):
        losses, logits = [], []
        for k, head in enumerate(self.heads, start=1):
            pred = head(h[:, :-k])
            target = labels[:, k:]
            logits.append(pred)
            losses.append(
                F.cross_entropy(
                    pred.reshape(-1, pred.size(-1)),
                    target.reshape(-1),
                    ignore_index=-100,
                )
            )
        return torch.stack(losses).mean(), logits`,complexity:`N 个预测头时约 O(N·B·T·H·V)，输出激活随 N 线性增长。`,pitfall:`第 k 个头预测未来 k 步，hidden 与 label 必须错位相同长度；padding 用 ignore_index。`},{id:-3,title:`Online Preference Distillation`,category:`后训练`,difficulty:`困难`,question:`根据学生与教师对 chosen/rejected 的序列 log-prob，实现简化 OPD 偏好蒸馏损失。`,idea:`先分别得到学生和教师的偏好边际 chosen-rejected，再把边际变成二分类偏好概率。教师分布 detach 作为软标签，学生用 binary cross entropy 学习教师相对偏好。`,code:`import torch
import torch.nn.functional as F


def opd_loss(
    student_chosen, student_rejected, teacher_chosen, teacher_rejected, beta=1.0
):
    student_margin = beta * (student_chosen - student_rejected)
    with torch.no_grad():
        teacher_margin = beta * (teacher_chosen - teacher_rejected)
        teacher_preference = torch.sigmoid(teacher_margin)
    return F.binary_cross_entropy_with_logits(student_margin, teacher_preference)`,complexity:`获得四组序列 log-prob 后，loss 计算 O(B)。`,pitfall:`输入应先按 response 有效 token 聚合；教师分支必须停止梯度。`},{id:-4,title:`RoPE`,category:`Transformer`,difficulty:`困难`,question:`手写旋转位置编码，对 Q/K 的偶数与奇数通道成对旋转。`,idea:`每对通道共享位置相关角度。先实现 rotate_half=(-odd,even)，再生成 position×inv_freq 的 cos/sin，并广播到 head 维，返回 x·cos+rotate_half(x)·sin。`,code:`import torch


def rotate_half(x):
    even, odd = x[..., 0::2], x[..., 1::2]
    return torch.stack((-odd, even), dim=-1).flatten(-2)


def apply_rope(q, k, position_ids, base=10000.0):
    D = q.size(-1)
    inv = 1.0 / (base ** (torch.arange(0, D, 2, device=q.device).float() / D))
    angle = position_ids.float()[..., None] * inv
    cos = angle.cos().repeat_interleave(2, -1)[:, None].to(q.dtype)
    sin = angle.sin().repeat_interleave(2, -1)[:, None].to(q.dtype)
    return (q * cos + rotate_half(q) * sin, k * cos + rotate_half(k) * sin)`,complexity:`时间 O(B·H·T·D)，cos/sin 缓存 O(T·D)。`,pitfall:`D 必须为偶数；Q/K 同位置共用相同角度；广播形状是 [B,1,T,D]。`},{id:-5,title:`RMSNorm`,category:`Transformer`,difficulty:`中等`,question:`用 PyTorch 手写 RMSNorm，并说明与 LayerNorm 的计算差异。`,idea:`RMSNorm 不减均值，只按最后一维的均方根缩放，再乘可学习 scale。统计量用 FP32 计算提升低精度稳定性，最后恢复输入 dtype。`,code:`import torch
from torch import nn


class RMSNorm(nn.Module):
    def __init__(self, hidden_size, eps=1e-6):
        super().__init__()
        self.weight = nn.Parameter(torch.ones(hidden_size))
        self.eps = eps

    def forward(self, x):
        dtype = x.dtype
        xf = x.float()
        inv_rms = torch.rsqrt(xf.pow(2).mean(-1, keepdim=True) + self.eps)
        return (xf * inv_rms * self.weight.float()).to(dtype)`,complexity:`时间 O(ND)，参数与额外 scale 空间 O(D)。`,pitfall:`在最后一维求均方；低精度输入先转 FP32；RMSNorm 不做均值中心化。`},{id:-6,title:`KV Cache 单步解码`,category:`推理`,difficulty:`困难`,question:`手写单步 decode attention：更新 K/V cache 并计算当前 token 输出。`,idea:`decode 时当前步只生成一个新 Q/K/V。把新 K/V 沿序列维追加到历史 cache，当前 Q 对全部历史 K 做注意力再乘 V，返回输出与更新后的 cache。`,code:`import math
import torch


def decode_attention(q, k_new, v_new, k_cache=None, v_cache=None):
    if k_cache is None:
        k_all, v_all = k_new, v_new
    else:
        k_all = torch.cat([k_cache, k_new], dim=2)
        v_all = torch.cat([v_cache, v_new], dim=2)
    scores = q @ k_all.transpose(-1, -2) / math.sqrt(q.size(-1))
    probs = torch.softmax(scores.float(), dim=-1).to(q.dtype)
    return probs @ v_all, k_all.detach(), v_all.detach()`,complexity:`单步时间 O(B·H·T·D)，cache 空间 O(B·H·T·D)。`,pitfall:`只缓存 K/V 不缓存 Q；拼接维是序列维 dim=2；RoPE 应在入 cache 前完成。`},{id:-7,title:`Top-p 核采样`,category:`采样`,difficulty:`中等`,question:`用 PyTorch 手写 temperature + top-p sampling，返回 token 与 log-prob。`,idea:`temperature 缩放后 softmax，按概率降序排序。保留累计概率达到 p 的最小集合，重归一化后采样，再把排序下标映射回原 token id。`,code:`import torch


def top_p_sample(logits, p=0.9, temperature=1.0, generator=None):
    probs = torch.softmax(logits / temperature, dim=-1)
    sorted_p, sorted_id = torch.sort(probs, descending=True, dim=-1)
    remove = torch.cumsum(sorted_p, dim=-1) > p
    remove[..., 1:] = remove[..., :-1].clone()
    remove[..., 0] = False
    sorted_p = sorted_p.masked_fill(remove, 0)
    sorted_p = sorted_p / sorted_p.sum(-1, keepdim=True)
    rank = torch.multinomial(sorted_p, 1, generator=generator)
    token = sorted_id.gather(-1, rank)
    logp = sorted_p.gather(-1, rank).clamp_min(1e-20).log()
    return token, logp`,complexity:`排序主导 O(V log V)，额外空间 O(V)。`,pitfall:`mask 右移一位以保留越过阈值的第一个 token；候选概率必须重归一。`},{id:-8,title:`DPO Loss`,category:`后训练`,difficulty:`困难`,question:`手写 DPO loss，并说明四组 sequence log-prob 的来源。`,idea:`分别计算 policy/reference 对 chosen/rejected 的序列 log-prob。用 policy 偏好边际减 reference 偏好边际，乘 beta 后最小化负 log-sigmoid；reference 模型冻结。`,code:`import torch.nn.functional as F


def dpo_loss(policy_chosen, policy_rejected, ref_chosen, ref_rejected, beta=0.1):
    policy_margin = policy_chosen - policy_rejected
    reference_margin = ref_chosen - ref_rejected
    logits = beta * (policy_margin - reference_margin)
    loss = -F.logsigmoid(logits).mean()
    chosen_reward = beta * (policy_chosen - ref_chosen).detach()
    rejected_reward = beta * (policy_rejected - ref_rejected).detach()
    return loss, chosen_reward, rejected_reward`,complexity:`log-prob 已聚合后，loss 计算 O(B)。`,pitfall:`四组输入是 response 有效 token log-prob 之和；reference 不参与梯度。`},{id:-9,title:`GRPO Loss`,category:`后训练`,difficulty:`困难`,question:`手写最小 GRPO：组内 reward 标准化、PPO clip、token mask 与可选 KL。`,idea:`每个 prompt 采样 G 个 response，reward 在组内标准化得到 advantage。把它广播到 token 维，用 new/old log-prob ratio 构造 clipped surrogate，再用 response mask 聚合。`,code:`import torch


def grpo_loss(
    new_logp, old_logp, rewards, mask, ref_logp=None, clip_eps=0.2, beta=0.0, eps=1e-6
):
    mean = rewards.mean(1, keepdim=True)
    std = rewards.std(1, keepdim=True, unbiased=False)
    advantage = ((rewards - mean) / (std + eps)).detach().unsqueeze(-1)
    ratio = torch.exp(new_logp - old_logp)
    loss = -torch.minimum(
        ratio * advantage, ratio.clamp(1 - clip_eps, 1 + clip_eps) * advantage
    )
    if ref_logp is not None and beta > 0:
        delta = ref_logp - new_logp
        loss = loss + beta * (torch.exp(delta) - delta - 1)
    return (loss * mask).sum() / mask.sum().clamp_min(1)`,complexity:`loss 计算 O(B·G·T)，主要成本来自 G 条 rollout。`,pitfall:`reward 全相同时 advantage 接近 0；mask 掉 prompt/padding；old/ref log-prob 均不回传梯度。`},{id:-10,title:`稳定 Softmax 与交叉熵`,category:`基础算子`,difficulty:`中等`,question:`不调用 CrossEntropyLoss，手写数值稳定的 softmax 与交叉熵。`,idea:`softmax 先减每行最大值避免 exp 溢出。交叉熵无需显式算 softmax，可直接用 logsumexp(logits)-目标类 logit。`,code:`import torch


def stable_softmax(logits, dim=-1):
    shifted = logits - logits.max(dim=dim, keepdim=True).values
    exp = shifted.exp()
    return exp / exp.sum(dim=dim, keepdim=True)


def cross_entropy(logits, targets):
    log_z = torch.logsumexp(logits, dim=-1)
    target = logits.gather(1, targets[:, None]).squeeze(1)
    return (log_z - target).mean()`,complexity:`时间 O(B·C)，额外空间取决于是否保留完整 softmax。`,pitfall:`归一化沿类别维；不要先 softmax 再 log；真实场景还要处理 ignore_index。`}],re=/^(hot100|llm):-?\d+$/;function w(e,t=0){return typeof e==`number`&&Number.isFinite(e)?e:t}function ie(e){if(!e||typeof e!=`object`)return null;let t=e;return t.phase!==`learning`&&t.phase!==`review`?null:{phase:t.phase,due:w(t.due),interval:Math.max(0,w(t.interval)),ease:Math.max(1.3,w(t.ease,2.5)),repetitions:Math.max(0,w(t.repetitions)),lapses:Math.max(0,w(t.lapses)),lastReviewed:Math.max(0,w(t.lastReviewed)),introducedOn:typeof t.introducedOn==`string`?t.introducedOn.slice(0,10):``}}function ae(e){let t=e&&typeof e==`object`?e:{},n={};if(t.schedule&&typeof t.schedule==`object`)for(let[e,r]of Object.entries(t.schedule).slice(0,500)){let t=ie(r);re.test(e)&&t&&(n[e]=t)}let r=Math.max(0,...Object.values(n).map(e=>e.lastReviewed)),i=Math.max(r,w(t.updatedAt)),a=t.activeDeck===`llm`?`llm`:`hot100`,o=Array.isArray(t.starred)?Array.from(new Set(t.starred.filter(e=>typeof e==`number`&&Number.isFinite(e)))).slice(0,500):[],s={},c={};for(let e of[`hot100`,`llm`,`daily`]){let n=t.currentByDeck?.[e];typeof n==`number`&&Number.isFinite(n)&&(s[e]=n);let r=w(t.cursorUpdatedAt?.[e],s[e]===void 0?0:i);r&&(c[e]=r)}return{version:3,schedule:n,starred:o,starredUpdatedAt:w(t.starredUpdatedAt,o.length?i:0),currentByDeck:s,cursorUpdatedAt:c,activeDeck:a,activeDeckUpdatedAt:w(t.activeDeckUpdatedAt,i),updatedAt:i}}function oe(e,t){let n=ae(e),r=ae(t),i={};for(let e of new Set([...Object.keys(n.schedule),...Object.keys(r.schedule)])){let t=n.schedule[e],a=r.schedule[e];t?a?a.lastReviewed>t.lastReviewed?i[e]=a:a.lastReviewed<t.lastReviewed?i[e]=t:a.repetitions>t.repetitions?i[e]=a:a.repetitions<t.repetitions?i[e]=t:i[e]=a.due>=t.due?a:t:i[e]=t:i[e]=a}let a=r.starredUpdatedAt>=n.starredUpdatedAt,o={},s={};for(let e of[`hot100`,`llm`,`daily`]){let t=n.cursorUpdatedAt[e]||0,i=r.cursorUpdatedAt[e]||0,a=i>=t?r:n;a.currentByDeck[e]!==void 0&&(o[e]=a.currentByDeck[e]);let c=Math.max(t,i);c&&(s[e]=c)}let c=r.activeDeckUpdatedAt>=n.activeDeckUpdatedAt?r.activeDeck:n.activeDeck,l=ae({version:3,schedule:i,starred:a?r.starred:n.starred,starredUpdatedAt:Math.max(n.starredUpdatedAt,r.starredUpdatedAt),currentByDeck:o,cursorUpdatedAt:s,activeDeck:c,activeDeckUpdatedAt:Math.max(n.activeDeckUpdatedAt,r.activeDeckUpdatedAt),updatedAt:Math.max(n.updatedAt,r.updatedAt)});return l.updatedAt=Math.max(l.updatedAt,l.starredUpdatedAt,l.activeDeckUpdatedAt,...Object.values(l.cursorUpdatedAt).map(e=>e||0),...Object.values(l.schedule).map(e=>e.lastReviewed)),l}var se=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),T=e(((e,t)=>{t.exports=se()}))(),ce=`interview-anki-v2`,le=`hot100-anki`,E=6e4,D=864e5,ue=20,de=4,fe={hot100:te,llm:ne},pe=[...te,...ne];function O(e,t){return`${e}:${t}`}function k(e){return e<0?`llm`:`hot100`}function me(e){return O(k(e),e)}function he(e=Date.now()){let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}function ge(e){let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function _e(e,t){return[...e].sort((e,n)=>ge(`${t}:${e.id}`)-ge(`${t}:${n.id}`))}function ve(e,t,n,r,i){let a=_e(e.filter(e=>e.id>0),`${t}:hot100`),o=_e(e.filter(e=>e.id<0),`${t}:llm`),s=Math.max(0,ue-de-r),c=Math.max(0,de-i),l=[...a.slice(0,Math.min(s,n)),...o.slice(0,Math.min(c,Math.max(0,n-s)))],u=new Set(l.map(e=>e.id)),d=_e(e.filter(e=>!u.has(e.id)),`${t}:overflow`).slice(0,Math.max(0,n-l.length));return _e([...l,...d],`${t}:mixed`)}function ye(e){if(e<D)return`${Math.max(1,Math.round(e/E))} 分钟`;let t=Math.max(1,Math.round(e/D));return t<30?`${t} 天`:`${Math.max(1,Math.round(t/30))} 个月`}function be(e,t){let n=e-t;return n<=0?`现在到期`:n<D?`${ye(n)}后`:new Intl.DateTimeFormat(`zh-CN`,{month:`numeric`,day:`numeric`}).format(new Date(e))}function xe(e,t,n){let r=he(n),i=e??{phase:`learning`,due:n,interval:0,ease:2.5,repetitions:0,lapses:0,lastReviewed:0,introducedOn:r},a={...i,lastReviewed:n,repetitions:i.repetitions+1,introducedOn:i.introducedOn||r};if(t===`again`)return{...a,phase:`learning`,due:n+E,interval:0,ease:Math.max(1.3,i.ease-.2),lapses:i.lapses+1};if(t===`hard`&&(i.phase===`learning`||i.interval<1))return{...a,phase:`learning`,due:n+6*E,interval:0,ease:Math.max(1.3,i.ease-.05)};let o=t===`hard`?Math.max(1,Math.round(i.interval*1.2)):t===`good`?i.interval>=1?Math.max(1,Math.round(i.interval*i.ease)):1:i.interval>=1?Math.max(4,Math.round(i.interval*(i.ease+.15)*1.3)):4;return{...a,phase:`review`,due:n+o*D,interval:o,ease:t===`hard`?Math.max(1.3,i.ease-.05):t===`easy`?i.ease+.15:i.ease}}function Se(){let e={};try{let t=JSON.parse(localStorage.getItem(le)||`{}`),n=Date.now(),r=he(n-D);for(let[i,a]of Object.entries(t.grades||{})){let t=Number(i);if(!Number.isFinite(t))continue;let o=t<0?`llm`:`hot100`,s=xe(void 0,a,n);e[O(o,t)]={...s,introducedOn:r}}return{schedule:e,starred:t.starred||[]}}catch{return{schedule:e,starred:[]}}}function Ce(e){let t=ae(e);if(!e||typeof e!=`object`||e.version===3)return t;let n=e,r=Date.now();t.starred.length&&(t.starredUpdatedAt=r);for(let e of[`hot100`,`llm`,`daily`])t.currentByDeck[e]!==void 0&&(t.cursorUpdatedAt[e]=r);return(n.activeDeck===`hot100`||n.activeDeck===`llm`)&&(t.activeDeckUpdatedAt=r),t.updatedAt=Math.max(t.updatedAt,t.starredUpdatedAt,t.activeDeckUpdatedAt,...Object.values(t.cursorUpdatedAt).map(e=>e||0)),t}function we(e,t){let n=new Set(Object.values(e).filter(e=>e.lastReviewed).map(e=>he(e.lastReviewed))),r=new Date(t);r.setHours(12,0,0,0),n.has(he(r.getTime()))||r.setDate(r.getDate()-1);let i=0;for(;n.has(he(r.getTime()));)i+=1,r.setDate(r.getDate()-1);return i}function Te(){let[e,t]=(0,l.useState)(`hot100`),[n,r]=(0,l.useState)(`review`),[i,a]=(0,l.useState)({}),[o,s]=(0,l.useState)({}),[c,u]=(0,l.useState)(!1),[d,f]=(0,l.useState)(`全部`),[p,m]=(0,l.useState)(``),[h,g]=(0,l.useState)({}),[_,v]=(0,l.useState)([]),[y,b]=(0,l.useState)(0),[x,ee]=(0,l.useState)({}),[S,re]=(0,l.useState)(0),[w,ie]=(0,l.useState)(!1),[se,le]=(0,l.useState)(!1),[E,D]=(0,l.useState)(()=>Date.now()),[O,ge]=(0,l.useState)(0),[_e,Te]=(0,l.useState)(`loading`),Ee=(0,l.useCallback)(e=>{let n=ae(e);g(n.schedule),v(n.starred),b(n.starredUpdatedAt),a(n.currentByDeck),ee(n.cursorUpdatedAt),t(n.activeDeck),re(n.activeDeckUpdatedAt)},[]);(0,l.useEffect)(()=>{queueMicrotask(async()=>{let e;try{let t=localStorage.getItem(ce);e=Ce(t?JSON.parse(t):{...Se(),version:2})}catch{e=Ce({...Se(),version:2})}let t=e;try{Te(`syncing`);let n=await C(`/api/progress`,{cache:`no-store`});if(n.status===401)Te(`local`);else if(n.ok){let r=await n.json();t=r.progress?oe(e,r.progress):e;let i=await C(`/api/progress`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify(t)});if(!i.ok)throw Error(`Cloud upload failed`);t=ae((await i.json()).progress),Te(`synced`)}else throw Error(`Cloud download failed`)}catch{Te(`offline`)}Ee(t),localStorage.setItem(ce,JSON.stringify(t)),le(!0)})},[Ee]),(0,l.useEffect)(()=>{if(!se)return;let t=ae({version:3,schedule:h,starred:_,starredUpdatedAt:y,currentByDeck:i,cursorUpdatedAt:x,activeDeck:e,activeDeckUpdatedAt:S,updatedAt:Math.max(y,S,...Object.values(x).map(e=>e||0),...Object.values(h).map(e=>e.lastReviewed))});localStorage.setItem(ce,JSON.stringify(t));let n=new AbortController,r=window.setTimeout(async()=>{try{Te(`syncing`);let e=await C(`/api/progress`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify(t),signal:n.signal});if(e.status===401){Te(`local`);return}if(!e.ok)throw Error(`Cloud sync failed`);let r=ae((await e.json()).progress);localStorage.setItem(ce,JSON.stringify(r)),JSON.stringify(r)!==JSON.stringify(t)&&Ee(r),Te(`synced`)}catch(e){e instanceof DOMException&&e.name===`AbortError`||Te(`offline`)}},700);return()=>{n.abort(),window.clearTimeout(r)}},[S,Ee,x,e,se,i,h,_,y,O]),(0,l.useEffect)(()=>{let e=window.setInterval(()=>D(Date.now()),3e4),t=window.setInterval(()=>ge(e=>e+1),6e4),n=()=>{D(Date.now()),ge(e=>e+1)};return window.addEventListener(`focus`,n),document.addEventListener(`visibilitychange`,n),()=>{window.clearInterval(e),window.clearInterval(t),window.removeEventListener(`focus`,n),document.removeEventListener(`visibilitychange`,n)}},[]);let De=fe[e],Oe=n===`review`?pe:De,ke=he(E),Ae=(0,l.useMemo)(()=>[`全部`,...Array.from(new Set(De.map(e=>e.category)))],[De]),je=(0,l.useMemo)(()=>pe.map(e=>({card:e,state:h[me(e.id)]})),[h]),Me=(0,l.useMemo)(()=>De.map(e=>({card:e,state:h[me(e.id)]})),[De,h]),Ne=je.filter(({state:e})=>e?.introducedOn===ke).length,Pe=je.filter(({card:e,state:t})=>e.id>0&&t?.introducedOn===ke).length,Fe=je.filter(({card:e,state:t})=>e.id<0&&t?.introducedOn===ke).length,Ie=Math.max(0,ue-Ne),Le=(0,l.useMemo)(()=>je.filter(({state:e})=>e&&e.due<=E).sort((e,t)=>e.state?.phase===t.state?.phase?(e.state?.due||0)-(t.state?.due||0):e.state?.phase===`learning`?-1:1).map(({card:e})=>e),[je,E]),Re=(0,l.useMemo)(()=>ve(je.filter(({state:e})=>!e).map(({card:e})=>e),ke,Ie,Pe,Fe),[je,Pe,Fe,Ie,ke]),ze=(0,l.useMemo)(()=>[...Le,...Re],[Le,Re]),Be=(0,l.useMemo)(()=>{let e=p.trim().toLowerCase();return De.filter(t=>(d===`全部`||t.category===d)&&(!e||t.title.toLowerCase().includes(e)||String(Math.abs(t.id)).includes(e)))},[De,p,d]),Ve=n===`review`?ze:Be,He=n===`review`?i.daily:o[e],Ue=Ve.findIndex(e=>e.id===He),We=Ue>=0?Ue:0,A=Ve[We],j=A?h[me(A.id)]:void 0,Ge=t=>{if(n===`review`){let e=Date.now();a(e=>({...e,daily:t})),ee(t=>({...t,daily:e}))}else s(n=>({...n,[e]:t}))},Ke=e=>{if(!Ve.length)return;let t=Ve[(We+e+Ve.length)%Ve.length];Ge(t.id),u(!1)},qe=e=>{if(!A)return;let t=Date.now(),r=me(A.id);g(n=>({...n,[r]:xe(n[r],e,t)}));let i=Ve.filter(e=>e.id!==A.id);if(n===`review`)a(e=>{let t={...e};return delete t.daily,t}),ee(e=>({...e,daily:t}));else if(i.length){let e=i[Math.min(We,i.length-1)];Ge(e.id)}u(!1),D(t)};(0,l.useEffect)(()=>{let e=e=>{e.target instanceof HTMLInputElement||(e.code===`Space`&&A&&(e.preventDefault(),u(e=>!e)),e.key===`ArrowRight`&&Ke(1),e.key===`ArrowLeft`&&Ke(-1),c&&[`1`,`2`,`3`,`4`].includes(e.key)&&qe([`again`,`hard`,`good`,`easy`][Number(e.key)-1]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)});let Je=(n===`review`?je:Me).filter(({state:e})=>e?.repetitions).length,Ye=Me.filter(({state:e})=>e?.repetitions).length,Xe=je.filter(({state:e})=>e?.lastReviewed&&he(e.lastReviewed)===ke).length,Ze=je.filter(({state:e})=>e?.phase===`learning`).length,Qe=je.filter(({state:e})=>e?.phase===`review`&&e.due<=E).length,$e=je.map(({state:e})=>e?.due||1/0).filter(e=>e>E).sort((e,t)=>e-t)[0],et=we(h,E),tt=[`again`,`hard`,`good`,`easy`].map(e=>({value:e,label:{again:`忘记`,hard:`困难`,good:`掌握`,easy:`简单`}[e],delay:A?ye(xe(j,e,E).due-E):``})),nt=j?j.phase===`learning`?`学习中 · ${be(j.due,E)}`:`复习卡 · ${be(j.due,E)}`:`今日新卡`,rt=Array.from({length:7},(e,t)=>{let n=new Date(E);n.setHours(12,0,0,0),n.setDate(n.getDate()-(6-t));let r=he(n.getTime()),i=Object.values(h).some(e=>e.lastReviewed&&he(e.lastReviewed)===r);return{key:r,date:n.getDate(),weekday:`日一二三四五六`[n.getDay()],done:i,today:r===ke}}),it=e=>{let n=Date.now();t(e),re(n),r(`browse`),f(`全部`),m(``),u(!1),ie(!1)},at=t=>{f(t),r(`browse`),s(t=>({...t,[e]:void 0})),u(!1),ie(!1)},ot=()=>{r(`review`),f(`全部`),m(``),u(!1)},st=e=>{v(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),b(Date.now())},ct={loading:`正在读取云端`,syncing:`正在同步`,synced:`云端已同步`,offline:`离线 · 稍后重试`,local:`已保存到本机`}[_e];return se?(0,T.jsxs)(`main`,{className:`anki-shell`,children:[(0,T.jsxs)(`header`,{className:`anki-top`,children:[(0,T.jsxs)(`div`,{className:`anki-brand`,children:[(0,T.jsx)(`span`,{children:`i`}),(0,T.jsxs)(`div`,{children:[`INTERVIEW `,(0,T.jsx)(`b`,{children:`DESK`}),(0,T.jsx)(`small`,{children:`ALGORITHM + LLM · SPACED REPETITION`})]})]}),(0,T.jsxs)(`div`,{className:`session`,children:[(0,T.jsx)(`i`,{children:n===`review`?`今日已复习`:`已建立记录`}),(0,T.jsx)(`strong`,{children:n===`review`?Xe:Je}),(0,T.jsxs)(`span`,{children:[`/ `,Oe.length]})]}),(0,T.jsxs)(`div`,{className:`header-actions`,children:[(0,T.jsx)(`button`,{onClick:()=>ie(e=>!e),children:`☷ 题目列表`}),(0,T.jsxs)(`span`,{className:`cloud-chip ${_e}`,children:[(0,T.jsx)(`i`,{}),ct]}),(0,T.jsxs)(`span`,{className:`streak-dot`,children:[et,` DAY STREAK`]})]})]}),(0,T.jsxs)(`div`,{className:`anki-layout`,children:[(0,T.jsxs)(`aside`,{className:`deck-panel ${w?`mobile-open`:``}`,children:[(0,T.jsx)(`div`,{className:`deck-label`,children:`今日复习`}),(0,T.jsxs)(`button`,{className:`today-queue ${n===`review`?`active`:``}`,onClick:ot,children:[(0,T.jsxs)(`span`,{children:[(0,T.jsx)(`i`,{}),`综合待复习`]}),(0,T.jsx)(`b`,{children:ze.length}),(0,T.jsxs)(`small`,{children:[`Hot 100 + 大模型 · 每日 `,ue,` 张新卡`]})]}),(0,T.jsx)(`div`,{className:`topic-label deck-section-label`,children:`题库浏览`}),(0,T.jsxs)(`button`,{className:`deck ${n===`browse`&&e===`hot100`?`active`:``}`,onClick:()=>it(`hot100`),children:[(0,T.jsx)(`span`,{className:`deck-icon`,children:`100`}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`b`,{children:`LeetCode Hot 100`}),(0,T.jsxs)(`small`,{children:[te.length,` 张卡片`]})]})]}),(0,T.jsxs)(`button`,{className:`deck secondary ${n===`browse`&&e===`llm`?`active`:``}`,onClick:()=>it(`llm`),children:[(0,T.jsx)(`span`,{className:`deck-icon`,children:`LLM`}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`b`,{children:`大模型手撕专项`}),(0,T.jsxs)(`small`,{children:[ne.length,` 张卡片`]})]})]}),(0,T.jsx)(`div`,{className:`topic-label`,children:`浏览专题`}),(0,T.jsx)(`div`,{className:`topic-list`,children:Ae.map(e=>(0,T.jsxs)(`button`,{className:n===`browse`&&d===e?`active`:``,onClick:()=>at(e),children:[(0,T.jsx)(`span`,{children:e}),(0,T.jsx)(`em`,{children:e===`全部`?De.length:De.filter(t=>t.category===e).length})]},e))}),(0,T.jsxs)(`div`,{className:`deck-progress`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`span`,{children:`当前题库记忆记录`}),(0,T.jsxs)(`b`,{children:[Math.round(Ye/De.length*100),`%`]})]}),(0,T.jsx)(`i`,{children:(0,T.jsx)(`span`,{style:{width:`${Ye/De.length*100}%`}})}),(0,T.jsxs)(`small`,{children:[Ye,` / `,De.length,` 已复习过`]})]})]}),(0,T.jsxs)(`section`,{className:`card-stage`,children:[(0,T.jsxs)(`div`,{className:`stage-tools`,children:[(0,T.jsxs)(`div`,{className:`search-box`,children:[`⌕ `,(0,T.jsx)(`input`,{value:p,onChange:t=>{m(t.target.value),r(`browse`),s(t=>({...t,[e]:void 0})),u(!1)},placeholder:`搜索题号或题目`})]}),(0,T.jsxs)(`div`,{className:`shortcuts`,children:[(0,T.jsx)(`kbd`,{children:`Space`}),` 翻面　`,(0,T.jsx)(`kbd`,{children:`←`}),(0,T.jsx)(`kbd`,{children:`→`}),` 切题`]})]}),(0,T.jsxs)(`div`,{className:`counter-line`,children:[(0,T.jsxs)(`span`,{children:[n===`review`?`今日复习`:d,` · `,A?.category||`队列完成`]}),(0,T.jsxs)(`div`,{className:`counter-right`,children:[n===`browse`&&(0,T.jsx)(`button`,{onClick:ot,children:`返回今日复习`}),(0,T.jsxs)(`b`,{children:[A?String(We+1).padStart(2,`0`):`00`,` `,(0,T.jsxs)(`i`,{children:[`/ `,String(Ve.length).padStart(2,`0`)]})]})]})]}),(0,T.jsx)(`div`,{className:`flip-scene ${c?`is-flipped`:``}`,children:A?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(`article`,{className:`anki-card front`,onClick:()=>u(!0),children:[(0,T.jsxs)(`div`,{className:`card-topline`,children:[(0,T.jsxs)(`span`,{children:[k(A.id)===`hot100`?`HOT 100`:`LLM CODING`,` · #`,Math.abs(A.id)]}),(0,T.jsx)(`button`,{onClick:e=>{e.stopPropagation(),st(A.id)},children:_.includes(A.id)?`★`:`☆`})]}),(0,T.jsxs)(`div`,{className:`card-center`,children:[(0,T.jsxs)(`div`,{className:`card-meta`,children:[(0,T.jsx)(`span`,{className:`difficulty ${A.difficulty}`,children:A.difficulty}),(0,T.jsx)(`span`,{className:`due-badge ${j?.phase||`new`}`,children:nt})]}),(0,T.jsx)(`h1`,{children:A.title}),(0,T.jsx)(`p`,{children:A.question}),(0,T.jsxs)(`div`,{className:`think`,children:[(0,T.jsx)(`span`,{children:`面试时先想`}),(0,T.jsx)(`b`,{children:`核心数据结构是什么？状态如何定义？边界在哪里？`})]})]}),(0,T.jsxs)(`div`,{className:`flip-hint`,children:[(0,T.jsx)(`span`,{children:`点击卡片或按空格`}),(0,T.jsx)(`b`,{children:`显示答案　↻`})]})]}),(0,T.jsxs)(`article`,{className:`anki-card back`,children:[(0,T.jsxs)(`div`,{className:`card-topline`,children:[(0,T.jsxs)(`span`,{children:[`BEST INTERVIEW ANSWER · #`,Math.abs(A.id)]}),(0,T.jsx)(`button`,{onClick:()=>u(!1),children:`↻`})]}),(0,T.jsxs)(`div`,{className:`answer-scroll`,children:[(0,T.jsxs)(`section`,{children:[(0,T.jsx)(`label`,{children:`01 · 先这样口述`}),(0,T.jsx)(`p`,{className:`idea`,children:A.idea})]}),(0,T.jsxs)(`section`,{children:[(0,T.jsx)(`label`,{children:`02 · Python 最优写法`}),(0,T.jsx)(`pre`,{children:(0,T.jsx)(`code`,{children:A.code})})]}),(0,T.jsxs)(`div`,{className:`answer-grid`,children:[(0,T.jsxs)(`section`,{children:[(0,T.jsx)(`label`,{children:`03 · 复杂度`}),(0,T.jsx)(`p`,{children:A.complexity})]}),(0,T.jsxs)(`section`,{children:[(0,T.jsx)(`label`,{children:`04 · 易错点`}),(0,T.jsx)(`p`,{children:A.pitfall})]})]})]})]})]}):(0,T.jsxs)(`article`,{className:`anki-card front complete-card`,children:[(0,T.jsx)(`div`,{className:`complete-mark`,children:`✓`}),(0,T.jsx)(`span`,{className:`complete-kicker`,children:`TODAY'S SESSION COMPLETE`}),(0,T.jsx)(`h1`,{children:`今日复习完成`}),(0,T.jsxs)(`p`,{children:[`到期卡已经清空，今天已复习 `,(0,T.jsx)(`b`,{children:Xe}),` 张。下一张学习卡到期后，它会自动回到队列顶部。`]}),(0,T.jsxs)(`div`,{className:`complete-stats`,children:[(0,T.jsxs)(`span`,{children:[(0,T.jsx)(`b`,{children:Ne}),` / `,ue,(0,T.jsx)(`small`,{children:`今日新卡`})]}),(0,T.jsxs)(`span`,{children:[(0,T.jsx)(`b`,{children:$e?be($e,E):`暂无`}),(0,T.jsx)(`small`,{children:`下次到期`})]})]}),(0,T.jsx)(`button`,{onClick:()=>{r(`browse`),f(`全部`)},children:`浏览全部卡片`})]})}),A?(0,T.jsxs)(`div`,{className:`navigation`,children:[(0,T.jsx)(`button`,{onClick:()=>Ke(-1),children:`← 上一题`}),c?(0,T.jsx)(`div`,{className:`grades`,children:tt.map((e,t)=>(0,T.jsxs)(`button`,{onClick:()=>qe(e.value),children:[(0,T.jsx)(`b`,{children:e.label}),(0,T.jsx)(`small`,{children:e.delay}),(0,T.jsx)(`kbd`,{children:t+1})]},e.value))}):(0,T.jsxs)(`button`,{className:`show-answer`,onClick:()=>u(!0),children:[`显示答案 `,(0,T.jsx)(`kbd`,{children:`Space`})]}),(0,T.jsx)(`button`,{onClick:()=>Ke(1),children:`下一题 →`})]}):(0,T.jsx)(`div`,{className:`navigation completion-nav`,children:(0,T.jsx)(`span`,{children:`每 30 秒及重新回到页面时，队列会自动检查到期卡。`})})]}),(0,T.jsxs)(`aside`,{className:`queue-panel`,children:[(0,T.jsxs)(`div`,{className:`queue-head`,children:[(0,T.jsx)(`span`,{children:`今日队列`}),(0,T.jsx)(`b`,{children:ze.length})]}),(0,T.jsxs)(`div`,{className:`queue-stats`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`b`,{children:Re.length}),(0,T.jsx)(`span`,{children:`新卡`})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`b`,{children:Ze}),(0,T.jsx)(`span`,{children:`学习中`})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`b`,{children:Qe}),(0,T.jsx)(`span`,{children:`到期复习`})]})]}),(0,T.jsxs)(`div`,{className:`today-plan`,children:[(0,T.jsx)(`span`,{children:`MIXED ANKI SCHEDULER`}),(0,T.jsx)(`h3`,{children:`算法题 + 大模型手撕`}),(0,T.jsxs)(`p`,{children:[`每天最多 `,ue,` 张新卡，优先混入 `,de,` 张大模型题；到期卡仍然优先，评分继续决定下次出现时间。`]}),(0,T.jsxs)(`div`,{className:`scheduler-note ${_e}`,children:[(0,T.jsx)(`b`,{children:ct}),(0,T.jsx)(`small`,{children:`连接云同步并登录同一账号后，可合并手机和电脑的进度；未连接时保存在本机。`})]})]}),(0,T.jsxs)(`div`,{className:`mini-calendar`,children:[(0,T.jsx)(`b`,{children:`最近 7 天`}),(0,T.jsx)(`div`,{children:rt.map(e=>(0,T.jsxs)(`span`,{className:e.today?`today`:e.done?`done`:``,children:[e.weekday,(0,T.jsx)(`i`,{children:e.date})]},e.key))})]}),(0,T.jsxs)(`div`,{className:`quote-card`,children:[`“记忆不是重复阅读，`,(0,T.jsx)(`br`,{}),`而是恰好在遗忘前主动回忆。”`]})]})]})]}):(0,T.jsxs)(`main`,{className:`loading-shell`,children:[(0,T.jsx)(`div`,{className:`loading-mark`,children:`i`}),(0,T.jsx)(`p`,{children:`正在恢复你的复习进度…`})]})}function Ee(){let[e,t]=(0,l.useState)(x);return(0,l.useEffect)(()=>ee(()=>t(x())),[]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(`nav`,{className:`pages-bar`,"aria-label":`站点与同步`,children:[(0,T.jsx)(`a`,{href:`/`,children:`← 首页`}),(0,T.jsx)(`span`,{className:`pages-sync-status`,role:`status`,children:e.message}),(0,T.jsx)(`button`,{type:`button`,onClick:S,children:e.ready?`重新连接`:`连接云同步`}),(0,T.jsx)(`a`,{href:d,target:`_blank`,rel:`noopener noreferrer`,children:`云端版`})]}),(0,T.jsx)(Te,{})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,T.jsx)(Ee,{}));