(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"o/rK":function(e,t,n){"use strict";var o=n("TqRt"),u=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,s=o(n("lwsE")),a=o(n("W8MJ")),d=o(n("a1gu")),l=o(n("Nsbk")),f=o(n("7W2i")),c=u(n("q1tI")),p=(o(n("wd/R")),n("MuoO")),v=o(n("IujW")),h=(i=(0,p.connect)(function(e){var t=e.version,n=e.loading;return{version:t,loading:n.effects["version/fetchTodolist"]}}),i(r=function(e){function t(){return(0,s.default)(this,t),(0,d.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"version/fetchTodolist"})}},{key:"render",value:function(){var e=this.props.version,t=e.todolist;e.loading;return c.default.createElement(v.default,{source:t})}}]),t}(c.PureComponent))||r);t.default=h}}]);