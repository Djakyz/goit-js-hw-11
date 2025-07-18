import{a as l,S as u,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="51374553-10d356351fe3cee6cad66f6b9",f="https://pixabay.com/api/";async function m(r){const o={key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await l.get(f,{params:o})).data}const p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const o=document.querySelector(".gallery"),s=r.map(n=>`
    <li class="gallery-item">
      <a href="${n.largeImageURL}">
        <img src="${n.webformatURL}" alt="${n.tags}" />
      </a>
      <div class="info">
        <p>👍 ${n.likes}</p>
        <p>👁 ${n.views}</p>
        <p>💬 ${n.comments}</p>
        <p>⬇ ${n.downloads}</p>
      </div>
    </li>
  `).join("");o.insertAdjacentHTML("beforeend",s),p.refresh()}function g(){const r=document.querySelector(".gallery");r.innerHTML=""}function h(){document.querySelector(".loader").classList.add("visible")}function L(){document.querySelector(".loader").classList.remove("visible")}const c=document.querySelector(".form"),b=c.elements["search-text"];c.addEventListener("submit",async r=>{r.preventDefault();const o=b.value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search term!"});return}h(),g();try{const s=await m(o);if(s.hits.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(s.hits)}catch(s){i.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(s)}finally{L()}});
//# sourceMappingURL=index.js.map
