"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[935],{7935:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var i=t(5043),l=t(1072),s=t(8602),o=t(3910),r=t(7929),a=t(4694),c=t(5584),d=t(4771),u=t(3379),g=t(3545),x=t(2845),b=t(579);const m=e=>{let{data2:n}=e;const[t,m]=(0,i.useState)(!1),[h,v]=(0,i.useState)(!1),[p,f]=(0,i.useState)(!0),[j,k]=(0,i.useState)(!1),y=()=>{k(!0)},w=()=>{k(!1),v(!0),f(!1)},N=()=>{f(!1)};return(0,i.useEffect)((()=>{if(null!==n&&void 0!==n&&n.File){const e=new Image;e.src=n.File,e.onload=()=>m(!0)}const e=setTimeout((()=>{j&&w()}),500);return()=>clearTimeout(e)}),[null===n||void 0===n?void 0:n.File,j]),(0,b.jsxs)("div",{className:"full-page-background",children:[j&&(0,b.jsx)(g.A,{onAdComplete:()=>{k(!1),v(!0)},onAdError:w}),(0,b.jsx)("div",{className:"content-container",children:(0,b.jsx)(l.A,{className:"content px-3 overflow-hidden flex-grow-1",children:(0,b.jsxs)(s.A,{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,b.jsxs)("div",{className:"img-div mt-2 position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center border border-white",children:[(0,b.jsx)("div",{className:"blurred-bg"}),!t&&(0,b.jsx)("div",{className:"loading-placeholder rounded-4",style:{width:"100%",height:"100%",background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,b.jsx)("div",{className:"spinner-border text-light",role:"status",children:(0,b.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),t&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("img",{src:n.File,alt:"prankImage",className:"img-fluid position-absolute"}),p&&(0,b.jsxs)("div",{className:"cover-image-overlay",children:[(0,b.jsx)("div",{className:"close-button position-absolute cursor",onClick:N,role:"button","aria-label":"Close cover image",tabIndex:0,onKeyPress:e=>"Enter"===e.key&&N(),style:{zIndex:2},children:(0,b.jsx)(o.g,{icon:r.GRI})}),(0,b.jsx)("img",{src:n.CoverImage,alt:"Cover",className:"full-cover-image"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"share-btn position-absolute text-black cursor",onClick:y,role:"button","aria-label":"Share this content",tabIndex:0,onKeyPress:e=>"Enter"===e.key&&y(),style:{zIndex:2},children:(0,b.jsx)("img",{src:d,alt:"share",width:18,style:{paddingRight:"2px"}})}),(0,b.jsx)(u.A,{show:h,onHide:()=>v(!1),data2:n})]}),(0,b.jsx)("div",{className:"position-absolute text-black",style:{top:"-23px",left:"-22px",zIndex:2},children:(0,b.jsx)("img",{src:c,alt:"Prankster",width:120})})]})]}),(0,b.jsx)("div",{className:"mt-3",children:(0,b.jsx)(a.A,{})}),(0,b.jsx)(x.A,{})]})})}),(0,b.jsx)("style",{children:`\n                .full-page-background {\n                    position: relative;\n                    min-height: 100vh;\n                    width: 100%;\n                    display: flex;\n                    overflow: hidden;\n                    background-color: #1c1c1c;\n                }\n\n                .cover-image-overlay::before {\n                    content: "";\n                    position: absolute;\n                    top: -10%;\n                    left: -10%;\n                    right: -10%;\n                    bottom: -10%;\n                    background-image: ${null!==n&&void 0!==n&&n.CoverImage?`url('${n.CoverImage}')`:"none"};\n                    background-size: cover;\n                    background-position: center;\n                    filter: blur(20px); /* Increase blur effect */\n                    opacity:0.6;\n                    transform: scale(1.1); /* Scale the image slightly to remove black shadow */\n                    z-index: -1;\n                    // background: rgba(0, 0, 0, 1);\n                }\n\n                .content-container {\n                    position: relative;\n                    z-index: 2;\n                    width: 100%;\n                    display: flex;\n                    flex-direction: column;\n                    min-height: 100vh;\n                }\n\n                .img-div {\n                    position: relative;\n                    background-color: transparent;\n                }\n\n                .blurred-bg {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background-image: ${t&&null!==n&&void 0!==n&&n.File?`url('${n.File}')`:"none"};\n                    background-size: cover;\n                    background-position: center;\n                    filter: blur(15px); \n                    backdrop-filter: blur(15px); \n                    -webkit-backdrop-filter: blur(15px); \n                    z-index: 0;\n                }\n\n                .img-fluid {\n                    position: relative;\n                    z-index: 1;\n                }\n\n                .content {\n                    color: white;\n                    text-align: center;\n                }\n            `})]})}}}]);
//# sourceMappingURL=935.2b576527.chunk.js.map