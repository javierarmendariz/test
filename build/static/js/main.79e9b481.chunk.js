(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,n,t){},17:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),u=t(10),c=t.n(u),o=(t(16),t.p,t(17),t(2)),s=t.n(o),i=t(4),b=t(9),m=t(3),f=t.n(m),l=t(7),p=(t(21),t(8)),O=t(11),d=t.n(O),x=t(0),j=[{name:"A",numberOne:42e3,numberTwo:8e3},{name:"B",numberOne:49e3,numberTwo:1e3},{name:"C",numberOne:49e3,numberTwo:1e3},{name:"D",numberOne:4e4,numberTwo:1e4},{name:"E",numberOne:3e4,numberTwo:2e4},{name:"F",numberOne:3e4,numberTwo:2e4},{name:"G",numberOne:25e3,numberTwo:25e3},{name:"H",numberOne:1e4,numberTwo:4e4},{name:"I",numberOne:3e3,numberTwo:7e3},{name:"J",numberOne:2e3,numberTwo:8e3},{name:"K",numberOne:25e3,numberTwo:25e3}],h=function(){var e=Object(r.useState)(null),n=Object(b.a)(e,2),t=n[0],a=n[1],u=Object(r.useState)(!1),c=Object(b.a)(u,2),o=c[0],m=c[1],O=function(){var e=Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(),e.next=3,h();case 3:n=e.sent,(new p.IO).open(n,(function(e){t.fromJSON(e)}),(function(e){console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/static/excel.xlsx");case 2:return n=e.sent,e.next=5,n.arrayBuffer();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=new p.IO,n="Excel";".xlsx"!==n.substr(-5,5)&&(n+=".xlsx");var r=JSON.stringify(t.toJSON({includeBindingSource:!0}));e.save(r,(function(e){d()(e,n)}),(function(e){console.log(e)}))},v=function(){var e=t.sheets[3];e.tables.addFromDataSource("table1",0,0,j);var n=f.a.Spread.Sheets.Tables.TableThemes.light1;e.tables.findByName("table1").style(n)},T=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,O();case 3:setTimeout((function(){v(),w(),m(!1)}),1e3);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"button",id:"loadExcel",value:"Export",onClick:T,disabled:o}),Object(x.jsx)(l.SpreadSheets,{workbookInitialized:function(e){a(e)},children:Object(x.jsx)(l.Worksheet,{})})]})};var w=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(h,{})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,u=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),u(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.79e9b481.chunk.js.map