(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{IbhM:function(e,n,t){"use strict";var o=t("TqRt"),u=t("284h");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,i,r=o(t("lwsE")),s=o(t("W8MJ")),l=o(t("a1gu")),d=o(t("Nsbk")),c=o(t("7W2i")),f=u(t("q1tI")),p=(o(t("wd/R")),t("MuoO")),h=o(t("IujW")),v=(a=(0,p.connect)(function(e){var n=e.version,t=e.loading;return{version:n,loading:t.effects["version/fetchChangelog"]}}),a(i=function(e){function n(){return(0,r.default)(this,n),(0,l.default)(this,(0,d.default)(n).apply(this,arguments))}return(0,c.default)(n,e),(0,s.default)(n,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"version/fetchChangelog"})}},{key:"render",value:function(){var e=this.props.version,n=e.changelog;e.loading;return f.default.createElement(h.default,{source:n})}}]),n}(f.PureComponent))||i);n.default=v}}]);