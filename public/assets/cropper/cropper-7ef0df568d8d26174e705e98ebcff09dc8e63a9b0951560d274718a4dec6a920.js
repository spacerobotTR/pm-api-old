!function(t){var e=function(i){function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}var n={};return a.m=i,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=297)}({1:function(t){t.exports=window.jQuery},296:function(t,e,i){"use strict";function v(t){return"number"==typeof t&&!P(t)}function r(t){return void 0===t}function n(t){return"object"===(void 0===t?"undefined":j(t))&&null!==t}function w(t){if(!n(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&U.call(i,"isPrototypeOf")}catch(t){return!1}}function d(t){return"function"==typeof t}function k(e,i){if(e&&d(i))if(Array.isArray(e)||v(e.length)){var t=e.length,a=void 0;for(a=0;a<t&&!1!==i.call(e,e[a],a,e);a+=1);}else n(e)&&Object.keys(e).forEach(function(t){i.call(e,e[t],t,e)});return e}function xt(t,e){var i=1<arguments.length&&void 0!==e?arguments[1]:1e11;return $.test(t)?Math.round(t*i)/i:t}function u(t,e){var i=t.style;k(e,function(t,e){_.test(e)&&v(t)&&(t+="px"),i[e]=t})}function l(t,e){if(e)if(v(t.length))k(t,function(t){l(t,e)});else if(t.classList)t.classList.add(e);else{var i=t.className.trim();i?i.indexOf(e)<0&&(t.className=i+" "+e):t.className=e}}function T(t,e){e&&(v(t.length)?k(t,function(t){T(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function h(t,e,i){e&&(v(t.length)?k(t,function(t){h(t,e,i)}):i?l(t,e):T(t,e))}function a(t){return t.replace(Q,"$1-$2").toLowerCase()}function g(t,e){return n(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-"+a(e))}function p(t,e,i){n(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-"+a(e),i)}function o(t,e){if(n(t[e]))try{delete t[e]}catch(i){t[e]=void 0}else if(t.dataset)try{delete t.dataset[e]}catch(i){t.dataset[e]=void 0}else t.removeAttribute("data-"+a(e))}function s(i,t,a,e){var n=3<arguments.length&&void 0!==e?arguments[3]:{},o=a;t.trim().split(F).forEach(function(t){if(!Z){var e=i.listeners;e&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners)}i.removeEventListener(t,o,n)})}function m(o,t,r,e){var h=3<arguments.length&&void 0!==e?arguments[3]:{},s=r;t.trim().split(F).forEach(function(a){if(h.once&&!Z){var t=o.listeners,n=void 0===t?{}:t;s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];delete n[a][r],o.removeEventListener(a,s,h),r.apply(o,e)},n[a]||(n[a]={}),n[a][r]&&o.removeEventListener(a,n[a][r],h),n[a][r]=s,o.listeners=n}o.addEventListener(a,s,h)})}function b(t,e,i){var a=void 0;return d(Event)&&d(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function W(t){var e=t.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}function f(t){var e=t.match(V);return e&&(e[1]!==K.protocol||e[2]!==K.hostname||e[3]!==K.port)}function x(t){var e="timestamp="+(new Date).getTime();return t+(-1===t.indexOf("?")?"?":"&")+e}function y(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,r=[];v(n)&&0!==n&&r.push("translateX("+n+"px)"),v(o)&&0!==o&&r.push("translateY("+o+"px)"),v(e)&&0!==e&&r.push("rotate("+e+"deg)"),v(i)&&1!==i&&r.push("scaleX("+i+")"),v(a)&&1!==a&&r.push("scaleY("+a+")");var h=r.length?r.join(" "):"none";return{WebkitTransform:h,msTransform:h,transform:h}}function c(t,e){var i=t.pageX,a=t.pageY,n={endX:i,endY:a};return e?n:q({startX:i,startY:a},n)}function yt(t,e){var i=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==e?arguments[1]:"contain",r=function(t){return G(t)&&0<t};if(r(n)&&r(a)){var h=a*i;"contain"===o&&n<h||"cover"===o&&h<n?a=n/i:n=a*i}else r(n)?a=n/i:r(a)&&(n=a*i);return{width:n,height:a}}function M(t){var e=new DataView(t),i=void 0,a=void 0,n=void 0,o=void 0;if(255===e.getUint8(0)&&216===e.getUint8(1))for(var r=e.byteLength,h=2;h<r;){if(255===e.getUint8(h)&&225===e.getUint8(h+1)){n=h;break}h+=1}if(n){var s=n+4,c=n+10;if("Exif"===function(t,e,i){var a="",n=void 0;for(i+=s,n=s;n<i;n+=1)a+=J(t.getUint8(n));return a}(e,0,4)){var d=e.getUint16(c);if(((a=18761===d)||19789===d)&&42===e.getUint16(c+2,a)){var l=e.getUint32(c+4,a);8<=l&&(o=c+l)}}}if(o){var p=e.getUint16(o,a),m=void 0,u=void 0;for(u=0;u<p;u+=1)if(m=o+12*u+2,274===e.getUint16(m,a)){m+=8,i=e.getUint16(m,a),e.setUint16(m,1,a);break}}return i}var C,D=(C=i(1))&&"object"==typeof C&&"default"in C?C["default"]:C,B="undefined"!=typeof window,E=B?window:{},H="cropper-hidden",N=E.PointerEvent?"pointerdown":"touchstart mousedown",O=E.PointerEvent?"pointermove":"touchmove mousemove",z=E.PointerEvent?"pointerup pointercancel":"touchend touchcancel mouseup",L=/^(?:e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,Y=/^data:/,X=/^data:image\/jpeg;base64,/,R=/^(?:img|canvas)$/i,S={viewMode:0,dragMode:"crop",aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},I=function(){function a(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}}(),Mt=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)},P=Number.isNaN||E.isNaN,U=Object.prototype.hasOwnProperty,q=Object.assign||function(i){for(var t=arguments.length,e=Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return n(i)&&0<e.length&&e.forEach(function(e){n(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},$=/\.\d*(?:0|9){12}\d*$/i,_=/^(?:width|height|left|top|marginLeft|marginTop)$/,Q=/([a-z\d])([A-Z])/g,F=/\s\s*/,Z=function(){var t=!1;if(B){var e=!1,i=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,e},set:function(t){e=t}});E.addEventListener("test",i,a),E.removeEventListener("test",i,a)}return t}(),K=E.location,V=/^(https?:)\/\/([^:/?#]+):?(\d*)/i,G=Number.isFinite||E.isFinite,J=String.fromCharCode,tt=/^data:.*,/,et={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper;l(a,H),T(t,H);var n={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};u(a,{width:(this.containerData=n).width,height:n.height}),l(t,H),T(a,H)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,s=t.height;t.height*r>t.width?3===i?h=t.height*r:s=t.width/r:3===i?s=t.width/r:h=t.height*r;var c={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:s};c.left=(t.width-h)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=q({},e),this.initialCanvasData=q({},c)},limitCanvas:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=i.viewMode,h=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(i.minCanvasWidth)||0,d=Number(i.minCanvasHeight)||0;1<r?(c=Math.max(c,a.width),d=Math.max(d,a.height),3===r&&(c<d*h?c=d*h:d=c/h)):0<r&&(c?c=Math.max(c,s?o.width:0):d?d=Math.max(d,s?o.height:0):s&&(c=o.width,(d=o.height)*h>c?c=d*h:d=c/h));var l=yt({aspectRatio:h,width:c,height:d});c=l.width,d=l.height,n.minWidth=c,n.minHeight=d,n.maxWidth=1/0,n.maxHeight=1/0}if(e)if(r){var p=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===r&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,e){var i=this.canvasData,a=this.imageData;if(e){var n=function(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),r=Math.cos(n),h=e*r+i*o,s=e*o+i*r;return 90<a?{width:s,height:h}:{width:h,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,r=n.height,h=i.width*(o/i.naturalWidth),s=i.height*(r/i.naturalHeight);i.left-=(h-i.width)/2,i.top-=(s-i.height)/2,i.width=h,i.height=s,i.aspectRatio=o/r,i.naturalWidth=o,i.naturalHeight=r,this.limitCanvas(!0,!1)}(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCanvas(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,u(this.canvas,q({width:i.width,height:i.height},y({translateX:i.left,translateY:i.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);q(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),u(this.image,q({width:i.width,height:i.height},y(q({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio,a=Number(t.autoCropArea)||.8,n={width:e.width,height:e.height};i&&(e.height*i>e.width?n.height=n.width/i:n.width=n.height*i),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=e.left+(e.width-n.width)/2,n.top=e.top+(e.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=q({},n)},limitCropBox:function(t,e){var i=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,r=this.limited,h=i.aspectRatio;if(t){var s=Number(i.minCropBoxWidth)||0,c=Number(i.minCropBoxHeight)||0,d=Math.min(a.width,r?n.width:a.width),l=Math.min(a.height,r?n.height:a.height);s=Math.min(s,a.width),c=Math.min(c,a.height),h&&(s&&c?s<c*h?c=s/h:s=c*h:s?c=s/h:c&&(s=c*h),d<l*h?l=d/h:d=l*h),o.minWidth=Math.min(s,d),o.minHeight=Math.min(c,l),o.maxWidth=d,o.maxHeight=l}e&&(r?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&p(this.face,"action",i.width>=e.width&&i.height>=e.height?"move":"all"),u(this.cropBox,q({width:i.width,height:i.height},y({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),b(this.element,"crop",this.getData())}},it={initPreview:function(){var i=this.crossOrigin,t=this.options.preview,a=i?this.crossOriginUrl:this.url,e=document.createElement("img");if(i&&(e.crossOrigin=i),e.src=a,this.viewBox.appendChild(e),this.viewBoxImage=e,t){var n=t;"string"==typeof t?n=this.element.ownerDocument.querySelectorAll(t):t.querySelector&&(n=[t]),k(this.previews=n,function(t){var e=document.createElement("img");p(t,"preview",{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)})}},resetPreview:function(){k(this.previews,function(t){var e=g(t,"preview");u(t,{width:e.width,height:e.height}),t.innerHTML=e.html,o(t,"preview")})},preview:function(){var h=this.imageData,t=this.canvasData,e=this.cropBoxData,s=e.width,c=e.height,d=h.width,l=h.height,p=e.left-t.left-h.left,m=e.top-t.top-h.top;this.cropped&&!this.disabled&&(u(this.viewBoxImage,q({width:d,height:l},y(q({translateX:-p,translateY:-m},h)))),k(this.previews,function(t){var e=g(t,"preview"),i=e.width,a=e.height,n=i,o=a,r=1;s&&(o=c*(r=i/s)),c&&a<o&&(n=s*(r=a/c),o=a),u(t,{width:n,height:o}),u(t.getElementsByTagName("img")[0],q({width:d*r,height:l*r},y(q({translateX:-p*r,translateY:-m*r},h))))}))}},at={bind:function(){var t=this.element,e=this.options,i=this.cropper;d(e.cropstart)&&m(t,"cropstart",e.cropstart),d(e.cropmove)&&m(t,"cropmove",e.cropmove),d(e.cropend)&&m(t,"cropend",e.cropend),d(e.crop)&&m(t,"crop",e.crop),d(e.zoom)&&m(t,"zoom",e.zoom),m(i,N,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&m(i,"wheel mousewheel DOMMouseScroll",this.onWheel=this.wheel.bind(this)),e.toggleDragModeOnDblclick&&m(i,"dblclick",this.onDblclick=this.dblclick.bind(this)),m(t.ownerDocument,O,this.onCropMove=this.cropMove.bind(this)),m(t.ownerDocument,z,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&m(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;d(e.cropstart)&&s(t,"cropstart",e.cropstart),d(e.cropmove)&&s(t,"cropmove",e.cropmove),d(e.cropend)&&s(t,"cropend",e.cropend),d(e.crop)&&s(t,"crop",e.crop),d(e.zoom)&&s(t,"zoom",e.zoom),s(i,N,this.onCropStart),e.zoomable&&e.zoomOnWheel&&s(i,"wheel mousewheel DOMMouseScroll",this.onWheel),e.toggleDragModeOnDblclick&&s(i,"dblclick",this.onDblclick),s(t.ownerDocument,O,this.onCropMove),s(t.ownerDocument,z,this.onCropEnd),e.responsive&&s(window,"resize",this.onResize)}},nt={resize:function(){var t=this.options,e=this.container,i=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||i.width<=a||i.height<=n)){var o=e.offsetWidth/i.width;if(1!==o||e.offsetHeight!==i.height){var r=void 0,h=void 0;t.restore&&(r=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(k(r,function(t,e){r[e]=t*o})),this.setCropBoxData(k(h,function(t,e){h[e]=t*o})))}}},dblclick:function(){var t,e;this.disabled||"none"===this.options.dragMode||this.setDragMode((e="cropper-crop",((t=this.dragBox).classList?t.classList.contains(e):-1<t.className.indexOf(e))?"move":"crop"))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){if(!this.disabled){var e=this.options,i=this.pointers,a=void 0;t.changedTouches?k(t.changedTouches,function(t){i[t.identifier]=c(t)}):i[t.pointerId||0]=c(t),a=1<Object.keys(i).length&&e.zoomable&&e.zoomOnTouch?"zoom":g(t.target,"action"),L.test(a)&&!1!==b(this.element,"cropstart",{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,"crop"===a&&(this.cropping=!0,l(this.dragBox,"cropper-modal")))}},cropMove:function(t){var e=this.action;if(!this.disabled&&e){var i=this.pointers;t.preventDefault(),!1!==b(this.element,"cropmove",{originalEvent:t,action:e})&&(t.changedTouches?k(t.changedTouches,function(t){q(i[t.identifier],c(t,!0))}):q(i[t.pointerId||0],c(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var e=this.action,i=this.pointers;t.changedTouches?k(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,h(this.dragBox,"cropper-modal",this.cropped&&this.options.modal)),b(this.element,"cropend",{originalEvent:t,action:e}))}}},ot={change:function(t){var e=this.options,i=this.canvasData,a=this.containerData,n=this.cropBoxData,o=this.pointers,r=this.action,h=e.aspectRatio,s=n.left,c=n.top,d=n.width,l=n.height,p=s+d,m=c+l,u=0,g=0,f=a.width,v=a.height,w=!0,b=void 0;!h&&t.shiftKey&&(h=d&&l?d/l:1),this.limited&&(u=n.minLeft,g=n.minTop,f=u+Math.min(a.width,i.width,i.left+i.width),v=g+Math.min(a.height,i.height,i.top+i.height));var x,y,M,C=o[Object.keys(o)[0]],D={x:C.endX-C.startX,y:C.endY-C.startY},B=function(t){switch(t){case"e":p+D.x>f&&(D.x=f-p);break;case"w":s+D.x<u&&(D.x=u-s);break;case"n":c+D.y<g&&(D.y=g-c);break;case"s":m+D.y>v&&(D.y=v-m)}};switch(r){case"all":s+=D.x,c+=D.y;break;case"e":if(0<=D.x&&(f<=p||h&&(c<=g||v<=m))){w=!1;break}B("e"),d+=D.x,h&&(l=d/h,c-=D.x/h/2),d<0&&(r="w",d=0);break;case"n":if(D.y<=0&&(c<=g||h&&(s<=u||f<=p))){w=!1;break}B("n"),l-=D.y,c+=D.y,h&&(d=l*h,s+=D.y*h/2),l<0&&(r="s",l=0);break;case"w":if(D.x<=0&&(s<=u||h&&(c<=g||v<=m))){w=!1;break}B("w"),d-=D.x,s+=D.x,h&&(l=d/h,c+=D.x/h/2),d<0&&(r="e",d=0);break;case"s":if(0<=D.y&&(v<=m||h&&(s<=u||f<=p))){w=!1;break}B("s"),l+=D.y,h&&(d=l*h,s-=D.y*h/2),l<0&&(r="n",l=0);break;case"ne":if(h){if(D.y<=0&&(c<=g||f<=p)){w=!1;break}B("n"),l-=D.y,c+=D.y,d=l*h}else B("n"),B("e"),0<=D.x?p<f?d+=D.x:D.y<=0&&c<=g&&(w=!1):d+=D.x,D.y<=0?g<c&&(l-=D.y,c+=D.y):(l-=D.y,c+=D.y);d<0&&l<0?(r="sw",d=l=0):d<0?(r="nw",d=0):l<0&&(r="se",l=0);break;case"nw":if(h){if(D.y<=0&&(c<=g||s<=u)){w=!1;break}B("n"),l-=D.y,c+=D.y,d=l*h,s+=D.y*h}else B("n"),B("w"),D.x<=0?u<s?(d-=D.x,s+=D.x):D.y<=0&&c<=g&&(w=!1):(d-=D.x,s+=D.x),D.y<=0?g<c&&(l-=D.y,c+=D.y):(l-=D.y,c+=D.y);d<0&&l<0?(r="se",d=l=0):d<0?(r="ne",d=0):l<0&&(r="sw",l=0);break;case"sw":if(h){if(D.x<=0&&(s<=u||v<=m)){w=!1;break}B("w"),d-=D.x,s+=D.x,l=d/h}else B("s"),B("w"),D.x<=0?u<s?(d-=D.x,s+=D.x):0<=D.y&&v<=m&&(w=!1):(d-=D.x,s+=D.x),0<=D.y?m<v&&(l+=D.y):l+=D.y;d<0&&l<0?(r="ne",d=l=0):d<0?(r="se",d=0):l<0&&(r="nw",l=0);break;case"se":if(h){if(0<=D.x&&(f<=p||v<=m)){w=!1;break}B("e"),l=(d+=D.x)/h}else B("s"),B("e"),0<=D.x?p<f?d+=D.x:0<=D.y&&v<=m&&(w=!1):d+=D.x,0<=D.y?m<v&&(l+=D.y):l+=D.y;d<0&&l<0?(r="nw",d=l=0):d<0?(r="sw",d=0):l<0&&(r="ne",l=0);break;case"move":this.move(D.x,D.y),w=!1;break;case"zoom":this.zoom((y=q({},x=o),M=[],k(x,function(h,t){delete y[t],k(y,function(t){var e=Math.abs(h.startX-t.startX),i=Math.abs(h.startY-t.startY),a=Math.abs(h.endX-t.endX),n=Math.abs(h.endY-t.endY),o=Math.sqrt(e*e+i*i),r=(Math.sqrt(a*a+n*n)-o)/o;M.push(r)})}),M.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),M[0]),t),w=!1;break;case"crop":if(!D.x||!D.y){w=!1;break}b=W(this.cropper),s=C.startX-b.left,c=C.startY-b.top,d=n.minWidth,l=n.minHeight,0<D.x?r=0<D.y?"se":"ne":D.x<0&&(s-=d,r=0<D.y?"sw":"nw"),D.y<0&&(c-=l),this.cropped||(T(this.cropBox,H),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}w&&(n.width=d,n.height=l,n.left=s,n.top=c,this.action=r,this.renderCropBox()),k(o,function(t){t.startX=t.endX,t.startY=t.endY})}},rt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&l(this.dragBox,"cropper-modal"),T(this.cropBox,H),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=q({},this.initialImageData),this.canvasData=q({},this.initialCanvasData),this.cropBoxData=q({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(q(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),T(this.dragBox,"cropper-modal"),l(this.cropBox,H)),this},replace:function(e,t){var i=1<arguments.length&&void 0!==t&&arguments[1];return!this.disabled&&e&&(this.isImg&&(this.element.src=e),i?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,k(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,T(this.cropper,"cropper-disabled")),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,l(this.cropper,"cropper-disabled")),this},destroy:function(){var t=this.element;return g(t,"cropper")&&(this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),o(t,"cropper")),this},move:function(t,e){var i=1<arguments.length&&void 0!==e?arguments[1]:t,a=this.canvasData,n=a.left,o=a.top;return this.moveTo(r(t)?t:n+Number(t),r(i)?i:o+Number(i))},moveTo:function(t,e){var i=1<arguments.length&&void 0!==e?arguments[1]:t,a=this.canvasData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(v(t)&&(a.left=t,n=!0),v(i)&&(a.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a,n,o,r=this.options,h=this.canvasData,s=h.width,c=h.height,d=h.naturalWidth,l=h.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&r.zoomable){var p=d*t,m=l*t;if(!1===b(this.element,"zoom",{originalEvent:i,oldRatio:s/d,ratio:p/d}))return this;if(i){var u=this.pointers,g=W(this.cropper),f=u&&Object.keys(u).length?(o=n=a=0,k(u,function(t){var e=t.startX,i=t.startY;a+=e,n+=i,o+=1}),{pageX:a/=o,pageY:n/=o}):{pageX:i.pageX,pageY:i.pageY};h.left-=(p-s)*((f.pageX-g.left-h.left)/s),h.top-=(m-c)*((f.pageY-g.top-h.top)/c)}else w(e)&&v(e.x)&&v(e.y)?(h.left-=(p-s)*((e.x-h.left)/s),h.top-=(m-c)*((e.y-h.top)/c)):(h.left-=(p-s)/2,h.top-=(m-c)/2);h.width=p,h.height=m,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return v(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,v(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(v(e)?e:1,t)},scale:function(t,e){var i=1<arguments.length&&void 0!==e?arguments[1]:t,a=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(v(t)&&(a.scaleX=t,n=!0),v(i)&&(a.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(t){var i=0<arguments.length&&void 0!==t&&arguments[0],e=this.options,a=this.imageData,n=this.canvasData,o=this.cropBoxData,r=void 0;if(this.ready&&this.cropped){r={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var h=a.width/a.naturalWidth;k(r,function(t,e){t/=h,r[e]=i?Math.round(t):t})}else r={x:0,y:0,width:0,height:0};return e.rotatable&&(r.rotate=a.rotate||0),e.scalable&&(r.scaleX=a.scaleX||1,r.scaleY=a.scaleY||1),r},setData:function(t){var e=this.options,i=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&w(t)){var o=!1;e.rotatable&&v(t.rotate)&&t.rotate!==i.rotate&&(i.rotate=t.rotate,o=!0),e.scalable&&(v(t.scaleX)&&t.scaleX!==i.scaleX&&(i.scaleX=t.scaleX,o=!0),v(t.scaleY)&&t.scaleY!==i.scaleY&&(i.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var r=i.width/i.naturalWidth;v(t.x)&&(n.left=t.x*r+a.left),v(t.y)&&(n.top=t.y*r+a.top),v(t.width)&&(n.width=t.width*r),v(t.height)&&(n.height=t.height*r),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?q({},this.containerData):{}},getImageData:function(){return this.sized?q({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&k(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&w(t)&&(v(t.left)&&(e.left=t.left),v(t.top)&&(e.top=t.top),v(t.width)?(e.width=t.width,e.height=t.width/i):v(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t=this.cropBoxData,e=void 0;return this.ready&&this.cropped&&(e={left:t.left,top:t.top,width:t.width,height:t.height}),e||{}},setCropBoxData:function(t){var e=this.cropBoxData,i=this.options.aspectRatio,a=void 0,n=void 0;return this.ready&&this.cropped&&!this.disabled&&w(t)&&(v(t.left)&&(e.left=t.left),v(t.top)&&(e.top=t.top),v(t.width)&&t.width!==e.width&&(a=!0,e.width=t.width),v(t.height)&&t.height!==e.height&&(n=!0,e.height=t.height),i&&(a?e.height=e.width/i:n&&(e.width=e.height*i)),this.renderCropBox()),this},getCroppedCanvas:function(t){var e=0<arguments.length&&void 0!==t?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i,a,n,o,r,h,s,c,d,l,p,m,u,g,f,v,w,b,x,y,M,C,D,B,k,T,W,E,H,N,O,z,L,Y,X,R,S,j,A,I,P,U=this.canvasData,q=(i=this.image,a=this.imageData,n=U,o=e,r=a.aspectRatio,h=a.naturalWidth,s=a.naturalHeight,c=a.rotate,d=void 0===c?0:c,l=a.scaleX,p=void 0===l?1:l,m=a.scaleY,u=void 0===m?1:m,g=n.aspectRatio,f=n.naturalWidth,v=n.naturalHeight,w=o.fillColor,b=void 0===w?"transparent":w,x=o.imageSmoothingEnabled,y=void 0===x||x,M=o.imageSmoothingQuality,C=void 0===M?"low":M,D=o.maxWidth,B=void 0===D?1/0:D,k=o.maxHeight,T=void 0===k?1/0:k,W=o.minWidth,E=void 0===W?0:W,H=o.minHeight,N=void 0===H?0:H,O=document.createElement("canvas"),z=O.getContext("2d"),L=yt({aspectRatio:g,width:B,height:T}),Y=yt({aspectRatio:g,width:E,height:N},"cover"),X=Math.min(L.width,Math.max(Y.width,f)),R=Math.min(L.height,Math.max(Y.height,v)),S=yt({aspectRatio:r,width:B,height:T}),j=yt({aspectRatio:r,width:E,height:N},"cover"),A=Math.min(S.width,Math.max(j.width,h)),I=Math.min(S.height,Math.max(j.height,s)),P=[-A/2,-I/2,A,I],O.width=xt(X),O.height=xt(R),z.fillStyle=b,z.fillRect(0,0,X,R),z.save(),z.translate(X/2,R/2),z.rotate(d*Math.PI/180),z.scale(p,u),z.imageSmoothingEnabled=y,z.imageSmoothingQuality=C,z.drawImage.apply(z,[i].concat(Mt(P.map(function(t){return Math.floor(xt(t))})))),z.restore(),O);if(!this.cropped)return q;var $=this.getData(),_=$.x,Q=$.y,F=$.width,Z=$.height,K=q.width/Math.floor(U.naturalWidth);1!==K&&(_*=K,Q*=K,F*=K,Z*=K);var V=F/Z,G=yt({aspectRatio:V,width:e.maxWidth||1/0,height:e.maxHeight||1/0}),J=yt({aspectRatio:V,width:e.minWidth||0,height:e.minHeight||0},"cover"),tt=yt({aspectRatio:V,width:e.width||(1!==K?q.width:F),height:e.height||(1!==K?q.height:Z)}),et=tt.width,it=tt.height;et=Math.min(G.width,Math.max(J.width,et)),it=Math.min(G.height,Math.max(J.height,it));var at=document.createElement("canvas"),nt=at.getContext("2d");at.width=xt(et),at.height=xt(it),nt.fillStyle=e.fillColor||"transparent",nt.fillRect(0,0,et,it);var ot=e.imageSmoothingEnabled,rt=void 0===ot||ot,ht=e.imageSmoothingQuality;nt.imageSmoothingEnabled=rt,ht&&(nt.imageSmoothingQuality=ht);var st=q.width,ct=q.height,dt=_,lt=Q,pt=void 0,mt=void 0,ut=void 0,gt=void 0,ft=void 0,vt=void 0;dt<=-F||st<dt?ft=ut=pt=dt=0:dt<=0?(ut=-dt,dt=0,ft=pt=Math.min(st,F+dt)):dt<=st&&(ut=0,ft=pt=Math.min(F,st-dt)),pt<=0||lt<=-Z||ct<lt?vt=gt=mt=lt=0:lt<=0?(gt=-lt,lt=0,vt=mt=Math.min(ct,Z+lt)):lt<=ct&&(gt=0,vt=mt=Math.min(Z,ct-lt));var wt=[dt,lt,pt,mt];if(0<ft&&0<vt){var bt=et/F;wt.push(ut*bt,gt*bt,ft*bt,vt*bt)}return nt.drawImage.apply(nt,[q].concat(Mt(wt.map(function(t){return Math.floor(xt(t))})))),at},setAspectRatio:function(t){var e=this.options;return this.disabled||r(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e=this.options,i=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n="crop"===t,o=e.movable&&"move"===t;t=n||o?t:"none",p(i,"action",e.dragMode=t),h(i,"cropper-crop",n),h(i,"cropper-move",o),e.cropBoxMovable||(p(a,"action",t),h(a,"cropper-crop",n),h(a,"cropper-move",o))}return this}},ht=E.Cropper,st=function(){function a(t,e){var i=1<arguments.length&&void 0!==e?arguments[1]:{};if(A(this,a),!t||!R.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=q({},S,w(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return I(a,[{key:"init",value:function(){var t=this.element,e=t.tagName.toLowerCase(),i=void 0;if(!g(t,"cropper")){if(p(t,"cropper",this),"img"===e){if(this.isImg=!0,i=t.getAttribute("src")||"",!(this.originalUrl=i))return;i=t.src}else"canvas"===e&&window.HTMLCanvasElement&&(i=t.toDataURL());this.load(i)}}},{key:"load",value:function(t){var e=this;if(t){this.url=t,this.imageData={};var i=this.element,a=this.options;if(a.checkOrientation&&window.ArrayBuffer)if(Y.test(t))X.test(t)?this.read((n=t.replace(tt,""),o=atob(n),r=new ArrayBuffer(o.length),k(h=new Uint8Array(r),function(t,e){h[e]=o.charCodeAt(e)}),r)):this.clone();else{var n,o,r,h,s=new XMLHttpRequest;this.reloading=!0,this.xhr=s;var c=function(){e.reloading=!1,e.xhr=null};s.ontimeout=c,s.onabort=c,s.onerror=function(){c(),e.clone()},s.onload=function(){c(),e.read(s.response)},a.checkCrossOrigin&&f(t)&&i.crossOrigin&&(t=x(t)),s.open("get",t),s.responseType="arraybuffer",s.withCredentials="use-credentials"===i.crossOrigin,s.send()}else this.clone()}}},{key:"read",value:function(t){var e,i,a=this.options,n=this.imageData,o=M(t),r=0,h=1,s=1;if(1<o){this.url=(e="image/jpeg",i="",k(new Uint8Array(t),function(t){i+=J(t)}),"data:"+e+";base64,"+btoa(i));var c=function(){var t=0,e=1,i=1;switch(o){case 2:e=-1;break;case 3:t=-180;break;case 4:i=-1;break;case 5:t=90,i=-1;break;case 6:t=90;break;case 7:t=90,e=-1;break;case 8:t=-90}return{rotate:t,scaleX:e,scaleY:i}}();r=c.rotate,h=c.scaleX,s=c.scaleY}a.rotatable&&(n.rotate=r),a.scalable&&(n.scaleX=h,n.scaleY=s),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=void 0,a=void 0;this.options.checkCrossOrigin&&f(e)&&((i=t.crossOrigin)?a=e:(i="anonymous",a=x(e))),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e;var o=this.start.bind(this),r=this.stop.bind(this);this.image=n,this.onStart=o,this.onStop=r,this.isImg?t.complete?this.timeout=setTimeout(o,0):m(t,"load",o,{once:!0}):(n.onload=o,n.onerror=r,l(n,"cropper-hide"),t.parentNode.insertBefore(n,t.nextSibling))}},{key:"start",value:function(t){var i=this,e=this.isImg?this.element:this.image;t&&(e.onload=null,e.onerror=null),this.sizing=!0;var a=E.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(E.navigator.userAgent),n=function(t,e){q(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.sizing=!1,i.sized=!0,i.build()};if(!e.naturalWidth||a){var o=document.createElement("img"),r=document.body||document.documentElement;(this.sizingImage=o).onload=function(){n(o.width,o.height),a||r.removeChild(o)},o.src=e.src,a||(o.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",r.appendChild(o))}else n(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){
var t=this.element,e=this.options,i=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-action="e"></span><span class="cropper-line line-n" data-action="n"></span><span class="cropper-line line-w" data-action="w"></span><span class="cropper-line line-s" data-action="s"></span><span class="cropper-point point-e" data-action="e"></span><span class="cropper-point point-n" data-action="n"></span><span class="cropper-point point-w" data-action="w"></span><span class="cropper-point point-s" data-action="s"></span><span class="cropper-point point-ne" data-action="ne"></span><span class="cropper-point point-nw" data-action="nw"></span><span class="cropper-point point-sw" data-action="sw"></span><span class="cropper-point point-se" data-action="se"></span></div></div>';var o=n.querySelector(".cropper-container"),r=o.querySelector(".cropper-canvas"),h=o.querySelector(".cropper-drag-box"),s=o.querySelector(".cropper-crop-box"),c=s.querySelector(".cropper-face");this.container=a,this.cropper=o,this.canvas=r,this.dragBox=h,this.cropBox=s,this.viewBox=o.querySelector(".cropper-view-box"),this.face=c,r.appendChild(i),l(t,H),a.insertBefore(o,t.nextSibling),this.isImg||T(i,"cropper-hide"),this.initPreview(),this.bind(),e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,l(s,H),e.guides||l(s.getElementsByClassName("cropper-dashed"),H),e.center||l(s.getElementsByClassName("cropper-center"),H),e.background&&l(o,"cropper-bg"),e.highlight||l(c,"cropper-invisible"),e.cropBoxMovable&&(l(c,"cropper-move"),p(c,"action","all")),e.cropBoxResizable||(l(s.getElementsByClassName("cropper-line"),H),l(s.getElementsByClassName("cropper-point"),H)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),d(e.ready)&&m(t,"ready",e.ready,{once:!0}),b(t,"ready")}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),T(this.element,H))}},{key:"uncreate",value:function(){var t=this.element;this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?this.xhr.abort():this.isImg?t.complete?clearTimeout(this.timeout):s(t,"load",this.onStart):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=ht,a}},{key:"setDefaults",value:function(t){q(S,w(t)&&t)}}]),a}();if(q(st.prototype,et,it,at,nt,ot,rt),D.fn){var ct=D.fn.cropper;D.fn.cropper=function(h){for(var t=arguments.length,s=Array(1<t?t-1:0),e=1;e<t;e++)s[e-1]=arguments[e];var c=void 0;return this.each(function(t,e){var i=D(e),a="destroy"===h,n=i.data("cropper");if(!n){if(a)return;var o=D.extend({},i.data(),D.isPlainObject(h)&&h);n=new st(e,o),i.data("cropper",n)}if("string"==typeof h){var r=n[h];D.isFunction(r)&&((c=r.apply(n,s))===n&&(c=void 0),a&&i.removeData("cropper"))}}),void 0!==c?c:this},D.fn.cropper.Constructor=st,D.fn.cropper.setDefaults=st.setDefaults,D.fn.cropper.noConflict=function(){return D.fn.cropper=ct,this}}},297:function(t,e,i){i(296)}});if("object"==typeof e){var i=["object"==typeof module&&"object"==typeof module.exports?module.exports:null,"undefined"!=typeof window?window:null,t&&t!==window?t:null];for(var a in e)i[0]&&(i[0][a]=e[a]),i[1]&&"__esModule"!==a&&(i[1][a]=e[a]),i[2]&&(i[2][a]=e[a])}}(this);