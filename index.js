import{i as a,a as l}from"./assets/vendor-CBLHhzjb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const n=document.querySelector(".gallery"),u=document.querySelector(".form"),f=document.querySelector("input[name='search-text']");document.querySelector(".user-list");const m="33475610-696620aeee3e1938961deeefe",p="https://pixabay.com/api/";n||console.error("Gallery element not found!");u.addEventListener("submit",function(c){c.preventDefault();const r=f.value.trim();if(!r){a.toast.warning({title:"Warning",message:"Please enter a search term.",position:"topRight",timeout:5e3});return}n&&(n.innerHTML=""),l.get(p,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(function(o){const i=o.data.hits;i.length===0&&a.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3});const t=i.map(e=>`
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
          </li>`).join("");n&&(n.innerHTML=t)}).catch(function(o){console.error("Error fetching images:",o),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:5e3})})});
//# sourceMappingURL=index.js.map
