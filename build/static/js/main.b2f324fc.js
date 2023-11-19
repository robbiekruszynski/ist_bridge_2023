/*! For license information please see main.b2f324fc.js.LICENSE.txt */
!function(){var e={91923:function(e,t,r){"use strict";r.d(t,{RK:function(){return i},dv:function(){return n}});const n=3,i=260},27514:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(20890),i=r.p+"static/media/logo.a6956ef07000b8790474.png",o=r(80184);var s=()=>(0,o.jsxs)("span",{children:[(0,o.jsx)("img",{src:i,alt:"SaferBridge",width:"50",style:{marginRight:"10px",verticalAlign:"middle"}}),(0,o.jsx)(n.Z,{variant:"h2",style:{display:"inline-block",verticalAlign:"middle"},children:"SaferBridge"})]})},23735:function(e,t,r){"use strict";var n=r(72791),i=r(13967),o=r(57621),s=r(9585),a=r(20890),l=r(94721),c=r(39504),u=r(80184);const d={"& .MuiCardHeader-action":{mr:0}},h=(0,n.forwardRef)(((e,t)=>{let{border:r=!0,boxShadow:n,children:h,content:f=!0,contentClass:p="",contentSX:g={},darkTitle:m,secondary:v,shadow:y,sx:b={},title:w,...x}=e;const _=(0,i.Z)();return(0,u.jsxs)(o.Z,{ref:t,...x,sx:{border:r?"1px solid":"none",borderColor:_.palette.primary[200]+25,":hover":{boxShadow:n?y||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...b},children:[w&&(0,u.jsx)(s.Z,{sx:d,title:m?(0,u.jsx)(a.Z,{variant:"h3",children:w}):w,action:v}),w&&(0,u.jsx)(l.Z,{}),f&&(0,u.jsx)(c.Z,{sx:g,className:p,children:h}),!f&&h]})}));t.Z=h},80928:function(e,t,r){"use strict";var n=r(72791),i=r(13967),o=r(57621),s=r(9585),a=r(20890),l=r(94721),c=r(39504),u=r(80184);const d=(0,n.forwardRef)(((e,t)=>{let{children:r,content:n,contentClass:d,darkTitle:h,secondary:f,sx:p={},contentSX:g={},title:m,...v}=e;const y=(0,i.Z)();return(0,u.jsxs)(o.Z,{ref:t,sx:{border:"1px solid",borderColor:y.palette.primary.light,":hover":{boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)"},...p},...v,children:[!h&&m&&(0,u.jsx)(s.Z,{sx:{p:2.5},title:(0,u.jsx)(a.Z,{variant:"h5",children:m}),action:f}),h&&m&&(0,u.jsx)(s.Z,{sx:{p:2.5},title:(0,u.jsx)(a.Z,{variant:"h4",children:m}),action:f}),m&&(0,u.jsx)(l.Z,{sx:{opacity:1,borderColor:y.palette.primary.light}}),n&&(0,u.jsx)(c.Z,{sx:{p:2.5,...g},className:d||"",children:r}),!n&&r]})}));d.defaultProps={content:!0},t.Z=d},36454:function(e,t,r){"use strict";r.d(t,{Z:function(){return js}});var n=r(72791),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},i(e,t)};function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;function l(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(a){i={error:a}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}function c(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;const u=(e,t,r)=>{const n=t-e;return((r-e)%n+n)%n+e};function d(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=(0,n.useRef)(0),i=l((0,n.useState)(e[r.current]),2),o=i[0],s=i[1],a=(0,n.useCallback)((function(t){r.current="number"!==typeof t?u(0,e.length,r.current+1):t,s(e[r.current])}),c([e.length],l(e),!1));return[o,a]}var h=function(e){return{isEnabled:function(t){return e.some((function(e){return!!t[e]}))}}},f={measureLayout:h(["layout","layoutId","drag"]),animation:h(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:h(["exit"]),drag:h(["drag","dragControls"]),focus:h(["whileFocus"]),hover:h(["whileHover","onHoverStart","onHoverEnd"]),tap:h(["whileTap","onTap","onTapStart","onTapCancel"]),pan:h(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:h(["whileInView","onViewportEnter","onViewportLeave"])};var p=r(5646),g=(0,n.createContext)({strict:!1}),m=Object.keys(f),v=m.length;var y=(0,n.createContext)({transformPagePoint:function(e){return e},isStatic:!1,reducedMotion:"never"}),b=(0,n.createContext)({});var w=(0,n.createContext)(null),x="undefined"!==typeof document,_=x?n.useLayoutEffect:n.useEffect,E={current:null},S=!1;function k(){return!S&&function(){if(S=!0,x)if(window.matchMedia){var e=window.matchMedia("(prefers-reduced-motion)"),t=function(){return E.current=e.matches};e.addListener(t),t()}else E.current=!1}(),l((0,n.useState)(E.current),1)[0]}function C(e,t,r,i){var o=(0,n.useContext)(g),s=(0,n.useContext)(b).visualElement,a=(0,n.useContext)(w),l=function(){var e=k(),t=(0,n.useContext)(y).reducedMotion;return"never"!==t&&("always"===t||e)}(),c=(0,n.useRef)(void 0);i||(i=o.renderer),!c.current&&i&&(c.current=i(e,{visualState:t,parent:s,props:r,presenceId:null===a||void 0===a?void 0:a.id,blockInitialAnimation:!1===(null===a||void 0===a?void 0:a.initial),shouldReduceMotion:l}));var u=c.current;return _((function(){null===u||void 0===u||u.syncRender()})),(0,n.useEffect)((function(){var e;null===(e=null===u||void 0===u?void 0:u.animationState)||void 0===e||e.animateChanges()})),_((function(){return function(){return null===u||void 0===u?void 0:u.notifyUnmount()}}),[]),u}function A(e){return"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function P(e){return Array.isArray(e)}function I(e){return"string"===typeof e||P(e)}function R(e,t,r,n,i){var o;return void 0===n&&(n={}),void 0===i&&(i={}),"function"===typeof t&&(t=t(null!==r&&void 0!==r?r:e.custom,n,i)),"string"===typeof t&&(t=null===(o=e.variants)||void 0===o?void 0:o[t]),"function"===typeof t&&(t=t(null!==r&&void 0!==r?r:e.custom,n,i)),t}function O(e,t,r){var n=e.getProps();return R(n,t,null!==r&&void 0!==r?r:n.custom,function(e){var t={};return e.forEachValue((function(e,r){return t[r]=e.get()})),t}(e),function(e){var t={};return e.forEachValue((function(e,r){return t[r]=e.getVelocity()})),t}(e))}function T(e){var t;return"function"===typeof(null===(t=e.animate)||void 0===t?void 0:t.start)||I(e.initial)||I(e.animate)||I(e.whileHover)||I(e.whileDrag)||I(e.whileTap)||I(e.whileFocus)||I(e.exit)}function M(e){return Boolean(T(e)||e.variants)}function N(e){var t=function(e,t){if(T(e)){var r=e.initial,n=e.animate;return{initial:!1===r||I(r)?r:void 0,animate:I(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,n.useContext)(b)),r=t.initial,i=t.animate;return(0,n.useMemo)((function(){return{initial:r,animate:i}}),[j(r),j(i)])}function j(e){return Array.isArray(e)?e.join(" "):e}function L(e){var t=(0,n.useRef)(null);return null===t.current&&(t.current=e()),t.current}var D={hasAnimatedSinceResize:!0,hasEverUpdated:!1},$=1;var B=(0,n.createContext)({}),Z=(0,n.createContext)({});var z=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.getSnapshotBeforeUpdate=function(){return this.updateProps(),null},t.prototype.componentDidUpdate=function(){},t.prototype.updateProps=function(){var e=this.props,t=e.visualElement,r=e.props;t&&t.setProps(r)},t.prototype.render=function(){return this.props.children},t}(n.Component);function U(e){var t=e.preloadedFeatures,r=e.createVisualElement,i=e.projectionNodeConstructor,o=e.useRender,a=e.useVisualState,l=e.Component;return t&&function(e){for(var t in e)null!==e[t]&&("projectionNodeConstructor"===t?f.projectionNodeConstructor=e[t]:f[t].Component=e[t])}(t),(0,n.forwardRef)((function(e,t){var c=function(e){var t,r=e.layoutId,i=null===(t=(0,n.useContext)(B))||void 0===t?void 0:t.id;return i&&void 0!==r?i+"-"+r:r}(e);e=s(s({},e),{layoutId:c});var u=(0,n.useContext)(y),d=null,h=N(e),p=u.isStatic?void 0:L((function(){if(D.hasEverUpdated)return $++})),w=a(e,u.isStatic);return!u.isStatic&&x&&(h.visualElement=C(l,w,s(s({},u),e),r),function(e,t,r,i){var o,s=t.layoutId,a=t.layout,l=t.drag,c=t.dragConstraints,u=t.layoutScroll,d=(0,n.useContext)(Z);i&&r&&!(null===r||void 0===r?void 0:r.projection)&&(r.projection=new i(e,r.getLatestValues(),null===(o=r.parent)||void 0===o?void 0:o.projection),r.projection.setOptions({layoutId:s,layout:a,alwaysMeasureLayout:Boolean(l)||c&&A(c),visualElement:r,scheduleRender:function(){return r.scheduleRender()},animationType:"string"===typeof a?a:"both",initialPromotionConfig:d,layoutScroll:u}))}(p,e,h.visualElement,i||f.projectionNodeConstructor),d=function(e,t,r){var i=[];if((0,n.useContext)(g),!t)return null;for(var o=0;o<v;o++){var a=m[o],l=f[a],c=l.isEnabled,u=l.Component;c(e)&&u&&i.push(n.createElement(u,s({key:a},e,{visualElement:t})))}return i}(e,h.visualElement)),n.createElement(z,{visualElement:h.visualElement,props:s(s({},u),e)},d,n.createElement(b.Provider,{value:h},o(l,e,p,function(e,t,r){return(0,n.useCallback)((function(n){var i;n&&(null===(i=e.mount)||void 0===i||i.call(e,n)),t&&(n?t.mount(n):t.unmount()),r&&("function"===typeof r?r(n):A(r)&&(r.current=n))}),[t])}(w,h.visualElement,t),w,u.isStatic,h.visualElement)))}))}function F(e){function t(t,r){return void 0===r&&(r={}),U(e(t,r))}if("undefined"===typeof Proxy)return t;var r=new Map;return new Proxy(t,{get:function(e,n){return r.has(n)||r.set(n,t(n)),r.get(n)}})}var W=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","svg","switch","symbol","text","tspan","use","view"];function H(e){return"string"===typeof e&&!e.includes("-")&&!!(W.indexOf(e)>-1||/[A-Z]/.test(e))}var V={};var q=["","X","Y","Z"],Y=["transformPerspective","x","y","z"];function G(e,t){return Y.indexOf(e)-Y.indexOf(t)}["translate","scale","rotate","skew"].forEach((function(e){return q.forEach((function(t){return Y.push(e+t)}))}));var K=new Set(Y);function J(e){return K.has(e)}var Q=new Set(["originX","originY","originZ"]);function X(e){return Q.has(e)}function ee(e,t){var r=t.layout,n=t.layoutId;return J(e)||X(e)||(r||void 0!==n)&&(!!V[e]||"opacity"===e)}var te=function(e){return Boolean(null!==e&&"object"===typeof e&&e.getVelocity)},re={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function ne(e){return e.startsWith("--")}var ie=function(e,t){return t&&"number"===typeof e?t.transform(e):e};const oe=(e,t)=>r=>Math.max(Math.min(r,t),e),se=e=>e%1?Number(e.toFixed(5)):e,ae=/(-)?([\d]*\.?[\d])+/g,le=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,ce=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ue(e){return"string"===typeof e}const de=e=>({test:t=>ue(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),he=de("deg"),fe=de("%"),pe=de("px"),ge=de("vh"),me=de("vw"),ve=Object.assign(Object.assign({},fe),{parse:e=>fe.parse(e)/100,transform:e=>fe.transform(100*e)}),ye={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},be=Object.assign(Object.assign({},ye),{transform:oe(0,1)}),we=Object.assign(Object.assign({},ye),{default:1});var xe=s(s({},ye),{transform:Math.round}),_e={borderWidth:pe,borderTopWidth:pe,borderRightWidth:pe,borderBottomWidth:pe,borderLeftWidth:pe,borderRadius:pe,radius:pe,borderTopLeftRadius:pe,borderTopRightRadius:pe,borderBottomRightRadius:pe,borderBottomLeftRadius:pe,width:pe,maxWidth:pe,height:pe,maxHeight:pe,size:pe,top:pe,right:pe,bottom:pe,left:pe,padding:pe,paddingTop:pe,paddingRight:pe,paddingBottom:pe,paddingLeft:pe,margin:pe,marginTop:pe,marginRight:pe,marginBottom:pe,marginLeft:pe,rotate:he,rotateX:he,rotateY:he,rotateZ:he,scale:we,scaleX:we,scaleY:we,scaleZ:we,skew:he,skewX:he,skewY:he,distance:pe,translateX:pe,translateY:pe,translateZ:pe,x:pe,y:pe,z:pe,perspective:pe,transformPerspective:pe,opacity:be,originX:ve,originY:ve,originZ:pe,zIndex:xe,fillOpacity:be,strokeOpacity:be,numOctaves:xe};function Ee(e,t,r,n){var i,o=e.style,s=e.vars,a=e.transform,l=e.transformKeys,c=e.transformOrigin;l.length=0;var u=!1,d=!1,h=!0;for(var f in t){var p=t[f];if(ne(f))s[f]=p;else{var g=_e[f],m=ie(p,g);if(J(f)){if(u=!0,a[f]=m,l.push(f),!h)continue;p!==(null!==(i=g.default)&&void 0!==i?i:0)&&(h=!1)}else X(f)?(c[f]=m,d=!0):o[f]=m}}u?o.transform=function(e,t,r,n){var i=e.transform,o=e.transformKeys,s=t.enableHardwareAcceleration,a=void 0===s||s,l=t.allowTransformNone,c=void 0===l||l,u="";o.sort(G);for(var d=!1,h=o.length,f=0;f<h;f++){var p=o[f];u+="".concat(re[p]||p,"(").concat(i[p],") "),"z"===p&&(d=!0)}return!d&&a?u+="translateZ(0)":u=u.trim(),n?u=n(i,r?"":u):c&&r&&(u="none"),u}(e,r,h,n):n?o.transform=n({},""):!t.transform&&o.transform&&(o.transform="none"),d&&(o.transformOrigin=function(e){var t=e.originX,r=void 0===t?"50%":t,n=e.originY,i=void 0===n?"50%":n,o=e.originZ,s=void 0===o?0:o;return"".concat(r," ").concat(i," ").concat(s)}(c))}var Se=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}};function ke(e,t,r){for(var n in t)te(t[n])||ee(n,r)||(e[n]=t[n])}function Ce(e,t,r){var i={};return ke(i,e.style||{},e),Object.assign(i,function(e,t,r){var i=e.transformTemplate;return(0,n.useMemo)((function(){var e={style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}};Ee(e,t,{enableHardwareAcceleration:!r},i);var n=e.style;return s(s({},e.vars),n)}),[t])}(e,t,r)),e.transformValues&&(i=e.transformValues(i)),i}function Ae(e,t,r){var n={},i=Ce(e,t,r);return Boolean(e.drag)&&!1!==e.dragListener&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-".concat("x"===e.drag?"y":"x")),n.style=i,n}var Pe=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover","whileInView","onViewportEnter","onViewportLeave","viewport","layoutScroll"]);function Ie(e){return Pe.has(e)}var Re,Oe=function(e){return!Ie(e)};try{(Re=require("@emotion/is-prop-valid").default)&&(Oe=function(e){return e.startsWith("on")?!Ie(e):Re(e)})}catch(Ls){}function Te(e,t,r){return"string"===typeof e?e:pe.transform(t+r*e)}var Me={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ne={offset:"strokeDashoffset",array:"strokeDasharray"};function je(e,t,r,n){var i=t.attrX,o=t.attrY,s=t.originX,l=t.originY,c=t.pathLength,u=t.pathSpacing,d=void 0===u?1:u,h=t.pathOffset,f=void 0===h?0:h;Ee(e,a(t,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]),r,n),e.attrs=e.style,e.style={};var p=e.attrs,g=e.style,m=e.dimensions;p.transform&&(m&&(g.transform=p.transform),delete p.transform),m&&(void 0!==s||void 0!==l||g.transform)&&(g.transformOrigin=function(e,t,r){var n=Te(t,e.x,e.width),i=Te(r,e.y,e.height);return"".concat(n," ").concat(i)}(m,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==i&&(p.x=i),void 0!==o&&(p.y=o),void 0!==c&&function(e,t,r,n,i){void 0===r&&(r=1),void 0===n&&(n=0),void 0===i&&(i=!0),e.pathLength=1;var o=i?Me:Ne;e[o.offset]=pe.transform(-n);var s=pe.transform(t),a=pe.transform(r);e[o.array]="".concat(s," ").concat(a)}(p,c,d,f,!1)}var Le=function(){return s(s({},{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}),{attrs:{}})};function De(e,t){var r=(0,n.useMemo)((function(){var r=Le();return je(r,t,{enableHardwareAcceleration:!1},e.transformTemplate),s(s({},r.attrs),{style:s({},r.style)})}),[t]);if(e.style){var i={};ke(i,e.style,e),r.style=s(s({},i),r.style)}return r}function $e(e){void 0===e&&(e=!1);return function(t,r,i,o,a,l){var c=a.latestValues,u=(H(t)?De:Ae)(r,c,l),d=function(e,t,r){var n={};for(var i in e)(Oe(i)||!0===r&&Ie(i)||!t&&!Ie(i)||e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}(r,"string"===typeof t,e),h=s(s(s({},d),u),{ref:o});return i&&(h["data-projection-id"]=i),(0,n.createElement)(t,h)}}var Be=/([a-z])([A-Z])/g,Ze=function(e){return e.replace(Be,"$1-$2").toLowerCase()};function ze(e,t,r,n){var i=t.style,o=t.vars;for(var s in Object.assign(e.style,i,n&&n.getProjectionStyles(r)),o)e.style.setProperty(s,o[s])}var Ue=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function Fe(e,t,r,n){for(var i in ze(e,t,void 0,n),t.attrs)e.setAttribute(Ue.has(i)?i:Ze(i),t.attrs[i])}function We(e){var t=e.style,r={};for(var n in t)(te(t[n])||ee(n,e))&&(r[n]=t[n]);return r}function He(e){var t=We(e);for(var r in e){if(te(e[r]))t["x"===r||"y"===r?"attr"+r.toUpperCase():r]=e[r]}return t}function Ve(e){return"object"===typeof e&&"function"===typeof e.start}var qe=function(e){return Array.isArray(e)},Ye=function(e){return qe(e)?e[e.length-1]||0:e};function Ge(e){var t,r=te(e)?e.get():e;return t=r,Boolean(t&&"object"===typeof t&&t.mix&&t.toValue)?r.toValue():r}function Ke(e,t,r,n){var i=e.scrapeMotionValuesFromProps,o=e.createRenderState,s=e.onMount,a={latestValues:Qe(t,r,n,i),renderState:o()};return s&&(a.mount=function(e){return s(t,e,a)}),a}var Je=function(e){return function(t,r){var i=(0,n.useContext)(b),o=(0,n.useContext)(w);return r?Ke(e,t,i,o):L((function(){return Ke(e,t,i,o)}))}};function Qe(e,t,r,n){var i={},o=!1===(null===r||void 0===r?void 0:r.initial),s=n(e);for(var l in s)i[l]=Ge(s[l]);var c=e.initial,u=e.animate,d=T(e),h=M(e);t&&h&&!d&&!1!==e.inherit&&(null!==c&&void 0!==c||(c=t.initial),null!==u&&void 0!==u||(u=t.animate));var f=o||!1===c,p=f?u:c;p&&"boolean"!==typeof p&&!Ve(p)&&(Array.isArray(p)?p:[p]).forEach((function(t){var r=R(e,t);if(r){var n=r.transitionEnd;r.transition;var o=a(r,["transitionEnd","transition"]);for(var s in o){var l=o[s];if(Array.isArray(l))l=l[f?l.length-1:0];null!==l&&(i[s]=l)}for(var s in n)i[s]=n[s]}}));return i}var Xe,et={useVisualState:Je({scrapeMotionValuesFromProps:He,createRenderState:Le,onMount:function(e,t,r){var n=r.renderState,i=r.latestValues;try{n.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(o){n.dimensions={x:0,y:0,width:0,height:0}}je(n,i,{enableHardwareAcceleration:!1},e.transformTemplate),Fe(t,n)}})},tt={useVisualState:Je({scrapeMotionValuesFromProps:We,createRenderState:Se})};function rt(e,t,r,n){return void 0===n&&(n={passive:!0}),e.addEventListener(t,r,n),function(){return e.removeEventListener(t,r)}}function nt(e,t,r,i){(0,n.useEffect)((function(){var n=e.current;if(r&&n)return rt(n,t,r,i)}),[e,t,r,i])}function it(e){return"undefined"!==typeof PointerEvent&&e instanceof PointerEvent?!("mouse"!==e.pointerType):e instanceof MouseEvent}function ot(e){return!!e.touches}!function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"}(Xe||(Xe={}));var st={pageX:0,pageY:0};function at(e,t){void 0===t&&(t="page");var r=e.touches[0]||e.changedTouches[0]||st;return{x:r[t+"X"],y:r[t+"Y"]}}function lt(e,t){return void 0===t&&(t="page"),{x:e[t+"X"],y:e[t+"Y"]}}function ct(e,t){return void 0===t&&(t="page"),{point:ot(e)?at(e,t):lt(e,t)}}var ut=function(e,t){void 0===t&&(t=!1);var r,n=function(t){return e(t,ct(t))};return t?(r=n,function(e){var t=e instanceof MouseEvent;(!t||t&&0===e.button)&&r(e)}):n},dt={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},ht={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function ft(e){return x&&null===window.onpointerdown?e:x&&null===window.ontouchstart?ht[e]:x&&null===window.onmousedown?dt[e]:e}function pt(e,t,r,n){return rt(e,ft(t),ut(r,"pointerdown"===t),n)}function gt(e,t,r,n){return nt(e,ft(t),r&&ut(r,"pointerdown"===t),n)}function mt(e){var t=null;return function(){return null===t&&(t=e,function(){t=null})}}var vt=mt("dragHorizontal"),yt=mt("dragVertical");function bt(e){var t=!1;if("y"===e)t=yt();else if("x"===e)t=vt();else{var r=vt(),n=yt();r&&n?t=function(){r(),n()}:(r&&r(),n&&n())}return t}function wt(){var e=bt(!0);return!e||(e(),!1)}function xt(e,t,r){return function(n,i){var o;it(n)&&!wt()&&(null===(o=e.animationState)||void 0===o||o.setActive(Xe.Hover,t),null===r||void 0===r||r(n,i))}}var _t=function(e,t){return!!t&&(e===t||_t(e,t.parentElement))};function Et(e){return(0,n.useEffect)((function(){return function(){return e()}}),[])}const St=(e,t)=>r=>t(e(r)),kt=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(St)};new Set;var Ct=new WeakMap,At=new WeakMap,Pt=function(e){var t;null===(t=Ct.get(e.target))||void 0===t||t(e)},It=function(e){e.forEach(Pt)};function Rt(e,t,r){var n=function(e){var t=e.root,r=a(e,["root"]),n=t||document;At.has(n)||At.set(n,{});var i=At.get(n),o=JSON.stringify(r);return i[o]||(i[o]=new IntersectionObserver(It,s({root:t},r))),i[o]}(t);return Ct.set(e,r),n.observe(e),function(){Ct.delete(e),n.unobserve(e)}}var Ot={some:0,all:1};function Tt(e,t,r,i){var o=i.root,s=i.margin,a=i.amount,l=void 0===a?"some":a,c=i.once;(0,n.useEffect)((function(){if(e){var n={root:null===o||void 0===o?void 0:o.current,rootMargin:s,threshold:"number"===typeof l?l:Ot[l]};return Rt(r.getInstance(),n,(function(e){var n,i=e.isIntersecting;if(t.isInView!==i&&(t.isInView=i,!c||i||!t.hasEnteredView)){i&&(t.hasEnteredView=!0),null===(n=r.animationState)||void 0===n||n.setActive(Xe.InView,i);var o=r.getProps(),s=i?o.onViewportEnter:o.onViewportLeave;null===s||void 0===s||s(e)}}))}}),[e,o,s,l])}function Mt(e,t,r,i){var o=i.fallback,s=void 0===o||o;(0,n.useEffect)((function(){e&&s&&requestAnimationFrame((function(){var e;t.hasEnteredView=!0;var n=r.getProps().onViewportEnter;null===n||void 0===n||n(null),null===(e=r.animationState)||void 0===e||e.setActive(Xe.InView,!0)}))}),[e])}var Nt=function(e){return function(t){return e(t),null}},jt={inView:Nt((function(e){var t=e.visualElement,r=e.whileInView,i=e.onViewportEnter,o=e.onViewportLeave,s=e.viewport,a=void 0===s?{}:s,l=(0,n.useRef)({hasEnteredView:!1,isInView:!1}),c=Boolean(r||i||o);a.once&&l.current.hasEnteredView&&(c=!1),("undefined"===typeof IntersectionObserver?Mt:Tt)(c,l.current,t,a)})),tap:Nt((function(e){var t=e.onTap,r=e.onTapStart,i=e.onTapCancel,o=e.whileTap,s=e.visualElement,a=t||r||i||o,l=(0,n.useRef)(!1),c=(0,n.useRef)(null),u={passive:!(r||t||i||g)};function d(){var e;null===(e=c.current)||void 0===e||e.call(c),c.current=null}function h(){var e;return d(),l.current=!1,null===(e=s.animationState)||void 0===e||e.setActive(Xe.Tap,!1),!wt()}function f(e,r){h()&&(_t(s.getInstance(),e.target)?null===t||void 0===t||t(e,r):null===i||void 0===i||i(e,r))}function p(e,t){h()&&(null===i||void 0===i||i(e,t))}function g(e,t){var n;d(),l.current||(l.current=!0,c.current=kt(pt(window,"pointerup",f,u),pt(window,"pointercancel",p,u)),null===(n=s.animationState)||void 0===n||n.setActive(Xe.Tap,!0),null===r||void 0===r||r(e,t))}gt(s,"pointerdown",a?g:void 0,u),Et(d)})),focus:Nt((function(e){var t=e.whileFocus,r=e.visualElement;nt(r,"focus",t?function(){var e;null===(e=r.animationState)||void 0===e||e.setActive(Xe.Focus,!0)}:void 0),nt(r,"blur",t?function(){var e;null===(e=r.animationState)||void 0===e||e.setActive(Xe.Focus,!1)}:void 0)})),hover:Nt((function(e){var t=e.onHoverStart,r=e.onHoverEnd,n=e.whileHover,i=e.visualElement;gt(i,"pointerenter",t||n?xt(i,!0,t):void 0,{passive:!t}),gt(i,"pointerleave",r||n?xt(i,!1,r):void 0,{passive:!r})}))},Lt=0,Dt=function(){return Lt++};function $t(){var e=(0,n.useContext)(w);if(null===e)return[!0,null];var t=e.isPresent,r=e.onExitComplete,i=e.register,o=L(Dt);(0,n.useEffect)((function(){return i(o)}),[]);return!t&&r?[!1,function(){return null===r||void 0===r?void 0:r(o)}]:[!0]}function Bt(e,t){if(!Array.isArray(t))return!1;var r=t.length;if(r!==e.length)return!1;for(var n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}const Zt=(e,t,r)=>Math.min(Math.max(r,e),t),zt=.001;function Ut(e){let t,r,{duration:n=800,bounce:i=.25,velocity:o=0,mass:s=1}=e;(0,p.K)(n<=1e4,"Spring duration must be 10 seconds or less");let a=1-i;a=Zt(.05,1,a),n=Zt(.01,10,n/1e3),a<1?(t=e=>{const t=e*a,r=t*n,i=t-o,s=Ft(e,a),l=Math.exp(-r);return zt-i/s*l},r=e=>{const r=e*a*n,i=r*o+o,s=Math.pow(a,2)*Math.pow(e,2)*n,l=Math.exp(-r),c=Ft(Math.pow(e,2),a);return(-t(e)+zt>0?-1:1)*((i-s)*l)/c}):(t=e=>Math.exp(-e*n)*((e-o)*n+1)-.001,r=e=>Math.exp(-e*n)*(n*n*(o-e)));const l=function(e,t,r){let n=r;for(let i=1;i<12;i++)n-=e(n)/t(n);return n}(t,r,5/n);if(n*=1e3,isNaN(l))return{stiffness:100,damping:10,duration:n};{const e=Math.pow(l,2)*s;return{stiffness:e,damping:2*a*Math.sqrt(s*e),duration:n}}}function Ft(e,t){return e*Math.sqrt(1-t*t)}const Wt=["duration","bounce"],Ht=["stiffness","damping","mass"];function Vt(e,t){return t.some((t=>void 0!==e[t]))}function qt(e){var{from:t=0,to:r=1,restSpeed:n=2,restDelta:i}=e,o=a(e,["from","to","restSpeed","restDelta"]);const s={done:!1,value:t};let{stiffness:l,damping:c,mass:u,velocity:d,duration:h,isResolvedFromDuration:f}=function(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Vt(e,Ht)&&Vt(e,Wt)){const r=Ut(e);t=Object.assign(Object.assign(Object.assign({},t),r),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}(o),p=Yt,g=Yt;function m(){const e=d?-d/1e3:0,n=r-t,o=c/(2*Math.sqrt(l*u)),s=Math.sqrt(l/u)/1e3;if(void 0===i&&(i=Math.min(Math.abs(r-t)/100,.4)),o<1){const t=Ft(s,o);p=i=>{const a=Math.exp(-o*s*i);return r-a*((e+o*s*n)/t*Math.sin(t*i)+n*Math.cos(t*i))},g=r=>{const i=Math.exp(-o*s*r);return o*s*i*(Math.sin(t*r)*(e+o*s*n)/t+n*Math.cos(t*r))-i*(Math.cos(t*r)*(e+o*s*n)-t*n*Math.sin(t*r))}}else if(1===o)p=t=>r-Math.exp(-s*t)*(n+(e+s*n)*t);else{const t=s*Math.sqrt(o*o-1);p=i=>{const a=Math.exp(-o*s*i),l=Math.min(t*i,300);return r-a*((e+o*s*n)*Math.sinh(l)+t*n*Math.cosh(l))/t}}}return m(),{next:e=>{const t=p(e);if(f)s.done=e>=h;else{const o=1e3*g(e),a=Math.abs(o)<=n,l=Math.abs(r-t)<=i;s.done=a&&l}return s.value=s.done?r:t,s},flipTarget:()=>{d=-d,[t,r]=[r,t],m()}}}qt.needsInterpolation=(e,t)=>"string"===typeof e||"string"===typeof t;const Yt=e=>0,Gt=(e,t,r)=>{const n=t-e;return 0===n?1:(r-e)/n},Kt=(e,t,r)=>-r*e+r*t+e,Jt=(e,t)=>r=>Boolean(ue(r)&&ce.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),Qt=(e,t,r)=>n=>{if(!ue(n))return n;const[i,o,s,a]=n.match(ae);return{[e]:parseFloat(i),[t]:parseFloat(o),[r]:parseFloat(s),alpha:void 0!==a?parseFloat(a):1}},Xt=oe(0,255),er=Object.assign(Object.assign({},ye),{transform:e=>Math.round(Xt(e))}),tr={test:Jt("rgb","red"),parse:Qt("red","green","blue"),transform:e=>{let{red:t,green:r,blue:n,alpha:i=1}=e;return"rgba("+er.transform(t)+", "+er.transform(r)+", "+er.transform(n)+", "+se(be.transform(i))+")"}};const rr={test:Jt("#"),parse:function(e){let t="",r="",n="",i="";return e.length>5?(t=e.substr(1,2),r=e.substr(3,2),n=e.substr(5,2),i=e.substr(7,2)):(t=e.substr(1,1),r=e.substr(2,1),n=e.substr(3,1),i=e.substr(4,1),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}},transform:tr.transform},nr={test:Jt("hsl","hue"),parse:Qt("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:r,lightness:n,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+fe.transform(se(r))+", "+fe.transform(se(n))+", "+se(be.transform(i))+")"}};function ir(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function or(e){let{hue:t,saturation:r,lightness:n,alpha:i}=e;t/=360,r/=100,n/=100;let o=0,s=0,a=0;if(r){const e=n<.5?n*(1+r):n+r-n*r,i=2*n-e;o=ir(i,e,t+1/3),s=ir(i,e,t),a=ir(i,e,t-1/3)}else o=s=a=n;return{red:Math.round(255*o),green:Math.round(255*s),blue:Math.round(255*a),alpha:i}}const sr=(e,t,r)=>{const n=e*e,i=t*t;return Math.sqrt(Math.max(0,r*(i-n)+n))},ar=[rr,tr,nr],lr=e=>ar.find((t=>t.test(e))),cr=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,ur=(e,t)=>{let r=lr(e),n=lr(t);(0,p.k)(!!r,cr(e)),(0,p.k)(!!n,cr(t));let i=r.parse(e),o=n.parse(t);r===nr&&(i=or(i),r=tr),n===nr&&(o=or(o),n=tr);const s=Object.assign({},i);return e=>{for(const t in s)"alpha"!==t&&(s[t]=sr(i[t],o[t],e));return s.alpha=Kt(i.alpha,o.alpha,e),r.transform(s)}},dr={test:e=>tr.test(e)||rr.test(e)||nr.test(e),parse:e=>tr.test(e)?tr.parse(e):nr.test(e)?nr.parse(e):rr.parse(e),transform:e=>ue(e)?e:e.hasOwnProperty("red")?tr.transform(e):nr.transform(e)},hr="${c}",fr="${n}";function pr(e){"number"===typeof e&&(e=`${e}`);const t=[];let r=0;const n=e.match(le);n&&(r=n.length,e=e.replace(le,hr),t.push(...n.map(dr.parse)));const i=e.match(ae);return i&&(e=e.replace(ae,fr),t.push(...i.map(ye.parse))),{values:t,numColors:r,tokenised:e}}function gr(e){return pr(e).values}function mr(e){const{values:t,numColors:r,tokenised:n}=pr(e),i=t.length;return e=>{let t=n;for(let n=0;n<i;n++)t=t.replace(n<r?hr:fr,n<r?dr.transform(e[n]):se(e[n]));return t}}const vr=e=>"number"===typeof e?0:e;const yr={test:function(e){var t,r,n,i;return isNaN(e)&&ue(e)&&(null!==(r=null===(t=e.match(ae))||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(i=null===(n=e.match(le))||void 0===n?void 0:n.length)&&void 0!==i?i:0)>0},parse:gr,createTransformer:mr,getAnimatableNone:function(e){const t=gr(e);return mr(e)(t.map(vr))}},br=e=>"number"===typeof e;function wr(e,t){return br(e)?r=>Kt(e,t,r):dr.test(e)?ur(e,t):Sr(e,t)}const xr=(e,t)=>{const r=[...e],n=r.length,i=e.map(((e,r)=>wr(e,t[r])));return e=>{for(let t=0;t<n;t++)r[t]=i[t](e);return r}},_r=(e,t)=>{const r=Object.assign(Object.assign({},e),t),n={};for(const i in r)void 0!==e[i]&&void 0!==t[i]&&(n[i]=wr(e[i],t[i]));return e=>{for(const t in n)r[t]=n[t](e);return r}};function Er(e){const t=yr.parse(e),r=t.length;let n=0,i=0,o=0;for(let s=0;s<r;s++)n||"number"===typeof t[s]?n++:void 0!==t[s].hue?o++:i++;return{parsed:t,numNumbers:n,numRGB:i,numHSL:o}}const Sr=(e,t)=>{const r=yr.createTransformer(t),n=Er(e),i=Er(t);return n.numHSL===i.numHSL&&n.numRGB===i.numRGB&&n.numNumbers>=i.numNumbers?kt(xr(n.parsed,i.parsed),r):((0,p.K)(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r=>`${r>0?t:e}`)},kr=(e,t)=>r=>Kt(e,t,r);function Cr(e,t,r){const n=[],i=r||("number"===typeof(o=e[0])?kr:"string"===typeof o?dr.test(o)?ur:Sr:Array.isArray(o)?xr:"object"===typeof o?_r:void 0);var o;const s=e.length-1;for(let a=0;a<s;a++){let r=i(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]:t;r=kt(e,r)}n.push(r)}return n}function Ar(e,t){let[r,n]=e,[i]=t;return e=>i(Gt(r,n,e))}function Pr(e,t){const r=e.length,n=r-1;return i=>{let o=0,s=!1;if(i<=e[0]?s=!0:i>=e[n]&&(o=n-1,s=!0),!s){let t=1;for(;t<r&&!(e[t]>i||t===n);t++);o=t-1}const a=Gt(e[o],e[o+1],i);return t[o](a)}}function Ir(e,t){let{clamp:r=!0,ease:n,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;(0,p.k)(o===t.length,"Both input and output ranges must be the same length"),(0,p.k)(!n||!Array.isArray(n)||n.length===o-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[o-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const s=Cr(t,n,i),a=2===o?Ar(e,s):Pr(e,s);return r?t=>a(Zt(e[0],e[o-1],t)):a}const Rr=e=>t=>1-e(1-t),Or=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Tr=e=>t=>t*t*((e+1)*t-e),Mr=e=>e,Nr=(jr=2,e=>Math.pow(e,jr));var jr;const Lr=Rr(Nr),Dr=Or(Nr),$r=e=>1-Math.sin(Math.acos(e)),Br=Rr($r),Zr=Or(Br),zr=Tr(1.525),Ur=Rr(zr),Fr=Or(zr),Wr=(e=>{const t=Tr(e);return e=>(e*=2)<1?.5*t(e):.5*(2-Math.pow(2,-10*(e-1)))})(1.525),Hr=e=>{if(1===e||0===e)return e;const t=e*e;return e<.36363636363636365?7.5625*t:e<.7272727272727273?9.075*t-9.9*e+3.4:e<.9?12.066481994459833*t-19.63545706371191*e+8.898060941828255:10.8*e*e-20.52*e+10.72},Vr=Rr(Hr);function qr(e,t){return e.map((()=>t||Dr)).splice(0,e.length-1)}function Yr(e){let{from:t=0,to:r=1,ease:n,offset:i,duration:o=300}=e;const s={done:!1,value:t},a=Array.isArray(r)?r:[t,r],l=function(e,t){return e.map((e=>e*t))}(i&&i.length===a.length?i:function(e){const t=e.length;return e.map(((e,r)=>0!==r?r/(t-1):0))}(a),o);function c(){return Ir(l,a,{ease:Array.isArray(n)?n:qr(a,n)})}let u=c();return{next:e=>(s.value=u(e),s.done=e>=o,s),flipTarget:()=>{a.reverse(),u=c()}}}const Gr={keyframes:Yr,spring:qt,decay:function(e){let{velocity:t=0,from:r=0,power:n=.8,timeConstant:i=350,restDelta:o=.5,modifyTarget:s}=e;const a={done:!1,value:r};let l=n*t;const c=r+l,u=void 0===s?c:s(c);return u!==c&&(l=u-r),{next:e=>{const t=-l*Math.exp(-e/i);return a.done=!(t>o||t<-o),a.value=a.done?u:u+t,a},flipTarget:()=>{}}}};const Kr=1/60*1e3,Jr="undefined"!==typeof performance?()=>performance.now():()=>Date.now(),Qr="undefined"!==typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout((()=>e(Jr())),Kr);let Xr=!0,en=!1,tn=!1;const rn={delta:0,timestamp:0},nn=["read","update","preRender","render","postRender"],on=nn.reduce(((e,t)=>(e[t]=function(e){let t=[],r=[],n=0,i=!1,o=!1;const s=new WeakSet,a={schedule:function(e){const o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,a=o?t:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&s.add(e),-1===a.indexOf(e)&&(a.push(e),o&&i&&(n=t.length)),e},cancel:e=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1),s.delete(e)},process:l=>{if(i)o=!0;else{if(i=!0,[t,r]=[r,t],r.length=0,n=t.length,n)for(let r=0;r<n;r++){const n=t[r];n(l),s.has(n)&&(a.schedule(n),e())}i=!1,o&&(o=!1,a.process(l))}}};return a}((()=>en=!0)),e)),{}),sn=nn.reduce(((e,t)=>{const r=on[t];return e[t]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return en||dn(),r.schedule(e,t,n)},e}),{}),an=nn.reduce(((e,t)=>(e[t]=on[t].cancel,e)),{}),ln=nn.reduce(((e,t)=>(e[t]=()=>on[t].process(rn),e)),{}),cn=e=>on[e].process(rn),un=e=>{en=!1,rn.delta=Xr?Kr:Math.max(Math.min(e-rn.timestamp,40),1),rn.timestamp=e,tn=!0,nn.forEach(cn),tn=!1,en&&(Xr=!1,Qr(un))},dn=()=>{en=!0,Xr=!0,tn||Qr(un)},hn=()=>rn;var fn=sn;function pn(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e-t-r}const gn=e=>{const t=t=>{let{delta:r}=t;return e(r)};return{start:()=>fn.update(t,!0),stop:()=>an.update(t)}};function mn(e){var t,r,{from:n,autoplay:i=!0,driver:o=gn,elapsed:s=0,repeat:l=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:h,onComplete:f,onRepeat:p,onUpdate:g}=e,m=a(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let v,y,b,{to:w}=m,x=0,_=m.duration,E=!1,S=!0;const k=function(e){if(Array.isArray(e.to))return Yr;if(Gr[e.type])return Gr[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Yr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?qt:Yr}(m);(null===(r=(t=k).needsInterpolation)||void 0===r?void 0:r.call(t,n,w))&&(b=Ir([0,100],[n,w],{clamp:!1}),n=0,w=100);const C=k(Object.assign(Object.assign({},m),{from:n,to:w}));function A(){x++,"reverse"===c?(S=x%2===0,s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n?pn(t+-e,t,r):t-(e-t)+r}(s,_,u,S)):(s=pn(s,_,u),"mirror"===c&&C.flipTarget()),E=!1,p&&p()}function P(e){if(S||(e=-e),s+=e,!E){const e=C.next(Math.max(0,s));y=e.value,b&&(y=b(y)),E=S?e.done:s<=0}null===g||void 0===g||g(y),E&&(0===x&&(null!==_&&void 0!==_||(_=s)),x<l?function(e,t,r,n){return n?e>=t+r:e<=-r}(s,_,u,S)&&A():(v.stop(),f&&f()))}return i&&(null===d||void 0===d||d(),v=o(P),v.start()),{stop:()=>{null===h||void 0===h||h(),v.stop()}}}function vn(e,t){return t?e*(1e3/t):0}var yn=function(e){return 1e3*e};const bn=(e,t)=>1-3*t+3*e,wn=(e,t)=>3*t-6*e,xn=e=>3*e,_n=(e,t,r)=>((bn(t,r)*e+wn(t,r))*e+xn(t))*e,En=(e,t,r)=>3*bn(t,r)*e*e+2*wn(t,r)*e+xn(t);const Sn=.1;function kn(e,t,r,n){if(e===t&&r===n)return Mr;const i=new Float32Array(11);for(let s=0;s<11;++s)i[s]=_n(s*Sn,e,r);function o(t){let n=0,o=1;for(;10!==o&&i[o]<=t;++o)n+=Sn;--o;const s=n+(t-i[o])/(i[o+1]-i[o])*Sn,a=En(s,e,r);return a>=.001?function(e,t,r,n){for(let i=0;i<8;++i){const i=En(t,r,n);if(0===i)return t;t-=(_n(t,r,n)-e)/i}return t}(t,s,e,r):0===a?s:function(e,t,r,n,i){let o,s,a=0;do{s=t+(r-t)/2,o=_n(s,n,i)-e,o>0?r=s:t=s}while(Math.abs(o)>1e-7&&++a<10);return s}(t,n,n+Sn,e,r)}return e=>0===e||1===e?e:_n(o(e),t,n)}var Cn={linear:Mr,easeIn:Nr,easeInOut:Dr,easeOut:Lr,circIn:$r,circInOut:Zr,circOut:Br,backIn:zr,backInOut:Fr,backOut:Ur,anticipate:Wr,bounceIn:Vr,bounceInOut:e=>e<.5?.5*(1-Hr(1-2*e)):.5*Hr(2*e-1)+.5,bounceOut:Hr},An=function(e){if(Array.isArray(e)){(0,p.k)(4===e.length,"Cubic bezier arrays must contain four numerical values.");var t=l(e,4);return kn(t[0],t[1],t[2],t[3])}return"string"===typeof e?((0,p.k)(void 0!==Cn[e],"Invalid easing type '".concat(e,"'")),Cn[e]):e},Pn=function(e,t){return"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!yr.test(t)||t.startsWith("url(")))},In=function(){return{type:"spring",stiffness:500,damping:25,restSpeed:10}},Rn=function(e){return{type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}},On=function(){return{type:"keyframes",ease:"linear",duration:.3}},Tn=function(e){return{type:"keyframes",duration:.8,values:e}},Mn={x:In,y:In,z:In,rotate:In,rotateX:In,rotateY:In,rotateZ:In,scaleX:Rn,scaleY:Rn,scale:Rn,opacity:On,backgroundColor:On,color:On,default:Rn};const Nn=new Set(["brightness","contrast","saturate","opacity"]);function jn(e){let[t,r]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[n]=r.match(ae)||[];if(!n)return e;const i=r.replace(n,"");let o=Nn.has(t)?1:0;return n!==r&&(o*=100),t+"("+o+i+")"}const Ln=/([a-z-]*)\(.*?\)/g,Dn=Object.assign(Object.assign({},yr),{getAnimatableNone:e=>{const t=e.match(Ln);return t?t.map(jn).join(" "):e}});var $n=s(s({},_e),{color:dr,backgroundColor:dr,outlineColor:dr,fill:dr,stroke:dr,borderColor:dr,borderTopColor:dr,borderRightColor:dr,borderBottomColor:dr,borderLeftColor:dr,filter:Dn,WebkitFilter:Dn}),Bn=function(e){return $n[e]};function Zn(e,t){var r,n=Bn(e);return n!==Dn&&(n=yr),null===(r=n.getAnimatableNone)||void 0===r?void 0:r.call(n,t)}var zn=!1;var Un=!1;function Fn(e){var t=e.ease,r=e.times,n=e.yoyo,i=e.flip,o=e.loop,l=a(e,["ease","times","yoyo","flip","loop"]),c=s({},l);return r&&(c.offset=r),l.duration&&(c.duration=yn(l.duration)),l.repeatDelay&&(c.repeatDelay=yn(l.repeatDelay)),t&&(c.ease=function(e){return Array.isArray(e)&&"number"!==typeof e[0]}(t)?t.map(An):An(t)),"tween"===l.type&&(c.type="keyframes"),(n||o||i)&&((0,p.K)(!Un,"yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."),Un=!0,n?c.repeatType="reverse":o?c.repeatType="loop":i&&(c.repeatType="mirror"),c.repeat=o||n||i||l.repeat),"spring"!==l.type&&(c.type="keyframes"),c}function Wn(e,t,r){var n;return Array.isArray(t.to)&&(null!==(n=e.duration)&&void 0!==n||(e.duration=.8)),function(e){Array.isArray(e.to)&&null===e.to[0]&&(e.to=c([],l(e.to),!1),e.to[0]=e.from)}(t),function(e){e.when,e.delay,e.delayChildren,e.staggerChildren,e.staggerDirection,e.repeat,e.repeatType,e.repeatDelay,e.from;var t=a(e,["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(t).length}(e)||(e=s(s({},e),function(e,t){var r;return r=qe(t)?Tn:Mn[e]||Mn.default,s({to:t},r(t))}(r,t.to))),s(s({},t),Fn(e))}function Hn(e,t,r,n,i){var o,a=Yn(n,e),l=null!==(o=a.from)&&void 0!==o?o:t.get(),c=Pn(e,r);"none"===l&&c&&"string"===typeof r?l=Zn(e,r):Vn(l)&&"string"===typeof r?l=qn(r):!Array.isArray(r)&&Vn(r)&&"string"===typeof l&&(r=qn(l));var u=Pn(e,l);return(0,p.K)(u===c,"You are trying to animate ".concat(e,' from "').concat(l,'" to "').concat(r,'". ').concat(l," is not an animatable value - to enable this animation set ").concat(l," to a value animatable to ").concat(r," via the `style` property.")),u&&c&&!1!==a.type?function(){var n={from:l,to:r,velocity:t.getVelocity(),onComplete:i,onUpdate:function(e){return t.set(e)}};return"inertia"===a.type||"decay"===a.type?function(e){let t,{from:r=0,velocity:n=0,min:i,max:o,power:s=.8,timeConstant:a=750,bounceStiffness:l=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:d,driver:h,onUpdate:f,onComplete:p,onStop:g}=e;function m(e){return void 0!==i&&e<i||void 0!==o&&e>o}function v(e){return void 0===i?o:void 0===o||Math.abs(i-e)<Math.abs(o-e)?i:o}function y(e){null===t||void 0===t||t.stop(),t=mn(Object.assign(Object.assign({},e),{driver:h,onUpdate:t=>{var r;null===f||void 0===f||f(t),null===(r=e.onUpdate)||void 0===r||r.call(e,t)},onComplete:p,onStop:g}))}function b(e){y(Object.assign({type:"spring",stiffness:l,damping:c,restDelta:u},e))}if(m(r))b({from:r,velocity:n,to:v(r)});else{let e=s*n+r;"undefined"!==typeof d&&(e=d(e));const t=v(e),o=t===i?-1:1;let l,c;const h=e=>{l=c,c=e,n=vn(e-l,hn().delta),(1===o&&e>t||-1===o&&e<t)&&b({from:e,to:t,velocity:n})};y({type:"decay",from:r,velocity:n,timeConstant:a,power:s,restDelta:u,modifyTarget:d,onUpdate:m(e)?h:void 0})}return{stop:()=>null===t||void 0===t?void 0:t.stop()}}(s(s({},n),a)):mn(s(s({},Wn(a,n,e)),{onUpdate:function(e){var t;n.onUpdate(e),null===(t=a.onUpdate)||void 0===t||t.call(a,e)},onComplete:function(){var e;n.onComplete(),null===(e=a.onComplete)||void 0===e||e.call(a)}}))}:function(){var e,n,o=Ye(r);return t.set(o),i(),null===(e=null===a||void 0===a?void 0:a.onUpdate)||void 0===e||e.call(a,o),null===(n=null===a||void 0===a?void 0:a.onComplete)||void 0===n||n.call(a),{stop:function(){}}}}function Vn(e){return 0===e||"string"===typeof e&&0===parseFloat(e)&&-1===e.indexOf(" ")}function qn(e){return"number"===typeof e?0:Zn("",e)}function Yn(e,t){return e[t]||e.default||e}function Gn(e,t,r,n){return void 0===n&&(n={}),zn&&(n={type:!1}),t.start((function(i){var o,s,a=Hn(e,t,r,n,i),l=function(e,t){var r,n;return null!==(n=null!==(r=(Yn(e,t)||{}).delay)&&void 0!==r?r:e.delay)&&void 0!==n?n:0}(n,e),c=function(){return s=a()};return l?o=window.setTimeout(c,yn(l)):c(),function(){clearTimeout(o),null===s||void 0===s||s.stop()}}))}var Kn=function(e){return/^0[^.\s]+$/.test(e)};function Jn(e,t){-1===e.indexOf(t)&&e.push(t)}function Qn(e,t){var r=e.indexOf(t);r>-1&&e.splice(r,1)}var Xn=function(){function e(){this.subscriptions=[]}return e.prototype.add=function(e){var t=this;return Jn(this.subscriptions,e),function(){return Qn(t.subscriptions,e)}},e.prototype.notify=function(e,t,r){var n=this.subscriptions.length;if(n)if(1===n)this.subscriptions[0](e,t,r);else for(var i=0;i<n;i++){var o=this.subscriptions[i];o&&o(e,t,r)}},e.prototype.getSize=function(){return this.subscriptions.length},e.prototype.clear=function(){this.subscriptions.length=0},e}(),ei=function(){function e(e){var t,r=this;this.version="6.5.1",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Xn,this.velocityUpdateSubscribers=new Xn,this.renderSubscribers=new Xn,this.canTrackVelocity=!1,this.updateAndNotify=function(e,t){void 0===t&&(t=!0),r.prev=r.current,r.current=e;var n=hn(),i=n.delta,o=n.timestamp;r.lastUpdated!==o&&(r.timeDelta=i,r.lastUpdated=o,fn.postRender(r.scheduleVelocityCheck)),r.prev!==r.current&&r.updateSubscribers.notify(r.current),r.velocityUpdateSubscribers.getSize()&&r.velocityUpdateSubscribers.notify(r.getVelocity()),t&&r.renderSubscribers.notify(r.current)},this.scheduleVelocityCheck=function(){return fn.postRender(r.velocityCheck)},this.velocityCheck=function(e){e.timestamp!==r.lastUpdated&&(r.prev=r.current,r.velocityUpdateSubscribers.notify(r.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t)))}return e.prototype.onChange=function(e){return this.updateSubscribers.add(e)},e.prototype.clearListeners=function(){this.updateSubscribers.clear()},e.prototype.onRenderRequest=function(e){return e(this.get()),this.renderSubscribers.add(e)},e.prototype.attach=function(e){this.passiveEffect=e},e.prototype.set=function(e,t){void 0===t&&(t=!0),t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)},e.prototype.get=function(){return this.current},e.prototype.getPrevious=function(){return this.prev},e.prototype.getVelocity=function(){return this.canTrackVelocity?vn(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0},e.prototype.start=function(e){var t=this;return this.stop(),new Promise((function(r){t.hasAnimated=!0,t.stopAnimation=e(r)})).then((function(){return t.clearAnimation()}))},e.prototype.stop=function(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()},e.prototype.isAnimating=function(){return!!this.stopAnimation},e.prototype.clearAnimation=function(){this.stopAnimation=null},e.prototype.destroy=function(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()},e}();function ti(e){return new ei(e)}var ri=function(e){return function(t){return t.test(e)}},ni=[ye,pe,fe,he,me,ge,{test:function(e){return"auto"===e},parse:function(e){return e}}],ii=function(e){return ni.find(ri(e))},oi=c(c([],l(ni),!1),[dr,yr],!1),si=function(e){return oi.find(ri(e))};function ai(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,ti(r))}function li(e,t){var r=O(e,t),n=r?e.makeTargetAnimatable(r,!1):{},i=n.transitionEnd,o=void 0===i?{}:i;n.transition;var l=a(n,["transitionEnd","transition"]);for(var c in l=s(s({},l),o)){ai(e,c,Ye(l[c]))}}function ci(e,t){if(t)return(t[e]||t.default||t).from}function ui(e,t,r){var n;void 0===r&&(r={});var i=O(e,t,r.custom),o=(i||{}).transition,a=void 0===o?e.getDefaultTransition()||{}:o;r.transitionOverride&&(a=r.transitionOverride);var c=i?function(){return di(e,i,r)}:function(){return Promise.resolve()},u=(null===(n=e.variantChildren)||void 0===n?void 0:n.size)?function(n){void 0===n&&(n=0);var i=a.delayChildren,o=void 0===i?0:i,l=a.staggerChildren,c=a.staggerDirection;return function(e,t,r,n,i,o){void 0===r&&(r=0);void 0===n&&(n=0);void 0===i&&(i=1);var a=[],l=(e.variantChildren.size-1)*n,c=1===i?function(e){return void 0===e&&(e=0),e*n}:function(e){return void 0===e&&(e=0),l-e*n};return Array.from(e.variantChildren).sort(hi).forEach((function(e,n){a.push(ui(e,t,s(s({},o),{delay:r+c(n)})).then((function(){return e.notifyAnimationComplete(t)})))})),Promise.all(a)}(e,t,o+n,l,c,r)}:function(){return Promise.resolve()},d=a.when;if(d){var h=l("beforeChildren"===d?[c,u]:[u,c],2),f=h[0],p=h[1];return f().then(p)}return Promise.all([c(),u(r.delay)])}function di(e,t,r){var n,i=void 0===r?{}:r,o=i.delay,l=void 0===o?0:o,c=i.transitionOverride,u=i.type,d=e.makeTargetAnimatable(t),h=d.transition,f=void 0===h?e.getDefaultTransition():h,p=d.transitionEnd,g=a(d,["transition","transitionEnd"]);c&&(f=c);var m=[],v=u&&(null===(n=e.animationState)||void 0===n?void 0:n.getState()[u]);for(var y in g){var b=e.getValue(y),w=g[y];if(!(!b||void 0===w||v&&fi(v,y))){var x=s({delay:l},f);e.shouldReduceMotion&&J(y)&&(x=s(s({},x),{type:!1,delay:0}));var _=Gn(y,b,w,x);m.push(_)}}return Promise.all(m).then((function(){p&&li(e,p)}))}function hi(e,t){return e.sortNodePosition(t)}function fi(e,t){var r=e.protectedKeys,n=e.needsAnimating,i=r.hasOwnProperty(t)&&!0!==n[t];return n[t]=!1,i}var pi=[Xe.Animate,Xe.InView,Xe.Focus,Xe.Hover,Xe.Tap,Xe.Drag,Xe.Exit],gi=c([],l(pi),!1).reverse(),mi=pi.length;function vi(e){return function(t){return Promise.all(t.map((function(t){var r=t.animation,n=t.options;return function(e,t,r){var n;if(void 0===r&&(r={}),e.notifyAnimationStart(t),Array.isArray(t)){var i=t.map((function(t){return ui(e,t,r)}));n=Promise.all(i)}else if("string"===typeof t)n=ui(e,t,r);else{var o="function"===typeof t?O(e,t,r.custom):t;n=di(e,o,r)}return n.then((function(){return e.notifyAnimationComplete(t)}))}(e,r,n)})))}}function yi(e){var t=vi(e),r=function(){var e;return(e={})[Xe.Animate]=bi(!0),e[Xe.InView]=bi(),e[Xe.Hover]=bi(),e[Xe.Tap]=bi(),e[Xe.Drag]=bi(),e[Xe.Focus]=bi(),e[Xe.Exit]=bi(),e}(),n={},i=!0,o=function(t,r){var n=O(e,r);if(n){n.transition;var i=n.transitionEnd,o=a(n,["transition","transitionEnd"]);t=s(s(s({},t),o),i)}return t};function u(a,u){for(var d,h=e.getProps(),f=e.getVariantContext(!0)||{},p=[],g=new Set,m={},v=1/0,y=function(t){var n=gi[t],y=r[n],b=null!==(d=h[n])&&void 0!==d?d:f[n],w=I(b),x=n===u?y.isActive:null;!1===x&&(v=t);var _=b===f[n]&&b!==h[n]&&w;if(_&&i&&e.manuallyAnimateOnMount&&(_=!1),y.protectedKeys=s({},m),!y.isActive&&null===x||!b&&!y.prevProp||Ve(b)||"boolean"===typeof b)return"continue";var E=function(e,t){if("string"===typeof t)return t!==e;if(P(t))return!Bt(t,e);return!1}(y.prevProp,b),S=E||n===u&&y.isActive&&!_&&w||t>v&&w,k=Array.isArray(b)?b:[b],C=k.reduce(o,{});!1===x&&(C={});var A=y.prevResolvedValues,R=void 0===A?{}:A,O=s(s({},R),C),T=function(e){S=!0,g.delete(e),y.needsAnimating[e]=!0};for(var M in O){var N=C[M],j=R[M];m.hasOwnProperty(M)||(N!==j?qe(N)&&qe(j)?!Bt(N,j)||E?T(M):y.protectedKeys[M]=!0:void 0!==N?T(M):g.add(M):void 0!==N&&g.has(M)?T(M):y.protectedKeys[M]=!0)}y.prevProp=b,y.prevResolvedValues=C,y.isActive&&(m=s(s({},m),C)),i&&e.blockInitialAnimation&&(S=!1),S&&!_&&p.push.apply(p,c([],l(k.map((function(e){return{animation:e,options:s({type:n},a)}}))),!1))},b=0;b<mi;b++)y(b);if(n=s({},m),g.size){var w={};g.forEach((function(t){var r=e.getBaseTarget(t);void 0!==r&&(w[t]=r)})),p.push({animation:w})}var x=Boolean(p.length);return i&&!1===h.initial&&!e.manuallyAnimateOnMount&&(x=!1),i=!1,x?t(p):Promise.resolve()}return{isAnimated:function(e){return void 0!==n[e]},animateChanges:u,setActive:function(t,n,i){var o;if(r[t].isActive===n)return Promise.resolve();null===(o=e.variantChildren)||void 0===o||o.forEach((function(e){var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,n)})),r[t].isActive=n;var s=u(i,t);for(var a in r)r[a].protectedKeys={};return s},setAnimateFunction:function(r){t=r(e)},getState:function(){return r}}}function bi(e){return void 0===e&&(e=!1),{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}var wi={animation:Nt((function(e){var t=e.visualElement,r=e.animate;t.animationState||(t.animationState=yi(t)),Ve(r)&&(0,n.useEffect)((function(){return r.subscribe(t)}),[r])})),exit:Nt((function(e){var t=e.custom,r=e.visualElement,i=l($t(),2),o=i[0],s=i[1],a=(0,n.useContext)(w);(0,n.useEffect)((function(){var e,n;r.isPresent=o;var i=null===(e=r.animationState)||void 0===e?void 0:e.setActive(Xe.Exit,!o,{custom:null!==(n=null===a||void 0===a?void 0:a.custom)&&void 0!==n?n:t});!o&&(null===i||void 0===i||i.then(s))}),[o])}))};const xi=e=>e.hasOwnProperty("x")&&e.hasOwnProperty("y"),_i=e=>xi(e)&&e.hasOwnProperty("z"),Ei=(e,t)=>Math.abs(e-t);function Si(e,t){if(br(e)&&br(t))return Ei(e,t);if(xi(e)&&xi(t)){const r=Ei(e.x,t.x),n=Ei(e.y,t.y),i=_i(e)&&_i(t)?Ei(e.z,t.z):0;return Math.sqrt(Math.pow(r,2)+Math.pow(n,2)+Math.pow(i,2))}}var ki=function(){function e(e,t,r){var n=this,i=(void 0===r?{}:r).transformPagePoint;if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=function(){if(n.lastMoveEvent&&n.lastMoveEventInfo){var e=Pi(n.lastMoveEventInfo,n.history),t=null!==n.startEvent,r=Si(e.offset,{x:0,y:0})>=3;if(t||r){var i=e.point,o=hn().timestamp;n.history.push(s(s({},i),{timestamp:o}));var a=n.handlers,l=a.onStart,c=a.onMove;t||(l&&l(n.lastMoveEvent,e),n.startEvent=n.lastMoveEvent),c&&c(n.lastMoveEvent,e)}}},this.handlePointerMove=function(e,t){n.lastMoveEvent=e,n.lastMoveEventInfo=Ci(t,n.transformPagePoint),it(e)&&0===e.buttons?n.handlePointerUp(e,t):fn.update(n.updatePoint,!0)},this.handlePointerUp=function(e,t){n.end();var r=n.handlers,i=r.onEnd,o=r.onSessionEnd,s=Pi(Ci(t,n.transformPagePoint),n.history);n.startEvent&&i&&i(e,s),o&&o(e,s)},!(ot(e)&&e.touches.length>1)){this.handlers=t,this.transformPagePoint=i;var o=Ci(ct(e),this.transformPagePoint),a=o.point,l=hn().timestamp;this.history=[s(s({},a),{timestamp:l})];var c=t.onSessionStart;c&&c(e,Pi(o,this.history)),this.removeListeners=kt(pt(window,"pointermove",this.handlePointerMove),pt(window,"pointerup",this.handlePointerUp),pt(window,"pointercancel",this.handlePointerUp))}}return e.prototype.updateHandlers=function(e){this.handlers=e},e.prototype.end=function(){this.removeListeners&&this.removeListeners(),an.update(this.updatePoint)},e}();function Ci(e,t){return t?{point:t(e.point)}:e}function Ai(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Pi(e,t){var r=e.point;return{point:r,delta:Ai(r,Ri(t)),offset:Ai(r,Ii(t)),velocity:Oi(t,.1)}}function Ii(e){return e[0]}function Ri(e){return e[e.length-1]}function Oi(e,t){if(e.length<2)return{x:0,y:0};for(var r=e.length-1,n=null,i=Ri(e);r>=0&&(n=e[r],!(i.timestamp-n.timestamp>yn(t)));)r--;if(!n)return{x:0,y:0};var o=(i.timestamp-n.timestamp)/1e3;if(0===o)return{x:0,y:0};var s={x:(i.x-n.x)/o,y:(i.y-n.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Ti(e){return e.max-e.min}function Mi(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=.01),Si(e,t)<r}function Ni(e,t,r,n){void 0===n&&(n=.5),e.origin=n,e.originPoint=Kt(t.min,t.max,e.origin),e.scale=Ti(r)/Ti(t),(Mi(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Kt(r.min,r.max,e.origin)-e.originPoint,(Mi(e.translate)||isNaN(e.translate))&&(e.translate=0)}function ji(e,t,r,n){Ni(e.x,t.x,r.x,null===n||void 0===n?void 0:n.originX),Ni(e.y,t.y,r.y,null===n||void 0===n?void 0:n.originY)}function Li(e,t,r){e.min=r.min+t.min,e.max=e.min+Ti(t)}function Di(e,t,r){e.min=t.min-r.min,e.max=e.min+Ti(t)}function $i(e,t,r){Di(e.x,t.x,r.x),Di(e.y,t.y,r.y)}function Bi(e,t,r){return{min:void 0!==t?e.min+t:void 0,max:void 0!==r?e.max+r-(e.max-e.min):void 0}}function Zi(e,t){var r,n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&(n=(r=l([i,n],2))[0],i=r[1]),{min:n,max:i}}var zi=.35;function Ui(e,t,r){return{min:Fi(e,t),max:Fi(e,r)}}function Fi(e,t){var r;return"number"===typeof e?e:null!==(r=e[t])&&void 0!==r?r:0}function Wi(e){return[e("x"),e("y")]}function Hi(e){var t=e.top;return{x:{min:e.left,max:e.right},y:{min:t,max:e.bottom}}}function Vi(e){return void 0===e||1===e}function qi(e){var t=e.scale,r=e.scaleX,n=e.scaleY;return!Vi(t)||!Vi(r)||!Vi(n)}function Yi(e){return qi(e)||Gi(e.x)||Gi(e.y)||e.z||e.rotate||e.rotateX||e.rotateY}function Gi(e){return e&&"0%"!==e}function Ki(e,t,r){return r+t*(e-r)}function Ji(e,t,r,n,i){return void 0!==i&&(e=Ki(e,i,n)),Ki(e,r,n)+t}function Qi(e,t,r,n,i){void 0===t&&(t=0),void 0===r&&(r=1),e.min=Ji(e.min,t,r,n,i),e.max=Ji(e.max,t,r,n,i)}function Xi(e,t){var r=t.x,n=t.y;Qi(e.x,r.translate,r.scale,r.originPoint),Qi(e.y,n.translate,n.scale,n.originPoint)}function eo(e,t){e.min=e.min+t,e.max=e.max+t}function to(e,t,r){var n=l(r,3),i=n[0],o=n[1],s=n[2],a=void 0!==t[s]?t[s]:.5,c=Kt(e.min,e.max,a);Qi(e,t[i],t[o],c,t.scale)}var ro=["x","scaleX","originX"],no=["y","scaleY","originY"];function io(e,t){to(e.x,t,ro),to(e.y,t,no)}function oo(e,t){return Hi(function(e,t){if(!t)return e;var r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}var so=new WeakMap,ao=function(){function e(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}return e.prototype.start=function(e,t){var r=this,n=(void 0===t?{}:t).snapToCursor,i=void 0!==n&&n;if(!1!==this.visualElement.isPresent){this.panSession=new ki(e,{onSessionStart:function(e){r.stopAnimation(),i&&r.snapToCursor(ct(e,"page").point)},onStart:function(e,t){var n,i=r.getProps(),o=i.drag,s=i.dragPropagation,a=i.onDragStart;(!o||s||(r.openGlobalLock&&r.openGlobalLock(),r.openGlobalLock=bt(o),r.openGlobalLock))&&(r.isDragging=!0,r.currentDirection=null,r.resolveConstraints(),r.visualElement.projection&&(r.visualElement.projection.isAnimationBlocked=!0,r.visualElement.projection.target=void 0),Wi((function(e){var t,n,i=r.getAxisMotionValue(e).get()||0;if(fe.test(i)){var o=null===(n=null===(t=r.visualElement.projection)||void 0===t?void 0:t.layout)||void 0===n?void 0:n.actual[e];if(o)i=Ti(o)*(parseFloat(i)/100)}r.originPoint[e]=i})),null===a||void 0===a||a(e,t),null===(n=r.visualElement.animationState)||void 0===n||n.setActive(Xe.Drag,!0))},onMove:function(e,t){var n=r.getProps(),i=n.dragPropagation,o=n.dragDirectionLock,s=n.onDirectionLock,a=n.onDrag;if(i||r.openGlobalLock){var l=t.offset;if(o&&null===r.currentDirection)return r.currentDirection=function(e,t){void 0===t&&(t=10);var r=null;Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x");return r}(l),void(null!==r.currentDirection&&(null===s||void 0===s||s(r.currentDirection)));r.updateAxis("x",t.point,l),r.updateAxis("y",t.point,l),r.visualElement.syncRender(),null===a||void 0===a||a(e,t)}},onSessionEnd:function(e,t){return r.stop(e,t)}},{transformPagePoint:this.visualElement.getTransformPagePoint()})}},e.prototype.stop=function(e,t){var r=this.isDragging;if(this.cancel(),r){var n=t.velocity;this.startAnimation(n);var i=this.getProps().onDragEnd;null===i||void 0===i||i(e,t)}},e.prototype.cancel=function(){var e,t;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),null===(e=this.panSession)||void 0===e||e.end(),this.panSession=void 0,!this.getProps().dragPropagation&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),null===(t=this.visualElement.animationState)||void 0===t||t.setActive(Xe.Drag,!1)},e.prototype.updateAxis=function(e,t,r){var n=this.getProps().drag;if(r&&lo(e,n,this.currentDirection)){var i=this.getAxisMotionValue(e),o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=function(e,t,r){var n=t.min,i=t.max;return void 0!==n&&e<n?e=r?Kt(n,e,r.min):Math.max(e,n):void 0!==i&&e>i&&(e=r?Kt(i,e,r.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}},e.prototype.resolveConstraints=function(){var e=this,t=this.getProps(),r=t.dragConstraints,n=t.dragElastic,i=(this.visualElement.projection||{}).layout,o=this.constraints;r&&A(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!r||!i)&&function(e,t){var r=t.top,n=t.left,i=t.bottom,o=t.right;return{x:Bi(e.x,n,o),y:Bi(e.y,r,i)}}(i.actual,r),this.elastic=function(e){return void 0===e&&(e=zi),!1===e?e=0:!0===e&&(e=zi),{x:Ui(e,"left","right"),y:Ui(e,"top","bottom")}}(n),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Wi((function(t){e.getAxisMotionValue(t)&&(e.constraints[t]=function(e,t){var r={};return void 0!==t.min&&(r.min=t.min-e.min),void 0!==t.max&&(r.max=t.max-e.min),r}(i.actual[t],e.constraints[t]))}))},e.prototype.resolveRefConstraints=function(){var e=this.getProps(),t=e.dragConstraints,r=e.onMeasureDragConstraints;if(!t||!A(t))return!1;var n=t.current;(0,p.k)(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");var i=this.visualElement.projection;if(!i||!i.layout)return!1;var o=function(e,t,r){var n=oo(e,r),i=t.scroll;return i&&(eo(n.x,i.x),eo(n.y,i.y)),n}(n,i.root,this.visualElement.getTransformPagePoint()),s=function(e,t){return{x:Zi(e.x,t.x),y:Zi(e.y,t.y)}}(i.layout.actual,o);if(r){var a=r(function(e){var t=e.x,r=e.y;return{top:r.min,right:t.max,bottom:r.max,left:t.min}}(s));this.hasMutatedConstraints=!!a,a&&(s=Hi(a))}return s},e.prototype.startAnimation=function(e){var t=this,r=this.getProps(),n=r.drag,i=r.dragMomentum,o=r.dragElastic,a=r.dragTransition,l=r.dragSnapToOrigin,c=r.onDragTransitionEnd,u=this.constraints||{},d=Wi((function(r){var c;if(lo(r,n,t.currentDirection)){var d=null!==(c=null===u||void 0===u?void 0:u[r])&&void 0!==c?c:{};l&&(d={min:0,max:0});var h=o?200:1e6,f=o?40:1e7,p=s(s({type:"inertia",velocity:i?e[r]:0,bounceStiffness:h,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10},a),d);return t.startAxisValueAnimation(r,p)}}));return Promise.all(d).then(c)},e.prototype.startAxisValueAnimation=function(e,t){return Gn(e,this.getAxisMotionValue(e),0,t)},e.prototype.stopAnimation=function(){var e=this;Wi((function(t){return e.getAxisMotionValue(t).stop()}))},e.prototype.getAxisMotionValue=function(e){var t,r,n="_drag"+e.toUpperCase(),i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(e,null!==(r=null===(t=this.visualElement.getProps().initial)||void 0===t?void 0:t[e])&&void 0!==r?r:0)},e.prototype.snapToCursor=function(e){var t=this;Wi((function(r){if(lo(r,t.getProps().drag,t.currentDirection)){var n=t.visualElement.projection,i=t.getAxisMotionValue(r);if(n&&n.layout){var o=n.layout.actual[r],s=o.min,a=o.max;i.set(e[r]-Kt(s,a,.5))}}}))},e.prototype.scalePositionWithinConstraints=function(){var e,t=this,r=this.getProps(),n=r.drag,i=r.dragConstraints,o=this.visualElement.projection;if(A(i)&&o&&this.constraints){this.stopAnimation();var s={x:0,y:0};Wi((function(e){var r=t.getAxisMotionValue(e);if(r){var n=r.get();s[e]=function(e,t){var r=.5,n=Ti(e),i=Ti(t);return i>n?r=Gt(t.min,t.max-n,e.min):n>i&&(r=Gt(e.min,e.max-i,t.min)),Zt(0,1,r)}({min:n,max:n},t.constraints[e])}}));var a=this.visualElement.getProps().transformTemplate;this.visualElement.getInstance().style.transform=a?a({},""):"none",null===(e=o.root)||void 0===e||e.updateScroll(),o.updateLayout(),this.resolveConstraints(),Wi((function(e){if(lo(e,n,null)){var r=t.getAxisMotionValue(e),i=t.constraints[e],o=i.min,a=i.max;r.set(Kt(o,a,s[e]))}}))}},e.prototype.addListeners=function(){var e,t=this;so.set(this.visualElement,this);var r=pt(this.visualElement.getInstance(),"pointerdown",(function(e){var r=t.getProps(),n=r.drag,i=r.dragListener;n&&(void 0===i||i)&&t.start(e)})),n=function(){A(t.getProps().dragConstraints)&&(t.constraints=t.resolveRefConstraints())},i=this.visualElement.projection,o=i.addEventListener("measure",n);i&&!i.layout&&(null===(e=i.root)||void 0===e||e.updateScroll(),i.updateLayout()),n();var s=rt(window,"resize",(function(){return t.scalePositionWithinConstraints()}));return i.addEventListener("didUpdate",(function(e){var r=e.delta,n=e.hasLayoutChanged;t.isDragging&&n&&(Wi((function(e){var n=t.getAxisMotionValue(e);n&&(t.originPoint[e]+=r[e].translate,n.set(n.get()+r[e].translate))})),t.visualElement.syncRender())})),function(){s(),r(),o()}},e.prototype.getProps=function(){var e=this.visualElement.getProps(),t=e.drag,r=void 0!==t&&t,n=e.dragDirectionLock,i=void 0!==n&&n,o=e.dragPropagation,a=void 0!==o&&o,l=e.dragConstraints,c=void 0!==l&&l,u=e.dragElastic,d=void 0===u?zi:u,h=e.dragMomentum,f=void 0===h||h;return s(s({},e),{drag:r,dragDirectionLock:i,dragPropagation:a,dragConstraints:c,dragElastic:d,dragMomentum:f})},e}();function lo(e,t,r){return(!0===t||t===e)&&(null===r||r===e)}var co={pan:Nt((function(e){var t=e.onPan,r=e.onPanStart,i=e.onPanEnd,o=e.onPanSessionStart,s=e.visualElement,a=t||r||i||o,l=(0,n.useRef)(null),c=(0,n.useContext)(y).transformPagePoint,u={onSessionStart:o,onStart:r,onMove:t,onEnd:function(e,t){l.current=null,i&&i(e,t)}};(0,n.useEffect)((function(){null!==l.current&&l.current.updateHandlers(u)})),gt(s,"pointerdown",a&&function(e){l.current=new ki(e,u,{transformPagePoint:c})}),Et((function(){return l.current&&l.current.end()}))})),drag:Nt((function(e){var t=e.dragControls,r=e.visualElement,i=L((function(){return new ao(r)}));(0,n.useEffect)((function(){return t&&t.subscribe(i)}),[i,t]),(0,n.useEffect)((function(){return i.addListeners()}),[i])}))},uo=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","LayoutAnimationStart","SetAxisTarget","Unmount"];var ho=function(e){var t=e.treeType,r=void 0===t?"":t,n=e.build,i=e.getBaseTarget,o=e.makeTargetAnimatable,a=e.measureViewportBox,u=e.render,d=e.readValueFromInstance,h=e.removeValueFromRenderState,f=e.sortNodePosition,p=e.scrapeMotionValuesFromProps;return function(e,t){var g=e.parent,m=e.props,v=e.presenceId,y=e.blockInitialAnimation,b=e.visualState,w=e.shouldReduceMotion;void 0===t&&(t={});var x,_,E=!1,S=b.latestValues,k=b.renderState,C=function(){var e=uo.map((function(){return new Xn})),t={},r={clearAllListeners:function(){return e.forEach((function(e){return e.clear()}))},updatePropListeners:function(e){uo.forEach((function(n){var i,o="on"+n,s=e[o];null===(i=t[n])||void 0===i||i.call(t),s&&(t[n]=r[o](s))}))}};return e.forEach((function(e,t){r["on"+uo[t]]=function(t){return e.add(t)},r["notify"+uo[t]]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.notify.apply(e,c([],l(t),!1))}})),r}(),A=new Map,P=new Map,R={},O=s({},S);function N(){x&&E&&(j(),u(x,k,m.style,F.projection))}function j(){n(F,k,S,t,m)}function L(){C.notifyUpdate(S)}function D(e,t){var r=t.onChange((function(t){S[e]=t,m.onUpdate&&fn.update(L,!1,!0)})),n=t.onRenderRequest(F.scheduleRender);P.set(e,(function(){r(),n()}))}var $=p(m);for(var B in $){var Z=$[B];void 0!==S[B]&&te(Z)&&Z.set(S[B],!1)}var z=T(m),U=M(m),F=s(s({treeType:r,current:null,depth:g?g.depth+1:0,parent:g,children:new Set,presenceId:v,shouldReduceMotion:w,variantChildren:U?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:Boolean(null===g||void 0===g?void 0:g.isMounted()),blockInitialAnimation:y,isMounted:function(){return Boolean(x)},mount:function(e){E=!0,x=F.current=e,F.projection&&F.projection.mount(e),U&&g&&!z&&(_=null===g||void 0===g?void 0:g.addVariantChild(F)),A.forEach((function(e,t){return D(t,e)})),null===g||void 0===g||g.children.add(F),F.setProps(m)},unmount:function(){var e;null===(e=F.projection)||void 0===e||e.unmount(),an.update(L),an.render(N),P.forEach((function(e){return e()})),null===_||void 0===_||_(),null===g||void 0===g||g.children.delete(F),C.clearAllListeners(),x=void 0,E=!1},addVariantChild:function(e){var t,r=F.getClosestVariantNode();if(r)return null===(t=r.variantChildren)||void 0===t||t.add(e),function(){return r.variantChildren.delete(e)}},sortNodePosition:function(e){return f&&r===e.treeType?f(F.getInstance(),e.getInstance()):0},getClosestVariantNode:function(){return U?F:null===g||void 0===g?void 0:g.getClosestVariantNode()},getLayoutId:function(){return m.layoutId},getInstance:function(){return x},getStaticValue:function(e){return S[e]},setStaticValue:function(e,t){return S[e]=t},getLatestValues:function(){return S},setVisibility:function(e){F.isVisible!==e&&(F.isVisible=e,F.scheduleRender())},makeTargetAnimatable:function(e,t){return void 0===t&&(t=!0),o(F,e,m,t)},measureViewportBox:function(){return a(x,m)},addValue:function(e,t){F.hasValue(e)&&F.removeValue(e),A.set(e,t),S[e]=t.get(),D(e,t)},removeValue:function(e){var t;A.delete(e),null===(t=P.get(e))||void 0===t||t(),P.delete(e),delete S[e],h(e,k)},hasValue:function(e){return A.has(e)},getValue:function(e,t){var r=A.get(e);return void 0===r&&void 0!==t&&(r=ti(t),F.addValue(e,r)),r},forEachValue:function(e){return A.forEach(e)},readValue:function(e){var r;return null!==(r=S[e])&&void 0!==r?r:d(x,e,t)},setBaseTarget:function(e,t){O[e]=t},getBaseTarget:function(e){if(i){var t=i(m,e);if(void 0!==t&&!te(t))return t}return O[e]}},C),{build:function(){return j(),k},scheduleRender:function(){fn.render(N,!1,!0)},syncRender:N,setProps:function(e){(e.transformTemplate||m.transformTemplate)&&F.scheduleRender(),m=e,C.updatePropListeners(e),R=function(e,t,r){var n;for(var i in t){var o=t[i],s=r[i];if(te(o))e.addValue(i,o);else if(te(s))e.addValue(i,ti(o));else if(s!==o)if(e.hasValue(i)){var a=e.getValue(i);!a.hasAnimated&&a.set(o)}else e.addValue(i,ti(null!==(n=e.getStaticValue(i))&&void 0!==n?n:o))}for(var i in r)void 0===t[i]&&e.removeValue(i);return t}(F,p(m),R)},getProps:function(){return m},getVariant:function(e){var t;return null===(t=m.variants)||void 0===t?void 0:t[e]},getDefaultTransition:function(){return m.transition},getTransformPagePoint:function(){return m.transformPagePoint},getVariantContext:function(e){if(void 0===e&&(e=!1),e)return null===g||void 0===g?void 0:g.getVariantContext();if(!z){var t=(null===g||void 0===g?void 0:g.getVariantContext())||{};return void 0!==m.initial&&(t.initial=m.initial),t}for(var r={},n=0;n<po;n++){var i=fo[n],o=m[i];(I(o)||!1===o)&&(r[i]=o)}return r}});return F}},fo=c(["initial"],l(pi),!1),po=fo.length;function go(e){return"string"===typeof e&&e.startsWith("var(--")}var mo=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function vo(e,t,r){void 0===r&&(r=1),(0,p.k)(r<=4,'Max CSS variable fallback depth detected in property "'.concat(e,'". This may indicate a circular fallback dependency.'));var n=l(function(e){var t=mo.exec(e);if(!t)return[,];var r=l(t,3);return[r[1],r[2]]}(e),2),i=n[0],o=n[1];if(i){var s=window.getComputedStyle(t).getPropertyValue(i);return s?s.trim():go(o)?vo(o,t,r+1):o}}var yo,bo=new Set(["width","height","top","left","right","bottom","x","y"]),wo=function(e){return bo.has(e)},xo=function(e,t){e.set(t,!1),e.set(t)},_o=function(e){return e===ye||e===pe};!function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"}(yo||(yo={}));var Eo=function(e,t){return parseFloat(e.split(", ")[t])},So=function(e,t){return function(r,n){var i=n.transform;if("none"===i||!i)return 0;var o=i.match(/^matrix3d\((.+)\)$/);if(o)return Eo(o[1],t);var s=i.match(/^matrix\((.+)\)$/);return s?Eo(s[1],e):0}},ko=new Set(["x","y","z"]),Co=Y.filter((function(e){return!ko.has(e)}));var Ao={width:function(e,t){var r=e.x,n=t.paddingLeft,i=void 0===n?"0":n,o=t.paddingRight,s=void 0===o?"0":o;return r.max-r.min-parseFloat(i)-parseFloat(s)},height:function(e,t){var r=e.y,n=t.paddingTop,i=void 0===n?"0":n,o=t.paddingBottom,s=void 0===o?"0":o;return r.max-r.min-parseFloat(i)-parseFloat(s)},top:function(e,t){var r=t.top;return parseFloat(r)},left:function(e,t){var r=t.left;return parseFloat(r)},bottom:function(e,t){var r=e.y,n=t.top;return parseFloat(n)+(r.max-r.min)},right:function(e,t){var r=e.x,n=t.left;return parseFloat(n)+(r.max-r.min)},x:So(4,13),y:So(5,14)},Po=function(e,t,r,n){void 0===r&&(r={}),void 0===n&&(n={}),t=s({},t),n=s({},n);var i=Object.keys(t).filter(wo),o=[],a=!1,c=[];if(i.forEach((function(i){var s=e.getValue(i);if(e.hasValue(i)){var l,u=r[i],d=ii(u),h=t[i];if(qe(h)){var f=h.length,g=null===h[0]?1:0;u=h[g],d=ii(u);for(var m=g;m<f;m++)l?(0,p.k)(ii(h[m])===l,"All keyframes must be of the same type"):(l=ii(h[m]),(0,p.k)(l===d||_o(d)&&_o(l),"Keyframes must be of the same dimension as the current value"))}else l=ii(h);if(d!==l)if(_o(d)&&_o(l)){var v=s.get();"string"===typeof v&&s.set(parseFloat(v)),"string"===typeof h?t[i]=parseFloat(h):Array.isArray(h)&&l===pe&&(t[i]=h.map(parseFloat))}else(null===d||void 0===d?void 0:d.transform)&&(null===l||void 0===l?void 0:l.transform)&&(0===u||0===h)?0===u?s.set(l.transform(u)):t[i]=d.transform(h):(a||(o=function(e){var t=[];return Co.forEach((function(r){var n=e.getValue(r);void 0!==n&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))})),t.length&&e.syncRender(),t}(e),a=!0),c.push(i),n[i]=void 0!==n[i]?n[i]:t[i],xo(s,h))}})),c.length){var u=c.indexOf("height")>=0?window.pageYOffset:null,d=function(e,t,r){var n=t.measureViewportBox(),i=t.getInstance(),o=getComputedStyle(i),s=o.display,a={};"none"===s&&t.setStaticValue("display",e.display||"block"),r.forEach((function(e){a[e]=Ao[e](n,o)})),t.syncRender();var l=t.measureViewportBox();return r.forEach((function(r){var n=t.getValue(r);xo(n,a[r]),e[r]=Ao[r](l,o)})),e}(t,e,c);return o.length&&o.forEach((function(t){var r=l(t,2),n=r[0],i=r[1];e.getValue(n).set(i)})),e.syncRender(),null!==u&&window.scrollTo({top:u}),{target:d,transitionEnd:n}}return{target:t,transitionEnd:n}};function Io(e,t,r,n){return function(e){return Object.keys(e).some(wo)}(t)?Po(e,t,r,n):{target:t,transitionEnd:n}}var Ro=function(e,t,r,n){var i=function(e,t,r){var n,i=a(t,[]),o=e.getInstance();if(!(o instanceof Element))return{target:i,transitionEnd:r};for(var l in r&&(r=s({},r)),e.forEachValue((function(e){var t=e.get();if(go(t)){var r=vo(t,o);r&&e.set(r)}})),i){var c=i[l];if(go(c)){var u=vo(c,o);u&&(i[l]=u,r&&(null!==(n=r[l])&&void 0!==n||(r[l]=c)))}}return{target:i,transitionEnd:r}}(e,t,n);return Io(e,t=i.target,r,n=i.transitionEnd)};var Oo={treeType:"dom",readValueFromInstance:function(e,t){if(J(t)){var r=Bn(t);return r&&r.default||0}var n,i=(n=e,window.getComputedStyle(n));return(ne(t)?i.getPropertyValue(t):i[t])||0},sortNodePosition:function(e,t){return 2&e.compareDocumentPosition(t)?1:-1},getBaseTarget:function(e,t){var r;return null===(r=e.style)||void 0===r?void 0:r[t]},measureViewportBox:function(e,t){return oo(e,t.transformPagePoint)},resetTransform:function(e,t,r){var n=r.transformTemplate;t.style.transform=n?n({},""):"none",e.scheduleRender()},restoreTransform:function(e,t){e.style.transform=t.style.transform},removeValueFromRenderState:function(e,t){var r=t.vars,n=t.style;delete r[e],delete n[e]},makeTargetAnimatable:function(e,t,r,n){var i=r.transformValues;void 0===n&&(n=!0);var o=t.transition,l=t.transitionEnd,c=a(t,["transition","transitionEnd"]),u=function(e,t,r){var n,i,o={};for(var s in e)o[s]=null!==(n=ci(s,t))&&void 0!==n?n:null===(i=r.getValue(s))||void 0===i?void 0:i.get();return o}(c,o||{},e);if(i&&(l&&(l=i(l)),c&&(c=i(c)),u&&(u=i(u))),n){!function(e,t,r){var n,i,o,s,a=Object.keys(t).filter((function(t){return!e.hasValue(t)})),l=a.length;if(l)for(var c=0;c<l;c++){var u=a[c],d=t[u],h=null;Array.isArray(d)&&(h=d[0]),null===h&&(h=null!==(i=null!==(n=r[u])&&void 0!==n?n:e.readValue(u))&&void 0!==i?i:t[u]),void 0!==h&&null!==h&&("string"===typeof h&&(/^\-?\d*\.?\d+$/.test(h)||Kn(h))?h=parseFloat(h):!si(h)&&yr.test(d)&&(h=Zn(u,d)),e.addValue(u,ti(h)),null!==(o=(s=r)[u])&&void 0!==o||(s[u]=h),e.setBaseTarget(u,h))}}(e,c,u);var d=Ro(e,c,u,l);l=d.transitionEnd,c=d.target}return s({transition:o,transitionEnd:l},c)},scrapeMotionValuesFromProps:We,build:function(e,t,r,n,i){void 0!==e.isVisible&&(t.style.visibility=e.isVisible?"visible":"hidden"),Ee(t,r,n,i.transformTemplate)},render:ze},To=ho(Oo),Mo=ho(s(s({},Oo),{getBaseTarget:function(e,t){return e[t]},readValueFromInstance:function(e,t){var r;return J(t)?(null===(r=Bn(t))||void 0===r?void 0:r.default)||0:(t=Ue.has(t)?t:Ze(t),e.getAttribute(t))},scrapeMotionValuesFromProps:He,build:function(e,t,r,n,i){je(t,r,n,i.transformTemplate)},render:Fe})),No=function(e,t){return H(e)?Mo(t,{enableHardwareAcceleration:!1}):To(t,{enableHardwareAcceleration:!0})};function jo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Lo={correct:function(e,t){if(!t.target)return e;if("string"===typeof e){if(!pe.test(e))return e;e=parseFloat(e)}var r=jo(e,t.target.x),n=jo(e,t.target.y);return"".concat(r,"% ").concat(n,"%")}},Do="_$css",$o={correct:function(e,t){var r=t.treeScale,n=t.projectionDelta,i=e,o=e.includes("var("),s=[];o&&(e=e.replace(mo,(function(e){return s.push(e),Do})));var a=yr.parse(e);if(a.length>5)return i;var l=yr.createTransformer(e),c="number"!==typeof a[0]?1:0,u=n.x.scale*r.x,d=n.y.scale*r.y;a[0+c]/=u,a[1+c]/=d;var h=Kt(u,d,.5);"number"===typeof a[2+c]&&(a[2+c]/=h),"number"===typeof a[3+c]&&(a[3+c]/=h);var f=l(a);if(o){var p=0;f=f.replace(Do,(function(){var e=s[p];return p++,e}))}return f}},Bo=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.componentDidMount=function(){var e,t=this,r=this.props,n=r.visualElement,i=r.layoutGroup,o=r.switchLayoutGroup,a=r.layoutId,l=n.projection;e=Zo,Object.assign(V,e),l&&((null===i||void 0===i?void 0:i.group)&&i.group.add(l),(null===o||void 0===o?void 0:o.register)&&a&&o.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",(function(){t.safeToRemove()})),l.setOptions(s(s({},l.options),{onExitComplete:function(){return t.safeToRemove()}}))),D.hasEverUpdated=!0},t.prototype.getSnapshotBeforeUpdate=function(e){var t=this,r=this.props,n=r.layoutDependency,i=r.visualElement,o=r.drag,s=r.isPresent,a=i.projection;return a?(a.isPresent=s,o||e.layoutDependency!==n||void 0===n?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||fn.postRender((function(){var e;(null===(e=a.getStack())||void 0===e?void 0:e.members.length)||t.safeToRemove()}))),null):null},t.prototype.componentDidUpdate=function(){var e=this.props.visualElement.projection;e&&(e.root.didUpdate(),!e.currentAnimation&&e.isLead()&&this.safeToRemove())},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.visualElement,r=e.layoutGroup,n=e.switchLayoutGroup,i=t.projection;i&&(i.scheduleCheckAfterUnmount(),(null===r||void 0===r?void 0:r.group)&&r.group.remove(i),(null===n||void 0===n?void 0:n.deregister)&&n.deregister(i))},t.prototype.safeToRemove=function(){var e=this.props.safeToRemove;null===e||void 0===e||e()},t.prototype.render=function(){return null},t}(n.Component);var Zo={borderRadius:s(s({},Lo),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:Lo,borderTopRightRadius:Lo,borderBottomLeftRadius:Lo,borderBottomRightRadius:Lo,boxShadow:$o},zo={measureLayout:function(e){var t=l($t(),2),r=t[0],i=t[1],o=(0,n.useContext)(B);return n.createElement(Bo,s({},e,{layoutGroup:o,switchLayoutGroup:(0,n.useContext)(Z),isPresent:r,safeToRemove:i}))}};var Uo=["TopLeft","TopRight","BottomLeft","BottomRight"],Fo=Uo.length,Wo=function(e){return"string"===typeof e?parseFloat(e):e},Ho=function(e){return"number"===typeof e||pe.test(e)};function Vo(e,t){var r;return null!==(r=e[t])&&void 0!==r?r:e.borderRadius}var qo=Go(0,.5,Br),Yo=Go(.5,.95,Mr);function Go(e,t,r){return function(n){return n<e?0:n>t?1:r(Gt(e,t,n))}}function Ko(e,t){e.min=t.min,e.max=t.max}function Jo(e,t){Ko(e.x,t.x),Ko(e.y,t.y)}function Qo(e,t,r,n,i){return e=Ki(e-=t,1/r,n),void 0!==i&&(e=Ki(e,1/i,n)),e}function Xo(e,t,r,n,i){var o=l(r,3),s=o[0],a=o[1],c=o[2];!function(e,t,r,n,i,o,s){if(void 0===t&&(t=0),void 0===r&&(r=1),void 0===n&&(n=.5),void 0===o&&(o=e),void 0===s&&(s=e),fe.test(t)&&(t=parseFloat(t),t=Kt(s.min,s.max,t/100)-s.min),"number"===typeof t){var a=Kt(o.min,o.max,n);e===o&&(a-=t),e.min=Qo(e.min,t,r,a,i),e.max=Qo(e.max,t,r,a,i)}}(e,t[s],t[a],t[c],t.scale,n,i)}var es=["x","scaleX","originX"],ts=["y","scaleY","originY"];function rs(e,t,r,n){Xo(e.x,t,es,null===r||void 0===r?void 0:r.x,null===n||void 0===n?void 0:n.x),Xo(e.y,t,ts,null===r||void 0===r?void 0:r.y,null===n||void 0===n?void 0:n.y)}function ns(e){return 0===e.translate&&1===e.scale}function is(e){return ns(e.x)&&ns(e.y)}function os(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}var ss=function(){function e(){this.members=[]}return e.prototype.add=function(e){Jn(this.members,e),e.scheduleRender()},e.prototype.remove=function(e){if(Qn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){var t=this.members[this.members.length-1];t&&this.promote(t)}},e.prototype.relegate=function(e){var t,r=this.members.findIndex((function(t){return e===t}));if(0===r)return!1;for(var n=r;n>=0;n--){var i=this.members[n];if(!1!==i.isPresent){t=i;break}}return!!t&&(this.promote(t),!0)},e.prototype.promote=function(e,t){var r,n=this.lead;e!==n&&(this.prevLead=n,this.lead=e,e.show(),n&&(n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues,e.snapshot.isShared=!0),(null===(r=e.root)||void 0===r?void 0:r.isUpdating)&&(e.isLayoutDirty=!0),!1===e.options.crossfade&&n.hide()))},e.prototype.exitAnimationComplete=function(){this.members.forEach((function(e){var t,r,n,i,o;null===(r=(t=e.options).onExitComplete)||void 0===r||r.call(t),null===(o=null===(n=e.resumingFrom)||void 0===n?void 0:(i=n.options).onExitComplete)||void 0===o||o.call(i)}))},e.prototype.scheduleRender=function(){this.members.forEach((function(e){e.instance&&e.scheduleRender(!1)}))},e.prototype.removeLeadSnapshot=function(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)},e}();function as(e,t,r){var n=e.x.translate/t.x,i=e.y.translate/t.y,o="translate3d(".concat(n,"px, ").concat(i,"px, 0) ");if(o+="scale(".concat(1/t.x,", ").concat(1/t.y,") "),r){var s=r.rotate,a=r.rotateX,l=r.rotateY;s&&(o+="rotate(".concat(s,"deg) ")),a&&(o+="rotateX(".concat(a,"deg) ")),l&&(o+="rotateY(".concat(l,"deg) "))}var c=e.x.scale*t.x,u=e.y.scale*t.y;return"translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)"===(o+="scale(".concat(c,", ").concat(u,")"))?"none":o}var ls=function(e,t){return e.depth-t.depth},cs=function(){function e(){this.children=[],this.isDirty=!1}return e.prototype.add=function(e){Jn(this.children,e),this.isDirty=!0},e.prototype.remove=function(e){Qn(this.children,e),this.isDirty=!0},e.prototype.forEach=function(e){this.isDirty&&this.children.sort(ls),this.isDirty=!1,this.children.forEach(e)},e}();function us(e){var t=e.attachResizeListener,r=e.defaultParent,n=e.measureScroll,i=e.checkIsScrollRoot,o=e.resetTransform;return function(){function e(e,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=null===r||void 0===r?void 0:r()),this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=function(){i.isUpdating&&(i.isUpdating=!1,i.clearAllSnapshots())},this.updateProjection=function(){i.nodes.forEach(vs),i.nodes.forEach(ys)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.id=e,this.latestValues=t,this.root=n?n.root||n:this,this.path=n?c(c([],l(n.path),!1),[n],!1):[],this.parent=n,this.depth=n?n.depth+1:0,e&&this.root.registerPotentialNode(e,this);for(var o=0;o<this.path.length;o++)this.path[o].shouldResetTransform=!0;this.root===this&&(this.nodes=new cs)}return e.prototype.addEventListener=function(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Xn),this.eventHandlers.get(e).add(t)},e.prototype.notifyListeners=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=this.eventHandlers.get(e);null===n||void 0===n||n.notify.apply(n,c([],l(t),!1))},e.prototype.hasListeners=function(e){return this.eventHandlers.has(e)},e.prototype.registerPotentialNode=function(e,t){this.potentialNodes.set(e,t)},e.prototype.mount=function(e,r){var n,i=this;if(void 0===r&&(r=!1),!this.instance){this.isSVG=e instanceof SVGElement&&"svg"!==e.tagName,this.instance=e;var o=this.options,a=o.layoutId,l=o.layout,c=o.visualElement;if(c&&!c.getInstance()&&c.mount(e),this.root.nodes.add(this),null===(n=this.parent)||void 0===n||n.children.add(this),this.id&&this.root.potentialNodes.delete(this.id),r&&(l||a)&&(this.isLayoutDirty=!0),t){var u,d=function(){return i.root.updateBlockedByResize=!1};t(e,(function(){i.root.updateBlockedByResize=!0,clearTimeout(u),u=window.setTimeout(d,250),D.hasAnimatedSinceResize&&(D.hasAnimatedSinceResize=!1,i.nodes.forEach(ms))}))}a&&this.root.registerSharedNode(a,this),!1!==this.options.animate&&c&&(a||l)&&this.addEventListener("didUpdate",(function(e){var t,r,n,o,a,l=e.delta,u=e.hasLayoutChanged,d=e.hasRelativeTargetChanged,h=e.layout;if(i.isTreeAnimationBlocked())return i.target=void 0,void(i.relativeTarget=void 0);var f=null!==(r=null!==(t=i.options.transition)&&void 0!==t?t:c.getDefaultTransition())&&void 0!==r?r:Ss,p=c.getProps(),g=p.onLayoutAnimationStart,m=p.onLayoutAnimationComplete,v=!i.targetLayout||!os(i.targetLayout,h)||d,y=!u&&d;if((null===(n=i.resumeFrom)||void 0===n?void 0:n.instance)||y||u&&(v||!i.currentAnimation)){i.resumeFrom&&(i.resumingFrom=i.resumeFrom,i.resumingFrom.resumingFrom=void 0),i.setAnimationOrigin(l,y);var b=s(s({},Yn(f,"layout")),{onPlay:g,onComplete:m});c.shouldReduceMotion&&(b.delay=0,b.type=!1),i.startAnimation(b)}else u||0!==i.animationProgress||i.finishAnimation(),i.isLead()&&(null===(a=(o=i.options).onExitComplete)||void 0===a||a.call(o));i.targetLayout=h}))}},e.prototype.unmount=function(){var e,t;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),null===(e=this.getStack())||void 0===e||e.remove(this),null===(t=this.parent)||void 0===t||t.children.delete(this),this.instance=void 0,an.preRender(this.updateProjection)},e.prototype.blockUpdate=function(){this.updateManuallyBlocked=!0},e.prototype.unblockUpdate=function(){this.updateManuallyBlocked=!1},e.prototype.isUpdateBlocked=function(){return this.updateManuallyBlocked||this.updateBlockedByResize},e.prototype.isTreeAnimationBlocked=function(){var e;return this.isAnimationBlocked||(null===(e=this.parent)||void 0===e?void 0:e.isTreeAnimationBlocked())||!1},e.prototype.startUpdate=function(){var e;this.isUpdateBlocked()||(this.isUpdating=!0,null===(e=this.nodes)||void 0===e||e.forEach(bs))},e.prototype.willUpdate=function(e){var t,r,n;if(void 0===e&&(e=!0),this.root.isUpdateBlocked())null===(r=(t=this.options).onExitComplete)||void 0===r||r.call(t);else if(!this.root.isUpdating&&this.root.startUpdate(),!this.isLayoutDirty){this.isLayoutDirty=!0;for(var i=0;i<this.path.length;i++){var o=this.path[i];o.shouldResetTransform=!0,o.updateScroll()}var s=this.options,a=s.layoutId,l=s.layout;if(void 0!==a||l){var c=null===(n=this.options.visualElement)||void 0===n?void 0:n.getProps().transformTemplate;this.prevTransformTemplateValue=null===c||void 0===c?void 0:c(this.latestValues,""),this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}}},e.prototype.didUpdate=function(){if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(ps);this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(ks),this.potentialNodes.clear()),this.nodes.forEach(gs),this.nodes.forEach(ds),this.nodes.forEach(hs),this.clearAllSnapshots(),ln.update(),ln.preRender(),ln.render())},e.prototype.clearAllSnapshots=function(){this.nodes.forEach(fs),this.sharedNodes.forEach(ws)},e.prototype.scheduleUpdateProjection=function(){fn.preRender(this.updateProjection,!1,!0)},e.prototype.scheduleCheckAfterUnmount=function(){var e=this;fn.postRender((function(){e.isLayoutDirty?e.root.didUpdate():e.root.checkUpdateFailed()}))},e.prototype.updateSnapshot=function(){if(!this.snapshot&&this.instance){var e=this.measure(),t=this.removeTransform(this.removeElementScroll(e));As(t),this.snapshot={measured:e,layout:t,latestValues:{}}}},e.prototype.updateLayout=function(){var e;if(this.instance&&(this.updateScroll(),this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty)){if(this.resumeFrom&&!this.resumeFrom.instance)for(var t=0;t<this.path.length;t++){this.path[t].updateScroll()}var r=this.measure();As(r);var n=this.layout;this.layout={measured:r,actual:this.removeElementScroll(r)},this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.actual),null===(e=this.options.visualElement)||void 0===e||e.notifyLayoutMeasure(this.layout.actual,null===n||void 0===n?void 0:n.actual)}},e.prototype.updateScroll=function(){this.options.layoutScroll&&this.instance&&(this.isScrollRoot=i(this.instance),this.scroll=n(this.instance))},e.prototype.resetTransform=function(){var e;if(o){var t=this.isLayoutDirty||this.shouldResetTransform,r=this.projectionDelta&&!is(this.projectionDelta),n=null===(e=this.options.visualElement)||void 0===e?void 0:e.getProps().transformTemplate,i=null===n||void 0===n?void 0:n(this.latestValues,""),s=i!==this.prevTransformTemplateValue;t&&(r||Yi(this.latestValues)||s)&&(o(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}},e.prototype.measure=function(){var e=this.options.visualElement;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};var t=e.measureViewportBox(),r=this.root.scroll;return r&&(eo(t.x,r.x),eo(t.y,r.y)),t},e.prototype.removeElementScroll=function(e){var t={x:{min:0,max:0},y:{min:0,max:0}};Jo(t,e);for(var r=0;r<this.path.length;r++){var n=this.path[r],i=n.scroll,o=n.options,s=n.isScrollRoot;if(n!==this.root&&i&&o.layoutScroll){if(s){Jo(t,e);var a=this.root.scroll;a&&(eo(t.x,-a.x),eo(t.y,-a.y))}eo(t.x,i.x),eo(t.y,i.y)}}return t},e.prototype.applyTransform=function(e,t){void 0===t&&(t=!1);var r={x:{min:0,max:0},y:{min:0,max:0}};Jo(r,e);for(var n=0;n<this.path.length;n++){var i=this.path[n];!t&&i.options.layoutScroll&&i.scroll&&i!==i.root&&io(r,{x:-i.scroll.x,y:-i.scroll.y}),Yi(i.latestValues)&&io(r,i.latestValues)}return Yi(this.latestValues)&&io(r,this.latestValues),r},e.prototype.removeTransform=function(e){var t,r={x:{min:0,max:0},y:{min:0,max:0}};Jo(r,e);for(var n=0;n<this.path.length;n++){var i=this.path[n];if(i.instance&&Yi(i.latestValues)){qi(i.latestValues)&&i.updateSnapshot();var o={x:{min:0,max:0},y:{min:0,max:0}};Jo(o,i.measure()),rs(r,i.latestValues,null===(t=i.snapshot)||void 0===t?void 0:t.layout,o)}}return Yi(this.latestValues)&&rs(r,this.latestValues),r},e.prototype.setTargetDelta=function(e){this.targetDelta=e,this.root.scheduleUpdateProjection()},e.prototype.setOptions=function(e){var t;this.options=s(s(s({},this.options),e),{crossfade:null===(t=e.crossfade)||void 0===t||t})},e.prototype.clearMeasurements=function(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1},e.prototype.resolveTargetDelta=function(){var e,t,r,n,i=this.options,o=i.layout,s=i.layoutId;this.layout&&(o||s)&&(this.targetDelta||this.relativeTarget||(this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&this.relativeParent.layout&&(this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},$i(this.relativeTargetOrigin,this.layout.actual,this.relativeParent.layout.actual),Jo(this.relativeTarget,this.relativeTargetOrigin))),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&(null===(e=this.relativeParent)||void 0===e?void 0:e.target)?(t=this.target,r=this.relativeTarget,n=this.relativeParent.target,Li(t.x,r.x,n.x),Li(t.y,r.y,n.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.actual):Jo(this.target,this.layout.actual),Xi(this.target,this.targetDelta)):Jo(this.target,this.layout.actual),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&Boolean(this.relativeParent.resumingFrom)===Boolean(this.resumingFrom)&&!this.relativeParent.options.layoutScroll&&this.relativeParent.target&&(this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},$i(this.relativeTargetOrigin,this.target,this.relativeParent.target),Jo(this.relativeTarget,this.relativeTargetOrigin)))))},e.prototype.getClosestProjectingParent=function(){if(this.parent&&!Yi(this.parent.latestValues))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()},e.prototype.calcProjection=function(){var e,t=this.options,r=t.layout,n=t.layoutId;if(this.isTreeAnimating=Boolean((null===(e=this.parent)||void 0===e?void 0:e.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),this.layout&&(r||n)){var i=this.getLead();Jo(this.layoutCorrected,this.layout.actual),function(e,t,r,n){var i,o;void 0===n&&(n=!1);var s=r.length;if(s){var a,l;t.x=t.y=1;for(var c=0;c<s;c++)l=(a=r[c]).projectionDelta,"contents"!==(null===(o=null===(i=a.instance)||void 0===i?void 0:i.style)||void 0===o?void 0:o.display)&&(n&&a.options.layoutScroll&&a.scroll&&a!==a.root&&io(e,{x:-a.scroll.x,y:-a.scroll.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,Xi(e,l)),n&&Yi(a.latestValues)&&io(e,a.latestValues))}}(this.layoutCorrected,this.treeScale,this.path,Boolean(this.resumingFrom)||this!==i);var o=i.target;if(o){this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});var s=this.treeScale.x,a=this.treeScale.y,l=this.projectionTransform;ji(this.projectionDelta,this.layoutCorrected,o,this.latestValues),this.projectionTransform=as(this.projectionDelta,this.treeScale),this.projectionTransform===l&&this.treeScale.x===s&&this.treeScale.y===a||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",o))}}},e.prototype.hide=function(){this.isVisible=!1},e.prototype.show=function(){this.isVisible=!0},e.prototype.scheduleRender=function(e){var t,r,n;void 0===e&&(e=!0),null===(r=(t=this.options).scheduleRender)||void 0===r||r.call(t),e&&(null===(n=this.getStack())||void 0===n||n.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)},e.prototype.setAnimationOrigin=function(e,t){var r,n=this;void 0===t&&(t=!1);var i=this.snapshot,o=(null===i||void 0===i?void 0:i.latestValues)||{},a=s({},this.latestValues),l={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!t;var c={x:{min:0,max:0},y:{min:0,max:0}},u=null===i||void 0===i?void 0:i.isShared,d=((null===(r=this.getStack())||void 0===r?void 0:r.members.length)||0)<=1,h=Boolean(u&&!d&&!0===this.options.crossfade&&!this.path.some(Es));this.animationProgress=0,this.mixTargetDelta=function(t){var r,i=t/1e3;xs(l.x,e.x,i),xs(l.y,e.y,i),n.setTargetDelta(l),n.relativeTarget&&n.relativeTargetOrigin&&n.layout&&(null===(r=n.relativeParent)||void 0===r?void 0:r.layout)&&($i(c,n.layout.actual,n.relativeParent.layout.actual),function(e,t,r,n){_s(e.x,t.x,r.x,n),_s(e.y,t.y,r.y,n)}(n.relativeTarget,n.relativeTargetOrigin,c,i)),u&&(n.animationValues=a,function(e,t,r,n,i,o){var s,a,l,c;i?(e.opacity=Kt(0,null!==(s=r.opacity)&&void 0!==s?s:1,qo(n)),e.opacityExit=Kt(null!==(a=t.opacity)&&void 0!==a?a:1,0,Yo(n))):o&&(e.opacity=Kt(null!==(l=t.opacity)&&void 0!==l?l:1,null!==(c=r.opacity)&&void 0!==c?c:1,n));for(var u=0;u<Fo;u++){var d="border".concat(Uo[u],"Radius"),h=Vo(t,d),f=Vo(r,d);void 0===h&&void 0===f||(h||(h=0),f||(f=0),0===h||0===f||Ho(h)===Ho(f)?(e[d]=Math.max(Kt(Wo(h),Wo(f),n),0),(fe.test(f)||fe.test(h))&&(e[d]+="%")):e[d]=f)}(t.rotate||r.rotate)&&(e.rotate=Kt(t.rotate||0,r.rotate||0,n))}(a,o,n.latestValues,i,h,d)),n.root.scheduleUpdateProjection(),n.scheduleRender(),n.animationProgress=i},this.mixTargetDelta(0)},e.prototype.startAnimation=function(e){var t,r,n=this;this.notifyListeners("animationStart"),null===(t=this.currentAnimation)||void 0===t||t.stop(),this.resumingFrom&&(null===(r=this.resumingFrom.currentAnimation)||void 0===r||r.stop()),this.pendingAnimation&&(an.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=fn.update((function(){D.hasAnimatedSinceResize=!0,n.currentAnimation=function(e,t,r){void 0===r&&(r={});var n=te(e)?e:ti(e);return Gn("",n,t,r),{stop:function(){return n.stop()},isAnimating:function(){return n.isAnimating()}}}(0,1e3,s(s({},e),{onUpdate:function(t){var r;n.mixTargetDelta(t),null===(r=e.onUpdate)||void 0===r||r.call(e,t)},onComplete:function(){var t;null===(t=e.onComplete)||void 0===t||t.call(e),n.completeAnimation()}})),n.resumingFrom&&(n.resumingFrom.currentAnimation=n.currentAnimation),n.pendingAnimation=void 0}))},e.prototype.completeAnimation=function(){var e;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),null===(e=this.getStack())||void 0===e||e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")},e.prototype.finishAnimation=function(){var e;this.currentAnimation&&(null===(e=this.mixTargetDelta)||void 0===e||e.call(this,1e3),this.currentAnimation.stop()),this.completeAnimation()},e.prototype.applyTransformsToTarget=function(){var e=this.getLead(),t=e.targetWithTransforms,r=e.target,n=e.layout,i=e.latestValues;t&&r&&n&&(Jo(t,r),io(t,i),ji(this.projectionDeltaWithTransform,this.layoutCorrected,t,i))},e.prototype.registerSharedNode=function(e,t){var r,n,i;this.sharedNodes.has(e)||this.sharedNodes.set(e,new ss),this.sharedNodes.get(e).add(t),t.promote({transition:null===(r=t.options.initialPromotionConfig)||void 0===r?void 0:r.transition,preserveFollowOpacity:null===(i=null===(n=t.options.initialPromotionConfig)||void 0===n?void 0:n.shouldPreserveFollowOpacity)||void 0===i?void 0:i.call(n,t)})},e.prototype.isLead=function(){var e=this.getStack();return!e||e.lead===this},e.prototype.getLead=function(){var e;return this.options.layoutId&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this},e.prototype.getPrevLead=function(){var e;return this.options.layoutId?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0},e.prototype.getStack=function(){var e=this.options.layoutId;if(e)return this.root.sharedNodes.get(e)},e.prototype.promote=function(e){var t=void 0===e?{}:e,r=t.needsReset,n=t.transition,i=t.preserveFollowOpacity,o=this.getStack();o&&o.promote(this,i),r&&(this.projectionDelta=void 0,this.needsReset=!0),n&&this.setOptions({transition:n})},e.prototype.relegate=function(){var e=this.getStack();return!!e&&e.relegate(this)},e.prototype.resetRotation=function(){var e=this.options.visualElement;if(e){for(var t=!1,r={},n=0;n<q.length;n++){var i="rotate"+q[n];e.getStaticValue(i)&&(t=!0,r[i]=e.getStaticValue(i),e.setStaticValue(i,0))}if(t){for(var i in null===e||void 0===e||e.syncRender(),r)e.setStaticValue(i,r[i]);e.scheduleRender()}}},e.prototype.getProjectionStyles=function(e){var t,r,n,i,o,s;void 0===e&&(e={});var a={};if(!this.instance||this.isSVG)return a;if(!this.isVisible)return{visibility:"hidden"};a.visibility="";var l=null===(t=this.options.visualElement)||void 0===t?void 0:t.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,a.opacity="",a.pointerEvents=Ge(e.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none",a;var c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){var u={};return this.options.layoutId&&(u.opacity=null!==(r=this.latestValues.opacity)&&void 0!==r?r:1,u.pointerEvents=Ge(e.pointerEvents)||""),this.hasProjected&&!Yi(this.latestValues)&&(u.transform=l?l({},""):"none",this.hasProjected=!1),u}var d=c.animationValues||c.latestValues;this.applyTransformsToTarget(),a.transform=as(this.projectionDeltaWithTransform,this.treeScale,d),l&&(a.transform=l(d,a.transform));var h=this.projectionDelta,f=h.x,p=h.y;for(var g in a.transformOrigin="".concat(100*f.origin,"% ").concat(100*p.origin,"% 0"),c.animationValues?a.opacity=c===this?null!==(i=null!==(n=d.opacity)&&void 0!==n?n:this.latestValues.opacity)&&void 0!==i?i:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:a.opacity=c===this?null!==(o=d.opacity)&&void 0!==o?o:"":null!==(s=d.opacityExit)&&void 0!==s?s:0,V)if(void 0!==d[g]){var m=V[g],v=m.correct,y=m.applyTo,b=v(d[g],c);if(y)for(var w=y.length,x=0;x<w;x++)a[y[x]]=b;else a[g]=b}return this.options.layoutId&&(a.pointerEvents=c===this?Ge(e.pointerEvents)||"":"none"),a},e.prototype.clearSnapshot=function(){this.resumeFrom=this.snapshot=void 0},e.prototype.resetTree=function(){this.root.nodes.forEach((function(e){var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(ps),this.root.sharedNodes.clear()},e}()}function ds(e){e.updateLayout()}function hs(e){var t,r,n,i,o=null!==(r=null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)&&void 0!==r?r:e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){var s=e.layout,a=s.actual,l=s.measured;"size"===e.options.animationType?Wi((function(e){var t=o.isShared?o.measured[e]:o.layout[e],r=Ti(t);t.min=a[e].min,t.max=t.min+r})):"position"===e.options.animationType&&Wi((function(e){var t=o.isShared?o.measured[e]:o.layout[e],r=Ti(a[e]);t.max=t.min+r}));var c={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};ji(c,a,o.layout);var u={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o.isShared?ji(u,e.applyTransform(l,!0),o.measured):ji(u,a,o.layout);var d=!is(c),h=!1;if(!e.resumeFrom&&(e.relativeParent=e.getClosestProjectingParent(),e.relativeParent&&!e.relativeParent.resumeFrom)){var f=e.relativeParent,p=f.snapshot,g=f.layout;if(p&&g){var m={x:{min:0,max:0},y:{min:0,max:0}};$i(m,o.layout,p.layout);var v={x:{min:0,max:0},y:{min:0,max:0}};$i(v,a,g.actual),os(m,v)||(h=!0)}}e.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:u,layoutDelta:c,hasLayoutChanged:d,hasRelativeTargetChanged:h})}else e.isLead()&&(null===(i=(n=e.options).onExitComplete)||void 0===i||i.call(n));e.options.transition=void 0}function fs(e){e.clearSnapshot()}function ps(e){e.clearMeasurements()}function gs(e){var t=e.options.visualElement;(null===t||void 0===t?void 0:t.getProps().onBeforeLayoutMeasure)&&t.notifyBeforeLayoutMeasure(),e.resetTransform()}function ms(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function vs(e){e.resolveTargetDelta()}function ys(e){e.calcProjection()}function bs(e){e.resetRotation()}function ws(e){e.removeLeadSnapshot()}function xs(e,t,r){e.translate=Kt(t.translate,0,r),e.scale=Kt(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function _s(e,t,r,n){e.min=Kt(t.min,r.min,n),e.max=Kt(t.max,r.max,n)}function Es(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}var Ss={duration:.45,ease:[.4,0,.1,1]};function ks(e,t){for(var r=e.root,n=e.path.length-1;n>=0;n--)if(Boolean(e.path[n].instance)){r=e.path[n];break}var i=(r&&r!==e.root?r.instance:document).querySelector('[data-projection-id="'.concat(t,'"]'));i&&e.mount(i,!0)}function Cs(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function As(e){Cs(e.x),Cs(e.y)}var Ps=us({attachResizeListener:function(e,t){return rt(e,"resize",t)},measureScroll:function(){return{x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}},checkIsScrollRoot:function(){return!0}}),Is={current:void 0},Rs=us({measureScroll:function(e){return{x:e.scrollLeft,y:e.scrollTop}},defaultParent:function(){if(!Is.current){var e=new Ps(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Is.current=e}return Is.current},resetTransform:function(e,t){e.style.transform=null!==t&&void 0!==t?t:"none"},checkIsScrollRoot:function(e){return Boolean("fixed"===window.getComputedStyle(e).position)}}),Os=s(s(s(s({},wi),jt),co),zo),Ts=F((function(e,t){return function(e,t,r,n,i){var o=t.forwardMotionProps,a=void 0!==o&&o,l=H(e)?et:tt;return s(s({},l),{preloadedFeatures:r,useRender:$e(a),createVisualElement:n,projectionNodeConstructor:i,Component:e})}(e,t,Os,No,Rs)}));var Ms=r(80184);const Ns=(0,n.forwardRef)(((e,t)=>{var r,n;let i,o,{children:s,type:a,direction:l,offset:c,scale:u}=e;switch(l){case"up":case"left":i=c,o=0;break;default:i=0,o=c}const[h,f]=d(i,o),[p,g]=d(i,o);switch(a){case"rotate":return(0,Ms.jsx)(Ts.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:s});case"slide":return"up"===l||"down"===l?(0,Ms.jsx)(Ts.div,{ref:t,animate:{y:void 0!==p?p:""},onHoverEnd:()=>g(),onHoverStart:()=>g(),children:s}):(0,Ms.jsx)(Ts.div,{ref:t,animate:{x:void 0!==h?h:""},onHoverEnd:()=>f(),onHoverStart:()=>f(),children:s});default:return"number"===typeof u&&(u={hover:u,tap:u}),(0,Ms.jsx)(Ts.div,{ref:t,whileHover:{scale:null===(r=u)||void 0===r?void 0:r.hover},whileTap:{scale:null===(n=u)||void 0===n?void 0:n.tap},children:s})}}));Ns.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}};var js=Ns},91466:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CoinbaseWalletSDK=void 0;const n=r(60952),i=r(83136),o=r(24976),s=r(26089),a=r(26268),l=r(31383),c=r(75457),u=r(31807),d=r(25365);class h{constructor(e){var t,r,n;this._appName="",this._appLogoUrl=null,this._relay=null,this._relayEventManager=null;const s=e.linkAPIUrl||i.LINK_API_URL;let u;if(u=e.uiConstructor?e.uiConstructor:e=>new a.WalletSDKUI(e),"undefined"===typeof e.overrideIsMetaMask?this._overrideIsMetaMask=!1:this._overrideIsMetaMask=e.overrideIsMetaMask,this._overrideIsCoinbaseWallet=null===(t=e.overrideIsCoinbaseWallet)||void 0===t||t,this._overrideIsCoinbaseBrowser=null!==(r=e.overrideIsCoinbaseBrowser)&&void 0!==r&&r,e.diagnosticLogger&&e.eventListener)throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");e.eventListener?this._diagnosticLogger={log:e.eventListener.onEvent}:this._diagnosticLogger=e.diagnosticLogger,this._reloadOnDisconnect=null===(n=e.reloadOnDisconnect)||void 0===n||n;const f=new URL(s),p=`${f.protocol}//${f.host}`;this._storage=new o.ScopedLocalStorage(`-walletlink:${p}`),this._storage.setItem("version",h.VERSION),this.walletExtension||this.coinbaseBrowser||(this._relayEventManager=new c.WalletSDKRelayEventManager,this._relay=new l.WalletSDKRelay({linkAPIUrl:s,version:d.LIB_VERSION,darkMode:!!e.darkMode,uiConstructor:u,storage:this._storage,relayEventManager:this._relayEventManager,diagnosticLogger:this._diagnosticLogger,reloadOnDisconnect:this._reloadOnDisconnect}),this.setAppInfo(e.appName,e.appLogoUrl),e.headlessMode||this._relay.attachUI())}makeWeb3Provider(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const r=this.walletExtension;if(r)return this.isCipherProvider(r)||r.setProviderInfo(e,t),!1===this._reloadOnDisconnect&&"function"===typeof r.disableReloadOnDisconnect&&r.disableReloadOnDisconnect(),r;const n=this.coinbaseBrowser;if(n)return n;const i=this._relay;if(!i||!this._relayEventManager||!this._storage)throw new Error("Relay not initialized, should never happen");return e||i.setConnectDisabled(!0),new s.CoinbaseWalletProvider({relayProvider:()=>Promise.resolve(i),relayEventManager:this._relayEventManager,storage:this._storage,jsonRpcUrl:e,chainId:t,qrUrl:this.getQrUrl(),diagnosticLogger:this._diagnosticLogger,overrideIsMetaMask:this._overrideIsMetaMask,overrideIsCoinbaseWallet:this._overrideIsCoinbaseWallet,overrideIsCoinbaseBrowser:this._overrideIsCoinbaseBrowser})}setAppInfo(e,t){var r;this._appName=e||"DApp",this._appLogoUrl=t||(0,u.getFavicon)();const n=this.walletExtension;n?this.isCipherProvider(n)||n.setAppInfo(this._appName,this._appLogoUrl):null===(r=this._relay)||void 0===r||r.setAppInfo(this._appName,this._appLogoUrl)}disconnect(){var e;const t=this.walletExtension;t?t.close():null===(e=this._relay)||void 0===e||e.resetAndReload()}getQrUrl(){var e,t;return null!==(t=null===(e=this._relay)||void 0===e?void 0:e.getQRCodeUrl())&&void 0!==t?t:null}getCoinbaseWalletLogo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:240;return(0,n.walletLogo)(e,t)}get walletExtension(){var e;return null!==(e=window.coinbaseWalletExtension)&&void 0!==e?e:window.walletLinkExtension}get coinbaseBrowser(){var e,t;try{const r=null!==(e=window.ethereum)&&void 0!==e?e:null===(t=window.top)||void 0===t?void 0:t.ethereum;if(!r)return;return"isCoinbaseBrowser"in r&&r.isCoinbaseBrowser?r:void 0}catch(r){return}}isCipherProvider(e){return"boolean"===typeof e.isCipher&&e.isCipher}}t.CoinbaseWalletSDK=h,h.VERSION=d.LIB_VERSION},60952:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.walletLogo=void 0;t.walletLogo=(e,t)=>{let r;switch(e){case"standard":default:return r=t,`data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;case"circle":return r=t,`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;case"text":return r=(.1*t).toFixed(2),`data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;case"textWithLogo":return r=(.25*t).toFixed(2),`data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;case"textLight":return r=(.1*t).toFixed(2),`data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;case"textWithLogoLight":return r=(.25*t).toFixed(2),`data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`}}},91778:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}"},80674:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CoinbaseAppSteps=t.CoinbaseWalletSteps=t.ConnectItem=t.ConnectContent=void 0;const i=n(r(28182)),o=r(58620),s=r(31374),a=r(31807),l=r(25365),c=r(55109),u=n(r(85223)),d=n(r(42082)),h=r(31332),f=n(r(50842)),p=n(r(62424)),g=r(43516),m=r(7905),v=r(15378),y=n(r(91778)),b={"coinbase-wallet-app":{title:"Coinbase Wallet app",description:"Connect with your self-custody wallet",icon:d.default,steps:_},"coinbase-app":{title:"Coinbase app",description:"Connect with your Coinbase account",icon:u.default,steps:E}},w=e=>"light"===e?"#FFFFFF":"#0A0B0D";function x(e){let{title:t,description:r,icon:n,selected:s,theme:a,onClick:l}=e;return(0,o.h)("div",{onClick:l,class:(0,i.default)("-cbwsdk-connect-item",a,{selected:s})},(0,o.h)("div",null,(0,o.h)("img",{src:n,alt:t})),(0,o.h)("div",{class:"-cbwsdk-connect-item-copy-wrapper"},(0,o.h)("h3",{class:"-cbwsdk-connect-item-title"},t),(0,o.h)("p",{class:"-cbwsdk-connect-item-description"},r)))}function _(e){let{theme:t}=e;return(0,o.h)("ol",{class:"-cbwsdk-wallet-steps"},(0,o.h)("li",{class:(0,i.default)("-cbwsdk-wallet-steps-item",t)},(0,o.h)("div",{class:"-cbwsdk-wallet-steps-item-wrapper"},"Open Coinbase Wallet app")),(0,o.h)("li",{class:(0,i.default)("-cbwsdk-wallet-steps-item",t)},(0,o.h)("div",{class:"-cbwsdk-wallet-steps-item-wrapper"},(0,o.h)("span",null,"Tap ",(0,o.h)("strong",null,"Scan")," "),(0,o.h)("span",{class:(0,i.default)("-cbwsdk-wallet-steps-pad-left","-cbwsdk-wallet-steps-icon",t)},(0,o.h)(h.QRCodeIcon,{fill:w(t)})))))}function E(e){let{theme:t}=e;return(0,o.h)("ol",{class:"-cbwsdk-wallet-steps"},(0,o.h)("li",{class:(0,i.default)("-cbwsdk-wallet-steps-item",t)},(0,o.h)("div",{class:"-cbwsdk-wallet-steps-item-wrapper"},"Open Coinbase app")),(0,o.h)("li",{class:(0,i.default)("-cbwsdk-wallet-steps-item",t)},(0,o.h)("div",{class:"-cbwsdk-wallet-steps-item-wrapper"},(0,o.h)("span",null,"Tap ",(0,o.h)("strong",null,"More")),(0,o.h)("span",{class:(0,i.default)("-cbwsdk-wallet-steps-pad-left","-cbwsdk-wallet-steps-icon",t)},(0,o.h)(g.StatusDotIcon,{fill:w(t)})),(0,o.h)("span",{class:"-cbwsdk-wallet-steps-pad-left"},"then ",(0,o.h)("strong",null,"Scan")),(0,o.h)("span",{class:(0,i.default)("-cbwsdk-wallet-steps-pad-left","-cbwsdk-wallet-steps-icon",t)},(0,o.h)(h.QRCodeIcon,{fill:w(t)})))))}t.ConnectContent=function(e){const{theme:t}=e,[r,n]=(0,s.useState)("coinbase-wallet-app"),u=(0,s.useCallback)((e=>{n(e)}),[]),d=(0,a.createQrUrl)(e.sessionId,e.sessionSecret,e.linkAPIUrl,e.isParentConnection,e.version,e.chainId);if(!r)return null;const h=b[r].steps,g="coinbase-app"===r;return(0,o.h)("div",{"data-testid":"connect-content",class:(0,i.default)("-cbwsdk-connect-content",t)},(0,o.h)("style",null,y.default),(0,o.h)("div",{class:"-cbwsdk-connect-content-header"},(0,o.h)("h2",{class:(0,i.default)("-cbwsdk-connect-content-heading",t)},"Scan to connect with one of our mobile apps"),e.onCancel&&(0,o.h)("button",{type:"button",class:"-cbwsdk-cancel-button",onClick:e.onCancel},(0,o.h)(c.CloseIcon,{fill:"light"===t?"#0A0B0D":"#FFFFFF"}))),(0,o.h)("div",{class:"-cbwsdk-connect-content-layout"},(0,o.h)("div",{class:"-cbwsdk-connect-content-column-left"},(0,o.h)("div",null,Object.entries(b).map((e=>{let[n,i]=e;return(0,o.h)(x,{key:n,title:i.title,description:i.description,icon:i.icon,selected:r===n,onClick:()=>u(n),theme:t})}))),g&&(0,o.h)("div",{class:(0,i.default)("-cbwsdk-connect-content-update-app",t)},"Don\u2019t see a ",(0,o.h)("strong",null,"Scan")," option? Update your Coinbase app to the latest version and try again.")),(0,o.h)("div",{class:"-cbwsdk-connect-content-column-right"},(0,o.h)("div",{class:"-cbwsdk-connect-content-qr-wrapper"},(0,o.h)(m.QRCode,{content:d,width:200,height:200,fgColor:"#000",bgColor:"transparent",image:{svg:(w=r,"coinbase-app"===w?f.default:p.default),width:25,height:25}}),(0,o.h)("input",{type:"hidden",name:"cbw-cbwsdk-version",value:l.LIB_VERSION}),(0,o.h)("input",{type:"hidden",value:d})),(0,o.h)(h,{theme:t}),!e.isConnected&&(0,o.h)("div",{"data-testid":"connecting-spinner",class:(0,i.default)("-cbwsdk-connect-content-qr-connecting",t)},(0,o.h)(v.Spinner,{size:36,color:"dark"===t?"#FFF":"#000"}),(0,o.h)("p",null,"Connecting...")))));var w},t.ConnectItem=x,t.CoinbaseWalletSteps=_,t.CoinbaseAppSteps=E},25747:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}"},97414:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectDialog=void 0;const i=n(r(28182)),o=r(58620),s=r(31374),a=r(80674),l=r(69290),c=n(r(25747));t.ConnectDialog=e=>{const{isOpen:t,darkMode:r}=e,[n,u]=(0,s.useState)(!t),[d,h]=(0,s.useState)(!t);(0,s.useEffect)((()=>{const e=[window.setTimeout((()=>{h(!t)}),10)];return t?u(!1):e.push(window.setTimeout((()=>{u(!0)}),360)),()=>{e.forEach(window.clearTimeout)}}),[e.isOpen]);const f=r?"dark":"light";return(0,o.h)("div",{class:(0,i.default)("-cbwsdk-connect-dialog-container",n&&"-cbwsdk-connect-dialog-container-hidden")},(0,o.h)("style",null,c.default),(0,o.h)("div",{class:(0,i.default)("-cbwsdk-connect-dialog-backdrop",f,d&&"-cbwsdk-connect-dialog-backdrop-hidden")}),(0,o.h)("div",{class:"-cbwsdk-connect-dialog"},(0,o.h)("div",{class:(0,i.default)("-cbwsdk-connect-dialog-box",d&&"-cbwsdk-connect-dialog-box-hidden")},e.connectDisabled?null:(0,o.h)(a.ConnectContent,{theme:f,version:e.version,sessionId:e.sessionId,sessionSecret:e.sessionSecret,linkAPIUrl:e.linkAPIUrl,isConnected:e.isConnected,isParentConnection:e.isParentConnection,chainId:e.chainId,onCancel:e.onCancel}),(0,o.h)(l.TryExtensionContent,{theme:f}))))}},24005:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LinkFlow=void 0;const n=r(58620),i=r(68134),o=r(97414);t.LinkFlow=class{constructor(e){this.extensionUI$=new i.BehaviorSubject({}),this.subscriptions=new i.Subscription,this.isConnected=!1,this.chainId=1,this.isOpen=!1,this.onCancel=null,this.root=null,this.connectDisabled=!1,this.darkMode=e.darkMode,this.version=e.version,this.sessionId=e.sessionId,this.sessionSecret=e.sessionSecret,this.linkAPIUrl=e.linkAPIUrl,this.isParentConnection=e.isParentConnection,this.connected$=e.connected$,this.chainId$=e.chainId$}attach(e){this.root=document.createElement("div"),this.root.className="-cbwsdk-link-flow-root",e.appendChild(this.root),this.render(),this.subscriptions.add(this.connected$.subscribe((e=>{this.isConnected!==e&&(this.isConnected=e,this.render())}))),this.subscriptions.add(this.chainId$.subscribe((e=>{this.chainId!==e&&(this.chainId=e,this.render())})))}detach(){var e;this.root&&(this.subscriptions.unsubscribe(),(0,n.render)(null,this.root),null===(e=this.root.parentElement)||void 0===e||e.removeChild(this.root))}setConnectDisabled(e){this.connectDisabled=e}open(e){this.isOpen=!0,this.onCancel=e.onCancel,this.render()}close(){this.isOpen=!1,this.onCancel=null,this.render()}render(){if(!this.root)return;const e=this.extensionUI$.subscribe((()=>{this.root&&(0,n.render)((0,n.h)(o.ConnectDialog,{darkMode:this.darkMode,version:this.version,sessionId:this.sessionId,sessionSecret:this.sessionSecret,linkAPIUrl:this.linkAPIUrl,isOpen:this.isOpen,isConnected:this.isConnected,isParentConnection:this.isParentConnection,chainId:this.chainId,onCancel:this.onCancel,connectDisabled:this.connectDisabled}),this.root)}));this.subscriptions.add(e)}}},7905:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.QRCode=void 0;const i=r(58620),o=r(31374),s=n(r(58765));t.QRCode=e=>{const[t,r]=(0,o.useState)("");return(0,o.useEffect)((()=>{var t,n;const i=new s.default({content:e.content,background:e.bgColor||"#ffffff",color:e.fgColor||"#000000",container:"svg",ecl:"M",width:null!==(t=e.width)&&void 0!==t?t:256,height:null!==(n=e.height)&&void 0!==n?n:256,padding:0,image:e.image}),o=Buffer.from(i.svg(),"utf8").toString("base64");r(`data:image/svg+xml;base64,${o}`)})),t?(0,i.h)("img",{src:t,alt:"QR Code"}):null}},66273:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"},30174:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SnackbarInstance=t.SnackbarContainer=t.Snackbar=void 0;const i=n(r(28182)),o=r(58620),s=r(31374),a=n(r(66273));function l(e){return"coinbase-app"===e?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+"}t.Snackbar=class{constructor(e){this.items=new Map,this.nextItemKey=0,this.root=null,this.darkMode=e.darkMode}attach(e){this.root=document.createElement("div"),this.root.className="-cbwsdk-snackbar-root",e.appendChild(this.root),this.render()}presentItem(e){const t=this.nextItemKey++;return this.items.set(t,e),this.render(),()=>{this.items.delete(t),this.render()}}clear(){this.items.clear(),this.render()}render(){this.root&&(0,o.render)((0,o.h)("div",null,(0,o.h)(t.SnackbarContainer,{darkMode:this.darkMode},Array.from(this.items.entries()).map((e=>{let[r,n]=e;return(0,o.h)(t.SnackbarInstance,Object.assign({},n,{key:r}))})))),this.root)}};t.SnackbarContainer=e=>(0,o.h)("div",{class:(0,i.default)("-cbwsdk-snackbar-container")},(0,o.h)("style",null,a.default),(0,o.h)("div",{class:"-cbwsdk-snackbar"},e.children));t.SnackbarInstance=e=>{let{autoExpand:t,message:r,menuItems:n,appSrc:a}=e;const[c,u]=(0,s.useState)(!0),[d,h]=(0,s.useState)(null!==t&&void 0!==t&&t);(0,s.useEffect)((()=>{const e=[window.setTimeout((()=>{u(!1)}),1),window.setTimeout((()=>{h(!0)}),1e4)];return()=>{e.forEach(window.clearTimeout)}}));return(0,o.h)("div",{class:(0,i.default)("-cbwsdk-snackbar-instance",c&&"-cbwsdk-snackbar-instance-hidden",d&&"-cbwsdk-snackbar-instance-expanded")},(0,o.h)("div",{class:"-cbwsdk-snackbar-instance-header",onClick:()=>{h(!d)}},(0,o.h)("img",{src:l(a),class:"-cbwsdk-snackbar-instance-header-cblogo"}),(0,o.h)("div",{class:"-cbwsdk-snackbar-instance-header-message"},r),(0,o.h)("div",{class:"-gear-container"},!d&&(0,o.h)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.h)("circle",{cx:"12",cy:"12",r:"12",fill:"#F5F7F8"})),(0,o.h)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",class:"-gear-icon",title:"Expand"}))),n&&n.length>0&&(0,o.h)("div",{class:"-cbwsdk-snackbar-instance-menu"},n.map(((e,t)=>(0,o.h)("div",{class:(0,i.default)("-cbwsdk-snackbar-instance-menu-item",e.isRed&&"-cbwsdk-snackbar-instance-menu-item-is-red"),onClick:e.onClick,key:t},(0,o.h)("svg",{width:e.svgWidth,height:e.svgHeight,viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.h)("path",{"fill-rule":e.defaultFillRule,"clip-rule":e.defaultClipRule,d:e.path,fill:"#AAAAAA"})),(0,o.h)("span",{class:(0,i.default)("-cbwsdk-snackbar-instance-menu-item-info",e.isRed&&"-cbwsdk-snackbar-instance-menu-item-info-is-red")},e.info))))))}},69175:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"},15378:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Spinner=void 0;const i=r(58620),o=n(r(69175));t.Spinner=e=>{var t;const r=null!==(t=e.size)&&void 0!==t?t:64,n=e.color||"#000";return(0,i.h)("div",{class:"-cbwsdk-spinner"},(0,i.h)("style",null,o.default),(0,i.h)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",style:{width:r,height:r}},(0,i.h)("circle",{style:{cx:50,cy:50,r:45,stroke:n}})))}},50315:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}"},69290:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TryExtensionContent=void 0;const i=n(r(28182)),o=r(58620),s=r(31374),a=r(98989),l=r(48741),c=r(88610),u=n(r(50315));t.TryExtensionContent=function(e){let{theme:t}=e;const[r,n]=(0,s.useState)(!1),d=(0,s.useCallback)((()=>{window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome","_blank")}),[]),h=(0,s.useCallback)((()=>{r?window.location.reload():(d(),n(!0))}),[d,r]);return(0,o.h)("div",{class:(0,i.default)("-cbwsdk-try-extension",t)},(0,o.h)("style",null,u.default),(0,o.h)("div",{class:"-cbwsdk-try-extension-column-half"},(0,o.h)("h3",{class:(0,i.default)("-cbwsdk-try-extension-heading",t)},"Or try the Coinbase Wallet browser extension"),(0,o.h)("div",{class:"-cbwsdk-try-extension-cta-wrapper"},(0,o.h)("button",{class:(0,i.default)("-cbwsdk-try-extension-cta",t),onClick:h},r?"Refresh":"Install"),(0,o.h)("div",null,!r&&(0,o.h)(a.ArrowLeftIcon,{class:"-cbwsdk-try-extension-cta-icon",fill:"light"===t?"#0052FF":"#588AF5"})))),(0,o.h)("div",{class:"-cbwsdk-try-extension-column-half"},(0,o.h)("ul",{class:"-cbwsdk-try-extension-list"},(0,o.h)("li",{class:"-cbwsdk-try-extension-list-item"},(0,o.h)("div",{class:"-cbwsdk-try-extension-list-item-icon-wrapper"},(0,o.h)("span",{class:(0,i.default)("-cbwsdk-try-extension-list-item-icon",t)},(0,o.h)(l.LaptopIcon,{fill:"light"===t?"#0A0B0D":"#FFFFFF"}))),(0,o.h)("div",{class:(0,i.default)("-cbwsdk-try-extension-list-item-copy",t)},"Connect with dapps with just one click on your desktop browser")),(0,o.h)("li",{class:"-cbwsdk-try-extension-list-item"},(0,o.h)("div",{class:"-cbwsdk-try-extension-list-item-icon-wrapper"},(0,o.h)("span",{class:(0,i.default)("-cbwsdk-try-extension-list-item-icon",t)},(0,o.h)(c.SafeIcon,{fill:"light"===t?"#0A0B0D":"#FFFFFF"}))),(0,o.h)("div",{class:(0,i.default)("-cbwsdk-try-extension-list-item-copy",t)},"Add an additional layer of security by using a supported Ledger hardware wallet")))))}},98989:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowLeftIcon=void 0;const n=r(58620);t.ArrowLeftIcon=function(e){return(0,n.h)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},e),(0,n.h)("path",{d:"M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"}))}},55109:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CloseIcon=void 0;const n=r(58620);t.CloseIcon=function(e){return(0,n.h)("svg",Object.assign({width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),(0,n.h)("path",{d:"M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"}))}},48741:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LaptopIcon=void 0;const n=r(58620);t.LaptopIcon=function(e){return(0,n.h)("svg",Object.assign({width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"},e),(0,n.h)("path",{d:"M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"}),(0,n.h)("path",{d:"M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"}))}},31332:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QRCodeIcon=void 0;const n=r(58620);t.QRCodeIcon=function(e){return(0,n.h)("svg",Object.assign({width:"10",height:"10",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},e),(0,n.h)("path",{d:"M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z"}),(0,n.h)("path",{d:"M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z"}),(0,n.h)("path",{d:"M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z"}),(0,n.h)("path",{d:"M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z"}),(0,n.h)("path",{d:"M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z"}),(0,n.h)("path",{d:"M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z"}),(0,n.h)("path",{d:"M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z"}),(0,n.h)("path",{d:"M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z"}),(0,n.h)("path",{d:"M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z"}))}},50842:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default='\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>\n        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>\n    </svg>\n'},62424:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default='\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="50" cy="50" r="50" fill="white"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>\n    </svg>\n'},88610:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SafeIcon=void 0;const n=r(58620);t.SafeIcon=function(e){return(0,n.h)("svg",Object.assign({width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"},e),(0,n.h)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"}))}},43516:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StatusDotIcon=void 0;const n=r(58620);t.StatusDotIcon=function(e){return(0,n.h)("svg",Object.assign({width:"10",height:"10",viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},e),(0,n.h)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z"}))}},85223:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4="},42082:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg=="},7447:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClientMessagePublishEvent=t.ClientMessageSetSessionConfig=t.ClientMessageGetSessionConfig=t.ClientMessageIsLinked=t.ClientMessageHostSession=void 0,t.ClientMessageHostSession=function(e){return Object.assign({type:"HostSession"},e)},t.ClientMessageIsLinked=function(e){return Object.assign({type:"IsLinked"},e)},t.ClientMessageGetSessionConfig=function(e){return Object.assign({type:"GetSessionConfig"},e)},t.ClientMessageSetSessionConfig=function(e){return Object.assign({type:"SetSessionConfig"},e)},t.ClientMessagePublishEvent=function(e){return Object.assign({type:"PublishEvent"},e)}},95311:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EVENTS=void 0,t.EVENTS={STARTED_CONNECTING:"walletlink_sdk.started.connecting",CONNECTED_STATE_CHANGE:"walletlink_sdk.connected",DISCONNECTED:"walletlink_sdk.disconnected",METADATA_DESTROYED:"walletlink_sdk_metadata_destroyed",LINKED:"walletlink_sdk.linked",FAILURE:"walletlink_sdk.generic_failure",SESSION_CONFIG_RECEIVED:"walletlink_sdk.session_config_event_received",ETH_ACCOUNTS_STATE:"walletlink_sdk.eth_accounts_state",SESSION_STATE_CHANGE:"walletlink_sdk.session_state_change",UNLINKED_ERROR_STATE:"walletlink_sdk.unlinked_error_state",SKIPPED_CLEARING_SESSION:"walletlink_sdk.skipped_clearing_session",GENERAL_ERROR:"walletlink_sdk.general_error",WEB3_REQUEST:"walletlink_sdk.web3.request",WEB3_REQUEST_PUBLISHED:"walletlink_sdk.web3.request_published",WEB3_RESPONSE:"walletlink_sdk.web3.response",UNKNOWN_ADDRESS_ENCOUNTERED:"walletlink_sdk.unknown_address_encountered"}},11527:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RxWebSocket=t.ConnectionState=void 0;const n=r(68134),i=r(4476);var o;!function(e){e[e.DISCONNECTED=0]="DISCONNECTED",e[e.CONNECTING=1]="CONNECTING",e[e.CONNECTED=2]="CONNECTED"}(o=t.ConnectionState||(t.ConnectionState={}));t.RxWebSocket=class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:WebSocket;this.WebSocketClass=t,this.webSocket=null,this.connectionStateSubject=new n.BehaviorSubject(o.DISCONNECTED),this.incomingDataSubject=new n.Subject,this.url=e.replace(/^http/,"ws")}connect(){return this.webSocket?(0,n.throwError)(new Error("webSocket object is not null")):new n.Observable((e=>{let t;try{this.webSocket=t=new this.WebSocketClass(this.url)}catch(r){return void e.error(r)}this.connectionStateSubject.next(o.CONNECTING),t.onclose=t=>{this.clearWebSocket(),e.error(new Error(`websocket error ${t.code}: ${t.reason}`)),this.connectionStateSubject.next(o.DISCONNECTED)},t.onopen=t=>{e.next(),e.complete(),this.connectionStateSubject.next(o.CONNECTED)},t.onmessage=e=>{this.incomingDataSubject.next(e.data)}})).pipe((0,i.take)(1))}disconnect(){const{webSocket:e}=this;if(e){this.clearWebSocket(),this.connectionStateSubject.next(o.DISCONNECTED);try{e.close()}catch(t){}}}get connectionState$(){return this.connectionStateSubject.asObservable()}get incomingData$(){return this.incomingDataSubject.asObservable()}get incomingJSONData$(){return this.incomingData$.pipe((0,i.flatMap)((e=>{let t;try{t=JSON.parse(e)}catch(r){return(0,n.empty)()}return(0,n.of)(t)})))}sendData(e){const{webSocket:t}=this;if(!t)throw new Error("websocket is not connected");t.send(e)}clearWebSocket(){const{webSocket:e}=this;e&&(this.webSocket=null,e.onclose=null,e.onerror=null,e.onmessage=null,e.onopen=null)}}},67494:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isServerMessageFail=void 0,t.isServerMessageFail=function(e){return e&&"Fail"===e.type&&"number"===typeof e.id&&"string"===typeof e.sessionId&&"string"===typeof e.error}},77594:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WalletSDKConnection=void 0;const n=r(68134),i=r(4476),o=r(76388),s=r(93352),a=r(7447),l=r(95311),c=r(11527),u=r(67494);t.WalletSDKConnection=class{constructor(e,t,r,a){let u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:WebSocket;this.sessionId=e,this.sessionKey=t,this.diagnostic=a,this.subscriptions=new n.Subscription,this.destroyed=!1,this.lastHeartbeatResponse=0,this.nextReqId=(0,s.IntNumber)(1),this.connectedSubject=new n.BehaviorSubject(!1),this.linkedSubject=new n.BehaviorSubject(!1),this.sessionConfigSubject=new n.ReplaySubject(1);const d=new c.RxWebSocket(r+"/rpc",u);this.ws=d,this.subscriptions.add(d.connectionState$.pipe((0,i.tap)((t=>{var r;return null===(r=this.diagnostic)||void 0===r?void 0:r.log(l.EVENTS.CONNECTED_STATE_CHANGE,{state:t,sessionIdHash:o.Session.hash(e)})})),(0,i.skip)(1),(0,i.filter)((e=>e===c.ConnectionState.DISCONNECTED&&!this.destroyed)),(0,i.delay)(5e3),(0,i.filter)((e=>!this.destroyed)),(0,i.flatMap)((e=>d.connect())),(0,i.retry)()).subscribe()),this.subscriptions.add(d.connectionState$.pipe((0,i.skip)(2),(0,i.switchMap)((e=>(0,n.iif)((()=>e===c.ConnectionState.CONNECTED),this.authenticate().pipe((0,i.tap)((e=>this.sendIsLinked())),(0,i.tap)((e=>this.sendGetSessionConfig())),(0,i.map)((e=>!0))),(0,n.of)(!1)))),(0,i.distinctUntilChanged)(),(0,i.catchError)((e=>(0,n.of)(!1)))).subscribe((e=>this.connectedSubject.next(e)))),this.subscriptions.add(d.connectionState$.pipe((0,i.skip)(1),(0,i.switchMap)((e=>(0,n.iif)((()=>e===c.ConnectionState.CONNECTED),(0,n.timer)(0,1e4))))).subscribe((e=>0===e?this.updateLastHeartbeat():this.heartbeat()))),this.subscriptions.add(d.incomingData$.pipe((0,i.filter)((e=>"h"===e))).subscribe((e=>this.updateLastHeartbeat()))),this.subscriptions.add(d.incomingJSONData$.pipe((0,i.filter)((e=>["IsLinkedOK","Linked"].includes(e.type)))).subscribe((t=>{var r;const n=t;null===(r=this.diagnostic)||void 0===r||r.log(l.EVENTS.LINKED,{sessionIdHash:o.Session.hash(e),linked:n.linked,type:t.type,onlineGuests:n.onlineGuests}),this.linkedSubject.next(n.linked||n.onlineGuests>0)}))),this.subscriptions.add(d.incomingJSONData$.pipe((0,i.filter)((e=>["GetSessionConfigOK","SessionConfigUpdated"].includes(e.type)))).subscribe((t=>{var r;const n=t;null===(r=this.diagnostic)||void 0===r||r.log(l.EVENTS.SESSION_CONFIG_RECEIVED,{sessionIdHash:o.Session.hash(e),metadata_keys:n&&n.metadata?Object.keys(n.metadata):void 0}),this.sessionConfigSubject.next({webhookId:n.webhookId,webhookUrl:n.webhookUrl,metadata:n.metadata})})))}connect(){var e;if(this.destroyed)throw new Error("instance is destroyed");null===(e=this.diagnostic)||void 0===e||e.log(l.EVENTS.STARTED_CONNECTING,{sessionIdHash:o.Session.hash(this.sessionId)}),this.ws.connect().subscribe()}destroy(){var e;this.subscriptions.unsubscribe(),this.ws.disconnect(),null===(e=this.diagnostic)||void 0===e||e.log(l.EVENTS.DISCONNECTED,{sessionIdHash:o.Session.hash(this.sessionId)}),this.destroyed=!0}get isDestroyed(){return this.destroyed}get connected$(){return this.connectedSubject.asObservable()}get onceConnected$(){return this.connected$.pipe((0,i.filter)((e=>e)),(0,i.take)(1),(0,i.map)((()=>{})))}get linked$(){return this.linkedSubject.asObservable()}get onceLinked$(){return this.linked$.pipe((0,i.filter)((e=>e)),(0,i.take)(1),(0,i.map)((()=>{})))}get sessionConfig$(){return this.sessionConfigSubject.asObservable()}get incomingEvent$(){return this.ws.incomingJSONData$.pipe((0,i.filter)((e=>{if("Event"!==e.type)return!1;const t=e;return"string"===typeof t.sessionId&&"string"===typeof t.eventId&&"string"===typeof t.event&&"string"===typeof t.data})),(0,i.map)((e=>e)))}setSessionMetadata(e,t){const r=(0,a.ClientMessageSetSessionConfig)({id:(0,s.IntNumber)(this.nextReqId++),sessionId:this.sessionId,metadata:{[e]:t}});return this.onceConnected$.pipe((0,i.flatMap)((e=>this.makeRequest(r))),(0,i.map)((e=>{if((0,u.isServerMessageFail)(e))throw new Error(e.error||"failed to set session metadata")})))}publishEvent(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const n=(0,a.ClientMessagePublishEvent)({id:(0,s.IntNumber)(this.nextReqId++),sessionId:this.sessionId,event:e,data:t,callWebhook:r});return this.onceLinked$.pipe((0,i.flatMap)((e=>this.makeRequest(n))),(0,i.map)((e=>{if((0,u.isServerMessageFail)(e))throw new Error(e.error||"failed to publish event");return e.eventId})))}sendData(e){this.ws.sendData(JSON.stringify(e))}updateLastHeartbeat(){this.lastHeartbeatResponse=Date.now()}heartbeat(){if(Date.now()-this.lastHeartbeatResponse>2e4)this.ws.disconnect();else try{this.ws.sendData("h")}catch(e){}}makeRequest(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e4;const r=e.id;try{this.sendData(e)}catch(o){return(0,n.throwError)(o)}return this.ws.incomingJSONData$.pipe((0,i.timeoutWith)(t,(0,n.throwError)(new Error(`request ${r} timed out`))),(0,i.filter)((e=>e.id===r)),(0,i.take)(1))}authenticate(){const e=(0,a.ClientMessageHostSession)({id:(0,s.IntNumber)(this.nextReqId++),sessionId:this.sessionId,sessionKey:this.sessionKey});return this.makeRequest(e).pipe((0,i.map)((e=>{if((0,u.isServerMessageFail)(e))throw new Error(e.error||"failed to authentcate")})))}sendIsLinked(){const e=(0,a.ClientMessageIsLinked)({id:(0,s.IntNumber)(this.nextReqId++),sessionId:this.sessionId});this.sendData(e)}sendGetSessionConfig(){const e=(0,a.ClientMessageGetSessionConfig)({id:(0,s.IntNumber)(this.nextReqId++),sessionId:this.sessionId});this.sendData(e)}}},83136:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LINK_API_URL=void 0,t.LINK_API_URL="https://www.walletlink.org"},31474:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorCode=t.serializeError=t.standardErrors=t.standardErrorMessage=t.standardErrorCodes=void 0;const n=r(27037),i=r(30826),o=r(25365);t.standardErrorCodes=Object.freeze(Object.assign(Object.assign({},n.errorCodes),{provider:Object.freeze(Object.assign(Object.assign({},n.errorCodes.provider),{unsupportedChain:4902}))})),t.standardErrorMessage=function(e){return void 0!==e?(0,n.getMessageFromCode)(e):"Unknown error"},t.standardErrors=Object.freeze(Object.assign(Object.assign({},n.ethErrors),{provider:Object.freeze(Object.assign(Object.assign({},n.ethErrors.provider),{unsupportedChain:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.ethErrors.provider.custom({code:t.standardErrorCodes.provider.unsupportedChain,message:`Unrecognized chain ID ${e}. Try adding the chain using wallet_addEthereumChain first.`})}}))})),t.serializeError=function(e,r){const s=(0,n.serializeError)(function(e){return"string"===typeof e?{message:e,code:t.standardErrorCodes.rpc.internal}:(0,i.isErrorResponse)(e)?Object.assign(Object.assign({},e),{message:e.errorMessage,code:e.errorCode,data:{method:e.method,result:e.result}}):e}(e),{shouldIncludeStack:!0}),a=new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");a.searchParams.set("version",o.LIB_VERSION),a.searchParams.set("code",s.code.toString());const l=function(e,t){var r;const n=null===(r=e)||void 0===r?void 0:r.method;if(n)return n;return void 0===t?void 0:"string"===typeof t?t:Array.isArray(t)?t.length>0?t[0].method:void 0:t.method}(s.data,r);return l&&a.searchParams.set("method",l),a.searchParams.set("message",s.message),Object.assign(Object.assign({},s),{docUrl:a.href})},t.getErrorCode=function(e){var t;return"number"===typeof e?e:function(e){return"object"===typeof e&&null!==e&&("number"===typeof e.code||"number"===typeof e.errorCode)}(e)?null!==(t=e.code)&&void 0!==t?t:e.errorCode:void 0}},25419:function(e,t,r){"use strict";t.jp=void 0;const n=r(91466),i=r(26089);var o=r(91466);Object.defineProperty(t,"jp",{enumerable:!0,get:function(){return o.CoinbaseWalletSDK}});var s=r(26089);n.CoinbaseWalletSDK,"undefined"!==typeof window&&(window.CoinbaseWalletSDK=n.CoinbaseWalletSDK,window.CoinbaseWalletProvider=i.CoinbaseWalletProvider,window.WalletLink=n.CoinbaseWalletSDK,window.WalletLinkProvider=i.CoinbaseWalletProvider)},24976:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScopedLocalStorage=void 0;t.ScopedLocalStorage=class{constructor(e){this.scope=e}setItem(e,t){localStorage.setItem(this.scopedKey(e),t)}getItem(e){return localStorage.getItem(this.scopedKey(e))}removeItem(e){localStorage.removeItem(this.scopedKey(e))}clear(){const e=this.scopedKey(""),t=[];for(let r=0;r<localStorage.length;r++){const n=localStorage.key(r);"string"===typeof n&&n.startsWith(e)&&t.push(n)}t.forEach((e=>localStorage.removeItem(e)))}scopedKey(e){return`${this.scope}:${e}`}}},86297:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default='@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'},96100:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.injectCssReset=void 0;const i=n(r(86297));t.injectCssReset=function(){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(i.default)),document.documentElement.appendChild(e)}},26089:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CoinbaseWalletProvider=void 0;const i=n(r(67109)),o=n(r(80518)),s=r(95311),a=r(31474),l=r(76388),c=r(84715),u=r(14393),d=r(30826),h=r(31807),f=n(r(76465)),p=r(15142),g=r(98377),m=r(68374),v="DefaultChainId",y="DefaultJsonRpcUrl";class b extends i.default{constructor(e){var t,r;super(),this._filterPolyfill=new p.FilterPolyfill(this),this._subscriptionManager=new m.SubscriptionManager(this),this._relay=null,this._addresses=[],this.hasMadeFirstChainChangedEmission=!1,this.setProviderInfo=this.setProviderInfo.bind(this),this.updateProviderInfo=this.updateProviderInfo.bind(this),this.getChainId=this.getChainId.bind(this),this.setAppInfo=this.setAppInfo.bind(this),this.enable=this.enable.bind(this),this.close=this.close.bind(this),this.send=this.send.bind(this),this.sendAsync=this.sendAsync.bind(this),this.request=this.request.bind(this),this._setAddresses=this._setAddresses.bind(this),this.scanQRCode=this.scanQRCode.bind(this),this.genericRequest=this.genericRequest.bind(this),this._chainIdFromOpts=e.chainId,this._jsonRpcUrlFromOpts=e.jsonRpcUrl,this._overrideIsMetaMask=e.overrideIsMetaMask,this._relayProvider=e.relayProvider,this._storage=e.storage,this._relayEventManager=e.relayEventManager,this.diagnostic=e.diagnosticLogger,this.reloadOnDisconnect=!0,this.isCoinbaseWallet=null===(t=e.overrideIsCoinbaseWallet)||void 0===t||t,this.isCoinbaseBrowser=null!==(r=e.overrideIsCoinbaseBrowser)&&void 0!==r&&r,this.qrUrl=e.qrUrl;const n=this.getChainId(),i=(0,h.prepend0x)(n.toString(16));this.emit("connect",{chainIdStr:i});const o=this._storage.getItem(c.LOCAL_STORAGE_ADDRESSES_KEY);if(o){const e=o.split(" ");""!==e[0]&&(this._addresses=e.map((e=>(0,h.ensureAddressString)(e))),this.emit("accountsChanged",e))}this._subscriptionManager.events.on("notification",(e=>{this.emit("message",{type:e.method,data:e.params})})),this._isAuthorized()&&this.initializeRelay(),window.addEventListener("message",(e=>{var t;if(e.origin===location.origin&&e.source===window&&"walletLinkMessage"===e.data.type){if("dappChainSwitched"===e.data.data.action){const r=e.data.data.chainId,n=null!==(t=e.data.data.jsonRpcUrl)&&void 0!==t?t:this.jsonRpcUrl;this.updateProviderInfo(n,Number(r))}"addressChanged"===e.data.data.action&&this._setAddresses([e.data.data.address])}}))}get selectedAddress(){return this._addresses[0]||void 0}get networkVersion(){return this.getChainId().toString(10)}get chainId(){return(0,h.prepend0x)(this.getChainId().toString(16))}get isWalletLink(){return!0}get isMetaMask(){return this._overrideIsMetaMask}get host(){return this.jsonRpcUrl}get connected(){return!0}isConnected(){return!0}get jsonRpcUrl(){var e;return null!==(e=this._storage.getItem(y))&&void 0!==e?e:this._jsonRpcUrlFromOpts}set jsonRpcUrl(e){this._storage.setItem(y,e)}disableReloadOnDisconnect(){this.reloadOnDisconnect=!1}setProviderInfo(e,t){this.isCoinbaseBrowser||(this._chainIdFromOpts=t,this._jsonRpcUrlFromOpts=e),this.updateProviderInfo(this.jsonRpcUrl,this.getChainId())}updateProviderInfo(e,t){this.jsonRpcUrl=e;const r=this.getChainId();this._storage.setItem(v,t.toString(10));!((0,h.ensureIntNumber)(t)!==r)&&this.hasMadeFirstChainChangedEmission||(this.emit("chainChanged",this.getChainId()),this.hasMadeFirstChainChangedEmission=!0)}async watchAsset(e,t,r,n,i,o){const s=await this.initializeRelay();return!!(await s.watchAsset(e,t,r,n,i,null===o||void 0===o?void 0:o.toString()).promise).result}async addEthereumChain(e,t,r,n,i,o){var s,a;if((0,h.ensureIntNumber)(e)===this.getChainId())return!1;const l=await this.initializeRelay(),c=l.inlineAddEthereumChain(e.toString());this._isAuthorized()||c||await l.requestEthereumAccounts().promise;const u=await l.addEthereumChain(e.toString(),t,i,r,n,o).promise;return!0===(null===(s=u.result)||void 0===s?void 0:s.isApproved)&&this.updateProviderInfo(t[0],e),!0===(null===(a=u.result)||void 0===a?void 0:a.isApproved)}async switchEthereumChain(e){const t=await this.initializeRelay(),r=await t.switchEthereumChain(e.toString(10),this.selectedAddress||void 0).promise;if((0,d.isErrorResponse)(r)&&r.errorCode)throw r.errorCode===a.standardErrorCodes.provider.unsupportedChain?a.standardErrors.provider.unsupportedChain(e):a.standardErrors.provider.custom({message:r.errorMessage,code:r.errorCode});const n=r.result;n.isApproved&&n.rpcUrl.length>0&&this.updateProviderInfo(n.rpcUrl,e)}setAppInfo(e,t){this.initializeRelay().then((r=>r.setAppInfo(e,t)))}async enable(){var e;return null===(e=this.diagnostic)||void 0===e||e.log(s.EVENTS.ETH_ACCOUNTS_STATE,{method:"provider::enable",addresses_length:this._addresses.length,sessionIdHash:this._relay?l.Session.hash(this._relay.session.id):void 0}),this._isAuthorized()?[...this._addresses]:await this.send(g.JSONRPCMethod.eth_requestAccounts)}async close(){(await this.initializeRelay()).resetAndReload()}send(e,t){try{const r=this._send(e,t);if(r instanceof Promise)return r.catch((t=>{throw(0,a.serializeError)(t,e)}))}catch(r){throw(0,a.serializeError)(r,e)}}_send(e,t){if("string"===typeof e){const r={jsonrpc:"2.0",id:0,method:e,params:Array.isArray(t)?t:void 0!==t?[t]:[]};return this._sendRequestAsync(r).then((e=>e.result))}if("function"===typeof t){const r=e,n=t;return this._sendAsync(r,n)}if(Array.isArray(e)){return e.map((e=>this._sendRequest(e)))}const r=e;return this._sendRequest(r)}async sendAsync(e,t){try{return this._sendAsync(e,t).catch((t=>{throw(0,a.serializeError)(t,e)}))}catch(r){return Promise.reject((0,a.serializeError)(r,e))}}async _sendAsync(e,t){if("function"!==typeof t)throw new Error("callback is required");if(Array.isArray(e)){const r=t;return void this._sendMultipleRequestsAsync(e).then((e=>r(null,e))).catch((e=>r(e,null)))}const r=t;return this._sendRequestAsync(e).then((e=>r(null,e))).catch((e=>r(e,null)))}async request(e){try{return this._request(e).catch((t=>{throw(0,a.serializeError)(t,e.method)}))}catch(t){return Promise.reject((0,a.serializeError)(t,e.method))}}async _request(e){if(!e||"object"!==typeof e||Array.isArray(e))throw a.standardErrors.rpc.invalidRequest({message:"Expected a single, non-array, object argument.",data:e});const{method:t,params:r}=e;if("string"!==typeof t||0===t.length)throw a.standardErrors.rpc.invalidRequest({message:"'args.method' must be a non-empty string.",data:e});if(void 0!==r&&!Array.isArray(r)&&("object"!==typeof r||null===r))throw a.standardErrors.rpc.invalidRequest({message:"'args.params' must be an object or array if provided.",data:e});const n=void 0===r?[]:r,i=this._relayEventManager.makeRequestId();return(await this._sendRequestAsync({method:t,params:n,jsonrpc:"2.0",id:i})).result}async scanQRCode(e){var t;const r=await this.initializeRelay(),n=await r.scanQRCode((0,h.ensureRegExpString)(e)).promise;if("string"!==typeof n.result)throw(0,a.serializeError)(null!==(t=n.errorMessage)&&void 0!==t?t:"result was not a string",u.Web3Method.scanQRCode);return n.result}async genericRequest(e,t){var r;const n=await this.initializeRelay(),i=await n.genericRequest(e,t).promise;if("string"!==typeof i.result)throw(0,a.serializeError)(null!==(r=i.errorMessage)&&void 0!==r?r:"result was not a string",u.Web3Method.generic);return i.result}async selectProvider(e){var t;const r=await this.initializeRelay(),n=await r.selectProvider(e).promise;if("string"!==typeof n.result)throw(0,a.serializeError)(null!==(t=n.errorMessage)&&void 0!==t?t:"result was not a string",u.Web3Method.selectProvider);return n.result}supportsSubscriptions(){return!1}subscribe(){throw new Error("Subscriptions are not supported")}unsubscribe(){throw new Error("Subscriptions are not supported")}disconnect(){return!0}_sendRequest(e){const t={jsonrpc:"2.0",id:e.id},{method:r}=e;if(t.result=this._handleSynchronousMethods(e),void 0===t.result)throw new Error(`Coinbase Wallet does not support calling ${r} synchronously without a callback. Please provide a callback parameter to call ${r} asynchronously.`);return t}_setAddresses(e,t){if(!Array.isArray(e))throw new Error("addresses is not an array");const r=e.map((e=>(0,h.ensureAddressString)(e)));JSON.stringify(r)!==JSON.stringify(this._addresses)&&(this._addresses=r,this.emit("accountsChanged",this._addresses),this._storage.setItem(c.LOCAL_STORAGE_ADDRESSES_KEY,r.join(" ")))}_sendRequestAsync(e){return new Promise(((t,r)=>{try{const n=this._handleSynchronousMethods(e);if(void 0!==n)return t({jsonrpc:"2.0",id:e.id,result:n});const i=this._handleAsynchronousFilterMethods(e);if(void 0!==i)return void i.then((r=>t(Object.assign(Object.assign({},r),{id:e.id})))).catch((e=>r(e)));const o=this._handleSubscriptionMethods(e);if(void 0!==o)return void o.then((r=>t({jsonrpc:"2.0",id:e.id,result:r.result}))).catch((e=>r(e)))}catch(n){return r(n)}this._handleAsynchronousMethods(e).then((r=>r&&t(Object.assign(Object.assign({},r),{id:e.id})))).catch((e=>r(e)))}))}_sendMultipleRequestsAsync(e){return Promise.all(e.map((e=>this._sendRequestAsync(e))))}_handleSynchronousMethods(e){const{method:t}=e,r=e.params||[];switch(t){case g.JSONRPCMethod.eth_accounts:return this._eth_accounts();case g.JSONRPCMethod.eth_coinbase:return this._eth_coinbase();case g.JSONRPCMethod.eth_uninstallFilter:return this._eth_uninstallFilter(r);case g.JSONRPCMethod.net_version:return this._net_version();case g.JSONRPCMethod.eth_chainId:return this._eth_chainId();default:return}}async _handleAsynchronousMethods(e){const{method:t}=e,r=e.params||[];switch(t){case g.JSONRPCMethod.eth_requestAccounts:return this._eth_requestAccounts();case g.JSONRPCMethod.eth_sign:return this._eth_sign(r);case g.JSONRPCMethod.eth_ecRecover:return this._eth_ecRecover(r);case g.JSONRPCMethod.personal_sign:return this._personal_sign(r);case g.JSONRPCMethod.personal_ecRecover:return this._personal_ecRecover(r);case g.JSONRPCMethod.eth_signTransaction:return this._eth_signTransaction(r);case g.JSONRPCMethod.eth_sendRawTransaction:return this._eth_sendRawTransaction(r);case g.JSONRPCMethod.eth_sendTransaction:return this._eth_sendTransaction(r);case g.JSONRPCMethod.eth_signTypedData_v1:return this._eth_signTypedData_v1(r);case g.JSONRPCMethod.eth_signTypedData_v2:return this._throwUnsupportedMethodError();case g.JSONRPCMethod.eth_signTypedData_v3:return this._eth_signTypedData_v3(r);case g.JSONRPCMethod.eth_signTypedData_v4:case g.JSONRPCMethod.eth_signTypedData:return this._eth_signTypedData_v4(r);case g.JSONRPCMethod.cbWallet_arbitrary:return this._cbwallet_arbitrary(r);case g.JSONRPCMethod.wallet_addEthereumChain:return this._wallet_addEthereumChain(r);case g.JSONRPCMethod.wallet_switchEthereumChain:return this._wallet_switchEthereumChain(r);case g.JSONRPCMethod.wallet_watchAsset:return this._wallet_watchAsset(r)}return(await this.initializeRelay()).makeEthereumJSONRPCRequest(e,this.jsonRpcUrl)}_handleAsynchronousFilterMethods(e){const{method:t}=e,r=e.params||[];switch(t){case g.JSONRPCMethod.eth_newFilter:return this._eth_newFilter(r);case g.JSONRPCMethod.eth_newBlockFilter:return this._eth_newBlockFilter();case g.JSONRPCMethod.eth_newPendingTransactionFilter:return this._eth_newPendingTransactionFilter();case g.JSONRPCMethod.eth_getFilterChanges:return this._eth_getFilterChanges(r);case g.JSONRPCMethod.eth_getFilterLogs:return this._eth_getFilterLogs(r)}}_handleSubscriptionMethods(e){switch(e.method){case g.JSONRPCMethod.eth_subscribe:case g.JSONRPCMethod.eth_unsubscribe:return this._subscriptionManager.handleRequest(e)}}_isKnownAddress(e){try{const t=(0,h.ensureAddressString)(e);return this._addresses.map((e=>(0,h.ensureAddressString)(e))).includes(t)}catch(t){}return!1}_ensureKnownAddress(e){var t;if(!this._isKnownAddress(e))throw null===(t=this.diagnostic)||void 0===t||t.log(s.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),new Error("Unknown Ethereum address")}_prepareTransactionParams(e){const t=e.from?(0,h.ensureAddressString)(e.from):this.selectedAddress;if(!t)throw new Error("Ethereum address is unavailable");this._ensureKnownAddress(t);return{fromAddress:t,toAddress:e.to?(0,h.ensureAddressString)(e.to):null,weiValue:null!=e.value?(0,h.ensureBN)(e.value):new o.default(0),data:e.data?(0,h.ensureBuffer)(e.data):Buffer.alloc(0),nonce:null!=e.nonce?(0,h.ensureIntNumber)(e.nonce):null,gasPriceInWei:null!=e.gasPrice?(0,h.ensureBN)(e.gasPrice):null,maxFeePerGas:null!=e.maxFeePerGas?(0,h.ensureBN)(e.maxFeePerGas):null,maxPriorityFeePerGas:null!=e.maxPriorityFeePerGas?(0,h.ensureBN)(e.maxPriorityFeePerGas):null,gasLimit:null!=e.gas?(0,h.ensureBN)(e.gas):null,chainId:this.getChainId()}}_isAuthorized(){return this._addresses.length>0}_requireAuthorization(){if(!this._isAuthorized())throw a.standardErrors.provider.unauthorized({})}_throwUnsupportedMethodError(){throw a.standardErrors.provider.unsupportedMethod({})}async _signEthereumMessage(e,t,r,n){this._ensureKnownAddress(t);try{const i=await this.initializeRelay();return{jsonrpc:"2.0",id:0,result:(await i.signEthereumMessage(e,t,r,n).promise).result}}catch(i){if("string"===typeof i.message&&i.message.match(/(denied|rejected)/i))throw a.standardErrors.provider.userRejectedRequest("User denied message signature");throw i}}async _ethereumAddressFromSignedMessage(e,t,r){const n=await this.initializeRelay();return{jsonrpc:"2.0",id:0,result:(await n.ethereumAddressFromSignedMessage(e,t,r).promise).result}}_eth_accounts(){return[...this._addresses]}_eth_coinbase(){return this.selectedAddress||null}_net_version(){return this.getChainId().toString(10)}_eth_chainId(){return(0,h.hexStringFromIntNumber)(this.getChainId())}getChainId(){const e=this._storage.getItem(v);if(!e)return(0,h.ensureIntNumber)(this._chainIdFromOpts);const t=parseInt(e,10);return(0,h.ensureIntNumber)(t)}async _eth_requestAccounts(){var e;if(null===(e=this.diagnostic)||void 0===e||e.log(s.EVENTS.ETH_ACCOUNTS_STATE,{method:"provider::_eth_requestAccounts",addresses_length:this._addresses.length,sessionIdHash:this._relay?l.Session.hash(this._relay.session.id):void 0}),this._isAuthorized())return Promise.resolve({jsonrpc:"2.0",id:0,result:this._addresses});let t;try{const e=await this.initializeRelay();t=await e.requestEthereumAccounts().promise}catch(r){if("string"===typeof r.message&&r.message.match(/(denied|rejected)/i))throw a.standardErrors.provider.userRejectedRequest("User denied account authorization");throw r}if(!t.result)throw new Error("accounts received is empty");return this._setAddresses(t.result),this.isCoinbaseBrowser||await this.switchEthereumChain(this.getChainId()),{jsonrpc:"2.0",id:0,result:this._addresses}}_eth_sign(e){this._requireAuthorization();const t=(0,h.ensureAddressString)(e[0]),r=(0,h.ensureBuffer)(e[1]);return this._signEthereumMessage(r,t,!1)}_eth_ecRecover(e){const t=(0,h.ensureBuffer)(e[0]),r=(0,h.ensureBuffer)(e[1]);return this._ethereumAddressFromSignedMessage(t,r,!1)}_personal_sign(e){this._requireAuthorization();const t=(0,h.ensureBuffer)(e[0]),r=(0,h.ensureAddressString)(e[1]);return this._signEthereumMessage(t,r,!0)}_personal_ecRecover(e){const t=(0,h.ensureBuffer)(e[0]),r=(0,h.ensureBuffer)(e[1]);return this._ethereumAddressFromSignedMessage(t,r,!0)}async _eth_signTransaction(e){this._requireAuthorization();const t=this._prepareTransactionParams(e[0]||{});try{const e=await this.initializeRelay();return{jsonrpc:"2.0",id:0,result:(await e.signEthereumTransaction(t).promise).result}}catch(r){if("string"===typeof r.message&&r.message.match(/(denied|rejected)/i))throw a.standardErrors.provider.userRejectedRequest("User denied transaction signature");throw r}}async _eth_sendRawTransaction(e){const t=(0,h.ensureBuffer)(e[0]),r=await this.initializeRelay();return{jsonrpc:"2.0",id:0,result:(await r.submitEthereumTransaction(t,this.getChainId()).promise).result}}async _eth_sendTransaction(e){this._requireAuthorization();const t=this._prepareTransactionParams(e[0]||{});try{const e=await this.initializeRelay();return{jsonrpc:"2.0",id:0,result:(await e.signAndSubmitEthereumTransaction(t).promise).result}}catch(r){if("string"===typeof r.message&&r.message.match(/(denied|rejected)/i))throw a.standardErrors.provider.userRejectedRequest("User denied transaction signature");throw r}}async _eth_signTypedData_v1(e){this._requireAuthorization();const t=(0,h.ensureParsedJSONObject)(e[0]),r=(0,h.ensureAddressString)(e[1]);this._ensureKnownAddress(r);const n=f.default.hashForSignTypedDataLegacy({data:t}),i=JSON.stringify(t,null,2);return this._signEthereumMessage(n,r,!1,i)}async _eth_signTypedData_v3(e){this._requireAuthorization();const t=(0,h.ensureAddressString)(e[0]),r=(0,h.ensureParsedJSONObject)(e[1]);this._ensureKnownAddress(t);const n=f.default.hashForSignTypedData_v3({data:r}),i=JSON.stringify(r,null,2);return this._signEthereumMessage(n,t,!1,i)}async _eth_signTypedData_v4(e){this._requireAuthorization();const t=(0,h.ensureAddressString)(e[0]),r=(0,h.ensureParsedJSONObject)(e[1]);this._ensureKnownAddress(t);const n=f.default.hashForSignTypedData_v4({data:r}),i=JSON.stringify(r,null,2);return this._signEthereumMessage(n,t,!1,i)}async _cbwallet_arbitrary(e){const t=e[0],r=e[1];if("string"!==typeof r)throw new Error("parameter must be a string");if("object"!==typeof t||null===t)throw new Error("parameter must be an object");return{jsonrpc:"2.0",id:0,result:await this.genericRequest(t,r)}}async _wallet_addEthereumChain(e){var t,r,n,i;const o=e[0];if(0===(null===(t=o.rpcUrls)||void 0===t?void 0:t.length))return{jsonrpc:"2.0",id:0,error:{code:2,message:"please pass in at least 1 rpcUrl"}};if(!o.chainName||""===o.chainName.trim())throw a.standardErrors.rpc.invalidParams("chainName is a required field");if(!o.nativeCurrency)throw a.standardErrors.rpc.invalidParams("nativeCurrency is a required field");const s=parseInt(o.chainId,16);return await this.addEthereumChain(s,null!==(r=o.rpcUrls)&&void 0!==r?r:[],null!==(n=o.blockExplorerUrls)&&void 0!==n?n:[],o.chainName,null!==(i=o.iconUrls)&&void 0!==i?i:[],o.nativeCurrency)?{jsonrpc:"2.0",id:0,result:null}:{jsonrpc:"2.0",id:0,error:{code:2,message:"unable to add ethereum chain"}}}async _wallet_switchEthereumChain(e){const t=e[0];return await this.switchEthereumChain(parseInt(t.chainId,16)),{jsonrpc:"2.0",id:0,result:null}}async _wallet_watchAsset(e){const t=Array.isArray(e)?e[0]:e;if(!t.type)throw a.standardErrors.rpc.invalidParams("Type is required");if("ERC20"!==(null===t||void 0===t?void 0:t.type))throw a.standardErrors.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);if(!(null===t||void 0===t?void 0:t.options))throw a.standardErrors.rpc.invalidParams("Options are required");if(!(null===t||void 0===t?void 0:t.options.address))throw a.standardErrors.rpc.invalidParams("Address is required");const r=this.getChainId(),{address:n,symbol:i,image:o,decimals:s}=t.options;return{jsonrpc:"2.0",id:0,result:await this.watchAsset(t.type,n,i,s,o,r)}}_eth_uninstallFilter(e){const t=(0,h.ensureHexString)(e[0]);return this._filterPolyfill.uninstallFilter(t)}async _eth_newFilter(e){const t=e[0];return{jsonrpc:"2.0",id:0,result:await this._filterPolyfill.newFilter(t)}}async _eth_newBlockFilter(){return{jsonrpc:"2.0",id:0,result:await this._filterPolyfill.newBlockFilter()}}async _eth_newPendingTransactionFilter(){return{jsonrpc:"2.0",id:0,result:await this._filterPolyfill.newPendingTransactionFilter()}}_eth_getFilterChanges(e){const t=(0,h.ensureHexString)(e[0]);return this._filterPolyfill.getFilterChanges(t)}_eth_getFilterLogs(e){const t=(0,h.ensureHexString)(e[0]);return this._filterPolyfill.getFilterLogs(t)}initializeRelay(){return this._relay?Promise.resolve(this._relay):this._relayProvider().then((e=>(e.setAccountsCallback(((e,t)=>this._setAddresses(e,t))),e.setChainCallback(((e,t)=>{this.updateProviderInfo(t,parseInt(e,10))})),e.setDappDefaultChainCallback(this._chainIdFromOpts),this._relay=e,e)))}}t.CoinbaseWalletProvider=b},15142:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterFromParam=t.FilterPolyfill=void 0;const n=r(93352),i=r(31807),o={jsonrpc:"2.0",id:0};function s(e){return{fromBlock:l(e.fromBlock),toBlock:l(e.toBlock),addresses:void 0===e.address?null:Array.isArray(e.address)?e.address:[e.address],topics:e.topics||[]}}function a(e){const t={fromBlock:c(e.fromBlock),toBlock:c(e.toBlock),topics:e.topics};return null!==e.addresses&&(t.address=e.addresses),t}function l(e){if(void 0===e||"latest"===e||"pending"===e)return"latest";if("earliest"===e)return(0,n.IntNumber)(0);if((0,i.isHexString)(e))return(0,i.intNumberFromHexString)(e);throw new Error(`Invalid block option: ${String(e)}`)}function c(e){return"latest"===e?e:(0,i.hexStringFromIntNumber)(e)}function u(){return Object.assign(Object.assign({},o),{error:{code:-32e3,message:"filter not found"}})}function d(){return Object.assign(Object.assign({},o),{result:[]})}t.FilterPolyfill=class{constructor(e){this.logFilters=new Map,this.blockFilters=new Set,this.pendingTransactionFilters=new Set,this.cursors=new Map,this.timeouts=new Map,this.nextFilterId=(0,n.IntNumber)(1),this.provider=e}async newFilter(e){const t=s(e),r=this.makeFilterId(),n=await this.setInitialCursorPosition(r,t.fromBlock);return console.log(`Installing new log filter(${r}):`,t,"initial cursor position:",n),this.logFilters.set(r,t),this.setFilterTimeout(r),(0,i.hexStringFromIntNumber)(r)}async newBlockFilter(){const e=this.makeFilterId(),t=await this.setInitialCursorPosition(e,"latest");return console.log(`Installing new block filter (${e}) with initial cursor position:`,t),this.blockFilters.add(e),this.setFilterTimeout(e),(0,i.hexStringFromIntNumber)(e)}async newPendingTransactionFilter(){const e=this.makeFilterId(),t=await this.setInitialCursorPosition(e,"latest");return console.log(`Installing new block filter (${e}) with initial cursor position:`,t),this.pendingTransactionFilters.add(e),this.setFilterTimeout(e),(0,i.hexStringFromIntNumber)(e)}uninstallFilter(e){const t=(0,i.intNumberFromHexString)(e);return console.log(`Uninstalling filter (${t})`),this.deleteFilter(t),!0}getFilterChanges(e){const t=(0,i.intNumberFromHexString)(e);return this.timeouts.has(t)&&this.setFilterTimeout(t),this.logFilters.has(t)?this.getLogFilterChanges(t):this.blockFilters.has(t)?this.getBlockFilterChanges(t):this.pendingTransactionFilters.has(t)?this.getPendingTransactionFilterChanges(t):Promise.resolve(u())}async getFilterLogs(e){const t=(0,i.intNumberFromHexString)(e),r=this.logFilters.get(t);return r?this.sendAsyncPromise(Object.assign(Object.assign({},o),{method:"eth_getLogs",params:[a(r)]})):u()}makeFilterId(){return(0,n.IntNumber)(++this.nextFilterId)}sendAsyncPromise(e){return new Promise(((t,r)=>{this.provider.sendAsync(e,((e,n)=>e?r(e):Array.isArray(n)||null==n?r(new Error(`unexpected response received: ${JSON.stringify(n)}`)):void t(n)))}))}deleteFilter(e){console.log(`Deleting filter (${e})`),this.logFilters.delete(e),this.blockFilters.delete(e),this.pendingTransactionFilters.delete(e),this.cursors.delete(e),this.timeouts.delete(e)}async getLogFilterChanges(e){const t=this.logFilters.get(e),r=this.cursors.get(e);if(!r||!t)return u();const s=await this.getCurrentBlockHeight(),l="latest"===t.toBlock?s:t.toBlock;if(r>s)return d();if(r>t.toBlock)return d();console.log(`Fetching logs from ${r} to ${l} for filter ${e}`);const c=await this.sendAsyncPromise(Object.assign(Object.assign({},o),{method:"eth_getLogs",params:[a(Object.assign(Object.assign({},t),{fromBlock:r,toBlock:l}))]}));if(Array.isArray(c.result)){const t=c.result.map((e=>(0,i.intNumberFromHexString)(e.blockNumber||"0x0"))),o=Math.max(...t);if(o&&o>r){const t=(0,n.IntNumber)(o+1);console.log(`Moving cursor position for filter (${e}) from ${r} to ${t}`),this.cursors.set(e,t)}}return c}async getBlockFilterChanges(e){const t=this.cursors.get(e);if(!t)return u();const r=await this.getCurrentBlockHeight();if(t>r)return d();console.log(`Fetching blocks from ${t} to ${r} for filter (${e})`);const s=(await Promise.all((0,i.range)(t,r+1).map((e=>this.getBlockHashByNumber((0,n.IntNumber)(e)))))).filter((e=>!!e)),a=(0,n.IntNumber)(t+s.length);return console.log(`Moving cursor position for filter (${e}) from ${t} to ${a}`),this.cursors.set(e,a),Object.assign(Object.assign({},o),{result:s})}async getPendingTransactionFilterChanges(e){return Promise.resolve(d())}async setInitialCursorPosition(e,t){const r=await this.getCurrentBlockHeight(),n="number"===typeof t&&t>r?t:r;return this.cursors.set(e,n),n}setFilterTimeout(e){const t=this.timeouts.get(e);t&&window.clearTimeout(t);const r=window.setTimeout((()=>{console.log(`Filter (${e}) timed out`),this.deleteFilter(e)}),3e5);this.timeouts.set(e,r)}async getCurrentBlockHeight(){const{result:e}=await this.sendAsyncPromise(Object.assign(Object.assign({},o),{method:"eth_blockNumber",params:[]}));return(0,i.intNumberFromHexString)((0,i.ensureHexString)(e))}async getBlockHashByNumber(e){const t=await this.sendAsyncPromise(Object.assign(Object.assign({},o),{method:"eth_getBlockByNumber",params:[(0,i.hexStringFromIntNumber)(e),!1]}));return t.result&&"string"===typeof t.result.hash?(0,i.ensureHexString)(t.result.hash):null}},t.filterFromParam=s},98377:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JSONRPCMethod=void 0,function(e){e.eth_accounts="eth_accounts",e.eth_coinbase="eth_coinbase",e.net_version="net_version",e.eth_chainId="eth_chainId",e.eth_uninstallFilter="eth_uninstallFilter",e.eth_requestAccounts="eth_requestAccounts",e.eth_sign="eth_sign",e.eth_ecRecover="eth_ecRecover",e.personal_sign="personal_sign",e.personal_ecRecover="personal_ecRecover",e.eth_signTransaction="eth_signTransaction",e.eth_sendRawTransaction="eth_sendRawTransaction",e.eth_sendTransaction="eth_sendTransaction",e.eth_signTypedData_v1="eth_signTypedData_v1",e.eth_signTypedData_v2="eth_signTypedData_v2",e.eth_signTypedData_v3="eth_signTypedData_v3",e.eth_signTypedData_v4="eth_signTypedData_v4",e.eth_signTypedData="eth_signTypedData",e.cbWallet_arbitrary="walletlink_arbitrary",e.wallet_addEthereumChain="wallet_addEthereumChain",e.wallet_switchEthereumChain="wallet_switchEthereumChain",e.wallet_watchAsset="wallet_watchAsset",e.eth_subscribe="eth_subscribe",e.eth_unsubscribe="eth_unsubscribe",e.eth_newFilter="eth_newFilter",e.eth_newBlockFilter="eth_newBlockFilter",e.eth_newPendingTransactionFilter="eth_newPendingTransactionFilter",e.eth_getFilterChanges="eth_getFilterChanges",e.eth_getFilterLogs="eth_getFilterLogs"}(t.JSONRPCMethod||(t.JSONRPCMethod={}))},68374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubscriptionManager=void 0;const n=r(47125),i=r(43992),o=()=>{};t.SubscriptionManager=class{constructor(e){const t=new n.PollingBlockTracker({provider:e,pollingInterval:15e3,setSkipCacheFlag:!0}),{events:r,middleware:o}=i({blockTracker:t,provider:e});this.events=r,this.subscriptionMiddleware=o}async handleRequest(e){const t={};return await this.subscriptionMiddleware(e,t,o,o),t}destroy(){this.subscriptionMiddleware.destroy()}}},26268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WalletSDKUI=void 0;const n=r(24005),i=r(30174),o=r(96100);t.WalletSDKUI=class{constructor(e){this.standalone=null,this.attached=!1,this.appSrc=null,this.snackbar=new i.Snackbar({darkMode:e.darkMode}),this.linkFlow=new n.LinkFlow({darkMode:e.darkMode,version:e.version,sessionId:e.session.id,sessionSecret:e.session.secret,linkAPIUrl:e.linkAPIUrl,connected$:e.connected$,chainId$:e.chainId$,isParentConnection:!1})}attach(){if(this.attached)throw new Error("Coinbase Wallet SDK UI is already attached");const e=document.documentElement,t=document.createElement("div");t.className="-cbwsdk-css-reset",e.appendChild(t),this.linkFlow.attach(t),this.snackbar.attach(t),this.attached=!0,(0,o.injectCssReset)()}setConnectDisabled(e){this.linkFlow.setConnectDisabled(e)}addEthereumChain(e){}watchAsset(e){}switchEthereumChain(e){}requestEthereumAccounts(e){this.linkFlow.open({onCancel:e.onCancel})}hideRequestEthereumAccounts(){this.linkFlow.close()}signEthereumMessage(e){}signEthereumTransaction(e){}submitEthereumTransaction(e){}ethereumAddressFromSignedMessage(e){}showConnecting(e){let t;return t=e.isUnlinkedErrorState?{autoExpand:!0,message:"Connection lost",appSrc:this.appSrc,menuItems:[{isRed:!1,info:"Reset connection",svgWidth:"10",svgHeight:"11",path:"M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",defaultFillRule:"evenodd",defaultClipRule:"evenodd",onClick:e.onResetConnection}]}:{message:"Confirm on phone",appSrc:this.appSrc,menuItems:[{isRed:!0,info:"Cancel transaction",svgWidth:"11",svgHeight:"11",path:"M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",defaultFillRule:"inherit",defaultClipRule:"inherit",onClick:e.onCancel},{isRed:!1,info:"Reset connection",svgWidth:"10",svgHeight:"11",path:"M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",defaultFillRule:"evenodd",defaultClipRule:"evenodd",onClick:e.onResetConnection}]},this.snackbar.presentItem(t)}setAppSrc(e){this.appSrc=e}reloadUI(){document.location.reload()}inlineAccountsResponse(){return!1}inlineAddEthereumChain(e){return!1}inlineWatchAsset(){return!1}inlineSwitchEthereumChain(){return!1}setStandalone(e){this.standalone=e}isStandalone(){var e;return null!==(e=this.standalone)&&void 0!==e&&e}}},30701:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RelayMessageType=void 0,function(e){e.SESSION_ID_REQUEST="SESSION_ID_REQUEST",e.SESSION_ID_RESPONSE="SESSION_ID_RESPONSE",e.LINKED="LINKED",e.UNLINKED="UNLINKED",e.WEB3_REQUEST="WEB3_REQUEST",e.WEB3_REQUEST_CANCELED="WEB3_REQUEST_CANCELED",e.WEB3_RESPONSE="WEB3_RESPONSE"}(t.RelayMessageType||(t.RelayMessageType={}))},76388:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Session=void 0;const n=r(85730),i=r(31807),o="session:id",s="session:secret",a="session:linked";class l{constructor(e,t,r,o){this._storage=e,this._id=t||(0,i.randomBytesHex)(16),this._secret=r||(0,i.randomBytesHex)(32),this._key=(new n.sha256).update(`${this._id}, ${this._secret} WalletLink`).digest("hex"),this._linked=!!o}static load(e){const t=e.getItem(o),r=e.getItem(a),n=e.getItem(s);return t&&n?new l(e,t,n,"1"===r):null}static hash(e){return(new n.sha256).update(e).digest("hex")}get id(){return this._id}get secret(){return this._secret}get key(){return this._key}get linked(){return this._linked}set linked(e){this._linked=e,this.persistLinked()}save(){return this._storage.setItem(o,this._id),this._storage.setItem(s,this._secret),this.persistLinked(),this}persistLinked(){this._storage.setItem(a,this._linked?"1":"0")}}t.Session=l},31383:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WalletSDKRelay=void 0;const l=a(r(144)),c=r(68134),u=r(4476),d=r(95311),h=r(77594),f=r(31474),p=r(93352),g=r(31807),m=s(r(28595)),v=r(76388),y=r(84715),b=r(14393),w=r(65421),x=r(4398),_=r(30826),E=r(36098);class S extends y.WalletSDKRelayAbstract{constructor(e){var t;super(),this.accountsCallback=null,this.chainCallback=null,this.dappDefaultChainSubject=new c.BehaviorSubject(1),this.dappDefaultChain=1,this.appName="",this.appLogoUrl=null,this.subscriptions=new c.Subscription,this.linkAPIUrl=e.linkAPIUrl,this.storage=e.storage,this.options=e;const{session:r,ui:n,connection:i}=this.subscribe();if(this._session=r,this.connection=i,this.relayEventManager=e.relayEventManager,e.diagnosticLogger&&e.eventListener)throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");e.eventListener?this.diagnostic={log:e.eventListener.onEvent}:this.diagnostic=e.diagnosticLogger,this._reloadOnDisconnect=null===(t=e.reloadOnDisconnect)||void 0===t||t,this.ui=n}subscribe(){this.subscriptions.add(this.dappDefaultChainSubject.subscribe((e=>{this.dappDefaultChain!==e&&(this.dappDefaultChain=e)})));const e=v.Session.load(this.storage)||new v.Session(this.storage).save(),t=new h.WalletSDKConnection(e.id,e.key,this.linkAPIUrl,this.diagnostic);this.subscriptions.add(t.sessionConfig$.subscribe({next:e=>{this.onSessionConfigChanged(e)},error:()=>{var e;null===(e=this.diagnostic)||void 0===e||e.log(d.EVENTS.GENERAL_ERROR,{message:"error while invoking session config callback"})}})),this.subscriptions.add(t.incomingEvent$.pipe((0,u.filter)((e=>"Web3Response"===e.event))).subscribe({next:this.handleIncomingEvent})),this.subscriptions.add(t.linked$.pipe((0,u.skip)(1),(0,u.tap)((e=>{var t;this.isLinked=e;const r=this.storage.getItem(y.LOCAL_STORAGE_ADDRESSES_KEY);if(e&&(this.session.linked=e),this.isUnlinkedErrorState=!1,r){const n=r.split(" "),i="true"===this.storage.getItem("IsStandaloneSigning");if(""!==n[0]&&!e&&this.session.linked&&!i){this.isUnlinkedErrorState=!0;const e=this.getSessionIdHash();null===(t=this.diagnostic)||void 0===t||t.log(d.EVENTS.UNLINKED_ERROR_STATE,{sessionIdHash:e})}}}))).subscribe()),this.subscriptions.add(t.sessionConfig$.pipe((0,u.filter)((e=>!!e.metadata&&"1"===e.metadata.__destroyed))).subscribe((()=>{var e;const r=t.isDestroyed;return null===(e=this.diagnostic)||void 0===e||e.log(d.EVENTS.METADATA_DESTROYED,{alreadyDestroyed:r,sessionIdHash:this.getSessionIdHash()}),this.resetAndReload()}))),this.subscriptions.add(t.sessionConfig$.pipe((0,u.filter)((e=>e.metadata&&void 0!==e.metadata.WalletUsername))).pipe((0,u.mergeMap)((t=>m.decrypt(t.metadata.WalletUsername,e.secret)))).subscribe({next:e=>{this.storage.setItem(y.WALLET_USER_NAME_KEY,e)},error:()=>{var e;null===(e=this.diagnostic)||void 0===e||e.log(d.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"username"})}})),this.subscriptions.add(t.sessionConfig$.pipe((0,u.filter)((e=>e.metadata&&void 0!==e.metadata.AppVersion))).pipe((0,u.mergeMap)((t=>m.decrypt(t.metadata.AppVersion,e.secret)))).subscribe({next:e=>{this.storage.setItem(y.APP_VERSION_KEY,e)},error:()=>{var e;null===(e=this.diagnostic)||void 0===e||e.log(d.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"appversion"})}})),this.subscriptions.add(t.sessionConfig$.pipe((0,u.filter)((e=>e.metadata&&void 0!==e.metadata.ChainId&&void 0!==e.metadata.JsonRpcUrl))).pipe((0,u.mergeMap)((t=>(0,c.zip)(m.decrypt(t.metadata.ChainId,e.secret),m.decrypt(t.metadata.JsonRpcUrl,e.secret))))).pipe((0,u.distinctUntilChanged)()).subscribe({next:e=>{let[t,r]=e;this.chainCallback&&this.chainCallback(t,r)},error:()=>{var e;null===(e=this.diagnostic)||void 0===e||e.log(d.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"chainId|jsonRpcUrl"})}})),this.subscriptions.add(t.sessionConfig$.pipe((0,u.filter)((e=>e.metadata&&void 0!==e.metadata.EthereumAddress))).pipe((0,u.mergeMap)((t=>m.decrypt(t.metadata.EthereumAddress,e.secret)))).subscribe({next:e=>{this.accountsCallback&&this.accountsCallback([e]),S.accountRequestCallbackIds.size>0&&(Array.from(S.accountRequestCallbackIds.values()).forEach((t=>{const r=(0,E.Web3ResponseMessage)({id:t,response:(0,_.RequestEthereumAccountsResponse)([e])});this.invokeCallback(Object.assign(Object.assign({},r),{id:t}))})),S.accountRequestCallbackIds.clear())},error:()=>{var e;null===(e=this.diagnostic)||void 0===e||e.log(d.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"selectedAddress"})}})),this.subscriptions.add(t.sessionConfig$.pipe((0,u.filter)((e=>e.metadata&&void 0!==e.metadata.AppSrc))).pipe((0,u.mergeMap)((t=>m.decrypt(t.metadata.AppSrc,e.secret)))).subscribe({next:e=>{this.ui.setAppSrc(e)},error:()=>{var e;null===(e=this.diagnostic)||void 0===e||e.log(d.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"appSrc"})}}));const r=this.options.uiConstructor({linkAPIUrl:this.options.linkAPIUrl,version:this.options.version,darkMode:this.options.darkMode,session:e,connected$:t.connected$,chainId$:this.dappDefaultChainSubject});return t.connect(),{session:e,ui:r,connection:t}}attachUI(){this.ui.attach()}resetAndReload(){this.connection.setSessionMetadata("__destroyed","1").pipe((0,u.timeout)(1e3),(0,u.catchError)((e=>(0,c.of)(null)))).subscribe((e=>{var t,r,n;const i=this.ui.isStandalone();try{this.subscriptions.unsubscribe()}catch(u){null===(t=this.diagnostic)||void 0===t||t.log(d.EVENTS.GENERAL_ERROR,{message:"Had error unsubscribing"})}null===(r=this.diagnostic)||void 0===r||r.log(d.EVENTS.SESSION_STATE_CHANGE,{method:"relay::resetAndReload",sessionMetadataChange:"__destroyed, 1",sessionIdHash:this.getSessionIdHash()}),this.connection.destroy();const o=v.Session.load(this.storage);if((null===o||void 0===o?void 0:o.id)===this._session.id?this.storage.clear():o&&(null===(n=this.diagnostic)||void 0===n||n.log(d.EVENTS.SKIPPED_CLEARING_SESSION,{sessionIdHash:this.getSessionIdHash(),storedSessionIdHash:v.Session.hash(o.id)})),this._reloadOnDisconnect)return void this.ui.reloadUI();this.accountsCallback&&this.accountsCallback([],!0),this.subscriptions=new c.Subscription;const{session:s,ui:a,connection:l}=this.subscribe();this._session=s,this.connection=l,this.ui=a,i&&this.ui.setStandalone&&this.ui.setStandalone(!0),this.attachUI()}),(e=>{var t;null===(t=this.diagnostic)||void 0===t||t.log(d.EVENTS.FAILURE,{method:"relay::resetAndReload",message:`failed to reset and reload with ${e}`,sessionIdHash:this.getSessionIdHash()})}))}setAppInfo(e,t){this.appName=e,this.appLogoUrl=t}getStorageItem(e){return this.storage.getItem(e)}get session(){return this._session}setStorageItem(e,t){this.storage.setItem(e,t)}signEthereumMessage(e,t,r,n){return this.sendRequest({method:b.Web3Method.signEthereumMessage,params:{message:(0,g.hexStringFromBuffer)(e,!0),address:t,addPrefix:r,typedDataJson:n||null}})}ethereumAddressFromSignedMessage(e,t,r){return this.sendRequest({method:b.Web3Method.ethereumAddressFromSignedMessage,params:{message:(0,g.hexStringFromBuffer)(e,!0),signature:(0,g.hexStringFromBuffer)(t,!0),addPrefix:r}})}signEthereumTransaction(e){return this.sendRequest({method:b.Web3Method.signEthereumTransaction,params:{fromAddress:e.fromAddress,toAddress:e.toAddress,weiValue:(0,g.bigIntStringFromBN)(e.weiValue),data:(0,g.hexStringFromBuffer)(e.data,!0),nonce:e.nonce,gasPriceInWei:e.gasPriceInWei?(0,g.bigIntStringFromBN)(e.gasPriceInWei):null,maxFeePerGas:e.gasPriceInWei?(0,g.bigIntStringFromBN)(e.gasPriceInWei):null,maxPriorityFeePerGas:e.gasPriceInWei?(0,g.bigIntStringFromBN)(e.gasPriceInWei):null,gasLimit:e.gasLimit?(0,g.bigIntStringFromBN)(e.gasLimit):null,chainId:e.chainId,shouldSubmit:!1}})}signAndSubmitEthereumTransaction(e){return this.sendRequest({method:b.Web3Method.signEthereumTransaction,params:{fromAddress:e.fromAddress,toAddress:e.toAddress,weiValue:(0,g.bigIntStringFromBN)(e.weiValue),data:(0,g.hexStringFromBuffer)(e.data,!0),nonce:e.nonce,gasPriceInWei:e.gasPriceInWei?(0,g.bigIntStringFromBN)(e.gasPriceInWei):null,maxFeePerGas:e.maxFeePerGas?(0,g.bigIntStringFromBN)(e.maxFeePerGas):null,maxPriorityFeePerGas:e.maxPriorityFeePerGas?(0,g.bigIntStringFromBN)(e.maxPriorityFeePerGas):null,gasLimit:e.gasLimit?(0,g.bigIntStringFromBN)(e.gasLimit):null,chainId:e.chainId,shouldSubmit:!0}})}submitEthereumTransaction(e,t){return this.sendRequest({method:b.Web3Method.submitEthereumTransaction,params:{signedTransaction:(0,g.hexStringFromBuffer)(e,!0),chainId:t}})}scanQRCode(e){return this.sendRequest({method:b.Web3Method.scanQRCode,params:{regExp:e}})}getQRCodeUrl(){return(0,g.createQrUrl)(this._session.id,this._session.secret,this.linkAPIUrl,!1,this.options.version,this.dappDefaultChain)}genericRequest(e,t){return this.sendRequest({method:b.Web3Method.generic,params:{action:t,data:e}})}sendGenericMessage(e){return this.sendRequest(e)}sendRequest(e){let t=null;const r=(0,g.randomBytesHex)(8),n=n=>{this.publishWeb3RequestCanceledEvent(r),this.handleErrorResponse(r,e.method,n),null===t||void 0===t||t()};return{promise:new Promise(((i,o)=>{this.ui.isStandalone()||(t=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:n,onResetConnection:this.resetAndReload})),this.relayEventManager.callbacks.set(r,(e=>{if(null===t||void 0===t||t(),e.errorMessage)return o(new Error(e.errorMessage));i(e)})),this.ui.isStandalone()?this.sendRequestStandalone(r,e):this.publishWeb3RequestEvent(r,e)})),cancel:n}}setConnectDisabled(e){this.ui.setConnectDisabled(e)}setAccountsCallback(e){this.accountsCallback=e}setChainCallback(e){this.chainCallback=e}setDappDefaultChainCallback(e){this.dappDefaultChainSubject.next(e)}publishWeb3RequestEvent(e,t){var r;const n=(0,x.Web3RequestMessage)({id:e,request:t}),i=v.Session.load(this.storage);null===(r=this.diagnostic)||void 0===r||r.log(d.EVENTS.WEB3_REQUEST,{eventId:n.id,method:`relay::${n.request.method}`,sessionIdHash:this.getSessionIdHash(),storedSessionIdHash:i?v.Session.hash(i.id):"",isSessionMismatched:((null===i||void 0===i?void 0:i.id)!==this._session.id).toString()}),this.subscriptions.add(this.publishEvent("Web3Request",n,!0).subscribe({next:e=>{var t;null===(t=this.diagnostic)||void 0===t||t.log(d.EVENTS.WEB3_REQUEST_PUBLISHED,{eventId:n.id,method:`relay::${n.request.method}`,sessionIdHash:this.getSessionIdHash(),storedSessionIdHash:i?v.Session.hash(i.id):"",isSessionMismatched:((null===i||void 0===i?void 0:i.id)!==this._session.id).toString()})},error:e=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:n.id,response:{method:n.request.method,errorMessage:e.message}}))}}))}publishWeb3RequestCanceledEvent(e){const t=(0,w.Web3RequestCanceledMessage)(e);this.subscriptions.add(this.publishEvent("Web3RequestCanceled",t,!1).subscribe())}publishEvent(e,t,r){const n=this.session.secret;return new c.Observable((e=>{m.encrypt(JSON.stringify(Object.assign(Object.assign({},t),{origin:location.origin})),n).then((t=>{e.next(t),e.complete()}))})).pipe((0,u.mergeMap)((t=>this.connection.publishEvent(e,t,r))))}handleIncomingEvent(e){try{this.subscriptions.add((0,c.from)(m.decrypt(e.data,this.session.secret)).pipe((0,u.map)((e=>JSON.parse(e)))).subscribe({next:e=>{const t=(0,E.isWeb3ResponseMessage)(e)?e:null;t&&this.handleWeb3ResponseMessage(t)},error:()=>{var e;null===(e=this.diagnostic)||void 0===e||e.log(d.EVENTS.GENERAL_ERROR,{message:"Had error decrypting",value:"incomingEvent"})}}))}catch(t){return}}handleWeb3ResponseMessage(e){var t;const{response:r}=e;if(null===(t=this.diagnostic)||void 0===t||t.log(d.EVENTS.WEB3_RESPONSE,{eventId:e.id,method:`relay::${r.method}`,sessionIdHash:this.getSessionIdHash()}),(0,_.isRequestEthereumAccountsResponse)(r))return S.accountRequestCallbackIds.forEach((t=>this.invokeCallback(Object.assign(Object.assign({},e),{id:t})))),void S.accountRequestCallbackIds.clear();this.invokeCallback(e)}handleErrorResponse(e,t,r,n){var i;const o=null!==(i=null===r||void 0===r?void 0:r.message)&&void 0!==i?i:(0,f.standardErrorMessage)(n);this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:e,response:{method:t,errorMessage:o,errorCode:n}}))}invokeCallback(e){const t=this.relayEventManager.callbacks.get(e.id);t&&(t(e.response),this.relayEventManager.callbacks.delete(e.id))}requestEthereumAccounts(){const e={method:b.Web3Method.requestEthereumAccounts,params:{appName:this.appName,appLogoUrl:this.appLogoUrl||null}},t=(0,g.randomBytesHex)(8),r=r=>{this.publishWeb3RequestCanceledEvent(t),this.handleErrorResponse(t,e.method,r)};return{promise:new Promise(((n,i)=>{var o;this.relayEventManager.callbacks.set(t,(e=>{if(this.ui.hideRequestEthereumAccounts(),e.errorMessage)return i(new Error(e.errorMessage));n(e)}));const s=(null===(o=null===window||void 0===window?void 0:window.navigator)||void 0===o?void 0:o.userAgent)||null;if(s&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s)){let e;try{e=(0,g.isInIFrame)()&&window.top?window.top.location:window.location}catch(a){e=window.location}e.href=`https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(e.href)}`}else{if(this.ui.inlineAccountsResponse()){const e=e=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:t,response:(0,_.RequestEthereumAccountsResponse)(e)}))};this.ui.requestEthereumAccounts({onCancel:r,onAccounts:e})}else{const e=f.standardErrors.provider.userRejectedRequest("User denied account authorization");this.ui.requestEthereumAccounts({onCancel:()=>r(e)})}S.accountRequestCallbackIds.add(t),this.ui.inlineAccountsResponse()||this.ui.isStandalone()||this.publishWeb3RequestEvent(t,e)}})),cancel:r}}selectProvider(e){const t={method:b.Web3Method.selectProvider,params:{providerOptions:e}},r=(0,g.randomBytesHex)(8);return{cancel:e=>{this.publishWeb3RequestCanceledEvent(r),this.handleErrorResponse(r,t.method,e)},promise:new Promise(((t,n)=>{this.relayEventManager.callbacks.set(r,(e=>{if(e.errorMessage)return n(new Error(e.errorMessage));t(e)}));this.ui.selectProvider&&this.ui.selectProvider({onApprove:e=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:r,response:(0,_.SelectProviderResponse)(e)}))},onCancel:e=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:r,response:(0,_.SelectProviderResponse)(p.ProviderType.Unselected)}))},providerOptions:e})}))}}watchAsset(e,t,r,n,i,o){const s={method:b.Web3Method.watchAsset,params:{type:e,options:{address:t,symbol:r,decimals:n,image:i},chainId:o}};let a=null;const l=(0,g.randomBytesHex)(8),c=e=>{this.publishWeb3RequestCanceledEvent(l),this.handleErrorResponse(l,s.method,e),null===a||void 0===a||a()};this.ui.inlineWatchAsset()||(a=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:c,onResetConnection:this.resetAndReload}));return{cancel:c,promise:new Promise(((c,u)=>{this.relayEventManager.callbacks.set(l,(e=>{if(null===a||void 0===a||a(),e.errorMessage)return u(new Error(e.errorMessage));c(e)}));const d=e=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:l,response:(0,_.WatchAssetReponse)(!1)}))},h=()=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:l,response:(0,_.WatchAssetReponse)(!0)}))};this.ui.inlineWatchAsset()&&this.ui.watchAsset({onApprove:h,onCancel:d,type:e,address:t,symbol:r,decimals:n,image:i,chainId:o}),this.ui.inlineWatchAsset()||this.ui.isStandalone()||this.publishWeb3RequestEvent(l,s)}))}}addEthereumChain(e,t,r,n,i,o){const s={method:b.Web3Method.addEthereumChain,params:{chainId:e,rpcUrls:t,blockExplorerUrls:n,chainName:i,iconUrls:r,nativeCurrency:o}};let a=null;const l=(0,g.randomBytesHex)(8),c=e=>{this.publishWeb3RequestCanceledEvent(l),this.handleErrorResponse(l,s.method,e),null===a||void 0===a||a()};this.ui.inlineAddEthereumChain(e)||(a=this.ui.showConnecting({isUnlinkedErrorState:this.isUnlinkedErrorState,onCancel:c,onResetConnection:this.resetAndReload}));return{promise:new Promise(((t,r)=>{this.relayEventManager.callbacks.set(l,(e=>{if(null===a||void 0===a||a(),e.errorMessage)return r(new Error(e.errorMessage));t(e)}));const n=e=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:l,response:(0,_.AddEthereumChainResponse)({isApproved:!1,rpcUrl:""})}))},i=e=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:l,response:(0,_.AddEthereumChainResponse)({isApproved:!0,rpcUrl:e})}))};this.ui.inlineAddEthereumChain(e)&&this.ui.addEthereumChain({onCancel:n,onApprove:i,chainId:s.params.chainId,rpcUrls:s.params.rpcUrls,blockExplorerUrls:s.params.blockExplorerUrls,chainName:s.params.chainName,iconUrls:s.params.iconUrls,nativeCurrency:s.params.nativeCurrency}),this.ui.inlineAddEthereumChain(e)||this.ui.isStandalone()||this.publishWeb3RequestEvent(l,s)})),cancel:c}}switchEthereumChain(e,t){const r={method:b.Web3Method.switchEthereumChain,params:Object.assign({chainId:e},{address:t})},n=(0,g.randomBytesHex)(8);return{promise:new Promise(((t,i)=>{this.relayEventManager.callbacks.set(n,(e=>(0,_.isErrorResponse)(e)&&e.errorCode?i(f.standardErrors.provider.custom({code:e.errorCode,message:"Unrecognized chain ID. Try adding the chain using addEthereumChain first."})):e.errorMessage?i(new Error(e.errorMessage)):void t(e)));this.ui.switchEthereumChain({onCancel:t=>{var r;if(t){const i=null!==(r=(0,f.getErrorCode)(t))&&void 0!==r?r:f.standardErrorCodes.provider.unsupportedChain;this.handleErrorResponse(n,b.Web3Method.switchEthereumChain,t instanceof Error?t:f.standardErrors.provider.unsupportedChain(e),i)}else this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:n,response:(0,_.SwitchEthereumChainResponse)({isApproved:!1,rpcUrl:""})}))},onApprove:e=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:n,response:(0,_.SwitchEthereumChainResponse)({isApproved:!0,rpcUrl:e})}))},chainId:r.params.chainId,address:r.params.address}),this.ui.inlineSwitchEthereumChain()||this.ui.isStandalone()||this.publishWeb3RequestEvent(n,r)})),cancel:e=>{this.publishWeb3RequestCanceledEvent(n),this.handleErrorResponse(n,r.method,e)}}}inlineAddEthereumChain(e){return this.ui.inlineAddEthereumChain(e)}getSessionIdHash(){return v.Session.hash(this._session.id)}sendRequestStandalone(e,t){const r=r=>{this.handleErrorResponse(e,t.method,r)},n=t=>{this.handleWeb3ResponseMessage((0,E.Web3ResponseMessage)({id:e,response:t}))};switch(t.method){case b.Web3Method.signEthereumMessage:this.ui.signEthereumMessage({request:t,onSuccess:n,onCancel:r});break;case b.Web3Method.signEthereumTransaction:this.ui.signEthereumTransaction({request:t,onSuccess:n,onCancel:r});break;case b.Web3Method.submitEthereumTransaction:this.ui.submitEthereumTransaction({request:t,onSuccess:n,onCancel:r});break;case b.Web3Method.ethereumAddressFromSignedMessage:this.ui.ethereumAddressFromSignedMessage({request:t,onSuccess:n});break;default:r()}}onSessionConfigChanged(e){}}S.accountRequestCallbackIds=new Set,o([l.default],S.prototype,"resetAndReload",null),o([l.default],S.prototype,"handleIncomingEvent",null),t.WalletSDKRelay=S},84715:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WalletSDKRelayAbstract=t.APP_VERSION_KEY=t.LOCAL_STORAGE_ADDRESSES_KEY=t.WALLET_USER_NAME_KEY=void 0;const n=r(31474);t.WALLET_USER_NAME_KEY="walletUsername",t.LOCAL_STORAGE_ADDRESSES_KEY="Addresses",t.APP_VERSION_KEY="AppVersion";t.WalletSDKRelayAbstract=class{async makeEthereumJSONRPCRequest(e,t){if(!t)throw new Error("Error: No jsonRpcUrl provided");return window.fetch(t,{method:"POST",body:JSON.stringify(e),mode:"cors",headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>{if(!t)throw n.standardErrors.rpc.parse({});const r=t,{error:i}=r;if(i)throw(0,n.serializeError)(i,e.method);return r}))}}},75457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WalletSDKRelayEventManager=void 0;const n=r(31807);t.WalletSDKRelayEventManager=class{constructor(){this._nextRequestId=0,this.callbacks=new Map}makeRequestId(){this._nextRequestId=(this._nextRequestId+1)%2147483647;const e=this._nextRequestId,t=(0,n.prepend0x)(e.toString(16));return this.callbacks.get(t)&&this.callbacks.delete(t),e}}},14393:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Web3Method=void 0,function(e){e.requestEthereumAccounts="requestEthereumAccounts",e.signEthereumMessage="signEthereumMessage",e.signEthereumTransaction="signEthereumTransaction",e.submitEthereumTransaction="submitEthereumTransaction",e.ethereumAddressFromSignedMessage="ethereumAddressFromSignedMessage",e.scanQRCode="scanQRCode",e.generic="generic",e.childRequestEthereumAccounts="childRequestEthereumAccounts",e.addEthereumChain="addEthereumChain",e.switchEthereumChain="switchEthereumChain",e.makeEthereumJSONRPCRequest="makeEthereumJSONRPCRequest",e.watchAsset="watchAsset",e.selectProvider="selectProvider"}(t.Web3Method||(t.Web3Method={}))},65421:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Web3RequestCanceledMessage=void 0;const n=r(30701);t.Web3RequestCanceledMessage=function(e){return{type:n.RelayMessageType.WEB3_REQUEST_CANCELED,id:e}}},4398:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Web3RequestMessage=void 0;const n=r(30701);t.Web3RequestMessage=function(e){return Object.assign({type:n.RelayMessageType.WEB3_REQUEST},e)}},30826:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EthereumAddressFromSignedMessageResponse=t.SubmitEthereumTransactionResponse=t.SignEthereumTransactionResponse=t.SignEthereumMessageResponse=t.isRequestEthereumAccountsResponse=t.SelectProviderResponse=t.WatchAssetReponse=t.RequestEthereumAccountsResponse=t.SwitchEthereumChainResponse=t.AddEthereumChainResponse=t.isErrorResponse=void 0;const n=r(14393);t.isErrorResponse=function(e){var t,r;return void 0!==(null===(t=e)||void 0===t?void 0:t.method)&&void 0!==(null===(r=e)||void 0===r?void 0:r.errorMessage)},t.AddEthereumChainResponse=function(e){return{method:n.Web3Method.addEthereumChain,result:e}},t.SwitchEthereumChainResponse=function(e){return{method:n.Web3Method.switchEthereumChain,result:e}},t.RequestEthereumAccountsResponse=function(e){return{method:n.Web3Method.requestEthereumAccounts,result:e}},t.WatchAssetReponse=function(e){return{method:n.Web3Method.watchAsset,result:e}},t.SelectProviderResponse=function(e){return{method:n.Web3Method.selectProvider,result:e}},t.isRequestEthereumAccountsResponse=function(e){return e&&e.method===n.Web3Method.requestEthereumAccounts},t.SignEthereumMessageResponse=function(e){return{method:n.Web3Method.signEthereumMessage,result:e}},t.SignEthereumTransactionResponse=function(e){return{method:n.Web3Method.signEthereumTransaction,result:e}},t.SubmitEthereumTransactionResponse=function(e){return{method:n.Web3Method.submitEthereumTransaction,result:e}},t.EthereumAddressFromSignedMessageResponse=function(e){return{method:n.Web3Method.ethereumAddressFromSignedMessage,result:e}}},36098:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isWeb3ResponseMessage=t.Web3ResponseMessage=void 0;const n=r(30701);t.Web3ResponseMessage=function(e){return Object.assign({type:n.RelayMessageType.WEB3_RESPONSE},e)},t.isWeb3ResponseMessage=function(e){return e&&e.type===n.RelayMessageType.WEB3_RESPONSE}},28595:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decrypt=t.encrypt=void 0;const n=r(31807);t.encrypt=async function(e,t){if(64!==t.length)throw Error("secret must be 256 bits");const r=crypto.getRandomValues(new Uint8Array(12)),i=await crypto.subtle.importKey("raw",(0,n.hexStringToUint8Array)(t),{name:"aes-gcm"},!1,["encrypt","decrypt"]),o=new TextEncoder,s=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:r},i,o.encode(e)),a=s.slice(s.byteLength-16),l=s.slice(0,s.byteLength-16),c=new Uint8Array(a),u=new Uint8Array(l),d=new Uint8Array([...r,...c,...u]);return(0,n.uint8ArrayToHex)(d)},t.decrypt=function(e,t){if(64!==t.length)throw Error("secret must be 256 bits");return new Promise(((r,i)=>{!async function(){const o=await crypto.subtle.importKey("raw",(0,n.hexStringToUint8Array)(t),{name:"aes-gcm"},!1,["encrypt","decrypt"]),s=(0,n.hexStringToUint8Array)(e),a=s.slice(0,12),l=s.slice(12,28),c=s.slice(28),u=new Uint8Array([...c,...l]),d={name:"AES-GCM",iv:new Uint8Array(a)};try{const e=await window.crypto.subtle.decrypt(d,o,u),t=new TextDecoder;r(t.decode(e))}catch(h){i(h)}}()}))}},93352:function(e,t){"use strict";function r(){return e=>e}Object.defineProperty(t,"__esModule",{value:!0}),t.ProviderType=t.RegExpString=t.IntNumber=t.BigIntString=t.AddressString=t.HexString=t.OpaqueType=void 0,t.OpaqueType=r,t.HexString=e=>e,t.AddressString=e=>e,t.BigIntString=e=>e,t.IntNumber=function(e){return Math.floor(e)},t.RegExpString=e=>e,function(e){e.CoinbaseWallet="CoinbaseWallet",e.MetaMask="MetaMask",e.Unselected=""}(t.ProviderType||(t.ProviderType={}))},31807:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isInIFrame=t.createQrUrl=t.getFavicon=t.range=t.isBigNumber=t.ensureParsedJSONObject=t.ensureBN=t.ensureRegExpString=t.ensureIntNumber=t.ensureBuffer=t.ensureAddressString=t.ensureEvenLengthHexString=t.ensureHexString=t.isHexString=t.prepend0x=t.strip0x=t.has0xPrefix=t.hexStringFromIntNumber=t.intNumberFromHexString=t.bigIntStringFromBN=t.hexStringFromBuffer=t.hexStringToUint8Array=t.uint8ArrayToHex=t.randomBytesHex=void 0;const i=n(r(80518)),o=r(75847),s=r(31474),a=r(93352),l=/^[0-9]*$/,c=/^[a-f0-9]*$/;function u(e){return[...e].map((e=>e.toString(16).padStart(2,"0"))).join("")}function d(e){return e.startsWith("0x")||e.startsWith("0X")}function h(e){return d(e)?e.slice(2):e}function f(e){return d(e)?"0x"+e.slice(2):"0x"+e}function p(e){if("string"!==typeof e)return!1;const t=h(e).toLowerCase();return c.test(t)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("string"===typeof e){const r=h(e).toLowerCase();if(c.test(r))return(0,a.HexString)(t?"0x"+r:r)}throw s.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)}function m(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=g(e,!1);return r.length%2===1&&(r=(0,a.HexString)("0"+r)),t?(0,a.HexString)("0x"+r):r}function v(e){if("number"===typeof e&&Number.isInteger(e))return(0,a.IntNumber)(e);if("string"===typeof e){if(l.test(e))return(0,a.IntNumber)(Number(e));if(p(e))return(0,a.IntNumber)(new i.default(m(e,!1),16).toNumber())}throw s.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)}function y(e){if(null==e||"function"!==typeof e.constructor)return!1;const{constructor:t}=e;return"function"===typeof t.config&&"number"===typeof t.EUCLID}t.randomBytesHex=function(e){return u(crypto.getRandomValues(new Uint8Array(e)))},t.uint8ArrayToHex=u,t.hexStringToUint8Array=function(e){return new Uint8Array(e.match(/.{1,2}/g).map((e=>parseInt(e,16))))},t.hexStringFromBuffer=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=e.toString("hex");return(0,a.HexString)(t?"0x"+r:r)},t.bigIntStringFromBN=function(e){return(0,a.BigIntString)(e.toString(10))},t.intNumberFromHexString=function(e){return(0,a.IntNumber)(new i.default(m(e,!1),16).toNumber())},t.hexStringFromIntNumber=function(e){return(0,a.HexString)("0x"+new i.default(e).toString(16))},t.has0xPrefix=d,t.strip0x=h,t.prepend0x=f,t.isHexString=p,t.ensureHexString=g,t.ensureEvenLengthHexString=m,t.ensureAddressString=function(e){if("string"===typeof e){const t=h(e).toLowerCase();if(p(t)&&40===t.length)return(0,a.AddressString)(f(t))}throw s.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)},t.ensureBuffer=function(e){if(Buffer.isBuffer(e))return e;if("string"===typeof e){if(p(e)){const t=m(e,!1);return Buffer.from(t,"hex")}return Buffer.from(e,"utf8")}throw s.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)},t.ensureIntNumber=v,t.ensureRegExpString=function(e){if(e instanceof RegExp)return(0,a.RegExpString)(e.toString());throw s.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)},t.ensureBN=function(e){if(null!==e&&(i.default.isBN(e)||y(e)))return new i.default(e.toString(10),10);if("number"===typeof e)return new i.default(v(e));if("string"===typeof e){if(l.test(e))return new i.default(e,10);if(p(e))return new i.default(m(e,!1),16)}throw s.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)},t.ensureParsedJSONObject=function(e){if("string"===typeof e)return JSON.parse(e);if("object"===typeof e)return e;throw s.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)},t.isBigNumber=y,t.range=function(e,t){return Array.from({length:t-e},((t,r)=>e+r))},t.getFavicon=function(){const e=document.querySelector('link[sizes="192x192"]')||document.querySelector('link[sizes="180x180"]')||document.querySelector('link[rel="icon"]')||document.querySelector('link[rel="shortcut icon"]'),{protocol:t,host:r}=document.location,n=e?e.getAttribute("href"):null;return!n||n.startsWith("javascript:")?null:n.startsWith("http://")||n.startsWith("https://")||n.startsWith("data:")?n:n.startsWith("//")?t+n:`${t}//${r}${n}`},t.createQrUrl=function(e,t,r,n,i,s){const a=n?"parent-id":"id";return`${r}/#/link?${(0,o.stringify)({[a]:e,secret:t,server:r,v:i,chainId:s})}`},t.isInIFrame=function(){try{return null!==window.frameElement}catch(e){return!1}}},45007:function(e,t,r){const n=r(31531),i=r(80518);function o(e){return e.startsWith("int[")?"int256"+e.slice(3):"int"===e?"int256":e.startsWith("uint[")?"uint256"+e.slice(4):"uint"===e?"uint256":e.startsWith("fixed[")?"fixed128x128"+e.slice(5):"fixed"===e?"fixed128x128":e.startsWith("ufixed[")?"ufixed128x128"+e.slice(6):"ufixed"===e?"ufixed128x128":e}function s(e){return parseInt(/^\D+(\d+)$/.exec(e)[1],10)}function a(e){var t=/^\D+(\d+)x(\d+)$/.exec(e);return[parseInt(t[1],10),parseInt(t[2],10)]}function l(e){var t=e.match(/(.*)\[(.*?)\]$/);return t?""===t[2]?"dynamic":parseInt(t[2],10):null}function c(e){var t=typeof e;if("string"===t)return n.isHexString(e)?new i(n.stripHexPrefix(e),16):new i(e,10);if("number"===t)return new i(e);if(e.toArray)return e;throw new Error("Argument is not a number")}function u(e,t){var r,o,d,h;if("address"===e)return u("uint160",c(t));if("bool"===e)return u("uint8",t?1:0);if("string"===e)return u("bytes",new Buffer(t,"utf8"));if(function(e){return e.lastIndexOf("]")===e.length-1}(e)){if("undefined"===typeof t.length)throw new Error("Not an array?");if("dynamic"!==(r=l(e))&&0!==r&&t.length>r)throw new Error("Elements exceed array size: "+r);for(h in d=[],e=e.slice(0,e.lastIndexOf("[")),"string"===typeof t&&(t=JSON.parse(t)),t)d.push(u(e,t[h]));if("dynamic"===r){var f=u("uint256",t.length);d.unshift(f)}return Buffer.concat(d)}if("bytes"===e)return t=new Buffer(t),d=Buffer.concat([u("uint256",t.length),t]),t.length%32!==0&&(d=Buffer.concat([d,n.zeros(32-t.length%32)])),d;if(e.startsWith("bytes")){if((r=s(e))<1||r>32)throw new Error("Invalid bytes<N> width: "+r);return n.setLengthRight(t,32)}if(e.startsWith("uint")){if((r=s(e))%8||r<8||r>256)throw new Error("Invalid uint<N> width: "+r);if((o=c(t)).bitLength()>r)throw new Error("Supplied uint exceeds width: "+r+" vs "+o.bitLength());if(o<0)throw new Error("Supplied uint is negative");return o.toArrayLike(Buffer,"be",32)}if(e.startsWith("int")){if((r=s(e))%8||r<8||r>256)throw new Error("Invalid int<N> width: "+r);if((o=c(t)).bitLength()>r)throw new Error("Supplied int exceeds width: "+r+" vs "+o.bitLength());return o.toTwos(256).toArrayLike(Buffer,"be",32)}if(e.startsWith("ufixed")){if(r=a(e),(o=c(t))<0)throw new Error("Supplied ufixed is negative");return u("uint256",o.mul(new i(2).pow(new i(r[1]))))}if(e.startsWith("fixed"))return r=a(e),u("int256",c(t).mul(new i(2).pow(new i(r[1]))));throw new Error("Unsupported or invalid type: "+e)}function d(e){return"string"===e||"bytes"===e||"dynamic"===l(e)}function h(e,t){if(e.length!==t.length)throw new Error("Number of types are not matching the values");for(var r,i,a=[],l=0;l<e.length;l++){var u=o(e[l]),d=t[l];if("bytes"===u)a.push(d);else if("string"===u)a.push(new Buffer(d,"utf8"));else if("bool"===u)a.push(new Buffer(d?"01":"00","hex"));else if("address"===u)a.push(n.setLength(d,20));else if(u.startsWith("bytes")){if((r=s(u))<1||r>32)throw new Error("Invalid bytes<N> width: "+r);a.push(n.setLengthRight(d,r))}else if(u.startsWith("uint")){if((r=s(u))%8||r<8||r>256)throw new Error("Invalid uint<N> width: "+r);if((i=c(d)).bitLength()>r)throw new Error("Supplied uint exceeds width: "+r+" vs "+i.bitLength());a.push(i.toArrayLike(Buffer,"be",r/8))}else{if(!u.startsWith("int"))throw new Error("Unsupported or invalid type: "+u);if((r=s(u))%8||r<8||r>256)throw new Error("Invalid int<N> width: "+r);if((i=c(d)).bitLength()>r)throw new Error("Supplied int exceeds width: "+r+" vs "+i.bitLength());a.push(i.toTwos(r).toArrayLike(Buffer,"be",r/8))}}return Buffer.concat(a)}e.exports={rawEncode:function(e,t){var r=[],n=[],i=32*e.length;for(var s in e){var a=o(e[s]),l=u(a,t[s]);d(a)?(r.push(u("uint256",i)),n.push(l),i+=l.length):r.push(l)}return Buffer.concat(r.concat(n))},solidityPack:h,soliditySHA3:function(e,t){return n.keccak(h(e,t))}}},76465:function(e,t,r){const n=r(31531),i=r(45007),o={type:"object",properties:{types:{type:"object",additionalProperties:{type:"array",items:{type:"object",properties:{name:{type:"string"},type:{type:"string"}},required:["name","type"]}}},primaryType:{type:"string"},domain:{type:"object"},message:{type:"object"}},required:["types","primaryType","domain","message"]},s={encodeData(e,t,r){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const s=["bytes32"],a=[this.hashType(e,r)];if(o){const l=(e,t,s)=>{if(void 0!==r[t])return["bytes32",null==s?"0x0000000000000000000000000000000000000000000000000000000000000000":n.keccak(this.encodeData(t,s,r,o))];if(void 0===s)throw new Error(`missing value for field ${e} of type ${t}`);if("bytes"===t)return["bytes32",n.keccak(s)];if("string"===t)return"string"===typeof s&&(s=Buffer.from(s,"utf8")),["bytes32",n.keccak(s)];if(t.lastIndexOf("]")===t.length-1){const r=t.slice(0,t.lastIndexOf("[")),o=s.map((t=>l(e,r,t)));return["bytes32",n.keccak(i.rawEncode(o.map((e=>{let[t]=e;return t})),o.map((e=>{let[,t]=e;return t}))))]}return[t,s]};for(const n of r[e]){const[e,r]=l(n.name,n.type,t[n.name]);s.push(e),a.push(r)}}else for(const i of r[e]){let e=t[i.name];if(void 0!==e)if("bytes"===i.type)s.push("bytes32"),e=n.keccak(e),a.push(e);else if("string"===i.type)s.push("bytes32"),"string"===typeof e&&(e=Buffer.from(e,"utf8")),e=n.keccak(e),a.push(e);else if(void 0!==r[i.type])s.push("bytes32"),e=n.keccak(this.encodeData(i.type,e,r,o)),a.push(e);else{if(i.type.lastIndexOf("]")===i.type.length-1)throw new Error("Arrays currently unimplemented in encodeData");s.push(i.type),a.push(e)}}return i.rawEncode(s,a)},encodeType(e,t){let r="",n=this.findTypeDependencies(e,t).filter((t=>t!==e));n=[e].concat(n.sort());for(const i of n){if(!t[i])throw new Error("No type definition specified: "+i);r+=i+"("+t[i].map((e=>{let{name:t,type:r}=e;return r+" "+t})).join(",")+")"}return r},findTypeDependencies(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(e=e.match(/^\w*/)[0],r.includes(e)||void 0===t[e])return r;r.push(e);for(const n of t[e])for(const e of this.findTypeDependencies(n.type,t,r))!r.includes(e)&&r.push(e);return r},hashStruct(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n.keccak(this.encodeData(e,t,r,i))},hashType(e,t){return n.keccak(this.encodeType(e,t))},sanitizeData(e){const t={};for(const r in o.properties)e[r]&&(t[r]=e[r]);return t.types&&(t.types=Object.assign({EIP712Domain:[]},t.types)),t},hash(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=this.sanitizeData(e),i=[Buffer.from("1901","hex")];return i.push(this.hashStruct("EIP712Domain",r.domain,r.types,t)),"EIP712Domain"!==r.primaryType&&i.push(this.hashStruct(r.primaryType,r.message,r.types,t)),n.keccak(Buffer.concat(i))}};e.exports={TYPED_MESSAGE_SCHEMA:o,TypedDataUtils:s,hashForSignTypedDataLegacy:function(e){return function(e){const t=new Error("Expect argument to be non-empty array");if("object"!==typeof e||!e.length)throw t;const r=e.map((function(e){return"bytes"===e.type?n.toBuffer(e.value):e.value})),o=e.map((function(e){return e.type})),s=e.map((function(e){if(!e.name)throw t;return e.type+" "+e.name}));return i.soliditySHA3(["bytes32","bytes32"],[i.soliditySHA3(new Array(e.length).fill("string"),s),i.soliditySHA3(o,r)])}(e.data)},hashForSignTypedData_v3:function(e){return s.hash(e.data,!1)},hashForSignTypedData_v4:function(e){return s.hash(e.data)}}},31531:function(e,t,r){const n=r(51321),i=r(80518);function o(e){return Buffer.allocUnsafe(e).fill(0)}function s(e,t,r){const n=o(t);return e=a(e),r?e.length<t?(e.copy(n),n):e.slice(0,t):e.length<t?(e.copy(n,t-e.length),n):e.slice(-t)}function a(e){if(!Buffer.isBuffer(e))if(Array.isArray(e))e=Buffer.from(e);else if("string"===typeof e)e=l(e)?Buffer.from((t=c(e)).length%2?"0"+t:t,"hex"):Buffer.from(e);else if("number"===typeof e)e=intToBuffer(e);else if(null===e||void 0===e)e=Buffer.allocUnsafe(0);else if(i.isBN(e))e=e.toArrayLike(Buffer);else{if(!e.toArray)throw new Error("invalid type");e=Buffer.from(e.toArray())}var t;return e}function l(e){return"string"===typeof e&&e.match(/^0x[0-9A-Fa-f]*$/)}function c(e){return"string"===typeof e&&e.startsWith("0x")?e.slice(2):e}e.exports={zeros:o,setLength:s,setLengthRight:function(e,t){return s(e,t,!0)},isHexString:l,stripHexPrefix:c,toBuffer:a,bufferToHex:function(e){return"0x"+(e=a(e)).toString("hex")},keccak:function(e,t){return e=a(e),t||(t=256),n("keccak"+t).update(e).digest()}}},58765:function(e){function t(e){this.mode=n.MODE_8BIT_BYTE,this.data=e,this.parsedData=[];for(var t=0,r=this.data.length;t<r;t++){var i=[],o=this.data.charCodeAt(t);o>65536?(i[0]=240|(1835008&o)>>>18,i[1]=128|(258048&o)>>>12,i[2]=128|(4032&o)>>>6,i[3]=128|63&o):o>2048?(i[0]=224|(61440&o)>>>12,i[1]=128|(4032&o)>>>6,i[2]=128|63&o):o>128?(i[0]=192|(1984&o)>>>6,i[1]=128|63&o):i[0]=o,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function r(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(e){return this.parsedData.length},write:function(e){for(var t=0,r=this.parsedData.length;t<r;t++)e.put(this.parsedData[t],8)}},r.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[n][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=r.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(e,t){for(var r=-1;r<=7;r++)if(!(e+r<=-1||this.moduleCount<=e+r))for(var n=-1;n<=7;n++)t+n<=-1||this.moduleCount<=t+n||(this.modules[e+r][t+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var e=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=m.getLostPoint(this);(0==r||e>n)&&(e=n,t=r)}return t},createMovieClip:function(e,t,r){var n=e.createEmptyMovieClip(t,r);this.make();for(var i=0;i<this.modules.length;i++)for(var o=1*i,s=0;s<this.modules[i].length;s++){var a=1*s;this.modules[i][s]&&(n.beginFill(0,100),n.moveTo(a,o),n.lineTo(a+1,o),n.lineTo(a+1,o+1),n.lineTo(a,o+1),n.endFill())}return n},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},setupPositionAdjustPattern:function(){for(var e=m.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var r=0;r<e.length;r++){var n=e[t],i=e[r];if(null==this.modules[n][i])for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.modules[n+o][i+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},setupTypeNumber:function(e){for(var t=m.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!e&&1==(t>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!e&&1==(t>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(e,t){for(var r=this.errorCorrectLevel<<3|t,n=m.getBCHTypeInfo(r),i=0;i<15;i++){var o=!e&&1==(n>>i&1);i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(i=0;i<15;i++){o=!e&&1==(n>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!e},mapData:function(e,t){for(var r=-1,n=this.moduleCount-1,i=7,o=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var a=0;a<2;a++)if(null==this.modules[n][s-a]){var l=!1;o<e.length&&(l=1==(e[o]>>>i&1)),m.getMask(t,n,s-a)&&(l=!l),this.modules[n][s-a]=l,-1==--i&&(o++,i=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}}},r.PAD0=236,r.PAD1=17,r.createData=function(e,t,n){for(var i=w.getRSBlocks(e,t),o=new x,s=0;s<n.length;s++){var a=n[s];o.put(a.mode,4),o.put(a.getLength(),m.getLengthInBits(a.mode,e)),a.write(o)}var l=0;for(s=0;s<i.length;s++)l+=i[s].dataCount;if(o.getLengthInBits()>8*l)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*l+")");for(o.getLengthInBits()+4<=8*l&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*l)&&(o.put(r.PAD0,8),!(o.getLengthInBits()>=8*l));)o.put(r.PAD1,8);return r.createBytes(o,i)},r.createBytes=function(e,t){for(var r=0,n=0,i=0,o=new Array(t.length),s=new Array(t.length),a=0;a<t.length;a++){var l=t[a].dataCount,c=t[a].totalCount-l;n=Math.max(n,l),i=Math.max(i,c),o[a]=new Array(l);for(var u=0;u<o[a].length;u++)o[a][u]=255&e.buffer[u+r];r+=l;var d=m.getErrorCorrectPolynomial(c),h=new b(o[a],d.getLength()-1).mod(d);s[a]=new Array(d.getLength()-1);for(u=0;u<s[a].length;u++){var f=u+h.getLength()-s[a].length;s[a][u]=f>=0?h.get(f):0}}var p=0;for(u=0;u<t.length;u++)p+=t[u].totalCount;var g=new Array(p),v=0;for(u=0;u<n;u++)for(a=0;a<t.length;a++)u<o[a].length&&(g[v++]=o[a][u]);for(u=0;u<i;u++)for(a=0;a<t.length;a++)u<s[a].length&&(g[v++]=s[a][u]);return g};for(var n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i=1,o=0,s=3,a=2,l=0,c=1,u=2,d=3,h=4,f=5,p=6,g=7,m={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;m.getBCHDigit(t)-m.getBCHDigit(m.G15)>=0;)t^=m.G15<<m.getBCHDigit(t)-m.getBCHDigit(m.G15);return(e<<10|t)^m.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;m.getBCHDigit(t)-m.getBCHDigit(m.G18)>=0;)t^=m.G18<<m.getBCHDigit(t)-m.getBCHDigit(m.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return m.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,r){switch(e){case l:return(t+r)%2==0;case c:return t%2==0;case u:return r%3==0;case d:return(t+r)%3==0;case h:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case f:return t*r%2+t*r%3==0;case p:return(t*r%2+t*r%3)%2==0;case g:return(t*r%3+(t+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new b([1],0),r=0;r<e;r++)t=t.multiply(new b([1,v.gexp(r)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,n=0;n<t;n++)for(var i=0;i<t;i++){for(var o=0,s=e.isDark(n,i),a=-1;a<=1;a++)if(!(n+a<0||t<=n+a))for(var l=-1;l<=1;l++)i+l<0||t<=i+l||0==a&&0==l||s==e.isDark(n+a,i+l)&&o++;o>5&&(r+=3+o-5)}for(n=0;n<t-1;n++)for(i=0;i<t-1;i++){var c=0;e.isDark(n,i)&&c++,e.isDark(n+1,i)&&c++,e.isDark(n,i+1)&&c++,e.isDark(n+1,i+1)&&c++,0!=c&&4!=c||(r+=3)}for(n=0;n<t;n++)for(i=0;i<t-6;i++)e.isDark(n,i)&&!e.isDark(n,i+1)&&e.isDark(n,i+2)&&e.isDark(n,i+3)&&e.isDark(n,i+4)&&!e.isDark(n,i+5)&&e.isDark(n,i+6)&&(r+=40);for(i=0;i<t;i++)for(n=0;n<t-6;n++)e.isDark(n,i)&&!e.isDark(n+1,i)&&e.isDark(n+2,i)&&e.isDark(n+3,i)&&e.isDark(n+4,i)&&!e.isDark(n+5,i)&&e.isDark(n+6,i)&&(r+=40);var u=0;for(i=0;i<t;i++)for(n=0;n<t;n++)e.isDark(n,i)&&u++;return r+=10*(Math.abs(100*u/t/t-50)/5)}},v={glog:function(e){if(e<1)throw new Error("glog("+e+")");return v.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return v.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},y=0;y<8;y++)v.EXP_TABLE[y]=1<<y;for(y=8;y<256;y++)v.EXP_TABLE[y]=v.EXP_TABLE[y-4]^v.EXP_TABLE[y-5]^v.EXP_TABLE[y-6]^v.EXP_TABLE[y-8];for(y=0;y<255;y++)v.LOG_TABLE[v.EXP_TABLE[y]]=y;function b(e,t){if(void 0==e.length)throw new Error(e.length+"/"+t);for(var r=0;r<e.length&&0==e[r];)r++;this.num=new Array(e.length-r+t);for(var n=0;n<e.length-r;n++)this.num[n]=e[n+r]}function w(e,t){this.totalCount=e,this.dataCount=t}function x(){this.buffer=[],this.length=0}b.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<e.getLength();n++)t[r+n]^=v.gexp(v.glog(this.get(r))+v.glog(e.get(n)));return new b(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=v.glog(this.get(0))-v.glog(e.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<e.getLength();n++)r[n]^=v.gexp(v.glog(e.get(n))+t);return new b(r,0).mod(e)}},w.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],w.getRSBlocks=function(e,t){var r=w.getRsBlockTable(e,t);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var n=r.length/3,i=[],o=0;o<n;o++)for(var s=r[3*o+0],a=r[3*o+1],l=r[3*o+2],c=0;c<s;c++)i.push(new w(a,l));return i},w.getRsBlockTable=function(e,t){switch(t){case i:return w.RS_BLOCK_TABLE[4*(e-1)+0];case o:return w.RS_BLOCK_TABLE[4*(e-1)+1];case s:return w.RS_BLOCK_TABLE[4*(e-1)+2];case a:return w.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},x.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var _=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function E(e){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M",image:{svg:"",width:0,height:0}},"string"===typeof e&&(e={content:e}),e)for(var t in e)this.options[t]=e[t];if("string"!==typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0)||!(this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var n=this.options.content,l=function(e,t){for(var r=function(e){var t=encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return t.length+(t.length!=e?3:0)}(e),n=1,i=0,o=0,s=_.length;o<=s;o++){var a=_[o];if(!a)throw new Error("Content too long: expected "+i+" but got "+r);switch(t){case"L":i=a[0];break;case"M":i=a[1];break;case"Q":i=a[2];break;case"H":i=a[3];break;default:throw new Error("Unknwon error correction level: "+t)}if(r<=i)break;n++}if(n>_.length)throw new Error("Content too long");return n}(n,this.options.ecl),c=function(e){switch(e){case"L":return i;case"M":return o;case"Q":return s;case"H":return a;default:throw new Error("Unknwon error correction level: "+e)}}(this.options.ecl);this.qrcode=new r(l,c),this.qrcode.addData(n),this.qrcode.make()}E.prototype.svg=function(e){var t=this.options||{},r=this.qrcode.modules;"undefined"==typeof e&&(e={container:t.container||"svg"});for(var n="undefined"==typeof t.pretty||!!t.pretty,i=n?"  ":"",o=n?"\r\n":"",s=t.width,a=t.height,l=r.length,c=s/(l+2*t.padding),u=a/(l+2*t.padding),d="undefined"!=typeof t.join&&!!t.join,h="undefined"!=typeof t.swap&&!!t.swap,f="undefined"==typeof t.xmlDeclaration||!!t.xmlDeclaration,p="undefined"!=typeof t.predefined&&!!t.predefined,g=p?i+'<defs><path id="qrmodule" d="M0 0 h'+u+" v"+c+' H0 z" style="fill:'+t.color+';shape-rendering:crispEdges;" /></defs>'+o:"",m=i+'<rect x="0" y="0" width="'+s+'" height="'+a+'" style="fill:'+t.background+';shape-rendering:crispEdges;"/>'+o,v="",y="",b=0;b<l;b++)for(var w=0;w<l;w++){if(r[w][b]){var x=w*c+t.padding*c,_=b*u+t.padding*u;if(h){var E=x;x=_,_=E}if(d){var S=c+x,k=u+_;x=Number.isInteger(x)?Number(x):x.toFixed(2),_=Number.isInteger(_)?Number(_):_.toFixed(2),S=Number.isInteger(S)?Number(S):S.toFixed(2),y+="M"+x+","+_+" V"+(k=Number.isInteger(k)?Number(k):k.toFixed(2))+" H"+S+" V"+_+" H"+x+" Z "}else v+=p?i+'<use x="'+x.toString()+'" y="'+_.toString()+'" href="#qrmodule" />'+o:i+'<rect x="'+x.toString()+'" y="'+_.toString()+'" width="'+c+'" height="'+u+'" style="fill:'+t.color+';shape-rendering:crispEdges;"/>'+o}}d&&(v=i+'<path x="0" y="0" style="fill:'+t.color+';shape-rendering:crispEdges;" d="'+y+'" />');let C="";if(void 0!==this.options.image&&this.options.image.svg){const e=s*this.options.image.width/100,t=a*this.options.image.height/100;C+=`<svg x="${s/2-e/2}" y="${a/2-t/2}" width="${e}" height="${t}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`,C+=this.options.image.svg+o,C+="</svg>"}var A="";switch(e.container){case"svg":f&&(A+='<?xml version="1.0" standalone="yes"?>'+o),A+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+s+'" height="'+a+'">'+o,A+=g+m+v,A+=C,A+="</svg>";break;case"svg-viewbox":f&&(A+='<?xml version="1.0" standalone="yes"?>'+o),A+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+s+" "+a+'">'+o,A+=g+m+v,A+=C,A+="</svg>";break;case"g":A+='<g width="'+s+'" height="'+a+'">'+o,A+=g+m+v,A+=C,A+="</g>";break;default:A+=(g+m+v+C).replace(/^\s+/,"")}return A},e.exports=E},25365:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LIB_VERSION=void 0,t.LIB_VERSION="3.7.2"},87865:function(e){"use strict";var t=String.prototype.replace,r=/%20/g,n="RFC1738",i="RFC3986";e.exports={default:i,formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(e){return String(e)}},RFC1738:n,RFC3986:i}},75847:function(e,t,r){"use strict";var n=r(89161),i=r(77008),o=r(87865);e.exports={formats:o,parse:i,stringify:n}},77008:function(e,t,r){"use strict";var n=r(4985),i=Object.prototype.hasOwnProperty,o=Array.isArray,s={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t){return e&&"string"===typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},c=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,s=/(\[[^[\]]*])/g,a=r.depth>0&&/(\[[^[\]]*])/.exec(o),c=a?o.slice(0,a.index):o,u=[];if(c){if(!r.plainObjects&&i.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}for(var d=0;r.depth>0&&null!==(a=s.exec(o))&&d<r.depth;){if(d+=1,!r.plainObjects&&i.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(a[1])}return a&&u.push("["+o.slice(a.index)+"]"),function(e,t,r,n){for(var i=n?t:l(t,r),o=e.length-1;o>=0;--o){var s,a=e[o];if("[]"===a&&r.parseArrays)s=[].concat(i);else{s=r.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,u=parseInt(c,10);r.parseArrays||""!==c?!isNaN(u)&&a!==c&&String(u)===c&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(s=[])[u]=i:"__proto__"!==c&&(s[c]=i):s={0:i}}i=s}return i}(u,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return s;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?s.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?s.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:s.allowPrototypes,allowSparse:"boolean"===typeof e.allowSparse?e.allowSparse:s.allowSparse,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:s.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:s.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:s.comma,decoder:"function"===typeof e.decoder?e.decoder:s.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:s.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:s.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:s.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:s.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:s.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:s.strictNullHandling}}(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var u="string"===typeof e?function(e,t){var r,c={__proto__:null},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,h=u.split(t.delimiter,d),f=-1,p=t.charset;if(t.charsetSentinel)for(r=0;r<h.length;++r)0===h[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===h[r]?p="utf-8":"utf8=%26%2310003%3B"===h[r]&&(p="iso-8859-1"),f=r,r=h.length);for(r=0;r<h.length;++r)if(r!==f){var g,m,v=h[r],y=v.indexOf("]="),b=-1===y?v.indexOf("="):y+1;-1===b?(g=t.decoder(v,s.decoder,p,"key"),m=t.strictNullHandling?null:""):(g=t.decoder(v.slice(0,b),s.decoder,p,"key"),m=n.maybeMap(l(v.slice(b+1),t),(function(e){return t.decoder(e,s.decoder,p,"value")}))),m&&t.interpretNumericEntities&&"iso-8859-1"===p&&(m=a(m)),v.indexOf("[]=")>-1&&(m=o(m)?[m]:m),i.call(c,g)?c[g]=n.combine(c[g],m):c[g]=m}return c}(e,r):e,d=r.plainObjects?Object.create(null):{},h=Object.keys(u),f=0;f<h.length;++f){var p=h[f],g=c(p,u[p],r,"string"===typeof e);d=n.merge(d,g,r)}return!0===r.allowSparse?d:n.compact(d)}},89161:function(e,t,r){"use strict";var n=r(40581),i=r(4985),o=r(87865),s=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},l=Array.isArray,c=Array.prototype.push,u=function(e,t){c.apply(e,l(t)?t:[t])},d=Date.prototype.toISOString,h=o.default,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,format:h,formatter:o.formatters[h],indices:!1,serializeDate:function(e){return d.call(e)},skipNulls:!1,strictNullHandling:!1},p={},g=function e(t,r,o,s,a,c,d,h,g,m,v,y,b,w,x,_){for(var E,S=t,k=_,C=0,A=!1;void 0!==(k=k.get(p))&&!A;){var P=k.get(t);if(C+=1,"undefined"!==typeof P){if(P===C)throw new RangeError("Cyclic object value");A=!0}"undefined"===typeof k.get(p)&&(C=0)}if("function"===typeof h?S=h(r,S):S instanceof Date?S=v(S):"comma"===o&&l(S)&&(S=i.maybeMap(S,(function(e){return e instanceof Date?v(e):e}))),null===S){if(a)return d&&!w?d(r,f.encoder,x,"key",y):r;S=""}if("string"===typeof(E=S)||"number"===typeof E||"boolean"===typeof E||"symbol"===typeof E||"bigint"===typeof E||i.isBuffer(S))return d?[b(w?r:d(r,f.encoder,x,"key",y))+"="+b(d(S,f.encoder,x,"value",y))]:[b(r)+"="+b(String(S))];var I,R=[];if("undefined"===typeof S)return R;if("comma"===o&&l(S))w&&d&&(S=i.maybeMap(S,d)),I=[{value:S.length>0?S.join(",")||null:void 0}];else if(l(h))I=h;else{var O=Object.keys(S);I=g?O.sort(g):O}for(var T=s&&l(S)&&1===S.length?r+"[]":r,M=0;M<I.length;++M){var N=I[M],j="object"===typeof N&&"undefined"!==typeof N.value?N.value:S[N];if(!c||null!==j){var L=l(S)?"function"===typeof o?o(T,N):T:T+(m?"."+N:"["+N+"]");_.set(t,C);var D=n();D.set(p,_),u(R,e(j,L,o,s,a,c,"comma"===o&&w&&l(S)?null:d,h,g,m,v,y,b,w,x,D))}}return R};e.exports=function(e,t){var r,i=e,c=function(e){if(!e)return f;if(null!==e.encoder&&"undefined"!==typeof e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if("undefined"!==typeof e.format){if(!s.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],i=f.filter;return("function"===typeof e.filter||l(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?f.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:f.encode,encoder:"function"===typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:i,format:r,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}}(t);"function"===typeof c.filter?i=(0,c.filter)("",i):l(c.filter)&&(r=c.filter);var d,h=[];if("object"!==typeof i||null===i)return"";d=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var p=a[d];if(t&&"commaRoundTrip"in t&&"boolean"!==typeof t.commaRoundTrip)throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var m="comma"===p&&t&&t.commaRoundTrip;r||(r=Object.keys(i)),c.sort&&r.sort(c.sort);for(var v=n(),y=0;y<r.length;++y){var b=r[y];c.skipNulls&&null===i[b]||u(h,g(i[b],b,p,m,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.format,c.formatter,c.encodeValuesOnly,c.charset,v))}var w=h.join(c.delimiter),x=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?x+="utf8=%26%2310003%3B&":x+="utf8=%E2%9C%93&"),w.length>0?x+w:""}},4985:function(e,t,r){"use strict";var n=r(87865),i=Object.prototype.hasOwnProperty,o=Array.isArray,s=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var i=t[n],s=i.obj[i.prop],a=Object.keys(s),l=0;l<a.length;++l){var c=a[l],u=s[c];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:s,prop:c}),r.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)"undefined"!==typeof r[i]&&n.push(r[i]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(i){return n}},encode:function(e,t,r,i,o){if(0===e.length)return e;var a=e;if("symbol"===typeof e?a=Symbol.prototype.toString.call(e):"string"!==typeof e&&(a=String(e)),"iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var l="",c=0;c<a.length;++c){var u=a.charCodeAt(c);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||o===n.RFC1738&&(40===u||41===u)?l+=a.charAt(c):u<128?l+=s[u]:u<2048?l+=s[192|u>>6]+s[128|63&u]:u<55296||u>=57344?l+=s[224|u>>12]+s[128|u>>6&63]+s[128|63&u]:(c+=1,u=65536+((1023&u)<<10|1023&a.charCodeAt(c)),l+=s[240|u>>18]+s[128|u>>12&63]+s[128|u>>6&63]+s[128|63&u])}return l},isBuffer:function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!==typeof r){if(o(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!i.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var s=t;return o(t)&&!o(r)&&(s=a(t,n)),o(t)&&o(r)?(r.forEach((function(r,o){if(i.call(t,o)){var s=t[o];s&&"object"===typeof s&&r&&"object"===typeof r?t[o]=e(s,r,n):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var s=r[o];return i.call(t,o)?t[o]=e(t[o],s,n):t[o]=s,t}),s)}}},83361:function(e,t,r){"use strict";r.d(t,{Z:function(){return ie}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),i=Math.abs,o=String.fromCharCode,s=Object.assign;function a(e){return e.trim()}function l(e,t,r){return e.replace(t,r)}function c(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function d(e,t,r){return e.slice(t,r)}function h(e){return e.length}function f(e){return e.length}function p(e,t){return t.push(e),e}var g=1,m=1,v=0,y=0,b=0,w="";function x(e,t,r,n,i,o,s){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:g,column:m,length:s,return:""}}function _(e,t){return s(x("",null,null,"",null,null,0),e,{length:-e.length},t)}function E(){return b=y>0?u(w,--y):0,m--,10===b&&(m=1,g--),b}function S(){return b=y<v?u(w,y++):0,m++,10===b&&(m=1,g++),b}function k(){return u(w,y)}function C(){return y}function A(e,t){return d(w,e,t)}function P(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function I(e){return g=m=1,v=h(w=e),y=0,[]}function R(e){return w="",e}function O(e){return a(A(y-1,N(91===e?e+2:40===e?e+1:e)))}function T(e){for(;(b=k())&&b<33;)S();return P(e)>2||P(b)>3?"":" "}function M(e,t){for(;--t&&S()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return A(e,C()+(t<6&&32==k()&&32==S()))}function N(e){for(;S();)switch(b){case e:return y;case 34:case 39:34!==e&&39!==e&&N(b);break;case 40:41===e&&N(e);break;case 92:S()}return y}function j(e,t){for(;S()&&e+b!==57&&(e+b!==84||47!==k()););return"/*"+A(t,y-1)+"*"+o(47===e?e:S())}function L(e){for(;!P(k());)S();return A(e,y)}var D="-ms-",$="-moz-",B="-webkit-",Z="comm",z="rule",U="decl",F="@keyframes";function W(e,t){for(var r="",n=f(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function H(e,t,r,n){switch(e.type){case"@import":case U:return e.return=e.return||e.value;case Z:return"";case F:return e.return=e.value+"{"+W(e.children,n)+"}";case z:e.value=e.props.join(",")}return h(r=W(e.children,n))?e.return=e.value+"{"+r+"}":""}function V(e){return R(q("",null,null,null,[""],e=I(e),0,[0],e))}function q(e,t,r,n,i,s,a,d,f){for(var g=0,m=0,v=a,y=0,b=0,w=0,x=1,_=1,A=1,P=0,I="",R=i,N=s,D=n,$=I;_;)switch(w=P,P=S()){case 40:if(108!=w&&58==u($,v-1)){-1!=c($+=l(O(P),"&","&\f"),"&\f")&&(A=-1);break}case 34:case 39:case 91:$+=O(P);break;case 9:case 10:case 13:case 32:$+=T(w);break;case 92:$+=M(C()-1,7);continue;case 47:switch(k()){case 42:case 47:p(G(j(S(),C()),t,r),f);break;default:$+="/"}break;case 123*x:d[g++]=h($)*A;case 125*x:case 59:case 0:switch(P){case 0:case 125:_=0;case 59+m:b>0&&h($)-v&&p(b>32?K($+";",n,r,v-1):K(l($," ","")+";",n,r,v-2),f);break;case 59:$+=";";default:if(p(D=Y($,t,r,g,m,i,d,I,R=[],N=[],v),s),123===P)if(0===m)q($,t,D,D,R,s,v,d,N);else switch(99===y&&110===u($,3)?100:y){case 100:case 109:case 115:q(e,D,D,n&&p(Y(e,D,D,0,0,i,d,I,i,R=[],v),N),i,N,v,d,n?R:N);break;default:q($,D,D,D,[""],N,0,d,N)}}g=m=b=0,x=A=1,I=$="",v=a;break;case 58:v=1+h($),b=w;default:if(x<1)if(123==P)--x;else if(125==P&&0==x++&&125==E())continue;switch($+=o(P),P*x){case 38:A=m>0?1:($+="\f",-1);break;case 44:d[g++]=(h($)-1)*A,A=1;break;case 64:45===k()&&($+=O(S())),y=k(),m=v=h(I=$+=L(C())),P++;break;case 45:45===w&&2==h($)&&(x=0)}}return s}function Y(e,t,r,n,o,s,c,u,h,p,g){for(var m=o-1,v=0===o?s:[""],y=f(v),b=0,w=0,_=0;b<n;++b)for(var E=0,S=d(e,m+1,m=i(w=c[b])),k=e;E<y;++E)(k=a(w>0?v[E]+" "+S:l(S,/&\f/g,v[E])))&&(h[_++]=k);return x(e,t,r,0===o?z:u,h,p,g)}function G(e,t,r){return x(e,t,r,Z,o(b),d(e,2,-2),0)}function K(e,t,r,n){return x(e,t,r,U,d(e,0,n),d(e,n+1,-1),n)}var J=function(e,t,r){for(var n=0,i=0;n=i,i=k(),38===n&&12===i&&(t[r]=1),!P(i);)S();return A(e,y)},Q=function(e,t){return R(function(e,t){var r=-1,n=44;do{switch(P(n)){case 0:38===n&&12===k()&&(t[r]=1),e[r]+=J(y-1,t,r);break;case 2:e[r]+=O(n);break;case 4:if(44===n){e[++r]=58===k()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=o(n)}}while(n=S());return e}(I(e),t))},X=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||X.get(r))&&!n){X.set(e,!0);for(var i=[],o=Q(t,i),s=r.props,a=0,l=0;a<o.length;a++)for(var c=0;c<s.length;c++,l++)e.props[l]=i[a]?o[a].replace(/&\f/g,s[c]):s[c]+" "+o[a]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function re(e,t){switch(function(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+$+e+D+e+e;case 6828:case 4268:return B+e+D+e+e;case 6165:return B+e+D+"flex-"+e+e;case 5187:return B+e+l(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return B+e+D+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return B+e+D+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return B+e+D+l(e,"shrink","negative")+e;case 5292:return B+e+D+l(e,"basis","preferred-size")+e;case 6060:return B+"box-"+l(e,"-grow","")+B+e+D+l(e,"grow","positive")+e;case 4554:return B+l(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+$+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~c(e,"stretch")?re(l(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,h(e)-3-(~c(e,"!important")&&10))){case 107:return l(e,":",":"+B)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+B+(45===u(e,14)?"inline-":"")+"box$3$1"+B+"$2$3$1"+D+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return B+e+D+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+D+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+D+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return B+e+D+e+e}return e}var ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case U:e.return=re(e.value,e.length);break;case F:return W([_(e,{value:l(e.value,"@","@"+B)})],n);case z:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([_(e,{props:[l(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return W([_(e,{props:[l(t,/:(plac\w+)/,":"+B+"input-$1")]}),_(e,{props:[l(t,/:(plac\w+)/,":-moz-$1")]}),_(e,{props:[l(t,/:(plac\w+)/,D+"input-$1")]})],n)}return""}))}}],ie=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var i=e.stylisPlugins||ne;var o,s,a={},l=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)a[t[r]]=!0;l.push(e)}));var c,u,d=[H,(u=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],h=function(e){var t=f(e);return function(r,n,i,o){for(var s="",a=0;a<t;a++)s+=e[a](r,n,i,o)||"";return s}}([ee,te].concat(i,d));s=function(e,t,r,n){c=r,W(V(e?e+"{"+t.styles+"}":t.styles),h),n&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new n({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:a,registered:{},insert:s};return p.sheet.hydrate(l),p}},49797:function(e,t){"use strict";t.Z=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},29886:function(e,t,r){"use strict";r.d(t,{C:function(){return s},T:function(){return l},w:function(){return a}});var n=r(72791),i=r(83361),o=(r(9140),r(82561),(0,n.createContext)("undefined"!==typeof HTMLElement?(0,i.Z)({key:"css"}):null));var s=o.Provider,a=function(e){return(0,n.forwardRef)((function(t,r){var i=(0,n.useContext)(o);return e(t,i,r)}))},l=(0,n.createContext)({})},52554:function(e,t,r){"use strict";r.d(t,{F4:function(){return u},iv:function(){return c},xB:function(){return l}});var n=r(72791),i=(r(83361),r(29886)),o=(r(62110),r(95438)),s=r(9140),a=r(82561),l=(0,i.w)((function(e,t){var r=e.styles,l=(0,s.O)([r],void 0,(0,n.useContext)(i.T)),c=(0,n.useRef)();return(0,a.j)((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,i=document.querySelector('style[data-emotion="'+e+" "+l.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==i&&(n=!0,i.setAttribute("data-emotion",e),r.hydrate([i])),c.current=[r,n],function(){r.flush()}}),[t]),(0,a.j)((function(){var e=c.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==l.next&&(0,o.My)(t,l.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",l,r,!1)}}),[t,l.name]),null}));function c(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.O)(t)}var u=function(){var e=c.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},9140:function(e,t,r){"use strict";r.d(t,{O:function(){return g}});var n=function(e){for(var t,r=0,n=0,i=e.length;i>=4;++n,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(i){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},i={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=r(49797),s=/[A-Z]|^ms/g,a=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!==typeof e},u=(0,o.Z)((function(e){return l(e)?e:e.replace(s,"-$&").toLowerCase()})),d=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(a,(function(e,t,r){return f={name:t,styles:r,next:f},t}))}return 1===i[e]||l(e)||"number"!==typeof t||0===t?t:t+"px"};function h(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return f={name:r.name,styles:r.styles,next:f},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)f={name:n.name,styles:n.styles,next:f},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=h(e,t,r[i])+";";else for(var o in r){var s=r[o];if("object"!==typeof s)null!=t&&void 0!==t[s]?n+=o+"{"+t[s]+"}":c(s)&&(n+=u(o)+":"+d(o,s)+";");else if(!Array.isArray(s)||"string"!==typeof s[0]||null!=t&&void 0!==t[s[0]]){var a=h(e,t,s);switch(o){case"animation":case"animationName":n+=u(o)+":"+a+";";break;default:n+=o+"{"+a+"}"}}else for(var l=0;l<s.length;l++)c(s[l])&&(n+=u(o)+":"+d(o,s[l])+";")}return n}(e,t,r);case"function":if(void 0!==e){var i=f,o=r(e);return f=i,h(e,t,o)}}if(null==t)return r;var s=t[r];return void 0!==s?s:r}var f,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var g=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var i=!0,o="";f=void 0;var s=e[0];null==s||void 0===s.raw?(i=!1,o+=h(r,t,s)):o+=s[0];for(var a=1;a<e.length;a++)o+=h(r,t,e[a]),i&&(o+=s[a]);p.lastIndex=0;for(var l,c="";null!==(l=p.exec(o));)c+="-"+l[1];return{name:n(o)+c,styles:o,next:f}}},82561:function(e,t,r){"use strict";var n;r.d(t,{L:function(){return s},j:function(){return a}});var i=r(72791),o=!!(n||(n=r.t(i,2))).useInsertionEffect&&(n||(n=r.t(i,2))).useInsertionEffect,s=o||function(e){return e()},a=o||i.useLayoutEffect},95438:function(e,t,r){"use strict";r.d(t,{My:function(){return o},fp:function(){return n},hC:function(){return i}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var i=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},o=function(e,t,r){i(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},97419:function(e,t,r){"use strict";r.d(t,{Kn:function(){return f},CR:function(){return p}});var n=r(49716),i=r(2257),o=r(88062),s=r(17986);const a=new(r(39502).Yd)("address/5.7.0");function l(e){(0,n.A7)(e,20)||a.throwArgumentError("invalid address","address",e);const t=(e=e.toLowerCase()).substring(2).split(""),r=new Uint8Array(40);for(let n=0;n<40;n++)r[n]=t[n].charCodeAt(0);const i=(0,n.lE)((0,o.w)(r));for(let n=0;n<40;n+=2)i[n>>1]>>4>=8&&(t[n]=t[n].toUpperCase()),(15&i[n>>1])>=8&&(t[n+1]=t[n+1].toUpperCase());return"0x"+t.join("")}const c={};for(let g=0;g<10;g++)c[String(g)]=String(g);for(let g=0;g<26;g++)c[String.fromCharCode(65+g)]=String(10+g);const u=Math.floor((d=9007199254740991,Math.log10?Math.log10(d):Math.log(d)/Math.LN10));var d;function h(e){let t=(e=(e=e.toUpperCase()).substring(4)+e.substring(0,2)+"00").split("").map((e=>c[e])).join("");for(;t.length>=u;){let e=t.substring(0,u);t=parseInt(e,10)%97+t.substring(e.length)}let r=String(98-parseInt(t,10)%97);for(;r.length<2;)r="0"+r;return r}function f(e){let t=null;if("string"!==typeof e&&a.throwArgumentError("invalid address","address",e),e.match(/^(0x)?[0-9a-fA-F]{40}$/))"0x"!==e.substring(0,2)&&(e="0x"+e),t=l(e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&a.throwArgumentError("bad address checksum","address",e);else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==h(e)&&a.throwArgumentError("bad icap checksum","address",e),t=(0,i.g$)(e.substring(4));t.length<40;)t="0"+t;t=l("0x"+t)}else a.throwArgumentError("invalid address","address",e);return t}function p(e){let t=null;try{t=f(e.from)}catch(l){a.throwArgumentError("missing from address","transaction",e)}const r=(0,n.G1)((0,n.lE)(i.O$.from(e.nonce).toHexString()));return f((0,n.p3)((0,o.w)((0,s.c)([t,r])),12))}},86945:function(e,t,r){"use strict";r.d(t,{i:function(){return n}});const n="bignumber/5.7.0"},2257:function(e,t,r){"use strict";r.d(t,{O$:function(){return p},Zm:function(){return h},g$:function(){return b}});var n=r(80518),i=r.n(n),o=r(49716),s=r(39502),a=r(86945),l=i().BN;const c=new s.Yd(a.i),u={},d=9007199254740991;function h(e){return null!=e&&(p.isBigNumber(e)||"number"===typeof e&&e%1===0||"string"===typeof e&&!!e.match(/^-?[0-9]+$/)||(0,o.A7)(e)||"bigint"===typeof e||(0,o._t)(e))}let f=!1;class p{constructor(e,t){e!==u&&c.throwError("cannot call constructor directly; use BigNumber.from",s.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=t,this._isBigNumber=!0,Object.freeze(this)}fromTwos(e){return m(v(this).fromTwos(e))}toTwos(e){return m(v(this).toTwos(e))}abs(){return"-"===this._hex[0]?p.from(this._hex.substring(1)):this}add(e){return m(v(this).add(v(e)))}sub(e){return m(v(this).sub(v(e)))}div(e){return p.from(e).isZero()&&y("division-by-zero","div"),m(v(this).div(v(e)))}mul(e){return m(v(this).mul(v(e)))}mod(e){const t=v(e);return t.isNeg()&&y("division-by-zero","mod"),m(v(this).umod(t))}pow(e){const t=v(e);return t.isNeg()&&y("negative-power","pow"),m(v(this).pow(t))}and(e){const t=v(e);return(this.isNegative()||t.isNeg())&&y("unbound-bitwise-result","and"),m(v(this).and(t))}or(e){const t=v(e);return(this.isNegative()||t.isNeg())&&y("unbound-bitwise-result","or"),m(v(this).or(t))}xor(e){const t=v(e);return(this.isNegative()||t.isNeg())&&y("unbound-bitwise-result","xor"),m(v(this).xor(t))}mask(e){return(this.isNegative()||e<0)&&y("negative-width","mask"),m(v(this).maskn(e))}shl(e){return(this.isNegative()||e<0)&&y("negative-width","shl"),m(v(this).shln(e))}shr(e){return(this.isNegative()||e<0)&&y("negative-width","shr"),m(v(this).shrn(e))}eq(e){return v(this).eq(v(e))}lt(e){return v(this).lt(v(e))}lte(e){return v(this).lte(v(e))}gt(e){return v(this).gt(v(e))}gte(e){return v(this).gte(v(e))}isNegative(){return"-"===this._hex[0]}isZero(){return v(this).isZero()}toNumber(){try{return v(this).toNumber()}catch(e){y("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch(e){}return c.throwError("this platform does not support BigInt",s.Yd.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(10===arguments[0]?f||(f=!0,c.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):16===arguments[0]?c.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",s.Yd.errors.UNEXPECTED_ARGUMENT,{}):c.throwError("BigNumber.toString does not accept parameters",s.Yd.errors.UNEXPECTED_ARGUMENT,{})),v(this).toString(10)}toHexString(){return this._hex}toJSON(e){return{type:"BigNumber",hex:this.toHexString()}}static from(e){if(e instanceof p)return e;if("string"===typeof e)return e.match(/^-?0x[0-9a-f]+$/i)?new p(u,g(e)):e.match(/^-?[0-9]+$/)?new p(u,g(new l(e))):c.throwArgumentError("invalid BigNumber string","value",e);if("number"===typeof e)return e%1&&y("underflow","BigNumber.from",e),(e>=d||e<=-d)&&y("overflow","BigNumber.from",e),p.from(String(e));const t=e;if("bigint"===typeof t)return p.from(t.toString());if((0,o._t)(t))return p.from((0,o.Dv)(t));if(t)if(t.toHexString){const e=t.toHexString();if("string"===typeof e)return p.from(e)}else{let e=t._hex;if(null==e&&"BigNumber"===t.type&&(e=t.hex),"string"===typeof e&&((0,o.A7)(e)||"-"===e[0]&&(0,o.A7)(e.substring(1))))return p.from(e)}return c.throwArgumentError("invalid BigNumber value","value",e)}static isBigNumber(e){return!(!e||!e._isBigNumber)}}function g(e){if("string"!==typeof e)return g(e.toString(16));if("-"===e[0])return"-"===(e=e.substring(1))[0]&&c.throwArgumentError("invalid hex","value",e),"0x00"===(e=g(e))?e:"-"+e;if("0x"!==e.substring(0,2)&&(e="0x"+e),"0x"===e)return"0x00";for(e.length%2&&(e="0x0"+e.substring(2));e.length>4&&"0x00"===e.substring(0,4);)e="0x"+e.substring(4);return e}function m(e){return p.from(g(e))}function v(e){const t=p.from(e).toHexString();return"-"===t[0]?new l("-"+t.substring(3),16):new l(t.substring(2),16)}function y(e,t,r){const n={fault:e,operation:t};return null!=r&&(n.value=r),c.throwError(e,s.Yd.errors.NUMERIC_FAULT,n)}function b(e){return new l(e,36).toString(16)}},49716:function(e,t,r){"use strict";r.d(t,{lE:function(){return c},zo:function(){return u},xs:function(){return v},E1:function(){return g},p3:function(){return m},$P:function(){return y},$m:function(){return b},Dv:function(){return p},_t:function(){return l},Zq:function(){return s},A7:function(){return h},N:function(){return w},G1:function(){return d}});const n=new(r(39502).Yd)("bytes/5.7.0");function i(e){return!!e.toHexString}function o(e){return e.slice||(e.slice=function(){const t=Array.prototype.slice.call(arguments);return o(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function s(e){return h(e)&&!(e.length%2)||l(e)}function a(e){return"number"===typeof e&&e==e&&e%1===0}function l(e){if(null==e)return!1;if(e.constructor===Uint8Array)return!0;if("string"===typeof e)return!1;if(!a(e.length)||e.length<0)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(!a(r)||r<0||r>=256)return!1}return!0}function c(e,t){if(t||(t={}),"number"===typeof e){n.checkSafeUint53(e,"invalid arrayify value");const t=[];for(;e;)t.unshift(255&e),e=parseInt(String(e/256));return 0===t.length&&t.push(0),o(new Uint8Array(t))}if(t.allowMissingPrefix&&"string"===typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),i(e)&&(e=e.toHexString()),h(e)){let r=e.substring(2);r.length%2&&("left"===t.hexPad?r="0"+r:"right"===t.hexPad?r+="0":n.throwArgumentError("hex data is odd-length","value",e));const i=[];for(let e=0;e<r.length;e+=2)i.push(parseInt(r.substring(e,e+2),16));return o(new Uint8Array(i))}return l(e)?o(new Uint8Array(e)):n.throwArgumentError("invalid arrayify value","value",e)}function u(e){const t=e.map((e=>c(e))),r=t.reduce(((e,t)=>e+t.length),0),n=new Uint8Array(r);return t.reduce(((e,t)=>(n.set(t,e),e+t.length)),0),o(n)}function d(e){let t=c(e);if(0===t.length)return t;let r=0;for(;r<t.length&&0===t[r];)r++;return r&&(t=t.slice(r)),t}function h(e,t){return!("string"!==typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!t||e.length===2+2*t)}const f="0123456789abcdef";function p(e,t){if(t||(t={}),"number"===typeof e){n.checkSafeUint53(e,"invalid hexlify value");let t="";for(;e;)t=f[15&e]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"}if("bigint"===typeof e)return(e=e.toString(16)).length%2?"0x0"+e:"0x"+e;if(t.allowMissingPrefix&&"string"===typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),i(e))return e.toHexString();if(h(e))return e.length%2&&("left"===t.hexPad?e="0x0"+e.substring(2):"right"===t.hexPad?e+="0":n.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(l(e)){let t="0x";for(let r=0;r<e.length;r++){let n=e[r];t+=f[(240&n)>>4]+f[15&n]}return t}return n.throwArgumentError("invalid hexlify value","value",e)}function g(e){if("string"!==typeof e)e=p(e);else if(!h(e)||e.length%2)return null;return(e.length-2)/2}function m(e,t,r){return"string"!==typeof e?e=p(e):(!h(e)||e.length%2)&&n.throwArgumentError("invalid hexData","value",e),t=2+2*t,null!=r?"0x"+e.substring(t,2+2*r):"0x"+e.substring(t)}function v(e){let t="0x";return e.forEach((e=>{t+=p(e).substring(2)})),t}function y(e){const t=function(e){"string"!==typeof e&&(e=p(e));h(e)||n.throwArgumentError("invalid hex string","value",e);e=e.substring(2);let t=0;for(;t<e.length&&"0"===e[t];)t++;return"0x"+e.substring(t)}(p(e,{hexPad:"left"}));return"0x"===t?"0x0":t}function b(e,t){for("string"!==typeof e?e=p(e):h(e)||n.throwArgumentError("invalid hex string","value",e),e.length>2*t+2&&n.throwArgumentError("value out of range","value",arguments[1]);e.length<2*t+2;)e="0x0"+e.substring(2);return e}function w(e){const t={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(s(e)){let r=c(e);64===r.length?(t.v=27+(r[32]>>7),r[32]&=127,t.r=p(r.slice(0,32)),t.s=p(r.slice(32,64))):65===r.length?(t.r=p(r.slice(0,32)),t.s=p(r.slice(32,64)),t.v=r[64]):n.throwArgumentError("invalid signature string","signature",e),t.v<27&&(0===t.v||1===t.v?t.v+=27:n.throwArgumentError("signature invalid v byte","signature",e)),t.recoveryParam=1-t.v%2,t.recoveryParam&&(r[32]|=128),t._vs=p(r.slice(32,64))}else{if(t.r=e.r,t.s=e.s,t.v=e.v,t.recoveryParam=e.recoveryParam,t._vs=e._vs,null!=t._vs){const r=function(e,t){(e=c(e)).length>t&&n.throwArgumentError("value out of range","value",arguments[0]);const r=new Uint8Array(t);return r.set(e,t-e.length),o(r)}(c(t._vs),32);t._vs=p(r);const i=r[0]>=128?1:0;null==t.recoveryParam?t.recoveryParam=i:t.recoveryParam!==i&&n.throwArgumentError("signature recoveryParam mismatch _vs","signature",e),r[0]&=127;const s=p(r);null==t.s?t.s=s:t.s!==s&&n.throwArgumentError("signature v mismatch _vs","signature",e)}if(null==t.recoveryParam)null==t.v?n.throwArgumentError("signature missing v and recoveryParam","signature",e):0===t.v||1===t.v?t.recoveryParam=t.v:t.recoveryParam=1-t.v%2;else if(null==t.v)t.v=27+t.recoveryParam;else{const r=0===t.v||1===t.v?t.v:1-t.v%2;t.recoveryParam!==r&&n.throwArgumentError("signature recoveryParam mismatch v","signature",e)}null!=t.r&&h(t.r)?t.r=b(t.r,32):n.throwArgumentError("signature missing or invalid r","signature",e),null!=t.s&&h(t.s)?t.s=b(t.s,32):n.throwArgumentError("signature missing or invalid s","signature",e);const r=c(t.s);r[0]>=128&&n.throwArgumentError("signature s out of range","signature",e),t.recoveryParam&&(r[0]|=128);const i=p(r);t._vs&&(h(t._vs)||n.throwArgumentError("signature invalid _vs","signature",e),t._vs=b(t._vs,32)),null==t._vs?t._vs=i:t._vs!==i&&n.throwArgumentError("signature _vs mismatch v and s","signature",e)}return t.yParityAndS=t._vs,t.compact=t.r+t.yParityAndS.substring(2),t}},88062:function(e,t,r){"use strict";r.d(t,{w:function(){return s}});var n=r(27898),i=r.n(n),o=r(49716);function s(e){return"0x"+i().keccak_256((0,o.lE)(e))}},39502:function(e,t,r){"use strict";r.d(t,{Yd:function(){return h}});let n=!1,i=!1;const o={debug:1,default:2,info:2,warning:3,error:4,off:5};let s=o.default,a=null;const l=function(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach((t=>{try{if("test"!=="test".normalize(t))throw new Error("bad normalize")}catch(r){e.push(t)}})),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}();var c,u;!function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"}(c||(c={})),function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"}(u||(u={}));const d="0123456789abcdef";class h{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,t){const r=e.toLowerCase();null==o[r]&&this.throwArgumentError("invalid log level name","logLevel",e),s>o[r]||console.log.apply(console,t)}debug(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._log(h.levels.DEBUG,t)}info(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._log(h.levels.INFO,t)}warn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];this._log(h.levels.WARNING,t)}makeError(e,t,r){if(i)return this.makeError("censored error",t,{});t||(t=h.errors.UNKNOWN_ERROR),r||(r={});const n=[];Object.keys(r).forEach((e=>{const t=r[e];try{if(t instanceof Uint8Array){let r="";for(let e=0;e<t.length;e++)r+=d[t[e]>>4],r+=d[15&t[e]];n.push(e+"=Uint8Array(0x"+r+")")}else n.push(e+"="+JSON.stringify(t))}catch(a){n.push(e+"="+JSON.stringify(r[e].toString()))}})),n.push(`code=${t}`),n.push(`version=${this.version}`);const o=e;let s="";switch(t){case u.NUMERIC_FAULT:{s="NUMERIC_FAULT";const t=e;switch(t){case"overflow":case"underflow":case"division-by-zero":s+="-"+t;break;case"negative-power":case"negative-width":s+="-unsupported";break;case"unbound-bitwise-result":s+="-unbound-result"}break}case u.CALL_EXCEPTION:case u.INSUFFICIENT_FUNDS:case u.MISSING_NEW:case u.NONCE_EXPIRED:case u.REPLACEMENT_UNDERPRICED:case u.TRANSACTION_REPLACED:case u.UNPREDICTABLE_GAS_LIMIT:s=t}s&&(e+=" [ See: https://links.ethers.org/v5-errors-"+s+" ]"),n.length&&(e+=" ("+n.join(", ")+")");const a=new Error(e);return a.reason=o,a.code=t,Object.keys(r).forEach((function(e){a[e]=r[e]})),a}throwError(e,t,r){throw this.makeError(e,t,r)}throwArgumentError(e,t,r){return this.throwError(e,h.errors.INVALID_ARGUMENT,{argument:t,value:r})}assert(e,t,r,n){e||this.throwError(t,r,n)}assertArgument(e,t,r,n){e||this.throwArgumentError(t,r,n)}checkNormalize(e){null==e&&(e="platform missing String.prototype.normalize"),l&&this.throwError("platform missing String.prototype.normalize",h.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:l})}checkSafeUint53(e,t){"number"===typeof e&&(null==t&&(t="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(t,h.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(t,h.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,t,r){r=r?": "+r:"",e<t&&this.throwError("missing argument"+r,h.errors.MISSING_ARGUMENT,{count:e,expectedCount:t}),e>t&&this.throwError("too many arguments"+r,h.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:t})}checkNew(e,t){e!==Object&&null!=e||this.throwError("missing new",h.errors.MISSING_NEW,{name:t.name})}checkAbstract(e,t){e===t?this.throwError("cannot instantiate abstract class "+JSON.stringify(t.name)+" directly; use a sub-class",h.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):e!==Object&&null!=e||this.throwError("missing new",h.errors.MISSING_NEW,{name:t.name})}static globalLogger(){return a||(a=new h("logger/5.7.0")),a}static setCensorship(e,t){if(!e&&t&&this.globalLogger().throwError("cannot permanently disable censorship",h.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),n){if(!e)return;this.globalLogger().throwError("error censorship permanent",h.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}i=!!e,n=!!t}static setLogLevel(e){const t=o[e.toLowerCase()];null!=t?s=t:h.globalLogger().warn("invalid log level - "+e)}static from(e){return new h(e)}}h.errors=u,h.levels=c},30520:function(e,t,r){"use strict";r.d(t,{dk:function(){return g},uj:function(){return c},p$:function(){return p},zG:function(){return s},tu:function(){return a},mE:function(){return l},DC:function(){return u}});var n=r(39502);var i=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const o=new n.Yd("properties/5.7.0");function s(e,t,r){Object.defineProperty(e,t,{enumerable:!0,value:r,writable:!1})}function a(e,t){for(let r=0;r<32;r++){if(e[t])return e[t];if(!e.prototype||"object"!==typeof e.prototype)break;e=Object.getPrototypeOf(e.prototype).constructor}return null}function l(e){return i(this,void 0,void 0,(function*(){const t=Object.keys(e).map((t=>{const r=e[t];return Promise.resolve(r).then((e=>({key:t,value:e})))}));return(yield Promise.all(t)).reduce(((e,t)=>(e[t.key]=t.value,e)),{})}))}function c(e,t){e&&"object"===typeof e||o.throwArgumentError("invalid object","object",e),Object.keys(e).forEach((r=>{t[r]||o.throwArgumentError("invalid object key - "+r,"transaction:"+r,e)}))}function u(e){const t={};for(const r in e)t[r]=e[r];return t}const d={bigint:!0,boolean:!0,function:!0,number:!0,string:!0};function h(e){if(void 0===e||null===e||d[typeof e])return!0;if(Array.isArray(e)||"object"===typeof e){if(!Object.isFrozen(e))return!1;const r=Object.keys(e);for(let n=0;n<r.length;n++){let i=null;try{i=e[r[n]]}catch(t){continue}if(!h(i))return!1}return!0}return o.throwArgumentError("Cannot deepCopy "+typeof e,"object",e)}function f(e){if(h(e))return e;if(Array.isArray(e))return Object.freeze(e.map((e=>p(e))));if("object"===typeof e){const t={};for(const r in e){const n=e[r];void 0!==n&&s(t,r,p(n))}return t}return o.throwArgumentError("Cannot deepCopy "+typeof e,"object",e)}function p(e){return f(e)}class g{constructor(e){for(const t in e)this[t]=p(e[t])}}},77059:function(e,t,r){"use strict";r.d(t,{i:function(){return n}});const n="providers/5.7.2"},87603:function(e,t,r){"use strict";r.d(t,{Mb:function(){return d},vh:function(){return f}});var n=r(97419),i=r(2257),o=r(49716);var s=r(30520),a=r(78488),l=r(39502),c=r(77059);const u=new l.Yd(c.i);class d{constructor(){this.formats=this.getDefaultFormats()}getDefaultFormats(){const e={},t=this.address.bind(this),r=this.bigNumber.bind(this),n=this.blockTag.bind(this),i=this.data.bind(this),o=this.hash.bind(this),a=this.hex.bind(this),l=this.number.bind(this),c=this.type.bind(this);return e.transaction={hash:o,type:c,accessList:d.allowNull(this.accessList.bind(this),null),blockHash:d.allowNull(o,null),blockNumber:d.allowNull(l,null),transactionIndex:d.allowNull(l,null),confirmations:d.allowNull(l,null),from:t,gasPrice:d.allowNull(r),maxPriorityFeePerGas:d.allowNull(r),maxFeePerGas:d.allowNull(r),gasLimit:r,to:d.allowNull(t,null),value:r,nonce:l,data:i,r:d.allowNull(this.uint256),s:d.allowNull(this.uint256),v:d.allowNull(l),creates:d.allowNull(t,null),raw:d.allowNull(i)},e.transactionRequest={from:d.allowNull(t),nonce:d.allowNull(l),gasLimit:d.allowNull(r),gasPrice:d.allowNull(r),maxPriorityFeePerGas:d.allowNull(r),maxFeePerGas:d.allowNull(r),to:d.allowNull(t),value:d.allowNull(r),data:d.allowNull((e=>this.data(e,!0))),type:d.allowNull(l),accessList:d.allowNull(this.accessList.bind(this),null)},e.receiptLog={transactionIndex:l,blockNumber:l,transactionHash:o,address:t,topics:d.arrayOf(o),data:i,logIndex:l,blockHash:o},e.receipt={to:d.allowNull(this.address,null),from:d.allowNull(this.address,null),contractAddress:d.allowNull(t,null),transactionIndex:l,root:d.allowNull(a),gasUsed:r,logsBloom:d.allowNull(i),blockHash:o,transactionHash:o,logs:d.arrayOf(this.receiptLog.bind(this)),blockNumber:l,confirmations:d.allowNull(l,null),cumulativeGasUsed:r,effectiveGasPrice:d.allowNull(r),status:d.allowNull(l),type:c},e.block={hash:d.allowNull(o),parentHash:o,number:l,timestamp:l,nonce:d.allowNull(a),difficulty:this.difficulty.bind(this),gasLimit:r,gasUsed:r,miner:d.allowNull(t),extraData:i,transactions:d.allowNull(d.arrayOf(o)),baseFeePerGas:d.allowNull(r)},e.blockWithTransactions=(0,s.DC)(e.block),e.blockWithTransactions.transactions=d.allowNull(d.arrayOf(this.transactionResponse.bind(this))),e.filter={fromBlock:d.allowNull(n,void 0),toBlock:d.allowNull(n,void 0),blockHash:d.allowNull(o,void 0),address:d.allowNull(t,void 0),topics:d.allowNull(this.topics.bind(this),void 0)},e.filterLog={blockNumber:d.allowNull(l),blockHash:d.allowNull(o),transactionIndex:l,removed:d.allowNull(this.boolean.bind(this)),address:t,data:d.allowFalsish(i,"0x"),topics:d.arrayOf(o),transactionHash:o,logIndex:l},e}accessList(e){return(0,a.z7)(e||[])}number(e){return"0x"===e?0:i.O$.from(e).toNumber()}type(e){return"0x"===e||null==e?0:i.O$.from(e).toNumber()}bigNumber(e){return i.O$.from(e)}boolean(e){if("boolean"===typeof e)return e;if("string"===typeof e){if("true"===(e=e.toLowerCase()))return!0;if("false"===e)return!1}throw new Error("invalid boolean - "+e)}hex(e,t){return"string"===typeof e&&(t||"0x"===e.substring(0,2)||(e="0x"+e),(0,o.A7)(e))?e.toLowerCase():u.throwArgumentError("invalid hash","value",e)}data(e,t){const r=this.hex(e,t);if(r.length%2!==0)throw new Error("invalid data; odd-length - "+e);return r}address(e){return(0,n.Kn)(e)}callAddress(e){if(!(0,o.A7)(e,32))return null;const t=(0,n.Kn)((0,o.p3)(e,12));return"0x0000000000000000000000000000000000000000"===t?null:t}contractAddress(e){return(0,n.CR)(e)}blockTag(e){if(null==e)return"latest";if("earliest"===e)return"0x0";switch(e){case"earliest":return"0x0";case"latest":case"pending":case"safe":case"finalized":return e}if("number"===typeof e||(0,o.A7)(e))return(0,o.$P)(e);throw new Error("invalid blockTag")}hash(e,t){const r=this.hex(e,t);return 32!==(0,o.E1)(r)?u.throwArgumentError("invalid hash","value",e):r}difficulty(e){if(null==e)return null;const t=i.O$.from(e);try{return t.toNumber()}catch(r){}return null}uint256(e){if(!(0,o.A7)(e))throw new Error("invalid uint256");return(0,o.$m)(e,32)}_block(e,t){null!=e.author&&null==e.miner&&(e.miner=e.author);const r=null!=e._difficulty?e._difficulty:e.difficulty,n=d.check(t,e);return n._difficulty=null==r?null:i.O$.from(r),n}block(e){return this._block(e,this.formats.block)}blockWithTransactions(e){return this._block(e,this.formats.blockWithTransactions)}transactionRequest(e){return d.check(this.formats.transactionRequest,e)}transactionResponse(e){null!=e.gas&&null==e.gasLimit&&(e.gasLimit=e.gas),e.to&&i.O$.from(e.to).isZero()&&(e.to="0x0000000000000000000000000000000000000000"),null!=e.input&&null==e.data&&(e.data=e.input),null==e.to&&null==e.creates&&(e.creates=this.contractAddress(e)),1!==e.type&&2!==e.type||null!=e.accessList||(e.accessList=[]);const t=d.check(this.formats.transaction,e);if(null!=e.chainId){let r=e.chainId;(0,o.A7)(r)&&(r=i.O$.from(r).toNumber()),t.chainId=r}else{let r=e.networkId;null==r&&null==t.v&&(r=e.chainId),(0,o.A7)(r)&&(r=i.O$.from(r).toNumber()),"number"!==typeof r&&null!=t.v&&(r=(t.v-35)/2,r<0&&(r=0),r=parseInt(r)),"number"!==typeof r&&(r=0),t.chainId=r}return t.blockHash&&"x"===t.blockHash.replace(/0/g,"")&&(t.blockHash=null),t}transaction(e){return(0,a.Qc)(e)}receiptLog(e){return d.check(this.formats.receiptLog,e)}receipt(e){const t=d.check(this.formats.receipt,e);if(null!=t.root)if(t.root.length<=4){const e=i.O$.from(t.root).toNumber();0===e||1===e?(null!=t.status&&t.status!==e&&u.throwArgumentError("alt-root-status/status mismatch","value",{root:t.root,status:t.status}),t.status=e,delete t.root):u.throwArgumentError("invalid alt-root-status","value.root",t.root)}else 66!==t.root.length&&u.throwArgumentError("invalid root hash","value.root",t.root);return null!=t.status&&(t.byzantium=!0),t}topics(e){return Array.isArray(e)?e.map((e=>this.topics(e))):null!=e?this.hash(e,!0):null}filter(e){return d.check(this.formats.filter,e)}filterLog(e){return d.check(this.formats.filterLog,e)}static check(e,t){const r={};for(const i in e)try{const n=e[i](t[i]);void 0!==n&&(r[i]=n)}catch(n){throw n.checkKey=i,n.checkValue=t[i],n}return r}static allowNull(e,t){return function(r){return null==r?t:e(r)}}static allowFalsish(e,t){return function(r){return r?e(r):t}}static arrayOf(e){return function(t){if(!Array.isArray(t))throw new Error("not an array");const r=[];return t.forEach((function(t){r.push(e(t))})),r}}}let h=!1;function f(){h||(h=!0,console.log("========= NOTICE ========="),console.log("Request-Rate Exceeded  (this message will not be repeated)"),console.log(""),console.log("The default API keys for each service are provided as a highly-throttled,"),console.log("community resource for low-traffic projects and early prototyping."),console.log(""),console.log("While your application will continue to function, we highly recommended"),console.log("signing up for your own API keys to improve performance, increase your"),console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."),console.log(""),console.log("For more details: https://docs.ethers.io/api-keys/"),console.log("=========================="))}},5502:function(e,t,r){"use strict";r.d(t,{r:function(){return Et}});var n=r(30520),i=r(39502);var o=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const s=new i.Yd("abstract-signer/5.7.0"),a=["accessList","ccipReadEnabled","chainId","customData","data","from","gasLimit","gasPrice","maxFeePerGas","maxPriorityFeePerGas","nonce","to","type","value"],l=[i.Yd.errors.INSUFFICIENT_FUNDS,i.Yd.errors.NONCE_EXPIRED,i.Yd.errors.REPLACEMENT_UNDERPRICED];class c{constructor(){s.checkAbstract(new.target,c),(0,n.zG)(this,"_isSigner",!0)}getBalance(e){return o(this,void 0,void 0,(function*(){return this._checkProvider("getBalance"),yield this.provider.getBalance(this.getAddress(),e)}))}getTransactionCount(e){return o(this,void 0,void 0,(function*(){return this._checkProvider("getTransactionCount"),yield this.provider.getTransactionCount(this.getAddress(),e)}))}estimateGas(e){return o(this,void 0,void 0,(function*(){this._checkProvider("estimateGas");const t=yield(0,n.mE)(this.checkTransaction(e));return yield this.provider.estimateGas(t)}))}call(e,t){return o(this,void 0,void 0,(function*(){this._checkProvider("call");const r=yield(0,n.mE)(this.checkTransaction(e));return yield this.provider.call(r,t)}))}sendTransaction(e){return o(this,void 0,void 0,(function*(){this._checkProvider("sendTransaction");const t=yield this.populateTransaction(e),r=yield this.signTransaction(t);return yield this.provider.sendTransaction(r)}))}getChainId(){return o(this,void 0,void 0,(function*(){this._checkProvider("getChainId");return(yield this.provider.getNetwork()).chainId}))}getGasPrice(){return o(this,void 0,void 0,(function*(){return this._checkProvider("getGasPrice"),yield this.provider.getGasPrice()}))}getFeeData(){return o(this,void 0,void 0,(function*(){return this._checkProvider("getFeeData"),yield this.provider.getFeeData()}))}resolveName(e){return o(this,void 0,void 0,(function*(){return this._checkProvider("resolveName"),yield this.provider.resolveName(e)}))}checkTransaction(e){for(const r in e)-1===a.indexOf(r)&&s.throwArgumentError("invalid transaction key: "+r,"transaction",e);const t=(0,n.DC)(e);return null==t.from?t.from=this.getAddress():t.from=Promise.all([Promise.resolve(t.from),this.getAddress()]).then((t=>(t[0].toLowerCase()!==t[1].toLowerCase()&&s.throwArgumentError("from address mismatch","transaction",e),t[0]))),t}populateTransaction(e){return o(this,void 0,void 0,(function*(){const t=yield(0,n.mE)(this.checkTransaction(e));null!=t.to&&(t.to=Promise.resolve(t.to).then((e=>o(this,void 0,void 0,(function*(){if(null==e)return null;const t=yield this.resolveName(e);return null==t&&s.throwArgumentError("provided ENS name resolves to null","tx.to",e),t})))),t.to.catch((e=>{})));const r=null!=t.maxFeePerGas||null!=t.maxPriorityFeePerGas;if(null==t.gasPrice||2!==t.type&&!r?0!==t.type&&1!==t.type||!r||s.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas","transaction",e):s.throwArgumentError("eip-1559 transaction do not support gasPrice","transaction",e),2!==t.type&&null!=t.type||null==t.maxFeePerGas||null==t.maxPriorityFeePerGas)if(0===t.type||1===t.type)null==t.gasPrice&&(t.gasPrice=this.getGasPrice());else{const e=yield this.getFeeData();if(null==t.type)if(null!=e.maxFeePerGas&&null!=e.maxPriorityFeePerGas)if(t.type=2,null!=t.gasPrice){const e=t.gasPrice;delete t.gasPrice,t.maxFeePerGas=e,t.maxPriorityFeePerGas=e}else null==t.maxFeePerGas&&(t.maxFeePerGas=e.maxFeePerGas),null==t.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=e.maxPriorityFeePerGas);else null!=e.gasPrice?(r&&s.throwError("network does not support EIP-1559",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"populateTransaction"}),null==t.gasPrice&&(t.gasPrice=e.gasPrice),t.type=0):s.throwError("failed to get consistent fee data",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"signer.getFeeData"});else 2===t.type&&(null==t.maxFeePerGas&&(t.maxFeePerGas=e.maxFeePerGas),null==t.maxPriorityFeePerGas&&(t.maxPriorityFeePerGas=e.maxPriorityFeePerGas))}else t.type=2;return null==t.nonce&&(t.nonce=this.getTransactionCount("pending")),null==t.gasLimit&&(t.gasLimit=this.estimateGas(t).catch((e=>{if(l.indexOf(e.code)>=0)throw e;return s.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",i.Yd.errors.UNPREDICTABLE_GAS_LIMIT,{error:e,tx:t})}))),null==t.chainId?t.chainId=this.getChainId():t.chainId=Promise.all([Promise.resolve(t.chainId),this.getChainId()]).then((t=>(0!==t[1]&&t[0]!==t[1]&&s.throwArgumentError("chainId address mismatch","transaction",e),t[0]))),yield(0,n.mE)(t)}))}_checkProvider(e){this.provider||s.throwError("missing provider",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:e||"_checkProvider"})}static isSigner(e){return!(!e||!e._isSigner)}}var u=r(2257),d=r(49716),h=r(97419),f=r(88062);const p="hash/5.7.0",g=new i.Yd("strings/5.7.0");var m,v;function y(e,t,r,n,i){if(e===v.BAD_PREFIX||e===v.UNEXPECTED_CONTINUE){let e=0;for(let n=t+1;n<r.length&&r[n]>>6===2;n++)e++;return e}return e===v.OVERRUN?r.length-t-1:0}!function(e){e.current="",e.NFC="NFC",e.NFD="NFD",e.NFKC="NFKC",e.NFKD="NFKD"}(m||(m={})),function(e){e.UNEXPECTED_CONTINUE="unexpected continuation byte",e.BAD_PREFIX="bad codepoint prefix",e.OVERRUN="string overrun",e.MISSING_CONTINUE="missing continuation byte",e.OUT_OF_RANGE="out of UTF-8 range",e.UTF16_SURROGATE="UTF-16 surrogate",e.OVERLONG="overlong representation"}(v||(v={}));const b=Object.freeze({error:function(e,t,r,n,i){return g.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`,"bytes",r)},ignore:y,replace:function(e,t,r,n,i){return e===v.OVERLONG?(n.push(i),0):(n.push(65533),y(e,t,r))}});function w(e,t){null==t&&(t=b.error),e=(0,d.lE)(e);const r=[];let n=0;for(;n<e.length;){const i=e[n++];if(i>>7===0){r.push(i);continue}let o=null,s=null;if(192===(224&i))o=1,s=127;else if(224===(240&i))o=2,s=2047;else{if(240!==(248&i)){n+=t(128===(192&i)?v.UNEXPECTED_CONTINUE:v.BAD_PREFIX,n-1,e,r);continue}o=3,s=65535}if(n-1+o>=e.length){n+=t(v.OVERRUN,n-1,e,r);continue}let a=i&(1<<8-o-1)-1;for(let l=0;l<o;l++){let i=e[n];if(128!=(192&i)){n+=t(v.MISSING_CONTINUE,n,e,r),a=null;break}a=a<<6|63&i,n++}null!==a&&(a>1114111?n+=t(v.OUT_OF_RANGE,n-1-o,e,r,a):a>=55296&&a<=57343?n+=t(v.UTF16_SURROGATE,n-1-o,e,r,a):a<=s?n+=t(v.OVERLONG,n-1-o,e,r,a):r.push(a))}return r}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.current;t!=m.current&&(g.checkNormalize(),e=e.normalize(t));let r=[];for(let n=0;n<e.length;n++){const t=e.charCodeAt(n);if(t<128)r.push(t);else if(t<2048)r.push(t>>6|192),r.push(63&t|128);else if(55296==(64512&t)){n++;const i=e.charCodeAt(n);if(n>=e.length||56320!==(64512&i))throw new Error("invalid utf-8 string");const o=65536+((1023&t)<<10)+(1023&i);r.push(o>>18|240),r.push(o>>12&63|128),r.push(o>>6&63|128),r.push(63&o|128)}else r.push(t>>12|224),r.push(t>>6&63|128),r.push(63&t|128)}return(0,d.lE)(r)}function _(e,t){return w(e,t).map((e=>e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(55296+(e>>10&1023),56320+(1023&e))))).join("")}function E(e){return(0,f.w)(x(e))}var S=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const k=new i.Yd(p),C=new Uint8Array(32);C.fill(0);const A=u.O$.from(-1),P=u.O$.from(0),I=u.O$.from(1),R=u.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");const O=(0,d.$m)(I.toHexString(),32),T=(0,d.$m)(P.toHexString(),32),M={name:"string",version:"string",chainId:"uint256",verifyingContract:"address",salt:"bytes32"},N=["name","version","chainId","verifyingContract","salt"];function j(e){return function(t){return"string"!==typeof t&&k.throwArgumentError(`invalid domain value for ${JSON.stringify(e)}`,`domain.${e}`,t),t}}const L={name:j("name"),version:j("version"),chainId:function(e){try{return u.O$.from(e).toString()}catch(t){}return k.throwArgumentError('invalid domain value for "chainId"',"domain.chainId",e)},verifyingContract:function(e){try{return(0,h.Kn)(e).toLowerCase()}catch(t){}return k.throwArgumentError('invalid domain value "verifyingContract"',"domain.verifyingContract",e)},salt:function(e){try{const t=(0,d.lE)(e);if(32!==t.length)throw new Error("bad length");return(0,d.Dv)(t)}catch(t){}return k.throwArgumentError('invalid domain value "salt"',"domain.salt",e)}};function D(e){{const t=e.match(/^(u?)int(\d*)$/);if(t){const r=""===t[1],n=parseInt(t[2]||"256");(n%8!==0||n>256||t[2]&&t[2]!==String(n))&&k.throwArgumentError("invalid numeric width","type",e);const i=R.mask(r?n-1:n),o=r?i.add(I).mul(A):P;return function(t){const r=u.O$.from(t);return(r.lt(o)||r.gt(i))&&k.throwArgumentError(`value out-of-bounds for ${e}`,"value",t),(0,d.$m)(r.toTwos(256).toHexString(),32)}}}{const t=e.match(/^bytes(\d+)$/);if(t){const r=parseInt(t[1]);return(0===r||r>32||t[1]!==String(r))&&k.throwArgumentError("invalid bytes width","type",e),function(t){return(0,d.lE)(t).length!==r&&k.throwArgumentError(`invalid length for ${e}`,"value",t),function(e){const t=(0,d.lE)(e),r=t.length%32;return r?(0,d.xs)([t,C.slice(r)]):(0,d.Dv)(t)}(t)}}}switch(e){case"address":return function(e){return(0,d.$m)((0,h.Kn)(e),32)};case"bool":return function(e){return e?O:T};case"bytes":return function(e){return(0,f.w)(e)};case"string":return function(e){return E(e)}}return null}function $(e,t){return`${e}(${t.map((e=>{let{name:t,type:r}=e;return r+" "+t})).join(",")})`}class B{constructor(e){(0,n.zG)(this,"types",Object.freeze((0,n.p$)(e))),(0,n.zG)(this,"_encoderCache",{}),(0,n.zG)(this,"_types",{});const t={},r={},i={};Object.keys(e).forEach((e=>{t[e]={},r[e]=[],i[e]={}}));for(const n in e){const i={};e[n].forEach((o=>{i[o.name]&&k.throwArgumentError(`duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(n)}`,"types",e),i[o.name]=!0;const s=o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];s===n&&k.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`,"types",e);D(s)||(r[s]||k.throwArgumentError(`unknown type ${JSON.stringify(s)}`,"types",e),r[s].push(n),t[n][s]=!0)}))}const o=Object.keys(r).filter((e=>0===r[e].length));0===o.length?k.throwArgumentError("missing primary type","types",e):o.length>1&&k.throwArgumentError(`ambiguous primary types or unused types: ${o.map((e=>JSON.stringify(e))).join(", ")}`,"types",e),(0,n.zG)(this,"primaryType",o[0]),function n(o,s){s[o]&&k.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`,"types",e),s[o]=!0,Object.keys(t[o]).forEach((e=>{r[e]&&(n(e,s),Object.keys(s).forEach((t=>{i[t][e]=!0})))})),delete s[o]}(this.primaryType,{});for(const n in i){const t=Object.keys(i[n]);t.sort(),this._types[n]=$(n,e[n])+t.map((t=>$(t,e[t]))).join("")}}getEncoder(e){let t=this._encoderCache[e];return t||(t=this._encoderCache[e]=this._getEncoder(e)),t}_getEncoder(e){{const t=D(e);if(t)return t}const t=e.match(/^(.*)(\x5b(\d*)\x5d)$/);if(t){const e=t[1],r=this.getEncoder(e),n=parseInt(t[3]);return t=>{n>=0&&t.length!==n&&k.throwArgumentError("array length mismatch; expected length ${ arrayLength }","value",t);let i=t.map(r);return this._types[e]&&(i=i.map(f.w)),(0,f.w)((0,d.xs)(i))}}const r=this.types[e];if(r){const t=E(this._types[e]);return e=>{const n=r.map((t=>{let{name:r,type:n}=t;const i=this.getEncoder(n)(e[r]);return this._types[n]?(0,f.w)(i):i}));return n.unshift(t),(0,d.xs)(n)}}return k.throwArgumentError(`unknown type: ${e}`,"type",e)}encodeType(e){const t=this._types[e];return t||k.throwArgumentError(`unknown type: ${JSON.stringify(e)}`,"name",e),t}encodeData(e,t){return this.getEncoder(e)(t)}hashStruct(e,t){return(0,f.w)(this.encodeData(e,t))}encode(e){return this.encodeData(this.primaryType,e)}hash(e){return this.hashStruct(this.primaryType,e)}_visit(e,t,r){if(D(e))return r(e,t);const n=e.match(/^(.*)(\x5b(\d*)\x5d)$/);if(n){const e=n[1],i=parseInt(n[3]);return i>=0&&t.length!==i&&k.throwArgumentError("array length mismatch; expected length ${ arrayLength }","value",t),t.map((t=>this._visit(e,t,r)))}const i=this.types[e];return i?i.reduce(((e,n)=>{let{name:i,type:o}=n;return e[i]=this._visit(o,t[i],r),e}),{}):k.throwArgumentError(`unknown type: ${e}`,"type",e)}visit(e,t){return this._visit(this.primaryType,e,t)}static from(e){return new B(e)}static getPrimaryType(e){return B.from(e).primaryType}static hashStruct(e,t,r){return B.from(t).hashStruct(e,r)}static hashDomain(e){const t=[];for(const r in e){const n=M[r];n||k.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`,"domain",e),t.push({name:r,type:n})}return t.sort(((e,t)=>N.indexOf(e.name)-N.indexOf(t.name))),B.hashStruct("EIP712Domain",{EIP712Domain:t},e)}static encode(e,t,r){return(0,d.xs)(["0x1901",B.hashDomain(e),B.from(t).hash(r)])}static hash(e,t,r){return(0,f.w)(B.encode(e,t,r))}static resolveNames(e,t,r,i){return S(this,void 0,void 0,(function*(){e=(0,n.DC)(e);const o={};e.verifyingContract&&!(0,d.A7)(e.verifyingContract,20)&&(o[e.verifyingContract]="0x");const s=B.from(t);s.visit(r,((e,t)=>("address"!==e||(0,d.A7)(t,20)||(o[t]="0x"),t)));for(const e in o)o[e]=yield i(e);return e.verifyingContract&&o[e.verifyingContract]&&(e.verifyingContract=o[e.verifyingContract]),r=s.visit(r,((e,t)=>"address"===e&&o[t]?o[t]:t)),{domain:e,value:r}}))}static getPayload(e,t,r){B.hashDomain(e);const i={},o=[];N.forEach((t=>{const r=e[t];null!=r&&(i[t]=L[t](r),o.push({name:t,type:M[t]}))}));const s=B.from(t),a=(0,n.DC)(t);return a.EIP712Domain?k.throwArgumentError("types must not contain EIP712Domain type","types.EIP712Domain",t):a.EIP712Domain=o,s.encode(r),{types:a,domain:i,primaryType:s.primaryType,message:s.visit(r,((e,t)=>{if(e.match(/^bytes(\d*)/))return(0,d.Dv)((0,d.lE)(t));if(e.match(/^u?int/))return u.O$.from(t).toString();switch(e){case"address":return t.toLowerCase();case"bool":return!!t;case"string":return"string"!==typeof t&&k.throwArgumentError("invalid string","value",t),t}return k.throwArgumentError("unsupported type","type",e)}))}}}var Z=r(78488);function z(e){e=atob(e);const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return(0,d.lE)(t)}function U(e){e=(0,d.lE)(e);let t="";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return btoa(t)}var F=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};function W(e,t){return F(this,void 0,void 0,(function*(){null==t&&(t={});const r={method:t.method||"GET",headers:t.headers||{},body:t.body||void 0};if(!0!==t.skipFetchSetup&&(r.mode="cors",r.cache="no-cache",r.credentials="same-origin",r.redirect="follow",r.referrer="client"),null!=t.fetchOptions){const e=t.fetchOptions;e.mode&&(r.mode=e.mode),e.cache&&(r.cache=e.cache),e.credentials&&(r.credentials=e.credentials),e.redirect&&(r.redirect=e.redirect),e.referrer&&(r.referrer=e.referrer)}const n=yield fetch(e,r),i=yield n.arrayBuffer(),o={};return n.headers.forEach?n.headers.forEach(((e,t)=>{o[t.toLowerCase()]=e})):n.headers.keys().forEach((e=>{o[e.toLowerCase()]=n.headers.get(e)})),{headers:o,statusCode:n.status,statusMessage:n.statusText,body:(0,d.lE)(new Uint8Array(i))}}))}var H=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const V=new i.Yd("web/5.7.1");function q(e){return new Promise((t=>{setTimeout(t,e)}))}function Y(e,t){if(null==e)return null;if("string"===typeof e)return e;if((0,d.Zq)(e)){if(t&&("text"===t.split("/")[0]||"application/json"===t.split(";")[0].trim()))try{return _(e)}catch(r){}return(0,d.Dv)(e)}return e}function G(e,t,r){let o=null;if(null!=t){o=x(t);const r="string"===typeof e?{url:e}:(0,n.DC)(e);if(r.headers){0!==Object.keys(r.headers).filter((e=>"content-type"===e.toLowerCase())).length||(r.headers=(0,n.DC)(r.headers),r.headers["content-type"]="application/json")}else r.headers={"content-type":"application/json"};e=r}return function(e,t,r){const o="object"===typeof e&&null!=e.throttleLimit?e.throttleLimit:12;V.assertArgument(o>0&&o%1===0,"invalid connection throttle limit","connection.throttleLimit",o);const s="object"===typeof e?e.throttleCallback:null,a="object"===typeof e&&"number"===typeof e.throttleSlotInterval?e.throttleSlotInterval:100;V.assertArgument(a>0&&a%1===0,"invalid connection throttle slot interval","connection.throttleSlotInterval",a);const l="object"===typeof e&&!!e.errorPassThrough,c={};let u=null;const d={method:"GET"};let h=!1,f=12e4;if("string"===typeof e)u=e;else if("object"===typeof e){if(null!=e&&null!=e.url||V.throwArgumentError("missing URL","connection.url",e),u=e.url,"number"===typeof e.timeout&&e.timeout>0&&(f=e.timeout),e.headers)for(const t in e.headers)c[t.toLowerCase()]={key:t,value:String(e.headers[t])},["if-none-match","if-modified-since"].indexOf(t.toLowerCase())>=0&&(h=!0);if(d.allowGzip=!!e.allowGzip,null!=e.user&&null!=e.password){"https:"!==u.substring(0,6)&&!0!==e.allowInsecureAuthentication&&V.throwError("basic authentication requires a secure https url",i.Yd.errors.INVALID_ARGUMENT,{argument:"url",url:u,user:e.user,password:"[REDACTED]"});const t=e.user+":"+e.password;c.authorization={key:"Authorization",value:"Basic "+U(x(t))}}null!=e.skipFetchSetup&&(d.skipFetchSetup=!!e.skipFetchSetup),null!=e.fetchOptions&&(d.fetchOptions=(0,n.DC)(e.fetchOptions))}const p=new RegExp("^data:([^;:]*)?(;base64)?,(.*)$","i"),g=u?u.match(p):null;if(g)try{const e={statusCode:200,statusMessage:"OK",headers:{"content-type":g[1]||"text/plain"},body:g[2]?z(g[3]):(m=g[3],x(m.replace(/%([0-9a-f][0-9a-f])/gi,((e,t)=>String.fromCharCode(parseInt(t,16))))))};let t=e.body;return r&&(t=r(e.body,e)),Promise.resolve(t)}catch(w){V.throwError("processing response error",i.Yd.errors.SERVER_ERROR,{body:Y(g[1],g[2]),error:w,requestBody:null,requestMethod:"GET",url:u})}var m;t&&(d.method="POST",d.body=t,null==c["content-type"]&&(c["content-type"]={key:"Content-Type",value:"application/octet-stream"}),null==c["content-length"]&&(c["content-length"]={key:"Content-Length",value:String(t.length)}));const v={};Object.keys(c).forEach((e=>{const t=c[e];v[t.key]=t.value})),d.headers=v;const y=function(){let e=null;return{promise:new Promise((function(t,r){f&&(e=setTimeout((()=>{null!=e&&(e=null,r(V.makeError("timeout",i.Yd.errors.TIMEOUT,{requestBody:Y(d.body,v["content-type"]),requestMethod:d.method,timeout:f,url:u})))}),f))})),cancel:function(){null!=e&&(clearTimeout(e),e=null)}}}(),b=function(){return H(this,void 0,void 0,(function*(){for(let e=0;e<o;e++){let t=null;try{if(t=yield W(u,d),e<o)if(301===t.statusCode||302===t.statusCode){const e=t.headers.location||"";if("GET"===d.method&&e.match(/^https:/)){u=t.headers.location;continue}}else if(429===t.statusCode){let r=!0;if(s&&(r=yield s(e,u)),r){let r=0;const n=t.headers["retry-after"];r="string"===typeof n&&n.match(/^[1-9][0-9]*$/)?1e3*parseInt(n):a*parseInt(String(Math.random()*Math.pow(2,e))),yield q(r);continue}}}catch(w){t=w.response,null==t&&(y.cancel(),V.throwError("missing response",i.Yd.errors.SERVER_ERROR,{requestBody:Y(d.body,v["content-type"]),requestMethod:d.method,serverError:w,url:u}))}let n=t.body;if(h&&304===t.statusCode?n=null:!l&&(t.statusCode<200||t.statusCode>=300)&&(y.cancel(),V.throwError("bad response",i.Yd.errors.SERVER_ERROR,{status:t.statusCode,headers:t.headers,body:Y(n,t.headers?t.headers["content-type"]:null),requestBody:Y(d.body,v["content-type"]),requestMethod:d.method,url:u})),r)try{const e=yield r(n,t);return y.cancel(),e}catch(w){if(w.throttleRetry&&e<o){let t=!0;if(s&&(t=yield s(e,u)),t){const t=a*parseInt(String(Math.random()*Math.pow(2,e)));yield q(t);continue}}y.cancel(),V.throwError("processing response error",i.Yd.errors.SERVER_ERROR,{body:Y(n,t.headers?t.headers["content-type"]:null),error:w,requestBody:Y(d.body,v["content-type"]),requestMethod:d.method,url:u})}return y.cancel(),n}return V.throwError("failed response",i.Yd.errors.SERVER_ERROR,{requestBody:Y(d.body,v["content-type"]),requestMethod:d.method,url:u})}))}();return Promise.race([y.promise,b])}(e,o,((e,t)=>{let n=null;if(null!=e)try{n=JSON.parse(_(e))}catch(o){V.throwError("invalid JSON",i.Yd.errors.SERVER_ERROR,{body:e,error:o})}return r&&(n=r(n,t)),n}))}function K(e,t){return t||(t={}),null==(t=(0,n.DC)(t)).floor&&(t.floor=0),null==t.ceiling&&(t.ceiling=1e4),null==t.interval&&(t.interval=250),new Promise((function(r,n){let i=null,o=!1;const s=()=>!o&&(o=!0,i&&clearTimeout(i),!0);t.timeout&&(i=setTimeout((()=>{s()&&n(new Error("timeout"))}),t.timeout));const a=t.retryLimit;let l=0;!function i(){return e().then((function(e){if(void 0!==e)s()&&r(e);else if(t.oncePoll)t.oncePoll.once("poll",i);else if(t.onceBlock)t.onceBlock.once("block",i);else if(!o){if(l++,l>a)return void(s()&&n(new Error("retry limit reached")));let e=t.interval*parseInt(String(Math.random()*Math.pow(2,l)));e<t.floor&&(e=t.floor),e>t.ceiling&&(e=t.ceiling),setTimeout(i,e)}return null}),(function(e){s()&&n(e)}))}()}))}var J=r(77059);var Q=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const X=new i.Yd("abstract-provider/5.7.0");class ee extends n.dk{static isForkEvent(e){return!(!e||!e._isForkEvent)}}class te{constructor(){X.checkAbstract(new.target,te),(0,n.zG)(this,"_isProvider",!0)}getFeeData(){return Q(this,void 0,void 0,(function*(){const{block:e,gasPrice:t}=yield(0,n.mE)({block:this.getBlock("latest"),gasPrice:this.getGasPrice().catch((e=>null))});let r=null,i=null,o=null;return e&&e.baseFeePerGas&&(r=e.baseFeePerGas,o=u.O$.from("1500000000"),i=e.baseFeePerGas.mul(2).add(o)),{lastBaseFeePerGas:r,maxFeePerGas:i,maxPriorityFeePerGas:o,gasPrice:t}}))}addListener(e,t){return this.on(e,t)}removeListener(e,t){return this.off(e,t)}static isProvider(e){return!(!e||!e._isProvider)}}class re{constructor(e){(0,n.zG)(this,"alphabet",e),(0,n.zG)(this,"base",e.length),(0,n.zG)(this,"_alphabetMap",{}),(0,n.zG)(this,"_leader",e.charAt(0));for(let t=0;t<e.length;t++)this._alphabetMap[e.charAt(t)]=t}encode(e){let t=(0,d.lE)(e);if(0===t.length)return"";let r=[0];for(let i=0;i<t.length;++i){let e=t[i];for(let t=0;t<r.length;++t)e+=r[t]<<8,r[t]=e%this.base,e=e/this.base|0;for(;e>0;)r.push(e%this.base),e=e/this.base|0}let n="";for(let i=0;0===t[i]&&i<t.length-1;++i)n+=this._leader;for(let i=r.length-1;i>=0;--i)n+=this.alphabet[r[i]];return n}decode(e){if("string"!==typeof e)throw new TypeError("Expected String");let t=[];if(0===e.length)return new Uint8Array(t);t.push(0);for(let r=0;r<e.length;r++){let n=this._alphabetMap[e[r]];if(void 0===n)throw new Error("Non-base"+this.base+" character");let i=n;for(let e=0;e<t.length;++e)i+=t[e]*this.base,t[e]=255&i,i>>=8;for(;i>0;)t.push(255&i),i>>=8}for(let r=0;e[r]===this._leader&&r<e.length-1;++r)t.push(0);return(0,d.lE)(new Uint8Array(t.reverse()))}}new re("abcdefghijklmnopqrstuvwxyz234567");const ne=new re("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");function ie(e,t){null==t&&(t=1);const r=[],n=r.forEach,i=function(e,t){n.call(e,(function(e){t>0&&Array.isArray(e)?i(e,t-1):r.push(e)}))};return i(e,t),r}function oe(e){return function(e){let t=0;return()=>e[t++]}(function(e){let t=0;function r(){return e[t++]<<8|e[t++]}let n=r(),i=1,o=[0,1];for(let w=1;w<n;w++)o.push(i+=r());let s=r(),a=t;t+=s;let l=0,c=0;function u(){return 0==l&&(c=c<<8|e[t++],l=8),c>>--l&1}const d=Math.pow(2,31),h=d>>>1,f=h>>1,p=d-1;let g=0;for(let w=0;w<31;w++)g=g<<1|u();let m=[],v=0,y=d;for(;;){let e=Math.floor(((g-v+1)*i-1)/y),t=0,r=n;for(;r-t>1;){let n=t+r>>>1;e<o[n]?r=n:t=n}if(0==t)break;m.push(t);let s=v+Math.floor(y*o[t]/i),a=v+Math.floor(y*o[t+1]/i)-1;for(;0==((s^a)&h);)g=g<<1&p|u(),s=s<<1&p,a=a<<1&p|1;for(;s&~a&f;)g=g&h|g<<1&p>>>1|u(),s=s<<1^h,a=(a^h)<<1|h|1;v=s,y=1+a-s}let b=n-4;return m.map((t=>{switch(t-b){case 3:return b+65792+(e[a++]<<16|e[a++]<<8|e[a++]);case 2:return b+256+(e[a++]<<8|e[a++]);case 1:return b+e[a++];default:return t-1}}))}(e))}function se(e){return 1&e?~e>>1:e>>1}function ae(e,t){let r=Array(e);for(let n=0,i=-1;n<e;n++)r[n]=i+=1+t();return r}function le(e,t){let r=Array(e);for(let n=0,i=0;n<e;n++)r[n]=i+=se(t());return r}function ce(e,t){let r=ae(e(),e),n=e(),i=ae(n,e),o=function(e,t){let r=Array(e);for(let n=0;n<e;n++)r[n]=1+t();return r}(n,e);for(let s=0;s<n;s++)for(let e=0;e<o[s];e++)r.push(i[s]+e);return t?r.map((e=>t[e])):r}function ue(e,t,r){let n=Array(e).fill(void 0).map((()=>[]));for(let i=0;i<t;i++)le(e,r).forEach(((e,t)=>n[t].push(e)));return n}function de(e,t){let r=1+t(),n=t(),i=function(e){let t=[];for(;;){let r=e();if(0==r)break;t.push(r)}return t}(t);return ie(ue(i.length,1+e,t).map(((e,t)=>{const o=e[0],s=e.slice(1);return Array(i[t]).fill(void 0).map(((e,t)=>{let i=t*n;return[o+t*r,s.map((e=>e+i))]}))})))}function he(e,t){return ue(1+t(),1+e,t).map((e=>[e[0],e.slice(1)]))}const fe=oe(z("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")),pe=new Set(ce(fe)),ge=new Set(ce(fe)),me=function(e){let t=[];for(;;){let r=e();if(0==r)break;t.push(de(r,e))}for(;;){let r=e()-1;if(r<0)break;t.push(he(r,e))}return function(e){const t={};for(let r=0;r<e.length;r++){const n=e[r];t[n[0]]=n[1]}return t}(ie(t))}(fe),ve=function(e){let t=ce(e).sort(((e,t)=>e-t));return function r(){let n=[];for(;;){let i=ce(e,t);if(0==i.length)break;n.push({set:new Set(i),node:r()})}n.sort(((e,t)=>t.set.size-e.set.size));let i=e(),o=i%3;i=i/3|0;let s=!!(1&i);return i>>=1,{branches:n,valid:o,fe0f:s,save:1==i,check:2==i}}()}(fe);function ye(e){return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.current;return w(x(e,t))}(e)}function be(e){return e.filter((e=>65039!=e))}function we(e){for(let r of e.split(".")){let e=ye(r);try{for(let t=e.lastIndexOf(95)-1;t>=0;t--)if(95!==e[t])throw new Error("underscore only allowed at start");if(e.length>=4&&e.every((e=>e<128))&&45===e[2]&&45===e[3])throw new Error("invalid label extension")}catch(t){throw new Error(`Invalid label "${r}": ${t.message}`)}}return e}function xe(e){return we(function(e,t){let r=ye(e).reverse(),n=[];for(;r.length;){let e=_e(r);if(e){n.push(...t(e));continue}let i=r.pop();if(pe.has(i)){n.push(i);continue}if(ge.has(i))continue;let o=me[i];if(!o)throw new Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`);n.push(...o)}return we((i=String.fromCodePoint(...n),i.normalize("NFC")));var i}(e,be))}function _e(e,t){var r;let n,i,o=ve,s=[],a=e.length;for(t&&(t.length=0);a;){let l=e[--a];if(o=null===(r=o.branches.find((e=>e.set.has(l))))||void 0===r?void 0:r.node,!o)break;if(o.save)i=l;else if(o.check&&l===i)break;s.push(l),o.fe0f&&(s.push(65039),a>0&&65039==e[a-1]&&a--),o.valid&&(n=s.slice(),2==o.valid&&n.splice(1,1),t&&t.push(...e.slice(a).reverse()),e.length=a)}return n}const Ee=new i.Yd(p),Se=new Uint8Array(32);function ke(e){if(0===e.length)throw new Error("invalid ENS name; empty component");return e}function Ce(e){const t=x(xe(e)),r=[];if(0===e.length)return r;let n=0;for(let i=0;i<t.length;i++){46===t[i]&&(r.push(ke(t.slice(n,i))),n=i+1)}if(n>=t.length)throw new Error("invalid ENS name; empty component");return r.push(ke(t.slice(n))),r}function Ae(e){"string"!==typeof e&&Ee.throwArgumentError("invalid ENS name; not a string","name",e);let t=Se;const r=Ce(e);for(;r.length;)t=(0,f.w)((0,d.zo)([t,(0,f.w)(r.pop())]));return(0,d.Dv)(t)}Se.fill(0);const Pe=new i.Yd("networks/5.7.1");function Ie(e){const t=function(t,r){null==r&&(r={});const n=[];if(t.InfuraProvider&&"-"!==r.infura)try{n.push(new t.InfuraProvider(e,r.infura))}catch(i){}if(t.EtherscanProvider&&"-"!==r.etherscan)try{n.push(new t.EtherscanProvider(e,r.etherscan))}catch(i){}if(t.AlchemyProvider&&"-"!==r.alchemy)try{n.push(new t.AlchemyProvider(e,r.alchemy))}catch(i){}if(t.PocketProvider&&"-"!==r.pocket){const o=["goerli","ropsten","rinkeby","sepolia"];try{const i=new t.PocketProvider(e,r.pocket);i.network&&-1===o.indexOf(i.network.name)&&n.push(i)}catch(i){}}if(t.CloudflareProvider&&"-"!==r.cloudflare)try{n.push(new t.CloudflareProvider(e))}catch(i){}if(t.AnkrProvider&&"-"!==r.ankr)try{const i=["ropsten"],o=new t.AnkrProvider(e,r.ankr);o.network&&-1===i.indexOf(o.network.name)&&n.push(o)}catch(i){}if(0===n.length)return null;if(t.FallbackProvider){let i=1;return null!=r.quorum?i=r.quorum:"homestead"===e&&(i=2),new t.FallbackProvider(n,i)}return n[0]};return t.renetwork=function(e){return Ie(e)},t}function Re(e,t){const r=function(r,n){return r.JsonRpcProvider?new r.JsonRpcProvider(e,t):null};return r.renetwork=function(t){return Re(e,t)},r}const Oe={chainId:1,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"homestead",_defaultProvider:Ie("homestead")},Te={chainId:3,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"ropsten",_defaultProvider:Ie("ropsten")},Me={chainId:63,name:"classicMordor",_defaultProvider:Re("https://www.ethercluster.com/mordor","classicMordor")},Ne={unspecified:{chainId:0,name:"unspecified"},homestead:Oe,mainnet:Oe,morden:{chainId:2,name:"morden"},ropsten:Te,testnet:Te,rinkeby:{chainId:4,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"rinkeby",_defaultProvider:Ie("rinkeby")},kovan:{chainId:42,name:"kovan",_defaultProvider:Ie("kovan")},goerli:{chainId:5,ensAddress:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"goerli",_defaultProvider:Ie("goerli")},kintsugi:{chainId:1337702,name:"kintsugi"},sepolia:{chainId:11155111,name:"sepolia",_defaultProvider:Ie("sepolia")},classic:{chainId:61,name:"classic",_defaultProvider:Re("https://www.ethercluster.com/etc","classic")},classicMorden:{chainId:62,name:"classicMorden"},classicMordor:Me,classicTestnet:Me,classicKotti:{chainId:6,name:"classicKotti",_defaultProvider:Re("https://www.ethercluster.com/kotti","classicKotti")},xdai:{chainId:100,name:"xdai"},matic:{chainId:137,name:"matic",_defaultProvider:Ie("matic")},maticmum:{chainId:80001,name:"maticmum"},optimism:{chainId:10,name:"optimism",_defaultProvider:Ie("optimism")},"optimism-kovan":{chainId:69,name:"optimism-kovan"},"optimism-goerli":{chainId:420,name:"optimism-goerli"},arbitrum:{chainId:42161,name:"arbitrum"},"arbitrum-rinkeby":{chainId:421611,name:"arbitrum-rinkeby"},"arbitrum-goerli":{chainId:421613,name:"arbitrum-goerli"},bnb:{chainId:56,name:"bnb"},bnbt:{chainId:97,name:"bnbt"}};var je=r(33125),Le=r.n(je);new i.Yd("sha2/5.7.0");function De(e){return"0x"+Le().sha256().update((0,d.lE)(e)).digest("hex")}var $e=r(31360),Be=r.n($e),Ze=r(87603),ze=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const Ue=new i.Yd(J.i);function Fe(e){return null==e?"null":(32!==(0,d.E1)(e)&&Ue.throwArgumentError("invalid topic","topic",e),e.toLowerCase())}function We(e){for(e=e.slice();e.length>0&&null==e[e.length-1];)e.pop();return e.map((e=>{if(Array.isArray(e)){const t={};e.forEach((e=>{t[Fe(e)]=!0}));const r=Object.keys(t);return r.sort(),r.join("|")}return Fe(e)})).join("&")}function He(e){if("string"===typeof e){if(e=e.toLowerCase(),32===(0,d.E1)(e))return"tx:"+e;if(-1===e.indexOf(":"))return e}else{if(Array.isArray(e))return"filter:*:"+We(e);if(ee.isForkEvent(e))throw Ue.warn("not implemented"),new Error("not implemented");if(e&&"object"===typeof e)return"filter:"+(e.address||"*")+":"+We(e.topics||[])}throw new Error("invalid event - "+e)}function Ve(){return(new Date).getTime()}function qe(e){return new Promise((t=>{setTimeout(t,e)}))}const Ye=["block","network","pending","poll"];class Ge{constructor(e,t,r){(0,n.zG)(this,"tag",e),(0,n.zG)(this,"listener",t),(0,n.zG)(this,"once",r),this._lastBlockNumber=-2,this._inflight=!1}get event(){switch(this.type){case"tx":return this.hash;case"filter":return this.filter}return this.tag}get type(){return this.tag.split(":")[0]}get hash(){const e=this.tag.split(":");return"tx"!==e[0]?null:e[1]}get filter(){const e=this.tag.split(":");if("filter"!==e[0])return null;const t=e[1],r=""===(n=e[2])?[]:n.split(/&/g).map((e=>{if(""===e)return[];const t=e.split("|").map((e=>"null"===e?null:e));return 1===t.length?t[0]:t}));var n;const i={};return r.length>0&&(i.topics=r),t&&"*"!==t&&(i.address=t),i}pollable(){return this.tag.indexOf(":")>=0||Ye.indexOf(this.tag)>=0}}const Ke={0:{symbol:"btc",p2pkh:0,p2sh:5,prefix:"bc"},2:{symbol:"ltc",p2pkh:48,p2sh:50,prefix:"ltc"},3:{symbol:"doge",p2pkh:30,p2sh:22},60:{symbol:"eth",ilk:"eth"},61:{symbol:"etc",ilk:"eth"},700:{symbol:"xdai",ilk:"eth"}};function Je(e){return(0,d.$m)(u.O$.from(e).toHexString(),32)}function Qe(e){return ne.encode((0,d.zo)([e,(0,d.p3)(De(De(e)),0,4)]))}const Xe=new RegExp("^(ipfs)://(.*)$","i"),et=[new RegExp("^(https)://(.*)$","i"),new RegExp("^(data):(.*)$","i"),Xe,new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$","i")];function tt(e,t){try{return _(rt(e,t))}catch(r){}return null}function rt(e,t){if("0x"===e)return null;const r=u.O$.from((0,d.p3)(e,t,t+32)).toNumber(),n=u.O$.from((0,d.p3)(e,r,r+32)).toNumber();return(0,d.p3)(e,r+32,r+32+n)}function nt(e){return e.match(/^ipfs:\/\/ipfs\//i)?e=e.substring(12):e.match(/^ipfs:\/\//i)?e=e.substring(7):Ue.throwArgumentError("unsupported IPFS format","link",e),`https://gateway.ipfs.io/ipfs/${e}`}function it(e){const t=(0,d.lE)(e);if(t.length>32)throw new Error("internal; should not happen");const r=new Uint8Array(32);return r.set(t,32-t.length),r}function ot(e){if(e.length%32===0)return e;const t=new Uint8Array(32*Math.ceil(e.length/32));return t.set(e),t}function st(e){const t=[];let r=0;for(let n=0;n<e.length;n++)t.push(null),r+=32;for(let n=0;n<e.length;n++){const i=(0,d.lE)(e[n]);t[n]=it(r),t.push(it(i.length)),t.push(ot(i)),r+=32+32*Math.ceil(i.length/32)}return(0,d.xs)(t)}class at{constructor(e,t,r,i){(0,n.zG)(this,"provider",e),(0,n.zG)(this,"name",r),(0,n.zG)(this,"address",e.formatter.address(t)),(0,n.zG)(this,"_resolvedAddress",i)}supportsWildcard(){return this._supportsEip2544||(this._supportsEip2544=this.provider.call({to:this.address,data:"0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"}).then((e=>u.O$.from(e).eq(1))).catch((e=>{if(e.code===i.Yd.errors.CALL_EXCEPTION)return!1;throw this._supportsEip2544=null,e}))),this._supportsEip2544}_fetch(e,t){return ze(this,void 0,void 0,(function*(){const r={to:this.address,ccipReadEnabled:!0,data:(0,d.xs)([e,Ae(this.name),t||"0x"])};let n=!1;var o;(yield this.supportsWildcard())&&(n=!0,r.data=(0,d.xs)(["0x9061b923",st([(o=this.name,(0,d.Dv)((0,d.zo)(Ce(o).map((e=>{if(e.length>63)throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");const t=new Uint8Array(e.length+1);return t.set(e,1),t[0]=t.length-1,t}))))+"00"),r.data])]));try{let e=yield this.provider.call(r);return(0,d.lE)(e).length%32===4&&Ue.throwError("resolver threw error",i.Yd.errors.CALL_EXCEPTION,{transaction:r,data:e}),n&&(e=rt(e,0)),e}catch(s){if(s.code===i.Yd.errors.CALL_EXCEPTION)return null;throw s}}))}_fetchBytes(e,t){return ze(this,void 0,void 0,(function*(){const r=yield this._fetch(e,t);return null!=r?rt(r,0):null}))}_getAddress(e,t){const r=Ke[String(e)];if(null==r&&Ue.throwError(`unsupported coin type: ${e}`,i.Yd.errors.UNSUPPORTED_OPERATION,{operation:`getAddress(${e})`}),"eth"===r.ilk)return this.provider.formatter.address(t);const n=(0,d.lE)(t);if(null!=r.p2pkh){const e=t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);if(e){const t=parseInt(e[1],16);if(e[2].length===2*t&&t>=1&&t<=75)return Qe((0,d.zo)([[r.p2pkh],"0x"+e[2]]))}}if(null!=r.p2sh){const e=t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);if(e){const t=parseInt(e[1],16);if(e[2].length===2*t&&t>=1&&t<=75)return Qe((0,d.zo)([[r.p2sh],"0x"+e[2]]))}}if(null!=r.prefix){const e=n[1];let t=n[0];if(0===t?20!==e&&32!==e&&(t=-1):t=-1,t>=0&&n.length===2+e&&e>=1&&e<=75){const e=Be().toWords(n.slice(2));return e.unshift(t),Be().encode(r.prefix,e)}}return null}getAddress(e){return ze(this,void 0,void 0,(function*(){if(null==e&&(e=60),60===e)try{const e=yield this._fetch("0x3b3b57de");return"0x"===e||"0x0000000000000000000000000000000000000000000000000000000000000000"===e?null:this.provider.formatter.callAddress(e)}catch(n){if(n.code===i.Yd.errors.CALL_EXCEPTION)return null;throw n}const t=yield this._fetchBytes("0xf1cb7e06",Je(e));if(null==t||"0x"===t)return null;const r=this._getAddress(e,t);return null==r&&Ue.throwError("invalid or unsupported coin data",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:`getAddress(${e})`,coinType:e,data:t}),r}))}getAvatar(){return ze(this,void 0,void 0,(function*(){const e=[{type:"name",content:this.name}];try{const t=yield this.getText("avatar");if(null==t)return null;for(let r=0;r<et.length;r++){const n=t.match(et[r]);if(null==n)continue;const i=n[1].toLowerCase();switch(i){case"https":return e.push({type:"url",content:t}),{linkage:e,url:t};case"data":return e.push({type:"data",content:t}),{linkage:e,url:t};case"ipfs":return e.push({type:"ipfs",content:t}),{linkage:e,url:nt(t)};case"erc721":case"erc1155":{const r="erc721"===i?"0xc87b56dd":"0x0e89341c";e.push({type:i,content:t});const o=this._resolvedAddress||(yield this.getAddress()),s=(n[2]||"").split("/");if(2!==s.length)return null;const a=yield this.provider.formatter.address(s[0]),l=(0,d.$m)(u.O$.from(s[1]).toHexString(),32);if("erc721"===i){const t=this.provider.formatter.callAddress(yield this.provider.call({to:a,data:(0,d.xs)(["0x6352211e",l])}));if(o!==t)return null;e.push({type:"owner",content:t})}else if("erc1155"===i){const t=u.O$.from(yield this.provider.call({to:a,data:(0,d.xs)(["0x00fdd58e",(0,d.$m)(o,32),l])}));if(t.isZero())return null;e.push({type:"balance",content:t.toString()})}const c={to:this.provider.formatter.address(s[0]),data:(0,d.xs)([r,l])};let h=tt(yield this.provider.call(c),0);if(null==h)return null;e.push({type:"metadata-url-base",content:h}),"erc1155"===i&&(h=h.replace("{id}",l.substring(2)),e.push({type:"metadata-url-expanded",content:h})),h.match(/^ipfs:/i)&&(h=nt(h)),e.push({type:"metadata-url",content:h});const f=yield G(h);if(!f)return null;e.push({type:"metadata",content:JSON.stringify(f)});let p=f.image;if("string"!==typeof p)return null;if(p.match(/^(https:\/\/|data:)/i));else{if(null==p.match(Xe))return null;e.push({type:"url-ipfs",content:p}),p=nt(p)}return e.push({type:"url",content:p}),{linkage:e,url:p}}}}}catch(t){}return null}))}getContentHash(){return ze(this,void 0,void 0,(function*(){const e=yield this._fetchBytes("0xbc1c58d1");if(null==e||"0x"===e)return null;const t=e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);if(t){const e=parseInt(t[3],16);if(t[4].length===2*e)return"ipfs://"+ne.encode("0x"+t[1])}const r=e.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);if(r){const e=parseInt(r[3],16);if(r[4].length===2*e)return"ipns://"+ne.encode("0x"+r[1])}const n=e.match(/^0xe40101fa011b20([0-9a-f]*)$/);if(n&&64===n[1].length)return"bzz://"+n[1];const o=e.match(/^0x90b2c605([0-9a-f]*)$/);if(o&&68===o[1].length){const e={"=":"","+":"-","/":"_"};return"sia://"+U("0x"+o[1]).replace(/[=+\/]/g,(t=>e[t]))}return Ue.throwError("invalid or unsupported content hash data",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"getContentHash()",data:e})}))}getText(e){return ze(this,void 0,void 0,(function*(){let t=x(e);t=(0,d.zo)([Je(64),Je(t.length),t]),t.length%32!==0&&(t=(0,d.zo)([t,(0,d.$m)("0x",32-e.length%32)]));const r=yield this._fetchBytes("0x59d1d43c",(0,d.Dv)(t));return null==r||"0x"===r?null:_(r)}))}}let lt=null,ct=1;class ut extends te{constructor(e){if(super(),this._events=[],this._emitted={block:-2},this.disableCcipRead=!1,this.formatter=new.target.getFormatter(),(0,n.zG)(this,"anyNetwork","any"===e),this.anyNetwork&&(e=this.detectNetwork()),e instanceof Promise)this._networkPromise=e,e.catch((e=>{})),this._ready().catch((e=>{}));else{const t=(0,n.tu)(new.target,"getNetwork")(e);t?((0,n.zG)(this,"_network",t),this.emit("network",t,null)):Ue.throwArgumentError("invalid network","network",e)}this._maxInternalBlockNumber=-1024,this._lastBlockNumber=-2,this._maxFilterBlockRange=10,this._pollingInterval=4e3,this._fastQueryDate=0}_ready(){return ze(this,void 0,void 0,(function*(){if(null==this._network){let t=null;if(this._networkPromise)try{t=yield this._networkPromise}catch(e){}null==t&&(t=yield this.detectNetwork()),t||Ue.throwError("no network detected",i.Yd.errors.UNKNOWN_ERROR,{}),null==this._network&&(this.anyNetwork?this._network=t:(0,n.zG)(this,"_network",t),this.emit("network",t,null))}return this._network}))}get ready(){return K((()=>this._ready().then((e=>e),(e=>{if(e.code!==i.Yd.errors.NETWORK_ERROR||"noNetwork"!==e.event)throw e}))))}static getFormatter(){return null==lt&&(lt=new Ze.Mb),lt}static getNetwork(e){return function(e){if(null==e)return null;if("number"===typeof e){for(const t in Ne){const r=Ne[t];if(r.chainId===e)return{name:r.name,chainId:r.chainId,ensAddress:r.ensAddress||null,_defaultProvider:r._defaultProvider||null}}return{chainId:e,name:"unknown"}}if("string"===typeof e){const t=Ne[e];return null==t?null:{name:t.name,chainId:t.chainId,ensAddress:t.ensAddress,_defaultProvider:t._defaultProvider||null}}const t=Ne[e.name];if(!t)return"number"!==typeof e.chainId&&Pe.throwArgumentError("invalid network chainId","network",e),e;0!==e.chainId&&e.chainId!==t.chainId&&Pe.throwArgumentError("network chainId mismatch","network",e);let r=e._defaultProvider||null;var n;return null==r&&t._defaultProvider&&(r=(n=t._defaultProvider)&&"function"===typeof n.renetwork?t._defaultProvider.renetwork(e):t._defaultProvider),{name:e.name,chainId:t.chainId,ensAddress:e.ensAddress||t.ensAddress||null,_defaultProvider:r}}(null==e?"homestead":e)}ccipReadFetch(e,t,r){return ze(this,void 0,void 0,(function*(){if(this.disableCcipRead||0===r.length)return null;const n=e.to.toLowerCase(),o=t.toLowerCase(),s=[];for(let e=0;e<r.length;e++){const t=r[e],a=t.replace("{sender}",n).replace("{data}",o),l=t.indexOf("{data}")>=0?null:JSON.stringify({data:o,sender:n}),c=yield G({url:a,errorPassThrough:!0},l,((e,t)=>(e.status=t.statusCode,e)));if(c.data)return c.data;const u=c.message||"unknown error";if(c.status>=400&&c.status<500)return Ue.throwError(`response not found during CCIP fetch: ${u}`,i.Yd.errors.SERVER_ERROR,{url:t,errorMessage:u});s.push(u)}return Ue.throwError(`error encountered during CCIP fetch: ${s.map((e=>JSON.stringify(e))).join(", ")}`,i.Yd.errors.SERVER_ERROR,{urls:r,errorMessages:s})}))}_getInternalBlockNumber(e){return ze(this,void 0,void 0,(function*(){if(yield this._ready(),e>0)for(;this._internalBlockNumber;){const t=this._internalBlockNumber;try{const r=yield t;if(Ve()-r.respTime<=e)return r.blockNumber;break}catch(i){if(this._internalBlockNumber===t)break}}const t=Ve(),r=(0,n.mE)({blockNumber:this.perform("getBlockNumber",{}),networkError:this.getNetwork().then((e=>null),(e=>e))}).then((e=>{let{blockNumber:n,networkError:i}=e;if(i)throw this._internalBlockNumber===r&&(this._internalBlockNumber=null),i;const o=Ve();return n=u.O$.from(n).toNumber(),n<this._maxInternalBlockNumber&&(n=this._maxInternalBlockNumber),this._maxInternalBlockNumber=n,this._setFastBlockNumber(n),{blockNumber:n,reqTime:t,respTime:o}}));return this._internalBlockNumber=r,r.catch((e=>{this._internalBlockNumber===r&&(this._internalBlockNumber=null)})),(yield r).blockNumber}))}poll(){return ze(this,void 0,void 0,(function*(){const e=ct++,t=[];let r=null;try{r=yield this._getInternalBlockNumber(100+this.pollingInterval/2)}catch(n){return void this.emit("error",n)}if(this._setFastBlockNumber(r),this.emit("poll",e,r),r!==this._lastBlockNumber){if(-2===this._emitted.block&&(this._emitted.block=r-1),Math.abs(this._emitted.block-r)>1e3)Ue.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`),this.emit("error",Ue.makeError("network block skew detected",i.Yd.errors.NETWORK_ERROR,{blockNumber:r,event:"blockSkew",previousBlockNumber:this._emitted.block})),this.emit("block",r);else for(let e=this._emitted.block+1;e<=r;e++)this.emit("block",e);this._emitted.block!==r&&(this._emitted.block=r,Object.keys(this._emitted).forEach((e=>{if("block"===e)return;const t=this._emitted[e];"pending"!==t&&r-t>12&&delete this._emitted[e]}))),-2===this._lastBlockNumber&&(this._lastBlockNumber=r-1),this._events.forEach((e=>{switch(e.type){case"tx":{const r=e.hash;let n=this.getTransactionReceipt(r).then((e=>e&&null!=e.blockNumber?(this._emitted["t:"+r]=e.blockNumber,this.emit(r,e),null):null)).catch((e=>{this.emit("error",e)}));t.push(n);break}case"filter":if(!e._inflight){e._inflight=!0,-2===e._lastBlockNumber&&(e._lastBlockNumber=r-1);const n=e.filter;n.fromBlock=e._lastBlockNumber+1,n.toBlock=r;const i=n.toBlock-this._maxFilterBlockRange;i>n.fromBlock&&(n.fromBlock=i),n.fromBlock<0&&(n.fromBlock=0);const o=this.getLogs(n).then((t=>{e._inflight=!1,0!==t.length&&t.forEach((t=>{t.blockNumber>e._lastBlockNumber&&(e._lastBlockNumber=t.blockNumber),this._emitted["b:"+t.blockHash]=t.blockNumber,this._emitted["t:"+t.transactionHash]=t.blockNumber,this.emit(n,t)}))})).catch((t=>{this.emit("error",t),e._inflight=!1}));t.push(o)}}})),this._lastBlockNumber=r,Promise.all(t).then((()=>{this.emit("didPoll",e)})).catch((e=>{this.emit("error",e)}))}else this.emit("didPoll",e)}))}resetEventsBlock(e){this._lastBlockNumber=e-1,this.polling&&this.poll()}get network(){return this._network}detectNetwork(){return ze(this,void 0,void 0,(function*(){return Ue.throwError("provider does not support network detection",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"provider.detectNetwork"})}))}getNetwork(){return ze(this,void 0,void 0,(function*(){const e=yield this._ready(),t=yield this.detectNetwork();if(e.chainId!==t.chainId){if(this.anyNetwork)return this._network=t,this._lastBlockNumber=-2,this._fastBlockNumber=null,this._fastBlockNumberPromise=null,this._fastQueryDate=0,this._emitted.block=-2,this._maxInternalBlockNumber=-1024,this._internalBlockNumber=null,this.emit("network",t,e),yield qe(0),this._network;const r=Ue.makeError("underlying network changed",i.Yd.errors.NETWORK_ERROR,{event:"changed",network:e,detectedNetwork:t});throw this.emit("error",r),r}return e}))}get blockNumber(){return this._getInternalBlockNumber(100+this.pollingInterval/2).then((e=>{this._setFastBlockNumber(e)}),(e=>{})),null!=this._fastBlockNumber?this._fastBlockNumber:-1}get polling(){return null!=this._poller}set polling(e){e&&!this._poller?(this._poller=setInterval((()=>{this.poll()}),this.pollingInterval),this._bootstrapPoll||(this._bootstrapPoll=setTimeout((()=>{this.poll(),this._bootstrapPoll=setTimeout((()=>{this._poller||this.poll(),this._bootstrapPoll=null}),this.pollingInterval)}),0))):!e&&this._poller&&(clearInterval(this._poller),this._poller=null)}get pollingInterval(){return this._pollingInterval}set pollingInterval(e){if("number"!==typeof e||e<=0||parseInt(String(e))!=e)throw new Error("invalid polling interval");this._pollingInterval=e,this._poller&&(clearInterval(this._poller),this._poller=setInterval((()=>{this.poll()}),this._pollingInterval))}_getFastBlockNumber(){const e=Ve();return e-this._fastQueryDate>2*this._pollingInterval&&(this._fastQueryDate=e,this._fastBlockNumberPromise=this.getBlockNumber().then((e=>((null==this._fastBlockNumber||e>this._fastBlockNumber)&&(this._fastBlockNumber=e),this._fastBlockNumber)))),this._fastBlockNumberPromise}_setFastBlockNumber(e){null!=this._fastBlockNumber&&e<this._fastBlockNumber||(this._fastQueryDate=Ve(),(null==this._fastBlockNumber||e>this._fastBlockNumber)&&(this._fastBlockNumber=e,this._fastBlockNumberPromise=Promise.resolve(e)))}waitForTransaction(e,t,r){return ze(this,void 0,void 0,(function*(){return this._waitForTransaction(e,null==t?1:t,r||0,null)}))}_waitForTransaction(e,t,r,n){return ze(this,void 0,void 0,(function*(){const o=yield this.getTransactionReceipt(e);return(o?o.confirmations:0)>=t?o:new Promise(((o,s)=>{const a=[];let l=!1;const c=function(){return!!l||(l=!0,a.forEach((e=>{e()})),!1)},u=e=>{e.confirmations<t||c()||o(e)};if(this.on(e,u),a.push((()=>{this.removeListener(e,u)})),n){let r=n.startBlock,o=null;const u=a=>ze(this,void 0,void 0,(function*(){l||(yield qe(1e3),this.getTransactionCount(n.from).then((d=>ze(this,void 0,void 0,(function*(){if(!l){if(d<=n.nonce)r=a;else{{const t=yield this.getTransaction(e);if(t&&null!=t.blockNumber)return}for(null==o&&(o=r-3,o<n.startBlock&&(o=n.startBlock));o<=a;){if(l)return;const r=yield this.getBlockWithTransactions(o);for(let o=0;o<r.transactions.length;o++){const a=r.transactions[o];if(a.hash===e)return;if(a.from===n.from&&a.nonce===n.nonce){if(l)return;const r=yield this.waitForTransaction(a.hash,t);if(c())return;let o="replaced";return a.data===n.data&&a.to===n.to&&a.value.eq(n.value)?o="repriced":"0x"===a.data&&a.from===a.to&&a.value.isZero()&&(o="cancelled"),void s(Ue.makeError("transaction was replaced",i.Yd.errors.TRANSACTION_REPLACED,{cancelled:"replaced"===o||"cancelled"===o,reason:o,replacement:this._wrapTransaction(a),hash:e,receipt:r}))}}o++}}l||this.once("block",u)}}))),(e=>{l||this.once("block",u)})))}));if(l)return;this.once("block",u),a.push((()=>{this.removeListener("block",u)}))}if("number"===typeof r&&r>0){const e=setTimeout((()=>{c()||s(Ue.makeError("timeout exceeded",i.Yd.errors.TIMEOUT,{timeout:r}))}),r);e.unref&&e.unref(),a.push((()=>{clearTimeout(e)}))}}))}))}getBlockNumber(){return ze(this,void 0,void 0,(function*(){return this._getInternalBlockNumber(0)}))}getGasPrice(){return ze(this,void 0,void 0,(function*(){yield this.getNetwork();const e=yield this.perform("getGasPrice",{});try{return u.O$.from(e)}catch(t){return Ue.throwError("bad result from backend",i.Yd.errors.SERVER_ERROR,{method:"getGasPrice",result:e,error:t})}}))}getBalance(e,t){return ze(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield(0,n.mE)({address:this._getAddress(e),blockTag:this._getBlockTag(t)}),o=yield this.perform("getBalance",r);try{return u.O$.from(o)}catch(s){return Ue.throwError("bad result from backend",i.Yd.errors.SERVER_ERROR,{method:"getBalance",params:r,result:o,error:s})}}))}getTransactionCount(e,t){return ze(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield(0,n.mE)({address:this._getAddress(e),blockTag:this._getBlockTag(t)}),o=yield this.perform("getTransactionCount",r);try{return u.O$.from(o).toNumber()}catch(s){return Ue.throwError("bad result from backend",i.Yd.errors.SERVER_ERROR,{method:"getTransactionCount",params:r,result:o,error:s})}}))}getCode(e,t){return ze(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield(0,n.mE)({address:this._getAddress(e),blockTag:this._getBlockTag(t)}),o=yield this.perform("getCode",r);try{return(0,d.Dv)(o)}catch(s){return Ue.throwError("bad result from backend",i.Yd.errors.SERVER_ERROR,{method:"getCode",params:r,result:o,error:s})}}))}getStorageAt(e,t,r){return ze(this,void 0,void 0,(function*(){yield this.getNetwork();const o=yield(0,n.mE)({address:this._getAddress(e),blockTag:this._getBlockTag(r),position:Promise.resolve(t).then((e=>(0,d.$P)(e)))}),s=yield this.perform("getStorageAt",o);try{return(0,d.Dv)(s)}catch(a){return Ue.throwError("bad result from backend",i.Yd.errors.SERVER_ERROR,{method:"getStorageAt",params:o,result:s,error:a})}}))}_wrapTransaction(e,t,r){if(null!=t&&32!==(0,d.E1)(t))throw new Error("invalid response - sendTransaction");const n=e;return null!=t&&e.hash!==t&&Ue.throwError("Transaction hash mismatch from Provider.sendTransaction.",i.Yd.errors.UNKNOWN_ERROR,{expectedHash:e.hash,returnedHash:t}),n.wait=(t,n)=>ze(this,void 0,void 0,(function*(){let o;null==t&&(t=1),null==n&&(n=0),0!==t&&null!=r&&(o={data:e.data,from:e.from,nonce:e.nonce,to:e.to,value:e.value,startBlock:r});const s=yield this._waitForTransaction(e.hash,t,n,o);return null==s&&0===t?null:(this._emitted["t:"+e.hash]=s.blockNumber,0===s.status&&Ue.throwError("transaction failed",i.Yd.errors.CALL_EXCEPTION,{transactionHash:e.hash,transaction:e,receipt:s}),s)})),n}sendTransaction(e){return ze(this,void 0,void 0,(function*(){yield this.getNetwork();const t=yield Promise.resolve(e).then((e=>(0,d.Dv)(e))),r=this.formatter.transaction(e);null==r.confirmations&&(r.confirmations=0);const n=yield this._getInternalBlockNumber(100+2*this.pollingInterval);try{const e=yield this.perform("sendTransaction",{signedTransaction:t});return this._wrapTransaction(r,e,n)}catch(i){throw i.transaction=r,i.transactionHash=r.hash,i}}))}_getTransactionRequest(e){return ze(this,void 0,void 0,(function*(){const t=yield e,r={};return["from","to"].forEach((e=>{null!=t[e]&&(r[e]=Promise.resolve(t[e]).then((e=>e?this._getAddress(e):null)))})),["gasLimit","gasPrice","maxFeePerGas","maxPriorityFeePerGas","value"].forEach((e=>{null!=t[e]&&(r[e]=Promise.resolve(t[e]).then((e=>e?u.O$.from(e):null)))})),["type"].forEach((e=>{null!=t[e]&&(r[e]=Promise.resolve(t[e]).then((e=>null!=e?e:null)))})),t.accessList&&(r.accessList=this.formatter.accessList(t.accessList)),["data"].forEach((e=>{null!=t[e]&&(r[e]=Promise.resolve(t[e]).then((e=>e?(0,d.Dv)(e):null)))})),this.formatter.transactionRequest(yield(0,n.mE)(r))}))}_getFilter(e){return ze(this,void 0,void 0,(function*(){e=yield e;const t={};return null!=e.address&&(t.address=this._getAddress(e.address)),["blockHash","topics"].forEach((r=>{null!=e[r]&&(t[r]=e[r])})),["fromBlock","toBlock"].forEach((r=>{null!=e[r]&&(t[r]=this._getBlockTag(e[r]))})),this.formatter.filter(yield(0,n.mE)(t))}))}_call(e,t,r){return ze(this,void 0,void 0,(function*(){r>=10&&Ue.throwError("CCIP read exceeded maximum redirections",i.Yd.errors.SERVER_ERROR,{redirects:r,transaction:e});const n=e.to,o=yield this.perform("call",{transaction:e,blockTag:t});if(r>=0&&"latest"===t&&null!=n&&"0x556f1830"===o.substring(0,10)&&(0,d.E1)(o)%32===4)try{const s=(0,d.p3)(o,4),a=(0,d.p3)(s,0,32);u.O$.from(a).eq(n)||Ue.throwError("CCIP Read sender did not match",i.Yd.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:e,data:o});const l=[],c=u.O$.from((0,d.p3)(s,32,64)).toNumber(),h=u.O$.from((0,d.p3)(s,c,c+32)).toNumber(),f=(0,d.p3)(s,c+32);for(let t=0;t<h;t++){const r=tt(f,32*t);null==r&&Ue.throwError("CCIP Read contained corrupt URL string",i.Yd.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:e,data:o}),l.push(r)}const p=rt(s,64);u.O$.from((0,d.p3)(s,100,128)).isZero()||Ue.throwError("CCIP Read callback selector included junk",i.Yd.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:e,data:o});const g=(0,d.p3)(s,96,100),m=rt(s,128),v=yield this.ccipReadFetch(e,p,l);null==v&&Ue.throwError("CCIP Read disabled or provided no URLs",i.Yd.errors.CALL_EXCEPTION,{name:"OffchainLookup",signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",transaction:e,data:o});const y={to:n,data:(0,d.xs)([g,st([v,m])])};return this._call(y,t,r+1)}catch(s){if(s.code===i.Yd.errors.SERVER_ERROR)throw s}try{return(0,d.Dv)(o)}catch(s){return Ue.throwError("bad result from backend",i.Yd.errors.SERVER_ERROR,{method:"call",params:{transaction:e,blockTag:t},result:o,error:s})}}))}call(e,t){return ze(this,void 0,void 0,(function*(){yield this.getNetwork();const r=yield(0,n.mE)({transaction:this._getTransactionRequest(e),blockTag:this._getBlockTag(t),ccipReadEnabled:Promise.resolve(e.ccipReadEnabled)});return this._call(r.transaction,r.blockTag,r.ccipReadEnabled?0:-1)}))}estimateGas(e){return ze(this,void 0,void 0,(function*(){yield this.getNetwork();const t=yield(0,n.mE)({transaction:this._getTransactionRequest(e)}),r=yield this.perform("estimateGas",t);try{return u.O$.from(r)}catch(o){return Ue.throwError("bad result from backend",i.Yd.errors.SERVER_ERROR,{method:"estimateGas",params:t,result:r,error:o})}}))}_getAddress(e){return ze(this,void 0,void 0,(function*(){"string"!==typeof(e=yield e)&&Ue.throwArgumentError("invalid address or ENS name","name",e);const t=yield this.resolveName(e);return null==t&&Ue.throwError("ENS name not configured",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:`resolveName(${JSON.stringify(e)})`}),t}))}_getBlock(e,t){return ze(this,void 0,void 0,(function*(){yield this.getNetwork(),e=yield e;let r=-128;const n={includeTransactions:!!t};if((0,d.A7)(e,32))n.blockHash=e;else try{n.blockTag=yield this._getBlockTag(e),(0,d.A7)(n.blockTag)&&(r=parseInt(n.blockTag.substring(2),16))}catch(i){Ue.throwArgumentError("invalid block hash or block tag","blockHashOrBlockTag",e)}return K((()=>ze(this,void 0,void 0,(function*(){const e=yield this.perform("getBlock",n);if(null==e)return null!=n.blockHash&&null==this._emitted["b:"+n.blockHash]||null!=n.blockTag&&r>this._emitted.block?null:void 0;if(t){let t=null;for(let n=0;n<e.transactions.length;n++){const r=e.transactions[n];if(null==r.blockNumber)r.confirmations=0;else if(null==r.confirmations){null==t&&(t=yield this._getInternalBlockNumber(100+2*this.pollingInterval));let e=t-r.blockNumber+1;e<=0&&(e=1),r.confirmations=e}}const r=this.formatter.blockWithTransactions(e);return r.transactions=r.transactions.map((e=>this._wrapTransaction(e))),r}return this.formatter.block(e)}))),{oncePoll:this})}))}getBlock(e){return this._getBlock(e,!1)}getBlockWithTransactions(e){return this._getBlock(e,!0)}getTransaction(e){return ze(this,void 0,void 0,(function*(){yield this.getNetwork(),e=yield e;const t={transactionHash:this.formatter.hash(e,!0)};return K((()=>ze(this,void 0,void 0,(function*(){const r=yield this.perform("getTransaction",t);if(null==r)return null==this._emitted["t:"+e]?null:void 0;const n=this.formatter.transactionResponse(r);if(null==n.blockNumber)n.confirmations=0;else if(null==n.confirmations){let e=(yield this._getInternalBlockNumber(100+2*this.pollingInterval))-n.blockNumber+1;e<=0&&(e=1),n.confirmations=e}return this._wrapTransaction(n)}))),{oncePoll:this})}))}getTransactionReceipt(e){return ze(this,void 0,void 0,(function*(){yield this.getNetwork(),e=yield e;const t={transactionHash:this.formatter.hash(e,!0)};return K((()=>ze(this,void 0,void 0,(function*(){const r=yield this.perform("getTransactionReceipt",t);if(null==r)return null==this._emitted["t:"+e]?null:void 0;if(null==r.blockHash)return;const n=this.formatter.receipt(r);if(null==n.blockNumber)n.confirmations=0;else if(null==n.confirmations){let e=(yield this._getInternalBlockNumber(100+2*this.pollingInterval))-n.blockNumber+1;e<=0&&(e=1),n.confirmations=e}return n}))),{oncePoll:this})}))}getLogs(e){return ze(this,void 0,void 0,(function*(){yield this.getNetwork();const t=yield(0,n.mE)({filter:this._getFilter(e)}),r=yield this.perform("getLogs",t);return r.forEach((e=>{null==e.removed&&(e.removed=!1)})),Ze.Mb.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)}))}getEtherPrice(){return ze(this,void 0,void 0,(function*(){return yield this.getNetwork(),this.perform("getEtherPrice",{})}))}_getBlockTag(e){return ze(this,void 0,void 0,(function*(){if("number"===typeof(e=yield e)&&e<0){e%1&&Ue.throwArgumentError("invalid BlockTag","blockTag",e);let t=yield this._getInternalBlockNumber(100+2*this.pollingInterval);return t+=e,t<0&&(t=0),this.formatter.blockTag(t)}return this.formatter.blockTag(e)}))}getResolver(e){return ze(this,void 0,void 0,(function*(){let t=e;for(;;){if(""===t||"."===t)return null;if("eth"!==e&&"eth"===t)return null;const r=yield this._getResolver(t,"getResolver");if(null!=r){const n=new at(this,r,e);return t===e||(yield n.supportsWildcard())?n:null}t=t.split(".").slice(1).join(".")}}))}_getResolver(e,t){return ze(this,void 0,void 0,(function*(){null==t&&(t="ENS");const r=yield this.getNetwork();r.ensAddress||Ue.throwError("network does not support ENS",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:t,network:r.name});try{const t=yield this.call({to:r.ensAddress,data:"0x0178b8bf"+Ae(e).substring(2)});return this.formatter.callAddress(t)}catch(n){}return null}))}resolveName(e){return ze(this,void 0,void 0,(function*(){e=yield e;try{return Promise.resolve(this.formatter.address(e))}catch(r){if((0,d.A7)(e))throw r}"string"!==typeof e&&Ue.throwArgumentError("invalid ENS name","name",e);const t=yield this.getResolver(e);return t?yield t.getAddress():null}))}lookupAddress(e){return ze(this,void 0,void 0,(function*(){e=yield e;const t=(e=this.formatter.address(e)).substring(2).toLowerCase()+".addr.reverse",r=yield this._getResolver(t,"lookupAddress");if(null==r)return null;const n=tt(yield this.call({to:r,data:"0x691f3431"+Ae(t).substring(2)}),0);return(yield this.resolveName(n))!=e?null:n}))}getAvatar(e){return ze(this,void 0,void 0,(function*(){let t=null;if((0,d.A7)(e)){const r=this.formatter.address(e).substring(2).toLowerCase()+".addr.reverse",o=yield this._getResolver(r,"getAvatar");if(!o)return null;t=new at(this,o,r);try{const e=yield t.getAvatar();if(e)return e.url}catch(n){if(n.code!==i.Yd.errors.CALL_EXCEPTION)throw n}try{const e=tt(yield this.call({to:o,data:"0x691f3431"+Ae(r).substring(2)}),0);t=yield this.getResolver(e)}catch(n){if(n.code!==i.Yd.errors.CALL_EXCEPTION)throw n;return null}}else if(t=yield this.getResolver(e),!t)return null;const r=yield t.getAvatar();return null==r?null:r.url}))}perform(e,t){return Ue.throwError(e+" not implemented",i.Yd.errors.NOT_IMPLEMENTED,{operation:e})}_startEvent(e){this.polling=this._events.filter((e=>e.pollable())).length>0}_stopEvent(e){this.polling=this._events.filter((e=>e.pollable())).length>0}_addEventListener(e,t,r){const n=new Ge(He(e),t,r);return this._events.push(n),this._startEvent(n),this}on(e,t){return this._addEventListener(e,t,!1)}once(e,t){return this._addEventListener(e,t,!0)}emit(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];let i=!1,o=[],s=He(e);return this._events=this._events.filter((e=>e.tag!==s||(setTimeout((()=>{e.listener.apply(this,r)}),0),i=!0,!e.once||(o.push(e),!1)))),o.forEach((e=>{this._stopEvent(e)})),i}listenerCount(e){if(!e)return this._events.length;let t=He(e);return this._events.filter((e=>e.tag===t)).length}listeners(e){if(null==e)return this._events.map((e=>e.listener));let t=He(e);return this._events.filter((e=>e.tag===t)).map((e=>e.listener))}off(e,t){if(null==t)return this.removeAllListeners(e);const r=[];let n=!1,i=He(e);return this._events=this._events.filter((e=>e.tag!==i||e.listener!=t||(!!n||(n=!0,r.push(e),!1)))),r.forEach((e=>{this._stopEvent(e)})),this}removeAllListeners(e){let t=[];if(null==e)t=this._events,this._events=[];else{const r=He(e);this._events=this._events.filter((e=>e.tag!==r||(t.push(e),!1)))}return t.forEach((e=>{this._stopEvent(e)})),this}}var dt=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};const ht=new i.Yd(J.i),ft=["call","estimateGas"];function pt(e,t){if(null==e)return null;if("string"===typeof e.message&&e.message.match("reverted")){const r=(0,d.A7)(e.data)?e.data:null;if(!t||r)return{message:e.message,data:r}}if("object"===typeof e){for(const r in e){const n=pt(e[r],t);if(n)return n}return null}if("string"===typeof e)try{return pt(JSON.parse(e),t)}catch(r){}return null}function gt(e,t,r){const n=r.transaction||r.signedTransaction;if("call"===e){const e=pt(t,!0);if(e)return e.data;ht.throwError("missing revert data in call exception; Transaction reverted without a reason string",i.Yd.errors.CALL_EXCEPTION,{data:"0x",transaction:n,error:t})}if("estimateGas"===e){let r=pt(t.body,!1);null==r&&(r=pt(t,!1)),r&&ht.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",i.Yd.errors.UNPREDICTABLE_GAS_LIMIT,{reason:r.message,method:e,transaction:n,error:t})}let o=t.message;throw t.code===i.Yd.errors.SERVER_ERROR&&t.error&&"string"===typeof t.error.message?o=t.error.message:"string"===typeof t.body?o=t.body:"string"===typeof t.responseText&&(o=t.responseText),o=(o||"").toLowerCase(),o.match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i)&&ht.throwError("insufficient funds for intrinsic transaction cost",i.Yd.errors.INSUFFICIENT_FUNDS,{error:t,method:e,transaction:n}),o.match(/nonce (is )?too low/i)&&ht.throwError("nonce has already been used",i.Yd.errors.NONCE_EXPIRED,{error:t,method:e,transaction:n}),o.match(/replacement transaction underpriced|transaction gas price.*too low/i)&&ht.throwError("replacement fee too low",i.Yd.errors.REPLACEMENT_UNDERPRICED,{error:t,method:e,transaction:n}),o.match(/only replay-protected/i)&&ht.throwError("legacy pre-eip-155 transactions not supported",i.Yd.errors.UNSUPPORTED_OPERATION,{error:t,method:e,transaction:n}),ft.indexOf(e)>=0&&o.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/)&&ht.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",i.Yd.errors.UNPREDICTABLE_GAS_LIMIT,{error:t,method:e,transaction:n}),t}function mt(e){return new Promise((function(t){setTimeout(t,e)}))}function vt(e){if(e.error){const t=new Error(e.error.message);throw t.code=e.error.code,t.data=e.error.data,t}return e.result}function yt(e){return e?e.toLowerCase():e}const bt={};class wt extends c{constructor(e,t,r){if(super(),e!==bt)throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");(0,n.zG)(this,"provider",t),null==r&&(r=0),"string"===typeof r?((0,n.zG)(this,"_address",this.provider.formatter.address(r)),(0,n.zG)(this,"_index",null)):"number"===typeof r?((0,n.zG)(this,"_index",r),(0,n.zG)(this,"_address",null)):ht.throwArgumentError("invalid address or index","addressOrIndex",r)}connect(e){return ht.throwError("cannot alter JSON-RPC Signer connection",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"connect"})}connectUnchecked(){return new xt(bt,this.provider,this._address||this._index)}getAddress(){return this._address?Promise.resolve(this._address):this.provider.send("eth_accounts",[]).then((e=>(e.length<=this._index&&ht.throwError("unknown account #"+this._index,i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"getAddress"}),this.provider.formatter.address(e[this._index]))))}sendUncheckedTransaction(e){e=(0,n.DC)(e);const t=this.getAddress().then((e=>(e&&(e=e.toLowerCase()),e)));if(null==e.gasLimit){const r=(0,n.DC)(e);r.from=t,e.gasLimit=this.provider.estimateGas(r)}return null!=e.to&&(e.to=Promise.resolve(e.to).then((e=>dt(this,void 0,void 0,(function*(){if(null==e)return null;const t=yield this.provider.resolveName(e);return null==t&&ht.throwArgumentError("provided ENS name resolves to null","tx.to",e),t}))))),(0,n.mE)({tx:(0,n.mE)(e),sender:t}).then((t=>{let{tx:r,sender:n}=t;null!=r.from?r.from.toLowerCase()!==n&&ht.throwArgumentError("from address mismatch","transaction",e):r.from=n;const o=this.provider.constructor.hexlifyTransaction(r,{from:!0});return this.provider.send("eth_sendTransaction",[o]).then((e=>e),(e=>("string"===typeof e.message&&e.message.match(/user denied/i)&&ht.throwError("user rejected transaction",i.Yd.errors.ACTION_REJECTED,{action:"sendTransaction",transaction:r}),gt("sendTransaction",e,o))))}))}signTransaction(e){return ht.throwError("signing transactions is unsupported",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"signTransaction"})}sendTransaction(e){return dt(this,void 0,void 0,(function*(){const t=yield this.provider._getInternalBlockNumber(100+2*this.provider.pollingInterval),r=yield this.sendUncheckedTransaction(e);try{return yield K((()=>dt(this,void 0,void 0,(function*(){const e=yield this.provider.getTransaction(r);if(null!==e)return this.provider._wrapTransaction(e,r,t)}))),{oncePoll:this.provider})}catch(n){throw n.transactionHash=r,n}}))}signMessage(e){return dt(this,void 0,void 0,(function*(){const t="string"===typeof e?x(e):e,r=yield this.getAddress();try{return yield this.provider.send("personal_sign",[(0,d.Dv)(t),r.toLowerCase()])}catch(n){throw"string"===typeof n.message&&n.message.match(/user denied/i)&&ht.throwError("user rejected signing",i.Yd.errors.ACTION_REJECTED,{action:"signMessage",from:r,messageData:e}),n}}))}_legacySignMessage(e){return dt(this,void 0,void 0,(function*(){const t="string"===typeof e?x(e):e,r=yield this.getAddress();try{return yield this.provider.send("eth_sign",[r.toLowerCase(),(0,d.Dv)(t)])}catch(n){throw"string"===typeof n.message&&n.message.match(/user denied/i)&&ht.throwError("user rejected signing",i.Yd.errors.ACTION_REJECTED,{action:"_legacySignMessage",from:r,messageData:e}),n}}))}_signTypedData(e,t,r){return dt(this,void 0,void 0,(function*(){const n=yield B.resolveNames(e,t,r,(e=>this.provider.resolveName(e))),o=yield this.getAddress();try{return yield this.provider.send("eth_signTypedData_v4",[o.toLowerCase(),JSON.stringify(B.getPayload(n.domain,t,n.value))])}catch(s){throw"string"===typeof s.message&&s.message.match(/user denied/i)&&ht.throwError("user rejected signing",i.Yd.errors.ACTION_REJECTED,{action:"_signTypedData",from:o,messageData:{domain:n.domain,types:t,value:n.value}}),s}}))}unlock(e){return dt(this,void 0,void 0,(function*(){const t=this.provider,r=yield this.getAddress();return t.send("personal_unlockAccount",[r.toLowerCase(),e,null])}))}}class xt extends wt{sendTransaction(e){return this.sendUncheckedTransaction(e).then((e=>({hash:e,nonce:null,gasLimit:null,gasPrice:null,data:null,value:null,chainId:null,confirmations:0,from:null,wait:t=>this.provider.waitForTransaction(e,t)})))}}const _t={chainId:!0,data:!0,gasLimit:!0,gasPrice:!0,nonce:!0,to:!0,value:!0,type:!0,accessList:!0,maxFeePerGas:!0,maxPriorityFeePerGas:!0};class Et extends ut{constructor(e,t){let r=t;null==r&&(r=new Promise(((e,t)=>{setTimeout((()=>{this.detectNetwork().then((t=>{e(t)}),(e=>{t(e)}))}),0)}))),super(r),e||(e=(0,n.tu)(this.constructor,"defaultUrl")()),"string"===typeof e?(0,n.zG)(this,"connection",Object.freeze({url:e})):(0,n.zG)(this,"connection",Object.freeze((0,n.DC)(e))),this._nextId=42}get _cache(){return null==this._eventLoopCache&&(this._eventLoopCache={}),this._eventLoopCache}static defaultUrl(){return"http://localhost:8545"}detectNetwork(){return this._cache.detectNetwork||(this._cache.detectNetwork=this._uncachedDetectNetwork(),setTimeout((()=>{this._cache.detectNetwork=null}),0)),this._cache.detectNetwork}_uncachedDetectNetwork(){return dt(this,void 0,void 0,(function*(){yield mt(0);let e=null;try{e=yield this.send("eth_chainId",[])}catch(t){try{e=yield this.send("net_version",[])}catch(t){}}if(null!=e){const r=(0,n.tu)(this.constructor,"getNetwork");try{return r(u.O$.from(e).toNumber())}catch(t){return ht.throwError("could not detect network",i.Yd.errors.NETWORK_ERROR,{chainId:e,event:"invalidNetwork",serverError:t})}}return ht.throwError("could not detect network",i.Yd.errors.NETWORK_ERROR,{event:"noNetwork"})}))}getSigner(e){return new wt(bt,this,e)}getUncheckedSigner(e){return this.getSigner(e).connectUnchecked()}listAccounts(){return this.send("eth_accounts",[]).then((e=>e.map((e=>this.formatter.address(e)))))}send(e,t){const r={method:e,params:t,id:this._nextId++,jsonrpc:"2.0"};this.emit("debug",{action:"request",request:(0,n.p$)(r),provider:this});const i=["eth_chainId","eth_blockNumber"].indexOf(e)>=0;if(i&&this._cache[e])return this._cache[e];const o=G(this.connection,JSON.stringify(r),vt).then((e=>(this.emit("debug",{action:"response",request:r,response:e,provider:this}),e)),(e=>{throw this.emit("debug",{action:"response",error:e,request:r,provider:this}),e}));return i&&(this._cache[e]=o,setTimeout((()=>{this._cache[e]=null}),0)),o}prepareRequest(e,t){switch(e){case"getBlockNumber":return["eth_blockNumber",[]];case"getGasPrice":return["eth_gasPrice",[]];case"getBalance":return["eth_getBalance",[yt(t.address),t.blockTag]];case"getTransactionCount":return["eth_getTransactionCount",[yt(t.address),t.blockTag]];case"getCode":return["eth_getCode",[yt(t.address),t.blockTag]];case"getStorageAt":return["eth_getStorageAt",[yt(t.address),(0,d.$m)(t.position,32),t.blockTag]];case"sendTransaction":return["eth_sendRawTransaction",[t.signedTransaction]];case"getBlock":return t.blockTag?["eth_getBlockByNumber",[t.blockTag,!!t.includeTransactions]]:t.blockHash?["eth_getBlockByHash",[t.blockHash,!!t.includeTransactions]]:null;case"getTransaction":return["eth_getTransactionByHash",[t.transactionHash]];case"getTransactionReceipt":return["eth_getTransactionReceipt",[t.transactionHash]];case"call":return["eth_call",[(0,n.tu)(this.constructor,"hexlifyTransaction")(t.transaction,{from:!0}),t.blockTag]];case"estimateGas":return["eth_estimateGas",[(0,n.tu)(this.constructor,"hexlifyTransaction")(t.transaction,{from:!0})]];case"getLogs":return t.filter&&null!=t.filter.address&&(t.filter.address=yt(t.filter.address)),["eth_getLogs",[t.filter]]}return null}perform(e,t){return dt(this,void 0,void 0,(function*(){if("call"===e||"estimateGas"===e){const e=t.transaction;if(e&&null!=e.type&&u.O$.from(e.type).isZero()&&null==e.maxFeePerGas&&null==e.maxPriorityFeePerGas){const r=yield this.getFeeData();null==r.maxFeePerGas&&null==r.maxPriorityFeePerGas&&((t=(0,n.DC)(t)).transaction=(0,n.DC)(e),delete t.transaction.type)}}const r=this.prepareRequest(e,t);null==r&&ht.throwError(e+" not implemented",i.Yd.errors.NOT_IMPLEMENTED,{operation:e});try{return yield this.send(r[0],r[1])}catch(o){return gt(e,o,t)}}))}_startEvent(e){"pending"===e.tag&&this._startPending(),super._startEvent(e)}_startPending(){if(null!=this._pendingFilter)return;const e=this,t=this.send("eth_newPendingTransactionFilter",[]);this._pendingFilter=t,t.then((function(r){return function n(){e.send("eth_getFilterChanges",[r]).then((function(r){if(e._pendingFilter!=t)return null;let n=Promise.resolve();return r.forEach((function(t){e._emitted["t:"+t.toLowerCase()]="pending",n=n.then((function(){return e.getTransaction(t).then((function(t){return e.emit("pending",t),null}))}))})),n.then((function(){return mt(1e3)}))})).then((function(){if(e._pendingFilter==t)return setTimeout((function(){n()}),0),null;e.send("eth_uninstallFilter",[r])})).catch((e=>{}))}(),r})).catch((e=>{}))}_stopEvent(e){"pending"===e.tag&&0===this.listenerCount("pending")&&(this._pendingFilter=null),super._stopEvent(e)}static hexlifyTransaction(e,t){const r=(0,n.DC)(_t);if(t)for(const n in t)t[n]&&(r[n]=!0);(0,n.uj)(e,r);const i={};return["chainId","gasLimit","gasPrice","type","maxFeePerGas","maxPriorityFeePerGas","nonce","value"].forEach((function(t){if(null==e[t])return;const r=(0,d.$P)(u.O$.from(e[t]));"gasLimit"===t&&(t="gas"),i[t]=r})),["from","to","data"].forEach((function(t){null!=e[t]&&(i[t]=(0,d.Dv)(e[t]))})),e.accessList&&(i.accessList=(0,Z.z7)(e.accessList)),i}}},60723:function(e,t,r){"use strict";r.d(t,{Q:function(){return u}});var n=r(30520),i=r(39502),o=r(77059),s=r(5502);const a=new i.Yd(o.i);let l=1;function c(e,t){const r="Web3LegacyFetcher";return function(e,i){const o={method:e,params:i,id:l++,jsonrpc:"2.0"};return new Promise(((e,i)=>{this.emit("debug",{action:"request",fetcher:r,request:(0,n.p$)(o),provider:this}),t(o,((t,n)=>{if(t)return this.emit("debug",{action:"response",fetcher:r,error:t,request:o,provider:this}),i(t);if(this.emit("debug",{action:"response",fetcher:r,request:o,response:n,provider:this}),n.error){const e=new Error(n.error.message);return e.code=n.error.code,e.data=n.error.data,i(e)}e(n.result)}))}))}}class u extends s.r{constructor(e,t){null==e&&a.throwArgumentError("missing provider","provider",e);let r=null,i=null,o=null;"function"===typeof e?(r="unknown:",i=e):(r=e.host||e.path||"",!r&&e.isMetaMask&&(r="metamask"),o=e,e.request?(""===r&&(r="eip-1193:"),i=function(e){return function(t,r){null==r&&(r=[]);const i={method:t,params:r};return this.emit("debug",{action:"request",fetcher:"Eip1193Fetcher",request:(0,n.p$)(i),provider:this}),e.request(i).then((e=>(this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:i,response:e,provider:this}),e)),(e=>{throw this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:i,error:e,provider:this}),e}))}}(e)):e.sendAsync?i=c(0,e.sendAsync.bind(e)):e.send?i=c(0,e.send.bind(e)):a.throwArgumentError("unsupported provider","provider",e),r||(r="unknown:")),super(r,t),(0,n.zG)(this,"jsonRpcFetchFunc",i),(0,n.zG)(this,"provider",o)}send(e,t){return this.jsonRpcFetchFunc(e,t)}}},17986:function(e,t,r){"use strict";r.d(t,{J:function(){return h},c:function(){return c}});var n=r(49716),i=r(39502);const o=new i.Yd("rlp/5.7.0");function s(e){const t=[];for(;e;)t.unshift(255&e),e>>=8;return t}function a(e,t,r){let n=0;for(let i=0;i<r;i++)n=256*n+e[t+i];return n}function l(e){if(Array.isArray(e)){let t=[];if(e.forEach((function(e){t=t.concat(l(e))})),t.length<=55)return t.unshift(192+t.length),t;const r=s(t.length);return r.unshift(247+r.length),r.concat(t)}(0,n.Zq)(e)||o.throwArgumentError("RLP object must be BytesLike","object",e);const t=Array.prototype.slice.call((0,n.lE)(e));if(1===t.length&&t[0]<=127)return t;if(t.length<=55)return t.unshift(128+t.length),t;const r=s(t.length);return r.unshift(183+r.length),r.concat(t)}function c(e){return(0,n.Dv)(l(e))}function u(e,t,r,n){const s=[];for(;r<t+1+n;){const a=d(e,r);s.push(a.result),(r+=a.consumed)>t+1+n&&o.throwError("child data too short",i.Yd.errors.BUFFER_OVERRUN,{})}return{consumed:1+n,result:s}}function d(e,t){if(0===e.length&&o.throwError("data too short",i.Yd.errors.BUFFER_OVERRUN,{}),e[t]>=248){const r=e[t]-247;t+1+r>e.length&&o.throwError("data short segment too short",i.Yd.errors.BUFFER_OVERRUN,{});const n=a(e,t+1,r);return t+1+r+n>e.length&&o.throwError("data long segment too short",i.Yd.errors.BUFFER_OVERRUN,{}),u(e,t,t+1+r,r+n)}if(e[t]>=192){const r=e[t]-192;return t+1+r>e.length&&o.throwError("data array too short",i.Yd.errors.BUFFER_OVERRUN,{}),u(e,t,t+1,r)}if(e[t]>=184){const r=e[t]-183;t+1+r>e.length&&o.throwError("data array too short",i.Yd.errors.BUFFER_OVERRUN,{});const s=a(e,t+1,r);t+1+r+s>e.length&&o.throwError("data array too short",i.Yd.errors.BUFFER_OVERRUN,{});return{consumed:1+r+s,result:(0,n.Dv)(e.slice(t+1+r,t+1+r+s))}}if(e[t]>=128){const r=e[t]-128;t+1+r>e.length&&o.throwError("data too short",i.Yd.errors.BUFFER_OVERRUN,{});return{consumed:1+r,result:(0,n.Dv)(e.slice(t+1,t+1+r))}}return{consumed:1,result:(0,n.Dv)(e[t])}}function h(e){const t=(0,n.lE)(e),r=d(t,0);return r.consumed!==t.length&&o.throwArgumentError("invalid rlp data","data",e),r.result}},78488:function(e,t,r){"use strict";r.d(t,{z7:function(){return ce},Qc:function(){return pe}});var n=r(97419),i=r(2257),o=r(49716);const s=i.O$.from(0);var a=r(88062),l=r(17986),c=r(80518),u=r.n(c),d=r(33125),h=r.n(d);"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:"undefined"!==typeof self&&self;function f(e,t,r){return r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}((void 0===t||null===t)&&r.path)}},e(r,r.exports),r.exports}var p=g;function g(e,t){if(!e)throw new Error(t||"Assertion failed")}g.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)};var m=f((function(e,t){var r=t;function n(e){return 1===e.length?"0"+e:e}function i(e){for(var t="",r=0;r<e.length;r++)t+=n(e[r].toString(16));return t}r.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!==typeof e){for(var n=0;n<e.length;n++)r[n]=0|e[n];return r}if("hex"===t){(e=e.replace(/[^a-z0-9]+/gi,"")).length%2!==0&&(e="0"+e);for(n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(n=0;n<e.length;n++){var i=e.charCodeAt(n),o=i>>8,s=255&i;o?r.push(o,s):r.push(s)}return r},r.zero2=n,r.toHex=i,r.encode=function(e,t){return"hex"===t?i(e):e}})),v=f((function(e,t){var r=t;r.assert=p,r.toArray=m.toArray,r.zero2=m.zero2,r.toHex=m.toHex,r.encode=m.encode,r.getNAF=function(e,t,r){var n=new Array(Math.max(e.bitLength(),r)+1);n.fill(0);for(var i=1<<t+1,o=e.clone(),s=0;s<n.length;s++){var a,l=o.andln(i-1);o.isOdd()?(a=l>(i>>1)-1?(i>>1)-l:l,o.isubn(a)):a=0,n[s]=a,o.iushrn(1)}return n},r.getJSF=function(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var n,i=0,o=0;e.cmpn(-i)>0||t.cmpn(-o)>0;){var s,a,l=e.andln(3)+i&3,c=t.andln(3)+o&3;3===l&&(l=-1),3===c&&(c=-1),s=0===(1&l)?0:3!==(n=e.andln(7)+i&7)&&5!==n||2!==c?l:-l,r[0].push(s),a=0===(1&c)?0:3!==(n=t.andln(7)+o&7)&&5!==n||2!==l?c:-c,r[1].push(a),2*i===s+1&&(i=1-i),2*o===a+1&&(o=1-o),e.iushrn(1),t.iushrn(1)}return r},r.cachedProperty=function(e,t,r){var n="_"+t;e.prototype[t]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}},r.parseBytes=function(e){return"string"===typeof e?r.toArray(e,"hex"):e},r.intFromLE=function(e){return new(u())(e,"hex","le")}})),y=v.getNAF,b=v.getJSF,w=v.assert;function x(e,t){this.type=e,this.p=new(u())(t.p,16),this.red=t.prime?u().red(t.prime):u().mont(this.p),this.zero=new(u())(0).toRed(this.red),this.one=new(u())(1).toRed(this.red),this.two=new(u())(2).toRed(this.red),this.n=t.n&&new(u())(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var _=x;function E(e,t){this.curve=e,this.type=t,this.precomputed=null}x.prototype.point=function(){throw new Error("Not implemented")},x.prototype.validate=function(){throw new Error("Not implemented")},x.prototype._fixedNafMul=function(e,t){w(e.precomputed);var r=e._getDoubles(),n=y(t,1,this._bitLength),i=(1<<r.step+1)-(r.step%2===0?2:1);i/=3;var o,s,a=[];for(o=0;o<n.length;o+=r.step){s=0;for(var l=o+r.step-1;l>=o;l--)s=(s<<1)+n[l];a.push(s)}for(var c=this.jpoint(null,null,null),u=this.jpoint(null,null,null),d=i;d>0;d--){for(o=0;o<a.length;o++)(s=a[o])===d?u=u.mixedAdd(r.points[o]):s===-d&&(u=u.mixedAdd(r.points[o].neg()));c=c.add(u)}return c.toP()},x.prototype._wnafMul=function(e,t){var r=4,n=e._getNAFPoints(r);r=n.wnd;for(var i=n.points,o=y(t,r,this._bitLength),s=this.jpoint(null,null,null),a=o.length-1;a>=0;a--){for(var l=0;a>=0&&0===o[a];a--)l++;if(a>=0&&l++,s=s.dblp(l),a<0)break;var c=o[a];w(0!==c),s="affine"===e.type?c>0?s.mixedAdd(i[c-1>>1]):s.mixedAdd(i[-c-1>>1].neg()):c>0?s.add(i[c-1>>1]):s.add(i[-c-1>>1].neg())}return"affine"===e.type?s.toP():s},x.prototype._wnafMulAdd=function(e,t,r,n,i){var o,s,a,l=this._wnafT1,c=this._wnafT2,u=this._wnafT3,d=0;for(o=0;o<n;o++){var h=(a=t[o])._getNAFPoints(e);l[o]=h.wnd,c[o]=h.points}for(o=n-1;o>=1;o-=2){var f=o-1,p=o;if(1===l[f]&&1===l[p]){var g=[t[f],null,null,t[p]];0===t[f].y.cmp(t[p].y)?(g[1]=t[f].add(t[p]),g[2]=t[f].toJ().mixedAdd(t[p].neg())):0===t[f].y.cmp(t[p].y.redNeg())?(g[1]=t[f].toJ().mixedAdd(t[p]),g[2]=t[f].add(t[p].neg())):(g[1]=t[f].toJ().mixedAdd(t[p]),g[2]=t[f].toJ().mixedAdd(t[p].neg()));var m=[-3,-1,-5,-7,0,7,5,1,3],v=b(r[f],r[p]);for(d=Math.max(v[0].length,d),u[f]=new Array(d),u[p]=new Array(d),s=0;s<d;s++){var w=0|v[0][s],x=0|v[1][s];u[f][s]=m[3*(w+1)+(x+1)],u[p][s]=0,c[f]=g}}else u[f]=y(r[f],l[f],this._bitLength),u[p]=y(r[p],l[p],this._bitLength),d=Math.max(u[f].length,d),d=Math.max(u[p].length,d)}var _=this.jpoint(null,null,null),E=this._wnafT4;for(o=d;o>=0;o--){for(var S=0;o>=0;){var k=!0;for(s=0;s<n;s++)E[s]=0|u[s][o],0!==E[s]&&(k=!1);if(!k)break;S++,o--}if(o>=0&&S++,_=_.dblp(S),o<0)break;for(s=0;s<n;s++){var C=E[s];0!==C&&(C>0?a=c[s][C-1>>1]:C<0&&(a=c[s][-C-1>>1].neg()),_="affine"===a.type?_.mixedAdd(a):_.add(a))}}for(o=0;o<n;o++)c[o]=null;return i?_:_.toP()},x.BasePoint=E,E.prototype.eq=function(){throw new Error("Not implemented")},E.prototype.validate=function(){return this.curve.validate(this)},x.prototype.decodePoint=function(e,t){e=v.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1===2*r)return 6===e[0]?w(e[e.length-1]%2===0):7===e[0]&&w(e[e.length-1]%2===1),this.point(e.slice(1,1+r),e.slice(1+r,1+2*r));if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw new Error("Unknown point format")},E.prototype.encodeCompressed=function(e){return this.encode(e,!0)},E.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},E.prototype.encode=function(e,t){return v.encode(this._encode(t),e)},E.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},E.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},E.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],n=this,i=0;i<t;i+=e){for(var o=0;o<e;o++)n=n.dbl();r.push(n)}return{step:e,points:r}},E.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,n=1===r?null:this.dbl(),i=1;i<r;i++)t[i]=t[i-1].add(n);return{wnd:e,points:t}},E.prototype._getBeta=function(){return null},E.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t};var S=f((function(e){"function"===typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}})),k=v.assert;function C(e){_.call(this,"short",e),this.a=new(u())(e.a,16).toRed(this.red),this.b=new(u())(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}S(C,_);var A=C;function P(e,t,r,n){_.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new(u())(t,16),this.y=new(u())(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function I(e,t,r,n){_.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new(u())(0)):(this.x=new(u())(t,16),this.y=new(u())(r,16),this.z=new(u())(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}C.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,r;if(e.beta)t=new(u())(e.beta,16).toRed(this.red);else{var n=this._getEndoRoots(this.p);t=(t=n[0].cmp(n[1])<0?n[0]:n[1]).toRed(this.red)}if(e.lambda)r=new(u())(e.lambda,16);else{var i=this._getEndoRoots(this.n);0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(t))?r=i[0]:(r=i[1],k(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}return{beta:t,lambda:r,basis:e.basis?e.basis.map((function(e){return{a:new(u())(e.a,16),b:new(u())(e.b,16)}})):this._getEndoBasis(r)}}},C.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:u().mont(e),r=new(u())(2).toRed(t).redInvm(),n=r.redNeg(),i=new(u())(3).toRed(t).redNeg().redSqrt().redMul(r);return[n.redAdd(i).fromRed(),n.redSub(i).fromRed()]},C.prototype._getEndoBasis=function(e){for(var t,r,n,i,o,s,a,l,c,d=this.n.ushrn(Math.floor(this.n.bitLength()/2)),h=e,f=this.n.clone(),p=new(u())(1),g=new(u())(0),m=new(u())(0),v=new(u())(1),y=0;0!==h.cmpn(0);){var b=f.div(h);l=f.sub(b.mul(h)),c=m.sub(b.mul(p));var w=v.sub(b.mul(g));if(!n&&l.cmp(d)<0)t=a.neg(),r=p,n=l.neg(),i=c;else if(n&&2===++y)break;a=l,f=h,h=l,m=p,p=c,v=g,g=w}o=l.neg(),s=c;var x=n.sqr().add(i.sqr());return o.sqr().add(s.sqr()).cmp(x)>=0&&(o=t,s=r),n.negative&&(n=n.neg(),i=i.neg()),o.negative&&(o=o.neg(),s=s.neg()),[{a:n,b:i},{a:o,b:s}]},C.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],n=t[1],i=n.b.mul(e).divRound(this.n),o=r.b.neg().mul(e).divRound(this.n),s=i.mul(r.a),a=o.mul(n.a),l=i.mul(r.b),c=o.mul(n.b);return{k1:e.sub(s).sub(a),k2:l.add(c).neg()}},C.prototype.pointFromX=function(e,t){(e=new(u())(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var i=n.fromRed().isOdd();return(t&&!i||!t&&i)&&(n=n.redNeg()),this.point(e,n)},C.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,n=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);return 0===r.redSqr().redISub(i).cmpn(0)},C.prototype._endoWnafMulAdd=function(e,t,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,o=0;o<e.length;o++){var s=this._endoSplit(t[o]),a=e[o],l=a._getBeta();s.k1.negative&&(s.k1.ineg(),a=a.neg(!0)),s.k2.negative&&(s.k2.ineg(),l=l.neg(!0)),n[2*o]=a,n[2*o+1]=l,i[2*o]=s.k1,i[2*o+1]=s.k2}for(var c=this._wnafMulAdd(1,n,i,2*o,r),u=0;u<2*o;u++)n[u]=null,i[u]=null;return c},S(P,_.BasePoint),C.prototype.point=function(e,t,r){return new P(this,e,t,r)},C.prototype.pointFromJSON=function(e,t){return P.fromJSON(this,e,t)},P.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,n=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(n)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(n)}}}return t}},P.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},P.fromJSON=function(e,t,r){"string"===typeof t&&(t=JSON.parse(t));var n=e.point(t[0],t[1],r);if(!t[2])return n;function i(t){return e.point(t[0],t[1],r)}var o=t[2];return n.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[n].concat(o.doubles.points.map(i))},naf:o.naf&&{wnd:o.naf.wnd,points:[n].concat(o.naf.points.map(i))}},n},P.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},P.prototype.isInfinity=function(){return this.inf},P.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),n=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,n)},P.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),n=e.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),o=i.redSqr().redISub(this.x.redAdd(this.x)),s=i.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,s)},P.prototype.getX=function(){return this.x.fromRed()},P.prototype.getY=function(){return this.y.fromRed()},P.prototype.mul=function(e){return e=new(u())(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},P.prototype.mulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},P.prototype.jmulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},P.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},P.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,n=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return t},P.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},S(I,_.BasePoint),C.prototype.jpoint=function(e,t,r){return new I(this,e,t,r)},I.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),n=this.y.redMul(t).redMul(e);return this.curve.point(r,n)},I.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},I.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(t),i=e.x.redMul(r),o=this.y.redMul(t.redMul(e.z)),s=e.y.redMul(r.redMul(this.z)),a=n.redSub(i),l=o.redSub(s);if(0===a.cmpn(0))return 0!==l.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var c=a.redSqr(),u=c.redMul(a),d=n.redMul(c),h=l.redSqr().redIAdd(u).redISub(d).redISub(d),f=l.redMul(d.redISub(h)).redISub(o.redMul(u)),p=this.z.redMul(e.z).redMul(a);return this.curve.jpoint(h,f,p)},I.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,n=e.x.redMul(t),i=this.y,o=e.y.redMul(t).redMul(this.z),s=r.redSub(n),a=i.redSub(o);if(0===s.cmpn(0))return 0!==a.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var l=s.redSqr(),c=l.redMul(s),u=r.redMul(l),d=a.redSqr().redIAdd(c).redISub(u).redISub(u),h=a.redMul(u.redISub(d)).redISub(i.redMul(c)),f=this.z.redMul(s);return this.curve.jpoint(d,h,f)},I.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();var t;if(this.curve.zeroA||this.curve.threeA){var r=this;for(t=0;t<e;t++)r=r.dbl();return r}var n=this.curve.a,i=this.curve.tinv,o=this.x,s=this.y,a=this.z,l=a.redSqr().redSqr(),c=s.redAdd(s);for(t=0;t<e;t++){var u=o.redSqr(),d=c.redSqr(),h=d.redSqr(),f=u.redAdd(u).redIAdd(u).redIAdd(n.redMul(l)),p=o.redMul(d),g=f.redSqr().redISub(p.redAdd(p)),m=p.redISub(g),v=f.redMul(m);v=v.redIAdd(v).redISub(h);var y=c.redMul(a);t+1<e&&(l=l.redMul(h)),o=g,a=y,c=v}return this.curve.jpoint(o,c.redMul(i),a)},I.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},I.prototype._zeroDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(n).redISub(o);s=s.redIAdd(s);var a=n.redAdd(n).redIAdd(n),l=a.redSqr().redISub(s).redISub(s),c=o.redIAdd(o);c=(c=c.redIAdd(c)).redIAdd(c),e=l,t=a.redMul(s.redISub(l)).redISub(c),r=this.y.redAdd(this.y)}else{var u=this.x.redSqr(),d=this.y.redSqr(),h=d.redSqr(),f=this.x.redAdd(d).redSqr().redISub(u).redISub(h);f=f.redIAdd(f);var p=u.redAdd(u).redIAdd(u),g=p.redSqr(),m=h.redIAdd(h);m=(m=m.redIAdd(m)).redIAdd(m),e=g.redISub(f).redISub(f),t=p.redMul(f.redISub(e)).redISub(m),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(e,t,r)},I.prototype._threeDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),s=this.x.redAdd(i).redSqr().redISub(n).redISub(o);s=s.redIAdd(s);var a=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),l=a.redSqr().redISub(s).redISub(s);e=l;var c=o.redIAdd(o);c=(c=c.redIAdd(c)).redIAdd(c),t=a.redMul(s.redISub(l)).redISub(c),r=this.y.redAdd(this.y)}else{var u=this.z.redSqr(),d=this.y.redSqr(),h=this.x.redMul(d),f=this.x.redSub(u).redMul(this.x.redAdd(u));f=f.redAdd(f).redIAdd(f);var p=h.redIAdd(h),g=(p=p.redIAdd(p)).redAdd(p);e=f.redSqr().redISub(g),r=this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);var m=d.redSqr();m=(m=(m=m.redIAdd(m)).redIAdd(m)).redIAdd(m),t=f.redMul(p.redISub(e)).redISub(m)}return this.curve.jpoint(e,t,r)},I.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),o=t.redSqr(),s=r.redSqr(),a=o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),l=t.redAdd(t),c=(l=l.redIAdd(l)).redMul(s),u=a.redSqr().redISub(c.redAdd(c)),d=c.redISub(u),h=s.redSqr();h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var f=a.redMul(d).redISub(h),p=r.redAdd(r).redMul(n);return this.curve.jpoint(u,f,p)},I.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),n=t.redSqr(),i=e.redAdd(e).redIAdd(e),o=i.redSqr(),s=this.x.redAdd(t).redSqr().redISub(e).redISub(n),a=(s=(s=(s=s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),l=n.redIAdd(n);l=(l=(l=l.redIAdd(l)).redIAdd(l)).redIAdd(l);var c=i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(l),u=t.redMul(c);u=(u=u.redIAdd(u)).redIAdd(u);var d=this.x.redMul(a).redISub(u);d=(d=d.redIAdd(d)).redIAdd(d);var h=this.y.redMul(c.redMul(l.redISub(c)).redISub(s.redMul(a)));h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var f=this.z.redAdd(s).redSqr().redISub(r).redISub(a);return this.curve.jpoint(d,h,f)},I.prototype.mul=function(e,t){return e=new(u())(e,t),this.curve._wnafMul(this,e)},I.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var n=t.redMul(this.z),i=r.redMul(e.z);return 0===this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)},I.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var n=e.clone(),i=this.curve.redN.redMul(t);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(i),0===this.x.cmp(r))return!0}},I.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},I.prototype.isInfinity=function(){return 0===this.z.cmpn(0)};var R=f((function(e,t){var r=t;r.base=_,r.short=A,r.mont=null,r.edwards=null})),O=f((function(e,t){var r,n=t,i=v.assert;function o(e){"short"===e.type?this.curve=new R.short(e):"edwards"===e.type?this.curve=new R.edwards(e):this.curve=new R.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,i(this.g.validate(),"Invalid curve"),i(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function s(e,t){Object.defineProperty(n,e,{configurable:!0,enumerable:!0,get:function(){var r=new o(t);return Object.defineProperty(n,e,{configurable:!0,enumerable:!0,value:r}),r}})}n.PresetCurve=o,s("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:h().sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),s("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:h().sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),s("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:h().sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),s("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:h().sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),s("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:h().sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),s("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:h().sha256,gRed:!1,g:["9"]}),s("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:h().sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{r=null.crash()}catch(a){r=void 0}s("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:h().sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",r]})}));function T(e){if(!(this instanceof T))return new T(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=m.toArray(e.entropy,e.entropyEnc||"hex"),r=m.toArray(e.nonce,e.nonceEnc||"hex"),n=m.toArray(e.pers,e.persEnc||"hex");p(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,n)}var M=T;T.prototype._init=function(e,t,r){var n=e.concat(t).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656},T.prototype._hmac=function(){return new(h().hmac)(this.hash,this.K)},T.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},T.prototype.reseed=function(e,t,r,n){"string"!==typeof t&&(n=r,r=t,t=null),e=m.toArray(e,t),r=m.toArray(r,n),p(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},T.prototype.generate=function(e,t,r,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!==typeof t&&(n=r,r=t,t=null),r&&(r=m.toArray(r,n||"hex"),this._update(r));for(var i=[];i.length<e;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var o=i.slice(0,e);return this._update(r),this._reseed++,m.encode(o,t)};var N=v.assert;function j(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var L=j;j.fromPublic=function(e,t,r){return t instanceof j?t:new j(e,{pub:t,pubEnc:r})},j.fromPrivate=function(e,t,r){return t instanceof j?t:new j(e,{priv:t,privEnc:r})},j.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},j.prototype.getPublic=function(e,t){return"string"===typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},j.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},j.prototype._importPrivate=function(e,t){this.priv=new(u())(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},j.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?N(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||N(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},j.prototype.derive=function(e){return e.validate()||N(e.validate(),"public point not validated"),e.mul(this.priv).getX()},j.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},j.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},j.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var D=v.assert;function $(e,t){if(e instanceof $)return e;this._importDER(e,t)||(D(e.r&&e.s,"Signature without r or s"),this.r=new(u())(e.r,16),this.s=new(u())(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}var B=$;function Z(){this.place=0}function z(e,t){var r=e[t.place++];if(!(128&r))return r;var n=15&r;if(0===n||n>4)return!1;for(var i=0,o=0,s=t.place;o<n;o++,s++)i<<=8,i|=e[s],i>>>=0;return!(i<=127)&&(t.place=s,i)}function U(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function F(e,t){if(t<128)e.push(t);else{var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}}$.prototype._importDER=function(e,t){e=v.toArray(e,t);var r=new Z;if(48!==e[r.place++])return!1;var n=z(e,r);if(!1===n)return!1;if(n+r.place!==e.length)return!1;if(2!==e[r.place++])return!1;var i=z(e,r);if(!1===i)return!1;var o=e.slice(r.place,i+r.place);if(r.place+=i,2!==e[r.place++])return!1;var s=z(e,r);if(!1===s)return!1;if(e.length!==s+r.place)return!1;var a=e.slice(r.place,s+r.place);if(0===o[0]){if(!(128&o[1]))return!1;o=o.slice(1)}if(0===a[0]){if(!(128&a[1]))return!1;a=a.slice(1)}return this.r=new(u())(o),this.s=new(u())(a),this.recoveryParam=null,!0},$.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=U(t),r=U(r);!r[0]&&!(128&r[1]);)r=r.slice(1);var n=[2];F(n,t.length),(n=n.concat(t)).push(2),F(n,r.length);var i=n.concat(r),o=[48];return F(o,i.length),o=o.concat(i),v.encode(o,e)};var W=function(){throw new Error("unsupported")},H=v.assert;function V(e){if(!(this instanceof V))return new V(e);"string"===typeof e&&(H(Object.prototype.hasOwnProperty.call(O,e),"Unknown curve "+e),e=O[e]),e instanceof O.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var q=V;V.prototype.keyPair=function(e){return new L(this,e)},V.prototype.keyFromPrivate=function(e,t){return L.fromPrivate(this,e,t)},V.prototype.keyFromPublic=function(e,t){return L.fromPublic(this,e,t)},V.prototype.genKeyPair=function(e){e||(e={});for(var t=new M({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||W(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),n=this.n.sub(new(u())(2));;){var i=new(u())(t.generate(r));if(!(i.cmp(n)>0))return i.iaddn(1),this.keyFromPrivate(i)}},V.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return r>0&&(e=e.ushrn(r)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},V.prototype.sign=function(e,t,r,n){"object"===typeof r&&(n=r,r=null),n||(n={}),t=this.keyFromPrivate(t,r),e=this._truncateToN(new(u())(e,16));for(var i=this.n.byteLength(),o=t.getPrivate().toArray("be",i),s=e.toArray("be",i),a=new M({hash:this.hash,entropy:o,nonce:s,pers:n.pers,persEnc:n.persEnc||"utf8"}),l=this.n.sub(new(u())(1)),c=0;;c++){var d=n.k?n.k(c):new(u())(a.generate(this.n.byteLength()));if(!((d=this._truncateToN(d,!0)).cmpn(1)<=0||d.cmp(l)>=0)){var h=this.g.mul(d);if(!h.isInfinity()){var f=h.getX(),p=f.umod(this.n);if(0!==p.cmpn(0)){var g=d.invm(this.n).mul(p.mul(t.getPrivate()).iadd(e));if(0!==(g=g.umod(this.n)).cmpn(0)){var m=(h.getY().isOdd()?1:0)|(0!==f.cmp(p)?2:0);return n.canonical&&g.cmp(this.nh)>0&&(g=this.n.sub(g),m^=1),new B({r:p,s:g,recoveryParam:m})}}}}}},V.prototype.verify=function(e,t,r,n){e=this._truncateToN(new(u())(e,16)),r=this.keyFromPublic(r,n);var i=(t=new B(t,"hex")).r,o=t.s;if(i.cmpn(1)<0||i.cmp(this.n)>=0)return!1;if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;var s,a=o.invm(this.n),l=a.mul(e).umod(this.n),c=a.mul(i).umod(this.n);return this.curve._maxwellTrick?!(s=this.g.jmulAdd(l,r.getPublic(),c)).isInfinity()&&s.eqXToP(i):!(s=this.g.mulAdd(l,r.getPublic(),c)).isInfinity()&&0===s.getX().umod(this.n).cmp(i)},V.prototype.recoverPubKey=function(e,t,r,n){H((3&r)===r,"The recovery param is more than two bits"),t=new B(t,n);var i=this.n,o=new(u())(e),s=t.r,a=t.s,l=1&r,c=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&c)throw new Error("Unable to find sencond key candinate");s=c?this.curve.pointFromX(s.add(this.curve.n),l):this.curve.pointFromX(s,l);var d=t.r.invm(i),h=i.sub(o).mul(d).umod(i),f=a.mul(d).umod(i);return this.g.mulAdd(h,s,f)},V.prototype.getKeyRecoveryParam=function(e,t,r,n){if(null!==(t=new B(t,n)).recoveryParam)return t.recoveryParam;for(var i=0;i<4;i++){var o;try{o=this.recoverPubKey(e,t,i)}catch(e){continue}if(o.eq(r))return i}throw new Error("Unable to find valid recovery factor")};var Y=f((function(e,t){var r=t;r.version="6.5.4",r.utils=v,r.rand=function(){throw new Error("unsupported")},r.curve=R,r.curves=O,r.ec=q,r.eddsa=null})).ec,G=r(30520),K=r(39502);const J=new K.Yd("signing-key/5.7.0");let Q=null;function X(){return Q||(Q=new Y("secp256k1")),Q}class ee{constructor(e){(0,G.zG)(this,"curve","secp256k1"),(0,G.zG)(this,"privateKey",(0,o.Dv)(e)),32!==(0,o.E1)(this.privateKey)&&J.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");const t=X().keyFromPrivate((0,o.lE)(this.privateKey));(0,G.zG)(this,"publicKey","0x"+t.getPublic(!1,"hex")),(0,G.zG)(this,"compressedPublicKey","0x"+t.getPublic(!0,"hex")),(0,G.zG)(this,"_isSigningKey",!0)}_addPoint(e){const t=X().keyFromPublic((0,o.lE)(this.publicKey)),r=X().keyFromPublic((0,o.lE)(e));return"0x"+t.pub.add(r.pub).encodeCompressed("hex")}signDigest(e){const t=X().keyFromPrivate((0,o.lE)(this.privateKey)),r=(0,o.lE)(e);32!==r.length&&J.throwArgumentError("bad digest length","digest",e);const n=t.sign(r,{canonical:!0});return(0,o.N)({recoveryParam:n.recoveryParam,r:(0,o.$m)("0x"+n.r.toString(16),32),s:(0,o.$m)("0x"+n.s.toString(16),32)})}computeSharedSecret(e){const t=X().keyFromPrivate((0,o.lE)(this.privateKey)),r=X().keyFromPublic((0,o.lE)(te(e)));return(0,o.$m)("0x"+t.derive(r.getPublic()).toString(16),32)}static isSigningKey(e){return!(!e||!e._isSigningKey)}}function te(e,t){const r=(0,o.lE)(e);if(32===r.length){const e=new ee(r);return t?"0x"+X().keyFromPrivate(r).getPublic(!0,"hex"):e.publicKey}return 33===r.length?t?(0,o.Dv)(r):"0x"+X().keyFromPublic(r).getPublic(!1,"hex"):65===r.length?t?"0x"+X().keyFromPublic(r).getPublic(!0,"hex"):(0,o.Dv)(r):J.throwArgumentError("invalid public or private key","key","[REDACTED]")}const re=new K.Yd("transactions/5.7.0");var ne;function ie(e){return"0x"===e?null:(0,n.Kn)(e)}function oe(e){return"0x"===e?s:i.O$.from(e)}!function(e){e[e.legacy=0]="legacy",e[e.eip2930=1]="eip2930",e[e.eip1559=2]="eip1559"}(ne||(ne={}));function se(e,t){return function(e){const t=te(e);return(0,n.Kn)((0,o.p3)((0,a.w)((0,o.p3)(t,1)),12))}(function(e,t){const r=(0,o.N)(t),n={r:(0,o.lE)(r.r),s:(0,o.lE)(r.s)};return"0x"+X().recoverPubKey((0,o.lE)(e),n,r.recoveryParam).encode("hex",!1)}((0,o.lE)(e),t))}function ae(e,t){const r=(0,o.G1)(i.O$.from(e).toHexString());return r.length>32&&re.throwArgumentError("invalid length for "+t,"transaction:"+t,e),r}function le(e,t){return{address:(0,n.Kn)(e),storageKeys:(t||[]).map(((t,r)=>(32!==(0,o.E1)(t)&&re.throwArgumentError("invalid access list storageKey",`accessList[${e}:${r}]`,t),t.toLowerCase())))}}function ce(e){if(Array.isArray(e))return e.map(((e,t)=>Array.isArray(e)?(e.length>2&&re.throwArgumentError("access list expected to be [ address, storageKeys[] ]",`value[${t}]`,e),le(e[0],e[1])):le(e.address,e.storageKeys)));const t=Object.keys(e).map((t=>{const r=e[t].reduce(((e,t)=>(e[t]=!0,e)),{});return le(t,Object.keys(r).sort())}));return t.sort(((e,t)=>e.address.localeCompare(t.address))),t}function ue(e){return ce(e).map((e=>[e.address,e.storageKeys]))}function de(e,t){if(null!=e.gasPrice){const t=i.O$.from(e.gasPrice),r=i.O$.from(e.maxFeePerGas||0);t.eq(r)||re.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas","tx",{gasPrice:t,maxFeePerGas:r})}const r=[ae(e.chainId||0,"chainId"),ae(e.nonce||0,"nonce"),ae(e.maxPriorityFeePerGas||0,"maxPriorityFeePerGas"),ae(e.maxFeePerGas||0,"maxFeePerGas"),ae(e.gasLimit||0,"gasLimit"),null!=e.to?(0,n.Kn)(e.to):"0x",ae(e.value||0,"value"),e.data||"0x",ue(e.accessList||[])];if(t){const e=(0,o.N)(t);r.push(ae(e.recoveryParam,"recoveryParam")),r.push((0,o.G1)(e.r)),r.push((0,o.G1)(e.s))}return(0,o.xs)(["0x02",l.c(r)])}function he(e,t){const r=[ae(e.chainId||0,"chainId"),ae(e.nonce||0,"nonce"),ae(e.gasPrice||0,"gasPrice"),ae(e.gasLimit||0,"gasLimit"),null!=e.to?(0,n.Kn)(e.to):"0x",ae(e.value||0,"value"),e.data||"0x",ue(e.accessList||[])];if(t){const e=(0,o.N)(t);r.push(ae(e.recoveryParam,"recoveryParam")),r.push((0,o.G1)(e.r)),r.push((0,o.G1)(e.s))}return(0,o.xs)(["0x01",l.c(r)])}function fe(e,t,r){try{const r=oe(t[0]).toNumber();if(0!==r&&1!==r)throw new Error("bad recid");e.v=r}catch(n){re.throwArgumentError("invalid v for transaction type: 1","v",t[0])}e.r=(0,o.$m)(t[1],32),e.s=(0,o.$m)(t[2],32);try{const t=(0,a.w)(r(e));e.from=se(t,{r:e.r,s:e.s,recoveryParam:e.v})}catch(n){}}function pe(e){const t=(0,o.lE)(e);if(t[0]>127)return function(e){const t=l.J(e);9!==t.length&&6!==t.length&&re.throwArgumentError("invalid raw transaction","rawTransaction",e);const r={nonce:oe(t[0]).toNumber(),gasPrice:oe(t[1]),gasLimit:oe(t[2]),to:ie(t[3]),value:oe(t[4]),data:t[5],chainId:0};if(6===t.length)return r;try{r.v=i.O$.from(t[6]).toNumber()}catch(n){return r}if(r.r=(0,o.$m)(t[7],32),r.s=(0,o.$m)(t[8],32),i.O$.from(r.r).isZero()&&i.O$.from(r.s).isZero())r.chainId=r.v,r.v=0;else{r.chainId=Math.floor((r.v-35)/2),r.chainId<0&&(r.chainId=0);let i=r.v-27;const s=t.slice(0,6);0!==r.chainId&&(s.push((0,o.Dv)(r.chainId)),s.push("0x"),s.push("0x"),i-=2*r.chainId+8);const c=(0,a.w)(l.c(s));try{r.from=se(c,{r:(0,o.Dv)(r.r),s:(0,o.Dv)(r.s),recoveryParam:i})}catch(n){}r.hash=(0,a.w)(e)}return r.type=null,r}(t);switch(t[0]){case 1:return function(e){const t=l.J(e.slice(1));8!==t.length&&11!==t.length&&re.throwArgumentError("invalid component count for transaction type: 1","payload",(0,o.Dv)(e));const r={type:1,chainId:oe(t[0]).toNumber(),nonce:oe(t[1]).toNumber(),gasPrice:oe(t[2]),gasLimit:oe(t[3]),to:ie(t[4]),value:oe(t[5]),data:t[6],accessList:ce(t[7])};return 8===t.length||(r.hash=(0,a.w)(e),fe(r,t.slice(8),he)),r}(t);case 2:return function(e){const t=l.J(e.slice(1));9!==t.length&&12!==t.length&&re.throwArgumentError("invalid component count for transaction type: 2","payload",(0,o.Dv)(e));const r=oe(t[2]),n=oe(t[3]),i={type:2,chainId:oe(t[0]).toNumber(),nonce:oe(t[1]).toNumber(),maxPriorityFeePerGas:r,maxFeePerGas:n,gasPrice:null,gasLimit:oe(t[4]),to:ie(t[5]),value:oe(t[6]),data:t[7],accessList:ce(t[8])};return 9===t.length||(i.hash=(0,a.w)(e),fe(i,t.slice(9),de)),i}(t)}return re.throwError(`unsupported transaction type: ${t[0]}`,K.Yd.errors.UNSUPPORTED_OPERATION,{operation:"parseTransaction",transactionType:t[0]})}},19601:function(e,t,r){"use strict";r.d(t,{dF:function(){return _},fi:function(){return E}});var n=r(49716),i=r(39502),o=r(86945),s=r(2257);const a=new i.Yd(o.i),l={},c=s.O$.from(0),u=s.O$.from(-1);function d(e,t,r,n){const o={fault:t,operation:r};return void 0!==n&&(o.value=n),a.throwError(e,i.Yd.errors.NUMERIC_FAULT,o)}let h="0";for(;h.length<256;)h+=h;function f(e){if("number"!==typeof e)try{e=s.O$.from(e).toNumber()}catch(t){}return"number"===typeof e&&e>=0&&e<=256&&!(e%1)?"1"+h.substring(0,e):a.throwArgumentError("invalid decimal size","decimals",e)}function p(e,t){null==t&&(t=0);const r=f(t),n=(e=s.O$.from(e)).lt(c);n&&(e=e.mul(u));let i=e.mod(r).toString();for(;i.length<r.length-1;)i="0"+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=e.div(r).toString();return e=1===r.length?o:o+"."+i,n&&(e="-"+e),e}function g(e,t){null==t&&(t=0);const r=f(t);"string"===typeof e&&e.match(/^-?[0-9.]+$/)||a.throwArgumentError("invalid decimal value","value",e);const n="-"===e.substring(0,1);n&&(e=e.substring(1)),"."===e&&a.throwArgumentError("missing value","value",e);const i=e.split(".");i.length>2&&a.throwArgumentError("too many decimal points","value",e);let o=i[0],l=i[1];for(o||(o="0"),l||(l="0");"0"===l[l.length-1];)l=l.substring(0,l.length-1);for(l.length>r.length-1&&d("fractional component exceeds decimals","underflow","parseFixed"),""===l&&(l="0");l.length<r.length-1;)l+="0";const c=s.O$.from(o),h=s.O$.from(l);let p=c.mul(r).add(h);return n&&(p=p.mul(u)),p}class m{constructor(e,t,r,n){e!==l&&a.throwError("cannot use FixedFormat constructor; use FixedFormat.from",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=r,this.decimals=n,this.name=(t?"":"u")+"fixed"+String(r)+"x"+String(n),this._multiplier=f(n),Object.freeze(this)}static from(e){if(e instanceof m)return e;"number"===typeof e&&(e=`fixed128x${e}`);let t=!0,r=128,n=18;if("string"===typeof e)if("fixed"===e);else if("ufixed"===e)t=!1;else{const i=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);i||a.throwArgumentError("invalid fixed format","format",e),t="u"!==i[1],r=parseInt(i[2]),n=parseInt(i[3])}else if(e){const i=(t,r,n)=>null==e[t]?n:(typeof e[t]!==r&&a.throwArgumentError("invalid fixed format ("+t+" not "+r+")","format."+t,e[t]),e[t]);t=i("signed","boolean",t),r=i("width","number",r),n=i("decimals","number",n)}return r%8&&a.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),n>80&&a.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",n),new m(l,t,r,n)}}class v{constructor(e,t,r,n){e!==l&&a.throwError("cannot use FixedNumber constructor; use FixedNumber.from",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=t,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&a.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const t=g(this._value,this.format.decimals),r=g(e._value,e.format.decimals);return v.fromValue(t.add(r),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const t=g(this._value,this.format.decimals),r=g(e._value,e.format.decimals);return v.fromValue(t.sub(r),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const t=g(this._value,this.format.decimals),r=g(e._value,e.format.decimals);return v.fromValue(t.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const t=g(this._value,this.format.decimals),r=g(e._value,e.format.decimals);return v.fromValue(t.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=v.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return this.isNegative()&&r&&(t=t.subUnsafe(y.toFormat(t.format))),t}ceiling(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=v.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return!this.isNegative()&&r&&(t=t.addUnsafe(y.toFormat(t.format))),t}round(e){null==e&&(e=0);const t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&a.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;const r=v.from("1"+h.substring(0,e),this.format),n=b.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&a.throwArgumentError("invalid byte width","width",e);const t=s.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,n.$m)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return v.fromString(this._value,e)}static fromValue(e,t,r){return null!=r||null==t||(0,s.Zm)(t)||(r=t,t=null),null==t&&(t=0),null==r&&(r="fixed"),v.fromString(p(e,t),m.from(r))}static fromString(e,t){null==t&&(t="fixed");const r=m.from(t),i=g(e,r.decimals);!r.signed&&i.lt(c)&&d("unsigned value cannot be negative","overflow","value",e);let o=null;r.signed?o=i.toTwos(r.width).toHexString():(o=i.toHexString(),o=(0,n.$m)(o,r.width/8));const s=p(i,r.decimals);return new v(l,o,s,r)}static fromBytes(e,t){null==t&&(t="fixed");const r=m.from(t);if((0,n.lE)(e).length>r.width/8)throw new Error("overflow");let i=s.O$.from(e);r.signed&&(i=i.fromTwos(r.width));const o=i.toTwos((r.signed?0:1)+r.width).toHexString(),a=p(i,r.decimals);return new v(l,o,a,r)}static from(e,t){if("string"===typeof e)return v.fromString(e,t);if((0,n._t)(e))return v.fromBytes(e,t);try{return v.fromValue(e,0,t)}catch(r){if(r.code!==i.Yd.errors.INVALID_ARGUMENT)throw r}return a.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!(!e||!e._isFixedNumber)}}const y=v.from(1),b=v.from("0.5"),w=new i.Yd("units/5.7.0"),x=["wei","kwei","mwei","gwei","szabo","finney","ether"];function _(e){return function(e,t){if("string"===typeof t){const e=x.indexOf(t);-1!==e&&(t=3*e)}return p(e,null!=t?t:18)}(e,18)}function E(e){return function(e,t){if("string"!==typeof e&&w.throwArgumentError("value must be a string","value",e),"string"===typeof t){const e=x.indexOf(t);-1!==e&&(t=3*e)}return g(e,null!=t?t:18)}(e,18)}},67109:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(47465);function i(e,t,r){try{Reflect.apply(e,t,r)}catch(n){setTimeout((()=>{throw n}))}}class o extends n.EventEmitter{emit(e){let t="error"===e;const r=this._events;if(void 0!==r)t=t&&void 0===r.error;else if(!t)return!1;for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];if(t){let e;if(o.length>0&&([e]=o),e instanceof Error)throw e;const t=new Error("Unhandled error."+(e?` (${e.message})`:""));throw t.context=e,t}const a=r[e];if(void 0===a)return!1;if("function"===typeof a)i(a,this,o);else{const e=a.length,t=function(e){const t=e.length,r=new Array(t);for(let n=0;n<t;n+=1)r[n]=e[n];return r}(a);for(let r=0;r<e;r+=1)i(t[r],this,o)}return!0}}t.default=o},9909:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertExhaustive=t.assertStruct=t.assert=t.AssertionError=void 0;const n=r(88858);function i(e){const t=function(e){return"object"===typeof e&&null!==e&&"message"in e}(e)?e.message:String(e);return t.endsWith(".")?t.slice(0,-1):t}function o(e,t){return function(e){var t,r;return Boolean("string"===typeof(null===(r=null===(t=null===e||void 0===e?void 0:e.prototype)||void 0===t?void 0:t.constructor)||void 0===r?void 0:r.name))}(e)?new e({message:t}):e({message:t})}class s extends Error{constructor(e){super(e.message),this.code="ERR_ASSERTION"}}t.AssertionError=s,t.assert=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Assertion failed.",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;if(!e){if(t instanceof Error)throw t;throw o(r,t)}},t.assertStruct=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s;try{(0,n.assert)(e,t)}catch(l){throw o(a,`${r}: ${i(l)}.`)}},t.assertExhaustive=function(e){throw new Error("Invalid branch reached. Should be detected during compilation.")}},17036:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.base64=void 0;const n=r(88858),i=r(9909);t.base64=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r,o;const s=null!==(r=t.paddingRequired)&&void 0!==r&&r,a=null!==(o=t.characterSet)&&void 0!==o?o:"base64";let l,c;return"base64"===a?l=String.raw`[A-Za-z0-9+\/]`:((0,i.assert)("base64url"===a),l=String.raw`[-_A-Za-z0-9]`),c=s?new RegExp(`^(?:${l}{4})*(?:${l}{3}=|${l}{2}==)?$`,"u"):new RegExp(`^(?:${l}{4})*(?:${l}{2,3}|${l}{3}=|${l}{2}==)?$`,"u"),(0,n.pattern)(e,c)}},96890:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createDataView=t.concatBytes=t.valueToBytes=t.stringToBytes=t.numberToBytes=t.signedBigIntToBytes=t.bigIntToBytes=t.hexToBytes=t.bytesToString=t.bytesToNumber=t.bytesToSignedBigInt=t.bytesToBigInt=t.bytesToHex=t.assertIsBytes=t.isBytes=void 0;const n=r(9909),i=r(81954);const o=function(){const e=[];return()=>{if(0===e.length)for(let t=0;t<256;t++)e.push(t.toString(16).padStart(2,"0"));return e}}();function s(e){return e instanceof Uint8Array}function a(e){(0,n.assert)(s(e),"Value must be a Uint8Array.")}function l(e){if(a(e),0===e.length)return"0x";const t=o(),r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=t[e[n]];return(0,i.add0x)(r.join(""))}function c(e){a(e);const t=l(e);return BigInt(t)}function u(e){var t;if("0x"===(null===(t=null===e||void 0===e?void 0:e.toLowerCase)||void 0===t?void 0:t.call(e)))return new Uint8Array;(0,i.assertIsHexString)(e);const r=(0,i.remove0x)(e).toLowerCase(),n=r.length%2===0?r:`0${r}`,o=new Uint8Array(n.length/2);for(let i=0;i<o.length;i++){const e=n.charCodeAt(2*i),t=n.charCodeAt(2*i+1),r=e-(e<58?48:87),s=t-(t<58?48:87);o[i]=16*r+s}return o}function d(e){(0,n.assert)("bigint"===typeof e,"Value must be a bigint."),(0,n.assert)(e>=BigInt(0),"Value must be a non-negative bigint.");return u(e.toString(16))}function h(e){(0,n.assert)("number"===typeof e,"Value must be a number."),(0,n.assert)(e>=0,"Value must be a non-negative number."),(0,n.assert)(Number.isSafeInteger(e),"Value is not a safe integer. Use `bigIntToBytes` instead.");return u(e.toString(16))}function f(e){return(0,n.assert)("string"===typeof e,"Value must be a string."),(new TextEncoder).encode(e)}function p(e){if("bigint"===typeof e)return d(e);if("number"===typeof e)return h(e);if("string"===typeof e)return e.startsWith("0x")?u(e):f(e);if(s(e))return e;throw new TypeError(`Unsupported value type: "${typeof e}".`)}t.isBytes=s,t.assertIsBytes=a,t.bytesToHex=l,t.bytesToBigInt=c,t.bytesToSignedBigInt=function(e){a(e);let t=BigInt(0);for(const r of e)t=(t<<BigInt(8))+BigInt(r);return BigInt.asIntN(8*e.length,t)},t.bytesToNumber=function(e){a(e);const t=c(e);return(0,n.assert)(t<=BigInt(Number.MAX_SAFE_INTEGER),"Number is not a safe integer. Use `bytesToBigInt` instead."),Number(t)},t.bytesToString=function(e){return a(e),(new TextDecoder).decode(e)},t.hexToBytes=u,t.bigIntToBytes=d,t.signedBigIntToBytes=function(e,t){(0,n.assert)("bigint"===typeof e,"Value must be a bigint."),(0,n.assert)("number"===typeof t,"Byte length must be a number."),(0,n.assert)(t>0,"Byte length must be greater than 0."),(0,n.assert)(function(e,t){(0,n.assert)(t>0);const r=e>>BigInt(31);return!((~e&r)+(e&~r)>>BigInt(8*t-1))}(e,t),"Byte length is too small to represent the given value.");let r=e;const i=new Uint8Array(t);for(let n=0;n<i.length;n++)i[n]=Number(BigInt.asUintN(8,r)),r>>=BigInt(8);return i.reverse()},t.numberToBytes=h,t.stringToBytes=f,t.valueToBytes=p,t.concatBytes=function(e){const t=new Array(e.length);let r=0;for(let i=0;i<e.length;i++){const n=p(e[i]);t[i]=n,r+=n.length}const n=new Uint8Array(r);for(let i=0,o=0;i<t.length;i++)n.set(t[i],o),o+=t[i].length;return n},t.createDataView=function(e){if("undefined"!==typeof Buffer&&e instanceof Buffer){const t=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);return new DataView(t)}return new DataView(e.buffer,e.byteOffset,e.byteLength)}},26869:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChecksumStruct=void 0;const n=r(88858),i=r(17036);t.ChecksumStruct=(0,n.size)((0,i.base64)((0,n.string)(),{paddingRequired:!0}),44,44)},32459:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createHex=t.createBytes=t.createBigInt=t.createNumber=void 0;const n=r(88858),i=r(9909),o=r(96890),s=r(81954),a=(0,n.union)([(0,n.number)(),(0,n.bigint)(),(0,n.string)(),s.StrictHexStruct]),l=(0,n.coerce)((0,n.number)(),a,Number),c=(0,n.coerce)((0,n.bigint)(),a,BigInt),u=((0,n.union)([s.StrictHexStruct,(0,n.instance)(Uint8Array)]),(0,n.coerce)((0,n.instance)(Uint8Array),(0,n.union)([s.StrictHexStruct]),o.hexToBytes)),d=(0,n.coerce)(s.StrictHexStruct,(0,n.instance)(Uint8Array),o.bytesToHex);t.createNumber=function(e){try{const t=(0,n.create)(e,l);return(0,i.assert)(Number.isFinite(t),`Expected a number-like value, got "${e}".`),t}catch(t){if(t instanceof n.StructError)throw new Error(`Expected a number-like value, got "${e}".`);throw t}},t.createBigInt=function(e){try{return(0,n.create)(e,c)}catch(t){if(t instanceof n.StructError)throw new Error(`Expected a number-like value, got "${String(t.value)}".`);throw t}},t.createBytes=function(e){if("string"===typeof e&&"0x"===e.toLowerCase())return new Uint8Array;try{return(0,n.create)(e,u)}catch(t){if(t instanceof n.StructError)throw new Error(`Expected a bytes-like value, got "${String(t.value)}".`);throw t}},t.createHex=function(e){if(e instanceof Uint8Array&&0===e.length||"string"===typeof e&&"0x"===e.toLowerCase())return"0x";try{return(0,n.create)(e,d)}catch(t){if(t instanceof n.StructError)throw new Error(`Expected a bytes-like value, got "${String(t.value)}".`);throw t}}},92491:function(e,t){"use strict";var r,n,i=this&&this.__classPrivateFieldSet||function(e,t,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r},o=this&&this.__classPrivateFieldGet||function(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.FrozenSet=t.FrozenMap=void 0;class s{constructor(e){r.set(this,void 0),i(this,r,new Map(e),"f"),Object.freeze(this)}get size(){return o(this,r,"f").size}[(r=new WeakMap,Symbol.iterator)](){return o(this,r,"f")[Symbol.iterator]()}entries(){return o(this,r,"f").entries()}forEach(e,t){return o(this,r,"f").forEach(((r,n,i)=>e.call(t,r,n,this)))}get(e){return o(this,r,"f").get(e)}has(e){return o(this,r,"f").has(e)}keys(){return o(this,r,"f").keys()}values(){return o(this,r,"f").values()}toString(){return`FrozenMap(${this.size}) {${this.size>0?` ${[...this.entries()].map((e=>{let[t,r]=e;return`${String(t)} => ${String(r)}`})).join(", ")} `:""}}`}}t.FrozenMap=s;class a{constructor(e){n.set(this,void 0),i(this,n,new Set(e),"f"),Object.freeze(this)}get size(){return o(this,n,"f").size}[(n=new WeakMap,Symbol.iterator)](){return o(this,n,"f")[Symbol.iterator]()}entries(){return o(this,n,"f").entries()}forEach(e,t){return o(this,n,"f").forEach(((r,n,i)=>e.call(t,r,n,this)))}has(e){return o(this,n,"f").has(e)}keys(){return o(this,n,"f").keys()}values(){return o(this,n,"f").values()}toString(){return`FrozenSet(${this.size}) {${this.size>0?` ${[...this.values()].map((e=>String(e))).join(", ")} `:""}}`}}t.FrozenSet=a,Object.freeze(s),Object.freeze(s.prototype),Object.freeze(a),Object.freeze(a.prototype)},81954:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove0x=t.add0x=t.assertIsStrictHexString=t.assertIsHexString=t.isStrictHexString=t.isHexString=t.StrictHexStruct=t.HexStruct=void 0;const n=r(88858),i=r(9909);function o(e){return(0,n.is)(e,t.HexStruct)}function s(e){return(0,n.is)(e,t.StrictHexStruct)}t.HexStruct=(0,n.pattern)((0,n.string)(),/^(?:0x)?[0-9a-f]+$/iu),t.StrictHexStruct=(0,n.pattern)((0,n.string)(),/^0x[0-9a-f]+$/iu),t.isHexString=o,t.isStrictHexString=s,t.assertIsHexString=function(e){(0,i.assert)(o(e),"Value must be a hexadecimal string.")},t.assertIsStrictHexString=function(e){(0,i.assert)(s(e),'Value must be a hexadecimal string, starting with "0x".')},t.add0x=function(e){return e.startsWith("0x")?e:e.startsWith("0X")?`0x${e.substring(2)}`:`0x${e}`},t.remove0x=function(e){return e.startsWith("0x")||e.startsWith("0X")?e.substring(2):e}},43030:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),i(r(9909),t),i(r(17036),t),i(r(96890),t),i(r(26869),t),i(r(32459),t),i(r(92491),t),i(r(81954),t),i(r(37619),t),i(r(61897),t),i(r(66814),t),i(r(39944),t),i(r(5374),t),i(r(94880),t),i(r(26927),t)},37619:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateJsonAndGetSize=t.getJsonRpcIdValidator=t.assertIsJsonRpcError=t.isJsonRpcError=t.assertIsJsonRpcFailure=t.isJsonRpcFailure=t.assertIsJsonRpcSuccess=t.isJsonRpcSuccess=t.assertIsJsonRpcResponse=t.isJsonRpcResponse=t.assertIsPendingJsonRpcResponse=t.isPendingJsonRpcResponse=t.JsonRpcResponseStruct=t.JsonRpcFailureStruct=t.JsonRpcSuccessStruct=t.PendingJsonRpcResponseStruct=t.assertIsJsonRpcRequest=t.isJsonRpcRequest=t.assertIsJsonRpcNotification=t.isJsonRpcNotification=t.JsonRpcNotificationStruct=t.JsonRpcRequestStruct=t.JsonRpcParamsStruct=t.JsonRpcErrorStruct=t.JsonRpcIdStruct=t.JsonRpcVersionStruct=t.jsonrpc2=t.isValidJson=t.JsonStruct=void 0;const n=r(88858),i=r(9909),o=r(66814);function s(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const r=new Set;function n(e,t){if(void 0===e)return[!1,0];if(null===e)return[!0,t?0:o.JsonSize.Null];const i=typeof e;try{if("function"===i)return[!1,0];if("string"===i||e instanceof String)return[!0,t?0:(0,o.calculateStringSize)(e)+2*o.JsonSize.Quote];if("boolean"===i||e instanceof Boolean)return t?[!0,0]:[!0,1==e?o.JsonSize.True:o.JsonSize.False];if("number"===i||e instanceof Number)return t?[!0,0]:[!0,(0,o.calculateNumberSize)(e)];if(e instanceof Date)return t?[!0,0]:[!0,isNaN(e.getDate())?o.JsonSize.Null:o.JsonSize.Date+2*o.JsonSize.Quote]}catch(s){return[!1,0]}if(!(0,o.isPlainObject)(e)&&!Array.isArray(e))return[!1,0];if(r.has(e))return[!1,0];r.add(e);try{return[!0,Object.entries(e).reduce(((i,s,a,l)=>{let[c,u]=s,[d,h]=n(u,t);if(!d)throw new Error("JSON validation did not pass. Validation process stopped.");if(r.delete(e),t)return 0;return i+(Array.isArray(e)?0:c.length+o.JsonSize.Comma+2*o.JsonSize.Colon)+h+(a<l.length-1?o.JsonSize.Comma:0)}),t?0:2*o.JsonSize.Wrapper)]}catch(s){return[!1,0]}}return n(e,t)}t.JsonStruct=(0,n.define)("Json",(e=>{const[t]=s(e,!0);return!!t||"Expected a valid JSON-serializable value"})),t.isValidJson=function(e){return(0,n.is)(e,t.JsonStruct)},t.jsonrpc2="2.0",t.JsonRpcVersionStruct=(0,n.literal)(t.jsonrpc2),t.JsonRpcIdStruct=(0,n.nullable)((0,n.union)([(0,n.number)(),(0,n.string)()])),t.JsonRpcErrorStruct=(0,n.object)({code:(0,n.integer)(),message:(0,n.string)(),data:(0,n.optional)(t.JsonStruct),stack:(0,n.optional)((0,n.string)())}),t.JsonRpcParamsStruct=(0,n.optional)((0,n.union)([(0,n.record)((0,n.string)(),t.JsonStruct),(0,n.array)(t.JsonStruct)])),t.JsonRpcRequestStruct=(0,n.object)({id:t.JsonRpcIdStruct,jsonrpc:t.JsonRpcVersionStruct,method:(0,n.string)(),params:t.JsonRpcParamsStruct}),t.JsonRpcNotificationStruct=(0,n.omit)(t.JsonRpcRequestStruct,["id"]),t.isJsonRpcNotification=function(e){return(0,n.is)(e,t.JsonRpcNotificationStruct)},t.assertIsJsonRpcNotification=function(e,r){(0,i.assertStruct)(e,t.JsonRpcNotificationStruct,"Invalid JSON-RPC notification",r)},t.isJsonRpcRequest=function(e){return(0,n.is)(e,t.JsonRpcRequestStruct)},t.assertIsJsonRpcRequest=function(e,r){(0,i.assertStruct)(e,t.JsonRpcRequestStruct,"Invalid JSON-RPC request",r)},t.PendingJsonRpcResponseStruct=(0,n.object)({id:t.JsonRpcIdStruct,jsonrpc:t.JsonRpcVersionStruct,result:(0,n.optional)((0,n.unknown)()),error:(0,n.optional)(t.JsonRpcErrorStruct)}),t.JsonRpcSuccessStruct=(0,n.object)({id:t.JsonRpcIdStruct,jsonrpc:t.JsonRpcVersionStruct,result:t.JsonStruct}),t.JsonRpcFailureStruct=(0,n.object)({id:t.JsonRpcIdStruct,jsonrpc:t.JsonRpcVersionStruct,error:t.JsonRpcErrorStruct}),t.JsonRpcResponseStruct=(0,n.union)([t.JsonRpcSuccessStruct,t.JsonRpcFailureStruct]),t.isPendingJsonRpcResponse=function(e){return(0,n.is)(e,t.PendingJsonRpcResponseStruct)},t.assertIsPendingJsonRpcResponse=function(e,r){(0,i.assertStruct)(e,t.PendingJsonRpcResponseStruct,"Invalid pending JSON-RPC response",r)},t.isJsonRpcResponse=function(e){return(0,n.is)(e,t.JsonRpcResponseStruct)},t.assertIsJsonRpcResponse=function(e,r){(0,i.assertStruct)(e,t.JsonRpcResponseStruct,"Invalid JSON-RPC response",r)},t.isJsonRpcSuccess=function(e){return(0,n.is)(e,t.JsonRpcSuccessStruct)},t.assertIsJsonRpcSuccess=function(e,r){(0,i.assertStruct)(e,t.JsonRpcSuccessStruct,"Invalid JSON-RPC success response",r)},t.isJsonRpcFailure=function(e){return(0,n.is)(e,t.JsonRpcFailureStruct)},t.assertIsJsonRpcFailure=function(e,r){(0,i.assertStruct)(e,t.JsonRpcFailureStruct,"Invalid JSON-RPC failure response",r)},t.isJsonRpcError=function(e){return(0,n.is)(e,t.JsonRpcErrorStruct)},t.assertIsJsonRpcError=function(e,r){(0,i.assertStruct)(e,t.JsonRpcErrorStruct,"Invalid JSON-RPC error",r)},t.getJsonRpcIdValidator=function(e){const{permitEmptyString:t,permitFractions:r,permitNull:n}=Object.assign({permitEmptyString:!0,permitFractions:!1,permitNull:!0},e);return e=>Boolean("number"===typeof e&&(r||Number.isInteger(e))||"string"===typeof e&&(t||e.length>0)||n&&null===e)},t.validateJsonAndGetSize=s},61897:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.createModuleLogger=t.createProjectLogger=void 0;const i=(0,n(r(18392)).default)("metamask");t.createProjectLogger=function(e){return i.extend(e)},t.createModuleLogger=function(e,t){return e.extend(t)}},66814:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateNumberSize=t.calculateStringSize=t.isASCII=t.isPlainObject=t.ESCAPE_CHARACTERS_REGEXP=t.JsonSize=t.hasProperty=t.isObject=t.isNullOrUndefined=t.isNonEmptyArray=void 0,t.isNonEmptyArray=function(e){return Array.isArray(e)&&e.length>0},t.isNullOrUndefined=function(e){return null===e||void 0===e},t.isObject=function(e){return Boolean(e)&&"object"===typeof e&&!Array.isArray(e)};function r(e){return e.charCodeAt(0)<=127}t.hasProperty=(e,t)=>Object.hasOwnProperty.call(e,t),function(e){e[e.Null=4]="Null",e[e.Comma=1]="Comma",e[e.Wrapper=1]="Wrapper",e[e.True=4]="True",e[e.False=5]="False",e[e.Quote=1]="Quote",e[e.Colon=1]="Colon",e[e.Date=24]="Date"}(t.JsonSize||(t.JsonSize={})),t.ESCAPE_CHARACTERS_REGEXP=/"|\\|\n|\r|\t/gu,t.isPlainObject=function(e){if("object"!==typeof e||null===e)return!1;try{let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}catch(t){return!1}},t.isASCII=r,t.calculateStringSize=function(e){var n;return e.split("").reduce(((e,t)=>r(t)?e+1:e+2),0)+(null!==(n=e.match(t.ESCAPE_CHARACTERS_REGEXP))&&void 0!==n?n:[]).length},t.calculateNumberSize=function(e){return e.toString().length}},39944:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hexToBigInt=t.hexToNumber=t.bigIntToHex=t.numberToHex=void 0;const n=r(9909),i=r(81954);t.numberToHex=e=>((0,n.assert)("number"===typeof e,"Value must be a number."),(0,n.assert)(e>=0,"Value must be a non-negative number."),(0,n.assert)(Number.isSafeInteger(e),"Value is not a safe integer. Use `bigIntToHex` instead."),(0,i.add0x)(e.toString(16)));t.bigIntToHex=e=>((0,n.assert)("bigint"===typeof e,"Value must be a bigint."),(0,n.assert)(e>=0,"Value must be a non-negative bigint."),(0,i.add0x)(e.toString(16)));t.hexToNumber=e=>{(0,i.assertIsHexString)(e);const t=parseInt(e,16);return(0,n.assert)(Number.isSafeInteger(t),"Value is not a safe integer. Use `hexToBigInt` instead."),t};t.hexToBigInt=e=>((0,i.assertIsHexString)(e),BigInt((0,i.add0x)(e)))},5374:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},94880:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.timeSince=t.inMilliseconds=t.Duration=void 0,function(e){e[e.Millisecond=1]="Millisecond",e[e.Second=1e3]="Second",e[e.Minute=6e4]="Minute",e[e.Hour=36e5]="Hour",e[e.Day=864e5]="Day",e[e.Week=6048e5]="Week",e[e.Year=31536e6]="Year"}(t.Duration||(t.Duration={}));const r=(e,t)=>{if(!(e=>Number.isInteger(e)&&e>=0)(e))throw new Error(`"${t}" must be a non-negative integer. Received: "${e}".`)};t.inMilliseconds=function(e,t){return r(e,"count"),e*t},t.timeSince=function(e){return r(e,"timestamp"),Date.now()-e}},26927:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.satisfiesVersionRange=t.gtRange=t.gtVersion=t.assertIsSemVerRange=t.assertIsSemVerVersion=t.isValidSemVerRange=t.isValidSemVerVersion=t.VersionRangeStruct=t.VersionStruct=void 0;const n=r(87335),i=r(88858),o=r(9909);t.VersionStruct=(0,i.refine)((0,i.string)(),"Version",(e=>null!==(0,n.valid)(e)||`Expected SemVer version, got "${e}"`)),t.VersionRangeStruct=(0,i.refine)((0,i.string)(),"Version range",(e=>null!==(0,n.validRange)(e)||`Expected SemVer range, got "${e}"`)),t.isValidSemVerVersion=function(e){return(0,i.is)(e,t.VersionStruct)},t.isValidSemVerRange=function(e){return(0,i.is)(e,t.VersionRangeStruct)},t.assertIsSemVerVersion=function(e){(0,o.assertStruct)(e,t.VersionStruct)},t.assertIsSemVerRange=function(e){(0,o.assertStruct)(e,t.VersionRangeStruct)},t.gtVersion=function(e,t){return(0,n.gt)(e,t)},t.gtRange=function(e,t){return(0,n.gtr)(e,t)},t.satisfiesVersionRange=function(e,t){return(0,n.satisfies)(e,t,{includePrerelease:!0})}},46141:function(e,t,r){"use strict";const n=r(30798),i=Symbol("max"),o=Symbol("length"),s=Symbol("lengthCalculator"),a=Symbol("allowStale"),l=Symbol("maxAge"),c=Symbol("dispose"),u=Symbol("noDisposeOnSet"),d=Symbol("lruList"),h=Symbol("cache"),f=Symbol("updateAgeOnGet"),p=()=>1;const g=(e,t,r)=>{const n=e[h].get(t);if(n){const t=n.value;if(m(e,t)){if(y(e,n),!e[a])return}else r&&(e[f]&&(n.value.now=Date.now()),e[d].unshiftNode(n));return t.value}},m=(e,t)=>{if(!t||!t.maxAge&&!e[l])return!1;const r=Date.now()-t.now;return t.maxAge?r>t.maxAge:e[l]&&r>e[l]},v=e=>{if(e[o]>e[i])for(let t=e[d].tail;e[o]>e[i]&&null!==t;){const r=t.prev;y(e,t),t=r}},y=(e,t)=>{if(t){const r=t.value;e[c]&&e[c](r.key,r.value),e[o]-=r.length,e[h].delete(r.key),e[d].removeNode(t)}};class b{constructor(e,t,r,n,i){this.key=e,this.value=t,this.length=r,this.now=n,this.maxAge=i||0}}const w=(e,t,r,n)=>{let i=r.value;m(e,i)&&(y(e,r),e[a]||(i=void 0)),i&&t.call(n,i.value,i.key,e)};e.exports=class{constructor(e){if("number"===typeof e&&(e={max:e}),e||(e={}),e.max&&("number"!==typeof e.max||e.max<0))throw new TypeError("max must be a non-negative number");this[i]=e.max||1/0;const t=e.length||p;if(this[s]="function"!==typeof t?p:t,this[a]=e.stale||!1,e.maxAge&&"number"!==typeof e.maxAge)throw new TypeError("maxAge must be a number");this[l]=e.maxAge||0,this[c]=e.dispose,this[u]=e.noDisposeOnSet||!1,this[f]=e.updateAgeOnGet||!1,this.reset()}set max(e){if("number"!==typeof e||e<0)throw new TypeError("max must be a non-negative number");this[i]=e||1/0,v(this)}get max(){return this[i]}set allowStale(e){this[a]=!!e}get allowStale(){return this[a]}set maxAge(e){if("number"!==typeof e)throw new TypeError("maxAge must be a non-negative number");this[l]=e,v(this)}get maxAge(){return this[l]}set lengthCalculator(e){"function"!==typeof e&&(e=p),e!==this[s]&&(this[s]=e,this[o]=0,this[d].forEach((e=>{e.length=this[s](e.value,e.key),this[o]+=e.length}))),v(this)}get lengthCalculator(){return this[s]}get length(){return this[o]}get itemCount(){return this[d].length}rforEach(e,t){t=t||this;for(let r=this[d].tail;null!==r;){const n=r.prev;w(this,e,r,t),r=n}}forEach(e,t){t=t||this;for(let r=this[d].head;null!==r;){const n=r.next;w(this,e,r,t),r=n}}keys(){return this[d].toArray().map((e=>e.key))}values(){return this[d].toArray().map((e=>e.value))}reset(){this[c]&&this[d]&&this[d].length&&this[d].forEach((e=>this[c](e.key,e.value))),this[h]=new Map,this[d]=new n,this[o]=0}dump(){return this[d].map((e=>!m(this,e)&&{k:e.key,v:e.value,e:e.now+(e.maxAge||0)})).toArray().filter((e=>e))}dumpLru(){return this[d]}set(e,t,r){if((r=r||this[l])&&"number"!==typeof r)throw new TypeError("maxAge must be a number");const n=r?Date.now():0,a=this[s](t,e);if(this[h].has(e)){if(a>this[i])return y(this,this[h].get(e)),!1;const s=this[h].get(e).value;return this[c]&&(this[u]||this[c](e,s.value)),s.now=n,s.maxAge=r,s.value=t,this[o]+=a-s.length,s.length=a,this.get(e),v(this),!0}const f=new b(e,t,a,n,r);return f.length>this[i]?(this[c]&&this[c](e,t),!1):(this[o]+=f.length,this[d].unshift(f),this[h].set(e,this[d].head),v(this),!0)}has(e){if(!this[h].has(e))return!1;const t=this[h].get(e).value;return!m(this,t)}get(e){return g(this,e,!0)}peek(e){return g(this,e,!1)}pop(){const e=this[d].tail;return e?(y(this,e),e.value):null}del(e){y(this,this[h].get(e))}load(e){this.reset();const t=Date.now();for(let r=e.length-1;r>=0;r--){const n=e[r],i=n.e||0;if(0===i)this.set(n.k,n.v);else{const e=i-t;e>0&&this.set(n.k,n.v,e)}}}prune(){this[h].forEach(((e,t)=>g(this,t,!1)))}}},56514:function(e,t,r){const n=Symbol("SemVer ANY");class i{static get ANY(){return n}constructor(e,t){if(t=o(t),e instanceof i){if(e.loose===!!t.loose)return e;e=e.value}c("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===n?this.value="":this.value=this.operator+this.semver.version,c("comp",this)}parse(e){const t=this.options.loose?s[a.COMPARATORLOOSE]:s[a.COMPARATOR],r=e.match(t);if(!r)throw new TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new u(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(c("Comparator.test",e,this.options.loose),this.semver===n||e===n)return!0;if("string"===typeof e)try{e=new u(e,this.options)}catch(t){return!1}return l(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof i))throw new TypeError("a Comparator is required");if(t&&"object"===typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new d(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new d(this.value,t).test(e.semver);const r=(">="===this.operator||">"===this.operator)&&(">="===e.operator||">"===e.operator),n=("<="===this.operator||"<"===this.operator)&&("<="===e.operator||"<"===e.operator),o=this.semver.version===e.semver.version,s=(">="===this.operator||"<="===this.operator)&&(">="===e.operator||"<="===e.operator),a=l(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),c=l(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||n||o&&s||a||c}}e.exports=i;const o=r(45767),{re:s,t:a}=r(27274),l=r(91168),c=r(35274),u=r(86896),d=r(42057)},42057:function(e,t,r){class n{constructor(e,t){if(t=o(t),e instanceof n)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new n(e.raw,t);if(e instanceof s)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split("||").map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${e}`);if(this.set.length>1){const e=this.set[0];if(this.set=this.set.filter((e=>!p(e[0]))),0===this.set.length)this.set=[e];else if(this.set.length>1)for(const t of this.set)if(1===t.length&&g(t[0])){this.set=[t];break}}this.format()}format(){return this.range=this.set.map((e=>e.join(" ").trim())).join("||").trim(),this.range}toString(){return this.range}parseRange(e){e=e.trim();const t=`parseRange:${Object.keys(this.options).join(",")}:${e}`,r=i.get(t);if(r)return r;const n=this.options.loose,o=n?c[u.HYPHENRANGELOOSE]:c[u.HYPHENRANGE];e=e.replace(o,A(this.options.includePrerelease)),a("hyphen replace",e),e=e.replace(c[u.COMPARATORTRIM],d),a("comparator trim",e);let l=(e=(e=(e=e.replace(c[u.TILDETRIM],h)).replace(c[u.CARETTRIM],f)).split(/\s+/).join(" ")).split(" ").map((e=>v(e,this.options))).join(" ").split(/\s+/).map((e=>C(e,this.options)));n&&(l=l.filter((e=>(a("loose invalid filter",e,this.options),!!e.match(c[u.COMPARATORLOOSE]))))),a("range list",l);const g=new Map,m=l.map((e=>new s(e,this.options)));for(const i of m){if(p(i))return[i];g.set(i.value,i)}g.size>1&&g.has("")&&g.delete("");const y=[...g.values()];return i.set(t,y),y}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Range is required");return this.set.some((r=>m(r,t)&&e.set.some((e=>m(e,t)&&r.every((r=>e.every((e=>r.intersects(e,t)))))))))}test(e){if(!e)return!1;if("string"===typeof e)try{e=new l(e,this.options)}catch(t){return!1}for(let r=0;r<this.set.length;r++)if(P(this.set[r],e,this.options))return!0;return!1}}e.exports=n;const i=new(r(46141))({max:1e3}),o=r(45767),s=r(56514),a=r(35274),l=r(86896),{re:c,t:u,comparatorTrimReplace:d,tildeTrimReplace:h,caretTrimReplace:f}=r(27274),p=e=>"<0.0.0-0"===e.value,g=e=>""===e.value,m=(e,t)=>{let r=!0;const n=e.slice();let i=n.pop();for(;r&&n.length;)r=n.every((e=>i.intersects(e,t))),i=n.pop();return r},v=(e,t)=>(a("comp",e,t),e=x(e,t),a("caret",e),e=b(e,t),a("tildes",e),e=E(e,t),a("xrange",e),e=k(e,t),a("stars",e),e),y=e=>!e||"x"===e.toLowerCase()||"*"===e,b=(e,t)=>e.trim().split(/\s+/).map((e=>w(e,t))).join(" "),w=(e,t)=>{const r=t.loose?c[u.TILDELOOSE]:c[u.TILDE];return e.replace(r,((t,r,n,i,o)=>{let s;return a("tilde",e,t,r,n,i,o),y(r)?s="":y(n)?s=`>=${r}.0.0 <${+r+1}.0.0-0`:y(i)?s=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:o?(a("replaceTilde pr",o),s=`>=${r}.${n}.${i}-${o} <${r}.${+n+1}.0-0`):s=`>=${r}.${n}.${i} <${r}.${+n+1}.0-0`,a("tilde return",s),s}))},x=(e,t)=>e.trim().split(/\s+/).map((e=>_(e,t))).join(" "),_=(e,t)=>{a("caret",e,t);const r=t.loose?c[u.CARETLOOSE]:c[u.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,((t,r,i,o,s)=>{let l;return a("caret",e,t,r,i,o,s),y(r)?l="":y(i)?l=`>=${r}.0.0${n} <${+r+1}.0.0-0`:y(o)?l="0"===r?`>=${r}.${i}.0${n} <${r}.${+i+1}.0-0`:`>=${r}.${i}.0${n} <${+r+1}.0.0-0`:s?(a("replaceCaret pr",s),l="0"===r?"0"===i?`>=${r}.${i}.${o}-${s} <${r}.${i}.${+o+1}-0`:`>=${r}.${i}.${o}-${s} <${r}.${+i+1}.0-0`:`>=${r}.${i}.${o}-${s} <${+r+1}.0.0-0`):(a("no pr"),l="0"===r?"0"===i?`>=${r}.${i}.${o}${n} <${r}.${i}.${+o+1}-0`:`>=${r}.${i}.${o}${n} <${r}.${+i+1}.0-0`:`>=${r}.${i}.${o} <${+r+1}.0.0-0`),a("caret return",l),l}))},E=(e,t)=>(a("replaceXRanges",e,t),e.split(/\s+/).map((e=>S(e,t))).join(" ")),S=(e,t)=>{e=e.trim();const r=t.loose?c[u.XRANGELOOSE]:c[u.XRANGE];return e.replace(r,((r,n,i,o,s,l)=>{a("xRange",e,r,n,i,o,s,l);const c=y(i),u=c||y(o),d=u||y(s),h=d;return"="===n&&h&&(n=""),l=t.includePrerelease?"-0":"",c?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&h?(u&&(o=0),s=0,">"===n?(n=">=",u?(i=+i+1,o=0,s=0):(o=+o+1,s=0)):"<="===n&&(n="<",u?i=+i+1:o=+o+1),"<"===n&&(l="-0"),r=`${n+i}.${o}.${s}${l}`):u?r=`>=${i}.0.0${l} <${+i+1}.0.0-0`:d&&(r=`>=${i}.${o}.0${l} <${i}.${+o+1}.0-0`),a("xRange return",r),r}))},k=(e,t)=>(a("replaceStars",e,t),e.trim().replace(c[u.STAR],"")),C=(e,t)=>(a("replaceGTE0",e,t),e.trim().replace(c[t.includePrerelease?u.GTE0PRE:u.GTE0],"")),A=e=>(t,r,n,i,o,s,a,l,c,u,d,h,f)=>`${r=y(n)?"":y(i)?`>=${n}.0.0${e?"-0":""}`:y(o)?`>=${n}.${i}.0${e?"-0":""}`:s?`>=${r}`:`>=${r}${e?"-0":""}`} ${l=y(c)?"":y(u)?`<${+c+1}.0.0-0`:y(d)?`<${c}.${+u+1}.0-0`:h?`<=${c}.${u}.${d}-${h}`:e?`<${c}.${u}.${+d+1}-0`:`<=${l}`}`.trim(),P=(e,t,r)=>{for(let n=0;n<e.length;n++)if(!e[n].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(a(e[r].semver),e[r].semver!==s.ANY&&e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}},86896:function(e,t,r){const n=r(35274),{MAX_LENGTH:i,MAX_SAFE_INTEGER:o}=r(35237),{re:s,t:a}=r(27274),l=r(45767),{compareIdentifiers:c}=r(28275);class u{constructor(e,t){if(t=l(t),e instanceof u){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!==typeof e)throw new TypeError(`Invalid Version: ${e}`);if(e.length>i)throw new TypeError(`version is longer than ${i} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?s[a.LOOSE]:s[a.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>o||this.major<0)throw new TypeError("Invalid major version");if(this.minor>o||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>o||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<o)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof u)){if("string"===typeof e&&e===this.version)return 0;e=new u(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof u||(e=new u(e,this.options)),c(this.major,e.major)||c(this.minor,e.minor)||c(this.patch,e.patch)}comparePre(e){if(e instanceof u||(e=new u(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],i=e.prerelease[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return c(r,i)}while(++t)}compareBuild(e){e instanceof u||(e=new u(e,this.options));let t=0;do{const r=this.build[t],i=e.build[t];if(n("prerelease compare",t,r,i),void 0===r&&void 0===i)return 0;if(void 0===i)return 1;if(void 0===r)return-1;if(r!==i)return c(r,i)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"===typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(0===c(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}e.exports=u},31497:function(e,t,r){const n=r(29241);e.exports=(e,t)=>{const r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},91168:function(e,t,r){const n=r(85217),i=r(62058),o=r(65362),s=r(26872),a=r(32555),l=r(24472);e.exports=(e,t,r,c)=>{switch(t){case"===":return"object"===typeof e&&(e=e.version),"object"===typeof r&&(r=r.version),e===r;case"!==":return"object"===typeof e&&(e=e.version),"object"===typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return n(e,r,c);case"!=":return i(e,r,c);case">":return o(e,r,c);case">=":return s(e,r,c);case"<":return a(e,r,c);case"<=":return l(e,r,c);default:throw new TypeError(`Invalid operator: ${t}`)}}},29963:function(e,t,r){const n=r(86896),i=r(29241),{re:o,t:s}=r(27274);e.exports=(e,t)=>{if(e instanceof n)return e;if("number"===typeof e&&(e=String(e)),"string"!==typeof e)return null;let r=null;if((t=t||{}).rtl){let t;for(;(t=o[s.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&t.index+t[0].length===r.index+r[0].length||(r=t),o[s.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;o[s.COERCERTL].lastIndex=-1}else r=e.match(o[s.COERCE]);return null===r?null:i(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)}},61782:function(e,t,r){const n=r(86896);e.exports=(e,t,r)=>{const i=new n(e,r),o=new n(t,r);return i.compare(o)||i.compareBuild(o)}},80869:function(e,t,r){const n=r(43002);e.exports=(e,t)=>n(e,t,!0)},43002:function(e,t,r){const n=r(86896);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},97335:function(e,t,r){const n=r(29241),i=r(85217);e.exports=(e,t)=>{if(i(e,t))return null;{const r=n(e),i=n(t),o=r.prerelease.length||i.prerelease.length,s=o?"pre":"",a=o?"prerelease":"";for(const e in r)if(("major"===e||"minor"===e||"patch"===e)&&r[e]!==i[e])return s+e;return a}}},85217:function(e,t,r){const n=r(43002);e.exports=(e,t,r)=>0===n(e,t,r)},65362:function(e,t,r){const n=r(43002);e.exports=(e,t,r)=>n(e,t,r)>0},26872:function(e,t,r){const n=r(43002);e.exports=(e,t,r)=>n(e,t,r)>=0},92444:function(e,t,r){const n=r(86896);e.exports=(e,t,r,i)=>{"string"===typeof r&&(i=r,r=void 0);try{return new n(e instanceof n?e.version:e,r).inc(t,i).version}catch(o){return null}}},32555:function(e,t,r){const n=r(43002);e.exports=(e,t,r)=>n(e,t,r)<0},24472:function(e,t,r){const n=r(43002);e.exports=(e,t,r)=>n(e,t,r)<=0},7637:function(e,t,r){const n=r(86896);e.exports=(e,t)=>new n(e,t).major},3522:function(e,t,r){const n=r(86896);e.exports=(e,t)=>new n(e,t).minor},62058:function(e,t,r){const n=r(43002);e.exports=(e,t,r)=>0!==n(e,t,r)},29241:function(e,t,r){const{MAX_LENGTH:n}=r(35237),{re:i,t:o}=r(27274),s=r(86896),a=r(45767);e.exports=(e,t)=>{if(t=a(t),e instanceof s)return e;if("string"!==typeof e)return null;if(e.length>n)return null;if(!(t.loose?i[o.LOOSE]:i[o.FULL]).test(e))return null;try{return new s(e,t)}catch(r){return null}}},27446:function(e,t,r){const n=r(86896);e.exports=(e,t)=>new n(e,t).patch},40810:function(e,t,r){const n=r(29241);e.exports=(e,t)=>{const r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}},98186:function(e,t,r){const n=r(43002);e.exports=(e,t,r)=>n(t,e,r)},86123:function(e,t,r){const n=r(61782);e.exports=(e,t)=>e.sort(((e,r)=>n(r,e,t)))},14901:function(e,t,r){const n=r(42057);e.exports=(e,t,r)=>{try{t=new n(t,r)}catch(i){return!1}return t.test(e)}},81953:function(e,t,r){const n=r(61782);e.exports=(e,t)=>e.sort(((e,r)=>n(e,r,t)))},86010:function(e,t,r){const n=r(29241);e.exports=(e,t)=>{const r=n(e,t);return r?r.version:null}},87335:function(e,t,r){const n=r(27274),i=r(35237),o=r(86896),s=r(28275),a=r(29241),l=r(86010),c=r(31497),u=r(92444),d=r(97335),h=r(7637),f=r(3522),p=r(27446),g=r(40810),m=r(43002),v=r(98186),y=r(80869),b=r(61782),w=r(81953),x=r(86123),_=r(65362),E=r(32555),S=r(85217),k=r(62058),C=r(26872),A=r(24472),P=r(91168),I=r(29963),R=r(56514),O=r(42057),T=r(14901),M=r(16174),N=r(49370),j=r(48672),L=r(44230),D=r(3755),$=r(93956),B=r(64394),Z=r(89059),z=r(83778),U=r(91123),F=r(21467);e.exports={parse:a,valid:l,clean:c,inc:u,diff:d,major:h,minor:f,patch:p,prerelease:g,compare:m,rcompare:v,compareLoose:y,compareBuild:b,sort:w,rsort:x,gt:_,lt:E,eq:S,neq:k,gte:C,lte:A,cmp:P,coerce:I,Comparator:R,Range:O,satisfies:T,toComparators:M,maxSatisfying:N,minSatisfying:j,minVersion:L,validRange:D,outside:$,gtr:B,ltr:Z,intersects:z,simplifyRange:U,subset:F,SemVer:o,re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:i.SEMVER_SPEC_VERSION,compareIdentifiers:s.compareIdentifiers,rcompareIdentifiers:s.rcompareIdentifiers}},35237:function(e){const t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:t,MAX_SAFE_COMPONENT_LENGTH:16}},35274:function(e){const t="object"===typeof process&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NODE_DEBUG&&/\bsemver\b/i.test({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NODE_DEBUG)?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return console.error("SEMVER",...t)}:()=>{};e.exports=t},28275:function(e){const t=/^[0-9]+$/,r=(e,r)=>{const n=t.test(e),i=t.test(r);return n&&i&&(e=+e,r=+r),e===r?0:n&&!i?-1:i&&!n?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},45767:function(e){const t=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!==typeof e?{loose:!0}:t.filter((t=>e[t])).reduce(((e,t)=>(e[t]=!0,e)),{}):{}},27274:function(e,t,r){const{MAX_SAFE_COMPONENT_LENGTH:n}=r(35237),i=r(35274),o=(t=e.exports={}).re=[],s=t.src=[],a=t.t={};let l=0;const c=(e,t,r)=>{const n=l++;i(e,n,t),a[e]=n,s[n]=t,o[n]=new RegExp(t,r?"g":void 0)};c("NUMERICIDENTIFIER","0|[1-9]\\d*"),c("NUMERICIDENTIFIERLOOSE","[0-9]+"),c("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),c("MAINVERSION",`(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})\\.(${s[a.NUMERICIDENTIFIER]})`),c("MAINVERSIONLOOSE",`(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})\\.(${s[a.NUMERICIDENTIFIERLOOSE]})`),c("PRERELEASEIDENTIFIER",`(?:${s[a.NUMERICIDENTIFIER]}|${s[a.NONNUMERICIDENTIFIER]})`),c("PRERELEASEIDENTIFIERLOOSE",`(?:${s[a.NUMERICIDENTIFIERLOOSE]}|${s[a.NONNUMERICIDENTIFIER]})`),c("PRERELEASE",`(?:-(${s[a.PRERELEASEIDENTIFIER]}(?:\\.${s[a.PRERELEASEIDENTIFIER]})*))`),c("PRERELEASELOOSE",`(?:-?(${s[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[a.PRERELEASEIDENTIFIERLOOSE]})*))`),c("BUILDIDENTIFIER","[0-9A-Za-z-]+"),c("BUILD",`(?:\\+(${s[a.BUILDIDENTIFIER]}(?:\\.${s[a.BUILDIDENTIFIER]})*))`),c("FULLPLAIN",`v?${s[a.MAINVERSION]}${s[a.PRERELEASE]}?${s[a.BUILD]}?`),c("FULL",`^${s[a.FULLPLAIN]}$`),c("LOOSEPLAIN",`[v=\\s]*${s[a.MAINVERSIONLOOSE]}${s[a.PRERELEASELOOSE]}?${s[a.BUILD]}?`),c("LOOSE",`^${s[a.LOOSEPLAIN]}$`),c("GTLT","((?:<|>)?=?)"),c("XRANGEIDENTIFIERLOOSE",`${s[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),c("XRANGEIDENTIFIER",`${s[a.NUMERICIDENTIFIER]}|x|X|\\*`),c("XRANGEPLAIN",`[v=\\s]*(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:\\.(${s[a.XRANGEIDENTIFIER]})(?:${s[a.PRERELEASE]})?${s[a.BUILD]}?)?)?`),c("XRANGEPLAINLOOSE",`[v=\\s]*(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[a.XRANGEIDENTIFIERLOOSE]})(?:${s[a.PRERELEASELOOSE]})?${s[a.BUILD]}?)?)?`),c("XRANGE",`^${s[a.GTLT]}\\s*${s[a.XRANGEPLAIN]}$`),c("XRANGELOOSE",`^${s[a.GTLT]}\\s*${s[a.XRANGEPLAINLOOSE]}$`),c("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),c("COERCERTL",s[a.COERCE],!0),c("LONETILDE","(?:~>?)"),c("TILDETRIM",`(\\s*)${s[a.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",c("TILDE",`^${s[a.LONETILDE]}${s[a.XRANGEPLAIN]}$`),c("TILDELOOSE",`^${s[a.LONETILDE]}${s[a.XRANGEPLAINLOOSE]}$`),c("LONECARET","(?:\\^)"),c("CARETTRIM",`(\\s*)${s[a.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",c("CARET",`^${s[a.LONECARET]}${s[a.XRANGEPLAIN]}$`),c("CARETLOOSE",`^${s[a.LONECARET]}${s[a.XRANGEPLAINLOOSE]}$`),c("COMPARATORLOOSE",`^${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]})$|^$`),c("COMPARATOR",`^${s[a.GTLT]}\\s*(${s[a.FULLPLAIN]})$|^$`),c("COMPARATORTRIM",`(\\s*)${s[a.GTLT]}\\s*(${s[a.LOOSEPLAIN]}|${s[a.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",c("HYPHENRANGE",`^\\s*(${s[a.XRANGEPLAIN]})\\s+-\\s+(${s[a.XRANGEPLAIN]})\\s*$`),c("HYPHENRANGELOOSE",`^\\s*(${s[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[a.XRANGEPLAINLOOSE]})\\s*$`),c("STAR","(<|>)?=?\\s*\\*"),c("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),c("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},64394:function(e,t,r){const n=r(93956);e.exports=(e,t,r)=>n(e,t,">",r)},83778:function(e,t,r){const n=r(42057);e.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t))},89059:function(e,t,r){const n=r(93956);e.exports=(e,t,r)=>n(e,t,"<",r)},49370:function(e,t,r){const n=r(86896),i=r(42057);e.exports=(e,t,r)=>{let o=null,s=null,a=null;try{a=new i(t,r)}catch(l){return null}return e.forEach((e=>{a.test(e)&&(o&&-1!==s.compare(e)||(o=e,s=new n(o,r)))})),o}},48672:function(e,t,r){const n=r(86896),i=r(42057);e.exports=(e,t,r)=>{let o=null,s=null,a=null;try{a=new i(t,r)}catch(l){return null}return e.forEach((e=>{a.test(e)&&(o&&1!==s.compare(e)||(o=e,s=new n(o,r)))})),o}},44230:function(e,t,r){const n=r(86896),i=r(42057),o=r(65362);e.exports=(e,t)=>{e=new i(e,t);let r=new n("0.0.0");if(e.test(r))return r;if(r=new n("0.0.0-0"),e.test(r))return r;r=null;for(let i=0;i<e.set.length;++i){const t=e.set[i];let s=null;t.forEach((e=>{const t=new n(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":s&&!o(t,s)||(s=t);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${e.operator}`)}})),!s||r&&!o(r,s)||(r=s)}return r&&e.test(r)?r:null}},93956:function(e,t,r){const n=r(86896),i=r(56514),{ANY:o}=i,s=r(42057),a=r(14901),l=r(65362),c=r(32555),u=r(24472),d=r(26872);e.exports=(e,t,r,h)=>{let f,p,g,m,v;switch(e=new n(e,h),t=new s(t,h),r){case">":f=l,p=u,g=c,m=">",v=">=";break;case"<":f=c,p=d,g=l,m="<",v="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,h))return!1;for(let n=0;n<t.set.length;++n){const r=t.set[n];let s=null,a=null;if(r.forEach((e=>{e.semver===o&&(e=new i(">=0.0.0")),s=s||e,a=a||e,f(e.semver,s.semver,h)?s=e:g(e.semver,a.semver,h)&&(a=e)})),s.operator===m||s.operator===v)return!1;if((!a.operator||a.operator===m)&&p(e,a.semver))return!1;if(a.operator===v&&g(e,a.semver))return!1}return!0}},91123:function(e,t,r){const n=r(14901),i=r(43002);e.exports=(e,t,r)=>{const o=[];let s=null,a=null;const l=e.sort(((e,t)=>i(e,t,r)));for(const i of l){n(i,t,r)?(a=i,s||(s=i)):(a&&o.push([s,a]),a=null,s=null)}s&&o.push([s,null]);const c=[];for(const[n,i]of o)n===i?c.push(n):i||n!==l[0]?i?n===l[0]?c.push(`<=${i}`):c.push(`${n} - ${i}`):c.push(`>=${n}`):c.push("*");const u=c.join(" || "),d="string"===typeof t.raw?t.raw:String(t);return u.length<d.length?u:t}},21467:function(e,t,r){const n=r(42057),i=r(56514),{ANY:o}=i,s=r(14901),a=r(43002),l=(e,t,r)=>{if(e===t)return!0;if(1===e.length&&e[0].semver===o){if(1===t.length&&t[0].semver===o)return!0;e=r.includePrerelease?[new i(">=0.0.0-0")]:[new i(">=0.0.0")]}if(1===t.length&&t[0].semver===o){if(r.includePrerelease)return!0;t=[new i(">=0.0.0")]}const n=new Set;let l,d,h,f,p,g,m;for(const i of e)">"===i.operator||">="===i.operator?l=c(l,i,r):"<"===i.operator||"<="===i.operator?d=u(d,i,r):n.add(i.semver);if(n.size>1)return null;if(l&&d){if(h=a(l.semver,d.semver,r),h>0)return null;if(0===h&&(">="!==l.operator||"<="!==d.operator))return null}for(const i of n){if(l&&!s(i,String(l),r))return null;if(d&&!s(i,String(d),r))return null;for(const e of t)if(!s(i,String(e),r))return!1;return!0}let v=!(!d||r.includePrerelease||!d.semver.prerelease.length)&&d.semver,y=!(!l||r.includePrerelease||!l.semver.prerelease.length)&&l.semver;v&&1===v.prerelease.length&&"<"===d.operator&&0===v.prerelease[0]&&(v=!1);for(const i of t){if(m=m||">"===i.operator||">="===i.operator,g=g||"<"===i.operator||"<="===i.operator,l)if(y&&i.semver.prerelease&&i.semver.prerelease.length&&i.semver.major===y.major&&i.semver.minor===y.minor&&i.semver.patch===y.patch&&(y=!1),">"===i.operator||">="===i.operator){if(f=c(l,i,r),f===i&&f!==l)return!1}else if(">="===l.operator&&!s(l.semver,String(i),r))return!1;if(d)if(v&&i.semver.prerelease&&i.semver.prerelease.length&&i.semver.major===v.major&&i.semver.minor===v.minor&&i.semver.patch===v.patch&&(v=!1),"<"===i.operator||"<="===i.operator){if(p=u(d,i,r),p===i&&p!==d)return!1}else if("<="===d.operator&&!s(d.semver,String(i),r))return!1;if(!i.operator&&(d||l)&&0!==h)return!1}return!(l&&g&&!d&&0!==h)&&(!(d&&m&&!l&&0!==h)&&(!y&&!v))},c=(e,t,r)=>{if(!e)return t;const n=a(e.semver,t.semver,r);return n>0?e:n<0||">"===t.operator&&">="===e.operator?t:e},u=(e,t,r)=>{if(!e)return t;const n=a(e.semver,t.semver,r);return n<0?e:n>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e===t)return!0;e=new n(e,r),t=new n(t,r);let i=!1;e:for(const n of e.set){for(const e of t.set){const t=l(n,e,r);if(i=i||null!==t,t)continue e}if(i)return!1}return!0}},16174:function(e,t,r){const n=r(42057);e.exports=(e,t)=>new n(e,t).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")))},3755:function(e,t,r){const n=r(42057);e.exports=(e,t)=>{try{return new n(e,t).range||"*"}catch(r){return null}}},12576:function(e){"use strict";e.exports=function(e){e.prototype[Symbol.iterator]=function*(){for(let e=this.head;e;e=e.next)yield e.value}}},30798:function(e,t,r){"use strict";function n(e){var t=this;if(t instanceof n||(t=new n),t.tail=null,t.head=null,t.length=0,e&&"function"===typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var r=0,i=arguments.length;r<i;r++)t.push(arguments[r]);return t}function i(e,t,r){var n=t===e.head?new a(r,null,t,e):new a(r,t,t.next,e);return null===n.next&&(e.tail=n),null===n.prev&&(e.head=n),e.length++,n}function o(e,t){e.tail=new a(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function s(e,t){e.head=new a(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function a(e,t,r,n){if(!(this instanceof a))return new a(e,t,r,n);this.list=n,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,r?(r.prev=this,this.next=r):this.next=null}e.exports=n,n.Node=a,n.create=n,n.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,r=e.prev;return t&&(t.prev=r),r&&(r.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=r),e.list.length--,e.next=null,e.prev=null,e.list=null,t},n.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},n.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},n.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)o(this,arguments[e]);return this.length},n.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)s(this,arguments[e]);return this.length},n.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},n.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},n.prototype.forEach=function(e,t){t=t||this;for(var r=this.head,n=0;null!==r;n++)e.call(t,r.value,n,this),r=r.next},n.prototype.forEachReverse=function(e,t){t=t||this;for(var r=this.tail,n=this.length-1;null!==r;n--)e.call(t,r.value,n,this),r=r.prev},n.prototype.get=function(e){for(var t=0,r=this.head;null!==r&&t<e;t++)r=r.next;if(t===e&&null!==r)return r.value},n.prototype.getReverse=function(e){for(var t=0,r=this.tail;null!==r&&t<e;t++)r=r.prev;if(t===e&&null!==r)return r.value},n.prototype.map=function(e,t){t=t||this;for(var r=new n,i=this.head;null!==i;)r.push(e.call(t,i.value,this)),i=i.next;return r},n.prototype.mapReverse=function(e,t){t=t||this;for(var r=new n,i=this.tail;null!==i;)r.push(e.call(t,i.value,this)),i=i.prev;return r},n.prototype.reduce=function(e,t){var r,n=this.head;if(arguments.length>1)r=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");n=this.head.next,r=this.head.value}for(var i=0;null!==n;i++)r=e(r,n.value,i),n=n.next;return r},n.prototype.reduceReverse=function(e,t){var r,n=this.tail;if(arguments.length>1)r=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");n=this.tail.prev,r=this.tail.value}for(var i=this.length-1;null!==n;i--)r=e(r,n.value,i),n=n.prev;return r},n.prototype.toArray=function(){for(var e=new Array(this.length),t=0,r=this.head;null!==r;t++)e[t]=r.value,r=r.next;return e},n.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,r=this.tail;null!==r;t++)e[t]=r.value,r=r.prev;return e},n.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new n;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var i=0,o=this.head;null!==o&&i<e;i++)o=o.next;for(;null!==o&&i<t;i++,o=o.next)r.push(o.value);return r},n.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var r=new n;if(t<e||t<0)return r;e<0&&(e=0),t>this.length&&(t=this.length);for(var i=this.length,o=this.tail;null!==o&&i>t;i--)o=o.prev;for(;null!==o&&i>e;i--,o=o.prev)r.push(o.value);return r},n.prototype.splice=function(e,t){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var r=0,n=this.head;null!==n&&r<e;r++)n=n.next;var o=[];for(r=0;n&&r<t;r++)o.push(n.value),n=this.removeNode(n);null===n&&(n=this.tail),n!==this.head&&n!==this.tail&&(n=n.prev);for(r=0;r<(arguments.length<=2?0:arguments.length-2);r++)n=i(this,n,r+2<2||arguments.length<=r+2?void 0:arguments[r+2]);return o},n.prototype.reverse=function(){for(var e=this.head,t=this.tail,r=e;null!==r;r=r.prev){var n=r.prev;r.prev=r.next,r.next=n}return this.head=t,this.tail=e,this};try{r(12576)(n)}catch(l){}},96174:function(e,t,r){"use strict";var n=r(72791),i=r(54164),o=r(47563),s=r(75721),a=r(62971),l=r(80184);const c=n.forwardRef((function(e,t){const{children:r,container:c,disablePortal:u=!1}=e,[d,h]=n.useState(null),f=(0,o.Z)(n.isValidElement(r)?r.ref:null,t);if((0,s.Z)((()=>{u||h(function(e){return"function"===typeof e?e():e}(c)||document.body)}),[c,u]),(0,s.Z)((()=>{if(d&&!u)return(0,a.Z)(t,d),()=>{(0,a.Z)(t,null)}}),[t,d,u]),u){if(n.isValidElement(r)){const e={ref:f};return n.cloneElement(r,e)}return(0,l.jsx)(n.Fragment,{children:r})}return(0,l.jsx)(n.Fragment,{children:d?i.createPortal(r,d):d})}));t.Z=c},90183:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(87462),i=r(20627);function o(e,t,r){return void 0===e||(0,i.Z)(e)?t:(0,n.Z)({},t,{ownerState:(0,n.Z)({},t.ownerState,r)})}},20627:function(e,t){"use strict";t.Z=function(e){return"string"===typeof e}},71503:function(e,t,r){"use strict";function n(e,t){return"function"===typeof e?e(t):e}r.d(t,{Z:function(){return n}})},57271:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(87462),i=r(63366),o=r(47563),s=r(90183),a=r(28182);function l(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"===typeof e[t]))).forEach((r=>{t[r]=e[r]})),t}function c(e){const{getSlotProps:t,additionalProps:r,externalSlotProps:i,externalForwardedProps:o,className:s}=e;if(!t){const e=(0,a.default)(null==o?void 0:o.className,null==i?void 0:i.className,s,null==r?void 0:r.className),t=(0,n.Z)({},null==r?void 0:r.style,null==o?void 0:o.style,null==i?void 0:i.style),l=(0,n.Z)({},r,o,i);return e.length>0&&(l.className=e),Object.keys(t).length>0&&(l.style=t),{props:l,internalRef:void 0}}const c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};const r={};return Object.keys(e).filter((r=>r.match(/^on[A-Z]/)&&"function"===typeof e[r]&&!t.includes(r))).forEach((t=>{r[t]=e[t]})),r}((0,n.Z)({},o,i)),u=l(i),d=l(o),h=t(c),f=(0,a.default)(null==h?void 0:h.className,null==r?void 0:r.className,s,null==o?void 0:o.className,null==i?void 0:i.className),p=(0,n.Z)({},null==h?void 0:h.style,null==r?void 0:r.style,null==o?void 0:o.style,null==i?void 0:i.style),g=(0,n.Z)({},h,r,d,u);return f.length>0&&(g.className=f),Object.keys(p).length>0&&(g.style=p),{props:g,internalRef:h.ref}}var u=r(71503);const d=["elementType","externalSlotProps","ownerState"];function h(e){var t;const{elementType:r,externalSlotProps:a,ownerState:l}=e,h=(0,i.Z)(e,d),f=(0,u.Z)(a,l),{props:p,internalRef:g}=c((0,n.Z)({},h,{externalSlotProps:f})),m=(0,o.Z)(g,null==f?void 0:f.ref,null==(t=e.additionalProps)?void 0:t.ref);return(0,s.Z)(r,(0,n.Z)({},p,{ref:m}),l)}},95159:function(e,t,r){"use strict";var n=r(64836);t.Z=void 0;var i=n(r(45649)),o=r(80184),s=(0,i.default)([(0,o.jsx)("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"},"0"),(0,o.jsx)("path",{d:"M7 5v4H4V5h3m13 0v4h-3V5h3m0 10v4h-3v-4h3",opacity:".3"},"1")],"AccountTreeTwoTone");t.Z=s},37541:function(e,t,r){"use strict";var n=r(64836);t.Z=void 0;var i=n(r(45649)),o=r(80184),s=(0,i.default)((0,o.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.Z=s},25463:function(e,t,r){"use strict";var n=r(64836);t.Z=void 0;var i=n(r(45649)),o=r(80184),s=(0,i.default)([(0,o.jsx)("path",{d:"M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"},"0"),(0,o.jsx)("path",{d:"M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z",opacity:".3"},"1")],"HomeTwoTone");t.Z=s},45649:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(28610)},93044:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(47630),c=r(93736),u=r(76189),d=r(80184),h=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=r(75878),p=r(21217);function g(e){return(0,p.Z)("MuiAvatar",e)}(0,f.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const m=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],v=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),y=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,l.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var w=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:l,children:u,className:h,component:f="div",imgProps:p,sizes:w,src:x,srcSet:_,variant:E="circular"}=r,S=(0,n.Z)(r,m);let k=null;const C=function(e){let{crossOrigin:t,referrerPolicy:r,src:n,srcSet:i}=e;const[s,a]=o.useState(!1);return o.useEffect((()=>{if(!n&&!i)return;a(!1);let e=!0;const o=new Image;return o.onload=()=>{e&&a("loaded")},o.onerror=()=>{e&&a("error")},o.crossOrigin=t,o.referrerPolicy=r,o.src=n,i&&(o.srcset=i),()=>{e=!1}}),[t,r,n,i]),s}((0,i.Z)({},p,{src:x,srcSet:_})),A=x||_,P=A&&"error"!==C,I=(0,i.Z)({},r,{colorDefault:!P,component:f,variant:E}),R=(e=>{const{classes:t,variant:r,colorDefault:n}=e,i={root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,a.Z)(i,g,t)})(I);return k=P?(0,d.jsx)(y,(0,i.Z)({alt:l,src:x,srcSet:_,sizes:w,ownerState:I,className:R.img},p)):null!=u?u:A&&l?l[0]:(0,d.jsx)(b,{className:R.fallback}),(0,d.jsx)(v,(0,i.Z)({as:f,ownerState:I,className:(0,s.default)(R.root,h),ref:t},S,{children:k}))}))},52739:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(47630),c=r(93736),u=r(60627),d=r(75878),h=r(21217);function f(e){return(0,h.Z)("MuiBackdrop",e)}(0,d.Z)("MuiBackdrop",["root","invisible"]);var p=r(80184);const g=["children","component","components","componentsProps","className","invisible","open","slotProps","slots","transitionDuration","TransitionComponent"],m=(0,l.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.invisible&&t.invisible]}})((e=>{let{ownerState:t}=e;return(0,i.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},t.invisible&&{backgroundColor:"transparent"})}));var v=o.forwardRef((function(e,t){var r,o,l;const d=(0,c.Z)({props:e,name:"MuiBackdrop"}),{children:h,component:v="div",components:y={},componentsProps:b={},className:w,invisible:x=!1,open:_,slotProps:E={},slots:S={},transitionDuration:k,TransitionComponent:C=u.Z}=d,A=(0,n.Z)(d,g),P=(0,i.Z)({},d,{component:v,invisible:x}),I=(e=>{const{classes:t,invisible:r}=e,n={root:["root",r&&"invisible"]};return(0,a.Z)(n,f,t)})(P),R=null!=(r=E.root)?r:b.root;return(0,p.jsx)(C,(0,i.Z)({in:_,timeout:k},A,{children:(0,p.jsx)(m,(0,i.Z)({"aria-hidden":!0},R,{as:null!=(o=null!=(l=S.root)?l:y.Root)?o:v,className:(0,s.default)(I.root,w,null==R?void 0:R.className),ownerState:(0,i.Z)({},P,null==R?void 0:R.ownerState),classes:I,ref:t,children:h}))}))}))},64554:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(87462),i=r(63366),o=r(72791),s=r(28182),a=r(22421),l=r(60104),c=r(78519),u=r(30418),d=r(80184);const h=["className","component"];var f=r(55902);const p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{defaultTheme:t,defaultClassName:r="MuiBox-root",generateClassName:f}=e,p=(0,a.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.Z),g=o.forwardRef((function(e,o){const a=(0,u.Z)(t),l=(0,c.Z)(e),{className:g,component:m="div"}=l,v=(0,i.Z)(l,h);return(0,d.jsx)(p,(0,n.Z)({as:m,ref:o,className:(0,s.default)(g,f?f(r):r),theme:a},v))}));return g}({defaultTheme:(0,r(78888).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate});var g=p},36151:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(35735),l=r(94419),c=r(12065),u=r(47630),d=r(93736),h=r(50533),f=r(14036),p=r(75878),g=r(21217);function m(e){return(0,g.Z)("MuiButton",e)}var v=(0,p.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var y=o.createContext({}),b=r(80184);const w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),_=(0,u.ZP)(h.Z,{shouldForwardProp:e=>(0,u.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,f.Z)(r.color)}`],t[`size${(0,f.Z)(r.size)}`],t[`${r.variant}Size${(0,f.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth]}})((e=>{let{theme:t,ownerState:r}=e;var n,o;return(0,i.Z)({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,c.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===r.variant&&"inherit"!==r.color&&{backgroundColor:t.vars?`rgba(${t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,c.Fq)(t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===r.variant&&"inherit"!==r.color&&{border:`1px solid ${(t.vars||t).palette[r.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,c.Fq)(t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===r.variant&&{backgroundColor:(t.vars||t).palette.grey.A100,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},"contained"===r.variant&&"inherit"!==r.color&&{backgroundColor:(t.vars||t).palette[r.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[r.color].main}}),"&:active":(0,i.Z)({},"contained"===r.variant&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${v.focusVisible}`]:(0,i.Z)({},"contained"===r.variant&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${v.disabled}`]:(0,i.Z)({color:(t.vars||t).palette.action.disabled},"outlined"===r.variant&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"outlined"===r.variant&&"secondary"===r.color&&{border:`1px solid ${(t.vars||t).palette.action.disabled}`},"contained"===r.variant&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},"text"===r.variant&&{padding:"6px 8px"},"text"===r.variant&&"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main},"outlined"===r.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===r.variant&&"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[r.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(t.palette[r.color].main,.5)}`},"contained"===r.variant&&{color:t.vars?t.vars.palette.text.primary:null==(n=(o=t.palette).getContrastText)?void 0:n.call(o,t.palette.grey[300]),backgroundColor:(t.vars||t).palette.grey[300],boxShadow:(t.vars||t).shadows[2]},"contained"===r.variant&&"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].contrastText,backgroundColor:(t.vars||t).palette[r.color].main},"inherit"===r.color&&{color:"inherit",borderColor:"currentColor"},"small"===r.size&&"text"===r.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===r.size&&"text"===r.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===r.size&&"outlined"===r.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===r.size&&"outlined"===r.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===r.size&&"contained"===r.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===r.size&&"contained"===r.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},r.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:t}=e;return t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${v.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${v.disabled}`]:{boxShadow:"none"}}})),E=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.startIcon,t[`iconSize${(0,f.Z)(r.size)}`]]}})((e=>{let{ownerState:t}=e;return(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},x(t))})),S=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.endIcon,t[`iconSize${(0,f.Z)(r.size)}`]]}})((e=>{let{ownerState:t}=e;return(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},x(t))}));var k=o.forwardRef((function(e,t){const r=o.useContext(y),c=(0,a.Z)(r,e),u=(0,d.Z)({props:c,name:"MuiButton"}),{children:h,color:p="primary",component:g="button",className:v,disabled:x=!1,disableElevation:k=!1,disableFocusRipple:C=!1,endIcon:A,focusVisibleClassName:P,fullWidth:I=!1,size:R="medium",startIcon:O,type:T,variant:M="text"}=u,N=(0,n.Z)(u,w),j=(0,i.Z)({},u,{color:p,component:g,disabled:x,disableElevation:k,disableFocusRipple:C,fullWidth:I,size:R,type:T,variant:M}),L=(e=>{const{color:t,disableElevation:r,fullWidth:n,size:o,variant:s,classes:a}=e,c={root:["root",s,`${s}${(0,f.Z)(t)}`,`size${(0,f.Z)(o)}`,`${s}Size${(0,f.Z)(o)}`,"inherit"===t&&"colorInherit",r&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,f.Z)(o)}`],endIcon:["endIcon",`iconSize${(0,f.Z)(o)}`]},u=(0,l.Z)(c,m,a);return(0,i.Z)({},a,u)})(j),D=O&&(0,b.jsx)(E,{className:L.startIcon,ownerState:j,children:O}),$=A&&(0,b.jsx)(S,{className:L.endIcon,ownerState:j,children:A});return(0,b.jsxs)(_,(0,i.Z)({ownerState:j,className:(0,s.default)(r.className,L.root,v),component:g,disabled:x,focusRipple:!C,focusVisibleClassName:(0,s.default)(L.focusVisible,P),ref:t,type:T},N,{classes:L,children:[D,h,$]}))}))},50533:function(e,t,r){"use strict";r.d(t,{Z:function(){return H}});var n=r(87462),i=r(63366),o=r(72791),s=r(28182),a=r(94419),l=r(47630),c=r(93736),u=r(42071),d=r(89683),h=r(68221);var f=r(51721),p=r(95545);function g(e,t){var r=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){r[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),r}function m(e,t,r){return null!=r[t]?r[t]:e.props[t]}function v(e,t,r){var n=g(e.children),i=function(e,t){function r(r){return r in t?t[r]:e[r]}e=e||{},t=t||{};var n,i=Object.create(null),o=[];for(var s in e)s in t?o.length&&(i[s]=o,o=[]):o.push(s);var a={};for(var l in t){if(i[l])for(n=0;n<i[l].length;n++){var c=i[l][n];a[i[l][n]]=r(c)}a[l]=r(l)}for(n=0;n<o.length;n++)a[o[n]]=r(o[n]);return a}(t,n);return Object.keys(i).forEach((function(s){var a=i[s];if((0,o.isValidElement)(a)){var l=s in t,c=s in n,u=t[s],d=(0,o.isValidElement)(u)&&!u.props.in;!c||l&&!d?c||!l||d?c&&l&&(0,o.isValidElement)(u)&&(i[s]=(0,o.cloneElement)(a,{onExited:r.bind(null,a),in:u.props.in,exit:m(a,"exit",e),enter:m(a,"enter",e)})):i[s]=(0,o.cloneElement)(a,{in:!1}):i[s]=(0,o.cloneElement)(a,{onExited:r.bind(null,a),in:!0,exit:m(a,"exit",e),enter:m(a,"enter",e)})}})),i}var y=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},b=function(e){function t(t,r){var n,i=(n=e.call(this,t,r)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));return n.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},n}(0,f.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var r,n,i=t.children,s=t.handleExited;return{children:t.firstRender?(r=e,n=s,g(r.children,(function(e){return(0,o.cloneElement)(e,{onExited:n.bind(null,e),in:!0,appear:m(e,"appear",r),enter:m(e,"enter",r),exit:m(e,"exit",r)})}))):v(e,i,s),firstRender:!1}},r.handleExited=function(e,t){var r=g(this.props.children);e.key in r||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var r=(0,n.Z)({},t.children);return delete r[e.key],{children:r}})))},r.render=function(){var e=this.props,t=e.component,r=e.childFactory,n=(0,i.Z)(e,["component","childFactory"]),s=this.state.contextValue,a=y(this.state.children).map(r);return delete n.appear,delete n.enter,delete n.exit,null===t?o.createElement(p.Z.Provider,{value:s},a):o.createElement(p.Z.Provider,{value:s},o.createElement(t,n,a))},t}(o.Component);b.propTypes={},b.defaultProps={component:"div",childFactory:function(e){return e}};var w=b,x=r(52554),_=r(80184);var E=function(e){const{className:t,classes:r,pulsate:n=!1,rippleX:i,rippleY:a,rippleSize:l,in:c,onExited:u,timeout:d}=e,[h,f]=o.useState(!1),p=(0,s.default)(t,r.ripple,r.rippleVisible,n&&r.ripplePulsate),g={width:l,height:l,top:-l/2+a,left:-l/2+i},m=(0,s.default)(r.child,h&&r.childLeaving,n&&r.childPulsate);return c||h||f(!0),o.useEffect((()=>{if(!c&&null!=u){const e=setTimeout(u,d);return()=>{clearTimeout(e)}}}),[u,c,d]),(0,_.jsx)("span",{className:p,style:g,children:(0,_.jsx)("span",{className:m})})},S=r(75878);var k=(0,S.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);const C=["center","classes","className"];let A,P,I,R,O=e=>e;const T=(0,x.F4)(A||(A=O`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),M=(0,x.F4)(P||(P=O`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),N=(0,x.F4)(I||(I=O`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),j=(0,l.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),L=(0,l.ZP)(E,{name:"MuiTouchRipple",slot:"Ripple"})(R||(R=O`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),k.rippleVisible,T,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),k.ripplePulsate,(e=>{let{theme:t}=e;return t.transitions.duration.shorter}),k.child,k.childLeaving,M,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),k.childPulsate,N,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut})),D=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTouchRipple"}),{center:a=!1,classes:l={},className:u}=r,d=(0,i.Z)(r,C),[h,f]=o.useState([]),p=o.useRef(0),g=o.useRef(null);o.useEffect((()=>{g.current&&(g.current(),g.current=null)}),[h]);const m=o.useRef(!1),v=o.useRef(null),y=o.useRef(null),b=o.useRef(null);o.useEffect((()=>()=>{clearTimeout(v.current)}),[]);const x=o.useCallback((e=>{const{pulsate:t,rippleX:r,rippleY:n,rippleSize:i,cb:o}=e;f((e=>[...e,(0,_.jsx)(L,{classes:{ripple:(0,s.default)(l.ripple,k.ripple),rippleVisible:(0,s.default)(l.rippleVisible,k.rippleVisible),ripplePulsate:(0,s.default)(l.ripplePulsate,k.ripplePulsate),child:(0,s.default)(l.child,k.child),childLeaving:(0,s.default)(l.childLeaving,k.childLeaving),childPulsate:(0,s.default)(l.childPulsate,k.childPulsate)},timeout:550,pulsate:t,rippleX:r,rippleY:n,rippleSize:i},p.current)])),p.current+=1,g.current=o}),[l]),E=o.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:n=!1,center:i=a||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&m.current)return void(m.current=!1);"touchstart"===(null==e?void 0:e.type)&&(m.current=!0);const s=o?null:b.current,l=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let c,u,d;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)c=Math.round(l.width/2),u=Math.round(l.height/2);else{const{clientX:t,clientY:r}=e.touches&&e.touches.length>0?e.touches[0]:e;c=Math.round(t-l.left),u=Math.round(r-l.top)}if(i)d=Math.sqrt((2*l.width**2+l.height**2)/3),d%2===0&&(d+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-c),c)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-u),u)+2;d=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===y.current&&(y.current=()=>{x({pulsate:n,rippleX:c,rippleY:u,rippleSize:d,cb:r})},v.current=setTimeout((()=>{y.current&&(y.current(),y.current=null)}),80)):x({pulsate:n,rippleX:c,rippleY:u,rippleSize:d,cb:r})}),[a,x]),S=o.useCallback((()=>{E({},{pulsate:!0})}),[E]),A=o.useCallback(((e,t)=>{if(clearTimeout(v.current),"touchend"===(null==e?void 0:e.type)&&y.current)return y.current(),y.current=null,void(v.current=setTimeout((()=>{A(e,t)})));y.current=null,f((e=>e.length>0?e.slice(1):e)),g.current=t}),[]);return o.useImperativeHandle(t,(()=>({pulsate:S,start:E,stop:A})),[S,E,A]),(0,_.jsx)(j,(0,n.Z)({className:(0,s.default)(k.root,l.root,u),ref:b},d,{children:(0,_.jsx)(w,{component:null,exit:!0,children:h})}))}));var $=D,B=r(21217);function Z(e){return(0,B.Z)("MuiButtonBase",e)}var z=(0,S.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const U=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],F=(0,l.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${z.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),W=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:f=!1,children:p,className:g,component:m="button",disabled:v=!1,disableRipple:y=!1,disableTouchRipple:b=!1,focusRipple:w=!1,LinkComponent:x="a",onBlur:E,onClick:S,onContextMenu:k,onDragLeave:C,onFocus:A,onFocusVisible:P,onKeyDown:I,onKeyUp:R,onMouseDown:O,onMouseLeave:T,onMouseUp:M,onTouchEnd:N,onTouchMove:j,onTouchStart:L,tabIndex:D=0,TouchRippleProps:B,touchRippleRef:z,type:W}=r,H=(0,i.Z)(r,U),V=o.useRef(null),q=o.useRef(null),Y=(0,u.Z)(q,z),{isFocusVisibleRef:G,onFocus:K,onBlur:J,ref:Q}=(0,h.Z)(),[X,ee]=o.useState(!1);v&&X&&ee(!1),o.useImperativeHandle(l,(()=>({focusVisible:()=>{ee(!0),V.current.focus()}})),[]);const[te,re]=o.useState(!1);o.useEffect((()=>{re(!0)}),[]);const ne=te&&!y&&!v;function ie(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;return(0,d.Z)((n=>{t&&t(n);return!r&&q.current&&q.current[e](n),!0}))}o.useEffect((()=>{X&&w&&!y&&te&&q.current.pulsate()}),[y,w,X,te]);const oe=ie("start",O),se=ie("stop",k),ae=ie("stop",C),le=ie("stop",M),ce=ie("stop",(e=>{X&&e.preventDefault(),T&&T(e)})),ue=ie("start",L),de=ie("stop",N),he=ie("stop",j),fe=ie("stop",(e=>{J(e),!1===G.current&&ee(!1),E&&E(e)}),!1),pe=(0,d.Z)((e=>{V.current||(V.current=e.currentTarget),K(e),!0===G.current&&(ee(!0),P&&P(e)),A&&A(e)})),ge=()=>{const e=V.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},me=o.useRef(!1),ve=(0,d.Z)((e=>{w&&!me.current&&X&&q.current&&" "===e.key&&(me.current=!0,q.current.stop(e,(()=>{q.current.start(e)}))),e.target===e.currentTarget&&ge()&&" "===e.key&&e.preventDefault(),I&&I(e),e.target===e.currentTarget&&ge()&&"Enter"===e.key&&!v&&(e.preventDefault(),S&&S(e))})),ye=(0,d.Z)((e=>{w&&" "===e.key&&q.current&&X&&!e.defaultPrevented&&(me.current=!1,q.current.stop(e,(()=>{q.current.pulsate(e)}))),R&&R(e),S&&e.target===e.currentTarget&&ge()&&" "===e.key&&!e.defaultPrevented&&S(e)}));let be=m;"button"===be&&(H.href||H.to)&&(be=x);const we={};"button"===be?(we.type=void 0===W?"button":W,we.disabled=v):(H.href||H.to||(we.role="button"),v&&(we["aria-disabled"]=v));const xe=(0,u.Z)(t,Q,V);const _e=(0,n.Z)({},r,{centerRipple:f,component:m,disabled:v,disableRipple:y,disableTouchRipple:b,focusRipple:w,tabIndex:D,focusVisible:X}),Ee=(e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:n,classes:i}=e,o={root:["root",t&&"disabled",r&&"focusVisible"]},s=(0,a.Z)(o,Z,i);return r&&n&&(s.root+=` ${n}`),s})(_e);return(0,_.jsxs)(F,(0,n.Z)({as:be,className:(0,s.default)(Ee.root,g),ownerState:_e,onBlur:fe,onClick:S,onContextMenu:se,onFocus:pe,onKeyDown:ve,onKeyUp:ye,onMouseDown:oe,onMouseLeave:ce,onMouseUp:le,onDragLeave:ae,onTouchEnd:de,onTouchMove:he,onTouchStart:ue,ref:xe,tabIndex:v?-1:D,type:W},we,H,{children:[p,ne?(0,_.jsx)($,(0,n.Z)({ref:Y,center:f},B)):null]}))}));var H=W},57621:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(87462),i=r(63366),o=r(72791),s=r(28182),a=r(94419),l=r(47630),c=r(93736),u=r(35527),d=r(75878),h=r(21217);function f(e){return(0,h.Z)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var p=r(80184);const g=["className","raised"],m=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var v=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,u=(0,i.Z)(r,g),d=(0,n.Z)({},r,{raised:l}),h=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},f,t)})(d);return(0,p.jsx)(m,(0,n.Z)({className:(0,s.default)(h.root,o),elevation:l?8:void 0,ref:t,ownerState:d},u))}))},72363:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(47630),c=r(93736),u=r(75878),d=r(21217);function h(e){return(0,d.Z)("MuiCardActions",e)}(0,u.Z)("MuiCardActions",["root","spacing"]);var f=r(80184);const p=["disableSpacing","className"],g=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,i.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})}));var m=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:o=!1,className:l}=r,u=(0,n.Z)(r,p),d=(0,i.Z)({},r,{disableSpacing:o}),m=(e=>{const{classes:t,disableSpacing:r}=e,n={root:["root",!r&&"spacing"]};return(0,a.Z)(n,h,t)})(d);return(0,f.jsx)(g,(0,i.Z)({className:(0,s.default)(m.root,l),ownerState:d,ref:t},u))}))},39504:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(87462),i=r(63366),o=r(72791),s=r(28182),a=r(94419),l=r(47630),c=r(93736),u=r(75878),d=r(21217);function h(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var f=r(80184);const p=["className","component"],g=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var m=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=r,u=(0,i.Z)(r,p),d=(0,n.Z)({},r,{component:l}),m=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},h,t)})(d);return(0,f.jsx)(g,(0,n.Z)({as:l,className:(0,s.default)(m.root,o),ownerState:d,ref:t},u))}))},9585:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(20890),c=r(93736),u=r(47630),d=r(75878),h=r(21217);function f(e){return(0,h.Z)("MuiCardHeader",e)}var p=(0,d.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),g=r(80184);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,i.Z)({[`& .${p.title}`]:t.title,[`& .${p.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),w=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var x=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:u,className:d,component:h="div",disableTypography:p=!1,subheader:x,subheaderTypographyProps:_,title:E,titleTypographyProps:S}=r,k=(0,n.Z)(r,m),C=(0,i.Z)({},r,{component:h,disableTypography:p}),A=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},f,t)})(C);let P=E;null==P||P.type===l.Z||p||(P=(0,g.jsx)(l.Z,(0,i.Z)({variant:u?"body2":"h5",className:A.title,component:"span",display:"block"},S,{children:P})));let I=x;return null==I||I.type===l.Z||p||(I=(0,g.jsx)(l.Z,(0,i.Z)({variant:u?"body2":"body1",className:A.subheader,color:"text.secondary",component:"span",display:"block"},_,{children:I}))),(0,g.jsxs)(v,(0,i.Z)({className:(0,s.default)(A.root,d),as:h,ref:t,ownerState:C},k,{children:[u&&(0,g.jsx)(y,{className:A.avatar,ownerState:C,children:u}),(0,g.jsxs)(w,{className:A.content,ownerState:C,children:[P,I]}),o&&(0,g.jsx)(b,{className:A.action,ownerState:C,children:o})]}))}))},94721:function(e,t,r){"use strict";var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(12065),c=r(47630),u=r(93736),d=r(90133),h=r(80184);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({},r.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})}),(e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}})}),(e=>{let{ownerState:t}=e;return(0,i.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),g=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===r.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})})),m=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:l,className:c,component:m=(l?"div":"hr"),flexItem:v=!1,light:y=!1,orientation:b="horizontal",role:w=("hr"!==m?"separator":void 0),textAlign:x="center",variant:_="fullWidth"}=r,E=(0,n.Z)(r,f),S=(0,i.Z)({},r,{absolute:o,component:m,flexItem:v,light:y,orientation:b,role:w,textAlign:x,variant:_}),k=(e=>{const{absolute:t,children:r,classes:n,flexItem:i,light:o,orientation:s,textAlign:l,variant:c}=e,u={root:["root",t&&"absolute",c,o&&"light","vertical"===s&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===s&&"withChildrenVertical","right"===l&&"vertical"!==s&&"textAlignRight","left"===l&&"vertical"!==s&&"textAlignLeft"],wrapper:["wrapper","vertical"===s&&"wrapperVertical"]};return(0,a.Z)(u,d.V,n)})(S);return(0,h.jsx)(p,(0,i.Z)({as:m,className:(0,s.default)(k.root,c),role:w,ref:t,ownerState:S},E,{children:l?(0,h.jsx)(g,{className:k.wrapper,ownerState:S,children:l}):null}))}));t.Z=m},90133:function(e,t,r){"use strict";r.d(t,{V:function(){return o}});var n=r(75878),i=r(21217);function o(e){return(0,i.Z)("MuiDivider",e)}const s=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=s},60627:function(e,t,r){"use strict";var n=r(87462),i=r(63366),o=r(72791),s=r(26752),a=r(13967),l=r(4999),c=r(42071),u=r(80184);const d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],h={entering:{opacity:1},entered:{opacity:1}},f=o.forwardRef((function(e,t){const r=(0,a.Z)(),f={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:p,appear:g=!0,children:m,easing:v,in:y,onEnter:b,onEntered:w,onEntering:x,onExit:_,onExited:E,onExiting:S,style:k,timeout:C=f,TransitionComponent:A=s.ZP}=e,P=(0,i.Z)(e,d),I=o.useRef(null),R=(0,c.Z)(I,m.ref,t),O=e=>t=>{if(e){const r=I.current;void 0===t?e(r):e(r,t)}},T=O(x),M=O(((e,t)=>{(0,l.n)(e);const n=(0,l.C)({style:k,timeout:C,easing:v},{mode:"enter"});e.style.webkitTransition=r.transitions.create("opacity",n),e.style.transition=r.transitions.create("opacity",n),b&&b(e,t)})),N=O(w),j=O(S),L=O((e=>{const t=(0,l.C)({style:k,timeout:C,easing:v},{mode:"exit"});e.style.webkitTransition=r.transitions.create("opacity",t),e.style.transition=r.transitions.create("opacity",t),_&&_(e)})),D=O(E);return(0,u.jsx)(A,(0,n.Z)({appear:g,in:y,nodeRef:I,onEnter:M,onEntered:N,onEntering:T,onExit:L,onExited:D,onExiting:j,addEndListener:e=>{p&&p(I.current,e)},timeout:C},P,{children:(e,t)=>o.cloneElement(m,(0,n.Z)({style:(0,n.Z)({opacity:0,visibility:"exited"!==e||y?void 0:"hidden"},h[e],k,m.props.style),ref:R},t))}))}));t.Z=f},14527:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(63366),i=r(87462),o=r(72791),s=r(82466),a=r(94419),l=r(4834),c=r(47630),u=r(93736),d=r(75878),h=r(21217),f=r(55891);function p(e){return(0,h.Z)("MuiFilledInput",e)}var g=(0,i.Z)({},f.Z,(0,d.Z)("MuiFilledInput",["root","underline","input"])),m=r(80184);const v=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],y=(0,c.ZP)(l.Ej,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[...(0,l.Gx)(e,t),!r.disableUnderline&&t.underline]}})((e=>{let{theme:t,ownerState:r}=e;var n;const o="light"===t.palette.mode,s=o?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",a=o?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",l=o?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",c=o?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return(0,i.Z)({position:"relative",backgroundColor:t.vars?t.vars.palette.FilledInput.bg:a,borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),"&:hover":{backgroundColor:t.vars?t.vars.palette.FilledInput.hoverBg:l,"@media (hover: none)":{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:a}},[`&.${g.focused}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.bg:a},[`&.${g.disabled}`]:{backgroundColor:t.vars?t.vars.palette.FilledInput.disabledBg:c}},!r.disableUnderline&&{"&:after":{borderBottom:`2px solid ${null==(n=(t.vars||t).palette[r.color||"primary"])?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${g.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${g.error}`]:{"&:before, &:after":{borderBottomColor:(t.vars||t).palette.error.main}},"&:before":{borderBottom:`1px solid ${t.vars?`rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`:s}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${g.disabled}, .${g.error}):before`]:{borderBottom:`1px solid ${(t.vars||t).palette.text.primary}`},[`&.${g.disabled}:before`]:{borderBottomStyle:"dotted"}},r.startAdornment&&{paddingLeft:12},r.endAdornment&&{paddingRight:12},r.multiline&&(0,i.Z)({padding:"25px 12px 8px"},"small"===r.size&&{paddingTop:21,paddingBottom:4},r.hiddenLabel&&{paddingTop:16,paddingBottom:17}))})),b=(0,c.ZP)(l.rA,{name:"MuiFilledInput",slot:"Input",overridesResolver:l._o})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:"light"===t.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===t.palette.mode?null:"#fff",caretColor:"light"===t.palette.mode?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},t.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[t.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},"small"===r.size&&{paddingTop:21,paddingBottom:4},r.hiddenLabel&&{paddingTop:16,paddingBottom:17},r.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},r.startAdornment&&{paddingLeft:0},r.endAdornment&&{paddingRight:0},r.hiddenLabel&&"small"===r.size&&{paddingTop:8,paddingBottom:9})})),w=o.forwardRef((function(e,t){var r,o,c,d;const h=(0,u.Z)({props:e,name:"MuiFilledInput"}),{components:f={},componentsProps:g,fullWidth:w=!1,inputComponent:x="input",multiline:_=!1,slotProps:E,slots:S={},type:k="text"}=h,C=(0,n.Z)(h,v),A=(0,i.Z)({},h,{fullWidth:w,inputComponent:x,multiline:_,type:k}),P=(e=>{const{classes:t,disableUnderline:r}=e,n={root:["root",!r&&"underline"],input:["input"]},o=(0,a.Z)(n,p,t);return(0,i.Z)({},t,o)})(h),I={root:{ownerState:A},input:{ownerState:A}},R=(null!=E?E:g)?(0,s.Z)(null!=E?E:g,I):I,O=null!=(r=null!=(o=S.root)?o:f.Root)?r:y,T=null!=(c=null!=(d=S.input)?d:f.Input)?c:b;return(0,m.jsx)(l.ZP,(0,i.Z)({slots:{root:O,input:T},componentsProps:R,fullWidth:w,inputComponent:x,multiline:_,ref:t,type:k},C,{classes:P}))}));w.muiName="Input";var x=w},68096:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(93736),c=r(47630),u=r(35470),d=r(14036),h=r(19103),f=r(93840),p=r(75878),g=r(21217);function m(e){return(0,g.Z)("MuiFormControl",e)}(0,p.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var v=r(80184);const y=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],b=(0,c.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return(0,i.Z)({},t.root,t[`margin${(0,d.Z)(r.margin)}`],r.fullWidth&&t.fullWidth)}})((e=>{let{ownerState:t}=e;return(0,i.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===t.margin&&{marginTop:16,marginBottom:8},"dense"===t.margin&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})}));var w=o.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiFormControl"}),{children:c,className:p,color:g="primary",component:w="div",disabled:x=!1,error:_=!1,focused:E,fullWidth:S=!1,hiddenLabel:k=!1,margin:C="none",required:A=!1,size:P="medium",variant:I="outlined"}=r,R=(0,n.Z)(r,y),O=(0,i.Z)({},r,{color:g,component:w,disabled:x,error:_,fullWidth:S,hiddenLabel:k,margin:C,required:A,size:P,variant:I}),T=(e=>{const{classes:t,margin:r,fullWidth:n}=e,i={root:["root","none"!==r&&`margin${(0,d.Z)(r)}`,n&&"fullWidth"]};return(0,a.Z)(i,m,t)})(O),[M,N]=o.useState((()=>{let e=!1;return c&&o.Children.forEach(c,(t=>{if(!(0,h.Z)(t,["Input","Select"]))return;const r=(0,h.Z)(t,["Select"])?t.props.input:t;r&&(0,u.B7)(r.props)&&(e=!0)})),e})),[j,L]=o.useState((()=>{let e=!1;return c&&o.Children.forEach(c,(t=>{(0,h.Z)(t,["Input","Select"])&&(0,u.vd)(t.props,!0)&&(e=!0)})),e})),[D,$]=o.useState(!1);x&&D&&$(!1);const B=void 0===E||x?D:E;let Z;const z=o.useMemo((()=>({adornedStart:M,setAdornedStart:N,color:g,disabled:x,error:_,filled:j,focused:B,fullWidth:S,hiddenLabel:k,size:P,onBlur:()=>{$(!1)},onEmpty:()=>{L(!1)},onFilled:()=>{L(!0)},onFocus:()=>{$(!0)},registerEffect:Z,required:A,variant:I})),[M,g,x,_,j,B,S,k,Z,A,P,I]);return(0,v.jsx)(f.Z.Provider,{value:z,children:(0,v.jsx)(b,(0,i.Z)({as:w,ownerState:O,className:(0,s.default)(T.root,p),ref:t},R,{children:c}))})}))},93840:function(e,t,r){"use strict";const n=r(72791).createContext(void 0);t.Z=n},76147:function(e,t,r){"use strict";function n(e){let{props:t,states:r,muiFormControl:n}=e;return r.reduce(((e,r)=>(e[r]=t[r],n&&"undefined"===typeof t[r]&&(e[r]=n[r]),e)),{})}r.d(t,{Z:function(){return n}})},52930:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(72791),i=r(93840);function o(){return n.useContext(i.Z)}},85523:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(52930),c=r(20890),u=r(14036),d=r(47630),h=r(93736),f=r(75878),p=r(21217);function g(e){return(0,p.Z)("MuiFormControlLabel",e)}var m=(0,f.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),v=r(76147),y=r(80184);const b=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],w=(0,d.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${m.label}`]:t.label},t.root,t[`labelPlacement${(0,u.Z)(r.labelPlacement)}`]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${m.disabled}`]:{cursor:"default"}},"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${m.label}`]:{[`&.${m.disabled}`]:{color:(t.vars||t).palette.text.disabled}}})}));var x=o.forwardRef((function(e,t){var r;const d=(0,h.Z)({props:e,name:"MuiFormControlLabel"}),{className:f,componentsProps:p={},control:m,disabled:x,disableTypography:_,label:E,labelPlacement:S="end",slotProps:k={}}=d,C=(0,n.Z)(d,b),A=(0,l.Z)();let P=x;"undefined"===typeof P&&"undefined"!==typeof m.props.disabled&&(P=m.props.disabled),"undefined"===typeof P&&A&&(P=A.disabled);const I={disabled:P};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof m.props[e]&&"undefined"!==typeof d[e]&&(I[e]=d[e])}));const R=(0,v.Z)({props:d,muiFormControl:A,states:["error"]}),O=(0,i.Z)({},d,{disabled:P,labelPlacement:S,error:R.error}),T=(e=>{const{classes:t,disabled:r,labelPlacement:n,error:i}=e,o={root:["root",r&&"disabled",`labelPlacement${(0,u.Z)(n)}`,i&&"error"],label:["label",r&&"disabled"]};return(0,a.Z)(o,g,t)})(O),M=null!=(r=k.typography)?r:p.typography;let N=E;return null==N||N.type===c.Z||_||(N=(0,y.jsx)(c.Z,(0,i.Z)({component:"span"},M,{className:(0,s.default)(T.label,null==M?void 0:M.className),children:N}))),(0,y.jsxs)(w,(0,i.Z)({className:(0,s.default)(T.root,f),ownerState:O,ref:t},C,{children:[o.cloneElement(m,I),N]}))}))},36161:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(76147),c=r(52930),u=r(47630),d=r(14036),h=r(75878),f=r(21217);function p(e){return(0,f.Z)("MuiFormHelperText",e)}var g,m=(0,h.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),v=r(93736),y=r(80184);const b=["children","className","component","disabled","error","filled","focused","margin","required","variant"],w=(0,u.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.size&&t[`size${(0,d.Z)(r.size)}`],r.contained&&t.contained,r.filled&&t.filled]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({color:(t.vars||t).palette.text.secondary},t.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${m.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${m.error}`]:{color:(t.vars||t).palette.error.main}},"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})}));var x=o.forwardRef((function(e,t){const r=(0,v.Z)({props:e,name:"MuiFormHelperText"}),{children:o,className:u,component:h="p"}=r,f=(0,n.Z)(r,b),m=(0,c.Z)(),x=(0,l.Z)({props:r,muiFormControl:m,states:["variant","size","disabled","error","filled","focused","required"]}),_=(0,i.Z)({},r,{component:h,contained:"filled"===x.variant||"outlined"===x.variant,variant:x.variant,size:x.size,disabled:x.disabled,error:x.error,filled:x.filled,focused:x.focused,required:x.required}),E=(e=>{const{classes:t,contained:r,size:n,disabled:i,error:o,filled:s,focused:l,required:c}=e,u={root:["root",i&&"disabled",o&&"error",n&&`size${(0,d.Z)(n)}`,r&&"contained",l&&"focused",s&&"filled",c&&"required"]};return(0,a.Z)(u,p,t)})(_);return(0,y.jsx)(w,(0,i.Z)({as:h,ownerState:_,className:(0,s.default)(E.root,u),ref:t},f,{children:" "===o?g||(g=(0,y.jsx)("span",{className:"notranslate",children:"\u200b"})):o}))}))},25502:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(87462),i=(r(72791),r(52554)),o=r(80184);function s(e){const{styles:t,defaultTheme:r={}}=e,n="function"===typeof t?e=>{return t(void 0===(n=e)||null===n||0===Object.keys(n).length?r:e);var n}:t;return(0,o.jsx)(i.xB,{styles:n})}var a=r(36482);var l=function(e){return(0,o.jsx)(s,(0,n.Z)({},e,{defaultTheme:a.Z}))}},61889:function(e,t,r){"use strict";r.d(t,{ZP:function(){return C}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(51184),l=r(78519),c=r(94419),u=r(47630),d=r(93736),h=r(13967);var f=o.createContext(),p=r(75878),g=r(21217);function m(e){return(0,g.Z)("MuiGrid",e)}const v=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var y=(0,p.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...v.map((e=>`grid-xs-${e}`)),...v.map((e=>`grid-sm-${e}`)),...v.map((e=>`grid-md-${e}`)),...v.map((e=>`grid-lg-${e}`)),...v.map((e=>`grid-xl-${e}`))]),b=r(80184);const w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function x(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function _(e){let{breakpoints:t,values:r}=e,n="";Object.keys(r).forEach((e=>{""===n&&0!==r[e]&&(n=e)}));const i=Object.keys(t).sort(((e,r)=>t[e]-t[r]));return i.slice(0,i.indexOf(n))}const E=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:n,direction:i,item:o,spacing:s,wrap:a,zeroMinWidth:l,breakpoints:c}=r;let u=[];n&&(u=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[r[`spacing-xs-${String(e)}`]];const n=[];return t.forEach((t=>{const i=e[t];Number(i)>0&&n.push(r[`spacing-${t}-${String(i)}`])})),n}(s,c,t));const d=[];return c.forEach((e=>{const n=r[e];n&&d.push(t[`grid-${e}-${String(n)}`])})),[t.root,n&&t.container,o&&t.item,l&&t.zeroMinWidth,...u,"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==a&&t[`wrap-xs-${String(a)}`],...d]}})((e=>{let{ownerState:t}=e;return(0,i.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){let{theme:t,ownerState:r}=e;const n=(0,a.P$)({values:r.direction,breakpoints:t.breakpoints.values});return(0,a.k9)({theme:t},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${y.item}`]={maxWidth:"none"}),t}))}),(function(e){let{theme:t,ownerState:r}=e;const{container:n,rowSpacing:i}=r;let o={};if(n&&0!==i){const e=(0,a.P$)({values:i,breakpoints:t.breakpoints.values});let r;"object"===typeof e&&(r=_({breakpoints:t.breakpoints.values,values:e})),o=(0,a.k9)({theme:t},e,((e,n)=>{var i;const o=t.spacing(e);return"0px"!==o?{marginTop:`-${x(o)}`,[`& > .${y.item}`]:{paddingTop:x(o)}}:null!=(i=r)&&i.includes(n)?{}:{marginTop:0,[`& > .${y.item}`]:{paddingTop:0}}}))}return o}),(function(e){let{theme:t,ownerState:r}=e;const{container:n,columnSpacing:i}=r;let o={};if(n&&0!==i){const e=(0,a.P$)({values:i,breakpoints:t.breakpoints.values});let r;"object"===typeof e&&(r=_({breakpoints:t.breakpoints.values,values:e})),o=(0,a.k9)({theme:t},e,((e,n)=>{var i;const o=t.spacing(e);return"0px"!==o?{width:`calc(100% + ${x(o)})`,marginLeft:`-${x(o)}`,[`& > .${y.item}`]:{paddingLeft:x(o)}}:null!=(i=r)&&i.includes(n)?{}:{width:"100%",marginLeft:0,[`& > .${y.item}`]:{paddingLeft:0}}}))}return o}),(function(e){let t,{theme:r,ownerState:n}=e;return r.breakpoints.keys.reduce(((e,o)=>{let s={};if(n[o]&&(t=n[o]),!t)return e;if(!0===t)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=(0,a.P$)({values:n.columns,breakpoints:r.breakpoints.values}),c="object"===typeof l?l[o]:l;if(void 0===c||null===c)return e;const u=Math.round(t/c*1e8)/1e6+"%";let d={};if(n.container&&n.item&&0!==n.columnSpacing){const e=r.spacing(n.columnSpacing);if("0px"!==e){const t=`calc(${u} + ${x(e)})`;d={flexBasis:t,maxWidth:t}}}s=(0,i.Z)({flexBasis:u,flexGrow:0,maxWidth:u},d)}return 0===r.breakpoints.values[o]?Object.assign(e,s):e[r.breakpoints.up(o)]=s,e}),{})}));const S=e=>{const{classes:t,container:r,direction:n,item:i,spacing:o,wrap:s,zeroMinWidth:a,breakpoints:l}=e;let u=[];r&&(u=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[`spacing-xs-${String(e)}`];const r=[];return t.forEach((t=>{const n=e[t];if(Number(n)>0){const e=`spacing-${t}-${String(n)}`;r.push(e)}})),r}(o,l));const d=[];l.forEach((t=>{const r=e[t];r&&d.push(`grid-${t}-${String(r)}`)}));const h={root:["root",r&&"container",i&&"item",a&&"zeroMinWidth",...u,"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==s&&`wrap-xs-${String(s)}`,...d]};return(0,c.Z)(h,m,t)},k=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiGrid"}),{breakpoints:a}=(0,h.Z)(),c=(0,l.Z)(r),{className:u,columns:p,columnSpacing:g,component:m="div",container:v=!1,direction:y="row",item:x=!1,rowSpacing:_,spacing:k=0,wrap:C="wrap",zeroMinWidth:A=!1}=c,P=(0,n.Z)(c,w),I=_||k,R=g||k,O=o.useContext(f),T=v?p||12:O,M={},N=(0,i.Z)({},P);a.keys.forEach((e=>{null!=P[e]&&(M[e]=P[e],delete N[e])}));const j=(0,i.Z)({},c,{columns:T,container:v,direction:y,item:x,rowSpacing:I,columnSpacing:R,wrap:C,zeroMinWidth:A,spacing:k},M,{breakpoints:a.keys}),L=S(j);return(0,b.jsx)(f.Provider,{value:T,children:(0,b.jsx)(E,(0,i.Z)({ownerState:j,className:(0,s.default)(L.root,u),as:m,ref:t},N))})}));var C=k},13208:function(e,t,r){"use strict";var n=r(87462),i=r(63366),o=r(72791),s=r(26752),a=r(13967),l=r(4999),c=r(42071),u=r(80184);const d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function h(e){return`scale(${e}, ${e**2})`}const f={entering:{opacity:1,transform:h(1)},entered:{opacity:1,transform:"none"}},p="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),g=o.forwardRef((function(e,t){const{addEndListener:r,appear:g=!0,children:m,easing:v,in:y,onEnter:b,onEntered:w,onEntering:x,onExit:_,onExited:E,onExiting:S,style:k,timeout:C="auto",TransitionComponent:A=s.ZP}=e,P=(0,i.Z)(e,d),I=o.useRef(),R=o.useRef(),O=(0,a.Z)(),T=o.useRef(null),M=(0,c.Z)(T,m.ref,t),N=e=>t=>{if(e){const r=T.current;void 0===t?e(r):e(r,t)}},j=N(x),L=N(((e,t)=>{(0,l.n)(e);const{duration:r,delay:n,easing:i}=(0,l.C)({style:k,timeout:C,easing:v},{mode:"enter"});let o;"auto"===C?(o=O.transitions.getAutoHeightDuration(e.clientHeight),R.current=o):o=r,e.style.transition=[O.transitions.create("opacity",{duration:o,delay:n}),O.transitions.create("transform",{duration:p?o:.666*o,delay:n,easing:i})].join(","),b&&b(e,t)})),D=N(w),$=N(S),B=N((e=>{const{duration:t,delay:r,easing:n}=(0,l.C)({style:k,timeout:C,easing:v},{mode:"exit"});let i;"auto"===C?(i=O.transitions.getAutoHeightDuration(e.clientHeight),R.current=i):i=t,e.style.transition=[O.transitions.create("opacity",{duration:i,delay:r}),O.transitions.create("transform",{duration:p?i:.666*i,delay:p?r:r||.333*i,easing:n})].join(","),e.style.opacity=0,e.style.transform=h(.75),_&&_(e)})),Z=N(E);return o.useEffect((()=>()=>{clearTimeout(I.current)}),[]),(0,u.jsx)(A,(0,n.Z)({appear:g,in:y,nodeRef:T,onEnter:L,onEntered:D,onEntering:j,onExit:B,onExited:Z,onExiting:$,addEndListener:e=>{"auto"===C&&(I.current=setTimeout(e,R.current||0)),r&&r(T.current,e)},timeout:"auto"===C?null:C},P,{children:(e,t)=>o.cloneElement(m,(0,n.Z)({style:(0,n.Z)({opacity:0,transform:h(.75),visibility:"exited"!==e||y?void 0:"hidden"},f[e],k,m.props.style),ref:M},t))}))}));g.muiSupportAuto=!0,t.Z=g},13400:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(12065),c=r(47630),u=r(93736),d=r(50533),h=r(14036),f=r(75878),p=r(21217);function g(e){return(0,p.Z)("MuiIconButton",e)}var m=(0,f.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),v=r(80184);const y=["edge","children","className","color","disabled","disableFocusRipple","size"],b=(0,c.ZP)(d.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,h.Z)(r.color)}`],r.edge&&t[`edge${(0,h.Z)(r.edge)}`],t[`size${(0,h.Z)(r.size)}`]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,l.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(e=>{let{theme:t,ownerState:r}=e;var n;const o=null==(n=(t.vars||t).palette)?void 0:n[r.color];return(0,i.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,i.Z)({color:null==o?void 0:o.main},!r.disableRipple&&{"&:hover":(0,i.Z)({},o&&{backgroundColor:t.vars?`rgba(${o.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,l.Fq)(o.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${m.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}));var w=o.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiIconButton"}),{edge:o=!1,children:l,className:c,color:d="default",disabled:f=!1,disableFocusRipple:p=!1,size:m="medium"}=r,w=(0,n.Z)(r,y),x=(0,i.Z)({},r,{edge:o,color:d,disabled:f,disableFocusRipple:p,size:m}),_=(e=>{const{classes:t,disabled:r,color:n,edge:i,size:o}=e,s={root:["root",r&&"disabled","default"!==n&&`color${(0,h.Z)(n)}`,i&&`edge${(0,h.Z)(i)}`,`size${(0,h.Z)(o)}`]};return(0,a.Z)(s,g,t)})(x);return(0,v.jsx)(b,(0,i.Z)({className:(0,s.default)(_.root,c),centerRipple:!0,focusRipple:!p,disabled:f,ref:t,ownerState:x},w,{children:l}))}))},37078:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(63366),i=r(87462),o=r(72791),s=r(94419),a=r(82466),l=r(4834),c=r(47630),u=r(93736),d=r(75878),h=r(21217),f=r(55891);function p(e){return(0,h.Z)("MuiInput",e)}var g=(0,i.Z)({},f.Z,(0,d.Z)("MuiInput",["root","underline","input"])),m=r(80184);const v=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],y=(0,c.ZP)(l.Ej,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[...(0,l.Gx)(e,t),!r.disableUnderline&&t.underline]}})((e=>{let{theme:t,ownerState:r}=e;let n="light"===t.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return t.vars&&(n=`rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`),(0,i.Z)({position:"relative"},r.formControl&&{"label + &":{marginTop:16}},!r.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(t.vars||t).palette[r.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${g.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${g.error}`]:{"&:before, &:after":{borderBottomColor:(t.vars||t).palette.error.main}},"&:before":{borderBottom:`1px solid ${n}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:t.transitions.create("border-bottom-color",{duration:t.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${g.disabled}, .${g.error}):before`]:{borderBottom:`2px solid ${(t.vars||t).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${n}`}},[`&.${g.disabled}:before`]:{borderBottomStyle:"dotted"}})})),b=(0,c.ZP)(l.rA,{name:"MuiInput",slot:"Input",overridesResolver:l._o})({}),w=o.forwardRef((function(e,t){var r,o,c,d;const h=(0,u.Z)({props:e,name:"MuiInput"}),{disableUnderline:f,components:g={},componentsProps:w,fullWidth:x=!1,inputComponent:_="input",multiline:E=!1,slotProps:S,slots:k={},type:C="text"}=h,A=(0,n.Z)(h,v),P=(e=>{const{classes:t,disableUnderline:r}=e,n={root:["root",!r&&"underline"],input:["input"]},o=(0,s.Z)(n,p,t);return(0,i.Z)({},t,o)})(h),I={root:{ownerState:{disableUnderline:f}}},R=(null!=S?S:w)?(0,a.Z)(null!=S?S:w,I):I,O=null!=(r=null!=(o=k.root)?o:g.Root)?r:y,T=null!=(c=null!=(d=k.input)?d:g.Input)?c:b;return(0,m.jsx)(l.ZP,(0,i.Z)({slots:{root:O,input:T},slotProps:R,fullWidth:x,inputComponent:_,multiline:E,ref:t,type:C},A,{classes:P}))}));w.muiName="Input";var x=w},63466:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(14036),c=r(20890),u=r(93840),d=r(52930),h=r(47630),f=r(75878),p=r(21217);function g(e){return(0,p.Z)("MuiInputAdornment",e)}var m,v=(0,f.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),y=r(93736),b=r(80184);const w=["children","className","component","disablePointerEvents","disableTypography","position","variant"],x=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`position${(0,l.Z)(r.position)}`],!0===r.disablePointerEvents&&t.disablePointerEvents,t[r.variant]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===r.variant&&{[`&.${v.positionStart}&:not(.${v.hiddenLabel})`]:{marginTop:16}},"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})}));var _=o.forwardRef((function(e,t){const r=(0,y.Z)({props:e,name:"MuiInputAdornment"}),{children:h,className:f,component:p="div",disablePointerEvents:v=!1,disableTypography:_=!1,position:E,variant:S}=r,k=(0,n.Z)(r,w),C=(0,d.Z)()||{};let A=S;S&&C.variant,C&&!A&&(A=C.variant);const P=(0,i.Z)({},r,{hiddenLabel:C.hiddenLabel,size:C.size,disablePointerEvents:v,position:E,variant:A}),I=(e=>{const{classes:t,disablePointerEvents:r,hiddenLabel:n,position:i,size:o,variant:s}=e,c={root:["root",r&&"disablePointerEvents",i&&`position${(0,l.Z)(i)}`,s,n&&"hiddenLabel",o&&`size${(0,l.Z)(o)}`]};return(0,a.Z)(c,g,t)})(P);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(x,(0,i.Z)({as:p,ownerState:P,className:(0,s.default)(I.root,f),ref:t},k,{children:"string"!==typeof h||_?(0,b.jsxs)(o.Fragment,{children:["start"===E?m||(m=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,h]}):(0,b.jsx)(c.Z,{color:"text.secondary",children:h})}))})}))},4834:function(e,t,r){"use strict";r.d(t,{rA:function(){return L},Ej:function(){return j},ZP:function(){return B},_o:function(){return N},Gx:function(){return M}});var n=r(63366),i=r(87462),o=r(46189),s=r(72791),a=r(28182),l=r(94419),c=r(54164),u=r(47563),d=r(27979),h=r(93981),f=r(75721),p=r(80184);const g=["onChange","maxRows","minRows","style","value"];function m(e,t){return parseInt(e[t],10)||0}const v={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function y(e){return void 0===e||null===e||0===Object.keys(e).length}var b=s.forwardRef((function(e,t){const{onChange:r,maxRows:o,minRows:a=1,style:l,value:b}=e,w=(0,n.Z)(e,g),{current:x}=s.useRef(null!=b),_=s.useRef(null),E=(0,u.Z)(t,_),S=s.useRef(null),k=s.useRef(0),[C,A]=s.useState({}),P=s.useCallback((()=>{const t=_.current,r=(0,d.Z)(t).getComputedStyle(t);if("0px"===r.width)return{};const n=S.current;n.style.width=r.width,n.value=t.value||e.placeholder||"x","\n"===n.value.slice(-1)&&(n.value+=" ");const i=r["box-sizing"],s=m(r,"padding-bottom")+m(r,"padding-top"),l=m(r,"border-bottom-width")+m(r,"border-top-width"),c=n.scrollHeight;n.value="x";const u=n.scrollHeight;let h=c;a&&(h=Math.max(Number(a)*u,h)),o&&(h=Math.min(Number(o)*u,h)),h=Math.max(h,u);return{outerHeightStyle:h+("border-box"===i?s+l:0),overflow:Math.abs(h-c)<=1}}),[o,a,e.placeholder]),I=(e,t)=>{const{outerHeightStyle:r,overflow:n}=t;return k.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==n)?(k.current+=1,{overflow:n,outerHeightStyle:r}):e},R=s.useCallback((()=>{const e=P();y(e)||A((t=>I(t,e)))}),[P]);s.useEffect((()=>{const e=(0,h.Z)((()=>{k.current=0,_.current&&(()=>{const e=P();y(e)||(0,c.flushSync)((()=>{A((t=>I(t,e)))}))})()})),t=(0,d.Z)(_.current);let r;return t.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(r=new ResizeObserver(e),r.observe(_.current)),()=>{e.clear(),t.removeEventListener("resize",e),r&&r.disconnect()}})),(0,f.Z)((()=>{R()})),s.useEffect((()=>{k.current=0}),[b]);return(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)("textarea",(0,i.Z)({value:b,onChange:e=>{k.current=0,x||R(),r&&r(e)},ref:E,rows:a,style:(0,i.Z)({height:C.outerHeightStyle,overflow:C.overflow?"hidden":null},l)},w)),(0,p.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:S,tabIndex:-1,style:(0,i.Z)({},v,l,{padding:0})})]})})),w=r(20627),x=r(76147),_=r(93840),E=r(52930),S=r(47630),k=r(93736),C=r(14036),A=r(42071),P=r(40162),I=r(25502),R=r(35470),O=r(55891);const T=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],M=(e,t)=>{const{ownerState:r}=e;return[t.root,r.formControl&&t.formControl,r.startAdornment&&t.adornedStart,r.endAdornment&&t.adornedEnd,r.error&&t.error,"small"===r.size&&t.sizeSmall,r.multiline&&t.multiline,r.color&&t[`color${(0,C.Z)(r.color)}`],r.fullWidth&&t.fullWidth,r.hiddenLabel&&t.hiddenLabel]},N=(e,t)=>{const{ownerState:r}=e;return[t.input,"small"===r.size&&t.inputSizeSmall,r.multiline&&t.inputMultiline,"search"===r.type&&t.inputTypeSearch,r.startAdornment&&t.inputAdornedStart,r.endAdornment&&t.inputAdornedEnd,r.hiddenLabel&&t.inputHiddenLabel]},j=(0,S.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:M})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({},t.typography.body1,{color:(t.vars||t).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${O.Z.disabled}`]:{color:(t.vars||t).palette.text.disabled,cursor:"default"}},r.multiline&&(0,i.Z)({padding:"4px 0 5px"},"small"===r.size&&{paddingTop:1}),r.fullWidth&&{width:"100%"})})),L=(0,S.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:N})((e=>{let{theme:t,ownerState:r}=e;const n="light"===t.palette.mode,o=(0,i.Z)({color:"currentColor"},t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter})}),s={opacity:"0 !important"},a=t.vars?{opacity:t.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return(0,i.Z)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${O.Z.formControl} &`]:{"&::-webkit-input-placeholder":s,"&::-moz-placeholder":s,"&:-ms-input-placeholder":s,"&::-ms-input-placeholder":s,"&:focus::-webkit-input-placeholder":a,"&:focus::-moz-placeholder":a,"&:focus:-ms-input-placeholder":a,"&:focus::-ms-input-placeholder":a},[`&.${O.Z.disabled}`]:{opacity:1,WebkitTextFillColor:(t.vars||t).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===r.size&&{paddingTop:1},r.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===r.type&&{MozAppearance:"textfield"})})),D=(0,p.jsx)(I.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),$=s.forwardRef((function(e,t){var r;const c=(0,k.Z)({props:e,name:"MuiInputBase"}),{"aria-describedby":u,autoComplete:d,autoFocus:h,className:f,components:g={},componentsProps:m={},defaultValue:v,disabled:y,disableInjectingGlobalStyles:S,endAdornment:I,fullWidth:M=!1,id:N,inputComponent:$="input",inputProps:B={},inputRef:Z,maxRows:z,minRows:U,multiline:F=!1,name:W,onBlur:H,onChange:V,onClick:q,onFocus:Y,onKeyDown:G,onKeyUp:K,placeholder:J,readOnly:Q,renderSuffix:X,rows:ee,slotProps:te={},slots:re={},startAdornment:ne,type:ie="text",value:oe}=c,se=(0,n.Z)(c,T),ae=null!=B.value?B.value:oe,{current:le}=s.useRef(null!=ae),ce=s.useRef(),ue=s.useCallback((e=>{0}),[]),de=(0,A.Z)(ce,Z,B.ref,ue),[he,fe]=s.useState(!1),pe=(0,E.Z)();const ge=(0,x.Z)({props:c,muiFormControl:pe,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ge.focused=pe?pe.focused:he,s.useEffect((()=>{!pe&&y&&he&&(fe(!1),H&&H())}),[pe,y,he,H]);const me=pe&&pe.onFilled,ve=pe&&pe.onEmpty,ye=s.useCallback((e=>{(0,R.vd)(e)?me&&me():ve&&ve()}),[me,ve]);(0,P.Z)((()=>{le&&ye({value:ae})}),[ae,ye,le]);s.useEffect((()=>{ye(ce.current)}),[]);let be=$,we=B;F&&"input"===be&&(we=ee?(0,i.Z)({type:void 0,minRows:ee,maxRows:ee},we):(0,i.Z)({type:void 0,maxRows:z,minRows:U},we),be=b);s.useEffect((()=>{pe&&pe.setAdornedStart(Boolean(ne))}),[pe,ne]);const xe=(0,i.Z)({},c,{color:ge.color||"primary",disabled:ge.disabled,endAdornment:I,error:ge.error,focused:ge.focused,formControl:pe,fullWidth:M,hiddenLabel:ge.hiddenLabel,multiline:F,size:ge.size,startAdornment:ne,type:ie}),_e=(e=>{const{classes:t,color:r,disabled:n,error:i,endAdornment:o,focused:s,formControl:a,fullWidth:c,hiddenLabel:u,multiline:d,readOnly:h,size:f,startAdornment:p,type:g}=e,m={root:["root",`color${(0,C.Z)(r)}`,n&&"disabled",i&&"error",c&&"fullWidth",s&&"focused",a&&"formControl","small"===f&&"sizeSmall",d&&"multiline",p&&"adornedStart",o&&"adornedEnd",u&&"hiddenLabel",h&&"readOnly"],input:["input",n&&"disabled","search"===g&&"inputTypeSearch",d&&"inputMultiline","small"===f&&"inputSizeSmall",u&&"inputHiddenLabel",p&&"inputAdornedStart",o&&"inputAdornedEnd",h&&"readOnly"]};return(0,l.Z)(m,O.u,t)})(xe),Ee=re.root||g.Root||j,Se=te.root||m.root||{},ke=re.input||g.Input||L;return we=(0,i.Z)({},we,null!=(r=te.input)?r:m.input),(0,p.jsxs)(s.Fragment,{children:[!S&&D,(0,p.jsxs)(Ee,(0,i.Z)({},Se,!(0,w.Z)(Ee)&&{ownerState:(0,i.Z)({},xe,Se.ownerState)},{ref:t,onClick:e=>{ce.current&&e.currentTarget===e.target&&ce.current.focus(),q&&q(e)}},se,{className:(0,a.default)(_e.root,Se.className,f),children:[ne,(0,p.jsx)(_.Z.Provider,{value:null,children:(0,p.jsx)(ke,(0,i.Z)({ownerState:xe,"aria-invalid":ge.error,"aria-describedby":u,autoComplete:d,autoFocus:h,defaultValue:v,disabled:ge.disabled,id:N,onAnimationStart:e=>{ye("mui-auto-fill-cancel"===e.animationName?ce.current:{value:"x"})},name:W,placeholder:J,readOnly:Q,required:ge.required,rows:ee,value:ae,onKeyDown:G,onKeyUp:K,type:ie},we,!(0,w.Z)(ke)&&{as:be,ownerState:(0,i.Z)({},xe,we.ownerState)},{ref:de,className:(0,a.default)(_e.input,we.className),onBlur:e=>{H&&H(e),B.onBlur&&B.onBlur(e),pe&&pe.onBlur?pe.onBlur(e):fe(!1)},onChange:function(e){if(!le){const t=e.target||ce.current;if(null==t)throw new Error((0,o.Z)(1));ye({value:t.value})}for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];B.onChange&&B.onChange(e,...r),V&&V(e,...r)},onFocus:e=>{ge.disabled?e.stopPropagation():(Y&&Y(e),B.onFocus&&B.onFocus(e),pe&&pe.onFocus?pe.onFocus(e):fe(!0))}}))}),I,X?X((0,i.Z)({},ge,{startAdornment:ne})):null]}))]})}));var B=$},55891:function(e,t,r){"use strict";r.d(t,{u:function(){return o}});var n=r(75878),i=r(21217);function o(e){return(0,i.Z)("MuiInputBase",e)}const s=(0,n.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);t.Z=s},35470:function(e,t,r){"use strict";function n(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(n(e.value)&&""!==e.value||t&&n(e.defaultValue)&&""!==e.defaultValue)}function o(e){return e.startAdornment}r.d(t,{B7:function(){return o},vd:function(){return i}})},94925:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(63366),i=r(87462),o=r(72791),s=r(94419),a=r(28182),l=r(76147),c=r(52930),u=r(14036),d=r(93736),h=r(47630),f=r(75878),p=r(21217);function g(e){return(0,p.Z)("MuiFormLabel",e)}var m=(0,f.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),v=r(80184);const y=["children","className","color","component","disabled","error","filled","focused","required"],b=(0,h.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return(0,i.Z)({},t.root,"secondary"===r.color&&t.colorSecondary,r.filled&&t.filled)}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({color:(t.vars||t).palette.text.secondary},t.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${m.focused}`]:{color:(t.vars||t).palette[r.color].main},[`&.${m.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${m.error}`]:{color:(t.vars||t).palette.error.main}})})),w=(0,h.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})((e=>{let{theme:t}=e;return{[`&.${m.error}`]:{color:(t.vars||t).palette.error.main}}}));var x=o.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiFormLabel"}),{children:o,className:h,component:f="label"}=r,p=(0,n.Z)(r,y),m=(0,c.Z)(),x=(0,l.Z)({props:r,muiFormControl:m,states:["color","required","focused","disabled","error","filled"]}),_=(0,i.Z)({},r,{color:x.color||"primary",component:f,disabled:x.disabled,error:x.error,filled:x.filled,focused:x.focused,required:x.required}),E=(e=>{const{classes:t,color:r,focused:n,disabled:i,error:o,filled:a,required:l}=e,c={root:["root",`color${(0,u.Z)(r)}`,i&&"disabled",o&&"error",a&&"filled",n&&"focused",l&&"required"],asterisk:["asterisk",o&&"error"]};return(0,s.Z)(c,g,t)})(_);return(0,v.jsxs)(b,(0,i.Z)({as:f,ownerState:_,className:(0,a.default)(E.root,h),ref:t},p,{children:[o,x.required&&(0,v.jsxs)(w,{ownerState:_,"aria-hidden":!0,className:E.asterisk,children:["\u2009","*"]})]}))}));function _(e){return(0,p.Z)("MuiInputLabel",e)}(0,f.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const E=["disableAnimation","margin","shrink","variant","className"],S=(0,h.ZP)(x,{shouldForwardProp:e=>(0,h.FO)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${m.asterisk}`]:t.asterisk},t.root,r.formControl&&t.formControl,"small"===r.size&&t.sizeSmall,r.shrink&&t.shrink,!r.disableAnimation&&t.animated,t[r.variant]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,i.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},r.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===r.size&&{transform:"translate(0, 17px) scale(1)"},r.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!r.disableAnimation&&{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})},"filled"===r.variant&&(0,i.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(12px, 13px) scale(1)"},r.shrink&&(0,i.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===r.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===r.variant&&(0,i.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(14px, 9px) scale(1)"},r.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))}));var k=o.forwardRef((function(e,t){const r=(0,d.Z)({name:"MuiInputLabel",props:e}),{disableAnimation:o=!1,shrink:u,className:h}=r,f=(0,n.Z)(r,E),p=(0,c.Z)();let g=u;"undefined"===typeof g&&p&&(g=p.filled||p.focused||p.adornedStart);const m=(0,l.Z)({props:r,muiFormControl:p,states:["size","variant","required"]}),y=(0,i.Z)({},r,{disableAnimation:o,formControl:p,shrink:g,size:m.size,variant:m.variant,required:m.required}),b=(e=>{const{classes:t,formControl:r,size:n,shrink:o,disableAnimation:a,variant:l,required:c}=e,u={root:["root",r&&"formControl",!a&&"animated",o&&"shrink","small"===n&&"sizeSmall",l],asterisk:[c&&"asterisk"]},d=(0,s.Z)(u,_,t);return(0,i.Z)({},t,d)})(y);return(0,v.jsx)(S,(0,i.Z)({"data-shrink":g,ownerState:y,ref:t,className:(0,a.default)(b.root,h)},f,{classes:b}))}))},57482:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(63366),i=r(87462),o=r(72791),s=r(28182),a=r(94419),l=r(52554),c=r(12065),u=r(14036),d=r(13967),h=r(47630),f=r(93736),p=r(75878),g=r(21217);function m(e){return(0,g.Z)("MuiLinearProgress",e)}(0,p.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var v=r(80184);const y=["className","color","value","valueBuffer","variant"];let b,w,x,_,E,S,k=e=>e;const C=(0,l.F4)(b||(b=k`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),A=(0,l.F4)(w||(w=k`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),P=(0,l.F4)(x||(x=k`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),I=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:"light"===e.palette.mode?(0,c.$n)(e.palette[t].main,.62):(0,c._j)(e.palette[t].main,.5),R=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${(0,u.Z)(r.color)}`],t[r.variant]]}})((e=>{let{ownerState:t,theme:r}=e;return(0,i.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:I(r,t.color)},"inherit"===t.color&&"buffer"!==t.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===t.variant&&{backgroundColor:"transparent"},"query"===t.variant&&{transform:"rotate(180deg)"})})),O=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.dashed,t[`dashedColor${(0,u.Z)(r.color)}`]]}})((e=>{let{ownerState:t,theme:r}=e;const n=I(r,t.color);return(0,i.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===t.color&&{opacity:.3},{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(_||(_=k`
    animation: ${0} 3s infinite linear;
  `),P)),T=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,u.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((e=>{let{ownerState:t,theme:r}=e;return(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"determinate"===t.variant&&{transition:"transform .4s linear"},"buffer"===t.variant&&{zIndex:1,transition:"transform .4s linear"})}),(e=>{let{ownerState:t}=e;return("indeterminate"===t.variant||"query"===t.variant)&&(0,l.iv)(E||(E=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),C)})),M=(0,h.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,u.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((e=>{let{ownerState:t,theme:r}=e;return(0,i.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==t.variant&&{backgroundColor:"inherit"===t.color?"currentColor":(r.vars||r).palette[t.color].main},"inherit"===t.color&&{opacity:.3},"buffer"===t.variant&&{backgroundColor:I(r,t.color),transition:"transform .4s linear"})}),(e=>{let{ownerState:t}=e;return("indeterminate"===t.variant||"query"===t.variant)&&(0,l.iv)(S||(S=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const c="scroll-lock";let u=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.initializeTheming(),n.QT.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",(e=>e?this.onOpen():this.onClose()))),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?o.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&n.IN.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=n.u0.state,r=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,n.KC.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=c,e.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)n.IN.close();else if("Tab"===t.key){const{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};u.styles=a,l([(0,s.SB)()],u.prototype,"open",void 0),u=l([(0,i.customElement)("w3m-modal")],u)},6124:function(e,t,r){"use strict";r.r(t),r.d(t,{TransactionUtil:function(){return Tn},UiHelperUtil:function(){return st},WuiAccountButton:function(){return yt},WuiAllWalletsImage:function(){return St},WuiAvatar:function(){return ht},WuiButton:function(){return At},WuiCard:function(){return v},WuiCardSelect:function(){return $t},WuiCardSelectLoader:function(){return Ot},WuiChip:function(){return zt},WuiConnectButton:function(){return Wt},WuiCtaButton:function(){return qt},WuiEmailInput:function(){return dr},WuiFlex:function(){return ct},WuiGrid:function(){return kn},WuiIcon:function(){return ve},WuiIconBox:function(){return gt},WuiIconLink:function(){return pr},WuiImage:function(){return we},WuiInputElement:function(){return vr},WuiInputNumeric:function(){return wr},WuiInputText:function(){return lr},WuiLink:function(){return Er},WuiListItem:function(){return Cr},WuiListWallet:function(){return Ur},WuiLoadingHexagon:function(){return Ee},WuiLoadingSpinner:function(){return Ce},WuiLoadingThumbnail:function(){return Ie},WuiLogo:function(){return Hr},WuiLogoSelect:function(){return Yr},WuiNetworkButton:function(){return Jr},WuiNetworkImage:function(){return jt},WuiOtp:function(){return en},WuiQrCode:function(){return an},WuiSearchBar:function(){return un},WuiSeparator:function(){return Pn},WuiShimmer:function(){return Te},WuiSnackbar:function(){return fn},WuiTabs:function(){return mn},WuiTag:function(){return Br},WuiText:function(){return ze},WuiTooltip:function(){return bn},WuiTransactionListItem:function(){return Mr},WuiTransactionListItemLoader:function(){return Lr},WuiTransactionVisual:function(){return Rr},WuiVisual:function(){return it},WuiVisualThumbnail:function(){return _n},WuiWalletImage:function(){return xt},customElement:function(){return p},initializeTheming:function(){return a},setColorTheme:function(){return l},setThemeVariables:function(){return c}});var n=r(28940);let i,o,s;function a(e,t){i=document.createElement("style"),o=document.createElement("style"),s=document.createElement("style"),i.textContent=u(e).core.cssText,o.textContent=u(e).dark.cssText,s.textContent=u(e).light.cssText,document.head.appendChild(i),document.head.appendChild(o),document.head.appendChild(s),l(t)}function l(e){o&&s&&("light"===e?(o.removeAttribute("media"),s.media="enabled"):(s.removeAttribute("media"),o.media="enabled"))}function c(e){i&&o&&s&&(i.textContent=u(e).core.cssText,o.textContent=u(e).dark.cssText,s.textContent=u(e).light.cssText)}function u(e){return{core:n.iv`
      :root {
        --w3m-color-mix-strength: ${(0,n.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,n.$m)(e?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${(0,n.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,n.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,n.$m)(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:n.iv`
      :root {
        --w3m-color-mix: ${(0,n.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,n.$m)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:n.iv`
      :root {
        --w3m-color-mix: ${(0,n.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,n.$m)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const d=n.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,h=n.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,f=n.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function p(e){return function(t){return"function"===typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var g=n.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`,m=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let v=class extends n.oi{render(){return n.dy`<slot></slot>`}};v.styles=[d,g],v=m([p("wui-card")],v);var y=r(5352),b=n.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;const w=n.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,x=n.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,_=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,E=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,S=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,k=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,C=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,A=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,P=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,I=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,R=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,O=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,T=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,M=n.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,N=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,j=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,L=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,D=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,$=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,B=n.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Z=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,z=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,U=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,F=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,W=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,H=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,V=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,q=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Y=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,G=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,K=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,J=n.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Q=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,X=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,ee=n.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,te=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,re=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ne=n.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,ie=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,oe=n.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,se=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,ae=n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,le=n.YP`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,ce=n.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ue=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,de=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,he=n.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,fe=n.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,pe=n.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var ge=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const me={allWallets:w,appStore:x,chromeStore:M,apple:_,arrowBottom:E,arrowLeft:S,arrowRight:k,arrowTop:C,browser:A,checkmark:P,chevronBottom:I,chevronLeft:R,chevronRight:O,chevronTop:T,clock:N,close:j,compass:D,coinPlaceholder:L,copy:$,cursor:B,desktop:Z,disconnect:z,discord:U,etherscan:F,extension:W,externalLink:H,facebook:V,filters:q,github:Y,google:G,helpCircle:K,infoCircle:J,mail:Q,mobile:X,networkPlaceholder:ee,nftPlaceholder:te,off:re,playStore:ne,qrCode:ie,refresh:oe,search:se,swapHorizontal:ae,swapHorizontalBold:le,swapVertical:ce,telegram:ue,twitch:de,twitter:he,twitterIcon:fe,wallet:n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,walletConnect:n.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,walletPlaceholder:pe,warningCircle:n.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`};let ve=class extends n.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,n.dy`${me[this.name]}`}};ve.styles=[d,f,b],ge([(0,y.Cb)()],ve.prototype,"size",void 0),ge([(0,y.Cb)()],ve.prototype,"name",void 0),ge([(0,y.Cb)()],ve.prototype,"color",void 0),ve=ge([p("wui-icon")],ve);var ye=n.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,be=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let we=class extends n.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return n.dy`<img src=${this.src} alt=${this.alt} />`}};we.styles=[d,f,ye],be([(0,y.Cb)()],we.prototype,"src",void 0),be([(0,y.Cb)()],we.prototype,"alt",void 0),we=be([p("wui-image")],we);var xe=n.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,_e=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ee=class extends n.oi{render(){return n.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ee.styles=[d,xe],Ee=_e([p("wui-loading-hexagon")],Ee);var Se=n.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,ke=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ce=class extends n.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,n.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Ce.styles=[d,Se],ke([(0,y.Cb)()],Ce.prototype,"color",void 0),ke([(0,y.Cb)()],Ce.prototype,"size",void 0),Ce=ke([p("wui-loading-spinner")],Ce);var Ae=n.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Pe=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ie=class extends n.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,r=116+t,i=245+t,o=360+1.75*t;return n.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};Ie.styles=[d,Ae],Pe([(0,y.Cb)({type:Number})],Ie.prototype,"radius",void 0),Ie=Pe([p("wui-loading-thumbnail")],Ie);var Re=n.iv`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,Oe=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Te=class extends n.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,n.dy`<slot></slot>`}};Te.styles=[Re],Oe([(0,y.Cb)()],Te.prototype,"width",void 0),Oe([(0,y.Cb)()],Te.prototype,"height",void 0),Oe([(0,y.Cb)()],Te.prototype,"borderRadius",void 0),Te=Oe([p("wui-shimmer")],Te);var Me=r(52475);const Ne=1,je=2,Le=e=>function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return{_$litDirective$:e,values:r}};class De{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const $e=Le(class extends De{constructor(e){if(super(e),e.type!==Ne||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[r]=t;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in r)r[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(r)}const n=e.element.classList;for(const i of this.it)i in r||(n.remove(i),this.it.delete(i));for(const i in r){const e=!!r[i];e===this.it.has(i)||this.st?.has(i)||(e?(n.add(i),this.it.add(i)):(n.remove(i),this.it.delete(i)))}return Me.Jb}});var Be=n.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,Ze=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ze=class extends n.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,n.dy`<slot class=${$e(e)}></slot>`}};ze.styles=[d,Be],Ze([(0,y.Cb)()],ze.prototype,"variant",void 0),Ze([(0,y.Cb)()],ze.prototype,"color",void 0),Ze([(0,y.Cb)()],ze.prototype,"align",void 0),ze=Ze([p("wui-text")],ze);const Ue=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,Fe=n.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,We=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,He=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,Ve=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,qe=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Ye=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Ge=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,Ke=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,Je=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Qe=n.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Xe=n.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,et=n.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var tt=n.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,rt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const nt={browser:Ue,dao:Fe,defi:We,defiAlt:He,eth:Ve,layers:qe,lock:Ye,login:Ge,network:Ke,nft:Je,noun:Qe,profile:Xe,system:et};let it=class extends n.oi{constructor(){super(...arguments),this.name="browser"}render(){return n.dy`${nt[this.name]}`}};it.styles=[d,tt],rt([(0,y.Cb)()],it.prototype,"name",void 0),it=rt([p("wui-visual")],it);var ot=r(14378);const st={getSpacingStyles(e,t){return Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"===typeof e?`var(--wui-spacing-${e})`:void 0},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){return new URL(e).hostname},getTruncateString(e){let{string:t,charsStart:r,charsEnd:n,truncate:i}=e;return t.length<=r+n?t:"end"===i?`${t.substring(0,r)}...`:"start"===i?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(r))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(t),n=[];for(let i=0;i<5;i+=1){const e=this.tintColor(r,.15*i);n.push(`rgb(${e[0]}, ${e[1]}, ${e[2]})`)}return`\n    --local-color-1: ${n[0]};\n    --local-color-2: ${n[1]};\n    --local-color-3: ${n[2]};\n    --local-color-4: ${n[3]};\n    --local-color-5: ${n[4]};\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber(e){return/^[0-9]+$/u.test(e)},getColorTheme(e){return e||("undefined"!==typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}};var at=n.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,lt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ct=class extends n.oi{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&st.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&st.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&st.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&st.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&st.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&st.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&st.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&st.getSpacingStyles(this.margin,3)};\n    `,n.dy`<slot></slot>`}};ct.styles=[d,at],lt([(0,y.Cb)()],ct.prototype,"flexDirection",void 0),lt([(0,y.Cb)()],ct.prototype,"flexWrap",void 0),lt([(0,y.Cb)()],ct.prototype,"flexBasis",void 0),lt([(0,y.Cb)()],ct.prototype,"flexGrow",void 0),lt([(0,y.Cb)()],ct.prototype,"flexShrink",void 0),lt([(0,y.Cb)()],ct.prototype,"alignItems",void 0),lt([(0,y.Cb)()],ct.prototype,"justifyContent",void 0),lt([(0,y.Cb)()],ct.prototype,"columnGap",void 0),lt([(0,y.Cb)()],ct.prototype,"rowGap",void 0),lt([(0,y.Cb)()],ct.prototype,"gap",void 0),lt([(0,y.Cb)()],ct.prototype,"padding",void 0),lt([(0,y.Cb)()],ct.prototype,"margin",void 0),ct=lt([p("wui-flex")],ct);var ut=n.iv`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,dt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ht=class extends n.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return n.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",n.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=st.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};ht.styles=[d,ut],dt([(0,y.Cb)()],ht.prototype,"imageSrc",void 0),dt([(0,y.Cb)()],ht.prototype,"alt",void 0),dt([(0,y.Cb)()],ht.prototype,"address",void 0),ht=dt([p("wui-avatar")],ht);var ft=n.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    outline: var(--local-border);
    outline-offset: 0px;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,pt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let gt=class extends n.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,r=t?"12%":"16%",i=t?"xxs":"3xl",o="gray"===this.background,s="opaque"===this.background,a="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return a?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${a||o?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${i});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,n.dy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};gt.styles=[d,h,ft],pt([(0,y.Cb)()],gt.prototype,"size",void 0),pt([(0,y.Cb)()],gt.prototype,"backgroundColor",void 0),pt([(0,y.Cb)()],gt.prototype,"iconColor",void 0),pt([(0,y.Cb)()],gt.prototype,"iconSize",void 0),pt([(0,y.Cb)()],gt.prototype,"background",void 0),pt([(0,y.Cb)({type:Boolean})],gt.prototype,"border",void 0),pt([(0,y.Cb)()],gt.prototype,"borderColor",void 0),pt([(0,y.Cb)()],gt.prototype,"icon",void 0),gt=pt([p("wui-icon-box")],gt);var mt=n.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,vt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let yt=class extends n.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return n.dy`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${(0,ot.o)(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${st.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?n.dy`<wui-image src=${this.networkSrc}></wui-image>`:n.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return n.dy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};yt.styles=[d,h,mt],vt([(0,y.Cb)()],yt.prototype,"networkSrc",void 0),vt([(0,y.Cb)()],yt.prototype,"avatarSrc",void 0),vt([(0,y.Cb)()],yt.prototype,"balance",void 0),vt([(0,y.Cb)({type:Boolean})],yt.prototype,"disabled",void 0),vt([(0,y.Cb)({type:Boolean})],yt.prototype,"isProfileName",void 0),vt([(0,y.Cb)()],yt.prototype,"address",void 0),yt=vt([p("wui-account-button")],yt);var bt=n.iv`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,wt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let xt=class extends n.oi{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),n.dy` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?n.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:n.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};xt.styles=[d,bt],wt([(0,y.Cb)()],xt.prototype,"size",void 0),wt([(0,y.Cb)()],xt.prototype,"name",void 0),wt([(0,y.Cb)()],xt.prototype,"imageSrc",void 0),wt([(0,y.Cb)()],xt.prototype,"walletIcon",void 0),xt=wt([p("wui-wallet-image")],xt);var _t=n.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,Et=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let St=class extends n.oi{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return n.dy`${this.walletImages.slice(0,4).map((e=>{let{src:t,walletName:r}=e;return n.dy`
          <wui-wallet-image
            size="inherit"
            imageSrc=${t}
            name=${(0,ot.o)(r)}
          ></wui-wallet-image>
        `}))}
    ${e?[...Array(4-this.walletImages.length)].map((()=>n.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}`}};St.styles=[d,_t],Et([(0,y.Cb)({type:Array})],St.prototype,"walletImages",void 0),St=Et([p("wui-all-wallets-image")],St);var kt=n.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,Ct=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let At=class extends n.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};`;const e="md"===this.size?"paragraph-600":"small-600";return n.dy`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?n.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:n.dy``}};At.styles=[d,h,kt],Ct([(0,y.Cb)()],At.prototype,"size",void 0),Ct([(0,y.Cb)({type:Boolean})],At.prototype,"disabled",void 0),Ct([(0,y.Cb)({type:Boolean})],At.prototype,"fullWidth",void 0),Ct([(0,y.Cb)({type:Boolean})],At.prototype,"loading",void 0),Ct([(0,y.Cb)()],At.prototype,"variant",void 0),At=Ct([p("wui-button")],At);const Pt=n.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var It=n.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,Rt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ot=class extends n.oi{constructor(){super(...arguments),this.type="wallet"}render(){return n.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?n.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Pt}`:n.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Ot.styles=[d,h,It],Rt([(0,y.Cb)()],Ot.prototype,"type",void 0),Ot=Rt([p("wui-card-select-loader")],Ot);const Tt=n.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var Mt=n.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,Nt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let jt=class extends n.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e="lg"===this.size;return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};\n      --local-width: ${e?"86px":"48px"};\n      --local-height: ${e?"96px":"54px"};\n      --local-icon-size: ${e?"42px":"24px"};\n    `,n.dy`${this.templateVisual()} ${e?Tt:Pt}`}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:n.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};jt.styles=[d,Mt],Nt([(0,y.Cb)()],jt.prototype,"size",void 0),Nt([(0,y.Cb)()],jt.prototype,"name",void 0),Nt([(0,y.Cb)()],jt.prototype,"imageSrc",void 0),Nt([(0,y.Cb)({type:Boolean})],jt.prototype,"selected",void 0),jt=Nt([p("wui-network-image")],jt);var Lt=n.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,Dt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let $t=class extends n.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return n.dy`
      <button data-selected=${(0,ot.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?n.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,ot.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:n.dy`
      <wui-wallet-image size="md" imageSrc=${(0,ot.o)(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};$t.styles=[d,h,Lt],Dt([(0,y.Cb)()],$t.prototype,"name",void 0),Dt([(0,y.Cb)()],$t.prototype,"type",void 0),Dt([(0,y.Cb)()],$t.prototype,"imageSrc",void 0),Dt([(0,y.Cb)({type:Boolean})],$t.prototype,"disabled",void 0),Dt([(0,y.Cb)({type:Boolean})],$t.prototype,"selected",void 0),$t=Dt([p("wui-card-select")],$t);var Bt=n.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,Zt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let zt=class extends n.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const e="transparent"===this.variant?"small-600":"paragraph-600";return n.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${st.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};zt.styles=[d,h,Bt],Zt([(0,y.Cb)()],zt.prototype,"variant",void 0),Zt([(0,y.Cb)()],zt.prototype,"imageSrc",void 0),Zt([(0,y.Cb)({type:Boolean})],zt.prototype,"disabled",void 0),Zt([(0,y.Cb)()],zt.prototype,"icon",void 0),Zt([(0,y.Cb)()],zt.prototype,"href",void 0),zt=Zt([p("wui-chip")],zt);var Ut=n.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,Ft=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Wt=class extends n.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return n.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?n.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Wt.styles=[d,h,Ut],Ft([(0,y.Cb)()],Wt.prototype,"size",void 0),Ft([(0,y.Cb)({type:Boolean})],Wt.prototype,"loading",void 0),Wt=Ft([p("wui-connect-button")],Wt);var Ht=n.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,Vt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let qt=class extends n.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return n.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};qt.styles=[d,h,Ht],Vt([(0,y.Cb)({type:Boolean})],qt.prototype,"disabled",void 0),Vt([(0,y.Cb)()],qt.prototype,"label",void 0),Vt([(0,y.Cb)()],qt.prototype,"buttonLabel",void 0),qt=Vt([p("wui-cta-button")],qt);const{D:Yt}=Me.Al,Gt=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const n of r)n._$AO?.(t,!1),Gt(n,t);return!0},Kt=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},Jt=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),er(t)}};function Qt(e){void 0!==this._$AN?(Kt(this),this._$AM=e,Jt(this)):this._$AM=e}function Xt(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(n))for(let o=r;o<n.length;o++)Gt(n[o],!1),Kt(n[o]);else null!=n&&(Gt(n,!1),Kt(n));else Gt(this,e)}const er=e=>{e.type==je&&(e._$AP??=Xt,e._$AQ??=Qt)};class tr extends De{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Jt(this),this.isConnected=e._$AU}_$AO(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Gt(this,e),Kt(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const rr=()=>new nr;class nr{}const ir=new WeakMap,or=Le(class extends tr{render(e){return Me.Ld}update(e,t){let[r]=t;const n=r!==this.G;return n&&void 0!==this.G&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=r,this.ct=e.options?.host,this.ot(this.lt=e.element)),Me.Ld}ot(e){if("function"==typeof this.G){const t=this.ct??globalThis;let r=ir.get(t);void 0===r&&(r=new WeakMap,ir.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?ir.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var sr=n.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,ar=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let lr=class extends n.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=rr()}render(){const e=`wui-size-${this.size}`;return n.dy` ${this.templateIcon()}
      <input
        ${or(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,ot.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?n.dy`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};lr.styles=[d,h,sr],ar([(0,y.Cb)()],lr.prototype,"size",void 0),ar([(0,y.Cb)()],lr.prototype,"icon",void 0),ar([(0,y.Cb)({type:Boolean})],lr.prototype,"disabled",void 0),ar([(0,y.Cb)()],lr.prototype,"placeholder",void 0),ar([(0,y.Cb)()],lr.prototype,"type",void 0),ar([(0,y.Cb)()],lr.prototype,"keyHint",void 0),lr=ar([p("wui-input-text")],lr);var cr=n.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,ur=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let dr=class extends n.oi{render(){return n.dy`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?n.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};dr.styles=[d,cr],ur([(0,y.Cb)()],dr.prototype,"errorMessage",void 0),dr=ur([p("wui-email-input")],dr);var hr=n.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,fr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let pr=class extends n.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return n.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};pr.styles=[d,h,f,hr],fr([(0,y.Cb)()],pr.prototype,"size",void 0),fr([(0,y.Cb)({type:Boolean})],pr.prototype,"disabled",void 0),fr([(0,y.Cb)()],pr.prototype,"icon",void 0),fr([(0,y.Cb)()],pr.prototype,"iconColor",void 0),pr=fr([p("wui-icon-link")],pr);var gr=n.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,mr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let vr=class extends n.oi{constructor(){super(...arguments),this.icon="copy"}render(){return n.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};vr.styles=[d,h,gr],mr([(0,y.Cb)()],vr.prototype,"icon",void 0),vr=mr([p("wui-input-element")],vr);var yr=n.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,br=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let wr=class extends n.oi{constructor(){super(...arguments),this.disabled=!1}render(){return n.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};wr.styles=[d,h,yr],br([(0,y.Cb)({type:Boolean})],wr.prototype,"disabled",void 0),wr=br([p("wui-input-numeric")],wr);var xr=n.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,_r=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Er=class extends n.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return n.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Er.styles=[d,h,xr],_r([(0,y.Cb)({type:Boolean})],Er.prototype,"disabled",void 0),_r([(0,y.Cb)()],Er.prototype,"color",void 0),Er=_r([p("wui-link")],Er);var Sr=n.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,kr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Cr=class extends n.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return n.dy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,ot.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return n.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return n.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return n.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?n.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:n.dy``}chevronTemplate(){return this.chevron?n.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};var Ar;Cr.styles=[d,h,Sr],kr([(0,y.Cb)()],Cr.prototype,"icon",void 0),kr([(0,y.Cb)()],Cr.prototype,"iconSize",void 0),kr([(0,y.Cb)()],Cr.prototype,"variant",void 0),kr([(0,y.Cb)()],Cr.prototype,"iconVariant",void 0),kr([(0,y.Cb)({type:Boolean})],Cr.prototype,"disabled",void 0),kr([(0,y.Cb)()],Cr.prototype,"imageSrc",void 0),kr([(0,y.Cb)()],Cr.prototype,"alt",void 0),kr([(0,y.Cb)({type:Boolean})],Cr.prototype,"chevron",void 0),kr([(0,y.Cb)({type:Boolean})],Cr.prototype,"loading",void 0),Cr=kr([p("wui-list-item")],Cr),function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(Ar||(Ar={}));var Pr=n.iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    outline: 1px solid var(--wui-gray-glass-005);
    outline-offset: -1px;
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,Ir=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Rr=class extends n.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r="NFT"===e?.type,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",o=(t?.url?"NFT"===t.type:r)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${i};\n    --local-right-border-radius: ${o};\n    `,n.dy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?n.dy`<div class="swap-images-container">
        ${e?.url?n.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?n.dy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?n.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?n.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:n.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?n.dy`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Rr.styles=[Pr],Ir([(0,y.Cb)()],Rr.prototype,"type",void 0),Ir([(0,y.Cb)()],Rr.prototype,"status",void 0),Ir([(0,y.Cb)()],Rr.prototype,"direction",void 0),Ir([(0,y.Cb)()],Rr.prototype,"onlyDirectionIcon",void 0),Ir([(0,y.Cb)()],Rr.prototype,"images",void 0),Ir([(0,y.Cb)()],Rr.prototype,"secondImage",void 0),Rr=Ir([p("wui-transaction-visual")],Rr);var Or=n.iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,Tr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Mr=class extends n.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return n.dy`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Ar[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?n.dy`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?n.dy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};Mr.styles=[d,Or],Tr([(0,y.Cb)()],Mr.prototype,"type",void 0),Tr([(0,y.Cb)()],Mr.prototype,"descriptions",void 0),Tr([(0,y.Cb)()],Mr.prototype,"date",void 0),Tr([(0,y.Cb)()],Mr.prototype,"onlyDirectionIcon",void 0),Tr([(0,y.Cb)()],Mr.prototype,"status",void 0),Tr([(0,y.Cb)()],Mr.prototype,"direction",void 0),Tr([(0,y.Cb)()],Mr.prototype,"images",void 0),Mr=Tr([p("wui-transaction-list-item")],Mr);var Nr=n.iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,jr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Lr=class extends n.oi{render(){return n.dy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Lr.styles=[d,Nr],Lr=jr([p("wui-transaction-list-item-loader")],Lr);var Dr=n.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,$r=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Br=class extends n.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,n.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};Br.styles=[d,Dr],$r([(0,y.Cb)()],Br.prototype,"variant",void 0),Br=$r([p("wui-tag")],Br);var Zr=n.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,zr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ur=class extends n.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return n.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?n.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?n.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?n.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:n.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?n.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?n.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Ur.styles=[d,h,Zr],zr([(0,y.Cb)({type:Array})],Ur.prototype,"walletImages",void 0),zr([(0,y.Cb)()],Ur.prototype,"imageSrc",void 0),zr([(0,y.Cb)()],Ur.prototype,"name",void 0),zr([(0,y.Cb)()],Ur.prototype,"tagLabel",void 0),zr([(0,y.Cb)()],Ur.prototype,"tagVariant",void 0),zr([(0,y.Cb)()],Ur.prototype,"icon",void 0),zr([(0,y.Cb)()],Ur.prototype,"walletIcon",void 0),zr([(0,y.Cb)({type:Boolean})],Ur.prototype,"disabled",void 0),zr([(0,y.Cb)({type:Boolean})],Ur.prototype,"showAllWallets",void 0),Ur=zr([p("wui-list-wallet")],Ur);var Fr=n.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,Wr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Hr=class extends n.oi{constructor(){super(...arguments),this.logo="google"}render(){return n.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Hr.styles=[d,Fr],Wr([(0,y.Cb)()],Hr.prototype,"logo",void 0),Hr=Wr([p("wui-logo")],Hr);var Vr=n.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,qr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Yr=class extends n.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return n.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Yr.styles=[d,h,Vr],qr([(0,y.Cb)()],Yr.prototype,"logo",void 0),qr([(0,y.Cb)({type:Boolean})],Yr.prototype,"disabled",void 0),Yr=qr([p("wui-logo-select")],Yr);var Gr=n.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`,Kr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Jr=class extends n.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return n.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc}></wui-image>`:n.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Jr.styles=[d,h,Gr],Kr([(0,y.Cb)()],Jr.prototype,"imageSrc",void 0),Kr([(0,y.Cb)({type:Boolean})],Jr.prototype,"disabled",void 0),Jr=Kr([p("wui-network-button")],Jr);var Qr=n.iv`
  :host {
    position: relative;
    display: block;
  }
`,Xr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let en=class extends n.oi{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,t)=>{const r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):n.value=""}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1,r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}if("prev"===e){const e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return n.dy`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map(((e,t)=>n.dy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}handleInput(e,t){const r=e.target,n=this.getInputElement(r);if(n){const r=n.value;if("insertFromPaste"===e.inputType)this.handlePaste(n,r,t);else{st.isNumber(r)&&e.data?(n.value=e.data,this.focusInputField("next",t)):n.value=""}}}handlePaste(e,t,r){const n=t[0];if(n&&st.isNumber(n)){e.value=n;const i=t.substring(1);if(r+1<this.length&&i.length){const e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}};en.styles=[d,Qr],Xr([(0,y.Cb)({type:Number})],en.prototype,"length",void 0),en=Xr([p("wui-otp")],en);var tn=r(20741);function rn(e,t,r){if(e===t)return!1;return(e-t<0?t-e:e-t)<=r+.1}const nn={generate(e,t,r){const i="#141414",o=[],s=function(e,t){const r=Array.prototype.slice.call(tn.create(e,{errorCorrectionLevel:t}).modules.data,0),n=Math.sqrt(r.length);return r.reduce(((e,t,r)=>(r%n===0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e,"Q"),a=t/s.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach((e=>{let{x:t,y:r}=e;const c=(s.length-7)*a*t,u=(s.length-7)*a*r,d=.45;for(let s=0;s<l.length;s+=1){const e=a*(7-2*s);o.push(n.YP`
            <rect
              fill=${2===s?i:"transparent"}
              width=${0===s?e-5:e}
              rx= ${0===s?(e-5)*d:e*d}
              ry= ${0===s?(e-5)*d:e*d}
              stroke=${i}
              stroke-width=${0===s?5:0}
              height=${0===s?e-5:e}
              x= ${0===s?u+a*s+2.5:u+a*s}
              y= ${0===s?c+a*s+2.5:c+a*s}
            />
          `)}}));const c=Math.floor((r+25)/a),u=s.length/2-c/2,d=s.length/2+c/2-1,h=[];s.forEach(((e,t)=>{e.forEach(((e,r)=>{if(s[t][r]&&!(t<7&&r<7||t>s.length-8&&r<7||t<7&&r>s.length-8)&&!(t>u&&t<d&&r>u&&r<d)){const e=t*a+a/2,n=r*a+a/2;h.push([e,n])}}))}));const f={};return h.forEach((e=>{let[t,r]=e;f[t]?f[t]?.push(r):f[t]=[r]})),Object.entries(f).map((e=>{let[t,r]=e;const n=r.filter((e=>r.every((t=>!rn(e,t,a)))));return[Number(t),n]})).forEach((e=>{let[t,r]=e;r.forEach((e=>{o.push(n.YP`<circle cx=${t} cy=${e} fill=${i} r=${a/2.5} />`)}))})),Object.entries(f).filter((e=>{let[t,r]=e;return r.length>1})).map((e=>{let[t,r]=e;const n=r.filter((e=>r.some((t=>rn(e,t,a)))));return[Number(t),n]})).map((e=>{let[t,r]=e;r.sort(((e,t)=>e<t?-1:1));const n=[];for(const i of r){const e=n.find((e=>e.some((e=>rn(i,e,a)))));e?e.push(i):n.push([i])}return[t,n.map((e=>[e[0],e[e.length-1]]))]})).forEach((e=>{let[t,r]=e;r.forEach((e=>{let[r,s]=e;o.push(n.YP`
              <line
                x1=${t}
                x2=${t}
                y1=${r}
                y2=${s}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)}))})),o}};var on=n.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,sn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let an=class extends n.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,n.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return n.YP`
      <svg height=${e} width=${e}>
        ${nn.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:n.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};an.styles=[d,on],sn([(0,y.Cb)()],an.prototype,"uri",void 0),sn([(0,y.Cb)({type:Number})],an.prototype,"size",void 0),sn([(0,y.Cb)()],an.prototype,"theme",void 0),sn([(0,y.Cb)()],an.prototype,"imageSrc",void 0),sn([(0,y.Cb)()],an.prototype,"alt",void 0),an=sn([p("wui-qr-code")],an);var ln=n.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,cn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let un=class extends n.oi{constructor(){super(...arguments),this.inputComponentRef=rr()}render(){return n.dy`
      <wui-input-text
        ${or(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value?.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};un.styles=[d,ln],un=cn([p("wui-search-bar")],un);var dn=n.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,hn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let fn=class extends n.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return n.dy`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};fn.styles=[d,dn],hn([(0,y.Cb)()],fn.prototype,"backgroundColor",void 0),hn([(0,y.Cb)()],fn.prototype,"iconColor",void 0),hn([(0,y.Cb)()],fn.prototype,"icon",void 0),hn([(0,y.Cb)()],fn.prototype,"message",void 0),fn=hn([p("wui-snackbar")],fn);var pn=n.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`,gn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let mn=class extends n.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const r=t===this.activeTab;return n.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],n=this.buttons[e],i=r?.querySelector("wui-text"),o=n?.querySelector("wui-text"),s=n?.getBoundingClientRect(),a=o?.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&s&&a&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(s.width+a.width)+6}px`,n.animate([{width:`${s.width+a.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};mn.styles=[d,h,pn],gn([(0,y.Cb)({type:Array})],mn.prototype,"tabs",void 0),gn([(0,y.Cb)()],mn.prototype,"onTabChange",void 0),gn([(0,y.Cb)({type:Array})],mn.prototype,"buttons",void 0),gn([(0,y.Cb)({type:Boolean})],mn.prototype,"disabled",void 0),gn([(0,y.SB)()],mn.prototype,"activeTab",void 0),gn([(0,y.SB)()],mn.prototype,"localTabWidth",void 0),gn([(0,y.SB)()],mn.prototype,"isDense",void 0),mn=gn([p("wui-tabs")],mn);var vn=n.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,yn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let bn=class extends n.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return n.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};bn.styles=[d,h,vn],yn([(0,y.Cb)()],bn.prototype,"placement",void 0),yn([(0,y.Cb)()],bn.prototype,"message",void 0),bn=yn([p("wui-tooltip")],bn);var wn=n.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,xn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _n=class extends n.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,n.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:n.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};_n.styles=[d,wn],xn([(0,y.Cb)()],_n.prototype,"imageSrc",void 0),xn([(0,y.Cb)()],_n.prototype,"alt",void 0),xn([(0,y.Cb)({type:Boolean})],_n.prototype,"borderRadiusFull",void 0),_n=xn([p("wui-visual-thumbnail")],_n);var En=n.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,Sn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let kn=class extends n.oi{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&st.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&st.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&st.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&st.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&st.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&st.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&st.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&st.getSpacingStyles(this.margin,3)};\n    `,n.dy`<slot></slot>`}};kn.styles=[d,En],Sn([(0,y.Cb)()],kn.prototype,"gridTemplateRows",void 0),Sn([(0,y.Cb)()],kn.prototype,"gridTemplateColumns",void 0),Sn([(0,y.Cb)()],kn.prototype,"justifyItems",void 0),Sn([(0,y.Cb)()],kn.prototype,"alignItems",void 0),Sn([(0,y.Cb)()],kn.prototype,"justifyContent",void 0),Sn([(0,y.Cb)()],kn.prototype,"alignContent",void 0),Sn([(0,y.Cb)()],kn.prototype,"columnGap",void 0),Sn([(0,y.Cb)()],kn.prototype,"rowGap",void 0),Sn([(0,y.Cb)()],kn.prototype,"gap",void 0),Sn([(0,y.Cb)()],kn.prototype,"padding",void 0),Sn([(0,y.Cb)()],kn.prototype,"margin",void 0),kn=Sn([p("wui-grid")],kn);var Cn=n.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,An=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Pn=class extends n.oi{constructor(){super(...arguments),this.text=""}render(){return n.dy`${this.template()}`}template(){return this.text?n.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Pn.styles=[d,Cn],An([(0,y.Cb)()],Pn.prototype,"text",void 0),Pn=An([p("wui-separator")],Pn);var In=r(90506);const Rn=["receive","deposit","borrow","claim"],On=["withdraw","repay","burn"],Tn={getTransactionGroupTitle(e){return e===In.E.getYear()?"This Year":e},getTransactionImages(e){const[t,r]=e,n=Boolean(t)&&e?.every((e=>Boolean(e.nft_info))),i=e?.length>1;return 2===e?.length&&!n?[this.getTransactionImage(t),this.getTransactionImage(r)]:i?e.map((e=>this.getTransactionImage(e))):[this.getTransactionImage(t)]},getTransactionImage(e){return{type:Tn.getTransactionTransferTokenType(e),url:Tn.getTransactionImageURL(e)}},getTransactionImageURL(e){let t=null;const r=Boolean(e?.nft_info),n=Boolean(e?.fungible_info);return e&&r?t=e?.nft_info?.content?.preview?.url:e&&n&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType(e){return e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":null},getTransactionDescriptions(e){const t=e.metadata?.operationType,r=e.transfers,n=e.transfers?.length>0,i=e.transfers?.length>1,o=n&&r?.every((e=>Boolean(e.fungible_info))),[s,a]=r;let l=this.getTransferDescription(s),c=this.getTransferDescription(a);if(!n){return("send"===t||"receive"===t)&&o?(l=st.getTruncateString({string:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),c=st.getTruncateString({string:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[l,c]):[e.metadata.status]}if(i)return r.map((e=>this.getTransferDescription(e)));let u="";return Rn.includes(t)?u="+":On.includes(t)&&(u="-"),l=u.concat(l),[l]},getTransferDescription(e){let t="";return e?(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-"),t):t},getFungibleTransferDescription(e){if(!e)return null;return[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim()},getQuantityFixedValue(e){if(!e)return null;return parseFloat(e).toFixed(3)}}},40446:function(e,t,r){"use strict";r.r(t),r.d(t,{__addDisposableResource:function(){return N},__assign:function(){return o},__asyncDelegator:function(){return k},__asyncGenerator:function(){return S},__asyncValues:function(){return C},__await:function(){return E},__awaiter:function(){return p},__classPrivateFieldGet:function(){return O},__classPrivateFieldIn:function(){return M},__classPrivateFieldSet:function(){return T},__createBinding:function(){return m},__decorate:function(){return a},__disposeResources:function(){return L},__esDecorate:function(){return c},__exportStar:function(){return v},__extends:function(){return i},__generator:function(){return g},__importDefault:function(){return R},__importStar:function(){return I},__makeTemplateObject:function(){return A},__metadata:function(){return f},__param:function(){return l},__propKey:function(){return d},__read:function(){return b},__rest:function(){return s},__runInitializers:function(){return u},__setFunctionName:function(){return h},__spread:function(){return w},__spreadArray:function(){return _},__spreadArrays:function(){return x},__values:function(){return y}});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function s(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function a(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}function l(e,t){return function(r,n){t(r,n,e)}}function c(e,t,r,n,i,o){function s(e){if(void 0!==e&&"function"!==typeof e)throw new TypeError("Function expected");return e}for(var a,l=n.kind,c="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?n.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),h=!1,f=r.length-1;f>=0;f--){var p={};for(var g in n)p[g]="access"===g?{}:n[g];for(var g in n.access)p.access[g]=n.access[g];p.addInitializer=function(e){if(h)throw new TypeError("Cannot add initializers after decoration has completed");o.push(s(e||null))};var m=(0,r[f])("accessor"===l?{get:d.get,set:d.set}:d[c],p);if("accessor"===l){if(void 0===m)continue;if(null===m||"object"!==typeof m)throw new TypeError("Object expected");(a=s(m.get))&&(d.get=a),(a=s(m.set))&&(d.set=a),(a=s(m.init))&&i.unshift(a)}else(a=s(m))&&("field"===l?i.unshift(a):d[c]=a)}u&&Object.defineProperty(u,n.name,d),h=!0}function u(e,t,r){for(var n=arguments.length>2,i=0;i<t.length;i++)r=n?t[i].call(e,r):t[i].call(e);return n?r:void 0}function d(e){return"symbol"===typeof e?e:"".concat(e)}function h(e,t,r){return"symbol"===typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function f(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function p(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))}function g(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(l){a=[6,l],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var m=Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function v(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||m(t,e,r)}function y(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(a){i={error:a}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function x(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)n[i]=o[s];return n}function _(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function E(e){return this instanceof E?(this.v=e,this):new E(e)}function S(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),o=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){i[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||a(e,t)}))})}function a(e,t){try{(r=i[e](t)).value instanceof E?Promise.resolve(r.value.v).then(l,c):u(o[0][2],r)}catch(n){u(o[0][3],n)}var r}function l(e){a("next",e)}function c(e){a("throw",e)}function u(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}function k(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:E(e[n](t)),done:!1}:i?i(t):t}:i}}function C(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=y(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,i){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,i,(t=e[r](t)).done,t.value)}))}}}function A(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var P=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function I(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&m(t,e,r);return P(t,e),t}function R(e){return e&&e.__esModule?e:{default:e}}function O(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function T(e,t,r,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r}function M(e,t){if(null===t||"object"!==typeof t&&"function"!==typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"===typeof e?t===e:e.has(t)}function N(e,t,r){if(null!==t&&void 0!==t){if("object"!==typeof t&&"function"!==typeof t)throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if("function"!==typeof n)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var j="function"===typeof SuppressedError?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function L(e){function t(t){e.error=e.hasError?new j(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function r(){for(;e.stack.length;){var n=e.stack.pop();try{var i=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(i).then(r,(function(e){return t(e),r()}))}catch(o){t(o)}}if(e.hasError)throw e.error}()}t.default={__extends:i,__assign:o,__rest:s,__decorate:a,__param:l,__metadata:f,__awaiter:p,__generator:g,__createBinding:m,__exportStar:v,__values:y,__read:b,__spread:w,__spreadArrays:x,__spreadArray:_,__await:E,__asyncGenerator:S,__asyncDelegator:k,__asyncValues:C,__makeTemplateObject:A,__importStar:I,__importDefault:R,__classPrivateFieldGet:O,__classPrivateFieldSet:T,__classPrivateFieldIn:M,__addDisposableResource:N,__disposeResources:L}},5352:function(e,t,r){"use strict";r.d(t,{Cb:function(){return s},SB:function(){return a}});var n=r(58856);const i={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;const{kind:n,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,e),"accessor"===n){const{name:n}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){const{name:n}=r;return function(r){const i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function s(e){return(t,r)=>"object"==typeof r?o(e,t,r):((e,t,r)=>{const n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function a(e){return s({...e,state:!0,attribute:!1})}},14378:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(52475);const i=e=>e??n.Ld},28940:function(e,t,r){"use strict";r.d(t,{oi:function(){return de},iv:function(){return c},dy:function(){return Y},YP:function(){return G},$m:function(){return l}});r(58856),r(52475);const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}const l=e=>new a("string"==typeof e?e:e+"",void 0,o),c=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];const i=1===e.length?e[0]:r.reduce(((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1]),e[0]);return new a(i,e,o)},u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:h,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:m,getPrototypeOf:v}=Object,y=globalThis,b=y.trustedTypes,w=b?b.emptyScript:"",x=y.reactiveElementPolyfillSupport,_=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?w:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},S=(e,t)=>!h(e,t),k={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k;if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&f(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const e=this.properties,t=[...g(e),...m(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const e=this._$Eu(t,r);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4?arguments[4]:void 0;if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??S)(n?i:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[_("elementProperties")]=new Map,C[_("finalized")]=new Map,x?.({ReactiveElement:C}),(y.reactiveElementVersions??=[]).push("2.0.2");const A=globalThis,P=A.trustedTypes,I=P?P.createPolicy("lit-html",{createHTML:e=>e}):void 0,R="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,T="?"+O,M=`<${T}>`,N=document,j=()=>N.createComment(""),L=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,$=e=>D(e)||"function"==typeof e?.[Symbol.iterator],B="[ \t\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,U=/>/g,F=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,H=/"/g,V=/^(?:script|style|textarea|title)$/i,q=e=>function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return{_$litType$:e,strings:t,values:n}},Y=q(1),G=q(2),K=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Q=new WeakMap,X=N.createTreeWalker(N,129);function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(t):t}const te=(e,t)=>{const r=e.length-1,n=[];let i,o=2===t?"<svg>":"",s=Z;for(let a=0;a<r;a++){const t=e[a];let r,l,c=-1,u=0;for(;u<t.length&&(s.lastIndex=u,l=s.exec(t),null!==l);)u=s.lastIndex,s===Z?"!--"===l[1]?s=z:void 0!==l[1]?s=U:void 0!==l[2]?(V.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=F):void 0!==l[3]&&(s=F):s===F?">"===l[0]?(s=i??Z,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?F:'"'===l[3]?H:W):s===H||s===W?s=F:s===z||s===U?s=Z:(s=F,i=void 0);const d=s===F&&e[a+1].startsWith("/>")?" ":"";o+=s===Z?t+M:c>=0?(n.push(r),t.slice(0,c)+R+t.slice(c)+O+d):t+O+(-2===c?a:d)}return[ee(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class re{constructor(e,t){let r,{strings:n,_$litType$:i}=e;this.parts=[];let o=0,s=0;const a=n.length-1,l=this.parts,[c,u]=te(n,i);if(this.el=re.createElement(c,t),X.currentNode=this.el.content,2===i){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=X.nextNode())&&l.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(R)){const t=u[s++],n=r.getAttribute(e).split(O),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:o,name:i[2],strings:n,ctor:"."===i[1]?ae:"?"===i[1]?le:"@"===i[1]?ce:se}),r.removeAttribute(e)}else e.startsWith(O)&&(l.push({type:6,index:o}),r.removeAttribute(e));if(V.test(r.tagName)){const e=r.textContent.split(O),t=e.length-1;if(t>0){r.textContent=P?P.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],j()),X.nextNode(),l.push({type:2,index:++o});r.append(e[t],j())}}}else if(8===r.nodeType)if(r.data===T)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(O,e+1));)l.push({type:7,index:o}),e+=O.length-1}o++}}static createElement(e,t){const r=N.createElement("template");return r.innerHTML=e,r}}function ne(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,n=arguments.length>3?arguments[3]:void 0;if(t===K)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=L(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=ne(e,i._$AS(e,t.values),i,n)),t}class ie{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??N).importNode(t,!0);X.currentNode=n;let i=X.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new oe(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new ue(i,this,e)),this._$AV.push(t),a=r[++s]}o!==a?.index&&(i=X.nextNode(),o++)}return X.currentNode=N,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){e=ne(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),L(e)?e===J||null==e||""===e?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):$(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==J&&L(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=re.createElement(ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new ie(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new re(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new oe(this.k(j()),this.k(j()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=J}_$AI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;const i=this.strings;let o=!1;if(void 0===i)e=ne(this,e,t,0),o=!L(e)||e!==this._$AH&&e!==K,o&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=ne(this,n[r+s],t,s),a===K&&(a=this._$AH[s]),o||=!L(a)||a!==this._$AH[s],a===J?e=J:e!==J&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.O(e)}O(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ae extends se{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===J?void 0:e}}class le extends se{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}}class ce extends se{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e){if((e=ne(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0)??J)===K)return;const t=this._$AH,r=e===J&&t!==J||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==J&&(t===J||r);r&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ue{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}}(0,A.litHtmlPolyfillSupport)?.(re,oe),(A.litHtmlVersions??=[]).push("3.1.0");class de extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(void 0===i){const e=r?.renderBefore??null;n._$litPart$=i=new oe(t.insertBefore(j(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}de._$litElement$=!0,de.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:de});(0,globalThis.litElementPolyfillSupport)?.({LitElement:de});(globalThis.litElementVersions??=[]).push("4.0.2")},58856:function(e,t,r){"use strict";r.d(t,{Ts:function(){return x},Qu:function(){return _}});const n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class a{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}const l=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},c=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:u,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:g}=Object,m=globalThis,v=m.trustedTypes,y=v?v.emptyScript:"",b=m.reactiveElementPolyfillSupport,w=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},_=(e,t)=>!u(e,t),E={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&d(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const o=n?.call(this);i.call(this,t),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??E}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,t=[...f(e),...p(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const e=this._$Eu(t,r);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$E_??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:x).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4?arguments[4]:void 0;if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??_)(n?i:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$E_?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$E_?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[w("elementProperties")]=new Map,S[w("finalized")]=new Map,b?.({ReactiveElement:S}),(m.reactiveElementVersions??=[]).push("2.0.2")},52475:function(e,t,r){"use strict";r.d(t,{Al:function(){return B},Jb:function(){return S},Ld:function(){return k}});const n=globalThis,i=n.trustedTypes,o=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,s="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,l="?"+a,c=`<${l}>`,u=document,d=()=>u.createComment(""),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,f=Array.isArray,p=e=>f(e)||"function"==typeof e?.[Symbol.iterator],g="[ \t\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,y=/>/g,b=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),w=/'/g,x=/"/g,_=/^(?:script|style|textarea|title)$/i,E=e=>function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return{_$litType$:e,strings:t,values:n}},S=(E(1),E(2),Symbol.for("lit-noChange")),k=Symbol.for("lit-nothing"),C=new WeakMap,A=u.createTreeWalker(u,129);function P(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(t):t}const I=(e,t)=>{const r=e.length-1,n=[];let i,o=2===t?"<svg>":"",l=m;for(let u=0;u<r;u++){const t=e[u];let r,d,h=-1,f=0;for(;f<t.length&&(l.lastIndex=f,d=l.exec(t),null!==d);)f=l.lastIndex,l===m?"!--"===d[1]?l=v:void 0!==d[1]?l=y:void 0!==d[2]?(_.test(d[2])&&(i=RegExp("</"+d[2],"g")),l=b):void 0!==d[3]&&(l=b):l===b?">"===d[0]?(l=i??m,h=-1):void 0===d[1]?h=-2:(h=l.lastIndex-d[2].length,r=d[1],l=void 0===d[3]?b:'"'===d[3]?x:w):l===x||l===w?l=b:l===v||l===y?l=m:(l=b,i=void 0);const p=l===b&&e[u+1].startsWith("/>")?" ":"";o+=l===m?t+c:h>=0?(n.push(r),t.slice(0,h)+s+t.slice(h)+a+p):t+a+(-2===h?u:p)}return[P(e,o+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class R{constructor(e,t){let r,{strings:n,_$litType$:o}=e;this.parts=[];let c=0,u=0;const h=n.length-1,f=this.parts,[p,g]=I(n,o);if(this.el=R.createElement(p,t),A.currentNode=this.el.content,2===o){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=A.nextNode())&&f.length<h;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(s)){const t=g[u++],n=r.getAttribute(e).split(a),i=/([.?@])?(.*)/.exec(t);f.push({type:1,index:c,name:i[2],strings:n,ctor:"."===i[1]?j:"?"===i[1]?L:"@"===i[1]?D:N}),r.removeAttribute(e)}else e.startsWith(a)&&(f.push({type:6,index:c}),r.removeAttribute(e));if(_.test(r.tagName)){const e=r.textContent.split(a),t=e.length-1;if(t>0){r.textContent=i?i.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],d()),A.nextNode(),f.push({type:2,index:++c});r.append(e[t],d())}}}else if(8===r.nodeType)if(r.data===l)f.push({type:2,index:c});else{let e=-1;for(;-1!==(e=r.data.indexOf(a,e+1));)f.push({type:7,index:c}),e+=a.length-1}c++}}static createElement(e,t){const r=u.createElement("template");return r.innerHTML=e,r}}function O(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,n=arguments.length>3?arguments[3]:void 0;if(t===S)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl;const o=h(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(e),i._$AT(e,r,n)),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=O(e,i._$AS(e,t.values),i,n)),t}class T{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??u).importNode(t,!0);A.currentNode=n;let i=A.nextNode(),o=0,s=0,a=r[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new M(i,i.nextSibling,this,e):1===a.type?t=new a.ctor(i,a.name,a.strings,this,e):6===a.type&&(t=new $(i,this,e)),this._$AV.push(t),a=r[++s]}o!==a?.index&&(i=A.nextNode(),o++)}return A.currentNode=u,n}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){e=O(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),h(e)?e===k||null==e||""===e?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):p(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==k&&h(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=R.createElement(P(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new T(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=C.get(e.strings);return void 0===t&&C.set(e.strings,t=new R(e)),t}T(e){f(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new M(this.k(d()),this.k(d()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=k}_$AI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;const i=this.strings;let o=!1;if(void 0===i)e=O(this,e,t,0),o=!h(e)||e!==this._$AH&&e!==S,o&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=O(this,n[r+s],t,s),a===S&&(a=this._$AH[s]),o||=!h(a)||a!==this._$AH[s],a===k?e=k:e!==k&&(e+=(a??"")+i[s+1]),this._$AH[s]=a}o&&!n&&this.O(e)}O(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class j extends N{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===k?void 0:e}}class L extends N{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}}class D extends N{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e){if((e=O(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0)??k)===S)return;const t=this._$AH,r=e===k&&t!==k||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==k&&(t===k||r);r&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ${constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const B={j:s,P:a,A:l,C:1,M:I,L:T,R:p,V:O,D:M,I:N,H:L,N:D,U:j,B:$};(0,n.litHtmlPolyfillSupport)?.(R,M),(n.litHtmlVersions??=[]).push("3.1.0")},61631:function(e,t,r){"use strict";r.d(t,{sj:function(){return p},iH:function(){return v},CO:function(){return m},Ld:function(){return g}});Symbol();const n=Symbol();const i=Object.getPrototypeOf,o=new WeakMap,s=e=>e&&(o.has(e)?o.get(e):i(e)===Object.prototype||i(e)===Array.prototype),a=e=>s(e)&&e[n]||null,l=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];o.set(e,t)},c=e=>"object"===typeof e&&null!==e,u=new WeakMap,d=new WeakSet,h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,t)=>new Proxy(e,t),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>c(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;const s=i.get(e);if((null==s?void 0:s[0])===t)return s[1];const a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return l(a,!0),i.set(e,[t,a]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(a,t))return;const n=Reflect.get(e,t),i={value:n,enumerable:!0,configurable:!0};if(d.has(n))l(n,!1);else if(n instanceof Promise)delete i.value,i.get=()=>r(n);else if(u.has(n)){const[e,t]=u.get(n);i.value=o(e,t(),r)}Object.defineProperty(a,t,i)})),Object.preventExtensions(a)},s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],f=arguments.length>8&&void 0!==arguments[8]?arguments[8]:n=>{if(!c(n))throw new Error("object required");const i=s.get(n);if(i)return i;let l=h[0];const p=new Set,g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++h[0];l!==t&&(l=t,p.forEach((r=>r(e,t))))};let m=h[1];const v=e=>(t,r)=>{const n=[...t];n[1]=[e,...n[1]],g(n,r)},y=new Map,b=e=>{var t;const r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},w=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),x={deleteProperty(e,t){const r=Reflect.get(e,t);b(t);const n=Reflect.deleteProperty(e,t);return n&&g(["delete",[t],r]),n},set(t,n,i,o){const l=Reflect.has(t,n),h=Reflect.get(t,n,o);if(l&&(e(h,i)||s.has(i)&&e(h,s.get(i))))return!0;b(n),c(i)&&(i=a(i)||i);let m=i;if(i instanceof Promise)i.then((e=>{i.status="fulfilled",i.value=e,g(["resolve",[n],e])})).catch((e=>{i.status="rejected",i.reason=e,g(["reject",[n],e])}));else{!u.has(i)&&r(i)&&(m=f(i));const e=!d.has(m)&&u.get(m);e&&((e,t)=>{if(y.has(e))throw new Error("prop listener already exists");if(p.size){const r=t[3](v(e));y.set(e,[t,r])}else y.set(e,[t])})(n,e)}return Reflect.set(t,n,m,o),g(["set",[n],i,h]),!0}},_=t(w,x);s.set(n,_);const E=[w,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++h[1];return m===e||p.size||(m=e,y.forEach((t=>{let[r]=t;const n=r[1](e);n>l&&(l=n)}))),l},o,e=>{p.add(e),1===p.size&&y.forEach(((e,t)=>{let[r,n]=e;if(n)throw new Error("remove already exists");const i=r[3](v(t));y.set(t,[r,i])}));return()=>{p.delete(e),0===p.size&&y.forEach(((e,t)=>{let[r,n]=e;n&&(n(),y.set(t,[r]))}))}}];return u.set(_,E),Reflect.ownKeys(n).forEach((e=>{const t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(_[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(w,e,t)})),_};return[f,u,d,e,t,r,n,i,o,s,h]},[f]=h();function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f(e)}function g(e,t,r){const n=u.get(e);let i;n||console.warn("Please use proxy object");const o=[],s=n[3];let a=!1;const l=s((e=>{o.push(e),r?t(o.splice(0)):i||(i=Promise.resolve().then((()=>{i=void 0,a&&t(o.splice(0))})))}));return a=!0,()=>{a=!1,l()}}function m(e,t){const r=u.get(e);r||console.warn("Please use proxy object");const[n,i,o]=r;return o(n,i(),t)}function v(e){return d.add(e),e}},31085:function(e,t,r){"use strict";r.d(t,{VW:function(){return i}});var n=r(61631);function i(e,t,r,i){let o=e[t];return(0,n.Ld)(e,(()=>{const n=e[t];Object.is(o,n)||r(o=n)}),i)}Symbol()}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.amdO={},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var o=Object.create(null);r.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return n[e]}}));return s.default=function(){return n},r.d(o,s),o}}(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return"static/js/"+e+"."+{80:"728a0745",170:"478d6148",219:"03f3d185",319:"267cb4ad",338:"4e9b9712",418:"9c62085d",517:"fbed6aaa",584:"a6c45b3e",720:"95e2de13",773:"7373b49f",774:"8c319734",953:"564dac81",964:"a118c233"}[e]+".chunk.js"},r.miniCssF=function(e){},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={},t="saferbridge:";r.l=function(n,i,o,s){if(e[n])e[n].push(i);else{var a,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+o),a.src=n),e[n]=[i];var h=function(t,r){a.onerror=a.onload=null,clearTimeout(f);var i=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.p="/",function(){var e={179:0};r.f.j=function(t,n){var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise((function(r,n){i=e[t]=[r,n]}));n.push(i[2]=o);var s=r.p+r.u(t),a=new Error;r.l(s,(function(n){if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,i[1](a)}}),"chunk-"+t,t)}};var t=function(t,n){var i,o,s=n[0],a=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(l)l(r)}for(t&&t(n);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunksaferbridge=self.webpackChunksaferbridge||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){"use strict";var e={};r.r(e),r.d(e,{identity:function(){return zn}});var t={};r.r(t),r.d(t,{base2:function(){return Un}});var n={};r.r(n),r.d(n,{base8:function(){return Fn}});var i={};r.r(i),r.d(i,{base10:function(){return Wn}});var o={};r.r(o),r.d(o,{base16:function(){return Hn},base16upper:function(){return Vn}});var s={};r.r(s),r.d(s,{base32:function(){return qn},base32hex:function(){return Jn},base32hexpad:function(){return Xn},base32hexpadupper:function(){return ei},base32hexupper:function(){return Qn},base32pad:function(){return Gn},base32padupper:function(){return Kn},base32upper:function(){return Yn},base32z:function(){return ti}});var a={};r.r(a),r.d(a,{base36:function(){return ri},base36upper:function(){return ni}});var l={};r.r(l),r.d(l,{base58btc:function(){return ii},base58flickr:function(){return oi}});var c={};r.r(c),r.d(c,{base64:function(){return si},base64pad:function(){return ai},base64url:function(){return li},base64urlpad:function(){return ci}});var u={};r.r(u),r.d(u,{base256emoji:function(){return fi}});var d={};r.r(d),r.d(d,{sha256:function(){return Ni},sha512:function(){return ji}});var h={};r.r(h),r.d(h,{identity:function(){return Di}});var f={};r.r(f),r.d(f,{code:function(){return Bi},decode:function(){return zi},encode:function(){return Zi},name:function(){return $i}});var p={};r.r(p),r.d(p,{code:function(){return Hi},decode:function(){return qi},encode:function(){return Vi},name:function(){return Wi}});var g=r(1250),m=r(59434),v=r(72791),y=r(87462),b=r(68023),w=r(29598);var x="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",_=r(80184);var E=function(e){const{children:t,theme:r}=e,n=(0,w.Z)(),i=v.useMemo((()=>{const e=null===n?r:function(e,t){if("function"===typeof t)return t(e);return(0,y.Z)({},e,t)}(n,r);return null!=e&&(e[x]=null!==n),e}),[r,n]);return(0,_.jsx)(b.Z.Provider,{value:i,children:t})},S=r(29886),k=r(30418);const C={};function A(e){const t=(0,k.Z)();return(0,_.jsx)(S.T.Provider,{value:"object"===typeof t?t:C,children:e.children})}var P=function(e){const{children:t,theme:r}=e;return(0,_.jsx)(E,{theme:r,children:(0,_.jsx)(A,{children:t})})};const I=(0,r(83361).Z)({key:"css",prepend:!0});function R(e){const{injectFirst:t,children:r}=e;return t?(0,_.jsx)(S.C,{value:I,children:r}):r}var O=r(93736),T=r(25502);const M=(e,t)=>(0,y.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),N=e=>(0,y.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}});var j=function(e){const t=(0,O.Z)({props:e,name:"MuiCssBaseline"}),{children:r,enableColorScheme:n=!1}=t;return(0,_.jsxs)(v.Fragment,{children:[(0,_.jsx)(T.Z,{styles:e=>function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];var r,n;const i={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((t=>{let[r,n]=t;var o;i[e.getColorSchemeSelector(r).replace(/\s*&/,"")]={colorScheme:null==(o=n.palette)?void 0:o.mode}}));let o=(0,y.Z)({html:M(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,y.Z)({margin:0},N(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},i);const s=null==(r=e.components)||null==(n=r.MuiCssBaseline)?void 0:n.styleOverrides;return s&&(o=[o,s]),o}(e,n)}),r]})},L=r(16871),D=r(47630),$=r(13967),B=r(95193),Z=r(64554),z=r(63366),U=r(28182),F=r(94419),W=r(14036),H=r(35527),V=r(75878),q=r(21217);function Y(e){return(0,q.Z)("MuiAppBar",e)}(0,V.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const G=["className","color","enableColorOnDark","position"],K=(e,t)=>`${null==e?void 0:e.replace(")","")}, ${t})`,J=(0,D.ZP)(H.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`position${(0,W.Z)(r.position)}`],t[`color${(0,W.Z)(r.color)}`]]}})((e=>{let{theme:t,ownerState:r}=e;const n="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,y.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!t.vars&&(0,y.Z)({},"default"===r.color&&{backgroundColor:n,color:t.palette.getContrastText(n)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:t.palette[r.color].main,color:t.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===t.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,y.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"})),t.vars&&(0,y.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?t.vars.palette.AppBar.defaultBg:K(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?t.vars.palette.text.primary:K(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?t.vars.palette[r.color].main:K(t.vars.palette.AppBar.darkBg,t.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?t.vars.palette[r.color].contrastText:K(t.vars.palette.AppBar.darkColor,t.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),Q=v.forwardRef((function(e,t){const r=(0,O.Z)({props:e,name:"MuiAppBar"}),{className:n,color:i="primary",enableColorOnDark:o=!1,position:s="fixed"}=r,a=(0,z.Z)(r,G),l=(0,y.Z)({},r,{color:i,position:s,enableColorOnDark:o}),c=(e=>{const{color:t,position:r,classes:n}=e,i={root:["root",`color${(0,W.Z)(t)}`,`position${(0,W.Z)(r)}`]};return(0,F.Z)(i,Y,n)})(l);return(0,_.jsx)(J,(0,y.Z)({square:!0,component:"header",ownerState:l,elevation:4,className:(0,U.default)(c.root,n,"fixed"===s&&"mui-fixed"),ref:t},a))}));var X=Q;function ee(e){return(0,q.Z)("MuiToolbar",e)}(0,V.Z)("MuiToolbar",["root","gutters","regular","dense"]);const te=["className","component","disableGutters","variant"],re=(0,D.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((e=>{let{theme:t,ownerState:r}=e;return(0,y.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},"dense"===r.variant&&{minHeight:48})}),(e=>{let{theme:t,ownerState:r}=e;return"regular"===r.variant&&t.mixins.toolbar})),ne=v.forwardRef((function(e,t){const r=(0,O.Z)({props:e,name:"MuiToolbar"}),{className:n,component:i="div",disableGutters:o=!1,variant:s="regular"}=r,a=(0,z.Z)(r,te),l=(0,y.Z)({},r,{component:i,disableGutters:o,variant:s}),c=(e=>{const{classes:t,disableGutters:r,variant:n}=e,i={root:["root",!r&&"gutters",n]};return(0,F.Z)(i,ee,t)})(l);return(0,_.jsx)(re,(0,y.Z)({as:i,className:(0,U.default)(c.root,n),ref:t,ownerState:l},a))}));var ie=ne,oe=r(43504),se=r(20890),ae=r(57621),le=r(61889),ce=r(94721),ue=(r(57441),r(12065)),de=r(76189),he=(0,de.Z)((0,_.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),fe=r(50533);const pe=(0,D.ZP)(fe.Z)((e=>{let{theme:t}=e;return(0,y.Z)({display:"flex",marginLeft:`calc(${t.spacing(1)} * 0.5)`,marginRight:`calc(${t.spacing(1)} * 0.5)`},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,y.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,y.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,ue._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,ue._4)(t.palette.grey[600],.12)})})})),ge=(0,D.ZP)(he)({width:24,height:16});var me=function(e){const t=e;return(0,_.jsx)("li",{children:(0,_.jsx)(pe,(0,y.Z)({focusRipple:!0},e,{ownerState:t,children:(0,_.jsx)(ge,{ownerState:t})}))})};function ve(e){return(0,q.Z)("MuiBreadcrumbs",e)}var ye=(0,V.Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const be=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],we=(0,D.ZP)(se.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${ye.li}`]:t.li},t.root]})({}),xe=(0,D.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),_e=(0,D.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function Ee(e,t,r,n){return e.reduce(((i,o,s)=>(s<e.length-1?i=i.concat(o,(0,_.jsx)(_e,{"aria-hidden":!0,className:t,ownerState:n,children:r},`separator-${s}`)):i.push(o),i)),[])}const Se=v.forwardRef((function(e,t){const r=(0,O.Z)({props:e,name:"MuiBreadcrumbs"}),{children:n,className:i,component:o="nav",expandText:s="Show path",itemsAfterCollapse:a=1,itemsBeforeCollapse:l=1,maxItems:c=8,separator:u="/"}=r,d=(0,z.Z)(r,be),[h,f]=v.useState(!1),p=(0,y.Z)({},r,{component:o,expanded:h,expandText:s,itemsAfterCollapse:a,itemsBeforeCollapse:l,maxItems:c,separator:u}),g=(e=>{const{classes:t}=e;return(0,F.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},ve,t)})(p),m=v.useRef(null),b=v.Children.toArray(n).filter((e=>v.isValidElement(e))).map(((e,t)=>(0,_.jsx)("li",{className:g.li,children:e},`child-${t}`)));return(0,_.jsx)(we,(0,y.Z)({ref:t,component:o,color:"text.secondary",className:(0,U.default)(g.root,i),ownerState:p},d,{children:(0,_.jsx)(xe,{className:g.ol,ref:m,ownerState:p,children:Ee(h||c&&b.length<=c?b:(e=>l+a>=e.length?e:[...e.slice(0,l),(0,_.jsx)(me,{"aria-label":s,onClick:()=>{f(!0);const e=m.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-a,e.length)])(b),g.separator,u,p)})}))}));var ke=Se;var Ce={basename:"/",defaultPath:"/dashboard/default",fontFamily:"'Roboto', sans-serif",borderRadius:12},Ae=r(91923);function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Pe.apply(this,arguments)}function Ie(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Re=["size","color","stroke"];function Oe(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,Re);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-bell",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),v.createElement("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"}))}var Te=["size","color","stroke"];var Me=["size","color","stroke"];function Ne(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,Me);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-brand-telegram",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"}))}var je=["size","color","stroke"];function Le(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,je);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-building-store",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("line",{x1:3,y1:21,x2:21,y2:21}),v.createElement("path",{d:"M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"}),v.createElement("line",{x1:5,y1:21,x2:5,y2:10.85}),v.createElement("line",{x1:19,y1:21,x2:19,y2:10.85}),v.createElement("path",{d:"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"}))}var De=["size","color","stroke"];function $e(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,De);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-chevron-right",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("polyline",{points:"9 6 15 12 9 18"}))}var Be=["size","color","stroke"];var Ze=["size","color","stroke"];var ze=["size","color","stroke"];var Ue=["size","color","stroke"];function Fe(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,Ue);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-logout",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),v.createElement("path",{d:"M7 12h14l-3 -3m0 6l3 -3"}))}var We=["size","color","stroke"];function He(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,We);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-mailbox",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("path",{d:"M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5"}),v.createElement("path",{d:"M12 11v-8h4l2 2l-2 2h-4"}),v.createElement("path",{d:"M6 15h1"}))}var Ve=["size","color","stroke"];var qe=["size","color","stroke"];function Ye(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,qe);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-photo",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("line",{x1:15,y1:8,x2:15.01,y2:8}),v.createElement("rect",{x:4,y:4,width:16,height:16,rx:3}),v.createElement("path",{d:"M4 15l4 -4a3 5 0 0 1 3 0l5 5"}),v.createElement("path",{d:"M14 14l1 -1a3 5 0 0 1 3 0l2 2"}))}var Ge=["size","color","stroke"];function Ke(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,Ge);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-search",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("circle",{cx:10,cy:10,r:7}),v.createElement("line",{x1:21,y1:21,x2:15,y2:15}))}var Je=["size","color","stroke"];function Qe(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,Je);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-settings",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"}),v.createElement("circle",{cx:12,cy:12,r:3}))}var Xe=["size","color","stroke"];var et=["size","color","stroke"];function tt(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,et);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-tallymark-1",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("line",{x1:12,y1:5,x2:12,y2:19}))}var rt=["size","color","stroke"];var nt=["size","color","stroke"];function it(e){var t=e.size,r=void 0===t?24:t,n=e.color,i=void 0===n?"currentColor":n,o=e.stroke,s=void 0===o?2:o,a=Ie(e,nt);return v.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:i,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},a),v.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),v.createElement("circle",{cx:12,cy:7,r:4}),v.createElement("path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}))}var ot=["size","color","stroke"];var st=r(95159),at=r(37541),lt=r(25463);const ct={display:"flex",color:"grey.900",textDecoration:"none",alignContent:"center",alignItems:"center"};var ut=e=>{let{card:t,divider:r,icon:n,icons:i,maxItems:o,navigation:s,rightAlign:a,separator:l,title:c,titleBottom:u,...d}=e;const h=(0,$.Z)(),f={marginRight:h.spacing(.75),marginTop:`-${h.spacing(.25)}`,width:"1rem",height:"1rem",color:h.palette.secondary.main},[p,g]=(0,v.useState)(),[m,y]=(0,v.useState)(),b=e=>{e.children&&e.children.filter((t=>(t.type&&"collapse"===t.type?b(t):t.type&&"item"===t.type&&document.location.pathname===Ce.basename+t.url&&(g(e),y(t)),!1)))};(0,v.useEffect)((()=>{var e;null===s||void 0===s||null===(e=s.items)||void 0===e||e.map((e=>(e.type&&"group"===e.type&&b(e),!1)))}));const w=l,x=l?(0,_.jsx)(w,{stroke:1.5,size:"1rem"}):(0,_.jsx)(tt,{stroke:1.5,size:"1rem"});let E,S,k,C,A=(0,_.jsx)(se.Z,{}),P="";return p&&"collapse"===p.type&&(k=p.icon?p.icon:st.Z,E=(0,_.jsxs)(se.Z,{component:oe.rU,to:"#",variant:"subtitle1",sx:ct,children:[i&&(0,_.jsx)(k,{style:f}),p.title]})),m&&"item"===m.type&&(P=m.title,C=m.icon?m.icon:st.Z,S=(0,_.jsxs)(se.Z,{variant:"subtitle1",sx:{display:"flex",textDecoration:"none",alignContent:"center",alignItems:"center",color:"grey.500"},children:[i&&(0,_.jsx)(C,{style:f}),P]}),!1!==m.breadcrumbs&&(A=(0,_.jsxs)(ae.Z,{sx:{marginBottom:!1===t?0:h.spacing(Ae.dv),border:!1===t?"none":"1px solid",borderColor:h.palette.primary[200]+75,background:!1===t?"transparent":h.palette.background.default},...d,children:[(0,_.jsx)(Z.Z,{sx:{p:2,pl:!1===t?0:2},children:(0,_.jsxs)(le.ZP,{container:!0,direction:a?"row":"column",justifyContent:a?"space-between":"flex-start",alignItems:a?"center":"flex-start",spacing:1,children:[c&&!u&&(0,_.jsx)(le.ZP,{item:!0,children:(0,_.jsx)(se.Z,{variant:"h3",sx:{fontWeight:500},children:m.title})}),(0,_.jsx)(le.ZP,{item:!0,children:(0,_.jsxs)(ke,{sx:{"& .MuiBreadcrumbs-separator":{width:16,ml:1.25,mr:1.25}},"aria-label":"breadcrumb",maxItems:o||8,separator:x,children:[(0,_.jsxs)(se.Z,{component:oe.rU,to:"/",color:"inherit",variant:"subtitle1",sx:ct,children:[i&&(0,_.jsx)(lt.Z,{sx:f}),n&&(0,_.jsx)(at.Z,{sx:{...f,mr:0}}),!n&&"Dashboard"]}),E,S]})}),c&&u&&(0,_.jsx)(le.ZP,{item:!0,children:(0,_.jsx)(se.Z,{variant:"h3",sx:{fontWeight:500},children:m.title})})]})}),!1===t&&!1!==r&&(0,_.jsx)(ce.Z,{sx:{borderColor:h.palette.primary.main,mb:Ae.dv}})]}))),A},dt=r(27514);const ht="@customization/SET_MENU",ft="@customization/MENU_OPEN",pt="@customization/SET_FONT_FAMILY",gt="@customization/SET_BORDER_RADIUS";var mt=()=>{const e=(0,m.v9)((e=>e.customization.defaultId)),t=(0,m.I0)();return(0,_.jsx)(fe.Z,{disableRipple:!0,onClick:()=>t({type:ft,id:e}),component:oe.rU,to:Ce.defaultPath,children:(0,_.jsx)(dt.Z,{})})},vt=r(36680),yt=r(6124),bt=r(28940),wt=r(5352),xt=r(14378),_t=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Et=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=vt.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=vt.Ni.state.address,this.balanceVal=vt.Ni.state.balance,this.balanceSymbol=vt.Ni.state.balanceSymbol,this.profileName=vt.Ni.state.profileName,this.profileImage=vt.Ni.state.profileImage,this.network=vt.fB.state.caipNetwork,this.unsubscribe.push(vt.Ni.subscribe((e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")})),vt.fB.subscribeKey("caipNetwork",(e=>this.network=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.networkImages[this.network?.imageId??""],t="show"===this.balance;return bt.dy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${(0,xt.o)(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${(0,xt.o)(e)}
        avatarSrc=${(0,xt.o)(this.profileImage)}
        balance=${t?vt.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){vt.IN.open()}};_t([(0,wt.Cb)({type:Boolean})],Et.prototype,"disabled",void 0),_t([(0,wt.Cb)()],Et.prototype,"balance",void 0),_t([(0,wt.SB)()],Et.prototype,"address",void 0),_t([(0,wt.SB)()],Et.prototype,"balanceVal",void 0),_t([(0,wt.SB)()],Et.prototype,"balanceSymbol",void 0),_t([(0,wt.SB)()],Et.prototype,"profileName",void 0),_t([(0,wt.SB)()],Et.prototype,"profileImage",void 0),_t([(0,wt.SB)()],Et.prototype,"network",void 0),Et=_t([(0,yt.customElement)("w3m-account-button")],Et);var St=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let kt=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=vt.Ni.state.isConnected,this.unsubscribe.push(vt.Ni.subscribeKey("isConnected",(e=>{this.isAccount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount?bt.dy`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,xt.o)(this.balance)}
          >
          </w3m-account-button>
        `:bt.dy`
          <w3m-connect-button
            size=${(0,xt.o)(this.size)}
            label=${(0,xt.o)(this.label)}
            loadingLabel=${(0,xt.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};St([(0,wt.Cb)({type:Boolean})],kt.prototype,"disabled",void 0),St([(0,wt.Cb)()],kt.prototype,"balance",void 0),St([(0,wt.Cb)()],kt.prototype,"size",void 0),St([(0,wt.Cb)()],kt.prototype,"label",void 0),St([(0,wt.Cb)()],kt.prototype,"loadingLabel",void 0),St([(0,wt.SB)()],kt.prototype,"isAccount",void 0),kt=St([(0,yt.customElement)("w3m-button")],kt);var Ct=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let At=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=vt.IN.state.open,this.unsubscribe.push(vt.IN.subscribeKey("open",(e=>this.open=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return bt.dy`
      <wui-connect-button
        size=${(0,xt.o)(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?vt.IN.close():vt.IN.open()}};Ct([(0,wt.Cb)()],At.prototype,"size",void 0),Ct([(0,wt.Cb)()],At.prototype,"label",void 0),Ct([(0,wt.Cb)()],At.prototype,"loadingLabel",void 0),Ct([(0,wt.SB)()],At.prototype,"open",void 0),At=Ct([(0,yt.customElement)("w3m-connect-button")],At);r(99269);var Pt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let It=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=vt.fB.state.caipNetwork,this.connected=vt.Ni.state.isConnected,this.unsubscribe.push(vt.fB.subscribeKey("caipNetwork",(e=>this.network=e)),vt.Ni.subscribeKey("isConnected",(e=>this.connected=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return bt.dy`
      <wui-network-button
        .disabled=${Boolean(this.disabled)}
        imageSrc=${(0,xt.o)(vt.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){vt.IN.open({view:"Networks"})}};Pt([(0,wt.Cb)({type:Boolean})],It.prototype,"disabled",void 0),Pt([(0,wt.SB)()],It.prototype,"network",void 0),Pt([(0,wt.SB)()],It.prototype,"connected",void 0),It=Pt([(0,yt.customElement)("w3m-network-button")],It);var Rt=bt.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,Ot=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Tt=class extends bt.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=vt.Pc.state.view,this.unsubscribe.push(vt.Pc.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async e=>{let[t]=e;const r=`${t?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:r}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=r})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return bt.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return bt.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return bt.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return bt.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return bt.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return bt.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return bt.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return bt.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return bt.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return bt.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return bt.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return bt.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return bt.dy`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return bt.dy`<w3m-transactions-view></w3m-transactions-view>`}}async onViewChange(e){const{history:t}=vt.Pc.state;let r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};Tt.styles=Rt,Ot([(0,wt.SB)()],Tt.prototype,"view",void 0),Tt=Ot([(0,yt.customElement)("w3m-router")],Tt);var Mt=bt.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,Nt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let jt=class extends bt.oi{constructor(){super(),this.usubscribe=[],this.networkImages=vt.WM.state.networkImages,this.address=vt.Ni.state.address,this.profileImage=vt.Ni.state.profileImage,this.profileName=vt.Ni.state.profileName,this.balance=vt.Ni.state.balance,this.balanceSymbol=vt.Ni.state.balanceSymbol,this.network=vt.fB.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(vt.Ni.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):vt.IN.close()})),vt.fB.subscribeKey("caipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.networkImages[this.network?.imageId??""];return bt.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,xt.o)(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?yt.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):yt.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${vt.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,xt.o)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=vt.Ni.state;return e?bt.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=vt.fB.state,t=!!e&&e.length>1,r=e?.find((e=>{let{id:t}=e;return t===this.network?.id}));return t||!r}onCopyAddress(){try{this.address&&(vt.j1.copyToClopboard(this.address),vt.KC.showSuccess("Address copied"))}catch{vt.KC.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&vt.Pc.push("Networks")}onTransactions(){vt.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),vt.Pc.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await vt.lZ.disconnect(),vt.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),vt.IN.close()}catch{vt.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),vt.KC.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=vt.Ni.state;e&&vt.j1.openHref(e,"_blank")}};jt.styles=Mt,Nt([(0,wt.SB)()],jt.prototype,"address",void 0),Nt([(0,wt.SB)()],jt.prototype,"profileImage",void 0),Nt([(0,wt.SB)()],jt.prototype,"profileName",void 0),Nt([(0,wt.SB)()],jt.prototype,"balance",void 0),Nt([(0,wt.SB)()],jt.prototype,"balanceSymbol",void 0),Nt([(0,wt.SB)()],jt.prototype,"network",void 0),Nt([(0,wt.SB)()],jt.prototype,"disconecting",void 0),jt=Nt([(0,yt.customElement)("w3m-account-view")],jt);var Lt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Dt=class extends bt.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=vt.j1.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return bt.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?bt.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:bt.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return vt.j1.isMobile()?bt.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){vt.Pc.push("ConnectingWalletConnect")}};Lt([(0,wt.SB)()],Dt.prototype,"search",void 0),Dt=Lt([(0,yt.customElement)("w3m-all-wallets-view")],Dt);var $t=bt.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,Bt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Zt=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.connectors=vt.AA.state.connectors,this.unsubscribe.push(vt.AA.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return bt.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(vt.j1.isMobile())return null;const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?bt.dy`
      <wui-list-wallet
        imageSrc=${(0,xt.o)(vt.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=vt.hD.state;if(!e?.length)return null;return this.filterOutDuplicateWallets(e).map((e=>bt.dy`
        <wui-list-wallet
          imageSrc=${(0,xt.o)(vt.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}featuredTemplate(){const{featured:e}=vt.QT.state;if(!e.length)return null;return this.filterOutDuplicateWallets(e).map((e=>bt.dy`
        <wui-list-wallet
          imageSrc=${(0,xt.o)(vt.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}recentTemplate(){return vt.MO.getRecentWallets().map((e=>bt.dy`
        <wui-list-wallet
          imageSrc=${(0,xt.o)(vt.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((e=>"ANNOUNCED"!==e.type?null:bt.dy`
        <wui-list-wallet
          imageSrc=${(0,xt.o)(vt.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `))}injectedTemplate(){const e=this.connectors.find((e=>"ANNOUNCED"===e.type));return this.connectors.map((t=>"INJECTED"!==t.type?null:vt.lZ.checkInstalled()?bt.dy`
        <wui-list-wallet
          imageSrc=${(0,xt.o)(vt.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${(0,xt.o)(e?void 0:"installed")}
          tagVariant=${(0,xt.o)(e?void 0:"success")}
        >
        </wui-list-wallet>
      `:null))}connectorsTemplate(){return this.connectors.map((e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:bt.dy`
        <wui-list-wallet
          imageSrc=${(0,xt.o)(vt.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `))}allWalletsTemplate(){const e=10*Math.floor(vt.QT.state.count/10);return bt.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:e}=vt.QT.state,{customWallets:t,featuredWalletIds:r}=vt.hD.state,{connectors:n}=vt.AA.state,i=vt.MO.getRecentWallets(),o=n.filter((e=>"ANNOUNCED"===e.type));if(r||t||!e.length)return null;const s=o.length+i.length,a=Math.max(0,2-s);return this.filterOutDuplicateWallets(e).slice(0,a).map((e=>bt.dy`
        <wui-list-wallet
          imageSrc=${(0,xt.o)(vt.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}onConnector(e){"WALLET_CONNECT"===e.type?vt.j1.isMobile()?vt.Pc.push("AllWallets"):vt.Pc.push("ConnectingWalletConnect"):vt.Pc.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:t}=vt.AA.state,r=vt.MO.getRecentWallets().map((e=>e.id)),n=t.map((e=>e.info?.rdns)).filter(Boolean);return e.filter((e=>!r.includes(e.id)&&!n.includes(e.rdns??void 0)))}onAllWallets(){vt.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),vt.Pc.push("AllWallets")}onConnectWallet(e){vt.Pc.push("ConnectingWalletConnect",{wallet:e})}};Zt.styles=$t,Bt([(0,wt.SB)()],Zt.prototype,"connectors",void 0),Zt=Bt([(0,yt.customElement)("w3m-connect-view")],Zt);var zt=bt.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,Ut=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class Ft extends bt.oi{constructor(){super(),this.wallet=vt.Pc.state.data?.wallet,this.connector=vt.Pc.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=vt.fz.getWalletImage(this.wallet)??vt.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=vt.lZ.state.wcUri,this.error=vt.lZ.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(vt.lZ.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),vt.lZ.subscribeKey("wcError",(e=>this.error=e)),vt.lZ.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),bt.dy`
      <wui-flex
        data-error=${(0,xt.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,xt.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?bt.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(vt.lZ.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=vt.u0.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return bt.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(vt.j1.copyToClopboard(this.uri),vt.KC.showSuccess("Link copied"))}catch{vt.KC.showError("Failed to copy")}}}Ft.styles=zt,Ut([(0,wt.SB)()],Ft.prototype,"uri",void 0),Ut([(0,wt.SB)()],Ft.prototype,"error",void 0),Ut([(0,wt.SB)()],Ft.prototype,"ready",void 0),Ut([(0,wt.SB)()],Ft.prototype,"showRetry",void 0),Ut([(0,wt.SB)()],Ft.prototype,"buffering",void 0),Ut([(0,wt.Cb)({type:Boolean})],Ft.prototype,"isMobile",void 0),Ut([(0,wt.Cb)()],Ft.prototype,"onRetry",void 0);var Wt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const Ht={INJECTED:"browser",ANNOUNCED:"browser"};let Vt=class extends Ft{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");vt.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:Ht[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&vt.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await vt.lZ.connectExternal(this.connector),vt.IN.close(),vt.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){vt.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Vt=Wt([(0,yt.customElement)("w3m-connecting-external-view")],Vt);var qt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Yt=class extends bt.oi{constructor(){super(...arguments),this.dappUrl=vt.hD.state.metadata?.url,this.dappName=vt.hD.state.metadata?.name}render(){return bt.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?bt.dy`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&vt.j1.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){vt.Pc.goBack()}};Yt=qt([(0,yt.customElement)("w3m-connecting-siwe-view")],Yt);var Gt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Kt=class extends bt.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=vt.Pc.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),vt.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),bt.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):bt.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{const{wcPairingExpiry:t}=vt.lZ.state;if(e||vt.j1.isPairingExpired(t)){if(vt.lZ.connectWalletConnect(),this.wallet){const e=vt.fz.getWalletImage(this.wallet);e&&vt.MO.setConnectedWalletImageUrl(e)}else{const e=vt.AA.state.connectors.find((e=>"WALLET_CONNECT"===e.type)),t=vt.fz.getConnectorImage(e);t&&vt.MO.setConnectedWalletImageUrl(t)}await vt.lZ.state.wcPromise,this.finalizeConnection(),vt.IN.close()}}catch(t){vt.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),vt.lZ.setWcError(!0),vt.j1.isAllowedRetry(this.lastRetry)&&(vt.KC.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=vt.lZ.state;e&&vt.MO.setWalletConnectDeepLink(e),t&&vt.MO.setWeb3ModalRecent(t),vt.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:i}=this.wallet,o=n?.map((e=>{let{injected_id:t}=e;return t})).filter(Boolean),s=i?[i]:o??[],a=s.length,l=e,c=r,u=vt.lZ.checkInstalled(s),d=a&&u,h=t&&!vt.j1.isMobile();d&&this.platforms.push("browser"),l&&this.platforms.push(vt.j1.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!d&&a&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return bt.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return bt.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return bt.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return bt.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return bt.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return bt.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?bt.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Gt([(0,wt.SB)()],Kt.prototype,"platform",void 0),Gt([(0,wt.SB)()],Kt.prototype,"platforms",void 0),Kt=Gt([(0,yt.customElement)("w3m-connecting-wc-view")],Kt);var Jt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Qt=class extends bt.oi{constructor(){super(...arguments),this.wallet=vt.Pc.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return bt.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?bt.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?bt.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?bt.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?bt.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&vt.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&vt.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&vt.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&vt.j1.openHref(this.wallet.homepage,"_blank")}};Qt=Jt([(0,yt.customElement)("w3m-downloads-view")],Qt);var Xt=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let er=class extends bt.oi{render(){return bt.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{vt.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=vt.QT.state,{customWallets:r}=vt.hD.state;return[...t,...r??[],...e].slice(0,4).map((e=>bt.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,xt.o)(vt.fz.getWalletImage(e))}
          @click=${()=>{vt.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};er=Xt([(0,yt.customElement)("w3m-get-wallet-view")],er);var tr=bt.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,rr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let nr=class extends bt.oi{constructor(){super(),this.network=vt.Pc.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=vt.fB.state.caipNetwork,this.unsubscribe.push(vt.fB.subscribeKey("caipNetwork",(e=>{e?.id!==this.currentNetwork?.id&&vt.Pc.goBack()})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return bt.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,xt.o)(vt.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:bt.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await vt.fB.switchActiveNetwork(this.network),vt.Pc.goBack())}catch{this.error=!0}}};nr.styles=tr,rr([(0,wt.SB)()],nr.prototype,"showRetry",void 0),rr([(0,wt.SB)()],nr.prototype,"error",void 0),rr([(0,wt.SB)()],nr.prototype,"currentNetwork",void 0),nr=rr([(0,yt.customElement)("w3m-network-switch-view")],nr);var ir=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let or=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=vt.fB.state.caipNetwork,this.unsubscribe.push(vt.fB.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return bt.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){vt.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),vt.Pc.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=vt.fB.state,n=e,i=t;return n?.length&&i?.sort(((e,t)=>n.indexOf(t.id)-n.indexOf(e.id))),i?.map((e=>bt.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===e.id}
          imageSrc=${(0,xt.o)(vt.fz.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!r&&!n?.includes(e.id)}
        ></wui-card-select>
      `))}async onSwitchNetwork(e){const{isConnected:t}=vt.Ni.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=vt.fB.state;t&&i?.id!==e.id?r?.includes(e.id)?await vt.fB.switchActiveNetwork(e):n&&vt.Pc.push("SwitchNetwork",{network:e}):t||(vt.fB.setCaipNetwork(e),vt.Pc.push("Connect"))}};ir([(0,wt.SB)()],or.prototype,"caipNetwork",void 0),or=ir([(0,yt.customElement)("w3m-networks-view")],or);var sr=r(90506),ar=bt.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`,lr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const cr="last-transaction";let ur=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=vt.Ni.state.address,this.transactions=vt.sl.state.transactions,this.transactionsByYear=vt.sl.state.transactionsByYear,this.loading=vt.sl.state.loading,this.empty=vt.sl.state.empty,this.next=vt.sl.state.next,this.unsubscribe.push(vt.Ni.subscribe((e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,vt.sl.resetTransactions(),vt.sl.fetchTransactions(e.address))})),vt.sl.subscribe((e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})))}firstUpdated(){0===this.transactions.length&&vt.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return bt.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map(((t,r)=>{const n=r===e.length-1,i=parseInt(t,10),o=yt.TransactionUtil.getTransactionGroupTitle(i),s=this.transactionsByYear[i];return s?bt.dy`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(s,n)}
          </wui-flex>
        </wui-flex>
      `:null}))}templateRenderTransaction(e,t){const{date:r,descriptions:n,direction:i,isAllNFT:o,images:s,status:a,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1;return 2===l?.length&&!o?bt.dy`
        <wui-transaction-list-item
          date=${r}
          direction=${i}
          id=${t&&this.next?cr:""}
          status=${a}
          type=${c}
          .images=${s}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `:u?l.map(((e,n)=>{const i=yt.TransactionUtil.getTransferDescription(e),o=t&&n===l.length-1;return bt.dy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?cr:""}
          status=${a}
          type=${c}
          onlyDirectionIcon=${!0}
          .images=${[s?.[n]]}
          .descriptions=${[i]}
        ></wui-transaction-list-item>`})):bt.dy`
      <wui-transaction-list-item
        date=${r}
        direction=${i}
        id=${t&&this.next?cr:""}
        status=${a}
        type=${c}
        .images=${s}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map(((r,n)=>{const i=t&&n===e.length-1;return bt.dy`${this.templateRenderTransaction(r,i)}`}))}templateEmpty(){return bt.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(bt.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}createPaginationObserver(){const{projectId:e}=vt.hD.state;this.paginationObserver=new IntersectionObserver((t=>{let[r]=t;r?.isIntersecting&&!this.loading&&(vt.sl.fetchTransactions(this.address),vt.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${cr}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const t=sr.E.getRelativeDateFromNow(e?.metadata?.minedAt),r=yt.TransactionUtil.getTransactionDescriptions(e),n=e?.transfers,i=e?.transfers?.[0],o=Boolean(i)&&e?.transfers?.every((e=>Boolean(e.nft_info))),s=yt.TransactionUtil.getTransactionImages(n);return{date:t,direction:i?.direction,descriptions:r,isAllNFT:o,images:s,status:e.metadata?.status,transfers:n,type:e.metadata?.operationType}}};ur.styles=ar,lr([(0,wt.SB)()],ur.prototype,"address",void 0),lr([(0,wt.SB)()],ur.prototype,"transactions",void 0),lr([(0,wt.SB)()],ur.prototype,"transactionsByYear",void 0),lr([(0,wt.SB)()],ur.prototype,"loading",void 0),lr([(0,wt.SB)()],ur.prototype,"empty",void 0),lr([(0,wt.SB)()],ur.prototype,"next",void 0),ur=lr([(0,yt.customElement)("w3m-transactions-view")],ur);var dr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const hr=[{images:["network","layers","system"],title:"The system\u2019s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let fr=class extends bt.oi{render(){return bt.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${hr}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{vt.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};fr=dr([(0,yt.customElement)("w3m-what-is-a-network-view")],fr);var pr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const gr=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let mr=class extends bt.oi{render(){return bt.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${gr}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){vt.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),vt.Pc.push("GetWallet")}};mr=pr([(0,yt.customElement)("w3m-what-is-a-wallet-view")],mr);var vr=bt.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,yr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const br="local-paginator";let wr=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!vt.QT.state.wallets.length,this.wallets=vt.QT.state.wallets,this.recommended=vt.QT.state.recommended,this.featured=vt.QT.state.featured,this.unsubscribe.push(vt.QT.subscribeKey("wallets",(e=>this.wallets=e)),vt.QT.subscribeKey("recommended",(e=>this.recommended=e)),vt.QT.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return bt.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await vt.QT.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>bt.dy`
        <wui-card-select-loader type="wallet" id=${(0,xt.o)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map((e=>bt.dy`
        <wui-card-select
          imageSrc=${(0,xt.o)(vt.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:n}=vt.QT.state,i=window.innerWidth<352?3:4,o=e.length+t.length;let s=Math.ceil(o/i)*i-o+i;return s-=e.length?r.length%i:0,0===n||[...r,...e,...t].length<n?this.shimmerTemplate(s,br):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${br}`);e&&(this.paginationObserver=new IntersectionObserver((e=>{let[t]=e;if(t?.isIntersecting&&!this.initial){const{page:e,count:t,wallets:r}=vt.QT.state;r.length<t&&vt.QT.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:t}=vt.AA.state,r=t.find((t=>{let{explorerId:r}=t;return r===e.id}));r?vt.Pc.push("ConnectingExternal",{connector:r}):vt.Pc.push("ConnectingWalletConnect",{wallet:e})}};wr.styles=vr,yr([(0,wt.SB)()],wr.prototype,"initial",void 0),yr([(0,wt.SB)()],wr.prototype,"wallets",void 0),yr([(0,wt.SB)()],wr.prototype,"recommended",void 0),yr([(0,wt.SB)()],wr.prototype,"featured",void 0),wr=yr([(0,yt.customElement)("w3m-all-wallets-list")],wr);var xr=bt.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,_r=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Er=class extends bt.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?bt.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await vt.QT.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=vt.QT.state;return e.length?bt.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map((e=>bt.dy`
            <wui-card-select
              imageSrc=${(0,xt.o)(vt.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:bt.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:t}=vt.AA.state,r=t.find((t=>{let{explorerId:r}=t;return r===e.id}));r?vt.Pc.push("ConnectingExternal",{connector:r}):vt.Pc.push("ConnectingWalletConnect",{wallet:e})}};Er.styles=xr,_r([(0,wt.SB)()],Er.prototype,"loading",void 0),_r([(0,wt.Cb)()],Er.prototype,"query",void 0),Er=_r([(0,yt.customElement)("w3m-all-wallets-search")],Er);var Sr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let kr=class extends bt.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(vt.lZ.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return bt.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((e=>{let{platform:t}=e;return t})),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};Sr([(0,wt.Cb)({type:Array})],kr.prototype,"platforms",void 0),Sr([(0,wt.Cb)()],kr.prototype,"onSelectPlatfrom",void 0),Sr([(0,wt.SB)()],kr.prototype,"buffering",void 0),kr=Sr([(0,yt.customElement)("w3m-connecting-header")],kr);var Cr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ar=class extends Ft{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),vt.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=vt.AA.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns)),r=e.find((e=>"INJECTED"===e.type));t?await vt.lZ.connectExternal(t):r&&await vt.lZ.connectExternal(r),vt.IN.close(),vt.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){vt.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Ar=Cr([(0,yt.customElement)("w3m-connecting-wc-browser")],Ar);var Pr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ir=class extends Ft{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),vt.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{this.onConnect?.()}),200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=vt.j1.formatNativeUrl(e,this.uri);vt.lZ.setWcLinking({name:t,href:n}),vt.lZ.setRecentWallet(this.wallet),vt.j1.openHref(r,"_self")}catch{this.error=!0}}};Ir=Pr([(0,yt.customElement)("w3m-connecting-wc-desktop")],Ir);var Rr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Or=class extends Ft{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),vt.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=vt.j1.formatNativeUrl(e,this.uri);vt.lZ.setWcLinking({name:t,href:n}),vt.lZ.setRecentWallet(this.wallet),vt.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){const e=vt.j1.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(vt.lZ.setBuffering(!0),setTimeout((()=>{vt.lZ.setBuffering(!1)}),5e3))}};Or=Rr([(0,yt.customElement)("w3m-connecting-wc-mobile")],Or);var Tr=bt.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,Mr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Nr=class extends Ft{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),vt.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),bt.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return vt.lZ.setWcLinking(void 0),vt.lZ.setRecentWallet(this.wallet),bt.dy`<wui-qr-code
      size=${e}
      theme=${vt.u0.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,xt.o)(vt.fz.getWalletImage(this.wallet))}
      alt=${(0,xt.o)(t)}
    ></wui-qr-code>`}};Nr.styles=Tr,Nr=Mr([(0,yt.customElement)("w3m-connecting-wc-qrcode")],Nr);var jr=bt.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,Lr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Dr=class extends bt.oi{constructor(){super(...arguments),this.dappImageUrl=vt.hD.state.metadata?.icons,this.walletImageUrl=vt.MO.getConnectedWalletImageUrl()}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return bt.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Dr.styles=jr,Dr=Lr([(0,yt.customElement)("w3m-connecting-siwe")],Dr);var $r=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Br=class extends bt.oi{constructor(){if(super(),this.wallet=vt.Pc.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");vt.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return bt.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,xt.o)(vt.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Br=$r([(0,yt.customElement)("w3m-connecting-wc-unsupported")],Br);var Zr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let zr=class extends Ft{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",vt.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=vt.j1.formatUniversalUrl(e,this.uri);vt.lZ.setWcLinking({name:t,href:n}),vt.lZ.setRecentWallet(this.wallet),vt.j1.openHref(r,"_blank")}catch{this.error=!0}}};zr=Zr([(0,yt.customElement)("w3m-connecting-wc-web")],zr);var Ur=bt.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,Fr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};function Wr(){const e=vt.Pc.state.data?.connector?.name,t=vt.Pc.state.data?.wallet?.name,r=vt.Pc.state.data?.network?.name,n=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:n?`Get ${n}`:"Downloads",Transactions:"Activity"}}let Hr=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.heading=Wr()[vt.Pc.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(vt.Pc.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),vt.lZ.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return bt.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${vt.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){vt.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),vt.Pc.push("WhatIsAWallet")}titleTemplate(){return bt.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=vt.Pc.state,t="Connect"===e;return this.showBack?bt.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${vt.Pc.goBack}
      ></wui-icon-link>`:bt.dy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?bt.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){const t=this.shadowRoot?.querySelector("wui-text");if(t){const r=Wr()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history:e}=vt.Pc.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Hr.styles=[Ur],Fr([(0,wt.SB)()],Hr.prototype,"heading",void 0),Fr([(0,wt.SB)()],Hr.prototype,"buffering",void 0),Fr([(0,wt.SB)()],Hr.prototype,"showBack",void 0),Hr=Fr([(0,yt.customElement)("w3m-header")],Hr);var Vr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let qr=class extends bt.oi{constructor(){super(...arguments),this.data=[]}render(){return bt.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>bt.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>bt.dy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Vr([(0,wt.Cb)({type:Array})],qr.prototype,"data",void 0),qr=Vr([(0,yt.customElement)("w3m-help-widget")],qr);var Yr=bt.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`,Gr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Kr=class extends bt.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=vt.hD.state;return e||t?bt.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=vt.hD.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=vt.hD.state;return e?bt.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=vt.hD.state;return e?bt.dy`<a href=${e}>Privacy Policy</a>`:null}};Kr.styles=[Yr],Kr=Gr([(0,yt.customElement)("w3m-legal-footer")],Kr);var Jr=bt.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,Qr=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xr=class extends bt.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:n,homepage:i}=this.wallet,o=vt.j1.isMobile(),s=vt.j1.isIos(),a=vt.j1.isAndroid(),l=[t,r,i,n].filter(Boolean).length>1,c=yt.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?bt.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>vt.Pc.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?bt.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?bt.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&a?bt.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&vt.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&vt.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&vt.j1.openHref(this.wallet.homepage,"_blank")}};Xr.styles=[Jr],Qr([(0,wt.Cb)({type:Object})],Xr.prototype,"wallet",void 0),Xr=Qr([(0,yt.customElement)("w3m-mobile-download-links")],Xr);var en=bt.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,tn=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const rn={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let nn=class extends bt.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=vt.KC.state.open,this.unsubscribe.push(vt.KC.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=vt.KC.state,r=rn[t];return bt.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
//# sourceMappingURL=main.b2f324fc.js.map