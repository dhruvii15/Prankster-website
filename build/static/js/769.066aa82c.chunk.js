"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[769],{935:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var o=t(43),a=t(327),i=t(72),l=t(602),s=t(910),r=t(929),c=t(584),d=t(579);const h=e=>{let{data2:n}=e;const[t,h]=(0,o.useState)(!1);(0,o.useEffect)((()=>{if(null!==n&&void 0!==n&&n.File){const e=new Image;e.src=n.File,e.onload=()=>h(!0)}}),[null===n||void 0===n?void 0:n.File]);const g=async()=>{if(navigator.share)try{await navigator.share({title:"Check out this amazing content!",text:"This is an awesome website I wanted to share with you.",url:window.location.href}),console.log("Content shared successfully")}catch(e){console.error("Error sharing content:",e)}else alert("Web Share API not supported in this browser.")};return(0,o.useEffect)((()=>{(window.adsbygoogle=window.adsbygoogle||[]).push({})}),[]),(0,d.jsxs)("div",{className:"full-page-background",children:[(0,d.jsx)("div",{className:"content-container",children:(0,d.jsx)(i.A,{className:"content px-3 overflow-hidden flex-grow-1",children:(0,d.jsxs)(l.A,{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,d.jsxs)("div",{className:"img-div position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center",style:{backgroundColor:"rgba(0,0,0,0.6)"},children:[(0,d.jsx)("img",{src:n.File,alt:"prankImage",className:"img-fluid",style:{display:t?"block":"none"}}),!t&&(0,d.jsx)("div",{className:"loading-placeholder rounded-4",style:{width:"100%",height:"100%",background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,d.jsx)("div",{className:"spinner-border text-light",role:"status",children:(0,d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"share-btn position-absolute text-black cursor",onClick:g,role:"button","aria-label":"Share this content",tabIndex:0,onKeyPress:e=>"Enter"===e.key&&g(),children:(0,d.jsx)(s.g,{icon:r.Exz,style:{paddingLeft:"2px",fontSize:"14px"}})}),(0,d.jsx)("div",{className:"position-absolute text-black cursor",style:{left:"-22px",top:"-23px"},children:(0,d.jsx)("img",{src:c,alt:"prankster",width:110})})]})]}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)(a.A,{})})]})})}),(0,d.jsx)("style",{children:`\n                .full-page-background {\n                    position: relative;\n                    min-height: 100vh;\n                    width: 100%;\n                    display: flex;\n                    overflow: hidden;\n                    background-color: #808080;\n                }\n\n                .content-container {\n                    position: relative;\n                    z-index: 2;\n                    width: 100%;\n                    display: flex;\n                    flex-direction: column;\n                    min-height: 100vh;\n                }\n\n                .full-page-background::before {\n                    content: '';\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background-image: ${t&&null!==n&&void 0!==n&&n.File?`url('${n.File}')`:"none"};\n                    background-size: cover;\n                    background-position: center;\n                    z-index: 0;\n                }\n\n                .full-page-background::after {\n                    content: '';\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background: rgba(27, 26, 26, 0.2);\n                    backdrop-filter: blur(10px);\n                    -webkit-backdrop-filter: blur(10px);\n                    z-index: 1;\n                }\n\n                .content {\n                    color: white;\n                    padding: 20px;\n                    text-align: center;\n                }\n\n                .ad-container {\n                    margin-top: auto; \n                    padding: 0;\n                }\n\n                .centered-image {\n                    max-width: 100%;\n                    max-height: 80vh;\n                    object-fit: contain;\n                }\n            `})]})}},327:(e,n,t)=>{t.d(n,{A:()=>l});t(43);var o=t(155);const a=t.p+"static/media/lol.98760c675bd6e5fc3af3.png";var i=t(579);const l=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{className:"mt-3 border-0 py-2 fs-5 text-black",style:{backgroundColor:"#F9E238",width:"90%",fontWeight:"600"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.yourapp.package","_blank")},children:"Make own prank \ud83d\ude02"}),(0,i.jsxs)(o.A,{className:"mt-3 border-0 py-2 fs-5 text-black overflow-hidden",style:{background:"linear-gradient(to right, #FA4F54, #FD7C41)",width:"90%",height:"50px"},onClick:()=>{window.open("https://play.google.com/store/apps/details?id=com.lol.android","_blank")},children:[(0,i.jsx)("img",{src:a,alt:"lol",className:"btnlol",width:60}),(0,i.jsx)("p",{className:"btntext text-white pt-3",style:{fontWeight:"450"},children:"Download!"})]})]})},584:(e,n,t)=>{e.exports=t.p+"static/media/watermark.b0ff569fcea0ec396f5a.png"}}]);
//# sourceMappingURL=769.066aa82c.chunk.js.map