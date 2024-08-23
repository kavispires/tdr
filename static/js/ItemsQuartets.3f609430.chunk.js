"use strict";(self.webpackChunktd_admin=self.webpackChunktd_admin||[]).push([[8002],{7340:(e,t,n)=>{n.d(t,{k:()=>c});var a=n(2556),r=n(2426),o=n.n(r),i=n(2791),s=n(8211),l=n(4483),d=n(184);function c(e){let{isDirty:t,onSave:n,isSaving:r,dirt:c,interval:u=6e5,...p}=e;const[,v,g]=(0,s.Z)((()=>{t&&n()}),u);return(0,i.useEffect)((()=>{t?(console.log("Save Reset",o()(Date.now()).format("MM/DD/YYYY HH:mm:ss")),g()):v()}),[t,g,v,c]),(0,i.useEffect)((()=>{const e=e=>{if(t){const t="You have unsaved changes, are you sure you want to leave?";return e.returnValue=t,t}};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[t]),(0,d.jsx)(a.ZP,{type:"primary",size:"large",icon:(0,d.jsx)(l.Z,{}),onClick:n,disabled:!t,loading:r,danger:!0,block:!0,...p,children:"Save"})}},8178:(e,t,n)=>{n.d(t,{i:()=>c});var a=n(5),r=n(1105),o=n(5529),i=n(763),s=n(2791),l=n(5675),d=n(184);function c(e){let{items:t,isPending:n,style:c,size:u,placeholder:p,allowClear:v,onFinish:g,...m}=e;const f=(0,o.N)("items",!Boolean(t)&&!n),{namesDict:h,options:y}=(0,s.useMemo)((()=>{var e;console.log("Recomputing item names typeahead...");const n=Object.values(null!==(e=null!==t&&void 0!==t?t:f.data)&&void 0!==e?e:{}).reduce(((e,t)=>{const n="".concat(t.name.en," (").concat(t.id,")"),a="".concat(t.name.pt," (").concat(t.id,")");return e[n]=t.id,e[a]=t.id,t.aliasesEn&&t.aliasesEn.forEach((n=>{e["".concat(n," (").concat(t.id,")*")]=t.id})),t.aliasesPt&&t.aliasesPt.forEach((n=>{e["".concat(n," (").concat(t.id,")*")]=t.id})),e}),{});return{namesDict:n,options:(0,i.orderBy)(Object.keys(n),[e=>e.toLowerCase()]).map((e=>({value:e})))}}),[t,n]),[x,j]=(0,s.useState)([]),[S,b]=(0,s.useState)("");(0,l.Z)((()=>{S&&C(S)}),500,[S]);const C=e=>{if(!e)return void j([]);const t=e.trim().toUpperCase(),n=y.filter((e=>{var n;return String(null!==(n=null===e||void 0===e?void 0:e.value)&&void 0!==n?n:"").toUpperCase().includes(t)})),a=(0,i.orderBy)(n,[e=>{var n;const a=String(null!==(n=null===e||void 0===e?void 0:e.value)&&void 0!==n?n:"").toUpperCase();if(a===t)return 0;const r=a.match(/\((.*?)\)/);if(r&&r[1]===t)return 1;const o=a.indexOf(t);return 0===o?2:o>0?3:4}]);j(a)};return(0,d.jsx)(a.Z,{options:x,style:{width:250,...c},allowClear:null===v||void 0===v||v,placeholder:null!==p&&void 0!==p?p:"Search by name or id...",filterOption:(e,t)=>{var n;return-1!==String(null!==(n=null===t||void 0===t?void 0:t.value)&&void 0!==n?n:"").toUpperCase().indexOf(null===e||void 0===e?void 0:e.toUpperCase())},onSearch:b,notFoundContent:S.length>0?"No items found":"Type to search...",onSelect:e=>{void 0!==h[e]&&g(h[e])},...m,children:(0,d.jsx)(r.Z,{onPressEnter:()=>{if(x.length>0){const e=x[0].value;void 0!==h[e]&&g(h[e])}}})})}},7134:(e,t,n)=>{n.d(t,{_:()=>s});var a=n(4747),r=n(763),o=n(2791),i=n(3250);function s(){const[e,t]=(0,i.Z)(),{message:n}=a.Z.useApp();return(0,o.useEffect)((()=>{e.value&&(e.value.length>20?n.info("Copied to clipboard: ".concat((0,r.truncate)(e.value,{length:30,omission:"..."}))):n.success("Copied"))}),[e,n]),t}},8027:(e,t,n)=>{n.d(t,{A:()=>s,X:()=>l});var a=n(2481),r=n(2748),o=n(2010),i=n(5850);function s(e,t){return async()=>{var n;console.log("%cQuerying ".concat(e,"/").concat(t," from firebase: ").concat((0,i.xE)()),"color: #f0f");const o=(0,a.JU)(r.RZ,"".concat(e,"/").concat(t));return null!==(n=(await(0,a.QT)(o)).data())&&void 0!==n?n:{}}}function l(e,t,n){return(0,o.a)({queryKey:["firebase",e,t],queryFn:s(e,t),...n})}},4766:(e,t,n)=>{n.d(t,{K:()=>o});var a=n(2791),r=n(1087);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[t,n]=(0,r.lr)(),o=(e,a,r)=>{void 0===a||""===a||a===r?t.delete(e):t.set(e,String(a)),n(t)},i=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.entries(e).forEach((e=>{let[n,r]=e;a[n]===r?t.delete(n):t.set(n,String(r))})),n(t)},s=e=>{t.delete(e),n(t)},l=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"true";return t.get(e)===String(n)};return(0,a.useEffect)((()=>{Object.entries(e).forEach((e=>{let[n,a]=e;t.has(n)||o(n,a)}))}),[]),{addParam:o,addParams:i,removeParam:s,queryParams:t,is:l}}},8938:(e,t,n)=>{n.d(t,{i:()=>u});var a=n(4747),r=n(763),o=n(2791),i=n(3713),s=n(8027),l=n(5529),d=n(2233),c=n(5850);function u(e){let{tdrResourceName:t,firebaseDataCollectionName:n,serialize:u}=e;const{notification:p}=a.Z.useApp(),v=(0,i.NL)(),g=(0,l.N)(t),m=(0,s.X)("tdr",n,{select:u?c.d_:void 0}),[f,h]=(0,o.useState)({}),y=(0,d.B)("tdr",n,{onSuccess:()=>{p.success({message:"".concat(n," updated")}),v.refetchQueries({queryKey:["firebase","tdr",n]}),h({})},onError:e=>{p.error({message:"".concat(n," update failed"),description:e.message})}}),x=(0,o.useMemo)((()=>{var e,a;return g.isSuccess&&m.isSuccess&&!y.isPending?(console.log("%cMerging ".concat(t,"+").concat(n," data..."),"color: #f0f"),(0,r.cloneDeep)({...null!==(e=g.data)&&void 0!==e?e:{},...null!==(a=m.data)&&void 0!==a?a:{},...f})):{}}),[t,n,g.data,m.data,g.isSuccess,m.isSuccess,y.isPending,f]),j=!(0,r.isEmpty)(f),S=m.data;return{data:x,isLoading:g.isLoading||m.isLoading,error:g.error||m.error,firebaseData:S,isSaving:y.isPending,save:()=>{y.mutate(u?(0,c.aS)(f):f)},addEntryToUpdate:(e,t)=>{h((n=>({...n,[e]:t})))},entriesToUpdate:f,isDirty:j}}},5529:(e,t,n)=>{n.d(t,{N:()=>i,Y:()=>s});var a=n(763),r=n(2010),o=n(2606);function i(e){var t;let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{getUrl:i}=(0,o.n)("resources"),s=(0,r.a)({queryKey:[e],queryFn:async()=>{const t=await fetch(i("".concat(e,".json")));return await t.json()},enabled:n}),l=!(0,a.isEmpty)(s.data);return{...s,data:null!==(t=s.data)&&void 0!==t?t:{},hasResponseData:l}}function s(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const{getUrl:n}=(0,o.n)("resources"),i=(0,r.a)({queryKey:[e],queryFn:async()=>{const t=await fetch(n("".concat(e,".json")));return await t.json()},enabled:t}),s=!(0,a.isEmpty)(i.data);return{...i,data:i.data,hasResponseData:s}}},548:(e,t,n)=>{n.d(t,{P:()=>r});var a=n(4766);function r(e){var t,n;let{prefix:r="",defaultCurrent:o=1,defaultPageSize:i=10,pageSizeOptions:s=[10,20,50,100],total:l,showQuickJumper:d}=e;const{queryParams:c,addParam:u}=(0,a.K)();return{current:Number(null!==(t=c.get("".concat(r,"page")))&&void 0!==t?t:String(o)),pageSize:Number(null!==(n=c.get("".concat(r,"pageSize")))&&void 0!==n?n:String(i)),onChange:e=>{u("".concat(r,"page"),e.toString(),String(o))},onShowSizeChange:(e,t)=>{u("".concat(r,"pageSize"),t.toString(),String(i))},defaultCurrent:o,defaultPageSize:i,pageSizeOptions:s,total:l,hideOnSinglePage:!0,showQuickJumper:d}}},2233:(e,t,n)=>{n.d(t,{B:()=>s});var a=n(2481),r=n(2748),o=n(8556);function i(e,t,n){console.log("%cUpdating ".concat(e,"/").concat(t," from firebase"),"color: #f00");const o=(0,a.JU)(r.RZ,"".concat(e,"/").concat(t));return(0,a.r7)(o,n)}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,o.D)({mutationFn:async n=>i(e,t,n),...n})}},2027:(e,t,n)=>{n.r(t),n.d(t,{ItemsQuartets:()=>J,default:()=>_});var a=n(3990),r=n(4520),o=n(2128),i=n(1046),s=n(4031),l=n(4766),d=n(763),c=n(2791),u=n(122),p=n(7765),v=n(913),g=n(1082),m=n(2556),f=n(2997),h=n(7134),y=n(548),x=n(5529),j=n(5850),S=n(8835),b=n(8862),C=n(8178),Z=n(184);const w=["general","visual","word","thematic","attribute"].map((e=>({label:e,value:e})));function E(e){let{rows:t,addEntryToUpdate:n}=e;const a=(0,h._)(),r=(0,x.N)("items"),o=(0,y.P)({total:t.length,showQuickJumper:!0}),i=[{title:"Title",dataIndex:"title",render:(e,t)=>(0,Z.jsx)(q,{property:"title",value:e,quartet:t,addEntryToUpdate:n})},u.Z.EXPAND_COLUMN,{title:"Items",dataIndex:"itemsIds",key:"itemsIds",render:(e,t)=>(0,Z.jsx)(P,{quartet:t,itemsIds:e,copyToClipboard:a,addEntryToUpdate:n})},{title:"Count",dataIndex:"itemsIds",render:e=>(0,j.R1)(e).filter(Boolean).length},{title:"Type",dataIndex:"type",render:(e,t)=>(0,Z.jsx)(p.Z,{defaultValue:e,options:w,size:"small",style:{width:100},onChange:e=>n(t.id,{...t,type:e})})},{title:"Level",dataIndex:"level",render:(e,t)=>(0,Z.jsx)(v.Z,{count:3,value:e,onChange:e=>n(t.id,{...t,level:e})})},{title:"Perfect Quartet",dataIndex:"itemsIds",render:e=>4===(0,j.R1)(e).filter(Boolean).length&&(0,Z.jsx)(S.Z,{style:{color:"dodgerblue"}})}];return(0,Z.jsx)(u.Z,{columns:i,rowKey:"id",dataSource:t,expandable:{expandedRowRender:e=>(0,Z.jsx)(T,{quartet:e,addEntryToUpdate:n}),rowExpandable:()=>r.isSuccess},pagination:o})}function T(e){let{quartet:t,addEntryToUpdate:n}=e;return(0,Z.jsx)("div",{children:(0,Z.jsx)(C.i,{onFinish:e=>{n(t.id,{...t,itemsIds:[...t.itemsIds,e]})}})})}function U(e){let{quartet:t,addEntryToUpdate:n,itemId:a}=e;return(0,Z.jsx)(g.Z,{title:"Are you sure you want to remove this item?",onConfirm:()=>{n(t.id,{...t,itemsIds:t.itemsIds.filter((e=>e!==a))})},okText:"Yes",cancelText:"No",children:(0,Z.jsx)(m.ZP,{icon:(0,Z.jsx)(b.Z,{}),size:"small",type:"text"})})}function P(e){let{quartet:t,itemsIds:n,copyToClipboard:a,addEntryToUpdate:o}=e;return(0,Z.jsx)(r.Z,{gap:6,wrap:"wrap",children:n.map((e=>(0,Z.jsxs)(r.Z,{gap:2,vertical:!0,children:[e?(0,Z.jsx)(f.ck,{id:String(e),width:60}):(0,Z.jsx)(Z.Fragment,{children:console.log(e)}),(0,Z.jsxs)(r.Z,{justify:"center",children:[(0,Z.jsx)(s.Z.Text,{onClick:()=>a(e),children:e}),(0,Z.jsx)(U,{quartet:t,addEntryToUpdate:o,itemId:e})]})]},"".concat(t.title,"-").concat(e))))},"items-".concat(t.title))}function q(e){let{value:t,quartet:n,addEntryToUpdate:a,property:r}=e;return(0,Z.jsx)(i.Z,{children:(0,Z.jsx)(s.Z.Text,{editable:{onChange:e=>"number"===typeof t?e!==String(t)?a(n.id,{...n,[r]:Number(e)}):null:e!==t?a(n.id,{...n,[r]:e.trim()}):null},children:String(t)})})}function I(e){let{data:t,addEntryToUpdate:n}=e;const{is:a}=(0,l.K)(),r=a("emptyOnly"),o=(0,c.useMemo)((()=>{const e=t?(n=Object.values(t),(0,d.orderBy)(n,[e=>e.title]).map((e=>({...e,itemsIds:(0,d.orderBy)(e.itemsIds,(e=>Number(e)))})))):[];var n;return r?e.filter((e=>0===e.itemsIds.length)):e}),[t,r]),u=o.filter((e=>4===e.itemsIds.length)).length;return(0,Z.jsxs)(i.Z,{direction:"vertical",children:[(0,Z.jsxs)(s.Z.Title,{level:5,children:["Total Quartets: ",o.length," | Complete Quartets: ",u]}),(0,Z.jsx)(E,{rows:o,addEntryToUpdate:n})]})}var O=n(5),D=n(1105),N=n(5675);function k(e){let{quartets:t,isPending:n,onFinish:a,style:r,...o}=e;const{titlesDict:i,options:s}=(0,c.useMemo)((()=>{console.log("Recomputing quartets tiles typeahead...");const e=Object.values(null!==t&&void 0!==t?t:{}).reduce(((e,t)=>(e[t.title]=t.id,e)),{});return{titlesDict:e,options:(0,d.orderBy)(Object.keys(e),[e=>e.toLowerCase()]).map((e=>({value:e})))}}),[t,n]),[l,u]=(0,c.useState)([]),[p,v]=(0,c.useState)("");(0,N.Z)((()=>{p?g(p):a(null)}),350,[p]);const g=e=>{if(!e)return void u([]);const t=e.trim().toUpperCase(),n=s.filter((e=>{var n;return String(null!==(n=null===e||void 0===e?void 0:e.value)&&void 0!==n?n:"").toUpperCase().includes(t)})),a=(0,d.orderBy)(n,[e=>{var n;const a=String(null!==(n=null===e||void 0===e?void 0:e.value)&&void 0!==n?n:"").toUpperCase();if(a===t)return 0;const r=a.match(/\((.*?)\)/);if(r&&r[1]===t)return 1;const o=a.indexOf(t);return 0===o?2:o>0?3:4}]);u(a)};return(0,Z.jsx)(O.Z,{options:l,style:{width:250,...r},allowClear:!0,placeholder:"Search quartet by title...",filterOption:(e,t)=>{var n;return-1!==String(null!==(n=null===t||void 0===t?void 0:t.value)&&void 0!==n?n:"").toUpperCase().indexOf(null===e||void 0===e?void 0:e.toUpperCase())},onSearch:v,notFoundContent:p.length>0?"No quartets found":"Type to search...",onSelect:e=>{console.log("onSelect",e),void 0!==i[e]&&a(i[e])},...o,children:(0,Z.jsx)(D.Z,{onPressEnter:()=>{if(l.length>0){const e=l[0].value;void 0!==i[e]&&a(i[e])}}})})}function R(e){let{data:t,addEntryToUpdate:n}=e;const[a,r]=(0,c.useState)(null),o=(0,c.useMemo)((()=>a?t[a]:null),[a,t]);return(0,Z.jsxs)(i.Z,{direction:"vertical",children:[(0,Z.jsx)(s.Z.Title,{level:5,children:"Search Quartet"}),(0,Z.jsx)(k,{quartets:t,onFinish:e=>r(e)}),Boolean(o)&&(0,Z.jsx)(E,{rows:[o],addEntryToUpdate:n})]})}var z=n(7128),B=n(6173),L=n(7018),Q=n(7340),F=n(1958);function K(e){let{data:t,save:n,isDirty:a,isSaving:o,entriesToUpdate:i}=e;const{is:s,addParam:d}=(0,l.K)();return(0,Z.jsxs)(F.Pd,{children:[(0,Z.jsxs)(r.Z,{vertical:!0,gap:12,children:[(0,Z.jsx)(Q.k,{isDirty:a,onSave:n,isSaving:o,dirt:JSON.stringify(i)}),(0,Z.jsx)(L.o,{data:()=>{return e=t,(0,j.Tj)(e);var e},fileName:"daily-quartet-sets.json",disabled:a,block:!0})]}),(0,Z.jsx)(z.Z,{}),(0,Z.jsx)(B.Do,{label:"Pending Only",value:s("emptyOnly"),onChange:e=>d("emptyOnly",e,!1)})]})}var M=n(4562),Y=n(8938);function J(){const e=(0,Y.i)({tdrResourceName:"daily-quartet-sets",firebaseDataCollectionName:"quartetSets"});return(0,Z.jsx)(F.Xg,{title:"Items",subtitle:"Quartet Sets",children:(0,Z.jsxs)(a.Z,{hasSider:!0,children:[(0,Z.jsx)(M.p,{children:(0,Z.jsx)(K,{...e})}),(0,Z.jsx)(a.Z.Content,{className:"content",children:(0,Z.jsx)(o.T,{isLoading:e.isLoading,error:e.error,hasResponseData:!(0,d.isEmpty)(e.data),children:(0,Z.jsxs)(r.Z,{vertical:!0,gap:24,children:[(0,Z.jsx)(R,{...e}),(0,Z.jsx)(I,{...e})]})})})]})})}const _=J}}]);
//# sourceMappingURL=ItemsQuartets.3f609430.chunk.js.map