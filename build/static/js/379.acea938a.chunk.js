"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[379],{809:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(43),r=t(486),s=t(72),o=t(602),i=t(910),l=t(929),c=t(892),d=t(584),u=t(579);const p=e=>{let{currentTime:n,totalDuration:t,className:r}=e;const[s,o]=(0,a.useState)(36),[i,l]=(0,a.useState)(0),c=(0,a.useRef)(null),d=(0,a.useRef)(null);(0,a.useEffect)((()=>{const e=()=>{if(c.current){const e=c.current.offsetWidth,n=Math.floor(e/6),t=Math.max(16,Math.min(n,64));o(t)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,a.useEffect)((()=>{const e=()=>{if(t){const a=n/t*100;l(a>=99.9?0:e=>{const n=.1*(a-e);return Math.abs(n)<.01?a:e+n}),d.current=requestAnimationFrame(e)}};return d.current=requestAnimationFrame(e),()=>{d.current&&cancelAnimationFrame(d.current)}}),[n,t]);return(0,u.jsx)("div",{ref:c,className:`py-3 d-flex align-items-center justify-content-start ${r}`,style:{height:"50px",overflow:"hidden"},children:(0,u.jsx)("div",{className:"d-flex align-items-center",children:(()=>{const e=[];for(let n=0;n<s;n++){const t=n/s*100<=i,a=Math.floor(24*Math.random())+9;e.push((0,u.jsx)("div",{className:"d-inline-block rounded",style:{width:"2px",height:`${a}px`,backgroundColor:t?"#F9E238":"white",margin:"0px 3px",transition:"all 0.2s ease-out"}},n))}return e})()})})};var h=t(771);const m=e=>{var n;let{data2:t}=e;const m=(0,a.useRef)(null),[x,g]=(0,a.useState)("0:00"),[f,b]=(0,a.useState)("0:00"),[v,w]=(0,a.useState)(!0),[j,k]=(0,a.useState)(!1),[y,A]=(0,a.useState)(0),[N,C]=(0,a.useState)(!1),[I,E]=(0,a.useState)(!1),[R,L]=(0,a.useState)(!1),[S,B]=(0,a.useState)(!1),M=e=>{const n=Math.floor(e/60),t=Math.floor(e%60);return`${n}:${t<10?"0":""}${t}`};(0,a.useEffect)((()=>{if(null!==t&&void 0!==t&&t.CoverImage){const e=new Image;e.src=t.CoverImage,e.onload=()=>k(!0)}}),[null===t||void 0===t?void 0:t.CoverImage]),(0,a.useEffect)((()=>{const e=m.current,n=()=>{const n=e.currentTime,t=e.duration;g(M(n)),b(M(t)),A(t)};if(e)return e.addEventListener("timeupdate",n),e.addEventListener("loadedmetadata",n),()=>{e.removeEventListener("timeupdate",n),e.removeEventListener("loadedmetadata",n)}}),[]);const U=e=>{e.stopPropagation(),S?navigator.share?navigator.share({title:`${t.Name}\n\n\ud83d\udd17Check this out : \n`,url:t.ShareURL}).catch((e=>console.error("Error sharing content:",e))):C(!N):z()},z=()=>{L(!0);const e=document.getElementById("interstitial-ad");if(e){const t=document.createElement("ins");t.className="adsbygoogle",t.style.display="block",t.setAttribute("data-ad-client","ca-pub-3940256099942544"),t.setAttribute("data-ad-slot","1234567890"),t.setAttribute("data-ad-format","fluid"),t.setAttribute("data-full-width-responsive","true"),e.innerHTML="",e.appendChild(t);try{(window.adsbygoogle=window.adsbygoogle||[]).push({callback:()=>{console.log("Ad loaded successfully"),setTimeout((()=>{L(!1),B(!0),F()}),3e3)}})}catch(n){console.error("Ad failed to load:",n),L(!1),B(!0),F()}}setTimeout((()=>{L(!1),B(!0),F()}),3e3)},F=()=>{navigator.share?(navigator.share({title:t.Name,text:`${t.Name}\n\n\ud83d\udd17Check this out : \n`,url:t.ShareURL}).catch((e=>console.error("Error sharing content:",e))),B(!1)):(C(!N),B(!1))},$={facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(t.ShareURL)}`,twitter:`https://twitter.com/intent/tweet?url=${encodeURIComponent(t.ShareURL)}&text=${encodeURIComponent(`${t.Name}\n\n\ud83d\udd17Check this out : \n`)}`,linkedin:`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(t.ShareURL)}&title=${encodeURIComponent(`${t.Name}\n\n\ud83d\udd17Check this out : \n`)}`,whatsapp:`https://api.whatsapp.com/send?text=${encodeURIComponent(`${t.Name}\n\n\ud83d\udd17Check this out : \n`)}${encodeURIComponent(t.ShareURL)}`};return(0,a.useEffect)((()=>{const e=()=>C(!1);return N&&document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[N]),(0,u.jsxs)("div",{className:"full-page-background",children:[R&&(0,u.jsx)("div",{className:"interstitial-overlay",children:(0,u.jsx)("div",{id:"interstitial-ad",className:"interstitial-ad-container",children:(0,u.jsx)("div",{className:"ad-loading",children:"Loading advertisement..."})})}),(0,u.jsx)("div",{className:"content-container",children:(0,u.jsx)(s.A,{className:"content p-0 overflow-hidden flex-grow-1",children:(0,u.jsxs)(o.A,{className:"d-flex flex-column align-items-center justify-content-center",children:[(0,u.jsxs)("div",{className:"img-div2 position-relative overflow-hidden rounded-4 d-flex align-items-center justify-content-center border border-white",children:[(0,u.jsx)("div",{className:"blurred-bg"}),(0,u.jsxs)("audio",{ref:m,loop:!0,onEnded:()=>E(!1),children:[(0,u.jsx)("source",{src:t.File,type:"audio/mp3"}),"Your browser does not support the audio tag."]}),!j&&(0,u.jsx)("div",{className:"rounded-4",style:{width:"100%",height:"100%",aspectRatio:"16/9",background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto"},children:(0,u.jsx)("div",{className:"spinner-border text-light",role:"status",children:(0,u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),j&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{src:t.CoverImage,alt:"prankImage",className:"img-fluid h-100 position-absolute"}),(v||!I)&&(0,u.jsx)("div",{onClick:async()=>{if(m.current)try{m.current.volume=1,m.current.muted=!1,await m.current.play(),w(!1),E(!0)}catch(e){console.error("Error playing audio:",e)}},className:"rounded-4",style:{position:"absolute",top:0,left:"0%",width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",zIndex:2},children:(0,u.jsx)("div",{style:{width:"50px",height:"50px",borderRadius:"50%",background:"#F9E238",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid black"},children:(0,u.jsx)(i.g,{icon:l.ijD,style:{fontSize:"20px",color:"#000",marginLeft:"3px"}})})}),(0,u.jsxs)("div",{className:"share-btn position-absolute text-black cursor text-center",style:{right:"12px",bottom:"12px",zIndex:3},onClick:U,role:"button","aria-label":"Share this content",tabIndex:0,onKeyPress:e=>"Enter"===e.key&&U(),children:[(0,u.jsx)("img",{src:h,alt:"share",width:18,style:{paddingRight:"2px"}}),N&&(0,u.jsxs)("div",{className:"share-menu",onClick:e=>e.stopPropagation(),children:[(0,u.jsxs)("div",{className:"share-menu-header",children:[(0,u.jsx)("span",{children:"Share via"}),(0,u.jsx)("button",{onClick:()=>C(!1),className:"close-btn",children:(0,u.jsx)(i.g,{icon:l.GRI})})]}),(0,u.jsxs)("div",{className:"share-options",children:[(0,u.jsxs)("a",{href:$.facebook,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,u.jsx)(i.g,{icon:c.aUl})," Facebook"]}),(0,u.jsxs)("a",{href:$.twitter,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,u.jsx)(i.g,{icon:c.HQ1})," Twitter"]}),(0,u.jsxs)("a",{href:$.linkedin,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,u.jsx)(i.g,{icon:c.IAJ})," LinkedIn"]}),(0,u.jsxs)("a",{href:$.whatsapp,target:"_blank",rel:"noopener noreferrer",className:"share-option",children:[(0,u.jsx)(i.g,{icon:c.EYA})," WhatsApp"]})]})]})]}),(0,u.jsx)("div",{className:"position-absolute text-black",style:{left:"-22px",top:"-23px",zIndex:3},children:(0,u.jsx)("img",{src:d,alt:"Prankster",width:110})}),(0,u.jsxs)("div",{className:"position-absolute text-black cursor w-100 px-2 ",style:{backgroundColor:"rgba(217, 217, 217, 0.4)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",left:"0",bottom:"0px"},children:[(0,u.jsx)("p",{className:"m-0 mx-auto w-100 pt-2 text-black justify-content-center gap-2",children:(0,u.jsx)("span",{children:t.Name})}),(0,u.jsxs)("div",{className:"d-flex align-items-center gap-3 justify-content-center",children:[I&&(0,u.jsx)("div",{style:{width:"40px"},children:(0,u.jsx)("div",{className:"pause-btn",children:(0,u.jsx)(i.g,{icon:l.G1Y,className:"fs-5 pt-2"})})}),(0,u.jsx)(p,{currentTime:(null===(n=m.current)||void 0===n?void 0:n.currentTime)||0,totalDuration:y})]})]})]})]}),(0,u.jsx)("div",{className:"mt-3",children:(0,u.jsx)(r.A,{})})]})})}),(0,u.jsx)("style",{children:`\n                .full-page-background {\n                    position: relative;\n                    min-height: 100vh;\n                    width: 100%;\n                    display: flex;\n                    overflow: hidden;\n                    background-color: #1c1c1c;\n                }\n\n                .content-container {\n                    position: relative;\n                    z-index: 2;\n                    width: 100%;\n                    display: flex;\n                    flex-direction: column;\n                    min-height: 100vh;\n                }\n\n                .blurred-bg {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background-image: ${j&&null!==t&&void 0!==t&&t.CoverImage?`url('${t.CoverImage}')`:"none"};\n                    background-size: cover;\n                    background-position: center;\n                    filter: blur(8px);\n                    z-index: 0;\n                }\n\n                .content {\n                    color: white;\n                    text-align: center;\n                }\n\n                .ad-container {\n                    margin-top: auto;\n                }\n\n                /* New styles for share menu */\n                .share-menu {\n                    position: absolute;\n                    top: 100%;\n                    right: 0;\n                    width: 200px;\n                    background: white;\n                    border-radius: 8px;\n                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n                    z-index: 1000;\n                    margin-top: 10px;\n                }\n\n                .share-menu-header {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    padding: 10px 15px;\n                    border-bottom: 1px solid #eee;\n                }\n\n                .close-btn {\n                    background: none;\n                    border: none;\n                    cursor: pointer;\n                    color: #666;\n                }\n\n\n                .share-option {\n                    display: flex;\n                    align-items: center;\n                    gap: 10px;\n                    padding: 0px 0px 0px 10px;\n                    width: 100%;\n                    border: none;\n                    background: none;\n                    color: #333;\n                    text-decoration: none;\n                    cursor: pointer;\n                    transition: background-color 0.2s;\n                }\n\n                .share-option:hover {\n                    background-color: #f5f5f5;\n                    color: #333;\n                    text-decoration: none;\n                }\n\n                .interstitial-overlay {\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background: rgba(0, 0, 0, 0.8);\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    z-index: 9999;\n                }\n\n                .interstitial-ad-container {\n                    background: white;\n                    width: 100%;\n                    max-width: 100vw;\n                    min-height: 100vh;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n\n                .ad-loading {\n                    color: #666;\n                    font-size: 16px;\n                    text-align: center;\n                }\n            `})]})}},486:(e,n,t)=>{t.d(n,{A:()=>f});var a=t(43),r=t(139),s=t.n(r),o=t(579);const i=["as","disabled"];function l(e){let{tagName:n,disabled:t,href:a,target:r,rel:s,role:o,onClick:i,tabIndex:l=0,type:c}=e;n||(n=null!=a||null!=r||null!=s?"a":"button");const d={tagName:n};if("button"===n)return[{type:c||"button",disabled:t},d];const u=e=>{(t||"a"===n&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),t?e.stopPropagation():null==i||i(e)};return"a"===n&&(a||(a="#"),t&&(a=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:l,href:a,target:"a"===n?r:void 0,"aria-disabled":t||void 0,rel:"a"===n?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const c=a.forwardRef(((e,n)=>{let{as:t,disabled:a}=e,r=function(e,n){if(null==e)return{};var t={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.indexOf(a)>=0)continue;t[a]=e[a]}return t}(e,i);const[s,{tagName:c}]=l(Object.assign({tagName:t,disabled:a},r));return(0,o.jsx)(c,Object.assign({},r,s,{ref:n}))}));c.displayName="Button";var d=t(852);const u=a.forwardRef(((e,n)=>{let{as:t,bsPrefix:a,variant:r="primary",size:i,active:c=!1,disabled:u=!1,className:p,...h}=e;const m=(0,d.oU)(a,"btn"),[x,{tagName:g}]=l({tagName:t,disabled:u,...h}),f=g;return(0,o.jsx)(f,{...x,...h,ref:n,disabled:u,className:s()(p,m,c&&"active",r&&`${m}-${r}`,i&&`${m}-${i}`,h.href&&u&&"disabled")})}));u.displayName="Button";const p=u;var h=t(72),m=t(602);const x=t.p+"static/media/lol.98760c675bd6e5fc3af3.png",g=t.p+"static/media/pranklogo.129a902f60c4c50a365a.png",f=()=>{const e="https://play.google.com/store/apps/details?id=com.prank.android",n="https://play.google.com/store/apps/details?id=com.lol.android",t=/Android/i.test(navigator.userAgent),a=/iPhone|iPad|iPod/i.test(navigator.userAgent);return(0,o.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[(0,o.jsxs)(p,{className:"mt-3 border-0 py-2 fs-5 text-black overflow-hidden",style:{backgroundColor:"#F9E238",width:"130%",fontWeight:"600",height:"50px"},onClick:()=>{t?window.open(e,"_blank"):a?window.open("https://apps.apple.com/us/app/prankster/id6739135275","_blank"):window.open(e,"_blank")},children:[(0,o.jsx)("p",{className:"btnlol",children:"Make your own pranks!"}),(0,o.jsx)("p",{className:"btntext pt-4",style:{fontWeight:"450"},children:"Download"}),(0,o.jsx)("img",{src:g,alt:"lol",className:"btnimg",width:130})]}),(0,o.jsxs)(h.A,{className:"d-flex align-items-center",style:{width:"130%"},children:[(0,o.jsx)(m.A,{xs:4,className:"p-0",children:(0,o.jsx)("hr",{style:{border:"1px solid #ffffff"}})}),(0,o.jsx)(m.A,{xs:4,className:"p-0",style:{fontSize:"14px",fontWeight:"300",color:"#c1c1c1"},children:"More App"}),(0,o.jsx)(m.A,{xs:4,className:"p-0",children:(0,o.jsx)("hr",{style:{border:"1px solid white"}})})]}),(0,o.jsx)(p,{className:"border-0 py-2 fs-5 text-black overflow-hidden",style:{background:"linear-gradient(to right, #FA4F54, #FD7C41)",width:"130%",height:"50px"},onClick:()=>{t?window.open(n,"_blank"):a?window.open("https://apps.apple.com/us/app/lol-anonymous-funny-card/id6670788272","_blank"):window.open(n,"_blank")},children:(0,o.jsx)("img",{src:x,alt:"lol",width:60})})]})}},771:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAYAAAAbW8YEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGySURBVHgBvVfRccIwDH1HF8gGaIOyQbIBfPYPNoANyAZ0g3QDRqAb0A3MBtAJWuuQzo6JDQeCd/fOIdJZsiwp4g3PQeX54Tn1JM9fzxOeiJXn0fMv4QZPQisGnOfcs8b5tHt5v4MxKDJYDcg3Ip/DELrpJCNnRzjspqfdidESOMxuBDscZK2u6J0sjWpJTDNywjn0PzBAgxBa5lEMpAadyAkPgDy36NdhjVCjLFt7dtG79dBGE1FyQj5BmuJ8Z2200Q5971NnVKceMriKlPaieIx+V+h3m+xGkXNjFBKLEAo73WideK3d5mFoIlBG3omc12slcTP04nNoRGcJA3CdkjyXPj0HWU1OOZINTyjXzyQxbgJt1k1GroXNV0AwAuFcCkwuCw1jg5BkcdfpYGScQ+hw+cWPOwlFxlm3zexVicMLzxlucJAVO6G2tiEdh+G6zY0rLYywSIx/Rs9LcTjW6WAEQkjE0rjyhXKy3gU1XGfkOq5sYQhNsBLMxxXtaC8dV75lzU2DBMNxRaF35nBZlxVCBr/DGAv0uxY3lQ2ujCsWIIS/EfEkMsMLwCHl8hmngn/F3qPtwCl3KgAAAABJRU5ErkJggg=="},584:(e,n,t)=>{e.exports=t.p+"static/media/watermark.b86b1a3a0f67bdd5f91f.png"}}]);
//# sourceMappingURL=379.acea938a.chunk.js.map