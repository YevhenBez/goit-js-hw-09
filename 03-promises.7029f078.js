!function(){var e,t=document.querySelector(".form"),n=t.firstElementChild.firstElementChild,i=t.firstElementChild.nextElementSibling.firstElementChild,o=t.lastElementChild.previousElementSibling.firstElementChild,l=0,r=1;function a(t,n){return Math.random()>.3?Promise.resolve({position:r,delay:e}):Promise.reject({position:r,delay:e})}t.addEventListener("input",(function(e){var t={delay:n.value,step:i.value,amount:o.value};localStorage.setItem("data-from-user",JSON.stringify(t))})),t.addEventListener("submit",(function(t){t.preventDefault();var n=localStorage.getItem("data-from-user"),i=JSON.parse(n),o=i.amount;e=Number(i.delay);for(var s=Number(i.step);l<o;){a().then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),l+=1,r+=1,e+=s}}))}();
//# sourceMappingURL=03-promises.7029f078.js.map