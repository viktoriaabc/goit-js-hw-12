import{a as c,S as d,i as l}from"./assets/vendor-Do60_h77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n={searchForm:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader")};c.defaults.baseURL="https://pixabay.com/api/";const m=a=>{const t={key:"55675620-3b63b7fb21ffc0e94edd19f24",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get("",{params:t}).then(s=>s.data)},p=new d(".gallery a",{captionsData:"alt",captionDelay:250}),g=a=>{const t=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:i,comments:u,downloads:f})=>`<li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${e}"
      />
      <div class="info-wrapper">
      <p class="info">Likes: ${r}</p>
      <p class="info">Views: ${i}</p>
      <p class="info">Comments: ${u}</p>
      <p class="info">Downloads: ${f}</p>
      </div>
    </a>
  </li>`).join("");n.galleryList.insertAdjacentHTML("beforeend",t),p.refresh()};function y(){n.galleryList.innerHTML=""}function h(){n.loader.classList.remove("hidden")}function L(){n.loader.classList.add("hidden")}n.searchForm.addEventListener("submit",b);function b(a){a.preventDefault(),y();const{target:t}=a,s=t.elements["search-text"].value.trim();if(!s){l.warning({message:"Please, enter search query",position:"topRight"});return}h(),m(s).then(({hits:o})=>{if(o.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"plum"});return}g(o),t.reset(),console.log(o)}).catch(o=>{l.error({message:"Error fetch images",position:"topRight"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
