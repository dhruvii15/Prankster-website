"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[769],{935:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var o=t(43),a=t(72),i=t(602),s=t(910),r=t(929),l=t(892),d=t(327),c=t(584),p=t(260),h=t(579);const g=e=>{let{data2:n}=e;const[t,g]=(0,o.useState)(!1),[x,m]=(0,o.useState)(!1),[u,b]=(0,o.useState)(!1),[f,k]=(0,o.useState)(!1);(0,o.useEffect)((()=>{if(null!==n&&void 0!==n&&n.File){const e=new Image;e.src=n.File,e.onload=()=>g(!0)}}),[null===n||void 0===n?void 0:n.File]);const w=e=>{e.stopPropagation(),f||v()},v=()=>{b(!0);const e=document.getElementById("interstitial-ad");if(e){const t=document.createElement("ins");t.className="adsbygoogle",t.style.display="block",t.setAttribute("data-ad-client","ca-pub-3940256099942544"),t.setAttribute("data-ad-slot","1234567890"),t.setAttribute("data-ad-format","fluid"),t.setAttribute("data-full-width-responsive","true"),e.innerHTML="",e.appendChild(t);try{(window.adsbygoogle=window.adsbygoogle||[]).push({callback:()=>{console.log("Ad loaded successfully"),setTimeout((()=>{b(!1),k(!0),j()}),3e3)}})}catch(n){console.error("Ad failed to load:",n),b(!1),k(!0),j()}}setTimeout((()=>{b(!1),k(!0),j()}),3e3)},j=()=>{navigator.share?(navigator.share({title:"Check out this amazing content!",url:window.location.href}).catch((e=>console.error("Error sharing content:",e))),k(!1)):(m(!x),k(!1))},y={facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,twitter:`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Check out this amazing content!")}`,linkedin:`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent("Check out this amazing content!")}`,whatsapp:`https://api.whatsapp.com/send?text=${encodeURIComponent("Check out this amazing content! ")}${encodeURIComponent(window.location.href)}`};return(0,o.useEffect)((()=>{const e=()=>m(!1);return x&&document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[x]),(0,h.jsxs)("div",{className:"full-page-background",children:[u&&(0,h.jsx)("div",{className:"interstitial-overlay",children:(0,h.jsx)("div",{id:"interstitial-ad",className:"interstitial-ad-container",children:(0,h.jsx)("div",{className:"ad-loading",children:"Loading advertisement..."})})}),(0,h.jsxs)("div",{className:"content-container",children:[(0,h.jsx)(a.A,{className:"content px-3 overflow-hidden flex-grow-1",children:(0,h.jsxs)(i.A,{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,h.jsxs)("div",{className:"img-div position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center",children:[(0,h.jsx)("div",{className:"blurred-bg"}),(0,h.jsx)("img",{src:n.File,alt:"prankImage",className:"img-fluid position-absolute",style:{display:t?"block":"none"}}),!t&&(0,h.jsx)("div",{className:"loading-placeholder rounded-4",style:{width:"100%",height:"100%",background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,h.jsx)("div",{className:"spinner-border text-light",role:"status",children:(0,h.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"share-btn position-absolute text-black cursor",onClick:w,role:"button","aria-label":"Share this content",tabIndex:0,onKeyPress:e=>"Enter"===e.key&&w(),style:{zIndex:2},children:[(0,h.jsx)(s.g,{icon:p.ek,style:{fontSize:"18px",paddingRight:"2px"}}),x&&(0,h.jsxs)("div",{className:"share-menu",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"share-menu-header",children:[(0,h.jsx)("span",{children:"Share via"}),(0,h.jsx)("button",{onClick:()=>m(!1),className:"close-btn",children:(0,h.jsx)(s.g,{icon:r.GRI})})]}),(0,h.jsxs)("div",{className:"share-options",children:[(0,h.jsxs)("a",{href:y.facebook,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,h.jsx)(s.g,{icon:l.aUl})," Facebook"]}),(0,h.jsxs)("a",{href:y.twitter,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,h.jsx)(s.g,{icon:l.HQ1})," Twitter"]}),(0,h.jsxs)("a",{href:y.linkedin,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,h.jsx)(s.g,{icon:l.IAJ})," LinkedIn"]}),(0,h.jsxs)("a",{href:y.whatsapp,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,h.jsx)(s.g,{icon:l.EYA})," WhatsApp"]})]})]})]}),(0,h.jsx)("div",{className:"position-absolute text-black",style:{top:"-23px",left:"-22px",zIndex:2},children:(0,h.jsx)("img",{src:c,alt:"prankster",width:110})})]})]}),(0,h.jsx)("div",{className:"mt-3",children:(0,h.jsx)(d.A,{})})]})}),(0,h.jsx)("div",{className:"ad-container py-2 ads-div mx-auto",children:(0,h.jsx)("ins",{className:"adsbygoogle border",style:{display:"block",height:"50px",width:"99%"},"data-ad-format":"fluid","data-ad-layout-key":"-6t+ed+2i-1n-4w","data-ad-client":"ca-pub-YOUR_PUBLISHER_ID","data-ad-slot":"YOUR_AD_SLOT_ID"})})]}),(0,h.jsx)("style",{children:`\n                .full-page-background {\n                    position: relative;\n                    min-height: 100vh;\n                    width: 100%;\n                    display: flex;\n                    overflow: hidden;\n                    background-color: #1c1c1c;\n                }\n\n                .content-container {\n                    position: relative;\n                    z-index: 2;\n                    width: 100%;\n                    display: flex;\n                    flex-direction: column;\n                    min-height: 100vh;\n                }\n\n                .img-div {\n                    position: relative;\n                    background-color: transparent;\n                }\n\n                .blurred-bg {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background-image: ${t&&null!==n&&void 0!==n&&n.File?`url('${n.File}')`:"none"};\n                    background-size: cover;\n                    background-position: center;\n                    filter: blur(15px); \n                    backdrop-filter: blur(15px); \n                    -webkit-backdrop-filter: blur(15px); \n                    z-index: 0;\n                }\n\n                .img-fluid {\n                    position: relative;\n                    z-index: 1;\n                }\n\n                .content {\n                    color: white;\n                    padding: 20px;\n                    text-align: center;\n                }\n\n                .share-menu {\n                    position: absolute;\n                    top: 100%;\n                    right: 0;\n                    width: 200px;\n                    background: white;\n                    border-radius: 8px;\n                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n                    z-index: 1000;\n                    margin-top: 10px;\n                }\n\n                .share-menu-header {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    padding: 10px 15px;\n                    border-bottom: 1px solid #eee;\n                }\n\n                .close-btn {\n                    background: none;\n                    border: none;\n                    cursor: pointer;\n                    color: #666;\n                }\n\n                .share-option {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                    padding: 10px 15px;\n                    width: 100%;\n                    border: none;\n                    background: none;\n                    color: #333;\n                    text-decoration: none;\n                    cursor: pointer;\n                    transition: background-color 0.2s;\n                }\n\n                .share-option:hover {\n                    background-color: #f5f5f5;\n                    color: #333;\n                    text-decoration: none;\n                }\n\n                .interstitial-overlay {\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background: rgba(0, 0, 0, 0.8);\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    z-index: 9999;\n                }\n\n                .interstitial-ad-container {\n                    background: white;\n                    padding: 20px;\n                    border-radius: 8px;\n                    width: 90%;\n                    max-width: 400px;\n                    min-height: 300px;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n\n                .ad-loading {\n                    color: #666;\n                    font-size: 16px;\n                    text-align: center;\n                }\n            `})]})}},327:(e,n,t)=>{t.d(n,{A:()=>s});t(43);var o=t(155);const a=t.p+"static/media/lol.98760c675bd6e5fc3af3.png";var i=t(579);const s=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{className:"mt-3 border-0 py-2 fs-5 text-black",style:{backgroundColor:"#F9E238",width:"95%",fontWeight:"600"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.yourapp.package","_blank")},children:"Make own prank \ud83d\ude02"}),(0,i.jsxs)(o.A,{className:"mt-3 border-0 py-2 fs-5 text-black overflow-hidden",style:{background:"linear-gradient(to right, #FA4F54, #FD7C41)",width:"95%",height:"50px"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.lol.android","_blank")},children:[(0,i.jsx)("img",{src:a,alt:"lol",className:"btnlol",width:60}),(0,i.jsx)("p",{className:"btntext text-white pt-3",style:{fontWeight:"450"},children:"Download!"})]})]})},584:(e,n,t)=>{e.exports=t.p+"static/media/watermark.b0ff569fcea0ec396f5a.png"}}]);
//# sourceMappingURL=769.298dcc8d.chunk.js.map