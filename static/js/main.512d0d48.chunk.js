(this["webpackJsonpdevs-webviewer"]=this["webpackJsonpdevs-webviewer"]||[]).push([[0],{123:function(e,t,n){e.exports=n.p+"static/media/carleton.0bbc27c1.svg"},140:function(e,t,n){"use strict";(function(e){var a=n(104),r=(n(141),n(36)),c=n(91),o=n(67);var i=Object(r.a)({preloadedState:o.storage.get(),reducer:c.b,middleware:(e&&Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}),Object(a.a)(Object(r.d)()))});i.subscribe((function(){return function(e){o.storage.set(e.getState())}(i)})),t.a=i}).call(this,n(120))},142:function(e){e.exports=JSON.parse('{"title":"DEVS Webviewer","appBar":{"title":"DEVS Webviewer","dark":"Dark","light":"Light","theme":"Theme","settings":"Settings"},"confirmation":{"title":"Are you sure?","resetWarning":"This will clear out all your current progress.","ok":"Ok","cancel":"Cancel"},"fileUploader":{"chooseFile":"Choose File","changeFile":"Change File"},"error":{"unexpected":"An unexpected error has occured."},"card":{"connections":"Connections"},"jsonViewer":{"loadJson":"Load JSON","showJson":"Show JSON"},"svgViewer":{"loadSvg":"Load SVG","assign":"Assign","reset":"Reset Current Progress","download":"Download Result","connections":"Connections","noConnections":"No Connections"},"svgPopup":{"removeConnections":"Remove Connections"}}')},291:function(e,t,n){e.exports=n(527)},527:function(e,t,n){"use strict";n.r(t);var a={};n.r(a);var r=n(0),c=n.n(r),o=n(12),i=n.n(o),s=n(64),l=n(590),u=n(103),m=n(589),d=n(588),p=n(143),f=n(16),v=n(13),g=n(2),h=n(583),b=n(584),E=n(591),y=n(107),w=n(585),j=n(562),O=n(586),C=n(587),k=n(597),x=n(123),N=n.n(x),S=Object(j.a)((function(e){return{root:{background:"white",padding:e.spacing(1)}}})),A=function(e){var t=e.width,n=e.height,a=e.className,r=e.style,o=S();return c.a.createElement("img",{alt:"Carleton University",className:Object(g.a)(a,o.root),height:n,src:N.a,style:r,width:t})};A.defaultProps={height:64,width:250,className:"",style:void 0};var z=A,V=n(595),B=n(566),D=n(567),I=n(568),P=n(569),T=n(570);var F=function(e){var t=e.content,n=e.onConfirm,a=e.onClose,r=e.open,o=Object(k.a)("common"),i=Object(v.a)(o,1)[0];return c.a.createElement(V.a,{onClose:a,open:r},c.a.createElement(B.a,null,i("confirmation.title")),c.a.createElement(D.a,null,c.a.createElement(I.a,null,t)),c.a.createElement(P.a,null,c.a.createElement(T.a,{color:"primary",onClick:n},i("confirmation.ok")),c.a.createElement(T.a,{autoFocus:!0,color:"primary",onClick:a},i("confirmation.cancel"))))},R=n(101),J=n(8),W=n.n(J);function L(e,t){return Object(s.c)(W.a.isFunction(e)?e:function(t){return W.a.isArray(e)?W.a.pick(t,e):t[e]},t)||{}}var _=n(116),M=n(117);function H(){var e=W.a.isObject(window),t=function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}},n=Object(r.useState)(t),a=Object(v.a)(n,2),c=a[0],o=a[1],i=function(){return o(t())};return Object(_.a)((function(){e&&window.addEventListener("resize",i)})),Object(M.a)((function(){return window.removeEventListener("resize",i)})),c}n(67);var U=n(91);function K(e){var t=U.a[e],n=Object(s.b)();return(t=W.a.reduce(t,(function(e,t,a){return e[a]=function(){return n(t.apply(void 0,arguments))},e}),{}))||{}}var $=n(18),G=n.n($),q=n(47),Q=n(19),X=n(574),Y=n(575),Z=n(596),ee=n(576),te=n(578),ne=n(592),ae=n(599),re=n(600),ce=n(529),oe=n(105),ie=n(577),se=n(579),le=n(580),ue=n(581),me=n(582),de=n(125),pe=n.n(de),fe=n(32),ve=n(126),ge=n.n(ve),he=n(127),be=n.n(he),Ee=n(571),ye=Object(j.a)((function(){return{inline:{display:"flex",alignItems:"center"}}}));function we(e){var t=ye(),n=Object(r.useState)(!1),a=Object(v.a)(n,2),o=a[0],i=a[1],s=e.className,l=e.children,u=e.onClick,m=e.disabled,d=e.inline,p=e.variant,h=Object(R.a)(),b=Object(Q.a)({},e);delete b.className,delete b.disabled,delete b.onClick,delete b.inline,delete b.variant;var y=b.startIcon,w=b.endIcon;return delete b.startIcon,delete b.endIcon,c.a.createElement(E.a,{className:Object(g.a)(Object(f.a)({},t.inline,d)),display:"inline"},null==y&&null==w?c.a.createElement(c.a.Fragment,null,c.a.createElement(T.a,Object.assign({className:s,disabled:o||m,onClick:"function"===typeof u?Object(q.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,u();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,h()&&i(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))):void 0,variant:d?void 0:p||"contained"},b),!o&&!d&&l,d&&l,!d&&o&&c.a.createElement(Ee.a,{"data-testid":"button-default-spinner",size:25})),o&&d&&c.a.createElement(Ee.a,{"data-testid":"button-inline-spinner",size:35})):c.a.createElement(T.a,Object.assign({className:s,disabled:o||m},b,{endIcon:o?w&&c.a.createElement(Ee.a,{"data-testid":"button-start-icon-spinner",size:25}):w,onClick:"function"===typeof u?Object(q.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,u();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,h()&&i(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))):void 0,startIcon:o?y&&c.a.createElement(Ee.a,{"data-testid":"button-end-icon-spinner",size:18}):y,variant:p})))}we.defaultProps={onClick:void 0,disabled:void 0,className:"",inline:!1,variant:void 0};var je=we,Oe=n(144),Ce=Object(j.a)((function(e){return{error:{color:e.palette.error.main}}})),ke=function(e){var t=e.className,n=e.style,a=e.onSave,r=e.error,o=e.acceptedFiles,i=e.title,s=Ce(),l=c.a.useState(!1),u=Object(v.a)(l,2),m=u[0],d=u[1];return c.a.createElement(E.a,{alignItems:"center",className:t,display:"flex",flexDirection:"row",style:n},c.a.createElement(je,{color:"primary",onClick:function(){d(!0)}},i),c.a.createElement(Oe.a,{acceptedFiles:o,filesLimit:1,maxFileSize:1/0,onClose:function(){d(!1)},onSave:function(e){d(!1),a(e)},open:m,showPreviews:!0}),r&&c.a.createElement(y.a,{className:s.error},r.message))};ke.defaultProps={className:"",style:{},error:void 0,acceptedFiles:[],title:void 0};var xe=ke,Ne=Object(j.a)((function(e){return{root:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:10},jsonViewer:{position:"relative",border:"1px solid black",height:"100%",width:"100%",margin:10,minWidth:450},svgViewer:{position:"relative",border:"1px solid black",height:"100%",width:"100%",margin:10,minWidth:450},loadButton:{position:"absolute",bottom:0,right:0,margin:10},svgConnectionsButton:{position:"absolute",bottom:0,left:0,margin:10},svgButtonTopButtonContainer:{display:"flex",justifyContent:"space-between"},picklist:{margin:10,minWidth:150},assignButton:{margin:10},cards:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignContent:"flex-start",height:"90%",overflow:"auto"},card:{minWidth:180,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:10,cursor:"pointer",border:"1px solid white"},previewCard:{minWidth:180,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:10,border:"1px solid white"},selectedCards:{border:"1px solid tomato"},svgContainer:{background:"#ffffff",marginTop:e.spacing(5),marginLeft:e.spacing(1),marginRight:e.spacing(1),padding:e.spacing(2)},svg:{width:"100%",height:"100%",objectFit:"cover",overflow:"hidden"},jsonView:{padding:10},cardContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},button:{textTransform:"none"},svgPopup:{background:"#ffffff",padding:10}}}));function Se(){var e=Ne(),t=Object(k.a)("common"),n=Object(v.a)(t,1)[0],a=L("tool"),r=a.jsonContent,o=a.svgContent,i=a.picklistValue,s=a.picklistOptions,l=a.selectedCards,u=a.selectedSvgElements,m=K("tool"),d=m.setJsonContent,p=m.setSvgContent,h=m.setPicklistValue,b=m.setPicklistOptions,w=m.setSelectedCards,j=m.setSelectedSvgElements,O=m.reset,C=c.a.useState(!1),x=Object(v.a)(C,2),N=x[0],S=x[1],A=c.a.useState(!1),z=Object(v.a)(A,2),B=z[0],D=z[1],I=c.a.useState(!1),T=Object(v.a)(I,2),R=T[0],J=T[1],_=c.a.useState({}),M=Object(v.a)(_,2),H=M[0],U=M[1],$=c.a.useState({}),de=Object(v.a)($,2),ve=de[0],he=de[1],Ee=c.a.useState(!1),ye=Object(v.a)(Ee,2),we=ye[0],Oe=ye[1],Ce=c.a.useRef(null);Ce.current=l;var ke=c.a.useRef(null);ke.current=u;var Se=c.a.useRef(null);Se.current=ve;var Ae=c.a.useRef(null);Ae.current=H,c.a.useEffect((function(){setTimeout((function(){fe.a("#workspace-svg").select("g").selectAll("*").each((function(e,t){fe.a(this).attr("id","e-".concat(t))})).on("click",(function(){var e=this.id;if(e in ke.current){var t=Object(Q.a)({},ke.current);fe.a(this).attr("stroke",t[e].stroke),delete t[e],j(t)}else{var n=Object(Q.a)({},ke.current),a=fe.a(this);n[e]={id:e,stroke:a.attr("stroke")},j(n),a.attr("stroke","tomato")}})).each((function(){this.id in ke.current&&fe.a(this).attr("stroke","tomato")})).attr("pointer-events","fill").style("cursor","pointer")}),0)}),[o,r]);var ze=function(e){return new Promise((function(t){var n=new FileReader;n.onload=function(){return t(n.result)},n.readAsDataURL(e)}))},Ve=function(){w({}),W.a.each(u,(function(e,t){fe.a("#".concat(t)).attr("stroke",e.stroke)})),j({})},Be=function(){var e=Object(q.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:return n=e.sent,e.abrupt("return",JSON.parse(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(q.a)(G.a.mark((function e(t){var n,a,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t[0],e.next=3,Be(n);case 3:a=e.sent,r=Object.keys(a),b(r),d(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(q.a)(G.a.mark((function e(t){var n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t[0],e.next=3,ze(n);case 3:a=e.sent,p(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Pe=function(e,t){var n=Object(Q.a)({},Ce.current);e in n?delete n[e]:n[e]={key:t,index:e},w(n),W.a.isEmpty(n)&&(W.a.each(ke.current,(function(e,t){fe.a("#".concat(t)).attr("stroke",e.stroke)})),j({}))},Te=function(e,t){J(!0),U({index:e,key:t});var n=-1===e?r[t]:r[t][e];if(null!=n.svg&&Array.isArray(n.svg)&&0!==n.svg.length){var a=new Set(n.svg),c={};setTimeout((function(){fe.a("#popup-svg").select("g").selectAll("*").each((function(e,t){var n=fe.a(this),r="#e-".concat(t);if(a.has(r)){var o=n.attr("stroke");c[t]=o,n.attr("stroke","tomato")}}))}),0),he(c)}},Fe=function(){var e=Object(q.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W.a.isEmpty(Ce.current)&&!W.a.isEmpty(ke.current)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,new Promise((function(e){var t=W.a.cloneDeep(r);W.a.each(Ce.current,(function(e){var n=e.key,a=e.index;-1===a?t[n].svg=W.a.map(ke.current,(function(e){return"#".concat(e.id)})):t[n][a].svg=W.a.map(ke.current,(function(e){return"#".concat(e.id)}))})),d(t),Ve(),setTimeout(e,200)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=function(e){return W.a.reduce(e,(function(e,t,n){return Array.isArray(t)||e.push(c.a.createElement(E.a,{key:n,p:.5},c.a.createElement("b",null,n),": ".concat(t))),e}),[])},Je=function(e,t,n){var a=W.a.cloneDeep(r),c=-1===n?a[t]:a[t][n];c.svg=c.svg.filter((function(t){return t!=="#".concat(e)})),d(a)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,{className:e.root},c.a.createElement(E.a,{className:e.jsonViewer},c.a.createElement(E.a,null,c.a.createElement(ne.a,{className:e.picklist,defaultValue:i,disabled:!(s.length>0),onChange:function(e){h(e.target.value),Ve()}},s.map((function(e,t){return c.a.createElement(ae.a,{key:t,value:e},e)}))),c.a.createElement(re.a,{title:n("jsonViewer.showJson")},c.a.createElement(ce.a,{disabled:!r,onClick:function(){D(!0)}},c.a.createElement(se.a,null)))),i&&c.a.createElement(E.a,{className:e.cards},!Array.isArray(r[i])&&c.a.createElement(E.a,{className:e.cardContainer},c.a.createElement(X.a,{className:Object(g.a)(e.card,Object(f.a)({},e.selectedCards,l[-1])),onClick:function(){return Pe(-1,i)}},c.a.createElement(Y.a,null,Re(r[i]))),c.a.createElement(je,{className:e.button,color:"primary",onClick:function(){return Te(-1,i)},size:"small"},n("card.connections"))),Array.isArray(r[i])&&r[i].map((function(t,a){return c.a.createElement(E.a,{key:a,className:e.cardContainer},c.a.createElement(X.a,{className:Object(g.a)(e.card,Object(f.a)({},e.selectedCards,l[a])),onClick:function(){return Pe(a,i)}},c.a.createElement(Y.a,null,Re(t))),c.a.createElement(je,{className:e.button,color:"primary",onClick:function(){return Te(a,i)},size:"small"},n("card.connections")))}))),c.a.createElement(xe,{acceptedFiles:["application/json"],className:e.loadButton,onSave:De,title:n("jsonViewer.loadJson")})),c.a.createElement(E.a,{className:e.svgViewer},c.a.createElement(E.a,{className:e.svgButtonTopButtonContainer},c.a.createElement(je,{className:e.assignButton,color:"primary",disabled:W.a.isEmpty(Ce.current)||W.a.isEmpty(ke.current),endIcon:c.a.createElement(le.a,null),onClick:Fe,variant:"contained"},n("svgViewer.assign")),c.a.createElement(E.a,null,c.a.createElement(re.a,{title:n("svgViewer.reset")},c.a.createElement(ce.a,{disabled:!r&&!o,onClick:function(){S(!0)}},c.a.createElement(ue.a,null))),c.a.createElement(re.a,{title:n("svgViewer.download")},c.a.createElement(ce.a,{disabled:!r||!o,onClick:function(){var e=document.getElementById("workspace-svg-container").children[0];e.setAttribute("xmlns","http://www.w3.org/2000/svg");var t=e.outerHTML,n=new Blob(['<?xml version="1.0" standalone="no"?>\r\n',t],{type:"image/svg+xml;charset=utf-8"}),a=ge()();a.file("result.svg",n),a.file("result.json",JSON.stringify(r,null,2)),a.generateAsync({type:"blob"}).then((function(e){be.a.saveAs(e,"result.zip")}))}},c.a.createElement(me.a,null))))),o&&c.a.createElement(E.a,{className:e.svgContainer,id:"workspace-svg-container"},c.a.createElement(oe.a,{className:e.svg,id:"workspace-svg",src:o})),c.a.createElement(xe,{acceptedFiles:["image/svg+xml"],className:e.loadButton,onSave:Ie,title:n("svgViewer.loadSvg")}),1===Object.keys(u).length&&c.a.createElement(je,{className:e.svgConnectionsButton,color:"primary",onClick:function(){Oe(!0)}},n("svgViewer.connections")))),c.a.createElement(F,{content:n("confirmation.resetWarning"),onClose:function(){return S(!1)},onConfirm:function(){S(!1),O()},open:N}),c.a.createElement(V.a,{fullScreen:!0,onClose:function(){return D(!1)},open:B},c.a.createElement(E.a,{pl:1,pr:1},c.a.createElement(pe.a,{className:Object(g.a)("json",e.jsonView)},JSON.stringify(r,null,2)))),1===Object.keys(u).length&&c.a.createElement(V.a,{onClose:function(){return Oe(!1)},open:we},function(){var t=Object.values(ke.current)[0].id;if(r){var a=Object.keys(r),o=[];return a.forEach((function(n){var a=[],i=r[n];Array.isArray(i)?i.forEach((function(r,o){Array.isArray(r.svg)&&r.svg.includes("#".concat(t))&&a.push(c.a.createElement(E.a,{key:o,className:e.cardContainer},c.a.createElement(X.a,{className:e.previewCard},c.a.createElement(Y.a,null,Re(r),c.a.createElement(E.a,{m:1},c.a.createElement(je,{className:e.button,color:"primary",onClick:function(){return Je(t,n,o)}},"Remove Connection"))))))})):Array.isArray(i.svg)&&i.svg.includes("#".concat(t))&&a.push(c.a.createElement(E.a,{key:"card-".concat(n),className:e.cardContainer},c.a.createElement(X.a,{className:e.previewCard},c.a.createElement(Y.a,null,Re(i),c.a.createElement(E.a,{m:1},c.a.createElement(je,{className:e.button,color:"primary",onClick:function(){return Je(t,n,-1)}},"Remove Connection")))))),0!==a.length&&o.push(c.a.createElement(Z.a,{key:n},c.a.createElement(ee.a,{expandIcon:c.a.createElement(ie.a,null)},c.a.createElement(y.a,null,n)),c.a.createElement(te.a,{className:e.cards},a)))})),0===o.length?c.a.createElement(E.a,{alignItems:"center",display:"flex",height:200,justifyContent:"center",width:300},n("svgViewer.noConnections")):o}}()),r&&!W.a.isEmpty(H)&&c.a.createElement(V.a,{onClose:function(){return J(!1)},open:R},c.a.createElement(E.a,{className:e.svgPopup},c.a.createElement(oe.a,{className:e.svg,id:"popup-svg",src:o})),c.a.createElement(P.a,{className:e.svgPopup},c.a.createElement(je,{autoFocus:!0,className:e.button,color:"primary",disabled:W.a.isEmpty((-1===H.index?r[H.key]:r[H.key][H.index]).svg),inline:!0,onClick:function(){var e=Ae.current,t=e.index,n=e.key,a=Se.current,c=W.a.cloneDeep(r),o=-1===t?c[n]:c[n][t];null!=o.svg&&Array.isArray(o.svg)&&0!==o.svg.length&&(o.svg=[],setTimeout((function(){fe.a("#popup-svg").select("g").selectAll("*").each((function(e,t){var n=fe.a(this);t in a&&n.attr("stroke",a[t])}))}),0),d(c))},size:"small"},n("svgPopup.removeConnections")))))}Se.defaultProps={};var Ae=Se,ze=n(145),Ve=n(139),Be=n.n(Ve),De=Object(j.a)((function(){return{root:{marginBottom:"auto",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",outlineStyle:"none",cursor:"pointer",width:180,height:64}}}));function Ie(e){var t=e.displayName,n=e.dropdowns,a=Object(r.useState)(null),o=Object(v.a)(a,2),i=o[0],s=o[1],l=function(){return s(null)},u=De(),m=(n=n.filter((function(e){return!!e})))&&0!==n.length;return c.a.createElement(E.a,null,c.a.createElement(E.a,{className:u.root,onClick:function(e){return s(e.currentTarget)},onKeyDown:function(){},role:"menuitem",tabIndex:0},c.a.createElement(y.a,{variant:"h6"},t),m&&c.a.createElement(Be.a,null)),m&&c.a.createElement(ze.a,{anchorEl:i,anchorOrigin:{vertical:"bottom",horizontal:"center"},elevation:2,getContentAnchorEl:null,keepMounted:!0,onClose:l,open:Boolean(i),transformOrigin:{vertical:"top",horizontal:"center"}},n.map((function(e,t){return c.a.createElement(ae.a,{key:t,disabled:e.disabled,onClick:function(){"function"===typeof e.handler&&e.handler.apply(e,arguments),l()}},e.Icon,c.a.createElement(E.a,{display:"inline",pl:2},e.title))}))))}Ie.defaultProps={dropdowns:[]};var Pe=Ie,Te=Object(j.a)((function(e){return{toolbar:{paddingLeft:0,paddingRight:0},appBar:{marginLeft:e.spacing(2),width:"100%",display:"flex",justifyContent:"space-between",height:64,alignItems:"center"},content:{height:"100vh",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),paddingTop:64}}}));var Fe=function(){var e=Te(),t=H(),n=L("theme"),a=K("theme"),r="dark"===n.palette.type,o=Object(k.a)("common"),i=Object(v.a)(o,1)[0],s=c.a.useState(!1),l=Object(v.a)(s,2),u=l[0],m=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("title",null,i("title")),c.a.createElement(h.a,{position:"fixed"},c.a.createElement(b.a,{className:e.toolbar},c.a.createElement(z,null),c.a.createElement(E.a,{className:e.appBar},c.a.createElement(y.a,{className:Object(g.a)(Object(f.a)({},e.hide,t.width<690)),variant:"h5"},c.a.createElement(w.a,{color:"inherit",href:"/",style:{textDecoration:"none"}},i("appBar.title"))),c.a.createElement(Pe,{displayName:i("appBar.settings"),dropdowns:[{title:"".concat(i(r?"appBar.light":"appBar.dark")," ").concat(i("appBar.theme")),Icon:r?c.a.createElement(C.a,null):c.a.createElement(O.a,null),handler:function(){return a.setMode(r?"light":"dark")}}]})))),c.a.createElement("main",{className:e.content},c.a.createElement(Ae,null)),c.a.createElement(F,{content:i("appBar.sessionClearWarning"),onClose:function(){return m(!1)},onConfirm:function(){m(!1)},open:u}))},Re=n(598),Je=n(593),We=function(e){var t=e.vertical,n=e.horizontal,a=e.duration,r=e.open,o=e.type,i=e.children,s=e.onClose;return c.a.createElement(Re.a,{anchorOrigin:{vertical:t,horizontal:n},autoHideDuration:a,onClose:s,open:r},c.a.createElement(Je.a,{onClose:s,severity:o},i))},Le=c.a.createContext({error:J.noop,success:J.noop,warning:J.noop,info:J.noop}),_e=function(e){var t=e.duration,n=void 0===t?6e3:t,a=e.orientation,r=void 0===a?"bottom-right":a,o=e.children,i=r.split("-"),s={open:!1,message:"",type:"info",vertical:i[0],horizontal:i[1]},l=c.a.useState(s),u=Object(v.a)(l,2),m=u[0],d=u[1],p=c.a.useRef(s);p.current=m;return c.a.createElement(Le.Provider,{value:{success:function(e,t){var n=(t=t||"".concat(p.current.vertical,"-").concat(p.current.horizontal)).split("-");d((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{open:!0,message:e,type:"success",vertical:n[0],horizontal:n[1]})}))},error:function(e,t){var n=(t=t||"".concat(p.current.vertical,"-").concat(p.current.horizontal)).split("-");d((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{open:!0,message:e,type:"error",vertical:n[0],horizontal:n[1]})}))},info:function(e,t){var n=(t=t||"".concat(p.current.vertical,"-").concat(p.current.horizontal)).split("-");d((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{open:!0,message:e,type:"info",vertical:n[0],horizontal:n[1]})}))},warning:function(e,t){var n=(t=t||"".concat(p.current.vertical,"-").concat(p.current.horizontal)).split("-");d((function(t){return Object(Q.a)(Object(Q.a)({},t),{},{open:!0,message:e,type:"warning",vertical:n[0],horizontal:n[1]})}))}}},o,c.a.createElement(We,{duration:n,horizontal:m.horizontal,onClose:function(e,t){"clickaway"!==t&&d((function(e){return Object(Q.a)(Object(Q.a)({},e),{},{open:!1})}))},open:m.open,type:m.type,vertical:m.vertical},m.message))};_e.defaultProps={duration:6e3,orientation:"bottom-right"};var Me=_e;var He=function(){var e=L("theme");return c.a.createElement(d.a,{theme:Object(p.a)(e)},c.a.createElement(Me,{orientation:"bottom-left"},c.a.createElement(m.a,null),c.a.createElement(Fe,null)))},Ue=n(140).a,Ke=n(142);function $e(){return c.a.createElement(l.a,{i18n:u.a},c.a.createElement(s.a,{store:Ue},c.a.createElement(He,null)))}u.a.init({interpolation:{escapeValue:!1},lng:"en",resources:{en:{common:Ke}}}),i.a.render(c.a.createElement($e,null),document.getElementById("root"))},67:function(e,t,n){"use strict";n.r(t),n.d(t,"storage",(function(){return i}));var a=n(124),r=n(8),c=n.n(r),o=new function e(){var t=this;Object(a.a)(this,e),this.get=function(){try{var e=localStorage.getItem("$appData");return"string"===typeof e&&e?JSON.parse(e):void 0}catch(t){return}},this.getItem=function(e){return c.a.get(t.get(),e,null)},this.set=function(e){try{localStorage.setItem("$appData",JSON.stringify(e))}catch(t){}}};Object.freeze(o);var i=o},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(8),r=n.n(a),c=n(16),o=n(36),i=Object(o.b)("reset"),s={palette:{type:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",primary:{main:"#CF112D",contrastText:"#ffffff"},secondary:{main:"#4D4D4D",contrastText:"#ffffff"}}},l=Object(o.c)({name:"theme",initialState:s,reducers:{setMode:function(e,t){e.palette.type=t.payload}},extraReducers:Object(c.a)({},i,(function(e){Object.assign(e,s)}))}),u={jsonContent:"",svgContent:"",picklistValue:"",picklistOptions:[],selecedCards:{},selectedSvgElements:{}},m=Object(o.c)({name:"tool",initialState:u,reducers:{setJsonContent:function(e,t){e.jsonContent=t.payload},setSvgContent:function(e,t){e.svgContent=t.payload},setPicklistValue:function(e,t){e.picklistValue=t.payload},setPicklistOptions:function(e,t){e.picklistOptions=t.payload},setSelectedCards:function(e,t){e.selectedCards=t.payload},setSelectedSvgElements:function(e,t){e.selectedSvgElements=t.payload}},extraReducers:Object(c.a)({},i,(function(e){Object.assign(e,u)}))}),d={theme:l.actions,tool:r.a.assign(m.actions,{reset:i})},p={theme:l.reducer,tool:m.reducer}}},[[291,1,2]]]);
//# sourceMappingURL=main.512d0d48.chunk.js.map