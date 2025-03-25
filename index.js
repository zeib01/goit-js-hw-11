import{a as m,S as f,i as o}from"./assets/vendor-DVva8SYe.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="33475610-696620aeee3e1938961deeefe",g="https://pixabay.com/api/";function y(s){return m.get(g,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const h=new f(".gallery a",{captionsData:"alt",captionDelay:250,showCounter:!0}),c=document.querySelector(".gallery");function b(){c.innerHTML=""}function L(s){const r=s.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a href="${n}" class="gallery-link">
            <img src="${i}" alt="${e}" class="gallery-image" />
          </a>
          <div class="info">
          <ul class="baner">
            <li class="baner-li">
              <p class="baner-title">Likes</p>
              <p class="baner-text">${t}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Views</p>
              <p class="baner-text">${a}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Comments</p>
              <p class="baner-text">${u}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Downloads</p>
              <p class="baner-text">${p}</p>
            
              </li>
          </ul>
          </div>
        </li>`).join("");c.innerHTML=r,h.refresh()}const v=document.querySelector(".form"),q=document.querySelector("input[name='search-text']"),l=document.querySelector(".loader");v.addEventListener("submit",function(s){s.preventDefault();const r=q.value.trim();if(!r){o.warning({title:"Warning",message:"Please enter a search term.",position:"topRight",timeout:5e3});return}b(),l.classList.add("visible"),y(r).then(function(i){i.length===0?o.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3}):L(i)}).catch(function(i){console.error("Error fetching images:",i),o.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:5e3})}).finally(()=>{l.classList.remove("visible")})});
//# sourceMappingURL=index.js.map
