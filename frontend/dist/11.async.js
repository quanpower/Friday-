(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"6p3G":function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("jCWc");var i=n(a("kPKH"));a("IzEo");var o=n(a("bx4M"));a("14J3");var l=n(a("BMrR"));a("g9YV");var u,c,d=n(a("wCAj")),s=n(a("lwsE")),f=n(a("W8MJ")),m=n(a("a1gu")),v=n(a("Nsbk")),p=n(a("7W2i")),h=r(a("q1tI")),g=a("MuoO"),y=(n(a("ZhIB")),n(a("LOQS")),n(a("Yaqk")),n(a("U2E3")),n(a("HZnN"))),E=(n(a("XFmb")),y.default.Secured,(new Date).getTime(),new Promise(function(e){setTimeout(function(){return e()},1e3)}),u=(0,g.connect)(function(e){var t=e.survey,a=e.loading;return{survey:t,loading:a.effects["survey/fetchDeviceDaqRecord"]}}),u(c=function(e){function t(){return(0,s.default)(this,t),(0,m.default)(this,(0,v.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("monitor this.props:"),console.log(this.props);var t=this.props.match.params.device_id;console.log(t),this.props.dispatch({type:"survey/fetchDeviceDaqRecord",payload:{device_id:t}}),this.timer=setInterval(function(){e.props.dispatch({type:"survey/fetchDeviceDaqRecord",payload:{device_id:t}})},1e4)}},{key:"render",value:function(){var e=this.props,t=e.survey,a=(e.loading,t.recordColumns),n=t.deviceDaqRecord;return h.default.createElement(h.Fragment,null,h.default.createElement(l.default,{gutter:24},h.default.createElement(i.default,{xl:24,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24}},h.default.createElement(o.default,{title:"\u5386\u53f2\u8bb0\u5f55",bordered:!1},h.default.createElement(l.default,null,h.default.createElement(d.default,{columns:a,dataSource:n}))))))}}]),t}(h.PureComponent))||c);t.default=E},U2E3:function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("RIqP")),o=r(a("lwsE")),l=r(a("W8MJ")),u=r(a("a1gu")),c=r(a("Nsbk")),d=r(a("7W2i")),s=n(a("q1tI")),f=a("KTCi"),m=r(a("LOQS")),v=r(a("cHiq"));function p(e){return 1*e<10?"0".concat(e):e}function h(){for(var e=[],t=0;t<24;t+=1)e.push({x:"".concat(p(t),":00"),y:Math.floor(200*Math.random())+50*t});return e}var g=function(e){function t(){var e,a;(0,o.default)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=(0,u.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(r))),a.state={activeData:h()},a.loopData=function(){a.requestRef=requestAnimationFrame(function(){a.timer=setTimeout(function(){a.setState({activeData:h()},function(){a.loopData()})},1e3)})},a}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var e=this.state.activeData,t=void 0===e?[]:e;return s.default.createElement("div",{className:v.default.activeChart},s.default.createElement(m.default,{subTitle:"\u76ee\u6807\u8bc4\u4f30",total:"\u6709\u671b\u8fbe\u5230\u9884\u671f"}),s.default.createElement("div",{style:{marginTop:32}},s.default.createElement(f.MiniArea,{animate:!1,line:!0,borderWidth:2,height:84,scale:{y:{tickCount:3}},yAxis:{tickLine:!1,label:!1,title:!1,line:!1},data:t})),t&&s.default.createElement("div",{className:v.default.activeChartGrid},s.default.createElement("p",null,(0,i.default)(t).sort()[t.length-1].y+200," \u4ebf\u5143"),s.default.createElement("p",null,(0,i.default)(t).sort()[Math.floor(t.length/2)].y," \u4ebf\u5143")),t&&s.default.createElement("div",{className:v.default.activeChartLegend},s.default.createElement("span",null,"00:00"),s.default.createElement("span",null,t[Math.floor(t.length/2)].x),s.default.createElement("span",null,t[t.length-1].x)))}}]),t}(s.Component);t.default=g},XFmb:function(e,t,a){e.exports={mapChart:"antd-pro-pages-dashboard-monitor-mapChart",pieCard:"antd-pro-pages-dashboard-monitor-pieCard"}},Yaqk:function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("QILm")),o=r(a("lwsE")),l=r(a("W8MJ")),u=r(a("a1gu")),c=r(a("Nsbk")),d=r(a("7W2i")),s=n(a("q1tI"));function f(e){return 1*e<10?"0".concat(e):e}var m=function(e){var t=0,a=0;try{a="[object Date]"===Object.prototype.toString.call(e.target)?e.target.getTime():new Date(e.target).getTime()}catch(e){throw new Error("invalid target prop",e)}return t=a-(new Date).getTime(),{lastTime:t<0?0:t}},v=function(e){function t(e){var a;(0,o.default)(this,t),a=(0,u.default)(this,(0,c.default)(t).call(this,e)),a.timer=0,a.interval=1e3,a.defaultFormat=function(e){var t=36e5,a=6e4,n=Math.floor(e/t),r=Math.floor((e-n*t)/a),i=Math.floor((e-n*t-r*a)/1e3);return s.default.createElement("span",null,f(n),":",f(r),":",f(i))},a.tick=function(){var e=a.props.onEnd,t=a.state.lastTime;a.timer=setTimeout(function(){t<a.interval?(clearTimeout(a.timer),a.setState({lastTime:0},function(){e&&e()})):(t-=a.interval,a.setState({lastTime:t},function(){a.tick()}))},a.interval)};var n=m(e),r=n.lastTime;return a.state={lastTime:r},a}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.tick()}},{key:"componentDidUpdate",value:function(e){var t=this.props.target;t!==e.target&&(clearTimeout(this.timer),this.tick())}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.format,a=void 0===t?this.defaultFormat:t,n=(e.onEnd,(0,i.default)(e,["format","onEnd"])),r=this.state.lastTime,o=a(r);return s.default.createElement("span",n,o)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=m(e),n=a.lastTime;return t.lastTime!==n?{lastTime:n}:null}}]),t}(s.Component),p=v;t.default=p},cHiq:function(e,t,a){e.exports={activeChart:"antd-pro-components-active-chart-index-activeChart",activeChartGrid:"antd-pro-components-active-chart-index-activeChartGrid",activeChartLegend:"antd-pro-components-active-chart-index-activeChartLegend"}}}]);