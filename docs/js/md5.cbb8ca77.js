(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md5"],{"3cd2":function(e,t,n){"use strict";var o=n("f4ab"),a=n.n(o);a.a},ae23:function(e,t,n){t=e.exports=n("ed9b")(!1),t.push([e.i,"",""])},b1c7:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});n("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var o=function(e){var t=[];return["h1","h2","h3"].map(function(n){e.querySelectorAll(n).forEach(function(e){var o="#".concat(e.innerText);t.push({tag:n,text:e.innerText,href:o});var a=document.createElement("a");a.innerText="#",a.className="header-anchor",a.href=o,e.prepend(a)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&a(t.hash)});var a=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},f2ba:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Closure")]),n("p",[e._v("Variables created "),n("code",{pre:!0},[e._v("without")]),n("code",{pre:!0},[e._v("var")]),e._v(", are always "),n("code",{pre:!0},[e._v("global")]),e._v(", even created inside a function.")]),n("h3",[e._v("Global/Local Variables")]),n("ul",[n("li",[e._v("Global variables live as long as application (window/web page) lives.")]),n("li",[e._v("Local variables have short lives, created when function is invoked, and deleted when function is finished.")])]),n("p",[e._v("closure, makes possible for a function to have "),n("code",{pre:!0},[e._v("private")]),e._v(" varibales.")])])}],r=n("b1c7"),c={mounted:function(){this.$emit("markdown",Object(r["b"])(this.$root.$el)),Object(r["a"])()}},i=c,l=(n("3cd2"),n("048f")),s=Object(l["a"])(i,o,a,!1,null,null,null);s.options.__file="Closure.md";t["default"]=s.exports},f4ab:function(e,t,n){var o=n("ae23");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("85cb").default;a("1f87017e",o,!0,{sourceMap:!1,shadowMode:!1})}}]);