import{i as s,a as l}from"./assets/vendor-CBLHhzjb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const u=document.querySelector(".form"),m=document.querySelector("input[name='search-text']"),c=document.querySelector(".user-list"),p="33475610-696620aeee3e1938961deeefe",f="https://pixabay.com/api/";u.addEventListener("submit",function(o){o.preventDefault();const r=m.value.trim();if(!r){s.toast.warning({title:"Warning",message:"Please enter a search term.",position:"topRight",timeout:5e3});return}l.get(f,{params:{key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(i){const n=i.data.hits;if(n.length===0){s.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3}),c.innerHTML="";return}const t=n.map(e=>`
          <li class="gallery-item">
            <a href="${e.largeImageURL}" target="_blank">
              <img src="${e.webformatURL}" alt="${e.tags}" width="300"/>
            </a>
            <div class="info">
              <p><b>Likes:</b> ${e.likes}</p>
              <p><b>Views:</b> ${e.views}</p>
              <p><b>Comments:</b> ${e.comments}</p>
              <p><b>Downloads:</b> ${e.downloads}</p>
            </div>
          </li>`).join("");c.innerHTML=t}).catch(function(i){console.error("Error fetching images:",i),s.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:5e3})})});function g(o){Array.isArray(o)&&o.length===0&&s.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3})}const d=[];g(d);
//# sourceMappingURL=index.js.map
