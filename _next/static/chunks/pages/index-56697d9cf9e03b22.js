(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{296:function(e){function t(e,t,n){function l(){var c=Date.now()-o;c<t&&c>=0?a=setTimeout(l,t-c):(a=null,n||(r=e.apply(i,s),i=s=null))}null==t&&(t=100);var a,s,i,o,r,c=function(){i=this,s=arguments,o=Date.now();var c=n&&!a;return a||(a=setTimeout(l,t)),c&&(r=e.apply(i,s),i=s=null),r};return c.clear=function(){a&&(clearTimeout(a),a=null)},c.flush=function(){a&&(r=e.apply(i,s),i=s=null,clearTimeout(a),a=null)},c}t.debounce=t,e.exports=t},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2674)}])},2674:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eE}});var l=n(5893),a=n(7294),s=n(5675),i=n.n(s);let o={views:[1],step:0,loading:!1,flowType:null,user:null,appointment:null},r=(e,t)=>{let{views:n,step:l,flowType:a,loading:s,user:i,appointment:o}=e,{type:r,args:c}=t;switch(r){case"SET_NEXT_VIEW":{let{view:u}=c;return{views:[u,...n],step:l,loading:!1,flowType:a,user:i,appointment:o}}case"SET_BACK_VIEW":return{views:n.slice(1),step:l,loading:!1,flowType:a,user:i,appointment:o};case"SET_STEP":{let{step:d}=c;return{views:n,step:d,loading:s,flowType:a,user:i,appointment:o}}case"SET_FLOW_TYPE":{let{flowType:m}=c;return{flowType:m,views:n,step:l,loading:s,user:i,appointment:o}}case"SET_LOADING":{let{loading:p}=c;return{loading:p,flowType:a,views:n,step:l,user:i,appointment:o}}case"SET_USER":{let{user:x}=c;return{user:x,views:n,step:l,loading:s,flowType:a,appointment:o}}case"SET_USER_INFO":return{user:{...i,...c},views:n,step:l,loading:s,flowType:a,appointment:o};case"SET_APPOINTMENT":{let{appointment:g}=c;return{appointment:g,user:i,views:n,step:l,loading:s,flowType:a}}case"SET_SOMEONE_ELSE_INFO":return{appointment:{...o,someOneElse:{...null==o?void 0:o.someOneElse,...c}},user:i,views:n,step:l,loading:s,flowType:a};default:return{views:n,step:l,flowType:a,loading:s,user:i,appointment:o}}},c=(0,a.createContext)({state:o,dispatch:()=>{}}),u=e=>{let{children:t}=e,[n,s]=(0,a.useReducer)(r,o);return(0,l.jsx)(c.Provider,{value:{state:n,dispatch:s},children:t})};var d=function(){return(0,a.useContext)(c)},m=n(4164),p=n(8267),x=n(1196),g=n.n(x);let v=e=>{let{step:t,maxSteps:n}=e,a=Array.from({length:n},(e,t)=>t+1);return(0,l.jsxs)("div",{className:"w-full flex items-center justify-between relative py-7",children:[null==a?void 0:a.map(e=>(0,l.jsx)("div",{className:"".concat(g().step," w-full ").concat(t>e?"text-light-blue":t===e?"text-[#5BA9DE]":"text-[#b0bac8]"," font-medium text-center relative pb-2"),children:"Paso ".concat(e)},e)),(0,l.jsx)("div",{className:"".concat(g().stepLine," absolute")})]})},h=e=>{let{step:t}=e,{dispatch:n}=d(),a=()=>{n({type:"SET_BACK_VIEW"})};return(0,l.jsxs)("div",{className:"lg:flex flex-row-reverse items-center max-h-24",children:[(0,l.jsx)(v,{step:t,maxSteps:3}),(0,l.jsxs)(p.Z,{variant:"icon",className:"flex items-center justify-start gap-3 absolute -top-40 z-10 lg:pr-0 lg:relative lg:top-0",onClick:a,children:[(0,l.jsx)(m.xC,{size:"33"}),(0,l.jsx)("span",{className:"font-medium text-mini lg:text-h4 text-blue",children:"Volver"})]})]})};var f=n(9177),j=n.n(f);let N=e=>{let{className:t,items:n,name:a,onChange:s,value:i}=e;return(0,l.jsx)("div",{className:"".concat(t," flex items-center flex-col gap-4 lg:flex-row lg:gap-6"),children:null==n?void 0:n.map(e=>{let{title:t,value:n}=e;return(0,l.jsxs)("label",{className:"".concat(j().radio," w-full flex items-center bg-white rounded-xl p-4 cursor-pointer"),children:[(0,l.jsx)("input",{className:"appearance-none m-0",type:"radio",name:a,onChange:()=>s(n),checked:i===n}),(0,l.jsx)("span",{className:"ml-6 text-gray font-medium",children:t})]},n)})})};var y=n(4461),E=n.n(y);let _=()=>{let{state:{flowType:e,loading:t},dispatch:n}=d();(0,a.useEffect)(()=>{n({type:"SET_STEP",args:{step:0}})},[]);let s=e=>{n({type:"SET_FLOW_TYPE",args:{flowType:e}})},i=()=>{n({type:"SET_LOADING",args:{loading:!0}}),n({type:"SET_NEXT_VIEW",args:{view:"schedule"===e?2:"x"}})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:"text-h3 font-medium text-blue lg:text-h1",children:"\xa1Bienvenid@!"}),(0,l.jsx)("p",{className:"font-medium text-gray lg:text-h3",children:"Existe una cl\xednica dentalia cerca ti."}),(0,l.jsx)("p",{className:"".concat(E().bottomLine," mt-8 font-medium text-light-blue lg:mt-6 lg:text-h4"),children:"Agenda tu experiencia en pocos minutos"}),(0,l.jsx)("p",{className:"mt-8 text-body font-medium text-gray lg:mt-6 lg:text-h4",children:"Cu\xe9ntanos qu\xe9 deseas, marcando la opci\xf3n"}),(0,l.jsx)(N,{className:"mt-6 lg:mt-8",items:[{title:"Agendar una cita",value:"schedule"},{title:"Reagendar o cancelar una cita",value:"reschedule"}],name:"welcome-view",value:e,onChange:s}),(0,l.jsx)(p.Z,{className:"w-full mt-6 lg:mt-8",onClick:i,disabled:!e,loading:t,children:"Continuar"})]})};var b=n(296),w=n.n(b),T=n(9636),S=n.n(T);let C=e=>{switch(e){case"number":return"numeric";case"tel":return"tel";case"email":return"email";default:return"none"}},A=e=>{let{className:t="",placeholder:n="",type:s="text",value:i,Icon:o=null,onChange:r,disabled:c=!1,maxLength:u=750}=e,[d,m]=(0,a.useState)(null!=i?i:""),p=e=>r(null!=e?e:""),x=(0,a.useCallback)(w()(p,200),[]);return(0,l.jsxs)("div",{className:"".concat(t," w-full flex items-stretch justify-between lg:max-w-xs 2xl:max-w-md"),children:[(0,l.jsx)("input",{className:"".concat(S().input," py-3 px-4 w-full"),type:s,value:d,placeholder:n,onChange:e=>{var t,n;m(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.value),x(null==e?void 0:null===(n=e.target)||void 0===n?void 0:n.value)},disabled:c,maxLength:u,inputMode:C(s)}),(0,l.jsx)("div",{className:"py-3 pr-4",children:o&&(0,l.jsx)(o,{})})]})},O=(e,t)=>{let n=new Headers;return n.append("Authorization","Bearer ".concat(t)),fetch("/api/decrypt",{method:"POST",body:JSON.stringify(e),headers:n}).then(e=>e.json()).catch(console.error)},I=()=>fetch("http://201.163.13.69:9000/login",{method:"POST",body:JSON.stringify({nombreUsuario:"wwebapp",contrasena:"general",sistema:"26"})}).then(e=>e.json()).catch(console.error),P=()=>{var e;let t=JSON.parse(null!==(e=sessionStorage.getItem("authToken"))&&void 0!==e?e:"{}");if(null==t?void 0:t.Authorization)return t.Authorization;I().then(e=>{sessionStorage.setItem("authToken",JSON.stringify(e)),P()})},L=e=>e?{name:e.nombre,phone:e.telefono,email:e.correo,birthDate:e.fechaNacimiento}:null,D=e=>{let t=new Headers,n=P();return t.append("Authorization","Bearer ".concat(n)),fetch("http://201.163.13.69:9000/api/paciente/obteneUsuarioPacienteId?idPaciente=".concat(e),{method:"GET",headers:t}).then(e=>e.json()).then(async e=>O(e,n)).then(e=>({...e,userInfo:L(null==e?void 0:e.data)})).catch(e=>(console.error(e),{}))};var k=n(2677),F=n.n(k);let M=()=>{let{state:{user:e,loading:t},dispatch:n}=d();(0,a.useEffect)(()=>{n({type:"SET_STEP",args:{step:1}})},[]);let s=t=>{n({type:"SET_USER",args:{user:{...e,email:t}}})},i=()=>{n({type:"SET_LOADING",args:{loading:!0}}),(null==e?void 0:e.email)&&D(null==e?void 0:e.email).then(e=>{let{success:t,data:l,userInfo:a,message:s}=e;if(t){if("Usuario Invalido"===s)n({type:"SET_NEXT_VIEW",args:{view:3}});else if(a){var i;n({type:"SET_USER",args:{user:a}}),n({type:"SET_NEXT_VIEW",args:{view:(null==l?void 0:null===(i=l.relacionados)||void 0===i?void 0:i.length)?20:10}})}else console.error("Error getUser",{userInfo:a,success:t,message:s,data:l})}else console.error("Error getUser",s)})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"".concat(F().bottomLine," font-medium text-light-blue lg:text-h4"),children:"Agenda tu experiencia en pocos minutos"}),(0,l.jsx)("p",{className:"mt-6 text-body font-medium text-gray lg:text-h4",children:"Cu\xe9ntanos qu\xe9 deseas, marcando la opci\xf3n"}),(0,l.jsx)(A,{className:"my-6 lg:my-8",type:"text",placeholder:"Correo electr\xf3nico",Icon:m.bV,value:null==e?void 0:e.email,onChange:s}),(0,l.jsx)(p.Z,{className:"w-full",onClick:i,disabled:!1,loading:t,children:"Continuar"})]})};var B=n(8207),V=n.n(B);let W=()=>{let{state:{user:e,loading:t},dispatch:n}=d(),a=()=>{n({type:"SET_LOADING",args:{loading:!0}}),n({type:"SET_NEXT_VIEW",args:{view:4}})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"".concat(V().bottomLine," font-medium text-light-blue lg:text-h4"),children:"Agenda tu experiencia en pocos minutos"}),(0,l.jsx)("p",{className:"mt-6 text-body font-medium text-gray lg:text-h4",children:"Cu\xe9ntanos qu\xe9 deseas, marcando la opci\xf3n"}),(0,l.jsx)(A,{className:"my-6 lg:my-8",type:"email",placeholder:"Correo electr\xf3nico",Icon:m.bV,value:null==e?void 0:e.email,onChange:()=>{},disabled:!0}),(0,l.jsx)("p",{className:"text-light-blue font-medium text-h4 mb-7",children:"Al parecer no tienes ning\xfan registro"}),(0,l.jsx)(p.Z,{className:"w-full",onClick:a,loading:t,children:"Agenda una cita ahora"})]})};var z=n(7354),U=n.n(z);let R=e=>{var t,n;let{input:s,setInput:i,open:o,setOpen:r,search:c,placeholder:u,Icon:d,selectedOption:p,items:x}=e,g=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(o&&c){var e;null==g||null===(e=g.current)||void 0===e||e.focus()}},[o,c]),(0,l.jsxs)("div",{className:"".concat(U().dropdown," ").concat(o?U().open:""," cursor-pointer flex items-center justify-between py-3 px-4 bg-white"),onClick:()=>r(!o),children:[c&&o?(0,l.jsx)("input",{className:"w-full",placeholder:u,value:s,onChange:e=>{var n;return i(null!==(t=null==e?void 0:null===(n=e.target)||void 0===n?void 0:n.value)&&void 0!==t?t:"")},ref:g}):(0,l.jsx)("span",{children:null!==(n=(()=>{var e;let{title:t}=null!==(e=null==x?void 0:x.find(e=>{let{value:t}=e;return t===p}))&&void 0!==e?e:{title:null};return t})())&&void 0!==n?n:u}),d?(0,l.jsx)("span",{children:(0,l.jsx)(d,{})}):(0,l.jsx)(m.e0,{})]})},X=e=>{let{className:t,placeholder:n,items:s,Icon:i=null,onChange:o,value:r="",search:c}=e,[u,d]=(0,a.useState)(!1),[m,p]=(0,a.useState)(""),[x,g]=(0,a.useState)(null!=s?s:[]);return(0,a.useEffect)(()=>{m?g(s.filter(e=>{let{title:t}=e;return t.toLowerCase().indexOf(m.toLowerCase())>-1})):g(s)},[m,s]),(0,l.jsxs)("div",{className:"".concat(t," relative"),children:[(0,l.jsx)(R,{input:m,setInput:p,open:u,setOpen:d,search:c,placeholder:n,Icon:i,selectedOption:r,items:s}),(0,l.jsx)("div",{className:"absolute left-0 right-0 h-0 overflow-hidden bg-white cursor-pointer z-10",style:u?{height:"".concat(56*x.length,"px")}:{},children:null==x?void 0:x.map(e=>{let{title:t,value:n}=e;return(0,l.jsx)("div",{className:"p-4 hover:bg-[#DDECF7]",onClick:()=>{o(n),p(""),d(!1)},children:t},n)})})]})};var Z=n(3393),G=n.n(Z);let K=()=>{var e;let{state:{user:t,loading:n,appointment:s},dispatch:i}=d();(0,a.useEffect)(()=>{i({type:"SET_STEP",args:{step:1}})},[]);let o=e=>{i({type:"SET_APPOINTMENT",args:{appointment:{...s,reason:e}}})},r=()=>{i({type:"SET_LOADING",args:{loading:!0}}),i({type:"SET_NEXT_VIEW",args:{view:5}})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"".concat(G().bottomLine," font-medium text-light-blue lg:text-h4"),children:"Agenda tu experiencia en pocos minutos"}),(0,l.jsx)("p",{className:"mt-6 text-body font-medium text-gray lg:text-h4",children:"Cu\xe9ntanos qu\xe9 deseas, marcando la opci\xf3n"}),(0,l.jsxs)("div",{className:"block lg:flex lg:gap-6",children:[(0,l.jsx)(A,{className:"my-6 w-full lg:my-8",type:"email",placeholder:"Correo electr\xf3nico",Icon:m.bV,value:null!==(e=null==t?void 0:t.email)&&void 0!==e?e:"",onChange:()=>{},disabled:!0}),(0,l.jsx)(X,{className:"my-6 w-full lg:my-8 lg:max-w-xs",placeholder:"Motivo de tu cita",items:[{title:"Revisi\xf3n y diagn\xf3stico",value:"Revisi\xf3n y diagn\xf3stico"},{title:"Limpieza",value:"Limpieza"},{title:"Dolor/ Emergencia",value:"Dolor/ Emergencia"},{title:"Tratamientos est\xe9ticos",value:"Tratamientos est\xe9ticos"},{title:"Tratamientos cl\xednicos",value:"Tratamientos cl\xednicos"}],value:null==s?void 0:s.reason,onChange:o})]}),(0,l.jsx)(p.Z,{className:"w-full",onClick:r,disabled:!(null==s?void 0:s.reason),loading:n,children:"Continuar"})]})},q=()=>{let{state:{user:e,loading:t,appointment:n},dispatch:s}=d();(0,a.useEffect)(()=>{s({type:"SET_STEP",args:{step:2}})},[]);let i=e=>{s({type:"SET_APPOINTMENT",args:{appointment:{...n,place:e}}})},o=t=>{s({type:"SET_USER",args:{user:{...e,postalCode:t}}})},r=e=>{s({type:"SET_APPOINTMENT",args:{appointment:{...n,date:e}}})},c=e=>{s({type:"SET_APPOINTMENT",args:{appointment:{...n,time:e}}})},u=()=>{s({type:"SET_LOADING",args:{loading:!0}}),s({type:"SET_NEXT_VIEW",args:{view:6}})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"block lg:flex lg:gap-6",children:[(0,l.jsx)(X,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Ubica tu ciudad",search:!0,items:[{title:"Ciudad de M\xe9xico",value:"Ciudad de M\xe9xico"},{title:"Tijuana",value:"Tijuana"},{title:"Guadalajara",value:"Guadalajara"},{title:"Hermosillo",value:"Hermosillo"},{title:"Chihuahua",value:"Chihuahua"}],Icon:m.W1,value:null==n?void 0:n.place,onChange:i}),(0,l.jsx)(X,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Ingresa tu c\xf3digo postal",search:!0,items:[{title:"ACOXPA Paseo Acoxpa",value:"ACOXPA Paseo Acoxpa"},{title:"ALTAVISTA Pabell\xf3n Altavista",value:"ALTAVISTA Pabell\xf3n Altavista"},{title:"BUENAVISTA F\xf3rum Buenavista",value:"BUENAVISTA F\xf3rum Buenavista"},{title:"COAPAGran Terraza Coapa",value:"COAPAGran Terraza Coapa"},{title:"COYOACANPunto MAQ",value:"COYOACANPunto MAQ"}],Icon:m._t,value:null==e?void 0:e.postalCode,onChange:o})]}),(0,l.jsxs)("div",{className:"block lg:flex lg:gap-6",children:[(0,l.jsx)(X,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Eligir la fecha",items:[{title:"Componente en construcci\xf3n",value:"Componente en construcci\xf3n"}],value:null==n?void 0:n.date,onChange:r}),(0,l.jsx)(X,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Eligir la hora",items:[{title:"Componente en construcci\xf3n",value:"Componente en construcci\xf3n"}],value:null==n?void 0:n.time,onChange:c})]}),(0,l.jsx)(p.Z,{className:"w-full lg:mt-2",onClick:u,disabled:!((null==n?void 0:n.place)&&(null==e?void 0:e.postalCode)&&(null==n?void 0:n.date)&&(null==n?void 0:n.time)),loading:t,children:"Continuar"})]})},H=()=>{var e;let{state:{loading:t,appointment:n},dispatch:s}=d();(0,a.useEffect)(()=>{s({type:"SET_STEP",args:{step:3}})},[]);let i=e=>{s({type:"SET_APPOINTMENT",args:{appointment:{...n,person:e}}})},o=()=>{s({type:"SET_LOADING",args:{loading:!0}}),s({type:"SET_NEXT_VIEW",args:{view:7}})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{className:"mb-6 lg:mb-8",items:[{title:"La cita es para mi",value:"selfAppointment"},{title:"La cita es para otra persona",value:"someOneElseAppointment"}],name:"welcome-view",value:null!==(e=null==n?void 0:n.person)&&void 0!==e?e:"",onChange:i}),(0,l.jsx)(p.Z,{className:"w-full lg:mb-8",onClick:o,disabled:!(null==n?void 0:n.person),loading:t,children:"Continuar"})]})},J=(e,t)=>{let n=null==t?void 0:t.split(".");return n.reduce((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:""},e)},Q=e=>{let{state:t}=d(),[n,l]=(0,a.useState)(!1),[s,i]=(0,a.useState)({});return(0,a.useEffect)(()=>{let n=e.map(e=>{let{route:n,validation:l,message:a}=e;return l(J(t,n))?{isValid:!0,message:"",route:n}:{isValid:!1,message:a,route:n}}),a={};n.filter(e=>{let{isValid:t}=e;return!t}).forEach(e=>{let{route:t,message:n}=e;return a[t]=n}),l(null==n?void 0:n.every(e=>{let{isValid:t}=e;return t})),i(a)},[t]),{isValidForm:n,errors:s}};var Y=n(3656),$=n.n(Y);let ee=e=>{let{className:t,label:n,value:a,onChange:s}=e;return(0,l.jsxs)("label",{className:"".concat(t," ").concat($().checkBox," cursor-pointer p-3 flex items-center gap"),children:[(0,l.jsx)("input",{className:"appearance-none m-0",type:"checkbox",onChange:e=>s(e.target.checked),checked:a}),(0,l.jsx)("span",{className:"ml-2",children:n})]})};var et=n(5004),en=n.n(et);let el=e=>{let[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{t>0&&setTimeout(()=>{n(t-1)},1e3)},[t]),t},ea=e=>{let{className:t="",seconds:n}=e,a=el(n),s=e=>{let t=n-a,l=n/4,s=l*(e-1);return s<=t&&t<=l*e?{transform:"rotate(-".concat(t*(90/l)-90*(e-1)+45,"deg)")}:t>s?{display:"none"}:void 0};return(0,l.jsxs)("div",{className:"".concat(en().countDown," ").concat(t," flex items-center justify-center w-24 h-24"),children:[(0,l.jsxs)("span",{className:"text-gray text-small font-medium",children:[a," seg"]}),(0,l.jsxs)("div",{className:en().progressBarContainer,style:a<n/2?{width:"calc(50% + 3px)"}:{width:"calc(100% + 8px)"},children:[(0,l.jsx)("div",{className:en().progressBar,style:s(1)}),(0,l.jsx)("div",{className:en().progressBar,style:s(2)}),(0,l.jsx)("div",{className:en().progressBar,style:s(3)}),(0,l.jsx)("div",{className:en().progressBar,style:s(4)})]})]})};var es=n(2362),ei=n.n(es);let eo=e=>{let{setOTP:t}=e,[n,s]=(0,a.useState)(""),[i,o]=(0,a.useState)(""),[r,c]=(0,a.useState)(""),[u,d]=(0,a.useState)(""),[m,p]=(0,a.useState)(""),[x,g]=(0,a.useState)("");(0,a.useEffect)(()=>{t("".concat(n).concat(i).concat(r).concat(u).concat(m).concat(x))},[n,i,r,u,m,x,t]);let v=e=>{let t=e.nextElementSibling;t&&t.focus()},h=e=>{let t=e.previousElementSibling;t&&t.focus()},f=(e,t)=>{var n,l,a;let i=null==e?void 0:null===(n=e.target)||void 0===n?void 0:null===(l=n.value)||void 0===l?void 0:l.trim();t(i);let r=i.length;i&&1===r?v(e.target):6===r&&(s(i[0]),o(i[1]),c(i[2]),d(i[3]),p(i[4]),g(i[5]),null==e||null===(a=e.target)||void 0===a||a.blur())},j=e=>{let{key:t}=e,n=e.target;return"ArrowRight"===t||"ArrowDown"===t?(e.preventDefault(),v(n)):"ArrowLeft"===t||"ArrowUp"===t?(e.preventDefault(),h(n)):"Backspace"!==t||""!==n.value?void 0:void h(n)},N=e=>{let{target:t}=e,n=t.previousElementSibling;if(n&&""===n.value)return n.focus()};return(0,l.jsxs)("div",{className:"".concat(ei().inputOTP," flex items-start justify-between w-full gap-2"),children:[(0,l.jsx)("input",{type:"number",value:n,onFocus:N,onKeyDown:j,onChange:e=>{f(e,s)},maxLength:1,inputMode:"numeric",pattern:"\\d{1}"}),(0,l.jsx)("input",{type:"number",value:i,onKeyDown:j,onChange:e=>{f(e,o)},maxLength:1,inputMode:"numeric",pattern:"\\d{1}"}),(0,l.jsx)("input",{type:"number",value:r,onKeyDown:j,onChange:e=>{f(e,c)},maxLength:1,inputMode:"numeric",pattern:"\\d{1}"}),(0,l.jsx)("input",{type:"number",value:u,onKeyDown:j,onChange:e=>{f(e,d)},maxLength:1,inputMode:"numeric",pattern:"\\d{1}"}),(0,l.jsx)("input",{type:"number",value:m,onKeyDown:j,onChange:e=>{f(e,p)},maxLength:1,inputMode:"numeric",pattern:"\\d{1}"}),(0,l.jsx)("input",{type:"number",value:x,onKeyDown:j,onChange:e=>{f(e,g)},maxLength:1,inputMode:"numeric",pattern:"\\d{1}"})]})},er=e=>{let{SMS:t,setSMS:n}=e,[s,i]=(0,a.useState)("");return(0,l.jsxs)("div",{className:"flex items-center flex-col justify-between",children:[(0,l.jsxs)("div",{className:"mb-7",children:[(0,l.jsx)("p",{className:"text-light-blue text-h4 font-medium text-center",children:"Por favor ingresa el c\xf3digo de verificaci\xf3n que recibiste"}),(0,l.jsx)("p",{className:"text-gray text-small font-medium text-center",children:"por Whatsapp o SMS"})]}),(0,l.jsx)(eo,{setOTP:i}),(0,l.jsx)("p",{children:s}),(0,l.jsx)(ea,{className:"my-12",seconds:30}),(0,l.jsxs)("div",{className:"flex items-center flex-col",children:[(0,l.jsx)(p.Z,{variant:"link",children:"Volver a enviar"}),(0,l.jsx)(p.Z,{className:"w-full",children:"Verificar n\xfamero"}),(0,l.jsxs)(p.Z,{variant:"link",children:["\xbfNo has recibido a\xfan el c\xf3digo? ",(0,l.jsx)("br",{}),"Prueba otro m\xe9todo"]})]})]})};var ec=n(7204),eu=n.n(ec);let ed=e=>{let{className:t="",open:n=!1,setOpen:a,children:s}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"".concat(eu().modal," ").concat(n?eu().open:""," fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center z-50"),children:[(0,l.jsx)("div",{className:"".concat(t," bg-[#f0f3f9] px-3 py-9 rounded-xl z-50 m-2"),children:n&&s}),(0,l.jsx)("div",{className:"".concat(eu().backDrop," z-40"),onClick:()=>a(!1)})]})})},em=/^(\(\+?\d{2,3}\)[*|\s|\-|.]?(([\d][*|\s|\-|.]?){6})(([\d][\s|\-|.]?){2})?|(\+?[\d][\s|\-|.]?){8}(([\d][\s|\-|.]?){2}(([\d][\s|\-|.]?){2})?)?)$/,ep=e=>"selfAppointment"===e?[{route:"user.name",validation:e=>e&&e.length>2,message:"Ingrese un nombre valido"},{route:"user.phone",validation:e=>em.test(e),message:"Ingrese un tel\xe9fono valido"},{route:"user.birthDate",validation:e=>"Componente en construcci\xf3n"===e,message:"Ingrese una fecha de nacimiento valida"}]:[{route:"user.name",validation:e=>e&&e.length>2,message:"Ingrese un nombre valido"},{route:"user.phone",validation:e=>em.test(e),message:"Ingrese un tel\xe9fono valido"},{route:"appointment.someOneElse.name",validation:e=>e&&e.length>2,message:"Ingrese un nombre valido"},{route:"appointment.someOneElse.phone",validation:e=>em.test(e),message:"Ingrese un tel\xe9fono valido"},{route:"appointment.someOneElse.birthDate",validation:e=>"Componente en construcci\xf3n"===e,message:"Ingrese una fecha de nacimiento valida"}];var ex=n(3322),eg=n.n(ex);let ev=()=>{var e,t,n,s;let{state:{user:i,appointment:o,loading:r},dispatch:c}=d(),u=ep(null!==(s=null==o?void 0:o.person)&&void 0!==s?s:""),{isValidForm:m}=Q(u),[x,g]=(0,a.useState)(!1),[v,h]=(0,a.useState)(!1);(0,a.useEffect)(()=>{c({type:"SET_STEP",args:{step:3}})},[]);let f=(e,t)=>{c({type:"SET_USER_INFO",args:{[e]:t}})},j=(e,t)=>{c({type:"SET_SOMEONE_ELSE_INFO",args:{[e]:t}})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"".concat(eg().compactForm," mb-12"),children:[(0,l.jsx)(N,{className:"w-full lg:mb-5",items:[{title:"La cita es para mi",value:"selfAppointment"},{title:"La cita es para otra persona",value:"someOneElseAppointment"}].filter(e=>{let{value:t}=e;return(null==o?void 0:o.person)===t}),name:"welcome-view",value:"".concat(null==o?void 0:o.person),onChange:()=>{}}),(null==o?void 0:o.person)==="selfAppointment"?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"lg:flex items-center justify-between gap-5",children:[(0,l.jsx)(A,{placeholder:"Nombre completo",value:null==i?void 0:i.name,onChange:e=>f("name",e)}),(0,l.jsx)(A,{type:"tel",placeholder:"Tel\xe9fono celular",value:null==i?void 0:i.phone,onChange:e=>f("phone",e)})]}),(0,l.jsx)(X,{className:"".concat(eg().dropdown," lg:mt-5 lg:mb-8 w-full"),placeholder:"Fecha de nacimiento dd/mm/aaaa",items:[{title:"Componente en construcci\xf3n",value:"Componente en construcci\xf3n"}],value:null==i?void 0:i.birthDate,onChange:e=>f("birthDate",e)})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"lg:flex items-center justify-between gap-5",children:[(0,l.jsx)(A,{placeholder:"Nombre de quien agenda",value:null==i?void 0:i.name,onChange:e=>f("name",e)}),(0,l.jsx)(A,{type:"tel",placeholder:"Tel\xe9fono celular",value:null==i?void 0:i.phone,onChange:e=>f("phone",e)})]}),(0,l.jsxs)("div",{className:"lg:flex items-center justify-between gap-5",children:[(0,l.jsx)(A,{className:"lg:mt-5",placeholder:"Nombre del paciente",value:null==o?void 0:null===(e=o.someOneElse)||void 0===e?void 0:e.name,onChange:e=>j("name",e)}),(0,l.jsx)(A,{className:"lg:mt-5",type:"tel",placeholder:"Tel\xe9fono celular del paciente",value:null==o?void 0:null===(t=o.someOneElse)||void 0===t?void 0:t.phone,onChange:e=>j("phone",e)})]}),(0,l.jsx)(X,{className:"".concat(eg().dropdown," lg:mt-5 lg:mb-8 w-full"),placeholder:"Fecha de nacimiento del paciente",items:[{title:"Componente en construcci\xf3n",value:"Componente en construcci\xf3n"}],value:null==o?void 0:null===(n=o.someOneElse)||void 0===n?void 0:n.birthDate,onChange:e=>j("birthDate",e)})]})]}),(0,l.jsxs)("div",{className:"lg:flex items-center justify-between",children:[(0,l.jsxs)("p",{className:"text-light-blue text-h4 font-medium text-center mb-4 lg:text-h5 lg:text-left",children:["Enviaremos un c\xf3digo de ",(0,l.jsx)("br",{}),"verificaci\xf3n por Whatsapp"]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(p.Z,{className:"w-full",onClick:()=>g(!0),disabled:!m,loading:r,children:"Enviar c\xf3digo de verificaci\xf3n"}),(0,l.jsx)(ee,{className:"w-full my-4 lg:my-0",label:"No tengo Whatsapp. Enviar por SMS",value:v,onChange:h})]})]}),(0,l.jsx)(ed,{className:"w-full max-w-xs lg:max-w-xl",open:x,setOpen:g,children:(0,l.jsx)(er,{SMS:v,setSMS:h})})]})},eh=()=>{let{state:{user:e,loading:t,appointment:n},dispatch:s}=d();(0,a.useEffect)(()=>{s({type:"SET_STEP",args:{step:2}})},[]);let i=e=>{s({type:"SET_APPOINTMENT",args:{appointment:{...n,reason:e}}})},o=e=>{s({type:"SET_APPOINTMENT",args:{appointment:{...n,date:e}}})},r=e=>{s({type:"SET_APPOINTMENT",args:{appointment:{...n,time:e}}})},c=()=>{s({type:"SET_LOADING",args:{loading:!0}}),s({type:"SET_NEXT_VIEW",args:{view:11}})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{className:"text-light-blue text-h3 lg:font-medium lg:text-h2",children:["Hola",(null==e?void 0:e.name)?" ".concat(null==e?void 0:e.name.split(" ")[0]):"",","]}),(0,l.jsx)("p",{className:"text-[#4F5F76] text-h4 lg:font-medium",children:"\xbfC\xf3mo est\xe1s?"}),(0,l.jsx)(X,{className:"my-6 w-full lg:my-8",placeholder:"Motivo de tu cita",items:[{title:"Revisi\xf3n y diagn\xf3stico",value:"Revisi\xf3n y diagn\xf3stico"},{title:"Limpieza",value:"Limpieza"},{title:"Dolor/ Emergencia",value:"Dolor/ Emergencia"},{title:"Tratamientos est\xe9ticos",value:"Tratamientos est\xe9ticos"},{title:"Tratamientos cl\xednicos",value:"Tratamientos cl\xednicos"}],value:null==n?void 0:n.reason,onChange:i}),(0,l.jsxs)("div",{className:"block lg:flex lg:gap-6 justify-between",children:[(0,l.jsx)(X,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Eligir la fecha",items:[{title:"Componente en construcci\xf3n",value:"Componente en construcci\xf3n"}],value:null==n?void 0:n.date,onChange:o}),(0,l.jsx)(X,{className:"mb-6 w-full lg:max-w-xs",placeholder:"Eligir la hora",items:[{title:"Componente en construcci\xf3n",value:"Componente en construcci\xf3n"}],value:null==n?void 0:n.time,onChange:r})]}),(0,l.jsx)(p.Z,{className:"w-full lg:mt-2",onClick:c,disabled:!((null==n?void 0:n.reason)&&(null==n?void 0:n.time)&&(null==n?void 0:n.date)),loading:t,children:"Continuar"})]})},ef=e=>{let{views:t}=e,[n]=t;switch(n){case 1:default:return(0,l.jsx)(_,{});case 2:return(0,l.jsx)(M,{});case 3:return(0,l.jsx)(W,{});case 4:return(0,l.jsx)(K,{});case 5:return(0,l.jsx)(q,{});case 6:return(0,l.jsx)(H,{});case 7:return(0,l.jsx)(ev,{});case 10:return(0,l.jsx)(eh,{})}},ej=()=>{let{state:{views:e,step:t}}=d();return(0,l.jsxs)("div",{className:"w-full min-h-[470px] lg:min-h-full lg:flex flex-col",children:[t?(0,l.jsx)(h,{step:t}):null,(0,l.jsx)("form",{onSubmit:e=>(e.preventDefault(),!1),className:"w-full p-7 relative lg:max-w-[80%] lg:p-0 lg:m-auto lg:pb-8 2xl:pb-14",children:(0,l.jsx)(ef,{views:e})})]})},eN=()=>(0,l.jsx)(u,{children:(0,l.jsx)(ej,{})}),ey=()=>((0,a.useEffect)(()=>{window&&P()},[]),(0,l.jsxs)("div",{className:"lg:flex",children:[(0,l.jsx)("div",{className:"w-full lg:max-w-[30%] xl:max-w-[40%]",children:(0,l.jsx)(i(),{src:"/images/main-banner.png",alt:"Dentalia Banner",width:940,height:783,style:{width:"100%",height:"auto"}})}),(0,l.jsx)(eN,{})]}));var eE=ey},3656:function(e){e.exports={checkBox:"styles_checkBox__rtvwJ"}},5004:function(e){e.exports={countDown:"styles_countDown__nUk3n",progressBarContainer:"styles_progressBarContainer__KQpsp",progressBar:"styles_progressBar__NTv_k"}},7354:function(e){e.exports={dropdown:"styles_dropdown__O7SHg",open:"styles_open__u0Htm"}},1196:function(e){e.exports={step:"styles_step__oqn2i",stepLine:"styles_stepLine__TNXK9"}},3322:function(e){e.exports={compactForm:"styles_compactForm__jK9jk",dropdown:"styles_dropdown__FeKmN"}},3393:function(e){e.exports={bottomLine:"styles_bottomLine__j0Pou"}},2677:function(e){e.exports={bottomLine:"styles_bottomLine__X_WQy"}},8207:function(e){e.exports={bottomLine:"styles_bottomLine__FqhcN"}},4461:function(e){e.exports={bottomLine:"styles_bottomLine__h_vAA"}},9636:function(e){e.exports={input:"styles_input__IZevv"}},7204:function(e){e.exports={backDrop:"styles_backDrop__DpaOj",modal:"styles_modal__wDZC8",open:"styles_open__pN4HR"}},2362:function(e){e.exports={inputOTP:"styles_inputOTP__mM4hW"}},9177:function(e){e.exports={radio:"styles_radio__0ZDcm"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);