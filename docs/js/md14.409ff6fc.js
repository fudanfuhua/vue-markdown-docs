(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md14"],{"4c71":function(e,t,n){var o=n("d090");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("62254bda",o,!0,{sourceMap:!1,shadowMode:!1})},"6adf":function(e,t,n){"use strict";var o=n("4c71"),r=n.n(o);r.a},b1c7:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});n("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var o=function(e){var t=[];return["h1","h2","h3"].map(function(n){e.querySelectorAll(n).forEach(function(e){var o="#".concat(e.innerText);t.push({tag:n,text:e.innerText,href:o});var r=document.createElement("a");r.innerText="#",r.className="header-anchor",r.href=o,e.prepend(r)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&r(t.hash)});var r=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},c3ec:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("v-if with v-for")]),n("p",[e._v("when they exist on same node, "),n("code",{pre:!0},[e._v("v-for")]),e._v(" has a higher priority than "),n("code",{pre:!0},[e._v("v-if")]),e._v(".\nThat means "),n("code",{pre:!0},[e._v("v-if")]),e._v(" can be useful when you want to render nodes for only "),n("code",{pre:!0},[e._v("some")]),e._v(" items.")]),n("p",[n("em",[e._v("Instead, your intent is to skip execution of the loop,")]),e._v(" you can place "),n("code",{pre:!0},[e._v("v-if")]),e._v(" on a wrapper or "),n("code",{pre:!0},[e._v("<template>")]),e._v(".")]),n("h3",[e._v("key")]),n("p",[e._v("you need to provide a unique "),n("code",{pre:!0},[e._v("key")]),e._v(" for each item, "),n("code",{pre:!0},[e._v("key")]),e._v(" would be the unique id of each item.")])])}],c=n("b1c7"),a={mounted:function(){this.$emit("markdown",Object(c["b"])(this.$root.$el)),Object(c["a"])()}},i=a,u=(n("6adf"),n("048f")),d=Object(u["a"])(i,o,r,!1,null,null,null);d.options.__file="v-if&v-for.md";t["default"]=d.exports},d090:function(e,t,n){t=e.exports=n("ed9b")(!1),t.push([e.i,"",""])}}]);