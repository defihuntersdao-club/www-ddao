(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ab33ec7"],{"02bb":function(t,i,a){"use strict";a("90bf")},"90bf":function(t,i,a){},a547:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("Navbar"),s("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy"}]},[s("section",{staticClass:"hero-1-bg",attrs:{id:"home"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center justify-content-center"},t._l(t.items,(function(i,c){return s("div",{key:i.title,staticClass:"col-lg-4"},[s("div",{staticClass:"cards-wrapper"},[s("div",{staticClass:"draggable"},[s("div",{staticClass:"card-block"},[s("div",{staticClass:"card"},[s("div",{staticClass:"side back"},[s("img",{staticClass:"b-logo",attrs:{src:a("41cf"),alt:""}})]),s("div",{staticClass:"side front"},[s("div",{staticClass:"pricing-box m-h-415 rounded text-center p-4"},[s("h4",{staticClass:"title mb-3"},[t._v(t._s(i.title))]),s("h1",{staticClass:"font-weight-bold mb-0"},[s("b",[i.price.length?s("sup",{staticClass:"h4 mr-2 font-weight-bold"},[t._v(t._s(i.price))]):t._e()])]),i.description.length?s("p",{staticClass:"text-muted font-weight-semibold"}):t._e(),s("ul",{staticClass:"list-unstyled pricing-item mb-4"},t._l(i.description,(function(i){return s("li",{staticClass:"text-muted"},[t._v(t._s(i))])})),0),null==t.account?[s("div",{staticStyle:{"margin-top":"250px"}},[s("button",{staticClass:"btn btn-outline-primary pr-btn",on:{click:function(i){return t.clickOpenModal()}}},[t._v("Connect")])])]:[s("div",{staticStyle:{"margin-top":"150px"}},[1==t.claimEnables[c].claimEnableDefault?s("p",[t._v("Claim enable: Yes")]):s("p",[t._v("Claim enable: No")]),t.claimEnables[c].claimAmountDefault>0?s("p",[t._v("Claim amount: "+t._s(t.claimAmounts[c].claimAmountDefault/1e18))]):s("p",[t._v("Claim amount: 0")]),i.button.length?s("button",{staticClass:"btn btn-outline-primary pr-btn",on:{click:function(a){return t.clickClaim(i)}}},[t._v("Claim")]):t._e()])],t._m(0,!0)],2)])])])])])])})),0)])]),s("Features")],1)],1)},c=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"mt-4"},[s("div",{staticClass:"hero-bottom-img"},[s("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:a("1a59"),alt:""}})])])}],l=a("5530"),n=(a("d3b7"),a("159b"),a("9d8d")),e=a("5e7c"),o=a("a649"),r=a("ad20"),m=a("7654"),u=a("6180"),d=a("076e"),f=a("7ffb"),b=a("2f62"),p={data:function(){return{flipClass1:"",flipClass2:"",flipClass3:"",items:f}},components:{Navbar:n["a"],Service:e["a"],Features:o["a"],Pricing:r["a"],Blog:m["a"],Contact:u["a"],Footer:d["a"]},computed:Object(l["a"])({},Object(b["c"])(["account","claimEnables","claimAmounts"])),methods:Object(l["a"])(Object(l["a"])({},Object(b["b"])(["connectionModal","txClaim","getClaimCheckEnable","getClaimCheckAmount"])),{},{clickOpenModal:function(){this.connectionModal()},clickClaim:function(t){this.txClaim({contractAddr:t.claimAddress,contractAbi:t.claimABI})},flipBlock1:function(){this.flipClass1="flip"},flipOutBlock1:function(){this.flipClass1=""},flipBlock2:function(){this.flipClass2="flip"},flipOutBlock2:function(){this.flipClass2=""},flipBlock3:function(){this.flipClass3="flip"},flipOutBlock3:function(){this.flipClass3=""}}),watch:{claimEnables:{deep:!0,handler:function(){var t=this.items,i=this.getClaimCheckAmount;this.claimEnables.forEach((function(a,s){i({index:s,contractAddr:t[s].claimAddress,contractAbi:t[s].claimABI})}))}},claimAmounts:{deep:!0,handler:function(){this.claimAmounts}},account:function(){var t;if(null!=this.account)for(t=0;t<this.items.length;++t)"Claim"==this.items[t].button&&this.getClaimCheckEnable({index:t,contractAddr:this.items[t].claimAddress,contractAbi:this.items[t].claimABI})}},mounted:function(){}},C=p,h=(a("02bb"),a("2877")),v=Object(h["a"])(C,s,c,!1,null,null,null);i["default"]=v.exports}}]);
//# sourceMappingURL=chunk-0ab33ec7.4c5c1343.js.map