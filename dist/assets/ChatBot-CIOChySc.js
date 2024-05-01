import{r as t,j as e,B as n,U as k,b as C,A as S}from"./index-goB4xIsX.js";const O="/assets/orb-opU4D8c7.webp",M=()=>{const[r,c]=t.useState([]),[l,d]=t.useState(""),[x,m]=t.useState(!1),h=t.useRef(null),b=t.useRef(null),[o,g]=t.useState(!1),[u,i]=t.useState(!1),f=()=>{i(!1),g(!o)},j=()=>{o==!1&&i(!0)},v=()=>{i(!1)},y=async s=>await(await fetch(`${S}/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s})})).json(),p=async s=>{if(l==""||l==null){C.error("Please Enter your Message.");return}m(!0),s.preventDefault(),c([...r,{type:"user",text:l},{type:"bot",text:"..."}]),d("");const a=await y(l);c([...r,{type:"user",text:l},{type:"bot",text:a}]),m(!1)},w=s=>{d(s.target.value)},N=()=>{var s;(s=h.current)==null||s.scrollIntoView({behavior:"smooth"})};return t.useEffect(()=>{N()},[r]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"fixed -bottom-3 -right-3",children:[e.jsx("button",{className:" text-white rounded-full p-2  shadow-md focus:outline-none",onClick:f,onMouseEnter:j,onMouseLeave:v,children:e.jsx("img",{src:O,className:`h-24 w-24 ${u?"hovered":""}`,alt:"orb gif"})}),o&&e.jsxs("div",{className:" chatbot-window fixed bottom-[90px] right-4 lg:w-96 lg:h-[480px] md:w-96 w-[90%]  md:h-[480px] bg-black picboxc   rounded-2xl    ",children:[e.jsxs("div",{className:"flex justify-between items-center px-4 py-2   ",children:[e.jsxs("div",{className:"relative flex items-center space-x-2",children:[e.jsxs("div",{className:"relative",children:[" ",e.jsxs("span",{className:"absolute  ",children:[" ",e.jsx("svg",{width:20,height:20,children:"   "})," "]})," ",e.jsx("img",{src:n,alt:"",className:"w-auto sm:w-auto h-10 sm:h-16 w rounded-full border border-[#a0ff00]"})," "]}),e.jsxs("div",{className:"flex flex-col leading-tight",children:[" ",e.jsxs("div",{className:"text-3xl mb-2 flex items-center",children:[e.jsx("span",{className:"text-white  mr-3 text-lg ",style:{fontSize:"25px"},children:e.jsx("b",{children:"HACKERverse®"})})," "]})," ",e.jsx("span",{className:"text-lg text-gray-600",style:{fontSize:"15px"},children:e.jsx("i",{children:"  "})})," "]})]}),e.jsxs("button",{className:"text-[#a0ff00] hover:text-green-600 focus:outline-none",onClick:f,children:[" ",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[" ",e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})," "]})," "]})]}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex-1 p:2 sm:p-2 justify-between flex flex-col h-[400px] bg-black rounded-2xl",children:[e.jsxs("div",{id:"messages",className:"flex flex-col -mt-1 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch h-full bg-[#323232] rounded-md     custom-scrollbar",children:[e.jsx("div",{className:"chat-message mb-3 ",children:e.jsxs("div",{className:"  flex items-end",children:[e.jsx("div",{className:"flex flex-col space-y-2 text-md max-w-xs mx-2 order-2 items-start",children:e.jsx("div",{children:e.jsx("span",{className:"px-4 py-2 rounded-lg inline-block  rounded-bl-none bg-gray-300 text-gray-900  ",children:"Hey WhatsApp! How may I help you."})})}),e.jsx("img",{src:n,alt:"Profile",className:"w-12 h-12 rounded-full order-1 "})]})}),r.map((s,a)=>e.jsx("div",{className:"chat-message mb-3 ",children:e.jsxs("div",{className:`  ${s.type==="user"?"flex items-end justify-end":"flex items-end"}`,children:[e.jsx("div",{className:`flex flex-col space-y-2 text-md max-w-xs mx-2 order-${s.type==="user"?"1":"2"} items-${s.type==="user"?"end":"start"}`,children:e.jsx("div",{children:e.jsx("span",{className:`px-4 py-2 rounded-lg inline-block ${s.type==="user"?"rounded-br-none bg-[#54721e] text-white ":"rounded-bl-none bg-gray-300 text-gray-900  "}`,children:s.text})})}),e.jsx("img",{src:s.type==="user"?k:n,alt:"Profile",className:"w-12 h-12 rounded-full order-1 "})]},a)},a)),e.jsx("div",{ref:h})]}),e.jsx("div",{className:"  border-gray-200 px-1 pr-3 pt-2 mb-2 sm:mb-0 pb-2",children:e.jsxs("div",{className:"relative flex",children:[e.jsx("input",{type:"text",placeholder:"Write your message!",ref:b,value:l,onChange:w,onKeyDown:s=>{s.key==="Enter"&&x==!1&&p(s)},className:"ml-1 w-full focus:outline-none focus:placeholder-gray-400 font-medium text-gray-900 placeholder-gray-600 pl-3 bg-gray-200 rounded-md py-2"}),e.jsx("div",{className:"absolute -right-1 items-center inset-y-0 hidden sm:flex",children:e.jsxs("button",{disabled:x,type:"button",onClick:p,className:"inline-flex items-center justify-center rounded-r-md  -md px-2 py-2 transition duration-500 ease-in-out text-white bg-[#1f7920] hover:bg-green-900 focus:outline-none",children:[" ",e.jsx("span",{className:"font-bold"})," ",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6 w-6 ml-2 transform rotate-90",children:[" ",e.jsx("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})," "]})," "]})})]})})]})})]}),u&&e.jsx("div",{className:"fixed bottom-[90px] right-2 w-80 h-[80px] bg-black  picboxc   rounded-2xl ",children:e.jsx("div",{className:"flex justify-between items-center px-4 py-2  ",children:e.jsxs("div",{className:"relative flex items-center space-x-3 ",children:[e.jsxs("div",{className:"relative",children:[" ",e.jsxs("span",{className:"absolute  ",children:[" ",e.jsx("svg",{width:20,height:20,children:"   "})," "]})," ",e.jsx("img",{src:n,alt:"",className:"w-auto sm:w-auo h-10 sm:h-16 rounded-full border border-[#a0ff00]"})," "]}),e.jsxs("div",{className:"flex flex-col leading-tight",children:[" ",e.jsxs("div",{className:"text-3xl mb-2 items-center ",children:[e.jsx("span",{className:"text-white   text-lg  ",style:{fontSize:"20px"},children:e.jsx("b",{children:"Hey, Chat with me!"})})," "]}),"   "]})]})})})]})})};export{M as default};
