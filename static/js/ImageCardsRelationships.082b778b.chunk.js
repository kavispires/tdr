"use strict";(self.webpackChunktd_admin=self.webpackChunktd_admin||[]).push([[997],{7340:(e,t,s)=>{s.d(t,{k:()=>u});var a=s(2556),n=s(2426),l=s.n(n),r=s(2791),i=s(8211),o=s(4483),c=s(4841),d=s(184);function u(e){let{isDirty:t,onSave:s,isSaving:n,dirt:u,interval:h=6e5,...g}=e;const{togglePendingSave:v}=(0,c.b)(),[,x,m]=(0,i.Z)((()=>{t&&s()}),h);return(0,r.useEffect)((()=>{t?(v(!0),console.log("Save Reset",l()(Date.now()).format("MM/DD/YYYY HH:mm:ss")),m()):(v(!1),x())}),[t,m,x,u]),(0,r.useEffect)((()=>{const e=e=>{if(t){const t="You have unsaved changes, are you sure you want to leave?";return e.returnValue=t,t}};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[t]),(0,d.jsx)(a.ZP,{type:"primary",size:"large",icon:(0,d.jsx)(o.Z,{}),onClick:s,disabled:!t,loading:n,danger:!0,block:!0,...g,children:"Save"})}},8866:(e,t,s)=>{s.d(t,{N:()=>l});var a=s(8252),n=s(184);function l(e){let{children:t,level:s,...l}=e;return(0,n.jsx)(a.Z.Title,{level:null!==s&&void 0!==s?s:3,...l,children:t})}},3166:(e,t,s)=>{s.d(t,{tj:()=>m,xh:()=>v,H:()=>j,zE:()=>g,Do:()=>x,Th:()=>y,F6:()=>l});s(8866);var a=s(3733),n=s(184);const l=e=>{let{children:t,active:s=!1,activeClass:l="",className:r="",hoverType:i="scale",...o}=e;return(0,n.jsx)("button",{className:(0,a.Z)("transparent-button","transparent-button--".concat(i),s&&(l||"transparent-button--active"),r),...o,children:t})};var r=s(5225),i=s(5437),o=s(4003),c=s(5922),d=s(9862),u=s(4248),h=s(1431);function g(e){let{label:t,value:s,onChange:a,options:l,placeholder:o}=e;return(0,n.jsx)(r.Z.Item,{label:t,children:(0,n.jsxs)(i.Z,{style:{minWidth:"150px"},onChange:a,value:s,children:[o&&(0,n.jsx)(i.Z.Option,{value:"",disabled:!0,children:"placeholder"}),l.map((e=>"object"===typeof e?(0,n.jsx)(i.Z.Option,{value:e.value,children:e.label},"".concat(t,"-").concat(e.value)):(0,n.jsx)(i.Z.Option,{value:e,children:e},"".concat(t,"-").concat(e))))]})})}function v(e){let{label:t,value:s,onChange:a,min:l=0,max:i=100,step:c}=e;return(0,n.jsx)(r.Z.Item,{label:t,children:(0,n.jsx)(o.Z,{min:l,max:i,value:s,onChange:e=>a(null!==e&&void 0!==e?e:i),style:{minWidth:"150px",width:"100%"},step:c})})}function x(e){let{label:t,value:s,onChange:a,className:l,disabled:i}=e;return(0,n.jsx)(r.Z.Item,{label:t,valuePropName:"checked",className:l,children:(0,n.jsx)(c.Z,{checked:s,onChange:a,size:"small",disabled:i})})}function m(e){let{label:t,value:s,onChange:a,disabled:l,className:i}=e;return(0,n.jsx)(r.Z.Item,{label:t,valuePropName:"checked",className:i,children:(0,n.jsx)(d.Z,{checked:s,onChange:e=>a(e.target.checked),disabled:l})})}function j(e){let{value:t,label:s,onChange:a,options:l}=e;return(0,n.jsx)(r.Z.Item,{label:s,layout:l.length>2?"vertical":"horizontal",children:(0,n.jsx)(u.Z,{block:!0,value:t,onChange:a,options:l.map((e=>({label:(0,n.jsx)(h.Z,{arrow:!0,trigger:"hover",title:e.title,children:e.icon}),value:e.value})))})})}var p=s(952),f=s(7965);function S(e){let{isLoading:t,isIdle:s,error:a,isDirty:l,isError:r,hasResponseData:i}=e;return s?(0,n.jsx)(p.Z,{children:"No Data yet"}):t?(0,n.jsx)(p.Z,{color:"blue",children:"Loading..."}):a||r?(0,n.jsx)(p.Z,{color:"red",children:"Error"}):l?(0,n.jsx)(p.Z,{color:"orange",children:"Modified"}):i?(0,n.jsx)(p.Z,{color:"green",children:"Loaded"}):(0,n.jsx)(p.Z,{children:"No Data"})}function y(e){return(0,n.jsx)(f.Pd,{children:(0,n.jsx)(r.Z.Item,{label:"Status",children:(0,n.jsx)(S,{...e})})})}},145:(e,t,s)=>{s.d(t,{f:()=>i});var a=s(3733),n=s(6340),l=s(2606),r=s(184);const i=e=>{let{id:t,width:s=200,className:i="",preview:o=!0,fileExtension:c="jpg"}=e;const{getUrl:d}=(0,l.n)("images"),u=t.replace(/-/g,"/");return(0,r.jsx)("div",{className:(0,a.Z)("image-card",i),children:(0,r.jsx)(n.Z,{width:s,src:d("".concat(u,".").concat(c)),fallback:d("back/default.jpg"),preview:o})})}},7166:(e,t,s)=>{s.d(t,{P:()=>i,l:()=>o});var a=s(2791),n=s(1127),l=s(184);const r=(0,a.createContext)({}),i=e=>{let{children:t}=e;const s=(0,n.AZ)(),[i,o]=(0,a.useState)(15),[c,d]=(0,a.useState)(5),[u,h]=(0,a.useState)(150),[g,v]=(0,a.useState)(!1),x=(0,n.IN)(s.data,s.setDirty,i,c);return(0,l.jsx)(r.Provider,{value:{sampleSize:i,setSampleSize:o,tagThreshold:c,setTagThreshold:d,cardSize:u,setCardSize:h,showIds:g,setShowIds:v,randomGroups:x,query:s},children:t})},o=()=>(0,a.useContext)(r)},4249:(e,t,s)=>{s.d(t,{c:()=>r});var a=s(1492),n=s(952),l=s(184);function r(e){let{card:t}=e;const s=t.length>10?"red":t.length>5?"blue":t.length>0?"green":void 0;return(0,l.jsx)("div",{children:(0,l.jsxs)(n.Z,{color:s,icon:(0,l.jsx)(a.Z,{}),children:[" ",t.length]})})}},9936:(e,t,s)=>{s.d(t,{A:()=>o});var a=s(8622),n=s(5225),l=s(9367),r=s(7166),i=s(184);function o(){const{query:{stats:e}}=(0,r.l)();return(0,i.jsx)(n.Z.Item,{label:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.C,{icon:(0,i.jsx)(a.Z,{}),shape:"square",size:"small",style:{marginRight:6}}),"Stats"]}),children:(0,i.jsxs)("ul",{className:"statistic__list",children:[(0,i.jsxs)("li",{children:["Completion: ",Math.floor(100*e.total/2520),"%"]}),(0,i.jsxs)("li",{children:["Total Relationships: ",e.total]}),(0,i.jsxs)("li",{children:["Complete: ",e.complete]}),(0,i.jsxs)("li",{children:["Overdone: ",e.overdone]}),(0,i.jsxs)("li",{children:["Single Match: ",e.single]})]})})}},1127:(e,t,s)=>{s.d(t,{AZ:()=>m,gU:()=>x,IN:()=>j});var a=s(4747),n=s(9631),l=s(763),r=s(2791),i=s(8172),o=s(5850),c=s(3713),d=s(2010),u=s(8556);var h=s(4766);const g=()=>(0,l.padStart)(String((0,l.random)(1,252)),2,"0"),v=()=>(0,l.random)(1,12);function x(e,t){var s,a,n;const[l,i]=(0,r.useState)(v()),[c,d]=(0,r.useState)(g()),[u,x]=(0,r.useState)(v()),[m,j]=(0,r.useState)(g()),p="td-d".concat(l,"-").concat(c),f="td-d".concat(u,"-").concat(m),[S,y]=(0,r.useState)(0),{queryParams:Z}=(0,h.K)(),b=Number(null!==(s=Z.get("cycle"))&&void 0!==s?s:3),C=null!==(a=null===e||void 0===e?void 0:e[p])&&void 0!==a?a:[],E=null!==(n=null===e||void 0===e?void 0:e[f])&&void 0!==n?n:[],N=()=>{y(0),i(v()),d(g()),x(v()),j(g())};return(0,r.useEffect)((()=>{p===f&&j(g())}),[p,f]),{cardAId:p,cardA:C,cardBId:f,cardB:E,relate:()=>{y(0),C.push(f),e[p]=(0,o.R1)(C),E.push(p),e[f]=(0,o.R1)(E),t(!0),i(u),d(m),x(v()),j(g())},unrelate:()=>{console.log("HERE",S,b,S>=b),S>=b?(y(0),N()):(y((e=>e+1)),x(v()),j(g()))},areRelated:C.includes(f),onRandomCards:N}}function m(){const[e,t]=(0,r.useState)(!1),s=["data/imageCardsRelationships"],l=(0,c.NL)(),{notification:o}=a.Z.useApp(),[h,g]=(0,r.useState)({total:0,overdone:0,complete:0,single:0}),{data:v={},isLoading:x,isSuccess:m,isError:j,error:p,isFetched:f,isRefetching:S,refetch:y}=(0,d.a)({queryKey:s,queryFn:async()=>{var e;const t=(0,n.JU)(i.RZ,"data/imageCardsRelationships");return null!==(e=(await(0,n.QT)(t)).data())&&void 0!==e?e:{}}}),{isPending:Z,isError:b,isSuccess:C,mutate:E}=(0,u.D)({mutationKey:s,mutationFn:async()=>{const e=(0,n.JU)(i.RZ,"data/imageCardsRelationships");return await(0,n.pl)(e,v),v},onSuccess:()=>{o.success({message:"Saved",placement:"bottomLeft"}),l.refetchQueries({queryKey:s}),t(!1)}});return(0,r.useEffect)((()=>{if(!S&&f){const e=Object.keys(v).length;let t=0,s=0,a=0;Object.values(v).forEach((e=>{e.length>8&&(t+=1),1===e.length&&(a+=1),e.length>2&&(s+=1)})),g({total:e,overdone:t,complete:s,single:a})}}),[f,S]),{data:v,isLoading:x,isSuccess:m,isError:j,error:p,hasData:m&&Object.keys(v).length>0,refetch:y,isSaving:Z,isMutationError:b,isSaved:C,save:E,setDirty:t,isDirty:e,stats:h}}function j(e,t,s,a){const[n,l]=(0,r.useState)([]),[i,c]=(0,r.useState)([]),[d,u]=(0,r.useState)([]),[h,x]=(0,r.useState)(0),[m,j]=(0,r.useState)(!0),[p,f]=(0,r.useState)([]),S=t=>{c((null!==t&&void 0!==t?t:n).map((t=>{var s;return null!==(s=null===e||void 0===e?void 0:e[t])&&void 0!==s?s:[]})))},y=()=>{const t=[...p];let n=0;const r=d.length<2e3?d:[];let i=0;for(;i<400&&t.length<s;){var o;const s="td-d".concat(v(),"-").concat(g()),l=null!==(o=e[s])&&void 0!==o?o:[],c=!(a>0)||l.length<a,d=!!m&&r.includes(s);t.includes(s)||d||!c||(t.push(s),n+=1),i+=1}l(t),u((e=>[...e,...t])),S(t),x((e=>e+n))};(0,r.useEffect)((()=>{0===n.length&&y()}),[n]);return{cardIds:n,cards:i,selection:p,onSelect:e=>{f((t=>{const s=[...t],a=s.indexOf(e);return a>-1?s.splice(a,1):s.push(e),s}))},relate:()=>{p.forEach((t=>{var s;const a=null!==(s=e[t])&&void 0!==s?s:[];a.push(...p.filter((e=>e!==t))),e[t]=(0,o.R1)(a)})),t(!0),f([]),S(),u([]),x(0)},nextSet:y,deselectAll:()=>{f([])},cycles:h,filters:{useCycles:m,toggleUseCycles:()=>{j((e=>!e))}}}}},4766:(e,t,s)=>{s.d(t,{K:()=>l});var a=s(2791),n=s(1087);function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[t,s]=(0,n.lr)(),l=(e,a,n)=>{void 0===a||""===a||a===n?t.delete(e):t.set(e,String(a)),s(t)},r=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.entries(e).forEach((e=>{let[s,n]=e;a[s]===n?t.delete(s):t.set(s,String(n))})),s(t)},i=e=>{t.delete(e),s(t)},o=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"true";return t.get(e)===String(s)};return(0,a.useEffect)((()=>{Object.entries(e).forEach((e=>{let[s,a]=e;t.has(s)||l(s,a)}))}),[]),{addParam:l,addParams:r,removeParam:i,queryParams:t,is:o}}},7131:(e,t,s)=>{s.r(t),s.d(t,{default:()=>z});var a=s(3990),n=s(7166),l=s(2128),r=s(763),i=s(6473),o=s(6340),c=s(952),d=s(9884),u=s(7691),h=s(9720),g=s(398),v=s(4988),x=s(7360),m=s(4057),j=s(145),p=s(4249),f=s(3166),S=s(2791),y=s(7415),Z=s(184);function b(){const{query:{isDirty:e,isSaving:t,save:s,stats:a,...d},randomGroups:{cardIds:h,cards:g,onSelect:v,selection:x,relate:m,nextSet:b,deselectAll:E,cycles:N},showIds:w,cardSize:D}=(0,n.l)(),k=(0,S.useRef)(null),[I,{width:R}]=(0,y.Z)(),[z,P]=(0,S.useMemo)((()=>{const e=Math.floor(R/D)+1;return[e,Math.floor(R/e)]}),[D,R]);return(0,Z.jsx)(l.T,{isLoading:d.isLoading,error:d.error,hasResponseData:!(0,r.isEmpty)(d.data),children:(0,Z.jsx)("div",{ref:I,className:"my-6",children:(0,Z.jsxs)(i.Z,{title:"Card Relationship Matching",extra:(0,Z.jsxs)("span",{children:[(0,Z.jsx)(u.Z,{})," ",N]}),className:"image-card-categorizer-card",ref:k,children:[(0,Z.jsx)(o.Z.PreviewGroup,{children:(0,Z.jsx)("div",{className:"image-cards-group",style:{gridTemplateColumns:"repeat(".concat(Math.max(z,1),", 1fr)")},children:h.map(((e,t)=>{const s=x.includes(e),a=g[t];return(0,Z.jsx)("div",{className:"image-card-card__image",children:(0,Z.jsxs)(f.F6,{onClick:()=>v(e),active:s,className:"image-cards-group__button",activeClass:"image-cards-group__button--active",children:[(0,Z.jsx)(j.f,{id:e,width:P-24,preview:!1}),(0,Z.jsxs)("div",{children:[w&&(0,Z.jsx)(c.Z,{children:e}),(0,Z.jsx)(p.c,{card:a})]})]})},e)}))})}),(0,Z.jsx)(C,{isSaving:t,isDirty:e,selection:x,relate:m,deselectAll:E,onNextSet:()=>{var e;b(),null===(e=k.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}})]})})})}const C=e=>{let{isSaving:t,isDirty:s,selection:a,relate:n,deselectAll:l,onNextSet:r}=e;if(t)return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(d.Z,{icon:(0,Z.jsx)(h.Z,{})})});return(0,Z.jsxs)(Z.Fragment,{children:[s&&(0,Z.jsx)(d.Z,{icon:(0,Z.jsx)(g.Z,{}),type:"primary",style:{right:234}}),(0,Z.jsx)(d.Z,{icon:(0,Z.jsx)(v.Z,{}),style:{right:164},onClick:l}),(0,Z.jsx)(d.Z,{icon:(0,Z.jsx)(x.Z,{}),style:{right:94},type:a.length<2?"default":"primary",badge:{count:a.length,size:"small"},onClick:()=>{a.length<2||n()}}),(0,Z.jsx)(d.Z,{icon:(0,Z.jsx)(m.Z,{}),style:{right:24},onClick:r})]})};var E=s(4520),N=s(7018),w=s(7340),D=s(7965),k=s(6591),I=s(9936);function R(){const{query:{isDirty:e,isSaving:t,save:s,data:a,isLoading:l,isError:i},randomGroups:{filters:o},showIds:c,setShowIds:d,tagThreshold:u,setTagThreshold:h,sampleSize:g,setSampleSize:v,cardSize:x,setCardSize:m}=(0,n.l)();return(0,Z.jsxs)(D.p3,{children:[(0,Z.jsx)(D.Pd,{children:(0,Z.jsxs)(E.Z,{vertical:!0,gap:6,children:[(0,Z.jsx)(w.k,{isDirty:e,dirt:JSON.stringify(a),onSave:()=>s({}),isSaving:t}),(0,Z.jsx)(N.o,{data:a,fileName:"imageCardsRelationships.json",loading:t,disabled:(0,r.isEmpty)(a),block:!0})]})}),(0,Z.jsx)(f.Th,{isLoading:l||t,isDirty:e,isError:i,hasResponseData:!(0,r.isEmpty)(a)}),(0,Z.jsxs)(D.Pd,{children:[(0,Z.jsx)(f.Do,{label:"Use Cycles",value:o.useCycles,onChange:()=>o.toggleUseCycles()}),(0,Z.jsx)(f.Do,{label:"Show Ids",value:c,onChange:e=>d(e)}),(0,Z.jsx)(f.zE,{onChange:e=>h(e),value:u,options:k.VC,label:"Tag Count"}),(0,Z.jsx)(f.zE,{onChange:e=>v(e),value:g,options:k.ZI,label:"Sample Size"}),(0,Z.jsx)(f.zE,{onChange:e=>m(e),value:x,options:k.Hn,label:"Card Size"})]}),(0,Z.jsx)(D.Pd,{children:(0,Z.jsx)(I.A,{})})]})}const z=function(){return(0,Z.jsx)(D.Xg,{title:"Image Cards",subtitle:"Relationships",children:(0,Z.jsx)(n.P,{children:(0,Z.jsxs)(a.Z,{hasSider:!0,children:[(0,Z.jsx)(R,{}),(0,Z.jsx)(a.Z.Content,{className:"content",children:(0,Z.jsx)(b,{})})]})})})}}}]);
//# sourceMappingURL=ImageCardsRelationships.082b778b.chunk.js.map