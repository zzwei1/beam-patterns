(this["webpackJsonpbeam-patterns"]=this["webpackJsonpbeam-patterns"]||[]).push([[0],{169:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},170:function(e,n,t){},171:function(e,n,t){},172:function(e,n,t){},173:function(e,n,t){},176:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(59),i=t.n(o),l=t(64),s=(t(74),t(65)),c=t(24),d=t(25),u=t(67),h=t(66),f=t(37),b=(t(169),t(170),t(186));function p(e){return Object(b.d)(Object(b.b)(0,e))}var m=function(){function e(n,t){Object(c.a)(this,e),this.n_antennas=n,this.lambda_ratio=t,this.antenna_index=Object(b.h)(0,n)}return Object(d.a)(e,[{key:"bp_steer",value:function(e,n){var t=Object(b.f)(this.antenna_index,n).map((function(e){return p(e)}));return Object(b.c)(e,t)}},{key:"bp_sinc",value:function(e){return Object(b.f)(Object(b.i)(this.antenna_index,(this.n_antennas-1)/2),e/(2*b.g)).map((function(e){return function(e){if(e*=b.g,Math.abs(e)<.5){for(var n=Math.pow(e,2),t=1,a=1,r=2;r<12;r+=2)a+=t*=-n/(r*(r+1));return a}return Math.sin(e)/e}(e)}))}},{key:"set_ang_domaing_rel",value:function(e){var n=this;this.ang_domain_rel=e;var t=e.map((function(e){return Object(b.f)(n.antenna_index,e)}));this.response_domain_rel=t.map((function(e){return p(e)}))}},{key:"array_response_rel",value:function(e){return Object(b.f)(this.response_domain_rel,e)}}]),e}(),g=t(179),v=t(180),w=t(181),y=t(182),E=t(183),_=t(184),O=t(185),k=t(187);function x(e){return 2*e===Math.round(2*e)?e:null}var j=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(e){var a;Object(c.a)(this,t),(a=n.call(this,e)).state={center:0,width:b.g};var r=Object(b.h)(-b.g,b.g,.01);return a.circle=r.map((function(e){return{x:Math.cos(e),y:Math.sin(e)}})).toArray(),a.antenna=new m(16,.5),a.antenna.set_ang_domaing_rel(r),a}return Object(d.a)(t,[{key:"render",value:function(){var e=this,n=this.antenna.bp_sinc(this.state.width);n=this.antenna.bp_steer(n,this.state.center);var t=this.antenna.array_response_rel(n).map((function(e){return Math.pow(Object(b.a)(e),2)})).toArray(),a=Object(b.e)(t),o=this.circle.map((function(e,n){return{x:e.x*t[n]/a,y:e.y*t[n]/a}}));return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,null,r.a.createElement(v.a,{lg:"3"}),r.a.createElement(v.a,{lg:"3"},r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(E.a,null,r.a.createElement("h3",null,"Beam-pattern"))),r.a.createElement(_.a,null,r.a.createElement(f.a,{height:null,width:null,id:"scatter-rel",data:{datasets:[{label:"sinc",fill:!0,showLine:!0,lineTension:0,backgroundColor:"rgba(0, 0, 255, 0.1)",borderColor:"#1f8ef1",borderWidth:5,borderDash:[],borderDashOffset:0,pointRadius:0,data:o},{label:"sinc",fill:!0,showLine:!0,lineTension:0,borderColor:"#000000",borderWidth:1,borderDash:[],borderDashOffset:0,pointRadius:0,data:this.circle}].concat(Object(s.a)([.25,.5,.75].map((function(n){return{label:"sinc",fill:!1,showLine:!0,lineTension:0,borderColor:"#000000",borderWidth:1,borderDash:[],borderDashOffset:0,pointRadius:0,data:e.circle.map((function(e){return{x:n*e.x,y:n*e.y}}))}}))))},options:{legend:{display:!1},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,aspectRatio:1,scales:{yAxes:[{gridLines:{display:!0,drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{min:-1.2,max:1.2,fontColor:"#9a9a9a",stepSize:2,callback:x}}],xAxes:[{gridLines:{display:!0,drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{enabled:!1,min:-1.2,max:1.2,fontColor:"#9a9a9a",stepSize:2,callback:x}}]}}})),r.a.createElement(O.a,null,r.a.createElement(k.a,null,"Width of 0.5"),"Controls will go here"))),r.a.createElement(v.a,{lg:"3"},r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(E.a,null,r.a.createElement("h3",null,"Beam-pattern"))),r.a.createElement(_.a,null,r.a.createElement(f.a,{height:null,width:null,id:"scatter-rel",data:{datasets:[{label:"sinc",fill:!0,showLine:!0,lineTension:0,borderColor:"#1f8ef1",borderWidth:5,borderDash:[],borderDashOffset:0,pointRadius:0,data:o},{label:"sinc",fill:!0,showLine:!0,lineTension:0,borderColor:"#1f8ef1",borderWidth:5,borderDash:[],borderDashOffset:0,pointRadius:0,data:this.circle}]},options:{legend:{display:!1},tooltips:{enabled:!1},responsive:!0,maintainAspectRatio:!0,aspectRatio:1,scales:{yAxes:[{barPercentage:1.6,gridLines:{display:!0,drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{min:-1.2,max:1.2,fontColor:"#9a9a9a",stepSize:1}}],xAxes:[{barPercentage:1.6,gridLines:{display:!0,drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{min:-1.2,max:1.2,fontColor:"#9a9a9a",stepSize:1}}]}}})),r.a.createElement(O.a,null,r.a.createElement(k.a,null,"Width of 0.5"),"Controls will go here")))))}}]),t}(r.a.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(171),t(172),t(173);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{basename:"/directory-name"}),r.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");C?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(n,e)}))}}()},69:function(e,n,t){e.exports=t(176)},74:function(e,n,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.fd3dc7af.chunk.js.map