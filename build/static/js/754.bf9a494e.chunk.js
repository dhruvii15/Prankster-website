"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[754],{758:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(43),s=n(327),o=n(72),i=n(602),r=n(910),l=n(916),d=n(929);const c=n.p+"static/media/MuSAo94ViS.d1d52384903eee6549e7.gif";var h=n(584),p=n(579);const u=e=>{let{data2:t}=e;const n=(0,a.useRef)(null),[u,g]=(0,a.useState)("0:00"),[m,x]=(0,a.useState)("0:00"),[b,f]=(0,a.useState)(!0),[y,w]=(0,a.useState)(!1);(0,a.useEffect)((()=>{if(null!==t&&void 0!==t&&t.CoverImage){const e=new Image;e.src=t.CoverImage,e.onload=()=>w(!0)}}),[null===t||void 0===t?void 0:t.CoverImage]);const v=e=>{const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?"0":""}${n}`};(0,a.useEffect)((()=>{const e=n.current,t=()=>{const t=e.currentTime,n=e.duration;g(v(t)),x(v(n))};if(e)return e.addEventListener("timeupdate",t),e.addEventListener("loadedmetadata",t),()=>{e.removeEventListener("timeupdate",t),e.removeEventListener("loadedmetadata",t)}}),[]);const k=async()=>{if(navigator.share)try{await navigator.share({title:"Check out this amazing content!",text:"This is an awesome website I wanted to share with you.",url:window.location.href}),console.log("Content shared successfully")}catch(e){console.error("Error sharing content:",e)}else alert("Web Share API not supported in this browser.")};return(0,a.useEffect)((()=>{(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"full-page-background",children:[(0,p.jsx)(o.A,{className:"content p-0 overflow-hidden",style:{minHeight:"100vh"},children:(0,p.jsxs)(i.A,{className:"d-flex flex-column align-items-center contentTop mt-5 mt-sm-0 py-2",children:[(0,p.jsxs)("div",{className:"img-div2 position-relative",children:[(0,p.jsxs)("audio",{ref:n,loop:!0,className:"w-100 h-100",children:[(0,p.jsx)("source",{src:t.File,type:"audio/mp3"}),"Your browser does not support the audio tag."]}),!y&&(0,p.jsx)("div",{className:"loading-placeholder rounded-4",style:{width:"89%",height:"100%",aspectRatio:"16/9",background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto"},children:(0,p.jsx)("div",{className:"spinner-border text-light",role:"status",children:(0,p.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),y&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("img",{src:t.CoverImage,alt:"prankImage",className:"img-fluid h-100 rounded-4",style:{width:"89%"}}),b&&(0,p.jsx)("div",{onClick:async()=>{if(n.current)try{n.current.volume=1,n.current.muted=!1,await n.current.play(),f(!1)}catch(e){console.error("Error playing audio:",e)}},className:"rounded-4",style:{position:"absolute",top:0,left:"5.5%",width:"89%",height:"100%",background:"rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",zIndex:2},children:(0,p.jsx)("div",{style:{width:"50px",height:"50px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.8)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,p.jsx)(r.g,{icon:d.ijD,style:{fontSize:"20px",color:"#000",marginLeft:"3px"}})})}),(0,p.jsx)("div",{className:"share-btn position-absolute text-black cursor",style:{right:"25px",zIndex:3},onClick:k,role:"button","aria-label":"Share this content",tabIndex:0,onKeyPress:e=>"Enter"===e.key&&k(),children:(0,p.jsx)(r.g,{icon:l.Exz,className:"fs-5 ps-1"})}),(0,p.jsx)("div",{className:"position-absolute text-black cursor",style:{left:"25px",top:"10px",zIndex:3},children:(0,p.jsx)("img",{src:h,alt:"prankster",width:40})}),(0,p.jsx)("div",{className:"position-absolute text-black cursor w-100",style:{left:"0",top:"85%"},children:(0,p.jsx)("p",{className:"m-0 mx-auto rounded-4 w-50 py-1 text-black",style:{fontWeight:"550",backgroundColor:"rgba(255, 255, 255, 0.4)"},children:t.Name})})]})]}),(0,p.jsx)("img",{src:c,alt:"gif",style:{width:"90%",height:"50px"}}),(0,p.jsxs)("div",{className:"d-flex w-100 justify-content-between align-items-start px-3 pb-3 pb-xl-5",children:[(0,p.jsx)("p",{className:"m-0",children:u}),(0,p.jsx)("p",{className:"m-0",children:m})]}),(0,p.jsx)("div",{className:"pb-5",children:(0,p.jsx)(s.A,{})}),(0,p.jsx)("div",{className:"w-100 border",style:{height:"100px"},children:(0,p.jsx)("ins",{className:"adsbygoogle",style:{display:"block",height:"100px"},"data-ad-format":"fluid","data-ad-layout-key":"-6t+ed+2i-1n-4w","data-ad-client":"ca-pub-YOUR_PUBLISHER_ID","data-ad-slot":"YOUR_AD_SLOT_ID"})})]})}),(0,p.jsx)("style",{children:`\n                    .full-page-background {\n                        position: relative;\n                        min-height: 100vh;\n                        width: 100%;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        overflow: hidden;\n                        background-color: #808080;\n                    }\n                    .full-page-background::before {\n                        content: '';\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        right: 0;\n                        bottom: 0;\n                        background-image: ${y&&null!==t&&void 0!==t&&t.CoverImage?`url('${t.CoverImage}')`:"none"};\n                        background-size: cover;\n                        background-position: center;\n                        z-index: 0;\n                    }\n                    .full-page-background::after {\n                        content: '';\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        right: 0;\n                        bottom: 0;\n                        background: rgba(27, 26, 26, 0.2);\n                        backdrop-filter: blur(10px);\n                        -webkit-backdrop-filter: blur(10px);\n                        z-index: 1;\n                    }\n                    .content {\n                        position: relative;\n                        z-index: 2;\n                        color: white;\n                        padding: 20px;\n                        text-align: center;\n                    }\n                    .centered-image {\n                        max-width: 100%;\n                        max-height: 80vh;\n                        object-fit: contain;\n                    }\n                `})]})})}},327:(e,t,n)=>{n.d(t,{A:()=>i});n(43);var a=n(155);const s=n.p+"static/media/lol.98760c675bd6e5fc3af3.png";var o=n(579);const i=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{className:"mt-3 border-0 py-2 fs-5 text-black",style:{backgroundColor:"#F9E238",width:"90%",fontWeight:"600"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.yourapp.package","_blank")},children:"Make own prank \ud83d\ude02"}),(0,o.jsxs)(a.A,{className:"mt-3 border-0 py-2 fs-5 text-black overflow-hidden",style:{background:"linear-gradient(to right, #FA4F54, #FD7C41)",width:"90%",height:"50px"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.lol.android","_blank")},children:[(0,o.jsx)("img",{src:s,alt:"lol",className:"btnlol",width:60}),(0,o.jsx)("p",{className:"btntext text-white pt-1",style:{fontWeight:"450"},children:"Download!"})]})]})},584:(e,t,n)=>{e.exports=n.p+"static/media/watermark.bd3b6d9b0cae5cd3f8a4.png"}}]);
//# sourceMappingURL=754.bf9a494e.chunk.js.map