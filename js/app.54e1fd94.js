(function(t){function e(e){for(var n,s,i=e[0],u=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ragnarson/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"21bb":function(t,e,r){"use strict";r("2dad")},"2dad":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("router-view")],1)},o=[],s={name:"App",components:{},data:function(){return{}}},i=s,u=(r("5c0b"),r("2877")),c=r("6544"),l=r.n(c),d=r("7496"),p=Object(u["a"])(i,a,o,!1,null,null,null),f=p.exports;l()(p,{VApp:d["a"]});var h=r("8c4f"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"header"},[r("div",{staticClass:"score"},[r("p",[t._v("Your score: "+t._s(t.userPoints))]),r("p",[t._v(" Rounds left: "+t._s(30-t.round)+" ")])])]),r("main",[r("div",{staticClass:"container"},[r("span",[r("img",{attrs:{src:t.currentCart.image,alt:""}})]),r("div",{staticClass:"buttons"},[r("v-btn",{attrs:{rounded:"",color:"rgb(245, 245, 245)",dark:"",disabled:!t.deskID||t.round>29},on:{click:function(e){return t.higher()}}},[r("p",[t._v("higher")])]),r("v-btn",{attrs:{rounded:"",color:"rgb(245, 245, 245)",dark:"",disabled:!t.deskID||t.round>29},on:{click:function(e){return t.lower()}}},[r("p",[t._v("lower")])])],1)])]),r("v-dialog",{attrs:{width:"270"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("v-alert",{staticClass:"mb-0",attrs:{type:"success"}},[t._v(" Reload the previous game? "),r("v-btn",{on:{click:function(e){return t.loadCache()}}},[t._v("YES")]),r("v-btn",{on:{click:function(e){return t.clearCache()}}},[t._v("NO")])],1)],1),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.history,"items-per-page":20,dense:""}})],1)},b=[],m=(r("b680"),r("96cf"),r("1da1")),g={name:"Home",data:function(){return{userPoints:0,round:1,higherCart:null,visible:!1,history:[{round:1,userPoints:0}],headers:[{text:"round",value:"round"},{text:"userPoints",value:"userPoints"}]}},created:function(){this.$store.dispatch("getDesk"),localStorage.getItem("data")&&(this.visible=!0)},components:{},methods:{cartToNumber:function(t){var e={0:10,J:11,Q:12,K:13,A:14};return+t.code[0]>0?+t.code[0]:e[t.code[0]]},higher:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.round+=1,e.next=3,t.$store.dispatch("getCart");case 3:t.cartToNumber(t.currentCart)>t.cartToNumber(t.previousCart)&&(t.userPoints=+(t.userPoints+.1).toFixed(1));case 4:case"end":return e.stop()}}),e)})))()},lower:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.round+=1,e.next=3,t.$store.dispatch("getCart");case 3:t.cartToNumber(t.currentCart)<t.cartToNumber(t.previousCart)&&(t.userPoints=+(t.userPoints+.1).toFixed(1));case 4:case"end":return e.stop()}}),e)})))()},loadCache:function(){this.userPoints=JSON.parse(localStorage.getItem("data")).userPoints,this.round=JSON.parse(localStorage.getItem("data")).round,this.history=JSON.parse(localStorage.getItem("data")).history,this.visible=!1},clearCache:function(){localStorage.removeItem("data"),this.visible=!1}},computed:{currentCart:function(){return this.$store.state.currentCart},previousCart:function(){return this.$store.state.previousCart},deskID:function(){return this.$store.state.desk_id}},watch:{round:function(t){t>this.history.length&&this.history.push({userPoints:this.userPoints,round:t}),localStorage.setItem("data",JSON.stringify({userPoints:this.userPoints,round:t,history:this.history})),30===t&&localStorage.removeItem("data")}}},C=g,k=(r("21bb"),r("0798")),w=r("8336"),y=r("8fea"),_=r("169a"),P=Object(u["a"])(C,v,b,!1,null,null,null),O=P.exports;l()(P,{VAlert:k["a"],VBtn:w["a"],VDataTable:y["a"],VDialog:_["a"]}),n["a"].use(h["a"]);var S=[{path:"/",name:"Home",component:O}],x=new h["a"]({routes:S}),j=x,I=r("2f62"),N=r("bc3a"),D=r.n(N);n["a"].use(I["a"]);var T=new I["a"].Store({state:{currentCart:"",previousCart:"",desk_id:null},mutations:{setDeskId:function(t,e){t.desk_id=e},setCurrentCart:function(t,e){t.currentCart=e},setPreviousCart:function(t,e){t.previousCart=e}},actions:{getDesk:function(t){var e=t.commit,r=t.dispatch;D.a.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then((function(t){console.log(t),e("setDeskId",t.data.deck_id),r("getCart")}))},getCart:function(t){var e=t.commit,r=t.state;return r.currentCart&&e("setPreviousCart",r.currentCart),D.a.get("https://deckofcardsapi.com/api/deck/".concat(r.desk_id,"/draw/?count=1")).then((function(t){console.log(t),e("setCurrentCart",t.data.cards[0])}))}},modules:{}}),$=r("f309");n["a"].use($["a"]);var J=new $["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:j,store:T,vuetify:J,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.54e1fd94.js.map