(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{OXCG:function(e,t,a){"use strict";var l=a("TqRt"),o=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=l(a("bx4M"));a("14J3");var r=l(a("BMrR"));a("jCWc");var i=l(a("kPKH"));a("Pwec");var d,c,u=l(a("CtXQ")),s=l(a("lwsE")),f=l(a("W8MJ")),p=l(a("a1gu")),v=l(a("Nsbk")),m=l(a("7W2i")),h=o(a("q1tI")),y=a("MuoO"),g=(l(a("ZhIB")),a("KTCi")),b=(l(a("YR7N")),l(a("LOQS")),a("+n12"),a("4XXU")),D=l(a("6Ayx")),E=(d=(0,y.connect)(function(e){var t=e.survey,a=e.loading;return{survey:t,loading:a.effects["survey/fetchDeviceDaqRealtime"]}}),d(c=function(e){function t(){return(0,s.default)(this,t),(0,p.default)(this,(0,v.default)(t).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("this.props"),console.log(this.props);var t=this.props.match.params.device_id;console.log(t),this.props.dispatch({type:"survey/fetchDeviceDaqRealtime",payload:{device_id:t}}),this.timer=setInterval(function(){e.props.dispatch({type:"survey/fetchDeviceDaqRealtime",payload:{device_id:t}})},1e4),console.log("component did mount!")}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"survey/clear"})}},{key:"render",value:function(){var e=this.props,t=e.survey,a=e.loading;console.log("--survey,loading--"),console.log(t),console.log(a);t.currentPower,t.deviceDaqRealtime;var l=t.deviceDaqDigital,o=(t.realtimeBars,t.deviceDaqHistory,t.historyLines,{xs:24,sm:12,md:12,lg:12,xl:6,style:{marginBottom:24}});return h.default.createElement(h.Fragment,null,h.default.createElement(n.default,{loading:a,bordered:!1,bodyStyle:{padding:0}},h.default.createElement("div",{className:D.default.salesCard},h.default.createElement(r.default,{gutter:24},l.map(function(e,t){return h.default.createElement(i.default,o,h.default.createElement(g.ChartCard,{bordered:e.bordered,title:e.title,action:h.default.createElement(b.Tooltip,{title:e.tooltip_title},h.default.createElement(u.default,{type:"info-circle-o"})),total:e.value,footer:h.default.createElement(g.Field,{label:e.footer_label,value:e.footer_value}),contentHeight:e.contentHeight}))})))))}}]),t}(h.Component))||c);t.default=E}}]);