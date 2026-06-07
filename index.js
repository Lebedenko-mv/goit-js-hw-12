import{a as v,i,S as L}from"./assets/vendor-DCKS6daY.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();async function g(r,s){const o={baseURL:"https://pixabay.com/api/",params:{key:"49660701-34943155f6893778b93ecffed",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:15}};try{return(await v(o)).data}catch(t){i.show({message:`Ooops, something went wrong, try again. ${t}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}}let a=null;const h=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");function m(r){const s=document.querySelector(".gallery");let o=[];r.forEach(t=>{o.push(`<li class="gallery-item">
	<a class="gallery-link" href="${t.webformatURL}">
  <div class="image-wrapper">
    <img 
      class="gallery-image" 
      src="${t.largeImageURL}" 
      alt="${t.tags}" 
    />
    
    <div class="overlay-box">
      <div class="in-list-container">
        <h2 class="in-list-title">Likes</h2>
        <p class="in-list-p">${t.likes}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Views</h2>
        <p class="in-list-p">${t.views}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Comments</h2>
        <p class="in-list-p">${t.comments}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Downloads</h2>
        <p class="in-list-p">${t.downloads}</p>
      </div>
    </div>
  </div>
</a>
   
</li>`)}),s.insertAdjacentHTML("beforeend",`${o.join("")}`),a?a.refresh():a=new L(".gallery a",{captionsData:"alt",captionDelay:250,download:!0})}function C(){const r=document.querySelector(".gallery");r.innerHTML="",a&&(a.destroy(),a=null)}function y(){h.classList.remove("display-none")}function w(){h.classList.add("display-none")}function b(){p.classList.remove("display-none")}function c(){p.classList.add("display-none")}const u=document.querySelector(".form");u.addEventListener("submit",$);const S=document.querySelector(".load-more-btn");S.addEventListener("click",q);let l=1,f="";async function $(r){r.preventDefault();const s=u.elements["search-text"].value.trim();if(!s){i.show({message:"Please enter a search query!",position:"topRight",messageColor:"#fff",backgroundColor:"red"});return}f=s,l=1,C(),c(),y();try{const{hits:o,totalHits:t}=await g(f,l);if(o.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",backgroundColor:"red"});return}m(o);const e=Math.ceil(t/15);l>=e?(c(),i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#fff",backgroundColor:"red"})):b()}catch(o){i.show({message:`Ooops, something went wrong, try again. ${o}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}finally{w(),u.reset()}}async function q(){l++;const r=document.querySelector(".gallery-item"),s=r?r.getBoundingClientRect().height*2+48:0;y(),c();try{const{hits:o,totalHits:t}=await g(f,l);m(o),window.scrollBy({top:s,behavior:"smooth"});const e=Math.ceil(t/15);l>=e?(i.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#fff",backgroundColor:"red"}),c()):b()}catch(o){i.show({message:`Ooops, something went wrong, try again. ${o}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}finally{w()}}
//# sourceMappingURL=index.js.map
