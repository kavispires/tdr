"use strict";(self.webpackChunktdr=self.webpackChunktdr||[]).push([[8724],{6989:(e,n,i)=>{i.r(n),i.d(n,{default:()=>le});var s=i(3990),t=i(1046),a=i(2128),l=i(4031),d=i(6106),c=i(914),r=i(731),o=i(1105),m=i(7765),u=i(5225),h=i(5922),p=i(4520),j=i(9228),x=i(2556),g=i(1310),v=i(6020),k=i(4766),f=i(8938),y=i(763),Z=i(2791),b=i(184);const w=(0,Z.createContext)({items:{},isLoading:!0,error:null,hasResponseData:!1,decksDict:{},decks:[],listing:[],isDirty:!1,addItemToUpdate:()=>{},itemsToUpdate:{},isSaving:!1,save:()=>{},newId:"-1"}),C=e=>{var n;let{children:i}=e;const{queryParams:s}=(0,k.K)(),{data:t,isLoading:a,error:l,isSaving:d,save:c,addEntryToUpdate:r,entriesToUpdate:o,isDirty:m}=(0,f.i)({tdrResourceName:"items",firebaseDataCollectionName:"items"}),{decksDict:u,decks:h}=(0,Z.useMemo)((()=>{console.log("Recomputing item decks typeahead...");const e={},n={},i={},s=[];Object.values(t).forEach((t=>{var a;const l="".concat(t.name.en," (").concat(t.id,")"),d="".concat(t.name.pt," (").concat(t.id,")");n[t.name.en]?s.push(["".concat(t.name.en," (").concat(n[t.name.en],")"),l]):n[t.name.en]=t.id,i[t.name.pt]?s.push(["".concat(t.name.pt," (").concat(i[t.name.pt],")"),d]):i[t.name.pt]=t.id,null===t||void 0===t||null===(a=t.decks)||void 0===a||a.forEach((n=>{e[n]=n}))}));const a=(0,y.orderBy)(Object.keys(e)).map((e=>({value:e})));return s.length>0&&console.warn("Possible duplicated items",s),{decksDict:e,decks:a}}),[t,d,a]),p=null!==(n=s.get("deck"))&&void 0!==n?n:"all",j=(0,Z.useMemo)((()=>{const e=(0,y.orderBy)(Object.values(t),[e=>Number(e.id)],"asc");switch(p){case"all":return e;case"!all":return e.filter((e=>{var n,i;return null===(n=!(null!==e&&void 0!==e&&null!==(i=e.decks)&&void 0!==i&&i.length))||void 0===n||n}));case"nsfw":return e.filter((e=>e.nsfw));case"!nsfw":return e.filter((e=>!e.nsfw));default:return p.startsWith("!")?e.filter((e=>{var n;return!(null!==e&&void 0!==e&&null!==(n=e.decks)&&void 0!==n&&n.includes(p.slice(1)))})):e.filter((e=>{var n;return null===e||void 0===e||null===(n=e.decks)||void 0===n?void 0:n.includes(p)}))}}),[t,p]),x=(0,Z.useMemo)((()=>{var e;const n=(0,y.orderBy)(Object.keys(o),[e=>Number(e)],"asc"),i=null===(e=j[j.length-1])||void 0===e?void 0:e.id,s=(0,y.orderBy)([...n,i],[e=>Number(e)],"desc")[0];return String(Number(s)+1)}),[j,o]);return(0,b.jsx)(w.Provider,{value:{items:t,listing:j,isLoading:a,error:l,decksDict:u,decks:h,hasResponseData:j.length>0,isDirty:m,addItemToUpdate:r,isSaving:d,save:c,itemsToUpdate:o,newId:x},children:i})},S=()=>(0,Z.useContext)(w);var N=i(7134);var D=i(3834),T=i(4483),z=i(7747),O=i(8955),I=i(6324),P=i(2675);function E(e){let{item:n,editMode:i=!1,simplified:s}=e;const{decks:a}=S(),{isEditing:d,toggleEditMode:c,onEdit:p,isDirty:j,onModify:x,onReset:f,editableItem:w}=function(e){var n;let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{addItemToUpdate:s,itemsToUpdate:t}=S(),[a,l]=(0,Z.useState)(i),[d,c]=(0,Z.useState)((0,y.cloneDeep)(e)),r=null!==(n=t[e.id])&&void 0!==n?n:e,o=e=>{const n={...(0,y.cloneDeep)(d),...e};Object.keys(e).includes("nsfw")&&!1===e.nsfw&&delete n.nsfw,c(n)},m=async()=>{s(d.id,d)},u=()=>{c((0,y.cloneDeep)(e)),l(!1)},h=JSON.stringify(r)!==JSON.stringify(d);return{isEditing:a,toggleEditMode:()=>l((e=>!e)),editableItem:d,onEdit:o,isDirty:h,onModify:m,onReset:u}}(n,i),C=(0,N._)(),{is:I}=(0,k.K)();return(0,b.jsxs)(r.Z,{title:(0,b.jsx)(l.Z.Text,{onClick:()=>C(n.id),children:n.id}),extra:(0,b.jsx)(_,{item:n}),style:{maxWidth:250},size:s?"small":"default",actions:s?void 0:j?[(0,b.jsx)(D.Z,{onClick:f},"reset"),(0,b.jsx)(T.Z,{onClick:x},"save")]:[(0,b.jsx)(z.Z,{onClick:c},"edit")],children:[(0,b.jsx)(v.ck,{id:n.id,width:s?75:125,title:"".concat(n.name.en," | ").concat(n.name.pt)}),(0,b.jsxs)(t.Z,{size:"small",direction:"vertical",className:"my-4",children:[(0,b.jsx)(o.Z,{prefix:(0,b.jsx)(g.H,{language:"en",width:"1em"}),placeholder:"Name in EN",variant:d?"outlined":"borderless",size:"small",defaultValue:n.name.en,readOnly:!d,onChange:e=>p({name:{...w.name,en:e.target.value}})},"en-".concat(n.name.en)),(0,b.jsx)(o.Z,{prefix:(0,b.jsx)(g.H,{language:"pt",width:"1em"}),placeholder:"Name in PT",variant:d?"outlined":"borderless",size:"small",defaultValue:n.name.pt,readOnly:!d,onChange:e=>p({name:{...w.name,pt:e.target.value}})},"pt-".concat(n.name.pt)),!s&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{children:(0,b.jsx)(m.Z,{mode:"multiple",style:{width:"100%"},placeholder:"Select a deck",defaultValue:n.decks,disabled:!d,options:a,variant:d?"outlined":"borderless",size:"small",onChange:e=>p({decks:e.sort()})},String(n.decks))}),I("showVerifyThing")&&(0,b.jsx)("div",{children:(0,b.jsx)(M,{item:n})}),(d||n.nsfw)&&(0,b.jsx)("div",{children:(0,b.jsx)(u.Z.Item,{label:"nsfw",valuePropName:"checked",children:(0,b.jsx)(h.Z,{checked:n.nsfw,onChange:e=>p({nsfw:e}),size:"small",checkedChildren:(0,b.jsx)(O.Z,{style:{color:"hotpink"}}),disabled:!d})})})]})]})]})}const R=(0,y.memoize)((e=>{var n,i;const s=!(null===(n=e.decks)||void 0===n||!n.includes("thing")),t=!(null===(i=e.decks)||void 0===i||!i.includes("manufactured")),a=1===e.name.en.split(" ").length,l=1===e.name.pt.split(" ").length,d={en:s||a&&t,pt:s||l&&t};return d.pt||d.en?(0,b.jsxs)(b.Fragment,{children:[d.en&&(0,b.jsx)(g.H,{language:"en",width:"1em"}),d.pt&&(0,b.jsx)(g.H,{language:"pt",width:"1em"})]}):""})),M=e=>{let{item:n}=e;const i=R(n);return i?(0,b.jsxs)(p.Z,{gap:6,children:["Thing: ",i]}):(0,b.jsx)(b.Fragment,{})};function _(e){let{item:n}=e;const[i,s]=(0,P.Z)(!1),a=(0,N._)();return(0,b.jsx)(j.Z,{content:(0,b.jsxs)(t.Z,{direction:"vertical",children:[(0,b.jsx)(x.ZP,{size:"small",onClick:()=>a(JSON.stringify(n,null,2)),children:"Complete Item"}),(0,b.jsx)(x.ZP,{size:"small",onClick:()=>a(n.name.en),children:"EN Name"}),(0,b.jsx)(x.ZP,{size:"small",onClick:()=>a(n.name.pt),children:"PT Name"}),(0,b.jsx)(x.ZP,{size:"small",onClick:()=>a(JSON.stringify((e=>({id:e.id,type:"item",header:{title:{en:"Item",pt:"Item"},iconId:"2077"},metadata:{level:"basic",keyword:(0,y.snakeCase)(e.name.en).toUpperCase()},content:{itemId:e.id,caption:e.name}}))(n),null,2)),children:"Escape Room Item"})]}),title:"Copy",trigger:"click",open:i,onOpenChange:s,children:(0,b.jsx)(x.ZP,{type:"text",icon:(0,b.jsx)(I.Z,{})})})}var U=i(4290),F=i(2228);function J(){var e;const{queryParams:n}=(0,k.K)(),i=null!==(e=n.get("type"))&&void 0!==e?e:"all",{listing:s}=S(),{page:t,pagination:a}=(0,U.e)({data:s,resetter:i});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(l.Z.Title,{level:2,children:["Listing - ",(0,y.capitalize)(i)," items (",s.length,")"]}),(0,b.jsx)(F.N,{pagination:a,children:(0,b.jsx)(d.Z,{gutter:[16,16],className:"my-4",children:t.map((e=>(0,b.jsx)(c.Z,{xs:24,sm:24,md:12,lg:6,xl:4,children:(0,b.jsx)(E,{item:e})},e.id)))})})]})}var L=i(7128),B=i(6173),V=i(7018),K=i(1958),W=i(959);const H={id:"",name:{en:"",pt:""},groups:[]};function q(e){let{isModalOpen:n,handleOk:i,handleCancel:s,newId:t}=e;const[a]=(0,Z.useState)((0,y.cloneDeep)({...H,id:t}));return(0,b.jsx)(W.Z,{title:"Add new item",open:n,onOk:i,onCancel:s,children:(0,b.jsx)(E,{item:a,editMode:!0})})}function A(){const[e,n]=(0,Z.useState)(!1),{newId:i}=S();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x.ZP,{block:!0,onClick:()=>{n(!0)},children:"Add New Item"}),e&&(0,b.jsx)(q,{isModalOpen:e,handleOk:()=>{n(!1)},handleCancel:()=>{n(!1)},newId:i},i)]})}var G=i(5850),Q=i(7340);function X(){var e;const{isDirty:n,save:i,items:s,decks:t,itemsToUpdate:a,isSaving:l}=S(),{queryParams:d,is:c,addParam:r}=(0,k.K)(),o=(0,Z.useMemo)((()=>{const e=(0,y.orderBy)(t.map((e=>{let{value:n}=e;return{label:(0,y.capitalize)(n),value:n}})),"label"),n=e.map((e=>{let{label:n,value:i}=e;return{label:"NOT ".concat(n),value:"!".concat(i)}}));return[...e,...n]}),[t]);return(0,b.jsxs)(K.Pd,{children:[(0,b.jsxs)(p.Z,{vertical:!0,gap:6,children:[(0,b.jsx)(Q.k,{isDirty:n,dirt:JSON.stringify(a),onSave:i,isSaving:l}),(0,b.jsx)(V.o,{data:()=>function(e){return(0,G.Tj)(Object.values(e).reduce(((e,n)=>{var i;return n.decks=(null!==(i=null===n||void 0===n?void 0:n.decks)&&void 0!==i?i:[]).sort(),0===n.decks.length?(delete n.decks,e[n.id]=n,e):(n.decks.includes("thing")&&1===n.name.en.split(" ").length&&1===n.name.pt.split(" ").length&&((n.decks.includes("evidence")||n.decks.includes("dream")||n.decks.includes("alien")||n.decks.includes("manufactured"))&&(n.decks=n.decks.filter((e=>"thing"!==e))),e[n.id]=n),e[n.id]=n,e)}),{}))}(s),fileName:"items.json",disabled:n,block:!0})]}),(0,b.jsx)(L.Z,{}),(0,b.jsx)(B.Do,{label:"Show Search",value:!c("hideSearch"),onChange:e=>r("hideSearch",e?"":"true","")}),(0,b.jsx)(B.Do,{label:"Show Randomizer",value:c("showRandomizer"),onChange:e=>r("showRandomizer",e?"true":"","")}),(0,b.jsx)(B.Do,{label:"Verify Thing",value:c("showVerifyThing"),onChange:e=>r("showVerifyThing",e?"true":""),className:"full-width m-0"}),(0,b.jsx)(B.zE,{label:"Deck",value:null!==(e=d.get("deck"))&&void 0!==e?e:"all",onChange:e=>r("deck",e,"all"),options:[{label:"All",value:"all"},{label:"NSFW",value:"nsfw"},{label:"SFW",value:"!nsfw"},...o,{label:"No decks",value:"!all"}]}),(0,b.jsx)(L.Z,{}),(0,b.jsx)(A,{})]})}var Y=i(2326),$=i(1583),ee=i(5657);function ne(){const{listing:e}=S(),[n,i]=(0,Z.useState)([]),s=(0,N._)(),[a,d]=(0,Z.useState)(5);return(0,b.jsxs)("div",{children:[(0,b.jsxs)(l.Z.Title,{level:2,children:["Randomized Sample"," ",(0,b.jsx)(x.ZP,{size:"small",icon:(0,b.jsx)(ee.Z,{}),onClick:()=>{const n=(0,y.chunk)((0,y.sampleSize)(e,6*(0,y.random)(4,6)),6).map((e=>e.map((e=>e.name.en)).join(", "))).map(((e,n)=>"".concat(n+1,") ").concat(e))).join("\n");s(n)},children:"MJ"})]}),(0,b.jsxs)(p.Z,{gap:12,children:[(0,b.jsx)(u.Z.Item,{label:"Quantity"}),(0,b.jsx)("div",{children:(0,b.jsx)(Y.Z,{min:3,max:15,value:a,onChange:e=>d(Number(e)),style:{minWidth:"100px"}})}),(0,b.jsx)(x.ZP,{onClick:()=>{i((0,y.sampleSize)(e,a))},type:"primary",children:"Get Sample"}),(0,b.jsx)($.Z.Button,{menu:{items:[{label:"Copy IDs",key:"copy_ids"},{label:"Copy Names EN",key:"copy_names_en"},{label:"Copy Names PT",key:"copy_names_pt"}],onClick:e=>{let{key:i}=e;if("copy_ids"!==i)if("copy_names_en"!==i)if("copy_names_pt"!==i);else{const e=n.map((e=>e.name.pt)).join(", ");s(e)}else{const e=n.map((e=>e.name.en)).join(", ");s(e)}else{const e=n.map((e=>e.id));s(JSON.stringify(e))}}},disabled:0===n.length,onClick:()=>s(JSON.stringify(n,null,2)),icon:(0,b.jsx)(ee.Z,{}),children:"Copy"})]}),(0,b.jsx)(t.Z,{wrap:!0,className:"my-4",children:n.map((e=>(0,b.jsx)(E,{item:e,simplified:!0},e.id)))}),(0,b.jsx)(L.Z,{})]})}var ie=i(8178);function se(){const{items:e,isLoading:n,isSaving:i}=S(),[s,a]=(0,Z.useState)(null);return(0,b.jsxs)(Z.Fragment,{children:[(0,b.jsx)(l.Z.Title,{level:2,children:"Search for an item"}),(0,b.jsx)("div",{children:(0,b.jsx)(ie.i,{items:e,isPending:n||i,onFinish:n=>a(e[n])})}),Boolean(s)&&(0,b.jsx)(t.Z,{direction:"vertical",className:"my-4",children:(0,b.jsx)(E,{item:s})},null===s||void 0===s?void 0:s.id),(0,b.jsx)(L.Z,{})]},"item-search-".concat(n))}var te=i(4562);function ae(){const{isLoading:e,error:n,hasResponseData:i}=S(),{is:l}=(0,k.K)();return(0,b.jsx)(K.Xg,{title:"Items",subtitle:"Listing",children:(0,b.jsxs)(s.Z,{hasSider:!0,children:[(0,b.jsx)(te.p,{children:(0,b.jsx)(X,{})}),(0,b.jsx)(s.Z.Content,{className:"content",children:(0,b.jsxs)(a.T,{isLoading:e,error:n,hasResponseData:i,children:[!e&&(0,b.jsxs)(t.Z,{size:"large",children:[!l("hideSearch")&&(0,b.jsx)(se,{}),l("showRandomizer")&&(0,b.jsx)(ne,{})]}),(0,b.jsx)(J,{})]})})]})})}const le=function(){return(0,b.jsx)(C,{children:(0,b.jsx)(ae,{})})}}}]);
//# sourceMappingURL=Items.ca498fca.chunk.js.map