(()=>{"use strict";const t=function(t,e){let c;return function(){c&&clearTimeout(c),c=setTimeout((()=>{c=void 0,t.apply(this,arguments)}),e)}},e=function(t){t.preventDefault();let e=t.target,c=parseInt(e.getAttribute("data-activate-count"));c+=1,e.setAttribute("data-activate-count",c)};document.querySelectorAll(".js-debounce-fast").forEach((c=>c.addEventListener("click",t(e,200)))),document.querySelectorAll(".js-debounce-slow").forEach((c=>c.addEventListener("click",t(e,1e3))))})();
//# sourceMappingURL=bundle.js.map