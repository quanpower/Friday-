(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{XLaX:function(e,t,r){"use strict";var o=r("TqRt"),a=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("IzEo");var l=o(r("bx4M"));r("/zsF");var d,u,n=o(r("PArb")),c=o(r("lwsE")),i=o(r("W8MJ")),f=o(r("a1gu")),p=o(r("Nsbk")),s=o(r("7W2i")),m=a(r("q1tI")),g=r("MuoO"),E=o(r("+kNj")),h=o(r("zHco")),y=(o(r("qYi8")),E.default.Description),_=(d=(0,g.connect)(function(e){var t=e.products,r=e.loading;return{products:t,loading:r.effects["products/fetchProductProfile"]}}),d(u=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch,t=this.props.match.params.product_id;console.log(this.props),console.log(t),e({type:"products/fetchProductProfile",payload:{product_id:t}})}},{key:"render",value:function(){var e=this.props.products,t=e.productProfile;e.loading;console.log(this.props),console.log("----productProfile----"),console.log(t);var r=t[0];return m.default.createElement(h.default,{title:"\u4ea7\u54c1\u8be6\u60c5\u9875"},m.default.createElement(l.default,{bordered:!1},m.default.createElement(E.default,{size:"large",title:"\u57fa\u672c\u4fe1\u606f",style:{marginBottom:32}},m.default.createElement(y,{term:"\u4ea7\u54c1\u540d\u79f0"},r.product_name),m.default.createElement(y,{term:"\u6240\u5c5e\u7528\u6237"},r.owner),m.default.createElement(y,{term:"product_key"},r.product_key),m.default.createElement(y,{term:"\u4ea7\u54c1\u63cf\u8ff0"},r.product_description)),m.default.createElement(n.default,{style:{marginBottom:32}}),m.default.createElement(E.default,{size:"large",title:"\u72b6\u6001\u4fe1\u606f",style:{marginBottom:32}},m.default.createElement(y,{term:"\u4ea7\u54c1\u7c7b\u578b"},r.node_type),m.default.createElement(y,{term:"\u6d88\u606f\u683c\u5f0f"},r.data_format),m.default.createElement(y,{term:"\u521b\u5efa\u65f6\u95f4"},r.gmt_create),m.default.createElement(y,{term:"\u66f4\u65b0\u65f6\u95f4"},r.gmt_update),m.default.createElement(y,{term:"\u5907\u6ce8"},"\u65e0")),m.default.createElement(n.default,{style:{marginBottom:32}})))}}]),t}(m.Component))||u);t.default=_},qYi8:function(e,t,r){e.exports={title:"antd-pro-pages-product-product-profile-title"}}}]);