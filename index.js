import{a as d,S as u,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="49785510-c79f1c3ac74fac394468dbc2f",p="https://pixabay.com/api/";async function m(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(p,{params:o})).data}catch(e){throw console.error("Error fetching data:",e.message),e}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="info">
            <div>
              <p><b>Likes:</b> ${e.likes}</p>
            </div>
            <div>
              <p><b>Views:</b> ${e.views}</p>
            </div>
            <div>
              <p><b>Comments:</b> ${e.comments}</p>
            </div>
            <div>
              <p><b>Downloads:</b> ${e.downloads}</p>
            </div>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("is-hidden")}function L(){l.classList.add("is-hidden")}const v=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');v.addEventListener("submit",async s=>{s.preventDefault();const o=w.value.trim();if(o===""){n.error({message:"Please enter a search query.",position:"topRight"});return}g(),b();try{const e=await m(o);console.log(e),e.hits.length===0?n.error({message:"Sorry, no images found. Please try again!",position:"topRight"}):h(e.hits)}catch{n.error({message:"Error fetching images. Please try again!",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
