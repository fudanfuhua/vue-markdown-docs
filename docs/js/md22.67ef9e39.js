(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md22"],{"5b82":function(e,t,n){"use strict";var o=n("8f04"),r=n.n(o);r.a},"7b75":function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"",""])},"8f04":function(e,t,n){var o=n("7b75");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("47471c60",o,!0,{sourceMap:!1,shadowMode:!1})},a8b0:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Memory Leak")]),n("h3",[e._v("DOM/BOM Event in Render()")]),n("p",[e._v("avoid use DOM/BOM Event if using "),n("code",{pre:!0},[e._v("render()")])]),n("h3",[e._v("addEventListener")]),n("p",[n("code",{pre:!0},[e._v("beforeDestroy")]),e._v(" call "),n("code",{pre:!0},[e._v("removeEventListener")]),e._v(", and "),n("code",{pre:!0},[e._v("delete")]),n("code",{pre:!0},[e._v("callback")]),e._v("/set props "),n("code",{pre:!0},[e._v("null")]),e._v("/"),n("code",{pre:!0},[e._v("undefined")])]),n("p",[e._v("avoid use "),n("code",{pre:!0},[e._v("anonymous function")]),e._v(" to callback")]),n("h3",[e._v("$on and $off")])])}],c=(n("3a0f"),n("a3a3"),n("4d0b"),n("b1c7")),a={mounted:function(){this.$emit("markdown",Object(c["b"])(this.$root.$el)),Object(c["a"])()}},i=a,d=(n("5b82"),n("048f")),u=Object(d["a"])(i,o,r,!1,null,null,null);u.options.__file="memory-leak.md";t["default"]=u.exports},b1c7:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});n("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var o=function(e){var t=[];return["h1","h2","h3"].map(function(n){e.querySelectorAll(n).forEach(function(e){var o="#".concat(e.innerText);t.push({tag:n,text:e.innerText,href:o});var r=document.createElement("a");r.innerText="#",r.className="header-anchor",r.href=o,e.prepend(r)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&r(t.hash)});var r=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}}}]);