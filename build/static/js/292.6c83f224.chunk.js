"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[292],{327:(e,n,t)=>{t.d(n,{A:()=>a});t(43);var o=t(155);const r=t.p+"static/media/lol.98760c675bd6e5fc3af3.png";var s=t(579);const a=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{className:"mt-3 border-0 py-2 fs-5 text-black",style:{backgroundColor:"#F9E238",width:"90%",fontWeight:"600"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.yourapp.package","_blank")},children:"Make own prank \ud83d\ude02"}),(0,s.jsxs)(o.A,{className:"mt-3 border-0 py-2 fs-5 text-black overflow-hidden",style:{background:"linear-gradient(to right, #FA4F54, #FD7C41)",width:"90%",height:"50px"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.lol.android","_blank")},children:[(0,s.jsx)("img",{src:r,alt:"lol",className:"btnlol",width:60}),(0,s.jsx)("p",{className:"btntext text-white pt-3",style:{fontWeight:"450"},children:"Download!"})]})]})},830:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var o=t(43),r=t(327),s=t(72),a=t(602),i=t(910),l=t(929),c=t(892),d=t(584),p=t(579);const h=e=>{let{data2:n}=e;const t=(0,o.useRef)(null),[h,x]=(0,o.useState)(!0),[g,u]=(0,o.useState)(!1),[m,b]=(0,o.useState)(!1);(0,o.useEffect)((()=>{if(null!==n&&void 0!==n&&n.CoverImage){const e=new Image;e.src=n.CoverImage,e.onload=()=>u(!0)}}),[null===n||void 0===n?void 0:n.CoverImage]);const f=e=>{e.stopPropagation(),navigator.share?navigator.share({title:"Check out this amazing content!",url:window.location.href}).catch((e=>console.error("Error sharing content:",e))):b(!m)},w={facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,twitter:`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Check out this amazing content!")}`,linkedin:`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent("Check out this amazing content!")}`,whatsapp:`https://api.whatsapp.com/send?text=${encodeURIComponent("Check out this amazing content! ")}${encodeURIComponent(window.location.href)}`};(0,o.useEffect)((()=>{const e=()=>b(!1);return m&&document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[m]);return(0,o.useEffect)((()=>{(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]),(0,p.jsxs)("div",{className:"full-page-background",children:[(0,p.jsx)("div",{className:"content-container",children:(0,p.jsx)(s.A,{className:"content px-3 overflow-hidden flex-grow-1",children:(0,p.jsxs)(a.A,{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,p.jsxs)("div",{className:"img-div position-relative rounded-4 overflow-hidden",children:[(0,p.jsx)("div",{className:"blurred-bg"}),(!h||g)&&(0,p.jsxs)("video",{ref:t,loop:!0,playsInline:!0,className:"w-100 h-100 position-absolute",style:{display:h?"none":"block"},children:[(0,p.jsx)("source",{src:n.File,type:"video/mp4"}),"Your browser does not support the video tag."]}),h&&g&&(0,p.jsxs)("div",{className:"rounded-4",onClick:async()=>{if(t.current)try{t.current.volume=1,t.current.muted=!1,await t.current.play(),x(!1)}catch(e){console.error("Error playing video:",e)}},style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",zIndex:2},children:[(0,p.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:`url('${n.CoverImage}')`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",filter:"blur(10px)",zIndex:-1}}),(0,p.jsx)("img",{src:n.CoverImage,alt:"Cover",style:{width:"auto",maxWidth:"100%",maxHeight:"100%",zIndex:1}}),(0,p.jsx)("div",{className:"play-button",style:{position:"absolute",width:"60px",height:"60px",borderRadius:"50%",background:"rgba(255, 255, 255, 0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:2},children:(0,p.jsx)(i.g,{icon:l.ijD,style:{fontSize:"30px",color:"#000",marginLeft:"6px"}})})]}),!g&&(0,p.jsx)("div",{className:"loading-placeholder rounded-4",style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:2},children:(0,p.jsx)("div",{className:"spinner-border text-light",role:"status",children:(0,p.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),g&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"share-btn position-absolute text-black cursor-pointer",onClick:f,role:"button","aria-label":"Share this content",tabIndex:0,onKeyPress:e=>"Enter"===e.key&&f(),style:{zIndex:3},children:[(0,p.jsx)(i.g,{icon:l.Exz,style:{paddingLeft:"2px",fontSize:"14px"}}),m&&(0,p.jsxs)("div",{className:"share-menu",onClick:e=>e.stopPropagation(),children:[(0,p.jsxs)("div",{className:"share-menu-header",children:[(0,p.jsx)("span",{children:"Share via"}),(0,p.jsx)("button",{onClick:()=>b(!1),className:"close-btn",children:(0,p.jsx)(i.g,{icon:l.GRI})})]}),(0,p.jsxs)("div",{className:"share-options",children:[(0,p.jsxs)("a",{href:w.facebook,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,p.jsx)(i.g,{icon:c.aUl})," Facebook"]}),(0,p.jsxs)("a",{href:w.twitter,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,p.jsx)(i.g,{icon:c.HQ1})," Twitter"]}),(0,p.jsxs)("a",{href:w.linkedin,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,p.jsx)(i.g,{icon:c.IAJ})," LinkedIn"]}),(0,p.jsxs)("a",{href:w.whatsapp,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,p.jsx)(i.g,{icon:c.EYA})," WhatsApp"]})]})]})]}),(0,p.jsx)("div",{className:"position-absolute text-black cursor",style:{left:"-22px",top:"-23px",zIndex:3},children:(0,p.jsx)("img",{src:d,alt:"prankster",width:110})})]})]}),(0,p.jsx)("div",{className:"mt-3",children:(0,p.jsx)(r.A,{})})]})})}),(0,p.jsx)("style",{children:`\n        .full-page-background {\n          position: relative;\n          min-height: 100vh;\n          width: 100%;\n          display: flex;\n          overflow: hidden;\n          background-color: #1c1c1c;\n        }\n\n        .content-container {\n          position: relative;\n          z-index: 2;\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n          min-height: 100vh;\n        }\n\n        .blurred-bg {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-image: ${g&&null!==n&&void 0!==n&&n.CoverImage?`url('${n.CoverImage}')`:"none"};\n          background-size: cover;\n          background-position: center;\n          filter: blur(8px);\n          z-index: 0;\n        }\n\n        .content {\n          color: white;\n          text-align: center;\n          flex: 1;\n          display: flex;\n          align-items: center;\n        }\n\n        .ad-container {\n          margin-top: auto;\n        }\n\n        /* New styles for share menu */\n                .share-menu {\n                    position: absolute;\n                    top: 100%;\n                    right: 0;\n                    width: 200px;\n                    background: white;\n                    border-radius: 8px;\n                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n                    z-index: 1000;\n                    margin-top: 10px;\n                }\n\n                .share-menu-header {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    padding: 10px 15px;\n                    border-bottom: 1px solid #eee;\n                }\n\n                .close-btn {\n                    background: none;\n                    border: none;\n                    cursor: pointer;\n                    color: #666;\n                }\n\n                .share-option {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                    padding: 0px 0px 0px 10px;\n                    width: 100%;\n                    border: none;\n                    background: none;\n                    color: #333;\n                    text-decoration: none;\n                    cursor: pointer;\n                    transition: background-color 0.2s;\n                }\n\n                .share-option:hover {\n                    background-color: #f5f5f5;\n                    color: #333;\n                    text-decoration: none;\n                }\n      `})]})}},584:(e,n,t)=>{e.exports=t.p+"static/media/watermark.b0ff569fcea0ec396f5a.png"}}]);
//# sourceMappingURL=292.6c83f224.chunk.js.map