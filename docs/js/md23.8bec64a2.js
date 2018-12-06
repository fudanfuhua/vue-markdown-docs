(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md23"],{"0965":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("npm")]),n("h3",[e._v("run-script")]),n("p",[n("code",{pre:!0},[e._v("npm run-script <command> [--silent] [-- <args>...]")])]),n("h4",[e._v("custom arguments")]),n("p",[n("em",[e._v("special option "),n("code",{pre:!0},[e._v("--")]),e._v(" is used by "),n("code",{pre:!0},[e._v("getopt")]),e._v(", npm will pass all arguments after "),n("code",{pre:!0},[e._v("--")]),e._v(" directly to script.\nthe arguments will only be passed to the script specified after "),n("code",{pre:!0},[e._v("npm run")]),e._v(" and not to any "),n("code",{pre:!0},[e._v("pre")]),e._v(" or "),n("code",{pre:!0},[e._v("post")]),e._v(" script.")])]),n("h4",[e._v(".bin")]),n("p",[n("em",[e._v("the shell's pre-existing "),n("code",{pre:!0},[e._v("PATH")]),e._v(", "),n("code",{pre:!0},[e._v("npm run")]),e._v(" add "),n("code",{pre:!0},[e._v("node_modules/.bin")]),e._v(" to the "),n("code",{pre:!0},[e._v("PATH")]),e._v(" provided to scripts. Any binaries provided by locally-installed dependencies can be used without "),n("code",{pre:!0},[e._v("node_modules/.bin")]),e._v(" prefix.")])]),n("h4",[e._v("& &&")]),n("p",[n("code",{pre:!0},[e._v('"dev": "node test.js & webpack"')])]),n("p",[n("em",[e._v("run async")])]),n("p",[n("code",{pre:!0},[e._v('"dev": "node test.js && webpack"')])]),n("p",[n("em",[e._v("run sync")])]),n("h4",[e._v("pre & post")]),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-json"}},[n("span",{attrs:{class:"hljs-string"}},[e._v('"predev"')]),e._v(": "),n("span",{attrs:{class:"hljs-string"}},[e._v('"node 1.js"')]),e._v("\n"),n("span",{attrs:{class:"hljs-string"}},[e._v('"dev"')]),e._v(": "),n("span",{attrs:{class:"hljs-string"}},[e._v('"node 2.js"')]),e._v("\n"),n("span",{attrs:{class:"hljs-string"}},[e._v('"postdev"')]),e._v(": "),n("span",{attrs:{class:"hljs-string"}},[e._v('"node 3.js"')]),e._v("\n")])]),n("p",[n("em",[e._v("equal to "),n("code",{pre:!0},[e._v("npm run predev && npm run dev && npm run postdev")])])]),n("h4",[e._v("lifecycle event")]),n("p",[n("code",{pre:!0},[e._v("process.env.npm_lifecycle_event")])]),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[n("span",{attrs:{class:"hljs-keyword"}},[e._v("switch")]),e._v(" (process.env.npm_lifecycle_event) {\n    "),n("span",{attrs:{class:"hljs-keyword"}},[e._v("case")]),e._v(" "),n("span",{attrs:{class:"hljs-string"}},[e._v("'predev'")]),e._v(":\n    "),n("span",{attrs:{class:"hljs-keyword"}},[e._v("case")]),e._v(" "),n("span",{attrs:{class:"hljs-string"}},[e._v("'dev'")]),e._v(":\n    "),n("span",{attrs:{class:"hljs-keyword"}},[e._v("case")]),e._v(" "),n("span",{attrs:{class:"hljs-string"}},[e._v("'postdev'")]),e._v("\n}\n")])]),n("h4",[e._v("npm package")]),n("p",[n("code",{pre:!0},[e._v("process.env.npm_package_name")])])])}],a=(n("3a0f"),n("a3a3"),n("4d0b"),n("b1c7")),o={mounted:function(){this.$emit("markdown",Object(a["b"])(this.$root.$el)),Object(a["a"])()}},c=o,p=(n("5aa3"),n("048f")),v=Object(p["a"])(c,s,r,!1,null,null,null);v.options.__file="npm.md";t["default"]=v.exports},"5aa3":function(e,t,n){"use strict";var s=n("ec91"),r=n.n(s);r.a},b1c7:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return r});n("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var s=function(e){var t=[];return["h1","h2","h3"].map(function(n){e.querySelectorAll(n).forEach(function(e){var s="#".concat(e.innerText);t.push({tag:n,text:e.innerText,href:s});var r=document.createElement("a");r.innerText="#",r.className="header-anchor",r.href=s,e.prepend(r)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&r(t.hash)});var r=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},b2b5:function(e,t,n){t=e.exports=n("690e")(!1),t.push([e.i,"",""])},ec91:function(e,t,n){var s=n("b2b5");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var r=n("85cb").default;r("54e0e7de",s,!0,{sourceMap:!1,shadowMode:!1})}}]);