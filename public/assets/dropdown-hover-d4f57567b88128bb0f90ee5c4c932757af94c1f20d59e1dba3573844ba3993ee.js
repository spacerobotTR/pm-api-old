!function(t){var o=function(t){function o(n){if(e[n])return e[n].exports;var d=e[n]={i:n,l:!1,exports:{}};return t[n].call(d.exports,d,d.exports,o),d.l=!0,d.exports}var e={};return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="",o(o.s=460)}({460:function(){"use strict";!function(t){if(t&&t.fn){var o="[data-toggle=dropdown][data-trigger=hover]",e=150;t(function(){t("body").on("mouseenter",o+", "+o+" ~ .dropdown-menu",function(){t(this).hasClass("dropdown-toggle")?t(this):t(this).prev(".dropdown-toggle");var e,n,d=t(this).hasClass("dropdown-menu")?t(this):t(this).next(".dropdown-menu");"static"!==window.getComputedStyle(d[0],null).getPropertyValue("position")&&(t(this).is(o)&&t(this).data("hovered",!0),(n=(e=t(this).hasClass("dropdown-toggle")?t(this):t(this).prev(".dropdown-toggle")).data("dd-timeout"))&&(clearTimeout(n),n=null,e.data("dd-timeout",n)),"true"!==e.attr("aria-expanded")&&e.dropdown("toggle"))}).on("mouseleave",o+", "+o+" ~ .dropdown-menu",function(){t(this).hasClass("dropdown-toggle")?t(this):t(this).prev(".dropdown-toggle");var n,d,r=t(this).hasClass("dropdown-menu")?t(this):t(this).next(".dropdown-menu");"static"!==window.getComputedStyle(r[0],null).getPropertyValue("position")&&(t(this).is(o)&&t(this).data("hovered",!1),(d=(n=t(this).hasClass("dropdown-toggle")?t(this):t(this).prev(".dropdown-toggle")).data("dd-timeout"))&&clearTimeout(d),d=setTimeout(function(){var t=n.data("dd-timeout");t&&(clearTimeout(t),t=null,n.data("dd-timeout",t)),"true"===n.attr("aria-expanded")&&n.dropdown("toggle")},e),n.data("dd-timeout",d))}).on("hide.bs.dropdown",function(e){t(this).find(o).data("hovered")&&e.preventDefault()})})}}(window.jQuery)}});if("object"==typeof o){var e=["object"==typeof module&&"object"==typeof module.exports?module.exports:null,"undefined"!=typeof window?window:null,t&&t!==window?t:null];for(var n in o)e[0]&&(e[0][n]=o[n]),e[1]&&"__esModule"!==n&&(e[1][n]=o[n]),e[2]&&(e[2][n]=o[n])}}(this);