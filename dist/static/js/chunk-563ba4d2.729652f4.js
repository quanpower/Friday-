(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-563ba4d2"],{3232:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{width:"100%","padding-top":"15px"},attrs:{data:e.list}},[n("el-table-column",{attrs:{label:"Order_No","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.category)+"\n    ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Price",width:"195",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.department)+"\n    ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Price",width:"195",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.id)+"\n    ")]}}])})],1)},a=[],o=n("9bca"),c={filters:{statusFilter:function(e){var t={success:"success",pending:"danger"};return t[e]},orderNoFilter:function(e){return e.substring(0,30)}},data:function(){return{list:null}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;Object(o["b"])().then(function(t){console.log("------flicket----------"),console.log(t.data.items.slice(0,8)),e.list=t.data.items.slice(0,8)})}}},s=c,u=n("2877"),i=Object(u["a"])(s,r,a,!1,null,null,null);t["default"]=i.exports},"9bca":function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),o=n("5c96"),c=n("4360"),s=n("5f87"),u=a.a.create({baseURL:"/flicket-api-v1",timeout:5e3});u.interceptors.request.use(function(e){return c["a"].getters.flicketToken&&(e.headers["Authorization"]="Bearer "+Object(s["a"])()),e},function(e){console.log(e),Promise.reject(e)}),u.interceptors.response.use(function(e){return e},function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)});var i=u;function l(){return i({url:"/categories/",method:"get",params:{}})}function d(e,t){return i({url:"/departments/",method:"get",params:{page:e,per_page:t}})}function f(e){return i({url:"/addDepartment/",method:"post",data:e})}n.d(t,"b",function(){return l}),n.d(t,"c",function(){return d}),n.d(t,"a",function(){return f})}}]);