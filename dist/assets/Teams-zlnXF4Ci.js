import{r as a,j as e,C as u,a as d,A as p}from"./index-XssLkrnm.js";/* empty css               */import{C as h}from"./CustomDot-B0ErxX9Q.js";const j=()=>{const[n,o]=a.useState([]),s=a.useRef(null),c={superLargeDesktop:{breakpoint:{max:4e3,min:1500},items:4},desktop:{breakpoint:{max:1500,min:1024},items:3},tablet:{breakpoint:{max:1024,min:760},items:2},mobile:{breakpoint:{max:760,min:0},items:1}},l=async()=>{try{const t=await d.get(`${p}/hv-comapny/team/getall`);o(t.data)}catch(t){console.error("Error fetching Team:",t)}};a.useEffect(()=>{l()},[]);const i=()=>{window.open("https://hackerverse.quest/","_blank")};return a.useEffect(()=>{const t=setInterval(()=>{if(s.current){const r=s.current.state.currentSlide+1,x=s.current.state.totalItems,m=r>=x?0:r;s.current.goToSlide(m)}},8e3);return()=>clearInterval(t)},[]),e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"bg-black",children:e.jsx("div",{className:"py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-6 ",children:e.jsx("div",{className:"mx-auto max-w-screen-sm ",children:e.jsx("h2",{className:" text-2xl  lg:text-3xl cursor-pointer tracking-tight font-extrabold uppercase sm:mb-8 font-rubik hover-underline text-white dark:text-white",children:"Our team"})})})}),e.jsx(u,{responsive:c,ref:s,infinite:!0,className:"w-full mx-auto pb-10",showDots:!0,customDot:e.jsx(h,{}),focusOnSelect:!0,direction:"rtl",children:n.map(t=>e.jsxs("div",{className:"text-center text-[#a0ff00] flex flex-col justify-center dark:text-gray-400 cursor-pointer rounded-2xl  ",children:[e.jsxs("div",{className:"h-[280px] w-[230px] relative  mb-4 mx-auto",children:[e.jsx("div",{className:"top-10 left-0 right-0 m-auto absolute bg-black opacity-35"}),e.jsx("div",{className:" h-[200px] w-full hover:bg-lighteningEffect bg-no-repeat bg-cover bg-center absolute bottom-0 mx-auto",children:e.jsx("img",{className:"mx-auto  w-full absolute bottom-0  z-40  h-[200px] left-0 right-0 object-contain",src:t.pic,loading:"lazy",alt:`${t.name}'s Avatar`})})]}),e.jsx("h2",{className:"mb-1 text-2xl text-center font-medium tracking-tight  mx-auto ",children:e.jsx("p",{href:"#",children:t.name})}),e.jsx("p",{className:"text-gray-500",children:t.designation}),e.jsx("ul",{className:"flex justify-center mt-4 space-x-4"})]},t.id))}),";",e.jsx("div",{className:"caption-area text-center bg-transparent  sm:mt-5 mb-24 ",children:e.jsx("button",{onClick:i,class:" rounded-md font-semibold text-black bg-[#a0ff00] w-[300px] text-sm sm:text-base hover:text-black hover:bg-[#8cba3e]  py-2 px-4 ",children:"Take me to the Platform!"})})]})};export{j as default};
