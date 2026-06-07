import{a as b,i as l,S as C}from"./assets/vendor-DCKS6daY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function p(i,o){const s={baseURL:"https://pixabay.com/api/",params:{key:"49660701-34943155f6893778b93ecffed",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}};try{return(await b(s)).data}catch(e){l.show({message:`Ooops, something went wrong, try again. ${e}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}}let n=null;const h=document.querySelector(".loader"),m=document.querySelector(".load-more-btn");function y(i){const o=document.querySelector(".gallery");let s=[];i.forEach(e=>{s.push(`<li class="gallery-item">
	<a class="gallery-link" href="${e.webformatURL}">
  <div class="image-wrapper">
    <img 
      class="gallery-image" 
      src="${e.largeImageURL}" 
      alt="${e.tags}" 
    />
    
    <div class="overlay-box">
      <div class="in-list-container">
        <h2 class="in-list-title">Likes</h2>
        <p class="in-list-p">${e.likes}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Views</h2>
        <p class="in-list-p">${e.views}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Comments</h2>
        <p class="in-list-p">${e.comments}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Downloads</h2>
        <p class="in-list-p">${e.downloads}</p>
      </div>
    </div>
  </div>
</a>
   
</li>`)}),o.insertAdjacentHTML("beforeend",`${s.join("")}`),n?n.refresh():n=new C(".gallery a",{captionsData:"alt",captionDelay:250,download:!0})}function S(){const i=document.querySelector(".gallery");i.innerHTML="",n&&(n.destroy(),n=null)}function w(){h.classList.remove("display-none")}function v(){h.classList.add("display-none")}function L(){m.classList.remove("display-none")}function d(){m.classList.add("display-none")}const f=document.querySelector(".form");f.addEventListener("submit",q);const $=document.querySelector(".load-more-btn");$.addEventListener("click",M);let a=1,c,g;async function q(i){i.preventDefault(),w(),S(),d();const o=f.elements["search-text"].value.trim();c=o,g!==c&&(a=1,g=c);try{const{hits:s,totalHits:e}=await p(o,a);if(s.length===0)l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",backgroundColor:"red"});else{y(s);const t=Math.ceil(e/15);a>=t?d():L()}}catch(s){l.show({message:`Ooops, something went wrong, try again. ${s}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}v(),f.reset()}async function M(){a++;const i=document.querySelector(".gallery-item").getBoundingClientRect().height*2+48;w(),d();try{const{hits:o,totalHits:s}=await p(c,a);y(o),window.scrollBy({top:i,behavior:"smooth"});const e=Math.ceil(s/15);a>=e?(l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#fff",backgroundColor:"red"}),d()):L()}catch(o){l.show({message:`Ooops, something went wrong, try again. ${o}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}v()}
//# sourceMappingURL=index.js.map
