(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md15"],{"01fc":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("requestAnimationFrame")]),n("p",[e._v("usually "),n("code",{pre:!0},[e._v("60 times per second")]),e._v(", but generally match the display refresh rate as per W3C recommendation.")]),n("p",[e._v("callback is passed a single argument, a DOMHighResTimeSteamp, indicates the current time then callbacks queued by "),n("code",{pre:!0},[e._v("requestAnimationFrame()")]),e._v(" begin to fire.")]),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[n("span",{attrs:{class:"hljs-built_in"}},[e._v("window")]),e._v(".requestAnimationFrame("),n("span",{attrs:{class:"hljs-function"}},[n("span",{attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" ("),n("span",{attrs:{class:"hljs-params"}},[e._v("timestamp")]),e._v(") ")]),e._v("{})\n")])]),n("h3",[e._v("cancelAnimationFrame")]),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[n("span",{attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" a = "),n("span",{attrs:{class:"hljs-built_in"}},[e._v("window")]),e._v(".requestAnimationFrame(...)\n"),n("span",{attrs:{class:"hljs-built_in"}},[e._v("window")]),e._v(".cancleAnimationFrame(a)\n")])])])}],o=n("b1c7"),c={mounted:function(){this.$emit("markdown",Object(o["b"])(this.$root.$el)),Object(o["a"])()}},s=c,i=(n("1b98"),n("048f")),l=Object(i["a"])(s,a,r,!1,null,null,null);l.options.__file="requestAnimationFrame.md";t["default"]=l.exports},"0f7c":function(e,t,n){var a=n("4e75");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("85cb").default;r("e5389c86",a,!0,{sourceMap:!1,shadowMode:!1})},"1b98":function(e,t,n){"use strict";var a=n("0f7c"),r=n.n(a);r.a},"4e75":function(e,t,n){t=e.exports=n("ed9b")(!1),t.push([e.i,"",""])},b1c7:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});n("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var a=function(e){var t=[];return["h1","h2","h3"].map(function(n){e.querySelectorAll(n).forEach(function(e){var a="#".concat(e.innerText);t.push({tag:n,text:e.innerText,href:a});var r=document.createElement("a");r.innerText="#",r.className="header-anchor",r.href=a,e.prepend(r)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&r(t.hash)});var r=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}}}]);