const e=document.querySelector(".form"),t=e.firstElementChild.firstElementChild,l=e.firstElementChild.nextElementSibling.firstElementChild,n=e.lastElementChild.previousElementSibling.firstElementChild;let i,o=0,s=1;function r(e,t){return Math.random()>.3?Promise.resolve({position:s,delay:i}):Promise.reject({position:s,delay:i})}e.addEventListener("input",(function(e){const i={delay:t.value,step:l.value,amount:n.value};localStorage.setItem("data-from-user",JSON.stringify(i))})),e.addEventListener("submit",(e=>{e.preventDefault();const t=localStorage.getItem("data-from-user"),l=JSON.parse(t),n=l.amount;i=Number(l.delay);const a=Number(l.step);for(;o<n;){r().then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),o+=1,s+=1,i+=a}}));
//# sourceMappingURL=03-promises.6619aeaf.js.map
