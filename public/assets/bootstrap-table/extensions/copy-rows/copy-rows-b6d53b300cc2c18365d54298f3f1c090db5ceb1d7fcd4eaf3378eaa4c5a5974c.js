!function(o){var t=function(o){function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return o[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};return t.m=o,t.c=e,t.d=function(o,e,n){t.o(o,e)||Object.defineProperty(o,e,{configurable:!1,enumerable:!0,get:n})},t.r=function(o){Object.defineProperty(o,"__esModule",{value:!0})},t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},t.p="",t(t.s=353)}({352:function(){!function(o){"use strict";var t=o.fn.bootstrapTable.utils.calculateObjectValue,e=(o.fn.bootstrapTable.utils.sprintf,function(t){var e=document.createElement("textarea");o(e).html(t),document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch(o){console.log("Oops, unable to copy")}o(e).remove()});o.extend(o.fn.bootstrapTable.defaults,{copyBtn:!1,copyWHiddenBtn:!1,copyDelemeter:", "}),o.fn.bootstrapTable.methods.push("copyColumnsToClipboard","copyColumnsToClipboardWithHidden");var n=o.fn.bootstrapTable.Constructor,i=n.prototype.initToolbar;n.prototype.initToolbar=function(){i.apply(this,Array.prototype.slice.apply(arguments));var o=this,t=this.$toolbar.find(">.btn-group");(this.options.clickToSelect||this.options.singleSelect)&&(this.options.copyBtn&&(t.append("<button class='btn btn-default' id='copyBtn'><span class='glyphicon glyphicon-copy icon-pencil'></span></button>"),t.find("#copyBtn").click(function(){o.copyColumnsToClipboard()})),this.options.copyWHiddenBtn&&(t.append("<button class='btn btn-default' id='copyWHiddenBtn'><span class='badge'><span class='glyphicon glyphicon-copy icon-pencil'></span></span></button>"),t.find("#copyWHiddenBtn").click(function(){o.copyColumnsToClipboardWithHidden()})))},n.prototype.copyColumnsToClipboard=function(){var n=this,i="",l=this.options.copyDelemeter;o.each(n.getSelections(),function(e,c){o.each(n.options.columns[0],function(o,p){"state"!==p.field&&"RowNumber"!==p.field&&p.visible&&(null!==c[p.field]&&(i+=t(p,n.header.formatters[o],[c[p.field],c,e],c[p.field])),i+=l)}),i+="\r\n"}),e(i)},n.prototype.copyColumnsToClipboardWithHidden=function(){var n=this,i="",l=this.options.copyDelemeter;o.each(n.getSelections(),function(e,c){o.each(n.options.columns[0],function(o,p){"state"!=p.field&&"RowNumber"!==p.field&&(null!==c[p.field]&&(i+=t(p,n.header.formatters[o],[c[p.field],c,e],c[p.field])),i+=l)}),i+="\r\n"}),e(i)}}(jQuery)},353:function(o,t,e){e(352)}});if("object"==typeof t){var e=["object"==typeof module&&"object"==typeof module.exports?module.exports:null,"undefined"!=typeof window?window:null,o&&o!==window?o:null];for(var n in t)e[0]&&(e[0][n]=t[n]),e[1]&&"__esModule"!==n&&(e[1][n]=t[n]),e[2]&&(e[2][n]=t[n])}}(this);