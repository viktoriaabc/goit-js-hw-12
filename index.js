import{a as f,i as n,S as w}from"./assets/vendor-Do60_h77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a={searchForm:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};f.defaults.baseURL="https://pixabay.com/api/";const m=async(i,t)=>{try{const{data:o}=await f.get("",{params:{key:"55675620-3b63b7fb21ffc0e94edd19f24",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return o}catch{n.error({message:"No data found"})}},v=new w(".gallery a",{captionsData:"alt",captionDelay:250}),g=i=>{const t=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:l,comments:L,downloads:b})=>`<li class="gallery-item">
    <a class="gallery-link" href="${s}">
      <img
        class="gallery-image"
        src="${o}"
        alt="${e}"
      />
      <div class="info-wrapper">
      <p class="info">Likes: ${r}</p>
      <p class="info">Views: ${l}</p>
      <p class="info">Comments: ${L}</p>
      <p class="info">Downloads: ${b}</p>
      </div>
    </a>
  </li>`).join("");a.galleryList.insertAdjacentHTML("beforeend",t),v.refresh()};function B(){a.galleryList.innerHTML=""}function p(){a.loader.classList.remove("hidden")}function h(){a.loader.classList.add("hidden")}function y(){a.loadMoreBtn.classList.remove("closed")}function d(){a.loadMoreBtn.classList.add("closed")}let c=1,u="";a.searchForm.addEventListener("submit",M);a.loadMoreBtn.addEventListener("click",S);async function M(i){try{i.preventDefault(),B(),d();const{target:t}=i,o=t.elements["search-text"].value.trim();if(!o){n.warning({message:"Please, enter search query",position:"topRight"});return}u=o,c=1,p();const{hits:s,totalHits:e}=await m(u,c);if(s.length===0){n.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"plum"});return}g(s),c*15<e&&y(),t.reset()}catch{n.error({message:"Error fetch images",position:"topRight"})}finally{h()}}async function S(i){c++,d(),p();try{const{hits:t,totalHits:o}=await m(u,c);g(t);const s=a.firstElementChild.getBoundingClientRect().height;scrollBy({top:s*2,behavior:"smooth"}),t.length<15?(d(),n.warning({message:"We're sorry, but you've reached the end of search results.",position:"Center",backgroundColor:"plum"})):y()}catch{n.error({message:"Error fetch images",position:"topRight"})}finally{h()}}
//# sourceMappingURL=index.js.map
