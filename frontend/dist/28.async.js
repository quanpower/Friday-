(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{szkQ:function(e,t,a){"use strict";var n=a("284h"),l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M")),u=l(a("lwsE")),c=l(a("W8MJ")),d=l(a("a1gu")),i=l(a("Nsbk")),f=l(a("7W2i"));a("FJo9");var o=l(a("L41K")),s=n(a("q1tI")),p=l(a("zHco")),h=l(a("Zpge")),m=o.default.Step,v=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,c.default)(t,[{key:"getCurrentStep",value:function(){var e=this.props.location,t=e.pathname,a=t.split("/");switch(a[a.length-1]){case"info":return 0;case"confirm":return 1;case"result":return 2;default:return 0}}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.children;return s.default.createElement(p.default,{title:"\u5206\u6b65\u8868\u5355",tabActiveKey:t.pathname,content:"\u5c06\u4e00\u4e2a\u5197\u957f\u6216\u7528\u6237\u4e0d\u719f\u6089\u7684\u8868\u5355\u4efb\u52a1\u5206\u6210\u591a\u4e2a\u6b65\u9aa4\uff0c\u6307\u5bfc\u7528\u6237\u5b8c\u6210\u3002"},s.default.createElement(r.default,{bordered:!1},s.default.createElement(s.Fragment,null,s.default.createElement(o.default,{current:this.getCurrentStep(),className:h.default.steps},s.default.createElement(m,{title:"\u586b\u5199\u8f6c\u8d26\u4fe1\u606f"}),s.default.createElement(m,{title:"\u786e\u8ba4\u8f6c\u8d26\u4fe1\u606f"}),s.default.createElement(m,{title:"\u5b8c\u6210"})),a)))}}]),t}(s.PureComponent);t.default=v}}]);