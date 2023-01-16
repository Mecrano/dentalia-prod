(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{296:function(e){function l(e,l,t){function a(){var u=Date.now()-r;u<l&&u>=0?n=setTimeout(a,l-u):(n=null,t||(o=e.apply(i,s),i=s=null))}null==l&&(l=100);var n,s,i,r,o,u=function(){i=this,s=arguments,r=Date.now();var u=t&&!n;return n||(n=setTimeout(a,l)),u&&(o=e.apply(i,s),i=s=null),o};return u.clear=function(){n&&(clearTimeout(n),n=null)},u.flush=function(){n&&(o=e.apply(i,s),i=s=null,clearTimeout(n),n=null)},u}l.debounce=l,e.exports=l},8312:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5224)}])},5224:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return M}});var a=t(5893),n=t(7294),s=t(5675),i=t.n(s);let r={views:[1],loading:!1,flowType:null,user:null,appointment:null},o=(e,l)=>{let{views:t,flowType:a,loading:n,user:s,appointment:i}=e,{type:r,args:o}=l;switch(r){case"SET_NEXT_VIEW":{let{view:u}=o;return{views:[u,...t],loading:!1,flowType:a,user:s,appointment:i}}case"SET_BACK_VIEW":return{views:t.slice(1),loading:!1,flowType:a,user:s,appointment:i};case"SET_FLOW_TYPE":{let{flowType:c}=o;return{flowType:c,views:t,loading:n,user:s,appointment:i}}case"SET_LOADING":{let{loading:d}=o;return{loading:d,flowType:a,views:t,user:s,appointment:i}}case"SET_USER":{let{user:x}=o;return{user:x,views:t,loading:n,flowType:a,appointment:i}}case"SET_APPOINTMENT":{let{appointment:m}=o;return{appointment:m,user:s,views:t,loading:n,flowType:a}}default:return{views:t,flowType:a,loading:n,user:s,appointment:i}}},u=(0,n.createContext)({state:r,dispatch:()=>{}}),c=e=>{let{children:l}=e,[t,s]=(0,n.useReducer)(o,r);return(0,a.jsx)(u.Provider,{value:{state:t,dispatch:s},children:l})};var d=function(){return(0,n.useContext)(u)},x=t(9177),m=t.n(x);let p=e=>{let{className:l,items:t,name:n,onChange:s,value:i}=e;return(0,a.jsx)("div",{className:"".concat(l," flex items-center flex-col gap-4 lg:flex-row lg:gap-6"),children:null==t?void 0:t.map(e=>{let{title:l,value:t}=e;return(0,a.jsxs)("label",{className:"".concat(m().radio," w-full flex bg-white rounded-md p-4 cursor-pointer lg:max-w-fit lg:min-w-[320px]"),children:[(0,a.jsx)("input",{className:"appearance-none m-0",type:"radio",name:n,onChange:()=>s(t),checked:i===t}),(0,a.jsx)("span",{className:"ml-8 text-gray",children:l})]},t)})})};var v=t(8267),g=t(4461),h=t.n(g);let f=()=>{let{state:{flowType:e,loading:l},dispatch:t}=d(),n=e=>{t({type:"SET_FLOW_TYPE",args:{flowType:e}})},s=()=>{t({type:"SET_LOADING",args:{loading:!0}}),t({type:"SET_NEXT_VIEW",args:{view:"schedule"===e?2:"x"}})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"text-h3 font-medium text-blue lg:text-h1",children:"\xa1Bienvenid@!"}),(0,a.jsx)("p",{className:"font-medium text-gray",children:"Existe una cl\xednica dentalia cerca ti."}),(0,a.jsx)("p",{className:"".concat(h().bottomLine," mt-8 font-medium text-light-blue"),children:"Agenda tu experiencia en pocos minutos"}),(0,a.jsx)("p",{className:"mt-8 text-body font-medium text-gray",children:"Cu\xe9ntanos qu\xe9 deseas, marcando la opci\xf3n"}),(0,a.jsx)(p,{className:"mt-6 mb-4",items:[{title:"Agendar una cita",value:"schedule"},{title:"Reagendar o cancelar una cita",value:"reschedule"}],name:"welcome-view",value:e,onChange:n}),(0,a.jsx)(v.Z,{className:"w-full lg:max-w-xs",onClick:s,disabled:!e,loading:l,children:"Continuar"})]})};var w=t(296),j=t.n(w),N=t(9636),_=t.n(N);let T=e=>{let{className:l,placeholder:t,type:s="text",value:i,Icon:r=null,onChange:o,disabled:u}=e,[c,d]=(0,n.useState)(null!=i?i:""),x=e=>o(null!=e?e:""),m=(0,n.useCallback)(j()(x,200),[]);return(0,n.useEffect)(()=>{m(c)},[c,m]),(0,a.jsxs)("div",{className:"".concat(l," flex items-stretch justify-between"),children:[(0,a.jsx)("input",{className:"".concat(_().input," py-3 px-4 w-full"),type:s,value:c,placeholder:t,onChange:e=>{var l;return d(null==e?void 0:null===(l=e.target)||void 0===l?void 0:l.value)},disabled:u}),r?(0,a.jsx)("div",{className:"py-3 pr-4",children:(0,a.jsx)(r,{})}):null]})};var E=t(4164),C=t(1196),y=t.n(C);let b=e=>{let{step:l,maxSteps:t}=e,n=Array.from({length:t},(e,l)=>l+1);return(0,a.jsxs)("div",{className:"w-full flex items-center justify-between relative lg:pb-6",children:[null==n?void 0:n.map(e=>(0,a.jsx)("div",{className:"".concat(y().step," w-full ").concat(l>e?"text-light-blue":l===e?"text-[#5BA9DE]":"text-[#b0bac8]"," font-medium text-center relative pb-2"),children:"Paso ".concat(e)},e)),(0,a.jsx)("div",{className:"".concat(y().stepLine," absolute")})]})},A=e=>{let{step:l}=e,{dispatch:t}=d(),n=()=>{t({type:"SET_BACK_VIEW"})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{step:l,maxSteps:3}),(0,a.jsxs)(v.Z,{variant:"icon",className:"flex items-center justify-start gap-3 -ml-4 absolute -top-36 z-10 lg:my-7 lg:relative lg:top-0",onClick:n,children:[(0,a.jsx)(E.xC,{size:"33"}),(0,a.jsx)("span",{className:"font-medium text-mini lg:text-h4 text-blue",children:"Volver"})]})]})},S=e=>e&&/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e),I=()=>{let{state:{user:e,loading:l},dispatch:t}=d(),n=l=>{t({type:"SET_USER",args:{user:{...e,email:l}}})},s=()=>{if(!S(null==e?void 0:e.email))return null;t({type:"SET_LOADING",args:{loading:!0}}),t({type:"SET_NEXT_VIEW",args:{view:3}})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A,{step:1}),(0,a.jsx)(T,{className:"mb-6 lg:max-w-xs",type:"email",placeholder:"Correo electr\xf3nico",Icon:E.bV,value:null==e?void 0:e.email,onChange:n}),(0,a.jsx)(v.Z,{className:"w-full lg:max-w-xs",onClick:s,disabled:!S(null==e?void 0:e.email),loading:l,children:"Continuar"})]})};var O=t(7354),P=t.n(O);let L=e=>{var l,t;let{input:s,setInput:i,open:r,setOpen:o,search:u,placeholder:c,Icon:d,selectedOption:x,items:m}=e,p=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(r&&u){var e;null==p||null===(e=p.current)||void 0===e||e.focus()}},[r,u]),(0,a.jsxs)("div",{className:"".concat(P().dropdown," ").concat(r?P().open:""," cursor-pointer flex items-center justify-between py-3 px-4 bg-white"),onClick:()=>o(!r),children:[u&&r?(0,a.jsx)("input",{className:"w-full",placeholder:c,value:s,onChange:e=>{var t;return i(null!==(l=null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.value)&&void 0!==l?l:"")},ref:p}):(0,a.jsx)("span",{children:null!==(t=(()=>{var e;let{title:l}=null!==(e=null==m?void 0:m.find(e=>{let{value:l}=e;return l===x}))&&void 0!==e?e:{title:null};return l})())&&void 0!==t?t:c}),d?(0,a.jsx)("span",{children:(0,a.jsx)(d,{})}):(0,a.jsx)(E.e0,{})]})},k=e=>{let{className:l,placeholder:t,items:s,Icon:i=null,onChange:r,value:o,search:u}=e,[c,d]=(0,n.useState)(!1),[x,m]=(0,n.useState)(""),[p,v]=(0,n.useState)(null!=s?s:[]);return(0,n.useEffect)(()=>{x?v(s.filter(e=>{let{title:l}=e;return l.toLowerCase().indexOf(x.toLowerCase())>-1})):v(s)},[x,s]),(0,a.jsxs)("div",{className:"".concat(l," relative"),children:[(0,a.jsx)(L,{input:x,setInput:m,open:c,setOpen:d,search:u,placeholder:t,Icon:i,selectedOption:o,items:s}),(0,a.jsx)("div",{className:"absolute left-0 right-0 h-0 overflow-hidden bg-white cursor-pointer z-10",style:c?{height:"".concat(56*p.length,"px")}:{},children:null==p?void 0:p.map(e=>{let{title:l,value:t}=e;return(0,a.jsx)("div",{className:"p-4 hover:bg-[#DDECF7]",onClick:()=>{r(t),m(""),d(!1)},children:l},t)})})]})},D=()=>{var e,l;let{state:{user:t,loading:n,appointment:s},dispatch:i}=d(),r=e=>{i({type:"SET_APPOINTMENT",args:{appointment:{...s,reason:e}}})},o=()=>{i({type:"SET_LOADING",args:{loading:!0}}),i({type:"SET_NEXT_VIEW",args:{view:4}})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A,{step:1}),(0,a.jsxs)("div",{className:"block lg:flex lg:gap-6",children:[(0,a.jsx)(T,{className:"mb-6 w-full lg:max-w-xs",type:"email",placeholder:"Correo electr\xf3nico",Icon:E.bV,value:null!==(e=null==t?void 0:t.email)&&void 0!==e?e:"",onChange:()=>{},disabled:!0}),(0,a.jsx)(k,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Motivo de tu cita",items:[{title:"Revisi\xf3n y diagn\xf3stico",value:"Revisi\xf3n y diagn\xf3stico"},{title:"Limpieza",value:"Limpieza"},{title:"Dolor/ Emergencia",value:"Dolor/ Emergencia"},{title:"Tratamientos est\xe9ticos",value:"Tratamientos est\xe9ticos"},{title:"Tratamientos cl\xednicos",value:"Tratamientos cl\xednicos"}],value:null!==(l=null==s?void 0:s.reason)&&void 0!==l?l:null,onChange:r})]}),(0,a.jsx)(v.Z,{className:"w-full lg:max-w-xs",onClick:o,disabled:!(null==s?void 0:s.reason),loading:n,children:"Continuar"})]})},V=()=>{var e,l,t;let{state:{user:n,loading:s,appointment:i},dispatch:r}=d(),o=e=>{r({type:"SET_APPOINTMENT",args:{appointment:{...i,place:e}}})},u=e=>{r({type:"SET_USER",args:{user:{...n,postalCode:e}}})},c=e=>{r({type:"SET_APPOINTMENT",args:{appointment:{...i,date:e}}})},x=()=>{r({type:"SET_LOADING",args:{loading:!0}}),r({type:"SET_NEXT_VIEW",args:{view:5}})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A,{step:2}),(0,a.jsxs)("div",{className:"block lg:flex lg:gap-6",children:[(0,a.jsx)(k,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Ubica tu ciudad",search:!0,items:[{title:"Ciudad de M\xe9xico",value:"Ciudad de M\xe9xico"},{title:"Tijuana",value:"Tijuana"},{title:"Guadalajara",value:"Guadalajara"},{title:"Hermosillo",value:"Hermosillo"},{title:"Chihuahua",value:"Chihuahua"}],Icon:E.W1,value:null!==(e=null==i?void 0:i.place)&&void 0!==e?e:null,onChange:o}),(0,a.jsx)(k,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Ingresa tu c\xf3digo postal",search:!0,items:[{title:"ACOXPA Paseo Acoxpa",value:"ACOXPA Paseo Acoxpa"},{title:"ALTAVISTA Pabell\xf3n Altavista",value:"ALTAVISTA Pabell\xf3n Altavista"},{title:"BUENAVISTA F\xf3rum Buenavista",value:"BUENAVISTA F\xf3rum Buenavista"},{title:"COAPAGran Terraza Coapa",value:"COAPAGran Terraza Coapa"},{title:"COYOACANPunto MAQ",value:"COYOACANPunto MAQ"}],Icon:E._t,value:null!==(l=null==n?void 0:n.postalCode)&&void 0!==l?l:null,onChange:u})]}),(0,a.jsx)(k,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Eligir la fecha y hora",items:[{title:"Componente en construcci\xf3n",value:"Componente en construcci\xf3n"}],value:null!==(t=null==i?void 0:i.date)&&void 0!==t?t:null,onChange:c}),(0,a.jsx)(v.Z,{className:"w-full lg:max-w-xs",onClick:x,disabled:!((null==i?void 0:i.place)&&(null==n?void 0:n.postalCode)&&(null==i?void 0:i.date)),loading:s,children:"Continuar"})]})},F=()=>{var e;let{state:{loading:l,appointment:t},dispatch:n}=d(),s=e=>{n({type:"SET_APPOINTMENT",args:{appointment:{...t,person:e}}})},i=()=>{n({type:"SET_LOADING",args:{loading:!0}}),n({type:"SET_NEXT_VIEW",args:{view:6}})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A,{step:3}),(0,a.jsx)(p,{className:"mt-6 mb-4",items:[{title:"La cita es para mi",value:"selfAppointment"},{title:"La cita es para otra persona",value:"someOneElseAppointment"}],name:"welcome-view",value:null!==(e=null==t?void 0:t.person)&&void 0!==e?e:"",onChange:s}),(0,a.jsx)(v.Z,{className:"w-full lg:max-w-xs",onClick:i,disabled:!(null==t?void 0:t.person),loading:l,children:"Continuar"})]})},W=e=>{let{views:l}=e,[t]=l;switch(t){case 1:default:return(0,a.jsx)(f,{});case 2:return(0,a.jsx)(I,{});case 3:return(0,a.jsx)(D,{});case 4:return(0,a.jsx)(V,{});case 5:return(0,a.jsx)(F,{})}},X=()=>{let{state:{views:e}}=d();return(0,a.jsx)("form",{onSubmit:e=>(e.preventDefault(),!1),className:"w-full p-7 lg:p-10 relative",children:(0,a.jsx)(W,{views:e})})},G=()=>(0,a.jsx)(c,{children:(0,a.jsx)(X,{})});function M(){return(0,a.jsxs)("div",{className:"items-start lg:flex",children:[(0,a.jsx)("div",{className:"w-full lg:max-w-[30%] xl:max-w-[40%]",children:(0,a.jsx)(i(),{src:"/images/main-banner.png",alt:"Dentalia Banner",width:561,height:517,style:{width:"100%",height:"auto"}})}),(0,a.jsx)(G,{})]})}},7354:function(e){e.exports={dropdown:"styles_dropdown__O7SHg",open:"styles_open__u0Htm"}},1196:function(e){e.exports={step:"styles_step__oqn2i",stepLine:"styles_stepLine__TNXK9"}},4461:function(e){e.exports={bottomLine:"styles_bottomLine__h_vAA"}},9636:function(e){e.exports={input:"styles_input__IZevv"}},9177:function(e){e.exports={radio:"styles_radio__0ZDcm"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);