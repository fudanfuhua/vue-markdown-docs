(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md11"],{"4a40":function(e,t,s){t=e.exports=s("ed9b")(!1),t.push([e.i,"",""])},"99a0":function(e,t,s){var n=s("4a40");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=s("85cb").default;a("91be431e",n,!0,{sourceMap:!1,shadowMode:!1})},b1c7:function(e,t,s){"use strict";s.d(t,"b",function(){return n}),s.d(t,"a",function(){return a});s("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var s=e instanceof Node;t.appendChild(s?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var n=function(e){var t=[];return["h1","h2","h3"].map(function(s){e.querySelectorAll(s).forEach(function(e){var n="#".concat(e.innerText);t.push({tag:s,text:e.innerText,href:n});var a=document.createElement("a");a.innerText="#",a.className="header-anchor",a.href=n,e.prepend(a)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&a(t.hash)});var a=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},ca5b:function(e,t,s){"use strict";var n=s("99a0"),a=s.n(n);a.a},e0cc:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h2",[e._v("Microtasks & Macrotasks")]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[e._v("setTimeout("),s("span",{attrs:{class:"hljs-function"}},[s("span",{attrs:{class:"hljs-params"}},[e._v("()")]),e._v(" =>")]),e._v(" {\n    "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{attrs:{class:"hljs-number"}},[e._v("1")]),e._v(")\n})\n\n"),s("span",{attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("Promise")]),e._v("("),s("span",{attrs:{class:"hljs-function"}},[s("span",{attrs:{class:"hljs-params"}},[e._v("resolve")]),e._v(" =>")]),e._v(" {\n    resolve()\n    "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{attrs:{class:"hljs-number"}},[e._v("2")]),e._v(")\n})\n    .then("),s("span",{attrs:{class:"hljs-function"}},[s("span",{attrs:{class:"hljs-params"}},[e._v("()")]),e._v(" =>")]),e._v(" {\n        "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{attrs:{class:"hljs-number"}},[e._v("3")]),e._v(")\n    })\n\n"),s("span",{attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log("),s("span",{attrs:{class:"hljs-number"}},[e._v("4")]),e._v(")\n")])]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-console"}},[e._v("// result: 2 4 3 1\n")])]),s("h3",[e._v("Macrotask")]),s("p",[s("code",{pre:!0},[e._v("setTimeout")]),e._v(", "),s("code",{pre:!0},[e._v("setInterval")]),e._v(", "),s("code",{pre:!0},[e._v("process.nextTick")])]),s("h3",[e._v("Microtask")]),s("p",[s("code",{pre:!0},[e._v("process.nextTick")]),e._v(", "),s("code",{pre:!0},[e._v("Promise")])])])}],r=s("b1c7"),o={mounted:function(){this.$emit("markdown",Object(r["b"])(this.$root.$el)),Object(r["a"])()}},c=o,l=(s("ca5b"),s("048f")),i=Object(l["a"])(c,n,a,!1,null,null,null);i.options.__file="Microtasks&Macrotasks.md";t["default"]=i.exports}}]);