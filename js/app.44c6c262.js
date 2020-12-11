(function(t){function e(e){for(var a,s,i=e[0],r=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],a=!0,i=1;i<o.length;i++){var r=o[i];0!==n[r]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},n={app:0},c=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=r;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1:function(t,e){},"187f":function(t,e,o){"use strict";o("2df2")},"22d5":function(t,e,o){},"2df2":function(t,e,o){},"300d":function(t,e,o){},"35f2":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=o("8c4f"),c=o("28dd"),s=(o("caad"),o("a9e3"),o("b680"),o("b64b"),o("d3b7"),o("ac1f"),o("25f0"),o("2532"),o("5319"),o("2f62"));a["a"].use(s["a"]);var i=new s["a"].Store({state:{balance:0,stocks:{amazon:{name:"Amazon",price:0},apple:{name:"Apple",price:0},atlassian:{name:"Atlassian",price:0},facebook:{name:"Facebook",price:0},microsoft:{name:"Microsoft",price:0},tesla:{name:"Tesla",price:0},twitter:{name:"Twitter",price:0},volvo:{name:"Volvo",price:0}},portfolio:{}},getters:{balance:function(t){return t.balance},formatBalance:function(t){return"$"+t.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},stocks:function(t){return t.stocks},portfolio:function(t){return t.portfolio}},mutations:{SET_BALANCE:function(t){t.balance=Number((200+1e4*Math.random()).toFixed(0))},UPDATE_PRICES:function(t){for(var e in t.stocks){var o=t.stocks[e].price;o<1&&(o=(30+50*Math.random()).toFixed(2));var a=.8*o,n=1.2*o;t.stocks[e].price=(a+Math.random()*(n-a)).toFixed(2)}},BUY_STOCK:function(t,e){var o=Number(e.amount);if(o>0){var a=Number((o*t.stocks[e.id].price).toFixed(2));a<=t.balance?(Object.keys(t.portfolio).includes(e.id)?t.portfolio[e.id]+=o:t.portfolio[e.id]=o,t.balance=Number((t.balance-a).toFixed(2))):alert("You don’t have enough funds for this purchase.")}},SELL_STOCK:function(t,e){var o=Number(e.amount);if(o>0){var n=Number((o*t.stocks[e.id].price).toFixed(2));if(o<=t.portfolio[e.id]){var c=t.portfolio[e.id]-o;a["a"].delete(t.portfolio,e.id),c>0&&a["a"].set(t.portfolio,e.id,c),t.balance=Number((t.balance+n).toFixed(2))}else alert("Please enter a valid amount of stocks to sell.")}},LOAD_DATA:function(t,e){t.balance=e.balance,t.stocks=e.stocks,e.portfolio&&(t.portfolio=e.portfolio)}},actions:{setBalance:function(t){var e=t.commit;e("SET_BALANCE")},updatePrices:function(t){var e=t.commit;e("UPDATE_PRICES")},buyStock:function(t,e){var o=t.commit;o("BUY_STOCK",e)},sellStock:function(t,e){var o=t.commit;o("SELL_STOCK",e)},loadData:function(t,e){var o=t.commit;o("LOAD_DATA",e)}}}),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("h1",[t._v("Welcome to the Stock Trader!")]),o("p",[t._v("A perfect place to trade mock stocks that only have virtual value within your browser! You can buy or sell fake stocks, click “End Day” to fast-forward to the next virtual day and even save current market state in a database to load it later! Have fun!")]),o("p",[t._v("Your current balance is "),o("b",[t._v(t._s(t.formatBalance))]),t._v(". Why don’t you go and waste some of that valuable money on fake assets?")])])},l=[],u=o("5530"),d={name:"Home",computed:Object(u["a"])({},Object(s["c"])(["balance","formatBalance"]))},p=d,f=(o("c9a1"),o("2877")),m=Object(f["a"])(p,r,l,!1,null,"778ebcfe",null),b=m.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio"},[0===Object.keys(t.portfolio).length?o("div",{staticClass:"empty"},[t._v(" Your portfolio is empty. ")]):t._e(),t._l(t.portfolio,(function(t,e){return[o("Stock",{key:e,attrs:{stock:t,id:e}})]}))],2)},k=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{key:t.id,staticClass:"stock"},[o("div",{staticClass:"stock-header"},[o("span",{staticClass:"stock-name"},[t._v(t._s(t.stocks[t.id].name))]),o("span",{staticClass:"stock-amount"},[t._v(t._s(t.portfolio[t.id]))])]),o("div",{staticClass:"stock-body-wrap"},[o("div",{staticClass:"stock-description"},[o("span",[t._v("Current market price: ")]),o("span",{staticClass:"stock-price"},[t._v("$"+t._s(t.stocks[t.id].price))])]),o("div",{staticClass:"stock-body"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAmount,expression:"inputAmount"}],staticClass:"input",attrs:{type:"number",min:"0",max:t.portfolio[t.id]},domProps:{value:t.inputAmount},on:{input:function(e){e.target.composing||(t.inputAmount=e.target.value)}}}),o("button",{staticClass:"button-sell",class:{"button-sell-enabled":t.sellEnabled},attrs:{disabled:!t.sellEnabled},on:{click:function(e){return t.sellStock({id:t.id,amount:t.inputAmount})}}},[t._v(" Sell ")])])])])},_=[],y=(o("8ba4"),{name:"PortStock",props:["stock","id"],data:function(){return{inputAmount:0}},computed:Object(u["a"])(Object(u["a"])({},Object(s["c"])(["stocks","portfolio"])),{},{sellEnabled:function(){var t=Number(this.inputAmount),e=Number.isInteger(t),o=t>0,a=t>this.portfolio[this.id];return o&&!a&&e}}),methods:Object(u["a"])({},Object(s["b"])(["sellStock"]))}),O=y,j=(o("5cd4"),Object(f["a"])(O,h,_,!1,null,"787c5efe",null)),C=j.exports,g={name:"Portfolio",components:{Stock:C},computed:Object(u["a"])({},Object(s["c"])(["portfolio"]))},S=g,A=(o("187f"),Object(f["a"])(S,v,k,!1,null,"5660adfc",null)),E=A.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"stocks"},[t._l(t.stocks,(function(t,e){return[o("Stock",{key:e,attrs:{stock:t,id:e}})]}))],2)},w=[],P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{key:t.id,staticClass:"stock"},[o("div",{staticClass:"stock-header"},[o("span",{staticClass:"stock-name"},[t._v(t._s(t.stock.name))]),o("span",{staticClass:"stock-price"},[t._v("$"+t._s(t.stock.price))])]),o("div",{staticClass:"stock-body"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAmount,expression:"inputAmount"}],staticClass:"input",attrs:{type:"number",min:"0"},domProps:{value:t.inputAmount},on:{input:function(e){e.target.composing||(t.inputAmount=e.target.value)}}}),o("button",{staticClass:"button-buy",class:{"button-buy-enabled":t.buyEnabled},attrs:{disabled:!t.buyEnabled},on:{click:function(e){return t.buyStock({id:t.id,amount:t.inputAmount})}}},[t._v(" Buy ")])])])},N=[],T={name:"Stock",props:["stock","id"],data:function(){return{inputAmount:0}},methods:Object(u["a"])({},Object(s["b"])(["buyStock"])),computed:Object(u["a"])(Object(u["a"])({},Object(s["c"])(["balance"])),{},{buyEnabled:function(){var t=Number(this.inputAmount),e=t>0,o=Number.isInteger(t),a=Number(this.inputAmount)*this.stock.price<=this.balance;return e&&o&&a}})},$=T,B=(o("c442"),Object(f["a"])($,P,N,!1,null,"5ab8c1a1",null)),D=B.exports,F={name:"Stocks",components:{Stock:D},computed:Object(u["a"])({},Object(s["c"])(["stocks"]))},L=F,M=(o("ae69"),Object(f["a"])(L,x,w,!1,null,"222b4905",null)),Y=M.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v(" 404 ")]),o("p",[t._v(" You seem to be looking for a page that doesn't exist. ")])])}],K={name:"NotFound"},U=K,z=Object(f["a"])(U,H,I,!1,null,null,null),J=z.exports,R=[{path:"",name:"home",component:b},{path:"/portfolio",name:"portfolio",component:E},{path:"/stocks",name:"stocks",component:Y},{path:"*",component:J}],W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"route"},[o("transition",{attrs:{name:"main",mode:"out-in",appear:""}},[o("router-view")],1)],1)],1)},V=[],q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("ul",{staticClass:"navigation"},[o("li",[o("router-link",{staticClass:"header-logo",attrs:{to:"/",exact:"",tag:"div"}},[t._v("Stock Trader")])],1),o("ul",{staticClass:"navigation"},[o("li",[o("router-link",{staticClass:"header-item",attrs:{to:"/portfolio",tag:"div","active-class":"header-active"}},[t._v("Portfolio")])],1),o("li",[o("router-link",{staticClass:"header-item",attrs:{to:"/stocks",tag:"div","active-class":"header-active"}},[t._v("Stocks")])],1)])]),o("ul",{staticClass:"navigation"},[o("li",[o("div",{staticClass:"header-item",on:{click:t.updatePrices}},[t._v("End Day")])]),o("li",{staticClass:"header-item",class:{"header-item-open":t.open},on:{click:function(e){t.open=!t.open}}},[o("div",{staticClass:"custom-select"},[o("div",{staticClass:"selected",class:{open:t.open}},[t._v(" Save & Load ")]),o("div",{staticClass:"items",class:{"items-hide":!t.open}},[o("div",{on:{click:t.save}},[t._v("Save")]),o("div",{on:{click:t.load}},[t._v("Load")])])])]),o("li",{staticClass:"header-funds"},[t._v("Funds: "+t._s(t.formatBalance))])])])},G=[],Q={name:"Header",computed:Object(u["a"])({},Object(s["c"])(["balance","formatBalance","stocks","portfolio"])),methods:Object(u["a"])(Object(u["a"])({},Object(s["b"])(["updatePrices","loadData"])),{},{save:function(){var t={balance:this.balance,stocks:this.stocks,portfolio:this.portfolio};this.$http.put("data.json",t)},load:function(){var t=this;this.$http.get("data.json").then((function(e){e.body?t.loadData(e.body):alert("No data to load.")})).catch((function(t){alert("Error! See console for details."),console.log(t)}))}}),data:function(){return{dropdown:!1,open:!1}}},X=Q,Z=(o("c538"),Object(f["a"])(X,q,G,!1,null,"c1ec931c",null)),tt=Z.exports,et={name:"App",components:{Header:tt},methods:Object(u["a"])({},Object(s["b"])(["setBalance","updatePrices"])),created:function(){this.setBalance(),this.updatePrices()}},ot=et,at=(o("d67d"),Object(f["a"])(ot,W,V,!1,null,"08f0ddc5",null)),nt=at.exports;a["a"].use(n["a"]),a["a"].use(c["a"]),a["a"].http.options.root="https://stock-trader-on-vue-default-rtdb.firebaseio.com/";var ct=new n["a"]({routes:R});a["a"].config.productionTip=!1,new a["a"]({store:i,router:ct,render:function(t){return t(nt)}}).$mount("#app")},"5cd4":function(t,e,o){"use strict";o("9903")},"87e5":function(t,e,o){},9903:function(t,e,o){},ae69:function(t,e,o){"use strict";o("87e5")},c442:function(t,e,o){"use strict";o("22d5")},c538:function(t,e,o){"use strict";o("35f2")},c9a1:function(t,e,o){"use strict";o("300d")},d67d:function(t,e,o){"use strict";o("e8bf")},e8bf:function(t,e,o){}});
//# sourceMappingURL=app.44c6c262.js.map