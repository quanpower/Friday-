(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"9Nu5":function(e,t,a){e.exports={standardList:"antd-pro-pages-bug-bug-list-standardList",headerInfo:"antd-pro-pages-bug-bug-list-headerInfo",listContent:"antd-pro-pages-bug-bug-list-listContent",listContentItem:"antd-pro-pages-bug-bug-list-listContentItem",extraContentSearch:"antd-pro-pages-bug-bug-list-extraContentSearch",listCard:"antd-pro-pages-bug-bug-list-listCard"}},Chpt:function(e,t,a){e.exports=a.p+"static/bug.9309f155.jpeg"},THJb:function(e,t,a){"use strict";var l=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("Mwp2");var u=l(a("VXEj"));a("Telt");var r=l(a("Tckk"));a("+L6B");var d=l(a("2/Rp"));a("IzEo");var f=l(a("bx4M"));a("14J3");var i=l(a("BMrR"));a("jCWc");var o=l(a("kPKH"));a("qVdP");var s=l(a("jsC+"));a("Pwec");var c=l(a("CtXQ"));a("lUTK");var m=l(a("BvKs"));a("2qtc");var p=l(a("kLXV")),v=l(a("lwsE")),E=l(a("W8MJ")),g=l(a("a1gu")),h=l(a("Nsbk")),b=l(a("7W2i"));a("y8nQ");var C=l(a("Vl3Y"));a("+BJd");var y=l(a("mr32"));a("5NDa");var w=l(a("5rEg"));a("7Kak");var x,I,k=l(a("9yH6")),N=n(a("q1tI")),S=l(a("wd/R")),B=a("MuoO"),M=(l(a("xNuS")),l(a("zHco"))),R=l(a("9Nu5")),T=l(a("Chpt")),J=k.default.Button,P=k.default.Group,q=w.default.Search,z=function(e){var t=e.data,a=t.tester,l=t.gmt_report;t.severity,t.priority,t.status;return N.default.createElement("div",{className:R.default.listContent},N.default.createElement("div",{className:R.default.listContentItem},N.default.createElement("span",null,"\u63d0\u4ea4\u4eba"),N.default.createElement("p",null,a)),N.default.createElement("div",{className:R.default.listContentItem},N.default.createElement("span",null,"\u63d0\u4ea4\u65f6\u95f4"),N.default.createElement("p",null,(0,S.default)(l).format("YYYY-MM-DD HH:mm"))),N.default.createElement("div",{className:R.default.listContentItem},N.default.createElement(y.default,{color:"red"},"red")))},D=C.default.Item,H=C.default.create()(function(e){function t(){return(0,v.default)(this,t),(0,g.default)(this,(0,h.default)(t).apply(this,arguments))}return(0,b.default)(t,e),(0,E.default)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,l=e.onCreate,n=e.form,u=n.getFieldDecorator;return N.default.createElement(p.default,{visible:t,title:"\u63d0\u4ea4\u65b0Bug",okText:"\u63d0\u4ea4",onCancel:a,onOk:l},N.default.createElement(C.default,{layout:"vertical"},N.default.createElement(D,{label:"Title"},u("title",{rules:[{required:!0,message:"Please input the title of collection!"}]})(N.default.createElement(w.default,null))),N.default.createElement(D,{label:"Description"},u("description")(N.default.createElement(w.default,{type:"textarea"}))),N.default.createElement(D,{className:"collection-create-form_last-form-item"},u("modifier",{initialValue:"public"})(N.default.createElement(k.default.Group,null,N.default.createElement(k.default,{value:"public"},"Public"),N.default.createElement(k.default,{value:"private"},"Private"))))))}}]),t}(N.Component)),L=(x=(0,B.connect)(function(e){var t=e.bug,a=e.loading;return{bug:t,loading:a.effects["bug/fetchBugs"]}}),x(I=function(e){function t(){var e,a;(0,v.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,g.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(n))),a.state={visible:!1},a.showModal=function(){a.setState({visible:!0})},a.handleCancel=function(){a.setState({visible:!1})},a.handleCreate=function(){var e=a.formRef.props.form;e.validateFields(function(t,l){t||(console.log("Received values of form: ",l),e.resetFields(),a.setState({visible:!1}))})},a.saveFormRef=function(e){a.formRef=e},a}return(0,b.default)(t,e),(0,E.default)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"bug/fetchBugs"})}},{key:"render",value:function(){var e=this.props,t=e.bug.bugLists,a=void 0===t?[]:t,l=e.loading;console.log(this.props),console.log(a);var n=function(e){var t=e.title,a=e.value,l=e.bordered;return N.default.createElement("div",{className:R.default.headerInfo},N.default.createElement("span",null,t),N.default.createElement("p",null,a),l&&N.default.createElement("em",null))},p=N.default.createElement("div",{className:R.default.extraContent},N.default.createElement(P,{defaultValue:"all"},N.default.createElement(J,{value:"all"},"\u5168\u90e8"),N.default.createElement(J,{value:"progress"},"\u8fdb\u884c\u4e2d"),N.default.createElement(J,{value:"waiting"},"\u7b49\u5f85\u4e2d")),N.default.createElement(q,{className:R.default.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),v={showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},E=N.default.createElement(m.default,null,N.default.createElement(m.default.Item,null,N.default.createElement("a",null,"\u7f16\u8f91")),N.default.createElement(m.default.Item,null,N.default.createElement("a",null,"\u5220\u9664"))),g=function(){return N.default.createElement(s.default,{overlay:E},N.default.createElement("a",null,"\u66f4\u591a ",N.default.createElement(c.default,{type:"down"})))};return N.default.createElement(M.default,null,N.default.createElement("div",{className:R.default.standardList},N.default.createElement(f.default,{bordered:!1},N.default.createElement(i.default,null,N.default.createElement(o.default,{sm:8,xs:24},N.default.createElement(n,{title:"\u65b0\u589eBug",value:"8\u4e2a",bordered:!0})),N.default.createElement(o.default,{sm:8,xs:24},N.default.createElement(n,{title:"\u672c\u5468\u5904\u7406\u4e2d",value:"3\u4e2a",bordered:!0})),N.default.createElement(o.default,{sm:8,xs:24},N.default.createElement(n,{title:"\u672c\u5468\u5b8c\u6210\u6570",value:"12\u4e2a"})))),N.default.createElement(f.default,{className:R.default.listCard,bordered:!1,title:"Bug\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:p},N.default.createElement(d.default,{type:"dashed",onClick:this.showModal,style:{width:"100%",marginBottom:8},icon:"plus"},"\u63d0\u4ea4\u65b0Bug"),N.default.createElement(H,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate}),N.default.createElement(u.default,{size:"large",rowKey:"id",loading:l,pagination:v,dataSource:a,renderItem:function(e){return N.default.createElement(u.default.Item,{actions:[N.default.createElement("a",null,"\u7f16\u8f91"),N.default.createElement(g,null)]},N.default.createElement(u.default.Item.Meta,{avatar:N.default.createElement(r.default,{src:T.default,shape:"square",size:"large"}),title:N.default.createElement("a",{href:"#"},e.title),description:e.description}),N.default.createElement(z,{data:e}))}}))))}}]),t}(N.Component))||I);t.default=L}}]);