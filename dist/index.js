"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _stringUcfirst=_interopRequireDefault(require("@jipd/string-ucfirst")),_default=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"",b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0,c=a.toLowerCase(),d={goose:"geese",man:"men",mouse:"mice",tooth:"teeth"};if(1===parseInt(b,10)||-1!==["deer","fish","sheep","species"].indexOf(c))return a;if(-1!==Object.keys(d).indexOf(c)){var e=a.charCodeAt(0);return 65<=e&&90>=e?(0,_stringUcfirst["default"])(d[c]):d[c]}return a.match(/(ch|sh|s|x|z)$/i)?"".concat(a,"es"):a.match(/[a,e,i,o,u]y$/i)?"".concat(a,"s"):a.match(/y$/)?"".concat(a.replace(/y$/i,""),"s"):a.match(/fe?$/)?"".concat(a.replace(/fe?$/i,""),"ves"):"".concat(a,"s")};exports["default"]=_default;