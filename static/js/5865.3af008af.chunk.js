(self.webpackChunktd_admin=self.webpackChunktd_admin||[]).push([[5865],{8866:(e,t,n)=>{"use strict";n.d(t,{N:()=>r});var s=n(8252),a=n(184);function r(e){let{children:t,level:n,...r}=e;return(0,a.jsx)(s.Z.Title,{level:null!==n&&void 0!==n?n:3,...r,children:t})}},3166:(e,t,n)=>{"use strict";n.d(t,{tj:()=>E,xh:()=>m,H:()=>N,zE:()=>g,Do:()=>p,Th:()=>I,F6:()=>r});n(8866);var s=n(3733),a=n(184);const r=e=>{let{children:t,active:n=!1,activeClass:r="",className:i="",hoverType:c="scale",...o}=e;return(0,a.jsx)("button",{className:(0,s.Z)("transparent-button","transparent-button--".concat(c),n&&(r||"transparent-button--active"),i),...o,children:t})};var i=n(5225),c=n(5437),o=n(4003),l=n(5922),d=n(9862),u=n(4248),h=n(1431);function g(e){let{label:t,value:n,onChange:s,options:r,placeholder:o}=e;return(0,a.jsx)(i.Z.Item,{label:t,children:(0,a.jsxs)(c.Z,{style:{minWidth:"150px"},onChange:s,value:n,children:[o&&(0,a.jsx)(c.Z.Option,{value:"",disabled:!0,children:"placeholder"}),r.map((e=>"object"===typeof e?(0,a.jsx)(c.Z.Option,{value:e.value,children:e.label},"".concat(t,"-").concat(e.value)):(0,a.jsx)(c.Z.Option,{value:e,children:e},"".concat(t,"-").concat(e))))]})})}function m(e){let{label:t,value:n,onChange:s,min:r=0,max:c=100,step:l}=e;return(0,a.jsx)(i.Z.Item,{label:t,children:(0,a.jsx)(o.Z,{min:r,max:c,value:n,onChange:e=>s(null!==e&&void 0!==e?e:c),style:{minWidth:"150px",width:"100%"},step:l})})}function p(e){let{label:t,value:n,onChange:s,className:r,disabled:c}=e;return(0,a.jsx)(i.Z.Item,{label:t,valuePropName:"checked",className:r,children:(0,a.jsx)(l.Z,{checked:n,onChange:s,size:"small",disabled:c})})}function E(e){let{label:t,value:n,onChange:s,disabled:r,className:c}=e;return(0,a.jsx)(i.Z.Item,{label:t,valuePropName:"checked",className:c,children:(0,a.jsx)(d.Z,{checked:n,onChange:e=>s(e.target.checked),disabled:r})})}function N(e){let{value:t,label:n,onChange:s,options:r}=e;return(0,a.jsx)(i.Z.Item,{label:n,layout:r.length>2?"vertical":"horizontal",children:(0,a.jsx)(u.Z,{block:!0,value:t,onChange:s,options:r.map((e=>({label:(0,a.jsx)(h.Z,{arrow:!0,trigger:"hover",title:e.title,children:e.icon}),value:e.value})))})})}var S=n(952),x=n(7965);function T(e){let{isLoading:t,isIdle:n,error:s,isDirty:r,isError:i,hasResponseData:c}=e;return n?(0,a.jsx)(S.Z,{children:"No Data yet"}):t?(0,a.jsx)(S.Z,{color:"blue",children:"Loading..."}):s||i?(0,a.jsx)(S.Z,{color:"red",children:"Error"}):r?(0,a.jsx)(S.Z,{color:"orange",children:"Modified"}):c?(0,a.jsx)(S.Z,{color:"green",children:"Loaded"}):(0,a.jsx)(S.Z,{children:"No Data"})}function I(e){return(0,a.jsx)(x.Pd,{children:(0,a.jsx)(i.Z.Item,{label:"Status",children:(0,a.jsx)(T,{...e})})})}},2128:(e,t,n)=>{"use strict";n.d(t,{T:()=>o});var s=n(468),a=n(3990),r=n(2703),i=n(4664),c=n(184);function o(e){let{isLoading:t,isIdle:n,error:o,hasResponseData:l,children:d}=e;return!n&&t?(0,c.jsx)(s.Z,{tip:"Loading",children:d}):o?(0,c.jsx)(a.Z.Content,{className:"content content-center",children:(0,c.jsx)(r.Z,{message:"Error",description:o.message,type:"error",showIcon:!0})}):n||!1===l?(0,c.jsx)(a.Z.Content,{className:"content content-center",children:(0,c.jsx)(i.Z,{})}):(0,c.jsx)(c.Fragment,{children:d})}},6422:(e,t,n)=>{"use strict";n.d(t,{v:()=>u});var s=n(5225),a=n(5437),r=n(2556),i=n(2791),c=n(4766),o=n(6591),l=n(7965),d=n(184);function u(e){var t,n,u;let{resourceNames:h}=e;const{queryParams:g,addParam:m}=(0,c.K)(),[p]=s.Z.useForm(),[E,N]=(0,i.useState)(null!==(t=g.get("resourceName"))&&void 0!==t?t:"");return(0,d.jsx)(l.Pd,{children:(0,d.jsxs)(s.Z,{layout:"vertical",onFinish:e=>{const t=o.S.includes(e.resourceName);m("language",t?null:e.language),m("resourceName",e.resourceName)},size:"small",form:p,initialValues:{resourceName:null!==(n=g.get("resourceName"))&&void 0!==n?n:"",language:null!==(u=g.get("language"))&&void 0!==u?u:""},children:[(0,d.jsx)(s.Z.Item,{label:"Resource",name:"resourceName",children:(0,d.jsx)(a.Z,{style:{minWidth:"150px"},value:g.get("resourceName"),onChange:e=>N(e),children:h.map((e=>(0,d.jsx)(a.Z.Option,{value:e,children:e},e)))})}),(0,d.jsx)(s.Z.Item,{label:"Language",name:"language",children:(0,d.jsx)(a.Z,{style:{minWidth:"150px"},disabled:o.S.includes(E),children:o.a2.map((e=>(0,d.jsx)(a.Z.Option,{value:e,children:e},e)))})}),(0,d.jsx)(s.Z.Item,{children:(0,d.jsx)(r.ZP,{type:"primary",htmlType:"submit",children:"Load"})})]})})}},3115:(e,t,n)=>{"use strict";n.d(t,{X:()=>l});var s=n(1105),a=n(2791),r=n(5850),i=n(6591),c=n(8866),o=n(184);function l(e){let{response:t,property:n}=e;const[l,d]=(0,a.useState)({});return(0,o.jsxs)("div",{className:"parser-flex-column",children:[(0,o.jsx)(c.N,{children:"Search Similar"}),(0,o.jsx)(s.Z,{type:"text",onChange:e=>{const{value:s=""}=e.target,a=(0,r.bU)(s.trim().toLowerCase());a&&a.length>=i.dX?d((0,r.Kn)(a,t,n)):d({})},placeholder:"Type here"}),(0,o.jsx)(s.Z.TextArea,{name:"search-results",id:"",cols:10,rows:10,readOnly:!0,value:JSON.stringify(l,null,4)})]})}},1211:(e,t,n)=>{"use strict";n.d(t,{j:()=>l});var s=n(398),a=n(2010),r=n(468),i=n(1431),c=n(2606),o=n(184);function l(e){let{id:t,source:n,width:l=75,padding:d=6,title:u,className:h}=e;const{getUrl:g}=(0,c.n)("sprites"),{isLoading:m,data:p,isError:E}=(0,a.a)({queryKey:["sprite",n],queryFn:async()=>{const e=await fetch("".concat(g("sprites"),"/").concat(n,".svg"));return await e.text()},enabled:!!t&&!!n}),N=l-12;if(m)return(0,o.jsx)("span",{style:{width:"".concat(N,"px"),height:"".concat(N,"px"),padding:d,display:"grid",placeItems:"center"},className:h,children:(0,o.jsx)(r.Z,{})});const S=p;return E||!S?(0,o.jsx)("span",{style:{width:"".concat(N,"px"),height:"".concat(N,"px"),padding:d,display:"grid",placeItems:"center"},className:h,children:(0,o.jsx)(s.Z,{})}):(0,o.jsxs)("svg",{viewBox:"0 0 512 512",style:{width:"".concat(N,"px"),height:"".concat(N,"px"),padding:d},className:h,children:[(0,o.jsx)("use",{xlinkHref:"#".concat(t),dangerouslySetInnerHTML:{__html:S}}),(0,o.jsx)("foreignObject",{x:"0",y:"0",width:"100%",height:"100%",children:u&&(0,o.jsx)(i.Z,{title:u,children:(0,o.jsx)("div",{style:{background:"transparent",width:"100%",height:"100vh"}})})})]})}},7375:(e,t,n)=>{"use strict";n.d(t,{y:()=>i});var s=n(3733),a=n(1211),r=n(184);function i(e){let{id:t,width:n=75,className:i}=e;const[c,o]=(e=>{const t=e.match(/\d+/),n=t?parseInt(t[0],10):0,s="good-".concat(n),a=64*Math.ceil(n/64);return["warehouse-goods-".concat(a),s]})(t);return(0,r.jsx)("div",{className:(0,s.Z)("sprite",i),style:{width:"".concat(n,"px"),height:"".concat(n,"px")},children:(0,r.jsx)(a.j,{source:c,id:o,width:n})})}},2997:(e,t,n)=>{"use strict";n.d(t,{o$:()=>i,dy:()=>c,rZ:()=>d,ck:()=>h});var s=n(1211),a=n(3733),r=n(184);function i(e){let{id:t,width:n=75,className:i=""}=e;return(0,r.jsx)("div",{className:(0,a.Z)("sprite",i),style:{width:"".concat(n,"px"),height:"".concat(n,"px")},children:(0,r.jsx)("svg",{viewBox:"0 0 512 512",style:{width:"".concat(n-12,"px"),height:"".concat(n-12,"px")},children:(0,r.jsx)(s.j,{source:"alien-signs",id:t,width:n})})})}function c(e){let{id:t,width:n,className:i}=e;const c=t.startsWith("emoji")?t:"emoji-".concat(t);return(0,r.jsx)("div",{className:(0,a.Z)("sprite",i),style:{width:"".concat(n,"px"),height:"".concat(n,"px")},children:(0,r.jsx)(s.j,{source:"emojis",id:c,width:n})})}var o=n(763);const l=(0,o.memoize)((e=>{const t=e.match(/\d+/),n=t?parseInt(t[0],10):0,s="glyph-".concat(n),a=128*Math.ceil(n/128);return["glyphs-".concat(a),s]}));function d(e){let{id:t,width:n,className:i}=e;const[c,o]=l(t);return(0,r.jsx)("div",{className:(0,a.Z)("sprite",i),style:{width:"".concat(n,"px"),height:"".concat(n,"px")},children:(0,r.jsx)(s.j,{source:c,id:o,width:n,padding:0})})}const u=(0,o.memoize)((e=>{const t=e.match(/\d+/),n=t?parseInt(t[0],10):0,s="item-".concat(n),a=64*Math.ceil(n/64);return["items-".concat(a),s]}));function h(e){let{id:t,width:n,className:i,title:c}=e;const[o,l]=u(t);return(0,r.jsx)("div",{className:(0,a.Z)("sprite",i),style:{width:"".concat(null!==n&&void 0!==n?n:75,"px"),height:"".concat(null!==n&&void 0!==n?n:75,"px")},children:(0,r.jsx)(s.j,{source:o,id:l,width:n,title:c})})}},2606:(e,t,n)=>{"use strict";function s(e){let t="https://www.kavispires.com",n="";switch(e){case"images":n="td-images/images";break;case"sprites":n="td-sprites";break;case"resources":n="td-resources/resources";break;case"classic":n="td-classic/images";break;default:throw new Error("Invalid library")}return{baseUrl:t,getUrl:e=>[t,n,e].join("/")}}n.d(t,{n:()=>s})},4766:(e,t,n)=>{"use strict";n.d(t,{K:()=>r});var s=n(2791),a=n(1087);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[t,n]=(0,a.lr)(),r=(e,s,a)=>{void 0===s||""===s||s===a?t.delete(e):t.set(e,String(s)),n(t)},i=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.entries(e).forEach((e=>{let[n,a]=e;s[n]===a?t.delete(n):t.set(n,String(a))})),n(t)},c=e=>{t.delete(e),n(t)},o=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"true";return t.get(e)===String(n)};return(0,s.useEffect)((()=>{Object.entries(e).forEach((e=>{let[n,s]=e;t.has(n)||r(n,s)}))}),[]),{addParam:r,addParams:i,removeParam:c,queryParams:t,is:o}}},3473:(e,t,n)=>{"use strict";n.d(t,{R:()=>c});var s=n(6591),a=n(2010),r=n(2606),i=n(4766);function c(e){var t;const{queryParams:n}=(0,i.K)(),{getUrl:c}=(0,r.n)("resources"),o=null!==(t=n.get("resourceName"))&&void 0!==t?t:"",l=n.get("language"),d=!!o&&e.includes(o),{data:u,isLoading:h,error:g}=(0,a.a)({queryKey:["resource",o,l],queryFn:async()=>{const e=l&&!s.S.includes(o)?c("".concat(o,"-").concat(l,".json")):c("".concat(o,".json")),t=await fetch(e);return t.body?await t.json():{}},enabled:d});return{resourceName:o,language:l||null,response:u,isLoading:h,enabled:d,error:g,hasResponseData:Boolean(u)}}},6591:(e,t,n)=>{"use strict";n.d(t,{Hn:()=>p,NL:()=>E,S:()=>o,Ud:()=>S,VC:()=>g,ZI:()=>m,_9:()=>N,a2:()=>l,bs:()=>h,dX:()=>i,k$:()=>d,mj:()=>c,pZ:()=>u});var s=n(2997),a=n(7375),r=n(763);const i=2,c={ADJECTIVES:"adjectives",ALIEN_ITEMS:"alien-items",ARTE_RUIM_CARDS:"arte-ruim-cards",ARTE_RUIM_GROUPS:"arte-ruim-groups",ARTE_RUIM_PAIRS:"arte-ruim-pairs",CATEGORIES:"categories",CHALLENGES:"challenges",CHARACTERS:"characters",CHOICES:"choices",CITY_LOCATIONS:"city-locations",COLORS:"colors",CONCEPTS:"concepts",CONTENDERS:"contenders",CRIME_EVIDENCE:"crime-evidence",CRIME_SCENES:"crime-scenes",CRIME_WEAPONS:"crime-weapons",DATING_CANDIDATE:"dating-candidate",DATING_CANDIDATE_BODIES:"dating-candidate-bodies",DATING_CANDIDATE_HEADS:"dating-candidate-heads",DIAGRAM_TOPICS:"diagram-topics",DILEMMAS:"dilemmas",DRAWING_WORDS:"drawing-words",EMOTIONS:"emotions",GROUP_QUESTIONS:"group-questions",ITEMS_ATTRIBUTES:"items-attributes",MONSTER_ORIENTATION:"monster-orientation",MOVIE_REVIEWS:"movie-reviews",MOVIES:"movies",NAMING_PROMPTS:"naming-prompts",OBJECT_FEATURES:"object-features",QUANTITATIVE_QUESTIONS:"quantitative-questions",SCENARIOS:"scenarios",SINGLE_WORDS:"single-words",SPECTRUMS:"spectrums",SPY_LOCATIONS:"spy-locations",SPY_QUESTIONS:"spy-questions",SUSPECTS:"suspects",TEENAGE_RUMORS:"teenage-rumors",TEENAGE_STUDENTS:"teenage-students",TESTIMONY_QUESTIONS:"testimony-questions",THEME_WORDS:"theme-words",THING_PROMPTS:"thing-prompts",THINGS_QUALITIES:"things-qualities",TOPICS:"topics",TREE_WORDS:"tree-words",TWEETS:"tweets",WAREHOUSE_BOSS_IDEAS:"warehouse-boss-ideas",WARNING_SIGNS_DESCRIPTORS:"warning-signs-descriptors",WARNING_SIGNS_SUBJECTS:"warning-signs-subjects"},o=[c.ALIEN_ITEMS,c.CITY_LOCATIONS,c.CONTENDERS,c.CRIME_EVIDENCE,c.CRIME_SCENES,c.CRIME_WEAPONS,c.DATING_CANDIDATE_BODIES,c.DATING_CANDIDATE_HEADS,c.ITEMS_ATTRIBUTES,c.MONSTER_ORIENTATION,c.OBJECT_FEATURES,c.SUSPECTS,c.TEENAGE_RUMORS,c.TEENAGE_STUDENTS],l=["pt","en"],d="pt",u={adjectives:"text","arte-ruim-cards":"text","arte-ruim-groups":"theme","arte-ruim-pairs":"values",categories:"text",challenges:"text",characters:"text",contenders:"","crime-tiles":"","diagram-topics":"text","galeria-de-sonhos":"text","group-questions":"text","linhas-cruzadas":"text","naming-prompts":"text",spectrums:"","single-words":"text","spy-locations":"","spy-questions":"","testimony-questions":"question","thing-prompts":"text",topics:"text"},h=(0,r.keyBy)([{key:"alien-signs",name:"Alien Signs",prefix:"sign",quantity:38,startAt:0,component:s.o$},{key:"emojis",name:"Emojis",prefix:"emoji",quantity:30,startAt:1,component:s.dy},{key:"glyphs",name:"Glyphs",prefix:"glyph",quantity:365,startAt:1,component:s.rZ},{key:"warehouse-goods",name:"Warehouse Goods",prefix:"good",quantity:256,startAt:1,component:a.y}],"key"),g=[{label:"Any",value:""},{label:"= 0",value:0},{label:"< 3",value:3},{label:"< 5",value:5},{label:"< 10",value:10}],m=[{label:"9",value:9},{label:"15",value:15},{label:"30",value:30},{label:"50",value:50},{label:"100",value:100}],p=[{label:"Small",value:100},{label:"Medium",value:150},{label:"Large",value:200},{label:"X-Large",value:250}],E={OPPOSITE:-10,UNRELATED:-3,UNCLEAR:-1,RELATED:5,DETERMINISTIC:10},N=((0,r.invert)(E),{OPPOSITE:"^",UNRELATED:"!",UNCLEAR:"~",RELATED:"+",DETERMINISTIC:"*"}),S=Object.keys(E).map((e=>({value:e.toLowerCase(),label:(0,r.capitalize)(e)})))},5850:(e,t,n)=>{"use strict";n.d(t,{Dc:()=>v,E4:()=>I,Kn:()=>l,Mg:()=>S,R1:()=>d,Tj:()=>h,VL:()=>E,ZN:()=>u,aS:()=>m,bU:()=>c,dK:()=>N,d_:()=>g,sB:()=>x,tt:()=>T,xE:()=>p,zJ:()=>o});var s=n(763),a=n(6591),r=n(1291),i=n.n(r);function c(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";const n={},s={};return Object.values(e).forEach((e=>{e[t]||console.error("Property ".concat(t," does not exist in ").concat(e));const a=c(e[t].toLowerCase());n[a]?(void 0===s[a]&&(s[a]=[n[a].id]),s[a].push(e.id)):n[a]=e})),s},l=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";const s={},r=c(e.trim().toLowerCase());return!r||r.length<a.dX?{}:(Object.values(t).forEach((t=>{const a="string"===typeof t[n]?t[n]:JSON.stringify(t[n]),o=c(a.toLowerCase());(o.includes(r)||i().compareTwoStrings(e,o)>.5)&&(s[t.id]=a)})),s)},d=e=>Array.from(new Set(e));function u(e,t){const n=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=document.createElement("a");s.href=window.URL.createObjectURL(n),s.download=t,s.click(),window.URL.revokeObjectURL(s.href)}const h=e=>function e(t){if((0,s.isObject)(t)&&!Array.isArray(t)){const n=Object.keys(t).filter((e=>["id","name","title","type"].includes(e))).concat(Object.keys(t).filter((e=>!["id","name","title","type"].includes(e))).sort());return(0,s.chain)(t).toPairs().sortBy((e=>{let[t,s]=e;return n.indexOf(t)})).map((t=>{let[n,s]=t;return[n,e(s)]})).fromPairs().value()}return t}(e),g=e=>Object.keys(e).reduce(((t,n)=>(t[n]=JSON.parse(e[n]),t)),{}),m=e=>Object.keys(e).reduce(((t,n)=>(t[n]=JSON.stringify(e[n]),t)),{}),p=()=>{const e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),a=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return"".concat(t,"/").concat(n,"/").concat(s," ").concat(a,":").concat(r)},E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.cloneDeep)((0,s.merge)({id:"",name:{en:"",pt:""},groups:[],attributes:{}},e))},N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.cloneDeep)((0,s.merge)({id:"",attributes:{}},e))},S=(e,t,n)=>{const r=(0,s.orderBy)(Object.values(t),["priority","id"],["asc","asc"]).map((e=>e.id));function i(e,t){return(0,s.orderBy)(e,(e=>r.indexOf(e)),["asc"]).map((e=>"".concat(t).concat(e)))}let c=[],o=[],l=[],d=[],u=[];return Object.entries(e.attributes).forEach((e=>{let[n,s]=e;if(t[n])switch(s){case a.NL.OPPOSITE:c.push(n);break;case a.NL.DETERMINISTIC:o.push(n);break;case a.NL.RELATED:l.push(n);break;case a.NL.UNRELATED:d.push(n);break;case a.NL.UNCLEAR:default:u.push(n)}})),[...i(c,a._9.OPPOSITE),...i(o,a._9.DETERMINISTIC),...i(l,a._9.RELATED),...n?[]:i(d,a._9.UNRELATED),...n?[]:i(u,a._9.UNCLEAR)]},x=(0,s.memoize)((e=>{if(3===e.length)return{key:e,className:"",text:""};const t=e[0];return{key:e.slice(1,4),className:{[a._9.DETERMINISTIC]:"deterministic",[a._9.UNRELATED]:"unrelated",[a._9.UNCLEAR]:"unclear",[a._9.OPPOSITE]:"opposite"}[t],text:{[a._9.DETERMINISTIC]:"very",[a._9.UNRELATED]:"not",[a._9.UNCLEAR]:"maybe",[a._9.OPPOSITE]:"very not"}[t]}})),T=(e,t,n)=>e.filter((e=>!(!t&&e.includes(a._9.UNCLEAR))&&!(!n&&e.includes(a._9.UNRELATED)))),I=e=>(0,s.orderBy)(e,(e=>Number(e))),v=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;await new Promise((t=>setTimeout(t,e)))}},1291:e=>{function t(e,t){if((e=e.replace(/\s+/g,""))===(t=t.replace(/\s+/g,"")))return 1;if(e.length<2||t.length<2)return 0;let n=new Map;for(let a=0;a<e.length-1;a++){const t=e.substring(a,a+2),s=n.has(t)?n.get(t)+1:1;n.set(t,s)}let s=0;for(let a=0;a<t.length-1;a++){const e=t.substring(a,a+2),r=n.has(e)?n.get(e):0;r>0&&(n.set(e,r-1),s++)}return 2*s/(e.length+t.length-2)}e.exports={compareTwoStrings:t,findBestMatch:function(e,n){if(!function(e,t){return"string"===typeof e&&(!!Array.isArray(t)&&(!!t.length&&!t.find((function(e){return"string"!==typeof e}))))}(e,n))throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");const s=[];let a=0;for(let i=0;i<n.length;i++){const r=n[i],c=t(e,r);s.push({target:r,rating:c}),c>s[a].rating&&(a=i)}const r=s[a];return{ratings:s,bestMatch:r,bestMatchIndex:a}}}}}]);
//# sourceMappingURL=5865.3af008af.chunk.js.map