"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[292],{327:(e,n,t)=>{t.d(n,{A:()=>r});t(43);var o=t(155);const a=t.p+"static/media/lol.98760c675bd6e5fc3af3.png";var i=t(579);const r=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{className:"mt-3 border-0 py-2 fs-5 text-black",style:{backgroundColor:"#F9E238",width:"95%",fontWeight:"600"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.yourapp.package","_blank")},children:"Make own prank \ud83d\ude02"}),(0,i.jsxs)(o.A,{className:"mt-3 border-0 py-2 fs-5 text-black overflow-hidden",style:{background:"linear-gradient(to right, #FA4F54, #FD7C41)",width:"95%",height:"50px"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.lol.android","_blank")},children:[(0,i.jsx)("img",{src:a,alt:"lol",className:"btnlol",width:60}),(0,i.jsx)("p",{className:"btntext text-white pt-3",style:{fontWeight:"450"},children:"Download!"})]})]})},830:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var o=t(43),a=t(327),i=t(72),r=t(602),s=t(910),l=t(929),c=t(892),d=t(584),p=t(260),h=t(579);const g=e=>{let{data2:n}=e;const t=(0,o.useRef)(null),[g,u]=(0,o.useState)(!0),[x,m]=(0,o.useState)(!1),[b,f]=(0,o.useState)(!1),[w,k]=(0,o.useState)(!1),[v,y]=(0,o.useState)(!1),[j,C]=(0,o.useState)(!1);(0,o.useEffect)((()=>{if(null!==n&&void 0!==n&&n.CoverImage){const e=new Image;e.src=n.CoverImage,e.onload=()=>m(!0)}}),[null===n||void 0===n?void 0:n.CoverImage]);const N=e=>{e.stopPropagation(),j?navigator.share?navigator.share({title:"Check out this amazing content!",url:window.location.href}).catch((e=>console.error("Error sharing content:",e))):f(!b):I()},I=()=>{k(!0);const e=document.getElementById("interstitial-ad");if(e){const t=document.createElement("ins");t.className="adsbygoogle",t.style.display="block",t.setAttribute("data-ad-client","ca-pub-3940256099942544"),t.setAttribute("data-ad-slot","1234567890"),t.setAttribute("data-ad-format","fluid"),t.setAttribute("data-full-width-responsive","true"),e.innerHTML="",e.appendChild(t);try{(window.adsbygoogle=window.adsbygoogle||[]).push({callback:()=>{console.log("Ad loaded successfully"),setTimeout((()=>{k(!1),C(!0),z()}),3e3)}})}catch(n){console.error("Ad failed to load:",n),k(!1),C(!0),z()}}setTimeout((()=>{k(!1),C(!0),z()}),3e3)},z=()=>{navigator.share?(navigator.share({title:"Check out this amazing content!",url:window.location.href}).catch((e=>console.error("Error sharing content:",e))),C(!1)):(f(!b),C(!1))},A={facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,twitter:`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Check out this amazing content!")}`,linkedin:`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent("Check out this amazing content!")}`,whatsapp:`https://api.whatsapp.com/send?text=${encodeURIComponent("Check out this amazing content! ")}${encodeURIComponent(window.location.href)}`};return(0,o.useEffect)((()=>{const e=()=>f(!1);return b&&document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[b]),(0,h.jsxs)("div",{className:"full-page-background",children:[w&&(0,h.jsx)("div",{className:"interstitial-overlay",children:(0,h.jsx)("div",{id:"interstitial-ad",className:"interstitial-ad-container",children:(0,h.jsx)("div",{className:"ad-loading",children:"Loading advertisement..."})})}),(0,h.jsx)("div",{className:"content-container",children:(0,h.jsx)(i.A,{className:"content px-3 overflow-hidden flex-grow-1",children:(0,h.jsxs)(r.A,{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,h.jsxs)("div",{className:"img-div3 position-relative rounded-4 overflow-hidden",children:[(0,h.jsx)("div",{className:"blurred-bg"}),(!g||x)&&(0,h.jsxs)("video",{ref:t,loop:!0,playsInline:!0,className:"w-100 h-100 position-absolute",style:{display:g?"none":"block"},children:[(0,h.jsx)("source",{src:n.File,type:"video/mp4"}),"Your browser does not support the video tag."]}),g&&x&&(0,h.jsxs)("div",{className:"rounded-4",onClick:async()=>{if(t.current)try{t.current.volume=1,t.current.muted=!1,await t.current.play(),y(!0),u(!1)}catch(e){console.error("Error playing video:",e)}},style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",zIndex:2},children:[(0,h.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:`url('${n.CoverImage}')`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",filter:"blur(10px)",zIndex:-1}}),(0,h.jsx)("img",{src:n.CoverImage,alt:"Cover",style:{width:"auto",maxWidth:"100%",maxHeight:"100%",zIndex:1}}),(0,h.jsx)("div",{className:"play-button",style:{position:"absolute",width:"60px",height:"60px",borderRadius:"50%",background:"#F9E238",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid black",zIndex:2},children:(0,h.jsx)(s.g,{icon:l.ijD,style:{fontSize:"28px",color:"#000",marginLeft:"5px"}})})]}),!x&&(0,h.jsx)("div",{className:"loading-placeholder rounded-4",style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:2},children:(0,h.jsx)("div",{className:"spinner-border text-light",role:"status",children:(0,h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),x&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"share-btn position-absolute text-black cursor-pointer",onClick:N,role:"button","aria-label":"Share this content",tabIndex:0,onKeyPress:e=>"Enter"===e.key&&N(),style:{zIndex:3},children:[(0,h.jsx)(s.g,{icon:p.ek,style:{fontSize:"18px",paddingRight:"2px"}}),b&&(0,h.jsxs)("div",{className:"share-menu",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"share-menu-header",children:[(0,h.jsx)("span",{children:"Share via"}),(0,h.jsx)("button",{onClick:()=>f(!1),className:"close-btn",children:(0,h.jsx)(s.g,{icon:l.GRI})})]}),(0,h.jsxs)("div",{className:"share-options",children:[(0,h.jsxs)("a",{href:A.facebook,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,h.jsx)(s.g,{icon:c.aUl})," Facebook"]}),(0,h.jsxs)("a",{href:A.twitter,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,h.jsx)(s.g,{icon:c.HQ1})," Twitter"]}),(0,h.jsxs)("a",{href:A.linkedin,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,h.jsx)(s.g,{icon:c.IAJ})," LinkedIn"]}),(0,h.jsxs)("a",{href:A.whatsapp,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,h.jsx)(s.g,{icon:c.EYA})," WhatsApp"]})]})]})]}),(0,h.jsx)("div",{className:"position-absolute text-black",style:{left:"-22px",top:"-23px",zIndex:3},children:(0,h.jsx)("img",{src:d,alt:"Prankster",width:110})})]}),v&&(0,h.jsx)("div",{className:"share-btn2 position-absolute",style:{left:"5px",bottom:"10px",zIndex:3,cursor:"pointer"},children:(0,h.jsx)(s.g,{icon:l.G1Y,className:"fs-5 text-black"})})]}),(0,h.jsx)("div",{className:"mt-3",children:(0,h.jsx)(a.A,{})})]})})}),(0,h.jsx)("style",{children:`\n        .full-page-background {\n          position: relative;\n          min-height: 100vh;\n          width: 100%;\n          display: flex;\n          overflow: hidden;\n          background-color: #1c1c1c;\n        }\n\n        .content-container {\n          position: relative;\n          z-index: 2;\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n          min-height: 100vh;\n        }\n\n        .blurred-bg {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-image: ${x&&null!==n&&void 0!==n&&n.CoverImage?`url('${n.CoverImage}')`:"none"};\n          background-size: cover;\n          background-position: center;\n          filter: blur(8px);\n          z-index: 0;\n        }\n\n        .content {\n          color: white;\n          text-align: center;\n          flex: 1;\n          display: flex;\n          align-items: center;\n        }\n\n        .ad-container {\n          margin-top: auto;\n        }\n\n        /* New styles for share menu */\n                .share-menu {\n                    position: absolute;\n                    top: 100%;\n                    right: 0;\n                    width: 200px;\n                    background: white;\n                    border-radius: 8px;\n                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n                    z-index: 1000;\n                    margin-top: 10px;\n                }\n\n                .share-menu-header {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    padding: 10px 15px;\n                    border-bottom: 1px solid #eee;\n                }\n\n                .close-btn {\n                    background: none;\n                    border: none;\n                    cursor: pointer;\n                    color: #666;\n                }\n\n                .share-option {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                    padding: 0px 0px 0px 10px;\n                    width: 100%;\n                    border: none;\n                    background: none;\n                    color: #333;\n                    text-decoration: none;\n                    cursor: pointer;\n                    transition: background-color 0.2s;\n                }\n\n                .share-option:hover {\n                    background-color: #f5f5f5;\n                    color: #333;\n                    text-decoration: none;\n                }\n                    \n                .interstitial-overlay {\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background: rgba(0, 0, 0, 0.8);\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    z-index: 9999;\n                }\n\n                .interstitial-ad-container {\n                    background: white;\n                    padding: 20px;\n                    border-radius: 8px;\n                    width: 90%;\n                    max-width: 400px;\n                    min-height: 300px;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n\n                .ad-loading {\n                    color: #666;\n                    font-size: 16px;\n                    text-align: center;\n                }\n      `})]})}},584:(e,n,t)=>{e.exports=t.p+"static/media/watermark.b86b1a3a0f67bdd5f91f.png"}}]);
//# sourceMappingURL=292.0c2f08b6.chunk.js.map